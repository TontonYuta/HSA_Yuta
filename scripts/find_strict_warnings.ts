import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';
import katex from 'katex';

console.log("Finding exact questions with KaTeX strict warnings...");

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

      try {
        katex.renderToString(code.trim(), {
          displayMode: isDisplay,
          throwOnError: true,
          strict: (errorCode) => {
            if (errorCode === 'unknownSymbol' || errorCode === 'unicodeTextInMathMode') {
              throw new Error(`Strict warning [${errorCode}]`);
            }
            return 'ignore';
          }
        });
      } catch (err: any) {
        if (err.message.includes('Strict warning')) {
          console.log(`[STRICT WARNING] Q#${q.id} [${field}]:`);
          console.log(`   Formula: "${code.trim()}"`);
        }
      }
    }
  }
}
