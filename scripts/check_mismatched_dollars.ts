import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';

console.log("Checking for mismatched dollar signs...");

for (const q of HSA_QUESTIONS_DATABASE) {
  const fieldsToCheck: [string, string][] = [
    ['content', q.content || ''],
    ['detailedSolution', q.detailedSolution || ''],
    ['socraticHint', q.socraticHint || ''],
  ];

  if (q.options) {
    for (const opt of q.options) {
      fieldsToCheck.push([`option_${opt.key}`, opt.content || '']);
    }
  }

  for (const [field, text] of fieldsToCheck) {
    // Count $ signs not preceded by \
    // Note: $$ counts as two $
    const rawMatches = text.match(/(?<!\\)\$/g);
    const count = rawMatches ? rawMatches.length : 0;
    if (count % 2 !== 0) {
      console.log(`[MISMATCHED $] Q#${q.id} [${field}] has ${count} dollar signs!`);
      console.log(`  Text: "${text.slice(0, 100)}..."`);
    }
  }
}
