import { Question } from '../../../types/exam';

import { toHopXacSuatCoDienQuestions } from './to_hop_va_xac_suat_co_dien';
import { xacSuatBayesQuestions } from './xac_suat_co_dieu_kien_bayes';
import { thongKeGhepNhomQuestions } from './thong_ke_mau_so_lieu_ghep_nhom';

export {
  toHopXacSuatCoDienQuestions,
  xacSuatBayesQuestions,
  thongKeGhepNhomQuestions,
};

export const chuong_8_xac_suat_thong_keQuestions: Question[] = [
  ...toHopXacSuatCoDienQuestions,
  ...xacSuatBayesQuestions,
  ...thongKeGhepNhomQuestions,
];
