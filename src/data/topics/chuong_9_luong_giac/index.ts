import { Question } from '../../../types/exam';

import { congThucPtLuongGiacQuestions } from './cong_thuc_va_pt_luong_giac';
import { daoDongLuongGiacThucTeQuestions } from './mo_hinh_dao_dong_luong_giac_thuc_te';

export {
  congThucPtLuongGiacQuestions,
  daoDongLuongGiacThucTeQuestions,
};

export const chuong_9_luong_giacQuestions: Question[] = [
  ...congThucPtLuongGiacQuestions,
  ...daoDongLuongGiacThucTeQuestions,
];
