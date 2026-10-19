import React, { useState, useMemo } from 'react';
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
  Filter
} from 'lucide-react';
import { TopicId, ExamSet } from '../types/exam';
import { HSA_EXAM_SETS, THPTQG_EXAM_SETS } from '../data/topics/index';
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
  currentTrack = 'THPTQG',
  examSets,
}) => {
  const isTHPT = currentTrack === 'THPTQG';
  const targetYear = getTargetExamYear();
  const targetExamSets = examSets || (isTHPT ? THPTQG_EXAM_SETS : HSA_EXAM_SETS);

  // Category Filter for Exam Sets
  const [filterCategory, setFilterCategory] = useState<'all' | 'official' | 'so' | 'quick'>('all');

  const filteredSets = useMemo(() => {
    return targetExamSets.filter((set) => {
      if (filterCategory === 'all') return true;
      if (filterCategory === 'official') {
        return set.id === 'thpt_2027_chuan_1' || set.id === 'thpt_2027_chuan_2' || set.id === 'hsa_standard_1' || set.id === 'hsa_standard_2';
      }
      if (filterCategory === 'so') {
        return set.id.startsWith('thpt_2027_so_') || set.title.toLowerCase().includes('sở gd&đt');
      }
      if (filterCategory === 'quick') {
        return set.timeMinutes <= 45 || set.title.toLowerCase().includes('cấp tốc') || set.title.toLowerCase().includes('luyện nhanh');
      }
      return true;
    });
  }, [targetExamSets, filterCategory]);

  const currentExamSet = targetExamSets.find((s) => s.id === selectedExamSetId) || targetExamSets[0];

  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col justify-between space-y-3 sm:space-y-4 animate-fade-in text-slate-900 dark:text-zinc-100 font-sans select-none pb-4 sm:pb-6">
      {/* 1. COMPACT TOP HEADER BAR (Saves 100px compared to old banner) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-200 dark:border-zinc-800 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
            isTHPT 
              ? 'bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400' 
              : 'bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400'
          }`}>
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
                {isTHPT 
                  ? `Ngân Hàng Đề Thi Thử Tốt Nghiệp THPT Quốc Gia ${targetYear}` 
                  : `Phòng Thi Thử Đánh Giá Năng Lực HSA ${targetYear}`}
              </h1>
              <span className={`px-2 py-0.2 text-[10px] font-mono font-bold rounded-full border ${
                isTHPT
                  ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-200/60'
                  : 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border-sky-200/60'
              }`}>
                {targetExamSets.length} BỘ ĐỀ
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400">
              {isTHPT 
                ? 'Đề thi chuẩn hóa GDPT 2018: 100% không chứa tham số m, cấu trúc 3 phần bám sát định dạng Bộ GD&ĐT.' 
                : 'Đề thi chuẩn hóa 50 câu (35 trắc nghiệm + 15 điền số), bấm giờ 75 phút, chấm tự động tức thì.'}
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-zinc-900 p-1 rounded-xl border border-slate-200/80 dark:border-zinc-800 text-[11px] font-semibold shrink-0 self-start sm:self-center">
          <button
            type="button"
            onClick={() => setFilterCategory('all')}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-zinc-200'
            }`}
          >
            Tất cả ({targetExamSets.length})
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('official')}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
              filterCategory === 'official'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-zinc-200'
            }`}
          >
            Đề Chuẩn
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('so')}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
              filterCategory === 'so'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-zinc-200'
            }`}
          >
            Đề Các Sở
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('quick')}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
              filterCategory === 'quick'
                ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-zinc-200'
            }`}
          >
            Cấp Tốc
          </button>
        </div>
      </div>

      {/* 2. SPLIT WORKSPACE: LEFT LIST (62%) + RIGHT STICKY COMMAND CENTER (38%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 flex-1 min-h-0 items-start">
        {/* =================================================================== */}
        {/* LEFT ZONE: EXAM SETS LIST (Scrollable, Compact Cards)              */}
        {/* =================================================================== */}
        <div className="lg:col-span-7 flex flex-col h-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-zinc-800/80 mb-2.5">
            <span className="text-xs font-bold text-slate-700 dark:text-zinc-300">
              Chọn đề thi ({filteredSets.length} đề hiển thị)
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              Thời gian: {isTHPT ? '90 Phút' : '75 Phút'}
            </span>
          </div>

          {/* Grid of Compact Exam Cards */}
          <div className="flex-1 overflow-y-auto max-h-[460px] sm:max-h-[500px] p-0.5 space-y-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-700">
            {filteredSets.map((set) => {
              const isSelected = selectedExamSetId === set.id;
              return (
                <button
                  key={set.id}
                  type="button"
                  onClick={() => setSelectedExamSetId(set.id)}
                  className={`w-full p-3 rounded-xl border text-left transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? isTHPT
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 ring-1 ring-rose-500/40 shadow-xs'
                        : 'bg-sky-50 dark:bg-sky-950/40 border-sky-500 ring-1 ring-sky-500/40 shadow-xs'
                      : 'bg-slate-50/70 dark:bg-zinc-950/40 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 hover:border-slate-300 hover:bg-slate-100/50 dark:hover:bg-zinc-800/60'
                  }`}
                >
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono px-2 py-0.2 rounded font-bold shrink-0 ${
                        isSelected
                          ? isTHPT ? 'bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200' : 'bg-sky-200 dark:bg-sky-900 text-sky-800 dark:text-sky-200'
                          : 'bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                      }`}>
                        {set.badge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 truncate">
                        {set.timeMinutes} phút · {set.questionCount} câu
                      </span>
                    </div>

                    <h3 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-zinc-100 truncate">
                      {set.title}
                    </h3>
                  </div>

                  <div className="shrink-0">
                    {isSelected ? (
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${
                        isTHPT ? 'bg-rose-600' : 'bg-sky-600'
                      }`}>
                        <CheckCircle2 className="w-4 h-4 fill-current text-white" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-slate-300 dark:border-zinc-700 hover:border-sky-500" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================================== */}
        {/* RIGHT ZONE: STICKY COMMAND CENTER & PRIMARY CTA (ALWAYS AT EYE LEVEL) */}
        {/* =================================================================== */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
          <div className="space-y-3">
            {/* Selected Exam Highlight Card */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200 dark:border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Đề thi đang chọn:
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                  isTHPT ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300' : 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300'
                }`}>
                  {currentExamSet.badge}
                </span>
              </div>

              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100 leading-snug">
                {currentExamSet.title}
              </h2>

              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                {currentExamSet.description}
              </p>

              {/* Spec Strips */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 dark:border-zinc-800/60 text-center font-mono">
                <div className="p-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800">
                  <div className="text-[10px] text-slate-400">Thời gian</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-zinc-200">{currentExamSet.timeMinutes} Phút</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800">
                  <div className="text-[10px] text-slate-400">Số câu hỏi</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-zinc-200">{currentExamSet.questionCount} Câu</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800">
                  <div className="text-[10px] text-slate-400">Chấm điểm</div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Tức thì</div>
                </div>
              </div>
            </div>

            {/* Student Name Confirmation */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1">
                Họ và tên thí sinh:
              </label>
              <div className="relative">
                <User className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Nhập họ và tên thí sinh..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 dark:text-zinc-100 focus:outline-none focus:border-sky-500 transition"
                />
              </div>
            </div>

            {/* Essential Exam Rules Badge */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-950/40 border border-slate-100 dark:border-zinc-800/60 space-y-1.5 text-[11px] text-slate-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-zinc-200">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                <span>Quy chế phòng thi CBT trực tuyến:</span>
              </div>
              <ul className="space-y-1 pl-4 list-disc text-slate-500 dark:text-zinc-400">
                <li>Đồng hồ đếm ngược tự động khóa bài khi hết giờ.</li>
                <li>Hệ thống lưu trạng thái tự động và cảnh báo khi rời tab.</li>
                <li>Xem ngay lời giải chi tiết và biểu đồ phân tích năng lực sau nộp.</li>
              </ul>
            </div>
          </div>

          {/* PRIMARY CTA: VÀO THI NGAY (ALWAYS VISIBLE AT EYE-LEVEL - ZERO SCROLL) */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onStartExam(selectedExamSetId)}
              className={`w-full py-3.5 px-5 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer ${
                isTHPT
                  ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/25'
                  : 'bg-sky-600 hover:bg-sky-500 shadow-sky-600/25'
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Vào thi ngay: {currentExamSet.title}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
