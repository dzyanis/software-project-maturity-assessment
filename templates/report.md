# Software Project Maturity Assessment Report

| | |
|---|---|
| **Team / Product** | {{TEAM_NAME}} |
| **Date** | {{DATE}} |
| **Spec version** | 0.2.0 |
| **Participants** | {{NAMES_OR_ROLE_LABELS_AS_AGREED}} |
| **Intended audience / sharing** | {{AUDIENCE_AND_STORAGE_OR_SHARING_EXPECTATIONS}} |
| **System boundary** | {{SYSTEMS_AND_SERVICES_IN_SCOPE}} |
| **Environment(s)** | {{ENVIRONMENTS_IN_SCOPE}} |
| **Profile / categories / items** | {{SELECTED_SCOPE}} |
| **Evidence date or range** | {{EVIDENCE_DATE_OR_RANGE}} |

## Scoring key

Importance: 1 Low, 2 Medium, 3 Critical, N/A not applicable (reason recorded).
Current state: 0 Absent, 1 Ad-hoc, 2 Defined, 3 Managed, 4 Optimizing.
Importance sets the team's priorities; the common score reference is state 4 for every item. Gap priority = importance × (4 − state), max 12. Category score = Σ(importance × state) / Σ(importance × 4), using confirmed ratings only. An item contributes only when both its importance and state are confirmed.

Answer status is **Confirmed**, **Unknown**, **Deferred**, **Unconfirmed**, **N/A**, or **Skipped**. Unknown, deferred, and unconfirmed items are not zero or N/A and do not contribute to scores. Show confirmed applicable items / applicable items in scope; the latter includes unknown, deferred, and unconfirmed items but excludes N/A and skipped items. Mark a category **provisional** if any applicable item is not confirmed. If no item is confirmed, show "no score (provisional)". If all items are N/A, show "not assessed"; categories excluded at setup are "skipped".

Top gaps include confirmed ratings only and are sorted by raw gap priority descending, ties broken by importance. An action plan may sequence work differently for urgency or dependencies; preserve the raw gap values and explain the reason.

Aggregate scores are directly comparable only when both reports are complete and spec version, system boundary, environment, selected items, and importance weights match. Provisional scores are not directly comparable; compare shared confirmed item states and disclose coverage. If weights change, disclose this and compare confirmed item states separately. If scope or item selection changes, mark aggregate scores not directly comparable. Evidence references are optional; do not include secrets or private personnel records.

Summarize sensitive evidence at the team level where possible. Omit unnecessary names and private details. Before sharing, give participants a chance to review the report for factual errors and identifying or sensitive details; record unresolved disagreements neutrally.

## Summary

| Category | Score / status | Coverage | Top gap |
|---|---|---|---|
| 1. Product & Vision | {{PCT_COMPLETE_OR_PROVISIONAL_OR_NOT_ASSESSED_OR_SKIPPED}} | {{CONFIRMED_APPLICABLE / APPLICABLE}} | {{ITEM_OR_NONE}} |
| 2. Processes & Collaboration | {{PCT_COMPLETE_OR_PROVISIONAL_OR_NOT_ASSESSED_OR_SKIPPED}} | {{CONFIRMED_APPLICABLE / APPLICABLE}} | {{ITEM_OR_NONE}} |
| 3. Architecture & Systems Design | {{PCT_COMPLETE_OR_PROVISIONAL_OR_NOT_ASSESSED_OR_SKIPPED}} | {{CONFIRMED_APPLICABLE / APPLICABLE}} | {{ITEM_OR_NONE}} |
| 4. Code & Quality | {{PCT_COMPLETE_OR_PROVISIONAL_OR_NOT_ASSESSED_OR_SKIPPED}} | {{CONFIRMED_APPLICABLE / APPLICABLE}} | {{ITEM_OR_NONE}} |
| 5. Engineering Practices & Delivery | {{PCT_COMPLETE_OR_PROVISIONAL_OR_NOT_ASSESSED_OR_SKIPPED}} | {{CONFIRMED_APPLICABLE / APPLICABLE}} | {{ITEM_OR_NONE}} |
| 6. Security & Compliance | {{PCT_COMPLETE_OR_PROVISIONAL_OR_NOT_ASSESSED_OR_SKIPPED}} | {{CONFIRMED_APPLICABLE / APPLICABLE}} | {{ITEM_OR_NONE}} |
| 7. Culture & External Factors | {{PCT_COMPLETE_OR_PROVISIONAL_OR_NOT_ASSESSED_OR_SKIPPED}} | {{CONFIRMED_APPLICABLE / APPLICABLE}} | {{ITEM_OR_NONE}} |

## Top gaps (improvement roadmap)

Up to 10 items, sorted by gap priority descending.

| Rank | Item | Importance | State | Gap priority | Note |
|---|---|---|---|---|---|
| 1 | {{ID_AND_TITLE}} | {{1-3}} | {{0-4}} | {{N}} | {{ONE_LINE}} |

## Custom practices (supplemental)

Custom rows use stable report-local IDs such as `custom-01`; do not reuse an ID
for a different practice. When custom rows are present for a category, mark its
standard “Other” prompt Skipped. Custom rows do not affect standard category
scores or coverage. Report their gap priorities here and calculate the
supplemental score from confirmed custom rows only. Show coverage and whether
the supplemental score is provisional. If no custom rows were identified, write
“None identified.”

| ID | Category | Practice | Importance | State | Status | Gap priority | Note |
|---|---|---|---:|---:|---|---:|---|
| {{CUSTOM_ID}} | {{CATEGORY}} | {{PRACTICE}} | {{1-3}} | {{0-4}} | {{STATUS}} | {{N_OR_NOT_SCORED}} | {{NOTE}} |

- **Supplemental custom score:** {{PERCENT_OR_NO_SCORE}} ({{CONFIRMED}} / {{APPLICABLE}} confirmed; {{COMPLETE_OR_PROVISIONAL}})
- **Custom comparison limits:** {{MATCHING_SET_OR_CHANGED_IDS_AND_WEIGHTS}}

## Recommendations

3–5 short narrative recommendations, each tied to the gaps above: what to do first, why, and what "better" would look like in 3–6 months. Combine related gaps into one action when a single fix addresses them, and list all related item IDs.

1. {{RECOMMENDATION}}

## Detailed results

One table per assessed category; repeat this structure for each.

### {{N}}. {{CATEGORY_NAME}} — {{SCORE_STATUS_AND_COVERAGE}}

| Item | Importance | State | Answer status | Gap priority | Notes |
|---|---|---|---|---|---|
| {{ID_AND_TITLE}} | {{1-3_OR_N/A_OR_UNSET}} | {{0-4_OR_UNSET}} | {{CONFIRMED_UNKNOWN_DEFERRED_UNCONFIRMED_N/A_SKIPPED}} | {{N_OR_NOT_SCORED}} | {{NOTES}} |

## Appendix

- **N/A items and reasons:** {{LIST}}
- **Unknown, deferred, or unconfirmed items and missing evidence:** {{LIST_OR_NONE}}
- **Skipped items or categories and scope reason:** {{LIST_OR_NONE}}
- **Free-form notes ("Other" items):** {{LIST}}
- **Comparison limits or changes in scope, profile, or importance weights:** {{DETAILS_OR_NONE}}
