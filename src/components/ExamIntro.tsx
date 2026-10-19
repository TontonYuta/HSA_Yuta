import React from 'react';
import { 
  Play, 
  Clock, 
  Layers, 
  CheckCircle2,
  FileCheck2
} from 'lucide-react';
import { TopicId, ExamSet } from '../types/exam';
import { HSA_EXAM_SETS, THPTQG_EXAM_SETS } from '../data/topics/index';
import { ExamTrack, TRACK_METADATA } from '../utils/trackFilter';
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
  const currentExamSet = targetExamSets.find((s) => s.id === selectedExamSetId) || targetExamSets[0];

  return (
    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 pb-16 animate-fade-in text-slate-900 dark:text-zinc-100 font-sans">
      {/* Header Banner - Chuyên nghiệp, tập trung cho học sinh */}
      <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-4 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center gap-4 transition-colors">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
          isTHPT 
            ? 'bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400'
            : 'bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400'
        }`}>
          <FileCheck2 className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <div className="flex-1 text-center sm:text-left space-y-1">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h1 className="text-base sm:text-xl font-bold text-slate-900 dark:text-zinc-100">
              {isTHPT 
                ? `Phòng Thi Thử Tốt Nghiệp THPT Quốc Gia ${targetYear} (GDPT 2018)` 
                : `Thi Thử 75 Phút · Toán Học & Tư Duy Định Lượng HSA ${targetYear}`}
            </h1>
            <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border ${
              isTHPT
                ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-200/60 dark:border-rose-800/60'
                : 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border-sky-200/60 dark:border-sky-800/60'
            }`}>
              {targetExamSets.length} BỘ ĐỀ
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
            {isTHPT
              ? `Hệ thống ${targetExamSets.length} bộ đề thi chuẩn hóa theo định hướng mới của Bộ GD&ĐT ${targetYear}: Loại bỏ hoàn toàn câu hỏi chứa tham số m, tăng cường bài toán thực tế & ứng dụng đời sống.`
              : `Hệ thống ${targetExamSets.length} bộ đề chuẩn hóa HSA ĐHQGHN ${targetYear}: gồm các đề gốc tham khảo, đề chuyên sâu từng chuyên đề và đề phân hóa cao 90+.`}
          </p>
        </div>
      </div>

      {/* Phòng thi thử - Chọn đề & Vào thi */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-7 shadow-xs space-y-5 transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800/80 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <FileCheck2 className={`w-5 h-5 ${isTHPT ? 'text-rose-600 dark:text-rose-400' : 'text-sky-600 dark:text-sky-400'}`} />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
              Chọn bộ đề thi thực chiến ({targetExamSets.length} Đề)
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
            {targetExamSets.length} Đề thi có sẵn · {isTHPT ? '90 Phút' : '75 Phút'}
          </span>
        </div>

        {/* Danh sách đề thi (Responsive max-h) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 max-h-[380px] sm:max-h-[480px] overflow-y-auto p-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-700">
          {targetExamSets.map((set) => {
            const isSelected = selectedExamSetId === set.id;
            return (
              <button
                key={set.id}
                type="button"
                onClick={() => setSelectedExamSetId(set.id)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? isTHPT
                      ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 ring-1 ring-rose-500/40 text-slate-950 dark:text-white shadow-xs'
                      : 'bg-sky-50 dark:bg-sky-950/40 border-sky-500 ring-1 ring-sky-500/40 text-slate-950 dark:text-white shadow-xs'
                    : 'bg-slate-50/70 dark:bg-zinc-950/40 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-100/50 dark:hover:bg-zinc-900/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      isSelected 
                        ? isTHPT
                          ? 'bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200'
                          : 'bg-sky-200 dark:bg-sky-900 text-sky-800 dark:text-sky-200' 
                        : 'bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                    }`}>
                      {set.badge}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isTHPT ? 'text-rose-600 dark:text-rose-400' : 'text-sky-600 dark:text-sky-400'}`} />
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
            className={`w-full py-3.5 px-5 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer ${
              isTHPT
                ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/20'
                : 'bg-sky-600 hover:bg-sky-500 shadow-sky-600/20'
            }`}
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
