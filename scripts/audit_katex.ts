import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';
import katex from 'katex';

let errorCount = 0;
let formulaCount = 0;

for (const q of HSA_QUESTIONS_DATABASE) {
  const fields = ['content', 'detailedSolution', 'socraticHint'];
  for (const f of fields) {
    const raw = (q as any)[f];
    if (!raw) continue;
    const regex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g;
    let m;
    while ((m = regex.exec(raw)) !== null) {
      formulaCount++;
      let code = m[0];
      const isDisplay = code.startsWith('$$') || code.startsWith('\\[');
      if (code.startsWith('$$')) code = code.slice(2, -2);
      else if (code.startsWith('\\[')) code = code.slice(2, -2);
      else if (code.startsWith('\\(')) code = code.slice(2, -2);
      else if (code.startsWith('$')) code = code.slice(1, -1);
      
      try {
        katex.renderToString(code.trim(), { displayMode: isDisplay, throwOnError: true, strict: false });
      } catch (e: any) {
        errorCount++;
        console.log(`[ERROR] Q#${q.id} in [${f}]: '${code.trim()}' => ${e.message}`);
      }
    }
  }

  if (q.options) {
    for (const opt of q.options) {
      const raw = opt.content;
      if (!raw) continue;
      const regex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g;
      let m;
      while ((m = regex.exec(raw)) !== null) {
        formulaCount++;
        let code = m[0];
        const isDisplay = code.startsWith('$$') || code.startsWith('\\[');
        if (code.startsWith('$$')) code = code.slice(2, -2);
        else if (code.startsWith('$')) code = code.slice(1, -1);
        try {
          katex.renderToString(code.trim(), { displayMode: isDisplay, throwOnError: true, strict: false });
        } catch (e: any) {
          errorCount++;
          console.log(`[ERROR] Q#${q.id} option ${opt.key}: '${code.trim()}' => ${e.message}`);
        }
      }
    }
  }
}

console.log(`KaTeX Audit Complete: Total formulas tested: ${formulaCount}, Total Errors: ${errorCount}`);
if (errorCount === 0) {
  process.exit(0);
} else {
  process.exit(1);
}
