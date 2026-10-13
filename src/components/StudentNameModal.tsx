import React, { useState } from 'react';
import { User, School, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StudentNameModalProps {
  isOpen: boolean;
  onSave: (name: string, school: string, email: string) => void;
  initialName?: string;
  initialSchool?: string;
  initialEmail?: string;
  teacherEmail?: string;
  isFirstVisit?: boolean;
}

export const StudentNameModal: React.FC<StudentNameModalProps> = ({
  isOpen,
  onSave,
  initialName = '',
  initialSchool = '',
  initialEmail = '',
  teacherEmail = 'huyhoang6altt@gmail.com',
  isFirstVisit = false,
}) => {
  const [name, setName] = useState(initialName === 'Học sinh HSA' ? '' : initialName);
  const [school, setSchool] = useState(initialSchool || localStorage.getItem('hsa_student_school') || '');
  const [email, setEmail] = useState(initialEmail);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      setError('Vui lòng nhập họ và tên thật của bạn (tối thiểu 2 ký tự)');
      return;
    }

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#0ea5e9', '#10b981', '#f59e0b']
      });
    } catch {}

    onSave(trimmedName, school.trim(), email.trim());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in font-sans select-none">
      <div 
        className="w-full max-w-md rounded-3xl bg-white dark:bg-[#121217] border border-slate-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-7 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow decoration */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Header with avatar */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-sky-500/30 dark:ring-sky-400/30 shadow-md shrink-0 bg-sky-50 dark:bg-zinc-800">
            <img src="/avt.png" alt="TontonYuta" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-[10px] font-bold uppercase tracking-wider mb-1 border border-sky-200/80 dark:border-sky-800/80">
              <Sparkles className="w-3 h-3 text-sky-500" />
              <span>Hệ Thống Luyện Thi HSA Yuta</span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-zinc-100 tracking-tight">
              {isFirstVisit ? 'Chào mừng bạn tham gia!' : 'Cập nhật thông tin học sinh'}
            </h2>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-zinc-400 mb-5 leading-relaxed">
          {isFirstVisit
            ? 'Vui lòng nhập họ và tên của bạn để bắt đầu luyện tập và lưu hồ sơ bài làm.'
            : 'Thông tin học sinh đính kèm trong các bài thi và báo cáo kết quả.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Full name input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1">
              Họ và tên học sinh <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                autoFocus
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Ví dụ: Nguyễn Hoàng Nam"
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs sm:text-sm text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition shadow-xs"
              />
            </div>
            {error && (
              <p className="text-[11px] text-rose-500 mt-1 font-medium">{error}</p>
            )}
          </div>

          {/* School / Class input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1">
              Lớp / Trường THPT <span className="text-slate-400 font-normal">(tùy chọn)</span>
            </label>
            <div className="relative">
              <School className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                placeholder="Ví dụ: 12A1 - THPT Chuyên..."
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs sm:text-sm text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition shadow-xs"
              />
            </div>
          </div>



          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-98"
          >
            <span>{isFirstVisit ? 'Bắt đầu học ngay' : 'Lưu thông tin'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
