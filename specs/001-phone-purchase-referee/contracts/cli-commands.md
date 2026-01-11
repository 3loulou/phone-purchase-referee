# CLI Command Contracts

**Purpose**: Define inputs/outputs for CLI commands (no REST API for this CLI-only tool)

## Command: refree compare

**Description**: Constraint-first phone comparison mode (User Story 1, Priority P1)

**Inputs**:
- --budget <float>: Maximum acceptable price in USD (optional)
- --priority <dimension>: Prioritized dimension, repeatable flag to build ordered list (required, 1-5 occurrences)
- --require <feature=value>: Required feature constraint, repeatable (optional)
- --region <code>: Market region filter (optional, default: US)
- --output <format>: Output format choice: text or json (optional, default: text)
- --verbose: Include full decision audit trail (optional flag)

**Valid Dimension Names**: battery, camera, screen, price, storage, weight, performance

**Example**: refree compare --budget 700 --priority battery --priority camera --require 5g=true

**Success Output**: Qualifying phones with conditional statements, eliminated phones with rejection reasons, trade-off analysis, sensitivity suggestions

**Error Cases**: No qualifying phones, invalid dimensions, missing required priorities

## Command: refree select

**Description**: User-selected phone comparison mode (User Story 2, Priority P2)

**Inputs**:
- <phone_names...>: Space-separated phone names (2-5 phones required)
- --priority <dimension>: Optional priority ordering (repeatable)
- --output <format>: Output format choice (optional, default: text)

**Example**: refree select "iPhone 15 Pro" "Samsung S24 Ultra" "Pixel 8 Pro"

**Success Output**: Comparison matrix showing specs, trade-offs with conditional statements

**Error Cases**: Phone not found, too few/many phones, fuzzy match suggestions

## Command: refree analyze

**Description**: Sensitivity analysis (User Story 3, Priority P3)

**Inputs**:
- --adjust <parameter=value>: Constraint adjustment, repeatable

**Example**: refree analyze --adjust budget=850

**Success Output**: Impact of adjustment, new qualifying phones, ranking changes, conditional recommendations

## Exit Codes

- 0: Success
- 1: User input error
- 2: Data error
- 3: Internal error
