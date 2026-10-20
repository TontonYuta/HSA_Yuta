import { Question } from '../../../types/exam';

import { daySoGioiHanQuestions } from './day_so_va_gioi_han';
import { capSoCongNhanQuestions } from './cap_so_cong_cap_so_nhan';
import { ch7DaySoCscCsnPart1Questions } from './ch7_day_so_csc_csn_part_1';
import { ch7DaySoCscCsnPart2Questions } from './ch7_day_so_csc_csn_part_2';

export {
  daySoGioiHanQuestions,
  capSoCongNhanQuestions,
  ch7DaySoCscCsnPart1Questions,
  ch7DaySoCscCsnPart2Questions,
};

export const chuong_7_day_so_cap_soQuestions: Question[] = [
  ...daySoGioiHanQuestions,
  ...capSoCongNhanQuestions,
  ...ch7DaySoCscCsnPart1Questions,
  ...ch7DaySoCscCsnPart2Questions,
];
