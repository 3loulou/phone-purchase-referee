# Data Model: Phone Purchase Referee

**Date**: 2026-01-07  
**Purpose**: Define entities, attributes, relationships, and validation rules

## Core Entities

### Phone

Represents a smartphone option with technical specifications and pricing.

**Attributes**:
- `id` (string, required): Unique identifier (kebab-case, e.g., "iphone-15-pro")
- `name` (string, required): Display name (e.g., "iPhone 15 Pro")
- `price_usd` (float, required): Price in US dollars, must be > 0
- `specs` (PhoneSpecs, required): Technical specifications object
- `availability` (string, required): One of ["available", "discontinued", "preorder"]
- `region` (string, required): Market region (ISO 3166-1 alpha-2 code, e.g., "US")

**Validation Rules**:
- `id` must match pattern `^[a-z0-9-]+$`
- `price_usd` >= 0 (zero allowed for "coming soon" entries)
- `availability` must be from enumerated set
- `region` must be valid ISO country code

**Uniqueness**: `id` is unique across entire phone database

**Relationships**:
- No direct relationships (phones are independent comparison candidates)
- Implicitly related through ComparisonResult when evaluated together

---

### PhoneSpecs

Embedded object within Phone containing measurable technical dimensions.

**Attributes**:
- `battery_mah` (int, optional): Battery capacity in milliampere-hours
- `camera_mp` (int, optional): Primary camera megapixels
- `screen_inches` (float, optional): Screen diagonal size in inches
- `has_5g` (bool, required): 5G network support, defaults to False
- `storage_gb` (int, optional): Internal storage capacity in gigabytes
- `weight_grams` (int, optional): Device weight in grams
- `processor_benchmark` (int, optional): Normalized processor performance score (0-100000 range)

**Validation Rules**:
- All numeric fields (if present) must be > 0
- `screen_inches` typically range 4.0 to 8.0
- `has_5g` is the only required spec (binary feature used in constraint matching)

**Rationale for Optional Fields**:
- FR-014 requires handling incomplete phone data gracefully
- Missing specs disable comparison on that dimension with explicit message
- Allows adding phones to database even if full specs not yet published

---

### UserConstraints

Represents user-defined decision criteria for phone comparison.

**Attributes**:
- `budget` (float, optional): Maximum acceptable price in USD, if None no budget constraint
- `required_features` (dict[string, any], optional): Must-have features as key-value pairs (e.g., `{"has_5g": True, "min_storage_gb": 128}`)
- `prioritized_dimensions` (list[string], required): Ordered list of spec dimensions by importance (e.g., `["battery_mah", "camera_mp", "price_usd"]`)
- `region` (string, optional): Market region filter, defaults to "US"

**Validation Rules**:
- `budget` if present must be > 0
- `prioritized_dimensions` must contain valid spec field names or "price_usd"
- `prioritized_dimensions` must have at least 1 element, max 5 elements (keep comparisons focused)
- `required_features` keys must be valid spec field names or "availability"

**Lifecycle**:
- Created from CLI arguments or programmatic API call
- Immutable once created (frozen dataclass)
- Passed to ConstraintEvaluator for filtering and scoring

---

### ComparisonResult

Represents the output of a referee evaluation showing qualifying and eliminated phones.

**Attributes**:
- `qualified_phones` (list[PhoneWithScore], required): Phones meeting all constraints with scoring details
- `eliminated_phones` (list[EliminatedPhone], required): Phones rejected with explicit reasons
- `trade_offs` (list[TradeOffPair], required): Pairwise comparisons between qualified phones
- `sensitivity_rules` (list[SensitivityRule], required): Conditional statements showing when verdict changes
- `constraints_used` (UserConstraints, required): Original constraints for audit trail
- `metadata` (ComparisonMetadata, required): Execution timestamp, phone database version

**Validation Rules**:
- `len(qualified_phones) + len(eliminated_phones)` must equal total phones evaluated
- If `len(qualified_phones) < 2`, `sensitivity_rules` must suggest constraint relaxation
- `trade_offs` generated for all pairs of qualified_phones where len(qualified_phones) >= 2

**Constitutional Compliance**:
- Satisfies FR-013: ensures at least 2 options compared (or explains why impossible)
- Satisfies FR-003: all eliminated_phones have explicit rejection reason
- Satisfies FR-005: all qualified phones have trade_off analysis

---

### PhoneWithScore

Qualified phone with scoring details for explainability.

**Attributes**:
- `phone` (Phone, required): The phone entity
- `dimension_scores` (dict[string, float], required): Score per prioritized dimension (normalized 0.0-1.0)
- `overall_rank` (int, required): Position in prioritized ordering (1-indexed, lower is better)
- `conditional_statement` (string, required): Explanation of when this phone is optimal

**Example**:
```
PhoneWithScore(
  phone=Phone(id="iphone-15-pro", ...),
  dimension_scores={"battery_mah": 0.65, "camera_mp": 0.95, "price_usd": 0.40},
  overall_rank=2,
  conditional_statement="iPhone 15 Pro is optimal IF camera quality is highest priority and budget allows premium pricing"
)
```

---

### EliminatedPhone

Phone rejected during constraint evaluation with explicit reason.

**Attributes**:
- `phone` (Phone, required): The phone entity
- `rejection_reason` (RejectionReason, required): Enumerated reason type
- `rejection_details` (string, required): Human-readable explanation with specific values

**RejectionReason Enum**:
- `EXCEEDS_BUDGET`: Price above user's budget constraint
- `MISSING_REQUIRED_FEATURE`: Lacks must-have feature specified in required_features
- `UNAVAILABLE_IN_REGION`: Not available in user's specified region
- `DISCONTINUED`: Availability status is "discontinued"
- `INCOMPLETE_DATA`: Missing data for prioritized dimensions preventing scoring

**Example**:
```
EliminatedPhone(
  phone=Phone(id="samsung-s24-ultra", ...),
  rejection_reason=RejectionReason.EXCEEDS_BUDGET,
  rejection_details="Samsung S24 Ultra ($1299) exceeds budget of $700 by $599"
)
```

---

### TradeOffPair

Pairwise comparison showing what is gained/sacrificed between two qualified phones.

**Attributes**:
- `phone_a` (Phone, required): First phone in comparison
- `phone_b` (Phone, required): Second phone in comparison
- `dimension` (string, required): Spec dimension being compared
- `advantage_phone` (string, required): ID of phone with superior value on this dimension
- `delta` (float, required): Absolute difference in dimension values
- `explanation` (string, required): Human-readable trade-off statement

**Example**:
```
TradeOffPair(
  phone_a=Phone(id="iphone-15-pro", ...),
  phone_b=Phone(id="pixel-8-pro", ...),
  dimension="battery_mah",
  advantage_phone="pixel-8-pro",
  delta=726.0,
  explanation="Pixel 8 Pro gains 726 mAh battery capacity but sacrifices camera megapixels compared to iPhone 15 Pro"
)
```

**Generation Logic**:
- For N qualified phones, generate N*(N-1)/2 pairwise comparisons
- Trade-offs shown for top 2 prioritized dimensions to avoid overwhelming output
- If phones tie on a dimension, skip that trade-off pair

---

### SensitivityRule

Conditional statement showing when recommendation would change based on constraint adjustment.

**Attributes**:
- `adjustment_type` (string, required): One of ["budget_increase", "budget_decrease", "priority_reorder", "add_requirement", "remove_requirement"]
- `adjustment_details` (dict[string, any], required): Specific change (e.g., `{"from": 700, "to": 800}`)
- `impact` (string, required): What changes in comparison result (e.g., "2 additional phones become viable")
- `conditional_statement` (string, required): IF-THEN format explanation

**Examples**:
```
SensitivityRule(
  adjustment_type="budget_increase",
  adjustment_details={"from": 700, "to": 850},
  impact="Samsung S24 and OnePlus 12 become viable options",
  conditional_statement="IF budget increases to $850, THEN Samsung S24 and OnePlus 12 meet all constraints"
)

SensitivityRule(
  adjustment_type="priority_reorder",
  adjustment_details={"from": ["battery", "camera"], "to": ["camera", "battery"]},
  impact="iPhone 15 Pro moves to rank 1, Pixel 8 Pro moves to rank 2",
  conditional_statement="IF camera becomes top priority over battery, THEN iPhone 15 Pro becomes optimal"
)
```

---

### ComparisonMetadata

Audit trail information for comparison reproducibility.

**Attributes**:
- `timestamp` (string, required): ISO 8601 timestamp of comparison execution
- `phone_database_version` (string, required): Hash or version identifier of phones.json used
- `referee_engine_version` (string, required): Version of referee logic (semantic versioning)
- `execution_time_ms` (int, required): Milliseconds taken for comparison

**Purpose**:
- Enables reproducing exact comparison results given same inputs
- SC-010 compliance: "given identical constraints and phone data, produces identical recommendations"
- Useful for debugging discrepancies between runs

---

## Validation Summary

All models use Pydantic v2 for runtime validation:
- Type checking at construction time (fail fast on malformed input)
- Custom validators for domain constraints (budget > 0, valid dimension names)
- Frozen models where appropriate (UserConstraints, Phone) to prevent mutation
- Explicit error messages referencing functional requirements

---

## State Transitions

**Phone Availability States**:
```
[available] ←→ [preorder]
     ↓
[discontinued]
```

- Once discontinued, phone cannot return to available (one-way transition)
- Referee engine treats "discontinued" as elimination reason unless user explicitly includes historical comparisons

**Comparison Lifecycle**:
```
[UserConstraints created] 
    → [Constraint evaluation] 
    → [Scoring qualified phones] 
    → [Trade-off generation] 
    → [Sensitivity analysis] 
    → [ComparisonResult returned]
```

- Single-pass pipeline (no loops or retries)
- Each stage can fail with explicit error (invalid constraints, no qualifying phones, missing data)

---

## Scale Assumptions

Based on Technical Context from plan.md:

- **Phone Database**: 50-200 phones (fits in memory, <1MB JSON file)
- **User-Selected Comparison**: 2-5 phones per query
- **Constraint-First Mode**: Evaluate all 200 phones against constraints (filtered early to reduce scoring work)
- **Prioritized Dimensions**: Max 5 dimensions to keep comparisons focused
- **Trade-Off Pairs**: Max 10 pairs displayed (top N qualified phones, typically 3-5)
- **Sensitivity Rules**: Max 5 scenarios (budget +/- steps, top priority swaps)

These limits prevent combinatorial explosion in trade-off generation and keep output digestible.

---

## Relationships Diagram

```
UserConstraints ──(input to)──> ConstraintEvaluator
                                       │
                                       ├──(filters)──> Phone Database
                                       │
                                       ├──(produces)──> PhoneWithScore (list)
                                       │
                                       └──(produces)──> EliminatedPhone (list)

PhoneWithScore (list) ──(input to)──> TradeOffAnalyzer ──(produces)──> TradeOffPair (list)

PhoneWithScore + UserConstraints ──(input to)──> SensitivityAnalyzer ──(produces)──> SensitivityRule (list)

All outputs combined into ComparisonResult
```

No circular dependencies; clear data flow from constraints → evaluation → comparison → explanation.
