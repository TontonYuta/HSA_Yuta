import { Question } from '../../../types/exam';
import { hsa558Part1Questions } from './hsa_558_part_1';
import { hsa558Part2Questions } from './hsa_558_part_2';

export { hsa558Part1Questions, hsa558Part2Questions };

export const hsa558ExamQuestions: Question[] = [
  ...hsa558Part1Questions,
  ...hsa558Part2Questions,
];
