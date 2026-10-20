import { Question } from '../../../types/exam';

import { toaDoMatCauQuestions } from './toa_do_diem_vecto_va_mat_cau';
import { matPhangDuongThangQuestions } from './mat_phang_va_duong_thang';
import { moHinhOxyzThucTeQuestions } from './mo_hinh_hoa_khong_gian_thuc_te';
import { ch5OxyzNangCaoPart1Questions } from './ch5_oxyz_nang_cao_part_1';
import { ch5OxyzNangCaoPart2Questions } from './ch5_oxyz_nang_cao_part_2';

export {
  toaDoMatCauQuestions,
  matPhangDuongThangQuestions,
  moHinhOxyzThucTeQuestions,
  ch5OxyzNangCaoPart1Questions,
  ch5OxyzNangCaoPart2Questions,
};

export const chuong_5_toa_do_oxyzQuestions: Question[] = [
  ...toaDoMatCauQuestions,
  ...matPhangDuongThangQuestions,
  ...moHinhOxyzThucTeQuestions,
  ...ch5OxyzNangCaoPart1Questions,
  ...ch5OxyzNangCaoPart2Questions,
];
