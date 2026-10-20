# Sample filled assessment report — fictional

> **Fictional example.** Harborlight and every role, observation, score, date,
> and action below are invented for illustration. This is not evidence about a
> real team. It demonstrates a full assessment, including an unknown answer,
> an N/A item, score coverage, and checked calculations.

| | |
|---|---|
| **Team / Product** | Harborlight Order Desk |
| **Date** | 2026-10-18 |
| **Spec version** | 0.3.0 |
| **Participants** | Fictional product manager; engineering lead; two engineers (role labels only) |
| **Intended audience / sharing** | Fictional engineering and product leadership; shared internally after participant review |
| **System boundary** | Customer web app, public API, and order-processing workers |
| **Environment(s)** | AWS production and staging; local development excluded from operational findings |
| **Profile / categories / items** | Full assessment; all seven categories |
| **Evidence date or range** | 2026-04-01 to 2026-10-18 |

## How to read this report

The fictional team treats customer order integrity, privacy, and service
recovery as critical (importance 3); routine engineering practices as medium
(importance 2); and selected lower-impact practices as low (importance 1).
Each note gives a short evidence-based reason for the current state. Importance
changes the weight and gap priority; state 4 remains the common score reference.

Category 4 is **provisional**: 14 of 15 applicable items are confirmed, while
item 4.13 is unknown because the team could not verify ownership and reviewer
routing for shared components. The unknown answer is excluded from the numeric
score and remains visible in coverage. Item 7.3 is N/A because the team has no
recruiting authority. The seven “Other” prompts are N/A because no additional
practice was identified.

## Summary

| Category | Score / status | Coverage | Top gap |
|---|---|---:|---|
| 1. Product & Vision | 60.2% · complete | 8/8 | 1.2 Product Vision / Mission · 6 |
| 2. Processes & Collaboration | 63.8% · complete | 13/13 | 2.8 Code Reviews · 6 |
| 3. Architecture & Systems Design | 61.9% · complete | 8/8 | 3.5 Scalability & Performance · 6 |
| 4. Code & Quality | 63.2% · provisional | 14/15 | 4.5 Error Handling · 6 |
| 5. Engineering Practices & Delivery | 64.7% · complete | 15/15 | 5.10 Recovery Plan · 9 |
| 6. Security & Compliance | 65.5% · complete | 10/10 | 6.1 Security Requirements · 6 |
| 7. Culture & External Factors | 69.4% · complete | 4/4 | 7.4 Continuous Learning & Growth · 4 |

## Top gaps (improvement roadmap)

Raw gap priority is shown here. The action plan may sequence work differently
when risk or dependencies justify it.

| Rank | Item | Importance | State | Gap priority | Note |
|---:|---|---:|---:|---:|---|
| 1 | 5.10 Recovery Plan | 3 | 1 | 9 | Backups exist, but a restore has not been rehearsed. |
| 2 | 1.2 Product Vision / Mission | 3 | 2 | 6 | The vision is written but rarely guides release decisions. |
| 3 | 1.4 Functional and Non-Functional Requirements | 3 | 2 | 6 | Acceptance criteria exist; non-functional requirements lack owners. |
| 4 | 1.6 User Research & Feedback Loops | 3 | 2 | 6 | Support themes are reviewed, but recent workflows were not usability-tested. |
| 5 | 2.8 Code Reviews | 3 | 2 | 6 | Reviews happen, but feedback quality and turnaround are inconsistent. |
| 6 | 3.5 Scalability & Performance | 3 | 2 | 6 | Latency is measured; capacity tests are infrequent. |
| 7 | 3.6 Resilience & Fault Tolerance | 3 | 2 | 6 | Retry patterns exist; failure behavior is not regularly exercised. |
| 8 | 3.8 APIs & Integrations | 3 | 2 | 6 | API contracts are versioned; consumer compatibility tests are incomplete. |
| 9 | 4.5 Error Handling | 3 | 2 | 6 | Boundary errors are typed; user-facing errors vary by service. |
| 10 | 4.8 Unit Tests | 3 | 2 | 6 | Core paths are tested; important data constraints are missing. |

Other items also have gap priority 6. The top ten use item ID order to break
ties after gap priority and importance.

## Recommendations

1. **Rehearse recovery** (5.10). Owner: fictional platform lead. Review by
   2026-11-15. Done when a staging restore and rollback rehearsal meet the
   recovery objective and the team records the measured result.
2. **Make product outcomes guide delivery** (1.2, 1.4, 1.6). Owner: fictional
   product manager. Review by 2026-11-30. Done when the team publishes a small
   set of measurable outcomes, assigns non-functional requirements, and tests
   the highest-risk workflow with users.
3. **Improve feedback and test confidence** (2.8, 4.5, 4.8, 4.9). Owner:
   fictional engineering lead. Review by 2026-12-01. Done when review guidance
   includes substantive feedback, error cases have consistent client behavior,
   and the critical order journey has stable unit, integration, and end-to-end
   checks.
4. **Exercise capacity and failure behavior** (3.5, 3.6). Owner: fictional
   service owner. Review by 2026-11-30. Done when a load run and a controlled
   dependency-failure exercise produce reviewed follow-up actions.

## Detailed results

### 1. Product & Vision — 60.2% · complete · 8/8

| Item | Importance | State | Answer status | Gap priority | Notes |
|---|---:|---:|---|---:|---|
| 1.1 Product Overview | 3 | 3 | Confirmed | 3 | Critical: customer group and order-workflow problem are clear to the team. |
| 1.2 Product Vision / Mission | 3 | 2 | Confirmed | 6 | Critical: written vision exists but is not used consistently in release decisions. |
| 1.3 Project Goals | 3 | 3 | Confirmed | 3 | Critical: quarterly outcomes are reviewed; one key metric lacks a baseline. |
| 1.4 Functional and Non-Functional Requirements | 3 | 2 | Confirmed | 6 | Critical: acceptance criteria are common; performance and recovery targets lack owners. |
| 1.5 Product Roadmap | 2 | 2 | Confirmed | 4 | Medium: roadmap is reviewed quarterly, but dependencies and confidence are implicit. |
| 1.6 User Research & Feedback Loops | 3 | 2 | Confirmed | 6 | Critical: support themes reach product planning; workflow usability tests are rare. |
| 1.7 Product Metrics & Analytics | 2 | 2 | Confirmed | 4 | Medium: activation and failed-order metrics exist; event definitions differ by client. |
| 1.8 Compliance & Legal Requirements | 3 | 3 | Confirmed | 3 | Critical: privacy and retention obligations are mapped and reviewed for launches. |
| 1.9 Other | N/A | — | N/A | — | No additional product or vision practice was identified. |

### 2. Processes & Collaboration — 63.8% · complete · 13/13

| Item | Importance | State | Answer status | Gap priority | Notes |
|---|---:|---:|---|---:|---|
| 2.1 Onboarding Process | 2 | 3 | Confirmed | 2 | Medium: checklist and buddy are used; content is not reviewed every quarter. |
| 2.2 Roles and Responsibilities | 2 | 3 | Confirmed | 2 | Medium: service owners are listed; backup ownership is unclear for two services. |
| 2.3 Methodologies and Frameworks | 2 | 2 | Confirmed | 4 | Medium: two-week iterations are standard, with inconsistent planning discipline. |
| 2.4 Communications | 2 | 3 | Confirmed | 2 | Medium: async updates work; cross-team decisions sometimes stay in chat. |
| 2.5 Task Management | 3 | 3 | Confirmed | 3 | Critical: work is visible in one tracker and reviewed weekly. |
| 2.6 Prioritization and Decision Making | 3 | 3 | Confirmed | 3 | Critical: customer impact and reliability guide choices; cost-of-delay is informal. |
| 2.7 Project Estimation | 2 | 2 | Confirmed | 4 | Medium: estimates are recorded, but forecast accuracy is not reviewed. |
| 2.8 Code Reviews | 3 | 2 | Confirmed | 6 | Critical: most changes get one review; feedback depth and response time vary. |
| 2.9 Retrospectives and Feedback | 2 | 3 | Confirmed | 2 | Medium: monthly actions are assigned; completion is not measured consistently. |
| 2.10 Ground Rules | 2 | 3 | Confirmed | 2 | Medium: working agreements and incident-channel expectations are documented. |
| 2.11 Decision Records (ADR) | 2 | 2 | Confirmed | 4 | Medium: major architecture choices have records; smaller decisions are hard to find. |
| 2.12 Cross-Team Collaboration | 2 | 2 | Confirmed | 4 | Medium: platform dependencies are known; shared release timing is coordinated informally. |
| 2.13 Stakeholder Management | 2 | 2 | Confirmed | 4 | Medium: product stakeholders meet monthly; approval ownership is not always explicit. |
| 2.14 Other | N/A | — | N/A | — | No additional process or collaboration practice was identified. |

### 3. Architecture & Systems Design — 61.9% · complete · 8/8

| Item | Importance | State | Answer status | Gap priority | Notes |
|---|---:|---:|---|---:|---|
| 3.1 System Documentation | 2 | 3 | Confirmed | 2 | Medium: key flow diagrams exist; one worker dependency diagram is stale. |
| 3.2 Tech Stack | 3 | 3 | Confirmed | 3 | Critical: stack choices are documented; upgrade ownership is shared informally. |
| 3.3 Architecture Patterns | 2 | 2 | Confirmed | 4 | Medium: service boundaries are understood but not applied consistently. |
| 3.4 Loose Coupling / High Cohesion | 3 | 3 | Confirmed | 3 | Critical: services are mostly cohesive; two shared tables still couple releases. |
| 3.5 Scalability & Performance | 3 | 2 | Confirmed | 6 | Critical: p95 latency is tracked; capacity testing is annual. |
| 3.6 Resilience & Fault Tolerance | 3 | 2 | Confirmed | 6 | Critical: retries and timeouts exist; dependency failures are rarely exercised. |
| 3.7 Data Architecture | 2 | 3 | Confirmed | 2 | Medium: ownership and retention are documented; analytics lineage is partial. |
| 3.8 APIs & Integrations | 3 | 2 | Confirmed | 6 | Critical: API contracts are versioned; consumer compatibility tests are incomplete. |
| 3.9 Other | N/A | — | N/A | — | No additional architecture practice was identified. |

### 4. Code & Quality — 63.2% · provisional · 14/15

| Item | Importance | State | Answer status | Gap priority | Notes |
|---|---:|---:|---|---:|---|
| 4.1 Relevance of Codebase | 2 | 3 | Confirmed | 2 | Medium: active paths are maintained; unused modules were removed this year. |
| 4.2 Patterns | 2 | 3 | Confirmed | 2 | Medium: common patterns are documented; examples differ between services. |
| 4.3 Code Style | 2 | 3 | Confirmed | 2 | Medium: formatting is automated; naming conventions rely on review. |
| 4.4 Engineering Principles | 3 | 3 | Confirmed | 3 | Critical: simple design is encouraged; trade-offs are not always recorded. |
| 4.5 Error Handling | 3 | 2 | Confirmed | 6 | Critical: API errors are typed; user-facing messages differ by service. |
| 4.6 Technical Debt | 2 | 2 | Confirmed | 4 | Medium: debt is tagged, but there is no regular allocation to reduce it. |
| 4.7 Package Management | 3 | 3 | Confirmed | 3 | Critical: lockfiles and automated updates are used; ownership of major upgrades varies. |
| 4.8 Unit Tests | 3 | 2 | Confirmed | 6 | Critical: core services have unit tests; key data constraints lack coverage. |
| 4.9 Integration & E2E Testing | 3 | 2 | Confirmed | 6 | Critical: major integrations are tested; end-to-end tests are brittle. |
| 4.10 Scaffolding / Project Layout | 2 | 3 | Confirmed | 2 | Medium: service scaffolds are documented; new projects sometimes diverge. |
| 4.11 Documentation & Domain Language | 2 | 2 | Confirmed | 4 | Medium: glossary exists; operational examples are stale. |
| 4.12 Static Analysis / Linting | 2 | 3 | Confirmed | 2 | Medium: lint and type checks are required in CI. |
| 4.13 Code Ownership & Review Process Quality | 3 | — | Unknown | — | Critical: ownership and reviewer routing for shared components could not be confirmed. |
| 4.14 Dependency Security & Updates | 3 | 2 | Confirmed | 6 | Critical: alerts are reviewed monthly; urgent-fix timing is not agreed. |
| 4.15 Copyright & Licenses | 2 | 3 | Confirmed | 2 | Medium: dependency licenses are inventoried during builds. |
| 4.16 Other | N/A | — | N/A | — | No additional code or quality practice was identified. |

### 5. Engineering Practices & Delivery — 64.7% · complete · 15/15

| Item | Importance | State | Answer status | Gap priority | Notes |
|---|---:|---:|---|---:|---|
| 5.1 Version Control System | 3 | 3 | Confirmed | 3 | Critical: protected branches, reviews, and release tags are standard. |
| 5.2 Project Installation | 2 | 4 | Confirmed | 0 | Medium: a new engineer can install dependencies from a clean checkout. |
| 5.3 Project Launch | 3 | 3 | Confirmed | 3 | Critical: local launch is documented; realistic seed data is incomplete. |
| 5.4 Project Build | 3 | 3 | Confirmed | 3 | Critical: CI builds are repeatable; artifact provenance is not retained. |
| 5.5 Project Testing | 3 | 2 | Confirmed | 6 | Critical: release checks exist; multi-tenant boundary cases are thin. |
| 5.6 Automation | 2 | 3 | Confirmed | 2 | Medium: lint, test, and formatting run automatically; release notes are manual. |
| 5.7 Optimizations | 2 | 2 | Confirmed | 4 | Medium: one high-traffic endpoint was optimized; follow-up is sporadic. |
| 5.8 Multiple Environments | 3 | 3 | Confirmed | 3 | Critical: staging and production are separate; test data differs from production. |
| 5.9 Release Management Process | 3 | 2 | Confirmed | 6 | Critical: checklist is used; rollback readiness is not checked before each release. |
| 5.10 Recovery Plan | 3 | 1 | Confirmed | 9 | Critical: backups run, but the team has never completed a restore rehearsal. |
| 5.11 Observability | 2 | 3 | Confirmed | 2 | Medium: logs, traces, and metrics cover critical paths; correlation IDs are missing in one worker. |
| 5.12 Monitoring & Alerting Quality | 3 | 3 | Confirmed | 3 | Critical: availability and error alerts are reviewed quarterly. |
| 5.13 CI/CD | 3 | 3 | Confirmed | 3 | Critical: tests gate deployments; production promotion has a manual approval. |
| 5.14 Infrastructure as Code (IaC) | 2 | 2 | Confirmed | 4 | Medium: core infrastructure is Terraform-managed; console drift is not checked. |
| 5.15 Cost Efficiency / Cloud Optimization (FinOps) | 2 | 2 | Confirmed | 4 | Medium: monthly bill review exists; service-owner budgets are not set. |
| 5.16 Other | N/A | — | N/A | — | No additional delivery practice was identified. |

### 6. Security & Compliance — 65.5% · complete · 10/10

| Item | Importance | State | Answer status | Gap priority | Notes |
|---|---:|---:|---|---:|---|
| 6.1 Security Requirements | 3 | 2 | Confirmed | 6 | Critical: security requirements exist; project risk review is irregular. |
| 6.2 Sensitive Data Protection | 3 | 3 | Confirmed | 3 | Critical: data is classified and encrypted; support exports need shorter retention. |
| 6.3 Input Validation | 3 | 3 | Confirmed | 3 | Critical: API validation is consistent; one async worker has weaker schema checks. |
| 6.4 Authentication / Authorization | 3 | 3 | Confirmed | 3 | Critical: SSO and roles are used; access reviews happen quarterly. |
| 6.5 Credentials | 3 | 3 | Confirmed | 3 | Critical: production secrets use a managed store; local development exceptions remain. |
| 6.6 Key Management | 3 | 2 | Confirmed | 6 | Critical: managed KMS is in place; rotation evidence is not reviewed routinely. |
| 6.7 Vulnerability Management & Dependency Scanning | 3 | 3 | Confirmed | 3 | Critical: CI scans dependencies and assigns findings to owners. |
| 6.8 Penetration Testing / Audits | 2 | 2 | Confirmed | 4 | Medium: annual external testing occurs; remediation retests are inconsistent. |
| 6.9 Incident Response Process | 3 | 2 | Confirmed | 6 | Critical: roles are documented; the team has not run a tabletop this year. |
| 6.10 Compliance & Data Retention Policies | 3 | 3 | Confirmed | 3 | Critical: obligations are tracked and deletion is verified for primary records. |
| 6.11 Other | N/A | — | N/A | — | No additional security practice was identified. |

### 7. Culture & External Factors — 89.3% · complete · 4/4

| Item | Importance | State | Answer status | Gap priority | Notes |
|---|---:|---:|---|---:|---|
| 7.1 Working Conditions | 2 | 3 | Confirmed | 2 | Medium: workload and focus time are discussed in regular check-ins. |
| 7.2 Remote Work / Hybrid Efficiency | 2 | 3 | Confirmed | 2 | Medium: remote norms and async decisions are documented. |
| 7.3 HR & Recruiting Alignment | N/A | — | N/A | — | The team has no hiring authority, so this practice is outside its remit. |
| 7.4 Continuous Learning & Growth | 2 | 2 | Confirmed | 4 | Medium: learning time is available; follow-up on development goals varies. |
| 7.5 Team Health & Culture | 3 | 3 | Confirmed | 3 | Critical: anonymous check-in themes flag uneven on-call load; the team discusses workload trends without attributing comments to individuals. |
| 7.6 Other | N/A | — | N/A | — | No additional culture or external-factor practice was identified. |

## Calculation check

Each category score uses confirmed rows only; N/A and unknown rows are excluded.
The fractions below are the unrounded weighted numerator and denominator before
rounding to one decimal place.

| Category | Weighted calculation | Score |
|---|---:|---:|
| 1 | 53 / 88 | 60.2% |
| 2 | 74 / 116 | 63.8% |
| 3 | 52 / 84 | 61.9% |
| 4 | 86 / 136 | 63.2% · provisional, 14/15 |
| 5 | 101 / 156 | 64.7% |
| 6 | 76 / 116 | 65.5% |
| 7 | 25 / 36 | 69.4% |

Gap priorities in the top-ten table use importance × (4 − state). The unknown
4.13 answer has no gap value and is counted in coverage, not as state 0.

## Appendix

- **N/A items and reasons:** 1.9, 2.14, 3.9, 4.16, 5.16, 6.11, and 7.6: no
  additional practice was identified; 7.3: the team has no recruiting authority.
- **Unknown items:** 4.13; ownership and reviewer routing for shared components could not be confirmed.
- **Skipped categories or items:** None.
- **Free-form “Other” items:** None identified.
- **Comparison limits:** This report is fictional. A real comparison requires
  the same spec version, system boundary, environments, selected items, and
  importance weights; provisional scores require coverage-aware item-level
  comparison.
