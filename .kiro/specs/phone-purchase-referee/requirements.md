# Requirements Document

## Introduction

The Phone Purchase Referee is a decision support system that helps users choose between smartphones by comparing options based on user-defined constraints rather than absolute rankings. The system provides constraint-first comparison, explicit trade-off analysis, and conditional verdicts without declaring any phone "the best."

## Glossary

- **System**: The Phone Purchase Referee application
- **User**: A person seeking to make an informed smartphone purchase decision
- **Phone**: A smartphone device with technical specifications and pricing
- **Constraint**: A user-defined requirement or preference (budget, required features, priorities)
- **Qualified_Phone**: A phone that meets all user constraints
- **Eliminated_Phone**: A phone that fails to meet one or more user constraints
- **Trade_Off**: A comparison showing what is gained and sacrificed between two phones
- **Conditional_Statement**: A recommendation phrased as "Phone X is optimal IF [conditions]"
- **Dimension**: A measurable phone attribute (battery capacity, camera megapixels, price, etc.)
- **Sensitivity_Analysis**: Evaluation of how changing constraints affects recommendations

## Requirements

### Requirement 1: Constraint Input

**User Story:** As a user, I want to specify my budget and priorities, so that I can find phones matching my specific needs.

#### Acceptance Criteria

1. WHEN a user provides a budget value, THE System SHALL accept any positive dollar amount as the maximum acceptable price
2. WHEN a user specifies priorities, THE System SHALL accept an ordered list of 1 to 5 dimensions ranked by importance
3. WHEN a user defines required features, THE System SHALL accept key-value pairs representing must-have specifications
4. WHEN a user specifies a region, THE System SHALL filter phones by market availability for that region
5. IF a user provides invalid constraint data, THEN THE System SHALL return descriptive validation errors

### Requirement 2: Phone Evaluation

**User Story:** As a user, I want the system to evaluate phones against my constraints, so that I can see which options qualify and which don't.

#### Acceptance Criteria

1. WHEN the System evaluates phones, THE System SHALL separate qualifying phones from eliminated phones based on user constraints
2. WHEN a phone exceeds the budget, THE System SHALL eliminate it with the rejection reason "exceeds budget by $X"
3. WHEN a phone lacks a required feature, THE System SHALL eliminate it with the rejection reason "missing required feature: [feature_name]"
4. WHEN a phone is unavailable in the user's region, THE System SHALL eliminate it with the rejection reason "unavailable in region: [region_code]"
5. WHEN a phone has discontinued availability status, THE System SHALL eliminate it with the rejection reason "discontinued"

### Requirement 3: Phone Scoring

**User Story:** As a user, I want qualifying phones ranked by my priorities, so that I can see which options best match my preferences.

#### Acceptance Criteria

1. WHEN the System scores qualifying phones, THE System SHALL calculate dimension scores normalized between 0.0 and 1.0
2. WHEN the System ranks phones, THE System SHALL order them by the first priority dimension, then by subsequent priorities for ties
3. WHEN the System assigns ranks, THE System SHALL use 1-indexed positions where lower numbers indicate better matches
4. WHEN two phones have identical scores on all prioritized dimensions, THE System SHALL assign them equal ranks
5. THE System SHALL provide dimension scores for each phone showing performance on each prioritized attribute

### Requirement 4: Trade-Off Analysis

**User Story:** As a user, I want to understand trade-offs between qualifying phones, so that I can make an informed decision.

#### Acceptance Criteria

1. WHEN the System compares qualifying phones, THE System SHALL generate pairwise trade-off statements for all phone combinations
2. WHEN generating trade-offs, THE System SHALL identify which phone has the advantage on each dimension
3. WHEN calculating trade-offs, THE System SHALL compute the absolute difference (delta) between phone values on each dimension
4. WHEN presenting trade-offs, THE System SHALL use the format "Phone A gains [delta] [dimension] but sacrifices [delta] [other_dimension] vs Phone B"
5. IF two phones tie on a dimension, THEN THE System SHALL omit that dimension from the trade-off statement

### Requirement 5: Conditional Recommendations

**User Story:** As a user, I want recommendations phrased conditionally, so that I understand the context in which each phone is optimal.

#### Acceptance Criteria

1. WHEN the System generates recommendations, THE System SHALL use conditional phrasing with "IF" statements
2. THE System SHALL NOT use absolute terms like "best phone" without conditional qualifiers
3. WHEN presenting a phone, THE System SHALL state "Phone X is optimal IF [user's top priority] is highest priority"
4. WHEN multiple phones qualify, THE System SHALL provide conditional statements for each option
5. THE System SHALL base conditional statements on the user's specified priorities and constraints

### Requirement 6: Constraint-First Comparison Mode

**User Story:** As a user, I want to input my constraints and discover phones that match, so that I can explore options I might not have considered.

#### Acceptance Criteria

1. WHEN a user provides constraints without specifying phone names, THE System SHALL evaluate all phones in the database
2. WHEN the System completes evaluation, THE System SHALL return at least 2 qualifying phones or explain why fewer qualify
3. WHEN presenting results, THE System SHALL show qualified phones ranked by user priorities
4. WHEN presenting results, THE System SHALL show eliminated phones with explicit rejection reasons
5. WHEN presenting results, THE System SHALL include trade-off analysis and conditional statements

### Requirement 7: User-Selected Comparison Mode

**User Story:** As a user, I want to compare specific phones I'm considering, so that I can understand differences between my shortlisted options.

#### Acceptance Criteria

1. WHEN a user provides 2 to 5 phone names, THE System SHALL retrieve those specific phones from the database
2. IF a phone name is not found, THEN THE System SHALL return an error with fuzzy match suggestions
3. WHEN comparing user-selected phones, THE System SHALL generate pairwise trade-offs for all combinations
4. WHEN comparing user-selected phones, THE System SHALL provide conditional statements for each phone
5. WHEN comparing user-selected phones, THE System SHALL NOT apply budget or required feature constraints

### Requirement 8: Sensitivity Analysis

**User Story:** As a user, I want to see how changing my constraints affects recommendations, so that I can explore alternative scenarios.

#### Acceptance Criteria

1. WHEN the System performs sensitivity analysis, THE System SHALL generate budget adjustment scenarios at ±$50, ±$100, and ±$150 increments
2. WHEN the System performs sensitivity analysis, THE System SHALL generate priority reordering scenarios for top 2 priorities
3. WHEN a budget increase scenario is generated, THE System SHALL identify new phones that become viable
4. WHEN a priority reordering scenario is generated, THE System SHALL show ranking changes with explanations
5. WHEN presenting sensitivity rules, THE System SHALL use the format "IF [adjustment] THEN [impact]"

### Requirement 9: No Qualifying Phones Handling

**User Story:** As a user, I want helpful suggestions when no phones meet my constraints, so that I can adjust my requirements productively.

#### Acceptance Criteria

1. WHEN no phones meet all constraints, THE System SHALL return an error message stating "No phones meet all specified constraints"
2. WHEN no phones qualify, THE System SHALL suggest specific constraint relaxations with impact estimates
3. WHEN suggesting relaxations, THE System SHALL identify which constraint to adjust and by how much
4. WHEN suggesting relaxations, THE System SHALL show how many additional phones would qualify with each adjustment
5. THE System SHALL provide at least 2 constraint relaxation suggestions when no phones qualify

### Requirement 10: Incomplete Phone Data Handling

**User Story:** As a user, I want clear communication when phone data is missing, so that I understand limitations in the comparison.

#### Acceptance Criteria

1. WHEN a phone lacks data for a prioritized dimension, THE System SHALL exclude that phone from scoring on that dimension
2. WHEN excluding a phone from a dimension, THE System SHALL display a warning message stating "Phone X excluded from [dimension] comparison (data not published)"
3. WHEN a phone has incomplete data, THE System SHALL still include it in comparisons for dimensions where data exists
4. WHEN generating trade-offs, THE System SHALL skip dimensions where either phone lacks data
5. IF a phone lacks data for all prioritized dimensions, THEN THE System SHALL eliminate it with rejection reason "incomplete data"

### Requirement 11: Deterministic Logic

**User Story:** As a system architect, I want comparison logic to be deterministic, so that identical inputs always produce identical outputs.

#### Acceptance Criteria

1. WHEN the System evaluates phones with identical constraints and phone data, THE System SHALL produce identical comparison results
2. THE System SHALL NOT use random number generation in decision logic
3. THE System SHALL NOT use current timestamps in decision logic
4. WHEN sorting phones with equal scores, THE System SHALL use a consistent tiebreaker (alphabetical by phone ID)
5. THE System SHALL provide execution metadata including timestamp and phone database version for reproducibility auditing

### Requirement 12: Measurable Comparisons

**User Story:** As a user, I want comparisons based on measurable values, so that I can verify claims and understand differences objectively.

#### Acceptance Criteria

1. WHEN the System compares battery capacity, THE System SHALL use milliampere-hours (mAh) as the unit
2. WHEN the System compares camera quality, THE System SHALL use megapixels (MP) as the primary metric
3. WHEN the System compares screen size, THE System SHALL use diagonal inches as the unit
4. WHEN the System compares price, THE System SHALL use US dollars (USD) as the currency
5. WHEN the System presents comparisons, THE System SHALL include actual numeric values with units, not vague terms like "better"

### Requirement 13: Multi-Option Comparison

**User Story:** As a user, I want to see at least 2 phone options in any comparison, so that I can make a choice rather than receive a single recommendation.

#### Acceptance Criteria

1. WHEN the System returns comparison results, THE System SHALL include at least 2 qualifying phones
2. IF only 1 phone qualifies, THEN THE System SHALL explain why and suggest constraint relaxations to enable comparison
3. IF 0 phones qualify, THEN THE System SHALL provide constraint relaxation suggestions
4. WHEN presenting results, THE System SHALL show trade-offs between all qualifying phone pairs
5. THE System SHALL NOT output single-phone recommendations without explaining why alternatives were eliminated

### Requirement 14: Traceable Decision Logic

**User Story:** As a user, I want to understand why Phone X was recommended over Phone Y, so that I can trust the system's reasoning.

#### Acceptance Criteria

1. WHEN the System ranks phones, THE System SHALL provide dimension scores showing performance on each priority
2. WHEN the System eliminates phones, THE System SHALL provide explicit rejection reasons with specific values
3. WHEN the System generates conditional statements, THE System SHALL reference the user's specified priorities
4. WHEN the System calculates trade-offs, THE System SHALL show numeric deltas between phone values
5. THE System SHALL provide a decision audit trail showing constraint evaluation, scoring, and ranking steps

### Requirement 15: Regional Availability

**User Story:** As a user, I want to filter phones by my region, so that I only see options available for purchase in my market.

#### Acceptance Criteria

1. WHEN a user specifies a region, THE System SHALL filter phones to only those available in that region
2. WHEN a phone is unavailable in the user's region, THE System SHALL eliminate it with rejection reason "unavailable in region: [region_code]"
3. WHEN no region is specified, THE System SHALL default to region "US"
4. THE System SHALL accept ISO 3166-1 alpha-2 country codes as valid region identifiers
5. WHEN a phone has multiple regional prices, THE System SHALL use the price for the user's specified region
