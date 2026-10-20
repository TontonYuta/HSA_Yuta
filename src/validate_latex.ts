import { HSA_QUESTIONS_DATABASE } from './data/topics/index';
import { TOAN7_QUESTIONS_DATABASE } from './data/toan7/questionsToan7';
import katex from 'katex';

interface LatexIssue {
  qId: number;
  db: string;
  field: string;
  formula: string;
  error: string;
}

const issues: LatexIssue[] = [];

function checkMathText(text: string, context: string, qId: number, db: string) {
  if (!text) return;

  // 1. Check dollar delimiter balance
  let dollarCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '$' && (i === 0 || text[i - 1] !== '\\')) {
      dollarCount++;
    }
  }
  if (dollarCount % 2 !== 0) {
    issues.push({
      qId,
      db,
      field: context,
      formula: `[Text contains unclosed $ delimiter (count: ${dollarCount})]`,
      error: 'Unclosed dollar delimiter'
    });
  }

  // 2. Extract and test KaTeX formulas
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
        throwOnError: true,
        output: 'html',
        trust: true,
        strict: 'warn'
      });
    } catch (e: any) {
      issues.push({
        qId,
        db,
        field: context,
        formula: raw,
        error: e.message
      });
    }
  }
}

console.log('='.repeat(65));
console.log('   TOAN 7 & HSA KA-TEX SYNTAX VALIDATOR');
console.log('='.repeat(65));

const allDatabases = [
  { name: 'TOAN7_QUESTIONS_DATABASE', list: TOAN7_QUESTIONS_DATABASE },
  { name: 'HSA_QUESTIONS_DATABASE', list: HSA_QUESTIONS_DATABASE },
];

let totalAllQuestions = 0;

for (const db of allDatabases) {
  console.log(`\nValidating database: ${db.name} (${db.list.length} questions)...`);
  totalAllQuestions += db.list.length;
  for (const q of db.list) {
    checkMathText(q.content, 'content', q.id, db.name);
    if (q.options) {
      q.options.forEach((opt) => {
        checkMathText(opt.content, `option ${opt.key}`, q.id, db.name);
      });
    }
    checkMathText(q.detailedSolution, 'detailedSolution', q.id, db.name);
    checkMathText(q.socraticHint, 'socraticHint', q.id, db.name);
  }
}

console.log('\n' + '-'.repeat(65));
console.log('VALIDATION RESULT SUMMARY:');
console.log(`- Total Questions Checked: ${totalAllQuestions}`);
console.log(`- Total Issues Found:      ${issues.length}`);
console.log('-'.repeat(65));

if (issues.length > 0) {
  console.log('\n[LATEX ISSUES FOUND]:');
  issues.forEach((iss, idx) => {
    console.log(`${idx + 1}. [${iss.db}] Question #${iss.qId} in [${iss.field}]:`);
    console.log(`   Formula: "${iss.formula}"`);
    console.log(`   Error:   ${iss.error}\n`);
  });
  process.exit(1);
} else {
  console.log('\n[SUCCESS] 100% of questions have perfect LaTeX syntax and rendering!');
}
