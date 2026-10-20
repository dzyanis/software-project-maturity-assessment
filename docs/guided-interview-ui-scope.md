# Guided interview UI scope

This document scopes the optional web interface tracked in issue #4. It is a
planning artifact; it does not authorize or describe a built application.

## Goal

Offer a browser-based path for conducting an assessment and exporting a
report, using the same item IDs, rating scales, scope rules, and score formulas
as the manual and LLM-agent paths. The manual and agent paths remain supported
and documented.

## Intended users

- An assessor facilitating a discussion with a project team.
- A team member completing a self-assessment with an assessor.

The first version is a single-assessor, single-project workflow. It does not
provide accounts, team collaboration, or organization-wide administration.

## Main flow

1. Start an assessment by recording the spec version, profile, system boundary,
   environment, assessment date, and selected categories or items.
2. Present one item at a time with its title, rationale, expected practice,
   interview questions, and red flags.
3. Record importance and current state separately, plus status, a concise
   rationale, and an optional safe evidence reference. Allow unknown, deferred,
   unconfirmed, N/A, and skipped values without inventing ratings.
4. Review category coverage, standard scores, custom supplemental scores,
   confirmed gaps, and any comparability warnings.
5. Review and export a Markdown report that follows `templates/report.md`.

## Required behavior

- Load items and titles from the authoritative assessment files and preserve
  their IDs. Support the full profile and documented lite profile.
- Keep standard category scores separate from supplemental custom-practice
  scores. Apply the formulas and incomplete-answer rules in `ASSESSMENT.md`.
- Keep the work local to the browser in the first version. Save and export only
  when the assessor explicitly requests it; do not require a server or account.
- Allow an assessor to pause, export a checkpoint, and resume from
  `templates/checkpoint.md` without losing confirmed values or notes.
- Support keyboard navigation, visible focus, accessible labels, and narrow
  screens. Avoid color as the only way to identify status.
- Warn when a prior report differs in spec, boundary, environment, profile,
  selected items, weights, or custom-practice set. Do not imply scores are
  comparable when the written rules say they are not.

## Out of scope for the first version

- Hosted storage, user accounts, authentication, or multi-user editing.
- Replacing the manual or LLM-agent interview paths.
- Changing assessment items, rating scales, formulas, or release policy.
- Automatically collecting telemetry, evidence, or participant identity.
- Generating recommendations without assessor review.

## Release and acceptance notes

The UI must be behaviorally consistent with the current spec and calculator.
Any change to item meaning or scoring requires the existing spec-change and
versioning process. Before implementation, confirm a browser support target
and a visual design direction; neither affects the scoring model.

The MVP is acceptable when an assessor can complete a scoped assessment,
preserve an incomplete run, resume it, understand provisional and supplemental
scores, and export a report without a network account.
