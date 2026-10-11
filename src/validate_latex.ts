import { HSA_QUESTIONS_DATABASE } from './data/topics/index';
import katex from 'katex';

function extractAndTestFormulas(text: string, context: string, qId: number) {
  if (!text) return;
  const regex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const raw = match[0];
    let mathCode = '';
    let isDisplay = false;
    if (raw.startsWith('$$')) {
      mathCode = raw.slice(2, -2);
      isDisplay = true;
    } else if (raw.startsWith('\\[')) {
      mathCode = raw.slice(2, -2);
      isDisplay = true;
    } else if (raw.startsWith('\\(')) {
      mathCode = raw.slice(2, -2);
    } else if (raw.startsWith('$')) {
      mathCode = raw.slice(1, -1);
    }

    try {
      katex.renderToString(mathCode.trim(), {
        displayMode: isDisplay,
        throwOnError: true, // STRICT! Catch real errors!
        output: 'html',
        trust: true,
        strict: 'warn'
      });
    } catch (e: any) {
      console.log(`[LATEX ERROR] Q#${qId} in [${context}]:`);
      console.log(`  Raw: "${raw}"`);
      console.log(`  Error: ${e.message}\n`);
    }
  }
}

console.log(`Auditing LaTeX in all ${HSA_QUESTIONS_DATABASE.length} questions...`);
let totalChecked = 0;
for (const q of HSA_QUESTIONS_DATABASE) {
  totalChecked++;
  extractAndTestFormulas(q.content, 'content', q.id);
  if (q.options) {
    q.options.forEach((opt) => {
      extractAndTestFormulas(opt.content, `option ${opt.key}`, q.id);
    });
  }
  extractAndTestFormulas(q.detailedSolution, 'detailedSolution', q.id);
  extractAndTestFormulas(q.socraticHint, 'socraticHint', q.id);
}
console.log(`Audit complete for ${totalChecked} questions.`);
