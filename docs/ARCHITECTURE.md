# Architecture Documentation

## Overview

The Phone Purchase Referee is built on a strict separation of concerns between deterministic decision logic and AI-powered research. This architecture ensures transparency, reproducibility, and constitutional compliance.

## Core Principles

### 1. **Referee Engine Independence**

The referee engine (`/core/referee-engine/`) is 100% pure TypeScript with zero AI dependencies:

- **Deterministic**: Same inputs always produce same outputs
- **Testable**: Every function is unit-testable
- **Traceable**: All decisions have explicit reasoning
- **Reproducible**: No randomness, timestamps, or external API calls

### 2. **AI Separation Boundary**

AI (Gemini) is strictly isolated in the `/ai/` directory and used ONLY for:

- Phone spec research with Google Search grounding
- Data gathering from public sources
- **NEVER** for rankings, scores, or decisions

```
┌─────────────────────────────────────────┐
│         User Interface (Next.js)        │
│  ┌──────────────────────────────────┐  │
│  │  /app/ - Server Components       │  │
│  │  Form → Server Action → Results  │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────────────┐
│  Referee Engine (/core/referee-engine/)              │
│  ┌────────────┐  ┌────────────┐  ┌────────────────┐  │
│  │  Rules     │  │  Scoring   │  │  Eliminations  │  │
│  │            │  │            │  │                │  │
│  │ Budget     │  │ Weight by  │  │ "Exceeds      │  │
│  │ Features   │  │ Priorities │  │  budget by    │  │
│  │ Region     │  │ Normalize  │  │  $150"        │  │
│  └────────────┘  └────────────┘  └────────────────┘  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐ │
│  │  Trade-offs: Pairwise comparisons with deltas    │ │
│  │  "Phone A gains 500mAh but sacrifices 10MP"      │ │
│  └──────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  Phone Database (/lib/data/phones.json) │
│  ┌──────────────────────────────────┐  │
│  │  Phone Specs (pre-researched)    │  │
│  │  - Name, Price, Battery, Camera  │  │
│  │  - Features, Region, Availability│  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  AI Research Layer (/ai/) - ISOLATED    │
│  ┌──────────────────────────────────┐  │
│  │  Gemini + Google Search          │  │
│  │  - Fetch phone specs             │  │
│  │  - Ground with real-time data    │  │
│  │  - Populate phones.json          │  │
│  └──────────────────────────────────┘  │
│  ⚠️  NEVER called during comparisons   │
└─────────────────────────────────────────┘
```

## Directory Structure

```
/app/                          # Next.js App Router
  ├── page.tsx                # Home page (navigation)
  ├── layout.tsx              # Root layout with nav
  ├── actions.ts              # Server Actions
  ├── compare/                # Constraint-first mode
  │   └── page.tsx
  └── select/                 # User-selected mode
      └── page.tsx

/core/referee-engine/          # ⭐ PURE TYPESCRIPT LOGIC
  ├── types.ts                # Zod schemas for all entities
  ├── rules.ts                # Elimination rules
  ├── scoring.ts              # Priority-based scoring
  ├── eliminations.ts         # Rejection reason generator
  ├── tradeoffs.ts            # Pairwise trade-off calculator
  ├── sensitivity.ts          # Constraint adjustment analyzer
  └── index.ts                # Main referee interface

/ai/                           # AI RESEARCH LAYER (isolated)
  ├── gemini-research.ts      # Gemini API wrapper
  ├── phone-data.ts           # Phone spec fetching
  └── prompts/
      └── phone-specs.txt     # Structured output prompts

/lib/                          # Shared utilities
  ├── data/
  │   └── phones.json         # Phone database (pre-populated)
  ├── utils.ts                # Helper functions
  ├── constants.ts            # Comparison dimensions, weights
  └── errors.ts               # Custom error classes

/components/                   # React components
  ├── constraint-form.tsx     # Budget + priorities input
  ├── phone-card.tsx          # Phone display with specs
  ├── elimination-panel.tsx   # Rejected phones with reasons
  ├── tradeoff-display.tsx    # Trade-off statements
  ├── comparison-matrix.tsx   # Side-by-side specs
  └── sensitivity-panel.tsx   # "What-if" scenarios

/tests/                        # Integration tests
  └── referee.integration.test.ts

/docs/                         # Documentation
  └── ARCHITECTURE.md         # This file
```

## Data Flow

### Constraint-First Comparison (User Story 1)

```
1. User inputs constraints:
   - Budget: $700
   - Priorities: [battery, camera]
   - Required features: [5G]

2. Server Action receives FormData

3. Referee Engine evaluates:
   a. Filter phones (loadPhoneDatabase)
   b. Apply elimination rules (checkBudget, checkFeatures)
   c. Score remaining phones by priorities
   d. Calculate trade-offs (pairwise)
   e. Generate conditional statements

4. Return ComparisonResult:
   {
     qualified_phones: [
       { phone, scores, rank, conditional: "Phone A IF battery priority" }
     ],
     eliminated_phones: [
       { phone, reason: "Exceeds budget by $150" }
     ],
     trade_offs: [
       { phoneA, phoneB, dimension, delta, advantage }
     ]
   }

5. UI renders results with cards and trade-off displays
```

### User-Selected Comparison (User Story 2)

```
1. User selects phones: ["iPhone 15 Pro", "Samsung S24", "Pixel 8"]

2. Server Action receives phone IDs

3. Referee Engine:
   a. Load selected phones (no filtering)
   b. Calculate all pairwise trade-offs (3 choose 2 = 3 pairs)
   c. Generate conditional statements for each

4. Return comparison matrix without rankings

5. UI displays side-by-side specs and trade-offs
```

## Key Design Decisions

### Why Next.js App Router?

- **Server Components**: Separate logic from UI rendering
- **Server Actions**: No separate API layer needed
- **Streaming**: Progressive enhancement with Forms
- **TypeScript**: Shared types between client/server

### Why Pure TypeScript Referee Engine?

- **Transparency**: Users can read source code
- **Determinism**: Same inputs → same outputs
- **Testing**: 100% code coverage achievable
- **No black boxes**: Every decision is traceable

### Why Zod Schemas?

- **Runtime validation**: Catch bad data early
- **Type inference**: TypeScript types from schemas
- **Structured outputs**: Gemini JSON responses validated
- **Self-documenting**: Schemas serve as specs

### Why JSON Storage?

- **Simplicity**: No database infrastructure
- **Regeneration**: Easy to rebuild from AI research
- **Inspection**: Judges can read phones.json directly
- **Versioning**: Git tracks all changes

## Constitutional Compliance

### Multi-Option Comparison

```typescript
// rules.ts enforces ≥2 phones
export function evaluatePhones(constraints, phones) {
  const qualified = phones.filter(meetsConstraints);

  if (qualified.length < 2) {
    return {
      qualified_phones: [],
      eliminated_phones: phones,
      suggestion: "Relax budget by $50 to see 3 more options",
    };
  }

  // Continue with comparison...
}
```

### No Absolute Recommendations

```typescript
// scoring.ts generates conditional statements
export function generateConditionalStatement(phone, priorities) {
  return `${phone.name} is optimal IF ${priorities[0]} is top priority`;
  // Never: "iPhone 15 Pro is the best phone"
}
```

### Explicit Trade-Offs

```typescript
// tradeoffs.ts calculates measurable deltas
export function calculateTradeOff(phoneA, phoneB, dimension) {
  const delta = phoneA[dimension] - phoneB[dimension];
  return {
    phoneA,
    phoneB,
    dimension,
    delta: Math.abs(delta),
    advantage: delta > 0 ? phoneA : phoneB,
    statement: `${phoneA.name} gains ${Math.abs(delta)}${unit} but sacrifices...`,
  };
}
```

## Testing Strategy

### Unit Tests (Vitest)

```typescript
// core/referee-engine/rules.test.ts
test("checkBudget rejects phones exceeding budget", () => {
  const phone = { name: "iPhone 15 Pro", price: 999 };
  const constraint = { budget: 800 };

  const result = checkBudget(phone, constraint);

  expect(result.passes).toBe(false);
  expect(result.reason).toBe("Exceeds budget by $199");
});
```

### Property-Based Tests (@fast-check)

```typescript
// core/referee-engine/referee.property.test.ts
test("evaluatePhones is deterministic", () => {
  fc.assert(
    fc.property(fc.record({ budget, priorities }), (constraints) => {
      const result1 = evaluatePhones(constraints, phones);
      const result2 = evaluatePhones(constraints, phones);

      expect(result1).toEqual(result2); // Determinism
    })
  );
});
```

### Integration Tests

```typescript
// tests/referee.integration.test.ts
test("full constraint-first flow", async () => {
  const formData = new FormData();
  formData.set("budget", "700");
  formData.set("priorities", "battery,camera");

  const result = await comparePhones(formData);

  expect(result.qualified_phones.length).toBeGreaterThanOrEqual(2);
  expect(result.eliminated_phones.every((p) => p.reason)).toBe(true);
});
```

## Performance Targets

- **Referee engine evaluation**: <50ms for 10 phones
- **Full comparison (with Gemini research)**: <2s (cached)
- **UI interaction**: <100ms (Server Components)
- **Page load**: <1s (Next.js optimizations)

## Deployment

### Vercel (Recommended)

```bash
vercel --prod
```

Environment variables:

- `GEMINI_API_KEY`: Your Gemini API key
- `NODE_ENV`: production

### Self-Hosted

```bash
npm run build
npm start
```

## Future Enhancements

- **Database**: Replace JSON with PostgreSQL for scale
- **Caching**: Add Redis for phone data
- **Admin panel**: UI for managing phone database
- **Batch research**: Automated phone spec updates
- **Analytics**: Track comparison patterns

## References

- [Specification](../specs/001-phone-purchase-referee/spec.md)
- [Implementation Plan](../specs/001-phone-purchase-referee/plan.md)
- [Constitution](.specify/memory/constitution.md)
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Gemini API Docs](https://ai.google.dev/docs)
