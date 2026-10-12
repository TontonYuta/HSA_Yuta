import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';
import katex from 'katex';

function sanitize(mathCode: string) {
  return mathCode.trim()
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
}

function checkMath(content: string, context: string): number {
  if (!content) return 0;
  // Match formulas
  const regex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g;
  let m: RegExpExecArray | null;
  let errors = 0;

  while ((m = regex.exec(content)) !== null) {
    const rawFormula = m[0];
    const isDisplay = rawFormula.startsWith('$$') || rawFormula.startsWith('\\[');
    let code = '';
    if (rawFormula.startsWith('$$') || rawFormula.startsWith('\\[')) {
      code = rawFormula.slice(2, -2);
    } else if (rawFormula.startsWith('$') || rawFormula.startsWith('\\(')) {
      code = rawFormula.slice(1, -1);
    }

    const sanitized = sanitize(code);
    try {
      katex.renderToString(sanitized, {
        displayMode: isDisplay,
        throwOnError: true,
        strict: false,
      });
    } catch (e: any) {
      errors++;
      console.error(`[ERROR in ${context}]: ${e.message}`);
      console.error(`Raw: ${rawFormula}`);
      console.error(`Sanitized: ${sanitized}\n`);
    }
  }
  return errors;
}

let totalErrors = 0;
console.log(`Starting MathRenderer Audit on ${HSA_QUESTIONS_DATABASE.length} questions...`);

for (const q of HSA_QUESTIONS_DATABASE) {
  totalErrors += checkMath(q.content, `Q#${q.id} content`);
  if (q.detailedSolution) {
    totalErrors += checkMath(q.detailedSolution, `Q#${q.id} detailedSolution`);
  }
  if (q.socraticHint) {
    totalErrors += checkMath(q.socraticHint, `Q#${q.id} socraticHint`);
  }
  if (q.options) {
    for (const opt of q.options) {
      totalErrors += checkMath(opt.content, `Q#${q.id} option ${opt.key}`);
    }
  }
}

console.log(`\nAudit Complete! Total questions: ${HSA_QUESTIONS_DATABASE.length}, Total KaTeX Errors: ${totalErrors}`);
if (totalErrors === 0) {
  console.log('🎉 ALL 300 QUESTIONS RENDERED 100% PERFECTLY IN KATEX!');
} else {
  process.exit(1);
}
