import { Question } from '../types/exam';

/**
 * Difficulty level numerical weight for sorting in strictly ascending order:
 * 1: Nhận biết (Easy)
 * 2: Thông hiểu (Medium)
 * 3: Vận dụng (Hard)
 * 4: Vận dụng cao (Very Hard)
 */
export const DIFFICULTY_WEIGHTS: Record<string, number> = {
  'Nhận biết': 1,
  'Thông hiểu': 2,
  'Vận dụng': 3,
  'Vận dụng cao': 4,
};

/**
 * Standard Fisher-Yates array shuffling algorithm.
 * Returns a new shuffled array without mutating the original.
 */
export function shuffleArray<T>(items: readonly T[] | T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Randomizes the 4 choices (A, B, C, D) for an MCQ question and recalculates correctAnswer.
 * Preserves the original question if it is not an MCQ or has fewer than 2 options.
 */
export function randomizeQuestionOptions(q: Question): Question {
  if (q.type !== 'mcq' || !q.options || q.options.length < 2) {
    return { ...q };
  }

  // Identify the content of the currently correct option
  const originalCorrect = q.options.find(
    (opt) => opt.key.trim().toUpperCase() === q.correctAnswer.trim().toUpperCase()
  );

  // If no match found, return cloned question unchanged
  if (!originalCorrect) {
    return { ...q };
  }

  // Shuffle the options
  const shuffledOptions = shuffleArray(q.options);

  // Re-assign keys 'A', 'B', 'C', 'D'
  const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const newOptions = shuffledOptions.map((opt, index) => ({
    key: keys[index] || ('A' as const),
    content: opt.content,
  }));

  // Find the new key where the original correct content is now located
  const newCorrectOption = newOptions.find((opt) => opt.content === originalCorrect.content);
  const newCorrectAnswer = newCorrectOption ? newCorrectOption.key : q.correctAnswer;

  return {
    ...q,
    options: newOptions,
    correctAnswer: newCorrectAnswer,
  };
}

/**
 * Sorts questions strictly from easy to hard (Nhận biết -> Thông hiểu -> Vận dụng -> Vận dụng cao),
 * while randomly shuffling questions within each difficulty tier,
 * and randomizing MCQ answer choices (A, B, C, D).
 */
export function randomizeAndSortQuestions(questions: Question[]): Question[] {
  if (!questions || questions.length === 0) return [];

  // Group by difficulty
  const tier1: Question[] = []; // Nhận biết
  const tier2: Question[] = []; // Thông hiểu
  const tier3: Question[] = []; // Vận dụng
  const tier4: Question[] = []; // Vận dụng cao

  for (const q of questions) {
    const randomizedQ = randomizeQuestionOptions(q);
    const weight = DIFFICULTY_WEIGHTS[randomizedQ.difficulty] || 2;
    if (weight === 1) tier1.push(randomizedQ);
    else if (weight === 2) tier2.push(randomizedQ);
    else if (weight === 3) tier3.push(randomizedQ);
    else tier4.push(randomizedQ);
  }

  // Shuffle within each tier and concatenate in strict ascending order
  return [
    ...shuffleArray(tier1),
    ...shuffleArray(tier2),
    ...shuffleArray(tier3),
    ...shuffleArray(tier4),
  ];
}

/**
 * Prepares questions for an official or mock HSA Exam set:
 * 1. Part I: MCQ questions sorted from easy to hard, internally shuffled, choices randomized.
 * 2. Part II: Fill-in-the-blank questions sorted from easy to hard, internally shuffled.
 * Preserves the standard HSA exam structure (MCQ followed by Fill).
 */
export function prepareExamQuestions(questions: Question[]): Question[] {
  const mcqs = questions.filter((q) => q.type === 'mcq');
  const fills = questions.filter((q) => q.type === 'fill');

  const preparedMcqs = randomizeAndSortQuestions(mcqs);
  const preparedFills = randomizeAndSortQuestions(fills);

  return [...preparedMcqs, ...preparedFills];
}

/**
 * Prepares questions for Topic / Chapter practice:
 * Sorts all questions from easy to hard (Nhận biết -> Thông hiểu -> Vận dụng -> Vận dụng cao),
 * shuffles questions within each tier, and randomizes MCQ options.
 */
export function prepareTopicPracticeQuestions(questions: Question[]): Question[] {
  return randomizeAndSortQuestions(questions);
}
