#!/usr/bin/env python3
"""Build the standalone score calculator from the assessment item headings."""

from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
ASSESSMENT = ROOT / "assessment"
TEMPLATE = ROOT / "tools" / "calculator.template.html"
OUTPUT = ROOT / "tools" / "calculator.html"

version_match = re.search(
    r"(?m)^\*\*Spec version: (\d+\.\d+\.\d+)\*\*$",
    (ROOT / "README.md").read_text(encoding="utf-8"),
)
if not version_match:
    raise SystemExit("error: could not read the spec version from README.md")

items = []
for path in sorted(ASSESSMENT.glob("*.md")):
    text = path.read_text(encoding="utf-8")
    category_match = re.search(r"(?m)^# (\d+)\. (.+)$", text)
    if not category_match:
        raise SystemExit(f"error: missing category heading in {path}")
    category = f"{category_match.group(1)}. {category_match.group(2)}"
    for item_match in re.finditer(r"(?m)^### (\d+\.\d+) (.+)$", text):
        items.append(
            {
                "id": item_match.group(1),
                "title": item_match.group(2).strip(),
                "category": category,
            }
        )

if not items:
    raise SystemExit("error: no assessment items found")
if len({item["id"] for item in items}) != len(items):
    raise SystemExit("error: duplicate item IDs in assessment headings")

lite_text = (ROOT / "profiles" / "lite.md").read_text(encoding="utf-8")
lite_ids = re.findall(r"(?m)^\|\s*\d+\s*\|\s*(\d+\.\d+)\s+", lite_text)
if len(lite_ids) != 15 or not set(lite_ids).issubset({item["id"] for item in items}):
    raise SystemExit("error: lite-v1 profile must select 15 existing assessment items")

template = TEMPLATE.read_text(encoding="utf-8")
output = (
    template.replace("__SPEC_VERSION__", version_match.group(1))
    .replace("__ITEM_DATA__", json.dumps(items, ensure_ascii=False).replace("<", "\\u003c"))
    .replace("__LITE_ITEMS__", json.dumps(lite_ids))
)
OUTPUT.write_text(output, encoding="utf-8")
print(f"wrote {OUTPUT.relative_to(ROOT)} with {len(items)} items at spec {version_match.group(1)}")
