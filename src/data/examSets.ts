import { ExamSet } from '../types/exam';
import { getTargetExamYear } from '../utils/timeUtils';

const TARGET_YEAR = getTargetExamYear();

export const HSA_EXAM_SETS: ExamSet[] = [
  // =========================================================================
  // NHÓM 1: CÁC ĐỀ CHUẨN THAM KHẢO & ĐỀ GỐC ĐHQGHN (ĐỀ 01 - 08)
  // =========================================================================
  {
    id: 'de_01_chuan',
    title: `Đề 01: Chuẩn Tham Khảo ĐHQGHN ${TARGET_YEAR}`,
    subtitle: 'Đầy đủ 50 câu (35 trắc nghiệm + 15 điền số)',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Chuẩn ĐHQGHN',
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
    badge: `Dạng mới ${TARGET_YEAR}`,
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
    subtitle: '50 câu thực chiến phân hóa cao theo form hsavnu.edu.vn',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 29,
    fillCount: 21,
    badge: 'Đề gốc 558',
    description: 'Bộ đề thi thực chiến mã 558 trên cổng luyện thi HSA VNU: bài toán tiếp tuyến tam giác diện tích S=25, hàm đặc trưng, logistic, tư duy logic bàn tròn, chùm câu hỏi sinh thái học và tỷ số hình hộp.',
    questionIds: Array.from({ length: 50 }, (_, i) => i + 301),
  },

  // =========================================================================
  // NHÓM 2: ĐỀ CHUYÊN SÂU TỪNG KHỐI KIẾN THỨC PHÂN HÓA (ĐỀ 09 - 15)
  // =========================================================================
  {
    id: 'de_09_ham_so_chuyen_sau',
    title: 'Đề 09: Chuyên Sâu Giải Tích & Đơn Điệu Hàm Số Chứa Tham Số',
    subtitle: '50 câu phân hóa chuyên sâu về tính đơn điệu và tiếp tuyến',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Chuyên sâu Hàm số',
    description: 'Đào sâu các bài toán tham số m trong khảo sát hàm số, đơn điệu trên khoảng/nửa khoảng, tiệm cận đứng, ngang, xiên và phương trình tiếp tuyến.',
    questionIds: [
      351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365,
      366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380,
      381, 382, 383, 384, 385,
      36, 37, 38, 39, 40, 86, 87, 88, 89, 90, 136, 137, 138, 139, 140
    ],
  },
  {
    id: 'de_10_cuc_tri_van_dung_cao',
    title: 'Đề 10: Đột Phá Cực Trị Hàm Số & Min - Max Vận Dụng Cao',
    subtitle: '50 câu cực trị tham số m và tối ưu giá trị lớn nhất - nhỏ nhất',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Phân hóa 85+',
    description: 'Chuyên đề giải quyết triệt để các bài toán cực trị hàm đa thức bậc 3, bậc 4, hàm chứa căn thức, GTLN-GTNN trên đoạn và ứng dụng đồ thị đạo hàm f\'(x).',
    questionIds: [
      411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425,
      426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440,
      441, 442, 443, 444, 445,
      86, 87, 88, 89, 90, 186, 187, 188, 189, 190, 48, 49, 50, 98, 99
    ],
  },
  {
    id: 'de_11_tuong_giao_ham_hop',
    title: 'Đề 11: Chuyên Sâu Tương Giao Đồ Thị & Hàm Hợp Phân Hóa 85+',
    subtitle: '50 câu tương giao nghiệm kép, hàm trị tuyệt đối và hàm hợp',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Tương giao hàm hợp',
    description: 'Chinh phục bài toán biện luận số nghiệm phương trình f(u(x)) = k, đồ thị hàm số chứa dấu giá trị tuyệt đối |f(x)|, f(|x|) và tương giao nghiệm nguyên.',
    questionIds: [
      483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497,
      498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512,
      513, 514, 515, 465, 466,
      36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 141, 142, 143, 144, 145
    ],
  },
  {
    id: 'de_12_hinh_hoc_oxyz',
    title: 'Đề 12: Chuyên Sâu Hình Học Không Gian & Tọa Độ Oxyz Thực Tế',
    subtitle: '50 câu góc, khoảng cách, khối tròn xoay và mô hình tọa độ hóa',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Oxyz & Không Gian',
    description: 'Tổng hợp góc và khoảng cách hai đường chéo nhau, thể tích khối đa diện, nón - trụ - cầu và các mô hình tọa độ hóa Oxyz trạm thu phát radar, máy bay, vệ tinh quỹ đạo.',
    questionIds: [
      // 35 MCQ (20 Ch4 + 15 Ch5)
      15, 16, 17, 18, 65, 66, 67, 68, 115, 116, 117, 118, 165, 166, 167, 168, 215, 216, 217, 218,
      19, 20, 21, 69, 70, 71, 119, 120, 121, 169, 170, 171, 271, 220, 221,
      // 15 Fill (7 Ch4 + 7 Ch5 + 1 Ch10 thực tế hình học)
      46, 96, 146, 196, 213, 239, 290,
      40, 90, 140, 190, 240, 270, 274,
      50
    ],
  },
  {
    id: 'de_13_xac_suat_thong_ke',
    title: 'Đề 13: Chuyên Sâu Xác Suất - Thống Kê & Toán Rời Rạc Hiện Đại',
    subtitle: '50 câu xác suất Bayes, mẫu số liệu ghép nhóm và cấp số',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Xác suất & Bayes',
    description: 'Bao quát công thức xác suất toàn phần, công thức Bayes chẩn đoán bệnh, quy tắc nhân, mẫu số liệu ghép nhóm (phương sai, độ lệch chuẩn), cấp số cộng và cấp số nhân.',
    questionIds: [
      // 35 MCQ (20 Ch8 + 10 Ch7 + 5 Ch6)
      26, 27, 28, 29, 76, 77, 78, 79, 126, 127, 128, 129, 176, 177, 178, 179, 227, 228, 229, 282,
      23, 24, 25, 73, 74, 75, 123, 124, 125, 173,
      22, 72, 122, 172, 284,
      // 15 Fill (10 Ch8 + 5 Ch7)
      44, 45, 95, 142, 145, 149, 192, 195, 199, 219,
      43, 94, 144, 194, 206
    ],
  },
  {
    id: 'de_14_mu_log_tich_phan',
    title: 'Đề 14: Chuyên Sâu Mũ - Logarit & Tích Phân Thực Tế',
    subtitle: '50 câu hàm đặc trưng, diện tích hình phẳng và chuyển động v(t)',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Mũ - Log & Tích phân',
    description: 'Chuyên đề trọng tâm phương trình/bất phương trình mũ - logarit, nghiệm nguyên, phương pháp hàm đặc trưng, diện tích hình phẳng parabol/elip và tích phân bài toán vật lý.',
    questionIds: [
      // 35 MCQ (18 Ch2 + 17 Ch3)
      7, 8, 9, 10, 57, 58, 59, 60, 107, 108, 109, 110, 157, 158, 159, 160, 265, 208,
      11, 12, 13, 14, 61, 62, 63, 64, 111, 112, 113, 114, 161, 162, 163, 164, 211,
      // 15 Fill (10 Ch2 + 5 Ch3)
      38, 88, 97, 99, 138, 188, 210, 232, 283, 288,
      41, 91, 141, 191, 264
    ],
  },
  {
    id: 'de_15_toan_thuc_te_toi_uu',
    title: 'Đề 15: Chuyên Sâu Toán Ứng Dụng Thực Tế & Tối Ưu Hóa Kinh Tế',
    subtitle: '50 câu chi phí, doanh thu, quy hoạch tuyến tính và bài toán đời sống',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Toán thực tế HSA',
    description: 'Tập trung các bài toán tối ưu hóa chi phí sản xuất, doanh thu và lợi nhuận cực đại, quy hoạch tuyến tính hai ẩn miền đa giác, dao động lượng giác và lãi suất ngân hàng.',
    questionIds: [
      33, 34, 35, 83, 84, 85, 133, 134, 135, 183, 184, 185, 233,
      30, 31, 32, 80, 81, 82, 130, 131, 132, 180, 181, 182,
      22, 72, 122, 172, 222, 272,
      1, 2, 3, 4,
      49, 50, 99, 100, 149, 150, 199, 200, 249, 250,
      47, 48, 97, 98, 148
    ],
  },

  // =========================================================================
  // NHÓM 3: ĐỀ THI THỬ TOÀN DIỆN MA TRẬN CHUẨN & PHÂN HÓA CHIẾN LƯỢC (ĐỀ 16 - 20)
  // =========================================================================
  {
    id: 'de_16_ma_tran_chuan_01',
    title: 'Đề 16: Đề Thi Thử Toàn Diện Ma Trận Chuẩn ĐHQGHN Số 01',
    subtitle: '50 câu chuẩn ma trận 10 chương mô phỏng kỳ thi thực tế',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Ma trận chuẩn 1',
    description: 'Bộ đề thi tổng hợp bao phủ toàn diện 10 chương với tỷ lệ câu hỏi cân đối hoàn hảo, phân bổ từ mức độ Thông hiểu đến Vận dụng cao chuẩn kỳ thi chính thức.',
    questionIds: [
      11, 12, 13, 14, 51, 52, 53, 54, 57, 58, 59, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71,
      73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 101,
      36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
    ],
  },
  {
    id: 'de_17_ma_tran_chuan_02',
    title: 'Đề 17: Đề Thi Thử Toàn Diện Ma Trận Chuẩn ĐHQGHN Số 02',
    subtitle: '50 câu thực chiến tổng hợp rèn luyện tư duy định lượng',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Ma trận chuẩn 2',
    description: 'Bộ đề thi thử số 2 với các câu hỏi đối xứng, rèn luyện kỹ năng phân bổ thời gian và giải quyết trọn vẹn 50 câu hỏi trong 75 phút không mệt mỏi.',
    questionIds: [
      102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
      121, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 151, 152,
      86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
    ],
  },
  {
    id: 'de_18_toc_do_phan_xa',
    title: 'Đề 18: Luyện Tốc Độ Phản Xạ 35 Câu Cấp Tốc (50 Phút)',
    subtitle: '35 câu then chốt rèn tốc độ xử lý nhanh và độ chính xác',
    timeMinutes: 50,
    questionCount: 35,
    mcqCount: 25,
    fillCount: 10,
    badge: 'Cấp tốc 50 phút',
    description: 'Dành riêng cho học sinh muốn rèn luyện kỹ năng giải nhanh, bấm máy tính CASIO chuẩn xác và tránh bẫy đề thi trong áp lực thời gian cao.',
    questionIds: [
      153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
      171, 173, 174, 175, 176, 177, 178,
      136, 137, 138, 139, 140, 141, 142, 143, 144, 145
    ],
  },
  {
    id: 'de_19_chien_luoc_90_plus',
    title: 'Đề 19: Đột Phá Chiến Lược Chinh Phục Điểm 90+',
    subtitle: '50 câu mức độ Vận dụng & Vận dụng cao phân loại thí sinh giỏi',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Mục tiêu 90+',
    description: 'Bộ đề thi thách thức tư duy logic, phân hóa điểm cao dành cho thí sinh target 90+ để xét tuyển các trường đại học top 1 (Bách Khoa, Kinh Tế Quốc Dân, ĐHQGHN).',
    questionIds: [
      201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
      221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 401,
      235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249
    ],
  },
  {
    id: 'de_20_ve_dich_thu_khoa',
    title: 'Đề 20: Đề Tổng Ôn Về Đích - Đỉnh Cao Phân Loại Thủ Khoa 100+',
    subtitle: '50 câu phân loại đỉnh cao hội tụ các bài toán tinh hoa HSA',
    timeMinutes: 75,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Về đích 100+',
    description: 'Bộ đề thi về đích hoàn hảo với đầy đủ các bài toán cực trị đa biến, xác suất Bayes nhiều tầng, mô hình không gian Oxyz và suy luận phản biện phức tạp nhất.',
    questionIds: [
      251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270,
      271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 441,
      285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299
    ],
  },
].map((s) => ({ ...s, track: 'HSA' as const }));

// =========================================================================
// BỘ ĐỀ THI TỐT NGHIỆP THPT QUỐC GIA (GDPT 2018)
// LƯỢC BỎ HOÀN TOÀN THAM SỐ M - TẬP TRUNG TOÁN THỰC TẾ & MÔ HÌNH HÓA ĐỜI SỐNG
// =========================================================================
export const THPTQG_EXAM_SETS: ExamSet[] = [
  {
    id: 'thptqg_01_chuan',
    track: 'THPTQG',
    title: `Đề 01: Chuẩn Cấu Trúc Minh Họa THPTQG ${TARGET_YEAR}`,
    subtitle: '50 câu chuẩn GDPT 2018 (Không tham số m, trọng tâm Toán thực tế)',
    timeMinutes: 90,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Chuẩn GDPT 2018',
    description: 'Bám sát định dạng đề thi Tốt nghiệp THPT mới của Bộ GD&ĐT: Loại bỏ hoàn toàn các bài toán tìm tham số m trừu tượng; tích hợp 20+ bài toán thực tế, tối ưu kinh tế, tích phân chuyển động và thống kê ghép nhóm.',
    questionIds: [
      24, 28, 29, 30, 31, 32, 68, 69, 74, 79, 80, 101, 111, 117, 120, 1, 2, 3, 6, 7,
      8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25,
      42, 46, 47, 48, 96, 97, 137, 140, 36, 37, 38, 39, 40, 41, 43
    ],
  },
  {
    id: 'thptqg_02_toan_thuc_te',
    track: 'THPTQG',
    title: 'Đề 02: Đại Chiến Toán Thực Tế & Mô Hình Hóa Đời Sống',
    subtitle: '50 câu thực chiến 100% ứng dụng đời sống, kinh tế, y học & kỹ thuật',
    timeMinutes: 90,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: '100% Toán Thực Tế',
    description: 'Chuyên đề đột phá dành riêng cho học sinh muốn làm chủ toàn bộ các câu hỏi mô hình hóa thực tế: chi phí sản xuất, lãi kép, động đất Richter, cáp treo, trạm radar và phân tích số liệu y khoa.',
    questionIds: [
      123, 126, 128, 129, 130, 131, 132, 152, 178, 179, 180, 181, 182, 204, 211, 218, 220, 228, 236, 237,
      238, 246, 249, 260, 313, 327, 338, 342, 516, 518, 520, 522, 524, 526, 528,
      141, 142, 145, 147, 149, 150, 192, 197, 199, 200, 203, 206, 240, 250, 262
    ],
  },
  {
    id: 'thptqg_03_xac_suat_thong_ke',
    track: 'THPTQG',
    title: 'Đề 03: Đột Phá Xác Suất Bayes & Thống Kê Ghép Nhóm',
    subtitle: '50 câu chuyên sâu xác suất có điều kiện, Bayes & số liệu ghép nhóm',
    timeMinutes: 90,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Xác suất & Thống kê',
    description: 'Đào sâu các nội dung trọng tâm mới của chương trình 2018: công thức xác suất toàn phần, công thức Bayes, trung vị, tứ phân vị, mốt và quy hoạch tuyến tính hai ẩn.',
    questionIds: [
      21, 25, 26, 27, 28, 29, 30, 32, 65, 67, 68, 69, 76, 78, 79, 120, 125, 126, 127, 128,
      129, 130, 131, 132, 152, 170, 171, 175, 176, 177, 178, 179, 180, 181, 204,
      42, 43, 46, 47, 48, 49, 93, 95, 96, 137, 142, 143, 145, 147, 148
    ],
  },
  {
    id: 'thptqg_04_oxyz_khong_gian',
    track: 'THPTQG',
    title: 'Đề 04: Mô Hình Hóa Hình Học Không Gian & Tọa Độ Oxyz',
    subtitle: '50 câu hình học không gian, góc, khoảng cách & tọa độ hóa thực tế',
    timeMinutes: 90,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Hình học & Oxyz',
    description: 'Tổng hợp các bài toán hình học thực tế: mái che parabol, bể chứa tròn xoay, hệ thống vệ tinh GPS, trạm thu phát tín hiệu và khoảng cách an toàn hàng không.',
    questionIds: [
      11, 12, 13, 14, 15, 16, 17, 18, 19, 31, 33, 34, 59, 60, 61, 62, 63, 64, 73, 74,
      75, 84, 85, 111, 112, 113, 114, 115, 116, 117, 118, 119, 134, 135, 161,
      39, 40, 41, 50, 90, 91, 92, 140, 141, 146, 190, 191, 196, 213, 239
    ],
  },
  {
    id: 'thptqg_05_tong_hop',
    track: 'THPTQG',
    title: `Đề 05: Thực Chiến Tổng Hợp Phân Hóa THPTQG ${TARGET_YEAR}`,
    subtitle: '50 câu toàn diện rèn luyện tư duy phản xạ không tham số m',
    timeMinutes: 90,
    questionCount: 50,
    mcqCount: 35,
    fillCount: 15,
    badge: 'Thực chiến 9+',
    description: 'Đề thi rèn luyện phản xạ nhanh với các dạng bài phân hóa năng lực tư duy, ứng dụng đạo hàm, tích phân, số phức/lượng giác và đại số thực tiễn.',
    questionIds: [
      26, 27, 33, 34, 35, 52, 54, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 70, 71,
      73, 75, 76, 77, 78, 123, 126, 128, 129, 130, 131, 132, 152, 178, 179,
      44, 45, 49, 50, 86, 88, 89, 90, 91, 92, 141, 142, 145, 147, 149
    ],
  },
  {
    id: 'thptqg_06_cap_toc',
    track: 'THPTQG',
    title: 'Đề 06: Luyện Nhanh Trọng Điểm Toán Thực Tế (25 Câu / 40 Phút)',
    subtitle: '25 câu then chốt làm nhanh trong 40 phút',
    timeMinutes: 40,
    questionCount: 25,
    mcqCount: 18,
    fillCount: 7,
    badge: 'Cấp tốc 40 phút',
    description: 'Dành cho học sinh muốn kiểm tra nhanh kiến thức Toán thực tế và tư duy định lượng trọng tâm trước giờ thi.',
    questionIds: [
      24, 28, 29, 30, 31, 32, 68, 69, 74, 79, 80, 101, 111, 117, 120, 123, 126, 128,
      42, 46, 47, 48, 96, 97, 137
    ],
  },
  // =========================================================================
  // NHÓM ĐỀ THI GỐC CHÍNH THỨC & KHẢO SÁT CHẤT LƯỢNG CÁC SỞ GD&ĐT (2025 - 2026)
  // BÊ NGUYÊN BẢN ĐỀ THI TỪ CÁC SỞ ĐỂ LÀM BÀI TRỰC TIẾP
  // =========================================================================
  {
    id: 'thptqg_so_hanoi_2025_2026',
    track: 'THPTQG',
    title: 'Đề 07: Khảo Sát Tốt Nghiệp THPT - Sở GD&ĐT Hà Nội 2025 - 2026',
    subtitle: '18 câu chuẩn ma trận đề chính thức Sở GD&ĐT Hà Nội (12 trắc nghiệm + 6 điền số)',
    timeMinutes: 60,
    questionCount: 18,
    mcqCount: 12,
    fillCount: 6,
    badge: 'Sở GD&ĐT Hà Nội',
    description: 'Đề khảo sát chất lượng chính thức môn Toán 12 của Sở GD&ĐT Hà Nội: Tích hợp đầy đủ các bài toán thực tế vay vốn ngân hàng lãi kép, cửa vòm parabol, tối ưu kho lạnh trái cây, radar không gian Oxyz và khoảng cách an toàn máy bay.',
    questionIds: [556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573],
  },
  {
    id: 'thptqg_so_namdinh_2025_2026',
    track: 'THPTQG',
    title: 'Đề 08: Thi Thử Tốt Nghiệp THPT - Sở GD&ĐT Nam Định 2025 - 2026',
    subtitle: '18 câu phân hóa sâu chuẩn kỳ thi thử chính thức Sở GD&ĐT Nam Định',
    timeMinutes: 60,
    questionCount: 18,
    mcqCount: 12,
    fillCount: 6,
    badge: 'Sở GD&ĐT Nam Định',
    description: 'Đề thi thử tốt nghiệp THPT chính thức của Sở GD&ĐT Nam Định: Phân hóa sâu với bài toán hộp gỗ tối ưu vật liệu, ba parabol diện tích bằng nhau, cabin cáp treo Oxyz, mạng lưới logistics và xác suất Bayes kiểm định lỗi.',
    questionIds: [574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591],
  },
  {
    id: 'thptqg_so_nghean_2025_2026',
    track: 'THPTQG',
    title: 'Đề 09: Thi Thử Tốt Nghiệp THPT - Sở GD&ĐT Nghệ An 2025 - 2026',
    subtitle: '18 câu thực chiến phân loại học sinh giỏi Sở GD&ĐT Nghệ An',
    timeMinutes: 60,
    questionCount: 18,
    mcqCount: 12,
    fillCount: 6,
    badge: 'Sở GD&ĐT Nghệ An',
    description: 'Đề khảo sát chất lượng Toán 12 của Sở GD&ĐT Nghệ An: Nổi bật với bài toán quy hoạch tuyến tính thuê xe chở 500 người và 29 tấn hàng, mô hình radar quân sự phát hiện drone và xác suất Bayes xét nghiệm cúm A.',
    questionIds: [592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609],
  },
  {
    id: 'thptqg_so_haiphong_2025_2026',
    track: 'THPTQG',
    title: 'Đề 10: Khảo Sát Chất Lượng Toán 12 - Sở GD&ĐT Hải Phòng 2025 - 2026',
    subtitle: '18 câu chuẩn GDPT 2018 liên trường THPT TP. Hải Phòng',
    timeMinutes: 60,
    questionCount: 18,
    mcqCount: 12,
    fillCount: 6,
    badge: 'Sở GD&ĐT Hải Phòng',
    description: 'Đề khảo sát chất lượng liên trường THPT TP Hải Phòng: Đặc sắc với bài toán tối ưu thuế phụ thu và lợi nhuận doanh nghiệp độc quyền, tích lũy lương mua ô tô, khoảng cách 2 flycam trong Oxyz và mức cường độ âm logarit.',
    questionIds: [610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627],
  },
  {
    id: 'thptqg_nguyen_khuyen_tphcm_2026',
    track: 'THPTQG',
    title: 'Đề 11: Chuẩn GDPT 2018 - THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026',
    subtitle: '18 câu tinh hoa định kỳ Toán 12 tháng 10/2026 TP.HCM',
    timeMinutes: 60,
    questionCount: 18,
    mcqCount: 12,
    fillCount: 6,
    badge: 'TP. Hồ Chí Minh',
    description: 'Đề kiểm tra định kỳ tinh hoa chuẩn GDPT 2018 từ trường THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM: Hệ thống định vị GPS 4 vệ tinh, bài toán hai con kiến bò trong căn phòng hộp chữ nhật, tối ưu hóa nguyên liệu sản xuất giấy và cực trị hình học tiếp tuyến cung tròn.',
    questionIds: [628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645],
  },
];

export const ALL_EXAM_SETS: ExamSet[] = [
  ...HSA_EXAM_SETS,
  ...THPTQG_EXAM_SETS,
];

