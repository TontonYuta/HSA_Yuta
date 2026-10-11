import { Question } from '../../../types/exam';

import { daySoGioiHanQuestions } from './day_so_va_gioi_han';
import { capSoCongNhanQuestions } from './cap_so_cong_cap_so_nhan';

export {
  daySoGioiHanQuestions,
  capSoCongNhanQuestions,
};

export const chuong_7_day_so_cap_soQuestions: Question[] = [
  ...daySoGioiHanQuestions,
  ...capSoCongNhanQuestions,
];
