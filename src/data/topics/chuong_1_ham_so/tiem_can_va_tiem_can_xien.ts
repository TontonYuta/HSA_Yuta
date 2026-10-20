import { Question } from '../../../types/exam';

export const tiemCanQuestions: Question[] = [
  {
    "id": 6,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Cho hàm số $y = \\frac{x^2 + 2x - 3}{x - 2}$ có đồ thị $(C)$. Khoảng cách từ gốc tọa độ $O$ đến đường tiệm cận xiên của đồ thị $(C)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$2\\sqrt{2}$"
      },
      {
        "key": "B",
        "content": "$\\sqrt{2}$"
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
    "detailedSolution": "Chia tử số cho mẫu số:\n$$\\frac{x^2 + 2x - 3}{x - 2} = x + 4 + \\frac{5}{x - 2}.$$\nĐường tiệm cận xiên của đồ thị hàm số là $d: y = x + 4 \\iff x - y + 4 = 0$.\nKhoảng cách từ gốc tọa độ $O(0; 0)$ đến đường thẳng $d$ là:\n$$d(O, d) = \\frac{|0 - 0 + 4|}{\\sqrt{1^2 + (-1)^2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}.$$",
    "socraticHint": "Thực hiện phép chia đa thức để xác định phương trình đường tiệm cận xiên $y = ax + b$, rồi áp dụng công thức khoảng cách từ điểm đến đường thẳng.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ],
    "answerVerified": true
  },
  {
    "id": 7,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Đồ thị hàm số $y = \\frac{2x^2 + 5x - 1}{x + 2}$ có tiệm cận xiên là $d: y = ax + b$. Giá trị của biểu thức $T = 2a + 3b$ là:",
    "options": [
      {
        "key": "A",
        "content": "$T = 5$"
      },
      {
        "key": "B",
        "content": "$T = 7$"
      },
      {
        "key": "C",
        "content": "$T = 1$"
      },
      {
        "key": "D",
        "content": "$T = 8$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Chia đa thức: $2x^2 + 5x - 1 = (2x + 1)(x + 2) - 3 \\implies y = 2x + 1 - \\frac{3}{x + 2}$.\nĐường tiệm cận xiên là $y = 2x + 1 \\implies a = 2, b = 1$.\nDo đó $T = 2(2) + 3(1) = 7$.",
    "socraticHint": "Xác định hệ số góc $a$ và tung độ gốc $b$ từ thương của phép chia.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ],
    "answerVerified": true
  },
  {
    "id": 8,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Giao điểm $I$ của hai đường tiệm cận của đồ thị hàm số $y = \\frac{x^2 - 4x + 7}{x - 2}$ có tọa độ là:",
    "options": [
      {
        "key": "A",
        "content": "$I(2; 0)$"
      },
      {
        "key": "B",
        "content": "$I(2; -2)$"
      },
      {
        "key": "C",
        "content": "$I(2; 2)$"
      },
      {
        "key": "D",
        "content": "$I(-2; 0)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $y = x - 2 + \\frac{3}{x - 2}$.\n- Tiệm cận đứng: $x = 2$.\n- Tiệm cận xiên: $y = x - 2$.\nThay $x = 2$ vào phương trình tiệm cận xiên: $y = 2 - 2 = 0 \\implies I(2; 0)$.",
    "socraticHint": "Giao điểm $I$ là nghiệm của hệ gồm phương trình tiệm cận đứng và tiệm cận xiên.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ],
    "answerVerified": true
  },
  {
    "id": 36,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Cho hàm số $y = \\frac{2x^2 - 3x + 5}{x - 2}$. Đường tiệm cận xiên của đồ thị hàm số đi qua điểm $M(4; y_0)$. Hãy tính giá trị của $y_0$.",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9"
    ],
    "detailedSolution": "Chia tử số cho mẫu số:\n$$2x^2 - 3x + 5 = (x - 2)(2x + 1) + 7.$$\nDo đó $y = 2x + 1 + \\frac{7}{x - 2}$.\nĐường tiệm cận xiên của đồ thị hàm số là $d: y = 2x + 1$.\nĐiểm $M(4; y_0) \\in d \\iff y_0 = 2(4) + 1 = 9$.",
    "socraticHint": "Xác định phương trình tiệm cận xiên $y = ax + b$ rồi thay hoành độ $x = 4$ để tìm tung độ $y_0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ],
    "answerVerified": true
  },
  {
    "id": 55,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in [-20; 20]$ để đồ thị hàm số $y = \\frac{\\sqrt{x - 1} + 2}{x^2 - 2mx + m + 6}$ có đúng hai đường tiệm cận đứng?",
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
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$6$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Điều kiện xác định: $x \\ge 1$.\nTử số $g(x) = \\sqrt{x - 1} + 2 > 0, \\forall x \\ge 1$, do đó tử số không có nghiệm.\nĐồ thị có đúng hai đường tiệm cận đứng khi và chỉ khi mẫu số $f(x) = x^2 - 2mx + m + 6 = 0$ có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $1 \\le x_1 < x_2$.\n- Nếu $1 < x_1 < x_2$:\n$$\\begin{cases} \\Delta' = m^2 - m - 6 > 0 \\\\ f(1) = 1 - 2m + m + 6 > 0 \\\\ \\frac{S}{2} = m > 1 \\end{cases} \\iff \\begin{cases} m < -2 \\text{ hoặc } m > 3 \\\\ m < 7 \\\\ m > 1 \\end{cases} \\iff 3 < m < 7.$$\nCác số nguyên là $m \\in \\{4; 5; 6\\}$.\n- Nếu $x_1 = 1$: $f(1) = 0 \\iff m = 7$. Khi $m = 7$, mẫu số là $x^2 - 14x + 13 = (x - 1)(x - 13)$. Tại $x \\to 1^+$, mẫu số tiến về $0$, tử số bằng $2$, do đó $\\lim_{x \\to 1^+} y = -\\infty$, $x = 1$ vẫn là tiệm cận đứng; và $x = 13$ là tiệm cận đứng thứ hai. Thỏa mãn $m = 7$.\nTổng cộng có $4$ giá trị nguyên: $m \\in \\{4; 5; 6; 7\\}$.",
    "socraticHint": "Xét điều kiện hai nghiệm của mẫu số thuộc tập xác định $[1; +\\infty)$ và lưu ý kiểm tra trường hợp nghiệm tại mút $x = 1$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ],
    "answerVerified": true
  },
  {
    "id": 56,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Cho hàm số $y = \\frac{x^2 - mx + 2m - 1}{x - 1}$ có đồ thị $(C_m)$. Biết rằng đường tiệm cận xiên của $(C_m)$ tạo với hai trục tọa độ $Ox, Oy$ một tam giác có diện tích bằng $8$. Tổng tất cả các giá trị thực của tham số $m$ bằng:",
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
        "content": "$-2$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia tử số cho mẫu số:\n$$\\frac{x^2 - mx + 2m - 1}{x - 1} = x - (m - 1) + \\frac{m}{x - 1}.$$\nĐường tiệm cận xiên là $d: y = x - m + 1$.\nGiao điểm của $d$ với các trục tọa độ:\n- Cho $x = 0 \\Rightarrow y = 1 - m \\Rightarrow A(0; 1 - m)$.\n- Cho $y = 0 \\Rightarrow x = m - 1 \\Rightarrow B(m - 1; 0)$.\nDiện tích tam giác vuông $OAB$ là:\n$$S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} |1 - m| \\cdot |m - 1| = \\frac{1}{2}(m - 1)^2.$$\nTheo đề bài: $S = 8 \\iff \\frac{1}{2}(m - 1)^2 = 8 \\iff (m - 1)^2 = 16 \\iff m - 1 = \\pm 4 \\iff \\left[\\begin{array}{l} m = 5 \\\\ m = -3 \\end{array}\\right.$.\nTổng các giá trị của $m$ là $5 + (-3) = 2$.",
    "socraticHint": "Tìm phương trình tiệm cận xiên $y = ax + b$, xác định tọa độ hai giao điểm với các trục tọa độ và thiết lập phương trình diện tích tam giác vuông.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ],
    "answerVerified": true
  },
  {
    "id": 71,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{x^2 - 4}}{x^2 - 5x + 6}$ là:",
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
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $x^2 - 4 \\ge 0 \\iff x \\in (-\\infty; -2] \\cup [2; +\\infty)$ và $x^2 - 5x + 6 \\ne 0 \\iff x \\ne 2, x \\ne 3$.\nVậy $D = (-\\infty; -2] \\cup (2; 3) \\cup (3; +\\infty)$.\n1. Tiệm cận ngang:\n$$\\lim_{x \\to +\\infty} y = \\lim_{x \\to +\\infty} \\frac{x\\sqrt{1 - 4/x^2}}{x^2 - 5x + 6} = 0; \\quad \\lim_{x \\to -\\infty} y = 0.$$\nĐồ thị có 1 đường tiệm cận ngang là $y = 0$.\n2. Tiệm cận đứng:\n- Tại $x \\to 2^+$: $y = \\frac{\\sqrt{(x-2)(x+2)}}{(x-2)(x-3)} = \\frac{\\sqrt{x+2}}{\\sqrt{x-2}(x-3)}$. Khi $x \\to 2^+$, tử tiến tới $2$, mẫu tiến tới $0 \\cdot (-1) = 0^-$, nên $y \\to -\\infty$. Do đó $x = 2$ là tiệm cận đứng.\n- Tại $x \\to 3$: mẫu tiến tới $0$, tử tiến tới $\\sqrt{5} \\ne 0$, nên $y \\to \\infty$. Do đó $x = 3$ là tiệm cận đứng.\nTổng số đường tiệm cận đứng (2) và tiệm cận ngang (1) là $2 + 1 = 3$.",
    "socraticHint": "Rút gọn nhân tử $\\sqrt{x - 2}$ khi xét giới hạn tại điểm $x = 2$ để xác định tiệm cận đứng.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ],
    "answerVerified": true
  },
  {
    "id": 88,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Cho hàm số $y = \\frac{2x^2 + 5x - 3}{x + 1}$. Đường tiệm cận xiên của đồ thị hàm số cắt trục tung tại điểm có tung độ bằng bao nhiêu?",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Thực hiện phép chia đa thức tử số cho mẫu số:\n$$2x^2 + 5x - 3 = (x + 1)(2x + 3) - 6.$$\nDo đó:\n$$y = 2x + 3 - \\frac{6}{x + 1}.$$\nVì $\\lim_{x \\to \\pm\\infty} \\left[ y - (2x + 3) \\right] = \\lim_{x \\to \\pm\\infty} \\left( -\\frac{6}{x + 1} \\right) = 0$, đường tiệm cận xiên của đồ thị hàm số là $d: y = 2x + 3$.\nGiao điểm của đường tiệm cận xiên với trục tung $Oy$ ($x = 0$) có tung độ là $y = 2(0) + 3 = 3$.",
    "socraticHint": "Chia đa thức để tìm phương trình tiệm cận xiên $y = ax + b$, tung độ giao điểm với trục tung chính là hệ số tự do $b$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ],
    "answerVerified": true
  },
  {
    "id": 106,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 - 3x + 5}{x - 1}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$y = 2x - 1$"
      },
      {
        "key": "B",
        "content": "$y = 2x + 1$"
      },
      {
        "key": "C",
        "content": "$y = 2x - 3$"
      },
      {
        "key": "D",
        "content": "$y = x - 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Thực hiện phép chia đa thức tử cho mẫu:\n$$2x^2 - 3x + 5 = 2x(x - 1) - (x - 1) + 4 = (2x - 1)(x - 1) + 4$$\n$$\\implies y = 2x - 1 + \\frac{4}{x - 1}$$\nKhi $x \\to \\pm\\infty$, ta có $\\lim\\limits_{x \\to \\pm\\infty} \\frac{4}{x - 1} = 0$.\nVậy đường tiệm cận xiên là $y = 2x - 1$.",
    "socraticHint": "Chia đa thức tử số cho mẫu số để tìm thương bậc nhất $y = ax + b$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ],
    "answerVerified": true
  },
  {
    "id": 107,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Cho hàm số $y = \\frac{ax + 1}{bx - 2}$ có đồ thị nhận đường thẳng $x = 1$ làm tiệm cận đứng và $y = 2$ làm tiệm cận ngang. Giá trị của biểu thức $P = a + b$ là:",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$-2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "- Tiệm cận đứng là $x = \\frac{2}{b} = 1 \\implies b = 2$.\n- Tiệm cận ngang là $y = \\frac{a}{b} = 2 \\implies a = 2b = 2(2) = 4$.\nDo đó $P = a + b = 4 + 2 = 6$.",
    "socraticHint": "Đồ thị $y = \\frac{ax+b}{cx+d}$ có tiệm cận đứng $x = -d/c$ và tiệm cận ngang $y = a/c$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ],
    "answerVerified": true
  },
  {
    "id": 108,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = \\frac{x - 1}{x^2 - 4x + m}$ có đúng 2 đường tiệm cận đứng.",
    "options": [
      {
        "key": "A",
        "content": "$m < 4$ và $m \\ne 3$"
      },
      {
        "key": "B",
        "content": "$m < 4$"
      },
      {
        "key": "C",
        "content": "$m > 4$"
      },
      {
        "key": "D",
        "content": "$m \\le 4$ và $m \\ne 3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đồ thị có đúng 2 đường tiệm cận đứng khi và chỉ khi phương trình mẫu $g(x) = x^2 - 4x + m = 0$ có 2 nghiệm phân biệt khác 1 (nghiệm của tử):\n- Điều kiện 2 nghiệm phân biệt: $\\Delta' = (-2)^2 - m = 4 - m > 0 \\iff m < 4$.\n- Điều kiện nghiệm khác 1: $g(1) = 1^2 - 4(1) + m = m - 3 \\ne 0 \\iff m \\ne 3$.\nKết hợp lại ta được: $m < 4$ và $m \\ne 3$.",
    "socraticHint": "Mẫu số phải có hai nghiệm phân biệt và không bị triệt tiêu bởi nghiệm của tử số.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ],
    "answerVerified": true
  },
  {
    "id": 156,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{x^2 - 1}}{x^2 - 3x + 2}$ là:",
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
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $x^2 - 1 \\ge 0 \\iff x \\in (-\\infty; -1] \\cup [1; +\\infty)$ và $x^2 - 3x + 2 \\ne 0 \\iff x \\ne 1, x \\ne 2$.\nVậy $D = (-\\infty; -1] \\cup (1; 2) \\cup (2; +\\infty)$.\n1. Tiệm cận ngang:\n$$\\lim_{x \\to +\\infty} y = \\lim_{x \\to +\\infty} \\frac{\\sqrt{x^2 - 1}}{x^2 - 3x + 2} = 0; \\quad \\lim_{x \\to -\\infty} y = 0.$$\nĐồ thị có 1 đường tiệm cận ngang là $y = 0$.\n2. Tiệm cận đứng:\n- Tại $x \\to 2$: mẫu tiến về 0, tử tiến về $\\sqrt{3} \\ne 0$, nên $x = 2$ là tiệm cận đứng.\n- Tại $x \\to 1^+$: $y = \\frac{\\sqrt{(x-1)(x+1)}}{(x-1)(x-2)} = \\frac{\\sqrt{x+1}}{\\sqrt{x-1}(x-2)}$. Khi $x \\to 1^+$, mẫu tiến về $0^-$, tử tiến về $\\sqrt{2}$, nên $y \\to -\\infty$. Do đó $x = 1$ là tiệm cận đứng.\nTổng số đường tiệm cận đứng (2) và tiệm cận ngang (1) là $2 + 1 = 3$.",
    "socraticHint": "Phân tích nhân tử và rút gọn $\\sqrt{x - 1}$ khi tính giới hạn một bên tại $x \\to 1^+$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 157,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Cho hàm số $y = \\frac{2x^2 + (m - 1)x + 3}{x - 1}$. Biết rằng đường tiệm cận xiên của đồ thị hàm số đi qua điểm $A(2; 7)$. Giá trị của tham số $m$ bằng:",
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
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$-2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia tử số cho mẫu số:\n$$\\frac{2x^2 + (m - 1)x + 3}{x - 1} = 2x + (m + 1) + \\frac{m + 4}{x - 1}.$$\nĐường tiệm cận xiên của đồ thị hàm số là $d: y = 2x + m + 1$.\nĐiểm $A(2; 7) \\in d$ khi và chỉ khi:\n$$7 = 2(2) + m + 1 \\iff 7 = m + 5 \\iff m = 2.$$",
    "socraticHint": "Tìm phương trình đường tiệm cận xiên dạng $y = ax + b$ bằng phép chia đa thức rồi thay tọa độ điểm $A$ vào.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 158,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Cho hàm số $y = f(x)$ có bảng biến thiên như sau:\n$\\begin{array}{|c|ccccc|}\n\\hline\nx & -\\infty & & 1 & & +\\infty \\\\\n\\hline\n& & & +\\infty & & \\\\\nf(x) & & & || & & 2 \\\\\n& 2 & & || & & \\\\\n\\hline\n\\end{array}$\nBiết $\\lim\\limits_{x \\to -\\infty} f(x) = 2$, $\\lim\\limits_{x \\to +\\infty} f(x) = 2$ và $\\lim\\limits_{x \\to 1^+} f(x) = +\\infty$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "Đồ thị có tiệm cận ngang $y = 2$ và tiệm cận đứng $x = 1$"
      },
      {
        "key": "B",
        "content": "Đồ thị có tiệm cận ngang $x = 2$ và tiệm cận đứng $y = 1$"
      },
      {
        "key": "C",
        "content": "Đồ thị chỉ có đúng một đường tiệm cận"
      },
      {
        "key": "D",
        "content": "Đồ thị có tiệm cận xiên $y = 2x + 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "- Vì $\\lim\\limits_{x \\to \\pm\\infty} f(x) = 2$ nên đường thẳng $y = 2$ là tiệm cận ngang.\n- Vì $\\lim\\limits_{x \\to 1^+} f(x) = +\\infty$ nên đường thẳng $x = 1$ là tiệm cận đứng.\nDo đó khẳng định A đúng.",
    "socraticHint": "Định nghĩa giới hạn tại vô cực cho tiệm cận ngang $y = y_0$, giới hạn vô cực tại điểm cho tiệm cận đứng $x = x_0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 189,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Cho hàm số $y = \\frac{2x^2 + mx - 3}{x - 2}$. Biết rằng đường tiệm cận xiên của đồ thị đi qua điểm $A(1; 5)$. Giá trị của tham số $m$ bằng bao nhiêu?",
    "correctAnswer": "-1",
    "acceptableAnswers": [
      "-1",
      "-1.0"
    ],
    "detailedSolution": "Thực hiện phép chia đa thức:\n$$2x^2 + mx - 3 = 2x(x - 2) + (m + 4)(x - 2) + 2(m + 4) - 3 = (2x + m + 4)(x - 2) + (2m + 5)$$\n$$\\implies y = 2x + m + 4 + \\frac{2m + 5}{x - 2}$$\nĐường tiệm cận xiên là $d: y = 2x + m + 4$.\nĐường thẳng $d$ đi qua điểm $A(1; 5)$ nên:\n$$5 = 2(1) + m + 4 \\iff 5 = m + 6 \\iff m = -1$$.",
    "socraticHint": "Tìm phương trình tiệm cận xiên theo tham số $m$ rồi thay tọa độ điểm $A$ vào.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 229,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Số đường tiệm cận của đồ thị hàm số $y = \\frac{x - 1}{\\sqrt{x^2 - 4}}$ là:",
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
        "content": "$4$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $x^2 - 4 > 0 \\iff x \\in (-\\infty; -2) \\cup (2; +\\infty)$.\n1) Tiệm cận ngang:\n- Khi $x \\to +\\infty$:\n  $$\\lim\\limits_{x \\to +\\infty} \\frac{x - 1}{\\sqrt{x^2 - 4}} = \\lim\\limits_{x \\to +\\infty} \\frac{1 - \\frac{1}{x}}{\\sqrt{1 - \\frac{4}{x^2}}} = 1 \\implies y = 1\\text{ là một TCN. }$$\n- Khi $x \\to -\\infty$ ($x < 0 \\implies \\sqrt{x^2} = -x$):\n  $$\\lim\\limits_{x \\to -\\infty} \\frac{x - 1}{\\sqrt{x^2 - 4}} = \\lim\\limits_{x \\to -\\infty} \\frac{x\\left(1 - \\frac{1}{x}\\right)}{-x\\sqrt{1 - \\frac{4}{x^2}}} = -1 \\implies y = -1\\text{ là một TCN. }$$\n2) Tiệm cận đứng:\n- Tại $x = 2$: $\\lim\\limits_{x \\to 2^+} \\frac{x - 1}{\\sqrt{x^2 - 4}} = \\frac{1}{0^+} = +\\infty \\implies x = 2\\text{ là một TCĐ. }$\n- Tại $x = -2$: $\\lim\\limits_{x \\to -2^-} \\frac{x - 1}{\\sqrt{x^2 - 4}} = \\frac{-3}{0^+} = -\\infty \\implies x = -2\\text{ là một TCĐ. }$\n\nTổng cộng đồ thị hàm số có $2$ tiệm cận ngang và $2$ tiệm cận đứng, tức có tất cả $4$ đường tiệm cận.",
    "socraticHint": "Tính giới hạn tại $+\\infty$ và $-\\infty$ chú ý đưa biến âm ra ngoài dấu căn bậc hai, và tính giới hạn tại các điểm biên làm mẫu bằng 0.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ],
    "answerVerified": true
  },
  {
    "id": 251,
    "latexVerified": true,
    "type": "mcq",
    "topicId": "tiem_can_va_tiem_can_xien",
    "content": "Cho hàm số $y = \\frac{x^2 - 3x + 2}{x - 5}$. Tổng số đường tiệm cận đứng và tiệm cận xiên của đồ thị hàm số đã cho là:",
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
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{5\\}$.\nTại $x = 5$, tử số $5^2 - 3(5) + 2 = 12 \\ne 0$. Do đó $\\lim\\limits_{x \\to 5^+} y = +\\infty$ nên đường thẳng $x = 5$ là tiệm cận đứng.\nChia đa thức: $y = \\frac{x^2 - 3x + 2}{x - 5} = x + 2 + \\frac{12}{x - 5}$.\nVì $\\lim\\limits_{x \\to \\pm\\infty} \\frac{12}{x - 5} = 0$ nên đường thẳng $y = x + 2$ là tiệm cận xiên của đồ thị hàm số.\nVậy đồ thị có tổng cộng 2 đường tiệm cận (1 tiệm cận đứng và 1 tiệm cận xiên).",
    "socraticHint": "Phân thức bậc 2 trên bậc 1 có tiệm cận đứng tại nghiệm của mẫu và tiệm cận xiên bằng thương phép chia đa thức.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "answerVerified": true
  }
];
