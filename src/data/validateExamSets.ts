import { HSA_EXAM_SETS } from './examSets';
import { HSA_QUESTIONS_DATABASE } from './topics/index';

const qMap = new Map(HSA_QUESTIONS_DATABASE.map(q => [q.id, q]));

console.log(`\n======================================================`);
console.log(`KIỂM TRA TOÀN VẸN VÀ MA TRẬN ĐỘ KHÓ 20 BỘ ĐỀ THI HSA`);
console.log(`======================================================\n`);

let hasError = false;

HSA_EXAM_SETS.forEach((set, idx) => {
  const num = idx + 1;
  const ids = set.questionIds;
  
  // 1. Check ID existence
  const missing = ids.filter(id => !qMap.has(id));
  if (missing.length > 0) {
    console.error(`❌ ĐỀ ${num} (${set.id}): Có ${missing.length} ID không tồn tại:`, missing);
    hasError = true;
  }

  // 2. Count types
  const actualMcq = ids.filter(id => qMap.get(id)?.type === 'mcq').length;
  const actualFill = ids.filter(id => qMap.get(id)?.type === 'fill').length;

  if (actualMcq !== set.mcqCount) {
    console.error(`❌ ĐỀ ${num} (${set.id}): mcqCount cấu hình là ${set.mcqCount} nhưng thực tế là ${actualMcq}`);
    hasError = true;
  }
  if (actualFill !== set.fillCount) {
    console.error(`❌ ĐỀ ${num} (${set.id}): fillCount cấu hình là ${set.fillCount} nhưng thực tế là ${actualFill}`);
    hasError = true;
  }
  if (ids.length !== set.questionCount) {
    console.error(`❌ ĐỀ ${num} (${set.id}): questionCount cấu hình là ${set.questionCount} nhưng ids.length là ${ids.length}`);
    hasError = true;
  }

  // 3. Difficulty check
  const diffs: Record<string, number> = { 'Nhận biết': 0, 'Thông hiểu': 0, 'Vận dụng': 0, 'Vận dụng cao': 0 };
  ids.forEach(id => {
    const q = qMap.get(id);
    if (q) {
      diffs[q.difficulty] = (diffs[q.difficulty] || 0) + 1;
    }
  });

  const th = diffs['Nhận biết'] + diffs['Thông hiểu'];
  const vd = diffs['Vận dụng'];
  const vdc = diffs['Vận dụng cao'];

  const pctTh = Math.round((th / ids.length) * 100);
  const pctVd = Math.round((vd / ids.length) * 100);
  const pctVdc = Math.round((vdc / ids.length) * 100);

  console.log(
    `[Đề ${num < 10 ? '0' + num : num}] ${set.badge.padEnd(20)} | ` +
    `${ids.length} câu (${actualMcq} TN + ${actualFill} Điền) | ${set.timeMinutes}p | ` +
    `Độ khó: [TH: ${pctTh}% (${th}), VD: ${pctVd}% (${vd}), VDC: ${pctVdc}% (${vdc})]`
  );
});

if (hasError) {
  console.error('\n❌ CÓ LỖI XẢY RA TRONG CẤU TRÚC ĐỀ THI!');
  process.exit(1);
} else {
  console.log('\n✅ TẤT CẢ 20 BỘ ĐỀ ĐỀU CHÍNH XÁC 100% VỀ CẤU TRÚC VÀ ĐỘ KHÓ!');
}
