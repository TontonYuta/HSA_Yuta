import { Question } from '../../../../types/exam';
import { tuongGiaoPart1Questions } from './tuong_giao_part_1';
import { tuongGiaoPart2Questions } from './tuong_giao_part_2';

export { tuongGiaoPart1Questions, tuongGiaoPart2Questions };

export const tuongGiaoHamHopQuestions: Question[] = [
  ...tuongGiaoPart1Questions,
  ...tuongGiaoPart2Questions,
];
