import { Question } from '../../../types/exam';

import { nguyenHamCoBanQuestions } from './nguyen_ham_va_tich_phan_co_ban';
import { doiBienTungPhanQuestions } from './tich_phan_doi_bien_tung_phan';
import { ungDungDienTichTheTichQuestions } from './ung_dung_dien_tich_the_tich';
import { chuyenDongTichPhanQuestions } from './bai_toan_chuyen_dong_thuc_te';
import { ch4TichPhanNangCaoPart1Questions } from './ch4_tich_phan_nang_cao_part_1';
import { ch4TichPhanNangCaoPart2Questions } from './ch4_tich_phan_nang_cao_part_2';

export {
  nguyenHamCoBanQuestions,
  doiBienTungPhanQuestions,
  ungDungDienTichTheTichQuestions,
  chuyenDongTichPhanQuestions,
  ch4TichPhanNangCaoPart1Questions,
  ch4TichPhanNangCaoPart2Questions,
};

export const chuong_3_nguyen_ham_tich_phanQuestions: Question[] = [
  ...nguyenHamCoBanQuestions,
  ...doiBienTungPhanQuestions,
  ...ungDungDienTichTheTichQuestions,
  ...chuyenDongTichPhanQuestions,
  ...ch4TichPhanNangCaoPart1Questions,
  ...ch4TichPhanNangCaoPart2Questions,
];
