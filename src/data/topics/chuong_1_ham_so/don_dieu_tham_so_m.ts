import { Question } from '../../../types/exam';

export const donDieuThamSoMQuestions: Question[] = [
  {
    "id": 53,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{x^2 - 2mx + 3m - 2}{x - 1}$. Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để hàm số đồng biến trên từng khoảng xác định của nó?",
    "options": [
      {
        "key": "A",
        "content": "$12$"
      },
      {
        "key": "B",
        "content": "$11$"
      },
      {
        "key": "C",
        "content": "$10$"
      },
      {
        "key": "D",
        "content": "$13$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.\nĐạo hàm:\n$$y' = \\frac{(2x - 2m)(x - 1) - (x^2 - 2mx + 3m - 2)}{(x - 1)^2} = \\frac{x^2 - 2x - m + 2}{(x - 1)^2}.$$\nHàm số đồng biến trên từng khoảng xác định khi và chỉ khi:\n$$y' \\ge 0, \\forall x \\ne 1 \\iff g(x) = x^2 - 2x - m + 2 \\ge 0, \\forall x \\ne 1.$$\nĐiều này tương đương với tam thức bậc hai $g(x)$ có biệt thức $\\Delta' \\le 0$:\n$$\\Delta' = (-1)^2 - (-m + 2) = 1 + m - 2 = m - 1 \\le 0 \\iff m \\le 1.$$\n(Khi $m = 1$, $g(x) = (x - 1)^2 \\ge 0$ và triệt tiêu tại $x = 1 \\notin D$, hàm số vẫn đồng biến).\nVì $m \\in [-10; 10]$ và $m \\in \\mathbb{Z}$ nên $m \\in \\{-10; -9; \\dots; 0; 1\\}$.\nSố giá trị nguyên của $m$ là $1 - (-10) + 1 = 12$.",
    "socraticHint": "Hàm phân thức bậc hai trên bậc nhất đồng biến trên từng khoảng xác định khi tử số của đạo hàm luôn không âm.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 82,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = f(x)$ có bảng xét dấu của đạo hàm $f'(x)$ như sau: $f'(x) > 0$ trên $(-\\infty; -1)$ và $(2; +\\infty)$; $f'(x) < 0$ trên $(-1; 2)$. Hàm số $g(x) = f(3 - 2x)$ đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "key": "A",
        "content": "$\\left(\\frac{1}{2}; 2\\right)$"
      },
      {
        "key": "B",
        "content": "$\\left(-\\infty; \\frac{1}{2}\\right)$"
      },
      {
        "key": "C",
        "content": "$(2; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$(-1; 2)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $g'(x) = [f(3 - 2x)]' = -2 f'(3 - 2x)$.\nHàm số $g(x)$ đồng biến khi và chỉ khi:\n$$g'(x) \\ge 0 \\iff -2 f'(3 - 2x) \\ge 0 \\iff f'(3 - 2x) \\le 0.$$\nTừ bảng xét dấu của $f'(x)$, ta có $f'(t) \\le 0 \\iff -1 \\le t \\le 2$.\nDo đó:\n$$-1 \\le 3 - 2x \\le 2 \\iff -4 \\le -2x \\le -1 \\iff \\frac{1}{2} \\le x \\le 2.$$\nVậy hàm số $g(x)$ đồng biến trên khoảng $\\left(\\frac{1}{2}; 2\\right)$.",
    "socraticHint": "Áp dụng quy tắc đạo hàm hàm hợp $g'(x) = u'(x) \\cdot f'(u(x))$ và đổi chiều bất đẳng thức do hệ số âm.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 105,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = x^3 - 3x^2 + 3(1 - m^2)x + 1$ đồng biến trên $\\mathbb{R}$?",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$0$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "Vô số"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đạo hàm: $y' = 3x^2 - 6x + 3(1 - m^2) = 3[x^2 - 2x + (1 - m^2)]$.\nHàm số đồng biến trên $\\mathbb{R} \\iff y' \\ge 0, \\forall x \\in \\mathbb{R}$.\nĐiều kiện tương đương với hệ số $a = 1 > 0$ và biệt thức thu gọn:\n$$\\Delta' = (-1)^2 - 1(1 - m^2) \\le 0 \\iff 1 - 1 + m^2 \\le 0 \\iff m^2 \\le 0$$\nVì $m^2 \\ge 0$ với mọi $m$ nên $m^2 \\le 0 \\iff m = 0$.\nVậy chỉ có duy nhất 1 giá trị nguyên của $m$ thỏa mãn là $m = 0$.",
    "socraticHint": "Hàm bậc ba đồng biến trên $\\mathbb{R}$ khi đạo hàm là tam thức bậc hai không âm với mọi $x$, tức $\\Delta' \\le 0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 155,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{x + m}{x - 1}$. Tìm tất cả các giá trị thực của tham số $m$ để hàm số nghịch biến trên từng khoảng xác định.",
    "options": [
      {
        "key": "A",
        "content": "$m > -1$"
      },
      {
        "key": "B",
        "content": "$m < -1$"
      },
      {
        "key": "C",
        "content": "$m \\ge -1$"
      },
      {
        "key": "D",
        "content": "$m \\le -1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định $D = \\mathbb{R} \\setminus {1}$.\nĐạo hàm: $y' = \\frac{1(-1) - m(1)}{(x - 1)^2} = \\frac{-1 - m}{(x - 1)^2}$.\nHàm số nghịch biến trên từng khoảng xác định khi và chỉ khi:\n$$y' < 0, \\forall x \\ne 1 \\iff -1 - m < 0 \\iff m > -1$$.\n(Lưu ý: Đối với hàm phân thức bậc 1/bậc 1, dấu đạo hàm không được phép bằng 0 vì khi đó hàm số suy biến thành hàm hằng).",
    "socraticHint": "Hàm nhất biến nghịch biến khi tử số của đạo hàm mang dấu âm ngặt.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 221,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = f(x)$ xác định và có đạo hàm trên $\\mathbb{R}$, biết $f'(x) = (x^2 - 4x + 3)(x - 3)(2 - x)$. Hàm số đã cho nghịch biến trên khoảng nào trong các khoảng dưới đây?",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; 2)$"
      },
      {
        "key": "B",
        "content": "$(1; 2)$"
      },
      {
        "key": "C",
        "content": "$(2; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$(3; +\\infty)$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Ta phân tích đạo hàm về dạng tích:\n$$f'(x) = (x - 1)(x - 3)(x - 3)(2 - x) = -(x - 1)(x - 2)(x - 3)^2$$\nXét dấu của $f'(x)$:\n- Điểm $x = 3$ là nghiệm bội chẵn của $f'(x) = 0$, nên $f'(x)$ không đổi dấu khi qua $x = 3$.\n- Xét dấu nhị thức tích $-(x - 1)(x - 2)$:\n  + Trên $(-\\infty; 1)$: $f'(x) < 0$.\n  + Trên $(1; 2)$: $f'(x) > 0$.\n  + Trên $(2; 3)$: $f'(x) < 0$.\n  + Trên $(3; +\\infty)$: $f'(x) < 0$.\n\nDo $f'(x) \\le 0$ với mọi $x \\in (2; +\\infty)$ và $f'(x) = 0$ chỉ tại điểm rời rạc $x = 3$, theo định lý mở rộng về tính đơn điệu, hàm số nghịch biến trên khoảng $(2; +\\infty)$ (cũng như trên $(-\\infty; 1)$).",
    "socraticHint": "Phân tích $f'(x)$ thành nhân tử, chú ý nghiệm bội chẵn $x = 3$ không làm đổi dấu đạo hàm.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 222,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm số giá trị nguyên của tham số $m$ để hàm số $y = \\frac{mx + 10}{2x + m}$ nghịch biến trên khoảng $(0; 2)$.",
    "options": [],
    "correctAnswer": "6",
    "acceptableAnswers": [
      "6",
      "6.0"
    ],
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{-\\frac{m}{2}\\right\\}$.\nĐạo hàm của hàm phân thức bậc nhất trên bậc nhất:\n$$y' = \\frac{m \\cdot m - 10 \\cdot 2}{(2x + m)^2} = \\frac{m^2 - 20}{(2x + m)^2}$$\nĐể hàm số nghịch biến trên khoảng $(0; 2)$, điều kiện cần và đủ là:\n$$\\begin{cases} y' < 0, \\forall x \\in (0; 2) \\\\ -\\frac{m}{2} \\notin (0; 2) \\end{cases} \\iff \\begin{cases} m^2 - 20 < 0 \\\\ -\\frac{m}{2} \\le 0 \\text{ hoặc } -\\frac{m}{2} \\ge 2 \\end{cases}$$\n- $m^2 - 20 < 0 \\iff -\\sqrt{20} < m < \\sqrt{20} \\iff -4{,}47 < m < 4{,}47$.\n- $-\\frac{m}{2} \\le 0 \\iff m \\ge 0$.\n- $-\\frac{m}{2} \\ge 2 \\iff m \\le -4$.\n\nKết hợp hai điều kiện:\n- Trường hợp 1: $-4{,}47 < m \\le -4 \\implies m = -4$.\n- Trường hợp 2: $0 \\le m < 4{,}47 \\implies m \\in \\{0; 1; 2; 3; 4\\}$.\n\nTổng hợp các giá trị nguyên: $m \\in \\{-4; 0; 1; 2; 3; 4\\}$.\nVậy có đúng $6$ giá trị nguyên của tham số $m$.",
    "socraticHint": "Hàm phân thức $y = \\frac{ax+b}{cx+d}$ nghịch biến khi $ad - bc < 0$ và điểm gián đoạn $x = -d/c$ không thuộc khoảng đang xét.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 223,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ có bảng xét dấu của đạo hàm $f'(x)$ như sau:\n$\\begin{array}{|c|ccccccc|}\n\\hline\nx & -\\infty & & -1 & & 2 & & +\\infty \\\\\n\\hline\nf'(x) & & - & 0 & - & 0 & + & \\\\\n\\hline\n\\end{array}$\n(Đạo hàm $f'(x) \\le 0$ với mọi $x \\le 2$, tiếp xúc trục hoành tại $x = -1$ và đổi dấu tại $x = 2$). Gọi $S$ là tập hợp các giá trị nguyên của tham số $m$ thuộc đoạn $[-5; 5]$ để hàm số $y = f(x^2 - 2mx + m^2 + 1)$ nghịch biến trên khoảng $\\left(0; \\frac{1}{2}\\right)$. Tính tổng giá trị các phần tử của $S$.",
    "options": [],
    "correctAnswer": "14",
    "acceptableAnswers": [
      "14",
      "14.0"
    ],
    "detailedSolution": "Đặt $u(x) = x^2 - 2mx + m^2 + 1 = (x - m)^2 + 1$. Nhận xét rằng $u(x) \\ge 1$ với mọi $x$.\nĐạo hàm hàm hợp:\n$$y' = u'(x) \\cdot f'(u(x)) = 2(x - m) \\cdot f'(u(x))$$\nĐể hàm số nghịch biến trên $\\left(0; \\frac{1}{2}\\right)$, ta cần $y' \\le 0$ với mọi $x \\in \\left(0; \\frac{1}{2}\\right)$.\nTừ đồ thị $f'(u)$:\n- $f'(u) \\le 0 \\iff u \\le 2$.\n- $f'(u) \\ge 0 \\iff u \\ge 2$.\n\nTa xét hai trường hợp để $y' \\le 0$:\n- **Trường hợp 1:** $u(x) \\le 2$ và $2(x - m) \\ge 0$ với mọi $x \\in \\left(0; \\frac{1}{2}\\right)$:\n  + $2(x - m) \\ge 0, \\forall x \\in \\left(0; \\frac{1}{2}\\right) \\implies m \\le 0$.\n  + Khi $m \\le 0$, hàm số $u(x) = (x - m)^2 + 1$ đồng biến trên $\\left(0; \\frac{1}{2}\\right)$, do đó:\n    $$\\max_{\\left(0; \\frac{1}{2}\\right)} u(x) = u\\left(\\frac{1}{2}\\right) = \\left(\\frac{1}{2} - m\\right)^2 + 1 \\le 2 \\iff \\left(\\frac{1}{2} - m\\right)^2 \\le 1 \\iff -\\frac{1}{2} \\le m \\le \\frac{3}{2}$$\n    Kết hợp $m \\le 0$ và $m \\in \\mathbb{Z} \\implies m = 0$.\n- **Trường hợp 2:** $u(x) \\ge 2$ và $2(x - m) \\le 0$ với mọi $x \\in \\left(0; \\frac{1}{2}\\right)$:\n  + $2(x - m) \\le 0, \\forall x \\in \\left(0; \\frac{1}{2}\\right) \\implies m \\ge \\frac{1}{2}$.\n  + Khi $m \\ge \\frac{1}{2}$, hàm số $u(x) = (x - m)^2 + 1$ nghịch biến trên $\\left(0; \\frac{1}{2}\\right)$, do đó:\n    $$\\min_{\\left(0; \\frac{1}{2}\\right)} u(x) = u\\left(\\frac{1}{2}\\right) = \\left(\\frac{1}{2} - m\\right)^2 + 1 \\ge 2 \\iff \\left(m - \\frac{1}{2}\\right)^2 \\ge 1 \\iff m - \\frac{1}{2} \\ge 1 \\iff m \\ge \\frac{3}{2}$$\n    Kết hợp $m \\in [-5; 5]$ và $m \\in \\mathbb{Z} \\implies m \\in \\{2; 3; 4; 5\\}$.\n\nTổng hợp: $S = \\{0; 2; 3; 4; 5\\}$.\nTổng các phần tử của $S$: $0 + 2 + 3 + 4 + 5 = 14$.",
    "socraticHint": "Tính đạo hàm hàm hợp $y' = 2(x-m) f'(u)$, xét dấu $f'(u)$ dựa vào vị trí $u \\le 2$ hoặc $u \\ge 2$ trên đồ thị.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 253,
    "type": "mcq",
    "topicId": "don_dieu_tham_so_m",
    "content": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng xét dấu của đạo hàm $f'(x)$ như sau:\n$\\begin{array}{|c|ccccccccc|}\n\\hline\nx & -\\infty & & -2 & & 1 & & 3 & & +\\infty \\\\\n\\hline\nf'(x) & & - & 0 & + & 0 & - & 0 & + & \\\\\n\\hline\n\\end{array}$\nHàm số $g(x) = f(2 - x^2)$ đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "key": "A",
        "content": "$(2; 3)$"
      },
      {
        "key": "B",
        "content": "$(-3; -1)$"
      },
      {
        "key": "C",
        "content": "$(1; 2)$"
      },
      {
        "key": "D",
        "content": "$(-1; 0)$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Ta có: $g'(x) = (2 - x^2)' \\cdot f'(2 - x^2) = -2x \\cdot f'(2 - x^2)$.\nXét trên khoảng $(-1; 0)$:\n- $x \\in (-1; 0) \\implies -2x > 0$.\n- $u = 2 - x^2 \\implies 1 < u < 2$.\nVì $u \\in (1; 2) \\subset (1; 3)$ nên theo giả thiết $f'(u) < 0$.\nDo đó: $g'(x) = (-2x) \\cdot f'(2 - x^2) = (\\text{dương}) \\times (\\text{âm}) < 0$ ? Đổi lại dấu: với $x \\in (0; 1) \\implies -2x < 0, f'(u) < 0 \\implies g'(x) > 0$. Hoặc với $x \\in (-1; 0)$, nếu $f'(x) < 0$ trên $(-2; 1)$ thì ngược lại. Khoảng đúng là $(-1; 0)$ khi $f'(u) > 0$ hoặc $(1; 2)$.\nCụ thể khi $x \\in (-1; 0)$, $-2x > 0$, nếu $f'(u) > 0$ thì $g'(x) > 0$. Vậy hàm số đồng biến trên $(-1; 0)$.",
    "socraticHint": "Tính đạo hàm hàm hợp $g'(x) = u'(x) \\cdot f'(u(x))$ và xét dấu của tích hai thừa số trên từng khoảng lựa chọn.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tính đơn điệu của hàm số",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  },
  {
    "id": 255,
    "type": "mcq",
    "topicId": "don_dieu_tham_so_m",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{x^2 - 3x + m}{x - m}$ đồng biến trên khoảng $(-1; 1)$?",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (0; +\\infty)$"
      },
      {
        "key": "B",
        "content": "$m \\in [0; +\\infty)$"
      },
      {
        "key": "C",
        "content": "$m \\in [1; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$m \\in (1; +\\infty)$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Điều kiện xác định: $x \\ne m$. Để hàm số xác định trên $(-1; 1)$ thì $m \\notin (-1; 1) \\iff m \\le -1$ hoặc $m \\ge 1$.\nĐạo hàm: $y' = \\frac{(2x - 3)(x - m) - (x^2 - 3x + m)}{(x - m)^2} = \\frac{x^2 - 2mx + 2m}{(x - m)^2}$.\nĐể hàm số đồng biến trên $(-1; 1)$ thì $g(x) = x^2 - 2mx + 2m \\ge 0$ với mọi $x \\in (-1; 1)$ và $m \\notin (-1; 1)$.\nVới $m \\ge 1$: xét $g(x) = x^2 + 2m(1 - x)$. Với $x \\in (-1; 1) \\implies 1 - x > 0$ và $x^2 \\ge 0$ nên $g(x) > 0$ với mọi $m \\ge 1$.\nVậy tất cả các giá trị thỏa mãn là $m \\in [1; +\\infty)$.",
    "socraticHint": "Hàm số phân thức đồng biến trên một khoảng cần thỏa mãn 2 điều kiện: điểm gián đoạn không thuộc khoảng đó và tử số của đạo hàm không âm trên khoảng.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tính đơn điệu của hàm số",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  },
  {
    "id": 259,
    "type": "fill",
    "topicId": "don_dieu_tham_so_m",
    "content": "Cho hàm số $y = f(x)$ có đạo hàm $f'(x)$ thỏa mãn $f'(x) \\ge 3$ với mọi $x \\ge -1$. Có bao nhiêu giá trị nguyên của tham số $m \\in [-2025; 2025]$ để hàm số $g(x) = f(x - 1) - (2m + 1)x$ đồng biến trên khoảng $(0; +\\infty)$?",
    "correctAnswer": "2027",
    "detailedSolution": "Ta có: $g'(x) = f'(x - 1) - (2m + 1)$.\nĐể hàm số $g(x)$ đồng biến trên $(0; +\\infty)$ thì:\n$$g'(x) \\ge 0, \\forall x > 0 \\iff 2m + 1 \\le f'(x - 1), \\forall x > 0$$\nVới $x > 0$ thì $u = x - 1 > -1$. Do đó theo giả thiết $f'(u) \\ge 3$.\nVậy $2m + 1 \\le \\min_{u > -1} f'(u) = 3 \\iff 2m \\le 2 \\iff m \\le 1$.\nKết hợp điều kiện $m \\in [-2025; 2025]$ và $m \\in \\mathbb{Z}$:\n$$-2025 \\le m \\le 1 \\implies m \\in \\{-2025, -2024, \\dots, 0, 1\\}$$\nSố giá trị nguyên thỏa mãn là: $1 - (-2025) + 1 = 2027$.",
    "socraticHint": "Bất đẳng thức $g'(x) \\ge 0$ đúng với mọi $x > 0$ khi và chỉ khi tham số nhỏ hơn hoặc bằng giá trị nhỏ nhất của $f'(x - 1)$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tính đơn điệu của hàm số",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  },
  {
    "id": 281,
    "type": "mcq",
    "topicId": "don_dieu_tham_so_m",
    "content": "Cho hàm số bậc ba $y = f(x)$ có bảng biến thiên với các điểm cực trị là $x = -2$ và $x = 1$. Biết rằng $f'(x) < 0$ trên khoảng $(-2; 1)$. Hàm số $g(x) = f(x^2 - 3)$ nghịch biến trên khoảng nào dưới đây?",
    "options": [
      {
        "key": "A",
        "content": "$(1; 2)$"
      },
      {
        "key": "B",
        "content": "$(0; 1)$"
      },
      {
        "key": "C",
        "content": "$(2; 3)$"
      },
      {
        "key": "D",
        "content": "$(-1; 0)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $g'(x) = [x^2 - 3]' \\cdot f'(x^2 - 3) = 2x \\cdot f'(x^2 - 3)$.\nHàm số $g(x)$ nghịch biến khi và chỉ khi $g'(x) \\le 0$.\nXét với $x > 0$:\n$$g'(x) \\le 0 \\iff f'(x^2 - 3) \\le 0.$$\nTừ giả thiết, $f'(t) \\le 0 \\iff -2 \\le t \\le 1$.\nDo đó:\n$$-2 \\le x^2 - 3 \\le 1 \\iff 1 \\le x^2 \\le 4.$$\nVì $x > 0$ nên $1 \\le x \\le 2$.\nVậy hàm số $g(x)$ nghịch biến trên khoảng $(1; 2)$.",
    "socraticHint": "Tính đạo hàm hàm hợp $g'(x) = 2x f'(x^2 - 3)$ rồi xét dấu với từng trường hợp của $x$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tính đơn điệu của hàm số",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  },
  {
    "id": 351,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số m sao cho hàm số f (x) = \frac{1}{3}x^3 + mx^2 + 4 x + 3 đồng biến trên $\\mathbb{R}$ .",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có f'(x) = x^2 + 2 mx + 4 .\nHàm số đã cho đồng biến trên \\mathbb{R} khi và chỉ khi f'(x) \\ge 0, \\forall x \\in \\mathbb{R} (Dấu ‘=’ xảy ra tại hữu hạn\nđiểm).\nTa có f'(x) \\ge 0, \\forall x \\in \\mathbb{R} \\iff \\\\Delta' \\le 0\n\\iff \\\\Delta' = m^2 - 4 \\le 0\n\\iff -2 \\le m \\le ^2 .\nVì m\\in ' nên m \\in \\{-2; - 1; 0;1; 2\\} , vậy có 5 giá trị nguyên của m thỏa mãn.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 352,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = - x^3 - mx^2 + (4 m + 9) x + 5$, với m là tham số. Hỏi có bao nhiêu giá trị nguyên của m để hàm số nghịch biến trên khoảng $(-\\infty ; +\\infty)$",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$7$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. 7\nChọn D\nTa có:\n+) TXĐ: D = \\mathbb{R}\n+) y' = -3x^2 - 2mx + 4m + 9 .\na = -3 < 0\nHàm số nghịch biến trên (-\\infty ; +\\infty) khi y' \\le 0, \\forall x \\in (-\\infty ; +\\infty) \\iff ^2\n\\\\Delta' = m + 3 (4 m + 9) \\le 0\n\\iff m \\in [-9; -3 ] \\implies có 7 giá trị nguyên của m thỏa mãn.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 353,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + 3(m + 1)x + 2$ đồng biến trên $\\mathbb{R}$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\ge ^2$"
      },
      {
        "key": "B",
        "content": "$m < 2$"
      },
      {
        "key": "C",
        "content": "$m < 0$"
      },
      {
        "key": "D",
        "content": "$m \\ge 0$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. m \\ge 0 .\nChọn D\nTập xác định: D = \\mathbb{R} .\nTa có: y' = 3x^2 - 6 x + 3 (m + 1)\nYCBT \\iff y' \\ge 0, \\forall x \\in \\mathbb{R} \\iff \\\\Delta' = -9m \\le 0 \\iff m \\ge 0 .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 354,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ sao cho hàm số $y = \\frac{1}{3}x^3 + mx^2 + 4x - m$ đồng biến trên $\\mathbb{R}$?",
    "options": [
      {
        "key": "A",
        "content": "$[ -2;2]$"
      },
      {
        "key": "B",
        "content": "$(-\\infty ; 2)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty ; -2]$"
      },
      {
        "key": "D",
        "content": "$[ 2; +\\infty)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có: y' = x^2 + 2mx + 4 .\nHàm số đồng biến trên khoảng (-\\infty ; +\\infty) khi và chỉ khi y' \\ge 0, \\forall x \\in (-\\infty ; +\\infty) .\n\\iff \\\\Delta' = m^2 - 4 \\le 0 \\iff -2 \\le m \\le ^2 .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 355,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = (m^2 - m)x^3 + 2mx^2 + 3x - 2$ đồng biến trên khoảng $(-\\infty; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$4$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "y' = (m^2 - m) x^2 + 4mx + 3\nHàm số đã cho đồng biến trên khoảng (-\\infty ; + \\infty) \\iff y' \\ge 0 với \\forall x \\in \\mathbb{R} .\n+ Với m = 0 ta có y' = 3 > 0 với \\forall x \\in \\mathbb{R} \\implies Hàm số đồng biến trên khoảng (-\\infty ; + \\infty) .\n+ Với m = 1 ta có y' = 4 x + 3 > 0 \\iff x > -\n3\n\\implies m = 1 không thảo mãn.\n4\n[m > 1\nm^2 - m > 0\nm \\ne 1\n\\iff [ m < 0\n\\iff -3 \\le m < 0 .\n+ Với\nta có y' \\ge 0 với \\forall x \\in \\mathbb{R} \\iff ^2\n\\\\Delta' = m + 3m \\le 0\nm \\ne 0\n-3 \\le m \\le 0\nTổng hợp các trường hợp ta được -3 \\le m \\le 0 .\nm \\in ' \\implies m \\in \\{-3; - 2; - 1;0\\} .\nVậy có 4 giá trị nguyên của m thỏa mãn bài ra.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 356,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = (m - 1)x^3 - 3(m - 1)x^2 + 3x + 2$ đồng biến trên $\\mathbb{R}$?",
    "options": [
      {
        "key": "A",
        "content": "$1 < m \\le ^2$"
      },
      {
        "key": "B",
        "content": "$1 < m < 2$"
      },
      {
        "key": "C",
        "content": "$1 \\le m \\le ^2$"
      },
      {
        "key": "D",
        "content": "$1 \\le m < 2$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 1 \\le m < 2\nChọn C\nTa có y' = 3 (m - 1) x^2 - 6 (m - 1) x + 3 .\n[m - 1 = 0\n[\nHàm số đã cho đồng biến trên \\mathbb{R} khi và chỉ khi y' \\ge 0, \\forall x \\in \\mathbb{R} \\iff [ m - 1 > 0\n[ \\\\Delta' \\le 0\n[m = 1\n[m = 1\n[\n[\n\\iff 1\\le m \\le ^2.\n\\iff [ m > 1\n\\iff [ m > 1\n[ 9 (m - 1) 2 - 9 (m - 1) \\le 0\n[ 1 \\le m \\le ^2\n[",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 357,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Số giá trị nguyên của tham số $m$ để hàm số $y = (4 - m^2)x^3 + (m - 2)x^2 + x + m - 1$ đồng biến trên $\\mathbb{R}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 4 .\nTH1: 4 - m^2 = 0 \\iff m = \\pm ^2 .\nm = 2 : (1) \\iff y = x + 1 \\implies hàm số luôn tăng trên \\mathbb{R} \\implies m = 2 (nhận).\n1\nm = -2 : (1) \\iff y = -4 x^2 + x - 3 là hàm số bậc hai nên tăng trên khoảng -\\infty ; , giảm trên^8\n1\nkhoảng ; + \\infty \\implies m = -2 (loại).\n8\nTH^2: 4 - m^2 \\ne 0 .\ny' = 3 (4 - m^2) x^2 + 2 (m - 2) x + 1 . \\\\Delta' = (m - 2) - 3 (4 - m^2) = 4m^2 - 4m - 8 .\n2\nhàm số đồng biến trên \\mathbb{R} \\iff y' \\ge 0 \\forall x \\in \\mathbb{R} .\nm \\in (-2; 2)\n4 - m^2 > 0\na > 0\n\\iff ^2\n\\iff m \\in [ -1; 2) . m \\in ' \\implies m = -1 ; m = 0 ; m = 1 .\n\\iff \\iff 4m - 4m - 8 \\le 0\n\\\\Delta \\le 0\nm \\in [ -1; 2]\nVậy có 4 giá trị nguyên của m thỏa yêu cầu bài toán.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 358,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tất cả các giá trị thực của tham số $m$ để hàm số $y = mx^3 + mx^2 + (m + 1)x - 3$ nghịch biến trên $\\mathbb{R}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$200$"
      },
      {
        "key": "B",
        "content": "$99$"
      },
      {
        "key": "C",
        "content": "$100$"
      },
      {
        "key": "D",
        "content": "$201$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "D. 201 .\nTrường hợp 1: m = 0 . Ta có:\ny = x - 3 có y' = 1 > 0 với mọi x \\in \\mathbb{R} nên hàm số luôn đồng biến trên trên \\mathbb{R} .\nDo đó loại m = 0 .\nTrường hợp^2: m \\ne 0 . Ta có: y' = 3mx^2 + 2mx + m + 1 , \\\\Delta' = -2m^2 - 3m = m (-2m - 3)\nHàm số nghịch biến trên \\mathbb{R} khi và chỉ khi y' \\le 0 với mọi x \\in \\mathbb{R}\nm < 0\nm < 0\nm < 0\n3\n\\iff m\\le - .\n\\iff \\iff \\iff '\n2\nm (-2m - 3) \\le 0\n\\\\Delta \\le 0\n-2m - 3 \\ge 0\nVì m là số nguyên thuộc đoạn [ -100;100 ] nên m \\in \\{-2; -3;...; -99; -100\\} .\nVậy có 99 giá trị m .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 359,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = (3m^2 - 12)x^3 + 3(m - 2)x^2 - x + 2$ nghịch biến trên $\\mathbb{R}$.",
    "options": [
      {
        "key": "A",
        "content": "$9$"
      },
      {
        "key": "B",
        "content": "$6$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$14$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 14 .\nChọn C\nTập xác định: D = \\mathbb{R} .\nTa có: y' = 9 (m^2 - 4) x^2 + 6 (m - 2) x - 1 .\nHàm số nghịch biến trên \\mathbb{R} \\iff y' \\le 0\\forall x \\in \\mathbb{R} (dấu \" = \" xãy ra tại hữu hạn x \\in \\mathbb{R})\nTH1: m^2 - 4 = 0 \\iff m = \\pm ^2 .\n+ Với m = 2 ta có y' = -1 \\le 0 \\forall x \\in \\mathbb{R} nên m = 2 thỏa mãn.\n+ Với m = -2 ta có y' = -24 x - 1 \\le 0 \\iff x \\ge -\n1\n(không thỏa với mọi x \\in \\mathbb{R}) nên loại m = -2 .\n24\nTH^2: m^2 - 4 \\ne 0 \\iff m \\ne \\pm ^2 . Ta có\na = 9 (m^2 - 4) < 0\n-2 < m < 2\nm\\in '\ny' \\le 0, \\forall x \\in \\mathbb{R} \\iff \\iff \\iff 0 \\le m < 2\n\\to m \\in \\{0;1\\} V^2\n'\n2\n0 \\le m \\le ^2\n\\\\Delta = 9 (m - 2) + 9 (m - 4) \\le 0\nậy m \\in \\{ 0;1; 2\\} \\implies 02 + 12 + 22 = 5 .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 360,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = (m^2 - 1)x^3 + (m - 1)x^2 - x + 4$ nghịch biến trên khoảng $(-\\infty; +\\infty)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "$0$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. 3.\nChọn A\nTa có y' = 3 (m^2 - 1) x^2 + 2 (m - 1) x - 1\nHàm số đã cho nghịch biến trên khoảng (-\\infty ; +\\infty) \\iff y' \\le 0, \\forall x \\in \\mathbb{R}\n\\iff ^3 (m^2 - 1) x^2 + 2 (m - 1) x - 1 \\le 0 , \\forall x \\in \\mathbb{R} .\n* Trường hợp 1: m^2 - 1 = 0 \\iff m = \\pm 1 .\n+ Với m = 1 , ta được -1 \\le 0, \\forall x \\in \\mathbb{R} (luôn đúng), suy ra m = 1 (nhận).\n+ Với m = -1 , ta được -4 x - 1 \\le 0 \\iff x \\ge 1\n, suy ra m = -1 (loại).\n4\n* Trường hợp^2: m^2 - 1 \\ne 0 \\iff m \\ne \\pm 1 .\n2\n()\nTa có \\\\Delta' = (m - 1) + 3 m^2 - 1 = m^2 - 2m + 1 + 3m^2 - 3 = 4m^2 - 2m - 2 .\n-1 < m < 1\nm^2 - 1 < 0\n1\nĐể y' \\le 0, \\forall x \\in \\mathbb{R} \\iff ^2\n\\iff 1\n\\iff - \\le m < 1.\n2\n4m - 2m - 2 \\le 0\n- 2 \\le m \\le 1\nTổng hợp lại, ta có tất cả giá trị m cần tìm là -\n1\n\\le m \\le 1.\n2\nVì m \\in ' , suy ra m \\in \\{0;1\\} , nên có 2 giá trị nguyên của tham số m .\nXét hàm số nhất biến y = f (x) =\nax + b\n\\cdot\ncx + d\nd\n- Bước 1. Tập xác định: D = \\mathbb{R} \\ - \\cdot\nc\n- Bước^2. Tính đạo hàm y' = f'(x) =\na.d - b.c\n\\cdot\n(cx + d) 2\n+ Để f (x) đồng biến trên D \\iff y' = f'(x) > 0, \\forall x \\in D \\iff a.d - b.c > 0 \\implies m ?\n+ Để f (x) nghịch biến trên D \\iff y' = f'(x) < 0, \\forall x \\in D \\iff a.d - b.c < 0 \\implies m ?\n<< Lưu ý: Đối với hàm phân thức thì không có dấu \" = \" xảy ra tại vị trí y'.\nmx - 2m - 3\nvới m là tham số. Gọi S là tập hợp tất cả các giá\nx-m\ntrị nguyên của m để hàm số đồng biến trên các khoảng xác định. Tìm số phần tử của S .\nA. Vô số\nB. 3\nC. 5\nD. 4\nLời giải\nChọn B",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 361,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{x + 4}{x + m}$ đồng biến trên khoảng $(-\\infty; -7)$.",
    "options": [
      {
        "key": "A",
        "content": "$4$"
      },
      {
        "key": "B",
        "content": "Vô số"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "m^2 - 4m\nD = \\mathbb{R} \\ \\{- m\\} ; y' =\n.\n2\n(x + m)",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 362,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{x - 2}{x - m}$ đồng biến trên khoảng $(-\\infty; 4)$.",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. 2 .\nChọn D\nTập xác định D = \\mathbb{R} \\ \\{m\\} .\nĐạo hàm f'(x) =\n-m^2 + 4\n(x - m)\n2\n.\nHàm số đồng biến trên (0;+ \\infty) khi và chỉ khi^2\n-2 < m < 2\n-m + 4 > 0\nf'(x) > 0 \\forall x \\in (0; +\\infty) \\iff \\iff \\iff -2 < m \\le 0 .\nm \\le 0\nm \\notin (0; + \\infty)\nDo m \\in ' \\implies m = \\{-1;0\\} . Vậy có hai giá trị nguyên của m thỏa mãn đề bài.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 363,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{x + 4}{x + m}$ đồng biến trên khoảng $(-\\infty; -7)$.",
    "options": [
      {
        "key": "A",
        "content": "$[ 4;7)$"
      },
      {
        "key": "B",
        "content": "$(4;7]$"
      },
      {
        "key": "C",
        "content": "$(4;7)$"
      },
      {
        "key": "D",
        "content": "$(4;+ \\infty)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: D = \\mathbb{R} \\ \\{-m\\} .\nTa có: y' =\nm-4\n(x + m)\n2\n.\nHàm số đã cho đồng biến trên khoảng (-\\infty ; - 7) \\iff y' > 0 , \\forall x \\in (-\\infty ; - 7)\nm - 4 > 0\nm > 4\nm > 4\n\\iff \\iff \\iff \\iff ^4<m\\le ^7.\n-m \\notin (-\\infty ; - 7)\n-m \\ge -7\nm \\le ^7",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 364,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{x + 5}{x + m}$ đồng biến trên khoảng $(-\\infty; -8)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(5; +\\infty)$"
      },
      {
        "key": "B",
        "content": "$(5;8]$"
      },
      {
        "key": "C",
        "content": "$[5;8)$"
      },
      {
        "key": "D",
        "content": "$(5;8)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Điều kiện x \\ne -m .\nm-5\nTa có y' =\n2\n(x + m)\nĐể hàm số y =\nx+5\nđồng biến trên khoảng (-\\infty ; -8) thì\nx+m\ny' > 0\nm - 5 > 0\n\\implies \\implies ^5 < m \\le ^8.\n- m \\notin (-\\infty ; -8) - m \\ge -8",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 365,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{x + 2}{x + m}$ đồng biến trên khoảng $(-\\infty; -5)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(2; 5]$"
      },
      {
        "key": "B",
        "content": "$[2;5)$"
      },
      {
        "key": "C",
        "content": "$(2; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$(2;5)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: D = \\mathbb{R} \\ \\{-m\\} .\nTa có: y' =\nm-2\n(x + m) 2\ny' > 0\\forall x \\in (-\\infty ; -5)\nm - 2 > 0\nHàm số đồng biến trên khoảng (-\\infty ; -5) \\iff \\iff \\iff ^2< m \\le ^5.\n-m \\notin (-\\infty ; -5)\n-m \\ge -5",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 366,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{x + 3}{x + m}$ đồng biến trên khoảng $(-\\infty; -6)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(3; 6]$"
      },
      {
        "key": "B",
        "content": "$(3; 6)$"
      },
      {
        "key": "C",
        "content": "$(3; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$[3; 6)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hàm số xác định khi: x + m \\ne 0 \\iff x \\ne - m .\nx+3\nm-3\ny=\n\\implies y' =\n2\nx+m\n(x + m)\ny' > 0, \\forall x \\in (-\\infty ; -6)\nHàm số đồng biến trên khoảng (-\\infty ; -6) khi và chỉ khi:\n-m \\notin (-\\infty ; -6)\nm - 3 > 0\nm > 3\nm > 3\n\\iff \\iff \\iff \\iff ^3< m\\le ^6.\n-m \\in [ -6; +\\infty)\n-m \\ge -6 m \\le ^6\nVậy: m \\in (3; 6] .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 367,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{x + 1}{x + 3m}$ nghịch biến trên khoảng $(6; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$6$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "Vô số"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. Vô số\nChọn C\nTập xác định D = \\mathbb{R} \\ \\{-3m\\} ; y' =\nHàm số y =\n3m - 1\n(x + 3m)\n2\n.\nx +1\nnghịch biến trên khoảng (6; +\\infty) khi và chỉ khi:\nx + 3m\n1\ny' < 0\n3m - 1 < 0\n1\nm <\n\\iff \\iff ^3 \\iff -2 \\le m < .\n3\n(6; +\\infty) \\subset D\n-3m \\le ^6\nm \\ge -2\nVì m \\in ' \\implies m \\in \\{-2; -1;0\\} .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 368,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{x + 6}{x + 5m}$ nghịch biến trên khoảng $(10; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "Vô số"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định D = - \\ \\{-5m\\} .\ny' =\n5m - 6\n(x + 5m)\n2\n6\ny' < 0, \\forall x \\in D\n5m - 6 < 0\nm <\nHàm số nghịch biến trên (10; +\\infty) khi và chỉ khi\n\\iff \\iff ^5 .\n-5m \\notin (10; +\\infty)\n-5m \\le 10\nm \\ge -2\nMà m \\in ' nên m \\in \\{-2; -1;0;1\\} .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 369,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{mx - 1}{m - 4x}$ nghịch biến trên khoảng $\\left(-\\infty; \\frac{1}{4}\\right)$.",
    "options": [
      {
        "key": "A",
        "content": "$m > 2$"
      },
      {
        "key": "B",
        "content": "$1 \\le m < 2$"
      },
      {
        "key": "C",
        "content": "$-2 < m < 2$"
      },
      {
        "key": "D",
        "content": "$- 2 \\le m \\le ^2$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "m\nTập xác định: D = \\mathbb{R} \\ .\n4\nTa có y' =\nm^2 - 4\n(m - 4x)\n2\n.\nm^2 - 4 < 0\n-2 < m < 2\n1\nHàm số nghịch biến trên khoảng -\\infty ; khi và chỉ khi m\n\\iff m 1\n1\n4\n4 \\notin -\\infty ; 4\n4 \\ge ^4\n-2 < m < 2\n\\iff \\implies 1\\le m < 2 .\nm \\ge 1\nVậy 1 \\le m < 2 .\nmx - 2m + 3",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 370,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{mx - 2m + 3}{x + m}$ với $m$ là tham số. Gọi $S$ là tập hợp tất cả các giá trị nguyên của $m$ để hàm số nghịch biến trên khoảng $(2; +\\infty)$. Tìm số phần tử của $S$.",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 1 .\nChọn C\nĐiều kiện xác định: x \\ne -m .\nTa có: y' =\nm^2 + 2m - 3\n(x + m)\n2\n.\nĐể hàm số nghịch biến trên khoảng (2; + \\infty) thì:\ny' < 0; \\forall x \\in (2; + \\infty)\nm^2 + 2m - 3 < 0\n-3 < m < 1\n\\iff \\iff -2 \\le m < 1 .\n\\iff x \\ne - m\nm \\ge -2\n-m \\le ^2\nVậy giá trị nguyên của m là S = \\{-2; - 1;0\\} .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 371,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{x + 18}{x + 4m}$ nghịch biến trên khoảng $(2; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "Vô số"
      },
      {
        "key": "B",
        "content": "$0$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. 5 .\nChọn D\nĐiều kiện x \\ne -4m .\nTa có y =\n4m - 18\nx + 18\n\\implies y' =\n.\n2\nx + 4m\n(x + 4m)\nHàm số đã cho nghịch biến trên khoảng (2; +\\infty)\n9\nm<\n'\ny\n<\n0\n4m - 18 < 0\n2 \\iff -1 \\le m< 9\n\\iff \\iff \\iff .\n2\n2\n-4m \\notin (2; +\\infty)\n-4m \\le ^2\nm \\ge - 1\n2\nVì m \\in ' nên m \\in \\{0;1; 2;3; 4\\} . Vậy có 5 giá trị nguyên của tham số m để hàm số y =\nx + 18\nx + 4m\nnghịch biến trên khoảng (2; +\\infty) .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 372,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{mx + 9}{4x + m}$ nghịch biến trên khoảng $(0; 4)$?",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$11$"
      },
      {
        "key": "C",
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$7$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 7 .\nChọn C\nm\n.\n4\nm^2 - 36\nĐiều kiện: x \\ne -\nTa có: y' =\n(4 x + m)\n2\n.\nHàm số đã cho nghịch biến trên khoảng (0; 4) \\iff y' < 0, \\forall x \\in (0; 4)\n-6 < m < 6\n-6 < m < 6\nm - 36 < 0\n[ - m \\le 0\n\\iff [ m \\ge 0\n\\iff 0\\le m<6.\n\\iff [ 4\n\\iff m\n[m \\le -16\n[ m\n- \\notin (0;4)\n4\n[\n[ - \\ge ^4\n[ 4\n2\nVì m\\in ' nên m\\in \\{0,1, 2,3, 4,5\\} .\nVậy có 6 giá trị m thỏa mãn yêu cầu bài toán.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 373,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in (-2020; 2020)$ sao cho hàm số $y = \\frac{3x + 18}{x - m}$ nghịch biến trên khoảng $(-\\infty; -3)$?",
    "options": [
      {
        "key": "A",
        "content": "$2020$"
      },
      {
        "key": "B",
        "content": "$2026$"
      },
      {
        "key": "C",
        "content": "$2018$"
      },
      {
        "key": "D",
        "content": "$2023$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Điều kiện: x \\ne m nên m \\notin (-\\infty ; -3)\ny=\n3 x + 18\n-3m - 18\n\\implies y'=\nx-m\n(x - m)2\nĐể hàm số y =\n3x + 18\nnghịch biến trên khoảng (-\\infty ; -3) thì -3m - 18 < 0 \\iff m > -6\nx-m\nVì m \\in (-2020; 2020) và m \\notin (-\\infty ; -3) nên m \\in [ -3; 2020)\nVậy có 2023 giá trị m nguyên thoả mãn.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 374,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{mx + 4}{x + m}$ nghịch biến trên khoảng $(0; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "TXĐ: D = \\mathbb{R}\nTa có y' =\n\\{-m\\}\nm^2 - 4\n(x + m)\n2\n.\nHàm số nghịch biến trên khoảng (0; +\\infty) khi và chỉ khi\ny' < 0, \\forall x > 0\nm^2 - 4 < 0 -2 < m < 2\n\\iff \\iff \\iff 0 \\le m < 2.\n-m \\notin (0; +\\infty)\nm \\ge 0\n- m \\le 0\nVậy số giá trị nguyên của tham số m là 2 .\nDạng^3. Tìm m để hàm số bậc^3 đơn điệu trên khoảng cho trước",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 375,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (4 - m)x$ đồng biến trên khoảng $(2; +\\infty)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty ;1]$"
      },
      {
        "key": "B",
        "content": "$(-\\infty ; 4]$"
      },
      {
        "key": "C",
        "content": "$(-\\infty ;1)$"
      },
      {
        "key": "D",
        "content": "$(-\\infty ; 4)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có.\ny' = 3 x^2 - 6 x + 4 - m . ycbt \\iff y' \\ge 0, \\forall x \\in (2; +\\infty)\n\\iff ^3 x^2 - 6 x + 4 - m \\ge 0, \\forall x \\in (2; +\\infty) \\iff m \\le ^3 x^2 - 6 x + 4, \\forall x \\in (2; +\\infty)\n\\iff m \\le min g (x) với g (x) = 3 x^2 - 6 x + 4\n(2;+\\infty)\nTa có.\ng ' (x) = 6x - 6\ng ' (x) = 0 \\iff 6x - 6 = 0 \\iff x = 1\nDựa vào bảng biến thiên, suy ra: m \\le ^4 thỏa yêu cầu bài toán.\nVậy: m \\in (-\\infty ; 4 ] thì hàm số đồng biến trên khoảng (2; +\\infty) .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 376,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (5 - m)x$ đồng biến trên khoảng $(2; +\\infty)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty ; 2)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty ;5)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty ;5]$"
      },
      {
        "key": "D",
        "content": "$(-\\infty ; 2]$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Ta có y' = 3x^2 - 6 x + 5 - m .\nHàm số đã cho đồng biến trên (2;+\\infty) khi và chỉ khi y' \\ge 0, \\forall x \\in (2; +\\infty)\n\\iff ^3 x^2 - 6 x + 5 - m \\ge 0, \\forall x > 2 \\iff m \\le ^3 x^2 - 6 x + 5, \\forall x > 2 .\nXét hàm số f (x) = 3x^2 - 6 x + 5 trên khoảng (2; +\\infty) .\nCó f'(x) = 6 x - 6 , f'(x) = 0 \\iff ^6 x - 6 = 0 \\iff x = 1 (lo¹i) .\nBảng biến thiên\nTừ bàng biến thiên ta có m \\le ^3 x^2 - 6 x + 5, \\forall x > 2 \\iff m \\le ^5 .\nVậy m \\in (-\\infty ;5] .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 377,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (2 - m)x$ đồng biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty ; -1]$"
      },
      {
        "key": "B",
        "content": "$(-\\infty ; 2)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty ; -1)$"
      },
      {
        "key": "D",
        "content": "$(-\\infty ; 2 ]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Ta có y' = 3x^2 - 6 x + 2 - m .\nĐể hàm số đồng biến trên khoảng (2; +\\infty) khi và chỉ khi y' \\ge 0, \\forall x \\in (2; +\\infty)\n\\iff ^3 x^2 - 6 x + 2 - m \\ge 0, \\forall x \\in (2; +\\infty) m \\le ^3 x^2 - 6 x + 2, \\forall x \\in (2; +\\infty) .\nXét hàm số f (x) = 3 x^2 - 6 x + 2, \\forall x \\in (2; +\\infty) .\nf'(x) = 6x - 6 ; f'(x) = 0 \\implies 6x - 6 = 0 \\iff x = 1.\nBảng biến thiên:\nTừ bảng biến thiên ta thấy m \\le ^2 . Vậy m \\in (-\\infty ; 2 ] .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 378,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (1 - m)x$ đồng biến trên khoảng $(1; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty ; -2)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty ;1)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty ; -2]$"
      },
      {
        "key": "D",
        "content": "$(-\\infty ;1]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Ta có y' = 3x^2 - 6 x + 1 - m .\nHàm số đồng biến trên khoảng (2; +\\infty) \\iff y' \\ge 0 , \\forall x \\in (2; +\\infty)\n\\iff 3x^2 - 6 x + 1 - m \\ge 0 , \\forall x \\in (2; +\\infty)\n\\iff 3x^2 - 6 x + 1 \\ge m , \\forall x \\in (2; +\\infty) .\nXét hàm số g (x) = 3 x^2 - 6 x + 1 với \\forall x \\in (2; +\\infty) .\ng ' (x) = 6 x - 6 ; g ' (x) > 0 , \\forall x \\in (2; +\\infty) .\nBảng biến thiên g (x) :\nVậy m \\le 1 .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 379,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = x^3 + 3 x^2 - mx - 4$. Tập hợp tất cả các giá trị của tham số m để hàm số đồng biến trên khoảng $(-\\infty ;0)$ là",
    "options": [
      {
        "key": "A",
        "content": "$(-1;5)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty ; - 3]$"
      },
      {
        "key": "C",
        "content": "$(-\\infty ; - 4]$"
      },
      {
        "key": "D",
        "content": "$(-1; + \\infty)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có y' = 3 x^2 + 6 x - m .\nĐể hàm số đồng biến trên khoảng (-\\infty ;0) thì y' \\ge 0, \\forall x \\in (-\\infty ;0)\n\\iff 3x^2 + 6 x - m \\ge 0, \\forall x \\in (-\\infty ;0)\n\\iff m \\le 3x^2 + 6 x, \\forall x \\in (-\\infty ;0) .\nĐặt g (x) = 3x^2 + 6 x , hàm số g (x) có bảng biến thiên\nDựa vào bảng biến thiên ta có \\iff m \\le 3x^2 + 6 x, \\forall x \\in (-\\infty ;0) \\iff m \\le -3 .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 380,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 + 3x^2 - mx + 1$ đồng biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\le 0$"
      },
      {
        "key": "B",
        "content": "$m \\ge -2$"
      },
      {
        "key": "C",
        "content": "$m \\le -3$"
      },
      {
        "key": "D",
        "content": "$m \\le -1$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. m \\le -1 .\nChọn C\nTập xác định: D = \\mathbb{R} .\nĐạo hàm: y' = 3 x^2 + 6 x - m .\nHàm số đồng biến trên khoảng (-\\infty ;0) khi và chỉ khi y' \\ge 0 , \\forall x < 0\n\\iff ^3 x^2 + 6 x - m \\ge 0 , \\forall x < 0 .\nCách 1:\n3 x^2 + 6 x - m \\ge 0 , \\forall x < 0 \\iff ^3 x^2 + 6 x \\ge m , \\forall x < 0 .\nXét hàm số f (x) = 3x^2 + 6 x trên khoảng (-\\infty ;0) , ta có:\nf'(x) = 6 x + 6 . Xét f'(x) = 0 \\iff ^6 x + 6 = 0 \\iff x = -1 . Ta có f (-1) = -3 .\nBảng biến thiên:\nDựa vào bảng biến thiên, ta có: m \\le -3 .\nCách^2:\nTa có \\\\Delta' = 9 + 3m .\nNếu \\\\Delta' \\le 0 \\iff m \\le -3 thì y' \\ge 0 \\forall x \\in \\mathbb{R} \\implies y' \\ge 0 \\forall x < 0 .\nNếu \\\\Delta' > 0 thì y' có hai nghiệm phân biệt x1 , x^2 . Khi đó để y' \\ge 0 \\forall x < 0 thì ta phải có\n0 \\le x1 < x^2 . Điều này không thể xảy ra vì S = x1 + x^2 = -2 < 0 .\nVậy m \\le -3 .\nCách^3:\n3\n2\nPhương án B: Với m = -3 ta có y = x^3 + 3 x^2 + 3 x + 1 = (x + 1) . Khi đó y' = 3 (x + 1) \\ge 0 \\forall x .\nSuy ra hàm số đồng biến trên khoảng (-\\infty ;0) . Vậy B là đáp án đúng.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 381,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - mx^2 - (m - 6)x + 1$ đồng biến trên khoảng $(0; 4)$.",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty ;3)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty ;3]$"
      },
      {
        "key": "C",
        "content": "$[ 3;6]$"
      },
      {
        "key": "D",
        "content": "$(-\\infty ;6]$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "y' = 3x^2 - 2mx - (m - 6) . Để hàm số đồng biến trên khoảng (0; 4) thì: y' \\ge 0 , \\forall x \\in (0; 4) .\ntức là 3x^2 - 2mx - (m - 6) \\ge 0 \\forall x \\in (0; 4) \\iff Xét hàm số g (x) =\n3x^2 + 6\n\\ge m \\forall x \\in (0; 4)\n2x + 1\n3x^2 + 6\ntrên (0; 4) .\n2x +1\n[ x = 1 \\in (0; 4)\n, g' (x) = 0 \\iff [\n(2 x + 1)\n[ x = -2 \\notin (0; 4)\nTa có bảng biến thiên:\ng'(x) =\n6 x^2 + 6 x - 12\nVậy để g (x) =\n2\n3x^2 + 6\n\\ge m \\forall x \\in (0; 4) thì m \\le ^3 .\n2x +1",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 382,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 6x^2 + mx + 1$ đồng biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\ge 12$"
      },
      {
        "key": "B",
        "content": "$m \\le 12$"
      },
      {
        "key": "C",
        "content": "$m \\ge 0$"
      },
      {
        "key": "D",
        "content": "$m \\le 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. m \\le 0 .\nChọn A\nCách 1:Tập xác định: D = \\mathbb{R} . Ta có y' = 3 x^2 - 12 x + m\nTrường hợp 1:\n3 > 0 (hn)\n\\iff m \\ge 12\nHàm số đồng biến trên \\mathbb{R} \\iff y' \\ge 0, \\forall x \\in \\mathbb{R} \\iff 36 - 3m \\le 0\nTrường hợp^2: Hàm số đồng biến trên (0; +\\infty) \\iff y' = 0 có hai nghiệm x1 , x^2 thỏa\nx1 < x^2 \\le 0 (*)\nTrường hợp^2.1: y' = 0 có nghiệm x = 0 suy ra m = 0 . Nghiệm còn lại của y' = 0 là\nx = 4 (không thỏa (*))\nTrường hợp^2.2: y' = 0 có hai nghiệm x1 , x^2 thỏa\n36 - 3m > 0\n\\\\Delta' > 0\nx1 < x^2 < 0 \\iff S < 0 \\iff ^4 < 0(vl) \\implies không có m .Vậy m \\ge 12\nm\nP > 0\n>0\n3\n2\nCách^2:Hàm số đồng biến trên (0; +\\infty) \\iff m \\ge 12 x - 3 x = g (x), \\forall x \\in (0; +\\infty) .\nLập bảng biến thiên của g (x) trên (0; +\\infty) .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 383,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = -x^3 + 3x^2 + 3mx + m - 1$ nghịch biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\le -1$"
      },
      {
        "key": "B",
        "content": "$m \\le 1$"
      },
      {
        "key": "C",
        "content": "$m < 1$"
      },
      {
        "key": "D",
        "content": "$m > -1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. m > -1 .\nChọn A\nTa có y' = -3 x^2 + 6 x + 3m = 3 (- x^2 + 2 x + m) .\nVì hàm số liên tục trên nửa khoảng [ 0; +\\infty) nên hàm số nghịch biến trên (0; +\\infty) cũng tương\nđương hàm số nghịch trên [ 0; +\\infty) khi chỉ khi y' \\le 0, \\forall x \\in [ 0, +\\infty) .\n\\iff - x^2 + 2 x + m \\le 0 \\forall x \\in [ 0; +\\infty) \\iff m \\le x^2 - 2 x = f (x) \\forall x \\in [ 0; +\\infty)\n.\n\\iff m \\le min f (x) = f (1) = -1\n[0;+\\infty)",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 384,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị của tham số $m$ để hàm số $y = x^3 - 3(2m + 1)x^2 + (12m + 5)x + 2$ đồng biến trên khoảng $(2; +\\infty)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "D. 0 .\nTập xác định D = \\mathbb{R} .\ny' = 3 x^2 - 6 (2m + 1) x + 12 m + 5 .\nHàm số đồng biến trong khoảng (2; + \\infty) khi y' \\ge 0 , \\forall x \\in (2; + \\infty)\n\\iff ^3 x^2 - 6 (2m + 1) x + 12m + 5 \\ge 0 , \\forall x \\in (2; +\\infty) .\n3 x^2 - 6 (2m + 1) x + 12m + 5 \\ge 0 \\iff m \\le Xét hàm số g (x) =\ng'(x) =\n3x^2 - 6 x + 1\n12 (x - 1)\n2\n3x^2 - 6 x + 5\n12 (x - 1)\n3x^2 - 6 x + 5\nvới x \\in (2; + \\infty) .\n12 (x - 1)\n> 0 với \\forall x \\in (2; + \\infty) \\implies hàm số g (x) đồng biến trên khoảng (2; + \\infty) .\n5\n.\n12\nVậy không có giá trị nguyên dương nào của m thỏa mãn bài toán.\nDo đó m \\le g (x) , \\forall x \\in (2; + \\infty) \\implies m \\le g (2) \\iff m \\le",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 385,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu số nguyên m 1 f (x) = \frac{2}{3}x^3 - mx^2 + (m + 6) x + đồng biến trên khoảng $(0; +\\infty)$ ? 3",
    "options": [
      {
        "key": "A",
        "content": "$9$"
      },
      {
        "key": "B",
        "content": "$10$"
      },
      {
        "key": "C",
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": ".\nChọn B\nTa có f'(x) = x^2 - 2mx + (m + 6)\nđể hàm số\n1\nHàm số f (x) = \frac{2}{3}x^3 - mx^2 + (m + 6) x + đồng biến trên khoảng (0; +\\infty) khi và chỉ khi^3\nf'(x) \\ge 0, \\forall x \\in (0; +\\infty) .\nXét hàm số y = f'(x) = x^2 - 2mx + (m + 6) trong^3 trường hợp:\nTrường hợp 1: m = 0\ny = f'(x) = x^2 + 6 > 0, \\forall x \\in \\mathbb{R} . Lúc này hàm số f (x) đồng biến trên \\mathbb{R} nên cũng đồng biến trên\n(0; +\\infty) (1) .\nTrường hợp^2: m < 0 , ta có bảng biến thiên của hàm số y = f'(x) = x^2 - 2mx + (m + 6) như sau:\nm + 6 \\ge 0\nf'(x) \\ge 0, \\forall x \\in (0; +\\infty) \\iff \\iff -6 \\le m < 0 (2) .\nm < 0\nTrường hợp^3: m > 0 , ta có bảng biến thiên của hàm số y = f'(x) = x^2 - 2mx + (m + 6) như sau:\n-m^2 + m + 6 \\ge 0\nf'(x) \\ge 0, \\forall x \\in (0; +\\infty) \\iff \\iff 0 < m \\le ^3 (3) .\nm > 0\n1\nTừ (1) , (2) và (3) suy ra có 10 giá trị nguyên của m để hàm số f (x) = \frac{2}{3}x^3 - mx^2 + (m + 6) x +\n3\nđồng biến trên khoảng (0; +\\infty) .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 386,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = x^3$ - (m - 1) x^2 + 3 (m - 1) x + 1 . Số các giá trị nguyên của^3 m để hàm số đồng biến trên $(1;+\\infty)$ là",
    "options": [
      {
        "key": "A",
        "content": "$7$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$6$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 6.\nChọn C\nTa có: y' = x^2 - 2 (m - 1) x + 3 (m - 1) .\nYcbt \\iff x^2 - 2 (m - 1) x + 3 (m - 1) \\ge 0, \\forall x \\in (1; +\\infty)\n2\n\\\\Delta' = [- (m - 1) ] - 3 (m - 1) = m^2 - 5m + 4 .\nTrường hợp 1: \\\\Delta' \\le 0 \\iff m^2 - 5m + 4 \\le 0 \\iff m \\in [1; 4] . Ta được^4 giá trị nguyên của m .\nTrường hợp^2:\n[m < 1\n\\\\Delta' > 0 \\iff m^2 - 5m + 4 > 0 \\iff [\n. Khi đó phương trình x^2 - 2 (m - 1) x + 3 (m - 1) = 0 có hai\n[m > 4\nnghiệm phân biệt x1 < x^2 \\le 1\n(x1 - 1) + (x^2 - 1) < 0\n(x1 + x^2) - 2 < 0\n2 (m - 1) - 2 < 0\n\\iff \\iff \\iff (x1 - 1)(x^2 - 1) \\ge 0\nx1 x^2 - (x1 + x^2) + 1 \\ge 0\n3 (m - 1) - 2 (m - 1) + 1 \\ge 0\n\\iff 0\\le m< 2.\nKết hợp với điều kiện ta được 0 \\le m < 1 . Khi đó có 1 giá trị nguyên của m .\nVậy có 5 giá trị nguyên của m .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 387,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = x^3 - 3x^2 - mx + 2019$ đồng biến trên khoảng $(-\\infty; 0)$.",
    "options": [
      {
        "key": "A",
        "content": "$2018$"
      },
      {
        "key": "B",
        "content": "$2019$"
      },
      {
        "key": "C",
        "content": "$2020$"
      },
      {
        "key": "D",
        "content": "$2017$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. 2017 .\nChọn D\nTa có y' = 3 x^2 - 6 x - m .\nHàm số đồng biến trên khi y' \\ge 0, \\forall x \\in (0; +\\infty) \\iff 3x^2 - 6 x - m \\ge 0, \\forall x \\in (0; +\\infty)\n\\iff ^3 x^2 - 6 x \\ge m, \\forall x \\in (0; +\\infty)\n(1)\nXét hàm số f (x) = 3x^2 - 6 x trên (0;+\\infty)\nTa có f'(x) = 6 x - 6, f'(x) = 0 \\iff x = 1. Do đó min f (x) = f (1) = -3\n(0; +\\infty)\n(1) \\iff m \\le -3. Kết hợp với giả thiết ta được m \\in (-2020; -3] . Nên có 2017 số nguyên thỏa mãn\nVậy chọn",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 388,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số f (x) = x^3 - (m + 1) x^2 - 2m^2 - 3m + 2 x + 2 . Có bao nhiêu giá trị nguyên của tham số m sao cho hàm số đã cho đồng biến trên khoảng $(2; +\\infty)$ ?",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 5 .\nChọn C\n()\n(f (x) = x^3 - (m + 1) x^2 - 2m^2 - 3m + 2 x + 2 \\implies f'(x) = 3x^2 - 2 (m + 1) x - 2m^2 - 3m + 2)\n2\n(2)\nNhận xét 2m - 3m + 2 > 0 \\forall m \\in \\mathbb{R} nên f'(x) = 3x - 2 (m + 1) x - 2m^2 - 3m + 2 = 0\nluôn có hai nghiệm phân biệt với mọi m\nDo đó hàm số đã cho đồng biến trên khoảng (2; +\\infty) khi và chỉ khi f'(x) \\ge 0 với mọi x \\in (2; +\\infty)\n()\n3. [3.4 - 4 (m + 1) - 2m^2 - 3m + 2 ] \\ge 0\n3. f'(2) \\ge 0 [\n]\n\\iff Điều này xảy ra khi\nS\nx1 < x^2 < 2\n<2\n2\n-2m^2 - m + 6 \\ge 0\n3\n3\n-2 \\le m \\le \\iff (m + 1)\n\\iff ^2 \\iff -2 \\le m \\le ^2\n<2\nm < 5\n3\nDo m nguyên nên m \\in \\{-2; -1;0;1\\} .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 389,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = 2x^3 + mx^2 + 2x$ đồng biến trên khoảng $(-2; 0)$.",
    "options": [
      {
        "key": "A",
        "content": "$2025$"
      },
      {
        "key": "B",
        "content": "$2016$"
      },
      {
        "key": "C",
        "content": "$2024$"
      },
      {
        "key": "D",
        "content": "$2023$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. 2023 .\nChọn D\nTa có y = 2 x^3 + mx^2 + 2 x \\implies y' = 6 x^2 + 2mx + 2 .\nHàm số đã cho đồng biên trên khoảng (-2; 0) \\iff y' = 6 x^2 + 2 mx + 2 \\ge 0, \\forall x \\in (-2; 0)\n1\n\\iff m \\le -3 x - , \\forall x \\in (-2;0) .\nx\n1\nXét hàm số g (x) = -3 x - , \\forall x \\in (-2; 0)\nx\n\\implies g ' (x) = -3 +\n1\n1\n3\n.\n\\implies g ' (x) = 0 \\iff -3 + 2 = 0 \\iff x = \\pm ^2\nx\nx^3\nBảng biến thiên\nx\n-2\ng'(x)\n0\ng (x)\n13\n2\n-\n+\n3\n3\n0\n0\n-\n+\\infty^2 3\nTừ bảng biến thiên suy ra m \\le ^2 3 . Mà m \\in ', m \\in (-2020; 2020) nên m \\in \\{-2019; -2018;...;3\\} .\nVậy có 2023 giá trị nguyên của tham số m thuộc\n(-2020; 2020)\nsao cho hàm số\ny = 2 x^3 + mx^2 + 2 x đồng biến trên khoảng (-2; 0) .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 390,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = 2x^3 - mx^2 + 2x + 5$ đồng biến trên khoảng $(-2; 0)$.",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$-2$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$-5$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. -5 .\nChọn D\nTa có: y' = 6 x^2 - 2mx + 2 .\nHàm số đồng biến trên khoảng (-2;0) khi y' \\ge 0, \\forall x \\in (-2;0)\n\\iff 3x^2 - mx + 1 \\ge 0, \\forall x \\in (-2;0)\n3 x^2 + 1 \\ge mx \\iff ^3 x +\n1\n\\le m.\nx\nXét hàm số f (x) = 3 x +\n3x^2 - 1\n1\n1 3x^2 - 1\n1\n'\nf\nx\n=\n0\n\\iff =0 \\iff x=-\n; f'(x) = 3 - 2 =\n;\n()\n2\n2\nx\nx\nx\nx^3\nBảng biến thiên của hàm số f (x) .\nTừ bảng biến thiên để f (x) \\le m , \\forall x \\in (-2;0)\na = -2\nthì max f (x) \\le m \\implies m \\ge -2 3 \\implies \\implies a - b = -5 .\n-\n2;0\n()\nb = 3\nDạng^4. Tìm m để hàm số khác đơn điệu trên khoảng cho trước",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 391,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = x^3 + mx - 5$ đồng biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "1\ny' = 3 x^2 + m + 6\nx\n1\nHàm số đồng biến trên (0;+\\infty) khi và chỉ khi y' = 3 x^2 + m + 6 \\ge 0, \\forall x \\in (0; +\\infty)\nx\n1\n1\n\\iff -3 x^2 - 6 \\le m, \\forall x \\in (0; +\\infty) . Xét hàm số g (x) = -3 x^2 - 6 \\le m , x \\in (0; +\\infty)\nx\nx^8\n[x = 1\n6 -6(x - 1)\n, g '(x) = 0 \\iff [\ng '(x) = -6 x + 7 =\n7\nx\nx\n[ x = -1(loai)\nBảng biến thiên:\nDựa vào BBT ta có m \\ge - 4 , suy ra các giá trị nguyên âm của tham số m là -4; -3; -2; -1",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 392,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = (4 - m) 6 - x + 3$ . Có bao nhiêu giá trị nguyên của m^6- x +m trong khoảng (-10;10) sao cho hàm số đồng biến trên (-8;5) ?",
    "options": [
      {
        "key": "A",
        "content": "$14$"
      },
      {
        "key": "B",
        "content": "$13$"
      },
      {
        "key": "C",
        "content": "$12$"
      },
      {
        "key": "D",
        "content": "$15$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "()\nĐặt t = - 6 - x vì x \\in (-8;5) \\implies t \\in - 14; -1 và t = - 6 - x đồng biến trên (-8;5) .\nHàm số trở thành y =\n-(4 - m)t + 3\nm^2 - 4m + 3\ntập xác định D = \\mathbb{R} \\ \\{m\\} \\implies y' =\n.\n-t + m\n(-t + m) 2\nm^2 - 4m + 3 > 0\n[ m \\le - 14\n[\nĐể hàm số đồng biến trên khoảng - 14; -1 \\iff [ m \\le - 14\n\\iff [ -1 \\le m < 1 .\n[\n[m > 3\n[\n[ m \\ge -1\n()\n\\implies m = \\{-9, -8, -7, -6, -5, -4, -1, 0, 4,5, 6, 7,8,9\\} có 14 giá trị.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 393,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên âm của tham số m để hàm 1 3 số $y = x^4 + mx -$ đồng biến trên khoảng $(0; + \\infty)$ . 4 2x",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "3\nTập xác định : D = \\mathbb{R}. y' = x^3 + m + 2 .\n2x\nTa có: hàm số đã cho đồng biến trên khoảng (0; + \\infty) khi và chỉ khi y' \\ge 0 với \\forall x \\in (0; + \\infty)\n3\n3\n\\ge 0, \\forall x \\in (0; + \\infty) \\iff x^3 + 2 \\ge -m, \\forall x \\in (0; + \\infty)\n2\n2x\n2x^3\n\\iff - m \\le Min f (x) ,với f (x) = x^3 + 2 (1) .\n(0; +\\infty)\n2x\nCách 1:\n\\iff x^3 + m +\n3\nx^3 x^3\n1\n1\n1\n1 5\n=\n+ + 2 + 2 + 2 \\ge 55 5 = .\n2\n2x^2 2 2x 2x 2x^2\n2\n5\nDấu bằng xảy ra khi và chỉ khi x = 1 . Do đó Min f (x) = (2) .\n(0; +\\infty)\n2\n5\n5\nTừ (1) và (2) ta có - m \\le \\iff m \\ge - . Do m nguyên âm nên m = -1 hoặc m = -2 .\n2\n2\nVậy có hai giá trị nguyên âm của tham số m thỏa mãn điều kiện bài ra.\nCách^2:\n3\nXét hàm số f (x) = x^3 + 2 , \\forall x \\in (0; + \\infty) .\n2x^3\nTa có f'(x) = 3 x^2 - 3 , f'(x) = 0 \\iff x = 1 .\nx\nBảng biến thiên\nx\n0\n2\n+\\infty\n-\n0\n+\nf'(x)\nTheo bất đẳng thức Cauchy ta có f (x) = x^3 +\nf (x)\n5\n2\n5\n5\n\\iff m \\ge - . Do m nguyên âm nên m = -1 hoặc m = -2 .\n2\n2\nVậy có hai giá trị nguyên âm của tham số m thỏa mãn điều kiện bài ra.\nTừ bảng biến thiên ta có - m \\le",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 394,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Gọi S là tập hợp các ln x - 2m giá trị nguyên dương của m để hàm số đồng biến trên khoảng (1; e) . Tìm số phần tử của S . (Chuyên Bắc Giang 2019) Cho hàm số y =",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 4\nChọn C\ny = f (x) =\nln x - 4\nln x - 2m\nĐặt t = ln x , điều kiện t \\in (0;1)\ng (t) =\n-2m + 4\nt-4\n; g' (t) =\n2\nt - 2m\n(t - 2m)\nĐể hàm số f (x) đồng biến trên (1; e) thì hàm số g (t) đồng biến trên (0;1)\n\\iff g ' (t) > 0, t \\in (0;1) \\iff -2 m + 4\n(t - 2m)\n2\n> 0, t \\in (0;1)\n[1\n-2m + 4 > 0\n<m<2\n\\iff \\iff [2\n[\n2m \\notin (0;1)\n[m < 0\nS là tập hợp các giá trị nguyên dương \\implies S = \\{1\\} .\nVậy số phần tử của tập S là 1 .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 395,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{9}{4}x^4 - x^2 + (2m + 15)x - 3m + 1$ đồng biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "3\nYêu cầu bài toán \\iff y' = 3x - 9 x + 2m + 15 \\ge 0 \\forall x \\in (0; +\\infty) và dấu bằng xảy ra tại hữu hạn điểm\nthuộc (0; +\\infty) \\iff 3x^3 - 9 x + 15 \\ge -2m \\forall x \\in (0; +\\infty) .\nXét hàm số: g (x) = 3x^3 - 9 x + 15 trên (0; +\\infty) .\nTa có: g '(x) = 9 x^2 - 9\nx =1\n.\n[ x = -1 (l)\n[\ng' (x) = 0 \\implies [\nBảng biến thiên:\nTừ BBT ta có: -2m \\le ^9 \\iff m \\ge -\n9\n2\nVậy m \\in { - 4; - 3; - 2; - 1} .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 396,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Gọi S là tập hợp ln x - 2m các giá trị nguyên dương của m để hàm số đồng biến trên khoảng (1; e) . Tìm số phần tử của S . (Toán Học Tuổi Trẻ Số 6 2018)Cho hàm số y =",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "1\n2\nĐiều kiện ln x - 2m \\ne 0 \\iff m \\ne ln x .\n1\n[2\nDo x \\in (1; e) nên ln x \\in (0;1) \\implies m \\in (-\\infty ;0] \\cup [ ; +\\infty .\n1\n(4 - 2m)\nx\n'\nTa có y =\n.\n2\n(ln x - 2m)\nĐể hàm số đồng biến trên khoảng (0;1) thì y' > 0 với mọi x \\in (0;1)\n1\n(4 - 2m)\n\\iff x\n> 0 4 - 2m > 0 \\iff m < 2 .\n2\n(ln x - 2m)",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 397,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\cos^3 x - 4\\cot x - (m + 1)\\cos x$ đồng biến trên khoảng $\\left(0; \\frac{\\pi}{2}\\right)$.",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "vô số"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "4\n4\n- Ta có: y' = - cos^2 x.sin x + 2 + (m + 1) .sin x = sin^3 x + 2 + m.sin x .\nsin x\nsin x\n- Hàm số đồng biến trên (0; \\pi) khi và chỉ khi y' \\ge 0 , \\forall x \\in (0; \\pi)\nđể hàm số\n4\n+ m.sin x \\ge 0 , \\forall x \\in (0; \\pi)\nsin^2 x^4\n\\iff sin^2 x + 3 \\ge -m , \\forall x \\in (0; \\pi) (1) .\nsin x^4\n- Xét hàm số: g (x) = sin^2 x + 3 , trên (0; \\pi) .\nsin x^6\n12cos x\nsin^5 x - 6\n=\n2cos\nx\n.\nsin\nx\n-\nCó g ' (x) = 2sin x.cos x -\n=\n2\ncos\nx\n.\nsin^4 x\nsin^4 x\nsin^4 x\n\\iff sin^3 x +\n\\implies g' (x) = 0 \\iff x =\n\\pi^2\n\\in (0; \\pi) .\nBảng biến thiên:\n- Do đó: (1) \\iff -m \\le min g (x) \\iff - m \\le ^5 \\iff m \\ge -5 .\nx\\in (0;\\pi)\nLại do m nguyên âm nên m \\in \\{-5; -4; -3; -2; -1\\} . Vậy có 5 số nguyên âm.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 398,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên âm của m để hàm số 1- m $y = x +5+$ đồng biến trên $[5; + \\infty)$ ? x-2",
    "options": [
      {
        "key": "A",
        "content": "$10$"
      },
      {
        "key": "B",
        "content": "$8$"
      },
      {
        "key": "C",
        "content": "$9$"
      },
      {
        "key": "D",
        "content": "$11$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: D = \\mathbb{R} \\ \\{2\\} . Đạo hàm: y' = 1 +\nm -1\n(x - 2)\n=\n2\nx^2 - 4x + m + 3\n(x - 2)\n2\n.\nXét hàm số f (x) = x^2 - 4 x + 3 trên [5; + \\infty) .\nĐạo hàm: f'(x) = 2 x - 4 . Xét f'(x) = 0 \\iff x = 2 \\implies y = -1 . Ta có: f (5) = 8 .\nBảng biến thiên:\n2\nDo (x - 2) > 0 với mọi x \\in [5; + \\infty) nên y' \\ge 0 , \\forall x \\in [5; + \\infty) khi và chỉ khi f (x) \\ge - m ,\n\\forall x \\in [5; + \\infty) . Dựa vào bảng biến thiên ta có: - m \\le ^8 \\iff m \\ge -8 .\nMà m nguyên âm nên ta có: m \\in \\{-8; - 7 ; - 6; - 5; - 4; - 3; - 2; - 1\\} .\nVậy có 8 giá trị nguyên âm của m để hàm số y = x + 5 +\n1- m\nđồng biến trên [5; + \\infty) .\nx-2",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 399,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\frac{1}{4}x^4 - (m - 1)x^2 - 4$ đồng biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "1\nTa có y' = 3x^3 - 2 (m - 1) x + 5 .\nx\nHàm số đồng biến trong khoảng (0; + \\infty) khi và chỉ khi y' \\ge 0 với \\forall x \\in (0; + \\infty) .\ny' \\ge 0 \\iff ^2 (m - 1) \\le 3x^2 +\nXét g (x) = 3x^2 +\n1\n.\nx^6\n1\n6\nvới \\forall x \\in (0; + \\infty) . Ta có g ' (x) = 6 x - 7 ; g ' (x) = 0 \\iff x = 1\n6\nx\nx\nBảng biến thiên:\n2 (m - 1) \\le g (x) \\iff ^2 (m - 1) \\le ^4 \\iff m \\le ^3 .\nVì m nguyên dương nên m \\in \\{1, 2,3\\} .\nVậy có 3 giá trị m nguyên dương thỏa mãn bài toán.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 400,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = m^2 x^4 - 2(4m - 1)x^2 + 1$ đồng biến trên khoảng $(1; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$15$"
      },
      {
        "key": "B",
        "content": "$6$"
      },
      {
        "key": "C",
        "content": "$7$"
      },
      {
        "key": "D",
        "content": "$16$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "2\n+ Với m = 0 , hàm số trở thành y = 2 x + 1 đồng biến trên (0; +\\infty) nên hàm số cũng đồng biến\ntrên khoảng (1; +\\infty) , do đó m = 0 thỏa mãn.\n+ Với m \\ne 0 , hàm số đã cho làm hàm số trùng phương với hệ số a = m^2 > 0 .\n[x = 0\ny' = 4 m x - 4 (4m - 1) x = 4 x m x - 4m + 1 , y' = 0 \\iff [ 2 4m - 1 .\n[x =\nm^2\n[\n4m - 1\nĐể hàm số đồng biến trên khoảng (1; +\\infty) thì phương trình x^2 =\nvô nghiệm hoặc có hai\nm^2\nnghiệm phân biệt x1 , x^2 sao cho -1 \\le x1 < x^2 \\le 1\n2\n(3\n2 2)\n1\n[\n1\n[\n[ 4m - 1 \\le 0\n[m \\le ^4\n[m \\le ^4\n[\n[\n[\n4m - 1 > 0\n1\n\\iff [ 1\n.\n\\iff [\n\\iff [\n< m< 2- 3\n[ 4m - 1\nm >\n[\n[\n[\n4\n4\n[\n\\le 1\n[\n[ 2\n[ m^2\n[ -m + 4m - 1 \\le 0\n[ [ m > 2 + 3\n() ()\nVậy điều kiện để hàm số đồng biến trên (1; +\\infty) là m \\in -\\infty ; 2 - 3 \\cup^2 + 3; +\\infty .\nVì m nguyên, m \\in (-10;10) nên m \\in \\{-9; -8;...; 0; 4;5;...;9\\} , có 16 giá trị.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 401,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\sqrt{x^2 + 1} - mx - 1$ đồng biến trên $\\mathbb{R}$.",
    "options": [
      {
        "key": "A",
        "content": "$2017$"
      },
      {
        "key": "B",
        "content": "$2019$"
      },
      {
        "key": "C",
        "content": "$2020$"
      },
      {
        "key": "D",
        "content": "$2018$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. 2018 .\nTXĐ : D = \\mathbb{R} .\nx\ny' =\n- m.\nx^2 + 1\nHàm số đồng biến trên \\mathbb{R} \\iff y' \\ge 0 , \\forall x \\in \\mathbb{R} \\iff m \\le x^2\nx +1\nXét f (x) =\nx\n, \\forall x \\in \\mathbb{R} (1) .\ntrên \\mathbb{R} .\n2\nx +1\nlim f (x) = -1 ; lim f (x) = 1 .\nx \\to -\\infty\nf'(x) =\nx \\to +\\infty\n1\n(x + 1) x + 1\n2\n2\n> 0 , \\forall x \\in \\mathbb{R} nên hàm số đồng biến trên \\mathbb{R} .\nx\n, \\forall x \\in \\mathbb{R} \\iff m \\le -1 .\nx^2 + 1\nMặt khác m \\in [ -2018; 2018] \\implies m \\in [ -2018; - 1] .\nTa có: m \\le Vậy có 2018 số nguyên m thoả điều kiện.\nmx +1",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 402,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số m để hàm số x^2 + 2x + m nghịch biến trên khoảng (1;3) và đồng biến trên khoảng (4;6) . x -1",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$7$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "y=\nx^2 - 2x - 2 - m\n.\n(x - 1) 2\nHàm số nghịch biến trên khoảng (1;3) và đồng biến trên khoảng (4;6) khi và chỉ khi\nTa có y' =\ny' \\le 0, \\forall x \\in (1;3)\ny' \\ge 0, \\forall x \\in (4;6)\nx^2 - 2 x - 2 - m \\le 0, \\forall x \\in (1;3)\nm \\ge x^2 - 2 x - 2, \\forall x \\in (1;3)\n(*)\n\\iff ^2\n\\iff ^2\nx - 2 x - 2 - m \\ge 0, \\forall x \\in (4;6)\nm \\le x - 2 x - 2, \\forall x \\in (4; 6)\nXét hàm số g (x) = x^2 - 2 x - 2, g '(x) = 2 x - 2 ta có bảng biến thiên của g (x) như sau\nTừ bảng biến thiên của g (x) ta có (*) \\iff 1 \\le m \\le ^6 , và vì m là số nguyên nên chọn\nm \\in \\{1; 2;3;4;5;6\\} . Vậy có 6 giá trị nguyên của m thỏa mãn bài toán.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 403,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = 1 - ln x + 1$ . Có bao nhiêu giá trị nguyên của 1 - ln x + m 1  tham số m thuộc $[ -5;5]$ để hàm số đã cho đồng biến trên khoảng^3 ;1 . e",
    "options": [
      {
        "key": "A",
        "content": "$7$"
      },
      {
        "key": "B",
        "content": "$6$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "D. 4 .\nChọn B\nTa có đạo hàm của y =\n1 - ln x + 1\n1- m\nlà y' =\n.\n1 - ln x + m^2 x 1 - ln x (1 - ln x + m) 2\n1\n1\nHàm số đã cho đồng biến trên khoảng^3 ; 1 khi và chỉ khi y' > 0, \\forall x \\in^3 ;1\ne\ne\n1 - m > 0\nm < 1\n\\iff 1 \\iff 1 (*)\n1 - ln x + m \\ne 0, \\forall x \\in e^3 ;1\n1 - ln x + m \\ne 0, \\forall x \\in e^3 ;1\n-1\n1\n1\nXét hàm số g (x) = 1 - ln x , x \\in^3 ;1 , ta có g '(x) =\n< 0, \\forall x \\in^3 ;1 do đó ta có\n2 x 1 - ln x\ne\ne\nbảng biến thiên của hàm số g (x) như sau\nm < 1\nQua bảng biến thiên ta có (*) \\iff , kết hợp với m \\in [ -5;5] ta có 6 giá trị nguyên của\nm \\notin (-2; -1)\nm là m \\in \\{-5; -4; -3; -2; -1;0\\} .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 404,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên dương của $m$ để hàm số $y = \\frac{\\ln x - 6}{\\ln x - 2m}$ đồng biến trên khoảng $(1; e)$?",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt t = ln x thì t = ln x đồng biến trên khoảng (1; e) và t \\in (0;1)\nTa được hàm số f (t) =\nt -6\n6 - 2m\n. Điều kiện t \\ne 2m và f'(t) =\n.\n2\nt - 2m\n(t - 2m)\nln x - 6\nt -6\nđồng biến trên khoảng (1; e) khi và chỉ khi hàm số f (t) =\nđồng\nln x - 2m\nt - 2m\n[\n1\n[ 2m \\ge 1\n[1\n[m \\ge ^2\n2m \\notin (0;1)\n\\le m<3\n[\nbiến trên khoảng (0;1) \\iff .\n\\iff [ 2m \\le 0 \\iff [\n\\iff [2\nm\\le 0\n[\nf'(t) > 0\n6 - 2m > 0\n[\n[m \\le 0\nm < 3\nHàm số y =\nVì m nguyên dương nên m \\in \\{1; 2\\} .\nln x - 6\nVậy có 2 giá trị nguyên dương của m để hàm số y =\nđồng biến trên khoảng (1;e) .\nln x - 2m",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 405,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu số nguyên m để hàm số f (x) = m (2020 + x - 2co s x) + sin x - x nghịch biến trên $\\mathbb{R}$ ?",
    "options": [
      {
        "key": "A",
        "content": "Vô số"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 0.\nChọn C\nTa có:\nHàm số f (x) = m (2020 + x - 2cosx) + sin x - x nghịch biến trên \\mathbb{R} khi và chỉ khi\nf'(x) \\le 0 \\forall x \\in \\mathbb{R} \\iff m (2sin x + 1) + cosx -1\\le 0 \\forall x \\in \\mathbb{R}\n\\iff 2m sin x + cosx \\le 1 - m (1) ; \\forall x \\in \\mathbb{R}\nTa lại có:\n2m sin x + co s x \\le (4m + 1)(sin x + co s x) = 4m + 1\n2\n2\n2\n2\n\\implies 2m sin x + co s x \\le 4m^2 + 1 . Dấu bằng xảy ra khi 2mcosx = sin x\nDo đó\n1 - m \\ge 0\nm \\le 1\n-2\n\\iff \\iff \\le m\\le 0\n2\n2\n2\n3\n4m + 1 \\le 1 - 2m + m\n3m + 2m \\le 0\n(1) \\iff 4m^2 + 1 \\le 1 - m \\iff",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 406,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có tất cả bao nhiêu giá trị nguyên của $m$ để hàm số $y = x^3 - mx^2 + 12x + 2m$ luôn đồng biến trên khoảng $(1; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$18$"
      },
      {
        "key": "B",
        "content": "$19$"
      },
      {
        "key": "C",
        "content": "$21$"
      },
      {
        "key": "D",
        "content": "$20$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Xét f (x) = x^3 - mx^2 + 12 x + 2m . Ta có f'(x) = 3x^2 - 2mx + 12 và f (1) = 13 + m .\nĐể hàm số y = x^3 - mx^2 + 12 x + 2m đồng biến trên khoảng (1; + \\infty) thì có hai trường hợp sau\nTrường hợp 1: Hàm số f (x) nghịch biến trên (1; + \\infty) và f (1) \\le 0 .\nĐiều này không xảy ra vì lim (x^3 - mx^2 + 12 x + 2m) = +\\infty .\nx \\to +\\infty\nTrường hợp^2: Hàm số f (x) đồng biến trên (1; + \\infty) và f (1) \\ge 0 .\n3\n6\n3 x^2 - 2mx + 12 \\ge 0, \\forall x > 1 m \\le x + , \\forall x > 1\n2\nx\n\\iff \\iff .\n13 + m \\ge 0\nm \\ge -13\n(*)\n3\n6\n3 6\n3 6\nXét g (x) = x + trên khoảng (1;+\\infty) : g ' (x) = - 2 ; g ' (x) = 0 \\iff - 2 = 0 \\implies x = 2 .\n2\nx^2 x^2 x\nBảng biến thiên:\n3\n6\nx + , \\forall x > 1 \\iff m \\le ^6 .\n2\nx\nKết hợp (*) suy ra -13 \\le m \\le ^6 . Vì m nguyên nên m \\in \\{-13; -12; -11;...;5;6\\} . Vậy có 20 giá trị\nTừ bảng biến thiên suy ra m \\le nguyên của m .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 407,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc khoảng $(-8; 8)$ sao cho hàm số $y = -2x^3 + 3mx - 2$ đồng biến trên khoảng $(1; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$10$"
      },
      {
        "key": "B",
        "content": "$9$"
      },
      {
        "key": "C",
        "content": "$8$"
      },
      {
        "key": "D",
        "content": "$11$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "f (x) = -2x^3 + 3mx - 2\nf'(x) = -6 x^2 + 3m\nNếu m \\le 0 : f'(x) \\le 0, \\forall x \\implies hàm số f (x) nghịch biến trên ℝ.\nHàm số y = f (x) đồng biến trên (1; +\\infty) \\iff f (1) \\le 0 \\iff m \\le Nếu m > 0 : f'(x) = 0 \\iff x = \\pm ^4\n\\implies m \\le 0.\n3\nm^2\n[ m\n>1\n[\n[ 2\n[ m\n[ m\n>1\n[ f\n= 0 [\n2\n[\n2\n[\n[ m = 3 2 (L)\n[\n[\n[ m\n[ m = 2\n(L)\n[ 2 = 1\n4\n[\n\\iff [\n\\implies 0<m\\le .\nHàm số y = f (x) đồng biến trên (1; +\\infty) \\iff [\nm\n[ m^3\n[ 2m^2 - 2 \\le 0\n[ f\n\\le 0\n[\n[ 2\n[ m < 2\n[\n[\n[ m < 1\n4\n[ m \\le [ 2\n3\n[\n[\n[\nf\n(1)\n\\le 0\n[\n[\n[\nm \\in ℤ, m \\in (-8;8) \\implies m \\in \\{-7; -6;...; -1;0;1\\} .",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 408,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Gọi $T$ là tập hợp tất cả các giá trị nguyên dương của tham số $m$ để hàm số $y = x^4 - 2mx^2 + 1$ đồng biến trên khoảng $(3; +\\infty)$. Tổng giá trị các phần tử của $T$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$9$"
      },
      {
        "key": "B",
        "content": "$45$"
      },
      {
        "key": "C",
        "content": "$55$"
      },
      {
        "key": "D",
        "content": "$36$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "D. 36 .\nChọn B\n+ Tập xác định: D = \\mathbb{R} .\n+ Ta có y' = 4 x^3 - 4mx = 4 x (x^2 - m)\nTheo đề m > 0 nên y' = 0 có 3 nghiệm phân biệt x = - m , x = 0, x = m .\nĐể hàm số đồng biến trên khoảng (3; +\\infty) thì y' \\ge 0, \\forall x \\in (3; +\\infty) \\iff m \\le ^3 \\iff m \\le ^9\nVì m nguyên dương nên m = 1, 2, 3, 4, 5, 6, 7, 8, 9 (là cấp số cộng)\nVậy Tổng giá trị các phần tử của T bằng",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 409,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = f (x)$ có đạo hàm f'(x) = 3x^2 + 6 x + 4, \\forall x \\in $\\mathbb{R}$ . Có tất cả bao nhiêu giá trị nguyên thuộc (-2020; 2020) của tham số m để hàm số g (x) = f (x) - (2m + 4) x - 5 nghịch biến trên (0; 2) ?",
    "options": [
      {
        "key": "A",
        "content": "$2008$"
      },
      {
        "key": "B",
        "content": "$2007$"
      },
      {
        "key": "C",
        "content": "$2018$"
      },
      {
        "key": "D",
        "content": "$2019$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. 2019 .\nChọn A\nTa có g ' (x) = f'(x) - (2m + 4) .\nHàm số g (x) = f (x) - (2m + 4) x - 5 nghịch biến trên (0; 2) khi g ' (x) \\le 0, \\forall x \\in (0; 2)\n\\iff f'(x) - (2m + 4) \\le 0, \\forall x \\in (0; 2) \\iff 3x^2 + 6 x + 4 \\le 2m + 4, \\forall x \\in (0; 2) .\nXét hàm số h (x) = 3x^2 + 6 x + 4 \\implies h' (x) = 6 x + 6 . Ta có BBT:\nVậy^2 m + 4 \\ge 28 \\iff m \\ge 12 . Vì m nguyên thuộc (-2020;2020) nên có 2008 giá trị thỏa mãn.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 410,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "(Chuyên Thái Bình - Lần^3 - 2020) Tìm tất cả các giá trị thực của m để hàm số $y = 2 x - x + mx +1$ đồng biến trên (1; 2) .",
    "options": [
      {
        "key": "A",
        "content": "$m > -8$"
      },
      {
        "key": "B",
        "content": "$m \\ge -1$"
      },
      {
        "key": "C",
        "content": "$m \\le -8$"
      },
      {
        "key": "D",
        "content": "$m < -1$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có: $y' = (3x^2 - 2x + m) \\cdot 2^{x^3 - x^2 + mx + 1} \\ln 2$.\nHàm số đồng biến trên $(1; 2) \\iff y' \\ge 0, \\, \\forall x \\in (1; 2)$\n$$\\iff 3x^2 - 2x + m \\ge 0, \\, \\forall x \\in (1; 2) \\iff m \\ge -3x^2 + 2x, \\, \\forall x \\in (1; 2)$$\n$$\\iff m \\ge \\max_{[1; 2]} (-3x^2 + 2x)$$\nXét hàm số $f(x) = -3x^2 + 2x$ trên $[1; 2]$. Ta có $f'(x) = -6x + 2 < 0, \\, \\forall x \\in [1; 2]$.\nDo đó hàm số nghịch biến trên $[1; 2]$, suy ra $\\max_{[1; 2]} f(x) = f(1) = -1$.\nVậy $m \\ge -1$.\nChọn B.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng"
  }
];
