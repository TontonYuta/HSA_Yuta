import * as fs from 'fs';
import * as path from 'path';
import { DE_01_UPGRADED_QUESTIONS } from './upgrades/de_01_data';
import { DE_02_UPGRADED_QUESTIONS } from './upgrades/de_02_data';
import { OTHER_EXAMS_UPGRADED_QUESTIONS } from './upgrades/other_exams_data';
import { Question } from '../src/types/exam';

const ALL_UPGRADES: Record<number, Partial<Question>> = {
  ...DE_01_UPGRADED_QUESTIONS,
  ...DE_02_UPGRADED_QUESTIONS,
  ...OTHER_EXAMS_UPGRADED_QUESTIONS,
};

function scanDir(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) scanDir(full, fileList);
    else if (full.endsWith('.ts') && !full.endsWith('index.ts') && !full.endsWith('de_thi_hsa_558.ts')) {
      fileList.push(full);
    }
  }
  return fileList;
}

async function main() {
  const topicFiles = scanDir(path.resolve(process.cwd(), 'src/data/topics'));
  console.log(`Found ${topicFiles.length} topic files.`);

  let totalUpdated = 0;

  for (const filePath of topicFiles) {
    const relPath = path.relative(process.cwd(), filePath);
    const mod = await import(filePath);
    
    // Find the exported array
    const entry = Object.entries(mod).find(([_, v]) => Array.isArray(v));
    if (!entry) {
      console.warn(`[WARN] No array export found in ${relPath}`);
      continue;
    }

    const [exportName, questions] = entry as [string, Question[]];
    let fileModified = false;

    const updatedQuestions = questions.map((q) => {
      let updatedQ = { ...q };
      if (ALL_UPGRADES[q.id]) {
        updatedQ = {
          ...updatedQ,
          ...ALL_UPGRADES[q.id],
        };
        fileModified = true;
        totalUpdated++;
        console.log(`[UPGRADE] Updated Q#${q.id} in ${path.basename(filePath)}`);
      }

      // Upgrade remaining "Thông hiểu" to "Vận dụng" if it is part of advanced topics
      if (updatedQ.difficulty === 'Thông hiểu') {
        updatedQ.difficulty = 'Vận dụng';
        fileModified = true;
      }

      return updatedQ;
    });

    if (fileModified) {
      const newFileContent = `import { Question } from '../../../types/exam';\n\nexport const ${exportName}: Question[] = ${JSON.stringify(
        updatedQuestions,
        null,
        2
      )};\n`;
      fs.writeFileSync(filePath, newFileContent, 'utf-8');
    }
  }

  console.log(`\nSuccessfully applied upgrades to ${totalUpdated} targeted questions!`);
}

main().catch(console.error);
