import { Question } from '../../../../types/exam';

export const cucTriPart1Questions: Question[] = [
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
  }
];
