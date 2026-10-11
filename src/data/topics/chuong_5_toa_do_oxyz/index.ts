import { Question } from '../../../types/exam';

import { toaDoMatCauQuestions } from './toa_do_diem_vecto_va_mat_cau';
import { matPhangDuongThangQuestions } from './mat_phang_va_duong_thang';
import { moHinhOxyzThucTeQuestions } from './mo_hinh_hoa_khong_gian_thuc_te';

export {
  toaDoMatCauQuestions,
  matPhangDuongThangQuestions,
  moHinhOxyzThucTeQuestions,
};

export const chuong_5_toa_do_oxyzQuestions: Question[] = [
  ...toaDoMatCauQuestions,
  ...matPhangDuongThangQuestions,
  ...moHinhOxyzThucTeQuestions,
];
