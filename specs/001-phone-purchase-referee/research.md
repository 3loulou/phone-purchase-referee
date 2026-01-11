# Research: Phone Purchase Referee

**Date**: 2026-01-07  
**Purpose**: Resolve technical unknowns and establish best practices for deterministic decision engine with Gemini integration

## Decision 1: Language & Runtime

**Decision**: TypeScript with Next.js 16 (App Router) + Node.js 20+ runtime

**Rationale**:
- TypeScript provides compile-time type safety for deterministic logic validation
- Next.js 16 App Router enables Server Components for logic separation
- Strong ecosystem for web applications with React Server Components
- Gemini SDK available via `@google/genai` npm package with full TypeScript support
- Zod integration for runtime validation and JSON schema generation
- Single codebase for frontend + backend (full-stack TypeScript)
- Easy deployment to Vercel with zero config

**Alternatives Considered**:
- Python + FastAPI: Would split spec logic between languages
- CLI-only: Limits demo appeal, web UI better for product showcase
- Firebase-first: Infrastructure complexity before proving logic
- Rust: Overengineering for MVP, steeper learning curve

**Trade-offs**:
- Gain: Type safety, Gemini SDK integration, unified frontend/backend, great demo story
- Sacrifice: Slightly larger deployment footprint vs CLI (acceptable for web app)

---

## Decision 2: Primary Dependencies

**Decision**: Next.js 16, Gemini SDK (@google/genai), Zod, Tailwind CSS, Vitest

**Rationale**:
- **Next.js 16**: App Router with Server Components, Form component for progressive enhancement
- **@google/genai**: Official Gemini SDK with Google Search grounding and structured outputs
- **Zod**: Runtime validation + JSON schema generation for Gemini structured outputs
- **zodToJsonSchema**: Converts Zod schemas to JSON Schema for Gemini API
- **Tailwind CSS**: Utility-first CSS for rapid UI development without design system overkill
- **Vitest**: Fast TS-native testing framework

**Dependency Justification**:
- Gemini SDK enables Google Search grounding for phone research agent (facts, not opinions)
- Zod ensures runtime type safety at system boundaries (user input, phone database, Gemini responses)
- Next.js provides full-stack TypeScript with Server Actions (no separate API layer needed)
- Tailwind enables minimal styling focused on information clarity
- Minimal core dependencies reduce attack surface

**Alternatives Considered**:
- Express + React: More boilerplate, split frontend/backend
- Vue/Svelte: Team familiarity with React, Next.js maturity
- MUI/Chakra: Design system overkill for referee tool
- Jest: Slower than Vitest, less native ESM support

**Trade-offs**:
- Gain: Official SDK support, structured output validation, progressive enhancement, unified stack
- Sacrifice: Gemini API calls cost money (acceptable - use caching, only for research agent)

---

## Decision 2: Phone Data Storage Strategy + Research Agent

**Decision**: JSON flat file (phones.json) + Gemini research agent for phone data gathering

**Rationale**:
- JSON file allows manual curation AND automated research via Gemini Google Search grounding
- Gemini research agent gathers factual phone data with citations (no opinions, no recommendations)
- Structured output enforces strict schema: chipset_class, camera_strength, battery_life (categorical)
- Flat file storage enables offline-capable operation once database populated
- Git-trackable format - phone database changes visible in version control
- Sufficient for 50-200 phone scale target

**Research Agent Architecture** (per gemini.md guidance):
```typescript
// Phase 1: Research Agent (Gemini with Google Search grounding)
const researchPrompt = `
You are a research agent. Gather factual phone information only.

Rules:
- Do NOT recommend or compare phones
- Do NOT draw conclusions or rank
- Use neutral language, prefer consensus from multiple sources
- If data uncertain, note in confidence_notes

Output strict JSON matching this schema:
{
  model: string,
  launch_year: string,
  chipset_class: "low" | "mid" | "high",
  camera_strength: "weak" | "average" | "strong",
  gaming_performance: "weak" | "average" | "strong",
  battery_life: "weak" | "average" | "strong",
  software_experience: "clean" | "moderate" | "heavy",
  has_ads: boolean,
  update_policy: "poor" | "average" | "good",
  known_issues: string[],
  confidence_notes: string[]
}
`;

// Use Gemini with Google Search grounding + structured output
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: `Research phone: ${phoneModel}`,
  config: {
    tools: [{ googleSearch: {} }],
    responseMimeType: "application/json",
    responseJsonSchema: zodToJsonSchema(phoneResearchSchema),
    systemInstruction: researchPrompt,
  },
});
```

**Alternatives Considered**:
- Manual data entry only: Time-consuming, doesn't scale to 50-200 phones
- Real-time API integration: Violates offline-capable constraint, introduces external dependencies
- Automated scraping: Data quality risk, legal concerns, no source citations

**Trade-offs**:
- Gain: Fast phone database population, Google Search citations, structured categorical data
- Sacrifice: Gemini API costs during initial research (one-time per phone, then cached locally)

---

## Decision 3: Referee Engine Architecture

**Decision**: Rule-based deterministic engine with explicit scoring functions, NOT LLM-based decision logic

**Rationale**:
- Constitution Principle IV requires deterministic logic: "given identical inputs, produces identical outputs"
- SC-010 mandates reproducibility: "given identical constraints and phone data, system produces identical recommendations"
- Rule-based approach enables full traceability (FR-012): users can inspect exact scoring/ranking logic
- **Gemini ONLY used for explanation generation, NOT for decision logic**
- Scoring functions unit tested with property-based testing

**Separation of Concerns**:
1. **Data Gathering** (Gemini + Google Search): Research agent populates phone database with facts
2. **Decision Logic** (Pure TypeScript): Deterministic scoring, constraint matching, trade-off calculation
3. **Explanation Generation** (Gemini): Convert structured verdict into natural language (post-decision only)

**Core Logic Flow**:
```typescript
// 1. Parse user constraints (pure TypeScript, Zod validation)
const constraints = userConstraintsSchema.parse(cliInput);

// 2. Load phone database (JSON file, cached in memory)
const phones = await loadPhoneDatabase();

// 3. Apply constraint filters (pure TypeScript, deterministic)
const { qualified, eliminated } = applyConstraints(phones, constraints);

// 4. Score qualified phones (pure TypeScript, explicit algorithm)
const scored = scorePhones(qualified, constraints.priorities);

// 5. Generate trade-offs (pure TypeScript, pairwise math)
const tradeOffs = calculateTradeOffs(scored, constraints.priorities);

// 6. Generate conditional statements (Gemini explanation generator)
const explanations = await generateExplanations(scored, tradeOffs);
```

**Why Gemini for Explanation Only**:
- gemini.md specifies: "Explanation Generation Prompt: You are explaining a verdict decided by Referee Engine. Do NOT change the verdict. Do NOT add new reasoning."
- Gemini converts structured data (scores, trade-offs) into natural language
- Deterministic logic remains testable and auditable
- Explanation is UI layer, not decision layer

**Alternatives Considered**:
- LLM-based ranking: Non-deterministic, violates constitution, expensive, not explainable
- Full manual templates: Too rigid, poor UX for dynamic trade-off descriptions
- ML ranking model: Requires training data, overkill for rule-based domain

**Trade-offs**:
- Gain: Determinism, explainability, testability, constitutional compliance, better UX via natural language
- Sacrifice: Gemini API cost for explanation generation (acceptable - cached per comparison)

---

## Decision 4: Testing Strategy

**Decision**: Vitest with @fast-check/vitest for property-based testing

**Rationale**:
- Vitest is faster than Jest, native ESM support, TypeScript-first
- @fast-check enables property-based testing for constitutional compliance
- Contract tests validate end-to-end flows match acceptance scenarios from spec
- Property tests ensure invariants: always ≥2 options (or explain why not), zero absolute recommendations

**Key Properties to Test**:
- Given constraint set C and phone database P, referee(C, P) == referee(C, P) (reproducibility)
- For all outputs O, O contains no phrases like "best phone" without conditional qualifier
- For all eliminated phones E, E has explicit rejection reason
- If qualifying_phones(C) ≥ 2, output compares all pairs for trade-offs

**Alternatives Considered**:
- Jest: Slower than Vitest, less native TypeScript support
- Manual test cases only: Insufficient coverage for combinatorial constraint space
- Snapshot testing: Brittle when phone database updates

**Trade-offs**:
- Gain: High confidence in edge case handling, fast test execution, constitutional compliance validation
- Sacrifice: Learning curve for fast-check (acceptable - property tests critical for determinism)

---

## Decision 5: Explanation Generation Approach

**Decision**: Gemini-based explanation generation (post-decision only) + templates for structured parts

**Rationale** (per gemini.md guidance):
- **Elimination reasons**: Template-based (deterministic, e.g., "Exceeds budget by $X")
- **Trade-off descriptions**: Gemini explanation prompt (natural language for "gains X but sacrifices Y")
- **Conditional statements**: Gemini explanation prompt with strict rules (no verdict changes, no new reasoning)

**Gemini Explanation Prompt** (from gemini.md):
```typescript
const explanationPrompt = `
You are explaining a verdict decided by a Referee Engine.

Rules:
- Do NOT change the verdict
- Do NOT add new reasoning
- Keep explanations under 3 lines each
- Use clear, non-marketing language
- Explicitly mention trade-offs

Generate:
- Winner explanation
- Alternative explanation
- Referee note (1-2 sentences)
`;

// Input: Structured data from referee engine
const explanationInput = {
  winner: { phone: "Pixel 8 Pro", scores: {...}, rank: 1 },
  alternative: { phone: "OnePlus 12", scores: {...}, rank: 2 },
  tradeOffs: [{ dimension: "battery", advantage: "OnePlus 12", delta: 350 }],
};

// Output: Natural language explanation
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: JSON.stringify(explanationInput),
  config: {
    systemInstruction: explanationPrompt,
    temperature: 0.1, // Low temperature for consistent phrasing
  },
});
```

**Alternatives Considered**:
- Pure templates: Too rigid, poor UX for dynamic trade-offs
- LLM for full verdict: Non-deterministic, violates constitution
- Free-form string concatenation: Error-prone, inconsistent

**Trade-offs**:
- Gain: Natural language quality, better UX, consistent phrasing via low temperature
- Sacrifice: Gemini API cost per comparison (acceptable - explanations are final UI layer)

---

## Decision 6: CLI Interface Design

**Decision**: Commander.js with three primary commands - `compare`, `select`, `analyze`

**Rationale**:
- Matches spec modes: constraint-first (FR-006), user-selected (FR-007), sensitivity (FR-008)
- Commander.js provides type-safe option parsing with TypeScript
- Subcommands improve discoverability vs flags

**Command Signatures**:
```bash
refree compare --budget 700 --priority battery --priority camera --require 5g
refree select "iPhone 15 Pro" "Samsung S24" "Pixel 8"
refree analyze --adjust budget=800  # Sensitivity analysis (P3 feature)
refree research "Samsung S24 Ultra"  # Admin: populate database via Gemini research agent
```

**Output Formats**:
- Default: Human-readable text with conditional phrasing
- `--json` flag: Structured JSON for programmatic consumption
- `--verbose` flag: Include full decision audit trail and Gemini citations

**Alternatives Considered**:
- yargs: More complex API, unnecessary features
- Interactive prompts: Contradicts "under 3 minutes" success criterion

**Trade-offs**:
- Gain: Clear command semantics, type safety, testable via CLI invocation
- Sacrifice: Users must learn command syntax (mitigated by good help text)
- Web UI: Out of scope, violates offline-capable constraint

**Trade-offs**:
- Gain: Clear command semantics, auto-documented interface, testable via CLI invocation
- Sacrifice: Users must learn command syntax (mitigated by good help text)

---

## Best Practices Applied

### TypeScript Development
- Strict mode enabled (tsconfig strict: true) for maximum type safety
- Zod schemas for runtime validation at system boundaries (CLI input, phone database, Gemini responses)
- Type guards for narrowing union types (e.g., RejectionReason enum)
- Explicit error types (custom Error subclasses) for traceable failure modes
- No `any` types allowed - use `unknown` with type guards

### Gemini Integration (per gemini.md)
- **Research Agent**: Google Search grounding + structured output enforces factual data only
- **Explanation Generator**: Low temperature (0.1) for consistent phrasing, strict system instructions
- **No LLM in Decision Logic**: Gemini ONLY for data gathering and post-decision explanations
- **Citation Tracking**: Store groundingMetadata for transparency (show sources when --verbose flag used)
- **Cost Control**: Cache Gemini responses, research agent runs once per phone then stores in database

### Testing
- Separate unit/integration/contract test directories matching project structure
- Property-based tests for decision engine invariants (@fast-check/vitest)
- Contract tests validate acceptance scenarios from spec.md
- Test fixtures for phone database (small curated set for fast tests)
- Gemini mocked in unit tests (no API calls), real in integration tests

### Documentation
- TSDoc comments for public APIs (compatible with TypeDoc generator)
- README.md with quickstart examples for both comparison modes
- ARCHITECTURE.md explaining referee engine logic flow and scoring functions
- Gemini prompt templates documented in code comments

### Determinism Guarantees
- No Math.random() or crypto.randomUUID() in decision logic
- No Date.now() dependencies in decision logic (only in output metadata)
- Explicit sort key functions (Array.sort with compare function, not default)
- Readonly types for constraint/result models (immutability via TypeScript `as const`)
- Gemini temperature=0.1 for explanation generation (near-deterministic phrasing)

### Gemini-Specific Patterns

**Research Agent Pattern** (from gemini.md):
```typescript
// 1. Define strict Zod schema for phone research
const phoneResearchSchema = z.object({
  model: z.string(),
  launch_year: z.string(),
  chipset_class: z.enum(["low", "mid", "high"]),
  camera_strength: z.enum(["weak", "average", "strong"]),
  battery_life: z.enum(["weak", "average", "strong"]),
  // ... other categorical fields
  known_issues: z.array(z.string()),
  confidence_notes: z.array(z.string()),
});

// 2. System instruction enforces fact-only research
const researchInstruction = `
You are a research agent. Gather factual phone information only.
- Do NOT recommend or compare
- Do NOT draw conclusions
- Use neutral language
- If uncertain, add to confidence_notes
`;

// 3. Call Gemini with Google Search grounding
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: `Research phone: ${phoneModel}`,
  config: {
    tools: [{ googleSearch: {} }],
    responseMimeType: "application/json",
    responseJsonSchema: zodToJsonSchema(phoneResearchSchema),
    systemInstruction: researchInstruction,
  },
});

// 4. Validate response with Zod (runtime type safety)
const phoneData = phoneResearchSchema.parse(JSON.parse(response.text));

// 5. Store grounding metadata for citation tracking
const citations = response.candidates[0]?.groundingMetadata?.groundingChunks;
```

**Explanation Generator Pattern** (from gemini.md):
```typescript
// 1. Define explanation input (structured data from referee engine)
interface ExplanationInput {
  winner: PhoneWithScore;
  alternatives: PhoneWithScore[];
  tradeOffs: TradeOffPair[];
}

// 2. System instruction enforces no verdict changes
const explanationInstruction = `
You are explaining a verdict decided by a Referee Engine.
- Do NOT change the verdict
- Do NOT add new reasoning
- Keep explanations under 3 lines each
- Use clear, non-marketing language
- Explicitly mention trade-offs
`;

// 3. Call Gemini with low temperature (consistency)
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: JSON.stringify(explanationInput),
  config: {
    systemInstruction: explanationInstruction,
    temperature: 0.1, // Near-deterministic phrasing
  },
});

// 4. Parse and validate explanation structure
// Ensure no new recommendations added, only formatting of existing verdict
```

---

## Open Questions for Phase 1

None - all technical unknowns resolved. Ready to proceed to data model design.

**Gemini Integration Summary**:
- Research agent: One-time per phone, populates database with Google Search citations
- Explanation generator: Per comparison, converts structured verdict to natural language
- Decision logic: Pure TypeScript, no LLM involvement (constitutional compliance)
- Cost estimate: ~$0.01 per phone research + ~$0.001 per comparison explanation (Gemini 2.5 Flash pricing)
