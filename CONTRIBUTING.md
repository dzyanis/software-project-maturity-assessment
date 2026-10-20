# Contributing

Thanks for looking at this. The assessment is a spec, so the main thing to know
is how changes to it are versioned.

## The versioning rule

Reports record the spec version they were produced with, and teams compare their
own reports across runs. That only works if item numbering is stable, so:

- **MAJOR** changes or removes an existing item. Old reports stop being comparable.
- **MINOR** adds an item, question, or additive scoring/report behavior. Existing item numbering and calculations for complete reports remain compatible.
- **PATCH** fixes wording without changing what is being asked.

Changes that define how incomplete answers are reported or scored need an
explicit comparison rule. If complete-report calculations remain unchanged,
record the new report behavior as a MINOR change and state which older reports
cannot be compared. Changes that alter existing complete-report calculations
need a MAJOR release decision.

Anything that changes what an item asks, or how items are numbered, gets the
`spec-change` label and needs agreement on the release impact before the PR is
written. That is what the "Assessment item proposal" issue form is for. Wording
fixes inside `assessment/` that leave the question unchanged are PATCH work and
need no proposal.

## Proposing an assessment item or question

Open an issue with the **Assessment item proposal** form. The two fields that
decide the outcome are "why current items do not cover it" and "what good looks
like". Duplicating an existing item is the most common reason a proposal is
turned down, so name the closest existing items and say what they miss.

Accepted proposals get a milestone. Only then is a PR useful.

## Everything else

Documentation fixes, script bugs, and new coverage mappings do not need a
proposal. Open an issue with the **Bug, docs fix, or coverage mapping** form, or
send a PR directly.

## Before you send a PR

To update the current version stamps across the assessment, coverage mappings,
agent instructions, report template, and sample report, run:

```bash
./scripts/bump-version.sh X.Y.Z
```

The script checks that existing stamps agree with `README.md` and rebuilds the
single-file bundle after updating them. Update the changelog release heading
and notes separately when preparing a release.

If you changed anything under `assessment/`, `templates/`, or `AGENT.md`,
regenerate the single-file bundle:

```bash
./scripts/build-bundle.sh
```

The script refuses to build if the spec version is missing from any file it
checks, which includes `ASSESSMENT.md` and the `coverage/` mappings as well as
the bundled files. That is the check that keeps version stamps aligned. Commit
the regenerated `service-audit-full.md` along with your change.

## Picking something up

Issues are grouped by `area:` label and by milestone. Anything labelled
`good first issue` is self-contained and does not need context on the rest of
the spec.
