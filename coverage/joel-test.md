# Coverage: The Joel Test — 12 Steps to Better Code

**Source:** https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/
**Mapped against spec version:** 1.0.0
**Last reviewed:** 2026-07-18

The assessment covers 9 of the 12 steps in full (three of those through the
modern successor of the original practice) and 3 partially. The structural
difference: the Joel Test is 12 binary yes/no questions scored against the
same bar for every team; this assessment turns each practice into a
diagnostic conversation and scores distance from the team's own bar
(importance × maturity) instead of a fixed checklist.

| # | Joel Test step | Our item(s) | Coverage |
|---|---|---|---|
| 1 | Do you use source control? | 6.1 Version Control System | ✅ Full |
| 2 | Can you make a build in one step? | 6.4 Project Build, 6.2 Project Installation | ✅ Full |
| 3 | Do you make daily builds? | 6.13 CI/CD | ✅ Full (modernized) |
| 4 | Do you have a bug database? | 2.5 Task Management | ✅ Full |
| 5 | Do you fix bugs before writing new code? | 5.6 Technical Debt, 2.6 Prioritization and Decision Making | ⚠️ Partial |
| 6 | Do you have an up-to-date schedule? | 2.7 Project Estimation, 1.5 Product Roadmap | ✅ Full |
| 7 | Do you have a spec? | 1.4 Functional and Non-Functional Requirements, 3.1 System Documentation | ✅ Full |
| 8 | Do you use the best tools money can buy? | 8.1 Working Conditions | ✅ Full |
| 9 | Do you have quiet working conditions? | 8.1 Working Conditions, 8.2 Remote Work / Hybrid Efficiency | ✅ Full (modernized) |
| 10 | Do you have testers? | 5.8 Unit Tests, 5.9 Integration & E2E Testing, 6.5 Project Testing, 2.2 Roles and Responsibilities | ⚠️ Partial (deliberate) |
| 11 | Do new candidates write code during their interview? | 8.3 HR & Recruiting Alignment | ⚠️ Partial |
| 12 | Do you do hallway usability testing? | 1.6 User Research & Feedback Loops | ✅ Full (modernized) |

## Notes on modernized coverage

- **#3 Daily builds** → continuous integration on every commit (6.13)
  superseded the nightly build.
- **#9 Quiet working conditions** → assessed as workspace quality across
  office, remote, and hybrid setups (8.1, 8.2).
- **#12 Hallway usability testing** → structured user research and feedback
  loops (1.6) superseded ad-hoc hallway tests.

## Notes on partial coverage

- **#5 Fix bugs before writing new code.** We assess whether technical debt
  is known, prioritized, and remediated (5.6) and how trade-offs are decided
  (2.6), but no question asks the sharp version: "does new feature work start
  while known bugs sit unfixed?" Candidate question for a future MINOR
  release (add to 5.6).
- **#10 Do you have testers?** Deliberate. The industry largely moved from
  dedicated QA headcount to engineer-owned automated testing, which 5.8, 5.9,
  and 6.5 assess thoroughly; whether a person owns QA falls under 2.2 Roles
  and Responsibilities but is not asked explicitly.
- **#11 Candidates write code during the interview.** 8.3 checks whether
  engineering and recruiting are aligned on what is hired for, but nothing
  probes the interview format itself. The only Joel step with no direct
  equivalent question; candidate addition to 8.3 in a future MINOR release.
