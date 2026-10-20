import { ExamSet } from '../../types/exam';

/**
 * ============================================================================
 * DANH SÁCH BỘ ĐỀ THI MẪU (STARTER EXAM SETS TEMPLATE)
 * ============================================================================
 * Bộ đề mẫu được phân bổ theo các Lộ trình (track):
 * - STANDARD (Phổ thông / Cơ bản)
 * - ADVANCED (Nâng cao / Chuyên sâu)
 */

export const TEMPLATE_EXAM_SETS: ExamSet[] = [
  // --- LỘ TRÌNH 1: STANDARD (Phổ thông / Cơ bản) ---
  {
    id: 'exam_template_01',
    title: 'Đề Thi Khảo Sát Năng Lực Đầu Kỳ',
    subtitle: 'Khảo sát năng lực tiếp thu kiến thức và tư duy cơ bản',
    description: 'Đánh giá toàn diện các kỹ năng cơ bản, nhận biết và thông hiểu kiến thức cốt lõi.',
    timeMinutes: 45,
    questionCount: 5,
    mcqCount: 4,
    fillCount: 1,
    badge: 'Khảo sát',
    track: 'STANDARD',
    questionIds: [1001, 1002, 1003, 1004, 1005],
  },
  {
    id: 'exam_template_02',
    title: 'Đề Kiểm Tra Định Kỳ Giữa Học Kỳ',
    subtitle: 'Đề kiểm tra giữa kỳ chuẩn cấu trúc phân hóa nhận thức',
    description: 'Đề thi chuẩn cấu trúc gồm các câu hỏi từ nhận biết, thông hiểu đến vận dụng thực tiễn.',
    timeMinutes: 60,
    questionCount: 5,
    mcqCount: 5,
    fillCount: 0,
    badge: 'Giữa kỳ',
    track: 'STANDARD',
    questionIds: [1001, 1003, 1005, 1006, 1007],
  },

  // --- LỘ TRÌNH 2: ADVANCED (Nâng cao / HSG) ---
  {
    id: 'exam_template_03',
    title: 'Đề Luyện Thi Bứt Phá Điểm 10 & HSG',
    subtitle: 'Chuyên đề bồi dưỡng phân loại cao và rèn luyện tư duy sâu',
    description: 'Tuyển tập các bài toán phân loại cao, chuỗi quy luật sai phân và bất đẳng thức cực trị.',
    timeMinutes: 90,
    questionCount: 4,
    mcqCount: 3,
    fillCount: 1,
    badge: 'Bứt phá 9+',
    track: 'ADVANCED',
    questionIds: [1005, 1008, 1009, 1010],
  },
  {
    id: 'exam_template_04',
    title: 'Đề Khảo Sát Bồi Dưỡng Học Sinh Giỏi Cấp Trường',
    subtitle: 'Đề thi chọn lọc đội tuyển HSG và thử thách học sinh xuất sắc',
    description: 'Bộ đề thi chọn lọc dành cho đội tuyển ôn thi học sinh giỏi và thử thách tư duy sâu.',
    timeMinutes: 90,
    questionCount: 5,
    mcqCount: 4,
    fillCount: 1,
    badge: 'Thi HSG',
    track: 'ADVANCED',
    questionIds: [1007, 1008, 1009, 1010, 1005],
  },
];
