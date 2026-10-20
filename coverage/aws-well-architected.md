# Coverage: AWS Well-Architected Framework

**Source:** https://docs.aws.amazon.com/wellarchitected/latest/framework/
**Mapped against spec version:** 0.2.0
**Last reviewed:** 2026-10-20

The AWS Well-Architected Framework evaluates cloud workloads through six
pillars: operational excellence, security, reliability, performance efficiency,
cost optimization, and sustainability. This assessment covers engineering
practices at the software project level and is cloud-provider neutral. The
mapping identifies related evidence; it is not an AWS Well-Architected Review
and does not establish that a workload meets AWS best practices. Overall, one
pillar is covered fully and five are covered partially.

| Pillar | Our item(s) | Coverage |
|---|---|---|
| Operational excellence | 2.5 Task Management, 2.6 Prioritization and Decision Making, 2.9 Retrospectives and Feedback, 3.1 System Documentation, 5.1 Version Control System, 5.6 Automation, 5.9 Release Management Process, 5.11 Observability, 5.12 Monitoring & Alerting Quality, 5.13 CI/CD | ⚠️ Partial |
| Security | 1.8 Compliance & Legal Requirements, 4.14 Dependency Security & Updates, 6.1–6.10 Security & Compliance | ⚠️ Partial |
| Reliability | 3.5 Scalability & Performance, 3.6 Resilience & Fault Tolerance, 5.5 Project Testing, 5.9 Release Management Process, 5.10 Recovery Plan, 5.11 Observability, 5.12 Monitoring & Alerting Quality, 5.13 CI/CD | ✅ Full |
| Performance efficiency | 3.5 Scalability & Performance, 5.7 Optimizations, 5.11 Observability, 5.12 Monitoring & Alerting Quality | ⚠️ Partial |
| Cost optimization | 1.3 Project Goals, 2.6 Prioritization and Decision Making, 3.5 Scalability & Performance, 5.7 Optimizations, 5.15 Cost Efficiency / Cloud Optimization (FinOps) | ⚠️ Partial |
| Sustainability | 3.5 Scalability & Performance, 5.7 Optimizations, 5.15 Cost Efficiency / Cloud Optimization (FinOps) | ⚠️ Partial |

## Notes on partial and missing coverage

- **Operational excellence.** The assessment covers delivery discipline,
  operational visibility, change practices, and learning. It does not ask
  directly about AWS workload runbooks, operational readiness reviews,
  service quotas, or cloud-specific event response. Comparable practices can
  be assessed for Azure and Google Cloud using their own operations guidance;
  provider-specific service choices and controls differ.
- **Security.** Category 6 assesses application and project security practices,
  including requirements, access, data, vulnerability management, incident
  response, and compliance. The assessment does not verify AWS account
  boundaries, organization policies, cloud control-plane configuration, or
  individual AWS services. Azure and Google Cloud have equivalent security
  domains, but identity models, policy mechanisms, and service controls differ.
- **Reliability.** The listed items cover resilience, testing, recovery,
  releases, and detection of operational problems, so the underlying workload
  reliability practices are covered. AWS-specific design choices such as
  availability zones, managed-service quotas, and regional failover are not
  prescribed. Azure and Google Cloud use different regions, zones, services,
  and failure modes; assess the equivalent design for the chosen provider.
- **Performance efficiency.** Performance goals, optimization, and monitoring
  are covered. The assessment does not walk through the framework's cloud
  technology selection, compute, storage, database, or network design
  questions. Equivalent services exist across AWS, Azure, and Google Cloud,
  but their capabilities and tuning options are not interchangeable.
- **Cost optimization.** Item 5.15 addresses cloud cost visibility and
  optimization, supported by goal setting and prioritization. The assessment
  does not require AWS-specific billing tools, commitment instruments, or
  cost allocation practices. Azure and Google Cloud offer analogous cost
  management capabilities with different billing and discount models.
- **Sustainability.** Efficient resource use and cost optimization can provide
  indirect evidence, but the assessment asks no questions about energy use,
  carbon impact, workload demand shaping, or hardware efficiency. The gap is
  real for teams that include environmental impact in their workload goals.
  AWS, Azure, and Google Cloud expose different sustainability data and
  infrastructure choices, so this mapping does not compare their emissions.

## Using this mapping across cloud providers

The six pillar themes apply beyond AWS, but AWS Well-Architected questions and
the AWS Well-Architected Tool are designed around AWS workloads. For Azure or
Google Cloud, use the corresponding provider's architecture guidance and map
its service-specific controls to the same assessment items. Do not treat a
similarly named service or control as equivalent without checking its actual
behavior and scope.

The assessment's importance and state ratings are not AWS pillar scores, and
they are not directly comparable to AWS review findings. The frameworks have
different scopes, questions, and rating methods; no statistical correlation is
claimed.
