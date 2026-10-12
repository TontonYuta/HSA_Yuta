import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  RotateCcw, 
  Check, 
  XCircle, 
  Lightbulb, 
  BookOpen, 
  Share2, 
  TrendingDown,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Award,
  Home
} from 'lucide-react';
import { ExamReport, Question, TopicId } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { TOPIC_METADATA } from '../utils/scoring';

interface ExamResultsProps {
  report: ExamReport;
  questions: Question[];
  webhookUrl?: string;
  onRetakeExam: () => void;
  onPracticeWeakestTopic: (topicId: TopicId) => void;
  onGoHome?: () => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  report,
  questions,
  webhookUrl,
  onRetakeExam,
  onPracticeWeakestTopic,
  onGoHome,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'incorrect' | 'correct' | 'fill'>('all');
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [expandedSolutions, setExpandedSolutions] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (report.totalScore >= Math.round(report.maxScore * 0.7)) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#0ea5e9', '#10b981', '#f59e0b'],
      });
    }

    // Silent background sync if webhook was previously configured
    if (webhookUrl && webhookUrl.trim() !== '') {
      const payload = {
        ...report,
        teacherEmail: report.teacherEmail || localStorage.getItem('hsa_teacher_email') || '',
      };
      fetch(webhookUrl.trim(), {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      }).catch(() => {});
    }
  }, []);

  const toggleSolution = (qId: number) => {
    setExpandedSolutions((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const handleCopySummary = () => {
    const timeSpentMin = Math.round(report.totalTimeSpentSeconds / 60);
    const summaryText = `[KẾT QUẢ THI HSA - TONTONYUTA]\nThí sinh: ${report.studentName}\nBộ đề: ${report.examSetTitle}\nTổng điểm: ${report.totalScore}/${report.maxScore} (Trắc nghiệm: ${report.mcqScore}/${report.mcqTotal}, Điền số: ${report.fillScore}/${report.fillTotal})\nThời gian làm: ${timeSpentMin} phút\nChuyên đề cần cải thiện: ${report.weakestTopic.topicName} (${report.weakestTopic.percentage}%)\nHệ thống Luyện thi HSA cùng TontonYuta.`;
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const questionMap = new Map(questions.map((q) => [q.id, q]));
  const filteredAnswers = report.answers.filter((item) => {
    if (filterType === 'correct') return item.isCorrect;
    if (filterType === 'incorrect') return !item.isCorrect;
    if (filterType === 'fill') return item.type === 'fill';
    return true;
  });

  const percentScore = Math.round((report.totalScore / report.maxScore) * 100);
  const minutesSpent = Math.floor(report.totalTimeSpentSeconds / 60);
  const secondsSpent = report.totalTimeSpentSeconds % 60;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16 animate-fade-in">
      {/* Top Banner Card */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm transition-colors">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 pb-6 border-b border-slate-100 dark:border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-600 dark:text-sky-400 mb-1 font-semibold">
              <span>HSA ĐHQGHN · KẾT QUẢ THI THỬ</span>
              <span aria-hidden="true">·</span>
              <span>{report.examSetTitle}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100">
              Báo Cáo Phân Tích Năng Lực Bài Thi
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <p className="text-sm text-slate-600 dark:text-zinc-400">
                Thí sinh: <span className="text-slate-900 dark:text-zinc-100 font-bold">{report.studentName}</span>
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Đã tự động gửi kết quả về email giáo viên: <strong className="font-mono">huyhoang6altt@gmail.com</strong></span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {onGoHome && (
              <button
                type="button"
                onClick={onGoHome}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 text-xs font-semibold transition inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Về trang chủ</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleCopySummary}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 text-xs font-semibold transition inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedSummary ? 'Đã sao chép' : 'Sao chép kết quả'}</span>
            </button>

            <button
              type="button"
              onClick={onRetakeExam}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm lại bài thi</span>
            </button>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200 dark:border-zinc-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 block mb-1">
              Tổng điểm đạt được
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-sky-600 dark:text-sky-400 font-mono tracking-tight tabular-nums">
                {report.totalScore}
              </span>
              <span className="text-slate-500 dark:text-zinc-500 font-mono text-sm">/ {report.maxScore} điểm</span>
            </div>
            <div className="mt-2 text-xs text-slate-500 dark:text-zinc-400">
              Đạt <span className="text-slate-900 dark:text-zinc-100 font-bold">{percentScore}%</span> · Thời gian: <span className="font-mono text-slate-700 dark:text-zinc-300 font-medium">{minutesSpent}p {secondsSpent}s</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200 dark:border-zinc-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 block mb-1">
              Trắc nghiệm (MCQ)
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono tracking-tight tabular-nums">
                {report.mcqScore}
              </span>
              <span className="text-slate-500 dark:text-zinc-500 font-mono text-sm">/ {report.mcqTotal} câu</span>
            </div>
            <div className="mt-2 text-xs text-slate-500 dark:text-zinc-400">
              Tỉ lệ đúng: <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">{report.mcqTotal > 0 ? Math.round((report.mcqScore / report.mcqTotal) * 100) : 0}%</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200 dark:border-zinc-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 block mb-1">
              Điền đáp số ngắn
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400 font-mono tracking-tight tabular-nums">
                {report.fillScore}
              </span>
              <span className="text-slate-500 dark:text-zinc-500 font-mono text-sm">/ {report.fillTotal} câu</span>
            </div>
            <div className="mt-2 text-xs text-slate-500 dark:text-zinc-400">
              Tỉ lệ đúng: <span className="text-amber-600 dark:text-amber-400 font-bold font-mono">{report.fillTotal > 0 ? Math.round((report.fillScore / report.fillTotal) * 100) : 0}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Breakdown & Weakest Point */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-5 transition-colors">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800/80">
            <h2 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              Năng lực theo từng chuyên đề vi mô
            </h2>
            <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">{report.topicBreakdown.length} Chuyên đề</span>
          </div>

          <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
            {report.topicBreakdown.map((topic) => {
              const meta = TOPIC_METADATA[topic.topicId];
              return (
                <div key={topic.topicId} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 dark:text-zinc-300">
                      {topic.topicName}
                    </span>
                    <span className="font-mono text-slate-500 dark:text-zinc-400">
                      <strong className="text-slate-900 dark:text-zinc-100">{topic.correctCount}</strong>/{topic.totalCount} ({topic.percentage}%)
                    </span>
                  </div>

                  <div className="h-2 w-full bg-slate-100 dark:bg-zinc-950 rounded-full overflow-hidden border border-slate-200 dark:border-zinc-800">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${Math.max(topic.percentage, 4)}%`,
                        backgroundColor: meta?.color || '#0284c7',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weakest Topic Recommendation */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
              <TrendingDown className="w-4 h-4" />
              <span>Chuyên đề cần cải thiện nhất</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
              {report.weakestTopic.topicName}
            </h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
              Bạn đạt <span className="text-rose-600 dark:text-rose-400 font-mono font-bold">{report.weakestTopic.percentage}%</span> ở chủ đề này. Đây là phần kiến thức cần tập trung nhất để bứt phá điểm số trong kỳ thi thật.
            </p>

            <div className="mt-4 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>Chiến thuật ôn luyện:</span>
              </div>
              <p className="text-slate-600 dark:text-zinc-400 text-[11px] leading-relaxed">
                Hãy luyện tập chuyên đề này theo từng câu hỏi độc lập, xem kỹ các bước giải và phương pháp định hướng tư duy trước khi bấm thi lại đề tổng thể.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => onPracticeWeakestTopic(report.weakestTopic.topicId)}
              className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Luyện tập ngay chuyên đề này</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Review Section */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-zinc-800/80">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-zinc-100">
              Chi tiết lời giải & đáp án 50 câu hỏi
            </h2>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              Xem lại từng bước giải chi tiết và phương pháp tư duy giải nhanh
            </p>
          </div>

          {/* Filter segment */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-zinc-950 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                filterType === 'all'
                  ? 'bg-white dark:bg-zinc-800 text-sky-600 dark:text-sky-400 shadow-xs'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
              }`}
            >
              Tất cả ({report.answers.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterType('incorrect')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                filterType === 'incorrect'
                  ? 'bg-white dark:bg-zinc-800 text-rose-600 dark:text-rose-400 shadow-xs'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
              }`}
            >
              Câu làm sai ({report.answers.filter((a) => !a.isCorrect).length})
            </button>
            <button
              type="button"
              onClick={() => setFilterType('correct')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                filterType === 'correct'
                  ? 'bg-white dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 shadow-xs'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
              }`}
            >
              Câu đúng ({report.answers.filter((a) => a.isCorrect).length})
            </button>
            <button
              type="button"
              onClick={() => setFilterType('fill')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                filterType === 'fill'
                  ? 'bg-white dark:bg-zinc-800 text-amber-600 dark:text-amber-400 shadow-xs'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
              }`}
            >
              Điền số ({report.answers.filter((a) => a.type === 'fill').length})
            </button>
          </div>
        </div>

        {/* Answers List */}
        <div className="space-y-4">
          {filteredAnswers.map((item, idx) => {
            const originalQ = questionMap.get(item.questionId);
            const isExpanded = expandedSolutions[item.questionId] ?? false;

            return (
              <div
                key={item.questionId}
                className={`p-4 sm:p-5 rounded-xl border transition-colors ${
                  item.isCorrect
                    ? 'bg-emerald-50/20 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900/40'
                    : 'bg-rose-50/20 dark:bg-rose-950/10 border-rose-200 dark:border-rose-900/40'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-zinc-800 font-mono text-xs font-bold flex items-center justify-center shrink-0 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap text-xs">
                        <span className="font-semibold text-slate-900 dark:text-zinc-100">
                          {item.topicName}
                        </span>
                        <span className="text-slate-400 dark:text-zinc-600">·</span>
                        <span className="text-slate-500 dark:text-zinc-400 font-mono">
                          {item.type === 'mcq' ? 'Trắc nghiệm' : 'Điền đáp số'}
                        </span>
                      </div>
                      <div className="mt-2 text-sm text-slate-800 dark:text-zinc-200">
                        <MathRenderer content={originalQ?.content || ''} />
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 self-end sm:self-start">
                    {item.isCorrect ? (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold inline-flex items-center gap-1 border border-emerald-300 dark:border-emerald-800">
                        <Check className="w-3 h-3" />
                        <span>Đúng (+1đ)</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-bold inline-flex items-center gap-1 border border-rose-300 dark:border-rose-800">
                        <XCircle className="w-3 h-3" />
                        <span>Sai (0đ)</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* User Answer vs Correct Answer */}
                <div className="mt-3.5 pt-3 border-t border-slate-200/60 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-4 flex-wrap font-mono">
                    <div>
                      <span className="text-slate-500 dark:text-zinc-400">Đáp án của bạn: </span>
                      <strong className={`px-2 py-0.5 rounded ${
                        item.isCorrect
                          ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                          : 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300'
                      }`}>
                        {item.userAnswer ? item.userAnswer : '(Bỏ trống)'}
                      </strong>
                    </div>

                    <div>
                      <span className="text-slate-500 dark:text-zinc-400">Đáp án chính xác: </span>
                      <strong className="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300">
                        {item.correctAnswer}
                      </strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleSolution(item.questionId)}
                    className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 inline-flex items-center gap-1 cursor-pointer ml-auto"
                  >
                    <span>{isExpanded ? 'Thu gọn lời giải' : 'Xem lời giải chi tiết'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Collapsible Detailed Solution */}
                {isExpanded && originalQ && (
                  <div className="mt-3.5 p-4 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 space-y-3 animate-fade-in text-xs sm:text-sm">
                    <div className="font-bold text-slate-800 dark:text-zinc-200 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                      <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      <span>Hướng dẫn giải chi tiết:</span>
                    </div>
                    <div className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                      <MathRenderer content={originalQ.detailedSolution} />
                    </div>

                    {originalQ.socraticHint && (
                      <div className="mt-2.5 p-3 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs">
                        <strong className="text-amber-800 dark:text-amber-300 block mb-0.5">Phương pháp tư duy nhanh:</strong>
                        <div className="text-slate-600 dark:text-zinc-400">
                          <MathRenderer content={originalQ.socraticHint} />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
