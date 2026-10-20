# Software Project Maturity Assessment

**Spec version: 0.1.1** — see [CHANGELOG.md](CHANGELOG.md) for the versioning policy.

This guide evaluates software engineering maturity across seven categories. Each item has a stable ID (e.g. `4.8`), an explanation of why it matters, what good looks like, questions to ask, and red flags. Items live in per-category files:

1. [Product & Vision](assessment/01-product-vision.md)
2. [Processes & Collaboration](assessment/02-processes-collaboration.md)
3. [Architecture & Systems Design](assessment/03-architecture-design.md)
4. [Code & Quality](assessment/04-code-quality.md)
5. [Engineering Practices & Delivery](assessment/05-practices-delivery.md)
6. [Security & Compliance](assessment/06-security-compliance.md)
7. [Culture & External Factors](assessment/07-culture.md)

## How to score

For each selected item, agree its importance and confirm its current state.
Importance expresses the team's priorities; it does not set a custom target
state. The score uses state 4 as the common reference for every item.

| Rating | Scale |
|---|---|
| **Importance** — how much this matters for *your* team | 1 Low · 2 Medium · 3 Critical · N/A not applicable (record the reason) |
| **Current state** — where you are today | 0 Absent · 1 Ad-hoc · 2 Defined · 3 Managed · 4 Optimizing |

Record the answer status separately from the rating:

- **Confirmed:** the team has confirmed both an importance and a state rating.
- **Unknown:** the team cannot establish an importance or state after reasonable follow-up.
- **Deferred:** the team has chosen to postpone rating the item.
- **Unconfirmed:** an assessor has proposed a rating, but the team has not confirmed it.
- **N/A:** the team says the item does not apply; record why and exclude it from the score.
- **Skipped:** the item or category was excluded from this run's selected scope.

Unknown, deferred, and unconfirmed answers are not zero and are not N/A. They do
not contribute to gap priorities or category scores. Keep them visible in the
report so missing evidence is not mistaken for a good result.

Derived values:

- **Gap priority** = importance × (4 − state), for confirmed ratings only. Highest first = your improvement roadmap (max 12: critical and absent).
- **Category score** = Σ(importance × state) / Σ(importance × 4), for confirmed ratings only, shown as a percentage of the common state-4 reference. N/A, skipped, unknown, deferred, and unconfirmed items do not enter either sum.
- **Coverage** = confirmed applicable items / applicable items in scope. Applicable items include unknown, deferred, and unconfirmed answers; N/A and skipped items are excluded.
- A category is **complete** when every applicable item has a confirmed rating. It is **provisional** when any applicable item is unknown, deferred, or unconfirmed. Show its coverage beside any provisional score. If no applicable item has a confirmed rating, show "no score" rather than 0%. A category with every in-scope item N/A is "not assessed"; a category excluded at setup is "skipped".

Scores show the weighted distance between current state and the common state-4 reference. Importance makes the score reflect the team's priorities; it does not change the target. Scores are not for comparing teams or grading people.

## Worked scoring examples

| Case | Calculation or report entry | Interpretation |
|---|---|---|
| Complete category | Two applicable items: importance/state 1/2 and 3/4. Score = (1×2 + 3×4) / (1×4 + 3×4) = 14/16 = 87.5%; coverage = 2/2; status = complete. | Every applicable item has both ratings confirmed. |
| Confirmed rating | Importance 3, state 2: gap = 3 × (4 − 2) = 6; category contribution = 6 / 12 = 50%. | A confirmed rating contributes to both the gap list and category score. |
| Confirmed zero | Importance 3, state 0: gap = 12; category contribution = 0 / 12 = 0%. | Zero is a confirmed absence, not a missing answer. |
| Lower level is sufficient for the team | Importance 3, state 2 still gives gap 6 and contributes 50%, even if the team says level 2 meets its needs. | Record the team's rationale and importance choice; the shared score reference stays at 4. Do not describe level 2 as having reached the score target. |
| Unknown answer | Two applicable items have importance 2. One is confirmed at state 4; the other is unknown. Score = 8 / 8 = 100%, coverage = 1/2, status = provisional. | Show the score as provisional with the missing count. It is not evidence that the whole category is at 100%. |
| N/A and all-N/A | One applicable item is importance 2, state 2; another is N/A. Score = 4 / 8 = 50%, coverage = 1/1. If every item is N/A, show "not assessed". | N/A is excluded, with its reason recorded. It is distinct from an unknown answer. |
| No confirmed ratings | All applicable items are unknown, deferred, or unconfirmed. | Show no numeric score, zero confirmed applicable items, the applicable count, and provisional status. |
| Skipped category | The category was excluded during setup. | Show "skipped"; do not treat it as not assessed or include it in project totals. |
| Changed importance weights | Two unchanged states are 1 and 4. Weights change from 3/1 to 1/3: score changes from 7/16 = 43.75% to 13/16 = 81.25%. | The team's priorities changed, not the practices. Report the weight change; do not call the score movement practice improvement. |
| Changed scope or profile | The assessed system boundary or selected item set differs from the prior report. | Mark aggregate results not directly comparable. State which items overlap and describe state changes for those items separately. |
| Urgent action overrides gap order | A high-risk state-3 issue is scheduled before a larger low-risk gap. Keep both raw gap values and state why the action sequence differs. | Gap priority is a consistent rating calculation; the team may sequence work by urgency or dependency with an explanation. |

For repeat assessments, record the system boundary, environment, selected
profile/categories/items, assessment date, and evidence date. Evidence references
are optional; do not include secrets or private personnel records. Treat
aggregate category scores as directly comparable only when both reports are
complete and the spec version, scope, selected items, and importance weights
match. Provisional scores are not directly comparable because missing answers
change which items contribute; compare only the confirmed items shared by both
reports and disclose coverage. If weights differ, report the change and compare
confirmed item states separately. If scope or item sets differ, mark aggregate
scores not directly comparable.

## How to run an assessment

- **Manually:** walk the category files with the team, record ratings and notes in a copy of [templates/report.md](templates/report.md).
- **With an LLM:** give your AI assistant [AGENT.md](AGENT.md) plus the `assessment/` files and let it interview the team and produce the report. See AGENT.md for instructions.

Every report records the spec version it was produced against.
