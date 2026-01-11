import { Phone, PhoneWithScore, TradeOffPair, ComparisonDimension } from "./types";
import { getDimensionValue } from "./scoring";
import { getDimensionDisplayName, getDimensionUnit } from "@/lib/utils";

/**
 * Dimensions where lower values are better
 */
const LOWER_IS_BETTER: ComparisonDimension[] = ["price_usd", "weight_grams"];

/**
 * Calculate trade-offs between two phones for a specific dimension
 */
export function calculateDimensionTradeOff(
    phoneA: Phone,
    phoneB: Phone,
    dimension: ComparisonDimension
): TradeOffPair | null {
    const valueA = getDimensionValue(phoneA, dimension);
    const valueB = getDimensionValue(phoneB, dimension);

    // Can't compare if either is missing data
    if (valueA === undefined || valueB === undefined) {
        return null;
    }

    // No trade-off if values are equal
    if (valueA === valueB) {
        return null;
    }

    const delta = Math.abs(valueA - valueB);
    const lowerIsBetter = LOWER_IS_BETTER.includes(dimension);

    // Determine which phone has the advantage
    let advantagePhoneId: string;
    if (lowerIsBetter) {
        advantagePhoneId = valueA < valueB ? phoneA.id : phoneB.id;
    } else {
        advantagePhoneId = valueA > valueB ? phoneA.id : phoneB.id;
    }

    const advantagePhone = advantagePhoneId === phoneA.id ? phoneA : phoneB;
    const disadvantagePhone = advantagePhoneId === phoneA.id ? phoneB : phoneA;

    const unit = getDimensionUnit(dimension);
    const displayName = getDimensionDisplayName(dimension);

    // Format the explanation
    let explanation: string;
    if (dimension === "price_usd") {
        explanation = `${advantagePhone.name} is $${delta.toFixed(0)} cheaper than ${disadvantagePhone.name}`;
    } else if (dimension === "weight_grams") {
        explanation = `${advantagePhone.name} is ${delta}g lighter than ${disadvantagePhone.name}`;
    } else {
        explanation = `${advantagePhone.name} has ${delta}${unit ? " " + unit : ""} more ${displayName.toLowerCase()} than ${disadvantagePhone.name}`;
    }

    return {
        phone_a_id: phoneA.id,
        phone_b_id: phoneB.id,
        dimension,
        advantage_phone_id: advantagePhoneId,
        delta,
        explanation,
    };
}

/**
 * Generate all pairwise trade-offs between qualified phones
 * Limited to top 2 prioritized dimensions to avoid overwhelming output
 */
export function calculatePairwiseTradeOffs(
    rankedPhones: PhoneWithScore[],
    prioritizedDimensions: ComparisonDimension[],
    maxDimensions: number = 2
): TradeOffPair[] {
    const tradeOffs: TradeOffPair[] = [];

    // Only compare top dimensions
    const dimensionsToCompare = prioritizedDimensions.slice(0, maxDimensions);

    // Generate pairwise comparisons
    for (let i = 0; i < rankedPhones.length; i++) {
        for (let j = i + 1; j < rankedPhones.length; j++) {
            const phoneDataA = rankedPhones[i];
            const phoneDataB = rankedPhones[j];
            if (!phoneDataA || !phoneDataB) continue;
            const phoneA = phoneDataA.phone;
            const phoneB = phoneDataB.phone;

            for (const dimension of dimensionsToCompare) {
                const tradeOff = calculateDimensionTradeOff(phoneA, phoneB, dimension);
                if (tradeOff) {
                    tradeOffs.push(tradeOff);
                }
            }
        }
    }

    return tradeOffs;
}

/**
 * Generate a summary of trade-offs for display
 */
export function summarizeTradeOffs(
    tradeOffs: TradeOffPair[],
    phones: Phone[]
): string[] {
    const summaries: string[] = [];

    // Group trade-offs by phone pair
    const phoneMap = new Map(phones.map(p => [p.id, p]));

    for (const tradeOff of tradeOffs) {
        summaries.push(tradeOff.explanation);
    }

    return summaries;
}

/**
 * Format trade-off for display with gain/sacrifice framing
 */
export function formatTradeOffStatement(
    tradeOff: TradeOffPair,
    phones: Map<string, Phone>
): string {
    const advantagePhone = phones.get(tradeOff.advantage_phone_id);
    const otherPhoneId = tradeOff.phone_a_id === tradeOff.advantage_phone_id
        ? tradeOff.phone_b_id
        : tradeOff.phone_a_id;
    const otherPhone = phones.get(otherPhoneId);

    if (!advantagePhone || !otherPhone) {
        return tradeOff.explanation;
    }

    const unit = getDimensionUnit(tradeOff.dimension);
    const displayName = getDimensionDisplayName(tradeOff.dimension);

    return `${advantagePhone.name} gains ${tradeOff.delta}${unit ? " " + unit : ""} ${displayName.toLowerCase()} vs ${otherPhone.name}`;
}
