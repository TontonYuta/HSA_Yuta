import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';

console.log("Checking for questions describing variation tables verbally without \\begin{array}...");

const verbalPatterns = [
  /có bảng biến thiên như sau: [^$]/i,
  /hàm số đồng biến từ [^$]/i,
  /hàm số nghịch biến từ [^$]/i,
  /bảng biến thiên:/i,
  /bảng xét dấu:/i,
];

const found: any[] = [];

for (const q of HSA_QUESTIONS_DATABASE) {
  const content = q.content || '';
  const hasArray = content.includes('\\begin{array}');

  for (const pat of verbalPatterns) {
    if (pat.test(content) && !hasArray) {
      found.push({
        id: q.id,
        topic: q.topicName,
        matched: content.slice(0, 150),
      });
      break;
    }
  }
}

console.log(`Found ${found.length} questions describing variation table in words without array:`);
for (const item of found) {
  console.log(`[Q#${item.id}] [${item.topic}]: "${item.matched}"`);
}
