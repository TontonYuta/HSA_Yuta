import React from 'react';
import { 
  Play, 
  Clock, 
  BookOpen, 
  ArrowRight, 
  Layers, 
  CheckCircle2,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { TopicId } from '../types/exam';
import { TOPIC_METADATA } from '../utils/scoring';
import { HSA_EXAM_SETS, CHAPTERS_METADATA } from '../data/topics/index';

interface ExamIntroProps {
  onStartExam: (examSetId: string) => void;
  onSelectTopicPractice: (topicId: TopicId) => void;
  studentName: string;
  setStudentName: (name: string) => void;
  selectedExamSetId: string;
  setSelectedExamSetId: (id: string) => void;
}

export const ExamIntro: React.FC<ExamIntroProps> = ({
  onStartExam,
  onSelectTopicPractice,
  studentName,
  setStudentName,
  selectedExamSetId,
  setSelectedExamSetId,
}) => {
  const currentExamSet = HSA_EXAM_SETS.find((s) => s.id === selectedExamSetId) || HSA_EXAM_SETS[0];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16 animate-fade-in">
      {/* PHẦN 1: Luyện theo từng chuyên đề (Đưa lên TRÊN) */}
      <div className="space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-slate-100 dark:border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-mono">
                Trọng Tâm Ôn Luyện
              </span>
              <span className="text-xs text-slate-400 dark:text-zinc-500 font-medium">
                Chương trình GDPT 2018
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              10 Chương & 30 Chuyên Đề Toán Trọng Tâm HSA
            </h2>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              Luyện tập độc lập từng dạng toán phân hóa cao, kèm lời giải KaTeX từng bước và tự động gửi kết quả về email
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CHAPTERS_METADATA.map((ch, idx) => {
            const firstTopicId = ch.topics[0]?.id || ch.id;
            const totalQ = ch.topics.reduce((sum, t) => sum + (t.questionCount || 0), 0);

            return (
              <div
                key={ch.id}
                className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-700 transition flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 font-mono uppercase tracking-wider">
                      Chương {idx + 1}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono font-medium">
                      {totalQ} câu · {ch.topics.length} chuyên đề
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-zinc-100 line-clamp-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">
                    {ch.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {ch.description}
                  </p>

                  {/* Micro-topics tags */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {ch.topics.map((t) => (
                      <span
                        key={t.id}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-slate-50 dark:bg-zinc-800/80 border border-slate-200/70 dark:border-zinc-700/60 text-slate-600 dark:text-zinc-300"
                      >
                        {t.shortName}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 dark:text-zinc-500">100% KaTeX Chuẩn</span>
                  <button
                    type="button"
                    onClick={() => onSelectTopicPractice(firstTopicId)}
                    className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Luyện ngay</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PHẦN 2: Luyện đề thi thử chuẩn HSA CBT (Đưa xuống DƯỚI) */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-7 shadow-sm space-y-5 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-mono">
                ĐHQGHN · HSA 2025
              </span>
              <span className="text-xs text-slate-400 dark:text-zinc-500 font-medium">
                Cấu trúc đề chính thức
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              Phòng Thi Thử Toàn Diện (Luyện Bộ Đề HSA 75 Phút)
            </h2>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              Mô phỏng 100% giao diện thi trên máy tính (CBT) của Trung tâm Khảo thí ĐHQGHN với đồng hồ đếm ngược và bảng câu hỏi
            </p>
          </div>
        </div>

        {/* Step 1: Chọn Đề Thi */}
        <div className="space-y-2.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
            1. Chọn bộ đề thi thử:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {HSA_EXAM_SETS.map((set) => {
              const isSelected = selectedExamSetId === set.id;
              return (
                <button
                  key={set.id}
                  type="button"
                  onClick={() => setSelectedExamSetId(set.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-sky-50/70 dark:bg-sky-950/30 border-sky-500 dark:border-sky-500/80 ring-1 ring-sky-500/30 text-slate-950 dark:text-white shadow-xs'
                      : 'bg-slate-50/60 dark:bg-zinc-950/40 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-400 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-100/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                        isSelected 
                          ? 'bg-sky-200/80 dark:bg-sky-900/60 text-sky-800 dark:text-sky-200' 
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
          <p className="text-[11px] text-slate-500 dark:text-zinc-400 italic pt-0.5">
            {currentExamSet.description}
          </p>
        </div>

        {/* Step 2: Họ Tên Thí Sinh (Tối giản tuyệt đối) */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
            2. Họ tên thí sinh:
          </label>
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Nhập họ và tên..."
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 font-medium transition"
            />
            <p className="text-[11px] text-slate-400 dark:text-zinc-500 mt-1">
              Tên sẽ hiển thị trên bảng điểm, chứng nhận năng lực và báo cáo gửi về email.
            </p>
          </div>
        </div>

        {/* Big Start Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => onStartExam(selectedExamSetId)}
            className="w-full py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Bắt đầu làm bài {currentExamSet.title} ({currentExamSet.timeMinutes} phút)</span>
          </button>
        </div>
      </div>

      {/* 3 Quick Overview Specs */}
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
            Trung bình 1.5 phút/câu, cảnh báo tại 10 phút và 3 phút cuối.
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
            Hỗ trợ bàn phím ảo toán học chuyên dụng cho câu điền số.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-1 transition-colors">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 text-xs font-semibold">
            <FileCheck2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Phân tích năng lực</span>
          </div>
          <div className="text-base font-bold text-slate-900 dark:text-zinc-100 font-mono">
            30 Chuyên đề vi mô
          </div>
          <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed">
            Phân định rõ từng dạng toán (tham số m, Bayes, tích phân chuyển động, Venn...) kèm lời giải KaTeX.
          </p>
        </div>
      </div>
    </div>
  );
};
