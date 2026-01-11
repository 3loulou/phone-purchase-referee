import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { Phone, PhoneWithScore, UserConstraints, ComparisonDimension } from "@/core/referee-engine/types";

// Initialize AI client
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

// ============================================
// SCHEMAS
// ============================================

// Schema for phone specifications from live research
const LivePhoneSpecsSchema = z.object({
    name: z.string().describe("Full official name of the phone"),
    brand: z.string().describe("Manufacturer/brand name"),
    price_usd: z.number().describe("Current US retail price in dollars"),
    battery_mah: z.number().describe("Battery capacity in mAh"),
    camera_mp: z.number().describe("Main camera megapixels"),
    screen_inches: z.number().describe("Screen diagonal size in inches"),
    has_5g: z.boolean().describe("Whether the phone supports 5G"),
    storage_gb: z.number().describe("Base storage capacity in GB"),
    weight_grams: z.number().describe("Weight in grams"),
    processor: z.string().describe("Processor/chipset name"),
    key_strengths: z.array(z.string()).max(3).describe("Top 3 strengths based on reviews"),
    key_weaknesses: z.array(z.string()).max(3).describe("Top 3 weaknesses based on reviews"),
    review_summary: z.string().describe("One paragraph summary of expert reviews"),
});

export type LivePhoneSpecs = z.infer<typeof LivePhoneSpecsSchema>;

// Schema for AI comparison analysis
const AIComparisonSchema = z.object({
    winner_by_category: z.array(z.object({
        category: z.string().describe("Category name like 'Battery Life', 'Camera Quality'"),
        winner: z.string().describe("Phone name that wins"),
        reason: z.string().describe("Brief explanation"),
        margin: z.enum(["slight", "moderate", "significant"]).describe("How big the difference is"),
    })),
    conditional_verdicts: z.array(z.object({
        phone_name: z.string(),
        verdict: z.string().describe("Conditional statement starting with 'optimal IF'"),
        best_for: z.string().describe("User type this phone is best for"),
    })),
    trade_off_summary: z.string().describe("2-3 sentence summary of key trade-offs"),
    recommendation_logic: z.string().describe("Explanation of how priorities affect the recommendation"),
    sources_used: z.array(z.string()).describe("Names of review sites/sources referenced"),
});

export type AIComparison = z.infer<typeof AIComparisonSchema>;

// Schema for natural language query parsing
const ParsedQuerySchema = z.object({
    budget: z.number().optional().describe("Maximum budget extracted from query"),
    priorities: z.array(z.enum([
        "battery_mah", "camera_mp", "screen_inches",
        "storage_gb", "price_usd", "weight_grams", "processor_benchmark"
    ])).describe("Dimensions mentioned, in order of importance"),
    require_5g: z.boolean().describe("Whether 5G was mentioned as required"),
    specific_phones: z.array(z.string()).describe("Any specific phone models mentioned"),
    use_case: z.string().optional().describe("Intended use case if mentioned (gaming, photography, etc)"),
});

export type ParsedQuery = z.infer<typeof ParsedQuerySchema>;

// ============================================
// GROUNDING SOURCE TYPES
// ============================================

export interface GroundingSource {
    uri: string;
    title: string;
}

export interface AIResponse<T> {
    data: T;
    sources: GroundingSource[];
    searchQueries: string[];
    processingTime: number;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Sanitize JSON string by escaping control characters
 */
function sanitizeJSON(text: string): string {
    // Escape control characters properly for JSON
    return text
        .replace(/\\/g, '\\\\')  // Escape backslashes first
        .replace(/\n/g, '\\n')     // Escape newlines
        .replace(/\r/g, '\\r')     // Escape carriage returns
        .replace(/\t/g, '\\t')     // Escape tabs
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');  // Remove other control chars
}

// ============================================
// CORE FUNCTIONS
// ============================================

/**
 * Research a phone using AI with Google Search grounding
 * Gets real-time specs and review summaries from the web
 */
export async function researchPhone(phoneName: string): Promise<AIResponse<LivePhoneSpecs>> {
    const startTime = Date.now();

    const prompt = `
Research the smartphone "${phoneName}" and provide current, accurate information.

Find from reliable sources (GSMArena, The Verge, CNET, etc):
1. Current US retail price (as of January 2026)
2. Complete technical specifications
3. Summary of expert reviews - what do reviewers praise and criticize?
4. Key strengths and weaknesses based on real user feedback

Be precise with numbers. Use the latest available data.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            tools: [{ googleSearch: {} }],
            responseMimeType: "application/json",
            responseJsonSchema: zodToJsonSchema(LivePhoneSpecsSchema),
        },
    });

    const sources = extractSources(response);
    const searchQueries = response.candidates?.[0]?.groundingMetadata?.webSearchQueries ?? [];
    const data = LivePhoneSpecsSchema.parse(JSON.parse(sanitizeJSON(response.text ?? "{}")));

    return {
        data,
        sources,
        searchQueries,
        processingTime: Date.now() - startTime,
    };
}

/**
 * Generate AI-powered comparison analysis with conditional verdicts
 */
export async function generateAIComparison(
    phones: PhoneWithScore[],
    userPriorities: ComparisonDimension[]
): Promise<AIResponse<AIComparison>> {
    const startTime = Date.now();

    const priorityNames: Record<ComparisonDimension, string> = {
        battery_mah: "Battery Life",
        camera_mp: "Camera Quality",
        screen_inches: "Screen Size",
        storage_gb: "Storage Capacity",
        price_usd: "Value for Money",
        weight_grams: "Lightweight Design",
        processor_benchmark: "Performance",
    };

    const priorityList = userPriorities.map((p, i) => `${i + 1}. ${priorityNames[p]}`).join("\n");

    const phoneSpecs = phones.map(p => `
**${p.phone.name}** ($${p.phone.price_usd})
- Battery: ${p.phone.specs.battery_mah ?? "N/A"} mAh
- Camera: ${p.phone.specs.camera_mp ?? "N/A"} MP
- Screen: ${p.phone.specs.screen_inches ?? "N/A"}"
- Storage: ${p.phone.specs.storage_gb ?? "N/A"} GB
- 5G: ${p.phone.specs.has_5g ? "Yes" : "No"}
- Weight: ${p.phone.specs.weight_grams ?? "N/A"}g
`).join("\n");

    const prompt = `
You are a smartphone expert. Analyze these phones based on the user's priorities.

**User's Priorities (in order of importance):**
${priorityList}

**Phones to Compare:**
${phoneSpecs}

**Instructions:**
1. Determine the winner for each relevant category based on user priorities
2. Generate conditional verdicts for each phone using "optimal IF" phrasing
3. NEVER declare an absolute "best" phone - all recommendations must be conditional
4. Consider real-world performance, not just specs (use Google Search for benchmarks/reviews)
5. Explain the trade-offs clearly

Remember: The user's priorities determine which phone is "best" for THEM. A different user with different priorities would get a different recommendation.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            tools: [{ googleSearch: {} }],
            responseMimeType: "application/json",
            responseJsonSchema: zodToJsonSchema(AIComparisonSchema),
        },
    });

    const sources = extractSources(response);
    const searchQueries = response.candidates?.[0]?.groundingMetadata?.webSearchQueries ?? [];
    const data = AIComparisonSchema.parse(JSON.parse(sanitizeJSON(response.text ?? "{}")));

    return {
        data,
        sources,
        searchQueries,
        processingTime: Date.now() - startTime,
    };
}

/**
 * Parse natural language query into structured constraints
 * Example: "I need a phone under $600 with amazing battery for travel"
 */
export async function parseNaturalQuery(query: string): Promise<AIResponse<ParsedQuery>> {
    const startTime = Date.now();

    const prompt = `
Parse this user query into structured phone search constraints:

"${query}"

Extract:
- Budget limit (if mentioned)
- Priority dimensions in order of importance mentioned
- Whether 5G is required
- Any specific phone models mentioned
- Use case if mentioned (gaming, photography, business, travel, etc)

Dimension mapping:
- battery/power/long-lasting → battery_mah
- camera/photo/video → camera_mp
- screen/display → screen_inches
- storage/space/memory → storage_gb
- cheap/affordable/value/price → price_usd
- light/lightweight/portable → weight_grams
- fast/performance/gaming → processor_benchmark
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseJsonSchema: zodToJsonSchema(ParsedQuerySchema),
        },
    });

    const data = ParsedQuerySchema.parse(JSON.parse(sanitizeJSON(response.text ?? "{}")));

    return {
        data,
        sources: [],
        searchQueries: [],
        processingTime: Date.now() - startTime,
    };
}

/**
 * Generate enhanced conditional statement for a phone
 * Uses Google Search for real-world context
 */
export async function generateEnhancedVerdict(
    phone: Phone,
    rank: number,
    competitors: string[],
    priorities: ComparisonDimension[]
): Promise<string> {
    const priorityNames: Record<ComparisonDimension, string> = {
        battery_mah: "battery life",
        camera_mp: "camera quality",
        screen_inches: "screen size",
        storage_gb: "storage",
        price_usd: "value",
        weight_grams: "portability",
        processor_benchmark: "performance",
    };

    const topPriority = priorities[0] ? priorityNames[priorities[0]] : "overall value";

    const prompt = `
Generate a conditional recommendation for ${phone.name}.

Context:
- This phone ranked #${rank} out of ${competitors.length + 1} options
- User's top priority: ${topPriority}
- Competing against: ${competitors.join(", ")}
- Price: $${phone.price_usd}
- Key specs: ${phone.specs.battery_mah}mAh battery, ${phone.specs.camera_mp}MP camera

Write ONE sentence in this format:
"${phone.name} is optimal IF [specific condition based on what makes this phone uniquely good]"

Be specific. Reference real strengths. Do NOT use generic phrases.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            tools: [{ googleSearch: {} }],
        },
    });

    return response.text ?? `${phone.name} is optimal IF it matches your specific requirements`;
}

/**
 * Get live price and availability check
 */
export async function checkLivePrice(phoneName: string): Promise<{
    currentPrice: number;
    availability: string;
    deals: string[];
}> {
    const prompt = `
Check the current US price and availability for "${phoneName}" as of January 2026.

Find:
1. Current retail price at major retailers (Amazon, Best Buy, carrier stores)
2. Availability status
3. Any current deals or discounts

Be specific with prices and sources.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            tools: [{ googleSearch: {} }],
            responseMimeType: "application/json",
            responseJsonSchema: zodToJsonSchema(z.object({
                currentPrice: z.number(),
                availability: z.string(),
                deals: z.array(z.string()),
            })),
        },
    });

    return JSON.parse(sanitizeJSON(response.text ?? '{"currentPrice": 0, "availability": "unknown", "deals": []}'));
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function extractSources(response: unknown): GroundingSource[] {
    const sources: GroundingSource[] = [];

    // @ts-expect-error - accessing nested grounding metadata
    const chunks = response?.candidates?.[0]?.groundingMetadata?.groundingChunks;

    if (Array.isArray(chunks)) {
        for (const chunk of chunks) {
            if (chunk?.web?.uri) {
                sources.push({
                    uri: chunk.web.uri,
                    title: chunk.web.title ?? "Source",
                });
            }
        }
    }

    return sources;
}

// Re-export for convenience
export { LivePhoneSpecsSchema, AIComparisonSchema, ParsedQuerySchema };
