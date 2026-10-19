import { Question, ExamSet, ChapterInfo, MicroTopicInfo } from '../../types/exam';

// Chapter 1
import {
  chuong_1_ham_soQuestions,
  donDieuThamSoMQuestions,
  cucTriThamSoMQuestions,
  maxMinThamSoMQuestions,
  tiemCanQuestions,
  tiepTuyenQuestions,
  tuongGiaoHamHopQuestions,
} from './chuong_1_ham_so';

// Chapter 2
import {
  chuong_2_mu_logaritQuestions,
  ptBptMuLogaritQuestions,
  hamDacTrungQuestions,
  nghiemNguyenMuLogQuestions,
  ungDungMuLogQuestions,
} from './chuong_2_mu_logarit';

// Chapter 3
import {
  chuong_3_nguyen_ham_tich_phanQuestions,
  nguyenHamCoBanQuestions,
  doiBienTungPhanQuestions,
  ungDungDienTichTheTichQuestions,
  chuyenDongTichPhanQuestions,
} from './chuong_3_nguyen_ham_tich_phan';

// Chapter 4
import {
  chuong_4_hinh_hoc_khong_gianQuestions,
  gocKhoangCachQuestions,
  khoiDaDienTamDienVuongQuestions,
  tiSoTheTichQuestions,
  khoiTronXoayQuestions,
} from './chuong_4_hinh_hoc_khong_gian';

// Chapter 5
import {
  chuong_5_toa_do_oxyzQuestions,
  toaDoMatCauQuestions,
  matPhangDuongThangQuestions,
  moHinhOxyzThucTeQuestions,
} from './chuong_5_toa_do_oxyz';

// Chapter 6
import {
  chuong_6_toan_lop_10Questions,
  tapHopVennQuestions,
  quyHoachTuyenTinhQuestions,
  heThucLuongTamGiacQuestions,
  duongThangDuongTronConicQuestions,
} from './chuong_6_toan_lop_10';

// Chapter 7
import {
  chuong_7_day_so_cap_soQuestions,
  daySoGioiHanQuestions,
  capSoCongNhanQuestions,
} from './chuong_7_day_so_cap_so';

// Chapter 8
import {
  chuong_8_xac_suat_thong_keQuestions,
  toHopXacSuatCoDienQuestions,
  xacSuatBayesQuestions,
  thongKeGhepNhomQuestions,
} from './chuong_8_xac_suat_thong_ke';

// Chapter 9
import {
  chuong_9_luong_giacQuestions,
  congThucPtLuongGiacQuestions,
  daoDongLuongGiacThucTeQuestions,
} from './chuong_9_luong_giac';

// Chapter 10
import {
  chuong_10_toan_thuc_te_toi_uuQuestions,
  toiUuKinhTeQuestions,
  toiUuHinhHocQuestions,
} from './chuong_10_toan_thuc_te_toi_uu';

// Official HSA Exam 558
import { hsa558ExamQuestions } from './de_thi_hsa_558';

// Selected 2024-2027 questions from Toanmath (GDPT 2018 format)
import { toanmathSelectedQuestions } from './toanmath_2024_2027_selected';

// Official & Mock Exams 2025-2026 from Provincial Departments (Ha Noi, Nam Dinh, Nghe An, Hai Phong, TP.HCM)
import {
  deThiCacSoQuestions,
  soHanoi2025Questions,
  soNamDinh2025Questions,
  soNgheAn2025Questions,
  soHaiPhong2025Questions,
  nguyenKhuyenTphcm2026Questions,
} from './de_thi_cac_so_2025_2026';

// Re-export micro-topics for modular consumption
export {
  // Chuong 1
  donDieuThamSoMQuestions,
  cucTriThamSoMQuestions,
  maxMinThamSoMQuestions,
  tiemCanQuestions,
  tiepTuyenQuestions,
  tuongGiaoHamHopQuestions,
  // Chuong 2
  ptBptMuLogaritQuestions,
  hamDacTrungQuestions,
  nghiemNguyenMuLogQuestions,
  ungDungMuLogQuestions,
  // Chuong 3
  nguyenHamCoBanQuestions,
  doiBienTungPhanQuestions,
  ungDungDienTichTheTichQuestions,
  chuyenDongTichPhanQuestions,
  // Chuong 4
  gocKhoangCachQuestions,
  khoiDaDienTamDienVuongQuestions,
  tiSoTheTichQuestions,
  khoiTronXoayQuestions,
  // Chuong 5
  toaDoMatCauQuestions,
  matPhangDuongThangQuestions,
  moHinhOxyzThucTeQuestions,
  // Chuong 6
  tapHopVennQuestions,
  quyHoachTuyenTinhQuestions,
  heThucLuongTamGiacQuestions,
  duongThangDuongTronConicQuestions,
  // Chuong 7
  daySoGioiHanQuestions,
  capSoCongNhanQuestions,
  // Chuong 8
  toHopXacSuatCoDienQuestions,
  xacSuatBayesQuestions,
  thongKeGhepNhomQuestions,
  // Chuong 9
  congThucPtLuongGiacQuestions,
  daoDongLuongGiacThucTeQuestions,
  // Chuong 10
  toiUuKinhTeQuestions,
  toiUuHinhHocQuestions,
};

// Re-export chapter aggregated questions
export {
  chuong_1_ham_soQuestions,
  chuong_2_mu_logaritQuestions,
  chuong_3_nguyen_ham_tich_phanQuestions,
  chuong_4_hinh_hoc_khong_gianQuestions,
  chuong_5_toa_do_oxyzQuestions,
  chuong_6_toan_lop_10Questions,
  chuong_7_day_so_cap_soQuestions,
  chuong_8_xac_suat_thong_keQuestions,
  chuong_9_luong_giacQuestions,
  chuong_10_toan_thuc_te_toi_uuQuestions,
  toanmathSelectedQuestions,
  deThiCacSoQuestions,
  soHanoi2025Questions,
  soNamDinh2025Questions,
  soNgheAn2025Questions,
  soHaiPhong2025Questions,
  nguyenKhuyenTphcm2026Questions,
};

// Aggregate all 30 micro-topics into master questions database
export const HSA_QUESTIONS_DATABASE: Question[] = [
  ...chuong_1_ham_soQuestions,
  ...chuong_2_mu_logaritQuestions,
  ...chuong_3_nguyen_ham_tich_phanQuestions,
  ...chuong_4_hinh_hoc_khong_gianQuestions,
  ...chuong_5_toa_do_oxyzQuestions,
  ...chuong_6_toan_lop_10Questions,
  ...chuong_7_day_so_cap_soQuestions,
  ...chuong_8_xac_suat_thong_keQuestions,
  ...chuong_9_luong_giacQuestions,
  ...chuong_10_toan_thuc_te_toi_uuQuestions,
  ...toanmathSelectedQuestions,
  ...hsa558ExamQuestions,
  ...deThiCacSoQuestions,
].sort((a, b) => a.id - b.id);

// Re-export chapter metadata and exam sets from dedicated modular files
export { CHAPTERS_METADATA, MICRO_TOPICS_METADATA } from '../chaptersMetadata';
export { HSA_EXAM_SETS, THPTQG_EXAM_SETS, ALL_EXAM_SETS } from '../examSets';

