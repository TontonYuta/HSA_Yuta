import { Question } from '../../../types/exam';

import { ptBptMuLogaritQuestions } from './pt_bpt_mu_logarit';
import { hamDacTrungQuestions } from './phuong_phap_ham_dac_trung';
import { nghiemNguyenMuLogQuestions } from './nghiem_nguyen_va_he_mu_log';
import { ungDungMuLogQuestions } from './ung_dung_thuc_te_mu_logarit';
import { ch6MuLogaritNangCaoPart1Questions } from './ch6_mu_logarit_nang_cao_part_1';
import { ch6MuLogaritNangCaoPart2Questions } from './ch6_mu_logarit_nang_cao_part_2';

export {
  ptBptMuLogaritQuestions,
  hamDacTrungQuestions,
  nghiemNguyenMuLogQuestions,
  ungDungMuLogQuestions,
  ch6MuLogaritNangCaoPart1Questions,
  ch6MuLogaritNangCaoPart2Questions,
};

export const chuong_2_mu_logaritQuestions: Question[] = [
  ...ptBptMuLogaritQuestions,
  ...hamDacTrungQuestions,
  ...nghiemNguyenMuLogQuestions,
  ...ungDungMuLogQuestions,
  ...ch6MuLogaritNangCaoPart1Questions,
  ...ch6MuLogaritNangCaoPart2Questions,
];
