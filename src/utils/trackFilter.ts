import { Question, ExamSet, ExamTrack, ChapterInfo } from '../types/exam';
import { getTargetExamYear } from './timeUtils';
import { appConfig } from '../config/appConfig';

const TARGET_YEAR = getTargetExamYear();

export type { ExamTrack };

/**
 * Kiểm tra câu hỏi có chứa tham số m hay không.
 * Theo định hướng kỳ thi tốt nghiệp THPT mới từ 2025 (GDPT 2018), các bài toán
 * hàn lâm tìm tham số m để hàm số đơn điệu, cực trị, max/min... được lược bỏ
 * để nhường chỗ cho các câu hỏi ứng dụng thực tế và tư duy định lượng đời sống.
 */
export function isParametricMQuestion(q: Question): boolean {
  if (q.hasParametricM !== undefined) {
    return q.hasParametricM;
  }

  const content = q.content || '';
  const solution = q.detailedSolution || '';
  const fullText = `${content} ${solution}`;

  // Patterns indicating parametric m questions
  const mPatterns = [
    /tham\s+số\s*\$?m\$?/i,
    /giá\s+trị(?:\s+thực|\s+nguyên)?\s+của\s*\$?m\$?/i,
    /tất\s+cả\s+các\s+giá\s+trị\s+của\s*\$?m\$?/i,
    /tập\s+hợp\s+tất\s+cả\s+các\s+giá\s+trị\s+của\s*\$?m\$?/i,
    /tìm\s*(?:tất\s+cả\s+)?(?:các\s+)?(?:giá\s+trị\s+)?(?:thực\s+|nguyên\s+)?của\s*\$?m\$?\b/i,
    /có\s+bao\s+nhiêu\s+giá\s+trị\s+nguyên\s+của\s*\$?m\$?/i,
    /với\s*\$?m\$?\s*là\s+tham\s+số/i,
    /chứa\s+tham\s+số\s*\$?m\$?/i,
    /\bm\s*\\in\s*\[/i,
    /\bm\s*\\in\s*\(/i,
    /\bm\s*\\in\s*\\mathbb\{R\}/i,
    /\bm\s*\\in\s*\\mathbb\{Z\}/i,
  ];

  // Specific check for parametric m topics
  const isMTopic = [
    'don_dieu_tham_so_m',
    'cuc_tri_tham_so_m',
    'max_min_tham_so_m',
  ].includes(q.topicId);

  if (isMTopic) {
    for (const pat of mPatterns) {
      if (pat.test(fullText)) return true;
    }
    // Also if question content itself asks for m
    if (/\b[m]\b/.test(content) && /tìm|giá trị|nguyên|thực/i.test(content)) {
      return true;
    }
  }

  for (const pat of mPatterns) {
    if (pat.test(content)) return true;
  }

  return false;
}

/**
 * Kiểm tra câu hỏi có thuộc nhóm Toán Thực Tế / Ứng dụng đời sống hay không.
 */
export function isPracticalMathQuestion(q: Question): boolean {
  if (q.isPracticalMath !== undefined) {
    return q.isPracticalMath;
  }

  if (q.chapterId === 'chuong_10_toan_thuc_te_toi_uu' || q.chapterId === 'ch_03_nang_cao') {
    return true;
  }

  const practicalTopics = [
    'toi_uu_kinh_te_va_doanh_thu',
    'toi_uu_hinh_hoc_va_vat_lieu',
    'toan_thuc_te_thptqg_mo_hinh_hoa',
    'ung_dung_thuc_te_mu_logarit',
    'chuyen_dong_tich_phan_thuc_te',
    'ung_dung_tich_phan_dien_tich_the_tich',
    'mo_hinh_oxyz_thuc_te',
    'quy_hoach_tuyen_tinh',
    'thong_ke_ghep_nhom',
    'xac_suat_bayes_thuc_te',
    'dao_dong_luong_giac_thuc_te',
    'tp_07_thuc_te',
  ];

  if (practicalTopics.includes(q.topicId)) {
    return true;
  }

  const text = `${q.content} ${q.topicName || ''}`.toLowerCase();
  const practicalRegex =
    /thực tế|kinh tế|chi phí|lợi nhuận|doanh thu|vận tốc|quãng đường|gia tốc|vi khuẩn|nhiễm khuẩn|phóng xạ|rada|radar|máy bay|bể nước|bể bơi|hồ bơi|đo đạc|người ta|bác |chú |kỹ sư|công ty|nhà máy|doanh nghiệp|lãi suất|tiền gửi|thống kê|ghép nhóm|trung vị|tứ phân vị|tần số|xét nghiệm|bệnh nhân|hải đăng|cột cờ|vòm cầu|sóng âm|decibel|nồng độ|liều lượng|dân số|động đất|richter|quang hợp|lưu lượng/;

  return practicalRegex.test(text);
}

/**
 * Lọc danh sách câu hỏi theo Track linh hoạt từ appConfig
 */
export function filterQuestionsByTrack(questions: Question[], track: ExamTrack): Question[] {
  if (track === 'STANDARD' || track === 'PHOTHONG') {
    return questions.filter((q) => q.track === track || q.track === 'BOTH' || (!q.track && q.difficulty !== 'Vận dụng cao'));
  }
  if (track === 'ADVANCED' || track === 'NANGCAO') {
    return questions.filter((q) => q.track === track || q.track === 'BOTH' || (!q.track && (q.difficulty === 'Vận dụng cao' || q.difficulty === 'Vận dụng')));
  }
  if (track === 'HSA') {
    return questions.map((q) => ({
      ...q,
      isPracticalMath: isPracticalMathQuestion(q),
      hasParametricM: isParametricMQuestion(q),
    }));
  }
  if (track === 'THPTQG') {
    return questions
      .filter((q) => !isParametricMQuestion(q))
      .map((q) => ({
        ...q,
        isPracticalMath: isPracticalMathQuestion(q),
        hasParametricM: false,
      }));
  }

  // Khớp trực tiếp nếu là mã track tùy biến khác
  const matched = questions.filter((q) => q.track === track || q.track === 'BOTH');
  return matched.length > 0 ? matched : questions;
}

/**
 * Lọc bộ đề thi theo Track linh hoạt
 */
export function filterExamSetsByTrack(examSets: ExamSet[], track: ExamTrack): ExamSet[] {
  return examSets.filter((s) => {
    if (s.track) return s.track === track;
    if (track === 'STANDARD') return s.id.startsWith('exam_template_01') || s.id.startsWith('exam_template_02') || s.id.startsWith('toan7_pt');
    if (track === 'ADVANCED') return s.id.startsWith('exam_template_03') || s.id.startsWith('exam_template_04') || s.id.startsWith('toan7_nc');
    if (track === 'PHOTHONG') return s.id.startsWith('toan7_pt');
    if (track === 'NANGCAO') return s.id.startsWith('toan7_nc');
    return track === 'THPTQG' ? s.id.startsWith('thptqg') : !s.id.startsWith('thptqg');
  });
}

/**
 * Cấu hình thông tin chi tiết từng chế độ
 */
export interface TrackMeta {
  id: ExamTrack;
  title: string;
  shortTitle: string;
  badge: string;
  subtitle: string;
  examDurationMinutes: number;
  questionCount: number;
  description: string;
  highlightText: string;
  badgeColor: string;
  activeColor: string;
}

export const TRACK_METADATA: Record<string, TrackMeta> = {
  STANDARD: {
    id: 'STANDARD',
    title: 'Khung Cơ Bản / Phổ Thông',
    shortTitle: 'Phổ Thông',
    badge: 'Chuẩn Kiến Thức',
    subtitle: 'Nắm chắc kiến thức cốt lõi, hoàn thành tốt các bài kiểm tra định kỳ',
    examDurationMinutes: 60,
    questionCount: 15,
    description: 'Hệ thống học tập và kiểm tra theo chuẩn chương trình, bám sát kiến thức nền tảng.',
    highlightText: 'Chuẩn kiến thức · Phân hóa từ Nhận biết đến Vận dụng vừa sức',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800',
    activeColor: 'from-sky-600 to-blue-600 text-white shadow-sky-500/25',
  },
  ADVANCED: {
    id: 'ADVANCED',
    title: 'Khung Nâng Cao / Bứt Phá Điểm 10',
    shortTitle: 'Nâng Cao',
    badge: 'Bứt Phá 9+ & HSG',
    subtitle: 'Chinh phục bài toán điểm 10, bồi dưỡng học sinh giỏi và thử thách tư duy sâu',
    examDurationMinutes: 90,
    questionCount: 20,
    description: 'Hệ thống bài tập và đề thi nâng cao dành cho học sinh target điểm 9+ và thi HSG.',
    highlightText: 'Bứt phá điểm 10 · Rèn luyện tư duy logic & giải bài toán chuyên',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
    activeColor: 'from-amber-600 to-rose-600 text-white shadow-amber-500/25',
  },
  PHOTHONG: {
    id: 'PHOTHONG',
    title: 'Toán 7 Phổ Thông (Chuẩn SGK GDPT 2018)',
    shortTitle: 'Toán 7 Phổ Thông',
    badge: 'Chuẩn GDPT 2018',
    subtitle: 'Nắm chắc kiến thức SGK Kết nối tri thức & Cánh diều, bứt phá điểm 8-9 trong các bài thi định kỳ',
    examDurationMinutes: 60,
    questionCount: 18,
    description:
      'Hệ thống học tập và kiểm tra môn Toán 7 theo chuẩn chương trình GDPT 2018. Bao phủ đầy đủ 10 chương trọng tâm.',
    highlightText: 'Chuẩn SGK 2018 · Phân hóa từ Nhận biết đến Vận dụng vừa sức',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800',
    activeColor: 'from-sky-600 to-blue-600 text-white shadow-sky-500/25',
  },
  NANGCAO: {
    id: 'NANGCAO',
    title: 'Toán 7 Nâng Cao (Bứt Phá 9+ & Học Sinh Giỏi)',
    shortTitle: 'Toán 7 Nâng Cao',
    badge: 'Bứt Phá 9+ & HSG',
    subtitle: 'Chinh phục bài toán điểm 10, bồi dưỡng học sinh giỏi cấp trường, quận/huyện và chuyên Toán',
    examDurationMinutes: 90,
    questionCount: 20,
    description:
      'Hệ thống bài tập và đề thi nâng cao dành cho học sinh target điểm 9+, thi HSG và ôn thi vào trường Chuyên.',
    highlightText: 'Bứt phá điểm 10 · Rèn luyện tư duy toán học logic & giải bài toán chuyên',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
    activeColor: 'from-amber-600 to-rose-600 text-white shadow-amber-500/25',
  },
  THPTQG: {
    id: 'THPTQG',
    title: `Tốt Nghiệp THPT Quốc Gia ${TARGET_YEAR} (GDPT 2018)`,
    shortTitle: `THPTQG ${TARGET_YEAR}`,
    badge: 'Chuẩn GDPT 2018',
    subtitle: `Đề thi bám sát định dạng Bộ GD&ĐT ${TARGET_YEAR}: Lược bỏ tham số m, bứt phá Toán Thực Tế`,
    examDurationMinutes: 90,
    questionCount: 50,
    description:
      `Hệ thống luyện thi Tốt nghiệp THPT Quốc gia ${TARGET_YEAR} theo chương trình mới GDPT 2018.`,
    highlightText: 'Đã loại bỏ tham số m · Tăng cường 100+ bài toán thực tế đời sống',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800',
    activeColor: 'from-rose-600 to-amber-600 text-white shadow-rose-500/25',
  },
  HSA: {
    id: 'HSA',
    title: `Đánh Giá Năng Lực ĐHQGHN (HSA ${TARGET_YEAR})`,
    shortTitle: `ĐGNL HSA ${TARGET_YEAR}`,
    badge: `Chuẩn HSA ${TARGET_YEAR}`,
    subtitle: `Toán học & Tư duy định lượng HSA ${TARGET_YEAR}: 50 câu trong 75 phút`,
    examDurationMinutes: 75,
    questionCount: 50,
    description:
      `Hệ thống luyện thi Đánh giá năng lực ĐHQGHN (HSA ${TARGET_YEAR}) môn Toán & Tư duy định lượng.`,
    highlightText: `Đầy đủ 50 câu · 20 bộ đề thực chiến HSA ${TARGET_YEAR}`,
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800',
    activeColor: 'from-sky-600 to-indigo-600 text-white shadow-sky-500/25',
  },
};

/**
 * Lấy metadata của track, ưu tiên đọc từ appConfig.tracks
 */
export function getTrackMeta(trackId: string): TrackMeta {
  const custom = appConfig.tracks.find((t) => t.id === trackId);
  if (custom) {
    return {
      id: custom.id,
      title: custom.name,
      shortTitle: custom.shortName,
      badge: custom.badge,
      subtitle: custom.subtitle,
      examDurationMinutes: custom.examDurationMinutes,
      questionCount: 15,
      description: custom.description,
      highlightText: custom.highlightText,
      badgeColor: custom.badgeColor,
      activeColor: custom.activeGradient,
    };
  }
  return TRACK_METADATA[trackId] || TRACK_METADATA['STANDARD'];
}

