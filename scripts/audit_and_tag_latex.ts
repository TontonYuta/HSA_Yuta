import fs from 'fs';
import path from 'path';
import katex from 'katex';

const TOPICS_DIR = path.resolve(process.cwd(), 'src/data/topics');

// Helper to find all .ts files with questions
function getQuestionFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getQuestionFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts') {
      files.push(fullPath);
    }
  }
  return files;
}

function testKaTeX(mathCode: string, isDisplay: boolean): boolean {
  try {
    katex.renderToString(mathCode.trim(), {
      displayMode: isDisplay,
      throwOnError: true,
      output: 'html',
      trust: true
    });
    return true;
  } catch (err: any) {
    return false;
  }
}

function validateFieldMath(text: string): { valid: boolean; error?: string } {
  if (!text) return { valid: true };

  // Check unescaped dollar balance
  let dollarCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '$' && (i === 0 || text[i - 1] !== '\\')) {
      dollarCount++;
    }
  }
  if (dollarCount % 2 !== 0) {
    return { valid: false, error: `Unbalanced $ count: ${dollarCount}` };
  }

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

    if (!testKaTeX(mathCode, isDisplay)) {
      return { valid: false, error: `KaTeX render failure on formula: ${raw}` };
    }
  }

  return { valid: true };
}

async function auditAndTagAllQuestions() {
  const files = getQuestionFiles(TOPICS_DIR);
  console.log(`Found ${files.length} question files in ${TOPICS_DIR}\n`);

  let totalQuestionsCount = 0;
  let previouslyVerifiedCount = 0;
  let newlyVerifiedCount = 0;
  let failedAuditCount = 0;
  const failedList: { file: string; id: number; error: string }[] = [];

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // We can dynamically import the module to inspect the question objects
    let mod: any;
    try {
      mod = await import(file);
    } catch (e: any) {
      console.error(`Cannot import file ${file}:`, e.message);
      continue;
    }

    // Find array export containing questions
    const questionArrayKey = Object.keys(mod).find(k => Array.isArray(mod[k]));
    if (!questionArrayKey) continue;

    const questions: any[] = mod[questionArrayKey];
    if (!questions || questions.length === 0 || typeof questions[0].id !== 'number') continue;

    let fileModified = false;

    for (const q of questions) {
      totalQuestionsCount++;

      // If already verified, skip according to user requirement
      if (q.latexVerified === true) {
        previouslyVerifiedCount++;
        continue;
      }

      // Check all math fields
      const contentCheck = validateFieldMath(q.content);
      if (!contentCheck.valid) {
        failedAuditCount++;
        failedList.push({ file: path.basename(file), id: q.id, error: `content: ${contentCheck.error}` });
        continue;
      }

      let optionsValid = true;
      if (q.options && Array.isArray(q.options)) {
        for (const opt of q.options) {
          const optCheck = validateFieldMath(opt.content);
          if (!optCheck.valid) {
            optionsValid = false;
            failedAuditCount++;
            failedList.push({ file: path.basename(file), id: q.id, error: `opt_${opt.key}: ${optCheck.error}` });
            break;
          }
        }
      }
      if (!optionsValid) continue;

      const solutionCheck = validateFieldMath(q.detailedSolution);
      if (!solutionCheck.valid) {
        failedAuditCount++;
        failedList.push({ file: path.basename(file), id: q.id, error: `detailedSolution: ${solutionCheck.error}` });
        continue;
      }

      const hintCheck = validateFieldMath(q.socraticHint);
      if (!hintCheck.valid) {
        failedAuditCount++;
        failedList.push({ file: path.basename(file), id: q.id, error: `socraticHint: ${hintCheck.error}` });
        continue;
      }

      // 100% PERFECT! Tag with hidden flag: latexVerified: true
      q.latexVerified = true;
      newlyVerifiedCount++;

      // Inject into file text if not already present
      // Match "id": q.id or id: q.id
      const idPattern = new RegExp(`(["']?id["']?\\s*:\\s*${q.id}\\s*,)`);
      if (idPattern.test(content) && !content.includes(`"latexVerified": true`) && !content.includes(`latexVerified: true`)) {
        // We will do a full serialization or injection
      }
    }
  }

  console.log(`\n================ AUDIT SUMMARY ================`);
  console.log(`Total questions scanned: ${totalQuestionsCount}`);
  console.log(`Previously verified:      ${previouslyVerifiedCount}`);
  console.log(`Newly verified perfect:   ${newlyVerifiedCount}`);
  console.log(`Failed audit:             ${failedAuditCount}`);
  if (failedList.length > 0) {
    console.log(`\nFailed details:`);
    failedList.forEach(f => console.log(`- [${f.file}] Q#${f.id}: ${f.error}`));
  }
}

auditAndTagAllQuestions();
