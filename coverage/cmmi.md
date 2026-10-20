# Coverage: CMMI Development and Services

**Sources:** [CMMI Model Domain Differentiation (ISACA PDF)](https://cmmiinstitute.com/getattachment/4addb5b3-12ee-4f05-8aee-1d61e2b45e50/ISACA-CMMI-Domain-Chart_fnl.pdf), [CMMI Development](https://cmmiinstitute.com/products/cmmi/cmmi-dev), and [CMMI Services](https://www.cmmiinstitute.com/products/cmmi/cmmi-services)
**Model:** CMMI V3.0
**Mapped against spec version:** 0.3.0
**Last reviewed:** 2026-10-20

CMMI V3.0 organizes common practice areas as Core and adds two Development and
four Services domain-specific practice areas. This mapping covers all 17 Core
areas once, followed by the two Development and four Services areas. The
assessment's closest topics are identified below, but its project-level
self-assessment is narrower than CMMI's organizational capability and
performance model. Every row is therefore **Partial**: our items may prompt
useful evidence, but they do not establish CMMI practice or appraisal coverage.

| # | CMMI V3.0 practice area | Closest assessment item(s) | Coverage |
|---:|---|---|---|
| 1 | Causal Analysis & Resolution (CAR) | 2.9 Retrospectives and Feedback; 4.6 Technical Debt; 6.9 Incident Response Process | ⚠️ Partial |
| 2 | Configuration Management (CM) | 5.1 Version Control System; 5.4 Project Build; 5.14 Infrastructure as Code | ⚠️ Partial |
| 3 | Decision Analysis & Resolution (DAR) | 2.6 Prioritization and Decision Making; 2.11 Decision Records (ADR) | ⚠️ Partial |
| 4 | Estimating (EST) | 2.7 Project Estimation | ⚠️ Partial |
| 5 | Governance (GOV) | 2.2 Roles and Responsibilities; 2.10 Ground Rules; 2.13 Stakeholder Management | ⚠️ Partial |
| 6 | Implementation Infrastructure (II) | 2.1 Onboarding Process; 5.2 Project Installation; 5.4 Project Build; 5.6 Automation | ⚠️ Partial |
| 7 | Managing Performance & Measurement (MPM) | 1.7 Product Metrics & Analytics; 5.11 Observability; 5.12 Monitoring & Alerting Quality | ⚠️ Partial |
| 8 | Monitor & Control (MC) | 2.5 Task Management; 5.9 Release Management Process; 5.12 Monitoring & Alerting Quality | ⚠️ Partial |
| 9 | Organizational Training (OT) | 2.1 Onboarding Process; 7.4 Continuous Learning & Growth | ⚠️ Partial |
| 10 | Peer Reviews (PR) | 2.8 Code Reviews; 4.13 Code Ownership & Review Process Quality | ⚠️ Partial |
| 11 | Planning (PLAN) | 1.5 Product Roadmap; 2.5 Task Management; 2.7 Project Estimation; 5.9 Release Management Process | ⚠️ Partial |
| 12 | Process Asset Development (PAD) | 2.3 Methodologies and Frameworks; 4.10 Scaffolding / Project Layout; 4.11 Documentation & Domain Language | ⚠️ Partial |
| 13 | Process Management (PCM) | 2.3 Methodologies and Frameworks; 2.9 Retrospectives and Feedback; 4.6 Technical Debt | ⚠️ Partial |
| 14 | Process Quality Assurance (PQA) | 4.12 Static Analysis / Linting; 5.6 Automation; 5.13 CI/CD | ⚠️ Partial |
| 15 | Requirements Development & Management (RDM) | 1.4 Functional and Non-Functional Requirements; 1.6 User Research & Feedback Loops; 3.8 APIs & Integrations | ⚠️ Partial |
| 16 | Risk & Opportunity Management (RSK) | 1.3 Project Goals; 3.6 Resilience & Fault Tolerance; 5.10 Recovery Plan; 6.1 Security Requirements | ⚠️ Partial |
| 17 | Verification & Validation (VV) | 4.8 Unit Tests; 4.9 Integration & E2E Testing; 5.5 Project Testing | ⚠️ Partial |
| 18 | Development — Product Integration (PI) | 3.8 APIs & Integrations; 4.9 Integration & E2E Testing; 5.5 Project Testing | ⚠️ Partial |
| 19 | Development — Technical Solution (TS) | 3.3 Architecture Patterns; 3.4 Loose Coupling / High Cohesion; 3.8 APIs & Integrations | ⚠️ Partial |
| 20 | Services — Continuity (CONT) | 3.6 Resilience & Fault Tolerance; 5.10 Recovery Plan | ⚠️ Partial |
| 21 | Services — Incident Resolution & Prevention (IRP) | 4.5 Error Handling; 5.11 Observability; 5.12 Monitoring & Alerting Quality; 6.9 Incident Response Process | ⚠️ Partial |
| 22 | Services — Service Delivery Management (SDM) | 1.6 User Research & Feedback Loops; 5.9 Release Management Process; 5.11 Observability; 5.12 Monitoring & Alerting Quality | ⚠️ Partial |
| 23 | Services — Strategic Service Management (STSM) | 1.2 Product Vision / Mission; 1.3 Project Goals; 1.5 Product Roadmap; 5.15 Cost Efficiency / Cloud Optimization (FinOps) | ⚠️ Partial |

## Notes on partial and missing coverage

- **Planning and managing work:** 2.5, 2.7, and 5.9 cover project tracking,
  estimates, and release process. They do not establish CMMI's full planning,
  resource, commitment, and corrective-action practices across an organization.
- **Requirements, design, integration, and quality:** 1.4, 3.3–3.8, 4.8–4.9,
  5.5, and 5.13 assess selected product and test practices. They do not provide
  full requirements traceability, formal product integration, independent
  process quality assurance, or the complete verification and validation
  discipline. CMMI practice-area coverage depends on the Development context;
  the labels here are topic mappings, not evidence of appraisal conformance.
- **Service management:** 5.9–5.12, 3.6, and 6.9 cover release operations,
  observability, recovery, and incidents. There is no service catalog, service
  level agreement management, demand/capacity planning, or service portfolio
  management item, so SDM, STSM, CONT, and IRP remain partial.
- **Organization-wide process capability:** the assessment does not evaluate
  institutionalized standard processes, process asset deployment, governance
  across organizational units, training effectiveness, or quantitative
  performance management. This limits coverage of GOV, II, OT, PAD, PCM, PQA,
  MPM, MC, and related Core areas even where project-level topics overlap.
- **Other CMMI domains:** this mapping does not cover the domain-specific areas
  for Security, Safety, Suppliers, Data, People, or Virtual Work. Some related
  topics appear in our security, data, and team items, but this is not a
  point-by-point mapping of those domains.
- **Maturity-scale lineage:** the assessment's 0–4 Absent-to-Optimizing labels
  borrow the general idea of a progression in maturity. They are not CMMI
  capability or maturity levels, do not represent CMMI appraisal results, and
  should not be translated to CMMI ratings.
- **Scores and correlation:** importance-weighted item scores and category
  percentages are not comparable with CMMI capability or maturity levels. A
  statistical correlation would require paired assessments of the same
  projects or organizations using both methods; this mapping supplies no such
  validation.
