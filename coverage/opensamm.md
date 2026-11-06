# Coverage: OWASP SAMM (OpenSAMM)

**Source:** https://owaspsamm.org/
**Mapped against spec version:** 1.0.0
**Last reviewed:** 2026-07-18

Mapped against OWASP SAMM v2 (the current successor of OpenSAMM 1.x): 5
business functions × 3 security practices = 15 practices. The assessment
covers 6 of 15 in full and 9 partially. The relationship is one of depth:
SAMM is a dedicated security maturity model with its own per-practice
maturity levels, while our Security & Compliance category is a posture check
across the same ground. For teams that rate security items 3 (Critical), the
honest recommendation is to treat our category 7 as the entry point and run
SAMM itself for depth — the two share the same maturity-level philosophy, so
results translate naturally.

| Function | SAMM practice | Our item(s) | Coverage |
|---|---|---|---|
| Governance | Strategy & Metrics | 7.1 Security Requirements | ⚠️ Partial |
| Governance | Policy & Compliance | 7.10 Compliance & Data Retention Policies, 1.8 Compliance & Legal Requirements | ✅ Full |
| Governance | Education & Guidance | 8.4 Continuous Learning & Growth | ⚠️ Partial |
| Design | Threat Assessment | 7.1 Security Requirements (threat models) | ✅ Full |
| Design | Security Requirements | 7.1 Security Requirements | ✅ Full |
| Design | Security Architecture | 7.2 Sensitive Data Protection, 7.4 Authentication / Authorization, 7.6 Key Management | ⚠️ Partial |
| Implementation | Secure Build | 6.4 Project Build, 5.14 Dependency Security & Updates | ⚠️ Partial |
| Implementation | Secure Deployment | 6.9 Release Management Process, 7.5 Credentials | ⚠️ Partial |
| Implementation | Defect Management | 7.7 Vulnerability Management & Dependency Scanning | ✅ Full |
| Verification | Architecture Assessment | 7.8 Penetration Testing / Audits | ⚠️ Partial |
| Verification | Requirements-driven Testing | 7.3 Input Validation, 5.9 Integration & E2E Testing | ⚠️ Partial |
| Verification | Security Testing | 7.8 Penetration Testing / Audits | ✅ Full |
| Operations | Incident Management | 7.9 Incident Response Process | ✅ Full |
| Operations | Environment Management | 6.8 Multiple Environments, 6.14 Infrastructure as Code, 7.7 (infra scanning) | ⚠️ Partial |
| Operations | Operational Management | 7.2 Sensitive Data Protection, 7.10 (retention), 6.10 Recovery Plan | ⚠️ Partial |

## Notes on partial coverage

- **Strategy & Metrics.** 7.1 asks about threat models and controls, but not
  whether a security strategy exists, is aligned to business risk, and is
  measured over time. The clearest governance-level gap.
- **Education & Guidance.** 8.4 covers learning generally; security-specific
  training and secure-coding guidance are never asked. Candidate question
  for 7.1 or 8.4 in a future MINOR release.
- **Security Architecture.** We assess the components (encryption, authn/z,
  key management) but never ask the holistic question — is there a deliberate
  security architecture, with reviewed patterns and paved roads?
- **Secure Build / Secure Deployment.** Build and release discipline is
  covered (6.4, 6.9) and dependency/secret hygiene is covered (5.14, 7.5),
  but supply-chain integrity (artifact signing, provenance) is not asked.
- **Architecture Assessment / Requirements-driven Testing.** 7.8 covers
  scheduled and ad-hoc security testing; design-level security review and
  abuse-case testing derived from requirements are not distinct questions.
- **Environment / Operational Management.** Environments, IaC, recovery, and
  data protection items cover most of the ground; hardening baselines and
  patch management of the platform itself are only reachable through 7.7's
  org-wide scanning question.

## Summary judgment

Category 7 gives a team an honest read on whether security fundamentals
exist and who owns them; SAMM measures how mature each security practice is
on its own 3-level scale. No overlap conflict — our N/A-and-importance
mechanism even lets a team record "we run SAMM for this" as the reason an
item is assessed elsewhere.
