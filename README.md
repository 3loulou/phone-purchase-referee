# Phone Purchase Referee

A phone comparison tool that provides conditional recommendations based on user constraints, following strict constitutional principles:

- **Multi-option comparison**: Always compares ≥2 phones
- **Conditional logic**: Never declares an absolute "best phone"
- **Explicit trade-offs**: Shows measurable gains and sacrifices
- **Transparent reasoning**: All elimination reasons are explicit
- **Deterministic engine**: No AI in decision-making (AI only for research)

## Tech Stack

- **TypeScript**: Full-stack type safety
- **Next.js 16**: App Router with Server Components
- **Gemini API**: Research-only (phone data gathering)
- **Tailwind CSS**: Utility-first styling
- **Vitest**: Fast testing with property-based tests
- **Zod**: Schema validation

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Gemini API key (get from https://aistudio.google.com/apikey)

### Installation

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Add your Gemini API key to .env.local
GEMINI_API_KEY=your_key_here
```

### Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Run tests with UI
npm run test:ui

# Check coverage
npm run test:coverage
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
/app/                    # Next.js App Router
  ├── page.tsx          # Home page
  ├── layout.tsx        # Root layout
  ├── actions.ts        # Server Actions
  ├── compare/          # Constraint-first mode
  └── select/           # User-selected mode

/core/referee-engine/   # ⭐ THE HEART - Pure TypeScript logic
  ├── types.ts          # Core type definitions
  ├── rules.ts          # Elimination rules
  ├── scoring.ts        # Scoring algorithm
  ├── eliminations.ts   # Rejection reason generator
  └── index.ts          # Main referee interface

/ai/                    # AI Research Layer (data only!)
  ├── gemini-research.ts
  └── prompts/

/lib/                   # Utilities
  ├── data/phones.json  # Phone database
  └── utils.ts

/components/            # React components
/tests/                 # Integration tests
/docs/                  # Documentation
```

## Constitutional Principles

This project follows strict principles defined in `.specify/memory/constitution.md`:

1. **Multi-Option Comparison**: System MUST compare at least 2 options
2. **No Absolute Recommendations**: Use conditional framework ("Phone X IF constraint Y")
3. **Explicit Trade-Offs**: Show measurable dimensions (battery mAh, price delta)
4. **Conditional Logic**: All recommendations are traceable and conditional
5. **Explainable Reasoning**: Users can trace why Phone X recommended over Y

## Development Workflow

This project follows Specification-Driven Development (SDD):

1. **Specification** (`specs/001-phone-purchase-referee/spec.md`)
2. **Planning** (`specs/001-phone-purchase-referee/plan.md`)
3. **Implementation** (you are here!)

All design decisions are documented in `specs/001-phone-purchase-referee/`.

## Testing

- **Unit tests**: Referee engine functions (rules, scoring, eliminations)
- **Property-based tests**: Determinism, constitutional compliance
- **Integration tests**: End-to-end flows

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm run test:coverage
```

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/refree)

Make sure to set the `GEMINI_API_KEY` environment variable in your Vercel project settings.

## License

MIT

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.
