import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';

const vnMathIssues: any[] = [];

for (const q of HSA_QUESTIONS_DATABASE) {
  const fields = ['content', 'detailedSolution', 'socraticHint'];
  if (q.options) {
    for (const opt of q.options) fields.push('option_' + opt.key);
  }

  for (const f of fields) {
    let text = '';
    if (f.startsWith('option_')) {
      const key = f.replace('option_', '');
      text = q.options?.find(o => o.key === key)?.content || '';
    } else {
      text = (q as any)[f] || '';
    }

    const regex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g;
    let m;
    while ((m = regex.exec(text)) !== null) {
      const math = m[0];
      // Find non-ascii chars outside \text{...}
      const withoutText = math.replace(/\\text\{[^{}]*\}/g, '');
      const vnChars = withoutText.match(/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]/g);
      if (vnChars) {
        vnMathIssues.push({
          id: q.id,
          topic: q.topicName,
          field: f,
          chars: Array.from(new Set(vnChars)).join(''),
          mathSnippet: math.slice(0, 80)
        });
      }
    }
  }
}

console.log('Total formulas with raw Vietnamese inside math:', vnMathIssues.length);
for (const iss of vnMathIssues) {
  console.log(`Q#${iss.id} [${iss.field}]: chars='${iss.chars}' in: ${iss.mathSnippet}`);
}
