<!--
Sync Impact Report:
- Version change: N/A → 1.0.0
- Added principles:
  * I. Multi-Option Comparison (Mandatory)
  * II. No Absolute Recommendations
  * III. Explicit Trade-Off Analysis
  * IV. Conditional Decision Framework
  * V. Deterministic & Explainable Logic
  * VI. Specification-Driven Development
- Added sections: Decision Quality Standards, Development Workflow
- Templates requiring updates:
  ✅ spec-template.md - aligned with conditional decision requirements
  ✅ plan-template.md - constitution check gate present
  ✅ tasks-template.md - aligned with SDD workflow
  ✅ checklist-template.md - reviewed for consistency
- Follow-up TODOs: RATIFICATION_DATE pending (marked TODO)
-->

# Refree Constitution

## Core Principles

### I. Multi-Option Comparison (Mandatory)

**The system MUST compare multiple candidate options for every decision request.**

- Minimum two candidates MUST be evaluated for any recommendation query
- Single-option outputs are forbidden unless explicitly justified as "no alternatives exist"
- Each candidate MUST be evaluated against the same criteria set
- Comparison MUST expose relative strengths and weaknesses across options

**Rationale**: Single-answer systems create false confidence and hide opportunity costs. Comparison forces transparency about what is sacrificed when choosing one path over another.

### II. No Absolute Recommendations

**The system MUST NOT declare any option as "the best" without qualifying constraints.**

- All conclusions MUST be conditional on user-provided or explicitly stated constraints
- Use phrasing: "Option X is optimal IF [constraint set]" rather than "Option X is best"
- When constraints are ambiguous, output MUST include: "[NEEDS CLARIFICATION: constraint Y not specified]"
- Outputs that imply universal superiority are rejected at review

**Rationale**: Context determines suitability. Absolute claims ignore the diversity of real-world requirements and lead to misapplication of solutions.

### III. Explicit Trade-Off Analysis

**Every option comparison MUST expose trade-offs between competing qualities.**

- For each candidate, list what is gained and what is sacrificed (e.g., speed vs. memory, simplicity vs. flexibility)
- Trade-offs MUST be measurable or observable (avoid vague terms like "better")
- When trade-offs are context-dependent, state the conditions under which each matters
- No "silver bullet" framing; if an option seems universally superior, challenge the analysis

**Rationale**: Engineering is optimization under constraints. Hiding trade-offs prevents informed decision-making and leads to unpleasant surprises during implementation.

### IV. Conditional Decision Framework

**All decision logic MUST be deterministic and conditional on explicit inputs.**

- Decisions follow the form: "Given constraints {C1, C2, ...}, Option X satisfies requirements because [reason]"
- When inputs are incomplete, system MUST request clarification rather than assume defaults
- Decision trees MUST be traversable: user can trace why Option X was recommended over Option Y
- Use structured conditionals: IF-THEN logic, priority matrices, weighted scoring when appropriate

**Rationale**: Non-deterministic or opaque recommendations cannot be validated, debugged, or improved. Conditional logic enables reproducibility and auditability.

### V. Deterministic & Explainable Logic

**The reasoning path from inputs to recommendations MUST be fully traceable.**

- Every recommendation MUST include the criteria used, weights applied, and how each option scored
- Explanations MUST reference specific requirements or constraints provided by the user
- Avoid black-box reasoning; if a heuristic is used, document it explicitly
- Enable challenge: users MUST be able to identify and question specific reasoning steps

**Rationale**: Unexplainable systems cannot be trusted or improved. Transparency enables users to validate correctness and refine inputs when outputs are unsatisfactory.

### VI. Specification-Driven Development (SDD)

**Specifications are the source of truth; implementation follows explicit design.**

- Do NOT jump to implementation unless a specification has been approved
- Do NOT guess missing details; use [NEEDS CLARIFICATION: ...] markers
- Separate WHAT/WHY (specification) from HOW (implementation)
- Prefer structured, testable outputs; reject vague or ambiguous language
- Always expose trade-offs and conditional decisions in design artifacts
- Test acceptance criteria MUST be defined before implementation begins

**Rationale**: Premature implementation leads to rework when requirements are misunderstood. Explicit specifications enable validation before investment in code.

## Decision Quality Standards

**All outputs MUST meet these quality criteria:**

- **Completeness**: All viable options within the problem space are considered (or explicitly excluded with justification)
- **Measurability**: Comparison dimensions use quantifiable or observable metrics (e.g., latency, memory, LOC, cognitive load)
- **Testability**: Claims about option performance or suitability MUST be verifiable (through benchmarks, prototypes, or documented case studies)
- **Honesty**: When insufficient information exists to make a comparison, state uncertainty rather than fabricate analysis

**Review Gate**: Before delivering any recommendation, validate:

1. Are at least two options compared?
2. Are conclusions conditional on explicit constraints?
3. Are trade-offs stated for each option?
4. Is the decision path traceable?

## Development Workflow

**Feature Development Lifecycle:**

1. **Specification Phase**: Define user scenarios, requirements, success criteria (see `.specify/templates/spec-template.md`)
   - Outputs MUST include [NEEDS CLARIFICATION: ...] for ambiguous requirements
   - Acceptance scenarios MUST be testable and prioritized
2. **Planning Phase**: Research, design, architecture (see `.specify/templates/plan-template.md`)
   - MUST pass Constitution Check gate before Phase 0 research
   - Technical Context section MUST use "[NEEDS CLARIFICATION]" for unknown constraints
3. **Task Generation**: Break design into executable, dependency-ordered tasks (see `.specify/templates/tasks-template.md`)
4. **Implementation**: Execute tasks with tests-first approach where specified

**Quality Gates:**

- Specifications MUST be approved before planning begins
- Plans MUST pass Constitution Check before task generation
- Tasks requiring tests MUST have failing tests before implementation
- All [NEEDS CLARIFICATION] markers MUST be resolved before final delivery

## Governance

**This constitution supersedes all other development practices.**

- All feature specifications, plans, and implementations MUST comply with these principles
- Violations MUST be explicitly justified in a "Complexity Tracking" section (see plan-template.md)
- When principles conflict with pragmatic needs, document the conflict and rationale for deviation
- Constitution amendments require: (1) documented justification, (2) impact analysis on templates, (3) version increment

**Compliance Review:**

- All pull requests MUST verify compliance with applicable principles
- Decision outputs that lack comparison, conditionality, or trade-off analysis are rejected
- Use `.specify/templates/checklist-template.md` for systematic compliance validation

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): original adoption date unknown - to be set on first commit | **Last Amended**: 2026-01-07
