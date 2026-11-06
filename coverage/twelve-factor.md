# Coverage: The Twelve-Factor Methodology

**Source:** https://www.12factor.net/
**Mapped against spec version:** 1.0.0
**Last reviewed:** 2026-07-18

The assessment covers 5 of the 12 factors in full, 6 partially, and 1 not at
all. The structural difference matters more here than with checklist-style
frameworks: 12-Factor prescribes a specific application architecture (how a
SaaS app should be built and deployed), while this assessment evaluates team
and project maturity. Where 12-Factor mandates a mechanism (stateless
processes, port binding), we assess the outcome it serves (scalability,
clean interfaces) without prescribing the mechanism — so several "Partial"
verdicts are a difference of altitude, not a blind spot.

| # | Factor | Our item(s) | Coverage |
|---|---|---|---|
| I | Codebase — one codebase in revision control, many deploys | 6.1 Version Control System | ✅ Full |
| II | Dependencies — explicitly declare and isolate | 5.7 Package Management | ✅ Full |
| III | Config — store config in the environment | 7.5 Credentials, 6.8 Multiple Environments | ⚠️ Partial |
| IV | Backing services — treat as attached resources | 3.8 APIs & Integrations, 3.4 Loose Coupling / High Cohesion | ⚠️ Partial |
| V | Build, release, run — strictly separate stages | 6.4 Project Build, 6.9 Release Management Process, 6.13 CI/CD | ✅ Full |
| VI | Processes — execute as stateless processes | 3.3 Architecture Patterns, 3.5 Scalability & Performance | ⚠️ Partial |
| VII | Port binding — export services via port binding | — | ❌ Not covered (deliberate) |
| VIII | Concurrency — scale out via the process model | 3.5 Scalability & Performance | ⚠️ Partial |
| IX | Disposability — fast startup, graceful shutdown | 3.6 Resilience & Fault Tolerance, 6.10 Recovery Plan | ⚠️ Partial |
| X | Dev/prod parity — keep environments similar | 6.8 Multiple Environments | ✅ Full |
| XI | Logs — treat logs as event streams | 6.11 Observability | ✅ Full (modernized) |
| XII | Admin processes — run admin tasks as one-off processes | 6.6 Automation, 3.7 Data Architecture (migrations) | ⚠️ Partial |

## Notes on modernized coverage

- **XI Logs.** 12-Factor's "logs as event streams" grew into the broader
  observability practice (structured logging, tracing, dashboards) that 6.11
  assesses directly.

## Notes on partial and missing coverage

- **III Config.** 7.5 catches the worst failure (secrets in code) and 6.8
  covers environment separation, but no question asks how non-secret
  configuration is managed and injected per environment. Genuine gap;
  candidate question for 6.8 in a future MINOR release.
- **IV Backing services.** 3.8 assesses external contracts and 3.4 assesses
  coupling, but the specific discipline — swapping a backing service without
  code changes — is not probed.
- **VI Processes / VIII Concurrency.** 3.5 asks what breaks as traffic
  doubles and whether scaling is understood, which surfaces state-in-process
  problems indirectly; the statelessness and process-model prescriptions
  themselves are architecture choices we deliberately don't mandate.
- **VII Port binding.** The most implementation-specific factor; irrelevant
  to many stacks (mobile, embedded, serverless). Deliberately not covered —
  an assessment that stays architecture-agnostic cannot mandate it.
- **IX Disposability.** 3.6 covers graceful degradation and retries and 6.10
  covers recovery, but startup/shutdown behavior (crash-only design, clean
  drain on deploy) is not asked. Reasonable candidate question for 3.6.
- **XII Admin processes.** 6.6 assesses automation of manual work and 3.7
  covers migrations, but the one-off-task discipline (run in identical
  environment, tracked, repeatable) is not asked explicitly.
