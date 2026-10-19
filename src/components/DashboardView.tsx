import React, { useMemo } from 'react';
import {
  Sparkles,
  BookOpen,
  Search,
  Trophy,
  Target,
  Clock,
  ArrowRight,
  ChevronRight,
  FileCheck2,
  Calendar,
  Layers,
  Edit3,
  Award,
  BarChart3,
  GraduationCap,
  RotateCcw,
  Zap,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import { CHAPTERS_METADATA, HSA_EXAM_SETS, THPTQG_EXAM_SETS, HSA_QUESTIONS_DATABASE } from '../data/topics/index';
import { Question, ExamSet } from '../types/exam';
import { ExamTrack, TRACK_METADATA, isPracticalMathQuestion } from '../utils/trackFilter';

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
  tabSwitchCount?: number;
  integrityStatus?: 'clean' | 'suspicious' | 'flagged';
  integrityChecksum?: string;
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
  currentTrack?: ExamTrack;
  onSelectTrack?: (track: ExamTrack) => void;
  questions?: Question[];
  examSets?: ExamSet[];
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
  currentTrack = 'THPTQG',
  onSelectTrack,
  questions,
  examSets,
}) => {
  const isTHPT = currentTrack === 'THPTQG';
  const activeQuestions = questions || HSA_QUESTIONS_DATABASE;
  const activeExamSets = examSets || (isTHPT ? THPTQG_EXAM_SETS : HSA_EXAM_SETS);
  const trackMeta = TRACK_METADATA[(currentTrack as ExamTrack) || 'THPTQG'];
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

  // Questions count map per chapter (track-aware)
  const chapterQuestionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of activeQuestions) {
      if (q.chapterId) {
        counts[q.chapterId] = (counts[q.chapterId] || 0) + 1;
      }
    }
    return counts;
  }, [activeQuestions]);

  const practicalQuestionsCount = useMemo(() => {
    return activeQuestions.filter(isPracticalMathQuestion).length;
  }, [activeQuestions]);

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
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'Gần đây';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20 animate-fade-in font-sans text-slate-900 dark:text-zinc-100 select-none">
      {/* =================================================================== */}
      {/* TRACK SWITCHER HERO BANNER (THPTQG vs HSA)                          */}
      {/* =================================================================== */}
      <div className="rounded-3xl p-4 sm:p-5 border shadow-xs transition-all bg-white dark:bg-[#121217] border-slate-200/80 dark:border-zinc-800/80">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-black tracking-wider text-slate-500 dark:text-zinc-400">
              Mục Tiêu Luyện Thi:
            </span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-mono border ${trackMeta.badgeColor}`}>
              {trackMeta.badge}
            </span>
          </div>
          <span className="text-[11px] font-medium text-slate-500 dark:text-zinc-400 hidden sm:inline">
            Bấm chọn để chuyển đổi bộ đề, thời lượng làm bài & ngân hàng câu hỏi
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Track 1: THPT Quốc Gia (GDPT 2018) */}
          <button
            type="button"
            onClick={() => onSelectTrack && onSelectTrack('THPTQG')}
            className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden group ${
              isTHPT
                ? 'bg-gradient-to-br from-rose-500/10 via-amber-500/5 to-transparent border-rose-500/50 dark:border-rose-500/40 ring-2 ring-rose-500/20 shadow-xs'
                : 'bg-slate-50/60 dark:bg-zinc-900/40 border-slate-200/70 dark:border-zinc-800/70 hover:border-slate-300 dark:hover:border-zinc-700'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 transition-transform group-hover:scale-105 ${
                  isTHPT ? 'bg-gradient-to-br from-rose-600 to-amber-600 text-white shadow-xs' : 'bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                }`}>
                  🎓
                </div>
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                      Tốt Nghiệp THPT Quốc Gia
                    </h3>
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-200/60 dark:border-rose-800/60">
                      GDPT 2018
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-0.5 line-clamp-1">
                    Bỏ tham số m · Tăng cường 100+ bài toán thực tế đời sống
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-center">
                {isTHPT ? (
                  <span className="px-2.5 py-1 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Đang chọn</span>
                  </span>
                ) : (
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500 group-hover:text-slate-700 dark:group-hover:text-zinc-300">
                    Chuyển sang →
                  </span>
                )}
              </div>
            </div>
          </button>

          {/* Track 2: ĐGNL HSA (ĐHQGHN) */}
          <button
            type="button"
            onClick={() => onSelectTrack && onSelectTrack('HSA')}
            className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden group ${
              !isTHPT
                ? 'bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-transparent border-sky-500/50 dark:border-sky-500/40 ring-2 ring-sky-500/20 shadow-xs'
                : 'bg-slate-50/60 dark:bg-zinc-900/40 border-slate-200/70 dark:border-zinc-800/70 hover:border-slate-300 dark:hover:border-zinc-700'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 transition-transform group-hover:scale-105 ${
                  !isTHPT ? 'bg-gradient-to-br from-sky-600 to-indigo-600 text-white shadow-xs' : 'bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                }`}>
                  🏛️
                </div>
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                      Đánh Giá Năng Lực (HSA)
                    </h3>
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60">
                      ĐHQGHN
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-0.5 line-clamp-1">
                    Cấu trúc 50 câu (35 TN + 15 Điền số) trong 75 phút
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-center">
                {!isTHPT ? (
                  <span className="px-2.5 py-1 rounded-full bg-sky-600 text-white text-[10px] font-bold flex items-center gap-1 shadow-xs">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Đang chọn</span>
                  </span>
                ) : (
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500 group-hover:text-slate-700 dark:group-hover:text-zinc-300">
                    Chuyển sang →
                  </span>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* BENTO ROW 1: HERO CTA (2/3) + STATS RADAR (1/3)                     */}
      {/* =================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* HERO CARD (Spans 2 cols on lg) */}
        <div className={`lg:col-span-2 relative overflow-hidden rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all border ${
          isTHPT
            ? 'bg-gradient-to-br from-rose-500/[0.08] via-amber-500/[0.04] to-transparent dark:from-rose-950/40 dark:via-zinc-900/40 dark:to-transparent border-rose-200/70 dark:border-zinc-800/80'
            : 'bg-gradient-to-br from-sky-500/[0.08] via-indigo-500/[0.04] to-transparent dark:from-sky-950/40 dark:via-zinc-900/40 dark:to-transparent border-sky-200/70 dark:border-zinc-800/80'
        }`}>
          {/* Subtle glow decoration */}
          <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
            isTHPT ? 'bg-rose-500/10 dark:bg-rose-500/15' : 'bg-sky-500/10 dark:bg-sky-500/15'
          }`} />

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border shadow-xs ${
                isTHPT
                  ? 'bg-rose-100/80 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-200/80 dark:border-rose-800/70'
                  : 'bg-sky-100/80 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-200/80 dark:border-sky-800/70'
              }`}>
                <Sparkles className={`w-3.5 h-3.5 ${isTHPT ? 'text-rose-500' : 'text-sky-500'}`} />
                <span>{isTHPT ? 'Luyện Thi THPT Quốc Gia (GDPT 2018)' : 'Hệ Thống Luyện Thi HSA Yuta'}</span>
              </span>

              <button
                type="button"
                onClick={onEditStudentProfile}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-white/80 dark:hover:bg-zinc-800/80 border border-slate-200/60 dark:border-zinc-800 transition cursor-pointer"
              >
                <Edit3 className={`w-3 h-3 ${isTHPT ? 'text-rose-500' : 'text-sky-500'}`} />
                <span>{studentSchool || 'Chỉnh sửa hồ sơ'}</span>
              </button>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Chào {studentName ? studentName.split(' ').slice(-1)[0] : 'bạn'}, {isTHPT ? 'sẵn sàng bứt phá 9+ THPT Quốc Gia?' : 'sẵn sàng bứt phá hôm nay?'} 👋
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-2 max-w-xl leading-relaxed">
                {isTHPT ? (
                  <span>
                    Chương trình ôn thi chuẩn theo <strong>GDPT 2018</strong>: <em>Lược bỏ hoàn toàn câu hỏi chứa tham số m</em>, tập trung tối đa vào <strong>Toán thực tế</strong>, tối ưu kinh tế, tích phân chuyển động, xác suất Bayes và thống kê ghép nhóm.
                  </span>
                ) : (
                  <span>
                    Kho luyện thi chuẩn hóa cấu trúc <strong>Đánh Giá Năng Lực ĐHQGHN</strong> với 50 câu (35 trắc nghiệm + 15 điền số) bấm giờ 75 phút thực chiến.
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Hero Action Button & Pill Features */}
          <div className="pt-6 relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-200/50 dark:border-zinc-800/50 mt-5">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isTHPT ? 'text-rose-500' : 'text-sky-500'}`} />
                <span>{isTHPT ? '90 Phút THPTQG' : '75 Phút CBT'}</span>
              </div>
              <span className="text-slate-300 dark:text-zinc-700">·</span>
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500" />
                <span>{activeExamSets.length} Bộ Đề Thi</span>
              </div>
              <span className="text-slate-300 dark:text-zinc-700">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                <span>{isTHPT ? `${practicalQuestionsCount} Câu Thực Tế` : 'Chấm tức thì'}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onStartExamMode}
              className={`px-6 py-3 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer ${
                isTHPT
                  ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/20'
                  : 'bg-sky-600 hover:bg-sky-500 shadow-sky-600/20'
              }`}
            >
              <span>{isTHPT ? 'Vào phòng thi 90 phút' : 'Vào phòng thi 75 phút'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* STATS RADAR CARD (1 col) */}
        <div className="rounded-3xl bg-white dark:bg-[#121217] border border-slate-200/70 dark:border-zinc-800/80 p-6 flex flex-col justify-between shadow-xs transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800/80">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Trophy className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-zinc-100">Chỉ Số Năng Lực</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-semibold">
              {completedExamsCount} bài nộp
            </span>
          </div>

          {/* 3 Clean Stat Tiles */}
          <div className="grid grid-cols-2 gap-2.5 my-4">
            {/* Tile 1: Điểm cao nhất */}
            <div className="col-span-2 p-3.5 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/60 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-zinc-400 block">
                  Điểm kỷ lục cao nhất
                </span>
                <div className={`text-2xl font-black font-mono tracking-tight mt-0.5 tabular-nums ${
                  isTHPT ? 'text-rose-600 dark:text-rose-400' : 'text-sky-600 dark:text-sky-400'
                }`}>
                  {highestScore !== null ? `${highestScore}` : '--'}{' '}
                  <span className="text-xs font-medium text-slate-400">/ 50</span>
                </div>
              </div>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                isTHPT ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400' : 'bg-sky-500/10 text-sky-600 dark:text-sky-400'
              }`}>
                {highestScore !== null ? `${Math.round((highestScore / 50) * 100)}%` : '0%'}
              </div>
            </div>

            {/* Tile 2: Đề đã hoàn thành */}
            <div className="p-3 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/60">
              <span className="text-[10px] font-semibold text-slate-500 dark:text-zinc-400 block">
                Đề đã luyện
              </span>
              <div className="text-lg font-black text-slate-900 dark:text-zinc-100 font-mono mt-0.5 tabular-nums">
                {distinctExamSetsCount} <span className="text-[10px] font-normal text-slate-400">/ {activeExamSets.length}</span>
              </div>
            </div>

            {/* Tile 3: Điểm trung bình */}
            <div className="p-3 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/60">
              <span className="text-[10px] font-semibold text-slate-500 dark:text-zinc-400 block">
                Điểm trung bình
              </span>
              <div className="text-lg font-black text-slate-900 dark:text-zinc-100 font-mono mt-0.5 tabular-nums">
                {avgScore !== null ? avgScore.toFixed(1) : '--'}{' '}
                <span className="text-[10px] font-normal text-slate-400">/ 50</span>
              </div>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-slate-500 dark:text-zinc-400 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>Tiến độ thực chiến:</span>
            </span>
            <span className="font-bold text-slate-800 dark:text-zinc-200 font-mono">
              {Math.round((distinctExamSetsCount / 8) * 100)}% hoàn thành
            </span>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* BENTO ROW 2: 2 PRACTICE GATEWAYS (Chuyên Đề & Ngân Hàng)           */}
      {/* =================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Gateway 1: Luyện 30 Chuyên Đề */}
        <div
          onClick={onPracticeMode}
          className="group rounded-3xl bg-white dark:bg-[#121217] border border-slate-200/70 dark:border-zinc-800/80 p-6 shadow-xs hover:border-indigo-400/70 dark:hover:border-indigo-500/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-indigo-100/80 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                30 CHUYÊN ĐỀ VI MÔ
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition flex items-center gap-1.5">
                <span>Luyện Tập Theo Dạng Toán</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Rèn sâu từng dạng bài có đáp án giải thích chi tiết, gợi ý tư duy Socratic và bộ lọc độ khó.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-3 border-t border-slate-100 dark:border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <span>Chọn dạng toán để bắt đầu</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </div>
        </div>

        {/* Gateway 2: Ngân Hàng 515 Câu Hỏi */}
        <div
          onClick={onQuestionBankMode}
          className="group rounded-3xl bg-white dark:bg-[#121217] border border-slate-200/70 dark:border-zinc-800/80 p-6 shadow-xs hover:border-emerald-400/70 dark:hover:border-emerald-500/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Search className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                515 CÂU HỎI
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition flex items-center gap-1.5">
                <span>Ngân Hàng Câu Hỏi Toàn Diện</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 leading-relaxed">
                Tra cứu kho câu hỏi đầy đủ phân loại 4 cấp độ: Nhận biết, Thông hiểu, Vận dụng và Vận dụng cao.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-3 border-t border-slate-100 dark:border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span>Duyệt câu hỏi theo mức độ</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* BENTO ROW 3: BẢN ĐỒ 10 CHƯƠNG TOÁN GDPT 2018 (Airy Tiles)           */}
      {/* =================================================================== */}
      <div className="rounded-3xl bg-white dark:bg-[#121217] border border-slate-200/70 dark:border-zinc-800/80 p-6 sm:p-7 shadow-xs space-y-5 transition-colors">
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
                Lộ Trình 10 Chương Trọng Tâm HSA
              </h2>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Chọn một chương để mở danh sách chuyên đề và bắt đầu làm bài
              </p>
            </div>
          </div>

          <span className="text-xs font-mono text-slate-400 hidden sm:inline">
            10 Chương · GDPT 2018
          </span>
        </div>

        {/* 10 Chapter Interactive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {CHAPTERS_METADATA.map((chapter, idx) => {
            const qCount = chapterQuestionCounts[chapter.id] || 0;
            return (
              <div
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                className="p-3.5 rounded-2xl border border-slate-100 dark:border-zinc-800/60 bg-slate-50/50 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-800/80 hover:border-sky-300 dark:hover:border-sky-700/60 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group space-y-2.5"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                      Ch.{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {qCount} câu
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition line-clamp-2 leading-snug">
                    {chapter.name}
                  </h4>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400 pt-1 border-t border-slate-200/40 dark:border-zinc-800/40">
                  <span>{chapter.topics.length} dạng</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =================================================================== */}
      {/* BENTO ROW 4: LỊCH SỬ THI & BÁO CÁO GẦN NHẤT                          */}
      {/* =================================================================== */}
      <div className="rounded-3xl bg-white dark:bg-[#121217] border border-slate-200/70 dark:border-zinc-800/80 p-6 sm:p-7 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-zinc-100">
                Lịch Sử Làm Bài Gần Đây
              </h2>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Kết quả các bài thi thử 75 phút được lưu trữ và đồng bộ
              </p>
            </div>
          </div>

          {examHistory.length > 0 && (
            <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
              {examHistory.length} bài đã lưu
            </span>
          )}
        </div>

        {examHistory.length === 0 ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-zinc-900 text-sky-500 dark:text-sky-400 flex items-center justify-center mx-auto">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-800 dark:text-zinc-200">
                Chưa có lịch sử làm bài thi thử
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-sm mx-auto">
                Bấm giờ làm bài thi thử 75 phút để hệ thống ghi nhận điểm số và phân tích chuyên đề cần cải thiện.
              </p>
            </div>
            <button
              type="button"
              onClick={onStartExamMode}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-xs transition cursor-pointer"
            >
              <span>Làm bài thi thử đầu tiên</span>
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
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-zinc-800/60 bg-slate-50/50 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-xs transition gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-zinc-100">
                        {item.examSetTitle}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono ${
                          isHighScore
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                            : isMediumScore
                            ? 'bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300'
                            : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
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
                    className="self-end sm:self-center px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-[11px] font-semibold text-slate-700 dark:text-zinc-300 transition flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
                    title="Làm lại bộ đề này"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-sky-500" />
                    <span>Làm lại đề này</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
