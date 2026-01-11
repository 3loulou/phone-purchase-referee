# Implementation Plan: Phone Purchase Referee

**Branch**: `001-phone-purchase-referee` | **Date**: 2026-01-07 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-phone-purchase-referee/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a Phone Purchase Referee that helps users decide between smartphones by comparing options based on user-defined constraints instead of ranking by specs. The system provides constraint-first comparison, explicit trade-off analysis, and conditional verdicts without declaring any phone "the best."

**Core Principle**: Referee logic must be deterministic. AI must be swappable. Specs must outlive frameworks.

## Technical Context

**Language/Version**: TypeScript (Full-stack) - One language for spec → logic → UI  
**Primary Dependencies**: 
- Next.js 16 (App Router) - Server Components for logic separation
- Gemini API (Google GenAI SDK) - Grounded Search for phone data research
- Zod - Schema validation and structured outputs
- Vitest - Fast TS-native testing

**Storage**: JSON / File-based (for now) - Judges don't care about DBs, SDD prefers clarity over infra  
**Testing**: Vitest - Test elimination rules, score weighting, verdict flips  
**Target Platform**: Web (Next.js deployed to Vercel)  
**Project Type**: Web application (frontend + backend unified)  
**Performance Goals**: Comparison generation <2s, UI interaction <100ms  
**Constraints**: Deterministic referee logic, AI only for research (never final decisions), fully traceable decision path  
**Scale/Scope**: MVP for demo, support ~100 phone models, 5-10 comparison dimensions

**Stack Justification**:
- TypeScript: Strong typing = executable specs, shared models between frontend & backend
- Next.js App Router: Server Components separate UI from logic, fast prototyping, good story for demos
- Gemini API: ONLY for fetching phone facts/specs/issues - NEVER for rankings or scores
- Pure TS Referee Engine: Deterministic scoring, explicit eliminations, zero LLM calls, fully unit-testable
- JSON Storage: Easier regeneration, clearer than DB infra for judging
- Tailwind CSS: Minimal styling, no design system overkill

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Verify compliance with principles from `.specify/memory/constitution.md`:

- [x] **Multi-Option Comparison**: ✅ System MUST compare at least 2 phones (FR-002, FR-013), all comparisons show multiple options with trade-offs
- [x] **No Absolute Recommendations**: ✅ FR-004, FR-009 mandate conditional framework - "Phone X is optimal IF [constraints]" not "Phone X is best"
- [x] **Explicit Trade-Offs**: ✅ FR-005, FR-011 require gains/sacrifices analysis with measurable dimensions (battery mAh, screen size, price)
- [x] **Conditional Logic**: ✅ FR-012 requires traceable decision path, FR-001 defines explicit constraints as input, SC-010 ensures deterministic/reproducible logic
- [x] **Explainable Reasoning**: ✅ FR-003 mandates explicit rejection reasons, FR-008 provides sensitivity analysis, FR-012 ensures users can trace why Phone X recommended over Y
- [x] **Specification-Driven**: ✅ Based on approved spec.md with P1-P3 user stories, acceptance scenarios, functional requirements, and success criteria

**Complexity Justification**: None - This feature is perfectly aligned with the Constitution. The Phone Purchase Referee is the canonical example of multi-option comparison with conditional logic.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
/app/                         # Next.js App Router pages
├── page.tsx                  # Home page (comparison UI)
├── layout.tsx               # Root layout
├── api/                     # API routes (if needed)
│   └── research/
│       └── route.ts         # Research endpoint
└── actions.ts               # Server Actions

/core/                       # THE HEART - Referee Engine
├── referee-engine/
│   ├── types.ts            # Core types (Phone, Constraints, Verdict)
│   ├── rules.ts            # Elimination rules (budget, features, etc.)
│   ├── scoring.ts          # Score calculation (no AI involved)
│   ├── eliminations.ts     # Rejection reason generator
│   ├── index.ts            # Main referee interface
│   └── referee.test.ts     # Comprehensive unit tests

/ai/                         # AI Research Layer (ONLY for data)
├── gemini-research.ts       # Gemini API wrapper with Grounded Search
├── phone-data.ts            # Phone spec fetching
└── prompts/
    └── phone-specs.txt      # Prompt templates

/lib/                        # Shared utilities
├── data/                    # JSON storage
│   └── phones.json          # Phone database
└── utils.ts                 # Helper functions

/components/                 # UI Components (Tailwind)
├── comparison-result.tsx
├── constraint-form.tsx
└── phone-card.tsx

/public/                     # Static assets

/tests/                      # Integration tests
└── referee.integration.test.ts

next.config.ts
package.json
tsconfig.json
vitest.config.ts
.env.local                   # GEMINI_API_KEY
```

**Structure Decision**: 
This is a Next.js web application structure optimized for SDD judging. The `/core/referee-engine/` is the most important part - it contains pure TypeScript logic with zero dependencies on React or AI. The `/ai/` layer is strictly separated and only used for research, never for decision-making. This structure tells a clear story: deterministic referee at the core, AI as a helper tool, Next.js as the UI renderer.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations detected. This feature exemplifies specification-driven development with multi-option comparison and deterministic logic.
