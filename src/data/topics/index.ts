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
  ...hsa558ExamQuestions,
].sort((a, b) => a.id - b.id);

// Chapters Metadata
export const CHAPTERS_METADATA: ChapterInfo[] = [
  {
    id: 'chuong_1_ham_so',
    name: 'Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm',
    shortName: 'Khảo sát hàm số',
    description: 'Đơn điệu, cực trị, GTLN-GTNN chứa m, tiệm cận đứng/ngang/xiên, tiếp tuyến và tương giao hàm hợp',
    color: 'emerald',
    topics: [
      {
        id: 'don_dieu_tham_so_m',
        name: 'Tính đơn điệu của hàm số',
        shortName: 'Đơn điệu hàm số',
        chapterId: 'chuong_1_ham_so',
        description: 'Tính đồng biến, nghịch biến của hàm số, bảng biến thiên và bài toán chứa tham số m',
        questionCount: 11,
      },
      {
        id: 'cuc_tri_tham_so_m',
        name: 'Cực trị của hàm số',
        shortName: 'Cực trị hàm số',
        chapterId: 'chuong_1_ham_so',
        description: 'Cực đại, cực tiểu của hàm số, đồ thị đạo hàm và bài toán chứa tham số m',
        questionCount: 12,
      },
      {
        id: 'max_min_tham_so_m',
        name: 'Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)',
        shortName: 'GTLN & GTNN',
        chapterId: 'chuong_1_ham_so',
        description: 'GTLN, GTNN trên đoạn, bất đẳng thức và bài toán chứa tham số m',
        questionCount: 5,
      },
      {
        id: 'tiem_can_va_tiem_can_xien',
        name: 'Tiệm cận đứng, ngang & Tiệm cận xiên',
        shortName: 'Tiệm cận & Xiên',
        chapterId: 'chuong_1_ham_so',
        description: 'Tiệm cận đứng, ngang, tiệm cận xiên phân thức bậc 2 trên bậc 1 chuẩn GDPT 2018',
        questionCount: 17,
      },
      {
        id: 'tiep_tuyen_do_thi',
        name: 'Phương trình tiếp tuyến đồ thị hàm số',
        shortName: 'Tiếp tuyến đồ thị',
        chapterId: 'chuong_1_ham_so',
        description: 'Tiếp tuyến tại điểm, qua điểm và tiếp tuyến song song/vuông góc với đường thẳng',
        questionCount: 6,
      },
      {
        id: 'tuong_giao_va_ham_hop',
        name: 'Tương giao đồ thị & Số nghiệm hàm hợp',
        shortName: 'Tương giao hàm hợp',
        chapterId: 'chuong_1_ham_so',
        description: 'Tương giao đồ thị hàm đa thức và đếm số nghiệm hàm hợp f(f(x)) = 0',
        questionCount: 7,
      },
    ],
  },
  {
    id: 'chuong_2_mu_logarit',
    name: 'Chương 2: Hàm số mũ & Hàm số Logarit',
    shortName: 'Mũ & Logarit',
    description: 'Phương trình mũ/log, phương pháp hàm đặc trưng, nghiệm nguyên và ứng dụng lãi kép, phóng xạ',
    color: 'blue',
    topics: [
      {
        id: 'pt_bpt_mu_logarit',
        name: 'Phương trình & BPT mũ, logarit đối xứng',
        shortName: 'PT & BPT Mũ - Log',
        chapterId: 'chuong_2_mu_logarit',
        description: 'Phương trình mũ, logarit cơ bản, đặt ẩn phụ và đối xứng',
        questionCount: 16,
      },
      {
        id: 'phuong_phap_ham_dac_trung',
        name: 'Phương pháp hàm đặc trưng mũ - logarit',
        shortName: 'Hàm đặc trưng',
        chapterId: 'chuong_2_mu_logarit',
        description: 'Ứng dụng tính đơn điệu của hàm số giải phương trình, BPT mũ - logarit',
        questionCount: 4,
      },
      {
        id: 'nghiem_nguyen_va_he_mu_log',
        name: 'Nghiệm nguyên & Hệ thức mũ - logarit',
        shortName: 'Nghiệm nguyên Mũ - Log',
        chapterId: 'chuong_2_mu_logarit',
        description: 'Đếm số nghiệm nguyên của bất phương trình logarit và định lý Viète',
        questionCount: 3,
      },
      {
        id: 'ung_dung_thuc_te_mu_logarit',
        name: 'Ứng dụng thực tế mũ & logarit',
        shortName: 'Toán thực tế Mũ - Log',
        chapterId: 'chuong_2_mu_logarit',
        description: 'Bài toán phóng xạ, vi khuẩn, lãi kép và cường độ âm Decibel',
        questionCount: 4,
      },
    ],
  },
  {
    id: 'chuong_3_nguyen_ham_tich_phan',
    name: 'Chương 3: Nguyên hàm & Tích phân',
    shortName: 'Nguyên hàm & Tích phân',
    description: 'Đổi biến số, tích phân từng phần, ứng dụng tính diện tích, thể tích tròn xoay và chuyển động v(t)',
    color: 'amber',
    topics: [
      {
        id: 'nguyen_ham_va_tich_phan_co_ban',
        name: 'Nguyên hàm & Tính chất tích phân cơ bản',
        shortName: 'Nguyên hàm cơ bản',
        chapterId: 'chuong_3_nguyen_ham_tich_phan',
        description: 'Bảng nguyên hàm và tính chất tuyến tính của tích phân',
        questionCount: 10,
      },
      {
        id: 'tich_phan_doi_bien_tung_phan',
        name: 'Tích phân đổi biến số & Từng phần',
        shortName: 'Đổi biến & Từng phần',
        chapterId: 'chuong_3_nguyen_ham_tich_phan',
        description: 'Kỹ thuật đổi biến số u = g(x) và tích phân từng phần',
        questionCount: 6,
      },
      {
        id: 'ung_dung_dien_tich_the_tich',
        name: 'Ứng dụng tích phân tính diện tích & thể tích',
        shortName: 'Diện tích & Thể tích',
        chapterId: 'chuong_3_nguyen_ham_tich_phan',
        description: 'Diện tích hình phẳng giới hạn bởi parabol và thể tích khối tròn xoay',
        questionCount: 7,
      },
      {
        id: 'bai_toan_chuyen_dong_thuc_te',
        name: 'Ứng dụng tích phân trong bài toán chuyển động',
        shortName: 'Tích phân chuyển động',
        chapterId: 'chuong_3_nguyen_ham_tich_phan',
        description: 'Tính quãng đường từ hàm vận tốc v(t) và gia tốc a(t)',
        questionCount: 6,
      },
    ],
  },
  {
    id: 'chuong_4_hinh_hoc_khong_gian',
    name: 'Chương 4: Hình học không gian cổ điển',
    shortName: 'Hình học không gian',
    description: 'Góc, khoảng cách, tam diện vuông, tỉ số thể tích Simson và khối tròn xoay nón - trụ - cầu',
    color: 'violet',
    topics: [
      {
        id: 'goc_va_khoang_cach',
        name: 'Góc & Khoảng cách trong không gian',
        shortName: 'Góc & Khoảng cách',
        chapterId: 'chuong_4_hinh_hoc_khong_gian',
        description: 'Góc giữa đường thẳng và mặt phẳng, khoảng cách từ điểm đến mặt phẳng',
        questionCount: 14,
      },
      {
        id: 'khoi_da_dien_tam_dien_vuong',
        name: 'Khối đa diện, Lăng trụ & Tam diện vuông',
        shortName: 'Đa diện & Tam diện vuông',
        chapterId: 'chuong_4_hinh_hoc_khong_gian',
        description: 'Thể tích khối chóp tứ giác đều, lăng trụ và tứ diện vuông OA vuông OB vuông OC',
        questionCount: 12,
      },
      {
        id: 'ti_so_the_tich_khoi_chop_lang_tru',
        name: 'Tỉ số thể tích khối chóp & lăng trụ',
        shortName: 'Tỉ số thể tích',
        chapterId: 'chuong_4_hinh_hoc_khong_gian',
        description: 'Tỉ số thể tích Simson, mặt phẳng cắt song song đáy và phân chia khối hộp',
        questionCount: 4,
      },
      {
        id: 'khoi_tron_xoay_non_tru_cau',
        name: 'Khối tròn xoay: Khối nón, trụ, mặt cầu',
        shortName: 'Nón - Trụ - Cầu',
        chapterId: 'chuong_4_hinh_hoc_khong_gian',
        description: 'Diện tích xung quanh, đường sinh, bán kính và thể tích khối nón, khối trụ',
        questionCount: 2,
      },
    ],
  },
  {
    id: 'chuong_5_toa_do_oxyz',
    name: 'Chương 5: Phương pháp tọa độ trong không gian Oxyz',
    shortName: 'Tọa độ Oxyz',
    description: 'Vectơ, mặt cầu, mặt phẳng đoạn chắn, đường thẳng và mô hình hóa không gian Oxyz thực tế',
    color: 'sky',
    topics: [
      {
        id: 'toa_do_diem_vecto_va_mat_cau',
        name: 'Tọa độ vectơ & Phương trình mặt cầu',
        shortName: 'Vectơ & Mặt cầu',
        chapterId: 'chuong_5_toa_do_oxyz',
        description: 'Tọa độ điểm, vectơ, tâm và bán kính mặt cầu dạng chính tắc và khai triển',
        questionCount: 13,
      },
      {
        id: 'mat_phang_va_duong_thang',
        name: 'Mặt phẳng đoạn chắn & Đường thẳng Oxyz',
        shortName: 'Mặt phẳng & Đường thẳng',
        chapterId: 'chuong_5_toa_do_oxyz',
        description: 'Mặt phẳng đoạn chắn, mặt phẳng trung trực, đường thẳng và bán kính giao tuyến',
        questionCount: 16,
      },
      {
        id: 'mo_hinh_hoa_khong_gian_thuc_te',
        name: 'Mô hình hóa không gian Oxyz thực tế (Radar, máy bay)',
        shortName: 'Mô hình Oxyz thực tế',
        chapterId: 'chuong_5_toa_do_oxyz',
        description: 'Mô hình rada quét sóng cầu, vị trí máy bay và khoảng cách min/max tới mặt cầu',
        questionCount: 3,
      },
    ],
  },
  {
    id: 'chuong_6_toan_lop_10',
    name: 'Chương 6: Đại số sơ cấp & Hình học phẳng Oxy (Lớp 10)',
    shortName: 'Toán Lớp 10 (Oxy, BPT)',
    description: 'Sơ đồ Venn 3 tập hợp, hệ BPT bậc nhất hai ẩn miền nghiệm đa giác, định lý Cosin thực tế và Elip',
    color: 'teal',
    topics: [
      {
        id: 'tap_hop_bieu_do_venn',
        name: 'Tập hợp, Tham số m & Sơ đồ Venn 3 tập hợp',
        shortName: 'Tập hợp & Biểu đồ Venn',
        chapterId: 'chuong_6_toan_lop_10',
        description: 'Nguyên lý bù trừ sơ đồ Venn 3 tập hợp và điều kiện giao tập hợp rỗng',
        questionCount: 3,
      },
      {
        id: 'quy_hoach_tuyen_tinh_bpt_2_an',
        name: 'Hệ BPT bậc nhất hai ẩn & Miền nghiệm đa giác',
        shortName: 'Hệ BPT hai ẩn & Đa giác',
        chapterId: 'chuong_6_toan_lop_10',
        description: 'Miền nghiệm đa giác và tối ưu hóa biểu thức tuyến tính F(x, y)',
        questionCount: 3,
      },
      {
        id: 'he_thuc_luong_tam_giac_thuc_te',
        name: 'Hệ thức lượng trong tam giác thực tế (Định lý Sin, Cosin)',
        shortName: 'Định lý Sin & Cosin thực tế',
        chapterId: 'chuong_6_toan_lop_10',
        description: 'Định lý Cosin tính khoảng cách giữa hai tàu xuất phát từ cảng lệch góc',
        questionCount: 2,
      },
      {
        id: 'duong_thang_duong_tron_conic',
        name: 'Đường thẳng, Tiếp tuyến đường tròn & Elip',
        shortName: 'Đường thẳng, Tròn & Elip',
        chapterId: 'chuong_6_toan_lop_10',
        description: 'Tọa độ Oxy, tiếp tuyến đường tròn tại điểm, diện tích tam giác và tiêu cự Elip',
        questionCount: 12,
      },
    ],
  },
  {
    id: 'chuong_7_day_so_cap_so',
    name: 'Chương 7: Dãy số, Cấp số cộng & Cấp số nhân (Lớp 11)',
    shortName: 'Dãy số & Cấp số',
    description: 'Tính tăng giảm, giới hạn dãy số, cấp số cộng, cấp số nhân, đếm số hạng chung và CSN lùi vô hạn',
    color: 'indigo',
    topics: [
      {
        id: 'day_so_va_gioi_han',
        name: 'Dãy số & Giới hạn dãy số',
        shortName: 'Dãy số & Giới hạn',
        chapterId: 'chuong_7_day_so_cap_so',
        description: 'Dãy số, số hạng tổng quát, tính tăng giảm và giới hạn dãy số hữu tỉ',
        questionCount: 7,
      },
      {
        id: 'cap_so_cong_cap_so_nhan',
        name: 'Cấp số cộng, Cấp số nhân & Số hạng chung',
        shortName: 'CSC, CSN & Số hạng chung',
        chapterId: 'chuong_7_day_so_cap_so',
        description: 'Cấp số cộng, cấp số nhân, đếm số hạng chung bé hơn 2025 và CSN lùi vô hạn',
        questionCount: 16,
      },
    ],
  },
  {
    id: 'chuong_8_xac_suat_thong_ke',
    name: 'Chương 8: Đại số tổ hợp, Xác suất & Thống kê (GDPT 2018)',
    shortName: 'Xác suất & Thống kê',
    description: 'Xác suất cổ điển, xác suất có điều kiện, công thức Bayes và mẫu số liệu ghép nhóm',
    color: 'rose',
    topics: [
      {
        id: 'to_hop_va_xac_suat_co_dien',
        name: 'Đại số tổ hợp & Xác suất cổ điển',
        shortName: 'Tổ hợp & XS cổ điển',
        chapterId: 'chuong_8_xac_suat_thong_ke',
        description: 'Quy tắc đếm, chỉnh hợp, tổ hợp, xác suất biến cố đối và biến cố độc lập',
        questionCount: 18,
      },
      {
        id: 'xac_suat_co_dieu_kien_bayes',
        name: 'Xác suất có điều kiện & Công thức Bayes',
        shortName: 'XS có điều kiện & Bayes',
        chapterId: 'chuong_8_xac_suat_thong_ke',
        description: 'Xác suất có điều kiện, công thức xác suất toàn phần và công thức Bayes chẩn đoán y tế',
        questionCount: 7,
      },
      {
        id: 'thong_ke_mau_so_lieu_ghep_nhom',
        name: 'Thống kê & Mẫu số liệu ghép nhóm',
        shortName: 'Thống kê ghép nhóm',
        chapterId: 'chuong_8_xac_suat_thong_ke',
        description: 'Khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn và trung vị mẫu ghép nhóm',
        questionCount: 18,
      },
    ],
  },
  {
    id: 'chuong_9_luong_giac',
    name: 'Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)',
    shortName: 'Lượng giác',
    description: 'Công thức biến đổi lượng giác, phương trình quy về bậc hai, nghiệm và mô hình dao động thực tế',
    color: 'orange',
    topics: [
      {
        id: 'cong_thuc_va_pt_luong_giac',
        name: 'Công thức & Phương trình lượng giác',
        shortName: 'Công thức & PT Lượng giác',
        chapterId: 'chuong_9_luong_giac',
        description: 'Công thức biến đổi lượng giác, phương trình bậc nhất với sin và cos, nghiệm phương trình',
        questionCount: 13,
      },
      {
        id: 'mo_hinh_dao_dong_luong_giac_thuc_te',
        name: 'Mô hình dao động lượng giác thực tế',
        shortName: 'Dao động lượng giác thực tế',
        chapterId: 'chuong_9_luong_giac',
        description: 'Mô hình cabin vòng quay mặt trời và dao động tuần hoàn thực tế',
        questionCount: 2,
      },
    ],
  },
  {
    id: 'chuong_10_toan_thuc_te_toi_uu',
    name: 'Chương 10: Toán ứng dụng & Mô hình hóa tối ưu',
    shortName: 'Toán thực tế & Tối ưu',
    description: 'Tối ưu hóa kinh tế (doanh thu, lợi nhuận), hình học (thùng tôn, bể nước) và nồng độ thuốc',
    color: 'cyan',
    topics: [
      {
        id: 'toi_uu_kinh_te_va_doanh_thu',
        name: 'Tối ưu hóa kinh tế, Chi phí & Doanh thu',
        shortName: 'Tối ưu Kinh tế & Lợi nhuận',
        chapterId: 'chuong_10_toan_thuc_te_toi_uu',
        description: 'Tối ưu hóa lợi nhuận, chi phí, quy hoạch tuyến tính và mô hình tăng trưởng',
        questionCount: 13,
      },
      {
        id: 'toi_uu_hinh_hoc_va_vat_lieu',
        name: 'Tối ưu hóa hình học, Vật liệu & Nồng độ',
        shortName: 'Tối ưu Hình học & Nồng độ',
        chapterId: 'chuong_10_toan_thuc_te_toi_uu',
        description: 'Cắt gấp thùng tôn thể tích lớn nhất, bể nước chi phí nhỏ nhất và nồng độ thuốc cực đại',
        questionCount: 8,
      },
    ],
  },
];

// Flat list of all 30 micro-topics
export const MICRO_TOPICS_METADATA: MicroTopicInfo[] = CHAPTERS_METADATA.flatMap((c) => c.topics);

// Exam sets definition (Standardized HSA formats)
export const HSA_EXAM_SETS: ExamSet[] = [
  {
    id: 'de_01_chuan',
    title: 'Đề 01: Chuẩn Tham Khảo ĐHQGHN 2025',
    subtitle: 'Đầy đủ 50 câu (35 trắc nghiệm + 15 điền số)',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Chuẩn 100% HSA',
    description: 'Bao phủ chuẩn mực các chuyên đề GDPT 2018 theo cấu trúc đề tham khảo mới nhất của Trung tâm Khảo thí ĐHQGHN.',
    questionIds: Array.from({ length: 50 }, (_, i) => i + 1),
  },
  {
    id: 'de_02_thuc_chien',
    title: 'Đề 02: Thực Chiến Phân Hóa HSA',
    subtitle: '50 câu thực chiến phân hóa năng lực tư duy',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Phân hóa điểm cao',
    description: 'Đề thi rèn luyện tốc độ phản xạ và đào sâu các bài toán tư duy định lượng trong kỳ thi HSA.',
    questionIds: Array.from({ length: 50 }, (_, i) => i + 51),
  },
  {
    id: 'de_03_moi',
    title: 'Đề 03: Đột Phá Các Dạng Toán Mới GDPT 2018',
    subtitle: '50 câu chuyên sâu các dạng toán đổi mới chuẩn HSA',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Dạng mới 2025',
    description: 'Tập trung các dạng toán mới: biểu đồ Venn, BPT hai ẩn miền nghiệm đa giác, định lý Cosin thực tế, tiếp tuyến, tiệm cận xiên, tích phân chuyển động, tam diện vuông, tọa độ hóa rada, số hạng chung CSC, công thức Bayes và thống kê ghép nhóm.',
    questionIds: Array.from({ length: 50 }, (_, i) => i + 101),
  },
  {
    id: 'de_04_nang_cao',
    title: 'Đề 04: Tổng Hợp Nâng Cao & Tư Duy Phản Biện',
    subtitle: '50 câu toàn diện rèn luyện tư duy phân tích sâu',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Thực chiến 90+',
    description: 'Rèn luyện khả năng lập luận toán học, suy luận logic, giải tích hàm số nâng cao, phương pháp tọa độ và xác suất thống kê hiện đại.',
    questionIds: Array.from({ length: 50 }, (_, i) => i + 151),
  },
  {
    id: 'de_05_cap_toc',
    title: 'Đề 05: Luyện Nhanh Trọng Điểm 25 Câu',
    subtitle: '25 câu then chốt làm nhanh trong 40 phút',
    timeMinutes: 40,
    questionCount: 25,
    mcqCount: 18,
    fillCount: 7,
    badge: 'Cấp tốc 40 phút',
    description: 'Dành cho học sinh muốn kiểm tra nhanh kiến thức trọng tâm trước giờ thi hoặc tự luyện ngắn.',
    questionIds: [101, 103, 108, 109, 111, 114, 117, 120, 122, 125, 128, 130, 133, 134, 135, 151, 154, 161, 136, 137, 140, 142, 143, 144, 147],
  },
  {
    id: 'de_06_hsa35',
    title: 'Đề 06: Đề Thi Thực Chiến HSA ĐHQGHN (Mã Đề 35)',
    subtitle: '50 câu thực chiến phân hóa năng lực tư duy chuẩn đề gốc',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 34,
    fillCount: 16,
    badge: 'Đề gốc HSA 35',
    description: 'Trích từ bộ đề thi chính thức HSA ĐHQGHN: cấu trúc 34 trắc nghiệm + 16 điền số với đầy đủ các bài toán cực trị m, hàm đặc trưng, xác suất Bayes, elip thực tế và xe F1.',
    questionIds: Array.from({ length: 50 }, (_, i) => i + 201),
  },
  {
    id: 'de_07_hsa36',
    title: 'Đề 07: Đề Thi Thực Chiến HSA ĐHQGHN (Mã Đề 36)',
    subtitle: '50 câu thực chiến phân hóa năng lực tư duy chuẩn đề gốc',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Đề gốc HSA 36',
    description: 'Trích từ bộ đề thi chính thức HSA ĐHQGHN (Mã đề 36): cấu trúc chuẩn 35 trắc nghiệm + 15 điền số với chùm câu hỏi hình học không gian phân tích vectơ Menelaus, bất đẳng thức logarit, xác suất toàn phần bệnh phổi và bài toán tư duy logic.',
    questionIds: Array.from({ length: 50 }, (_, i) => i + 251),
  },
  {
    id: 'de_08_hsa558',
    title: 'Đề 08: Đề Thi Thực Chiến HSA VNU (Mã Đề 558)',
    subtitle: '50 câu thực chiến phân hóa cao chuẩn 100% form hsavnu.edu.vn',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Đề gốc 558',
    description: 'Bộ đề thi thực chiến mã 558 trên cổng luyện thi HSA VNU: bài toán tiếp tuyến tam giác diện tích S=25, hàm đặc trưng, logistic, tư duy logic bàn tròn, chùm câu hỏi sinh thái học và tỷ số hình hộp.',
    questionIds: Array.from({ length: 50 }, (_, i) => i + 301),
  },
];
