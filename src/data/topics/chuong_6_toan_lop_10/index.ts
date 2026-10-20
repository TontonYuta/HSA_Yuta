import { Question } from '../../../types/exam';

import { tapHopVennQuestions } from './tap_hop_bieu_do_venn';
import { quyHoachTuyenTinhQuestions } from './quy_hoach_tuyen_tinh_bpt_2_an';
import { heThucLuongTamGiacQuestions } from './he_thuc_luong_tam_giac_thuc_te';
import { duongThangDuongTronConicQuestions } from './duong_thang_duong_tron_conic';
import { ch10Toan10NangCaoPart1Questions } from './ch10_toan_10_nang_cao_part_1';
import { ch10Toan10NangCaoPart2Questions } from './ch10_toan_10_nang_cao_part_2';

export {
  tapHopVennQuestions,
  quyHoachTuyenTinhQuestions,
  heThucLuongTamGiacQuestions,
  duongThangDuongTronConicQuestions,
  ch10Toan10NangCaoPart1Questions,
  ch10Toan10NangCaoPart2Questions,
};

export const chuong_6_toan_lop_10Questions: Question[] = [
  ...tapHopVennQuestions,
  ...quyHoachTuyenTinhQuestions,
  ...heThucLuongTamGiacQuestions,
  ...duongThangDuongTronConicQuestions,
  ...ch10Toan10NangCaoPart1Questions,
  ...ch10Toan10NangCaoPart2Questions,
];
