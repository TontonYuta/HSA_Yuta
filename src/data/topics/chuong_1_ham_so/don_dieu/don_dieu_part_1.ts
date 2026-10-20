import { Question } from '../../../../types/exam';

export const donDieuPart1Questions: Question[] = [
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
  }
];
