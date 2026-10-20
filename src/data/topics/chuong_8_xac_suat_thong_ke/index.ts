import { Question } from '../../../types/exam';

import { toHopXacSuatCoDienQuestions } from './to_hop_va_xac_suat_co_dien';
import { xacSuatBayesQuestions } from './xac_suat_co_dieu_kien_bayes';
import { thongKeGhepNhomQuestions } from './thong_ke_mau_so_lieu_ghep_nhom';
import { ch3ThongKeGhepNhomPart1Questions } from './ch3_thong_ke_ghep_nhom_part_1';
import { ch3ThongKeGhepNhomPart2Questions } from './ch3_thong_ke_ghep_nhom_part_2';
import { ch5BayesNangCaoPart1Questions } from './ch5_bayes_nang_cao_part_1';
import { ch5BayesNangCaoPart2Questions } from './ch5_bayes_nang_cao_part_2';

export {
  toHopXacSuatCoDienQuestions,
  xacSuatBayesQuestions,
  thongKeGhepNhomQuestions,
  ch3ThongKeGhepNhomPart1Questions,
  ch3ThongKeGhepNhomPart2Questions,
  ch5BayesNangCaoPart1Questions,
  ch5BayesNangCaoPart2Questions,
};

export const chuong_8_xac_suat_thong_keQuestions: Question[] = [
  ...toHopXacSuatCoDienQuestions,
  ...xacSuatBayesQuestions,
  ...thongKeGhepNhomQuestions,
  ...ch3ThongKeGhepNhomPart1Questions,
  ...ch3ThongKeGhepNhomPart2Questions,
  ...ch5BayesNangCaoPart1Questions,
  ...ch5BayesNangCaoPart2Questions,
];
