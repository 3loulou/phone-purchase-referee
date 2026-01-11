import { z } from "zod";

// ============================================
// Phone Specifications
// ============================================

export const PhoneSpecsSchema = z.object({
  battery_mah: z.number().positive().optional(),
  camera_mp: z.number().positive().optional(),
  screen_inches: z.number().min(4.0).max(8.0).optional(),
  has_5g: z.boolean().default(false),
  storage_gb: z.number().positive().optional(),
  weight_grams: z.number().positive().optional(),
  processor_benchmark: z.number().min(0).max(100000).optional(),
});

export type PhoneSpecs = z.infer<typeof PhoneSpecsSchema>;

// ============================================
// Phone Entity
// ============================================

export const AvailabilitySchema = z.enum(["available", "discontinued", "preorder"]);
export type Availability = z.infer<typeof AvailabilitySchema>;

export const PhoneSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, "ID must be kebab-case"),
  name: z.string().min(1),
  price_usd: z.number().min(0),
  specs: PhoneSpecsSchema,
  availability: AvailabilitySchema,
  region: z.string().length(2), // ISO 3166-1 alpha-2
});

export type Phone = z.infer<typeof PhoneSchema>;

// ============================================
// User Constraints
// ============================================

export const ComparisonDimensionSchema = z.enum([
  "battery_mah",
  "camera_mp",
  "screen_inches",
  "storage_gb",
  "weight_grams",
  "processor_benchmark",
  "price_usd",
]);

export type ComparisonDimension = z.infer<typeof ComparisonDimensionSchema>;

export const UserConstraintsSchema = z.object({
  budget: z.number().positive().optional(),
  required_features: z.record(z.string(), z.unknown()).optional(),
  prioritized_dimensions: z
    .array(ComparisonDimensionSchema)
    .min(1)
    .max(5),
  region: z.string().length(2).default("US"),
});

export type UserConstraints = z.infer<typeof UserConstraintsSchema>;

// ============================================
// Rejection Reasons
// ============================================

export const RejectionReasonSchema = z.enum([
  "EXCEEDS_BUDGET",
  "MISSING_REQUIRED_FEATURE",
  "UNAVAILABLE_IN_REGION",
  "DISCONTINUED",
  "INCOMPLETE_DATA",
]);

export type RejectionReason = z.infer<typeof RejectionReasonSchema>;

export const EliminatedPhoneSchema = z.object({
  phone: PhoneSchema,
  rejection_reason: RejectionReasonSchema,
  rejection_details: z.string(),
});

export type EliminatedPhone = z.infer<typeof EliminatedPhoneSchema>;

// ============================================
// Scoring and Ranked Phones
// ============================================

export const PhoneWithScoreSchema = z.object({
  phone: PhoneSchema,
  dimension_scores: z.record(z.string(), z.number().min(0).max(1)),
  overall_rank: z.number().int().min(1),
  conditional_statement: z.string(),
});

export type PhoneWithScore = z.infer<typeof PhoneWithScoreSchema>;

// ============================================
// Trade-Off Analysis
// ============================================

export const TradeOffPairSchema = z.object({
  phone_a_id: z.string(),
  phone_b_id: z.string(),
  dimension: z.string(),
  advantage_phone_id: z.string(),
  delta: z.number(),
  explanation: z.string(),
});

export type TradeOffPair = z.infer<typeof TradeOffPairSchema>;

// ============================================
// Sensitivity Analysis
// ============================================

export const SensitivityRuleSchema = z.object({
  adjustment_type: z.enum([
    "budget_increase",
    "budget_decrease",
    "priority_reorder",
    "add_requirement",
    "remove_requirement",
  ]),
  adjustment_details: z.record(z.string(), z.unknown()),
  impact: z.string(),
  conditional_statement: z.string(),
});

export type SensitivityRule = z.infer<typeof SensitivityRuleSchema>;

// ============================================
// Comparison Metadata
// ============================================

export const ComparisonMetadataSchema = z.object({
  timestamp: z.string().datetime(),
  phone_database_version: z.string(),
  referee_engine_version: z.string(),
  execution_time_ms: z.number().int().min(0),
});

export type ComparisonMetadata = z.infer<typeof ComparisonMetadataSchema>;

// ============================================
// Full Comparison Result
// ============================================

export const ComparisonResultSchema = z.object({
  qualified_phones: z.array(PhoneWithScoreSchema),
  eliminated_phones: z.array(EliminatedPhoneSchema),
  trade_offs: z.array(TradeOffPairSchema),
  sensitivity_rules: z.array(SensitivityRuleSchema),
  constraints_used: UserConstraintsSchema,
  metadata: ComparisonMetadataSchema,
});

export type ComparisonResult = z.infer<typeof ComparisonResultSchema>;

// ============================================
// Type Guards
// ============================================

export function isPhone(value: unknown): value is Phone {
  return PhoneSchema.safeParse(value).success;
}

export function isUserConstraints(value: unknown): value is UserConstraints {
  return UserConstraintsSchema.safeParse(value).success;
}

// ============================================
// Utility Types
// ============================================

export interface EvaluationContext {
  phones: Phone[];
  constraints: UserConstraints;
}
