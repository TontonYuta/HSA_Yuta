import React from 'react';
import { Delete, RotateCcw } from 'lucide-react';
import { parseNumericAnswer } from '../utils/scoring';

interface VirtualMathKeyboardProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export const VirtualMathKeyboard: React.FC<VirtualMathKeyboardProps> = ({
  value,
  onChange,
  className = '',
}) => {
  const handleKeyClick = (key: string) => {
    if (key === 'BACKSPACE') {
      onChange(value.slice(0, -1));
    } else if (key === 'CLEAR') {
      onChange('');
    } else if (key === 'NEG') {
      if (value.startsWith('-')) {
        onChange(value.slice(1));
      } else {
        onChange('-' + value);
      }
    } else {
      onChange(value + key);
    }
  };

  const numericPreview = React.useMemo(() => {
    if (!value) return null;
    if (value.includes('/') || value.includes(',')) {
      const num = parseNumericAnswer(value);
      if (!isNaN(num)) {
        return Math.round(num * 10000) / 10000;
      }
    }
    return null;
  }, [value]);

  return (
    <div className={`p-3 bg-zinc-50 dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-md ${className}`}>
      <div className="flex items-center justify-between mb-2 px-1 text-xs text-zinc-500 dark:text-zinc-400">
        <span className="font-mono font-medium">Bàn phím nhập đáp số</span>
        {numericPreview !== null && (
          <span className="text-cyan-600 dark:text-cyan-400 font-mono font-semibold">
            Tương đương: {numericPreview}
          </span>
        )}
      </div>

      <div className="grid grid-cols-4 gap-1.5 font-mono select-none touch-manipulation">
        {/* Row 1 */}
        <button
          type="button"
          onClick={() => handleKeyClick('7')}
          className="h-11 sm:h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition text-base font-semibold touch-manipulation cursor-pointer shadow-xs"
        >
          7
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('8')}
          className="h-11 sm:h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition text-base font-semibold touch-manipulation cursor-pointer shadow-xs"
        >
          8
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('9')}
          className="h-11 sm:h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition text-base font-semibold touch-manipulation cursor-pointer shadow-xs"
        >
          9
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('/')}
          className="h-11 sm:h-10 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700/60 text-cyan-600 dark:text-cyan-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 active:scale-95 transition text-base font-bold touch-manipulation cursor-pointer shadow-xs"
          title="Dấu chia / phân số"
        >
          /
        </button>

        {/* Row 2 */}
        <button
          type="button"
          onClick={() => handleKeyClick('4')}
          className="h-11 sm:h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition text-base font-semibold touch-manipulation cursor-pointer shadow-xs"
        >
          4
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('5')}
          className="h-11 sm:h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition text-base font-semibold touch-manipulation cursor-pointer shadow-xs"
        >
          5
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('6')}
          className="h-11 sm:h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition text-base font-semibold touch-manipulation cursor-pointer shadow-xs"
        >
          6
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('-')}
          className="h-11 sm:h-10 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700/60 text-cyan-600 dark:text-cyan-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 active:scale-95 transition text-base font-bold touch-manipulation cursor-pointer shadow-xs"
          title="Dấu trừ (dấu âm)"
        >
          -
        </button>

        {/* Row 3 */}
        <button
          type="button"
          onClick={() => handleKeyClick('1')}
          className="h-11 sm:h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition text-base font-semibold touch-manipulation cursor-pointer shadow-xs"
        >
          1
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('2')}
          className="h-11 sm:h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition text-base font-semibold touch-manipulation cursor-pointer shadow-xs"
        >
          2
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('3')}
          className="h-11 sm:h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition text-base font-semibold touch-manipulation cursor-pointer shadow-xs"
        >
          3
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('.')}
          className="h-11 sm:h-10 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700/60 text-cyan-600 dark:text-cyan-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 active:scale-95 transition text-base font-bold touch-manipulation cursor-pointer shadow-xs"
          title="Dấu chấm thập phân"
        >
          .
        </button>

        {/* Row 4 */}
        <button
          type="button"
          onClick={() => handleKeyClick('0')}
          className="h-11 sm:h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition text-base font-semibold touch-manipulation cursor-pointer shadow-xs"
        >
          0
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('NEG')}
          className="h-11 sm:h-10 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700/60 text-amber-600 dark:text-amber-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 active:scale-95 transition text-sm font-semibold touch-manipulation cursor-pointer shadow-xs"
          title="Đổi dấu âm / dương"
        >
          ±
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('CLEAR')}
          className="h-11 sm:h-10 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700/60 text-rose-600 dark:text-rose-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 active:scale-95 transition flex items-center justify-center touch-manipulation cursor-pointer shadow-xs"
          title="Xóa toàn bộ"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => handleKeyClick('BACKSPACE')}
          className="h-11 sm:h-10 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700 active:scale-95 transition flex items-center justify-center touch-manipulation cursor-pointer shadow-xs"
          title="Xóa ký tự cuối"
        >
          <Delete className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
