import { Question } from '../../types/exam';
import { INITIAL_TOAN7_QUESTIONS } from './topics/initial_core_questions';
import { TOAN7_PHOTHONG_NEW_QUESTIONS } from './topics/phothong';
import { TOAN7_NANGCAO_NEW_QUESTIONS } from './topics/nangcao';

export const TOAN7_QUESTIONS_DATABASE: Question[] = [
  ...INITIAL_TOAN7_QUESTIONS,
  ...TOAN7_PHOTHONG_NEW_QUESTIONS,
  ...TOAN7_NANGCAO_NEW_QUESTIONS,
];
