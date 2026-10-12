import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';

console.log(`Starting deep audit of all ${HSA_QUESTIONS_DATABASE.length} questions...`);

const issues: { id: number; topic: string; field: string; issue: string; snippet: string }[] = [];

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
    // 1. Check for unescaped / un-delimited backslash math commands outside $...$ or $$...$$
    // Remove all delimited math first
    const withoutMath = text.replace(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g, '___MATH___');

    // Check for LaTeX commands lingering in plain text
    const plainLatexRegex = /\\(frac|sqrt|lim|log|ln|sin|cos|tan|cot|int|sum|alpha|beta|pi|infty|mathbb|vec|left|right|begin|end)\b/g;
    let pm;
    while ((pm = plainLatexRegex.exec(withoutMath)) !== null) {
      issues.push({
        id: q.id,
        topic: q.topicName,
        field,
        issue: `LaTeX command outside math delimiters: \\${pm[1]}`,
        snippet: withoutMath.slice(Math.max(0, pm.index - 20), pm.index + 30).trim(),
      });
    }

    // 2. Check for missing backslash before common math keywords inside math delimiters
    const mathRegex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g;
    let mm;
    while ((mm = mathRegex.exec(text)) !== null) {
      let code = mm[0];
      if (code.startsWith('$$') || code.startsWith('\\[')) code = code.slice(2, -2);
      else if (code.startsWith('$') || code.startsWith('\\(')) code = code.slice(1, -1);

      // Check for keywords missing backslash inside math
      const missingSlashKeywords = [
        /\b(?<!\\)frac\{/g,
        /\b(?<!\\)sqrt\{/g,
        /\b(?<!\\)lim_\{/g,
        /\b(?<!\\)lim\b(?!\s*\\)/g,
        /\b(?<!\\)log_\{/g,
        /\b(?<!\\)log_\d/g,
        /\b(?<!\\)ln\b/g,
        /\b(?<!\\)sin\b/g,
        /\b(?<!\\)cos\b/g,
        /\b(?<!\\)tan\b/g,
        /\b(?<!\\)cot\b/g,
        /\b(?<!\\)pi\b/g,
        /\b(?<!\\)infty\b/g,
        /\b(?<!\\)alpha\b/g,
        /\b(?<!\\)beta\b/g,
        /\b(?<!\\)gamma\b/g,
        /\b(?<!\\)Delta\b/g,
        /\b(?<!\\)int\b/g,
        /\b(?<!\\)sum\b/g,
        /\b(?<!\\)mathbb\{/g,
        /\b(?<!\\)mathrm\{/g,
        /\b(?<!\\)mathbf\{/g,
        /\b(?<!\\)to\b/g,
        /\b(?<!\\)cdot\b/g,
        /\b(?<!\\)times\b/g,
        /\b(?<!\\)pm\b/g,
        /\b(?<!\\)mp\b/g,
        /\b(?<!\\)ge\b/g,
        /\b(?<!\\)le\b/g,
        /\b(?<!\\)ne\b/g,
        /\b(?<!\\)approx\b/g,
        /\b(?<!\\)equiv\b/g,
        /\b(?<!\\)in\s+\\mathbb/g,
        /\b(?<!\\)subset\b/g,
        /\b(?<!\\)cap\b/g,
        /\b(?<!\\)cup\b/g,
      ];

      for (const regex of missingSlashKeywords) {
        let km;
        while ((km = regex.exec(code)) !== null) {
          issues.push({
            id: q.id,
            topic: q.topicName,
            field,
            issue: `Missing backslash in math: '${km[0]}'`,
            snippet: code.slice(Math.max(0, km.index - 15), km.index + 25).trim(),
          });
        }
      }

      // Check for broken control characters like \x08 (b), \x09 (t), \x0c (f)
      if (/[\x00-\x1f]/.test(code)) {
        issues.push({
          id: q.id,
          topic: q.topicName,
          field,
          issue: `Contains unescaped control characters in source code!`,
          snippet: JSON.stringify(code.slice(0, 40)),
        });
      }
    }

    // 3. Check for standalone math expressions without $ delimiters: e.g. y = x^3 - 3x, f'(x) = 0
    // E.g. patterns like "f(x) = ", "y' = ", "f'(x)" outside math
    const nakedMathPatterns = [
      /f'\([a-zA-Z]\)/g,
      /y'\s*=/g,
      /f\([a-zA-Z]\)\s*=\s*[0-9a-zA-Z]/g,
    ];
    for (const nmp of nakedMathPatterns) {
      let nm;
      while ((nm = nmp.exec(withoutMath)) !== null) {
        issues.push({
          id: q.id,
          topic: q.topicName,
          field,
          issue: `Math notation without $ delimiters: '${nm[0]}'`,
          snippet: withoutMath.slice(Math.max(0, nm.index - 20), nm.index + 30).trim(),
        });
      }
    }
  }
}

import katex from 'katex';

console.log(`Auditing KaTeX rendering across all ${HSA_QUESTIONS_DATABASE.length} questions...`);

let katexErrorCount = 0;

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

      // Apply the exact same sanitizer as MathRenderer.tsx
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

      try {
        katex.renderToString(sanitizedMath, {
          displayMode: isDisplay,
          throwOnError: true,
          strict: 'warn',
        });
      } catch (err: any) {
        katexErrorCount++;
        console.log(`[KATEX ERROR] Q#${q.id} [${field}]: ${err.message}`);
        console.log(`  Raw: "${code.trim()}"`);
        console.log(`  Sanitized: "${sanitizedMath}"`);
      }
    }
  }
}

console.log(`Total KaTeX rendering errors: ${katexErrorCount}`);
