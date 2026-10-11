import { Question } from '../../../types/exam';

import { donDieuThamSoMQuestions } from './don_dieu_tham_so_m';
import { cucTriThamSoMQuestions } from './cuc_tri_tham_so_m';
import { maxMinThamSoMQuestions } from './max_min_tham_so_m';
import { tiemCanQuestions } from './tiem_can_va_tiem_can_xien';
import { tiepTuyenQuestions } from './tiep_tuyen_do_thi';
import { tuongGiaoHamHopQuestions } from './tuong_giao_va_ham_hop';

export {
  donDieuThamSoMQuestions,
  cucTriThamSoMQuestions,
  maxMinThamSoMQuestions,
  tiemCanQuestions,
  tiepTuyenQuestions,
  tuongGiaoHamHopQuestions,
};

export const chuong_1_ham_soQuestions: Question[] = [
  ...donDieuThamSoMQuestions,
  ...cucTriThamSoMQuestions,
  ...maxMinThamSoMQuestions,
  ...tiemCanQuestions,
  ...tiepTuyenQuestions,
  ...tuongGiaoHamHopQuestions,
];
