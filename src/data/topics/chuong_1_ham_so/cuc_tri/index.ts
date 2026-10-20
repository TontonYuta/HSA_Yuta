import { Question } from '../../../../types/exam';
import { cucTriPart1Questions } from './cuc_tri_part_1';
import { cucTriPart2Questions } from './cuc_tri_part_2';
import { cucTriPart3Questions } from './cuc_tri_part_3';

export { cucTriPart1Questions, cucTriPart2Questions, cucTriPart3Questions };

export const cucTriThamSoMQuestions: Question[] = [
  ...cucTriPart1Questions,
  ...cucTriPart2Questions,
  ...cucTriPart3Questions,
];
