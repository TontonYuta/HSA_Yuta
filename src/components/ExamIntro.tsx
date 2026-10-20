import React, { useState, useMemo, useEffect } from 'react';
import { 
  Play, 
  Clock, 
  Layers, 
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  User,
  Sparkles,
  BookOpen,
  ArrowRight,
  Filter,
  Award,
  BarChart3,
  Check,
  GraduationCap
} from 'lucide-react';
import { TopicId, ExamSet } from '../types/exam';
import { TOAN7_EXAM_SETS } from '../data/toan7/index';
import { ExamTrack } from '../utils/trackFilter';
import { getTargetExamYear } from '../utils/timeUtils';

interface ExamIntroProps {
  onStartExam: (examSetId: string) => void;
  onSelectTopicPractice?: (topicId: TopicId) => void;
  studentName: string;
  setStudentName: (name: string) => void;
  selectedExamSetId: string;
  setSelectedExamSetId: (id: string) => void;
  currentTrack?: ExamTrack;
  examSets?: ExamSet[];
}

export const ExamIntro: React.FC<ExamIntroProps> = ({
  onStartExam,
  studentName,
  setStudentName,
  selectedExamSetId,
  setSelectedExamSetId,
  currentTrack = 'PHOTHONG',
  examSets,
}) => {
  const isPT = currentTrack === 'PHOTHONG';
  const targetYear = getTargetExamYear();
  const targetExamSets = examSets || TOAN7_EXAM_SETS.filter((s) => (s.track ? s.track === currentTrack : isPT ? s.id.startsWith('toan7_pt') : s.id.startsWith('toan7_nc')));

  // Category Filter for Exam Sets
  const [filterCategory, setFilterCategory] = useState<'all' | 'giuaki' | 'cuoiki' | 'nangcao' | 'quick'>('all');

  const filteredSets = useMemo(() => {
    return targetExamSets.filter((set) => {
      if (filterCategory === 'all') return true;
      const lowerId = set.id.toLowerCase();
      const lowerBadge = set.badge.toLowerCase();
      const lowerTitle = set.title.toLowerCase();

      if (filterCategory === 'giuaki') {
        return (
          lowerId.includes('giua_ki') ||
          lowerBadge.includes('giữa kì') ||
          lowerTitle.includes('giữa kì')
        );
      }
      if (filterCategory === 'cuoiki') {
        return (
          lowerId.includes('cuoi_ki') ||
          lowerBadge.includes('cuối kì') ||
          lowerTitle.includes('cuối kì')
        );
      }
      if (filterCategory === 'nangcao') {
        return (
          lowerBadge.includes('hsg') ||
          lowerTitle.includes('hsg') ||
          lowerBadge.includes('9+') ||
          lowerBadge.includes('nâng cao') ||
          set.track === 'NANGCAO'
        );
      }
      if (filterCategory === 'quick') {
        return (
          set.timeMinutes <= 45 ||
          lowerBadge.includes('cấp tốc') ||
          lowerTitle.includes('cấp tốc') ||
          lowerTitle.includes('khảo sát')
        );
      }
      return true;
    });
  }, [targetExamSets, filterCategory]);

  // Selected Exam Set
  const currentExamSet = useMemo(() => {
    return targetExamSets.find((s) => s.id === selectedExamSetId) || targetExamSets[0];
  }, [targetExamSets, selectedExamSetId]);

  // Keyboard shortcut: Press Enter to start exam (when not typing in an input)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        const target = e.target as HTMLElement;
        if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
          return;
        }
        if (currentExamSet) {
          onStartExam(currentExamSet.id);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentExamSet, onStartExam]);

  return (
    <div className="max-w-[1360px] mx-auto min-h-full flex flex-col space-y-4 animate-fade-in text-slate-900 dark:text-zinc-100 font-sans select-none pb-8">
      {/* =================================================================== */}
      {/* 1. TOP HEADER & CATEGORY FILTER BAR                                */}
      {/* =================================================================== */}
      <div className="bg-white dark:bg-[#101014] border border-slate-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
            isPT 
              ? 'bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400' 
              : 'bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400'
          }`}>
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-base sm:text-lg xl:text-xl font-black text-slate-900 dark:text-zinc-100 tracking-tight">
                {isPT 
                  ? 'Ngân Hàng Đề Thi Toán 7 (Chuẩn GDPT 2018)' 
                  : 'Hệ Thống Đề Thi Toán 7 Nâng Cao (Bứt Phá 9+ & HSG)'}
              </h1>
              <span className={`px-2.5 py-0.5 text-[11px] font-mono font-bold rounded-full border ${
                isPT
                  ? 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border-sky-200/60'
                  : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200/60'
              }`}>
                {targetExamSets.length} BỘ ĐỀ THI
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
              {isPT 
                ? 'Đề thi bám sát chuẩn kiến thức SGK Kết nối tri thức & Cánh diều: Kiểm tra Giữa kì, Cuối kì có biểu điểm chi tiết.' 
                : 'Đề thi bồi dưỡng Học sinh giỏi, đề thi thử vào Chuyên và tuyển tập bài toán điểm 10 rèn luyện tư duy sâu.'}
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-zinc-900 p-1.5 rounded-xl border border-slate-200/80 dark:border-zinc-800 text-xs font-semibold shrink-0 overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap ${
              filterCategory === 'all'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-zinc-200'
            }`}
          >
            Tất cả ({targetExamSets.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('giuaki')}
            className={`px-2.5 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap ${
              filterCategory === 'giuaki'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-zinc-200'
            }`}
          >
            Giữa Kì
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('cuoiki')}
            className={`px-2.5 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap ${
              filterCategory === 'cuoiki'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-zinc-200'
            }`}
          >
            Cuối Kì
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('nangcao')}
            className={`px-2.5 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap ${
              filterCategory === 'nangcao'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-zinc-200'
            }`}
          >
            Bứt Phá 9+ / HSG
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('quick')}
            className={`px-2.5 py-1.5 rounded-lg transition cursor-pointer whitespace-nowrap ${
              filterCategory === 'quick'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-zinc-200'
            }`}
          >
            Cấp Tốc / Khảo Sát
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. MAIN 2-COLUMN WORKSPACE: 2-COL CARD GRID (LEFT) + COMMAND HUB (RIGHT) */}
      {/* =================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start flex-1">
        {/* =================================================================== */}
        {/* LEFT ZONE: RICH EXAM CARD GRID (lg:col-span-7 xl:col-span-7)       */}
        {/* =================================================================== */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-slate-700 dark:text-zinc-300 flex items-center gap-2">
              <span>Danh Sách Đề Thi ({filteredSets.length} đề hiển thị)</span>
              <span className="text-[10px] text-slate-400 font-normal">Click để chọn đề và xem chi tiết cấu trúc</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
              Thời lượng chuẩn: {isPT ? '60 Phút' : '90 Phút'}
            </span>
          </div>

          {/* 2-Column Responsive Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredSets.map((set, index) => {
              const isSelected = selectedExamSetId === set.id;
              const isSo = set.badge.toLowerCase().includes('sở') || set.title.toLowerCase().includes('sở');
              const isChuan = set.badge.toLowerCase().includes('chuẩn');
              const isPractical = set.badge.toLowerCase().includes('thực tế');

              return (
                <div
                  key={set.id}
                  onClick={() => setSelectedExamSetId(set.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between relative group ${
                    isSelected
                      ? isPT
                        ? 'bg-blue-50/60 dark:bg-blue-950/30 border-blue-600 ring-2 ring-blue-500/30 shadow-md'
                        : 'bg-amber-50/60 dark:bg-amber-950/30 border-amber-600 ring-2 ring-amber-500/30 shadow-md'
                      : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-slate-300 dark:hover:border-zinc-700 hover:shadow-sm'
                  }`}
                >
                  {/* Top Badge Strip */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0 ${
                      isSelected
                        ? isPT
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'bg-amber-600 text-white shadow-xs'
                        : isSo
                        ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                        : isChuan
                        ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                        : isPractical
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                        : 'bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                    }`}>
                      {set.badge}
                    </span>

                    <span className="text-[11px] font-mono text-slate-400 font-semibold flex items-center gap-1 shrink-0">
                      <Clock className="w-3 solid" />
                      <span>{set.timeMinutes}p</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-xs sm:text-sm line-clamp-2 leading-snug mb-1.5 ${
                    isSelected 
                      ? isPT ? 'text-sky-700 dark:text-sky-300' : 'text-amber-700 dark:text-amber-300'
                      : 'text-slate-900 dark:text-zinc-100 group-hover:text-slate-950 dark:group-hover:text-white'
                  }`}>
                    {set.title}
                  </h3>

                  {/* Subtitle / Description Snippet */}
                  <p className="text-[11.5px] text-slate-500 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                    {set.subtitle || set.description}
                  </p>

                  {/* Bottom Meta & Selection State */}
                  <div className="pt-2.5 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between mt-auto">
                    <div className="text-[10.5px] font-mono text-slate-500 dark:text-zinc-400 flex items-center gap-2">
                      <span>{set.questionCount} câu</span>
                      <span>·</span>
                      <span>{set.mcqCount} TN + {set.fillCount} Điền</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {isSelected ? (
                        <span className={`text-[10.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          isPT ? 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300' : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                        }`}>
                          <CheckCircle2 className="w-3.5 h-3.5 fill-current" />
                          <span>Đang chọn</span>
                        </span>
                      ) : (
                        <span className="text-[10.5px] text-slate-400 group-hover:text-slate-600 dark:group-hover:text-zinc-300 transition">
                          Chọn đề →
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================================== */}
        {/* RIGHT ZONE: STICKY EXAM COMMAND HUB (lg:col-span-5 xl:col-span-5)  */}
        {/* =================================================================== */}
        <div className="lg:col-span-5 flex flex-col space-y-3.5 sticky top-4">
          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs space-y-4">
            {/* Header: Selected Exam Title & Badge */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Chi tiết đề thi đang chọn:</span>
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold uppercase ${
                  isPT ? 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300' : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                }`}>
                  {currentExamSet.badge}
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-zinc-100 leading-snug">
                {currentExamSet.title}
              </h2>

              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                {currentExamSet.description}
              </p>
            </div>

            {/* Spec Strips (4-Grid) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono">
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                <div className="text-[10px] text-slate-400">Thời gian</div>
                <div className="text-xs font-bold text-slate-900 dark:text-zinc-100">{currentExamSet.timeMinutes} Phút</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                <div className="text-[10px] text-slate-400">Số câu hỏi</div>
                <div className="text-xs font-bold text-slate-900 dark:text-zinc-100">{currentExamSet.questionCount} Câu</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                <div className="text-[10px] text-slate-400">Cấu trúc</div>
                <div className="text-xs font-bold text-slate-900 dark:text-zinc-100">{currentExamSet.mcqCount}TN + {currentExamSet.fillCount}Điền</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                <div className="text-[10px] text-slate-400">Chấm điểm</div>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Tức thì 100%</div>
              </div>
            </div>

            {/* Ma Trận Cấu Trúc Đề Thi GDPT 2018 (Fills space meaningfully!) */}
            <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-zinc-950/60 border border-slate-200/80 dark:border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-zinc-200">
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Ma trận kiến thức & Dạng toán trọng tâm:</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  GDPT 2018 MỚI
                </span>
              </div>

              <div className="space-y-1.5 text-[11.5px] text-slate-600 dark:text-zinc-400">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span>Số hữu tỉ & Số thực (Tập Q, R):</span>
                  </span>
                  <span className="font-mono font-bold text-slate-700 dark:text-zinc-300">~25% - 30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span>Góc & Hai đường thẳng song song:</span>
                  </span>
                  <span className="font-mono font-bold text-slate-700 dark:text-zinc-300">~15% - 20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Tam giác bằng nhau & Các đường đồng quy:</span>
                  </span>
                  <span className="font-mono font-bold text-slate-700 dark:text-zinc-300">~20% - 25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Tỉ lệ thức & Biểu thức đại số:</span>
                  </span>
                  <span className="font-mono font-bold text-slate-700 dark:text-zinc-300">~15% - 20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Thu thập số liệu, Biểu đồ & Xác suất:</span>
                  </span>
                  <span className="font-mono font-bold text-slate-700 dark:text-zinc-300">~10% - 15%</span>
                </div>
              </div>
            </div>

            {/* Student Name Confirmation */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300">
                Họ và tên thí sinh dự thi:
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Nhập họ và tên thí sinh..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 dark:text-zinc-100 focus:outline-none focus:border-rose-500 dark:focus:border-sky-500 transition shadow-inner"
                />
              </div>
            </div>

            {/* CBT Exam Rules */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/80 dark:border-zinc-800 space-y-1.5 text-[11px] text-slate-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-zinc-200">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                <span>Quy chế thi CBT trực tuyến:</span>
              </div>
              <ul className="space-y-1 pl-4 list-disc text-slate-500 dark:text-zinc-400">
                <li>Đồng hồ đếm ngược tự động khóa bài khi hết {currentExamSet.timeMinutes} phút.</li>
                <li>Tự động lưu bài làm và cảnh báo nếu thí sinh chuyển tab hoặc mở ứng dụng khác.</li>
                <li>Nhận ngay bảng điểm chi tiết, biểu đồ năng lực và lời giải sau khi nộp.</li>
              </ul>
            </div>

            {/* PRIMARY CTA: VÀO THI NGAY */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onStartExam(currentExamSet.id)}
                className={`w-full py-4 px-5 rounded-2xl text-white font-black text-sm sm:text-base shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer ${
                  isPT
                    ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/30'
                    : 'bg-amber-600 hover:bg-amber-500 shadow-amber-600/30'
                }`}
              >
                <Play className="w-5 h-5 fill-current" />
                <span>VÀO THI NGAY: {currentExamSet.title.split(':')[0]}</span>
              </button>
              <div className="text-center mt-2 text-[10.5px] text-slate-400 font-mono">
                Nhấn <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-300 font-bold">Enter ↵</kbd> để bắt đầu tính giờ làm bài
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
