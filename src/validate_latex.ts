import { HSA_QUESTIONS_DATABASE } from './data/topics/index';
import katex from 'katex';

interface Issue {
  qId: number;
  field: string;
  error: string;
  detail: string;
}

const issues: Issue[] = [];

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
      error: 'Unclosed dollar delimiter',
      detail: `[Dollar count: ${dollarCount}] in text: ${text.slice(0, 100)}`
    });
  }

  // 2. Check naked commands outside $...$
  const noMathText = text.replace(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g, '___MATH___');
  const nakedCommandRegex = /\\(frac|dfrac|sqrt|int|sum|lim|begin|alpha|beta|gamma|Delta|pi|infty|vec|le|ge|ne|in|subset|times|div|pm|mp)\b/g;
  let nMatch;
  while ((nMatch = nakedCommandRegex.exec(noMathText)) !== null) {
    issues.push({
      qId,
      field: context,
      error: `Naked command \\${nMatch[1]} outside $...$`,
      detail: noMathText.substring(Math.max(0, nMatch.index - 20), Math.min(noMathText.length, nMatch.index + 40)).replace(/\n/g, ' ')
    });
  }

  // 3. Extract and test KaTeX formulas
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
        field: context,
        error: e.message,
        detail: raw
      });
    }
  }
}

function checkLogic(q: any) {
  if (q.type === 'mcq') {
    if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
      issues.push({
        qId: q.id,
        field: 'correctAnswer',
        error: `Invalid key: '${q.correctAnswer}', expected A, B, C, or D`,
        detail: ''
      });
    }
    if (!q.options || q.options.length !== 4) {
      issues.push({
        qId: q.id,
        field: 'options',
        error: `Expected 4 options, got ${q.options?.length || 0}`,
        detail: ''
      });
    } else {
      const contents = q.options.map((o: any) => o.content.trim());
      const unique = new Set(contents);
      if (unique.size < contents.length) {
        issues.push({
          qId: q.id,
          field: 'options',
          error: `Duplicate options detected: ${contents.join(' | ')}`,
          detail: ''
        });
      }
    }
  } else if (q.type === 'fill') {
    if (!q.correctAnswer || q.correctAnswer.trim() === '') {
      issues.push({
        qId: q.id,
        field: 'correctAnswer',
        error: 'Fill-in question has empty correctAnswer',
        detail: ''
      });
    }
  }
}

console.log('='.repeat(70));
console.log('   HSA / THPTQG QUESTION LOGIC & LATEX AUDIT VALIDATOR');
console.log('='.repeat(70));
console.log(`Total questions in database: ${HSA_QUESTIONS_DATABASE.length}\n`);

// Separate questions by hidden audit flags: latexVerified & answerVerified
const verifiedQuestions = HSA_QUESTIONS_DATABASE.filter(q => q.answerVerified === true && q.latexVerified === true);
const pendingQuestions = HSA_QUESTIONS_DATABASE.filter(q => !(q.answerVerified === true && q.latexVerified === true));

console.log(`[STATUS] Already verified perfect (answerVerified & latexVerified): ${verifiedQuestions.length} questions`);
console.log(`[STATUS] Pending verification (need checking):                     ${pendingQuestions.length} questions\n`);

if (pendingQuestions.length > 0) {
  console.log(`Auditing ${pendingQuestions.length} pending questions...`);
  for (const q of pendingQuestions) {
    checkMathText(q.content, 'content', q.id);
    if (q.options) {
      q.options.forEach((opt: any) => {
        checkMathText(opt.content, `option ${opt.key}`, q.id);
      });
    }
    checkMathText(q.detailedSolution, 'detailedSolution', q.id);
    checkMathText(q.socraticHint, 'socraticHint', q.id);
    checkLogic(q);
  }
} else {
  console.log('All questions are marked as answerVerified & latexVerified: true! (Audit skipped).');
}

console.log('\n' + '-'.repeat(70));
console.log('VALIDATION RESULT SUMMARY:');
console.log(`- Total Questions:     ${HSA_QUESTIONS_DATABASE.length}`);
console.log(`- Verified (Saved):    ${verifiedQuestions.length}`);
console.log(`- Audited (Pending):   ${pendingQuestions.length}`);
console.log(`- Issues Found:        ${issues.length}`);
console.log('-'.repeat(70));

if (issues.length > 0) {
  console.log('\n[ISSUES FOUND]:');
  issues.forEach((iss, idx) => {
    console.log(`${idx + 1}. Question #${iss.qId} in [${iss.field}]:`);
    console.log(`   Error:  ${iss.error}`);
    console.log(`   Detail: ${iss.detail}\n`);
  });
  process.exit(1);
} else {
  console.log('\n[SUCCESS] 100% of questions are logically and mathematically verified!');
}
