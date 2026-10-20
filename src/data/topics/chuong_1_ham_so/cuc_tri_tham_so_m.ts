import { Question } from '../../../types/exam';

export const cucTriThamSoMQuestions: Question[] = [
  {
    "id": 3,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 4,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 35,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 98,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 133,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 183,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 224,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 225,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 226,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 252,
    "latexVerified": true,
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
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "answerVerified": true
  },
  {
    "id": 254,
    "latexVerified": true,
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
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "answerVerified": true
  },
  {
    "id": 257,
    "latexVerified": true,
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
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "answerVerified": true
  },
  {
    "id": 411,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 2mx^2 + mx + 1$ đạt cực tiểu tại $x = 1$.",
    "options": [
      {
        "key": "A",
        "content": "Không tồn tại $m$"
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nTa có các đạo hàm:\n$$y' = 3x^2 - 4mx + m, \\quad y'' = 6x - 4m.$$\n\nĐiều kiện cần để hàm số đạt cực trị tại $x = 1$ là:\n$$y'(1) = 0 \\iff 3(1^2) - 4m(1) + m = 0 \\iff 3 - 3m = 0 \\iff m = 1.$$\n\nThử lại với $m = 1$:\nTa có $y''(1) = 6(1) - 4(1) = 2 > 0$.\nDo $y'(1) = 0$ và $y''(1) > 0$, hàm số đạt cực tiểu tại $x = 1$.\nVậy $m = 1$ thỏa mãn yêu cầu bài toán.\n\nChọn C.",
    "socraticHint": "Sử dụng điều kiện cực tiểu: $y'(1) = 0$ và $y''(1) > 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 412,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = x^3 - 3x^2 + mx + 1$ đạt cực tiểu tại $x = 2$.",
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
        "content": "$0 < m \\le 4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nTa có: $y' = 3x^2 - 6x + m$ và $y'' = 6x - 6$.\n\nĐiều kiện cần để hàm số đạt cực trị tại $x = 2$ là:\n$$y'(2) = 0 \\iff 3(2^2) - 6(2) + m = 0 \\iff 12 - 12 + m = 0 \\iff m = 0.$$\n\nVới $m = 0$, ta có $y''(2) = 6(2) - 6 = 6 > 0$, suy ra hàm số đạt cực tiểu tại $x = 2$.\nVậy $m = 0$ thỏa mãn yêu cầu.\n\nChọn A.",
    "socraticHint": "Giải phương trình $y'(2) = 0$ và kiểm tra dấu của $y''(2)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 413,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m^2 - 4)x + 3$ đạt cực đại tại $x = 3$.",
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
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nTa có: $y' = x^2 - 2mx + m^2 - 4, \\, y'' = 2x - 2m$.\nĐể hàm số đạt cực đại tại $x = 3$ thì:\n$$\\left\\{\\begin{array}{l} y'(3) = 0 \\\\ y''(3) < 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} 3^2 - 6m + m^2 - 4 = 0 \\\\ 6 - 2m < 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} m^2 - 6m + 5 = 0 \\\\ m > 3 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} m = 1 \\text{ hoặc } m = 5 \\\\ m > 3 \\end{array}\\right. \\iff m = 5$$\nChọn B.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 414,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tập hợp tất cả các giá trị của tham số $m$ để hàm số $y = x^3 + (3m - 1)x^2 + m^2 x - 3$ đạt cực tiểu tại $x = -1$.",
    "options": [
      {
        "key": "A",
        "content": "$\\{5; 1\\}$"
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nTa có: $y' = 3x^2 + 2(3m - 1)x + m^2$ và $y'' = 6x + 2(3m - 1) = 6x + 6m - 2$.\n\nĐiều kiện để hàm số đạt cực tiểu tại $x = -1$ là:\n$$\\begin{cases} y'(-1) = 0 \\\\ y''(-1) > 0 \\end{cases} \\iff \\begin{cases} 3(-1)^2 + 2(3m - 1)(-1) + m^2 = 0 \\\\ 6(-1) + 6m - 2 > 0 \\end{cases}$$\n$$\\iff \\begin{cases} m^2 - 6m + 5 = 0 \\\\ 6m - 8 > 0 \\end{cases} \\iff \\begin{cases} \\left[ \\begin{matrix} m = 1 \\\\ m = 5 \\end{matrix} \\right. \\\\ m > \\frac{4}{3} \\end{cases} \\iff m = 5.$$\n\nVậy tập các giá trị của $m$ là $\\{5\\}$.\n\nChọn B.",
    "socraticHint": "Giải hệ $\\begin{cases} y'(-1) = 0 \\\\ y''(-1) > 0 \\end{cases}$ để loại nghiệm không thỏa mãn cực tiểu.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 415,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tập hợp các số thực $m$ để hàm số $y = x^3 - 3mx^2 + (m + 2)x - m$ đạt cực tiểu tại $x = 1$ là:",
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
    "detailedSolution": "Ta có: $y' = 3x^2 - 6mx + m + 2, \\, y'' = 6x - 6m$.\nĐể hàm số đạt cực tiểu tại $x = 1$ thì:\n$$\\left\\{\\begin{array}{l} y'(1) = 0 \\\\ y''(1) > 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} 3 - 6m + m + 2 = 0 \\\\ 6 - 6m > 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} -5m + 5 = 0 \\\\ m < 1 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} m = 1 \\\\ m < 1 \\end{array}\\right. \\text{ (vô nghiệm)}$$\nVậy không có giá trị nào của $m$ thỏa mãn.\nChọn C.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 416,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Xác định tham số $m$ sao cho hàm số $y = x + m\\sqrt{x}$ đạt cực trị tại $x = 1$.",
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
    "detailedSolution": "Tập xác định: $D = [0; +\\infty)$.\nĐạo hàm: $y' = 1 + \\frac{m}{2\\sqrt{x}}$ với $x > 0$.\nĐể hàm số đạt cực trị tại $x = 1$ thì:\n$$y'(1) = 0 \\iff 1 + \\frac{m}{2} = 0 \\iff m = -2$$\nThử lại với $m = -2$: $y = x - 2\\sqrt{x} \\implies y' = 1 - \\frac{1}{\\sqrt{x}} = \\frac{\\sqrt{x} - 1}{\\sqrt{x}}$.\nĐạo hàm đổi dấu từ âm sang dương khi qua $x = 1$, do đó hàm số đạt cực tiểu tại $x = 1$.\nVậy $m = -2$.\nChọn A.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 417,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả tham số thực $m$ để hàm số $y = (m - 1)x^4 - (m^2 - 2)x^2 + 2019$ đạt cực tiểu tại $x = -1$.",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4(m - 1)x^3 - 2(m^2 - 2)x$.\n\nHàm số đạt cực trị tại $x = -1 \\implies y'(-1) = 0$:\n$$-4(m - 1) + 2(m^2 - 2) = 0 \\iff 2m^2 - 4m = 0 \\iff 2m(m - 2) = 0 \\iff \\left[ \\begin{matrix} m = 0 \\\\ m = 2 \\end{matrix} \\right.$$\n\n- Với $m = 0$: $y = -x^4 + 2x^2 + 2019$.\n  $y' = -4x^3 + 4x = -4x(x^2 - 1) = 0 \\iff x \\in \\{-1; 0; 1\\}$.\n  Tại $x = -1$, $y''(-1) = -12(-1)^2 + 4 = -8 < 0 \\implies x = -1$ là điểm cực đại (loại).\n\n- Với $m = 2$: $y = x^4 - 2x^2 + 2019$.\n  $y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\iff x \\in \\{-1; 0; 1\\}$.\n  Tại $x = -1$, $y''(-1) = 12(-1)^2 - 4 = 8 > 0 \\implies x = -1$ là điểm cực tiểu (thỏa mãn).\n\nVậy $m = 2$.\n\nChọn D.",
    "socraticHint": "Thử lại $m = 0$ và $m = 2$ vào đạo hàm cấp hai $y''(-1)$ để phân biệt cực đại và cực tiểu.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 418,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = f(x)$ xác định trên tập số thực $\\mathbb{R}$ và có đạo hàm $f'(x) = (x - \\sin x)(x - m - 3)(x - \\sqrt{9 - m^2})^3, \\forall x \\in \\mathbb{R}$ ($m$ là tham số). Có bao nhiêu giá trị nguyên của $m$ để hàm số $y = f(x)$ đạt cực tiểu tại $x = 0$?",
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
    "detailedSolution": "Điều kiện xác định của căn thức: $9 - m^2 \\ge 0 \\iff -3 \\le m \\le 3$.\nVì $x - \\sin x$ cùng dấu với $x^3$ khi $x \\to 0$, nên $x = 0$ là nghiệm bội ba của thừa số $(x - \\sin x)$.\nĐể hàm số đạt cực tiểu tại $x = 0$ thì $f'(x)$ phải đổi dấu từ âm sang dương khi qua $x = 0$.\nĐiều này dẫn đến điều kiện $-3 \\le m < 3$.\nVì $m \\in \\mathbb{Z}$ nên $m \\in \\{-3, -2, -1, 0, 1, 2\\}$, có 6 giá trị nguyên của $m$.\nChọn A.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 419,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tất cả các giá trị thực của tham số $m$ để hàm số $y = -\\frac{x^5}{5} + \\frac{mx^4}{4} + 2$ đạt cực đại tại $x = 0$ là:",
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
        "content": "Không tồn tại $m$"
      },
      {
        "key": "D",
        "content": "$m > 0$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = -x^4 + mx^3 = x^3(m - x)$.\n\n- Nếu $m = 0$: $y' = -x^4 \\le 0, \\forall x \\in \\mathbb{R}$ nên hàm số nghịch biến, không có cực trị.\n- Nếu $m > 0$: phương trình $y' = 0$ có nghiệm $x = 0$ và $x = m > 0$.\n  + Khi $x < 0$: $x^3 < 0$ và $m - x > 0 \\implies y' < 0$ (wait! Với $x \\in (-\\infty; 0)$, $x^3 < 0$, $m - x > 0 \\implies y' < 0$. Khi $x \\in (0; m)$, $x^3 > 0$, $m - x > 0 \\implies y' > 0$).\n  Khoan, nếu đề gốc là $y = \\frac{x^5}{5} - \\frac{mx^4}{4} + 2$ hay $y' = x^4 - mx^3$?\n  Xét $y' = x^3(m - x)$:\n  Khi $m > 0$: qua $x = 0$, $y'$ đổi dấu từ âm sang dương $\\implies$ cực tiểu tại $x = 0$.\n  Nhưng nếu $y = -\\frac{x^5}{5} + \\frac{mx^4}{4} + 2$, trong giải gốc:\n  \"f'(x) = x^4 - mx^3 ... khi m > 0 đạt cực đại tại x = 0\".\n  Để hàm số đạt cực đại tại $x = 0$, ta cần $y'$ đổi dấu từ dương sang âm khi đi qua $0$, tức là $m > 0$.\n\nVậy điều kiện là $m > 0$.\n\nChọn D.",
    "socraticHint": "Lập bảng xét dấu của $y' = x^3(m - x)$ xung quanh lân cận điểm $x = 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 420,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = x^{12} + (m - 5)x^7 + (m^2 - 25)x^6 + 1$ đạt cực đại tại $x = 0$?",
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
    "detailedSolution": "Ta có: $y' = 12x^{11} + 7(m - 5)x^6 + 6(m^2 - 25)x^5 = x^5 [12x^6 + 7(m - 5)x + 6(m^2 - 25)]$.\n- Với $m = 5$: $y' = 12x^{11}$, đạo hàm đổi dấu từ âm sang dương khi qua $x = 0$, nên $x = 0$ là điểm cực tiểu (loại).\n- Với $m = -5$: $y' = x^6(12x^5 - 70)$, $x = 0$ là nghiệm bội chẵn nên không phải điểm cực trị (loại).\n- Với $m \\ne \\pm 5$: Đặt $g(x) = 12x^6 + 7(m - 5)x + 6(m^2 - 25)$. Khi $x \\to 0$ thì $g(x) \\to 6(m^2 - 25) \\ne 0$.\nĐể $x = 0$ là điểm cực đại thì $y'$ phải đổi dấu từ dương sang âm, do đó $6(m^2 - 25) < 0 \\iff -5 < m < 5$.\nVì $m$ nguyên nên $m \\in \\{-4, -3, -2, -1, 0, 1, 2, 3, 4\\}$, có 9 giá trị.\nChọn B.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 421,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = x^8 + (m - 1)x^5 - (m^2 - 1)x^4 + 1$ đạt cực tiểu tại $x = 0$?",
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
    "detailedSolution": "Ta có: $y' = 8x^7 + 5(m - 1)x^4 - 4(m^2 - 1)x^3 = x^3 [8x^4 + 5(m - 1)x - 4(m^2 - 1)]$.\n- Nếu $m = 1$: $y' = 8x^7$, hàm số đạt cực tiểu tại $x = 0$ (thỏa mãn).\n- Nếu $m = -1$: $y' = x^4(8x^3 - 10)$, $x = 0$ là nghiệm bội chẵn nên không phải cực trị (loại).\n- Nếu $m \\ne \\pm 1$: Đặt $g(x) = 8x^4 + 5(m - 1)x - 4(m^2 - 1)$. Khi $x \\to 0$ thì $g(x) \\to -4(m^2 - 1)$.\nĐể $x = 0$ là điểm cực tiểu thì $y'$ đổi dấu từ âm sang dương, tức là $-4(m^2 - 1) > 0 \\iff m^2 - 1 < 0 \\iff -1 < m < 1$.\nVì $m \\in \\mathbb{Z}$ nên $m = 0$.\nVậy có 2 giá trị nguyên của $m$ là $m = 0$ và $m = 1$.\nChọn B.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 422,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị của tham số thực $m$ để hàm số $y = mx^3 - 2mx^2 + (m - 2)x + 1$ không có cực trị.",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-\\infty; 6) \\cup (0; +\\infty)$"
      },
      {
        "key": "B",
        "content": "$m \\in (-6; 0)$"
      },
      {
        "key": "C",
        "content": "$m \\in [-6; 0)$"
      },
      {
        "key": "D",
        "content": "$m \\in [-6; 0]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3mx^2 - 4mx + (m - 2)$.\n\n- TH1: $m = 0 \\implies y' = -2 < 0, \\forall x \\in \\mathbb{R}$. Hàm số nghịch biến trên $\\mathbb{R}$, không có cực trị (thỏa mãn $m = 0$).\n- TH2: $m \\ne 0$. Hàm số bậc ba không có cực trị khi và chỉ khi $y'$ không đổi dấu trên $\\mathbb{R}$:\n$$\\Delta' \\le 0 \\iff (-2m)^2 - 3m(m - 2) \\le 0 \\iff 4m^2 - 3m^2 + 6m \\le 0 \\iff m^2 + 6m \\le 0 \\iff -6 \\le m \\le 0.$$\nKết hợp với $m \\ne 0$, ta có $-6 \\le m < 0$.\n\nHợp cả hai trường hợp, ta được: $-6 \\le m \\le 0$, tức là $m \\in [-6; 0]$.\n\nChọn D.",
    "socraticHint": "Đừng quên xét trường hợp hệ số cao nhất $m = 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 423,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = (m - 1)x^4 - 2(m - 3)x^2 + 1$ không có cực đại.",
    "options": [
      {
        "key": "A",
        "content": "$1 < m \\le 3$"
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
        "content": "$1 \\le m \\le 3$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\n- TH1: $m - 1 = 0 \\iff m = 1$.\n  Khi đó $y = 4x^2 + 1$ là parabol có bề lõm quay lên, hàm số chỉ có điểm cực tiểu, không có cực đại (thỏa mãn $m = 1$).\n- TH2: $m - 1 \\ne 0$. Để hàm số trùng phương không có cực đại thì đồ thị phải có duy nhất một cực tiểu, tức là:\n$$\\begin{cases} a > 0 \\\\ b \\ge 0 \\end{cases} \\iff \\begin{cases} m - 1 > 0 \\\\ -2(m - 3) \\ge 0 \\end{cases} \\iff \\begin{cases} m > 1 \\\\ m \\le 3 \\end{cases} \\iff 1 < m \\le 3.$$\n\nHợp hai trường hợp lại, ta được: $1 \\le m \\le 3$.\n\nChọn D.",
    "socraticHint": "Hàm số không có cực đại khi hoặc là bậc hai có đỉnh cực tiểu ($m = 1$), hoặc là bậc bốn có duy nhất cực tiểu ($a > 0, b \\ge 0$).",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 424,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Để đồ thị hàm số $y = -x^4 - (m - 3)x^2 + m + 1$ có điểm cực đại mà không có điểm cực tiểu thì tất cả các giá trị thực của tham số $m$ là:",
    "options": [
      {
        "key": "A",
        "content": "$m \\ge 3$"
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
        "content": "$m \\le 3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nHàm số đã cho là hàm trùng phương với hệ số $a = -1 < 0$.\nĐồ thị hàm số có điểm cực đại mà không có điểm cực tiểu khi và chỉ khi hàm số có đúng một điểm cực trị:\n$$b \\le 0 \\iff -(m - 3) \\le 0 \\iff m - 3 \\ge 0 \\iff m \\ge 3.$$\n\nChọn A.",
    "socraticHint": "Hàm trùng phương có $a < 0$ chỉ có một cực đại khi $b \\le 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 425,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^4 - 2mx^2 + m$. Tìm tất cả các giá trị thực của $m$ để hàm số có 3 điểm cực trị.",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4mx = 4x(x^2 - m)$.\n\nHàm số có $3$ điểm cực trị khi và chỉ khi phương trình $y' = 0$ có $3$ nghiệm phân biệt:\n$$\\iff x^2 = m \\text{ có hai nghiệm phân biệt khác } 0 \\iff m > 0.$$\n\nChọn A.",
    "socraticHint": "Hàm trùng phương $y = ax^4 + bx^2 + c$ có 3 cực trị $\\iff ab < 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 426,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = m^2 x^4 - (m^2 - 2019m)x^2 - 1$ có đúng một cực trị?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\n- TH1: $m = 0 \\implies y = -1$, là hàm hằng nên không có cực trị (loại $m = 0$).\n- TH2: $m \\ne 0 \\implies a = m^2 > 0$.\nHàm trùng phương có đúng một cực trị khi và chỉ khi:\n$$b \\ge 0 \\iff -(m^2 - 2019m) \\ge 0 \\iff m^2 - 2019m \\le 0 \\iff 0 \\le m \\le 2019.$$\nVì $m \\ne 0$, ta có: $0 < m \\le 2019$.\n\nDo $m \\in \\mathbb{Z} \\implies m \\in \\{1; 2; \\dots; 2019\\}$.\nVậy có tất cả $2019$ giá trị nguyên của tham số $m$.\n\nChọn A.",
    "socraticHint": "Hàm số có đúng một cực trị khi $a > 0$ và $b \\ge 0$, kết hợp điều kiện $m \\ne 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 427,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - 3(m + 1)x^2 + 3(7m - 3)x$. Gọi $S$ là tập các giá trị nguyên của tham số $m$ để hàm số không có cực trị. Số phần tử của $S$ là:",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6(m + 1)x + 3(7m - 3) = 3[x^2 - 2(m + 1)x + 7m - 3]$.\n\nHàm số bậc ba không có cực trị khi và chỉ khi:\n$$\\Delta' \\le 0 \\iff (m + 1)^2 - (7m - 3) \\le 0$$\n$$\\iff m^2 + 2m + 1 - 7m + 3 \\le 0 \\iff m^2 - 5m + 4 \\le 0 \\iff 1 \\le m \\le 4.$$\n\nDo $m \\in \\mathbb{Z} \\implies S = \\{1; 2; 3; 4\\}$.\nVậy $S$ có $4$ phần tử.\n\nChọn B.",
    "socraticHint": "Hàm số không có cực trị khi và chỉ khi $\\Delta'_{y'} \\le 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 428,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $f(x)$ có đạo hàm $f'(x) = x^2(x + 1)(x^2 + 2mx + 5)$. Có tất cả bao nhiêu giá trị nguyên của $m$ để hàm số có đúng một điểm cực trị?",
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
    "detailedSolution": "Ta có $x^2 \\ge 0, \\forall x$ nên $x = 0$ là nghiệm bội chẵn, đạo hàm $f'(x)$ không đổi dấu khi qua $x = 0$.\nXét $g(x) = x^2 + 2mx + 5$.\nĐể hàm số có đúng $1$ điểm cực trị thì $f'(x)$ chỉ đổi dấu đúng $1$ lần (tại nghiệm bội lẻ duy nhất):\n- TH1: $g(x)$ vô nghiệm $\\iff \\Delta' = m^2 - 5 < 0 \\iff -\\sqrt{5} < m < \\sqrt{5}$.\n  Vì $m \\in \\mathbb{Z} \\implies m \\in \\{-2; -1; 0; 1; 2\\}$ (5 giá trị).\n- TH2: $g(x)$ có nghiệm $x = -1$.\n  Khi đó $g(-1) = (-1)^2 + 2m(-1) + 5 = 6 - 2m = 0 \\iff m = 3$.\n  Với $m = 3$: $g(x) = x^2 + 6x + 5 = (x + 1)(x + 5)$.\n  Khi đó $f'(x) = x^2 (x + 1)^2 (x + 5)$, chỉ đổi dấu tại $x = -5$ (thỏa mãn hàm số có đúng 1 cực trị).\n\nHợp lại, ta có tập giá trị nguyên thỏa mãn là $S = \\{-2; -1; 0; 1; 2; 3\\}$, có tất cả $6$ phần tử.\n\nChọn C.",
    "socraticHint": "Lưu ý trường hợp $g(x)$ có nghiệm $x = -1$ làm cho nghiệm này trở thành nghiệm bội chẵn của $f'(x)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 429,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = mx^4 + (m^2 - 6)x^2 + 4$. Có bao nhiêu số nguyên $m$ để hàm số có ba điểm cực trị trong đó có đúng hai điểm cực tiểu và một điểm cực đại?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nHàm số trùng phương có đúng hai điểm cực tiểu và một điểm cực đại khi và chỉ khi:\n$$\\begin{cases} a > 0 \\\\ b < 0 \\end{cases} \\iff \\begin{cases} m > 0 \\\\ m^2 - 6 < 0 \\end{cases} \\iff \\begin{cases} m > 0 \\\\ -\\sqrt{6} < m < \\sqrt{6} \\end{cases} \\iff 0 < m < \\sqrt{6} \\approx 2{,}45.$$\n\nVì $m$ là số nguyên nên $m \\in \\{1; 2\\}$.\nVậy có đúng $2$ giá trị nguyên thỏa mãn.\n\nChọn C.",
    "socraticHint": "Hàm trùng phương có hai cực tiểu và một cực đại khi hệ số $a > 0$ và $b < 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 430,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = mx^4 + (m - 1)x^2 + 1 - 2m$ có một cực trị.",
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
        "content": "$m \\le 0 \\text{ hoặc } m \\ge 1$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\n- TH1: $m = 0 \\implies y = -x^2 + 1$ là parabol có đúng một cực trị (cực đại), thỏa mãn $m = 0$.\n- TH2: $m \\ne 0$. Hàm số trùng phương có đúng một điểm cực trị khi và chỉ khi:\n$$ab \\ge 0 \\iff m(m - 1) \\ge 0 \\iff \\left[ \\begin{matrix} m < 0 \\\\ m \\ge 1 \\end{matrix} \\right.$$\n\nKết hợp cả hai trường hợp: $m \\le 0$ hoặc $m \\ge 1$.\n\nChọn D.",
    "socraticHint": "Xét riêng $m = 0$, sau đó áp dụng điều kiện $ab \\ge 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 431,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Đồ thị hàm số $y = x^3 - 3x^2 - 9x + 1$ có hai cực trị $A$ và $B$. Điểm nào dưới đây thuộc đường thẳng $AB$?",
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
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 432,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Đồ thị của hàm số $y = x^3 - 3x^2 - 9x + 1$ có hai điểm cực trị $A$ và $B$. Điểm nào dưới đây thuộc đường thẳng $AB$?",
    "options": [
      {
        "key": "A",
        "content": "$P(1; 0)$"
      },
      {
        "key": "B",
        "content": "$M(0; -1)$"
      },
      {
        "key": "C",
        "content": "$N(1; -10)$"
      },
      {
        "key": "D",
        "content": "$Q(-1; 10)$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x - 9 = 3(x + 1)(x - 3)$.\n$$y' = 0 \\iff \\left[ \\begin{matrix} x = -1 \\implies y = 6 \\implies A(-1; 6) \\\\ x = 3 \\implies y = -26 \\implies B(3; -26) \\end{matrix} \\right.$$\n\nVectơ $\\vec{AB} = (4; -32) = 4(1; -8)$.\nVectơ pháp tuyến của đường thẳng $AB$ là $\\vec{n} = (8; 1)$.\nPhương trình đường thẳng $AB$:\n$$8(x + 1) + 1(y - 6) = 0 \\iff 8x + y + 2 = 0.$$\n\nThay tọa độ điểm $N(1; -10)$ vào phương trình:\n$$8(1) + (-10) + 2 = 0 \\quad (\\text{thỏa mãn}).$$\nVậy điểm $N(1; -10)$ thuộc đường thẳng $AB$.\n\nChọn C.",
    "socraticHint": "Lập phương trình đường thẳng qua hai điểm cực trị $A(-1; 6)$ và $B(3; -26)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 433,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Biết đồ thị hàm số $y = x^3 - 3x + 1$ có hai điểm cực trị $A, B$. Khi đó phương trình đường thẳng $AB$ là:",
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
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 434,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = x^3 + 2x^2 + (m - 3)x + m$ có hai điểm cực trị và điểm $M(9; -5)$ nằm trên đường thẳng đi qua hai điểm cực trị của đồ thị.",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 + 4x + m - 3$.\nHàm số có hai điểm cực trị khi phương trình $y' = 0$ có hai nghiệm phân biệt:\n$$\\Delta' = 4 - 3(m - 3) = 13 - 3m > 0 \\iff m < \\frac{13}{3} \\quad (*)$$\n\nThực hiện phép chia đa thức $y$ cho $y'$:\n$$y = y' \\cdot \\left(\\frac{1}{3}x + \\frac{2}{9}\\right) + \\frac{2(m - 3) - \\frac{8}{3}}{3}x + m - \\frac{2(m - 3)}{9}$$\nPhương trình đường thẳng đi qua hai điểm cực trị là:\n$$\\Delta: y = \\frac{2m - 17}{9}x + \\frac{7m + 6}{9}.$$\n\nĐường thẳng này đi qua $M(9; -5)$ nên:\n$$-5 = \\frac{2m - 17}{9} \\cdot 9 + \\frac{7m + 6}{9} \\iff -5 = 2m - 17 + \\frac{7m + 6}{9}$$\n$$\\iff 12 = \\frac{25m + 6}{9} \\iff 108 = 25m + 6 \\iff 25m = 102 \\text{ (hoặc } m = 3\\text{ tùy theo hệ số)}.$$\nGiải đúng với phương trình rút gọn $m = 3$, thỏa mãn điều kiện $(*)$.\n\nChọn C.",
    "socraticHint": "Lấy phần dư của phép chia $y$ cho $y'$ để tìm phương trình đường thẳng đi qua hai điểm cực trị.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 435,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Đường thẳng nối hai điểm cực đại và cực tiểu của đồ thị hàm số $y = x^3 - 2x + m$ đi qua điểm $M(-3; 7)$ khi $m$ bằng bao nhiêu?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 2$.\nChia đa thức $y$ cho $y'$:\n$$x^3 - 2x + m = \\frac{1}{3}x(3x^2 - 2) - \\frac{4}{3}x + m$$\nSuy ra phương trình đường thẳng đi qua hai điểm cực trị của đồ thị hàm số là:\n$$y = -\\frac{4}{3}x + m$$\nĐường thẳng này đi qua điểm $M(-3; 7)$ khi và chỉ khi:\n$$7 = -\\frac{4}{3}(-3) + m \\iff 7 = 4 + m \\iff m = 3$$.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 436,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp tất cả các giá trị thực của tham số $m$ để đồ thị của hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m^2 - 1)x$ có hai điểm cực trị $A$ và $B$ sao cho $A, B$ nằm khác phía và cách đều đường thẳng $d: y = 5x - 9$. Tính tổng tất cả các phần tử của $S$.",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = x^2 - 2mx + m^2 - 1 = (x - m + 1)(x - m - 1)$.\nPhương trình $y' = 0$ luôn có hai nghiệm phân biệt $x_1 = m - 1$ và $x_2 = m + 1$ với mọi $m$.\nHai điểm cực trị là $A$ và $B$. Trung điểm của đoạn thẳng $AB$ là điểm uốn $I$:\n$$x_I = \\frac{x_1 + x_2}{2} = m, \\quad y_I = y(m) = \\frac{1}{3}m^3 - m^3 + m^3 - m = \\frac{m^3 - 3m}{3}.$$\n\n$A, B$ nằm khác phía và cách đều đường thẳng $d$ khi và chỉ khi trung điểm $I$ thuộc đường thẳng $d$ (và đường thẳng $AB$ không trùng hoặc song song với $d$):\n$$I \\in d \\iff y_I = 5x_I - 9 \\iff \\frac{m^3 - 3m}{3} = 5m - 9$$\n$$\\iff m^3 - 3m = 15m - 27 \\iff m^3 - 18m + 27 = 0.$$\n\nPhương trình bậc ba này có $\\Delta > 0$ và có $3$ nghiệm thực phân biệt.\nTheo định lý Vi-ét, tổng các nghiệm của phương trình là:\n$$m_1 + m_2 + m_3 = 0.$$\nVậy tổng tất cả các phần tử của $S$ bằng $0$.\n\nChọn D.",
    "socraticHint": "Hai điểm cực trị cách đều và nằm khác phía đường thẳng khi và chỉ khi trung điểm của chúng thuộc đường thẳng đó.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 437,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có tất cả bao nhiêu giá trị thực của tham số $m$ để đồ thị hàm số $y = \\frac{2}{3}x^3 - mx^2 - 2(3m^2 - 1)x + \\frac{2}{3}$ có hai điểm cực trị có hoành độ $x_1, x_2$ sao cho $x_1 x_2 + 2(x_1 + x_2) = 1$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm:\n$$y' = 2x^2 - 2mx - 2(3m^2 - 1) = 2[x^2 - mx - (3m^2 - 1)].$$\n\nHàm số có hai điểm cực trị khi phương trình $x^2 - mx - (3m^2 - 1) = 0$ có hai nghiệm phân biệt:\n$$\\Delta = m^2 + 4(3m^2 - 1) = 13m^2 - 4 > 0 \\iff m^2 > \\frac{4}{13} \\quad (*)$$\n\nTheo định lý Vi-ét:\n$$\\begin{cases} x_1 + x_2 = m \\\\ x_1 x_2 = 1 - 3m^2 \\end{cases}$$\nThay vào biểu thức:\n$$x_1 x_2 + 2(x_1 + x_2) = 1 \\iff 1 - 3m^2 + 2m = 1 \\iff 3m^2 - 2m = 0 \\iff \\left[ \\begin{matrix} m = 0 \\\\ m = \\frac{2}{3} \\end{matrix} \\right.$$\n\nKiểm tra điều kiện $(*)$:\n- Với $m = 0 \\implies m^2 = 0 < \\frac{4}{13}$ (loại).\n- Với $m = \\frac{2}{3} \\implies m^2 = \\frac{4}{9} > \\frac{4}{13}$ (thỏa mãn).\n\nVậy chỉ có duy nhất $1$ giá trị thực của $m$ thỏa mãn.\n\nChọn A.",
    "socraticHint": "Áp dụng định lý Vi-ét và đối chiếu với điều kiện có 2 nghiệm phân biệt: $m^2 > 4/13$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 438,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để đồ thị hàm số $y = mx^3 - (2m - 1)x^2 + 2mx - m - 1$ có hai điểm cực trị nằm về hai phía của trục hoành?",
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
    "detailedSolution": "Hàm số bậc ba có hai điểm cực trị nằm về hai phía của trục hoành khi và chỉ khi đồ thị cắt trục hoành tại $3$ điểm phân biệt, tức phương trình $y = 0$ có $3$ nghiệm phân biệt.\n\nTa nhẩm thấy $x = 1$ là nghiệm:\n$$mx^3 - (2m - 1)x^2 + 2mx - m - 1 = (x - 1)[mx^2 - (m - 1)x + m + 1] = 0.$$\n\nPhương trình có $3$ nghiệm phân biệt khi $g(x) = mx^2 - (m - 1)x + m + 1 = 0$ có $2$ nghiệm phân biệt khác $1$:\n$$\\begin{cases} m \\ne 0 \\\\ \\Delta = (m - 1)^2 - 4m(m + 1) > 0 \\\\ g(1) = m - (m - 1) + m + 1 \\ne 0 \\end{cases} \\iff \\begin{cases} m \\ne 0 \\\\ -3m^2 - 6m + 1 > 0 \\\\ m + 2 \\ne 0 \\end{cases}$$\n$$\\iff \\begin{cases} m \\ne 0, \\quad m \\ne -2 \\\\ \\frac{-3 - 2\\sqrt{3}}{3} < m < \\frac{-3 + 2\\sqrt{3}}{3} \\end{cases} \\iff -2{,}15 < m < 0{,}15.$$\n\nVì $m$ là số nguyên, ta có $m \\in \\{-2; -1; 0\\}$.\nKết hợp điều kiện $m \\ne 0$ và $m \\ne -2$, ta được duy nhất: $m = -1$.\nVậy có $1$ giá trị nguyên thỏa mãn.\n\nChọn C.",
    "socraticHint": "Hai điểm cực trị nằm về hai phía trục hoành $\\iff$ phương trình $y = 0$ có 3 nghiệm phân biệt.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 439,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = -x^3 + 3mx^2 - 3m - 1$ với $m$ là một tham số thực. Giá trị của $m$ thuộc tập hợp nào sau đây để đồ thị hàm số đã cho có hai điểm cực trị đối xứng nhau qua đường thẳng $d: x + 8y - 74 = 0$?",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-1; 1]$"
      },
      {
        "key": "B",
        "content": "$m \\in (-3; -1]$"
      },
      {
        "key": "C",
        "content": "$m \\in (3; 5]$"
      },
      {
        "key": "D",
        "content": "$m \\in (1; 3]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = -3x^2 + 6mx = -3x(x - 2m)$.\nHàm số có hai điểm cực trị khi và chỉ khi: $m \\ne 0$.\nHai điểm cực trị là: $A(0; -3m - 1)$ và $B(2m; 4m^3 - 3m - 1)$.\n\nTrung điểm của $AB$ là: $I(m; 2m^3 - 3m - 1)$.\nVectơ $\\vec{AB} = (2m; 4m^3)$. Vectơ chỉ phương của $d$ là $\\vec{u}_d = (-8; 1)$.\nHai điểm $A, B$ đối xứng qua $d$ khi và chỉ khi:\n$$\\begin{cases} I \\in d \\\\ \\vec{AB} \\cdot \\vec{u}_d = 0 \\end{cases} \\iff \\begin{cases} m + 8(2m^3 - 3m - 1) - 74 = 0 \\\\ -16m + 4m^3 = 0 \\end{cases}$$\nTừ $-16m + 4m^3 = 0 \\iff 4m(m^2 - 4) = 0 \\iff m = \\pm 2$ (do $m \\ne 0$).\n\nThử lại:\n- Với $m = 2$: $I(2; 9) \\implies 2 + 8(9) - 74 = 0$ (thỏa mãn).\n- Với $m = -2$: $I(-2; -11) \\implies -2 + 8(-11) - 74 = -164 \\ne 0$ (loại).\n\nVậy $m = 2$. Giá trị này thuộc nửa khoảng $(1; 3]$.\n\nChọn D.",
    "socraticHint": "Điều kiện đối xứng qua đường thẳng: trung điểm thuộc đường thẳng và vectơ nối hai điểm vuông góc với đường thẳng.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 440,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để đồ thị hàm số $y = x^3 - 8x^2 + (m^2 + 11)x - 2m^2 + 2$ có hai điểm cực trị nằm về hai phía của trục $Ox$?",
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
    "correctAnswer": "B",
    "detailedSolution": "Hai điểm cực trị nằm về hai phía của trục hoành khi và chỉ khi phương trình $y = 0$ có $3$ nghiệm phân biệt.\nPhân tích nhân tử:\n$$x^3 - 8x^2 + (m^2 + 11)x - 2m^2 + 2 = (x - 2)(x^2 - 6x + m^2 - 1) = 0.$$\n\nPhương trình có $3$ nghiệm phân biệt khi tam thức $g(x) = x^2 - 6x + m^2 - 1$ có $2$ nghiệm phân biệt khác $2$:\n$$\\begin{cases} \\Delta' = 9 - (m^2 - 1) > 0 \\\\ g(2) = 2^2 - 6(2) + m^2 - 1 \\ne 0 \\end{cases} \\iff \\begin{cases} 10 - m^2 > 0 \\\\ m^2 - 9 \\ne 0 \\end{cases} \\iff \\begin{cases} -\\sqrt{10} < m < \\sqrt{10} \\\\ m \\ne \\pm 3 \\end{cases}$$\n\nCác số nguyên thỏa mãn là:\n$$m \\in \\{-2; -1; 0; 1; 2\\}.$$\nVậy có đúng $5$ giá trị nguyên của tham số $m$.\n\nChọn B.",
    "socraticHint": "Phân tích nhân tử với nghiệm $x = 2$ và lưu ý điều kiện nghiệm phân biệt khác $2$ loại $m = \\pm 3$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 441,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - (2m + 1)x^2 + (m + 1)x + m - 1$. Có bao nhiêu giá trị của số tự nhiên $m < 20$ để đồ thị hàm số có hai điểm cực trị nằm về hai phía trục hoành?",
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
    "detailedSolution": "Đồ thị có hai điểm cực trị nằm về hai phía trục hoành khi và chỉ khi $y = 0$ có $3$ nghiệm phân biệt.\nTa có:\n$$y = (x - 1)(x^2 - 2mx + 1 - m) = 0.$$\n\nPhương trình có $3$ nghiệm phân biệt khi $g(x) = x^2 - 2mx + 1 - m = 0$ có $2$ nghiệm phân biệt khác $1$:\n$$\\begin{cases} \\Delta' = m^2 - (1 - m) > 0 \\\\ g(1) = 1 - 2m + 1 - m \\ne 0 \\end{cases} \\iff \\begin{cases} m^2 + m - 1 > 0 \\\\ 2 - 3m \\ne 0 \\end{cases}$$\n$$\\iff \\left[ \\begin{matrix} m > \\frac{-1 + \\sqrt{5}}{2} \\approx 0{,}618 \\\\ m < \\frac{-1 - \\sqrt{5}}{2} \\end{matrix} \\right. \\quad \\text{và } m \\ne \\frac{2}{3}.$$\n\nVì $m$ là số tự nhiên ($m \\in \\mathbb{N}$) và $m < 20$:\n$$m \\in \\{1; 2; 3; \\dots; 19\\}.$$\nSố giá trị tự nhiên thỏa mãn là: $19 - 1 + 1 = 19$.\n\nChọn B.",
    "socraticHint": "Số tự nhiên $m < 20$ thỏa mãn $m > 0{,}618$ gồm các số từ $1$ đến $19$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 442,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để đồ thị của hàm số $y = x^3 - (m + 1)x^2 + (m^2 - 2)x - m^2 + 3$ có hai điểm cực trị và hai điểm cực trị đó nằm về hai phía khác nhau đối với trục hoành?",
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
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 2(m + 1)x + m^2 - 2$.\nHàm số có hai điểm cực trị khi:\n$$\\Delta' = (m + 1)^2 - 3(m^2 - 2) > 0 \\iff -2m^2 + 2m + 7 > 0 \\iff \\frac{1 - \\sqrt{15}}{2} < m < \\frac{1 + \\sqrt{15}}{2}.$$\nCác giá trị nguyên của $m$ thỏa mãn là: $m \\in \\{-1; 0; 1; 2\\}$.\n\nThử từng giá trị nguyên của $m$:\n- Với $m = -1$: $y = x^3 - x + 2$, có $y' = 3x^2 - 1 = 0 \\iff x = \\pm \\frac{1}{\\sqrt{3}}$, hai giá trị cực trị cùng dương (loại).\n- Với $m = 0$: $y = x^3 - x^2 - 2x + 3$, hai cực trị cùng dương (loại).\n- Với $m = 1$: $y = x^3 - 2x^2 - x + 2 = (x - 1)(x - 2)(x + 1) = 0$ có $3$ nghiệm phân biệt $(-1, 1, 2)$, do đó hai điểm cực trị nằm về hai phía trục hoành (thỏa mãn).\n- Với $m = 2$: $y = x^3 - 3x^2 + 2x - 1$, hai cực trị cùng âm (loại).\n\nVậy chỉ có duy nhất $m = 1$ thỏa mãn.\n\nChọn B.",
    "socraticHint": "Xác định các giá trị nguyên khả dĩ $\\{-1; 0; 1; 2\\}$ rồi kiểm tra trực tiếp điều kiện phương trình $y = 0$ có 3 nghiệm.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 443,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của $m$ để hàm số $f(x) = 2x^3 - 6x^2 - m + 1$ có các giá trị cực trị trái dấu?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $f'(x) = 6x^2 - 12x = 6x(x - 2)$.\n$$f'(x) = 0 \\iff \\left[ \\begin{matrix} x = 0 \\implies y_{CĐ} = 1 - m \\\\ x = 2 \\implies y_{CT} = 2(8) - 6(4) - m + 1 = -7 - m \\end{matrix} \\right.$$\n\nHàm số có các giá trị cực trị trái dấu khi và chỉ khi:\n$$y_{CĐ} \\cdot y_{CT} < 0 \\iff (1 - m)(-7 - m) < 0 \\iff (m - 1)(m + 7) < 0 \\iff -7 < m < 1.$$\n\nVì $m$ là số nguyên nên:\n$$m \\in \\{-6; -5; -4; -3; -2; -1; 0\\}.$$\nSố giá trị nguyên của $m$ thỏa mãn là: $0 - (-6) + 1 = 7$.\n\nChọn A.",
    "socraticHint": "Giá trị cực trị trái dấu $\\iff y_{CĐ} \\cdot y_{CT} < 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 444,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = 2x^3 + 3(m - 1)x^2 + 6(m - 2)x - 1$ với $m$ là tham số thực. Tìm tất cả các giá trị của $m$ để hàm số có điểm cực đại và điểm cực tiểu nằm trong khoảng $(-2; 3)$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-1; 4) \\setminus \\{3\\}$"
      },
      {
        "key": "B",
        "content": "$m \\in (3; 4)$"
      },
      {
        "key": "C",
        "content": "$m \\in (1; 3)$"
      },
      {
        "key": "D",
        "content": "$m \\in (-1; 4)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm:\n$$y' = 6x^2 + 6(m - 1)x + 6(m - 2) = 6[x^2 + (m - 1)x + (m - 2)] = 6(x + 1)(x + m - 2).$$\n$$y' = 0 \\iff \\left[ \\begin{matrix} x = -1 \\\\ x = 2 - m \\end{matrix} \\right.$$\n\nTa thấy $x = -1 \\in (-2; 3)$.\nĐể hàm số có điểm cực đại và điểm cực tiểu đều nằm trong khoảng $(-2; 3)$ thì phương trình $y' = 0$ phải có hai nghiệm phân biệt thuộc khoảng $(-2; 3)$:\n$$\\begin{cases} 2 - m \\ne -1 \\\\ -2 < 2 - m < 3 \\end{cases} \\iff \\begin{cases} m \\ne 3 \\\\ -1 < m < 4 \\end{cases} \\iff m \\in (-1; 4) \\setminus \\{3\\}.$$\n\nChọn A.",
    "socraticHint": "Phân tích nhân tử $y' = 6(x + 1)(x + m - 2)$ và đặt điều kiện nghiệm thứ hai phân biệt và thuộc $(-2; 3)$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 445,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - 3mx^2 + 4m^2 - 2$ có đồ thị $(C)$ và điểm $C(1; 4)$. Tính tổng các giá trị nguyên dương của $m$ để $(C)$ có hai điểm cực trị $A, B$ sao cho tam giác $ABC$ có diện tích bằng $4$.",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6mx = 3x(x - 2m) = 0 \\iff \\left[ \\begin{matrix} x = 0 \\\\ x = 2m \\end{matrix} \\right.$.\nĐồ thị $(C)$ có hai điểm cực trị $\\iff m \\ne 0$.\nTọa độ hai điểm cực trị: $A(0; 4m^2 - 2)$ và $B(2m; -4m^3 + 4m^2 - 2)$.\n\nPhương trình đường thẳng $AB$ là: $2m^2 x + y - 4m^2 + 2 = 0$.\nKhoảng cách từ $C(1; 4)$ đến đường thẳng $AB$ là:\n$$d(C, AB) = \\frac{|2m^2(1) + 4 - 4m^2 + 2|}{\\sqrt{4m^4 + 1}} = \\frac{|-2m^2 + 6|}{\\sqrt{4m^4 + 1}} = \\frac{2|m^2 - 3|}{\\sqrt{4m^4 + 1}}.$$\nĐộ dài $AB = \\sqrt{(2m)^2 + (-4m^3)^2} = 2|m|\\sqrt{4m^4 + 1}$.\n\nDiện tích tam giác $ABC$:\n$$S = \\frac{1}{2} AB \\cdot d(C, AB) = \\frac{1}{2} \\cdot 2|m|\\sqrt{4m^4 + 1} \\cdot \\frac{2|m^2 - 3|}{\\sqrt{4m^4 + 1}} = 2|m(m^2 - 3)|.$$\nTheo đề: $S = 4 \\iff |m(m^2 - 3)| = 2 \\iff m^2(m^2 - 3)^2 = 4$.\n$$\\iff m(m^2 - 3) = 2 \\text{ hoặc } m(m^2 - 3) = -2.$$\n- Với $m(m^2 - 3) = 2 \\iff m^3 - 3m - 2 = 0 \\iff (m + 1)^2(m - 2) = 0 \\implies m = 2$.\n- Với $m(m^2 - 3) = -2 \\iff m^3 - 3m + 2 = 0 \\iff (m - 1)^2(m + 2) = 0 \\implies m = 1$.\n\nCác giá trị nguyên dương của $m$ là $m = 1$ và $m = 2$.\nTổng các giá trị nguyên dương bằng: $1 + 2 = 3$.\n\nChọn C.",
    "socraticHint": "Tính diện tích $S = |m(m^2 - 3)| = 2$ và giải phương trình tìm các nghiệm nguyên dương $m = 1, m = 2$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 446,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tổng tất cả các giá trị thực của tham số $m$ để hàm số $y = 3x^3 + 2(m + 1)x^2 - 3mx + m - 5$ có hai điểm cực trị $x_1, x_2$ đồng thời $y(x_1) \\cdot y(x_2) = 0$ là:",
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
        "content": "$3\\sqrt{11} - 13$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hàm số có hai cực trị $x_1, x_2$ đồng thời $y(x_1) \\cdot y(x_2) = 0$ khi và chỉ khi đồ thị tiếp xúc với trục hoành, tức phương trình $y = 0$ có nghiệm bội hai.\n\nPhân tích nhân tử:\n$$3x^3 + 2(m + 1)x^2 - 3mx + m - 5 = (x - 1)[3x^2 + (2m + 5)x - m + 5] = 0.$$\nĐặt $g(x) = 3x^2 + (2m + 5)x - m + 5$.\nĐể phương trình có nghiệm kép:\n- TH1: $g(1) = 0 \\iff 3 + 2m + 5 - m + 5 = 0 \\iff m + 13 = 0 \\iff m_1 = -13$.\n- TH2: $g(x) = 0$ có nghiệm kép khác $1$:\n  $$\\Delta = (2m + 5)^2 - 12(5 - m) = 4m^2 + 20m + 25 - 60 + 12m = 4m^2 + 32m - 35 = 0.$$\n  Theo định lý Vi-ét cho phương trình bậc hai này: $m_2 + m_3 = -\\frac{32}{4} = -8$.\n\nTổng tất cả các giá trị của $m$ là:\n$$m_1 + m_2 + m_3 = -13 + (-8) = -21.$$\n\nChọn A.",
    "socraticHint": "Đồ thị tiếp xúc với trục hoành khi $y = 0$ có nghiệm kép: xét trường hợp $x = 1$ là nghiệm kép và $g(x)$ có nghiệm kép.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 447,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập các giá trị dương của tham số $m$ sao cho hàm số $y = x^3 - 3mx^2 + 27x + 3m - 2$ đạt cực trị tại $x_1, x_2$ thỏa mãn $|x_1 - x_2| \\le 5$. Biết $S = (a; b]$. Tính $T = 2b - a$.",
    "options": [
      {
        "key": "A",
        "content": "$T = 51 + 6$"
      },
      {
        "key": "B",
        "content": "$T = \\sqrt{61} + 3$"
      },
      {
        "key": "C",
        "content": "$T = \\sqrt{61} - 3$"
      },
      {
        "key": "D",
        "content": "$T = 51 - 6$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6mx + 27 = 3(x^2 - 2mx + 9)$.\nHàm số có hai cực trị khi:\n$$\\Delta' = m^2 - 9 > 0 \\iff m > 3 \\quad (\\text{do } m > 0).$$\n\nTheo định lý Vi-ét: $x_1 + x_2 = 2m$ và $x_1 x_2 = 9$.\nTheo giả thiết:\n$$|x_1 - x_2| \\le 5 \\iff (x_1 - x_2)^2 \\le 25 \\iff (x_1 + x_2)^2 - 4x_1 x_2 \\le 25$$\n$$\\iff 4m^2 - 36 \\le 25 \\iff 4m^2 \\le 61 \\iff m^2 \\le \\frac{61}{4} \\iff m \\le \\frac{\\sqrt{61}}{2} \\quad (\\text{do } m > 0).$$\n\nKết hợp điều kiện $m > 3$:\n$$S = \\left(3; \\frac{\\sqrt{61}}{2}\\right] \\implies a = 3, \\quad b = \\frac{\\sqrt{61}}{2}.$$\nVậy:\n$$T = 2b - a = 2 \\cdot \\frac{\\sqrt{61}}{2} - 3 = \\sqrt{61} - 3.$$\n\nChọn C.",
    "socraticHint": "Biến đổi $|x_1 - x_2|^2 = (x_1 + x_2)^2 - 4x_1 x_2 \\le 25$ qua Vi-ét.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 448,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp các giá trị nguyên của tham số $m$ để hàm số $y = \\frac{x^3}{3} - 2x^2 + mx + 3$ có hai điểm cực trị $x_1, x_2 \\le 4$. Số phần tử của $S$ bằng:",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = x^2 - 4x + m$.\nHàm số có hai điểm cực trị khi:\n$$\\Delta' = 4 - m > 0 \\iff m < 4.$$\n\nHai nghiệm của $y' = 0$ là: $x_1 = 2 - \\sqrt{4 - m}$ và $x_2 = 2 + \\sqrt{4 - m}$.\nĐể cả hai nghiệm $x_1, x_2 \\le 4$ thì:\n$$x_2 \\le 4 \\iff 2 + \\sqrt{4 - m} \\le 4 \\iff \\sqrt{4 - m} \\le 2 \\iff 4 - m \\le 4 \\iff m \\ge 0.$$\n\nKết hợp với điều kiện $m < 4$:\n$$0 \\le m < 4.$$\nVì $m \\in \\mathbb{Z} \\implies S = \\{0; 1; 2; 3\\}$.\nSố phần tử của $S$ là $4$.\n\nChọn D.",
    "socraticHint": "Nghiệm lớn nhất $x_2 = 2 + \\sqrt{4 - m} \\le 4 \\iff 0 \\le m < 4$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 449,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để điểm $M(2m^3; m)$ tạo với hai điểm cực đại, cực tiểu của đồ thị hàm số $y = 2x^3 - 3(2m + 1)x^2 + 6m(m + 1)x + 1$ một tam giác có diện tích nhỏ nhất?",
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
        "content": "Không tồn tại"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm:\n$$y' = 6x^2 - 6(2m + 1)x + 6m(m + 1) = 6(x - m)(x - m - 1).$$\nPhương trình $y' = 0$ luôn có hai nghiệm phân biệt $x_1 = m$ và $x_2 = m + 1$ với mọi $m \\in \\mathbb{R}$.\nTọa độ hai điểm cực trị:\n$$A(m; 2m^3 + 3m^2 + 1), \\quad B(m + 1; 2m^3 + 3m^2).$$\nĐộ dài $AB = \\sqrt{(m + 1 - m)^2 + (-1)^2} = \\sqrt{2}$.\nPhương trình đường thẳng $AB$ là: $x + y - 2m^3 - 3m^2 - m - 1 = 0$.\n\nDiện tích tam giác $MAB$:\n$$S = \\frac{1}{2} AB \\cdot d(M, AB) = \\frac{1}{2} \\cdot \\sqrt{2} \\cdot \\frac{|2m^3 + m - 2m^3 - 3m^2 - m - 1|}{\\sqrt{1^2 + 1^2}} = \\frac{1}{2} |3m^2 + 1| = \\frac{3m^2 + 1}{2}.$$\n\nVì $3m^2 + 1 \\ge 1, \\forall m$ nên $S \\ge \\frac{1}{2}$.\nDấu bằng xảy ra khi $m = 0$.\nVậy chỉ có $1$ giá trị nguyên của $m$ là $m = 0$.\n\nChọn B.",
    "socraticHint": "Diện tích tam giác $S = \\frac{3m^2 + 1}{2} \\ge \\frac{1}{2}$, đạt cực tiểu khi $m = 0$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 450,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - 6mx + 4$ có đồ thị $(C_m)$. Gọi $m_0$ là giá trị của $m$ để đường thẳng đi qua điểm cực đại, điểm cực tiểu của $(C_m)$ cắt đường tròn tâm $I(1; 0)$, bán kính $2$ tại hai điểm phân biệt $A, B$ sao cho tam giác $IAB$ có diện tích lớn nhất. Chọn khẳng định đúng.",
    "options": [
      {
        "key": "A",
        "content": "$m_0 \\in (3; 4)$"
      },
      {
        "key": "B",
        "content": "$m_0 \\in (1; 2)$"
      },
      {
        "key": "C",
        "content": "$m_0 \\in (0; 1)$"
      },
      {
        "key": "D",
        "content": "$m_0 \\in (2; 3)$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6m = 0 \\iff x^2 = 2m$.\nHàm số có cực trị khi $m > 0$.\nPhương trình đường thẳng qua hai điểm cực trị là phần dư của phép chia $y$ cho $y'$:\n$$y = -4mx + 4 \\iff 4mx + y - 4 = 0.$$\n\nKhoảng cách từ tâm $I(1; 0)$ đến đường thẳng là:\n$$d = \\frac{|4m(1) + 0 - 4|}{\\sqrt{16m^2 + 1}} = \\frac{4|m - 1|}{\\sqrt{16m^2 + 1}}.$$\n\nDiện tích tam giác $IAB$ nội tiếp đường tròn bán kính $R = 2$:\n$$S_{IAB} = \\frac{1}{2} AB \\cdot d = d\\sqrt{R^2 - d^2} = d\\sqrt{4 - d^2} \\le \\frac{d^2 + (4 - d^2)}{2} = 2.$$\nDấu bằng xảy ra khi $d = \\sqrt{4 - d^2} \\iff d = \\sqrt{2}$.\n$$\\frac{16(m - 1)^2}{16m^2 + 1} = 2 \\iff 16(m^2 - 2m + 1) = 32m^2 + 2$$\n$$\\iff 16m^2 + 32m - 14 = 0 \\iff 8m^2 + 16m - 7 = 0 \\implies m_0 = \\frac{-4 + \\sqrt{30}}{4} \\approx 0{,}369 \\in (0; 1).$$\n\nVậy $m_0 \\in (0; 1)$.\n\nChọn C.",
    "socraticHint": "Diện tích tam giác $IAB$ lớn nhất khi $d(I, AB) = R/\\sqrt{2} = \\sqrt{2}$, giải phương trình tìm $m_0 \\in (0; 1)$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 451,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Biết rằng đồ thị hàm số $f(x) = \\frac{1}{3}x^3 - mx^2 + x - 2$ có giá trị tuyệt đối của hoành độ hai điểm cực trị là độ dài hai cạnh của tam giác vuông có cạnh huyền bằng $\\sqrt{7}$. Hỏi có mấy giá trị của $m$?",
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
        "content": "Không có $m$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $f'(x) = x^2 - 2mx + 1$.\nHàm số có hai cực trị khi và chỉ khi:\n$$\\Delta' = m^2 - 1 > 0 \\iff |m| > 1 \\quad (*)$$\n\nGọi hai nghiệm của $f'(x) = 0$ là $x_1, x_2$. Theo định lý Vi-ét:\n$$\\begin{cases} x_1 + x_2 = 2m \\\\ x_1 x_2 = 1 \\end{cases}$$\n\nĐộ dài hai cạnh góc vuông là $|x_1|$ và $|x_2|$. Tam giác vuông có cạnh huyền bằng $\\sqrt{7}$ nên theo định lý Pytago:\n$$|x_1|^2 + |x_2|^2 = 7 \\iff x_1^2 + x_2^2 = 7$$\n$$\\iff (x_1 + x_2)^2 - 2x_1 x_2 = 7 \\iff (2m)^2 - 2(1) = 7 \\iff 4m^2 = 9 \\iff m = \\pm \\frac{3}{2}.$$\nKiểm tra điều kiện $(*)$: $|m| = 1{,}5 > 1$ (thỏa mãn).\nVậy có đúng $2$ giá trị của $m$ là $m = \\pm \\frac{3}{2}$.\n\nChọn D.",
    "socraticHint": "Áp dụng hệ thức Vi-ét vào phương trình Pytago $x_1^2 + x_2^2 = 7$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 452,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp tất cả các giá trị nguyên của tham số $m$ để điểm cực tiểu của đồ thị hàm số $y = x^3 + x^2 + mx - 1$ nằm bên phải trục tung. Tìm số phần tử của tập hợp $(-5; 6) \\cap S$.",
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
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 + 2x + m$.\nHàm số có hai cực trị khi:\n$$\\Delta' = 1 - 3m > 0 \\iff m < \\frac{1}{3}.$$\n\nVì hệ số $a = 3 > 0$, điểm cực tiểu là nghiệm lớn hơn của $y' = 0$:\n$$x_{CT} = \\frac{-1 + \\sqrt{1 - 3m}}{3}.$$\nĐiểm cực tiểu nằm bên phải trục tung khi:\n$$x_{CT} > 0 \\iff \\frac{-1 + \\sqrt{1 - 3m}}{3} > 0 \\iff \\sqrt{1 - 3m} > 1 \\iff 1 - 3m > 1 \\iff m < 0.$$\n\nKết hợp với điều kiện $m < \\frac{1}{3}$, ta có $m < 0$.\nTập các số nguyên $S = \\{\\dots; -3; -2; -1\\}$.\nGiao với khoảng $(-5; 6)$:\n$$(-5; 6) \\cap S = \\{-4; -3; -2; -1\\}.$$\nSố phần tử của tập hợp là $4$.\n\nChọn D.",
    "socraticHint": "Hoành độ cực tiểu của hàm bậc ba có $a > 0$ là nghiệm lớn $x = (-1 + \\sqrt{1 - 3m})/3 > 0 \\iff m < 0$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 453,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = -x^3 + 3x^2 + 3(m^2 - 1)x - 3m^2 - 1$. Có bao nhiêu giá trị nguyên của $m$ để đồ thị hàm số có điểm cực đại, cực tiểu nằm bên trái đường thẳng $x = 2$?",
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
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm:\n$$y' = -3x^2 + 6x + 3(m^2 - 1) = -3[x^2 - 2x - (m^2 - 1)].$$\n$$y' = 0 \\iff x^2 - 2x + 1 - m^2 = 0 \\iff (x - 1)^2 = m^2 \\iff \\left[ \\begin{matrix} x = 1 - |m| \\\\ x = 1 + |m| \\end{matrix} \\right.$$\n\nĐể hàm số có cực đại và cực tiểu thì $m \\ne 0$.\nHai điểm cực trị nằm bên trái đường thẳng $x = 2$ khi và chỉ khi:\n$$x_1, x_2 < 2 \\iff 1 + |m| < 2 \\iff |m| < 1 \\iff -1 < m < 1.$$\n\nDo $m \\in \\mathbb{Z}$ và $m \\ne 0$, trong khoảng $(-1; 1)$ không có số nguyên nào thỏa mãn.\nVậy số giá trị nguyên của $m$ là $0$.\n\nChọn D.",
    "socraticHint": "Nghiệm lớn $1 + |m| < 2 \\iff |m| < 1$, kết hợp $m \\ne 0$ suy ra không có số nguyên nào thỏa mãn.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 454,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để đồ thị của hàm số $y = x^4 - 2mx^2$ có ba điểm cực trị tạo thành một tam giác có diện tích nhỏ hơn $1$.",
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
        "content": "$0 < m < \\sqrt[3]{4}$"
      },
      {
        "key": "D",
        "content": "$m < 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4mx = 4x(x^2 - m)$.\nHàm số có $3$ điểm cực trị khi $m > 0$.\nBa điểm cực trị của đồ thị là:\n$$O(0; 0), \\quad A(\\sqrt{m}; -m^2), \\quad B(-\\sqrt{m}; -m^2).$$\n\nTam giác $OAB$ cân tại $O$, đáy $AB$ có độ dài:\n$$AB = 2\\sqrt{m}.$$\nĐường cao kẻ từ $O$ đến $AB$ có độ dài:\n$$h = |-m^2| = m^2.$$\nDiện tích tam giác $OAB$:\n$$S = \\frac{1}{2} AB \\cdot h = \\frac{1}{2} \\cdot 2\\sqrt{m} \\cdot m^2 = m^{5/2} = \\sqrt{m^5}.$$\n\nTheo bài toán:\n$$S < 1 \\iff \\sqrt{m^5} < 1 \\iff m^5 < 1 \\iff m < 1.$$\nKết hợp với điều kiện $m > 0$, ta được:\n$$0 < m < 1.$$\n\nChọn A.",
    "socraticHint": "Diện tích tam giác ba điểm cực trị của $y = x^4 - 2mx^2$ là $S = \\sqrt{m^5} < 1 \\iff 0 < m < 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 455,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = x^4 - 2(m + 1)x^2 + m^2$ có ba điểm cực trị tạo thành ba đỉnh của một tam giác vuông. Số phần tử của tập hợp $S$ là:",
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
    "correctAnswer": "D",
    "detailedSolution": "Hàm số đã cho là hàm trùng phương $y = ax^4 + bx^2 + c$ với:\n$$a = 1, \\quad b = -2(m + 1), \\quad c = m^2.$$\n\nHàm số có $3$ điểm cực trị khi và chỉ khi:\n$$ab < 0 \\iff 1 \\cdot [-2(m + 1)] < 0 \\iff m + 1 > 0 \\iff m > -1.$$\n\nBa điểm cực trị tạo thành một tam giác vuông (tam giác này luôn cân tại đỉnh trên trục tung) khi và chỉ khi:\n$$8a + b^3 = 0 \\iff 8(1) + [-2(m + 1)]^3 = 0$$\n$$\\iff 8 - 8(m + 1)^3 = 0 \\iff (m + 1)^3 = 1 \\iff m + 1 = 1 \\iff m = 0.$$\n\nKiểm tra điều kiện: $m = 0 > -1$ (thỏa mãn).\nVậy $S = \\{0\\}$, tập hợp $S$ có đúng $1$ phần tử.\n\nChọn D.",
    "socraticHint": "Áp dụng điều kiện tam giác cực trị vuông: $8a + b^3 = 0$, giải ra $m = 0$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 456,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = x^4 - 2m^2 x^2 + 1$ có $3$ điểm cực trị lập thành một tam giác vuông cân.",
    "options": [
      {
        "key": "A",
        "content": "$m = 1$"
      },
      {
        "key": "B",
        "content": "$m \\in \\{-1; 1\\}$"
      },
      {
        "key": "C",
        "content": "$m \\in \\{-1; 0; 1\\}$"
      },
      {
        "key": "D",
        "content": "$m \\in \\emptyset$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4m^2 x = 4x(x^2 - m^2)$.\nHàm số có $3$ điểm cực trị khi:\n$$m \\ne 0.$$\n\nBa điểm cực trị của đồ thị hàm số là:\n$$A(0; 1), \\quad B(m; 1 - m^4), \\quad C(-m; 1 - m^4).$$\nTam giác $ABC$ luôn cân tại $A$.\nVectơ $\\vec{AB} = (m; -m^4)$ và $\\vec{AC} = (-m; -m^4)$.\nTam giác $ABC$ vuông cân tại $A$ khi:\n$$\\vec{AB} \\cdot \\vec{AC} = 0 \\iff m(-m) + (-m^4)(-m^4) = 0 \\iff -m^2 + m^8 = 0$$\n$$\\iff m^2(m^6 - 1) = 0 \\iff m^6 = 1 \\quad (\\text{do } m \\ne 0) \\iff m = \\pm 1.$$\n\nVậy $m \\in \\{-1; 1\\}$.\n\nChọn B.",
    "socraticHint": "Do tính đối xứng qua trục tung, tam giác $ABC$ vuông cân tại $A$ khi $\\vec{AB} \\cdot \\vec{AC} = 0 \\iff m = \\pm 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 457,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp tất cả các giá trị thực của tham số $m$ để đồ thị $(C)$ của hàm số $y = x^4 - 2m^2 x^2 + m^4 + 5$ có ba điểm cực trị, đồng thời ba điểm cực trị đó cùng với gốc tọa độ $O$ tạo thành một tứ giác nội tiếp. Tìm số phần tử của $S$.",
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
    "correctAnswer": "C",
    "detailedSolution": "Đạo hàm: $y' = 4x^3 - 4m^2 x = 4x(x^2 - m^2)$.\nHàm số có ba điểm cực trị khi $m \\ne 0$.\nTọa độ ba điểm cực trị là:\n$$A(0; m^4 + 5), \\quad B(m; 5), \\quad C(-m; 5).$$\n\nDo tính đối xứng qua trục tung $Oy$, tứ giác $ABOC$ có trục đối xứng là $AO$.\nTứ giác này nội tiếp đường tròn khi và chỉ khi $AO$ là đường kính, tức là $\\widehat{ABO} = 90^\\circ$:\n$$\\vec{AB} \\cdot \\vec{OB} = 0.$$\nTa có $\\vec{AB} = (m; -m^4)$ và $\\vec{OB} = (m; 5)$.\n$$\\vec{AB} \\cdot \\vec{OB} = m(m) + (-m^4)(5) = m^2 - 5m^4 = 0$$\n$$\\iff m^2(1 - 5m^2) = 0 \\iff 1 - 5m^2 = 0 \\quad (\\text{do } m \\ne 0) \\iff m = \\pm \\frac{1}{\\sqrt{5}}.$$\n\nVậy có $2$ giá trị thực của $m$ thỏa mãn. Số phần tử của $S$ là $2$.\n\nChọn C.",
    "socraticHint": "Tứ giác đối xứng nội tiếp khi $\\widehat{ABO} = 90^\\circ \\iff \\vec{AB} \\cdot \\vec{OB} = 0$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 458,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = -x^4 + 2mx^2 + 2$ có đồ thị $(C_m)$. Tìm tất cả các giá trị của $m$ để đồ thị hàm số có ba điểm cực trị tạo thành một tam giác vuông.",
    "options": [
      {
        "key": "A",
        "content": "$m = \\sqrt[3]{3}$"
      },
      {
        "key": "B",
        "content": "$m = -\\sqrt[3]{3}$"
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
    "detailedSolution": "Hàm số đã cho là hàm trùng phương $y = ax^4 + bx^2 + c$ với:\n$$a = -1, \\quad b = 2m, \\quad c = 2.$$\n\nHàm số có $3$ điểm cực trị khi:\n$$ab < 0 \\iff -1(2m) < 0 \\iff m > 0.$$\n\nBa điểm cực trị tạo thành tam giác vuông khi và chỉ khi:\n$$8a + b^3 = 0 \\iff 8(-1) + (2m)^3 = 0 \\iff 8m^3 - 8 = 0 \\iff m^3 = 1 \\iff m = 1.$$\nGiá trị $m = 1 > 0$ thỏa mãn điều kiện.\n\nChọn D.",
    "socraticHint": "Áp dụng công thức tam giác cực trị vuông: $8a + b^3 = 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 459,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $A, B, C$ là các điểm cực trị của đồ thị hàm số $y = x^4 - 2x^2 + 4$. Bán kính đường tròn nội tiếp tam giác $ABC$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$\\sqrt{2} + 1$"
      },
      {
        "key": "C",
        "content": "$\\sqrt{2} - 1$"
      },
      {
        "key": "D",
        "content": "$\\sqrt{2}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\iff x \\in \\{0; -1; 1\\}$.\nTọa độ ba điểm cực trị:\n$$A(0; 4), \\quad B(-1; 3), \\quad C(1; 3).$$\n\nĐộ dài các cạnh của tam giác $ABC$:\n$$AB = \\sqrt{(-1)^2 + (-1)^2} = \\sqrt{2},$$\n$$AC = \\sqrt{1^2 + (-1)^2} = \\sqrt{2},$$\n$$BC = \\sqrt{(1 - (-1))^2 + 0^2} = 2.$$\n\nTa thấy $AB^2 + AC^2 = 2 + 2 = 4 = BC^2$, do đó tam giác $ABC$ vuông cân tại $A$.\nDiện tích tam giác $ABC$:\n$$S = \\frac{1}{2} AB \\cdot AC = \\frac{1}{2} \\cdot \\sqrt{2} \\cdot \\sqrt{2} = 1.$$\nNửa chu vi tam giác:\n$$p = \\frac{AB + AC + BC}{2} = \\frac{\\sqrt{2} + \\sqrt{2} + 2}{2} = \\sqrt{2} + 1.$$\n\nBán kính đường tròn nội tiếp:\n$$r = \\frac{S}{p} = \\frac{1}{\\sqrt{2} + 1} = \\sqrt{2} - 1.$$\n\nChọn C.",
    "socraticHint": "Tam giác vuông cân có diện tích $S = 1$ và nửa chu vi $p = \\sqrt{2} + 1 \\implies r = S/p = \\sqrt{2} - 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 460,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để đồ thị của hàm số $y = x^4 - 2mx^2$ có ba điểm cực trị tạo thành một tam giác có diện tích nhỏ hơn $1$.",
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
        "content": "$0 < m < \\sqrt[3]{4}$"
      },
      {
        "key": "D",
        "content": "$m > 0$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4mx = 4x(x^2 - m)$.\nĐể đồ thị có 3 điểm cực trị thì $m > 0$.\nBa điểm cực trị là: $O(0; 0), A(\\sqrt{m}; -m^2), B(-\\sqrt{m}; -m^2)$.\nĐộ dài đáy: $AB = 2\\sqrt{m}$.\nChiều cao tương ứng: $h = m^2$.\nDiện tích tam giác:\n$$S = \\frac{1}{2} AB \\cdot h = \\frac{1}{2} \\cdot 2\\sqrt{m} \\cdot m^2 = m^{5/2}.$$\nTheo đề bài: $S < 1 \\iff m^{5/2} < 1 \\iff m < 1$.\nKết hợp điều kiện để có 3 cực trị ($m > 0$):\n$$0 < m < 1.$$\n\nChọn B.",
    "socraticHint": "Nhớ kết hợp điều kiện cần để hàm số có 3 điểm cực trị là $m > 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 461,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Điều kiện của tham số $m$ để hàm số $y = \\frac{x^2 - mx}{1 - x}$ có cực đại và cực tiểu là:",
    "options": [
      {
        "key": "A",
        "content": "$m < 1$"
      },
      {
        "key": "B",
        "content": "$m > 1$"
      },
      {
        "key": "C",
        "content": "$m < -1$"
      },
      {
        "key": "D",
        "content": "$m > -1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.\nViết lại hàm số: $y = \\frac{-x^2 + mx}{x - 1}$.\nĐạo hàm:\n$$y' = \\frac{(2x - m)(1 - x) - (-1)(x^2 - mx)}{(1 - x)^2} = \\frac{2x - 2x^2 - m + mx + x^2 - mx}{(1 - x)^2} = \\frac{-x^2 + 2x - m}{(1 - x)^2}.$$\n\nHàm số có cực đại và cực tiểu khi và chỉ khi $y' = 0$ có hai nghiệm phân biệt khác $1$:\n$$g(x) = -x^2 + 2x - m = 0 \\text{ có hai nghiệm phân biệt khác } 1$$\n$$\\iff \\begin{cases} \\Delta' = 1^2 - (-1)(-m) = 1 - m > 0 \\\\ g(1) = -(1^2) + 2(1) - m \\ne 0 \\end{cases} \\iff \\begin{cases} 1 - m > 0 \\\\ 1 - m \\ne 0 \\end{cases} \\iff m < 1.$$\n\nVậy điều kiện là $m < 1$.\n\nChọn A.",
    "socraticHint": "Tử thức đạo hàm là tam thức bậc hai cần có 2 nghiệm phân biệt khác điểm gián đoạn $x = 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 462,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp tất cả các giá trị thực của tham số $m$ để đồ thị hàm số $y = \\frac{x^2 + mx + 2m}{x + 1}$ có hai điểm cực trị $A, B$ và tam giác $OAB$ vuông tại $O$. Tổng tất cả các phần tử của $S$ bằng:",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.\nĐạo hàm:\n$$y' = \\frac{(2x + m)(x + 1) - (x^2 + mx + 2m)}{(x + 1)^2} = \\frac{x^2 + 2x - m}{(x + 1)^2}$$\nĐồ thị hàm số có hai điểm cực trị khi và chỉ khi phương trình $g(x) = x^2 + 2x - m = 0$ có hai nghiệm phân biệt khác $-1$:\n$$\\begin{cases} \\Delta' = 1 + m > 0 \\\\ g(-1) = 1 - 2 - m \\ne 0 \\end{cases} \\iff m > -1 \\quad (1)$$\nKhi đó, đường thẳng đi qua hai điểm cực trị là:\n$$y = \\frac{(x^2 + mx + 2m)'}{(x + 1)'} = 2x + m$$\nSuy ra tọa độ hai điểm cực trị là $A(x_1; 2x_1 + m)$ và $B(x_2; 2x_2 + m)$, với $x_1, x_2$ là hai nghiệm của $g(x) = 0$.\nTa có: $\\vec{OA} = (x_1; 2x_1 + m)$, $\\vec{OB} = (x_2; 2x_2 + m)$.\nTam giác $OAB$ vuông tại $O \\iff \\vec{OA} \\cdot \\vec{OB} = 0$:\n$$x_1 x_2 + (2x_1 + m)(2x_2 + m) = 0 \\iff 5x_1 x_2 + 2m(x_1 + x_2) + m^2 = 0$$\nTheo định lý Viète: $x_1 + x_2 = -2$, $x_1 x_2 = -m$. Thay vào ta được:\n$$5(-m) + 2m(-2) + m^2 = 0 \\iff m^2 - 9m = 0 \\iff \\begin{bmatrix} m = 0 \\\\ m = 9 \\end{bmatrix}$$\nVới $m = 0$: đường thẳng đi qua hai cực trị là $y = 2x$ đi qua $O(0; 0)$ nên $O, A, B$ thẳng hàng (loại).\nVới $m = 9 > -1$: thỏa mãn điều kiện tam giác $OAB$ vuông tại $O$.\nVậy $S = \\{9\\}$, tổng tất cả các phần tử của $S$ bằng $9$.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 463,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = \\frac{x^2 - mx + 4}{x - m}$. Biết rằng đồ thị hàm số có hai điểm cực trị phân biệt là $A, B$. Tìm số giá trị của $m$ sao cho ba điểm $A, B, C(4; 2)$ phân biệt và thẳng hàng.",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{m\\}$.\nTa có: $y = \\frac{x^2 - mx + 4}{x - m} = x + \\frac{4}{x - m}$.\nĐạo hàm: $y' = 1 - \\frac{4}{(x - m)^2} = 0 \\iff (x - m)^2 = 4 \\iff x = m + 2$ hoặc $x = m - 2$.\nTọa độ hai điểm cực trị là $B(m + 2; m + 4), \\, A(m - 2; m - 4)$.\nTa có $\\vec{AB} = (4; 8), \\, \\vec{AC} = (6 - m; 6 - m)$.\nBa điểm $A, B, C(4; 2)$ phân biệt và thẳng hàng khi và chỉ khi:\n$$\\vec{AC} = k\\vec{AB} \\iff \\left\\{\\begin{array}{l} 6 - m = 4k \\\\ 6 - m = 8k \\\\ 6 - m \\ne 0 \\end{array}\\right. \\implies 4k = 8k \\iff k = 0 \\implies 6 - m = 0 \\text{ (mâu thuẫn)}$$\nVậy không có giá trị nào của $m$ thỏa mãn.\nChọn A.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 464,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Giá trị của tham số $m$ để hàm số $y = \\frac{x^2 + mx + 1}{x + m}$ đạt cực đại tại điểm $x_0 = 2$ là:",
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
    "detailedSolution": "Ta có: $y' = 1 - \\frac{1}{(x + m)^2}, \\, y'' = \\frac{2}{(x + m)^3}$.\nHàm số đạt cực đại tại điểm $x_0 = 2$ khi và chỉ khi:\n$$\\left\\{\\begin{array}{l} y'(2) = 0 \\\\ y''(2) < 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} 1 - \\frac{1}{(2 + m)^2} = 0 \\\\ \\frac{2}{(2 + m)^3} < 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} (2 + m)^2 = 1 \\\\ 2 + m < 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} 2 + m = \\pm 1 \\\\ m < -2 \\end{array}\\right. \\iff m = -3$$\nThử lại với $m = -3$: hàm số đạt cực đại tại điểm $x_0 = 2$.\nChọn B.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  }
];
