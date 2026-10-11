import { Question } from '../../../types/exam';

import { ptBptMuLogaritQuestions } from './pt_bpt_mu_logarit';
import { hamDacTrungQuestions } from './phuong_phap_ham_dac_trung';
import { nghiemNguyenMuLogQuestions } from './nghiem_nguyen_va_he_mu_log';
import { ungDungMuLogQuestions } from './ung_dung_thuc_te_mu_logarit';

export {
  ptBptMuLogaritQuestions,
  hamDacTrungQuestions,
  nghiemNguyenMuLogQuestions,
  ungDungMuLogQuestions,
};

export const chuong_2_mu_logaritQuestions: Question[] = [
  ...ptBptMuLogaritQuestions,
  ...hamDacTrungQuestions,
  ...nghiemNguyenMuLogQuestions,
  ...ungDungMuLogQuestions,
];
