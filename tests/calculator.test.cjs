const {test} = require("node:test");
const assert = require("node:assert/strict");
const {importAssessment, scoreAssessment, compareAssessments, rankedGaps} = require("../tools/calculator-core.cjs");

const context = {specVersion: "1.0.0", team: "", profile: "Full", systemBoundary: "web", environment: "prod", date: ""};
function answer(id, importance, state, status = "Confirmed") {
  return {id, title: "Practice " + id, category: "1. Delivery", note: "", inScope: status !== "Skipped", importance, state, status};
}
const rows = [answer("1.1", 1, 2), answer("1.2", 3, 4)];
const custom = {...answer("custom-01", 3, 1)};
delete custom.inScope;
function report(answers = rows, extras = [], ctx = context) {
  return scoreAssessment(ctx, answers, extras);
}
function reimport(data) {
  return importAssessment(JSON.parse(JSON.stringify(data)), context.specVersion, rows);
}

test("only confirmed applicable answers enter scores, with separate supplemental totals", () => {
  const incomplete = ["Unknown", "Unconfirmed", "Deferred", "Skipped", "N/A"].map((s, i) => answer("1." + (i+3), null, null, s));
  const result = report([...rows, ...incomplete], [custom]);
  assert.deepEqual(result.categories[0], {category: "1. Delivery", inScope: 6, confirmed: 2, applicable: 5,
    numerator: 14, denominator: 16, score: 0.875, status: "Provisional"});
  assert.equal(result.customSummary.score, 0.25);
  for (const [status, expected] of [["Skipped", "Skipped"], ["N/A", "Not assessed"], ["Deferred", "Provisional"]]) {
    const summary = report([answer("1.1", null, null, status)]).categories[0];
    assert.equal(summary.score, null);
    assert.equal(summary.status, expected);
  }
  assert.equal(report([answer("1.1", 3, 0)]).categories[0].score, 0);
});

test("gap ties sort by importance then numeric item ID", () => {
  const gaps = rankedGaps([answer("1.10", 2, 2), answer("1.2", 2, 2), answer("1.1", 1, 0), answer("1.3", 3, 0),
    answer("1.4", null, null, "Unknown")]);
  assert.deepEqual(gaps.map(g => g.id), ["1.3", "1.2", "1.10", "1.1"]);
});

test("v1 JSON round trip, including early exports without supplemental rows", () => {
  assert.deepEqual(reimport(report(rows, [custom])), report(rows, [custom]));
  const early = report();
  delete early.customRows;
  delete early.customSummary;
  assert.deepEqual(reimport(early), report());
});

test("forged summaries cannot supply scores or make a provisional comparison eligible", () => {
  const partial = report([rows[0], answer("1.2", 3, null, "Unknown")], [{...custom, status: "Deferred"}]);
  const forged = {...partial, categories: report().categories, customSummary: report(rows, [custom]).customSummary};
  const imported = reimport(forged);
  assert.deepEqual(imported, partial);
  const comparison = compareAssessments(report(rows, [custom]), imported);
  assert.equal(comparison.standard.eligible, false);
  assert.equal(comparison.custom.eligible, false);
});

test("malformed imports identify the invalid field or item", () => {
  for (const [modify, message] of [
    [d => d.calculatorVersion++, /version 1/], [d => delete d.context, /context/],
    [d => d.context.date = "2025-02-31", /date/], [d => d.context.specVersion = "?", /spec version/],
    [d => d.rows.pop(), /Missing standard item/], [d => d.rows.push(d.rows[0]), /Duplicate/],
    [d => d.rows[0].id = "1.99", /catalog/], [d => d.rows[0].title = "Different", /catalog/],
    [d => d.rows[0].inScope = false, /scope/], [d => d.selectedItems.reverse().fill("1.2"), /Selected/],
    [d => d.rows[0].status = "OK", /status/], [d => d.rows[0].importance = 4, /importance/],
    [d => d.rows[0].state = "0", /state/], [d => d.rows[0].state = null, /Confirmed/],
    [d => d.customRows = null, /array/], [d => d.customRows.push(d.customRows[0]), /Duplicate/],
    [d => d.customRows[0].title = " ", /title/], [d => d.customRows[0].category = "Missing", /category/],
    [d => d.customRows[0].id = "1.1", /Duplicate/], [d => d.customRows[0].id = "bad", /custom practice ID/],
  ]) {
    const data = structuredClone(report(rows, [custom]));
    modify(data);
    assert.throws(() => reimport(data), message);
  }
});

test("different major versions cannot compare even identical IDs and titles", () => {
  const older = report(rows, [], {...context, specVersion: "0.3.0"});
  assert.throws(() => reimport(older), /Migrate/);
  assert.throws(() => compareAssessments(report(), older), /Migrate/);
});

test("standard comparisons require complete matching context, selection and contributing weights", () => {
  const current = report();
  const changedState = report([answer("1.1", 1, 4), rows[1]]);
  assert.equal(compareAssessments(current, changedState).standard.eligible, true);
  assert.equal(compareAssessments(current, changedState).standard.changedStates, 1);
  for (const changed of [
    report([answer("1.1", 3, 2), rows[1]]), report([answer("1.1", null, null, "N/A"), rows[1]]),
    report([answer("1.1", 1, 2, "Skipped"), rows[1]]),
    ...["profile", "systemBoundary", "environment"].map(key => report(rows, [], {...context, [key]: "other"})),
    reimport(report(rows.slice(1), [], {...context, specVersion: "1.1.0"})),
  ]) {
    const comparison = compareAssessments(current, changed);
    assert.equal(comparison.standard.eligible, false);
    assert.ok(comparison.standard.shared >= 1);
  }
});

test("custom set, rating, weight or completion changes affect only supplemental eligibility", () => {
  const base = report(rows, [custom]);
  assert.equal(compareAssessments(base, reimport(base)).custom.eligible, true);
  for (const changes of [{title: "New"}, {importance: 1}, {state: 4}, {status: "Deferred"}]) {
    const comparison = compareAssessments(base, report(rows, [{...custom, ...changes}]));
    assert.equal(comparison.custom.eligible, false);
    assert.equal(comparison.standard.eligible, true);
  }
});
