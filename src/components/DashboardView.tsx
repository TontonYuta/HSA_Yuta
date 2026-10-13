import React, { useMemo } from 'react';
import {
  Sparkles,
  BookOpen,
  CheckSquare,
  Search,
  Trophy,
  Target,
  Clock,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  FileCheck2,
  Calendar,
  Layers,
  Edit3,
  Award,
  BarChart3,
  GraduationCap,
  RotateCcw,
} from 'lucide-react';
import { CHAPTERS_METADATA, HSA_EXAM_SETS, HSA_QUESTIONS_DATABASE } from '../data/topics/index';

export interface ExamHistoryItem {
  id: string;
  examSetId: string;
  examSetTitle: string;
  studentName: string;
  completedAt: string;
  score: number;
  maxScore: number;
  mcqScore: number;
  mcqTotal: number;
  fillScore: number;
  fillTotal: number;
  timeSpentSeconds: number;
  percentage: number;
}

interface DashboardViewProps {
  studentName: string;
  studentSchool?: string;
  onEditStudentProfile: () => void;
  onStartExamMode: () => void;
  onStartSpecificExam: (examSetId: string) => void;
  onPracticeMode: () => void;
  onSelectChapter: (chapterId: string) => void;
  onQuestionBankMode: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  studentName,
  studentSchool,
  onEditStudentProfile,
  onStartExamMode,
  onStartSpecificExam,
  onPracticeMode,
  onSelectChapter,
  onQuestionBankMode,
}) => {
  // Read exam history from localStorage
  const examHistory: ExamHistoryItem[] = useMemo(() => {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem('hsa_exam_history');
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, []);

  // Compute analytics
  const completedExamsCount = examHistory.length;
  const distinctExamSetsCount = useMemo(() => {
    const set = new Set(examHistory.map((item) => item.examSetId));
    return set.size;
  }, [examHistory]);

  const highestScore = useMemo(() => {
    if (examHistory.length === 0) return null;
    return Math.max(...examHistory.map((item) => item.score));
  }, [examHistory]);

  const avgScore = useMemo(() => {
    if (examHistory.length === 0) return null;
    const total = examHistory.reduce((sum, item) => sum + item.score, 0);
    return total / examHistory.length;
  }, [examHistory]);

  // Questions count map per chapter
  const chapterQuestionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of HSA_QUESTIONS_DATABASE) {
      if (q.chapterId) {
        counts[q.chapterId] = (counts[q.chapterId] || 0) + 1;
      }
    }
    return counts;
  }, []);

  const formatDuration = (seconds: number) => {
    if (!seconds || seconds <= 0) return '0 phút';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins === 0) return `${secs} giây`;
    if (secs === 0) return `${mins} phút`;
    return `${mins}p ${secs}s`;
  };

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'Gần đây';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-16 animate-fade-in font-sans text-slate-900 dark:text-zinc-100 select-none">
      {/* 1. Welcome & Student Profile Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-transparent dark:from-sky-950/40 dark:via-zinc-900/50 dark:to-transparent border border-sky-200/60 dark:border-sky-900/40 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-[11px] font-bold uppercase tracking-wider border border-sky-200 dark:border-sky-800">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Bảng Điều Khiển Học Tập HSA</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Xin chào, {studentName || 'Học sinh HSA'} 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 max-w-xl">
              {studentSchool ? (
                <span>Trường: <strong className="text-slate-800 dark:text-zinc-200">{studentSchool}</strong> · </span>
              ) : null}
              Mục tiêu bứt phá điểm số bài thi Đánh Giá Năng Lực ĐHQGHN (Định Lượng & Toán Học).
            </p>
          </div>

          <button
            type="button"
            onClick={onEditStudentProfile}
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-xs font-semibold text-slate-700 dark:text-zinc-300 transition shadow-xs cursor-pointer"
            title="Đổi tên và trường học"
          >
            <Edit3 className="w-3.5 h-3.5 text-sky-500" />
            <span>Sửa hồ sơ</span>
          </button>
        </div>
      </div>

      {/* 2. Key Metrics Summary Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Metric 1: Đề thi đã làm */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-zinc-400">Đề thi đã luyện</span>
            <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <CheckSquare className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-zinc-100">
              {distinctExamSetsCount} <span className="text-xs font-normal text-slate-400">/ 8 đề</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-zinc-500 mt-1 flex items-center gap-1">
              <span>{completedExamsCount} lượt nộp bài</span>
            </div>
          </div>
        </div>

        {/* Metric 2: Điểm cao nhất */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-zinc-400">Điểm cao nhất</span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Trophy className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-zinc-100">
              {highestScore !== null ? (
                <span>{highestScore} <span className="text-xs font-normal text-slate-400">/ 50</span></span>
              ) : (
                <span className="text-slate-400 dark:text-zinc-500 text-lg">Chưa có</span>
              )}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-zinc-500 mt-1">
              {highestScore !== null ? `${Math.round((highestScore / 50) * 100)}% độ chính xác` : 'Cần hoàn thành 1 đề'}
            </div>
          </div>
        </div>

        {/* Metric 3: Điểm trung bình */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-zinc-400">Điểm trung bình</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-zinc-100">
              {avgScore !== null ? (
                <span>{avgScore.toFixed(1)} <span className="text-xs font-normal text-slate-400">/ 50</span></span>
              ) : (
                <span className="text-slate-400 dark:text-zinc-500 text-lg">Chưa có</span>
              )}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-zinc-500 mt-1">
              {avgScore !== null ? 'Trung bình tất cả lần thi' : 'Chưa có bài nộp'}
            </div>
          </div>
        </div>

        {/* Metric 4: Ngân hàng câu hỏi */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-zinc-400">Hệ thống câu hỏi</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-zinc-100">
              515 <span className="text-xs font-normal text-slate-400">câu</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-zinc-500 mt-1">
              10 chương · 30 chuyên đề
            </div>
          </div>
        </div>
      </div>

      {/* 3. Primary Action Gateways (3 Hero Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Action 1: Thi Thử 75 Phút */}
        <div className="group rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-5 shadow-xs hover:border-sky-400/60 dark:hover:border-sky-500/40 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                8 BỘ ĐỀ
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">
                Thi Thử 75 Phút
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Mô phỏng 100% định dạng ĐHQGHN với 50 câu (35 trắc nghiệm + 15 điền số), bấm giờ thực chiến.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onStartExamMode}
            className="mt-4 w-full py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer"
          >
            <span>Vào phòng thi thử</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Action 2: Luyện 30 Chuyên Đề */}
        <div className="group rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-5 shadow-xs hover:border-indigo-400/60 dark:hover:border-indigo-500/40 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                30 DẠNG
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                Luyện 30 Chuyên Đề
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Rèn luyện theo từng dạng toán cụ thể. Có đáp án tức thì, gợi ý suy luận Socratic và lời giải từng bước.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onPracticeMode}
            className="mt-4 w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer"
          >
            <span>Luyện theo chuyên đề</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Action 3: Ngân Hàng Câu Hỏi */}
        <div className="group rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-5 shadow-xs hover:border-emerald-400/60 dark:hover:border-emerald-500/40 transition-all flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                TRA CỨU
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                Ngân Hàng Câu Hỏi
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Duyệt toàn bộ 515 câu hỏi có phân loại mức độ Nhận biết, Thông hiểu, Vận dụng và Vận dụng cao.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onQuestionBankMode}
            className="mt-4 w-full py-2.5 px-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-800 dark:text-zinc-200 font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer"
          >
            <span>Mở ngân hàng 515 câu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4. Recent Exam Submissions History */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
              Lịch Sử Thi Thử Gần Nhất
            </h2>
          </div>
          {examHistory.length > 0 && (
            <span className="text-xs text-slate-500 dark:text-zinc-400">
              {examHistory.length} bài thi đã hoàn thành
            </span>
          )}
        </div>

        {examHistory.length === 0 ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-zinc-800 text-sky-500 dark:text-sky-400 flex items-center justify-center mx-auto">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800 dark:text-zinc-200">
                Chưa có lịch sử làm bài thi thử
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-md mx-auto">
                Hãy bắt đầu bấm giờ làm bài thi thử 75 phút để ghi nhận điểm số, phân tích điểm mạnh - điểm yếu và đo lường tiến độ học tập.
              </p>
            </div>
            <button
              type="button"
              onClick={onStartExamMode}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-xs transition cursor-pointer"
            >
              <span>Làm bài thi thử ngay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="space-y-2.5">
            {examHistory.slice(0, 5).map((item) => {
              const isHighScore = item.score >= 40;
              const isMediumScore = item.score >= 25 && item.score < 40;
              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 rounded-xl border border-slate-100 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-950/40 hover:bg-slate-50 dark:hover:bg-zinc-800/60 transition gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-zinc-100">
                        {item.examSetTitle}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                          isHighScore
                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                            : isMediumScore
                            ? 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300'
                            : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                        }`}
                      >
                        {item.score} / {item.maxScore || 50} điểm ({item.percentage}%)
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 dark:text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(item.completedAt)}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDuration(item.timeSpentSeconds)}
                      </span>
                      <span>·</span>
                      <span>TN: {item.mcqScore}/{item.mcqTotal || 35}</span>
                      <span>·</span>
                      <span>Điền số: {item.fillScore}/{item.fillTotal || 15}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onStartSpecificExam(item.examSetId)}
                    className="self-end sm:self-center px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-[11px] font-semibold text-slate-700 dark:text-zinc-300 transition flex items-center gap-1 cursor-pointer shrink-0 shadow-xs"
                    title="Làm lại bộ đề này"
                  >
                    <RotateCcw className="w-3 h-3 text-sky-500" />
                    <span>Làm lại đề này</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. 10-Chapter Curriculum Roadmap & Quick Practice Links */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
                Lộ Trình 10 Chương Toán Trọng Tâm HSA
              </h2>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Bấm vào từng chương để mở danh sách chuyên đề và luyện tập ngay
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {CHAPTERS_METADATA.map((chapter, idx) => {
            const qCount = chapterQuestionCounts[chapter.id] || 0;
            return (
              <div
                key={chapter.id}
                className="p-3.5 rounded-xl border border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-950/40 hover:bg-white dark:hover:bg-zinc-850 hover:border-slate-200 dark:hover:border-zinc-700 transition flex items-center justify-between gap-3 group"
              >
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 shrink-0">
                      Ch.{idx + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-zinc-100 truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">
                      {chapter.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                    {chapter.topics.length} chuyên đề · {qCount} câu hỏi phân hóa
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectChapter(chapter.id)}
                  className="px-2.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500 text-sky-600 dark:text-sky-400 hover:text-white text-xs font-semibold transition flex items-center gap-1 shrink-0 cursor-pointer"
                  title={`Luyện tập ${chapter.name}`}
                >
                  <span>Luyện ngay</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. HSA Math Exam Structure Info Card */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 border border-slate-200 dark:border-zinc-800 p-4 sm:p-5 text-xs text-slate-600 dark:text-zinc-400 transition-colors">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="font-bold text-slate-800 dark:text-zinc-200 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-sky-500" />
              Cấu trúc bài thi Toán HSA ĐHQGHN (Tư duy định lượng):
            </span>
            <p className="text-[11px] leading-relaxed">
              50 câu hỏi / 75 phút làm bài (gồm 35 câu trắc nghiệm 4 lựa chọn + 15 câu điền đáp số ngắn). Phân hóa 4 cấp độ: Nhận biết (20%), Thông hiểu (40%), Vận dụng (30%), Vận dụng cao (10%).
            </p>
          </div>
          <button
            type="button"
            onClick={onStartExamMode}
            className="shrink-0 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition cursor-pointer shadow-xs flex items-center gap-1"
          >
            <span>Bắt đầu thi thử</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
