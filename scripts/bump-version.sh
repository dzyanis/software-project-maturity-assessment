#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

if [[ $# -ne 1 || ! "$1" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "usage: $0 MAJOR.MINOR.PATCH" >&2
  exit 2
fi

new_version=$1

python3 - "$new_version" <<'PY'
from pathlib import Path
import re
import sys

new_version = sys.argv[1]
readme = Path("README.md")
readme_text = readme.read_text(encoding="utf-8")
match = re.search(r"(?m)^\*\*Spec version: (\d+\.\d+\.\d+)\*\*$", readme_text)
if not match:
    raise SystemExit("error: could not find the authoritative spec version in README.md")
old_version = match.group(1)

updates = {}


def stage(path, pattern, expected, label):
    text = path.read_text(encoding="utf-8")
    matches = list(pattern.finditer(text))
    if len(matches) != expected:
        raise SystemExit(
            f"error: expected {expected} {label} stamp(s) in {path}, found {len(matches)}"
        )
    stale = sorted({found.group(2) for found in matches if found.group(2) != old_version})
    if stale:
        raise SystemExit(
            f"error: {path} has {label} stamp(s) that differ from README.md "
            f"({old_version}): {', '.join(stale)}"
        )
    updated, count = pattern.subn(
        lambda found: found.group(1) + new_version + found.group(3), text
    )
    if count != expected:
        raise SystemExit(
            f"error: could not update all {label} stamps in {path} (updated {count})"
        )
    updates[path] = updated


stage(
    readme,
    re.compile(r"(?m)^(\*\*Spec version: )(\d+\.\d+\.\d+)(\*\*)$"),
    1,
    "README spec version",
)
stage(
    Path("ASSESSMENT.md"),
    re.compile(
        r"(?m)^(\*\*Spec version: )(\d+\.\d+\.\d+)(\*\* — see \[CHANGELOG\.md\]\(CHANGELOG\.md\) for the versioning policy\.)$"
    ),
    1,
    "assessment guide spec version",
)
stage(
    Path("AGENT.md"),
    re.compile(r"(?m)^(.*\bspec version )(\d+\.\d+\.\d+)(\b.*)$"),
    2,
    "agent spec version",
)
stage(
    Path("templates/report.md"),
    re.compile(r"(?m)^(\| \*\*Spec version\*\* \| )(\d+\.\d+\.\d+)( \|)$"),
    1,
    "report template spec version",
)
stage(
    Path("examples/sample-report.md"),
    re.compile(r"(?m)^(\| \*\*Spec version\*\* \| )(\d+\.\d+\.\d+)( \|)$"),
    1,
    "sample report spec version",
)

for path in sorted(Path("assessment").glob("*.md")):
    stage(
        path,
        re.compile(
            r"(?m)^(Part of the \[Software Project Maturity Assessment\]\(\.\./ASSESSMENT\.md\) — spec version )(\d+\.\d+\.\d+)(\.)$"
        ),
        1,
        "category spec version",
    )

coverage_files = [
    path for path in sorted(Path("coverage").glob("*.md")) if path.name != "README.md"
]
if not coverage_files:
    raise SystemExit("error: no coverage mapping files found")
for path in coverage_files:
    stage(
        path,
        re.compile(r"(?m)^(\*\*Mapped against spec version:\*\* )(\d+\.\d+\.\d+)()$"),
        1,
        "coverage mapping version",
    )

for path, updated in updates.items():
    path.write_text(updated, encoding="utf-8")

print(f"updated {len(updates)} files from {old_version} to {new_version}")
PY

./scripts/build-bundle.sh
