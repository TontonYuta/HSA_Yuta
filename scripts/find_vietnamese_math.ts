import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';

const vnRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/;

interface Found {
  qId: number;
  field: string;
  formula: string;
}

const foundList: Found[] = [];

function check(text: string, qId: number, field: string) {
  if (!text) return;
  const regex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$(?!\$)[\s\S]*?\$|\\\([\s\S]*?\\\))/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    if (vnRegex.test(m[0])) {
      foundList.push({ qId, field, formula: m[0] });
    }
  }
}

for (const q of HSA_QUESTIONS_DATABASE) {
  check(q.content, q.id, 'content');
  if (q.options) q.options.forEach(o => check(o.content, q.id, 'opt_' + o.key));
  check(q.detailedSolution, q.id, 'solution');
  check(q.socraticHint, q.id, 'hint');
}

console.log(`Found ${foundList.length} formulas containing Vietnamese characters:`);
const uniqueQIds = new Set(foundList.map(f => f.qId));
console.log(`Across ${uniqueQIds.size} unique questions:`, Array.from(uniqueQIds));

foundList.forEach(f => {
  console.log(`Q#${f.qId} [${f.field}]: ${f.formula}`);
});
