# Building a Deterministic Phone Referee: AI-Assisted Decisions Without Black Boxes

**Title:** Building a Deterministic Phone Referee: AI-Assisted Decisions Without Black Boxes

**Description:** How I designed a constraint-first phone comparison system that keeps decision logic deterministic, uses AI only for research and explanations, and delivers transparent trade-offs developers can trust—ready to run on modern cloud platforms.

**Tags:** ai, architecture, typescript, nextjs, decision-systems

---

## Why I Wanted a Referee, Not Another "Best Phones" List

Most comparison sites feel the same:

- One "best overall" device
- A wall of specs
- A black-box score you're supposed to trust

As builders, we know what's missing:

- Real constraints (budget, region, required features)
- Clear trade-offs ("you gain X, but you sacrifice Y")
- Deterministic behavior we can test and version-control

So I set out to build a **Phone Purchase Referee**:

- Not a ranking engine
- Not a "top 10" list
- But a **referee** that explains calls with evidence

The core idea:

> Let deterministic code make the decisions.
> Let AI help with research and storytelling—never with the verdict.

---

## Design Goals

### 1. Constraint-First, Not Spec-First

The user starts with constraints:

- Budget in local currency (₹ Rupees for Indian market)
- Priorities (battery, camera, display, performance, etc.)
- Required features (5G, AMOLED, IP rating, region availability)

The system responds with:

- Multiple qualifying phones
- Explicit reasons for eliminations
- Conditional statements like:
  **"Phone A is optimal _if_ battery life is your top priority."**

### 2. Deterministic Core

The referee engine must be:

- **Pure** TypeScript
- **Testable** with unit and property-based tests
- **Reproducible** (no randomness, no hidden network calls)

Given the same:

- Phone database
- User constraints

…it should always produce the same result.

### 3. AI on the Boundary, Not in the Brain

AI is used **only** for:

- Researching phone specs from public sources
- Formatting explanations in natural language

It is **never** used for:

- Scoring phones
- Ranking results
- Choosing a winner

This separation is what makes the system cloud-portable and auditable.

---

## High-Level Architecture

The system is split into three layers:

```
┌─────────────────────────────────────────┐
│      User Interface (Next.js)           │
│  ┌──────────────────────────────────┐  │
│  │  Server Components + Actions     │  │
│  │  Form → Constraints → Results    │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│   Referee Engine (Pure TypeScript)      │
│  ┌──────────────────────────────────┐  │
│  │  Elimination Rules               │  │
│  │  Scoring & Ranking               │  │
│  │  Trade-off Calculation           │  │
│  │  Sensitivity Analysis            │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│   AI Research Layer (Optional)          │
│  ┌──────────────────────────────────┐  │
│  │  Google Search Grounding         │  │
│  │  Structured JSON Output          │  │
│  │  Schema Validation               │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## Modeling Constraints and Phones

The system starts with a clear domain model.

### User Constraints

```typescript
type PriorityDimension =
  | "battery"
  | "camera"
  | "display"
  | "performance"
  | "storage"
  | "price"
  | "weight";

interface UserConstraints {
  budgetInINR: number;
  requiredFeatures: string[];          // e.g. ["5G", "AMOLED"]
  prioritizedDimensions: PriorityDimension[]; // ordered
  region: string;                      // e.g. "IN"
}
```

### Phone Entity

```typescript
interface Phone {
  id: string;
  name: string;
  brand: string;
  priceInINR: number;
  batteryMah: number;
  cameraMp: number;
  screenInches: number;
  ramGb: number;
  storageGb: number;
  processor: string;
  has5G: boolean;
  weightGrams: number;
  refreshRateHz: number;
  displayType: string;
  os: string;
  region: string;
  availability: "current" | "discontinued";
}
```

Data is validated with schemas before reaching the engine.

---

## Referee Engine: A Deterministic Decision Pipeline

The heart of the system is a single orchestration function:

```typescript
function evaluatePhones(
  phones: Phone[],
  constraints: UserConstraints
): ComparisonResult {
  const validated = validateConstraints(constraints);

  const { qualified, eliminated } = applyEliminationRules(
    phones,
    validated
  );

  const ranked = scoreAndRankPhones(qualified, validated);

  const tradeoffs = calculatePairwiseTradeoffs(ranked, validated);

  const sensitivity = generateSensitivityRules(ranked, validated);

  return {
    qualifiedPhones: ranked,
    eliminatedPhones: eliminated,
    tradeoffs,
    sensitivity,
    metadata: {
      engineVersion: "1.0.0",
      phoneDatabaseVersion: getPhoneDatabaseVersion(phones),
    },
  };
}
```

### Step 1: Elimination Rules

Elimination rules behave like a strict referee:

**Budget Check**
```typescript
function checkBudgetConstraint(
  phone: Phone,
  constraints: UserConstraints
): RuleCheckResult {
  if (phone.priceInINR > constraints.budgetInINR) {
    const excess = phone.priceInINR - constraints.budgetInINR;
    return {
      passed: false,
      reason: "OVER_BUDGET",
      details: `Exceeds budget by ₹${excess.toLocaleString('en-IN')}`,
    };
  }
  return { passed: true };
}
```

**Feature Requirements**
```typescript
function checkRequiredFeatures(
  phone: Phone,
  constraints: UserConstraints
): RuleCheckResult {
  for (const feature of constraints.requiredFeatures) {
    if (feature === "5G" && !phone.has5G) {
      return {
        passed: false,
        reason: "MISSING_FEATURE",
        details: "Does not support 5G; requires 5G",
      };
    }
  }
  return { passed: true };
}
```

### Step 2: Scoring and Ranking

For qualifying phones, the engine computes a weighted score:

```typescript
function calculateWeightedScore(
  phone: Phone,
  constraints: UserConstraints
): number {
  const weights = getPriorityWeights(constraints.prioritizedDimensions);

  const batteryScore = normalizeBattery(phone.batteryMah);
  const cameraScore = normalizeCamera(phone.cameraMp);
  const priceScore = normalizePrice(phone.priceInINR);

  return (
    weights.battery * batteryScore +
    weights.camera * cameraScore +
    weights.price * priceScore
  );
}
```

There is:

- No randomness
- No network I/O
- No model calls

Just pure math over well-typed data.

### Step 3: Explicit Trade-Offs

For top contenders, the engine generates trade-off statements:

```typescript
function calculatePairwiseTradeoffs(
  phoneA: Phone,
  phoneB: Phone,
  dimension: string
): TradeOff {
  const valueA = phoneA[dimension];
  const valueB = phoneB[dimension];
  const delta = Math.abs(valueA - valueB);
  
  const advantage = valueA > valueB ? phoneA : phoneB;
  
  let explanation: string;
  if (dimension === "batteryMah") {
    explanation = `${advantage.name} has ${delta}mAh more battery`;
  } else if (dimension === "priceInINR") {
    explanation = `${advantage.name} is ₹${delta.toLocaleString('en-IN')} cheaper`;
  }
  
  return { phoneA, phoneB, dimension, delta, advantage, explanation };
}
```

### Step 4: Sensitivity Analysis

When nothing qualifies—or when results are thin—the engine suggests how to move the constraints:

```typescript
function generateSensitivityRules(
  qualified: Phone[],
  constraints: UserConstraints
): SensitivityRule[] {
  const rules: SensitivityRule[] = [];
  
  if (qualified.length < 3) {
    // Suggest budget increase
    const newBudget = constraints.budgetInINR + 2000;
    const additionalPhones = countPhonesUnderBudget(newBudget);
    
    rules.push({
      type: "BUDGET_INCREASE",
      suggestion: `Increase budget by ₹2,000 to see ${additionalPhones} more phones`,
      impact: additionalPhones,
    });
  }
  
  return rules;
}
```

---

## AI Research & Explanation Layer

To keep the referee engine pure, all AI work lives in a separate module.

### Structured Output with Schemas

Instead of free-form text, the research agent produces JSON that matches a schema:

```typescript
const phoneResearchSchema = z.object({
  model: z.string(),
  chipsetClass: z.enum(["low", "mid", "high"]),
  cameraStrength: z.enum(["weak", "average", "strong"]),
  batteryLife: z.enum(["weak", "average", "strong"]),
  knownIssues: z.array(z.string()),
});
```

Flow:

1. Call the model with prompt + search tools
2. Receive a JSON string
3. Sanitize and parse the JSON
4. Validate against the schema
5. Only then, update the phone database

```typescript
async function researchPhone(phoneName: string): Promise<PhoneSpecs> {
  const response = await ai.generateContent({
    model: "gemini-2.0-flash-exp",
    prompt: `Research smartphone "${phoneName}" and provide specs...`,
    tools: [{ googleSearch: {} }],
    responseSchema: phoneResearchSchema,
  });
  
  // Sanitize control characters
  const sanitized = sanitizeJSON(response.text);
  
  // Parse and validate
  const data = phoneResearchSchema.parse(JSON.parse(sanitized));
  
  return data;
}
```

### Explanation Guardrails

The explanation prompt is equally strict:

```typescript
const explanationPrompt = `
You are explaining a verdict decided by a Referee Engine.

Rules:
- Do NOT change the verdict
- Do NOT add new reasoning
- Keep explanations under 3 lines each
- Use clear, non-marketing language
- Explicitly mention trade-offs

Generate:
- Winner explanation
- Alternative explanation
- Referee note (1-2 sentences)
`;
```

This keeps AI in the role of **commentator**, not **referee**.

---

## Deploying on Cloud Platforms

Although this implementation uses Next.js, the architecture transfers cleanly to cloud platforms.

### Frontend & Referee Engine

- Deploy the Next.js app on Vercel, AWS Amplify, or similar
- Place the referee engine logic in libraries that can also run:
  - As serverless functions (AWS Lambda, Cloudflare Workers)
  - Inside containerized services (Docker, Kubernetes)

### Phone Database

**Option 1: Flat File (JSON)**
```typescript
// lib/data/phones.json
[
  {
    "id": "iphone-15",
    "name": "iPhone 15",
    "brand": "Apple",
    "priceInINR": 79900,
    "batteryMah": 3349,
    // ...
  }
]
```

**Option 2: Database (for scale)**
- Amazon DynamoDB
- PostgreSQL on Amazon RDS
- MongoDB Atlas

### AI Integration

Keep the same JSON-schema and sanitization pattern:

```typescript
function sanitizeJSON(text: string): string {
  return text
    .replace(/\\/g, '\\\\')     // Escape backslashes first
    .replace(/\n/g, '\\n')       // Escape newlines
    .replace(/\r/g, '\\r')       // Escape carriage returns
    .replace(/\t/g, '\\t')       // Escape tabs
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, ''); // Remove control chars
}
```

This prevents "Bad control character in string literal" JSON parsing errors.

---

## Performance Targets

The system is designed with strict performance targets:

- **Referee engine evaluation**: `<50ms` for 10 phones
- **Full comparison (with AI research)**: `<2s` (cached)
- **UI interaction**: `<100ms` (Server Components)
- **Page load**: `<1s` (Next.js optimizations)

Achieving these requires:

1. **Pure TypeScript core** (no async I/O in decision logic)
2. **Aggressive caching** (phone data, AI responses)
3. **Server Components** (no client-side hydration delay)
4. **Optimized data structures** (indexed lookups, efficient sorts)

---

## Testing Strategy

The project uses multiple testing approaches:

### Unit Tests

```typescript
// core/referee-engine/rules.test.ts
test("checkBudget rejects phones exceeding budget", () => {
  const phone = { priceInINR: 80000, /* ... */ };
  const constraints = { budgetInINR: 70000, /* ... */ };
  
  const result = checkBudgetConstraint(phone, constraints);
  
  expect(result.passed).toBe(false);
  expect(result.reason).toBe("OVER_BUDGET");
  expect(result.details).toContain("₹10,000");
});
```

### Property-Based Tests

```typescript
// core/referee-engine/referee.property.test.ts
import fc from '@fast-check/vitest';

test("determinism: same inputs → same outputs", () => {
  fc.assert(
    fc.property(
      fc.array(phoneArbitrary),
      fc.constraintsArbitrary,
      (phones, constraints) => {
        const result1 = evaluatePhones(phones, constraints);
        const result2 = evaluatePhones(phones, constraints);
        
        expect(result1).toEqual(result2);
      }
    )
  );
});
```

### Integration Tests

```typescript
// tests/referee.integration.test.ts
test("full comparison workflow", async () => {
  const phones = await loadPhoneDatabase();
  const constraints = {
    budgetInINR: 30000,
    prioritizedDimensions: ["battery", "camera"],
    requiredFeatures: ["5G"],
    region: "IN",
  };
  
  const result = evaluatePhones(phones, constraints);
  
  expect(result.qualifiedPhones.length).toBeGreaterThan(0);
  expect(result.eliminatedPhones.length).toBeGreaterThan(0);
  expect(result.tradeoffs.length).toBeGreaterThan(0);
});
```

---

## Constitutional Principles

The project follows strict principles defined in the constitution:

1. **Multi-Option Comparison**: System MUST compare at least 2 options
2. **No Absolute Recommendations**: Use conditional framework ("Phone X IF constraint Y")
3. **Explicit Trade-Offs**: Show measurable dimensions (battery mAh, price delta)
4. **Conditional Logic**: All recommendations are traceable and conditional
5. **Explainable Reasoning**: Users can trace why Phone X recommended over Y

Example conditional statement:

```typescript
function generateConditionalStatement(
  phone: Phone,
  priorities: string[]
): string {
  const topDimension = priorities[0];
  return `${phone.name} is optimal IF ${topDimension} is your top priority`;
  // Never: "iPhone 15 Pro is the best phone"
}
```

---

## Lessons Learned

### 1. Keep AI Outside the Decision Loop

Use AI for research and explanation, but let deterministic code handle ranking and elimination.

**Why it matters:**
- Reproducible results for testing
- Auditable decisions for compliance
- No "AI drift" over time
- Cost control (cached decisions)

### 2. Make Trade-Offs First-Class

Instead of "4.3 stars", show concrete deltas:

- "Phone A has 1000mAh more battery than Phone B"
- "Phone B is ₹5,000 cheaper"
- "Phone A has 30Hz higher refresh rate"

Users can then make informed decisions based on their priorities.

### 3. Treat Data Like Code

Store your domain data in version-controlled, schema-validated formats:

```bash
git log lib/data/phones-india.csv
# commit a3b4c5d - Added Samsung Galaxy S24+ specs
# commit b2c3d4e - Updated iPhone 15 pricing for India
# commit c1d2e3f - Added 5 new mid-range phones
```

### 4. Design for Determinism

Avoid in decision logic:

- `Math.random()`
- `Date.now()` (except for metadata)
- External API calls
- File system reads

Use instead:

- Pure functions
- Explicit sort keys
- Readonly types
- Immutable data structures

### 5. Build for Portability

By keeping the referee engine independent of:

- Any specific AI provider
- Any specific UI framework
- Any specific database

You gain the freedom to:

- Migrate between cloud providers
- Adopt new AI services
- Switch UI frameworks
- Scale storage solutions

---

## Dark Theme Implementation

The UI uses a modern dark theme with subtle neon accents:

```css
:root {
  --background: #0a0e1a;
  --foreground: #e8eaed;
  --accent-neon: #a3f5b8;
  --accent-lime: #bef264;
  --accent-purple: #c084fc;
}

.btn-neon {
  @apply px-6 py-3.5 rounded-full font-semibold;
  @apply bg-gradient-to-r from-lime-400 to-green-500 text-gray-900;
  @apply hover:shadow-lg hover:shadow-lime-500/30 hover:scale-105;
}

.glow-card {
  @apply rounded-2xl bg-gray-900/50 backdrop-blur-sm;
  box-shadow: 0 0 20px rgba(163, 245, 184, 0.08);
  border: 1px solid rgba(163, 245, 184, 0.15);
}
```

This creates a professional, developer-focused aesthetic without being flashy.

---

## Real-World Example

Here's how the system handles a real comparison:

**User Input:**
- Budget: ₹30,000
- Priorities: Battery > Camera > Price
- Required: 5G support

**Referee Engine Output:**

**Qualified Phones:**
1. **Samsung Galaxy A35 5G** (Score: 0.87)
   - ₹30,999 (within budget)
   - 5000mAh battery
   - 50MP camera
   - *Conditional Statement:* "Optimal IF you prioritize Samsung ecosystem and 4 years of updates"

2. **Nothing Phone (2a)** (Score: 0.82)
   - ₹23,999
   - 5000mAh battery
   - 50MP camera
   - *Conditional Statement:* "Optimal IF you want unique design and clean software"

**Trade-Offs:**
- Samsung has 4 years of guaranteed updates vs Nothing's 3 years
- Nothing is ₹7,000 cheaper
- Samsung weighs 209g vs Nothing's 190g (19g lighter)
- Both have identical battery capacity (5000mAh)

**Eliminated Phones:**
- iPhone 15: "Exceeds budget by ₹49,900"
- OnePlus 12: "Exceeds budget by ₹34,999"
- Redmi 13C: "Does not support 5G; requires 5G"

**Sensitivity Analysis:**
- "Increase budget by ₹5,000 to see OnePlus Nord CE 4"
- "Relax 5G requirement to see 8 additional budget phones"

---

## Closing Thoughts

The Phone Purchase Referee demonstrates that you can build intelligent decision systems without putting AI in the driver's seat.

By:

- Centering user constraints
- Enforcing deterministic, testable logic
- Letting AI play a carefully constrained supporting role

We ended up with a system that feels **trustworthy**, **transparent**, and **cloud-ready**.

If you're building decision systems and wrestling with "how much should AI decide?", consider this pattern:

> Put your **referee** in pure code.
> Put your **researcher and storyteller** in AI.

Your users—and your future debugging sessions—will thank you.

---

## Resources

- [Source Code](https://github.com/AntiDynamic/kiro_week_6)
- [Live Demo](http://localhost:3000)
- [Architecture Documentation](docs/ARCHITECTURE.md)
- [Implementation Plan](specs/001-phone-purchase-referee/plan.md)

**Tech Stack:**
- Next.js 16 (App Router)
- TypeScript 5
- Tailwind CSS
- Zod (schema validation)
- Vitest (testing)
- Google Generative AI SDK

**Performance:**
- Referee engine: <50ms
- Full comparison: <2s
- UI interaction: <100ms
