import { Question } from '../../../types/exam';

import { toiUuKinhTeQuestions } from './toi_uu_kinh_te_va_doanh_thu';
import { toiUuHinhHocQuestions } from './toi_uu_hinh_hoc_va_vat_lieu';
import { toanThucTeTHPTQGQuestions } from './toan_thuc_te_thptqg_2025';

export {
  toiUuKinhTeQuestions,
  toiUuHinhHocQuestions,
  toanThucTeTHPTQGQuestions,
};

export const chuong_10_toan_thuc_te_toi_uuQuestions: Question[] = [
  ...toiUuKinhTeQuestions,
  ...toiUuHinhHocQuestions,
  ...toanThucTeTHPTQGQuestions,
];
