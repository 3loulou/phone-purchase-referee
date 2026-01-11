import { Phone, UserConstraints, ComparisonDimension, PhoneWithScore } from "./types";

/**
 * Get the raw value of a dimension from a phone
 */
export function getDimensionValue(
    phone: Phone,
    dimension: ComparisonDimension
): number | undefined {
    if (dimension === "price_usd") {
        return phone.price_usd;
    }

    const specKey = dimension as keyof typeof phone.specs;
    const value = phone.specs[specKey];

    if (typeof value === "number") {
        return value;
    }

    return undefined;
}

/**
 * Normalize a score to 0-1 range based on min/max across phones
 * Higher is better for all dimensions EXCEPT:
 * - price_usd (lower is better)
 * - weight_grams (lower is better)
 */
export function normalizeScore(
    value: number,
    min: number,
    max: number,
    lowerIsBetter: boolean = false
): number {
    if (min === max) return 0.5; // All values are the same

    const normalized = (value - min) / (max - min);

    // Invert for dimensions where lower is better
    return lowerIsBetter ? 1 - normalized : normalized;
}

/**
 * Dimensions where lower values are better
 */
const LOWER_IS_BETTER: ComparisonDimension[] = ["price_usd", "weight_grams"];

/**
 * Calculate normalized scores for all prioritized dimensions across all phones
 */
export function calculateDimensionScores(
    phones: Phone[],
    prioritizedDimensions: ComparisonDimension[]
): Map<string, Record<string, number>> {
    const scores = new Map<string, Record<string, number>>();

    // Initialize scores map for each phone
    for (const phone of phones) {
        scores.set(phone.id, {});
    }

    // Calculate normalized score for each dimension
    for (const dimension of prioritizedDimensions) {
        // Get all values for this dimension
        const values: { phoneId: string; value: number }[] = [];

        for (const phone of phones) {
            const value = getDimensionValue(phone, dimension);
            if (value !== undefined) {
                values.push({ phoneId: phone.id, value });
            }
        }

        if (values.length === 0) continue;

        // Find min and max
        const allValues = values.map(v => v.value);
        const min = Math.min(...allValues);
        const max = Math.max(...allValues);

        // Calculate normalized scores
        const lowerIsBetter = LOWER_IS_BETTER.includes(dimension);

        for (const { phoneId, value } of values) {
            const normalized = normalizeScore(value, min, max, lowerIsBetter);
            const phoneScores = scores.get(phoneId);
            if (phoneScores) {
                phoneScores[dimension] = normalized;
            }
        }
    }

    return scores;
}

/**
 * Calculate weighted overall score based on priority order
 * First priority gets highest weight, decreasing for subsequent priorities
 */
export function calculateWeightedScore(
    dimensionScores: Record<string, number>,
    prioritizedDimensions: ComparisonDimension[]
): number {
    let totalWeight = 0;
    let weightedSum = 0;

    // Weights decrease exponentially: 1, 0.5, 0.25, 0.125, ...
    for (let i = 0; i < prioritizedDimensions.length; i++) {
        const dimension = prioritizedDimensions[i];
        if (dimension === undefined) continue;
        const score = dimensionScores[dimension];

        if (score !== undefined) {
            const weight = Math.pow(0.5, i);
            weightedSum += score * weight;
            totalWeight += weight;
        }
    }

    return totalWeight > 0 ? weightedSum / totalWeight : 0;
}

/**
 * Generate conditional statement for a phone based on its strengths
 */
export function generateConditionalStatement(
    phone: Phone,
    dimensionScores: Record<string, number>,
    prioritizedDimensions: ComparisonDimension[],
    rank: number
): string {
    // Find the phone's strongest dimension
    let strongestDimension: ComparisonDimension | null = null;
    let highestScore = -1;

    for (const dimension of prioritizedDimensions) {
        const score = dimensionScores[dimension];
        if (score !== undefined && score > highestScore) {
            highestScore = score;
            strongestDimension = dimension;
        }
    }

    // Map dimension to readable name
    const dimensionNames: Record<ComparisonDimension, string> = {
        battery_mah: "battery life",
        camera_mp: "camera quality",
        screen_inches: "screen size",
        storage_gb: "storage capacity",
        weight_grams: "lightweight design",
        processor_benchmark: "performance",
        price_usd: "value for money",
    };

    const strengthName = strongestDimension
        ? dimensionNames[strongestDimension]
        : "balanced features";

    if (rank === 1) {
        return `${phone.name} is optimal IF ${strengthName} is your top priority`;
    }

    return `${phone.name} is a strong choice IF ${strengthName} matters and you want alternative options`;
}

/**
 * Score and rank all qualified phones
 */
export function scoreAndRankPhones(
    phones: Phone[],
    constraints: UserConstraints
): PhoneWithScore[] {
    if (phones.length === 0) return [];

    // Calculate dimension scores for all phones
    const dimensionScores = calculateDimensionScores(
        phones,
        constraints.prioritized_dimensions
    );

    // Calculate weighted scores and create PhoneWithScore objects
    const phonesWithScores: { phone: Phone; scores: Record<string, number>; weighted: number }[] = [];

    for (const phone of phones) {
        const scores = dimensionScores.get(phone.id) || {};
        const weighted = calculateWeightedScore(scores, constraints.prioritized_dimensions);
        phonesWithScores.push({ phone, scores, weighted });
    }

    // Sort by weighted score (descending)
    phonesWithScores.sort((a, b) => b.weighted - a.weighted);

    // Create final PhoneWithScore objects with ranks
    return phonesWithScores.map((item, index) => ({
        phone: item.phone,
        dimension_scores: item.scores,
        overall_rank: index + 1,
        conditional_statement: generateConditionalStatement(
            item.phone,
            item.scores,
            constraints.prioritized_dimensions,
            index + 1
        ),
    }));
}
