import { ChapterInfo } from '../../types/exam';

/**
 * ============================================================================
 * DANH MỤC CHƯƠNG & CHUYÊN ĐỀ MẪU (TEMPLATE CHAPTERS METADATA)
 * ============================================================================
 * Bạn có thể tự do chỉnh sửa số lượng chương, tên chuyên đề, mô tả
 * và màu sắc để phù hợp với môn học và khối lớp mới của bạn.
 */

export const TEMPLATE_CHAPTERS_METADATA: ChapterInfo[] = [
  {
    id: 'ch_01_nen_tang',
    name: 'Chương 1: Kiến Thức Nền Tảng & Khái Niệm Cốt Lõi',
    shortName: 'Kiến Thức Cốt Lõi',
    description: 'Nắm vững các định nghĩa, tiên đề cơ bản và bảng công thức trọng tâm của môn học.',
    color: 'from-sky-500 to-blue-600',
    topics: [
      {
        id: 'tp_01_khai_niem',
        name: 'Khái niệm, định nghĩa và tính chất cơ bản',
        shortName: 'Khái niệm & Tính chất',
        chapterId: 'ch_01_nen_tang',
        description: 'Nhận biết các yếu tố cơ bản, quy tắc biến đổi và các mối liên hệ căn bản.',
      },
      {
        id: 'tp_02_cong_thuc',
        name: 'Hệ thống công thức và quy tắc tính toán',
        shortName: 'Công thức tính toán',
        chapterId: 'ch_01_nen_tang',
        description: 'Vận dụng chuẩn xác công thức vào các dạng bài tập nhận biết và thông hiểu.',
      },
      {
        id: 'tp_03_nhan_dang',
        name: 'Nhận dạng đồ thị, biểu đồ và sơ đồ tư duy',
        shortName: 'Nhận dạng đồ thị',
        chapterId: 'ch_01_nen_tang',
        description: 'Đọc và phân tích thông tin từ bảng số liệu, biểu đồ hoặc hình vẽ trực quan.',
      },
    ],
  },
  {
    id: 'ch_02_ky_nang',
    name: 'Chương 2: Phương Pháp Giải & Rèn Luyện Kỹ Năng',
    shortName: 'Phương Pháp Giải',
    description: 'Thành thạo các kỹ năng phân tích đề, lập luận logic và xử lý số liệu.',
    color: 'from-indigo-500 to-violet-600',
    topics: [
      {
        id: 'tp_04_bien_doi',
        name: 'Kỹ thuật biến đổi đại số & rút gọn biểu thức',
        shortName: 'Biến đổi & Rút gọn',
        chapterId: 'ch_02_ky_nang',
        description: 'Sử dụng các hằng đẳng thức, quy tắc hoán vị và phương pháp phân tích nhân tử.',
      },
      {
        id: 'tp_05_phuong_trinh',
        name: 'Giải phương trình, hệ phương trình & bất đẳng thức',
        shortName: 'Giải phương trình',
        chapterId: 'ch_02_ky_nang',
        description: 'Phương pháp đặt ẩn phụ, đánh giá bất đẳng thức và điều kiện xác định.',
      },
      {
        id: 'tp_06_mo_hinh',
        name: 'Mô hình hóa hình học & biểu diễn không gian',
        shortName: 'Mô hình hình học',
        chapterId: 'ch_02_ky_nang',
        description: 'Kỹ năng vẽ hình phụ, định lý diện tích, góc và véc-tơ trong hình học.',
      },
    ],
  },
  {
    id: 'ch_03_nang_cao',
    name: 'Chương 3: Ứng Dụng Thực Tiễn & Bứt Phá Nâng Cao',
    shortName: 'Ứng Dụng & Nâng Cao',
    description: 'Phát triển tư duy giải quyết vấn đề thực tiễn và bài toán phân loại điểm 9-10.',
    color: 'from-amber-500 to-rose-600',
    topics: [
      {
        id: 'tp_07_thuc_te',
        name: 'Bài toán ứng dụng thực tế & tối ưu hóa',
        shortName: 'Toán thực tế',
        chapterId: 'ch_03_nang_cao',
        description: 'Giải quyết các tình huống đời sống thực tiễn, kinh tế, đo đạc và thống kê.',
      },
      {
        id: 'tp_08_phan_loai',
        name: 'Bài toán tư duy phân loại cao & cực trị',
        shortName: 'Bứt phá điểm 10',
        chapterId: 'ch_03_nang_cao',
        description: 'Các bài toán bồi dưỡng học sinh giỏi, phương pháp phản chứng và Dirichlet.',
      },
    ],
  },
];
