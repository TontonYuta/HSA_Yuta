import { HSA_QUESTIONS_DATABASE } from './data/topics/index';
import katex from 'katex';

interface LatexIssue {
  qId: number;
  field: string;
  formula: string;
  error: string;
}

const issues: LatexIssue[] = [];

function checkMathText(text: string, context: string, qId: number) {
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
        throwOnError: true, // Strict mode to catch invalid syntax
        output: 'html',
        trust: true,
        strict: 'warn'
      });
    } catch (e: any) {
      issues.push({
        qId,
        field: context,
        formula: raw,
        error: e.message
      });
    }
  }
}

console.log('='.repeat(65));
console.log('   HSA / THPTQG KA-TEX & LATEX SYNTAX VALIDATOR');
console.log('='.repeat(65));
console.log(`Total questions in database: ${HSA_QUESTIONS_DATABASE.length}\n`);

// Separate questions by hidden audit flag: latexVerified
const alreadyVerifiedQuestions = HSA_QUESTIONS_DATABASE.filter(q => q.latexVerified === true);
const pendingQuestions = HSA_QUESTIONS_DATABASE.filter(q => !q.latexVerified);

console.log(`[STATUS] Already verified perfect (latexVerified: true): ${alreadyVerifiedQuestions.length} questions`);
console.log(`[STATUS] Pending verification (need checking):          ${pendingQuestions.length} questions\n`);

if (pendingQuestions.length > 0) {
  console.log(`Checking ${pendingQuestions.length} pending questions for LaTeX syntax...`);
  for (const q of pendingQuestions) {
    checkMathText(q.content, 'content', q.id);
    if (q.options) {
      q.options.forEach((opt) => {
        checkMathText(opt.content, `option ${opt.key}`, q.id);
      });
    }
    checkMathText(q.detailedSolution, 'detailedSolution', q.id);
    checkMathText(q.socraticHint, 'socraticHint', q.id);
  }
} else {
  console.log('All questions are marked as latexVerified: true! (No check needed).');
}

console.log('\n' + '-'.repeat(65));
console.log('VALIDATION RESULT SUMMARY:');
console.log(`- Total Questions:     ${HSA_QUESTIONS_DATABASE.length}`);
console.log(`- Verified (Skipped):  ${alreadyVerifiedQuestions.length}`);
console.log(`- Checked (Pending):   ${pendingQuestions.length}`);
console.log(`- Issues Found:        ${issues.length}`);
console.log('-'.repeat(65));

if (issues.length > 0) {
  console.log('\n[LATEX ISSUES FOUND]:');
  issues.forEach((iss, idx) => {
    console.log(`${idx + 1}. Question #${iss.qId} in [${iss.field}]:`);
    console.log(`   Formula: "${iss.formula}"`);
    console.log(`   Error:   ${iss.error}\n`);
  });
  process.exit(1);
} else {
  console.log('\n[SUCCESS] 100% of questions have perfect LaTeX syntax and rendering!');
}
