import {
    Phone,
    UserConstraints,
    SensitivityRule,
    PhoneWithScore
} from "./types";
import { applyAllRules } from "./rules";
import { scoreAndRankPhones } from "./scoring";

/**
 * Budget adjustment steps for sensitivity analysis
 */
const BUDGET_STEPS = [50, 100, 150, 200];

/**
 * Analyze what happens if budget increases
 */
export function analyzeBudgetIncrease(
    allPhones: Phone[],
    constraints: UserConstraints,
    currentQualified: PhoneWithScore[]
): SensitivityRule[] {
    const rules: SensitivityRule[] = [];

    if (constraints.budget === undefined) {
        return rules;
    }

    const currentIds = new Set(currentQualified.map(p => p.phone.id));

    for (const step of BUDGET_STEPS) {
        const newBudget = constraints.budget + step;
        const newConstraints: UserConstraints = {
            ...constraints,
            budget: newBudget,
        };

        const [qualified] = applyAllRules(allPhones, newConstraints);
        const newPhones = qualified.filter(p => !currentIds.has(p.id));

        if (newPhones.length > 0) {
            const phoneNames = newPhones.map(p => p.name).join(", ");
            rules.push({
                adjustment_type: "budget_increase",
                adjustment_details: { from: constraints.budget, to: newBudget },
                impact: `${newPhones.length} additional phone${newPhones.length > 1 ? 's' : ''} become${newPhones.length === 1 ? 's' : ''} viable: ${phoneNames}`,
                conditional_statement: `IF budget increases to $${newBudget}, THEN ${phoneNames} meet${newPhones.length === 1 ? 's' : ''} all constraints`,
            });

            // Only show the first meaningful budget step
            if (rules.length >= 2) break;
        }
    }

    return rules;
}

/**
 * Analyze what happens if priority order changes
 */
export function analyzePriorityReorder(
    phones: Phone[],
    constraints: UserConstraints,
    currentRanked: PhoneWithScore[]
): SensitivityRule[] {
    const rules: SensitivityRule[] = [];

    if (constraints.prioritized_dimensions.length < 2) {
        return rules;
    }

    // Only analyze swapping the top 2 priorities
    const [first, second, ...rest] = constraints.prioritized_dimensions;
    if (first === undefined || second === undefined) {
        return rules;
    }
    const swappedDimensions = [second, first, ...rest] as typeof constraints.prioritized_dimensions;

    const swappedConstraints: UserConstraints = {
        ...constraints,
        prioritized_dimensions: swappedDimensions,
    };

    // Get qualified phones' data
    const qualifiedPhones = currentRanked.map(p => p.phone);
    const newRanked = scoreAndRankPhones(qualifiedPhones, swappedConstraints);

    // Find phones that moved up or down
    const currentRankMap = new Map(currentRanked.map(p => [p.phone.id, p.overall_rank]));
    const changes: string[] = [];

    for (const phone of newRanked) {
        const oldRank = currentRankMap.get(phone.phone.id);
        if (oldRank && oldRank !== phone.overall_rank) {
            const direction = phone.overall_rank < oldRank ? "moves up to" : "moves down to";
            changes.push(`${phone.phone.name} ${direction} rank ${phone.overall_rank}`);
        }
    }

    if (changes.length > 0) {
        const dimensionNames: Record<string, string> = {
            battery_mah: "battery life",
            camera_mp: "camera quality",
            screen_inches: "screen size",
            storage_gb: "storage",
            weight_grams: "weight",
            processor_benchmark: "performance",
            price_usd: "price",
        };

        const firstDim = first ? (dimensionNames[first] || first) : 'first priority';
        const secondDim = second ? (dimensionNames[second] || second) : 'second priority';

        rules.push({
            adjustment_type: "priority_reorder",
            adjustment_details: { from: [first, second], to: [second, first] },
            impact: changes.slice(0, 3).join("; "),
            conditional_statement: `IF ${secondDim} becomes top priority over ${firstDim}, THEN ${changes[0]}`,
        });
    }

    return rules;
}

/**
 * Analyze what happens if no phones qualify (constraint relaxation suggestions)
 */
export function analyzeConstraintRelaxation(
    allPhones: Phone[],
    constraints: UserConstraints
): SensitivityRule[] {
    const rules: SensitivityRule[] = [];

    // Try relaxing budget
    if (constraints.budget !== undefined) {
        for (const step of BUDGET_STEPS) {
            const newBudget = constraints.budget + step;
            const relaxedConstraints: UserConstraints = {
                ...constraints,
                budget: newBudget,
            };

            const [qualified] = applyAllRules(allPhones, relaxedConstraints);

            if (qualified.length > 0) {
                rules.push({
                    adjustment_type: "budget_increase",
                    adjustment_details: { from: constraints.budget, to: newBudget },
                    impact: `${qualified.length} phone${qualified.length > 1 ? 's' : ''} would qualify`,
                    conditional_statement: `IF budget increases to $${newBudget}, THEN ${qualified.length} option${qualified.length > 1 ? 's' : ''} become${qualified.length === 1 ? 's' : ''} available`,
                });
                break;
            }
        }
    }

    // Try removing 5G requirement
    if (constraints.required_features?.has_5g === true) {
        const relaxedConstraints: UserConstraints = {
            ...constraints,
            required_features: { ...constraints.required_features, has_5g: false },
        };

        const [qualified] = applyAllRules(allPhones, relaxedConstraints);

        if (qualified.length > 0) {
            rules.push({
                adjustment_type: "remove_requirement",
                adjustment_details: { feature: "has_5g" },
                impact: `${qualified.length} phone${qualified.length > 1 ? 's' : ''} would qualify`,
                conditional_statement: `IF 5G requirement is removed, THEN ${qualified.length} option${qualified.length > 1 ? 's' : ''} become${qualified.length === 1 ? 's' : ''} available`,
            });
        }
    }

    return rules;
}

/**
 * Generate all sensitivity rules for a comparison result
 */
export function generateSensitivityRules(
    allPhones: Phone[],
    constraints: UserConstraints,
    currentRanked: PhoneWithScore[]
): SensitivityRule[] {
    const rules: SensitivityRule[] = [];

    if (currentRanked.length === 0) {
        // No qualifying phones - suggest constraint relaxation
        rules.push(...analyzeConstraintRelaxation(allPhones, constraints));
    } else {
        // Analyze budget increases for more options
        rules.push(...analyzeBudgetIncrease(allPhones, constraints, currentRanked));

        // Analyze priority reordering
        rules.push(...analyzePriorityReorder(
            currentRanked.map(p => p.phone),
            constraints,
            currentRanked
        ));
    }

    // Limit to max 5 rules
    return rules.slice(0, 5);
}
