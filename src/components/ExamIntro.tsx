import React from 'react';
import { 
  Play, 
  Clock, 
  Layers, 
  CheckCircle2,
  FileCheck2
} from 'lucide-react';
import { TopicId } from '../types/exam';
import { HSA_EXAM_SETS } from '../data/topics/index';

interface ExamIntroProps {
  onStartExam: (examSetId: string) => void;
  onSelectTopicPractice?: (topicId: TopicId) => void;
  studentName: string;
  setStudentName: (name: string) => void;
  selectedExamSetId: string;
  setSelectedExamSetId: (id: string) => void;
}

export const ExamIntro: React.FC<ExamIntroProps> = ({
  onStartExam,
  studentName,
  setStudentName,
  selectedExamSetId,
  setSelectedExamSetId,
}) => {
  const currentExamSet = HSA_EXAM_SETS.find((s) => s.id === selectedExamSetId) || HSA_EXAM_SETS[0];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 animate-fade-in text-slate-900 dark:text-zinc-100 font-sans">
      {/* Header Banner - Chuyên nghiệp, tập trung cho học sinh */}
      <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center gap-4 transition-colors">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 shadow-xs">
          <FileCheck2 className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <div className="flex-1 text-center sm:text-left space-y-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-100">
              Thi Thử 75 Phút · Toán Học & Tư Duy Định Lượng HSA
            </h1>
            <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60">
              8 BỘ ĐỀ
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
            Cấu trúc 50 câu (35 trắc nghiệm + 15 điền đáp số), thời gian làm bài 75 phút theo định dạng đề thi ĐHQGHN.
          </p>
        </div>
      </div>

      {/* Phòng thi thử - Chọn đề & Vào thi */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-7 shadow-sm space-y-5 transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800/80">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
              Chọn bộ đề thi thực chiến
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
            8 Đề thi có sẵn
          </span>
        </div>

        {/* Danh sách 8 đề thi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {HSA_EXAM_SETS.map((set) => {
            const isSelected = selectedExamSetId === set.id;
            return (
              <button
                key={set.id}
                type="button"
                onClick={() => setSelectedExamSetId(set.id)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-500 ring-1 ring-sky-500/40 text-slate-950 dark:text-white shadow-xs'
                    : 'bg-slate-50/70 dark:bg-zinc-950/40 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-100/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      isSelected 
                        ? 'bg-sky-200 dark:bg-sky-900 text-sky-800 dark:text-sky-200' 
                        : 'bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                    }`}>
                      {set.badge}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    )}
                  </div>
                  <h3 className="font-semibold text-xs text-slate-900 dark:text-zinc-100 leading-snug">
                    {set.title}
                  </h3>
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 mt-2.5 pt-2 border-t border-slate-200/60 dark:border-zinc-800/60">
                  {set.questionCount} câu · {set.timeMinutes} phút
                </div>
              </button>
            );
          })}
        </div>

        {/* Thông tin thí sinh & Nút vào thi */}
        <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1">
              Họ tên thí sinh dự thi:
            </label>
            <div className="max-w-md">
              <input
                type="text"
                placeholder="Nhập họ và tên..."
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 font-medium transition"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => onStartExam(selectedExamSetId)}
            className="w-full py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Vào thi ngay: {currentExamSet.title} ({currentExamSet.timeMinutes} phút)</span>
          </button>
        </div>
      </div>

      {/* Thông số bài thi */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-1 transition-colors">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Thời lượng làm bài</span>
          </div>
          <div className="text-base font-bold text-slate-900 dark:text-zinc-100 font-mono">
            {currentExamSet.timeMinutes}:00 Chuẩn
          </div>
          <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed">
            Đồng hồ đếm ngược, cảnh báo tại 10 phút và 3 phút cuối.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-1 transition-colors">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Định dạng 2 phần</span>
          </div>
          <div className="text-base font-bold text-slate-900 dark:text-zinc-100 font-mono">
            {currentExamSet.mcqCount} Trắc nghiệm + {currentExamSet.fillCount} Điền số
          </div>
          <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed">
            Hỗ trợ bàn phím số toán học cho câu điền đáp số.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-1 transition-colors">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 text-xs font-semibold">
            <FileCheck2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Chấm điểm & Lời giải</span>
          </div>
          <div className="text-base font-bold text-slate-900 dark:text-zinc-100 font-mono">
            Chấm tự động tức thì
          </div>
          <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed">
            Bảng phân tích điểm chuyên đề và xem lại chi tiết từng câu.
          </p>
        </div>
      </div>
    </div>
  );
};
