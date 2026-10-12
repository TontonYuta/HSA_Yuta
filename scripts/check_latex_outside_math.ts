import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';

console.log("Checking for LaTeX commands outside math delimiters...");

const cmdRegex = /\\(frac|sqrt|vec|overrightarrow|in|mathbb|mathbf|mathrm|log|ln|lim|limits|int|sum|infty|alpha|beta|gamma|Delta|pi|sin|cos|tan|cot|ne|le|ge|pm|cdot|times|approx|equiv|cap|cup|subset|forall|exists|to|Rightarrow|iff|parallel|perp|circ|angle|widehat|left|right|begin|end)\b/g;

let count = 0;

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
    // Strip out all math: $$...$$, $...$, \[...\], \(...\)
    const stripped = text.replace(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g, '___MATH___');

    let m;
    while ((m = cmdRegex.exec(stripped)) !== null) {
      count++;
      const start = Math.max(0, m.index - 25);
      const end = Math.min(stripped.length, m.index + 35);
      console.log(`[Q#${q.id}] [${field}] command '\\${m[1]}' outside math:`);
      console.log(`   "${stripped.slice(start, end).replace(/\n/g, ' ')}"`);
    }
  }
}

console.log(`Total LaTeX commands outside math: ${count}`);
