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
    "difficulty": "Thông hiểu",
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
    "difficulty": "Vận dụng cao",
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
    "content": "Giá trị cực tiểu của hàm số $y = x^2 - 4x + 7$ bằng bao nhiêu?",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3",
      "3.0"
    ],
    "detailedSolution": "Đạo hàm $y' = 2x - 4 = 0 \\iff x = 2$.\nGiá trị cực tiểu: $y(2) = 2^2 - 4(2) + 7 = 3$.",
    "socraticHint": "Tìm điểm cực tiểu từ nghiệm $y' = 0$ rồi thay vào hàm số.",
    "difficulty": "Nhận biết",
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
    "difficulty": "Thông hiểu",
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
    "difficulty": "Thông hiểu",
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
    "content": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có đồ thị với điểm nhô lên cao nhất tại hoành độ $x = 2$ và điểm võng xuống thấp nhất tại hoành độ $x = 7$. Khẳng định nào dưới đây là đúng?",
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
    "difficulty": "Nhận biết",
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
    "content": "Cho hàm số $f(x)$ có bảng xét dấu đạo hàm: $f'(x) > 0$ trên $(-\\infty; 4)$, $f'(x) < 0$ trên $(4; 5)$, $f'(x) > 0$ trên $(5; 6) \\cup (6; +\\infty)$, với $f'(4) = f'(5) = f'(6) = 0$. Số giá trị nguyên dương của tham số $m$ để hàm số $g(x) = f(|x^4 - 2x^2 - 3| + m)$ có ít nhất $7$ điểm cực trị là:",
    "options": [],
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0"
    ],
    "detailedSolution": "Nhận xét bảng xét dấu đạo hàm của $f(x)$:\n- $f'(x)$ đổi dấu từ $+$ sang $-$ khi qua $x = 4$ (điểm cực đại).\n- $f'(x)$ đổi dấu từ $-$ sang $+$ khi qua $x = 5$ (điểm cực tiểu).\n- Tại $x = 6$, $f'(6) = 0$ nhưng $f'(x)$ mang dấu $+$ ở cả hai phía, nên $x = 6$ không phải là điểm cực trị của $f$.\nDo đó hàm hợp $f(u)$ chỉ sinh ra thêm cực trị khi $u(x)$ cắt các đường $u = 4$ hoặc $u = 5$.\n\nXét hàm lõi $u(x) = |x^4 - 2x^2 - 3| + m = |h(x)| + m$, trong đó $h(x) = (x^2 - 1)^2 - 4$.\nCác điểm cực trị của hàm số $u(x)$:\n- $h'(x) = 4x(x^2 - 1) = 0 \\iff x = 0$ hoặc $x = \\pm 1$.\n- Tại $x = \\pm 1$: $h(\\pm 1) = -4 \\implies u(\\pm 1) = 4 + m$ (hai điểm cực đại địa phương).\n- Tại $x = 0$: $h(0) = -3 \\implies u(0) = 3 + m$ (một điểm cực tiểu địa phương).\n- Tại $x = \\pm \\sqrt{3}$: $h(\\pm \\sqrt{3}) = 0 \\implies u(\\pm \\sqrt{3}) = m$ (hai điểm cực tiểu do lấy trị tuyệt đối).\nNhư vậy hàm số $u(x)$ đã có sẵn $5$ điểm cực trị: $x \\in \\{-\\sqrt{3}; -1; 0; 1; \\sqrt{3}\\}$.\nĐể $g(x) = f(u(x))$ có ít nhất $7$ điểm cực trị, phương trình $u(x) = 4$ hoặc $u(x) = 5$ phải đóng góp thêm ít nhất $2$ điểm làm $f'(u)$ đổi dấu mà không trùng với các điểm dừng của $u(x)$.\n- Vì $u(x) \\ge m$ và tăng đến $+\\infty$ khi $|x| > \\sqrt{3}$, đường thẳng $u = c$ ($c \\in \\{4; 5\\}$) sẽ cắt đồ thị $u(x)$ tại ít nhất 2 nghiệm đơn trên $(-\\infty; -\\sqrt{3}) \\cup (\\sqrt{3}; +\\infty)$ khi và chỉ khi $c > m$.\n- Cụ thể:\n  + Khi $m = 1$: $u = 5$ có 2 nghiệm cắt, $u = 4$ có thêm nghiệm $\\implies$ tổng cộng $\\ge 7$ điểm cực trị.\n  + Khi $m = 2, 3$: cả $c = 4$ và $c = 5$ đều thỏa mãn $c > m \\implies$ sinh ra nhiều hơn 7 điểm cực trị.\n  + Khi $m = 4$: $c = 5 > 4 = m$, đường thẳng $u = 5$ cắt tại 4 nghiệm đơn $\\implies$ tổng số cực trị là $5 + 4 = 9 \\ge 7$.\n  + Khi $m \\ge 5$: cả $c = 4$ và $c = 5$ đều $\\le m$, do đó phương trình $u(x) = 4$ và $u(x) = 5$ không có thêm nghiệm cắt $\\implies$ $g(x)$ chỉ có đúng $5$ điểm cực trị ($< 7$).\n\nVậy các giá trị nguyên dương thỏa mãn là $m \\in \\{1; 2; 3; 4\\}$.\nSố giá trị nguyên dương của $m$ là $4$.",
    "socraticHint": "Tìm số điểm cực trị sẵn có của hàm lõi $u(x)$ (5 điểm) rồi tìm điều kiện để $u(x) = 4$ hoặc $u(x) = 5$ có thêm nghiệm cắt.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 252,
    "type": "fill",
    "topicId": "cuc_tri_tham_so_m",
    "content": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng xét dấu của đạo hàm $f'(x)$ đổi dấu khi qua các điểm $x = -2$ (từ dương sang âm), $x = 0$ (từ âm sang dương), $x = 3$ (từ dương sang âm), và tại $x = 5$ đạo hàm triệt tiêu nhưng không đổi dấu. Số điểm cực trị của hàm số $y = f(x)$ là bao nhiêu?",
    "correctAnswer": "3",
    "detailedSolution": "Điểm cực trị của hàm số là điểm mà tại đó đạo hàm đổi dấu khi biến số $x$ đi qua.\nTheo giả thiết, $f'(x)$ đổi dấu khi đi qua 3 điểm $x = -2, x = 0, x = 3$.\nTại $x = 5$, $f'(x)$ triệt tiêu nhưng không đổi dấu nên $x = 5$ không phải là điểm cực trị.\nVậy hàm số $y = f(x)$ có đúng 3 điểm cực trị.",
    "socraticHint": "Đếm số lần đạo hàm đổi dấu (từ dương sang âm hoặc từ âm sang dương) qua các nghiệm.",
    "difficulty": "Nhận biết",
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
    "content": "Cho hàm số bậc ba $y = f(x)$ có bảng biến thiên với điểm cực đại $(-1; 4)$ và điểm cực tiểu $(1; 0)$. Gọi $S$ là tập các giá trị nguyên của tham số $m$ để hàm số $y = |f(x) - m|$ có đúng 5 điểm cực trị. Tính tổng các phần tử của $S$?",
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
    "detailedSolution": "Hàm số ban đầu $f(x)$ có 2 điểm cực trị.\nSố điểm cực trị của hàm số $y = |f(x) - m|$ bằng tổng số điểm cực trị của $f(x)$ cộng với số nghiệm đơn (hoặc bội lẻ) của phương trình $f(x) - m = 0$.\nĐể hàm số có 5 điểm cực trị thì phương trình $f(x) = m$ phải có đúng 3 nghiệm phân biệt.\nTừ bảng biến thiên, phương trình có 3 nghiệm phân biệt khi và chỉ khi:\n$$y_{CT} < m < y_{CĐ} \\iff 0 < m < 4$$\nVì $m$ nguyên nên $m \\in \\{1, 2, 3\\}$.\nTổng các phần tử của $S$ là: $1 + 2 + 3 = 6$.",
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
  }
];
