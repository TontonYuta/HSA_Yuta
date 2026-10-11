import React, { useState } from 'react';
import { X, BookOpen, Search, Calculator, Layers, Shapes, Compass, BarChart2 } from 'lucide-react';
import { MathRenderer } from './MathRenderer';

interface FormulaSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormulaSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: { name: string; latex: string; note?: string }[];
}

const FORMULA_SECTIONS: FormulaSection[] = [
  {
    id: 'dao_ham',
    title: 'Đạo hàm & Khảo sát hàm số',
    icon: <Calculator className="w-4 h-4 text-emerald-500" />,
    items: [
      {
        name: 'Đạo hàm hàm hợp cơ bản',
        latex: '$$(u^\\alpha)\' = \\alpha u^{\\alpha-1} u\', \\quad (\\sqrt{u})\' = \\frac{u\'}{2\\sqrt{u}}, \\quad \\left(\\frac{1}{u}\\right)\' = -\\frac{u\'}{u^2}$$',
      },
      {
        name: 'Đạo hàm Mũ & Logarit',
        latex: '$$(a^u)\' = u\' a^u \\ln a, \\quad (e^u)\' = u\' e^u, \\quad (\\log_a u)\' = \\frac{u\'}{u \\ln a}, \\quad (\\ln u)\' = \\frac{u\'}{u}$$',
      },
      {
        name: 'Đạo hàm hàm phân thức bậc 1 / bậc 1 & bậc 2 / bậc 1',
        latex: '$$\\left(\\frac{ax + b}{cx + d}\\right)\' = \\frac{ad - bc}{(cx + d)^2}, \\quad \\left(\\frac{ax^2 + bx + c}{px + q}\\right)\' = \\frac{ap x^2 + 2aq x + (bq - cp)}{(px + q)^2}$$',
      },
      {
        name: 'Tiệm cận xiên phân thức bậc 2 / bậc 1',
        latex: '$$y = \\frac{ax^2 + bx + c}{px + q} = \\frac{a}{p}x + \\frac{bp - aq}{p^2} + \\frac{R}{px + q} \\implies y = \\frac{a}{p}x + \\frac{bp - aq}{p^2}$$',
      },
    ],
  },
  {
    id: 'nguyen_ham_tich_phan',
    title: 'Nguyên hàm & Tích phân',
    icon: <Layers className="w-4 h-4 text-amber-500" />,
    items: [
      {
        name: 'Bảng nguyên hàm mở rộng cơ bản',
        latex: '$$\\int (ax+b)^n dx = \\frac{(ax+b)^{n+1}}{a(n+1)} + C, \\quad \\int \\frac{1}{ax+b} dx = \\frac{1}{a} \\ln|ax+b| + C$$',
      },
      {
        name: 'Nguyên hàm lượng giác mở rộng',
        latex: '$$\\int \\cos(ax+b) dx = \\frac{1}{a}\\sin(ax+b) + C, \\quad \\int \\sin(ax+b) dx = -\\frac{1}{a}\\cos(ax+b) + C$$',
      },
      {
        name: 'Tích phân từng phần',
        latex: '$$\\int_a^b u \\, dv = u v \\Big|_a^b - \\int_a^b v \\, du$$',
        note: 'Thứ tự ưu tiên đặt u: Nhất Lô, Nhì Đa, Tam Lượng, Tứ Mũ',
      },
      {
        name: 'Ứng dụng tích phân tính Diện tích & Thể tích tròn xoay',
        latex: '$$S = \\int_a^b |f(x) - g(x)| dx, \\quad V_{Ox} = \\pi \\int_a^b [f(x)]^2 dx$$',
      },
      {
        name: 'Quãng đường chuyển động theo vận tốc v(t)',
        latex: '$$s(t) = \\int_{t_1}^{t_2} v(t) dt, \\quad v(t) = \\int a(t) dt$$',
      },
    ],
  },
  {
    id: 'hinh_khong_gian',
    title: 'Hình học không gian & Khối tròn xoay',
    icon: <Shapes className="w-4 h-4 text-violet-500" />,
    items: [
      {
        name: 'Thể tích khối chóp & Khối lăng trụ',
        latex: '$$V_{\\text{chóp}} = \\frac{1}{3} S_{\\text{đáy}} \\cdot h, \\quad V_{\\text{lăng trụ}} = S_{\\text{đáy}} \\cdot h$$',
      },
      {
        name: 'Khối tứ diện vuông đỉnh O',
        latex: '$$OA \\perp OB \\perp OC \\implies V = \\frac{1}{6} OA \\cdot OB \\cdot OC, \\quad \\frac{1}{h^2} = \\frac{1}{OA^2} + \\frac{1}{OB^2} + \\frac{1}{OC^2}$$',
      },
      {
        name: 'Khối nón, Khối trụ & Khối cầu',
        latex: '$$V_{\\text{nón}} = \\frac{1}{3}\\pi r^2 h, \\quad V_{\\text{trụ}} = \\pi r^2 h, \\quad V_{\\text{cầu}} = \\frac{4}{3}\\pi R^3, \\quad S_{\\text{mặt cầu}} = 4\\pi R^2$$',
      },
    ],
  },
  {
    id: 'toa_do_oxyz',
    title: 'Phương pháp tọa độ Oxyz',
    icon: <Compass className="w-4 h-4 text-sky-500" />,
    items: [
      {
        name: 'Khoảng cách từ điểm đến mặt phẳng',
        latex: '$$d(M_0, (P)) = \\frac{|A x_0 + B y_0 + C z_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$',
      },
      {
        name: 'Phương trình mặt phẳng theo đoạn chắn',
        latex: '$$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1 \\quad (a, b, c \\ne 0)$$',
      },
      {
        name: 'Phương trình mặt cầu & Bán kính',
        latex: '$$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2 \\iff x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0 \\quad (R = \\sqrt{a^2+b^2+c^2-d})$$',
      },
      {
        name: 'Tích có hướng của hai vectơ',
        latex: '$$[\\vec{u}, \\vec{v}] = (y_1 z_2 - z_1 y_2; \\, z_1 x_2 - x_1 z_2; \\, x_1 y_2 - y_1 x_2)$$',
      },
    ],
  },
  {
    id: 'xac_suat_thong_ke',
    title: 'Xác suất Bayes & Thống kê ghép nhóm',
    icon: <BarChart2 className="w-4 h-4 text-rose-500" />,
    items: [
      {
        name: 'Công thức Xác suất toàn phần & Công thức Bayes',
        latex: '$$P(B) = \\sum_{i=1}^n P(A_i) P(B|A_i), \\quad P(A_k|B) = \\frac{P(A_k) P(B|A_k)}{P(B)}$$',
      },
      {
        name: 'Tứ phân vị ghép nhóm (Q1 & Q3)',
        latex: '$$Q_p = a_m + \\frac{\\frac{p \\cdot n}{4} - C_{m-1}}{n_m} \\cdot (a_{m+1} - a_m) \\quad (p = 1, 2, 3)$$',
        note: 'Khoảng tứ phân vị: \\Delta_Q = Q_3 - Q_1',
      },
      {
        name: 'Cấp số cộng & Cấp số nhân',
        latex: '$$u_n = u_1 + (n-1)d, \\, S_n = \\frac{n(u_1 + u_n)}{2}; \\quad u_n = u_1 q^{n-1}, \\, S_n = \\frac{u_1(1 - q^n)}{1 - q}$$',
      },
    ],
  },
];

export const FormulaSheetModal: React.FC<FormulaSheetModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('dao_ham');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle ESC key to close modal
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentSection = FORMULA_SECTIONS.find((s) => s.id === activeTab) || FORMULA_SECTIONS[0];

  const filteredSections = searchQuery.trim()
    ? FORMULA_SECTIONS.map((sec) => ({
        ...sec,
        items: sec.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.note && item.note.toLowerCase().includes(searchQuery.toLowerCase()))
        ),
      })).filter((sec) => sec.items.length > 0)
    : [currentSection];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-fade-in select-none"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:px-6 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between gap-3 bg-slate-50/80 dark:bg-zinc-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100">
                Sổ Tay Tra Cứu Công Thức Trọng Tâm HSA
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Toàn diện 5 khối kiến thức cốt lõi chuẩn định dạng đánh giá năng lực ĐHQGHN
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 hover:bg-slate-200/60 dark:hover:bg-zinc-800 transition cursor-pointer"
            title="Đóng bảng công thức"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search & Tabs */}
        <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-slate-200 dark:border-zinc-800 space-y-3 bg-white dark:bg-[#121216]">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm nhanh công thức (đạo hàm, tích phân, khoảng cách, Bayes...)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 focus:outline-none focus:border-sky-500"
            />
          </div>

          {!searchQuery && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {FORMULA_SECTIONS.map((sec) => {
                const isActive = activeTab === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setActiveTab(sec.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-zinc-800/80 text-slate-600 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {sec.icon}
                    <span>{sec.title}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredSections.map((sec) => (
            <div key={sec.id} className="space-y-3">
              {searchQuery && (
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  {sec.icon}
                  <span>{sec.title}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-3">
                {sec.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/90 dark:border-zinc-800/90 space-y-2"
                  >
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-zinc-100">
                      {item.name}
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-zinc-950 border border-slate-200/70 dark:border-zinc-800/70 overflow-x-auto text-sm text-center">
                      <MathRenderer content={item.latex} />
                    </div>
                    {item.note && (
                      <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                        💡 {item.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredSections.length === 0 && (
            <div className="py-12 text-center text-slate-400 text-xs sm:text-sm">
              Không tìm thấy công thức phù hợp với từ khóa "{searchQuery}".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:px-6 border-t border-slate-200 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/60 flex items-center justify-between text-xs text-slate-500">
          <span>Bấm phím <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-zinc-800 font-mono text-[10px]">ESC</kbd> để đóng nhanh</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
