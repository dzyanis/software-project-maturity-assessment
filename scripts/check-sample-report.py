#!/usr/bin/env python3
"""Ensure the full sample report and calculator include every standard item once."""

from collections import Counter
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

source_ids = []
for path in sorted((ROOT / "assessment").glob("*.md")):
    source_ids.extend(re.findall(r"(?m)^### (\d+\.\d+) ", path.read_text(encoding="utf-8")))

report = (ROOT / "examples/sample-report.md").read_text(encoding="utf-8")
# Only detailed standard rows count: roadmap references and report-local custom
# IDs are separate. Include Other prompts even when their answer is N/A.
details = report.split("## Detailed results\n", 1)[1].split("\n## ", 1)[0]
report_ids = re.findall(r"(?m)^\| (\d+\.\d+) [^|]+\|", details)

calculator = (ROOT / "tools/calculator.html").read_text(encoding="utf-8")
match = re.search(r"(?m)^const ITEMS = (\[.*\]);$", calculator)
if not match:
    raise SystemExit("error: calculator item data is missing")
calculator_ids = [item["id"] for item in json.loads(match.group(1))]

expected = set(source_ids)
if not expected or len(expected) != len(source_ids):
    raise SystemExit("error: assessment item IDs are missing or duplicated")

for name, ids in [("sample report", report_ids), ("calculator", calculator_ids)]:
    missing = sorted(expected - set(ids))
    extra = sorted(set(ids) - expected)
    duplicates = sorted(item for item, count in Counter(ids).items() if count > 1)
    if missing or extra or duplicates:
        raise SystemExit(
            f"error: {name} item IDs differ from assessment: "
            f"missing={missing}, extra={extra}, duplicates={duplicates}"
        )

print(f"ok   - sample report and calculator contain all {len(expected)} standard item IDs once")
