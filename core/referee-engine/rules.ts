import {
    Phone,
    UserConstraints,
    RejectionReason,
    EliminatedPhone,
    ComparisonDimension
} from "./types";

export interface RuleCheckResult {
    passed: boolean;
    reason?: RejectionReason;
    details?: string;
}

/**
 * Check if phone is within budget constraint
 */
export function checkBudgetConstraint(
    phone: Phone,
    constraints: UserConstraints
): RuleCheckResult {
    if (constraints.budget === undefined) {
        return { passed: true };
    }

    if (phone.price_usd > constraints.budget) {
        const excess = phone.price_usd - constraints.budget;
        return {
            passed: false,
            reason: "EXCEEDS_BUDGET",
            details: `${phone.name} ($${phone.price_usd}) exceeds budget of $${constraints.budget} by $${excess}`,
        };
    }

    return { passed: true };
}

/**
 * Check if phone has all required features
 */
export function checkRequiredFeatures(
    phone: Phone,
    constraints: UserConstraints
): RuleCheckResult {
    if (!constraints.required_features) {
        return { passed: true };
    }

    for (const [feature, requiredValue] of Object.entries(constraints.required_features)) {
        // Handle has_5g requirement
        if (feature === "has_5g" && requiredValue === true) {
            if (!phone.specs.has_5g) {
                return {
                    passed: false,
                    reason: "MISSING_REQUIRED_FEATURE",
                    details: `${phone.name} lacks 5G support`,
                };
            }
        }

        // Handle min_storage_gb requirement
        if (feature === "min_storage_gb" && typeof requiredValue === "number") {
            const storage = phone.specs.storage_gb;
            if (storage === undefined || storage < requiredValue) {
                return {
                    passed: false,
                    reason: "MISSING_REQUIRED_FEATURE",
                    details: `${phone.name} has ${storage ?? "unknown"}GB storage, requires minimum ${requiredValue}GB`,
                };
            }
        }

        // Handle min_screen_inches requirement
        if (feature === "min_screen_inches" && typeof requiredValue === "number") {
            const screen = phone.specs.screen_inches;
            if (screen === undefined || screen < requiredValue) {
                return {
                    passed: false,
                    reason: "MISSING_REQUIRED_FEATURE",
                    details: `${phone.name} has ${screen ?? "unknown"}" screen, requires minimum ${requiredValue}"`,
                };
            }
        }
    }

    return { passed: true };
}

/**
 * Check if phone is available in required region
 */
export function checkRegionConstraint(
    phone: Phone,
    constraints: UserConstraints
): RuleCheckResult {
    if (phone.region !== constraints.region) {
        return {
            passed: false,
            reason: "UNAVAILABLE_IN_REGION",
            details: `${phone.name} is not available in ${constraints.region} (only available in ${phone.region})`,
        };
    }
    return { passed: true };
}

/**
 * Check if phone is still available (not discontinued)
 */
export function checkAvailability(phone: Phone): RuleCheckResult {
    if (phone.availability === "discontinued") {
        return {
            passed: false,
            reason: "DISCONTINUED",
            details: `${phone.name} is discontinued and no longer available for purchase`,
        };
    }
    return { passed: true };
}

/**
 * Check if phone has data for all prioritized dimensions
 */
export function checkDataCompleteness(
    phone: Phone,
    constraints: UserConstraints
): RuleCheckResult {
    const missingDimensions: string[] = [];

    for (const dimension of constraints.prioritized_dimensions) {
        if (dimension === "price_usd") continue; // Price is always available

        const specKey = dimension as keyof typeof phone.specs;
        if (phone.specs[specKey] === undefined) {
            missingDimensions.push(dimension);
        }
    }

    if (missingDimensions.length > 0) {
        return {
            passed: false,
            reason: "INCOMPLETE_DATA",
            details: `${phone.name} is missing data for: ${missingDimensions.join(", ")}`,
        };
    }

    return { passed: true };
}

/**
 * Apply all rules to filter phones
 * Returns tuple of [qualified phones, eliminated phones]
 */
export function applyAllRules(
    phones: Phone[],
    constraints: UserConstraints
): [Phone[], EliminatedPhone[]] {
    const qualified: Phone[] = [];
    const eliminated: EliminatedPhone[] = [];

    for (const phone of phones) {
        // Check each rule in order of priority
        const checks = [
            checkAvailability(phone),
            checkRegionConstraint(phone, constraints),
            checkBudgetConstraint(phone, constraints),
            checkRequiredFeatures(phone, constraints),
            checkDataCompleteness(phone, constraints),
        ];

        // Find first failing check
        const failedCheck = checks.find(c => !c.passed);

        if (failedCheck) {
            eliminated.push({
                phone,
                rejection_reason: failedCheck.reason!,
                rejection_details: failedCheck.details!,
            });
        } else {
            qualified.push(phone);
        }
    }

    return [qualified, eliminated];
}

/**
 * Validate that user constraints are valid
 */
export function validateConstraints(constraints: UserConstraints): string[] {
    const errors: string[] = [];

    if (constraints.budget !== undefined && constraints.budget <= 0) {
        errors.push("Budget must be a positive number");
    }

    if (constraints.prioritized_dimensions.length === 0) {
        errors.push("At least one priority dimension is required");
    }

    if (constraints.prioritized_dimensions.length > 5) {
        errors.push("Maximum 5 priority dimensions allowed");
    }

    return errors;
}
