import {
    Phone,
    UserConstraints,
    ComparisonResult,
    ComparisonMetadata
} from "./types";
import { applyAllRules, validateConstraints } from "./rules";
import { scoreAndRankPhones } from "./scoring";
import { calculatePairwiseTradeOffs } from "./tradeoffs";
import { generateSensitivityRules } from "./sensitivity";
import { loadPhoneDatabase } from "@/lib/utils";

/**
 * Main referee engine version
 */
export const REFEREE_ENGINE_VERSION = "1.0.0";

/**
 * Generate phone database version hash
 */
function getPhoneDatabaseVersion(phones: Phone[]): string {
    // Simple hash based on count and first/last phone IDs
    const ids = phones.map(p => p.id).sort();
    return `v1-${phones.length}-${ids[0]?.slice(0, 4) || 'empty'}`;
}

/**
 * Evaluate phones against user constraints (Constraint-First Mode)
 * 
 * This is the main entry point for the referee engine.
 * It applies all rules, scores qualified phones, generates trade-offs,
 * and produces sensitivity analysis.
 */
export function evaluatePhones(
    phones: Phone[],
    constraints: UserConstraints
): ComparisonResult {
    const startTime = performance.now();

    // Validate constraints
    const errors = validateConstraints(constraints);
    if (errors.length > 0) {
        throw new Error(`Invalid constraints: ${errors.join(", ")}`);
    }

    // Step 1: Apply elimination rules
    const [qualifiedPhones, eliminatedPhones] = applyAllRules(phones, constraints);

    // Step 2: Score and rank qualified phones
    const rankedPhones = scoreAndRankPhones(qualifiedPhones, constraints);

    // Step 3: Calculate trade-offs between qualified phones
    const tradeOffs = calculatePairwiseTradeOffs(
        rankedPhones,
        constraints.prioritized_dimensions
    );

    // Step 4: Generate sensitivity analysis
    const sensitivityRules = generateSensitivityRules(
        phones,
        constraints,
        rankedPhones
    );

    const endTime = performance.now();

    // Build metadata
    const metadata: ComparisonMetadata = {
        timestamp: new Date().toISOString(),
        phone_database_version: getPhoneDatabaseVersion(phones),
        referee_engine_version: REFEREE_ENGINE_VERSION,
        execution_time_ms: Math.round(endTime - startTime),
    };

    return {
        qualified_phones: rankedPhones,
        eliminated_phones: eliminatedPhones,
        trade_offs: tradeOffs,
        sensitivity_rules: sensitivityRules,
        constraints_used: constraints,
        metadata,
    };
}

/**
 * Evaluate user-selected phones (User-Selected Mode)
 * 
 * Skip constraint filtering and directly compare the selected phones.
 */
export function evaluateSelectedPhones(
    selectedPhoneIds: string[],
    prioritizedDimensions: UserConstraints["prioritized_dimensions"]
): ComparisonResult {
    const startTime = performance.now();

    // Load phone database
    const allPhones = loadPhoneDatabase();

    // Get selected phones
    const selectedPhones = allPhones.filter(p => selectedPhoneIds.includes(p.id));

    if (selectedPhones.length < 2) {
        throw new Error("At least 2 phones are required for comparison");
    }

    // Create minimal constraints for scoring
    const constraints: UserConstraints = {
        prioritized_dimensions: prioritizedDimensions,
        region: "US",
    };

    // Score and rank the selected phones
    const rankedPhones = scoreAndRankPhones(selectedPhones, constraints);

    // Calculate trade-offs
    const tradeOffs = calculatePairwiseTradeOffs(
        rankedPhones,
        prioritizedDimensions
    );

    // Generate sensitivity (priority reordering only)
    const sensitivityRules = generateSensitivityRules(
        selectedPhones,
        constraints,
        rankedPhones
    );

    const endTime = performance.now();

    const metadata: ComparisonMetadata = {
        timestamp: new Date().toISOString(),
        phone_database_version: getPhoneDatabaseVersion(allPhones),
        referee_engine_version: REFEREE_ENGINE_VERSION,
        execution_time_ms: Math.round(endTime - startTime),
    };

    return {
        qualified_phones: rankedPhones,
        eliminated_phones: [], // No eliminations in user-selected mode
        trade_offs: tradeOffs,
        sensitivity_rules: sensitivityRules,
        constraints_used: constraints,
        metadata,
    };
}

// Re-export types for convenience
export * from "./types";
export { loadPhoneDatabase } from "@/lib/utils";
