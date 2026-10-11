const OPTION_COUNT = 4;

const isNonEmptyString = (v: unknown): v is string =>
  typeof v === "string" && v.trim().length > 0;

/** Returns a list of human-readable problems found in one question bank. */
export function bankProblems(bank: unknown): string[] {
  const problems: string[] = [];
  if (typeof bank !== "object" || bank === null || Array.isArray(bank)) {
    return ["top level must be a JSON object"];
  }
  const b = bank as Record<string, unknown>;

  if (!isNonEmptyString(b.title)) problems.push('"title" must be a non-empty string');
  if (b.description !== undefined && typeof b.description !== "string") {
    problems.push('"description" must be a string');
  }
  if (!Array.isArray(b.questions) || b.questions.length === 0) {
    problems.push('"questions" must be a non-empty array');
    return problems;
  }

  const seenIds = new Set<string>();
  b.questions.forEach((raw, i) => {
    const at = `questions[${i}]`;
    if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
      problems.push(`${at}: must be an object`);
      return;
    }
    const q = raw as Record<string, unknown>;

    const idOk =
      isNonEmptyString(q.id) || (typeof q.id === "number" && Number.isFinite(q.id));
    if (!idOk) {
      problems.push(`${at}: "id" must be a non-empty string or a number`);
    } else if (seenIds.has(String(q.id))) {
      problems.push(`${at}: duplicate id "${q.id}"`);
    } else {
      seenIds.add(String(q.id));
    }

    if (!isNonEmptyString(q.section)) problems.push(`${at}: "section" must be a non-empty string`);
    if (!isNonEmptyString(q.question)) problems.push(`${at}: "question" must be a non-empty string`);
    if (typeof q.explanation !== "string") {
      problems.push(`${at}: "explanation" must be a string (it may be empty)`);
    }

    const opts = q.options;
    if (!Array.isArray(opts) || opts.length !== OPTION_COUNT) {
      problems.push(`${at}: "options" must be an array of exactly ${OPTION_COUNT} strings`);
    } else {
      if (!opts.every(isNonEmptyString)) {
        problems.push(`${at}: every option must be a non-empty string`);
      } else if (new Set(opts.map((o) => o.trim())).size !== OPTION_COUNT) {
        problems.push(`${at}: options must all be different`);
      }
    }

    const ci = q.correctIndex;
    if (!Number.isInteger(ci) || (ci as number) < 0 || (ci as number) >= OPTION_COUNT) {
      problems.push(`${at}: "correctIndex" must be an integer from 0 to ${OPTION_COUNT - 1}`);
    }
  });

  return problems;
}

/**
 * Validates every bank returned by an import.meta.glob and throws one error
 * listing all problems, so a malformed file fails the build with a clear message.
 */
export function assertValidBanks(banks: Record<string, unknown>): void {
  const lines: string[] = [];
  for (const [path, bank] of Object.entries(banks)) {
    const problems = bankProblems(bank);
    if (problems.length > 0) {
      lines.push(`\n${path}`, ...problems.map((p) => `  - ${p}`));
    }
  }
  if (lines.length > 0) {
    throw new Error(
      `Malformed question bank(s) in src/pages/battle-arena/questions_banks/mcq:${lines.join("\n")}\n\nSee questions_banks/reference.json for the expected structure.`,
    );
  }
}
