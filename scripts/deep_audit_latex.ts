import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';
import katex from 'katex';

interface Issue {
  qId: number;
  field: string;
  formula: string;
  error?: string;
  warning?: string;
}

const issues: Issue[] = [];

function checkMathText(text: string, field: string, qId: number) {
  if (!text) return;

  // Check matching $
  let dollarCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '$' && (i === 0 || text[i - 1] !== '\\')) {
      dollarCount++;
    }
  }

  const regex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g;
  let match;
  let matchCount = 0;

  while ((match = regex.exec(text)) !== null) {
    matchCount++;
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

    // Check raw Vietnamese characters outside of \text{} or \mathrm{} in math mode
    // (excluding inside \text{...})
    const strippedText = mathCode.replace(/\\text\{[^{}]*\}/g, '').replace(/\\mathrm\{[^{}]*\}/g, '');
    const vietnameseRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/;
    if (vietnameseRegex.test(strippedText)) {
      issues.push({
        qId,
        field,
        formula: raw,
        warning: 'Raw Vietnamese character inside math mode outside of \\text{}'
      });
    }

    // Render with katex
    try {
      katex.renderToString(mathCode.trim(), {
        displayMode: isDisplay,
        throwOnError: true,
        output: 'html',
        trust: true,
        strict: (errorCode) => {
          if (errorCode === 'unknownSymbol' || errorCode === 'symbolNotInFont') {
            return 'warn';
          }
          return 'warn';
        }
      });
    } catch (e: any) {
      issues.push({
        qId,
        field,
        formula: raw,
        error: e.message
      });
    }
  }
}

console.log(`Starting deep LaTeX audit of all ${HSA_QUESTIONS_DATABASE.length} questions...`);

let cleanQuestionsCount = 0;
const cleanQuestionIds: number[] = [];
const dirtyQuestionIds = new Set<number>();

for (const q of HSA_QUESTIONS_DATABASE) {
  const prevIssueLen = issues.length;
  checkMathText(q.content, 'content', q.id);
  if (q.options) {
    q.options.forEach(opt => checkMathText(opt.content, `options[${opt.key}]`, q.id));
  }
  checkMathText(q.detailedSolution, 'detailedSolution', q.id);
  checkMathText(q.socraticHint, 'socraticHint', q.id);

  if (issues.length === prevIssueLen) {
    cleanQuestionsCount++;
    cleanQuestionIds.push(q.id);
  } else {
    dirtyQuestionIds.add(q.id);
  }
}

console.log(`\nAudit Results:`);
console.log(`- Total Questions: ${HSA_QUESTIONS_DATABASE.length}`);
console.log(`- Clean (100% Perfect): ${cleanQuestionsCount}`);
console.log(`- Needs Fix: ${dirtyQuestionIds.size}`);
console.log(`- Total Issues Found: ${issues.length}\n`);

// Display first 25 issues
console.log('Sample issues:');
issues.slice(0, 25).forEach((iss, idx) => {
  console.log(`#${idx + 1} [Q#${iss.qId}] in [${iss.field}]: ${iss.error || iss.warning}`);
  console.log(`   Formula: "${iss.formula}"`);
});
