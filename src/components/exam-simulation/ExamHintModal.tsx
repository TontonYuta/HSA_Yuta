import React from 'react';
import { Lightbulb, X } from 'lucide-react';
import { MathRenderer } from '../MathRenderer';

interface ExamHintModalProps {
  isOpen: boolean;
  onClose: () => void;
  questionIndex: number;
  hintContent?: string;
}

export const ExamHintModal: React.FC<ExamHintModalProps> = ({
  isOpen,
  onClose,
  questionIndex,
  hintContent,
}) => {
  if (!isOpen || !hintContent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in select-none">
      <div className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
            <Lightbulb className="w-4 h-4" />
            <span>Gợi ý định hướng tư duy câu {questionIndex + 1}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
          <MathRenderer content={hintContent} />
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold cursor-pointer"
          >
            Đã hiểu, quay lại làm bài
          </button>
        </div>
      </div>
    </div>
  );
};
