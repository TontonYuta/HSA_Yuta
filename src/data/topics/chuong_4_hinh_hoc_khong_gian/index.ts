import { Question } from '../../../types/exam';

import { gocKhoangCachQuestions } from './goc_va_khoang_cach';
import { khoiDaDienTamDienVuongQuestions } from './khoi_da_dien_tam_dien_vuong';
import { tiSoTheTichQuestions } from './ti_so_the_tich_khoi_chop_lang_tru';
import { khoiTronXoayQuestions } from './khoi_tron_xoay_non_tru_cau';
import { ch8HinhKhongGianPart1Questions } from './ch8_hinh_khong_gian_part_1';
import { ch8HinhKhongGianPart2Questions } from './ch8_hinh_khong_gian_part_2';

export {
  gocKhoangCachQuestions,
  khoiDaDienTamDienVuongQuestions,
  tiSoTheTichQuestions,
  khoiTronXoayQuestions,
  ch8HinhKhongGianPart1Questions,
  ch8HinhKhongGianPart2Questions,
};

export const chuong_4_hinh_hoc_khong_gianQuestions: Question[] = [
  ...gocKhoangCachQuestions,
  ...khoiDaDienTamDienVuongQuestions,
  ...tiSoTheTichQuestions,
  ...khoiTronXoayQuestions,
  ...ch8HinhKhongGianPart1Questions,
  ...ch8HinhKhongGianPart2Questions,
];
