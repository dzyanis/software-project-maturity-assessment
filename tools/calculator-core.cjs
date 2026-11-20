// Inlined into the standalone calculator by build-calculator.py.
const statusOptions = ["Confirmed", "Unknown", "Deferred", "Unconfirmed", "N/A", "Skipped"];

function isRated(row) {
  return row.status === "Confirmed" && row.importance !== null && row.state !== null && Boolean(row.title);
}

function summarize(rows, emptyStatus) {
  const applicable = rows.filter(row => row.status !== "N/A" && row.status !== "Skipped");
  const rated = applicable.filter(isRated);
  const numerator = rated.reduce((sum, row) => sum + row.importance * row.state, 0);
  const denominator = rated.reduce((sum, row) => sum + row.importance * 4, 0);
  let status = "Complete";
  if (!rows.length) status = emptyStatus;
  else if (!applicable.length) status = rows.every(row => row.status === "Skipped") ? "Skipped" : "Not assessed";
  else if (rated.length !== applicable.length) status = "Provisional";
  return {applicable: applicable.length, confirmed: rated.length, numerator, denominator,
    status, score: denominator ? numerator / denominator : null};
}

function rankedGaps(rows) {
  return rows.filter(isRated).map(row => ({...row, gap: row.importance * (4 - row.state)}))
    .sort((a, b) => b.gap - a.gap || b.importance - a.importance || a.id.localeCompare(b.id, "en", {numeric: true}));
}

function scoreAssessment(context, rows, customRows) {
  const selected = rows.filter(row => row.inScope);
  const categories = [...new Set(rows.map(row => row.category))].map(category => {
    const group = selected.filter(row => row.category === category);
    return {category, inScope: group.length, ...summarize(group, "Skipped")};
  });
  return {calculatorVersion: 1, context, selectedItems: selected.map(row => row.id), rows, categories,
    customRows, customSummary: summarize(customRows, "None identified")};
}

function requireField(condition, message) {
  if (!condition) throw new Error(message);
}

function validateAnswer(row, ids) {
  requireField(row && typeof row.id === "string", "Each answer needs an item ID.");
  requireField(!ids.has(row.id), `Duplicate item ID: ${row.id}.`);
  ids.add(row.id);
  for (const key of ["title", "category"]) {
    requireField(typeof row[key] === "string" && row[key].trim(), `${row.id} needs a ${key}.`);
  }
  requireField(typeof row.note === "string", `${row.id}: note must be text.`);
  requireField(statusOptions.includes(row.status), `${row.id}: choose a supported answer status.`);
  for (const [key, min, max] of [["importance", 1, 3], ["state", 0, 4]]) {
    const value = row[key];
    requireField(value === null || (Number.isInteger(value) && value >= min && value <= max),
      `${row.id}: ${key} must be null or an integer from ${min} to ${max}.`);
    requireField(row.status !== "Confirmed" || value !== null, `${row.id}: Confirmed requires ${key}.`);
  }
}

function importAssessment(data, specVersion, items) {
  requireField(data?.calculatorVersion === 1, "Choose a supported version 1 calculator export.");
  const ctx = data.context;
  for (const key of ["specVersion", "team", "profile", "systemBoundary", "environment", "date"]) {
    requireField(typeof ctx?.[key] === "string", `Assessment context needs a text field for ${key}.`);
  }
  requireField(/^\d+\.\d+\.\d+$/.test(ctx.specVersion), "Use a numeric major.minor.patch spec version.");
  if (ctx.date) {
    const timestamp = Date.parse(ctx.date + "T00:00:00Z");
    requireField(/^\d{4}-\d{2}-\d{2}$/.test(ctx.date) && Number.isFinite(timestamp) &&
      new Date(timestamp).toISOString().slice(0, 10) === ctx.date, "Use a valid assessment date (YYYY-MM-DD).");
  }
  requireField(ctx.specVersion.split(".")[0] === specVersion.split(".")[0],
    `Spec ${ctx.specVersion} has incompatible item IDs. Migrate this report to spec ${specVersion} before comparing.`);
  requireField(Array.isArray(data.rows) && data.rows.length > 0, "Provide the standard answer rows.");
  const catalog = new Map(items.map(item => [item.id, item]));
  const ids = new Set();
  const exactVersion = ctx.specVersion === specVersion;
  for (const row of data.rows) {
    validateAnswer(row, ids);
    requireField(/^\d+\.\d+$/.test(row.id), `Invalid standard item ID: ${row.id}.`);
    if (exactVersion) {
      const item = catalog.get(row.id);
      requireField(item && item.title === row.title && item.category === row.category,
        `${row.id}: item does not match the catalog for spec ${specVersion}.`);
    }
    requireField(typeof row.inScope === "boolean" && row.inScope === (row.status !== "Skipped"),
      `${row.id}: scope and Skipped status must agree.`);
    requireField(row.status !== "N/A" || (row.importance === null && row.state === null),
      `${row.id}: N/A standard answers must have empty ratings.`);
  }
  if (exactVersion) {
    for (const id of catalog.keys()) requireField(ids.has(id), `Missing standard item ${id}.`);
  }
  const selected = new Set(data.rows.filter(row => row.inScope).map(row => row.id));
  requireField(Array.isArray(data.selectedItems) && data.selectedItems.length === selected.size &&
    new Set(data.selectedItems).size === selected.size && data.selectedItems.every(id => selected.has(id)),
    "Selected item IDs must match the in-scope answer rows exactly.");
  // Early version 1 exports predate supplemental practices.
  const customRows = data.customRows === undefined ? [] : data.customRows;
  requireField(Array.isArray(customRows), "Custom rows must be an array.");
  const categories = new Set(data.rows.map(row => row.category));
  for (const row of customRows) {
    validateAnswer(row, ids);
    requireField(/^custom-\d+$/.test(row.id), `${row.id}: expected a custom practice ID such as custom-01.`);
    requireField(categories.has(row.category), `${row.id}: choose an assessment category.`);
  }
  return scoreAssessment(ctx, data.rows, customRows);
}

function compareRows(current, previous) {
  const prior = new Map(previous.map(row => [row.id, row]));
  const samePractice = row => prior.get(row.id)?.title === row.title && prior.get(row.id)?.category === row.category;
  const sameSet = current.length === previous.length && current.every(samePractice);
  const shared = current.filter(row => samePractice(row) && isRated(row) && isRated(prior.get(row.id)));
  const changedWeights = current.filter(row => samePractice(row) &&
    (isRated(row) !== isRated(prior.get(row.id)) || (isRated(row) && row.importance !== prior.get(row.id).importance)));
  return {sameSet, weightsMatch: !changedWeights.length, shared: shared.length,
    changedStates: shared.filter(row => row.state !== prior.get(row.id).state).length};
}

function compareAssessments(current, previous) {
  requireField(current.context.specVersion.split(".")[0] === previous.context.specVersion.split(".")[0],
    "Migrate reports across major spec versions before comparing item states.");
  const contextChanges = ["specVersion", "systemBoundary", "environment", "profile"]
    .filter(key => current.context[key] !== previous.context[key]);
  const standard = compareRows(current.rows.filter(row => row.inScope), previous.rows.filter(row => row.inScope));
  const custom = compareRows(current.customRows, previous.customRows);
  const complete = [current, previous].every(report => report.categories.every(c => c.status !== "Provisional"));
  const customComplete = [current, previous].every(report => report.customSummary.status === "Complete");
  const sameScope = !contextChanges.length && standard.sameSet;
  standard.eligible = sameScope && standard.weightsMatch && complete &&
    current.categories.some(category => category.score !== null);
  custom.eligible = sameScope && custom.sameSet && custom.weightsMatch && custom.changedStates === 0 && customComplete;
  return {contextChanges, standard, custom, complete, customComplete};
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {scoreAssessment, rankedGaps, importAssessment, compareAssessments};
}
