import { Question } from '../../../types/exam';

export const donDieuThamSoMQuestions: Question[] = [
  {
    "id": 53,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{2x - 1}{x + 1}$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "Hàm số đồng biến trên các khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$"
      },
      {
        "key": "B",
        "content": "Hàm số nghịch biến trên $\\mathbb{R} \\setminus \\{-1\\}$"
      },
      {
        "key": "C",
        "content": "Hàm số đồng biến trên $\\mathbb{R}$"
      },
      {
        "key": "D",
        "content": "Hàm số có cực trị tại $x = -1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đạo hàm $y' = \\frac{2(1) - (-1)(1)}{(x + 1)^2} = \\frac{3}{(x + 1)^2} > 0$ với mọi $x \\ne -1$.\nVậy hàm số đồng biến trên từng khoảng xác định $(-\\infty; -1)$ và $(-1; +\\infty)$.",
    "socraticHint": "Dấu của đạo hàm hàm phân thức bậc 1 trên bậc 1 quyết định tính đồng biến hoặc nghịch biến trên từng khoảng.",
    "difficulty": "Nhận biết",
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
    "content": "Đạo hàm của hàm số $y = x^4 - 2x^2 + 1$ là:",
    "options": [
      {
        "key": "A",
        "content": "$y' = 4x^3 - 4x$"
      },
      {
        "key": "B",
        "content": "$y' = 4x^3 - 2x$"
      },
      {
        "key": "C",
        "content": "$y' = x^3 - 4x$"
      },
      {
        "key": "D",
        "content": "$y' = 4x^3 - 4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$y' = 4x^3 - 2(2x) = 4x^3 - 4x$.",
    "socraticHint": "Quy tắc đạo hàm $(x^n)' = n x^{n-1}$.",
    "difficulty": "Nhận biết",
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
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = x^3 - 3x^2 + 3(1 - m^2)x + 1$ đồng biến trên $mathbb{R}$?",
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
    "detailedSolution": "Đạo hàm: $y' = 3x^2 - 6x + 3(1 - m^2) = 3[x^2 - 2x + (1 - m^2)]$.\nHàm số đồng biến trên $mathbb{R} \\iff y' \\ge 0, forall x in mathbb{R}$.\nĐiều kiện tương đương với hệ số $a = 1 > 0$ và biệt thức thu gọn:\n$$\\Delta' = (-1)^2 - 1(1 - m^2) \\le 0 \\iff 1 - 1 + m^2 \\le 0 \\iff m^2 \\le 0$$\nVì $m^2 \\ge 0$ với mọi $m$ nên $m^2 \\le 0 \\iff m = 0$.\nVậy chỉ có duy nhất 1 giá trị nguyên của $m$ thỏa mãn là $m = 0$.",
    "socraticHint": "Hàm bậc ba đồng biến trên $mathbb{R}$ khi đạo hàm là tam thức bậc hai không âm với mọi $x$, tức $\\Delta' \\le 0$.",
    "difficulty": "Thông hiểu",
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
    "detailedSolution": "Tập xác định $D = mathbb{R} setminus {1}$.\nĐạo hàm: $y' = \\frac{1(-1) - m(1)}{(x - 1)^2} = \\frac{-1 - m}{(x - 1)^2}$.\nHàm số nghịch biến trên từng khoảng xác định khi và chỉ khi:\n$$y' < 0, forall x \ne 1 \\iff -1 - m < 0 \\iff m > -1$$.\n(Lưu ý: Đối với hàm phân thức bậc 1/bậc 1, dấu đạo hàm không được phép bằng 0 vì khi đó hàm số suy biến thành hàm hằng).",
    "socraticHint": "Hàm nhất biến nghịch biến khi tử số của đạo hàm mang dấu âm ngặt.",
    "difficulty": "Thông hiểu",
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
    "difficulty": "Thông hiểu",
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
    "content": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$, có đồ thị hàm số $f'(x)$ thỏa mãn: $f'(x) \\le 0$ với mọi $x \\le 2$ (tiếp xúc trục hoành tại $x = -1$, cắt trục hoành tại $x = 2$) và $f'(x) > 0$ với mọi $x > 2$. Gọi $S$ là tập hợp các giá trị nguyên của tham số $m$ thuộc đoạn $[-5; 5]$ để hàm số $y = f(x^2 - 2mx + m^2 + 1)$ nghịch biến trên khoảng $\\left(0; \\frac{1}{2}\\right)$. Tính tổng giá trị các phần tử của $S$.",
    "options": [],
    "correctAnswer": "14",
    "acceptableAnswers": [
      "14",
      "14.0"
    ],
    "detailedSolution": "Đặt $u(x) = x^2 - 2mx + m^2 + 1 = (x - m)^2 + 1$. Nhận xét rằng $u(x) \\ge 1$ với mọi $x$.\nĐạo hàm hàm hợp:\n$$y' = u'(x) \\cdot f'(u(x)) = 2(x - m) \\cdot f'(u(x))$$\nĐể hàm số nghịch biến trên $\\left(0; \\frac{1}{2}\\right)$, ta cần $y' \\le 0$ với mọi $x \\in \\left(0; \\frac{1}{2}\\right)$.\nTừ đồ thị $f'(u)$:\n- $f'(u) \\le 0 \\iff u \\le 2$.\n- $f'(u) \\ge 0 \\iff u \\ge 2$.\n\nTa xét hai trường hợp để $y' \\le 0$:\n- **Trường hợp 1:** $u(x) \\le 2$ và $2(x - m) \\ge 0$ với mọi $x \\in \\left(0; \\frac{1}{2}\\right)$:\n  + $2(x - m) \\ge 0, \\forall x \\in \\left(0; \\frac{1}{2}\\right) \\implies m \\le 0$.\n  + Khi $m \\le 0$, hàm số $u(x) = (x - m)^2 + 1$ đồng biến trên $\\left(0; \\frac{1}{2}\\right)$, do đó:\n    $$\\max_{\\left(0; \\frac{1}{2}\\right)} u(x) = u\\left(\\frac{1}{2}\\right) = \\left(\\frac{1}{2} - m\\right)^2 + 1 \\le 2 \\iff \\left(\\frac{1}{2} - m\\right)^2 \\le 1 \\iff -\\frac{1}{2} \\le m \\le \\frac{3}{2}$$\n    Kết hợp $m \\le 0$ và $m \\in \\mathbb{Z} \\implies m = 0$.\n- **Trường hợp 2:** $u(x) \\ge 2$ và $2(x - m) \\le 0$ với mọi $x \\in \\left(0; \\frac{1}{2}\\right)$:\n  + $2(x - m) \\le 0, \\forall x \\in \\left(0; \\frac{1}{2}\\right) \\implies m \\ge \\frac{1}{2}$.\n  + Khi $m \\ge \\frac{1}{2}$, hàm số $u(x) = (x - m)^2 + 1$ nghịch biến trên $\\left(0; \\frac{1}{2}\\right)$, do đó:\n    $$\\min_{\\left(0; \\frac{1}{2}\\right)} u(x) = u\\left(\\frac{1}{2}\\right) = \\left(\\frac{1}{2} - m\\right)^2 + 1 \\ge 2 \\iff \\left(m - \\frac{1}{2}\\right)^2 \\ge 1 \\iff m - \\frac{1}{2} \\ge 1 \\iff m \\ge \\frac{3}{2}$$\n    Kết hợp $m \\in [-5; 5]$ và $m \\in \\mathbb{Z} \\implies m \\in \\{2; 3; 4; 5\\}$.\n\nTổng hợp: $S = \\{0; 2; 3; 4; 5\\}$.\nTổng các phần tử của $S$: $0 + 2 + 3 + 4 + 5 = 14$.",
    "socraticHint": "Tính đạo hàm hàm hợp $y' = 2(x-m) f'(u)$, xét dấu $f'(u)$ dựa vào vị trí $u \\le 2$ hoặc $u \\ge 2$ trên đồ thị.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 253,
    "type": "mcq",
    "topicId": "don_dieu_tham_so_m",
    "content": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$, có đạo hàm $f'(x)$ triệt tiêu tại $x = -2, x = 1, x = 3$ với $f'(x) > 0$ trên $(-2; 1) \\cup (3; +\\infty)$ và $f'(x) < 0$ trên $(-\\infty; -2) \\cup (1; 3)$. Hàm số $g(x) = f(2 - x^2)$ đồng biến trên khoảng nào dưới đây?",
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
    "difficulty": "Thông hiểu",
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
    "difficulty": "Vận dụng",
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
    "content": "Đạo hàm của hàm số $y = \\sqrt{x^2 - 3x + 1}$ với mọi $x$ thuộc tập xác định là:",
    "options": [
      {
        "key": "A",
        "content": "$y' = \\frac{2x - 3}{2\\sqrt{x^2 - 3x + 1}}$"
      },
      {
        "key": "B",
        "content": "$y' = \\frac{2x - 3}{\\sqrt{x^2 - 3x + 1}}$"
      },
      {
        "key": "C",
        "content": "$y' = \\frac{1}{2\\sqrt{x^2 - 3x + 1}}$"
      },
      {
        "key": "D",
        "content": "$y' = \\frac{x - 3}{2\\sqrt{x^2 - 3x + 1}}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng công thức đạo hàm hàm hợp căn bậc hai: $(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$.\nVới $u(x) = x^2 - 3x + 1 \\implies u'(x) = 2x - 3$.\nDo đó:\n$$y' = \\frac{2x - 3}{2\\sqrt{x^2 - 3x + 1}}$$",
    "socraticHint": "Công thức đạo hàm hàm hợp căn thức bậc hai $(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tính đơn điệu của hàm số",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  }
];
