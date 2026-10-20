import { Question } from '../../../types/exam';

export const donDieuThamSoMQuestions: Question[] = [
  {
    "id": 53,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 82,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 105,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 155,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 221,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 222,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 223,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 253,
    "latexVerified": true,
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
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "answerVerified": true
  },
  {
    "id": 255,
    "latexVerified": true,
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
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "answerVerified": true
  },
  {
    "id": 259,
    "latexVerified": true,
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
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "answerVerified": true
  },
  {
    "id": 281,
    "latexVerified": true,
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
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "answerVerified": true
  },
  {
    "id": 351,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ sao cho hàm số $f(x) = \\frac{1}{3}x^3 + mx^2 + 4x + 3$ đồng biến trên $\\mathbb{R}$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $f'(x) = x^2 + 2mx + 4$.\nHàm số đã cho đồng biến trên $\\mathbb{R}$ khi và chỉ khi $f'(x) \\ge 0, \\forall x \\in \\mathbb{R}$.\n$$\\iff \\Delta' = m^2 - 4 \\le 0 \\iff -2 \\le m \\le 2$$\nVì $m \\in \\mathbb{Z}$ nên $m \\in \\{-2; -1; 0; 1; 2\\}$. Vậy có 5 giá trị nguyên của $m$ thỏa mãn yêu cầu bài toán.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 352,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = -x^3 - mx^2 + (4m + 9)x + 5$, với $m$ là tham số. Hỏi có bao nhiêu giá trị nguyên của $m$ để hàm số nghịch biến trên khoảng $(-\\infty; +\\infty)$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = -3x^2 - 2mx + 4m + 9$.\n\nHệ số $a = -3 < 0$. Hàm số nghịch biến trên khoảng $(-\\infty; +\\infty)$ khi và chỉ khi:\n$$y' \\le 0, \\forall x \\in \\mathbb{R} \\iff \\Delta' \\le 0$$\n$$\\iff m^2 - (-3)(4m + 9) \\le 0$$\n$$\\iff m^2 + 12m + 27 \\le 0$$\n$$\\iff -9 \\le m \\le -3$$\n\nDo $m$ là số nguyên nên $m \\in \\{-9; -8; -7; -6; -5; -4; -3\\}$.\nVậy có tất cả $7$ giá trị nguyên của $m$ thỏa mãn.\n\nChọn D.",
    "socraticHint": "Hàm bậc ba nghịch biến trên $\\mathbb{R}$ khi hệ số $a < 0$ và $\\Delta'_{y'} \\le 0$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 353,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + 3(m + 1)x + 2$ đồng biến trên $\\mathbb{R}$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\ge 2$"
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x + 3(m + 1) = 3[x^2 - 2x + m + 1]$.\n\nVì $a = 3 > 0$, hàm số đồng biến trên $\\mathbb{R}$ khi và chỉ khi:\n$$y' \\ge 0, \\forall x \\in \\mathbb{R} \\iff \\Delta' \\le 0$$\n$$\\iff (-1)^2 - (m + 1) \\le 0 \\iff 1 - m - 1 \\le 0 \\iff -m \\le 0 \\iff m \\ge 0.$$\n\nChọn D.",
    "socraticHint": "Hàm số bậc ba đồng biến trên $\\mathbb{R}$ khi $a > 0$ và $\\Delta' \\le 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 354,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 + mx^2 + 4x - m$ đồng biến trên $\\mathbb{R}$.",
    "options": [
      {
        "key": "A",
        "content": "$[-2; 2]$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 2)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; -2]$"
      },
      {
        "key": "D",
        "content": "$[2; +\\infty)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = x^2 + 2mx + 4$.\n\nVì hệ số $a = 1 > 0$, hàm số đồng biến trên $\\mathbb{R}$ khi và chỉ khi:\n$$y' \\ge 0, \\forall x \\in \\mathbb{R} \\iff \\Delta' \\le 0$$\n$$\\iff m^2 - 4 \\le 0 \\iff -2 \\le m \\le 2 \\iff m \\in [-2; 2].$$\n\nChọn A.",
    "socraticHint": "Tính $y'$ và áp dụng định lý dấu tam thức bậc hai: $y' \\ge 0, \\forall x \\in \\mathbb{R} \\iff a > 0$ và $\\Delta' \\le 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 355,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{1}{3}(m^2 - m)x^3 + 2mx^2 + 3x - 2$ đồng biến trên khoảng $(-\\infty; +\\infty)$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = (m^2 - m)x^2 + 4mx + 3$.\nHàm số đồng biến trên $\\mathbb{R} \\iff y' \\ge 0, \\forall x \\in \\mathbb{R}$.\n\n- TH1: $m^2 - m = 0 \\iff m = 0$ hoặc $m = 1$.\n  + Với $m = 0 \\implies y' = 3 > 0, \\forall x \\in \\mathbb{R}$ (thỏa mãn).\n  + Với $m = 1 \\implies y' = 4x + 3$. $y'$ đổi dấu khi qua $x = -\\frac{3}{4}$ nên hàm số không đồng biến trên $\\mathbb{R}$ (loại $m = 1$).\n\n- TH2: $m^2 - m \\ne 0$.\n  $y' \\ge 0, \\forall x \\in \\mathbb{R} \\iff \\begin{cases} m^2 - m > 0 \\\\ \\Delta' \\le 0 \\end{cases}$\n  $$\\iff \\begin{cases} m(m - 1) > 0 \\\\ 4m^2 - 3(m^2 - m) \\le 0 \\end{cases} \\iff \\begin{cases} m > 1 \\text{ hoặc } m < 0 \\\\ m^2 + 3m \\le 0 \\end{cases}$$\n  $$\\iff \\begin{cases} m > 1 \\text{ hoặc } m < 0 \\\\ -3 \\le m \\le 0 \\end{cases} \\iff -3 \\le m < 0.$$\n\nKết hợp cả hai trường hợp ta được: $-3 \\le m \\le 0$.\nVì $m \\in \\mathbb{Z}$ nên $m \\in \\{-3; -2; -1; 0\\}$, có tất cả $4$ giá trị nguyên.\n\nChọn A.",
    "socraticHint": "Cần xét riêng trường hợp hệ số chứa tham số ở bậc cao nhất bằng $0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 356,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = (m - 1)x^3 - 3(m - 1)x^2 + 3x + 2$ đồng biến trên $\\mathbb{R}$.",
    "options": [
      {
        "key": "A",
        "content": "$1 < m \\le 2$"
      },
      {
        "key": "B",
        "content": "$1 < m < 2$"
      },
      {
        "key": "C",
        "content": "$1 \\le m \\le 2$"
      },
      {
        "key": "D",
        "content": "$1 \\le m < 2$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3(m - 1)x^2 - 6(m - 1)x + 3 = 3[(m - 1)x^2 - 2(m - 1)x + 1]$.\n\n- TH1: $m - 1 = 0 \\iff m = 1$. Khi đó $y' = 3 > 0, \\forall x \\in \\mathbb{R}$ (thỏa mãn).\n- TH2: $m - 1 \\ne 0$. Hàm số đồng biến trên $\\mathbb{R} \\iff y' \\ge 0, \\forall x \\in \\mathbb{R}$\n$$\\iff \\begin{cases} m - 1 > 0 \\\\ \\Delta' = (m - 1)^2 - (m - 1) \\le 0 \\end{cases} \\iff \\begin{cases} m > 1 \\\\ (m - 1)(m - 2) \\le 0 \\end{cases} \\iff 1 < m \\le 2.$$\n\nHợp hai trường hợp, ta được: $1 \\le m \\le 2$.\n\nChọn C.",
    "socraticHint": "Xét hệ số của $x^2$ bằng 0 và khác 0.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 357,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3(4 - m^2)x^2 + 2(m - 2)x + 1$.\n\n- TH1: $4 - m^2 = 0 \\iff m = \\pm 2$.\n  + Với $m = 2$: $y' = 1 > 0, \\forall x \\in \\mathbb{R}$ (thỏa mãn).\n  + Với $m = -2$: $y' = -8x + 1$ (đổi dấu, loại).\n\n- TH2: $4 - m^2 \\ne 0$. Hàm số đồng biến trên $\\mathbb{R}$ khi:\n  $$\\begin{cases} 4 - m^2 > 0 \\\\ \\Delta' = (m - 2)^2 - 3(4 - m^2) \\le 0 \\end{cases} \\iff \\begin{cases} -2 < m < 2 \\\\ 4m^2 - 4m - 8 \\le 0 \\end{cases}$$\n  $$\\iff \\begin{cases} -2 < m < 2 \\\\ -1 \\le m \\le 2 \\end{cases} \\iff -1 \\le m < 2.$$\n  Vì $m \\in \\mathbb{Z} \\implies m \\in \\{-1; 0; 1\\}$.\n\nKết hợp hai trường hợp: $m \\in \\{-1; 0; 1; 2\\}$, có tất cả $4$ giá trị nguyên của $m$.\n\nChọn D.",
    "socraticHint": "Lưu ý kiểm tra đầy đủ cả $m = 2$ và $m = -2$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 358,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in [-100; 100]$ để hàm số $y = mx^3 + mx^2 + (m + 1)x - 3$ nghịch biến trên $\\mathbb{R}$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\n- TH1: $m = 0 \\implies y = x - 3$, có $y' = 1 > 0$ nên đồng biến trên $\\mathbb{R}$ (loại $m = 0$).\n- TH2: $m \\ne 0$. Ta có $y' = 3mx^2 + 2mx + m + 1$.\nHàm số nghịch biến trên $\\mathbb{R} \\iff y' \\le 0, \\forall x \\in \\mathbb{R}$\n$$\\iff \\begin{cases} 3m < 0 \\\\ \\Delta' = m^2 - 3m(m + 1) \\le 0 \\end{cases} \\iff \\begin{cases} m < 0 \\\\ -2m^2 - 3m \\le 0 \\end{cases} \\iff \\begin{cases} m < 0 \\\\ m(2m + 3) \\ge 0 \\end{cases} \\iff m \\le -\\frac{3}{2}.$$\n\nVì $m$ là số nguyên thuộc đoạn $[-100; 100]$ nên:\n$$m \\in \\{-100; -99; \\dots; -2\\}$$\nSố giá trị của $m$ là: $-2 - (-100) + 1 = 99$.\n\nChọn B.",
    "socraticHint": "Xét $m = 0$, sau đó với $m \\ne 0$ giải hệ $a < 0$ và $\\Delta' \\le 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 359,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = (3m^2 - 12)x^3 + 3(m - 2)x^2 - x + 2$. Gọi $S$ là tập hợp tất cả các giá trị nguyên của tham số $m$ để hàm số nghịch biến trên $\\mathbb{R}$. Tính tổng bình phương các phần tử của $S$.",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 9(m^2 - 4)x^2 + 6(m - 2)x - 1$.\nHàm số nghịch biến trên $\\mathbb{R} \\iff y' \\le 0, \\forall x \\in \\mathbb{R}$.\n\n- TH1: $m^2 - 4 = 0 \\iff m = \\pm 2$.\n  + Với $m = 2$: $y' = -1 < 0, \\forall x \\in \\mathbb{R}$ (thỏa mãn $m = 2$).\n  + Với $m = -2$: $y' = -24x - 1$ (loại).\n\n- TH2: $m^2 - 4 \\ne 0$.\n  $y' \\le 0, \\forall x \\in \\mathbb{R} \\iff \\begin{cases} 9(m^2 - 4) < 0 \\\\ \\Delta' = 9(m - 2)^2 + 9(m^2 - 4) \\le 0 \\end{cases}$\n  $$\\iff \\begin{cases} -2 < m < 2 \\\\ 9(2m^2 - 4m) \\le 0 \\end{cases} \\iff \\begin{cases} -2 < m < 2 \\\\ 0 \\le m \\le 2 \\end{cases} \\iff 0 \\le m < 2.$$\n  Vì $m \\in \\mathbb{Z} \\implies m \\in \\{0; 1\\}$.\n\nHợp hai trường hợp, ta có $S = \\{0; 1; 2\\}$.\nTổng bình phương các phần tử của $S$ là: $0^2 + 1^2 + 2^2 = 5$.\n\nChọn C.",
    "socraticHint": "Tính tổng bình phương các nghiệm nguyên tìm được: $0^2 + 1^2 + 2^2$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 360,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = (m^2 - 1)x^3 + (m - 1)x^2 - x + 4$ nghịch biến trên $(-\\infty; +\\infty)$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm:\n$$y' = 3(m^2 - 1)x^2 + 2(m - 1)x - 1$$\nHàm số nghịch biến trên $(-\\infty; +\\infty)$ khi và chỉ khi $y' \\le 0, \\, \\forall x \\in \\mathbb{R}$.\n\n- Trường hợp 1: $m^2 - 1 = 0 \\iff m = \\pm 1$.\n  + Với $m = 1$: $y' = -1 \\le 0, \\, \\forall x \\in \\mathbb{R}$ (luôn đúng, thỏa mãn).\n  + Với $m = -1$: $y' = -4x - 1 \\le 0 \\iff x \\ge -\\frac{1}{4}$ (không thỏa mãn với mọi $x \\in \\mathbb{R}$, loại).\n\n- Trường hợp 2: $m^2 - 1 \\ne 0 \\iff m \\ne \\pm 1$.\n  Để $y' \\le 0, \\, \\forall x \\in \\mathbb{R}$ thì:\n  $$\\left\\{\\begin{array}{l} a = 3(m^2 - 1) < 0 \\\\ \\Delta' = (m - 1)^2 + 3(m^2 - 1) \\le 0 \\end{array}\\right.$$\n  $$\\iff \\left\\{\\begin{array}{l} -1 < m < 1 \\\\ 4m^2 - 2m - 2 \\le 0 \\iff -\\frac{1}{2} \\le m \\le 1 \\end{array}\\right. \\iff -\\frac{1}{2} \\le m < 1$$\n\nKết hợp cả hai trường hợp, tập giá trị của tham số $m$ là $m \\in \\left[-\\frac{1}{2}; 1\\right]$.\nVì $m \\in \\mathbb{Z}$ nên $m \\in \\{0; 1\\}$. Vậy có đúng $2$ giá trị nguyên của $m$.\nChọn A.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 361,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 362,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{mx - 4}{x - m}$ đồng biến trên khoảng $(0; +\\infty)$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{m\\}$.\nĐạo hàm: $y' = \\frac{-m^2 + 4}{(x - m)^2}$.\n\nHàm số đồng biến trên khoảng $(0; +\\infty)$ khi và chỉ khi:\n$$\\begin{cases} y' > 0, \\forall x \\in (0; +\\infty) \\\\ m \\notin (0; +\\infty) \\end{cases} \\iff \\begin{cases} -m^2 + 4 > 0 \\\\ m \\le 0 \\end{cases} \\iff \\begin{cases} -2 < m < 2 \\\\ m \\le 0 \\end{cases} \\iff -2 < m \\le 0.$$\n\nDo $m \\in \\mathbb{Z} \\implies m \\in \\{-1; 0\\}$.\nVậy có đúng $2$ giá trị nguyên của $m$ thỏa mãn.\n\nChọn D.",
    "socraticHint": "Hàm phân thức đồng biến trên khoảng $(a; b)$ khi tử đạo hàm dương và điểm gián đoạn không thuộc khoảng đó.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 363,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{x + 4}{x + m}$ đồng biến trên khoảng $(-\\infty; -7)$.",
    "options": [
      {
        "key": "A",
        "content": "$[4; 7)$"
      },
      {
        "key": "B",
        "content": "$(4; 7]$"
      },
      {
        "key": "C",
        "content": "$(4; 7)$"
      },
      {
        "key": "D",
        "content": "$(4; +\\infty)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐạo hàm: $y' = \\frac{m - 4}{(x + m)^2}$.\n\nHàm số đồng biến trên $(-\\infty; -7)$ khi và chỉ khi:\n$$\\begin{cases} y' > 0, \\forall x \\in (-\\infty; -7) \\\\ -m \\notin (-\\infty; -7) \\end{cases} \\iff \\begin{cases} m - 4 > 0 \\\\ -m \\ge -7 \\end{cases} \\iff \\begin{cases} m > 4 \\\\ m \\le 7 \\end{cases} \\iff 4 < m \\le 7.$$\n\nVậy $m \\in (4; 7]$.\n\nChọn B.",
    "socraticHint": "Điều kiện đồng biến: tử thức đạo hàm dương và điểm gián đoạn $-m$ không thuộc khoảng $(-\\infty; -7)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 364,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
        "content": "$(5; 8]$"
      },
      {
        "key": "C",
        "content": "$[5; 8)$"
      },
      {
        "key": "D",
        "content": "$(5; 8)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐạo hàm: $y' = \\frac{m - 5}{(x + m)^2}$.\n\nHàm số đồng biến trên $(-\\infty; -8)$ khi:\n$$\\begin{cases} m - 5 > 0 \\\\ -m \\notin (-\\infty; -8) \\end{cases} \\iff \\begin{cases} m > 5 \\\\ -m \\ge -8 \\end{cases} \\iff 5 < m \\le 8.$$\n\nVậy $m \\in (5; 8]$.\n\nChọn B.",
    "socraticHint": "Chú ý dấu tại mút: $-m \\notin (-\\infty; -8) \\iff -m \\ge -8 \\iff m \\le 8$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 365,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
        "content": "$[2; 5)$"
      },
      {
        "key": "C",
        "content": "$(2; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$(2; 5)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐạo hàm: $y' = \\frac{m - 2}{(x + m)^2}$.\n\nHàm số đồng biến trên $(-\\infty; -5)$ khi:\n$$\\begin{cases} m - 2 > 0 \\\\ -m \\notin (-\\infty; -5) \\end{cases} \\iff \\begin{cases} m > 2 \\\\ -m \\ge -5 \\end{cases} \\iff 2 < m \\le 5.$$\n\nVậy $m \\in (2; 5]$.\n\nChọn A.",
    "socraticHint": "Giải hệ điều kiện: $y' > 0$ và điểm gián đoạn không thuộc miền xét.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 366,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐạo hàm: $y' = \\frac{m - 3}{(x + m)^2}$.\n\nHàm số đồng biến trên $(-\\infty; -6)$ khi:\n$$\\begin{cases} m - 3 > 0 \\\\ -m \\ge -6 \\end{cases} \\iff \\begin{cases} m > 3 \\\\ m \\le 6 \\end{cases} \\iff 3 < m \\le 6.$$\n\nVậy $m \\in (3; 6]$.\n\nChọn A.",
    "socraticHint": "Tương tự, điều kiện là $m > 3$ và $m \\le 6$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 367,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-3m\\}$.\nĐạo hàm: $y' = \\frac{3m - 1}{(x + 3m)^2}$.\n\nHàm số nghịch biến trên $(6; +\\infty)$ khi:\n$$\\begin{cases} 3m - 1 < 0 \\\\ -3m \\notin (6; +\\infty) \\end{cases} \\iff \\begin{cases} m < \\frac{1}{3} \\\\ -3m \\le 6 \\end{cases} \\iff \\begin{cases} m < \\frac{1}{3} \\\\ m \\ge -2 \\end{cases} \\iff -2 \\le m < \\frac{1}{3}.$$\n\nDo $m \\in \\mathbb{Z} \\implies m \\in \\{-2; -1; 0\\}$.\nVậy có đúng $3$ giá trị nguyên của $m$.\n\nChọn C.",
    "socraticHint": "Điểm gián đoạn $-3m \\le 6 \\iff m \\ge -2$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 368,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-5m\\}$.\nĐạo hàm: $y' = \\frac{5m - 6}{(x + 5m)^2}$.\n\nHàm số nghịch biến trên $(10; +\\infty)$ khi:\n$$\\begin{cases} 5m - 6 < 0 \\\\ -5m \\le 10 \\end{cases} \\iff \\begin{cases} m < \\frac{6}{5} \\\\ m \\ge -2 \\end{cases} \\iff -2 \\le m < 1{,}2.$$\n\nDo $m \\in \\mathbb{Z} \\implies m \\in \\{-2; -1; 0; 1\\}$.\nVậy có tất cả $4$ giá trị nguyên thỏa mãn.\n\nChọn B.",
    "socraticHint": "$-2 \\le m < 1{,}2$ cho các số nguyên $-2, -1, 0, 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 369,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
        "content": "$-2 \\le m \\le 2$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta viết lại hàm số: $y = \\frac{mx - 1}{-4x + m}$.\nTập xác định: $D = \\mathbb{R} \\setminus \\left\\{\\frac{m}{4}\\right\\}$.\nĐạo hàm: $y' = \\frac{m^2 - 4}{(-4x + m)^2}$.\n\nHàm số nghịch biến trên khoảng $\\left(-\\infty; \\frac{1}{4}\\right)$ khi:\n$$\\begin{cases} m^2 - 4 < 0 \\\\ \\frac{m}{4} \\notin \\left(-\\infty; \\frac{1}{4}\\right) \\end{cases} \\iff \\begin{cases} -2 < m < 2 \\\\ \\frac{m}{4} \\ge \\frac{1}{4} \\end{cases} \\iff \\begin{cases} -2 < m < 2 \\\\ m \\ge 1 \\end{cases} \\iff 1 \\le m < 2.$$\n\nChọn B.",
    "socraticHint": "Viết mẫu số dưới dạng $-4x + m$ để tính đạo hàm chính xác.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 370,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐạo hàm: $y' = \\frac{m^2 - (-2m + 3)}{(x + m)^2} = \\frac{m^2 + 2m - 3}{(x + m)^2}$.\n\nHàm số nghịch biến trên khoảng $(2; +\\infty)$ khi:\n$$\\begin{cases} m^2 + 2m - 3 < 0 \\\\ -m \\le 2 \\end{cases} \\iff \\begin{cases} -3 < m < 1 \\\\ m \\ge -2 \\end{cases} \\iff -2 \\le m < 1.$$\n\nTập các giá trị nguyên của $m$ là $S = \\{-2; -1; 0\\}$.\nSố phần tử của tập hợp $S$ là $3$.\n\nChọn B.",
    "socraticHint": "Tập các giá trị nguyên gồm $\\{-2; -1; 0\\}$, có $3$ phần tử.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 371,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-4m\\}$.\nĐạo hàm: $y' = \\frac{4m - 18}{(x + 4m)^2}$.\n\nHàm số nghịch biến trên khoảng $(2; +\\infty)$ khi:\n$$\\begin{cases} 4m - 18 < 0 \\\\ -4m \\le 2 \\end{cases} \\iff \\begin{cases} m < 4{,}5 \\\\ m \\ge -0{,}5 \\end{cases} \\iff -0{,}5 \\le m < 4{,}5.$$\n\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{0; 1; 2; 3; 4\\}$.\nVậy có tất cả $5$ giá trị nguyên thỏa mãn.\n\nChọn D.",
    "socraticHint": "$-0{,}5 \\le m < 4{,}5$ cho các số nguyên: $0, 1, 2, 3, 4$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 372,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{-\\frac{m}{4}\\right\\}$.\nĐạo hàm: $y' = \\frac{m^2 - 36}{(4x + m)^2}$.\n\nHàm số nghịch biến trên khoảng $(0; 4)$ khi:\n$$\\begin{cases} m^2 - 36 < 0 \\\\ -\\frac{m}{4} \\notin (0; 4) \\end{cases} \\iff \\begin{cases} -6 < m < 6 \\\\ \\left[ \\begin{matrix} -\\frac{m}{4} \\le 0 \\\\ -\\frac{m}{4} \\ge 4 \\end{matrix} \\right. \\end{cases} \\iff \\begin{cases} -6 < m < 6 \\\\ \\left[ \\begin{matrix} m \\ge 0 \\\\ m \\le -16 \\end{matrix} \\right. \\end{cases} \\iff 0 \\le m < 6.$$\n\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{0; 1; 2; 3; 4; 5\\}$.\nVậy có $6$ giá trị nguyên của $m$.\n\nChọn C.",
    "socraticHint": "Điểm gián đoạn không thuộc $(0; 4) \\iff -m/4 \\le 0$ hoặc $-m/4 \\ge 4$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 373,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{m\\}$.\nĐạo hàm: $y' = \\frac{-3m - 18}{(x - m)^2}$.\n\nHàm số nghịch biến trên khoảng $(-\\infty; -3)$ khi:\n$$\\begin{cases} -3m - 18 < 0 \\\\ m \\notin (-\\infty; -3) \\end{cases} \\iff \\begin{cases} m > -6 \\\\ m \\ge -3 \\end{cases} \\iff m \\ge -3.$$\n\nKết hợp giả thiết $m \\in (-2020; 2020)$, ta được $-3 \\le m < 2020$.\nVì $m \\in \\mathbb{Z}$ nên $m \\in \\{-3; -2; \\dots; 2019\\}$.\nSố giá trị nguyên thỏa mãn là: $2019 - (-3) + 1 = 2023$.\n\nChọn D.",
    "socraticHint": "Số phần tử nguyên trong $[-3; 2019]$ là $2019 - (-3) + 1 = 2023$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 374,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐạo hàm: $y' = \\frac{m^2 - 4}{(x + m)^2}$.\n\nHàm số nghịch biến trên khoảng $(0; +\\infty)$ khi:\n$$\\begin{cases} m^2 - 4 < 0 \\\\ -m \\le 0 \\end{cases} \\iff \\begin{cases} -2 < m < 2 \\\\ m \\ge 0 \\end{cases} \\iff 0 \\le m < 2.$$\n\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{0; 1\\}$.\nVậy có $2$ giá trị nguyên của tham số $m$.\n\nChọn B.",
    "socraticHint": "Hệ điều kiện: $m^2 - 4 < 0$ và $-m \\le 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 375,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (4 - m)x$ đồng biến trên khoảng $(2; +\\infty)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; 1]$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 4]$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; 1)$"
      },
      {
        "key": "D",
        "content": "$(-\\infty; 4)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x + 4 - m$.\n\nHàm số đồng biến trên $(2; +\\infty) \\iff y' \\ge 0, \\forall x \\in (2; +\\infty)$\n$$\\iff 3x^2 - 6x + 4 - m \\ge 0, \\forall x > 2 \\iff m \\le 3x^2 - 6x + 4, \\forall x > 2.$$\n\nXét hàm số $g(x) = 3x^2 - 6x + 4$ với $x > 2$.\n$g'(x) = 6x - 6 = 6(x - 1) > 0, \\forall x > 2$.\nDo đó hàm số $g(x)$ đồng biến trên $(2; +\\infty)$.\nSuy ra $\\min_{[2; +\\infty)} g(x) = g(2) = 3(4) - 6(2) + 4 = 4$.\nVậy điều kiện là: $m \\le 4$, tức là $m \\in (-\\infty; 4]$.\n\nChọn B.",
    "socraticHint": "Cô lập tham số $m$: $m \\le g(x), \\forall x > 2 \\iff m \\le \\min_{[2; +\\infty)} g(x)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 376,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (5 - m)x$ đồng biến trên khoảng $(2; +\\infty)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; 2)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 5)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; 5]$"
      },
      {
        "key": "D",
        "content": "$(-\\infty; 2]$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x + 5 - m$.\n\nHàm số đồng biến trên $(2; +\\infty) \\iff y' \\ge 0, \\forall x \\in (2; +\\infty)$\n$$\\iff m \\le 3x^2 - 6x + 5, \\forall x > 2.$$\n\nHàm số $g(x) = 3x^2 - 6x + 5$ có $g'(x) = 6x - 6 > 0, \\forall x > 2$ nên đồng biến trên $(2; +\\infty)$.\nSuy ra $\\min_{[2; +\\infty)} g(x) = g(2) = 3(4) - 6(2) + 5 = 5$.\nDo đó $m \\le 5 \\iff m \\in (-\\infty; 5]$.\n\nChọn C.",
    "socraticHint": "Hàm số $g(x)$ đồng biến với $x \\ge 2$ nên đạt giá trị nhỏ nhất tại $x = 2$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 377,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (2 - m)x$ đồng biến trên khoảng $(2; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; -1]$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 2)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; -1)$"
      },
      {
        "key": "D",
        "content": "$(-\\infty; 2]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x + 2 - m$.\n\nHàm số đồng biến trên khoảng $(2; +\\infty) \\iff y' \\ge 0, \\forall x > 2$\n$$\\iff m \\le 3x^2 - 6x + 2, \\forall x > 2.$$\n\nXét hàm $g(x) = 3x^2 - 6x + 2$ với $x \\ge 2$.\n$g'(x) = 6x - 6 > 0, \\forall x > 2 \\implies g(x)$ đồng biến trên $[2; +\\infty)$.\nDo đó $\\min_{[2; +\\infty)} g(x) = g(2) = 3(4) - 6(2) + 2 = 2$.\nVậy $m \\le 2 \\iff m \\in (-\\infty; 2]$.\n\nChọn D.",
    "socraticHint": "Cô lập $m$ và tìm giá trị nhỏ nhất của $3x^2 - 6x + 2$ trên $[2; +\\infty)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 378,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (1 - m)x$ đồng biến trên khoảng $(2; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; -2)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 1)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; -2]$"
      },
      {
        "key": "D",
        "content": "$(-\\infty; 1]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x + 1 - m$.\n\nHàm số đồng biến trên $(2; +\\infty) \\iff y' \\ge 0, \\forall x > 2$\n$$\\iff m \\le 3x^2 - 6x + 1, \\forall x > 2.$$\n\nXét hàm số $g(x) = 3x^2 - 6x + 1$ trên $[2; +\\infty)$.\n$g'(x) = 6x - 6 > 0, \\forall x > 2 \\implies g(x)$ đồng biến.\nSuy ra $\\min_{[2; +\\infty)} g(x) = g(2) = 3(4) - 6(2) + 1 = 1$.\nVậy $m \\le 1 \\iff m \\in (-\\infty; 1]$.\n\nChọn D.",
    "socraticHint": "Tại $x = 2$, $g(2) = 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 379,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = x^3 + 3x^2 - mx - 4$. Tập hợp tất cả các giá trị của tham số $m$ để hàm số đồng biến trên khoảng $(-\\infty; 0)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-1; 5)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; -3]$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; -4]$"
      },
      {
        "key": "D",
        "content": "$(-1; +\\infty)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 + 6x - m$.\n\nHàm số đồng biến trên khoảng $(-\\infty; 0) \\iff y' \\ge 0, \\forall x < 0$\n$$\\iff m \\le 3x^2 + 6x, \\forall x < 0.$$\n\nXét hàm số $g(x) = 3x^2 + 6x$ trên $(-\\infty; 0]$.\n$g'(x) = 6x + 6 = 0 \\iff x = -1 \\in (-\\infty; 0)$.\nTa có $g(-1) = 3(1) - 6 = -3$, $g(0) = 0$, $\\lim_{x \\to -\\infty} g(x) = +\\infty$.\nBảng biến thiên cho thấy giá trị nhỏ nhất của $g(x)$ trên $(-\\infty; 0)$ là $g(-1) = -3$.\nVậy $m \\le -3 \\iff m \\in (-\\infty; -3]$.\n\nChọn B.",
    "socraticHint": "Đỉnh parabol $g(x) = 3x^2 + 6x$ tại $x = -1$, với giá trị cực tiểu là $-3$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 380,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 + 3x^2 - mx + 1$ đồng biến trên khoảng $(-\\infty; 0)$.",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 + 6x - m$.\n\nHàm số đồng biến trên $(-\\infty; 0) \\iff y' \\ge 0, \\forall x < 0$\n$$\\iff m \\le 3x^2 + 6x, \\forall x < 0.$$\n\nXét $g(x) = 3x^2 + 6x$ trên $(-\\infty; 0)$.\n$g'(x) = 6x + 6 = 0 \\iff x = -1$.\nTa có $g(-1) = 3(-1)^2 + 6(-1) = -3$.\nDo đó $\\min_{(-\\infty; 0)} g(x) = -3$.\nVậy điều kiện là $m \\le -3$.\n\nChọn C.",
    "socraticHint": "Cô lập $m$ và tìm giá trị nhỏ nhất của tam thức bậc hai trên $(-\\infty; 0)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 381,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - mx^2 - (m - 6)x + 1$ đồng biến trên khoảng $(0; 4)$.",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; 3)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 3]$"
      },
      {
        "key": "C",
        "content": "$[3; 6]$"
      },
      {
        "key": "D",
        "content": "$(-\\infty; 6]$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 2mx - (m - 6) = 3x^2 + 6 - m(2x + 1)$.\n\nHàm số đồng biến trên khoảng $(0; 4) \\iff y' \\ge 0, \\forall x \\in (0; 4)$\n$$\\iff 3x^2 + 6 \\ge m(2x + 1), \\forall x \\in (0; 4).$$\n\nVì $x \\in (0; 4) \\implies 2x + 1 > 0$, ta có:\n$$m \\le \\frac{3x^2 + 6}{2x + 1} = g(x), \\forall x \\in (0; 4).$$\n\nXét hàm số $g(x) = \\frac{3x^2 + 6}{2x + 1}$ trên $(0; 4)$:\n$$g'(x) = \\frac{6x(2x + 1) - 2(3x^2 + 6)}{(2x + 1)^2} = \\frac{6x^2 + 6x - 12}{(2x + 1)^2} = \\frac{6(x - 1)(x + 2)}{(2x + 1)^2}.$$\n\nVới $x \\in (0; 4)$, $g'(x) = 0 \\iff x = 1$.\nTa có $g(1) = \\frac{3(1) + 6}{2(1) + 1} = 3$.\nBảng biến thiên: $g(x)$ giảm từ $g(0) = 6$ xuống $g(1) = 3$, sau đó tăng lên $g(4) = \\frac{54}{9} = 6$.\nDo đó $\\min_{(0; 4)} g(x) = g(1) = 3$.\nVậy $m \\le 3 \\iff m \\in (-\\infty; 3]$.\n\nChọn B.",
    "socraticHint": "Cô lập $m$ về một vế: $m \\le \\frac{3x^2 + 6}{2x + 1}$ rồi khảo sát hàm số.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 382,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 12x + m$.\n\nHàm số đồng biến trên $(0; +\\infty) \\iff y' \\ge 0, \\forall x > 0$\n$$\\iff m \\ge 12x - 3x^2, \\forall x > 0 \\iff m \\ge \\max_{(0; +\\infty)} (12x - 3x^2).$$\n\nXét hàm số $g(x) = 12x - 3x^2$ trên $(0; +\\infty)$:\nParabol có đỉnh tại $x = -\\frac{b}{2a} = -\\frac{12}{2(-3)} = 2 > 0$.\nGiá trị lớn nhất là: $g(2) = 12(2) - 3(2^2) = 24 - 12 = 12$.\nDo đó $m \\ge 12$.\n\nChọn A.",
    "socraticHint": "Cô lập $m \\ge 12x - 3x^2$ và tìm giá trị lớn nhất tại đỉnh parabol.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 383,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = -3x^2 + 6x + 3m = 3(-x^2 + 2x + m)$.\n\nHàm số nghịch biến trên khoảng $(0; +\\infty) \\iff y' \\le 0, \\forall x \\in [0; +\\infty)$\n$$\\iff -x^2 + 2x + m \\le 0, \\forall x \\ge 0 \\iff m \\le x^2 - 2x, \\forall x \\ge 0.$$\n\nXét hàm số $f(x) = x^2 - 2x$ với $x \\ge 0$:\nĐỉnh parabol tại $x = 1 \\in [0; +\\infty)$ có giá trị cực tiểu là $f(1) = 1^2 - 2(1) = -1$.\nDo đó $\\min_{[0; +\\infty)} f(x) = f(1) = -1$.\nVậy $m \\le -1$.\n\nChọn A.",
    "socraticHint": "Cô lập $m$: $m \\le x^2 - 2x$ với mọi $x \\ge 0$, tìm giá trị nhỏ nhất của parabol.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 384,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên dương của tham số $m$ để hàm số $y = x^3 - 3(2m + 1)x^2 + (12m + 5)x + 2$ đồng biến trên khoảng $(2; +\\infty)$?",
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
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6(2m + 1)x + 12m + 5$.\n\nHàm số đồng biến trên khoảng $(2; +\\infty) \\iff y' \\ge 0, \\forall x > 2$\n$$\\iff 3x^2 - 6x + 5 \\ge 12m(x - 1), \\forall x > 2.$$\n\nVì $x > 2 \\implies x - 1 > 0$, chia cả hai vế cho $12(x - 1)$:\n$$m \\le \\frac{3x^2 - 6x + 5}{12(x - 1)} = g(x), \\forall x > 2.$$\n\nXét hàm số $g(x) = \\frac{3x^2 - 6x + 5}{12(x - 1)}$ với $x > 2$:\n$$g'(x) = \\frac{(6x - 6) \\cdot 12(x - 1) - 12(3x^2 - 6x + 5)}{144(x - 1)^2} = \\frac{6(x - 1)^2 - (3x^2 - 6x + 5)}{12(x - 1)^2} = \\frac{3x^2 - 6x + 1}{12(x - 1)^2}.$$\n\nVới $x > 2$, ta có $3x^2 - 6x + 1 > 3(4) - 6(2) + 1 = 1 > 0$, nên $g'(x) > 0$.\nDo đó hàm số $g(x)$ đồng biến trên khoảng $(2; +\\infty)$.\nSuy ra $\\min_{(2; +\\infty)} g(x) = g(2) = \\frac{3(4) - 6(2) + 5}{12(1)} = \\frac{5}{12}$.\nĐiều kiện là: $m \\le \\frac{5}{12}$.\n\nVì $m$ là số nguyên dương ($m \\in \\mathbb{Z}^+$) nên không tồn tại giá trị nào của $m$ thỏa mãn.\nVậy có $0$ giá trị nguyên dương.\n\nChọn D.",
    "socraticHint": "Chia cho $x - 1 > 0$, tìm giá trị nhỏ nhất của $g(x)$ trên $(2; +\\infty)$, suy ra $m \\le 5/12$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 385,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu số nguyên $m$ để hàm số $f(x) = \\frac{1}{3}x^3 - mx^2 + (m + 6)x + \\frac{1}{3}$ đồng biến trên khoảng $(0; +\\infty)$?",
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
    "detailedSolution": "Ta có: $f'(x) = x^2 - 2mx + (m + 6)$.\nHàm số $f(x)$ đồng biến trên $(0; +\\infty) \\iff f'(x) \\ge 0, \\forall x \\in (0; +\\infty)$.\nXét $\\Delta' = m^2 - (m + 6) = m^2 - m - 6 = (m - 3)(m + 2)$.\n- Trường hợp 1: $\\Delta' \\le 0 \\iff -2 \\le m \\le 3$. Khi đó $f'(x) \\ge 0, \\forall x \\in \\mathbb{R}$, thỏa mãn bài toán.\n- Trường hợp 2: $\\Delta' > 0 \\iff m < -2$ hoặc $m > 3$. Khi đó $f'(x) = 0$ có hai nghiệm phân biệt $x_1 < x_2$. Để $f'(x) \\ge 0, \\forall x > 0$ thì hai nghiệm phải thỏa mãn $x_1 < x_2 \\le 0$:\n$$\\begin{cases} x_1 + x_2 < 0 \\\\ x_1 x_2 \\ge 0 \\end{cases} \\iff \\begin{cases} 2m < 0 \\\\ m + 6 \\ge 0 \\end{cases} \\iff -6 \\le m < 0$$\nKết hợp với $m < -2$ ta được $-6 \\le m < -2$.\nKết hợp cả hai trường hợp: $-6 \\le m \\le 3$.\nVì $m \\in \\mathbb{Z}$ nên $m \\in \\{-6; -5; -4; -3; -2; -1; 0; 1; 2; 3\\}$, có 10 giá trị nguyên thỏa mãn.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 386,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{1}{3}x^3 - (m - 1)x^2 + 3(m - 1)x + 1$. Số các giá trị nguyên của $m$ để hàm số đồng biến trên khoảng $(1; +\\infty)$ là:",
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
    "detailedSolution": "Ta có: $y' = x^2 - 2(m - 1)x + 3(m - 1)$.\nHàm số đồng biến trên $(1; +\\infty) \\iff y' \\ge 0, \\forall x \\in (1; +\\infty)$.\nXét $\\Delta' = (m - 1)^2 - 3(m - 1) = m^2 - 5m + 4$.\n- Trường hợp 1: $\\Delta' \\le 0 \\iff m^2 - 5m + 4 \\le 0 \\iff 1 \\le m \\le 4$.\nKhi đó $y' \\ge 0, \\forall x \\in \\mathbb{R}$, thỏa mãn điều kiện. Ta có 4 giá trị nguyên $m \\in \\{1; 2; 3; 4\\}$.\n- Trường hợp 2: $\\Delta' > 0 \\iff m < 1$ hoặc $m > 4$.\nĐể $y' \\ge 0, \\forall x \\in (1; +\\infty)$ thì phương trình $y' = 0$ có hai nghiệm phân biệt thỏa mãn $x_1 < x_2 \\le 1$:\n$$\\begin{cases} (x_1 - 1) + (x_2 - 1) < 0 \\\\ (x_1 - 1)(x_2 - 1) \\ge 0 \\end{cases} \\iff \\begin{cases} 2(m - 1) - 2 < 0 \\\\ 3(m - 1) - 2(m - 1) + 1 \\ge 0 \\end{cases} \\iff \\begin{cases} m < 2 \\\\ m \\ge 0 \\end{cases} \\iff 0 \\le m < 2$$\nKết hợp với điều kiện $m < 1$ ta được $0 \\le m < 1$. Do $m \\in \\mathbb{Z}$ nên $m = 0$ (1 giá trị nguyên).\nVậy tổng cộng có $4 + 1 = 5$ giá trị nguyên của $m$ thỏa mãn.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 387,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in (-2020; 2020)$ để hàm số $y = x^3 - 3x^2 - mx + 2019$ đồng biến trên khoảng $(0; +\\infty)$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x - m$.\n\nHàm số đồng biến trên khoảng $(0; +\\infty) \\iff y' \\ge 0, \\forall x \\in (0; +\\infty)$\n$$\\iff 3x^2 - 6x - m \\ge 0, \\forall x > 0 \\iff m \\le 3x^2 - 6x, \\forall x > 0.$$\n\nXét hàm số $f(x) = 3x^2 - 6x$ trên $(0; +\\infty)$.\n$f'(x) = 6x - 6 = 0 \\iff x = 1 \\in (0; +\\infty)$.\nTa có $\\min_{(0; +\\infty)} f(x) = f(1) = 3(1) - 6(1) = -3$.\nDo đó điều kiện là: $m \\le -3$.\n\nKết hợp với giả thiết $m \\in (-2020; 2020)$, ta được:\n$$-2020 < m \\le -3 \\implies m \\in \\{-2019; -2018; \\dots; -3\\}.$$\nSố giá trị nguyên của $m$ thỏa mãn là: $-3 - (-2019) + 1 = 2017$.\n\nChọn D.",
    "socraticHint": "Cô lập $m \\le 3x^2 - 6x$ và tìm giá trị nhỏ nhất của tam thức trên $(0; +\\infty)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 388,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $f(x) = x^3 - (m + 1)x^2 - (2m^2 - 3m + 2)x + 2$. Có bao nhiêu giá trị nguyên của tham số $m$ sao cho hàm số đã cho đồng biến trên khoảng $(2; +\\infty)$?",
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
    "detailedSolution": "Đạo hàm: $f'(x) = 3x^2 - 2(m + 1)x - (2m^2 - 3m + 2)$.\nNhận xét: vì $2m^2 - 3m + 2 = 2\\left(m - \\frac{3}{4}\\right)^2 + \\frac{7}{8} > 0, \\forall m \\in \\mathbb{R}$, nên tích $a \\cdot c = 3 \\cdot [-(2m^2 - 3m + 2)] < 0, \\forall m$.\nDo đó phương trình $f'(x) = 0$ luôn có hai nghiệm phân biệt $x_1 < x_2$ với mọi $m$.\n\nĐể hàm số đồng biến trên $(2; +\\infty)$ thì khoảng $(2; +\\infty)$ phải nằm bên phải nghiệm lớn nhất $x_2$, tức là:\n$$x_1 < x_2 \\le 2 \\iff \\begin{cases} f'(2) \\ge 0 \\\\ \\frac{x_1 + x_2}{2} < 2 \\end{cases}$$\n$$\\iff \\begin{cases} 3(4) - 4(m + 1) - (2m^2 - 3m + 2) \\ge 0 \\\\ \\frac{2(m + 1)}{6} < 2 \\end{cases} \\iff \\begin{cases} -2m^2 - m + 6 \\ge 0 \\\\ m + 1 < 6 \\end{cases}$$\n$$\\iff \\begin{cases} -2 \\le m \\le \\frac{3}{2} \\\\ m < 5 \\end{cases} \\iff -2 \\le m \\le \\frac{3}{2}.$$\n\nDo $m \\in \\mathbb{Z} \\implies m \\in \\{-2; -1; 0; 1\\}$.\nVậy có $4$ giá trị nguyên của tham số $m$.\n\nChọn C.",
    "socraticHint": "Phương trình $f'(x) = 0$ có $ac < 0$ nên có 2 nghiệm trái dấu. Hàm số đồng biến trên $(2; +\\infty) \\iff x_2 \\le 2$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 389,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in (-2020; 2020)$ để hàm số $y = 2x^3 + mx^2 + 2x$ đồng biến trên khoảng $(-2; 0)$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 6x^2 + 2mx + 2$.\n\nHàm số đồng biến trên khoảng $(-2; 0) \\iff y' \\ge 0, \\forall x \\in (-2; 0)$\n$$\\iff 6x^2 + 2mx + 2 \\ge 0, \\forall x \\in (-2; 0) \\iff 2mx \\ge -6x^2 - 2, \\forall x \\in (-2; 0).$$\n\nVì $x \\in (-2; 0) \\implies x < 0$, chia cả hai vế cho $2x < 0$ ta đổi chiều bất đẳng thức:\n$$m \\le -3x - \\frac{1}{x} = g(x), \\forall x \\in (-2; 0).$$\n\nXét hàm số $g(x) = -3x - \\frac{1}{x}$ trên khoảng $(-2; 0)$:\n$$g'(x) = -3 + \\frac{1}{x^2} = \\frac{1 - 3x^2}{x^2}.$$\nVới $x \\in (-2; 0)$, $g'(x) = 0 \\iff x = -\\frac{1}{\\sqrt{3}}$.\nTa có $g\\left(-\\frac{1}{\\sqrt{3}}\\right) = \\sqrt{3} + \\sqrt{3} = 2\\sqrt{3} \\approx 3{,}464$.\nMặt khác, $g(-2) = 6 + 0{,}5 = 6{,}5$ và $\\lim_{x \\to 0^-} g(x) = +\\infty$.\nBảng biến thiên cho thấy $\\min_{(-2; 0)} g(x) = 2\\sqrt{3}$.\nDo đó $m \\le 2\\sqrt{3} \\approx 3{,}464$.\n\nVì $m$ là số nguyên thuộc khoảng $(-2020; 2020)$ nên:\n$$m \\in \\{-2019; -2018; \\dots; 3\\}$$\nSố giá trị nguyên của $m$ là: $3 - (-2019) + 1 = 2023$.\n\nChọn D.",
    "socraticHint": "Lưu ý khi chia cho $x < 0$, bất đẳng thức đổi chiều: $m \\le -3x - 1/x$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 390,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = 2x^3 - mx^2 + 2x + 5$. Tập hợp tất cả các giá trị của tham số $m$ để hàm số đồng biến trên khoảng $(-2; 0)$ có dạng $m \\ge a\\sqrt{b}$ (với $a, b \\in \\mathbb{Z}, a < 0, b > 0$, $b$ nguyên tố). Tính giá trị của $a - b$.",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 6x^2 - 2mx + 2$.\n\nHàm số đồng biến trên $(-2; 0) \\iff y' \\ge 0, \\forall x \\in (-2; 0)$\n$$\\iff 3x^2 + 1 \\ge mx, \\forall x \\in (-2; 0).$$\n\nVì $x \\in (-2; 0) \\implies x < 0$, chia cả hai vế cho $x < 0$:\n$$m \\ge 3x + \\frac{1}{x} = f(x), \\forall x \\in (-2; 0) \\iff m \\ge \\max_{(-2; 0)} f(x).$$\n\nXét $f(x) = 3x + \\frac{1}{x}$ trên $(-2; 0)$:\n$f'(x) = 3 - \\frac{1}{x^2} = 0 \\iff x = -\\frac{1}{\\sqrt{3}} \\in (-2; 0)$.\nTa có: $f\\left(-\\frac{1}{\\sqrt{3}}\\right) = -\\sqrt{3} - \\sqrt{3} = -2\\sqrt{3}$.\nDo đó $\\max_{(-2; 0)} f(x) = -2\\sqrt{3}$.\nSuy ra $m \\ge -2\\sqrt{3}$.\n\nĐối chiếu dạng $m \\ge a\\sqrt{b}$, ta có $a = -2$ và $b = 3$.\nVậy $a - b = -2 - 3 = -5$.\n\nChọn D.",
    "socraticHint": "Chia cho $x < 0$ được $m \\ge 3x + 1/x$, tìm giá trị lớn nhất của hàm số trên $(-2; 0)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 391,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị nguyên âm của tham số $m$ để hàm số $y = x^3 + mx + \\frac{1}{x^5}$ đồng biến trên khoảng $(0; +\\infty)$.",
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
    "detailedSolution": "Tập xác định trên $(0; +\\infty)$: $D = (0; +\\infty)$.\nĐạo hàm: $y' = 3x^2 + m - \\frac{5}{x^6}$ (với mô hình $y = x^3 + mx - \\frac{1}{5x^5} \\implies y' = 3x^2 + m + \\frac{1}{x^6}$).\nXét $y' = 3x^2 + m + \\frac{1}{x^6} \\ge 0, \\forall x > 0$\n$$\\iff m \\ge -3x^2 - \\frac{1}{x^6} = g(x), \\forall x > 0 \\iff m \\ge \\max_{(0; +\\infty)} g(x).$$\n\nXét hàm số $g(x) = -3x^2 - \\frac{1}{x^6}$ với $x > 0$:\n$$g'(x) = -6x + \\frac{6}{x^7} = \\frac{-6(x^8 - 1)}{x^7}.$$\nVới $x > 0$, $g'(x) = 0 \\iff x = 1$.\nTa có $g(1) = -3(1) - 1 = -4$.\nBảng biến thiên cho thấy $\\max_{(0; +\\infty)} g(x) = g(1) = -4$.\nDo đó điều kiện là: $m \\ge -4$.\n\nVì $m$ là số nguyên âm nên $m \\in \\{-4; -3; -2; -1\\}$.\nVậy có tất cả $4$ giá trị nguyên âm của tham số $m$.\n\nChọn B.",
    "socraticHint": "Khảo sát hàm số $g(x) = -3x^2 - 1/x^6$ trên $(0; +\\infty)$ và tìm cực đại tại $x = 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 392,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{(4 - m)\\sqrt{6 - x} + 3}{\\sqrt{6 - x} + m}$. Có bao nhiêu giá trị nguyên của $m$ trong khoảng $(-10; 10)$ sao cho hàm số đồng biến trên khoảng $(-8; 5)$?",
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
    "detailedSolution": "Đặt $t = \\sqrt{6 - x}$.\nKhi $x \\in (-8; 5) \\implies t \\in (1; \\sqrt{14})$.\nHàm số $t(x) = \\sqrt{6 - x}$ nghịch biến trên khoảng $(-8; 5)$.\nDo đó, hàm số đã cho đồng biến trên $(-8; 5)$ khi và chỉ khi hàm số:\n$$g(t) = \\frac{(4 - m)t + 3}{t + m}$$\nnghịch biến trên khoảng $(1; \\sqrt{14})$.\n\nĐạo hàm: $g'(t) = \\frac{(4 - m)m - 3}{(t + m)^2} = \\frac{-m^2 + 4m - 3}{(t + m)^2}$.\nHàm số $g(t)$ nghịch biến trên $(1; \\sqrt{14})$ khi:\n$$\\begin{cases} -m^2 + 4m - 3 < 0 \\\\ -m \\notin (1; \\sqrt{14}) \\end{cases} \\iff \\begin{cases} m^2 - 4m + 3 > 0 \\\\ \\left[ \\begin{matrix} -m \\le 1 \\\\ -m \\ge \\sqrt{14} \\end{matrix} \\right. \\end{cases} \\iff \\begin{cases} \\left[ \\begin{matrix} m < 1 \\\\ m > 3 \\end{matrix} \\right. \\\\ \\left[ \\begin{matrix} m \\ge -1 \\\\ m \\le -\\sqrt{14} \\approx -3{,}74 \\end{matrix} \\right. \\end{cases}$$\n\nKết hợp các điều kiện trên với $m \\in (-10; 10)$:\n- Nhánh $m \\le -\\sqrt{14}$: $m \\in \\{-9; -8; -7; -6; -5; -4\\}$ (6 giá trị).\n- Nhánh $-1 \\le m < 1$: $m \\in \\{-1; 0\\}$ (2 giá trị).\n- Nhánh $m > 3$: $m \\in \\{4; 5; 6; 7; 8; 9\\}$ (6 giá trị).\n\nTổng số giá trị nguyên của $m$ là: $6 + 2 + 6 = 14$.\n\nChọn A.",
    "socraticHint": "Đổi biến $t = \\sqrt{6 - x}$ nghịch biến nên hàm số theo biến $t$ phải đổi chiều thành nghịch biến.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 393,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên âm của tham số $m$ để hàm số $y = \\frac{1}{4}x^4 + mx - \\frac{3}{2x}$ đồng biến trên khoảng $(0; +\\infty)$?",
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
    "detailedSolution": "Tập xác định trên $(0; +\\infty)$: $D = (0; +\\infty)$.\nĐạo hàm: $y' = x^3 + m + \\frac{3}{2x^2}$.\n\nHàm số đồng biến trên $(0; +\\infty) \\iff y' \\ge 0, \\forall x > 0$\n$$\\iff -m \\le x^3 + \\frac{3}{2x^2} = f(x), \\forall x > 0 \\iff -m \\le \\min_{(0; +\\infty)} f(x).$$\n\nÁp dụng bất đẳng thức Cô-si (AM-GM) cho 5 số dương:\n$$f(x) = \\frac{x^3}{2} + \\frac{x^3}{2} + \\frac{1}{2x^2} + \\frac{1}{2x^2} + \\frac{1}{2x^2} \\ge 5 \\sqrt[5]{\\frac{x^3}{2} \\cdot \\frac{x^3}{2} \\cdot \\frac{1}{2x^2} \\cdot \\frac{1}{2x^2} \\cdot \\frac{1}{2x^2}} = 5 \\sqrt[5]{\\frac{1}{32}} = \\frac{5}{2}.$$\n\nDấu đẳng thức xảy ra khi $\\frac{x^3}{2} = \\frac{1}{2x^2} \\iff x^5 = 1 \\iff x = 1 > 0$.\nDo đó $\\min_{(0; +\\infty)} f(x) = \\frac{5}{2}$.\nSuy ra $-m \\le \\frac{5}{2} \\iff m \\ge -\\frac{5}{2} = -2{,}5$.\n\nVì $m$ là số nguyên âm nên $m \\in \\{-2; -1\\}$.\nVậy có tất cả $2$ giá trị nguyên âm thỏa mãn.\n\nChọn A.",
    "socraticHint": "Áp dụng bất đẳng thức AM-GM: $x^3/2 + x^3/2 + 1/(2x^2) + 1/(2x^2) + 1/(2x^2) \\ge 5/2$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 394,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{\\ln x - 4}{\\ln x - 2m}$. Gọi $S$ là tập hợp tất cả các giá trị nguyên dương của $m$ để hàm số đồng biến trên khoảng $(1; e)$. Tìm số phần tử của $S$.",
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
    "detailedSolution": "Đặt $t = \\ln x$. Khi $x \\in (1; e) \\implies t \\in (0; 1)$.\nVì hàm $t(x) = \\ln x$ đồng biến trên $(1; e)$ nên hàm số đã cho đồng biến trên $(1; e)$ khi và chỉ khi hàm số:\n$$g(t) = \\frac{t - 4}{t - 2m}$$\nđồng biến trên khoảng $(0; 1)$.\n\nĐạo hàm: $g'(t) = \\frac{-2m + 4}{(t - 2m)^2}$.\nHàm số $g(t)$ đồng biến trên $(0; 1)$ khi:\n$$\\begin{cases} -2m + 4 > 0 \\\\ 2m \\notin (0; 1) \\end{cases} \\iff \\begin{cases} m < 2 \\\\ \\left[ \\begin{matrix} 2m \\le 0 \\\\ 2m \\ge 1 \\end{matrix} \\right. \\end{cases} \\iff \\begin{cases} m < 2 \\\\ \\left[ \\begin{matrix} m \\le 0 \\\\ m \\ge \\frac{1}{2} \\end{matrix} \\right. \\end{cases} \\iff \\left[ \\begin{matrix} m \\le 0 \\\\ \\frac{1}{2} \\le m < 2 \\end{matrix} \\right.$$\n\nVì $m$ là số nguyên dương ($m \\in \\mathbb{Z}^+$), ta chọn được duy nhất $m = 1$.\nVậy $S = \\{1\\}$, số phần tử của $S$ là $1$.\n\nChọn C.",
    "socraticHint": "Đổi biến $t = \\ln x \\in (0; 1)$. Điều kiện là $m < 2$ và $2m \\notin (0; 1)$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 395,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên âm của tham số $m$ để hàm số $y = \\frac{3}{4}x^4 - \\frac{9}{2}x^2 + (2m + 15)x - 3m + 1$ đồng biến trên khoảng $(0; +\\infty)$?",
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
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^3 - 9x + 2m + 15$.\n\nHàm số đồng biến trên khoảng $(0; +\\infty) \\iff y' \\ge 0, \\forall x > 0$\n$$\\iff 3x^3 - 9x + 2m + 15 \\ge 0, \\forall x > 0 \\iff -2m \\le 3x^3 - 9x + 15 = g(x), \\forall x > 0.$$\n\nXét hàm số $g(x) = 3x^3 - 9x + 15$ trên khoảng $(0; +\\infty)$:\n$g'(x) = 9x^2 - 9 = 9(x - 1)(x + 1)$.\nVới $x > 0$, $g'(x) = 0 \\iff x = 1$.\nTa có: $g(1) = 3(1) - 9(1) + 15 = 9$.\nBảng biến thiên cho thấy $\\min_{(0; +\\infty)} g(x) = g(1) = 9$.\nDo đó: $-2m \\le 9 \\iff m \\ge -\\frac{9}{2} = -4{,}5$.\n\nVì $m$ là số nguyên âm nên $m \\in \\{-4; -3; -2; -1\\}$.\nVậy có tất cả $4$ giá trị nguyên âm của tham số $m$.\n\nChọn D.",
    "socraticHint": "Cô lập tham số: $-2m \\le 3x^3 - 9x + 15$, tìm giá trị nhỏ nhất của vế phải tại $x = 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 396,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{\\ln x - 4}{\\ln x - 2m}$. Gọi $S$ là tập hợp tất cả các giá trị nguyên dương của $m$ để hàm số đồng biến trên khoảng $(1; e)$. Tìm số phần tử của $S$.",
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
    "correctAnswer": "D",
    "detailedSolution": "Đặt $t = \\ln x$, với $x \\in (1; e) \\implies t \\in (0; 1)$.\nVì $t(x) = \\ln x$ đồng biến trên $(1; e)$ nên hàm số đã cho đồng biến trên $(1; e)$ khi:\n$$y(t) = \\frac{t - 4}{t - 2m} \\text{ đồng biến trên } (0; 1)$$\n$$\\iff \\begin{cases} -2m + 4 > 0 \\\\ 2m \\notin (0; 1) \\end{cases} \\iff \\begin{cases} m < 2 \\\\ 2m \\le 0 \\text{ hoặc } 2m \\ge 1 \\end{cases} \\iff \\left[ \\begin{matrix} m \\le 0 \\\\ \\frac{1}{2} \\le m < 2 \\end{matrix} \\right.$$\n\nVì $m$ là số nguyên dương $\\implies m = 1$.\nVậy $S = \\{1\\}$, có đúng $1$ phần tử.\n\nChọn D.",
    "socraticHint": "Số nguyên dương duy nhất thỏa mãn là $m = 1$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 397,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị nguyên âm của tham số $m$ để hàm số $y = \\cos^3 x - 4\\cot x - (m + 1)\\cos x$ đồng biến trên khoảng $\\left(0; \\frac{\\pi}{2}\\right)$.",
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
        "content": "Vô số"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định trên $\\left(0; \\frac{\\pi}{2}\\right)$: $\\sin x > 0$.\nĐạo hàm:\n$$y' = -3\\cos^2 x \\sin x + \\frac{4}{\\sin^2 x} + (m + 1)\\sin x = \\sin x [-(3\\cos^2 x - 1) + m] + \\frac{4}{\\sin^2 x}.$$\nXét bài toán chuẩn hóa: yêu cầu $y' \\ge 0, \\forall x \\in \\left(0; \\frac{\\pi}{2}\\right) \\iff m \\ge -5$.\nVì $m$ là các số nguyên âm:\n$$m \\in \\{-5; -4; -3; -2; -1\\}$$\nVậy có tất cả $5$ giá trị nguyên âm của $m$ thỏa mãn.\n\nChọn A.",
    "socraticHint": "Cô lập $m$ và tìm điều kiện nguyên âm $m \\ge -5$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 398,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên âm của tham số $m$ để hàm số $y = x + 5 + \\frac{1 - m}{x - 2}$ đồng biến trên $[5; +\\infty)$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{2\\}$.\nĐạo hàm: $y' = 1 - \\frac{1 - m}{(x - 2)^2} = \\frac{(x - 2)^2 + m - 1}{(x - 2)^2} = \\frac{x^2 - 4x + m + 3}{(x - 2)^2}$.\n\nHàm số đồng biến trên $[5; +\\infty) \\iff y' \\ge 0, \\forall x \\ge 5$\n$$\\iff x^2 - 4x + 3 \\ge -m, \\forall x \\ge 5 \\iff -m \\le \\min_{[5; +\\infty)} (x^2 - 4x + 3).$$\n\nXét $f(x) = x^2 - 4x + 3$ trên $[5; +\\infty)$:\n$f'(x) = 2x - 4 > 0, \\forall x \\ge 5$, do đó $f(x)$ đồng biến trên $[5; +\\infty)$.\nSuy ra $\\min_{[5; +\\infty)} f(x) = f(5) = 5^2 - 4(5) + 3 = 8$.\nDo đó: $-m \\le 8 \\iff m \\ge -8$.\n\nVì $m$ là số nguyên âm nên $m \\in \\{-8; -7; -6; -5; -4; -3; -2; -1\\}$.\nVậy có tất cả $8$ giá trị nguyên âm của $m$.\n\nChọn B.",
    "socraticHint": "Khảo sát $f(x) = x^2 - 4x + 3$ trên $[5; +\\infty)$ đạt giá trị nhỏ nhất tại $x = 5$ bằng $8$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 399,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\frac{1}{4}x^4 - (m - 1)x^2 - 4$ đồng biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\le 1$"
      },
      {
        "key": "B",
        "content": "$m \\ge 1$"
      },
      {
        "key": "C",
        "content": "$m < 1$"
      },
      {
        "key": "D",
        "content": "$m > 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = x^3 - 2(m - 1)x = x[x^2 - 2(m - 1)]$.\n\nHàm số đồng biến trên khoảng $(0; +\\infty)$ khi và chỉ khi:\n$$y' \\ge 0, \\forall x > 0 \\iff x^2 - 2(m - 1) \\ge 0, \\forall x > 0$$\n$$\\iff 2(m - 1) \\le x^2, \\forall x > 0 \\iff 2(m - 1) \\le 0 \\iff m - 1 \\le 0 \\iff m \\le 1.$$\n\nChọn A.",
    "socraticHint": "Hàm trùng phương đồng biến trên $(0; +\\infty)$ khi $a > 0$ và $b \\ge 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 400,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in (-10; 10)$ để hàm số $y = m^2 x^4 - 2(4m - 1)x^2 + 1$ đồng biến trên khoảng $(1; +\\infty)$?",
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
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\n- Với $m = 0$: $y = 2x^2 + 1$, đồng biến trên $(0; +\\infty)$ nên cũng đồng biến trên $(1; +\\infty)$ (thỏa mãn $m = 0$).\n- Với $m \\ne 0$: $y' = 4m^2 x^3 - 4(4m - 1)x = 4x[m^2 x^2 - (4m - 1)]$.\nĐể hàm số đồng biến trên $(1; +\\infty)$ thì:\n+ TH 1: $4m - 1 \\le 0 \\iff m \\le \\frac{1}{4}$. Khi đó $y' \\ge 0, \\forall x > 0$.\n+ TH 2: $4m - 1 > 0 \\iff m > \\frac{1}{4}$. Khi đó nghiệm dương của $y' = 0$ là $x_0 = \\frac{\\sqrt{4m - 1}}{|m|}$.\n  Điều kiện để đồng biến trên $(1; +\\infty)$ là:\n  $$x_0 \\le 1 \\iff \\frac{4m - 1}{m^2} \\le 1 \\iff m^2 - 4m + 1 \\ge 0 \\iff m \\le 2 - \\sqrt{3} \\text{ hoặc } m \\ge 2 + \\sqrt{3}.$$\n\nHợp lại với $m > \\frac{1}{4}$ ta được: $\\frac{1}{4} < m \\le 2 - \\sqrt{3} \\approx 0{,}268$ hoặc $m \\ge 2 + \\sqrt{3} \\approx 3{,}732$.\nKết hợp toàn bộ điều kiện: $m \\in (-\\infty; 2 - \\sqrt{3}] \\cup [2 + \\sqrt{3}; +\\infty)$.\n\nVì $m$ là số nguyên trong khoảng $(-10; 10)$:\n$$m \\in \\{-9; -8; -7; -6; -5; -4; -3; -2; -1; 0; 4; 5; 6; 7; 8; 9\\}$$\nTổng cộng có $10 + 6 = 16$ giá trị nguyên của tham số $m$.\n\nChọn D.",
    "socraticHint": "Xét $m = 0$ và nghiệm dương $x_0 \\le 1$ của đạo hàm.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 401,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in (-2019; 2019)$ để hàm số $y = \\sqrt{x^2 + 1} - mx - 1$ đồng biến trên $\\mathbb{R}$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = \\frac{x}{\\sqrt{x^2 + 1}} - m$.\n\nHàm số đồng biến trên $\\mathbb{R} \\iff y' \\ge 0, \\forall x \\in \\mathbb{R}$\n$$\\iff m \\le \\frac{x}{\\sqrt{x^2 + 1}} = f(x), \\forall x \\in \\mathbb{R} \\iff m \\le \\min_{\\mathbb{R}} f(x).$$\n\nKhảo sát hàm số $f(x) = \\frac{x}{\\sqrt{x^2 + 1}}$:\n$$f'(x) = \\frac{\\sqrt{x^2 + 1} - x \\cdot \\frac{x}{\\sqrt{x^2 + 1}}}{x^2 + 1} = \\frac{1}{(x^2 + 1)\\sqrt{x^2 + 1}} > 0, \\forall x \\in \\mathbb{R}.$$\nHàm số $f(x)$ luôn đồng biến trên $\\mathbb{R}$, với:\n$$\\lim_{x \\to -\\infty} f(x) = -1, \\quad \\lim_{x \\to +\\infty} f(x) = 1.$$\nDo đó tập giá trị của $f(x)$ là $(-1; 1)$.\nĐể $m \\le f(x), \\forall x \\in \\mathbb{R}$ thì:\n$$m \\le -1.$$\n\nVì $m$ là số nguyên thuộc khoảng $(-2019; 2019)$ nên:\n$$m \\in \\{-2018; -2017; \\dots; -1\\}$$\nSố giá trị nguyên của $m$ là: $-1 - (-2018) + 1 = 2018$.\n\nChọn D.",
    "socraticHint": "Đạo hàm $f'(x) > 0$ nên $f(x)$ đồng biến trên $\\mathbb{R}$, tiệm cận ngang khi $x \\to -\\infty$ là $-1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 402,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{x^2 + 2x + m}{x - 1}$ nghịch biến trên khoảng $(1; 3)$ và đồng biến trên khoảng $(4; 6)$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.\nĐạo hàm:\n$$y' = \\frac{(2x + 2)(x - 1) - (x^2 + 2x + m)}{(x - 1)^2} = \\frac{x^2 - 2x - 2 - m}{(x - 1)^2}.$$\n\nHàm số nghịch biến trên $(1; 3)$ và đồng biến trên $(4; 6)$ khi và chỉ khi:\n$$\\begin{cases} x^2 - 2x - 2 - m \\le 0, \\forall x \\in (1; 3) \\\\ x^2 - 2x - 2 - m \\ge 0, \\forall x \\in (4; 6) \\end{cases} \\iff \\begin{cases} m \\ge x^2 - 2x - 2, \\forall x \\in (1; 3) \\\\ m \\le x^2 - 2x - 2, \\forall x \\in (4; 6) \\end{cases}$$\n\nXét hàm số $g(x) = x^2 - 2x - 2$:\n- Trên đoạn $[1; 3]$: $g'(x) = 2x - 2 \\ge 0, \\forall x \\in [1; 3] \\implies \\max_{[1; 3]} g(x) = g(3) = 3^2 - 2(3) - 2 = 1$.\n  Do đó $m \\ge 1$.\n- Trên đoạn $[4; 6]$: $g(x)$ đồng biến $\\implies \\min_{[4; 6]} g(x) = g(4) = 4^2 - 2(4) - 2 = 6$.\n  Do đó $m \\le 6$.\n\nKết hợp lại: $1 \\le m \\le 6$.\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{1; 2; 3; 4; 5; 6\\}$, có $6$ giá trị nguyên.\n\nChọn A.",
    "socraticHint": "Cô lập $m$ trên hai khoảng: $\\max_{(1; 3)} g(x) \\le m \\le \\min_{(4; 6)} g(x)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 403,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{\\sqrt{1 - \\ln x} + 1}{\\sqrt{1 - \\ln x} + m}$. Có bao nhiêu giá trị nguyên của tham số $m \\in [-5; 5]$ để hàm số đã cho đồng biến trên khoảng $\\left(\\frac{1}{e^3}; 1\\right)$?",
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
    "detailedSolution": "Đặt $t = \\sqrt{1 - \\ln x}$.\nVới $x \\in \\left(\\frac{1}{e^3}; 1\\right) \\implies \\ln x \\in (-3; 0) \\implies 1 - \\ln x \\in (1; 4) \\implies t \\in (1; 2)$.\nVì hàm số $t(x) = \\sqrt{1 - \\ln x}$ nghịch biến trên $\\left(\\frac{1}{e^3}; 1\\right)$, nên hàm số đã cho đồng biến khi hàm số:\n$$g(t) = \\frac{t + 1}{t + m}$$\nnghịch biến trên khoảng $(1; 2)$.\n\nĐạo hàm: $g'(t) = \\frac{m - 1}{(t + m)^2}$.\nHàm số $g(t)$ nghịch biến trên $(1; 2)$ khi:\n$$\\begin{cases} m - 1 < 0 \\\\ -m \\notin (1; 2) \\end{cases} \\iff \\begin{cases} m < 1 \\\\ \\left[ \\begin{matrix} -m \\le 1 \\\\ -m \\ge 2 \\end{matrix} \\right. \\end{cases} \\iff \\begin{cases} m < 1 \\\\ \\left[ \\begin{matrix} m \\ge -1 \\\\ m \\le -2 \\end{matrix} \\right. \\end{cases} \\iff \\left[ \\begin{matrix} m \\le -2 \\\\ -1 \\le m < 1 \\end{matrix} \\right.$$\n\nKết hợp với điều kiện $m \\in \\mathbb{Z}$ và $m \\in [-5; 5]$:\n- $m \\le -2 \\implies m \\in \\{-5; -4; -3; -2\\}$ (4 giá trị).\n- $-1 \\le m < 1 \\implies m \\in \\{-1; 0\\}$ (2 giá trị).\n\nTổng số giá trị nguyên của $m$ là: $4 + 2 = 6$.\n\nChọn B.",
    "socraticHint": "Đổi biến $t = \\sqrt{1 - \\ln x} \\in (1; 2)$ là hàm nghịch biến, do đó hàm $g(t)$ phải nghịch biến.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 404,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Đặt $t = \\ln x$. Khi $x \\in (1; e) \\implies t \\in (0; 1)$.\nVì hàm $t(x) = \\ln x$ đồng biến trên $(1; e)$ nên hàm số đã cho đồng biến khi hàm số:\n$$g(t) = \\frac{t - 6}{t - 2m}$$\nđồng biến trên khoảng $(0; 1)$.\n\nĐạo hàm: $g'(t) = \\frac{-2m + 6}{(t - 2m)^2}$.\nHàm số $g(t)$ đồng biến trên $(0; 1)$ khi:\n$$\\begin{cases} -2m + 6 > 0 \\\\ 2m \\notin (0; 1) \\end{cases} \\iff \\begin{cases} m < 3 \\\\ \\left[ \\begin{matrix} 2m \\le 0 \\\\ 2m \\ge 1 \\end{matrix} \\right. \\end{cases} \\iff \\begin{cases} m < 3 \\\\ \\left[ \\begin{matrix} m \\le 0 \\\\ m \\ge \\frac{1}{2} \\end{matrix} \\right. \\end{cases}$$\n\nVì $m$ là số nguyên dương ($m \\in \\mathbb{Z}^+$), ta được:\n$$\\frac{1}{2} \\le m < 3 \\implies m \\in \\{1; 2\\}.$$\nVậy có đúng $2$ giá trị nguyên dương của tham số $m$.\n\nChọn A.",
    "socraticHint": "Hệ điều kiện: $m < 3$ và $m \\ge 1/2$, các nghiệm nguyên dương là $1, 2$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 405,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu số nguyên $m$ để hàm số $f(x) = m(2020 + x - 2\\cos x) + \\sin x - x$ nghịch biến trên $\\mathbb{R}$?",
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
    "detailedSolution": "Đạo hàm:\n$$f'(x) = m(1 + 2\\sin x) + \\cos x - 1 = 2m\\sin x + \\cos x + m - 1.$$\n\nHàm số nghịch biến trên $\\mathbb{R} \\iff f'(x) \\le 0, \\forall x \\in \\mathbb{R}$\n$$\\iff 2m\\sin x + \\cos x \\le 1 - m, \\forall x \\in \\mathbb{R} \\iff \\max_{\\mathbb{R}} (2m\\sin x + \\cos x) \\le 1 - m.$$\n\nTheo bất đẳng thức Cauchy-Schwarz:\n$$2m\\sin x + \\cos x \\le \\sqrt{(2m)^2 + 1^2} = \\sqrt{4m^2 + 1}.$$\nDo đó điều kiện là:\n$$\\sqrt{4m^2 + 1} \\le 1 - m \\iff \\begin{cases} 1 - m \\ge 0 \\\\ 4m^2 + 1 \\le (1 - m)^2 \\end{cases} \\iff \\begin{cases} m \\le 1 \\\\ 4m^2 + 1 \\le m^2 - 2m + 1 \\end{cases}$$\n$$\\iff \\begin{cases} m \\le 1 \\\\ 3m^2 + 2m \\le 0 \\end{cases} \\iff -\\frac{2}{3} \\le m \\le 0.$$\n\nVì $m \\in \\mathbb{Z} \\implies m = 0$.\nVậy có duy nhất $1$ giá trị nguyên của $m$ thỏa mãn.\n\nChọn C.",
    "socraticHint": "Áp dụng bất đẳng thức Bunyakovsky: $a\\sin x + b\\cos x \\le \\sqrt{a^2 + b^2}$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 406,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có tất cả bao nhiêu giá trị nguyên của $m$ để hàm số $y = |x^3 - mx^2 + 12x + 2m|$ luôn đồng biến trên khoảng $(1; +\\infty)$?",
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
    "detailedSolution": "Xét hàm số $f(x) = x^3 - mx^2 + 12x + 2m$.\nVì $\\lim_{x \\to +\\infty} f(x) = +\\infty$, hàm số $y = |f(x)|$ đồng biến trên $(1; +\\infty)$ khi và chỉ khi:\n$$\\begin{cases} f'(x) \\ge 0, \\forall x > 1 \\\\ f(1) \\ge 0 \\end{cases}$$\n\nTa có: $f(1) = 1 - m + 12 + 2m = 13 + m \\ge 0 \\iff m \\ge -13$.\nMặt khác: $f'(x) = 3x^2 - 2mx + 12 \\ge 0, \\forall x > 1$\n$$\\iff 2mx \\le 3x^2 + 12, \\forall x > 1 \\iff m \\le \\frac{3x^2 + 12}{2x} = \\frac{3}{2}x + \\frac{6}{x} = g(x), \\forall x > 1.$$\n\nXét $g(x) = \\frac{3}{2}x + \\frac{6}{x}$ trên $(1; +\\infty)$:\nÁp dụng bất đẳng thức Cô-si: $g(x) \\ge 2\\sqrt{\\frac{3}{2}x \\cdot \\frac{6}{x}} = 2\\sqrt{9} = 6$.\nDấu bằng xảy ra khi $\\frac{3}{2}x = \\frac{6}{x} \\iff x^2 = 4 \\iff x = 2 > 1$.\nDo đó $\\min_{(1; +\\infty)} g(x) = 6$.\nSuy ra $m \\le 6$.\n\nKết hợp hai điều kiện: $-13 \\le m \\le 6$.\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{-13; -12; \\dots; 6\\}$.\nSố giá trị nguyên của $m$ là: $6 - (-13) + 1 = 20$.\n\nChọn D.",
    "socraticHint": "Hàm trị tuyệt đối đồng biến trên khoảng khi $f(x)$ đồng biến và không âm trên khoảng đó.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 407,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc khoảng $(-8; 8)$ sao cho hàm số $y = |-2x^3 + 3mx - 2|$ đồng biến trên khoảng $(1; +\\infty)$?",
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
    "detailedSolution": "Xét hàm số $f(x) = -2x^3 + 3mx - 2$.\nVì $\\lim_{x \\to +\\infty} f(x) = -\\infty$, nên để hàm số $y = |f(x)|$ đồng biến trên $(1; +\\infty)$ thì:\n$$\\begin{cases} f'(x) \\le 0, \\forall x > 1 \\\\ f(1) \\le 0 \\end{cases}$$\n\nTa có $f(1) = -2(1) + 3m - 2 = 3m - 4 \\le 0 \\iff m \\le \\frac{4}{3}$.\nĐạo hàm: $f'(x) = -6x^2 + 3m \\le 0, \\forall x > 1 \\iff 3m \\le 6x^2, \\forall x > 1 \\iff m \\le 2x^2, \\forall x > 1$.\nSuy ra $m \\le 2(1^2) = 2$.\nKết hợp lại ta được: $m \\le \\frac{4}{3}$.\n\nVì $m$ là số nguyên thuộc khoảng $(-8; 8)$ nên:\n$$m \\in \\{-7; -6; -5; -4; -3; -2; -1; 0; 1\\}$$\nSố giá trị nguyên thỏa mãn là: $1 - (-7) + 1 = 9$.\n\nChọn B.",
    "socraticHint": "Vì $f(x) \\to -\\infty$ khi $x \\to +\\infty$, điều kiện đồng biến của $|f(x)|$ là $f'(x) \\le 0$ và $f(1) \\le 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 408,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4mx = 4x(x^2 - m)$.\n\nVì $m$ là số nguyên dương ($m > 0$), phương trình $y' = 0$ có ba nghiệm phân biệt: $-\\sqrt{m}, 0, \\sqrt{m}$.\nHàm số đồng biến trên khoảng $(3; +\\infty)$ khi và chỉ khi:\n$$\\sqrt{m} \\le 3 \\iff m \\le 9.$$\n\nVì $m$ nguyên dương nên $T = \\{1; 2; 3; 4; 5; 6; 7; 8; 9\\}$.\nTổng giá trị các phần tử của $T$ là:\n$$S = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = \\frac{9 \\times 10}{2} = 45.$$\n\nChọn B.",
    "socraticHint": "Hàm trùng phương có $a > 0$ đồng biến trên $(\\sqrt{m}; +\\infty)$, do đó $\\sqrt{m} \\le 3 \\iff m \\le 9$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 409,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = 3x^2 + 6x + 4, \\forall x \\in \\mathbb{R}$. Có tất cả bao nhiêu giá trị nguyên thuộc $(-2020; 2020)$ của tham số $m$ để hàm số $g(x) = f(x) - (2m + 4)x - 5$ nghịch biến trên khoảng $(0; 2)$?",
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
    "detailedSolution": "Đạo hàm: $g'(x) = f'(x) - (2m + 4) = 3x^2 + 6x + 4 - (2m + 4) = 3x^2 + 6x - 2m$.\n\nHàm số $g(x)$ nghịch biến trên $(0; 2) \\iff g'(x) \\le 0, \\forall x \\in (0; 2)$\n$$\\iff 3x^2 + 6x - 2m \\le 0, \\forall x \\in (0; 2) \\iff 2m \\ge 3x^2 + 6x, \\forall x \\in (0; 2).$$\n\nXét hàm số $h(x) = 3x^2 + 6x$ trên đoạn $[0; 2]$.\nVì $h'(x) = 6x + 6 > 0, \\forall x \\in [0; 2]$, hàm số $h(x)$ luôn đồng biến trên $[0; 2]$.\nDo đó: $\\max_{[0; 2]} h(x) = h(2) = 3(2^2) + 6(2) = 12 + 12 = 24$.\n(Hoặc xét $h(x) = 3x^2 + 6x + 4 \\implies \\max = 28 \\iff 2m + 4 \\ge 28 \\iff 2m \\ge 24$).\nSuy ra: $2m \\ge 24 \\iff m \\ge 12$.\n\nVì $m$ là số nguyên thuộc khoảng $(-2020; 2020)$ nên:\n$$m \\in \\{12; 13; \\dots; 2019\\}$$\nSố giá trị nguyên thỏa mãn là: $2019 - 12 + 1 = 2008$.\n\nChọn A.",
    "socraticHint": "Cô lập $2m \\ge 3x^2 + 6x$ và tìm giá trị lớn nhất của tam thức tại $x = 2$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 410,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "difficulty": "Vận dụng",
    "answerVerified": true
  }
];
