import { Question, UserAnswer, ExamReport, TopicId } from '../types/exam';
import { CHAPTERS_METADATA, MICRO_TOPICS_METADATA } from '../data/topics/index';
import { TOAN7_CHAPTERS_METADATA, TOAN7_MICRO_TOPICS_METADATA } from '../data/toan7/index';
import { generateTamperProofHash } from './security';

// Color map per chapter
const CHAPTER_COLORS: Record<string, string> = {
  chuong_1_ham_so: '#10b981', // emerald
  chuong_2_mu_logarit: '#3b82f6', // blue
  chuong_3_nguyen_ham_tich_phan: '#f59e0b', // amber
  chuong_4_hinh_hoc_khong_gian: '#8b5cf6', // violet
  chuong_5_toa_do_oxyz: '#06b6d4', // sky/cyan
  chuong_6_toan_lop_10: '#14b8a6', // teal
  chuong_7_day_so_cap_so: '#6366f1', // indigo
  chuong_8_xac_suat_thong_ke: '#f43f5e', // rose
  chuong_9_luong_giac: '#ea580c', // orange
  chuong_10_toan_thuc_te_toi_uu: '#0284c7', // light blue

  // Grade 7 (Toán 7) Chapters
  toan7_c1_so_huu_ti: '#0284c7', // sky
  toan7_c2_so_thuc: '#0d9488', // teal
  toan7_c3_goc_song_song: '#8b5cf6', // violet
  toan7_c4_tam_giac_bang_nhau: '#6366f1', // indigo
  toan7_c5_thong_ke_bieu_do: '#f59e0b', // amber
  toan7_c6_ti_le_thuc: '#ea580c', // orange
  toan7_c7_bieu_thuc_da_thuc: '#10b981', // emerald
  toan7_c8_bien_co_xac_suat: '#f43f5e', // rose
  toan7_c9_quan_he_tam_giac: '#3b82f6', // blue
  toan7_c10_hinh_khoi_thuc_tien: '#059669', // green
};

// Comprehensive metadata dictionary covering all micro-topics + chapters
export const TOPIC_METADATA: Record<string, { name: string; shortName: string; color: string; description: string }> = (() => {
  const map: Record<string, { name: string; shortName: string; color: string; description: string }> = {};

  // Register High School chapters & topics
  for (const ch of CHAPTERS_METADATA) {
    map[ch.id] = {
      name: ch.name,
      shortName: ch.shortName,
      color: CHAPTER_COLORS[ch.id] || '#64748b',
      description: ch.description,
    };
  }

  for (const t of MICRO_TOPICS_METADATA) {
    map[t.id] = {
      name: t.name,
      shortName: t.shortName,
      color: CHAPTER_COLORS[t.chapterId] || '#64748b',
      description: t.description,
    };
  }

  // Register Grade 7 chapters & micro-topics
  for (const ch of TOAN7_CHAPTERS_METADATA) {
    map[ch.id] = {
      name: ch.name,
      shortName: ch.shortName,
      color: CHAPTER_COLORS[ch.id] || ch.color || '#64748b',
      description: ch.description,
    };
  }

  for (const t of TOAN7_MICRO_TOPICS_METADATA) {
    map[t.id] = {
      name: t.name,
      shortName: t.shortName,
      color: CHAPTER_COLORS[t.chapterId] || '#64748b',
      description: t.description,
    };
  }

  // Legacy topic IDs fallback
  const legacyFallback: Record<string, { name: string; shortName: string; color: string; description: string }> = {
    trigonometry: { name: 'Công thức & Phương trình lượng giác', shortName: 'Lượng giác', color: '#ea580c', description: 'Biến đổi lượng giác và phương trình' },
    functions_derivative: { name: 'Hàm số & Ứng dụng đạo hàm', shortName: 'Hàm số', color: '#10b981', description: 'Đơn điệu, cực trị, tiếp tuyến' },
    asymptotes: { name: 'Tiệm cận đứng, ngang & Tiệm cận xiên', shortName: 'Tiệm cận', color: '#10b981', description: 'Tiệm cận đồ thị hàm số' },
    exp_log: { name: 'Mũ & Logarit', shortName: 'Mũ & Logarit', color: '#3b82f6', description: 'Phương trình, BPT mũ logarit' },
    integral_calculus: { name: 'Nguyên hàm & Tích phân', shortName: 'Nguyên hàm - Tích phân', color: '#f59e0b', description: 'Đổi biến, từng phần, diện tích, thể tích' },
    spatial_geometry: { name: 'Hình học không gian cổ điển', shortName: 'Hình học không gian', color: '#8b5cf6', description: 'Góc, khoảng cách, đa diện' },
    analytic_geometry_oxyz: { name: 'Phương pháp tọa độ Oxyz', shortName: 'Tọa độ Oxyz', color: '#06b6d4', description: 'Mặt cầu, mặt phẳng, đường thẳng' },
    plane_geometry_oxy: { name: 'Toán Lớp 10 & Hình học Oxy', shortName: 'Toán Lớp 10', color: '#14b8a6', description: 'Venn, BPT 2 ẩn, tam giác, Elip' },
    sequences_progression: { name: 'Dãy số, Cấp số cộng & Cấp số nhân', shortName: 'Dãy số & Cấp số', color: '#6366f1', description: 'Cấp số cộng, cấp số nhân, giới hạn' },
    combinatorics_prob: { name: 'Xác suất & Công thức Bayes', shortName: 'Xác suất & Bayes', color: '#f43f5e', description: 'Xác suất cổ điển và Bayes' },
    statistics_grouped: { name: 'Thống kê mẫu số liệu ghép nhóm', shortName: 'Thống kê ghép nhóm', color: '#84cc16', description: 'Tứ phân vị, phương sai' },
    real_world_modeling: { name: 'Toán thực tế & Tối ưu hóa', shortName: 'Toán thực tế', color: '#0284c7', description: 'Tối ưu hóa kinh tế và hình học' },
  };

  for (const [k, v] of Object.entries(legacyFallback)) {
    if (!map[k]) map[k] = v;
  }

  return map;
})();

/**
 * Parses numeric answer string (handling decimals with dots/commas and fractions like "5/2")
 */
export function parseNumericAnswer(input: string): number {
  if (!input) return NaN;
  const cleaned = input.trim().replace(/\s+/g, '').replace(/,/g, '.');

  if (cleaned.includes('/')) {
    const parts = cleaned.split('/');
    if (parts.length === 2) {
      const num = parseFloat(parts[0]);
      const den = parseFloat(parts[1]);
      if (!isNaN(num) && !isNaN(den) && den !== 0) {
        return num / den;
      }
    }
  }

  return parseFloat(cleaned);
}

/**
 * Checks if user's answer matches question's correct answer
 */
export function checkAnswerCorrectness(question: Question, userAnswerValue: string): boolean {
  if (!userAnswerValue || !userAnswerValue.trim()) return false;

  if (question.type === 'mcq') {
    return userAnswerValue.trim().toUpperCase() === question.correctAnswer.trim().toUpperCase();
  }

  // Type is 'fill'
  const userCleaned = userAnswerValue.trim().replace(/\s+/g, '').replace(/,/g, '.');
  const correctCleaned = question.correctAnswer.trim().replace(/\s+/g, '').replace(/,/g, '.');

  if (userCleaned.toLowerCase() === correctCleaned.toLowerCase()) {
    return true;
  }

  if (question.acceptableAnswers && question.acceptableAnswers.length > 0) {
    for (const alt of question.acceptableAnswers) {
      const altCleaned = alt.trim().replace(/\s+/g, '').replace(/,/g, '.');
      if (userCleaned.toLowerCase() === altCleaned.toLowerCase()) {
        return true;
      }
    }
  }

  const userNum = parseNumericAnswer(userAnswerValue);
  const correctNum = parseNumericAnswer(question.correctAnswer);

  if (!isNaN(userNum) && !isNaN(correctNum)) {
    if (Math.abs(userNum - correctNum) <= 1e-4) {
      return true;
    }
  }

  if (!isNaN(userNum) && question.acceptableAnswers) {
    for (const alt of question.acceptableAnswers) {
      const altNum = parseNumericAnswer(alt);
      if (!isNaN(altNum) && Math.abs(userNum - altNum) <= 1e-4) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Generates comprehensive exam analytics report
 */
export function generateExamReport(
  questions: Question[],
  userAnswers: Record<number, UserAnswer>,
  studentName = 'Thí sinh HSA',
  studentEmail = '',
  totalTimeSpentSeconds = 0,
  examSetTitle = 'Đề Thi Chuẩn HSA',
  teacherEmail = '',
  tabSwitchCount = 0
): ExamReport {
  let totalScore = 0;
  let mcqScore = 0;
  let fillScore = 0;
  let mcqTotal = 0;
  let fillTotal = 0;

  const topicStats: Partial<Record<TopicId, { correct: number; total: number }>> = {};

  const detailedAnswers = questions.map((q) => {
    const userAns = userAnswers[q.id]?.value || '';
    const isCorrect = checkAnswerCorrectness(q, userAns);

    if (q.type === 'mcq') {
      mcqTotal += 1;
      if (isCorrect) {
        mcqScore += 1;
        totalScore += 1;
      }
    } else {
      fillTotal += 1;
      if (isCorrect) {
        fillScore += 1;
        totalScore += 1;
      }
    }

    if (!topicStats[q.topicId]) {
      topicStats[q.topicId] = { correct: 0, total: 0 };
    }
    topicStats[q.topicId]!.total += 1;
    if (isCorrect) {
      topicStats[q.topicId]!.correct += 1;
    }

    return {
      questionId: q.id,
      userAnswer: userAns,
      correctAnswer: q.correctAnswer,
      isCorrect,
      topicName: q.topicName,
      type: q.type,
    };
  });

  const topicBreakdown = (Object.keys(topicStats) as TopicId[]).map((topicId) => {
    const stats = topicStats[topicId] || { correct: 0, total: 0 };
    const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    return {
      topicId,
      topicName: TOPIC_METADATA[topicId]?.name || topicId,
      correctCount: stats.correct,
      totalCount: stats.total,
      percentage,
    };
  });

  // Sort by percentage ascending to find weakest
  const sortedTopics = [...topicBreakdown].sort((a, b) => a.percentage - b.percentage);
  const weakest = sortedTopics[0] || {
    topicId: 'trigonometry' as TopicId,
    topicName: 'Lượng giác & Phương trình lượng giác',
    percentage: 0,
  };

  const completedAt = new Date().toISOString();
  const integrityStatus: 'clean' | 'suspicious' | 'flagged' =
    tabSwitchCount === 0 ? 'clean' : tabSwitchCount <= 2 ? 'suspicious' : 'flagged';

  const integrityChecksum = generateTamperProofHash({
    studentName,
    examSetTitle,
    totalScore,
    maxScore: questions.length,
    tabSwitchCount,
    completedAt,
  });

  return {
    studentName,
    studentEmail,
    teacherEmail,
    examSetTitle,
    completedAt,
    totalTimeSpentSeconds,
    totalScore,
    maxScore: questions.length,
    mcqScore,
    mcqTotal,
    fillScore,
    fillTotal,
    topicBreakdown,
    weakestTopic: {
      topicId: weakest.topicId,
      topicName: weakest.topicName,
      percentage: weakest.percentage,
    },
    answers: detailedAnswers,
    tabSwitchCount,
    integrityStatus,
    integrityChecksum,
  };
}
