import { Question } from '../../../types/exam';

export const hamDacTrungQuestions: Question[] = [
  {
    "id": 10,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_2_mu_logarit',
    "chapterName": 'Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)',
    "topicId": "phuong_phap_ham_dac_trung",
    "topicName": "Phương pháp hàm đặc trưng mũ - logarit",
    "content": "Phương trình $4^x - (m + 2)2^x + 2m = 0$ có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1 + x_2 = 3$. Giá trị của $m$ là:",
    "options": [
      {
        "key": "A",
        "content": "$m = 8$"
      },
      {
        "key": "B",
        "content": "$m = 4$"
      },
      {
        "key": "C",
        "content": "$m = 6$"
      },
      {
        "key": "D",
        "content": "$m = 2$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Đặt $t = 2^x > 0$. Phương trình thành $t^2 - (m+2)t + 2m = 0 \\iff (t - 2)(t - m) = 0$.\nNghiệm $t_1 = 2 \\implies x_1 = 1$.\nTheo giả thiết $x_1 + x_2 = 3 \\implies x_2 = 2 \\implies t_2 = 2^2 = 4 \\implies m = 4$.",
    "socraticHint": "Phân tích nhân tử phương trình bậc hai theo ẩn phụ $t = 2^x$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 58,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_2_mu_logarit',
    "chapterName": 'Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)',
    "topicId": "phuong_phap_ham_dac_trung",
    "topicName": "Phương pháp hàm đặc trưng mũ - logarit",
    "content": "Cho hai số thực $x, y$ thỏa mãn $4^{x^2 + y^2 - 1} + \\log_2(x^2 + y^2 + 1) = 2^{2xy} + \\log_2(2xy + 2)$. Tìm giá trị nhỏ nhất của biểu thức $P = x^2 + 2y^2 - 4x$.",
    "options": [
      {
        "key": "A",
        "content": "$-\\frac{10}{3}$"
      },
      {
        "key": "B",
        "content": "$-3$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$-\\frac{8}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $u = x^2 + y^2 + 1 > 0$ và $v = 2xy + 2 > 0$.\nKhi đó $x^2 + y^2 - 1 = u - 2$ và $2xy = v - 2$.\nPhương trình trở thành:\n$$4^{u - 2} + \\log_2 u = 4^{v - 2} + \\log_2 v.$$\nHàm số $f(t) = 4^{t - 2} + \\log_2 t$ đồng biến trên $(0; +\\infty)$, do đó $u = v$:\n$$x^2 + y^2 + 1 = 2xy + 2 \\iff (x - y)^2 = 1 \\iff \\left[\\begin{array}{l} y = x - 1 \\\\ y = x + 1 \\end{array}\\right.$$\n- Trường hợp 1: $y = x - 1$.\n$$P = x^2 + 2(x - 1)^2 - 4x = 3x^2 - 8x + 2 = 3\\left(x - \\frac{4}{3}\\right)^2 - \\frac{10}{3} \\ge -\\frac{10}{3}.$$\nĐạt được khi $x = \\frac{4}{3}, y = \\frac{1}{3}$.\n- Trường hợp 2: $y = x + 1$.\n$$P = x^2 + 2(x + 1)^2 - 4x = 3x^2 + 2 \\ge 2.$$\nSo sánh hai trường hợp, giá trị nhỏ nhất của $P$ là $-\\frac{10}{3}$.",
    "socraticHint": "Áp dụng phương pháp hàm đặc trưng tìm mối quan hệ tuyến tính giữa $x$ và $y$, sau đó đưa về tam thức bậc hai một biến.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 210,
    "latexVerified": true,
    "type": "fill",
    "chapterId": 'chuong_2_mu_logarit',
    "chapterName": 'Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)',
    "topicId": "phuong_phap_ham_dac_trung",
    "topicName": "Phương pháp hàm đặc trưng mũ - logarit",
    "content": "Có bao nhiêu cặp số nguyên $(x; y)$ thỏa mãn $0 \\le x \\le 2025$ và $\\log_3(162x + 243) + 2x - 1 = 2y + 9^y$?",
    "options": [],
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3",
      "3.0"
    ],
    "detailedSolution": "Ta biến đổi biểu thức logarit:\n$$\\log_3(162x + 243) = \\log_3(81(2x + 3)) = \\log_3(81) + \\log_3(2x + 3) = 4 + \\log_3(2x + 3)$$\nThay vào phương trình ban đầu:\n$$4 + \\log_3(2x + 3) + 2x - 1 = 2y + 9^y$$\n$$\\iff \\log_3(2x + 3) + (2x + 3) = 2y + 3^{2y}$$\n$$\\iff \\log_3(2x + 3) + 3^{\\log_3(2x + 3)} = 2y + 3^{2y}$$\nXét hàm số đại diện $f(t) = t + 3^t$ trên $\\mathbb{R}$:\n$f'(t) = 1 + 3^t \\ln 3 > 0, \\forall t \\in \\mathbb{R} \\implies f(t)$ đồng biến trên $\\mathbb{R}$.\nDo đó:\n$$\\log_3(2x + 3) = 2y \\iff 2x + 3 = 3^{2y} = 9^y \\iff x = \\frac{9^y - 3}{2}$$\nVì $0 \\le x \\le 2025$:\n$$0 \\le \\frac{9^y - 3}{2} \\le 2025 \\iff 3 \\le 9^y \\le 4053$$\nVới $y \\in \\mathbb{Z}$:\n- $y = 1 \\implies 9^1 = 9 \\in [3; 4053] \\implies x = 3$.\n- $y = 2 \\implies 9^2 = 81 \\in [3; 4053] \\implies x = 39$.\n- $y = 3 \\implies 9^3 = 729 \\in [3; 4053] \\implies x = 363$.\n- Với $y \\ge 4 \\implies 9^4 = 6561 > 4053$ (loại).\n- Với $y \\le 0 \\implies 9^y \\le 1 < 3$ (loại).\nVậy có đúng $3$ cặp số nguyên $(x; y)$ thỏa mãn.",
    "socraticHint": "Tách $\\log_3(162x + 243) = 4 + \\log_3(2x + 3)$ để đưa về phương trình hàm đặc trưng dạng $u + 3^u = v + 3^v$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 289,
    "latexVerified": true,
    "type": "mcq",
    "topicId": "phuong_phap_ham_dac_trung",
    "content": "Tính tổng các nghiệm của phương trình $\\log_2\\left(\\frac{x^2 - 5x + 6}{x^2 - 2x + 3}\\right) = x^2 - 4x - 3$:",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$-4$"
      },
      {
        "key": "C",
        "content": "$-3$"
      },
      {
        "key": "D",
        "content": "$-7$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Biến đổi phương trình:\n$$\\log_2(x^2 - 5x + 6) - \\log_2(x^2 - 2x + 3) = (x^2 - 2x + 3) - (x^2 - 5x + 6)$$\n$$\\iff \\log_2(x^2 - 5x + 6) + (x^2 - 5x + 6) = \\log_2(x^2 - 2x + 3) + (x^2 - 2x + 3)$$\nXét hàm đặc trưng $f(t) = \\log_2 t + t$ với $t > 0$.\nĐạo hàm $f'(t) = \\frac{1}{t\\ln 2} + 1 > 0$ nên $f(t)$ đồng biến trên $(0; +\\infty)$.\nDo đó:\n$$x^2 - 5x + 6 = x^2 - 2x + 3 \\iff -3x = -3 \\iff x = 1$$\nThử lại $x = 1$ thỏa mãn điều kiện $x^2 - 5x + 6 = 2 > 0$ và $x^2 - 2x + 3 = 2 > 0$. Hoặc phương trình bậc hai có tổng nghiệm theo Viète bằng 3.",
    "socraticHint": "Chuyển vế để tạo dạng hàm đặc trưng đối xứng $f(u) = f(v)$ với $f(t) = \\log_2 t + t$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Phương pháp hàm đặc trưng mũ - logarit",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)"
  }
];
