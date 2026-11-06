# AI-Assisted Engineering: scope and assessment design

Category 8 implements [issue #37](https://github.com/dzyanis/software-project-maturity-assessment/issues/37) as a peer of the existing seven categories. The synthesis of four candidate drafts keeps risk-aware delegation and outcome evidence as the criteria. Coding, QA, operations, and planning are use cases, rather than mandatory AI adoption targets. Task context and controlled execution complement the governance, privacy, permissions, validation, and improvement controls shared across the drafts.

## Placement and scope

A separate category makes the complete delegation lifecycle visible. A single item would combine distinct capabilities into an ambiguous rating; scattering all guidance would hide how the controls work together. Category 8 covers tools used in software development, including chat advice and executing agents. AI features in the shipped product require additional product evaluation outside this category's scope.

## Overlap with existing categories

| Items | Closest existing items | Additional assessment focus |
|---|---|---|
| 8.1 | [2.2 Roles and Responsibilities; 2.10 Ground Rules](../assessment/02-processes-collaboration.md), [4.13 Code Ownership](../assessment/04-code-quality.md) | Responsibility and acceptable delegation when an AI system contributes work. |
| 8.2–8.3 | [2.5 Task Management; 2.11 Decision Records](../assessment/02-processes-collaboration.md), [4.11 Documentation](../assessment/04-code-quality.md), [5.2–5.5 Setup, Build, Testing](../assessment/05-practices-delivery.md) | Whether task intent and current project knowledge reach the assistant. |
| 8.4 | [6.2 Sensitive Data; 6.5 Credentials; 6.10 Retention](../assessment/06-security-compliance.md) | Information transmitted or retained through AI workflows and connected services. |
| 8.5 | [6.1 Security Requirements; 6.4 Authorization; 6.5 Credentials](../assessment/06-security-compliance.md) | Agent execution authority, isolation, approval boundaries, and hostile contextual instructions. |
| 8.6 | [2.8 Code Reviews](../assessment/02-processes-collaboration.md), [4.8–4.9 Tests; 4.12 Static Analysis; 4.14–4.15 Dependencies and Licenses](../assessment/04-code-quality.md) | Verification of generated artifacts and correlated implementation/test mistakes. |
| 8.7 | [5.6 Automation; 5.9 Releases; 5.10 Recovery; 5.13 CI/CD](../assessment/05-practices-delivery.md), [6.9 Incident Response](../assessment/06-security-compliance.md) | Stopping, inspecting, integrating, and recovering delegated execution. |
| 8.8 | [2.9 Retrospectives](../assessment/02-processes-collaboration.md), [5.15 Cost Efficiency](../assessment/05-practices-delivery.md), [7.4 Learning](../assessment/07-culture.md) | Net outcomes and regressions attributable to AI workflows and their changes. |

Reuse evidence across categories, but assess the distinct question in each. An existing CI pipeline alone does not establish AI validation quality. Link a shared finding to one improvement action rather than presenting duplicate remediation work. Use pilot feedback to identify redundancy and interview friction.

## Release impact and comparison

Release impact: **MINOR**, spec **0.4.0**. Items 8.1–8.9 are additive; existing IDs, questions, and complete-report calculations remain unchanged. The lite-v1 selection stays at 15 items across categories 1–7; category 8 is skipped in that profile unless the participant explicitly expands scope.

Older reports have no category-8 baseline. Reports spanning changed spec versions or selected scope are not directly comparable under the existing comparison policy. Compare shared confirmed item states separately and disclose versions, scope, coverage, and importance changes. A new category is not evidence of improvement or deterioration.

## Sources

The practices adapt official [Codex best practices](https://learn.chatgpt.com/guides/best-practices), [ChatGPT prompting](https://learn.chatgpt.com/docs/prompting), [repository instructions](https://learn.chatgpt.com/docs/agent-configuration/agents-md), [agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security), and [result verification](https://learn.chatgpt.com/docs/use-chatgpt). These sources were reviewed on 2026-11-06. The assessment criteria and evidence examples are this project's synthesis, not an OpenAI maturity model. Product settings and data guarantees must be checked for the actual service, account, and connected tools.
