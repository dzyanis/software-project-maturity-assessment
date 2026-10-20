# Pilot method and interview size

This is the measurement plan for issues #10 and #27. No pilot results are
claimed here; record real sessions with [`templates/pilot-record.md`](../templates/pilot-record.md).

## Current interview size

The current source contains 75 scored items and seven category “Other” prompts.
The 75 scored items contain 311 bullets under **Questions to ask**. To reproduce
the count, inspect each `###` item heading in `assessment/*.md`, find its
`**Questions to ask:**` section, and count each `- ` list entry up to the next
bold section label or item heading. “Other” prompts do not have question lists
and are not included in the 311.

This is a prompt inventory, not a question or time estimate. A single bullet
can contain several questions, follow-ups depend on the evidence, and assessors
should skip questions already answered. Measure elapsed session time directly;
do not estimate it by multiplying bullets by a fixed duration.

## Session method

1. Run at least three real assessments in different project contexts. Record
   spec version, profile, selected scope, roles, elapsed time, completion,
   follow-ups, unclear prompts, repeated evidence, unavailable evidence, and
   where participants stop or defer items.
2. For a small shared set of items, give the same anonymized evidence to two
   assessors. Have them independently record importance, state, and rationale
   before discussing differences. Record where they disagreed and whether the
   item wording or level descriptions contributed.
3. Ask whether findings and recommendations were useful. Separate observed
   evidence from interpretation and tie any proposed wording change to a
   finding.
4. Summarize recurring friction across sessions. Do not claim statistical
   validation or reliability from three pilots. Any change to item meaning or
   scoring follows the spec versioning policy.

Use the [pilot record](../templates/pilot-record.md) for each session and its
cross-session summary. The lite profile is a documented 15-item subset; its
time target is a planning estimate until actual pilots measure it.
