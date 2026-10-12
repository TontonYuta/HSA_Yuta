import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';

console.log("Checking for math expressions without math delimiters...");

const nakedPatterns = [
  { name: "f'(x) or y'", regex: /(?:f'\(x\)|y'\s*=|y'\s*<|y'\s*>)/g },
  { name: "f(x) = or y =", regex: /(?:[yf]\([a-z]\)\s*=\s*[\-0-9a-z])/g },
  { name: "function definition outside math", regex: /(?:hàm số\s+[yf]\s*=\s*[a-z0-9])/gi },
  { name: "interval like [a; b] or (a; b) without $", regex: /(?:khoảng|đoạn|nửa khoảng)\s+(\([+\-0-9\s;a-z]+\)|\[[+\-0-9\s;a-z]+\])/gi },
  { name: "m in range like m in [-5; 5] or m > 0", regex: /\bm\s*([><]=?|==|!=)\s*[\-0-9]/g },
];

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
    const stripped = text.replace(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g, '___MATH___');

    for (const p of nakedPatterns) {
      let m;
      while ((m = p.regex.exec(stripped)) !== null) {
        const start = Math.max(0, m.index - 20);
        const end = Math.min(stripped.length, m.index + 40);
        console.log(`[Q#${q.id}] [${field}] [${p.name}]: "${stripped.slice(start, end).replace(/\n/g, ' ')}"`);
      }
    }
  }
}
