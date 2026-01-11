# Implementation Plan: Phone Purchase Referee

## Overview

This task list covers the remaining implementation work for the Phone Purchase Referee system. The core referee engine is complete, and the UI is functional. The primary remaining work is comprehensive testing (both unit tests and property-based tests) to validate correctness properties and ensure the system meets all requirements.

## Tasks

- [x] 1. Set up project structure and core types
  - Core TypeScript types defined with Zod schemas
  - Directory structure established
  - _Requirements: 1.1, 1.2, 1.3, 2.1, 3.1_

- [x] 2. Implement constraint evaluation rules
  - [x] 2.1 Implement budget constraint checking
    - Budget validation and elimination logic
    - _Requirements: 1.1, 2.2_
  
  - [x] 2.2 Implement required features checking
    - 5G support, storage, screen size validation
    - _Requirements: 1.3, 2.3_
  
  - [x] 2.3 Implement region availability checking
    - Regional filtering logic
    - _Requirements: 1.4, 2.4, 15.1, 15.2_
  
  - [x] 2.4 Implement availability status checking
    - Discontinued phone elimination
    - _Requirements: 2.5_
  
  - [x] 2.5 Implement data completeness checking
    - Missing dimension data validation
    - _Requirements: 10.1, 10.2, 10.5_

- [x] 3. Implement scoring and ranking system
  - [x] 3.1 Implement dimension value extraction
    - Get values from phone specs
    - _Requirements: 3.1, 12.1, 12.2, 12.3, 12.4_
  
  - [x] 3.2 Implement score normalization
    - 0.0-1.0 normalization with min/max
    - Handle "lower is better" dimensions
    - _Requirements: 3.1_
  
  - [x] 3.3 Implement weighted scoring
    - Priority-based weighting
    - _Requirements: 3.2_
  
  - [x] 3.4 Implement ranking and conditional statements
    - Rank assignment with tiebreaking
    - Generate conditional "IF" statements
    - _Requirements: 3.3, 3.4, 5.1, 5.2, 5.3, 5.4_

- [x] 4. Implement trade-off analysis
  - [x] 4.1 Implement dimension trade-off calculation
    - Calculate deltas between phone pairs
    - Determine advantage phone
    - _Requirements: 4.2, 4.3, 4.4_
  
  - [x] 4.2 Implement pairwise trade-off generation
    - Generate all phone pair combinations
    - Limit to top 2 priority dimensions
    - _Requirements: 4.1, 4.5, 13.4_

- [x] 5. Implement sensitivity analysis
  - [x] 5.1 Implement budget sensitivity analysis
    - Test budget increases at multiple steps
    - Identify newly viable phones
    - _Requirements: 8.1, 8.3_
  
  - [x] 5.2 Implement priority reordering analysis
    - Swap top 2 priorities
    - Show ranking changes
    - _Requirements: 8.2, 8.4_
  
  - [x] 5.3 Implement constraint relaxation suggestions
    - Suggest adjustments when no phones qualify
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 6. Implement main referee engine functions
  - [x] 6.1 Implement evaluatePhones (constraint-first mode)
    - Orchestrate all evaluation steps
    - Generate metadata
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 11.5, 14.5_
  
  - [x] 6.2 Implement evaluateSelectedPhones (user-selected mode)
    - Compare specific phones without constraints
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 7. Implement UI components and server actions
  - [x] 7.1 Create constraint form component
    - Budget, priorities, required features inputs
    - _Requirements: 1.1, 1.2, 1.3, 1.4_
  
  - [x] 7.2 Create phone card display component
    - Show qualified phones with scores
    - _Requirements: 3.5, 5.3, 5.4_
  
  - [x] 7.3 Create elimination panel component
    - Display eliminated phones with reasons
    - _Requirements: 2.2, 2.3, 2.4, 2.5, 14.2_
  
  - [x] 7.4 Create trade-off display component
    - Show pairwise comparisons
    - _Requirements: 4.4, 12.5_
  
  - [x] 7.5 Create sensitivity panel component
    - Display what-if scenarios
    - _Requirements: 8.5_
  
  - [x] 7.6 Implement server actions
    - comparePhones, compareSelectedPhones actions
    - _Requirements: 6.1, 7.1_

- [ ]* 8. Write unit tests for constraint rules
  - [ ]* 8.1 Write unit tests for budget constraint
    - Test exact budget match
    - Test budget exceeded by $1
    - Test no budget constraint
    - _Requirements: 2.2_
  
  - [ ]* 8.2 Write unit tests for required features
    - Test 5G requirement
    - Test storage requirement
    - Test screen size requirement
    - Test multiple requirements
    - _Requirements: 2.3_
  
  - [ ]* 8.3 Write unit tests for region constraint
    - Test matching region
    - Test non-matching region
    - Test default region
    - _Requirements: 2.4, 15.2, 15.3_
  
  - [ ]* 8.4 Write unit tests for availability checking
    - Test discontinued phones
    - Test available phones
    - Test preorder phones
    - _Requirements: 2.5_
  
  - [ ]* 8.5 Write unit tests for data completeness
    - Test missing all priority dimensions
    - Test missing some priority dimensions
    - Test complete data
    - _Requirements: 10.1, 10.5_

- [ ]* 9. Write unit tests for scoring system
  - [ ]* 9.1 Write unit tests for dimension value extraction
    - Test all dimension types
    - Test missing values
    - _Requirements: 3.1_
  
  - [ ]* 9.2 Write unit tests for score normalization
    - Test "higher is better" dimensions
    - Test "lower is better" dimensions (price, weight)
    - Test all equal values
    - _Requirements: 3.1_
  
  - [ ]* 9.3 Write unit tests for weighted scoring
    - Test single priority
    - Test multiple priorities with different weights
    - _Requirements: 3.2_
  
  - [ ]* 9.4 Write unit tests for ranking
    - Test rank assignment
    - Test tiebreaking (alphabetical by ID)
    - _Requirements: 3.3, 3.4, 11.4_
  
  - [ ]* 9.5 Write unit tests for conditional statements
    - Test top-ranked phone statement
    - Test lower-ranked phone statement
    - _Requirements: 5.3, 5.4_

- [ ]* 10. Write unit tests for trade-off calculation
  - [ ]* 10.1 Write unit tests for dimension trade-offs
    - Test advantage determination
    - Test delta calculation
    - Test equal values (no trade-off)
    - Test missing data handling
    - _Requirements: 4.2, 4.3, 4.5_
  
  - [ ]* 10.2 Write unit tests for pairwise generation
    - Test 2 phones
    - Test 3+ phones (all combinations)
    - Test dimension limiting (top 2)
    - _Requirements: 4.1_

- [ ]* 11. Write unit tests for sensitivity analysis
  - [ ]* 11.1 Write unit tests for budget sensitivity
    - Test budget increase scenarios
    - Test no new phones at any step
    - Test multiple new phones
    - _Requirements: 8.1, 8.3_
  
  - [ ]* 11.2 Write unit tests for priority reordering
    - Test ranking changes
    - Test no ranking changes
    - Test single priority (no reordering)
    - _Requirements: 8.2, 8.4_
  
  - [ ]* 11.3 Write unit tests for constraint relaxation
    - Test budget relaxation suggestions
    - Test feature removal suggestions
    - _Requirements: 9.2, 9.3, 9.4, 9.5_

- [ ]* 12. Write property-based tests for determinism
  - [ ]* 12.1 Write property test for deterministic evaluation
    - **Property 1: Deterministic Evaluation**
    - Generate random constraints and phone data
    - Call evaluatePhones twice with same inputs
    - Verify results are identical (deep equality)
    - **Validates: Requirements 11.1, 11.2, 11.3, 11.4**

- [ ]* 13. Write property-based tests for elimination
  - [ ]* 13.1 Write property test for complete elimination reasons
    - **Property 2: Complete Elimination Reasons**
    - Generate random phones and constraints
    - Verify all eliminated phones have non-empty rejection_details
    - **Validates: Requirements 2.2, 2.3, 2.4, 2.5, 14.2**
  
  - [ ]* 13.2 Write property test for budget enforcement
    - **Property 6: Budget Constraint Enforcement**
    - Generate random phones with prices above budget
    - Verify all are eliminated with EXCEEDS_BUDGET
    - **Validates: Requirements 2.2**
  
  - [ ]* 13.3 Write property test for feature enforcement
    - **Property 7: Required Feature Enforcement**
    - Generate random phones missing required features
    - Verify all are eliminated with MISSING_REQUIRED_FEATURE
    - **Validates: Requirements 2.3**
  
  - [ ]* 13.4 Write property test for regional filtering
    - **Property 12: Regional Filtering**
    - Generate random phones with different regions
    - Verify phones outside user region are eliminated
    - **Validates: Requirements 15.2**

- [ ]* 14. Write property-based tests for scoring
  - [ ]* 14.1 Write property test for normalized dimension scores
    - **Property 3: Normalized Dimension Scores**
    - Generate random qualified phones
    - Verify all dimension_scores are between 0.0 and 1.0
    - **Validates: Requirements 3.1**
  
  - [ ]* 14.2 Write property test for ranking consistency
    - **Property 10: Ranking Consistency**
    - Generate random qualified phones
    - Verify ranks are ordered by priority dimension scores
    - Verify higher scores get lower (better) rank numbers
    - **Validates: Requirements 3.2, 3.3**

- [ ]* 15. Write property-based tests for output requirements
  - [ ]* 15.1 Write property test for multi-option output
    - **Property 4: Multi-Option Output**
    - Generate random comparisons with ≥2 qualifying phones
    - Verify trade_offs array is non-empty
    - **Validates: Requirements 4.1, 13.4**
  
  - [ ]* 15.2 Write property test for conditional phrasing
    - **Property 5: Conditional Phrasing**
    - Generate random qualified phones
    - Verify all conditional_statement strings contain "IF"
    - **Validates: Requirements 5.1, 5.2, 5.3**
  
  - [ ]* 15.3 Write property test for measurable comparisons
    - **Property 11: Measurable Comparisons**
    - Generate random trade-off pairs
    - Verify all delta values are positive numbers
    - Verify explanations contain numeric values
    - **Validates: Requirements 12.1, 12.2, 12.3, 12.4, 12.5**

- [ ]* 16. Write property-based tests for trade-offs
  - [ ]* 16.1 Write property test for trade-off completeness
    - **Property 8: Trade-Off Completeness**
    - Generate random qualified phones
    - For each phone pair differing on a priority dimension
    - Verify a trade-off pair exists showing advantage and delta
    - **Validates: Requirements 4.2, 4.3**

- [ ]* 17. Write property-based tests for sensitivity
  - [ ]* 17.1 Write property test for sensitivity rule generation
    - **Property 9: Sensitivity Rule Generation**
    - Generate random comparisons with budget constraints
    - Verify at least one sensitivity rule is generated
    - **Validates: Requirements 8.1, 8.3**

- [ ]* 18. Write integration tests
  - [ ]* 18.1 Write integration test for constraint-first mode
    - Test full flow: constraints → evaluation → results
    - Verify qualified/eliminated separation
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_
  
  - [ ]* 18.2 Write integration test for user-selected mode
    - Test full flow: phone IDs → comparison → results
    - Verify no constraint filtering
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
  
  - [ ]* 18.3 Write integration test for no qualifying phones
    - Test restrictive constraints
    - Verify relaxation suggestions
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_
  
  - [ ]* 18.4 Write integration test for incomplete data
    - Test phones with missing specs
    - Verify graceful handling and warnings
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [ ]* 19. Checkpoint - Ensure all tests pass
  - Run full test suite
  - Verify all properties pass with 100+ iterations
  - Ensure all tests pass, ask the user if questions arise

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Remaining work focuses on comprehensive testing to validate correctness
- Property tests validate universal correctness properties across randomized inputs
- Unit tests validate specific examples and edge cases
- Both testing approaches are complementary and necessary for comprehensive coverage
- Each property test must run minimum 100 iterations
- Each property test must be tagged with: **Feature: phone-purchase-referee, Property {number}: {property_text}**
