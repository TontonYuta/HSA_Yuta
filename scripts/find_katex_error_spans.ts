import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';
import katex from 'katex';

console.log(`Scanning all ${HSA_QUESTIONS_DATABASE.length} questions for KaTeX error spans...`);

let errorSpanCount = 0;

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
    const mathRegex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g;
    let mm;
    while ((mm = mathRegex.exec(text)) !== null) {
      let code = mm[0];
      const isDisplay = code.startsWith('$$') || code.startsWith('\\[');
      if (code.startsWith('$$') || code.startsWith('\\[')) code = code.slice(2, -2);
      else if (code.startsWith('$') || code.startsWith('\\(')) code = code.slice(1, -1);

      // MathRenderer's current sanitizer
      let sanitizedMath = code.trim()
        .replace(/\x0crac/g, '\\frac')
        .replace(/\x08egin/g, '\\begin')
        .replace(/\x08ar/g, '\\bar')
        .replace(/\x09imes/g, '\\times')
        .replace(/\x09ext/g, '\\text')
        .replace(/\x09heta/g, '\\theta')
        .replace(/\x09au/g, '\\tau')
        .replace(/\x09o\b/g, '\\to')
        .replace(/(?<!\\)lim_\{/g, '\\lim\\limits_{')
        .replace(/\\lim_\{/g, '\\lim\\limits_{')
        .replace(/\b([xt])\s+o\s+([+\-]?\\?(?:infty|pminfty|\d+))/g, '$1 \\to $2')
        .replace(/pminfty/g, '\\pm\\infty')
        .replace(/\\pm\s*infty/g, '\\pm\\infty')
        .replace(/(?<!\\)pm\\infty/g, '\\pm\\infty')
        .replace(/(?<!\\)mathbb\{/g, '\\mathbb{')
        .replace(/([0-9a-zA-Z\^]+)sqrt\{/g, '$1\\sqrt{')
        .replace(/(?<!\\)sqrt\{/g, '\\sqrt{')
        .replace(/(?<!\\)frac\{/g, '\\frac{')
        .replace(/(?<!\\)%/g, '\\%');

      const html = katex.renderToString(sanitizedMath, {
        displayMode: isDisplay,
        throwOnError: false,
        strict: false,
      });

      if (html.includes('katex-error')) {
        errorSpanCount++;
        console.log(`[KATEX ERROR SPAN] Q#${q.id} [${field}]`);
        console.log(`  Raw: "${code.trim()}"`);
        console.log(`  Sanitized: "${sanitizedMath}"`);
      }
    }
  }
}

console.log(`Total formulas with katex-error span: ${errorSpanCount}`);
