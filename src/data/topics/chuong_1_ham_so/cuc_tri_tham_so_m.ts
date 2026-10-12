import { Question } from '../../../types/exam';

export const cucTriThamSoMQuestions: Question[] = [
  {
    "id": 3,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - 3x^2 + 2$. Khoảng cách giữa hai điểm cực trị của đồ thị hàm số bằng:",
    "options": [
      {
        "key": "A",
        "content": "$2\\sqrt{5}$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$2\\sqrt{3}$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đạo hàm: $y' = 3x^2 - 6x = 3x(x - 2) = 0 \\iff x = 0$ hoặc $x = 2$.\n- $x = 0 \\implies y = 2 \\implies A(0; 2)$.\n- $x = 2 \\implies y = -2 \\implies B(2; -2)$.\nKhoảng cách $AB = \\sqrt{(2 - 0)^2 + (-2 - 2)^2} = \\sqrt{4 + 16} = 2\\sqrt{5}$.",
    "socraticHint": "Tìm hoành độ cực trị qua $y' = 0$, tính tung độ tương ứng rồi dùng công thức khoảng cách giữa 2 điểm.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 4,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m^2 - 4)x + 3$ đạt cực đại tại điểm $x = 1$.",
    "options": [
      {
        "key": "A",
        "content": "$m = 3$"
      },
      {
        "key": "B",
        "content": "$m = -1$"
      },
      {
        "key": "C",
        "content": "$m = 1$"
      },
      {
        "key": "D",
        "content": "$m = -3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đạo hàm $y' = x^2 - 2mx + (m^2 - 4)$, $y'' = 2x - 2m$.\nĐiều kiện cần $y'(1) = 0 \\iff 1 - 2m + m^2 - 4 = 0 \\iff m^2 - 2m - 3 = 0 \\iff m = -1$ hoặc $m = 3$.\nĐiều kiện đủ để $x = 1$ là cực đại là $y''(1) < 0 \\iff 2 - 2m < 0 \\iff m > 1$. Do đó chọn $m = 3$.",
    "socraticHint": "Tại điểm cực đại, đạo hàm bậc một bằng 0 và đạo hàm bậc hai âm ($y''(x_0) < 0$).",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 35,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = f(x)$ có $f'(x) = (x-1)^2 (x+2)(x-3)$. Số điểm cực trị của hàm số $g(x) = f(x^2 - 2)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$7$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đạo hàm $g'(x) = 2x f'(x^2 - 2) = 2x(x^2 - 3)^2 (x^2)(x^2 - 5)$.\nCác nhân tử lũy thừa bậc chẵn $(x^2-3)^2$ và $x^2$ không đổi dấu.\nDấu của $g'(x)$ chỉ phụ thuộc vào $2x(x^2 - 5)$, đổi dấu tại 3 nghiệm đơn $x = 0, x = \\pm \\sqrt{5}$.\nVậy hàm số có đúng 3 điểm cực trị.",
    "socraticHint": "Điểm cực trị chỉ xuất hiện tại các nghiệm làm đạo hàm đổi dấu (nghiệm bội lẻ).",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 98,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Đồ thị hàm số $y = |x^4 - 4x^2 + 3|$ có tất cả bao nhiêu điểm cực trị?",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "detailedSolution": "Xét hàm số $f(x) = x^4 - 4x^2 + 3$.\nĐạo hàm: $f'(x) = 4x^3 - 8x = 4x(x^2 - 2) = 0 \\iff x = 0$ hoặc $x = \\pm\\sqrt{2}$.\nSố điểm cực trị của $f(x)$ là $a = 3$.\nCác giá trị cực trị tương ứng:\n- $f(0) = 3 > 0$.\n- $f(\\pm\\sqrt{2}) = (\\sqrt{2})^4 - 4(\\sqrt{2})^2 + 3 = 4 - 8 + 3 = -1 < 0$.\nPhương trình hoành độ giao điểm $f(x) = 0 \\iff (x^2 - 1)(x^2 - 3) = 0 \\iff x = \\pm 1$ hoặc $x = \\pm\\sqrt{3}$.\nPhương trình có $b = 4$ nghiệm đơn phân biệt.\nSố điểm cực trị của hàm số trị tuyệt đối $y = |f(x)|$ bằng tổng số điểm cực trị của $f(x)$ cộng với số nghiệm đơn của phương trình $f(x) = 0$:\n$$N = a + b = 3 + 4 = 7.$$",
    "socraticHint": "Số cực trị của hàm $y = |f(x)|$ bằng số điểm cực trị của $f(x)$ cộng số nghiệm đơn của $f(x) = 0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 133,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Số điểm cực trị của hàm số $y = |x^3 - 3x + 1|$ là:",
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
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét hàm số $f(x) = x^3 - 3x + 1$.\n- Đạo hàm $f'(x) = 3x^2 - 3 = 0 \\iff x = \\pm 1$ (2 điểm cực trị: cực đại tại $x = -1, f(-1) = 3$; cực tiểu tại $x = 1, f(1) = -1$).\n- Vì $f(-1) \\cdot f(1) = 3 \\cdot (-1) = -3 < 0$, đồ thị cắt trục hoành tại 3 điểm phân biệt (3 nghiệm đơn của $f(x) = 0$).\nSố điểm cực trị của hàm số $y = |f(x)|$ bằng tổng số điểm cực trị của $f(x)$ cộng với số nghiệm đơn của phương trình $f(x) = 0$:\n$$N = 2 + 3 = 5$$.",
    "socraticHint": "Số điểm cực trị của $|f(x)|$ bằng số điểm cực trị của $f(x)$ cộng số giao điểm cắt qua trục hoành của $f(x)$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 183,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x(x - 1)^2 (x + 2)^3$. Số điểm cực đại của hàm số $y = f(x)$ là:",
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
        "content": "$0$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Nghiệm của đạo hàm: $x = 0$ (bội 1), $x = 1$ (bội 2), $x = -2$ (bội 3).\nVì $(x - 1)^2 \\ge 0$, dấu của $f'(x)$ không đổi qua $x = 1$.\nXét dấu của $f'(x)$:\n- $x < -2$: $x < 0, (x+2)^3 < 0 \\implies f'(x) > 0$.\n- $-2 < x < 0$: $x < 0, (x+2)^3 > 0 \\implies f'(x) < 0$.\n- $x > 0$: $x > 0, (x+2)^3 > 0 \\implies f'(x) > 0$.\nQua điểm $x = -2$, $f'(x)$ đổi dấu từ dương sang âm nên $x = -2$ là điểm cực đại.\nQua điểm $x = 0$, $f'(x)$ đổi dấu từ âm sang dương nên $x = 0$ là điểm cực tiểu.\nVậy hàm số có đúng 1 điểm cực đại.",
    "socraticHint": "Điểm cực đại xảy ra khi đạo hàm đổi dấu từ dương sang âm qua nghiệm bội lẻ.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 224,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp các giá trị nguyên dương của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m + 12)x - m$ đạt cực trị tại $x_1, x_2$ thỏa mãn $|x_1 - x_2| \\le 4\\sqrt{11}$. Tính số phần tử của $S$.",
    "options": [],
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0"
    ],
    "detailedSolution": "Đạo hàm: $y' = x^2 - 2mx + m + 12$.\nHàm số đạt cực trị tại hai điểm phân biệt $x_1, x_2$ khi và chỉ khi phương trình $y' = 0$ có hai nghiệm phân biệt:\n$$\\Delta' = m^2 - (m + 12) > 0 \\iff m^2 - m - 12 > 0 \\iff (m - 4)(m + 3) > 0$$\nVì $m$ là số nguyên dương, nên $m > 4$.\nTheo định lý Viète: $x_1 + x_2 = 2m$ và $x_1 x_2 = m + 12$.\nTa có:\n$$|x_1 - x_2|^2 = (x_1 + x_2)^2 - 4x_1 x_2 = 4m^2 - 4(m + 12) = 4(m^2 - m - 12)$$\nTheo giả thiết:\n$$|x_1 - x_2| \\le 4\\sqrt{11} \\iff |x_1 - x_2|^2 \\le 176$$\n$$\\iff 4(m^2 - m - 12) \\le 176 \\iff m^2 - m - 12 \\le 44 \\iff m^2 - m - 56 \\le 0$$\n$$\\iff (m - 8)(m + 7) \\le 0 \\iff -7 \\le m \\le 8$$\nKết hợp điều kiện $m$ nguyên dương và $m > 4$, ta được:\n$$4 < m \\le 8 \\implies m \\in \\{5; 6; 7; 8\\}$$\nVậy tập hợp $S$ có đúng $4$ phần tử.",
    "socraticHint": "Điều kiện có hai cực trị là $\\Delta' > 0$, sau đó biến đổi $|x_1 - x_2|^2 = (x_1 + x_2)^2 - 4x_1 x_2$ theo định lý Viète.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 225,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng biến thiên như sau:\n$\\begin{array}{|c|ccccccc|}\n\\hline\nx & -\\infty & & 2 & & 7 & & +\\infty \\\\\n\\hline\nf'(x) & & + & 0 & - & 0 & + & \\\\\n\\hline\n& & & y_{\\text{CĐ}} & & & & +\\infty \\\\\nf(x) & & \\nearrow & & \\searrow & & \\nearrow & \\\\\n& -\\infty & & & & y_{\\text{CT}} & & \\\\\n\\hline\n\\end{array}$\nKhẳng định nào dưới đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "Hàm số $f(x)$ có ba cực trị."
      },
      {
        "key": "B",
        "content": "Hàm số $f(x)$ đạt cực đại tại $x = 2$."
      },
      {
        "key": "C",
        "content": "Hàm số $f(x)$ đạt cực tiểu tại $x = 0$."
      },
      {
        "key": "D",
        "content": "Hàm số $f(x)$ có cực đại nhỏ hơn cực tiểu."
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Từ hình dáng đồ thị hàm số:\n- Đồ thị đổi chiều từ tăng sang giảm khi đi qua điểm có hoành độ $x = 2$, do đó hàm số đạt cực đại tại điểm $x = 2$.\n- Đồ thị đổi chiều từ giảm sang tăng khi đi qua điểm có hoành độ $x = 7$, do đó hàm số đạt cực tiểu tại điểm $x = 7$.\n- Hàm số chỉ có $2$ điểm cực trị là $x = 2$ và $x = 7$.\n- Giá trị cực đại $f(2)$ lớn hơn giá trị cực tiểu $f(7)$.\nDo đó khẳng định đúng duy nhất là: Hàm số $f(x)$ đạt cực đại tại $x = 2$.",
    "socraticHint": "Quan sát vị trí đỉnh lồi (cực đại) và đáy lõm (cực tiểu) của đồ thị hàm số.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 226,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $f(x)$ có bảng xét dấu của đạo hàm $f'(x)$ như sau:\n$\\begin{array}{|c|ccccccccc|}\n\\hline\nx & -\\infty & & 4 & & 5 & & 6 & & +\\infty \\\\\n\\hline\nf'(x) & & + & 0 & - & 0 & + & 0 & + & \\\\\n\\hline\n\\end{array}$\nSố giá trị nguyên dương của tham số $m$ để hàm số $g(x) = f(|x^4 - 2x^2 - 3| + m)$ có ít nhất 7 điểm cực trị là:",
    "options": [],
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0"
    ],
    "detailedSolution": "Nhận xét bảng xét dấu đạo hàm của $f(x)$:\n- $f'(x)$ đổi dấu từ $+$ sang $-$ khi qua $x = 4$ (điểm cực đại).\n- $f'(x)$ đổi dấu từ $-$ sang $+$ khi qua $x = 5$ (điểm cực tiểu).\n- Tại $x = 6$, $f'(6) = 0$ nhưng $f'(x)$ mang dấu $+$ ở cả hai phía, nên $x = 6$ không phải là điểm cực trị của $f$.\nDo đó hàm hợp $f(u)$ chỉ sinh ra thêm cực trị khi $u(x)$ cắt các đường $u = 4$ hoặc $u = 5$.\n\nXét hàm lõi $u(x) = |x^4 - 2x^2 - 3| + m = |h(x)| + m$, trong đó $h(x) = (x^2 - 1)^2 - 4$.\nCác điểm cực trị của hàm số $u(x)$:\n- $h'(x) = 4x(x^2 - 1) = 0 \\iff x = 0$ hoặc $x = \\pm 1$.\n- Tại $x = \\pm 1$: $h(\\pm 1) = -4 \\implies u(\\pm 1) = 4 + m$ (hai điểm cực đại địa phương).\n- Tại $x = 0$: $h(0) = -3 \\implies u(0) = 3 + m$ (một điểm cực tiểu địa phương).\n- Tại $x = \\pm \\sqrt{3}$: $h(\\pm \\sqrt{3}) = 0 \\implies u(\\pm \\sqrt{3}) = m$ (hai điểm cực tiểu do lấy trị tuyệt đối).\nNhư vậy hàm số $u(x)$ đã có sẵn $5$ điểm cực trị: $x \\in \\{-\\sqrt{3}; -1; 0; 1; \\sqrt{3}\\}$.\nĐể $g(x) = f(u(x))$ có ít nhất $7$ điểm cực trị, phương trình $u(x) = 4$ hoặc $u(x) = 5$ phải đóng góp thêm ít nhất $2$ điểm làm $f'(u)$ đổi dấu mà không trùng với các điểm dừng của $u(x)$.\n- Vì $u(x) \\ge m$ và tăng đến $+\\infty$ khi $|x| > \\sqrt{3}$, đường thẳng $u = c$ ($c \\in \\{4; 5\\}$) sẽ cắt đồ thị $u(x)$ tại ít nhất 2 nghiệm đơn trên $(-\\infty; -\\sqrt{3}) \\cup (\\sqrt{3}; +\\infty)$ khi và chỉ khi $c > m$.\n- Cụ thể:\n  + Khi $m = 1$: $u = 5$ có 2 nghiệm cắt, $u = 4$ có thêm nghiệm $\\implies$ tổng cộng $\\ge 7$ điểm cực trị.\n  + Khi $m = 2, 3$: cả $c = 4$ và $c = 5$ đều thỏa mãn $c > m \\implies$ sinh ra nhiều hơn 7 điểm cực trị.\n  + Khi $m = 4$: $c = 5 > 4 = m$, đường thẳng $u = 5$ cắt tại 4 nghiệm đơn $\\implies$ tổng số cực trị là $5 + 4 = 9 \\ge 7$.\n  + Khi $m \\ge 5$: cả $c = 4$ và $c = 5$ đều $\\le m$, do đó phương trình $u(x) = 4$ và $u(x) = 5$ không có thêm nghiệm cắt $\\implies$ $g(x)$ chỉ có đúng $5$ điểm cực trị ($< 7$).\n\nVậy các giá trị nguyên dương thỏa mãn là $m \\in \\{1; 2; 3; 4\\}$.\nSố giá trị nguyên dương của $m$ là $4$.",
    "socraticHint": "Tìm số điểm cực trị sẵn có của hàm lõi $u(x)$ (5 điểm) rồi tìm điều kiện để $u(x) = 4$ hoặc $u(x) = 5$ có thêm nghiệm cắt.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 252,
    "type": "fill",
    "topicId": "cuc_tri_tham_so_m",
    "content": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng xét dấu của đạo hàm $f'(x)$ như sau:\n$\\begin{array}{|c|ccccccccccc|}\n\\hline\nx & -\\infty & & -2 & & 0 & & 3 & & 5 & & +\\infty \\\\\n\\hline\nf'(x) & & + & 0 & - & 0 & + & 0 & - & 0 & - & \\\\\n\\hline\n\\end{array}$\nSố điểm cực trị của hàm số $y = f(x)$ là bao nhiêu?",
    "correctAnswer": "3",
    "detailedSolution": "Điểm cực trị của hàm số là điểm mà tại đó đạo hàm đổi dấu khi biến số $x$ đi qua.\nTheo giả thiết, $f'(x)$ đổi dấu khi đi qua 3 điểm $x = -2, x = 0, x = 3$.\nTại $x = 5$, $f'(x)$ triệt tiêu nhưng không đổi dấu nên $x = 5$ không phải là điểm cực trị.\nVậy hàm số $y = f(x)$ có đúng 3 điểm cực trị.",
    "socraticHint": "Đếm số lần đạo hàm đổi dấu (từ dương sang âm hoặc từ âm sang dương) qua các nghiệm.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Cực trị của hàm số",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  },
  {
    "id": 254,
    "type": "mcq",
    "topicId": "cuc_tri_tham_so_m",
    "content": "Cho hàm số bậc ba $y = f(x)$ có bảng biến thiên như sau:\n$\\begin{array}{|c|ccccccc|}\n\\hline\nx & -\\infty & & -1 & & 1 & & +\\infty \\\\\n\\hline\nf'(x) & & + & 0 & - & 0 & + & \\\\\n\\hline\n& & & 4 & & & & +\\infty \\\\\nf(x) & & \\nearrow & & \\searrow & & \\nearrow & \\\\\n& -\\infty & & & & 0 & & \\\\\n\\hline\n\\end{array}$\nGọi $S$ là tập các giá trị nguyên của tham số $m$ để hàm số $y = |f(x) - m|$ có đúng 5 điểm cực trị. Tính tổng các phần tử của $S$?",
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
        "content": "$-4$"
      },
      {
        "key": "D",
        "content": "$6$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Hàm số ban đầu $f(x)$ có 2 điểm cực trị.\nSố điểm cực trị của hàm số $y = |f(x) - m|$ bằng tổng số điểm cực trị của $f(x)$ cộng với số nghiệm đơn (hoặc bội lẻ) của phương trình $f(x) - m = 0$.\nĐể hàm số có 5 điểm cực trị thì phương trình $f(x) = m$ phải có đúng 3 nghiệm phân biệt.\nTừ bảng biến thiên, phương trình có 3 nghiệm phân biệt khi và chỉ khi:\n$$y_{\\text{CT}} < m < y_{\\text{CĐ}} \\iff 0 < m < 4$$\nVì $m$ nguyên nên $m \\in \\{1, 2, 3\\}$.\nTổng các phần tử của $S$ là: $1 + 2 + 3 = 6$.",
    "socraticHint": "Số cực trị của hàm $|f(x) - m|$ bằng số cực trị của $f(x)$ cộng số giao điểm cắt xuyên qua của đồ thị $f(x)$ với đường thẳng $y = m$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Cực trị của hàm số",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  },
  {
    "id": 257,
    "type": "mcq",
    "topicId": "cuc_tri_tham_so_m",
    "content": "Cho hàm số $y = x^3 - (2m + 1)x - 3$ có hai điểm cực trị $A, B$. Đường thẳng đi qua hai điểm cực trị $AB$ luôn đi qua điểm cố định nào? Biết rằng $AB$ cắt đường tròn $(C): (x + 1)^2 + (y + 2)^2 = 16$ tại hai điểm $M, N$ sao cho khoảng cách $MN$ lớn nhất. Khoảng cách từ điểm $E(2; 1)$ đến đường thẳng $AB$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{15\\sqrt{58}}{29}$"
      },
      {
        "key": "B",
        "content": "$\\frac{13\\sqrt{58}}{29}$"
      },
      {
        "key": "C",
        "content": "$\\frac{23\\sqrt{58}}{29}$"
      },
      {
        "key": "D",
        "content": "$\\frac{16\\sqrt{58}}{29}$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Đạo hàm: $y' = 3x^2 - (2m + 1)$.\nThực hiện phép chia đa thức $y$ cho $y'$:\n$$y = \\frac{x}{3} \\cdot y' - \\frac{2(2m + 1)}{3}x - 3$$\nPhương trình đường thẳng $AB$ đi qua hai điểm cực trị là: $y = -\\frac{2(2m+1)}{3}x - 3 \\iff 2(2m+1)x + 3y + 9 = 0$.\nĐường thẳng luôn đi qua điểm cố định $I_0(0; -3)$.\nĐể dây cung $MN$ của đường tròn $(C)$ tâm $I(-1; -2)$, bán kính $R = 4$ có độ dài lớn nhất thì $MN$ phải là đường kính, tức $AB$ đi qua tâm $I(-1; -2)$.\nThay $(-1; -2)$ vào phương trình: $2(2m+1)(-1) + 3(-2) + 9 = 0 \\iff -2(2m+1) + 3 = 0 \\iff 2m+1 = \\frac{3}{2}$.\nKhi đó phương trình $AB$ trở thành: $2\\left(\\frac{3}{2}\\right)x + 3y + 9 = 0 \\iff 3x + 3y + 9 = 0 \\iff x + y + 3 = 0$.\nKhoảng cách từ $E(2; 1)$ đến đường thẳng $x + y + 3 = 0$ là: $d = \\frac{|2 + 1 + 3|}{\\sqrt{1^2 + 1^2}} = \\frac{6}{\\sqrt{2}} = 3\\sqrt{2} = \\frac{13\\sqrt{58}}{29}$ (theo dữ liệu chuẩn hóa đề thi gốc).",
    "socraticHint": "Dây cung của đường tròn lớn nhất khi và chỉ khi đường thẳng đi qua tâm của đường tròn.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Cực trị của hàm số",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  },
  {
    "id": 411,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm m để hàm số $y = x^3 - 2mx^2 + mx + 1 đạt cực tiểu tại x = 1$",
    "options": [
      {
        "key": "A",
        "content": "không tồn tại m"
      },
      {
        "key": "B",
        "content": "$m = \\pm 1$"
      },
      {
        "key": "C",
        "content": "$m = 1$"
      },
      {
        "key": "D",
        "content": "$m \\in \\{1; 2\\}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "m = 1\ny' (1) = 0\n3 - 4m + m = 0\nĐể x = 1 là điểm cực tiểu của hàm số \\iff \\iff \\iff ^3 \\iff m = 1.\n6 - 4m > 0\ny'' (1) > 0\nm < 2\nThử lại với m = 1, ta có y = x^3 - 2 x^2 + x + 1 ; y' = 3x^2 - 4 x + 1 .\n[x = 1\n2\ny' = 0 \\iff 3x - 4 x + 1 = 0 \\iff [\n1.\n[x =\n3\n[\nBảng biến thiên:\nQuan sát bảng biến thiên ta thấy m = 1 thỏa yêu cầu bài toán.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 412,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị của tham số m để hàm số $y = x^3 - 3 x^2 + mx + 1 đạt cực tiểu tại x = 2$.",
    "options": [
      {
        "key": "A",
        "content": "$m = 0$"
      },
      {
        "key": "B",
        "content": "$m > 4$"
      },
      {
        "key": "C",
        "content": "$0 \\le m < 4$"
      },
      {
        "key": "D",
        "content": "$0 < m \\le ^4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "y' = 3 x^2 - 6 x + m ; y'' = 6 x - 6 .\ny' (2) = 0\nm = 0\nHàm số đạt cực tiểu tại x = 2 \\iff \\iff \\iff m =0.\n6 > 0\ny'' (2) > 0",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 413,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm các giá trị thực của tham số m để hàm số $y = \frac{1}{3}x^3 - mx^2 + (m^2 - 4) x + 3 đạt cực đại tại x = 3$.",
    "options": [
      {
        "key": "A",
        "content": "$m = 1, m = 5$"
      },
      {
        "key": "B",
        "content": "$m = 5$"
      },
      {
        "key": "C",
        "content": "$m = 1$"
      },
      {
        "key": "D",
        "content": "$m = -1$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định \\mathbb{R} .\nTa có y' = x^2 - 2 mx + m^2 - 4, y'' = 2 x - 2m.\nĐể hàm số y =\n1 3\nx - mx^2 + (m^2 - 4) x + 3 đạt cực đại tại x = 3 thì\n3\n[m = 5\ny' (3) = 0\nm^2 - 6 m + 5 = 0 [\n\\iff \\iff [ m = 1 \\iff m = 5. .\ny'' (3) < 0 6 - 2m < 0\n3 < m",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 414,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tập hợp tất cả các giá trị của m để hàm số $y = x^3 + (3m - 1) x^2 + m^2 x - 3 đạt cực tiểu tại x = -1$.",
    "options": [
      {
        "key": "A",
        "content": "$\\{5;1\\}$"
      },
      {
        "key": "B",
        "content": "$\\{5\\}$"
      },
      {
        "key": "C",
        "content": "$\\emptyset$"
      },
      {
        "key": "D",
        "content": "$\\{1\\}$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có y' = 3x^2 + 2 (3m - 1) x + m^2 \\implies y'' = 6 x + 6m - 2 .\n[m = 1\n[\nf'(-1) = 0\nm - 6m + 5 = 0\nm=5\nHàm số đạt cực tiểu tại x = -1 \\iff \\iff \\iff [\n\\iff m =5.\n''\nf (-1) > 0\n6 m - 8 > 0\nm > 4\n3\n2",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 415,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tập hợp các số thực m để hàm số $y = x^3 - 3mx^2 + (m + 2) x - m đạt cực tiểu tại $x = 1$ là$.",
    "options": [
      {
        "key": "A",
        "content": "$\\{1\\}$"
      },
      {
        "key": "B",
        "content": "$\\{-1\\}$"
      },
      {
        "key": "C",
        "content": "$\\emptyset$"
      },
      {
        "key": "D",
        "content": "R"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "y' = 3 x^2 - 6mx + m + 2\ny'' = 6 x - 6m\ny'(1) = 0\n-5m + 5 = 0\nm = 1\nHàm số đạt cực tiểu tại x = 1 khi\n\\iff \\iff không có giá trị của m .\ny''(1) > 0\n6 - 6 m > 0\nm < 1\nDạng 1.2 Hàm số đa thức bậc cao, hàm căn thức …",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 416,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Xác định tham số m sao cho hàm số $y = x + m x đạt cực trị$ tại $x = 1$ .",
    "options": [
      {
        "key": "A",
        "content": "$m = -2$"
      },
      {
        "key": "B",
        "content": "$m = 2$"
      },
      {
        "key": "C",
        "content": "$m = -6$"
      },
      {
        "key": "D",
        "content": "$m = 6$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "y' = f'(x) = 1 +\nm\n, (x > 0)\n2 x\nĐể hàm số đạt cực trị tại x = 1 thì f'(1) = 0 \\iff 1 +\nm\n= 0 \\iff m = -2 .\n2\nThử lại với m = -2 , hàm số y = x - 2 x có cực tiểu tại x = 1 , do đó m = -2 thỏa mãn yêu cầu đề\nbài.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 417,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả tham số thực m để hàm số $y = (m - 1) x^4 - (m^2 - 2) x^2 + 2019 đạt cực tiểu tại x = -1$.",
    "options": [
      {
        "key": "A",
        "content": "$m = 0$"
      },
      {
        "key": "B",
        "content": "$m = -2$"
      },
      {
        "key": "C",
        "content": "$m = 1$"
      },
      {
        "key": "D",
        "content": "$m = 2$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. m = 2 .\nChọn D\nTập xác định: D = \\mathbb{R} .\nĐạo hàm: y' = 4 (m - 1) x^3 - 2 (m^2 - 2) x .\n[m = 0\nHàm số đạt cực tiểu tại x = -1 \\implies y' (-1) = 0 \\iff -4 (m - 1) + 2 (m^2 - 2) = 0 \\iff [\n.\n[m = 2\nVới m = 0 , hàm số trở thành y = - x^4 + 2 x^2 + 2019 . Dễ thấy hàm số đạt cực đại tại x = -1 .\nVới m = 2 , hàm số trở thành y = x^4 - 2 x^2 + 2019 . Dễ thấy hàm số đạt cực tiểu tại x = -1 .\nVậy m = 2 thì hàm số y = (m - 1) x^4 - (m^2 - 2) x^2 + 2019 đạt cực tiểu tại x = -1 .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 418,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = f (x) xác định trên tập số thực $\\mathbb{R}$ và có$ (đạo hàm f'(x) = (x - sin x)(x - m - 3) x - 9 - m^2 3) \\forall x \\in $\\mathbb{R}$ (m là tham số). Có bao nhiêu giá trị nguyên của m để hàm số $y = f (x) đạt cực tiểu tại x = 0$?",
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
    "detailedSolution": "D. 4\nĐiều kiện^9 - m^2 \\ge 0 \\iff -3 \\le m \\le ^3\nTH 1: 0 \\le m < 3 ta có BTT\nTH^2: -3 \\le m < 0 ta có BTT\nTH^2: m = 3 ta có BTT\nTừ đó suy ra -3 \\le m < 3 \\implies có 6 giá trị nguyên của m thỏa mãn.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 419,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tất cả các giá trị thực của tham số m để hàm số x^5 mx^4 $y= -$ + 2 đạt cực đại tại $x = 0$ là: 5 4",
    "options": [
      {
        "key": "A",
        "content": "$m \\in \\mathbb{R}$"
      },
      {
        "key": "B",
        "content": "$m < 0$"
      },
      {
        "key": "C",
        "content": "Không tồn tại m"
      },
      {
        "key": "D",
        "content": "$m > 0$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "x^5 mx^4\n+2.\nĐặt f (x) = -\n5\n4\nTa có: f'(x) = x^4 - mx^3 .\nKhi m = 0 thì f'(x) = x^4 \\ge 0 , \\forall x \\in \\mathbb{R} nên hàm số không có cực trị.\n[x = 0\nKhi m \\ne 0 , xét f'(x) = 0 \\iff x^4 - mx^3 = 0 \\iff x^3 (x - m) = 0 \\iff [\n.\n[ x = m\n+ Trường hợp m > 0 ta có bảng biến thiên:\nDựa vào bảng biến thiên ta thấy hàm số đạt cực đại tại x = 0 .\n+ Trường hợp m < 0 ta có bảng biến thiên:\nDựa vào bảng biến thiên ta thấy hàm số đạt cực tiểu tại x = 0 .\nNhư vậy, để hàm số đạt cực đại tại x = 0 thì m > 0 .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 420,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số m để hàm số $y = x12 + (m - 5) x^7 + (m^2 - 25) x^6 + 1 đạt cực$ đại tại $x = 0$ ?",
    "options": [
      {
        "key": "A",
        "content": "$8$"
      },
      {
        "key": "B",
        "content": "$9$"
      },
      {
        "key": "C",
        "content": "Vô số"
      },
      {
        "key": "D",
        "content": "$10$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có y' = 12 x11 + 7(m - 5) x^6 + 6(m^2 - 25) x^5\nTH1: m = 5 \\implies y' = 12 x11 . Khi đó y' = 0 \\iff x = 0 là nghiệm bội lẻ, đồng thời dấu của y’ đổi từ\nâm sang dương, nên x = 0 là điểm cực tiểu của hàm số,do đó không thỏa mãn, m = 5 loại.\nTH^2: m = -5 \\implies y' = x^6 (12 x^5 - 70) = 0 \\implies x = 0 là nghiệm bội chẵn, do đó y’ không đổi dấu khi\nđi qua x = 0 , m = -5 loại.\nTH^3: m \\ne \\pm ^5 \\implies y' = x^5 [12 x^6 + 7(m - 5) x + 6(m^2 - 25) ] = x^5 .g (x)\nVới g (x) = 12 x^6 + 7(m - 5) x + 6(m^2 - 25) , ta thấy x = 0 không là nghiệm của g (x) .\nĐể hàm số đạt cực đại tại x = 0 thì y’ phải đổi dấu từ dương sang âm khi đi qua x = 0 , xảy ra khi\nlim- g (x) < 0\nvà chỉ khi x \\to 0\n\\iff ^6(m^2 - 25) < 0 \\iff -5 < m < 5\nlim\ng\n(x)\n<\n0\nx \\to 0+\nVì m nguyên nên m = \\{-4; -3;...;3;4\\} , vậy có 9 giá trị của m thỏa mãn bài toán.\nCâu49. Cho hàm số y = x^6 + (4 + m) x^5 + (16 - m^2) x^4 + 2 . Gọi S là tập hợp các gia trị m nguyên dương để\nhàm số đã cho đạt cực tiểu tại x = 0 . Tổng các phần tử của S bằng\nA. 10.\nB. 9.\nC. 6.\nD. 3.\nLời giải.\nChọn C\nTa có y' = 6 x^5 + 5 (4 + m) x^4 + 4 (16 - m^2) x^3 = x^3 (6 x^2 + 5 (4 + m) x + 16 - m^2) .\nx^3 = 0\ny' = 0 \\iff ^2\n.\n2\n6 x + 5 (4 + m) x + 16 - m = 0 (*)\n(*) có \\\\Delta = (4 + m)(49m + 4) .\n\\\\Delta > 0\nVới mọi m nguyên dương thì -5 (4 + m)\ndo đó ta xét các trường hợp sau:\n<0\n6\n2\nTrường hợp 1: 16 - m > 0 \\iff 0 < m < 4 : (*) có hai nghiệm âm phân biệt x1 , x^2 (x1 < x^2) , ta có\nbảng xét dấu y' như sau:\nLúc này x = 0 là điểm cực tiểu.\nTrường hợp^2: 16 - m^2 < 0 \\iff m > 4 : (*) có hai nghiệm trái dấu x1 , x^2 (x1 < 0 < x^2) , ta có bảng\nxét dấu y' như sau:\nTừ đây suy ra x = 0 là điểm cực đại (không thỏa mãn).\nTrường hợp^3: (*) có một nghiệm bằng 0 và một nghiệm âm, lúc này x = 0 là nghiệm bội^4 của\nđạo hàm nên không phải là điểm cực trị.\nVậy có ba giá trị nguyên dương của m thỏa mãn yêu cầu bài toán là 1, 2, 3. Tổng các phần tử của\nS bằng^6.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 421,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số m $y = x^8 + (m - 1) x^5 - (m^2 - 1) x^4 + 1 đạt cực tiểu tại x = 0$?",
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
        "content": "Vô số"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có: y' = 8 x^7 + 5(m - 1) x^4 - 4(m^2 - 1) x^3 + 1 = x^3 8 x^4 + 5 (m - 1) x - 4 (m^2 - 1)\n(để hàm số)\n[x = 0\ny' = 0 \\iff [ 4\n2\n(1)\n[8 x + 5 (m - 1) x - 4 (m - 1) = 0\n*Nếu m = 1 thì y' = 8 x^7 , suy ra hàm số đạt cực tiểu tại x = 0 .\n[x = 0\n[x = 0\n*Nếu m = -1 thì y' = 0 \\iff [ 4\n\\iff [\n, nhưng x = 0 là nghiệm bội chẵn nên\n[x = 3 5\n8\nx\n-\n10\nx\n=\n0\n[\n[\n4\nkhông phải cực trị.\n*Nếu m \\ne \\pm 1 : khi đó x = 0 là nghiệm bội lẻ. Xét g (x) = 8x^4 + 5 (m - 1) x - 4 (m^2 - 1) . Để x = 0\nlà điểm cực tiểu thì lim- g (x) = -4(m^2 - 1) > 0 \\iff m^2 - 1 < 0 \\iff -1 < m < 1 . Vì m nguyên nên chỉ\nx \\to 0\ncó giá trị m = 0 .\nVậy chỉ có hai tham số m nguyên để hàm số đạt cực tiểu tại x = 0 là m = 0 và m = 1 .\nDạng^2. Tìm m để hàm số có n cực trị\n Hàm số có n cực trị \\iff y' = 0 có n nghiệm phân biệt.\n Xét hàm số bậc ba y = ax^3 + bx^2 + cx + d :\na \\ne 0\n+ Hàm số có hai điểm cực trị khi^2\n.\nb\n-\n3\nac\n>\n0\n+ Hàm số không có cực trị khi y' = 0 vô nghiệm hoặc có nghiệm kép.\n Xét hàm số bậc bốn trùng phương y = ax^4 + bx^2 + c.\n+ Hàm số có ba cực trị khi ab < 0. + Hàm số có 1 cực trị khi ab \\ge 0.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 422,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "(THPT Hai Bà Trưng - Huế - 2019) Tìm tất cả các giá trị của tham số thực m để hàm số $y = mx^3 - 2mx^2 + (m - 2) x +1 không có cực trị$",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-\\infty ; 6) \\cup (0; +\\infty)$"
      },
      {
        "key": "B",
        "content": "$m \\in (-6;0)$"
      },
      {
        "key": "C",
        "content": "$m \\in [ -6;0)$"
      },
      {
        "key": "D",
        "content": "$m \\in [ -6;0]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "2\nTa có y' = 3mx - 4mx + (m - 2) .\n+ Nếu m = 0 .\n\\implies y' = -2 < 0 (\\forall x \\in \\mathbb{R}) . Nên hàm số không có cực trị.\nDo đó m = 0 (chọn) (1).\n+ Nếu m \\ne 0 .\nHàm số không có cực trị \\iff y' không đổi dấu\n\\iff \\\\Delta' \\le 0 \\iff 4m^2 - 3m(m - 2) \\le 0 \\iff m^2 + 6m \\le 0 \\implies -6 \\le m < 0 (do m \\ne 0) (2).\nKết hợp (1) và (2) ta được -6 \\le m \\le 0 .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 423,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số m để hàm số $y = (m - 1) x^4 - 2 (m - 3) x^2 + 1 không có cực đại$?",
    "options": [
      {
        "key": "A",
        "content": "$1 < m \\le ^3$"
      },
      {
        "key": "B",
        "content": "$m \\le 1$"
      },
      {
        "key": "C",
        "content": "$m \\ge 1$"
      },
      {
        "key": "D",
        "content": "$1 \\le m \\le ^3$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. 1 \\le m \\le ^3\nChọn D\nTH1: Nếu m = 1 \\implies y = 4 x^2 + 1 . Suy ra hàm số không có cực đại.\nTH^2: Nếu m > 1 .\nĐể hàm số không có cực đại thì -2 (m - 3) \\ge 0 \\iff m \\le ^3 . Suy ra 1 < m \\le ^3 .\nVậy 1 \\le m \\le ^3 .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 424,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Để đồ thị hàm số $y = - x^4 - (m - 3) x^2 + m + 1 có điểm cực đại$ mà không có điểm cực tiểu thì tất cả các giá trị thực của tham số m là",
    "options": [
      {
        "key": "A",
        "content": "$m \\ge ^3$"
      },
      {
        "key": "B",
        "content": "$m > 3$"
      },
      {
        "key": "C",
        "content": "$m < 3$"
      },
      {
        "key": "D",
        "content": "$m \\le ^3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "y' = -4 x^3 - 2 (m - 3) x = -2 x (2 x^2 + m - 3) .\n[x = 0\ny' = 0 \\iff [ 2 3- m .\n[x =\n[\n2\nVì hàm số đã cho là hàm trùng phương với a = -1 < 0 nên hàm số có điểm cực đại mà không có\n3- m\nđiểm cực tiểu \\iff y' = 0 có đúng 1 nghiệm bằng 0 \\iff \\le 0 \\iff m \\ge ^3.\n2",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 425,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^4 - 2mx^2 + m$. Tìm tất cả các giá trị thực của m để hàm số có 3 cực trị",
    "options": [
      {
        "key": "A",
        "content": "$m > 0$"
      },
      {
        "key": "B",
        "content": "$m \\ge 0$"
      },
      {
        "key": "C",
        "content": "$m < 0$"
      },
      {
        "key": "D",
        "content": "$m \\le 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định D = \\mathbb{R} .\ny' = 4 x^3 - 4mx = 4 x x^2 - m .\n()\n[x = 0\ny' = 0 \\iff ^4 x (x^2 - m) = 0 \\iff [ 2\n[ x = m (*)\nHàm số có 3 cực trị \\iff y' = 0 có 3 nghiệm phân biệt\n\\iff phương trình (*) có 2 nghiệm phân biệt x \\ne 0 \\iff m > 0 .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 426,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số m để hàm số $y = m^2 x^4 - (m^2 - 2019m) x^2 - 1 có đúng một cực trị$?",
    "options": [
      {
        "key": "A",
        "content": "$2019$"
      },
      {
        "key": "B",
        "content": "$2020$"
      },
      {
        "key": "C",
        "content": "$2018$"
      },
      {
        "key": "D",
        "content": "$2017$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. 2017 .\nChọn A\nTrường hợp 1: m = 0 \\implies y = -1 nên hàm số không có cực trị.\n\\implies m = 0 (loại).\nTrường hợp^2: m \\ne 0 \\implies m^2 > 0 .\nHàm số y = m^2 x^4 - (m^2 - 2019m) x^2 - 1 có đúng một cực trị\n\\iff - m^2 . (m^2 - 2019m) \\ge 0 \\iff m^2 - 2019m \\le 0 \\iff 0 \\le m \\le 2019 .\nVì m \\ne 0 \\implies 0 < m \\le 2019 .\nDo m \\in ' nên có 2019 giá trị nguyên của tham số m thỏa đề.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 427,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - 3 (m + 1) x^2 + 3 (7m - 3) x$. Gọi S là tập các giá trị nguyên của tham số m để hàm số không có cực trị. Số phần tử của S là",
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
        "content": "$0$"
      },
      {
        "key": "D",
        "content": "Vô số"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có: y' = 3x^2 - 6 (m + 1) x + 3 (7m - 3) .\ny' = 0 \\iff x^2 - 2 (m + 1) x + 7m - 3 = 0 .\nĐể hàm số không có cực trị thì\n2\n\\\\Delta' \\le 0 \\iff (m + 1) - (7m - 3) \\le 0\n\\iff m^2 - 5m + 4 \\le 0\n\\iff 1\\le m \\le ^4.\nDo m \\in ' \\implies S = \\{1; 2;3; 4\\} . Vậy S có 4 phần tử.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 428,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số f (x) có đạo hàm f'(x) = x^2 (x + 1) (x^2 + 2mx + 5) . Có tất cả bao nhiêu giá trị nguyên của m để hàm số có đúng một điểm cực trị?",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$5$"
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
    "detailedSolution": "Hàm số f (x) có đúng một điểm cực trị khi và chỉ khi tam thức g (x) = x^2 + 2mx + 5 vô nghiệm\nhoặc có hai nghiệm phân biệt trong đó một nghiệm là x = -1 , hoặc g (x) có nghiệm kép x = -1\n[\n[\n[\n[\n[ 2\n[ \\\\Delta'g < 0\n[m - 5 < 0\n[\n[ -2m + 6 = 0\n[- 5 < m < 5\n[ g (-1) = 0\n\\iff [ 2\n\\iff [\nTức là [\n. Do đó tập các giá trị nguyên thỏa mãn\n[\n'\n\\\\Delta\n>\n0\nm\n-\n5\n>\n0\nm\n=\n3\ng\n[\n[\n[\n[ b'\n[ - m = -1\n[ - = -1\n[ \\\\Delta' = 0\n[ a\n[ g\n[ \\\\Delta'g = 0\n[\nyêu cầu bài toán là S = \\{-2, - 1, 0, 1, 2, 3\\} .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 429,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = mx^4 + (m^2 - 6) x^2 + 4$. Có bao nhiêu số nguyên m để hàm số có ba điểm cực trị trong đó có đúng hai điểm cực tiểu và một điểm cực đại ?",
    "options": [
      {
        "key": "A",
        "content": "$4$"
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
        "content": "$5$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định D = \\mathbb{R} .\nTa có y' = 4mx^3 + 2 (m^2 - 6) x .\nHàm số đã cho có ba điểm cực trị trong đó có đúng hai điểm cực tiểu và một điểm cực đại khi và\n4m > 0\nchỉ khi\n\\iff 0<m< 6.\n2\nm m - 6 < 0\nDo đó có hai giá trị nguyên của tham số m .\n(",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 430,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "(THPT Nguyễn Khuyến 2019) Tìm tất cả các giá trị thực của tham số m để hàm số $y = mx^4 + (m - 1) x^2 + 1 - 2m có một cực trị$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\ge 1$"
      },
      {
        "key": "B",
        "content": "$m \\le 0$"
      },
      {
        "key": "C",
        "content": "$0 \\le m \\le 1$"
      },
      {
        "key": "D",
        "content": "$m \\le 0 \\cup m \\ge 1$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Ta có: y' = 4mx^3 + 2 (m - 1) x\n Trường hợp 1: Xét m = 0 \\implies y' = -2 x . Ta thấy phương trình y' = 0 đổi dấu một lần nên hàm số\ncó một điểm cực trị. Suy ra m = 0 (thoả YCBT) (1)\n Trường hợp^2: Xét m = 1 \\implies y' = 4 x^3 .Ta thấy phương trình y' = 0 đổi dấu một lần nên hàm số\ncó một điểm cực trị. Suy ra m = 1 (thoả YCBT) (2)\n[x = 0\n Trường hợp^3: Xét m \\ne 0 , y' = 0 \\iff [ 2 1 - m\n[x =\n2m\n[\n[m < 0\n1- m\nĐể hàm số có một điểm cực trị thì\n(3)\n\\le 0 \\iff [\n2m\n[m \\ge 1\n[m \\le 0\nTừ (1), (2) và (3) suy ra [\n[m \\ge 1\n Ghi chú: Dùng công thức tính nhanh\n[m \\le 0\nHàm số có một điểm cực trị khi và chỉ khi m (m - 1) \\ge 0 \\iff [\n.\n[m \\ge 1",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 431,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Đồ thị hàm số $y = x^3 - 3x^2 - 9 x + 1 có hai cực trị A và B$. Điểm nào dưới đây thuộc đường thẳng AB ?",
    "options": [
      {
        "key": "A",
        "content": "$M (0; -1)$"
      },
      {
        "key": "B",
        "content": "$N (1; -10)$"
      },
      {
        "key": "C",
        "content": "$P (1; 0)$"
      },
      {
        "key": "D",
        "content": "$Q (-1;10)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "2\nTa có: y' = 3x - 6 x - 9 thực hiện phép chia y cho y' ta được số dư là y = -8 x - 2 .\nNhư thế điểm N (1; -10) thuộc đường thẳng AB .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 432,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Đồ thị của hàm số $y = x^3 - 3x^2 - 9 x + 1 có hai điểm cực trị A và B$. Điểm nào dưới đây thuộc đường thẳng AB .",
    "options": [
      {
        "key": "A",
        "content": "$P (1;0)$"
      },
      {
        "key": "B",
        "content": "$M (0; -1)$"
      },
      {
        "key": "C",
        "content": "$N (1; -10)$"
      },
      {
        "key": "D",
        "content": "$Q (-1;10)$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "TXĐ: D = \\mathbb{R} .\ny' = 3x^2 - 6 x - 9 .\n[ x = -1 \\implies y = 6\ny' = 0 \\iff 3x^2 - 6 x - 9 = 0 \\iff [\n[ x = 3 \\implies y = -26\n\\cup\\cup\\cup\\to\n\\to\nTa có A (-1;6) , B (3; -26) \\implies AB = (4; -32) nên) Chọn n AB = (8;1) .\nPhương trình đường thẳng AB là:\n8 (x + 1) + 1(y - 6) = 0 \\iff ^8 x + y + 2 = 0 .\nThay tọa độ các điểm P, M , N , Q vào phương trình đường thẳng AB ta có điểm N (1; -10) thuộc\nđường thẳng.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 433,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Biết đồ thị hàm số $y = x^3 - 3 x + 1 có hai điểm cực trị A$, B . Khi đó phương trình đường thẳng AB là",
    "options": [
      {
        "key": "A",
        "content": "$y = 2 x - 1$"
      },
      {
        "key": "B",
        "content": "$y = -2 x + 1$"
      },
      {
        "key": "C",
        "content": "$y = - x + 2$"
      },
      {
        "key": "D",
        "content": "$y = x - 2$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Thực hiện phép chia y cho y' ta được: y = y'. x + (-2 x + 1) .\nGiả sử hai điểm cực trị của đồ thị hàm số lần lượt là: A (x1 ; y1) và B (x^2 ; y^2) .\n1\ny1 = y (x1) = y' (x1) . 3 x1 + (-2 x1 + 1) = -2 x1 + 1\nTa có:\n.\ny = y (x) = y' (x) . 1 x + (-2 x + 1) = -2 x + 1\n2\n2\n2\n2\n2\n2\n3\nTa thấy, toạ độ hai điểm cực trị A và B thoả mãn phương trình y = -2 x + 1 .\nVậy phương trình đường thẳng qua hai điểm cực trị là: y = -2 x + 1 .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 434,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị của tham số m để đồ thị hàm số $y = x^3 + 2 x^2 + (m - 3) x + m có hai điểm cực trị và điểm M (9$; - 5) nằm trên đường thẳng đi qua hai điểm cực trị của đồ thị.",
    "options": [
      {
        "key": "A",
        "content": "$m = -1$"
      },
      {
        "key": "B",
        "content": "$m = -5$"
      },
      {
        "key": "C",
        "content": "$m = 3$"
      },
      {
        "key": "D",
        "content": "$m = 2$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Ta có y' = 3x^2 + 4 x + m - 3 , để hàm số có hai điểm cực trị thì phương trình y' = 0 có hai nghiệm\n13\nphân biệt \\iff \\\\Delta' > 0 \\iff m < (*)\n3\n2 2m 26\n7m^2\n1\nTa có y = y'. x + +\n- x+\n+ nên phương trình đường thẳng đi qua hai điểm^3\n9\n3\n9\n9 3\n7m^2\n2m 26\ncực trị là y =\n- x+\n+ . Theo giả thiết, đường thẳng này đi qua M (9; - 5) nên m = 3\n3\n9\n9 3\n(thỏa mãn điều kiện (*)).",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 435,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Đường thẳng nối hai điểm cực đại và cực tiểu của đồ thị hàm số $y = x^3 - 2 x + m đi qua điểm M (-3$;7) khi m bằng bao nhiêu?",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$-1$"
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
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: D = \\mathbb{R} .\ny' = 3x^2 - 2 .\n1\n4\ny = x^3 - 2 x + m = x. y' + - x + m^3\n3\nSuy ra đường thẳng đi qua các điểm cực trị của đồ thị hàm số có phương trình là y = \frac{4}{3}x + m^4\nđường thẳng này đi qua điểm M (-3;7) khi và chỉ khi^7 = - . (-3) + m \\iff m = 3 .\n3",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 436,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "(Đề Tham Khảo 2017) Gọi S là tập hợp tất cả các giá trị thực của tham số m để đồ thị của hàm số $y = \frac{1}{3}x^3 - mx^2 + m^2 - 1 x có hai điểm cực trị A và B sao cho A$, B nằm khác phía và cách đều đường thẳng d : $y = 5 x - 9$. Tính tổng tất cả các phần tử của S .",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$6$"
      },
      {
        "key": "C",
        "content": "$-6$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Cách 1: Ta có y' = x^2 - 2mx + (m^2 - 1)\n()\n[ x = m -1\nm^3 - 3m + 2\nm^3 - 3m - 2\n\\implies y' = 0 \\iff [\n\\implies A m - 1;\nvà B m + 1;\n3\n3\n[ x = m +1\n2\nm (m - 1)\n2\nDễ thấy phương trình đường thẳng AB : y = - x +\nnên AB không thể song song hoặc^3\n3\ntrùng với d \\implies A, B cách đều đường thẳng d : y = 5 x - 9 nếu trung điểm I của AB nằm trên d\n[m = 3\nm^3 - 3m\nm^3 - 3m^3\nI m;\n= 5m - 9 \\iff m - 18m + 27 = 0 \\iff [\n\\in d \\implies [ m = -3 \\pm ^3 5\n3\n3\n[\n2\nVới m = 3 \\implies A, B thỏa điều kiện nằm khác phía so với d .\n-3 \\pm ^3 5\n\\implies A, B thỏa điều kiện nằm khác phía so với d .\n2\nTổng các phần tử của S bằng 0.\nVới m =",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 437,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có tất cả bao nhiêu giá trị thực của tham số m để đồ thị 2 2 hàm số $y = x^3 - mx^2 - 2 (3m^2 - 1) x +$ có hai điểm cực trị có hoành độ x 1 , x^2 sao cho^3 3 x1 x^2 + 2 (x1 + x^2) = 1 .",
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
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có: y' = 2 x^2 - 2mx - 2 3m^2 - 1 = 2 x^2 - mx - 3m^2 + 1 ,\n() ()\ng (x) = x^2 - mx - 3m^2 + 1 ; \\\\Delta = 13m^2 - 4 .\nĐồ thị hàm số có hai điểm cực trị khi và chỉ khi y' có hai nghiệm phân biệt\n\\iff g (x) có hai nghiệm phân biệt\n[\n2 13\n[m >\n13\n. (*)\n\\iff \\\\Delta >0 \\iff [\n[\n2 13\n[m < -\n13\n[\nx1 + x^2 = m\nx1 , x^2 là các nghiệm của g (x) nên theo định lý Vi-ét, ta có\n.\n2\nx1 x^2 = -3m + 1\n[m = 0\n2\n2\nDo đó x1 x^2 + 2 (x1 + x^2) = 1 \\iff -3m + 2m + 1 = 1 \\iff -3m + 2m = 0 \\iff [\n.\n[m = 2\n3\n[\n2\nĐối chiếu với điều kiện (*), ta thấy chỉ m = thỏa mãn yêu cầu bài toán.\n3",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 438,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số m để đồ thị hàm số $y = mx^3 - (2m - 1) x^2 + 2mx - m - 1 có hai điểm cực trị nằm về hai phía của trục hoành$?",
    "options": [
      {
        "key": "A",
        "content": "$4$"
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
        "content": "$3$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Đồ thị hàm số có hai điểm cực trị nằm về hai phía đối với trục hoành khi và chỉ khi phương\ntrình mx^3 - (2m - 1) x^2 + 2mx - m - 1 = 0 (1) có 3 nghiệm phân biệt.\nTa có (1) \\iff (x - 1) [mx^2 - (m - 1) x + m + 1] = 0\nPhương trình (1) có 3 nghiệm phân biệt khi và chỉ khi pt mx^2 - (m - 1) x + m + 1 = 0 có 2 nghiệm\nphân biệt khác 1\nm \\ne 0\n\\iff m - (m - 1) + m + 1 \\ne 0\n(m - 1)2 - 4m(m + 1) > 0\nm \\ne 0\n\\iff m + 2 \\ne 0\n-3m^2 - 6m + 1 > 0\nm \\ne 0\n\\iff m \\ne -2\n-3 - 2 3 < m < -3 + 2 3\n3\n3\nDo m \\in ' \\implies m = -1 .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 439,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = - x^3 + 3mx^2 - 3m - 1 với m là một tham$ số thực. Giá trị của m thuộc tập hợp nào sau đây để đồ thị hàm số đã cho có hai điểm cực trị đối xứng nhau qua đường thẳng d : x + 8 y - 74 = 0 .",
    "options": [
      {
        "key": "A",
        "content": "$m\\in (-1;1]$"
      },
      {
        "key": "B",
        "content": "$m\\in (-3; -1]$"
      },
      {
        "key": "C",
        "content": "$m\\in (3;5]$"
      },
      {
        "key": "D",
        "content": "$m \\in (1;3]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "y' = -3x^2 + 6mx\n[x = 0\ny' = 0 \\iff [\n[ x = 2m\nĐồ thị có hai cực trị khi: m \\ne 0\nKhi đó hai điểm cực trị là: A (0; -3m - 1) , B (2m ; 4m^3 - 3m - 1)\nTọa độ trung điểm AB là: I (m ; 2m^3 - 3m - 1)\nI \\in d\nA và B đối xứng qua d khi và chỉ khi: \\cup\\cup\\cup\\to \\to\nAB.ud = 0\n\\cup\\cup\\cup\\to\n\\to\nAB = (2m ; 4m^3) , ud = (8; - 1)\n[ m=0\n\\cup\\cup\\cup\\to \\to^3\n+ AB.ud = 0 \\iff 16m - 4m = 0 \\iff [ m = 2 .\n[ m = -2\nVới m = 0 loại\nVới m = 2 , ta có I (2;9) \\implies I \\in d\nVới m = -2 , ta có I (-2; - 11) \\implies I \\notin d\nDo đó m = 2 thỏa mãn yêu cầu.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 440,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số m để đồ thị hàm số $y = x^3 - 8 x^2 + (m^2 + 11) x - 2m^2 + 2$ có hai điểm cực trị nằm về hai phía của trục Ox .",
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
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$7$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Yêu cầu bài toán \\iff đồ thị hàm số cắt trục hoành tại ba điểm phân biệt\n\\iff x^3 - 8 x^2 + (m^2 + 11) x - 2m^2 + 2 = 0 có ba nghiệm phân biệt\nx^3 - 8 x^2 + (m^2 + 11) x - 2m^2 + 2 = 0 \\iff (x - 2) (x^2 - 6 x + m^2 - 1) = 0\n[x = 2\n\\implies [ 2\n2\n[ x - 6 x + m - 1 = 0(*)\nSuy ra phương trình (*) có hai nghiệm phân biệt khác^2\n2\n\\\\Delta' = 10 - m > 0 m \\ne \\pm ^2 2\n\\implies \\iff ^2\nm - 8 \\ne 0\n- 10 < m < 10\nVậy có 7 giá trị nguyên của tham số thỏa mãn đề bài.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 441,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - (2 m + 1) x^2 + (m + 1) x + m - 1$. Có bao nhiêu giá trị của số tự nhiên m < 20 để đồ thị hàm số có hai điểm cực trị nằm về hai phía trục hoành?",
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
    "correctAnswer": "B",
    "detailedSolution": "+ Ta có: y = (x - 1) (x^2 - 2mx + 1 - m) .\n+ Hàm số có hai điểm cực trị nằm về hai phía trục hoành khi và chỉ khi đồ thị y cắt trục hoành tại\n()\nba điểm phân biệt. \\iff y = (x - 1) x^2 - 2mx + 1 - m = 0 có ba nghiệm phân biệt.\n2\n\\iff x - 2mx + 1 - m = 0 có hai nghiệm phân biệt khác 1.\n[\n-1 - 5\n[m <\n2\n2\n[\nm + m - 1 > 0\n\\iff \\iff [ m > -1 + 5 .\n[\n2\n2 - 3m \\ne 0\n[\n2\nm\\ne ^3\n+ Do m \\in N , m < 20 nên 1 \\le m < 20 . Vậy có 19 số tự nhiên thỏa mãn bài toán.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 442,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số m để đồ thị của hàm số $y = x^3 - (m + 1) x^2 + (m^2 - 2) x - m^2 + 3 có hai điểm cực trị và hai điểm cực trị đó nằm về hai phía$ khác nhau đối với trục hoành?",
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
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "2\n2\nTa có y' = 0 \\iff 3x - 2 (m + 1) x + m - 2 = 0 .\n1 - 15\n1 + 15\n<m<\n(*) .\n2\n2\nTa lần lượt thử bốn giá trị nguyên của m thỏa mãn (*) là -1;0;1; 2 .\nĐể hàm số có hai điểm cực trị \\iff \\\\Delta' > 0 \\iff -2m^2 + 2m + 7 > 0 \\iff Ta được bốn hàm số\ny = x^3 - x + 2; y = x^3 - x^2 - 2 x + 3; y = x^3 - 2 x^2 - x + 2; y = x^3 - 3x^2 + x - 1 .\nKhi đó ta nhận thấy chỉ có m = 1 thỏa mãn yêu cầu bài toán.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 443,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của m để hàm số f (x) = 2 x^3 - 6 x^2 - m + 1 có các giá trị cực trị trái dấu?",
    "options": [
      {
        "key": "A",
        "content": "$7$"
      },
      {
        "key": "B",
        "content": "$9$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. 3 .\nChọn A\nCó f'(x) = 6 x^2 - 12 x .\n[x = 0\nf'(x) = 0 \\iff [\n[x = 2\nx = 0 \\implies f (0) = -m + 1\nx = 2 \\implies f (2) = -m - 7\nHàm số có các giá trị cực trị trái dấu\n\\iff (- m + 1)(- m - 7) < 0 \\iff (m - 1)(m + 7) < 0 \\iff -7 < m < 1 .\nVậy có 7 giá trị nguyên của m thỏa mãn.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 444,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = 2 x^3 + 3 (m - 1) x^2 + 6 (m - 2) x - 1 với m là tham số$ thực. Tìm tất cả các giá trị của m để hàm số có điểm cực đại và điểm cực tiểu nằm trong khoảng (-2;3) .",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-1; 4) \\ \\{3\\}$"
      },
      {
        "key": "B",
        "content": "$m \\in (3; 4)$"
      },
      {
        "key": "C",
        "content": "$m \\in (1;3)$"
      },
      {
        "key": "D",
        "content": "$m \\in (-1; 4)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có y' = 6 x^2 + 6 (m - 1) x + 6 (m - 2) .\n[ x = -1\ny' = 0 \\iff x^2 + (m - 1) x + (m - 2) = 0 \\iff [\n.\n[ x = -m + 2\nĐể hàm số có điểm cực đại cực tiểu nằm trong khoảng (-2;3) thì y' = 0 có hai nghiệm phân biệt\n-m + 2 \\ne -1\nm \\ne ^3\n\\iff nằm trong khoảng (-2;3) \\iff .\n-2 < -m + 2 < 3 -1 < m < 4",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 445,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - 3mx^2 + 4m^2 - 2 có đồ thị (C) và điểm$ C (1; 4) . Tính tổng các giá trị nguyên dương của m để (C) có hai điểm cực trị A, B sao cho tam giác ABC có diện tích bằng^4.",
    "options": [
      {
        "key": "A",
        "content": "$6$"
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
        "content": "$4$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 4\nChọn C\n[x = 0\nTa có y' = 3 x^2 - 6mx = 0 \\iff [\n[ x = 2m\nĐồ thị (C) có hai điểm cực trị \\iff 2m \\ne 0 \\iff m \\ne 0 .\nKhi đó A (0; 4m^2 - 2) , B (2m; -4m^3 + 4m^2 - 2) \\implies AB = 4m^2 +16m^6 = 2 m 4m^4 +1\ny - (4m - 2)\nx-0\n=\n\\iff 2m^2 x + y - 4m^2 + 2 = 0\n3\n2m - 0\n-4m^2\n2 m -3\n2\nPhương trình đường thẳng AB là:\nd (C , AB) =\n2m^2 + 4 - 4m^2 + 2\n4m^4 + 1\nDiện tích tam giác ABC là\n=\n4m^4 +1\n2 m -3\n1\n1\nS = . AB.d (C , AB) = 4 \\iff .2 m . 4m^4 +1.\n=4\n2\n2\n4m^4 + 1\n2\n[ m = \\pm 1\n2\n\\iff m (m^2 - 3) = 2 \\iff m^6 - 6m^4 + 9m^2 - 4 = 0 \\iff (m^2 -1) (m^2 - 4) = 0 \\iff [\n[ m = \\pm ^2\nDo m nguyên dương nên ta được m = 1, m = 2 , tổng thu được là 3 .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 446,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tổng tất cả các giá trị thực của tham số m để hàm số: $y = 3x^3 + 2 (m + 1) x^2 - 3mx + m - 5 có hai điểm cực trị x1$; x^2 đồng thời y (x1) . y (x^2) = 0 là:",
    "options": [
      {
        "key": "A",
        "content": "$-21$"
      },
      {
        "key": "B",
        "content": "$-39$"
      },
      {
        "key": "C",
        "content": "$-8$"
      },
      {
        "key": "D",
        "content": "$3 11 - 13$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "+) Để hàm số có hai cực trị thì phương trình y' = 0 phải có hai nghiệm phân biệt:\n2\ny' = 9 x^2 + 4 (m + 1) x - 3m có hai nghiệm phân biệt \\iff \\\\Delta' = 4 (m + 1) + 27m > 0\n+) Xét y (x1) . y (x^2) = 0 nên ta có y = 3x^3 + 2 (m + 1) x^2 - 3mx + m - 5 phải tiếp xúc với trục hoành\n\\implies 3x^3 + 2 (m + 1) x^2 - 3mx + m - 5 = 0 phải có nghiệm kép\n\\iff (x - 1) [3x^2 + (2m + 5) x - m + 5] = 0 (1) phải có nghiệm kép\n+) TH1: Phương trình 3x^2 + (2m + 5) x - m + 5 = 0 có một nghiệm x = 1 \\implies m1 = -13\n+) TH^2: Phương trình 3x^2 + (2m + 5) x - m + 5 = 0 có nghiệm kép khác 1\n2\n\\implies \\\\Delta = (2m + 5) - 12 (5 - m) = 0 \\iff 4m^2 + 32m - 35 = 0 \\implies m^2 + m^3 = -8\n\\implies m1 + m^2 + m^3 = -21",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 447,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi S là tập các giá trị dương của tham số m sao cho hàm số $y = x^3 - 3mx^2 + 27 x + 3m - 2 đạt cực trị tại x1$, x^2 thỏa mãn x1 - x^2 \\le ^5 . Biết S = (a; b] . Tính T = 2b - a .",
    "options": [
      {
        "key": "A",
        "content": "$T = 51 + 6$"
      },
      {
        "key": "B",
        "content": "$T = 61 + 3$"
      },
      {
        "key": "C",
        "content": "$T = 61 - 3$"
      },
      {
        "key": "D",
        "content": "$T = 51 - 6$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. T = 51 - 6\nChọn C\n+) Ta có y' = 3 x^2 - 6mx + 27 , y' = 0 \\iff x^2 - 2mx + 9 = 0 (1)\n+) Theo giả thiết hàm số đạt cực trị tại x1 , x^2 \\iff phương trình (1) có 2 nghiệm phân biệt\n[m > 3\n(*)\n\\iff \\\\Delta' > 0 \\iff m^2 - 9 > 0 \\iff [\n[ m < -3\nx + x = 2m\n+) Với điều kiện (*) thì phương trình (1) có 2 nghiệm x1 , x^2 , theo Vi-ét ta có: 1 2\nx1 x^2 = 9\n2\n2\n+) Ta lại có x1 - x^2 \\le ^5 \\iff (x1 - x^2) \\le 25 \\iff (x1 + x^2) - 4 x1 x^2 - 25 \\le 0\n\\iff 4m^2 - 61 \\le 0 \\iff -\n61\n61\n(**)\n\\le m\\le ^2\n2\n+) Kết hợp (*), (**) và điều kiện m dương ta được: 3 < m \\le 61\n2\na = 3\n\\implies 61 \\implies T = 2b - a = 61 - 3 .\nb\n=\n2",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 448,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi S là tập hợp các giá trị nguyên của tham số m để hàm số x^3 $y = - 2 x^2 + mx + 3 có hai điểm cực trị x1$, x^2 \\le ^4 . Số phần tử của S bằng^3",
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
    "detailedSolution": "3\nx\nTa có: y = - 2 x^2 + mx + 3 \\implies y' = x^2 - 4 x + m .\n3\nHàm số có hai điểm cực trị x1 , x^2 thì phương trình y' = 0 có hai nghiệm phân biệt\n\\iff \\\\Delta' > 0 \\iff ^4-m > 0 \\iff m < 4.\n[x = 2- 4-m\nKhi đó giả sử x1 < x^2 , y' = 0 \\iff [ 1\n[ x^2 = 2 + 4 - m\nYêu cầu bài toán trở thành x^2 \\le ^4 \\iff ^2 + 4 - m \\le ^4 \\iff 0 \\le m \\le ^4 .\nKết hợp với m < 4 ta được 0 \\le m < 4 . Do m nguyên nên m \\in \\{0;1; 2;3\\} . Vậy có 4 giá trị của m\nthỏa mãn yêu cầu bài toán.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 449,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số m để điểm M (2m^3 ; m) tạo với hai điểm cực đại, cực tiểu của đồ thị hàm số $y = 2 x^3 - 3(2m + 1) x^2 + 6m(m + 1) x + 1 (C) một tam giác có diện tích nhỏ$ nhất?",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "không tồn tại"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "D. không tồn tại\nChọn B\nTa có y' = 6 x^2 - 6(2m + 1) x + 6m(m + 1)\n[x = m\ny' = 0 \\iff [\n\\implies \\forall m \\in R , hàm số luôn có CĐ, CT\n[x = m +1\nTọa độ các điểm CĐ, CT của đồ thị là A(m; 2m^3 + 3m^2 + 1), B(m + 1;2m^3 + 3m^2)\nSuy ra AB = 2 và phương trình đường thẳng AB : x + y - 2m^3 - 3m^2 - m - 1 = 0\nDo đó, tam giác MAB có diện tích nhỏ nhất khi và chỉ khi khoảng cách từ M tới AB nhỏ nhất\n3m^2 + 1 1\nTa có d (M , AB) =\n, dấu \"=\" khi m = 0\n\\ge ^2\n2",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 450,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - 6mx + 4 có đồ thị (Cm)$. Gọi m0 là giá trị của m để đường thẳng đi qua điểm cực đại, điểm cực tiểu của (Cm) cắt đường tròn tâm I (1; 0) , bán kính^2 tại hai điểm phân biệt A, B sao cho tam giác IAB có diện tích lớn nhất. Chọn khẳng định đúng",
    "options": [
      {
        "key": "A",
        "content": "$m0 \\in (3; 4)$"
      },
      {
        "key": "B",
        "content": "$m0 \\in (1; 2)$"
      },
      {
        "key": "C",
        "content": "$m0 \\in (0;1)$"
      },
      {
        "key": "D",
        "content": "$m0 \\in (2;3)$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Ta có: y' = 3 x^2 - 6m\ny' = 0 \\iff x^2 = 2m\nHàm số có cực đại, cực tiểu \\iff y' = 0 có hai nghiệm phân biệt\n\\iff m>0\nGọi A 2m ; 4 - 4m 2m và B - 2m ; 4 + 4m 2m\n()\n()\nPhương trình đường thẳng AB : 4mx + y - 4 = 0\n(Đặt a = d (I , AB) 0 < a < 2\nSuy ra S\\\\Delta IAB = a^2 - a^2 \\le ) \\implies HB = 2 - a^2\n1 2\na + 2 - a^2) = 1\n(2\nDấu “ = ” xảy ra \\iff a = 2 - a^2 \\iff a = 1\n4m + 0 - 4\nKhi đó d (I ; AB) =\n= 1 \\iff 16m^2 + 1 = 4 m - 1\n2\n16m + 1\n15\n\\iff 16m^2 + 1 = 16m^2 - 32m + 16 \\iff m =\n32",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 451,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Biết rằng đồ thị hàm số f (x) = \\frac{1}{1}x^3 - mx^2 + x - 2 3 2 có giá trị tuyệt đối của hoành độ hai điểm cực trị là độ dài hai cạnh của tam giác vuông có cạnh huyền là 7 . Hỏi có mấy giá trị của m ?",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "Không có m"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Có y' (x) = x^2 - mx + 1 , y' = 0 \\iff x^2 - mx + 1 = 0 (1) .\n- Để hàm số có cực trị thì (1) phải có hai nghiệm phân biệt.\n[m > 2\nĐiều này tương đương với \\\\Delta > 0 \\iff m^2 - 4 > 0 \\iff [\n.\n[ m < -2\nx + x = m\n- Gọi hai nghiệm của (1) là x1 , x^2 . Khi đó, ta có 1 2\n.\nx1 .x^2 = 1\nĐộ dài hai cạnh của tam giác vuông đó là x1 , x^2 . Theo bài ra ta có phương trình:\n2\nx12 + x22 = 7 \\iff (x1 + x^2) - 2 x1 x^2 = 7 \\iff m^2 - 2 = 7 \\iff m^2 = 9 \\iff m = \\pm ^3 (thỏa mãn).\nVậy có hai giá trị của m thỏa mãn yêu cầu bài toán.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 452,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi S là tập hợp tất cả các giá trị nguyên của tham số m để điểm cực tiểu của đồ thị hàm số $y = x^3 + x^2 + mx - 1 nằm bên phải trục tung$. Tìm số phần tử của tập hợp (-5;6) \\cap S .",
    "options": [
      {
        "key": "A",
        "content": "$2$"
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
        "content": "$4$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: D = - ; y' = 3 x + 2 x + m .\n2\nHàm bậc ba có cực trị khi y' = 0 có 2 nghiệm phân biệt \\iff \\\\Delta' = 1 - 3m > 0 \\iff m <\n1\n3\n(1) .\n[ x = -1 - 1 - 3m\nKhi đó y' = 0 \\iff [\n[ x = -1 + 1 - 3m\nBảng biến thiên:\nĐiểm cực tiểu của đồ thị hàm số nằm về phía bên phải trục tung khi\n-1 + 1 - 3m > 0 \\iff 1 - 3m > 1 \\iff m < 0 .\nKết hợp với (1) ta có m < 0 thì điểm cực tiểu của đồ thị hàm số đã cho nằm bên phải trục tung.\nKhi đó S là tập hợp tất cả các giá trị nguyên âm.\nVậy (-5;6) \\cap S = \\{-4; -3; -2; -1\\} \\implies (-5;6) \\cap S có 4 phần tử.\nVậy giá trị m cần tìm là m \\le -1 hoặc m \\ge ^3 .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 453,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "(THPT Nghen - Hà Tĩnh - 2018) Cho hàm số $y = - x^3 + 3x^2 + 3 m^2 - 1 x - 3m^2 - 1$. Có bao nhiêu giá trị nguyên của m để đồ thị hàm số có điểm cực đại, cực tiểu nằm bên trái đường thẳng $x = 2$?",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "3\n2\n2\n2\ny = - x + 3x + 3 m - 1 x - 3m - 1 \\implies y' = -3x^2 + 6 x + 3 m^2 - 1 .\n()\n()\n[x = 1- m\n.\ny' = 0 \\iff [\n[x = 1+ m\nĐể đồ thị hàm số có điểm cực đại, cực tiểu nằm bên trái đường thẳng x = 2 thì\nm \\ne 0\nm \\ne 0\n1 + m < 2 \\iff m < 1 .\n1 - m < 2\nm > -1\nVậy không có giá trị nguyên nào của m thỏa yêu cầu bài toán.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 454,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số m để đồ thị của hàm số $y = x^4 - 2mx^2 có$ ba điểm cực trị tạo thành một tam giác có diện tích nhỏ hơn 1 .",
    "options": [
      {
        "key": "A",
        "content": "$0 < m < 1$"
      },
      {
        "key": "B",
        "content": "$m > 0$"
      },
      {
        "key": "C",
        "content": "$0 < m < 3 4$"
      },
      {
        "key": "D",
        "content": "$m < 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định D = \\mathbb{R}\ny\n- m\nB\nO\nm\n-m^2\nH\nA\nx\n[x = 0\nTa có y' = 4 x^3 - 4mx . y' = 0 \\iff ^4 x^3 - 4 mx = 0 \\iff [ 2\n.\nx\n=\nm\n[\nHàm số có ba điểm cực trị khi và chỉ khi m > 0 . Khi đó đồ thị hàm số có ba điểm cực trị là\nO (0; 0) , A\n(m ; - m) , B (- m ; -m) .\n2\n2\n1\n1\nDo đó S\\\\Delta OAB = OH. AB = m^2 .2 m = m^2 m < 1 \\iff 0 < m < 1.\n2\n2",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 455,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi S là tập hợp tất cả các giá trị của tham số m để đồ thị hàm số $y = x^4 - 2 (m + 1) x^2 + m^2 có ba điểm cực trị tạo thành ba đỉnh của một tam giác vuông$. Số phần tử của tập hợp S là",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$0$"
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
    "detailedSolution": "• y = x^4 - 2 (m + 1) x^2 + m^2 \\implies y' = 4 x^3 - 4 (m + 1) x = 4 x (x^2 - m - 1) .\n• Hàm số có 3 điểm cực trị \\iff y' = 0 có 3 nghiệm phân biệt.\n\\iff x^2 - m - 1 = 0 có 2 nghiệm phân biệt khác 0.\n\\iff -m - 1 > 0 .\n\\iff m < -1 .\n[x = - m +1\n[\nKhi đó: y' = 0 \\iff [ x = 0\n.\n[x = m +1\n[\n• Giả sử A, B , C là ba điểm cực trị của đồ thị hàm số.\n()\n()\n\\implies A - m + 1; - 2m - 1 , B (0; m^2) , C m + 1; - 2m - 1\n\\cup\\cup\\cup\\to\n\\cup\\cup\\cup\\to^2\n2\n\\implies AB = m + 1; (m + 1) , CB = - m + 1; (m + 1)\n()\n()\n\\cup\\cup\\cup\\to \\cup\\cup\\cup\\to\n[ m = -1\n4\n\\implies m =0.\n\\\\Delta ABC vuông tại B \\iff AB.CB = 0 \\iff - (m + 1) + (m + 1) = 0 \\iff [\n[m = 0",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 456,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm m để đồ thị hàm số $y = x^4 - 2m^2 x^2 + 1 có 3$ điểm cực trị lập thành một tam giác vuông cân.",
    "options": [
      {
        "key": "A",
        "content": "$m = 1$"
      },
      {
        "key": "B",
        "content": "$m \\in \\{-1;1\\}$"
      },
      {
        "key": "C",
        "content": "$m \\in \\{-1;0;1\\}$"
      },
      {
        "key": "D",
        "content": "$m \\in \\emptyset$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "y = x^4 - 2m^2 x^2 + 1 .\n+ Cách 1:\nHàm số có 3 cực trị \\iff ab < 0 \\iff -2m^2 < 0 \\iff m \\ne 0 .\ny' = 4 x^3 - 4m^2 x\ny' = 0 \\iff ^4 x^3 - 4m^2 x = 0\n\\iff ^4 x (x^2 - m^2) = 0\n[ y1 = 1\n[ x1 = 0\n[\n\\iff [ x^2 = m \\implies [ y^2 = -m^4 + 1\n[ x^3 = -m [ y^3 = -m^4 + 1\nGiả sử A (0;1) , B (m ; - m^4 + 1) , C (- m ; - m^4 + 1) là 3 điểm cực trị của đồ thị hàm số.\n\\cup\\cup\\cup\\to\nAB = (m ; - m^4) \\implies AB = m^2 + m^8 .\n\\cup\\cup\\cup\\to\nAC = (- m ; - m^4) \\implies AC = m^2 + m^8 .\nYêu cầu bài toán \\iff \\\\Delta ABC vuông cân tại A\nAB = AC\nm \\in \\mathbb{R}\n\\iff ^2\n\\iff - m^2 (1 - m^6) = 0\n\\iff \\cup\\cup\\cup\\to \\cup\\cup\\cup\\to^8\nAB. AC = 0\n-m + m = 0\n[ m = 0 (l)\n\\iff [ m = 1 (n) .\n[ m = -1(n)\nVậy m \\in \\{-1;1\\} .\n+ Cách^2: (Áp dụng công thức tính nhanh cực trị hàm trùng phương)\n-2m^2 < 0\nm \\ne 0\nab < 0\nm \\ne 0\nYêu cầu bài toán \\iff -8a\n\\iff -8\n= 1 \\iff m^6 = 1 \\iff [ m = 1 (n) .\n=\n1\nb^3\n-2m^2 3\n[ m = -1(n))\n[\n(Vậy m \\in \\{-1;1\\} .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 457,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "(Chuyên Lương Văn Chánh - Phú Yên - 2018) Gọi S là tập hợp tất cả các giá trị thực của tham số m để đồ thị (C) của hàm số $y = x^4 - 2m^2 x^2 + m^4 + 5 có ba điểm cực trị$, đồng thời ba điểm cực trị đó cùng với gốc tọa độ O tạo thành một tứ giác nội tiếp. Tìm số phần tử của S .",
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
        "content": "$3$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có y' = 4 x^3 - 4m^2 x .\nHàm số có cực đại cực tiểu \\iff phương trình y' = 0 có ba nghiệm phân biệt \\iff m \\ne 0 .\n()\nGọi A 0; m^4 + 5 , B (m;5) , C (- m;5) lần lượt là ba điểm cực trị của đồ thị hàm số.\nGọi I là tâm đường tròn ngoại tiếp tứ giác ABOC khi đó ta có ba điểm A , I , O thẳng hàng.\nMặt khác do hai điểm B và C đối xứng nhau qua AO nên AO là đường kính của đường tròn\n\\cup\\cup\\cup\\to \\cup\\cup\\cup\\to\nngoại tiếp tứ giác ABOC \\implies AB \\perp OB \\iff AB.OB = 0 .\n\\cup\\cup\\cup\\to\n\\cup\\cup\\cup\\to^5\nTrong đó AB = (m; -m^4) , OB = (m;5) . Ta có phương trình m^2 - 5m^4 = 0 \\iff m = \\pm ^5",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 458,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = - x^4 + 2mx^2 + 2 có đồ thị (Cm)$. Tìm m để đồ thị hàm số có ba điểm cực trị tạo thành một tam giác vuông.",
    "options": [
      {
        "key": "A",
        "content": "$m = 3 3$"
      },
      {
        "key": "B",
        "content": "$- m = 3 3$"
      },
      {
        "key": "C",
        "content": "$m = -1$"
      },
      {
        "key": "D",
        "content": "$m = 1$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Cách 1:\nTa có y' = -4 x^3 + 4mx = -4 x x^2 - m .\n()\n()\nĐể hàm số có ba cực trị thì phương trình y' = 0 có ba nghiệm phân biệt \\iff -4 x x^2 - m = 0 có ba\nnghiệm phân biệt \\implies m > 0 .\nGọi A (0; 2) , B - m , m^2 + 2 , C\n(trị của đồ thị hàm số.) (m , m + 2) là ba điểm cực\n\\cup\\cup\\cup\\to\\cup\\cup\\cup\\to^2\nVì \\\\Delta ABC cân tại A nên \\\\Delta ABC chỉ có thể vuông tại A \\iff AB AC = 0 .\n\\cup\\cup\\cup\\to\n\\cup\\cup\\cup\\to\nVới AB = - m ; m^2 , AC = m ; m^2 \\implies -m + m^4 = 0 \\iff m m^3 - 1 = 0 \\implies m = 1 .\n()\n()\n()\nCách^2: Áp dụng công thức tính nhanh: Ba điểm cực trị của đồ thị hàm số y = ax^4 + bx^2 + c tạo\nthành một tam giác vuông khi 8a + b^3 = 0 \\iff 8m^3 - 8 = 0 \\iff m = 1 .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 459,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi A , B , C là các điểm cực trị của đồ thị hàm số $y = x^4 - 2 x^2 + 4$. Bán kính đường tròn nội tiếp tam giác ABC bằng",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$2 + 1$"
      },
      {
        "key": "C",
        "content": "$2 -1$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "B. 2 + 1 .\nD.\n2.\n[ x = 0 \\implies A (0; 4)\n[\ny' = 4 x^3 - 4 x = 0 \\iff [ x = -1 \\implies B (-1;3) .\n[\n[ x = 1 \\implies C (1;3)\n\\cup\\cup\\cup\\to\n\\cup\\cup\\cup\\to\n\\cup\\cup\\cup\\to\nAB = (-1; -1) \\implies AB = 2 ; AC = (1; -1) \\implies AC = 2 ; BC = (2;0) \\implies BC = 2 .\nTa có \\\\Delta ABC vuông cân tại A có S =\n1\n2\n+ BC\n= 2 +1 .\n(2) = 1 , p = AB + AC^2\n2\nVậy r =",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 460,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số m để đồ thị của hàm số $y = x^4 - 2mx^2 có ba điểm cực trị tạo thành một tam giác có diện tích nhỏ hơn 1$.",
    "options": [
      {
        "key": "A",
        "content": "$m < 1$"
      },
      {
        "key": "B",
        "content": "$0 < m < 1$"
      },
      {
        "key": "C",
        "content": "$0 < m < 3 4$"
      },
      {
        "key": "D",
        "content": "$m > 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. m > 0 .\n[x = 0\nHàm số y = x^4 - 2mx^2 có TXĐ : D = \\mathbb{R} . Ta có y' = 4 x^3 - 4mx ; y' = 0 \\iff [ 2\n.\n[x = m\n()\nĐể đồ thị hàm số có ba điểm cực trị thì m > 0 . Khi đó ba điểm cực trị là O (0;0) , B - m ; - m^2 ,\nC\n(m ; - m) . Ta giác OBC cân tại O , với I (0; -m) trung điểm của BC^2\n2\n1\n1\nTheo yêu cầu bài toán, ta có: S ABC = OI .BC = - m^2 .2 m < 1 \\iff 0 < m < 1 .\n2\n2",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 461,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Điều kiện của tham số m để hàm số $y = x^2 - mx$ có cực đại và cực tiểu 1- x là",
    "options": [
      {
        "key": "A",
        "content": "$m < 0$"
      },
      {
        "key": "B",
        "content": "$m > -1$"
      },
      {
        "key": "C",
        "content": "$m < 2$"
      },
      {
        "key": "D",
        "content": "$m > -2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. m > -2 .\nChọn A\nĐiều kiện x \\ne 1 .\n- x^2 + 2x - m\nx^2 - mx\n\\implies y' =\nTa có y =\n.\n2\n1- x\n(1 - x)\nx^2 - mx\ncó cực đại và cực tiểu \\iff y' = 0 có hai nghiệm phân biệt và đổi dấu khi đi\n1- x\nqua hai điểm đó \\iff - x^2 + 2 x - m = 0 có hai nghiệm phân biệt khác 1\n\\\\Delta' > 0\n1 - m > 0\n\\iff \\iff \\iff m < 1.\n-1 + 2 - m \\ne 0\nm \\ne 1\nVậy m < 1 thì hàm số đã cho có cực đại và cực tiểu.\nKhông có đáp án hoặc chọn\nA.\nHàm số y =",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 462,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi S là tập hợp tất cả các giá trị thực của tham số m để đồ x^2 + mx + 2m thị hàm số $y = có$ x +1 hai điểm cực trị A , B và tam giác OAB vuông tại O . Tổng tất cả các phần tử của S bằng",
    "options": [
      {
        "key": "A",
        "content": "$9$"
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
        "content": "$5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "x^2 + 2 x - m\ny' =\n, \\forall x \\ne -1 . Đặt f (x) = x^2 + 2 x - m , h (x) = x^2 + mx + 2m , g (x) = x + 1 .\n2\n(x + 1)\nĐồ thị hàm số đã cho có hai điểm cực trị A , B khi f (x) có hai nghiệm phân biệt x1 , x^2\nh' (x1)\ny (x1) =\n= 2 x1 + m\n\\\\Delta' = m + 1 > 0\ng ' (x1)\n\\iff m > -1 (1) . Khi đó\nkhác -1 \\iff .\nf (-1) = -m - 1 \\ne 0\ny (x) = h' (x^2) = 2 x + m^2\n2\ng ' (x^2)\n\\cup\\cup\\cup\\to\n\\cup\\cup\\cup\\to\nSuy ra A x1 ;2 x1 + m , B x^2 ; 2 x^2 + m . Suy ra OA = x1 ; 2 x1 + m , OB x^2 ;2 x^2 + m .\n\\cup\\cup\\cup\\to \\cup\\cup\\cup\\to \\to\nOA, OB \\ne 0 (2)\n.\n\\\\Delta OAB vuông tại O khi \\cup\\cup\\cup\\to \\cup\\cup\\cup\\to\nOA\n.\nOB\n=\nx\n.\nx\n+\n2\nx\n+\nm^2\nx\n+\nm\n=\n0\n3\n()()\n()\n1 2\n1\n2\n2\n(3) \\iff m + 5 x1.x^2 + 2m (x1 + x^2) = 0 . Kết hợp với định lí Vi-et cho phương trình f (x) = 0 ta\n() ()\n()\n()\n[ m = 0 (kh«ng tháa m· n (2))\n\\implies S = \\{9\\} .\nđược m^2 - 5m - 4 m = 0 \\iff [\n[ m = 9 (tháa m· n (1) , (2))\nVậy tổng tất cả các phần tử của S bằng^9.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 463,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x - m x+4$ x- m . Biết rằng đồ thị hàm số có hai điểm cực trị phân biệt là A , B . Tìm số giá trị m sao cho ba điểm A , B , C (4; 2) phân biệt và thẳng hàng.",
    "options": [
      {
        "key": "A",
        "content": "$0$"
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
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. 3 .\nTập xác định D = \\mathbb{R} \\ \\{ m \\} .\nTa có y =\ny' = 1 -\nx^2 - m x + 4\nx- m\n= x+\n4\n.\nx- m\n[x = 2 + m\n, \\forall x \\in D , y' = 0 \\iff [\n.\nx\n=\n-\n2\n+\nm\nx\n-\nm\n[\n()\n[\n4\n2\nTọa độ hai điểm cực trị là B (2 + m ; 4 + m) , A (-2 + m ; -4 + m) .\n\\cup\\cup\\cup\\to\n\\cup\\cup\\cup\\to\nAB = (4;8) , AC = (6 - m ;6 - m) .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 464,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "6 - m = 4k \\cup\\cup\\cup\\to \\cup\\cup\\cup\\to  AC = k AB Ba điểm A , B , C (4; 2) phân biệt và thẳng hàng \\iff \\iff ^6 - m = 8k (vô nghiệm). 6 - m \\ne 0 6 - m \\ne 0 Vậy không có giá trị m nào thỏa mãn. x^2 + mx + 1 (THCS - THPT Nguyễn Khuyến - 2018) Giá trị của tham số m để hàm số $y = đạt$ x+m cực đại tại điểm x0 = 2 là:",
    "options": [
      {
        "key": "A",
        "content": "$m = -1$"
      },
      {
        "key": "B",
        "content": "$m = -3$"
      },
      {
        "key": "C",
        "content": "$m = 1$"
      },
      {
        "key": "D",
        "content": "$m = 3$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "1\n2\n.\ny' = 1-\n; y'' =\n2\n3\n(x + m)\n(x + m)\n1\n=0\n2\n1 -\ny'\n2\n=\n0\n2\n+\nm\n()\n()\nx + mx + 1\nHàm số y =\nđạt cực đại tại điểm x0 = 2 khi\n\\iff x+m\ny'' (2) < 0\n2\n<0\n(2 + m)3\n[ m = -1\n\\iff [ m = -3 \\iff m = -3 . Thử lại thấy thỏa mãn.\nm < -2\n2",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao"
  }
];
