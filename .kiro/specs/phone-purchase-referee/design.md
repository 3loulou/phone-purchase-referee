# Design Document: Phone Purchase Referee

## Overview

The Phone Purchase Referee is a TypeScript-based web application built with Next.js 16 that helps users make informed smartphone purchase decisions through constraint-based comparison. The system separates decision logic (pure TypeScript referee engine) from data gathering (Gemini AI research agent) to ensure deterministic, traceable, and reproducible recommendations.

**Core Principle**: Referee logic must be deterministic. AI must be swappable. Specs must outlive frameworks.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Next.js App Router                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Compare Page │  │ Select Page  │  │ Admin Page   │     │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘     │
│         │                  │                  │              │
│         └──────────────────┴──────────────────┘              │
│                            │                                 │
│                    ┌───────▼────────┐                       │
│                    │ Server Actions │                       │
│                    └───────┬────────┘                       │
└────────────────────────────┼──────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────▼────────┐  ┌────────▼────────┐  ┌──────▼──────┐
│ Referee Engine │  │  Phone Database │  │ Gemini AI   │
│ (Pure TS Logic)│  │   (JSON Store)  │  │  (Research) │
└────────────────┘  └─────────────────┘  └─────────────┘
```

### Separation of Concerns

1. **Referee Engine** (`/core/referee-engine/`): Pure TypeScript decision logic
   - Constraint evaluation
   - Phone scoring and ranking
   - Trade-off calculation
   - Sensitivity analysis
   - Zero AI involvement, 100% deterministic

2. **AI Research Layer** (`/ai/`): Gemini-powered phone data gathering
   - Google Search grounding for factual phone specs
   - Structured output validation with Zod schemas
   - Used ONLY for populating phone database, never for decisions

3. **UI Layer** (`/app/`, `/components/`): Next.js Server Components
   - Form inputs for constraints
   - Results display with conditional statements
   - Interactive sensitivity analysis

## Components and Interfaces

### Core Types

```typescript
// Phone entity with specifications
interface Phone {
  id: string;                    // Unique identifier (kebab-case)
  name: string;                  // Display name
  price_usd: number;             // Price in US dollars
  specs: PhoneSpecs;             // Technical specifications
  availability: 'available' | 'discontinued' | 'preorder';
  region: string;                // ISO 3166-1 alpha-2 code
}

interface PhoneSpecs {
  battery_mah?: number;          // Battery capacity
  camera_mp?: number;            // Primary camera megapixels
  screen_inches?: number;        // Screen diagonal size
  has_5g: boolean;               // 5G support (required field)
  storage_gb?: number;           // Internal storage
  weight_grams?: number;         // Device weight
  processor_benchmark?: number;  // Performance score (0-100000)
}

// User constraints for comparison
interface UserConstraints {
  budget?: number;                           // Maximum price
  required_features?: Record<string, any>;   // Must-have features
  prioritized_dimensions: string[];          // Ordered importance list
  region?: string;                           // Market region filter
}

// Comparison result output
interface ComparisonResult {
  qualified_phones: PhoneWithScore[];
  eliminated_phones: EliminatedPhone[];
  trade_offs: TradeOffPair[];
  sensitivity_rules: SensitivityRule[];
  constraints_used: UserConstraints;
  metadata: ComparisonMetadata;
}

// Qualified phone with scoring details
interface PhoneWithScore {
  phone: Phone;
  dimension_scores: Record<string, number>;  // 0.0-1.0 normalized
  overall_rank: number;                      // 1-indexed position
  conditional_statement: string;             // "Phone X optimal IF..."
}

// Eliminated phone with rejection reason
interface EliminatedPhone {
  phone: Phone;
  rejection_reason: RejectionReason;
  rejection_details: string;
}

enum RejectionReason {
  EXCEEDS_BUDGET = 'EXCEEDS_BUDGET',
  MISSING_REQUIRED_FEATURE = 'MISSING_REQUIRED_FEATURE',
  UNAVAILABLE_IN_REGION = 'UNAVAILABLE_IN_REGION',
  DISCONTINUED = 'DISCONTINUED',
  INCOMPLETE_DATA = 'INCOMPLETE_DATA'
}

// Trade-off between two phones
interface TradeOffPair {
  phone_a: Phone;
  phone_b: Phone;
  dimension: string;
  advantage_phone: string;       // ID of phone with better value
  delta: number;                 // Absolute difference
  explanation: string;           // Human-readable trade-off
}

// Sensitivity analysis rule
interface SensitivityRule {
  adjustment_type: 'budget_increase' | 'budget_decrease' | 'priority_reorder';
  adjustment_details: Record<string, any>;
  impact: string;
  conditional_statement: string;  // "IF ... THEN ..."
}

// Execution metadata for reproducibility
interface ComparisonMetadata {
  timestamp: string;              // ISO 8601 timestamp
  phone_database_version: string; // Hash or version ID
  referee_engine_version: string; // Semantic version
  execution_time_ms: number;      // Milliseconds taken
}
```

### Referee Engine Interface

```typescript
// Main referee engine function
function evaluatePhones(
  constraints: UserConstraints,
  phones: Phone[]
): ComparisonResult {
  // 1. Apply constraint filters
  const { qualified, eliminated } = applyConstraints(phones, constraints);
  
  // 2. Score qualified phones
  const scored = scorePhones(qualified, constraints.prioritized_dimensions);
  
  // 3. Generate trade-offs
  const tradeOffs = calculateTradeOffs(scored, constraints.prioritized_dimensions);
  
  // 4. Generate sensitivity rules
  const sensitivityRules = analyzeSensitivity(scored, constraints, phones);
  
  // 5. Return complete comparison result
  return {
    qualified_phones: scored,
    eliminated_phones: eliminated,
    trade_offs: tradeOffs,
    sensitivity_rules: sensitivityRules,
    constraints_used: constraints,
    metadata: generateMetadata()
  };
}

// User-selected phone comparison (no constraint filtering)
function evaluateSelectedPhones(
  phoneIds: string[],
  phones: Phone[],
  priorities?: string[]
): ComparisonResult {
  const selectedPhones = phones.filter(p => phoneIds.includes(p.id));
  
  // Score and compare without constraint filtering
  const scored = scorePhones(selectedPhones, priorities || []);
  const tradeOffs = calculateTradeOffs(scored, priorities || []);
  
  return {
    qualified_phones: scored,
    eliminated_phones: [],
    trade_offs: tradeOffs,
    sensitivity_rules: [],
    constraints_used: { prioritized_dimensions: priorities || [] },
    metadata: generateMetadata()
  };
}
```

### Constraint Evaluation Functions

```typescript
// Apply all constraints and separate qualified/eliminated phones
function applyConstraints(
  phones: Phone[],
  constraints: UserConstraints
): { qualified: Phone[], eliminated: EliminatedPhone[] } {
  const qualified: Phone[] = [];
  const eliminated: EliminatedPhone[] = [];
  
  for (const phone of phones) {
    const rejection = evaluatePhone(phone, constraints);
    if (rejection) {
      eliminated.push(rejection);
    } else {
      qualified.push(phone);
    }
  }
  
  return { qualified, eliminated };
}

// Evaluate single phone against constraints
function evaluatePhone(
  phone: Phone,
  constraints: UserConstraints
): EliminatedPhone | null {
  // Check budget constraint
  if (constraints.budget && phone.price_usd > constraints.budget) {
    return {
      phone,
      rejection_reason: RejectionReason.EXCEEDS_BUDGET,
      rejection_details: `${phone.name} ($${phone.price_usd}) exceeds budget of $${constraints.budget} by $${phone.price_usd - constraints.budget}`
    };
  }
  
  // Check required features
  if (constraints.required_features) {
    for (const [feature, value] of Object.entries(constraints.required_features)) {
      if (!hasRequiredFeature(phone, feature, value)) {
        return {
          phone,
          rejection_reason: RejectionReason.MISSING_REQUIRED_FEATURE,
          rejection_details: `${phone.name} missing required feature: ${feature}=${value}`
        };
      }
    }
  }
  
  // Check region availability
  if (constraints.region && phone.region !== constraints.region) {
    return {
      phone,
      rejection_reason: RejectionReason.UNAVAILABLE_IN_REGION,
      rejection_details: `${phone.name} unavailable in region: ${constraints.region}`
    };
  }
  
  // Check availability status
  if (phone.availability === 'discontinued') {
    return {
      phone,
      rejection_reason: RejectionReason.DISCONTINUED,
      rejection_details: `${phone.name} is discontinued`
    };
  }
  
  // Check for incomplete data on prioritized dimensions
  if (hasMissingPriorityData(phone, constraints.prioritized_dimensions)) {
    return {
      phone,
      rejection_reason: RejectionReason.INCOMPLETE_DATA,
      rejection_details: `${phone.name} missing data for prioritized dimensions`
    };
  }
  
  return null; // Phone qualifies
}
```

### Scoring Functions

```typescript
// Score all qualified phones based on prioritized dimensions
function scorePhones(
  phones: Phone[],
  priorities: string[]
): PhoneWithScore[] {
  const scored: PhoneWithScore[] = phones.map(phone => {
    const dimensionScores: Record<string, number> = {};
    
    // Calculate normalized score for each priority dimension
    for (const dimension of priorities) {
      dimensionScores[dimension] = calculateDimensionScore(phone, dimension, phones);
    }
    
    return {
      phone,
      dimension_scores: dimensionScores,
      overall_rank: 0, // Assigned after sorting
      conditional_statement: '' // Generated after ranking
    };
  });
  
  // Sort by priorities (first priority most important, then second, etc.)
  scored.sort((a, b) => {
    for (const dimension of priorities) {
      const diff = b.dimension_scores[dimension] - a.dimension_scores[dimension];
      if (Math.abs(diff) > 0.001) return diff; // Use threshold for float comparison
    }
    return a.phone.id.localeCompare(b.phone.id); // Consistent tiebreaker
  });
  
  // Assign ranks (1-indexed)
  scored.forEach((item, index) => {
    item.overall_rank = index + 1;
    item.conditional_statement = generateConditionalStatement(item, priorities);
  });
  
  return scored;
}

// Calculate normalized score (0.0-1.0) for a single dimension
function calculateDimensionScore(
  phone: Phone,
  dimension: string,
  allPhones: Phone[]
): number {
  const values = allPhones
    .map(p => getDimensionValue(p, dimension))
    .filter(v => v !== null) as number[];
  
  const min = Math.min(...values);
  const max = Math.max(...values);
  const value = getDimensionValue(phone, dimension);
  
  if (value === null || max === min) return 0.5; // Missing data or all equal
  
  // Normalize to 0.0-1.0 range
  // For price, lower is better (invert score)
  if (dimension === 'price_usd') {
    return 1.0 - (value - min) / (max - min);
  }
  
  // For other dimensions, higher is better
  return (value - min) / (max - min);
}

// Extract dimension value from phone
function getDimensionValue(phone: Phone, dimension: string): number | null {
  if (dimension === 'price_usd') return phone.price_usd;
  
  const specs = phone.specs;
  switch (dimension) {
    case 'battery': return specs.battery_mah ?? null;
    case 'camera': return specs.camera_mp ?? null;
    case 'screen': return specs.screen_inches ?? null;
    case 'storage': return specs.storage_gb ?? null;
    case 'weight': return specs.weight_grams ?? null;
    case 'performance': return specs.processor_benchmark ?? null;
    default: return null;
  }
}

// Generate conditional statement for a phone
function generateConditionalStatement(
  item: PhoneWithScore,
  priorities: string[]
): string {
  const topPriority = priorities[0];
  return `${item.phone.name} is optimal IF ${topPriority} is highest priority`;
}
```

### Trade-Off Calculation

```typescript
// Calculate pairwise trade-offs for all phone combinations
function calculateTradeOffs(
  phones: PhoneWithScore[],
  priorities: string[]
): TradeOffPair[] {
  const tradeOffs: TradeOffPair[] = [];
  
  // Generate all pairwise combinations
  for (let i = 0; i < phones.length; i++) {
    for (let j = i + 1; j < phones.length; j++) {
      const phoneA = phones[i];
      const phoneB = phones[j];
      
      // Compare on top 2 priority dimensions to avoid overwhelming output
      const topDimensions = priorities.slice(0, 2);
      
      for (const dimension of topDimensions) {
        const scoreA = phoneA.dimension_scores[dimension];
        const scoreB = phoneB.dimension_scores[dimension];
        
        // Skip if tie (within threshold)
        if (Math.abs(scoreA - scoreB) < 0.001) continue;
        
        const advantagePhone = scoreA > scoreB ? phoneA.phone : phoneB.phone;
        const valueA = getDimensionValue(phoneA.phone, dimension);
        const valueB = getDimensionValue(phoneB.phone, dimension);
        
        if (valueA === null || valueB === null) continue;
        
        const delta = Math.abs(valueA - valueB);
        
        tradeOffs.push({
          phone_a: phoneA.phone,
          phone_b: phoneB.phone,
          dimension,
          advantage_phone: advantagePhone.id,
          delta,
          explanation: generateTradeOffExplanation(phoneA.phone, phoneB.phone, dimension, delta, advantagePhone.id)
        });
      }
    }
  }
  
  return tradeOffs;
}

// Generate human-readable trade-off explanation
function generateTradeOffExplanation(
  phoneA: Phone,
  phoneB: Phone,
  dimension: string,
  delta: number,
  advantagePhoneId: string
): string {
  const winner = advantagePhoneId === phoneA.id ? phoneA : phoneB;
  const loser = advantagePhoneId === phoneA.id ? phoneB : phoneA;
  
  const unit = getDimensionUnit(dimension);
  
  return `${winner.name} gains ${delta.toFixed(0)} ${unit} ${dimension} compared to ${loser.name}`;
}

function getDimensionUnit(dimension: string): string {
  const units: Record<string, string> = {
    battery: 'mAh',
    camera: 'MP',
    screen: 'inches',
    storage: 'GB',
    weight: 'grams',
    performance: 'points',
    price_usd: 'USD'
  };
  return units[dimension] || '';
}
```

### Sensitivity Analysis

```typescript
// Analyze how constraint changes affect recommendations
function analyzeSensitivity(
  qualifiedPhones: PhoneWithScore[],
  constraints: UserConstraints,
  allPhones: Phone[]
): SensitivityRule[] {
  const rules: SensitivityRule[] = [];
  
  // Budget sensitivity (if budget constraint exists)
  if (constraints.budget) {
    const budgetSteps = [50, 100, 150];
    
    for (const step of budgetSteps) {
      const newBudget = constraints.budget + step;
      const newConstraints = { ...constraints, budget: newBudget };
      const { qualified } = applyConstraints(allPhones, newConstraints);
      
      const newPhones = qualified.filter(
        p => !qualifiedPhones.some(qp => qp.phone.id === p.id)
      );
      
      if (newPhones.length > 0) {
        rules.push({
          adjustment_type: 'budget_increase',
          adjustment_details: { from: constraints.budget, to: newBudget },
          impact: `${newPhones.length} additional phones become viable`,
          conditional_statement: `IF budget increases to $${newBudget}, THEN ${newPhones.map(p => p.name).join(', ')} become viable options`
        });
        break; // Only show first meaningful increase
      }
    }
  }
  
  // Priority reordering sensitivity (if multiple priorities)
  if (constraints.prioritized_dimensions.length >= 2) {
    const [first, second, ...rest] = constraints.prioritized_dimensions;
    const swappedPriorities = [second, first, ...rest];
    
    const reranked = scorePhones(
      qualifiedPhones.map(p => p.phone),
      swappedPriorities
    );
    
    // Check if top phone changed
    if (reranked[0].phone.id !== qualifiedPhones[0].phone.id) {
      rules.push({
        adjustment_type: 'priority_reorder',
        adjustment_details: { from: constraints.prioritized_dimensions, to: swappedPriorities },
        impact: `${reranked[0].phone.name} moves to rank 1`,
        conditional_statement: `IF ${second} becomes top priority over ${first}, THEN ${reranked[0].phone.name} becomes optimal`
      });
    }
  }
  
  return rules;
}
```

## Data Models

### Phone Database Schema

The phone database is stored as a JSON file (`lib/data/phones.json`) with the following structure:

```json
{
  "version": "1.0.0",
  "last_updated": "2026-01-07T00:00:00Z",
  "phones": [
    {
      "id": "iphone-15-pro",
      "name": "iPhone 15 Pro",
      "price_usd": 999,
      "specs": {
        "battery_mah": 3274,
        "camera_mp": 48,
        "screen_inches": 6.1,
        "has_5g": true,
        "storage_gb": 128,
        "weight_grams": 187,
        "processor_benchmark": 95000
      },
      "availability": "available",
      "region": "US"
    }
  ]
}
```

### Validation Rules

All data models use Zod schemas for runtime validation:

```typescript
const PhoneSpecsSchema = z.object({
  battery_mah: z.number().positive().optional(),
  camera_mp: z.number().positive().optional(),
  screen_inches: z.number().positive().optional(),
  has_5g: z.boolean(),
  storage_gb: z.number().positive().optional(),
  weight_grams: z.number().positive().optional(),
  processor_benchmark: z.number().min(0).max(100000).optional()
});

const PhoneSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  price_usd: z.number().nonnegative(),
  specs: PhoneSpecsSchema,
  availability: z.enum(['available', 'discontinued', 'preorder']),
  region: z.string().length(2)
});

const UserConstraintsSchema = z.object({
  budget: z.number().positive().optional(),
  required_features: z.record(z.any()).optional(),
  prioritized_dimensions: z.array(z.string()).min(1).max(5),
  region: z.string().length(2).optional()
});
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Deterministic Evaluation

*For any* set of user constraints and phone database, evaluating the same inputs multiple times SHALL produce identical comparison results.

**Validates: Requirements 11.1, 11.2, 11.3, 11.4**

### Property 2: Complete Elimination Reasons

*For any* eliminated phone in the comparison result, that phone SHALL have an explicit rejection reason and rejection details.

**Validates: Requirements 2.2, 2.3, 2.4, 2.5, 14.2**

### Property 3: Normalized Dimension Scores

*For any* qualified phone with dimension scores, all score values SHALL be between 0.0 and 1.0 inclusive.

**Validates: Requirements 3.1**

### Property 4: Multi-Option Output

*For any* comparison result with at least 2 qualifying phones, the result SHALL include pairwise trade-off analysis for all phone combinations.

**Validates: Requirements 4.1, 13.4**

### Property 5: Conditional Phrasing

*For any* qualified phone in the comparison result, the conditional statement SHALL contain the word "IF" and reference user priorities.

**Validates: Requirements 5.1, 5.2, 5.3**

### Property 6: Budget Constraint Enforcement

*For any* phone that exceeds the user's budget constraint, that phone SHALL be eliminated with rejection reason EXCEEDS_BUDGET.

**Validates: Requirements 2.2**

### Property 7: Required Feature Enforcement

*For any* phone missing a required feature specified in user constraints, that phone SHALL be eliminated with rejection reason MISSING_REQUIRED_FEATURE.

**Validates: Requirements 2.3**

### Property 8: Trade-Off Completeness

*For any* two qualified phones, if they differ on a prioritized dimension, a trade-off pair SHALL exist showing the advantage and delta.

**Validates: Requirements 4.2, 4.3**

### Property 9: Sensitivity Rule Generation

*For any* comparison with a budget constraint, at least one sensitivity rule SHALL be generated showing the impact of budget adjustment.

**Validates: Requirements 8.1, 8.3**

### Property 10: Ranking Consistency

*For any* set of qualified phones, if Phone A has a higher score than Phone B on the top priority dimension, Phone A SHALL have a lower (better) rank number than Phone B.

**Validates: Requirements 3.2, 3.3**

### Property 11: Measurable Comparisons

*For any* trade-off pair, the delta value SHALL be a positive number with an associated unit of measurement.

**Validates: Requirements 12.1, 12.2, 12.3, 12.4, 12.5**

### Property 12: Regional Filtering

*For any* phone with a region different from the user's specified region, that phone SHALL be eliminated with rejection reason UNAVAILABLE_IN_REGION.

**Validates: Requirements 15.2**

## Error Handling

### Input Validation Errors

- Invalid budget (negative or zero): Return error "Budget must be a positive number"
- Empty prioritized dimensions: Return error "At least one priority dimension is required"
- Invalid dimension name: Return error "Invalid dimension: [name]. Valid dimensions are: battery, camera, screen, price, storage, weight, performance"
- Invalid region code: Return error "Invalid region code. Must be ISO 3166-1 alpha-2 format"

### Data Errors

- Phone database not found: Return error "Phone database not found at [path]"
- Invalid phone data: Return error "Phone data validation failed: [details]"
- Missing phone ID in user-selected mode: Return error "Phone not found: [id]. Did you mean: [suggestions]?"

### No Qualifying Phones

When no phones meet all constraints, return a structured error with:
- Error message: "No phones meet all specified constraints"
- Constraint relaxation suggestions (at least 2)
- Impact estimates for each suggestion

Example:
```
Error: No phones meet all specified constraints.

Suggestions to relax constraints:
• Increase budget from $300 to $450 (enables 3 additional phones)
• Remove required feature: 5g=true (enables 8 additional phones)
```

### Incomplete Data Handling

When a phone lacks data for prioritized dimensions:
- Exclude phone from scoring on that dimension
- Display warning: "Phone X excluded from [dimension] comparison (data not published)"
- Continue comparison on other dimensions where data exists
- If phone lacks data for ALL prioritized dimensions, eliminate with rejection reason INCOMPLETE_DATA

## Testing Strategy

### Unit Tests (Vitest)

Test individual functions in isolation:

- **Constraint evaluation**: Test each rejection reason (budget, features, region, availability, incomplete data)
- **Scoring algorithm**: Test normalization, priority weighting, tiebreaking
- **Trade-off calculation**: Test pairwise generation, delta calculation, explanation formatting
- **Sensitivity analysis**: Test budget adjustments, priority reordering, impact calculation
- **Type validation**: Test Zod schema validation for all entities

### Property-Based Tests (@fast-check/vitest)

Test universal properties across randomized inputs (minimum 100 iterations per property):

- **Property 1 (Determinism)**: Generate random constraints and phone data, verify evaluatePhones produces identical results on repeated calls
  - **Feature: phone-purchase-referee, Property 1**: Deterministic evaluation
  
- **Property 2 (Elimination Reasons)**: Generate random phone data and constraints, verify all eliminated phones have non-empty rejection_details
  - **Feature: phone-purchase-referee, Property 2**: Complete elimination reasons
  
- **Property 3 (Score Bounds)**: Generate random qualified phones, verify all dimension_scores are between 0.0 and 1.0
  - **Feature: phone-purchase-referee, Property 3**: Normalized dimension scores
  
- **Property 4 (Trade-Off Completeness)**: Generate random qualified phones with ≥2 phones, verify trade_offs array is non-empty
  - **Feature: phone-purchase-referee, Property 4**: Multi-option output
  
- **Property 5 (Conditional Phrasing)**: Generate random qualified phones, verify all conditional_statement strings contain "IF"
  - **Feature: phone-purchase-referee, Property 5**: Conditional phrasing
  
- **Property 6 (Budget Enforcement)**: Generate random phones with prices above budget, verify all are eliminated with EXCEEDS_BUDGET
  - **Feature: phone-purchase-referee, Property 6**: Budget constraint enforcement
  
- **Property 7 (Feature Enforcement)**: Generate random phones missing required features, verify all are eliminated with MISSING_REQUIRED_FEATURE
  - **Feature: phone-purchase-referee, Property 7**: Required feature enforcement
  
- **Property 8 (Trade-Off Pairs)**: Generate random qualified phones, verify trade-off pairs exist for all dimension differences
  - **Feature: phone-purchase-referee, Property 8**: Trade-off completeness
  
- **Property 9 (Sensitivity Rules)**: Generate random comparisons with budget constraints, verify at least one sensitivity rule generated
  - **Feature: phone-purchase-referee, Property 9**: Sensitivity rule generation
  
- **Property 10 (Ranking Order)**: Generate random qualified phones, verify ranks are ordered by priority dimension scores
  - **Feature: phone-purchase-referee, Property 10**: Ranking consistency
  
- **Property 11 (Measurable Deltas)**: Generate random trade-off pairs, verify all delta values are positive numbers
  - **Feature: phone-purchase-referee, Property 11**: Measurable comparisons
  
- **Property 12 (Regional Filtering)**: Generate random phones with different regions, verify phones outside user region are eliminated
  - **Feature: phone-purchase-referee, Property 12**: Regional filtering

### Integration Tests

Test end-to-end flows with realistic data:

- **Constraint-first mode**: Input constraints → evaluate phones → verify qualified/eliminated separation
- **User-selected mode**: Input phone IDs → compare phones → verify trade-offs generated
- **Sensitivity analysis**: Run comparison → adjust constraints → verify impact explanations
- **No qualifying phones**: Input restrictive constraints → verify relaxation suggestions
- **Incomplete data**: Use phone database with missing specs → verify graceful handling

### Manual Testing (Acceptance Scenarios)

Test each user story's acceptance scenarios from requirements.md:

- **Requirement 1**: Test constraint input validation
- **Requirement 2**: Test phone evaluation and elimination
- **Requirement 3**: Test phone scoring and ranking
- **Requirement 4**: Test trade-off analysis
- **Requirement 5**: Test conditional recommendations
- **Requirement 6**: Test constraint-first comparison mode
- **Requirement 7**: Test user-selected comparison mode
- **Requirement 8**: Test sensitivity analysis
- **Requirement 9**: Test no qualifying phones handling
- **Requirement 10**: Test incomplete phone data handling

### Test Configuration

- Minimum 100 iterations per property test (due to randomization)
- Each property test tagged with: **Feature: phone-purchase-referee, Property {number}: {property_text}**
- Unit tests and property tests are complementary (both required)
- Unit tests focus on specific examples and edge cases
- Property tests verify universal correctness across all inputs
