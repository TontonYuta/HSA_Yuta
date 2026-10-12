import { HSA_QUESTIONS_DATABASE } from '../src/data/topics/index';

const tableQuestions = [104, 153, 158, 223, 225, 226, 230, 252, 253, 254, 256, 277];

for (const id of tableQuestions) {
  const q = HSA_QUESTIONS_DATABASE.find(q => q.id === id);
  if (!q) continue;
  console.log(`==================== Q#${id} (${q.topicName}) ====================`);
  console.log('CONTENT:');
  console.log(q.content);
  console.log('----------------------------------------------------');
}
