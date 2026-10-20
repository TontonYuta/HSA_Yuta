import React, { useState } from 'react';
import { 
  User, 
  School, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Star, 
  MessageSquare, 
  Share2, 
  CheckCircle2,
  ExternalLink,
  HeartHandshake
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { validateStudentName, sanitizeInput } from '../utils/security';
import { appConfig } from '../config/appConfig';

export interface StudentSurveyData {
  source: string;
  tiktokRating: string;
  hasFeedback: 'Có' | 'Không';
  feedbackMessage?: string;
}

interface StudentNameModalProps {
  isOpen: boolean;
  onSave: (name: string, school: string, email: string, surveyData?: StudentSurveyData) => void;
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
  teacherEmail = appConfig.author.email,
  isFirstVisit = false,
}) => {
  // Wizard Step: 1 = Nhập Tên & Trường, 2 = Khảo sát ngắn 3 câu
  const [step, setStep] = useState<1 | 2>(1);

  // Step 1: Profile info
  const [name, setName] = useState(initialName === 'Học sinh HSA' ? '' : initialName);
  const [school, setSchool] = useState(initialSchool || localStorage.getItem('hsa_student_school') || '');
  const [email, setEmail] = useState(initialEmail);
  const [error, setError] = useState('');

  // Step 2: Survey state
  const [source, setSource] = useState<string>('TikTok');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [hasFeedback, setHasFeedback] = useState<'Có' | 'Không'>('Không');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  if (!isOpen) return null;

  // Star Rating Text Mappings (Polished & Enthusiastic)
  const ratingLabels: Record<number, string> = {
    1: '1★ - Cần cải thiện thêm',
    2: '2★ - Chưa thực sự ấn tượng',
    3: '3★ - Tạm chấp nhận được',
    4: '4★ - Khá bổ ích & thiết thực',
    5: '5★ - Siêu bá khí & cuốn hút 🔥',
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateStudentName(name);
    if (!validation.isValid) {
      setError(validation.error || 'Vui lòng nhập họ và tên hợp lệ (tối thiểu 2 ký tự)');
      return;
    }
    setError('');
    // If not first visit, can save directly or go to survey
    setStep(2);
  };

  const handleFinalSubmit = (skipSurvey = false) => {
    const validation = validateStudentName(name);
    if (!validation.isValid) {
      setStep(1);
      setError(validation.error || 'Vui lòng nhập họ và tên');
      return;
    }

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#0ea5e9', '#10b981', '#f59e0b', '#ec4899']
      });
    } catch {}

    const cleanSchool = sanitizeInput(school, 80);
    const cleanEmail = sanitizeInput(email, 100);

    const surveyData: StudentSurveyData | undefined = skipSurvey
      ? undefined
      : {
          source,
          tiktokRating: ratingLabels[rating] || `${rating}★`,
          hasFeedback,
          feedbackMessage: hasFeedback === 'Có' ? sanitizeInput(feedbackMessage, 300) : '',
        };

    onSave(validation.cleanName, cleanSchool, cleanEmail, surveyData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fade-in font-sans select-none overflow-y-auto">
      <div 
        className="w-full max-w-md rounded-3xl bg-white dark:bg-[#121217] border border-slate-200 dark:border-zinc-800 shadow-2xl p-5 sm:p-7 relative overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative background glows */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Header with Step Progress */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs shrink-0 ${
              step === 1 
                ? 'bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400' 
                : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
            }`}>
              {step === 1 ? <User className="w-5 h-5" /> : <Star className="w-5 h-5 fill-current" />}
            </div>
            <div>
              <div className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-[10px] font-bold uppercase tracking-wider mb-0.5 border border-sky-200/80 dark:border-sky-800/80">
                <Sparkles className="w-3 h-3 text-sky-500" />
                <span>Hệ Thống Luyện Thi HSA TontonYuta</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-zinc-100 tracking-tight">
                {step === 1 ? 'Thông tin học sinh' : 'Phiếu khảo sát nhanh'}
              </h2>
            </div>
          </div>

          {/* Step Pill */}
          <span className="text-[11px] font-mono font-bold px-2.5 py-0.8 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700">
            Bước {step}/2
          </span>
        </div>

        {/* ================================================================= */}
        {/* STEP 1: HỌ TÊN VÀ TRƯỜNG LỚP                                      */}
        {/* ================================================================= */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="space-y-3.5 animate-fade-in">
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Vui lòng nhập họ và tên của bạn để hệ thống cá nhân hóa đề thi, đồng bộ lịch sử và cấp chứng nhận kết quả.
            </p>

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
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs sm:text-sm text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition shadow-xs font-medium"
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
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs sm:text-sm text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition shadow-xs font-medium"
                />
              </div>
            </div>

            {/* Submit button to Step 2 */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-98"
              >
                <span>Tiếp tục: Khảo sát ngắn (20 giây)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* ================================================================= */}
        {/* STEP 2: PHIẾU KHẢO SÁT NGẮN 3 CÂU                                */}
        {/* ================================================================= */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            {/* Câu 1: Biết tới qua đâu */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200">
                1. Bạn biết tới trang web qua đâu? <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'TikTok', label: '📱 TikTok' },
                  { id: 'Facebook', label: '📘 Facebook' },
                  { id: 'Bạn bè giới thiệu', label: '👥 Bạn bè giới thiệu' },
                  { id: 'Khác / Tìm kiếm', label: '🔍 Khác / Tự tìm' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSource(item.id)}
                    className={`py-2 px-2.5 rounded-xl border text-left font-medium transition cursor-pointer flex items-center justify-between ${
                      source === item.id
                        ? 'bg-sky-50 dark:bg-sky-950/50 border-sky-500 text-sky-700 dark:text-sky-300 font-bold ring-1 ring-sky-500/30'
                        : 'bg-slate-50/70 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {source === item.id && <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Câu 2: Đánh giá chất lượng kênh TikTok */}
            <div className="space-y-1.5 pt-1">
              <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200">
                2. Bạn đánh giá nội dung kênh TikTok Toán TontonYuta thế nào? <span className="text-rose-500">*</span>
              </label>

              {/* 5-Star interactive selector */}
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 space-y-2">
                <div className="flex items-center justify-center gap-2 py-1">
                  {[1, 2, 3, 4, 5].map((starVal) => {
                    const isFilled = (hoverRating !== null ? hoverRating : rating) >= starVal;
                    return (
                      <button
                        key={starVal}
                        type="button"
                        onMouseEnter={() => setHoverRating(starVal)}
                        onMouseLeave={() => setHoverRating(null)}
                        onClick={() => setRating(starVal)}
                        className="p-1 rounded-lg transition transform hover:scale-115 active:scale-95 cursor-pointer"
                        title={`${starVal} sao`}
                      >
                        <Star
                          className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                            isFilled
                              ? 'text-amber-400 fill-amber-400 drop-shadow-xs'
                              : 'text-slate-300 dark:text-zinc-700'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="text-center font-bold text-xs text-amber-600 dark:text-amber-400">
                  {ratingLabels[hoverRating !== null ? hoverRating : rating]}
                </div>
              </div>
            </div>

            {/* Câu 3: Thắc mắc hay đóng góp */}
            <div className="space-y-2 pt-1">
              <label className="block text-xs font-bold text-slate-800 dark:text-zinc-200">
                3. Bạn có thắc mắc hay đóng góp gì với chủ kênh không?
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setHasFeedback('Có')}
                  className={`py-2 px-3 rounded-xl border text-center font-medium transition cursor-pointer ${
                    hasFeedback === 'Có'
                      ? 'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-700 dark:text-rose-300 font-bold ring-1 ring-rose-500/30'
                      : 'bg-slate-50/70 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100'
                  }`}
                >
                  💬 Có thắc mắc / đóng góp
                </button>
                <button
                  type="button"
                  onClick={() => setHasFeedback('Không')}
                  className={`py-2 px-3 rounded-xl border text-center font-medium transition cursor-pointer ${
                    hasFeedback === 'Không'
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold ring-1 ring-emerald-500/30'
                      : 'bg-slate-50/70 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-100'
                  }`}
                >
                  👍 Không, rất hài lòng
                </button>
              </div>

              {/* Hộp chỉ dẫn & nhập tin nhắn nếu chọn "Có" */}
              {hasFeedback === 'Có' && (
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-2 animate-fade-in">
                  <div className="text-[11.5px] text-amber-900 dark:text-amber-200 leading-relaxed font-medium">
                    💌 <strong>Nhắn tin trực tiếp:</strong> Bạn cứ thoải mái inbox trực tiếp qua Facebook hoặc TikTok của chủ kênh nhé! Ngoài ra, bạn cũng có thể nhắn nhanh ở đây:
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Nhập nội dung thắc mắc hoặc câu hỏi cần giải đáp..."
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    className="w-full p-2 bg-white dark:bg-zinc-900 border border-amber-300 dark:border-amber-700 rounded-lg text-xs text-slate-900 dark:text-zinc-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-2.5 px-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:bg-slate-50 text-xs font-semibold transition flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Quay lại</span>
              </button>

              <button
                type="button"
                onClick={() => handleFinalSubmit(false)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-98"
              >
                <span>Hoàn tất & Bắt đầu luyện thi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Optional Skip button */}
            <div className="text-center pt-1">
              <button
                type="button"
                onClick={() => handleFinalSubmit(true)}
                className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300 transition cursor-pointer"
              >
                Bỏ qua khảo sát, vào thẳng phòng thi →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
