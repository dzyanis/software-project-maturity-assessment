# Coverage: DORA / Accelerate and Google SRE

**Sources:** [DORA software delivery performance metrics](https://dora.dev/guides/dora-metrics/), [DORA capability catalog](https://dora.dev/capabilities/), [Google SRE: Service Level Objectives](https://sre.google/sre-book/service-level-objectives/), [Google SRE: Error Budgets](https://sre.google/sre-book/embracing-risk/), and [Google SRE: Eliminating Toil](https://sre.google/sre-book/eliminating-toil/)
**Mapped against spec version:** 0.2.0
**Last reviewed:** 2026-10-20

DORA measures software delivery performance and studies the capabilities
associated with it. Its current model has five delivery metrics: change lead
time, deployment frequency, failed deployment recovery time, change fail rate,
and deployment rework rate. This updates the earlier Four Keys referenced in
this issue by adding deployment rework rate and refining the recovery metric.
Google SRE practices complement those outcomes with service-level objectives
(SLOs), error budgets, actionable monitoring, incident learning, and toil
reduction. The assessment contains related project-level practices, but does
not calculate DORA metrics or provide a DORA or SRE assessment; all mappings
below are **Partial**.

## DORA delivery performance metrics

| # | Metric | Closest assessment item(s) | How to use as evidence | Coverage |
|---:|---|---|---|---|
| 1 | Change lead time — time from a change committed to version control until it is deployed to production | 5.1 Version Control System; 5.9 Release Management Process; 5.13 CI/CD | Record the metric definition, service, observation window, and trend in relevant item notes. | ⚠️ Partial |
| 2 | Deployment frequency — number of production deployments over time or time between deployments | 5.9 Release Management Process; 5.13 CI/CD | Use the service-level trend as evidence about delivery cadence and the path to production. | ⚠️ Partial |
| 3 | Failed deployment recovery time — time to recover from a deployment failure requiring immediate intervention | 5.10 Recovery Plan; 5.11 Observability; 5.12 Monitoring & Alerting Quality | Record recovery time and the incident boundary; distinguish deployment recovery from general incident duration. | ⚠️ Partial |
| 4 | Change fail rate — proportion of deployments requiring immediate intervention, such as rollback or hotfix | 5.5 Project Testing; 5.9 Release Management Process; 5.12 Monitoring & Alerting Quality; 5.13 CI/CD | Add the numerator, denominator, failure definition, service, and window to the evidence note. | ⚠️ Partial |
| 5 | Deployment rework rate — proportion of deployments that are unplanned and result from a production incident | 5.9 Release Management Process; 5.12 Monitoring & Alerting Quality; 6.9 Incident Response Process | Note incident-driven deployments separately from planned releases and include the measurement window. | ⚠️ Partial |

## DORA capabilities with related assessment items

| DORA capability | Closest assessment item(s) | Coverage |
|---|---|---|
| Continuous integration | 4.8 Unit Tests; 4.9 Integration & E2E Testing; 5.13 CI/CD | ⚠️ Partial |
| Continuous delivery and deployment automation | 5.6 Automation; 5.9 Release Management Process; 5.13 CI/CD | ⚠️ Partial |
| Test automation | 4.8 Unit Tests; 4.9 Integration & E2E Testing; 5.5 Project Testing; 5.13 CI/CD | ⚠️ Partial |
| Working in small batches | 2.8 Code Reviews; 5.1 Version Control System; 5.9 Release Management Process; 5.13 CI/CD | ⚠️ Partial |
| Trunk-based development | 5.1 Version Control System | ⚠️ Partial |
| Loosely coupled architecture | 3.3 Architecture Patterns; 3.4 Loose Coupling / High Cohesion; 3.8 APIs & Integrations | ⚠️ Partial |
| Monitoring and observability | 5.11 Observability; 5.12 Monitoring & Alerting Quality | ⚠️ Partial |
| User-centric focus | 1.4 Functional and Non-Functional Requirements; 1.6 User Research & Feedback Loops | ⚠️ Partial |
| Generative, high-trust culture | 2.10 Ground Rules; 7.5 Team Health & Culture | ⚠️ Partial |
| Continuous improvement | 2.9 Retrospectives and Feedback; 4.6 Technical Debt; 5.7 Optimizations | ⚠️ Partial |

## Google SRE practices

| Practice | Closest assessment item(s) | Coverage |
|---|---|---|
| Define user-relevant SLOs and measure service-level indicators | 1.4 Functional and Non-Functional Requirements; 5.11 Observability; 5.12 Monitoring & Alerting Quality | ⚠️ Partial |
| Use error budgets to balance reliability and change risk | 3.6 Resilience & Fault Tolerance; 5.9 Release Management Process; 5.10 Recovery Plan; 5.12 Monitoring & Alerting Quality | ⚠️ Partial |
| Reduce operational toil through useful automation | 5.6 Automation; 5.11 Observability; 7.1 Working Conditions | ⚠️ Partial |
| Learn from incidents through blameless postmortems and tracked actions | 2.9 Retrospectives and Feedback; 6.9 Incident Response Process | ⚠️ Partial |
| Make alerts actionable and monitoring support diagnosis | 4.5 Error Handling; 5.11 Observability; 5.12 Monitoring & Alerting Quality | ⚠️ Partial |

## Notes on partial and missing coverage

- **Metrics are evidence, not item ratings.** A DORA metric can support a
  rationale for 5.9, 5.10, 5.12, or 5.13, but a good or poor number alone does
  not determine the maturity state. Record the application or service,
  definitions, time window, and relevant trend. DORA recommends using the
  metrics in context and cautions against setting them as isolated targets or
  comparing unlike applications.
- **These are service-level outcomes.** The five metrics are most useful for
  one application or service at a time. Avoid mixing unrelated services or
  teams into a single number; use a consistent boundary and window when
  comparing a service with itself over time.
- **SLO and error-budget gap.** The assessment asks about reliability,
  monitoring, release, and recovery practices, but has no explicit prompt for
  defining user-facing SLOs, error-budget policy, or using budget consumption
  to change release decisions. Those are good candidates for evidence notes
  and a future item review, not additional requirements implied by this map.
- **Toil and postmortems.** Automation, working conditions, retrospectives,
  and incident response touch these themes. The assessment does not measure
  operational toil as a share of engineering time or require a specific
  postmortem method.
- **Scores are not DORA benchmarks.** Assessment scores are not DORA metric
  values, performance clusters, or SRE maturity levels. No statistical
  correlation is claimed.
