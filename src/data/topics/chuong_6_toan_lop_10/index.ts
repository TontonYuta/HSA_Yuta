import { Question } from '../../../types/exam';

import { tapHopVennQuestions } from './tap_hop_bieu_do_venn';
import { quyHoachTuyenTinhQuestions } from './quy_hoach_tuyen_tinh_bpt_2_an';
import { heThucLuongTamGiacQuestions } from './he_thuc_luong_tam_giac_thuc_te';
import { duongThangDuongTronConicQuestions } from './duong_thang_duong_tron_conic';

export {
  tapHopVennQuestions,
  quyHoachTuyenTinhQuestions,
  heThucLuongTamGiacQuestions,
  duongThangDuongTronConicQuestions,
};

export const chuong_6_toan_lop_10Questions: Question[] = [
  ...tapHopVennQuestions,
  ...quyHoachTuyenTinhQuestions,
  ...heThucLuongTamGiacQuestions,
  ...duongThangDuongTronConicQuestions,
];
