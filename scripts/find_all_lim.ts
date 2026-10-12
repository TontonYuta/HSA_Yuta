import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';

console.log("Checking all questions using limits (lim)...");

const limQuestions: any[] = [];

for (const q of HSA_QUESTIONS_DATABASE) {
  const fields = ['content', 'detailedSolution', 'socraticHint'];
  for (const f of fields) {
    const text = (q as any)[f] || '';
    if (/\\lim\b|lim_\{/i.test(text)) {
      limQuestions.push({
        id: q.id,
        topic: q.topicName,
        field: f,
        sample: text.match(/(?:[^\n]*\\lim[^\n]*)/)?.[0] || text.slice(0, 80),
      });
    }
  }
}

console.log(`Found ${limQuestions.length} occurrences of lim across all questions:`);
for (const item of limQuestions) {
  console.log(`[Q#${item.id}] [${item.field}]: ${item.sample.slice(0, 100)}`);
}
