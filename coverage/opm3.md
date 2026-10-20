# Coverage: PMI Organizational Project Management Maturity Model (OPM3)

**Sources:** [OPM3 Third Edition (PMI, 2013)](https://www.pmi.org/shop/p-/book/organizational-project-management-maturity-model-%28opm3%29-%E2%80%93-third-edition/00101463501), [PMI overview of OPM3's domains and improvement stages](https://www.pmi.org/learning/library/opm3-achieve-strategic-business-improvement-7290), and [The Standard for Organizational Project Management (PMI, 2018)](https://www.pmi.org/shop/p-/book/the-standard-for-organizational-project-management-%28opm%29/00101605801)
**Mapped against spec version:** 0.2.0
**Last reviewed:** 2026-10-20

OPM3 Third Edition is PMI's organizational project management maturity model.
It connects portfolio, program, and project management to organizational
strategy and improvement. PMI describes OPM3 through the domains of project,
program, and portfolio management, the process improvement stages Standardize,
Measure, Control, and continuously Improve (SMCI), and process groups. Its
Best Practices are supported by capabilities and observable outcomes. The
assessment below maps the OPM3 themes most relevant to software project
engineering; it does not reproduce OPM3's licensed Best Practice and capability
catalog. All ten theme mappings are **Partial** because this assessment is
project-level and does not evaluate organization-wide capability.

| # | OPM3 practice theme | Closest assessment item(s) | Coverage |
|---:|---|---|---|
| 1 | Align project, program, and portfolio work with organizational strategy | 1.2 Product Vision / Mission; 1.3 Project Goals; 1.5 Product Roadmap; 2.6 Prioritization and Decision Making | ⚠️ Partial |
| 2 | Select and prioritize work against strategic value and available capacity | 1.3 Project Goals; 1.5 Product Roadmap; 2.6 Prioritization and Decision Making; 2.13 Stakeholder Management | ⚠️ Partial |
| 3 | Establish repeatable project planning and estimation | 2.5 Task Management; 2.7 Project Estimation; 5.9 Release Management Process | ⚠️ Partial |
| 4 | Define roles, decision rights, sponsorship, and governance | 2.2 Roles and Responsibilities; 2.6 Prioritization and Decision Making; 2.10 Ground Rules; 2.13 Stakeholder Management | ⚠️ Partial |
| 5 | Elicit, manage, and align requirements with intended outcomes | 1.4 Functional and Non-Functional Requirements; 1.6 User Research & Feedback Loops; 3.8 APIs & Integrations | ⚠️ Partial |
| 6 | Measure project performance and use evidence to manage work | 1.7 Product Metrics & Analytics; 2.5 Task Management; 5.11 Observability; 5.12 Monitoring & Alerting Quality | ⚠️ Partial |
| 7 | Review deliverables and assure quality against agreed criteria | 2.8 Code Reviews; 4.8 Unit Tests; 4.9 Integration & E2E Testing; 4.12 Static Analysis / Linting; 5.5 Project Testing | ⚠️ Partial |
| 8 | Identify and manage risks, dependencies, and opportunities | 1.3 Project Goals; 2.12 Cross-Team Collaboration; 3.6 Resilience & Fault Tolerance; 5.10 Recovery Plan; 6.1 Security Requirements | ⚠️ Partial |
| 9 | Build organizational capability through people, process assets, and common methods | 2.1 Onboarding Process; 2.3 Methodologies and Frameworks; 4.10 Scaffolding / Project Layout; 4.11 Documentation & Domain Language; 7.4 Continuous Learning & Growth | ⚠️ Partial |
| 10 | Standardize, measure, control, and continuously improve project practices (SMCI) | 2.3 Methodologies and Frameworks; 2.9 Retrospectives and Feedback; 4.6 Technical Debt; 5.7 Optimizations | ⚠️ Partial |

## Domain coverage

| OPM3 domain | Closest assessment items | Coverage and boundary |
|---|---|---|
| Project | 1.4, 2.5–2.8, 3.3–3.8, 4.8–4.13, 5.5, 5.9–5.13, 6.1 | Partial. This is the closest scope: selected engineering practices within one software product or project. It does not assess all OPM3 capabilities, outcomes, dependencies, or improvement paths. |
| Program | 1.3, 1.5, 2.6, 2.12–2.13, 3.8 | Partial. The assessment can surface team-level goals and dependencies, but it does not evaluate coordinated benefits, governance, or interdependencies across related projects. |
| Portfolio | 1.2–1.3, 1.5–1.7, 2.6, 2.13 | Partial. Product direction and prioritization provide related evidence, but there is no portfolio inventory, investment selection, balancing, or organization-wide resource allocation assessment. |

## Notes on partial and missing coverage

- **Strategy and portfolio selection.** Items 1.2, 1.3, 1.5, and 2.6 connect a
  product or project to goals and priorities. They do not determine whether an
  organization's portfolios select and balance the right investments or
  allocate capacity across all initiatives.
- **Planning, estimation, and control.** Items 2.5, 2.7, and 5.9 address work
  tracking, estimate calibration, and release management for a project. They
  do not assess an integrated planning and control system across organizational
  units or program and portfolio levels.
- **Roles, requirements, measures, and review.** The mapped items cover
  selected project practices. They do not establish OPM3 capabilities through
  documented outcomes and key performance indicators, nor do they provide
  OPM3's detailed capability dependencies and improvement paths.
- **SMCI improvement stages.** Items 2.3, 2.9, 4.6, and 5.7 touch on defined
  methods, feedback, and improvement. The assessment does not rate each
  practice against OPM3's Standardize, Measure, Control, and continuously
  Improve stages.
- **Organizational enablers.** The assessment has limited evidence about
  organizational culture, structure, people, or technology beyond a team's
  local context. OPM3's organizational scope is broader than a software
  engineering team's self-assessment.
- **OPM3 and the OPM standard are distinct.** OPM3 Third Edition (2013) is a
  maturity model with assessment and improvement mechanisms. PMI's 2018
  *Standard for Organizational Project Management* is newer guidance for
  integrating portfolio, program, and project practices with organizational
  enablers and strategy; it is not a later OPM3 edition or itself an OPM3
  maturity assessment instrument. The 2003 *Project Maturity Model* paper is
  an author-developed instrument, not a later edition or successor to PMI's
  OPM3.
- **Scores and correlation.** This assessment's importance-weighted scores are
  not directly comparable to OPM3 maturity results. A statistical correlation
  would require paired assessments of the same projects or organizations
  using both methods; this mapping provides no such evidence.
