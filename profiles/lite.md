# Lite assessment profile

**Profile version:** lite-v2
**Spec version:** 1.0.0

The lite profile is a 30–60 minute first pass for discovery or a focused
re-check. It selects 15 items across categories 1–3 and 5–8 to sample product
direction, team flow, system design, code quality, delivery, security, and team
health. The duration is a planning target, not a measured guarantee; actual
time depends on evidence availability and follow-up. Record the actual duration
in the report and use issue #10's pilot work to validate the target.

Category 4 (AI-Assisted Engineering) is skipped in lite-v2. Keep the 15-item selection stable for repeat runs; record any explicit scope expansion separately.

## Selected items

Ask the importance and state questions for these items in the order shown.
Ask at most one targeted interview question per item unless a short follow-up
is needed to establish evidence and propose a rating.

| Order | Item | Why this item is in the first pass |
|---:|---|---|
| 1 | 1.2 Product Vision / Mission | Establishes whether the team has a clear direction. |
| 2 | 1.6 User Research & Feedback Loops | Checks whether user evidence informs product decisions. |
| 3 | 2.5 Task Management | Samples how work is made visible and tracked. |
| 4 | 2.8 Code Reviews | Checks a key collaboration and change-quality practice. |
| 5 | 3.6 Resilience & Fault Tolerance | Samples how the system behaves when dependencies fail. |
| 6 | 3.8 APIs & Integrations | Checks service boundaries and integration reliability. |
| 7 | 5.8 Unit Tests | Samples fast feedback on component behavior. |
| 8 | 5.13 Code Ownership & Review Process Quality | Checks whether code has clear owners and reviewer routing. |
| 9 | 6.9 Release Management Process | Samples how changes are approved and communicated. |
| 10 | 6.10 Recovery Plan | Checks whether recovery has an owner and a rehearsed path. |
| 11 | 6.13 CI/CD | Checks delivery gates and deployment repeatability. |
| 12 | 7.1 Security Requirements | Samples how project security risks and controls are identified. |
| 13 | 7.5 Credentials | Checks whether service and user credentials are protected. |
| 14 | 8.1 Working Conditions | Samples whether people have the tools and environment they need. |
| 15 | 8.5 Team Health & Culture | Checks whether concerns and workload risks can be raised safely. |

## What this profile leaves out

The lite profile does not assess every item in any category. It omits several
important areas, including detailed requirements, architecture, integration
and end-to-end testing, dependency updates, observability, vulnerability
management, retention, and learning practices. A high lite score is not a
complete project health result and must not be presented as one. Use the full
profile for a comprehensive assessment or when a material risk needs deeper
review.

At setup, record **Lite profile lite-v2** and the selected item IDs. Mark
in-scope but unselected items **Skipped** because of the selected profile;
mark the other items in an unassessed category **Skipped** as well. Do not mark
them N/A. Calculate category scores from confirmed selected items only and
report selected-item coverage. Compare aggregate scores only with reports using
the same spec version, lite-v2 selection, system scope, and importance weights.
