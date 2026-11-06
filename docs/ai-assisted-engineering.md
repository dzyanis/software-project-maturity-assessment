# AI-Assisted Engineering: scope and assessment design

Category 4 implements [issue #37](https://github.com/dzyanis/software-project-maturity-assessment/issues/37) as a peer of the existing seven categories. The synthesis of four candidate drafts keeps risk-aware delegation and outcome evidence as the criteria. Coding, QA, operations, and planning are use cases, rather than mandatory AI adoption targets. Task context and controlled execution complement the governance, privacy, permissions, validation, and improvement controls shared across the drafts.

## Placement and scope

A separate category makes the complete delegation lifecycle visible. A single item would combine distinct capabilities into an ambiguous rating; scattering all guidance would hide how the controls work together. Category 4 covers tools used in software development, including chat advice and executing agents. AI features in the shipped product require additional product evaluation outside this category's scope.

## Overlap with existing categories

| Items | Closest existing items | Additional assessment focus |
|---|---|---|
| 4.1 | [2.2 Roles and Responsibilities; 2.10 Ground Rules](../assessment/02-processes-collaboration.md), [5.13 Code Ownership](../assessment/05-code-quality.md) | Responsibility and acceptable delegation when an AI system contributes work. |
| 4.2–4.3 | [2.5 Task Management; 2.11 Decision Records](../assessment/02-processes-collaboration.md), [5.11 Documentation](../assessment/05-code-quality.md), [6.2–6.5 Setup, Build, Testing](../assessment/06-practices-delivery.md) | Whether task intent and current project knowledge reach the assistant. |
| 4.4 | [7.2 Sensitive Data; 7.5 Credentials; 7.10 Retention](../assessment/07-security-compliance.md) | Information transmitted or retained through AI workflows and connected services. |
| 4.5 | [7.1 Security Requirements; 7.4 Authorization; 7.5 Credentials](../assessment/07-security-compliance.md) | Agent execution authority, isolation, approval boundaries, and hostile contextual instructions. |
| 4.6 | [2.8 Code Reviews](../assessment/02-processes-collaboration.md), [5.8–5.9 Tests; 5.12 Static Analysis; 5.14–5.15 Dependencies and Licenses](../assessment/05-code-quality.md) | Verification of generated artifacts and correlated implementation/test mistakes. |
| 4.7 | [6.6 Automation; 6.9 Releases; 6.10 Recovery; 6.13 CI/CD](../assessment/06-practices-delivery.md), [7.9 Incident Response](../assessment/07-security-compliance.md) | Stopping, inspecting, integrating, and recovering delegated execution. |
| 4.8 | [2.9 Retrospectives](../assessment/02-processes-collaboration.md), [6.15 Cost Efficiency](../assessment/06-practices-delivery.md), [8.4 Learning](../assessment/08-culture.md) | Net outcomes and regressions attributable to AI workflows and their changes. |

Reuse evidence across categories, but assess the distinct question in each. An existing CI pipeline alone does not establish AI validation quality. Link a shared finding to one improvement action rather than presenting duplicate remediation work. Use pilot feedback to identify redundancy and interview friction.

## Release impact and comparison

Release impact: **MAJOR**, spec **1.0.0**. AI-Assisted Engineering is category 4, before Code & Quality. Compared with the previous numbering, Code & Quality moves 4→5, Engineering Practices & Delivery 5→6, Security & Compliance 6→7, Culture & External Factors 7→8, and the proposed AI category 8→4. Item suffixes and assessment meaning are preserved; IDs and category order change. The score formula is unchanged.

Lite profile **lite-v2** retains the same 15 practices with their new IDs across categories 1–3 and 5–8. Category 4 is skipped unless the participant explicitly expands scope. Existing lite-v1 exports must not be interpreted using the new ID meanings.

Older reports have no category-8 baseline. Reports spanning changed spec versions or selected scope are not directly comparable under the existing comparison policy. Compare shared confirmed item states separately and disclose versions, scope, coverage, and importance changes. A new category is not evidence of improvement or deterioration.

## Supporting references and neutrality

The assessment items are this project's engineering criteria. They evaluate capabilities, controls, and outcomes rather than conformance to a vendor's operating instructions. No provider, instruction-file convention, prompt template, hosted account, or agent interface is required. Apply only the controls relevant to the workflow's actual data access and ability to act.

- [NIST AI Risk Management Framework 1.0](https://airc.nist.gov/airmf-resources/airmf/) provides a voluntary framework for governing, mapping, measuring, and managing AI risks. It supports the risk-based scope and outcome-oriented assessment approach; it does not prescribe these item IDs or scoring anchors.
- [OWASP LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) describes risks from direct and indirect instructions and recommends controls including least privilege, human approval for high-risk actions, and adversarial testing. It supports the trust-boundary concerns in 4.5; it is not a complete software-engineering maturity model.

References reviewed on 2026-11-06. These links provide supporting context, not a claim of certification or full framework coverage. Teams should use the documentation and configuration evidence for their chosen deployment when establishing what a control actually enforces.
