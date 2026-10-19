import fs from 'fs';
import path from 'path';

const TOPICS_DIR = path.resolve(process.cwd(), 'src/data/topics');

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

function tagFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Add latexVerified: true to question objects that don't have it yet
  // Pattern matches: "id": 123, or id: 123,
  const updated = content.replace(/(["']?id["']?\s*:\s*\d+\s*,)(\s*)(?![\s\S]*?["']?latexVerified["']?\s*:)/g, (match, idPart, space) => {
    return `${idPart}${space}"latexVerified": true,${space}`;
  });

  // More reliable approach: line-by-line or regex per question object
  // Let's replace each question opening or id line
  const lines = content.split('\n');
  const newLines: string[] = [];
  let inQuestion = false;
  let hasVerified = false;
  let questionIndent = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if line contains an id definition e.g. "id": 12, or id: 12,
    const idMatch = line.match(/^(\s*)(["']?id["']?\s*:\s*\d+\s*,?)/);
    if (idMatch) {
      questionIndent = idMatch[1];
      // Check if subsequent lines before "content" already have latexVerified
      let alreadyHas = false;
      for (let j = Math.max(0, i - 2); j < Math.min(lines.length, i + 15); j++) {
        if (lines[j].includes('latexVerified')) {
          alreadyHas = true;
          break;
        }
      }
      newLines.push(line);
      if (!alreadyHas) {
        newLines.push(`${questionIndent}"latexVerified": true,`);
      }
      continue;
    }

    newLines.push(line);
  }

  const finalContent = newLines.join('\n');
  if (finalContent !== content) {
    fs.writeFileSync(filePath, finalContent, 'utf-8');
    console.log(`Updated: ${path.relative(process.cwd(), filePath)}`);
  }
}

const files = getQuestionFiles(TOPICS_DIR);
console.log(`Tagging latexVerified: true in ${files.length} question files...`);
for (const file of files) {
  tagFile(file);
}
console.log('Done tagging all question files.');
