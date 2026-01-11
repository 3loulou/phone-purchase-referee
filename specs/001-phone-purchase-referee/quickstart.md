# Quickstart: Phone Purchase Referee

**Purpose**: Get started with phone comparison in under 5 minutes

## Installation

```bash
# Clone repository
git clone <repo-url>
cd refree

# Install dependencies (Python 3.11+ required)
pip install -e .

# Verify installation
refree --version
```

## Basic Usage

### Mode 1: Constraint-First Comparison (Find phones matching your needs)

**Scenario**: You have a $700 budget and prioritize battery life over camera quality.

```bash
refree compare --budget 700 --priority battery --priority camera --require 5g=true
```

**What you get**:
- List of phones meeting your budget and requirements
- Each phone ranked by your priorities (battery first, camera second)
- Explicit reasons why phones were eliminated (e.g., "exceeds budget by $299")
- Conditional statements: "Phone X is optimal IF battery life is top priority"
- Trade-off analysis: "Phone A gains 500 mAh battery but sacrifices 10 MP camera vs Phone B"

---

### Mode 2: User-Selected Comparison (Compare specific phones you're considering)

**Scenario**: You've narrowed choices to iPhone 15 Pro, Samsung S24 Ultra, and Pixel 8 Pro.

```bash
refree select "iPhone 15 Pro" "Samsung S24 Ultra" "Pixel 8 Pro"
```

**What you get**:
- Side-by-side comparison matrix showing all specs
- Trade-offs for each phone (what you gain/sacrifice)
- Conditional statements for when each phone is optimal
- No absolute "winner" - context determines best choice

---

### Mode 3: Sensitivity Analysis (Explore "what if" scenarios)

**Scenario**: You ran a comparison with $700 budget and wonder what changes if you increase to $850.

```bash
# First, run a comparison
refree compare --budget 700 --priority battery --priority camera

# Then analyze sensitivity
refree analyze --adjust budget=850
```

**What you get**:
- New phones that become viable at higher budget
- Ranking changes based on adjustment
- Conditional recommendation: "IF budget increases to $850, THEN iPhone 15 Pro justified for superior camera"

---

## Common Workflows

### Workflow 1: First-time phone buyer (no idea where to start)

```bash
# Step 1: List all available phones
refree list --available-only --region US

# Step 2: Set basic constraints and explore
refree compare --budget 500 --priority price --priority battery

# Step 3: Adjust if no good options
refree analyze --adjust budget=600
```

---

### Workflow 2: Upgrading from current phone (comparing similar options)

```bash
# Step 1: Compare current phone vs potential upgrades
refree select "iPhone 14 Pro" "iPhone 15 Pro"

# Step 2: See if price delta justifies upgrade
# Output shows incremental improvements and conditional recommendation
```

---

### Workflow 3: Technical user (specific requirements)

```bash
# Step 1: Strict requirements and multiple priorities
refree compare \
  --budget 1200 \
  --require 5g=true \
  --require min_storage=256 \
  --priority performance \
  --priority camera \
  --priority battery \
  --output json > comparison.json

# Step 2: Parse JSON programmatically for further analysis
cat comparison.json | jq '.qualified_phones[] | .conditional_statement'
```

---

## Output Formats

### Text Output (default, human-readable)

```
=== Phone Purchase Referee: Constraint-First Comparison ===

Constraints Applied:
  Budget: $700.00
  Priorities: battery > camera
  Required: 5G support

Qualifying Phones (3):
1. Pixel 8 Pro ($699)
   → Pixel 8 Pro is optimal IF battery life is top priority and budget allows up to $700

Trade-Offs:
  • OnePlus 12 gains 350 mAh battery capacity vs Pixel 8 Pro

Eliminated Phones (2):
  ✗ iPhone 15 Pro ($999) - Exceeds budget by $299

Sensitivity Analysis:
  IF budget increases to $850, THEN iPhone 15 Pro becomes viable
```

### JSON Output (for programmatic use)

```bash
refree compare --budget 700 --priority battery --output json
```

```json
{
  "qualified_phones": [...],
  "eliminated_phones": [...],
  "trade_offs": [...],
  "sensitivity_rules": [...],
  "metadata": {
    "timestamp": "2026-01-07T16:42:00Z",
    "execution_time_ms": 127
  }
}
```

---

## Understanding Conditional Statements

**Why no absolute "best phone"?**

The Referee system follows constitutional principles:
- **Multi-Option Comparison**: Always shows at least 2 options (or explains why impossible)
- **No Absolute Recommendations**: Uses conditional phrasing ("Phone X is optimal IF...")
- **Explicit Trade-Offs**: Shows what you gain and sacrifice with each choice
- **Deterministic Logic**: Same inputs always produce same outputs (reproducible)

**Example conditional statements**:
- "iPhone 15 Pro is optimal IF camera quality is highest priority AND budget allows premium pricing"
- "Pixel 8 Pro is optimal IF battery life is top priority AND computational photography is valued"
- "OnePlus 12 is optimal IF value for money is priority AND battery life matters more than brand ecosystem"

**Key insight**: The "best" phone depends on YOUR constraints and priorities. The referee shows you options and trade-offs; you make the final decision.

---

## Handling Edge Cases

### No Phones Meet Constraints

```bash
refree compare --budget 300 --require 5g=true --require min_storage=512
```

**Output**:
```
Error: No phones meet all specified constraints.

Suggestions to relax constraints:
  • Increase budget from $300 to $450 (enables 3 additional phones)
  • Lower storage requirement from 512 GB to 256 GB (enables 8 additional phones)

Eliminated phones: 147 (all rejected)
```

### Incomplete Phone Data

```bash
refree compare --priority battery --priority camera
```

**If a phone lacks battery data**:
```
⚠ Warning: Galaxy Z Flip 5 excluded from battery comparison (data not published)
  Can still compare on camera dimension
```

### Ties (identical specs)

```bash
refree select "Phone A" "Phone B"  # Both have 5000 mAh battery
```

**Output**:
```
Trade-Offs:
  • Phone A and Phone B tie on battery capacity (5000 mAh)
  • Phone A gains 10 MP camera advantage
  • Phone B gains $50 price advantage
```

---

## Performance Expectations

Based on success criteria from spec.md:

- **Constraint-first comparison**: <3 minutes total (typically <1 second for 100-phone database)
- **User-selected comparison**: <1 second for up to 5 phones
- **Sensitivity analysis**: <1 second (recomputes comparison with adjusted constraints)

**Reproducibility**: Given identical constraints and phone database, the referee produces identical output (SC-010 compliance).

---

## Next Steps

- Read `docs/architecture.md` to understand referee engine internals
- Read `specs/001-phone-purchase-referee/data-model.md` for entity details
- Explore `src/services/referee_engine.py` for decision logic implementation
- Run tests: `pytest tests/`

---

## Troubleshooting

### "Phone not found" error

```bash
refree select "Galaxy S25"
# Error: Phone "Galaxy S25" not found

# Solution: Use fuzzy matching suggestions or list available phones
refree list | grep Galaxy
```

### "Invalid dimension" error

```bash
refree compare --priority batterylife  # Wrong dimension name
# Error: Invalid priority dimension 'batterylife'

# Solution: Use valid dimension names (battery, camera, screen, price, storage, weight, performance)
refree compare --priority battery
```

### "At least one --priority required" error

```bash
refree compare --budget 700  # Missing priorities
# Error: At least one --priority flag is required

# Solution: Specify at least one priority dimension
refree compare --budget 700 --priority battery
```

---

## Design Philosophy

The Phone Purchase Referee is built on these principles (from `.specify/memory/constitution.md`):

1. **Compare, don't rank**: Always shows multiple options with trade-offs
2. **Conditional, not absolute**: No "best phone" without stating constraints
3. **Transparent logic**: You can trace why Phone X recommended over Phone Y
4. **Deterministic**: No randomness, no LLM black boxes
5. **Trade-off focused**: Explicitly shows what you gain and sacrifice

**Goal**: Help you make an informed decision based on YOUR priorities, not someone else's ranking.
