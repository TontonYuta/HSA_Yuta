import { Question } from '../../../../types/exam';
import { donDieuPart1Questions } from './don_dieu_part_1';
import { donDieuPart2Questions } from './don_dieu_part_2';
import { donDieuPart3Questions } from './don_dieu_part_3';

export { donDieuPart1Questions, donDieuPart2Questions, donDieuPart3Questions };

export const donDieuThamSoMQuestions: Question[] = [
  ...donDieuPart1Questions,
  ...donDieuPart2Questions,
  ...donDieuPart3Questions,
];
