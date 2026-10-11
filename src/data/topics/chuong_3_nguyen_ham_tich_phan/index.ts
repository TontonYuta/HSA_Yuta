import { Question } from '../../../types/exam';

import { nguyenHamCoBanQuestions } from './nguyen_ham_va_tich_phan_co_ban';
import { doiBienTungPhanQuestions } from './tich_phan_doi_bien_tung_phan';
import { ungDungDienTichTheTichQuestions } from './ung_dung_dien_tich_the_tich';
import { chuyenDongTichPhanQuestions } from './bai_toan_chuyen_dong_thuc_te';

export {
  nguyenHamCoBanQuestions,
  doiBienTungPhanQuestions,
  ungDungDienTichTheTichQuestions,
  chuyenDongTichPhanQuestions,
};

export const chuong_3_nguyen_ham_tich_phanQuestions: Question[] = [
  ...nguyenHamCoBanQuestions,
  ...doiBienTungPhanQuestions,
  ...ungDungDienTichTheTichQuestions,
  ...chuyenDongTichPhanQuestions,
];
