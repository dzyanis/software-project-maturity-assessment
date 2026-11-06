# 8. AI-Assisted Engineering

Part of the [Software Project Maturity Assessment](../ASSESSMENT.md) — spec version 0.4.0.

Assess how the team delegates work to AI assistants and agents across requirements, design, coding, testing, review, documentation, and development operations. Criteria apply across models, vendors, interfaces, deployment models, and agent architectures, including hosted services, locally operated models, editor suggestions, and automated workflows. Assess the capabilities actually used; no particular instruction file, prompt format, approval interface, or model feature is required. Adoption, generated-code volume, and autonomy are not maturity goals; assess decisions, controls, and outcomes appropriate to project risk.

Choosing not to use AI can be a sound outcome. Discuss that decision under 8.1 and mark genuinely inapplicable operational items N/A with reasons. Unknown usage or missing evidence is not N/A. Chat-only assistance may still require data protection and validation while execution permissions are inapplicable. Neither adopting nor declining AI automatically earns state 4.

Use the standard importance, state, confirmation, and coverage rules. Sample a recent task and, where available, a rejected or failed task: trace inputs, permissions, resulting changes, verification, and acceptance. Reference existing evidence without retaining unnecessary sensitive conversations. For placement rationale and overlap, see [AI assessment design notes](../docs/ai-assisted-engineering.md).

### 8.1 Appropriate Use & Human Accountability

**Why it matters:** Delegating implementation does not delegate responsibility for the resulting behavior or its maintenance.

**What good looks like:** The team identifies suitable and unsuitable tasks, names the person accountable for accepting each change, and defines when AI assistance must be disclosed to reviewers or stakeholders. Decisions reflect the project's risk, confidentiality, and ability to verify results. Engineers can reject AI suggestions and choose a manual approach without an adoption penalty.

**Evidence examples:** An acceptable-use agreement; a change with an accountable owner; a documented decision to exclude a sensitive workflow; review disclosure conventions.

**Questions to ask:**

- Who can explain and maintain a recent AI-assisted change after its author leaves?
- Which tasks are restricted, and what project risk explains the restriction?
- When must contributors disclose AI assistance, and how do reviewers use that information?

**Red flags:** “The model decided” substitutes for an engineering decision; nobody owns generated code; usage quotas encourage inappropriate delegation.

### 8.2 Task Definition & Acceptance Criteria

**Why it matters:** A plausible implementation may solve a different problem from the one the team intended.

**What good looks like:** Tasks describe the intended behavior, relevant context, constraints, and observable completion criteria. Planning and clarification are proportionate to uncertainty and risk. Acceptance criteria are established by the team and checked independently of the generated solution, whether assistance is requested through an issue, editor, conversation, API, or automated job.

**Evidence examples:** An issue with examples of expected behavior; a migration plan with checkpoints; a task whose ambiguous requirement was resolved before implementation.

**Questions to ask:**

- What observable result distinguishes success from a convincing response?
- Which assumptions would require a product or architecture decision?
- How does a large task become changes that a reviewer can understand separately?

**Red flags:** Broad requests lack a completion condition; unexpected behavior is accepted because the result looks polished; scope grows without review.

### 8.3 Repository Context & Maintained Instructions

**Why it matters:** Missing or stale project knowledge causes repeated mistakes even when generated code is syntactically correct.

**What good looks like:** Assistants receive the relevant source, domain terminology, architecture decisions, and working verification commands. Project guidance has an owner and follows normal review. Context may be supplied through selected files, repository documentation, retrieval, tool configuration, or a task brief. Teams verify that relevant, current information reaches the workflow and resolve obsolete or conflicting guidance.

**Evidence examples:** Reviewed project guidance; a check that a new task receives current context; a context or configuration update tied to a recurring defect.

**Questions to ask:**

- How does a new assisted task obtain the correct project conventions and verification commands?
- Which domain rules are essential but absent from the supplied context?
- Who notices when instructions conflict with the current code or tool configuration?

**Red flags:** Essential rules live only in private chats; copied instructions refer to missing commands; indiscriminate context sharing exposes unrelated information.

### 8.4 Sensitive Inputs & Information Handling

**Why it matters:** Prompts, attached files, tool output, and conversation history create additional routes by which project information can leave its intended boundary.

**What good looks like:** The team identifies where information is processed and stored, including local runtimes, hosted inference, telemetry, retrieval stores, and connected services. Controls for specific data classes cover access, retention, deletion, sharing, and any reuse for model training, as applicable to the actual deployment. It supplies only needed information, uses synthetic or sanitized examples where possible, and accounts for connected services, logs, and shared conversations. Local execution and hosted-service contracts are each checked against actual data flows and configuration.

**Evidence examples:** A reviewed data-flow inventory; dated configuration evidence; sanitized debugging fixtures; access restrictions for retained task records.

**Questions to ask:**

- Where can source code, customer records, credentials, and task logs travel in this workflow?
- Which technical controls, settings, or agreements support that use, and when were they checked?
- How would the team contain an accidental sensitive-data submission?

**Red flags:** Production secrets appear in prompts; personal accounts bypass project controls; disabling training use is assumed to eliminate retention or third-party access.

### 8.5 Agent Permissions & Untrusted Inputs

**Why it matters:** An agent with execution or external-tool access can turn a mistaken instruction into an operational incident.

**What good looks like:** Access is limited to required files, commands, services, and network destinations. Isolation and scoped credentials enforce boundaries. Consequential actions have risk-appropriate human approval, with the proposed action visible before approval. Repository content, retrieved pages, and tool results cannot authorize broader access. Instructions alone are not a security boundary. Enforcement may use operating-system isolation, service authorization, network controls, or workflow gates; verify the boundary rather than relying on a tool's label for it.

**Evidence examples:** A permission profile; an isolated test workspace; a blocked access attempt; review of a connected tool's permissions.

**Questions to ask:**

- Can the agent reach production or unrelated private files, and why?
- What prevents a malicious instruction in a dependency or issue from triggering an upload?
- Which actions require approval, and what exactly does the approver inspect?

**Red flags:** Unrestricted access is the default; approval is a reflexive click; tool output is treated as authorization; security controls are disabled to finish a task.

### 8.6 Independent Validation & Review

**Why it matters:** Generated code and generated tests can share the same mistaken interpretation of a requirement.

**What good looks like:** Changes meet the project's ordinary review, testing, security, and maintainability standards. Expected behavior comes from requirements, contracts, or independently checked examples. Reviewers inspect the actual diff and execution results, including configuration and documentation. Another model's agreement is supplementary evidence. Claims, cited sources, dependencies, and execution results are checked against authoritative evidence rather than accepted on the strength of a model's explanation.

**Evidence examples:** A regression that fails before the fix; boundary and failure-case checks; CI results tied to the reviewed revision; a generated suggestion rejected during review.

**Questions to ask:**

- What would detect an incorrect assumption shared by the implementation and its tests?
- Were tests executed, and which relevant checks remain unavailable or failing?
- Were new dependencies, APIs, and any borrowed code checked for existence, suitability, security, and license obligations?

**Red flags:** A claim that tests passed replaces logs; assertions are weakened to obtain a pass; high-risk changes rely exclusively on automated approval; invented APIs survive review.

### 8.7 Controlled Execution, Handover & Recovery

**Why it matters:** Long-running work can drift, overwrite concurrent changes, consume excessive resources, or leave a partially applied operation.

**What good looks like:** Work has checkpoints, an execution budget where relevant, and explicit conditions for stopping or escalating. Concurrent edits have clear ownership and integration checks. Reviewers receive a concise handover describing changed behavior, verification, unresolved risks, and recovery steps. Persistent automation has an owner who can disable it. A worktree or branch separates changes but is not itself a security sandbox.

**Evidence examples:** A recoverable change sequence; a stopped automation run; a handover that identifies unexecuted checks; a rollback exercise for a consequential operation.

**Questions to ask:**

- What happens when progress stalls, evidence is unavailable, or the budget is exhausted?
- How are conflicting human or agent changes detected before integration?
- Can the team stop a run and recover without losing unrelated work?

**Red flags:** Agents repeatedly retry without new evidence; partial failures are hidden; automation can deploy changes but nobody knows how to disable it.

### 8.8 Outcomes, Learning & Tool Changes

**Why it matters:** Faster generation can increase review effort and downstream defects while appearing productive.

**What good looks like:** The team samples representative tasks and tracks outcomes proportionately: accepted delivery time, review effort, escaped defects, security findings, rework, operating cost, and maintainability. Results inform whether to expand, restrict, or stop a workflow. Material changes to models, tools, deployment configuration, instructions, permissions, or service terms trigger relevant rechecks. The team has a proportionate fallback for outages, withdrawal, or unsuitable changes to a tool. Engineers retain the skills needed to question and maintain outputs.

**Evidence examples:** A before/after task sample with limitations; a failure converted into a regression check; a tool-upgrade evaluation; shared examples of misleading output.

**Questions to ask:**

- What improved after accounting for review and rework, and what evidence supports that conclusion?
- Which workflow was changed or abandoned because its results were poor?
- How does the team detect regressions after a tool or configuration change?

**Red flags:** Generated lines or accepted suggestions are the main success measure; individual usage rankings replace outcome assessment; tool upgrades receive no verification.

### 8.9 Other

Record an important AI-assisted engineering practice not covered above. Use the existing [custom-practice rules](../ASSESSMENT.md#custom-practices-under-other) for multiple distinct practices, with stable report-local IDs and separate supplemental scoring.
