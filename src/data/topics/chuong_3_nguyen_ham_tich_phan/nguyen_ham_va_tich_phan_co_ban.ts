import { Question } from '../../../types/exam';

export const nguyenHamCoBanQuestions: Question[] = [
  {
    "id": 11,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho hàm số $f(x)$ thỏa mãn $f'(x) + 2x f(x) = 2x e^{-x^2}$ và $f(0) = 3$. Giá trị của $f(1)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$4/e$"
      },
      {
        "key": "B",
        "content": "$2/e$"
      },
      {
        "key": "C",
        "content": "$4e$"
      },
      {
        "key": "D",
        "content": "$3/e$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Nhân hai vế với thừa số tích phân $e^{x^2}$:\n$$e^{x^2} f'(x) + 2x e^{x^2} f(x) = 2x \\iff [e^{x^2} f(x)]' = 2x$$\nLấy tích phân hai vế từ 0 đến 1:\n$$[e^{x^2} f(x)]_0^1 = [x^2]_0^1 \\implies e f(1) - f(0) = 1 \\implies e f(1) - 3 = 1 \\implies f(1) = \\frac{4}{e}$$.",
    "socraticHint": "Dạng phương trình vi phân tuyến tính cấp 1: $y' + p(x)y = q(x)$ nhân với $e^{\\int p(x)dx}$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 34,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho $\\int_0^1 \\frac{2x + 3}{x + 1} dx = a + b \\ln 2$ ($a, b \\\\in \\mathbb{Z}$). Giá trị của $S = a + 2b$ là:",
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
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tách biểu thức: $\\frac{2x + 3}{x + 1} = 2 + \\frac{1}{x + 1}$.\n$$\\int_0^1 \\left( 2 + \\frac{1}{x + 1} \\right) dx = [2x + \\ln(x + 1)]_0^1 = 2 + \\ln 2$$.\nSuy ra $a = 2, b = 1 \\implies S = 2 + 2(1) = 4$.",
    "socraticHint": "Chia tử cho mẫu rồi tính nguyên hàm từng thành phần.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 50,
    "type": "fill",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho hàm số $f(x)$ thỏa mãn $f(0) = 1$ và $f'(x) = 3x^2 + 2x$. Hãy tính giá trị của $f(2)$.",
    "correctAnswer": "13",
    "acceptableAnswers": [
      "13",
      "13.0"
    ],
    "detailedSolution": "Nguyên hàm $f(x) = x^3 + x^2 + C$.\nVì $f(0) = 1 \\implies C = 1$.\nDo đó $f(x) = x^3 + x^2 + 1 \\implies f(2) = 2^3 + 2^2 + 1 = 8 + 4 + 1 = 13$.",
    "socraticHint": "Xác định hàm ban đầu từ đạo hàm và điều kiện biên ban đầu.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 59,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Họ nguyên hàm của hàm số $f(x) = \\cos 2x$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{2}\\sin 2x + C$"
      },
      {
        "key": "B",
        "content": "$-\\frac{1}{2}\\sin 2x + C$"
      },
      {
        "key": "C",
        "content": "$2\\sin 2x + C$"
      },
      {
        "key": "D",
        "content": "$\\sin 2x + C$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $\\int \\cos 2x dx = \\frac{1}{2}\\sin 2x + C$.",
    "socraticHint": "Áp dụng công thức $\\int \\cos(ax+b) dx = \\frac{1}{a}\\sin(ax+b) + C$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 73,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Tính tích phân $I = \\int_0^1 e^{2x} dx$.",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{e^2 - 1}{2}$"
      },
      {
        "key": "B",
        "content": "$e^2 - 1$"
      },
      {
        "key": "C",
        "content": "$\\frac{e^2 + 1}{2}$"
      },
      {
        "key": "D",
        "content": "$2(e^2 - 1)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$I = [\\frac{1}{2} e^{2x}]_0^1 = \\frac{1}{2}(e^2 - 1)$.",
    "socraticHint": "Nguyên hàm hàm mũ $e^{kx}$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 84,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho $\\int_1^3 f(x) dx = 5$. Giá trị của $\\int_1^3 2f(x) dx$ là:",
    "options": [
      {
        "key": "A",
        "content": "$10$"
      },
      {
        "key": "B",
        "content": "$7$"
      },
      {
        "key": "C",
        "content": "$25$"
      },
      {
        "key": "D",
        "content": "$5/2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo tính chất tuyến tính: $\\int_1^3 2f(x) dx = 2 \\int_1^3 f(x) dx = 2(5) = 10$.",
    "socraticHint": "Tính chất tuyến tính của tích phân xác định.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 90,
    "type": "fill",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Tính giá trị của tích phân $I = \\int_0^2 3x^2 dx$.",
    "correctAnswer": "8",
    "acceptableAnswers": [
      "8",
      "8.0"
    ],
    "detailedSolution": "$I = [x^3]_0^2 = 2^3 - 0 = 8$.",
    "socraticHint": "Nguyên hàm cơ bản của $3x^2$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 163,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho $\\int_1^3 f(x) dx = 4$ và $\\int_1^3 g(x) dx = -2$. Giá trị của tích phân $I = \\int_1^3 [2f(x) - 3g(x)] dx$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$14$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$10$"
      },
      {
        "key": "D",
        "content": "$-2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng tính chất tuyến tính của tích phân:\n$$I = 2int_1^3 f(x) dx - 3int_1^3 g(x) dx = 2(4) - 3(-2) = 8 + 6 = 14$$.",
    "socraticHint": "Áp dụng tính chất tuyến tính $\\int [af(x) + bg(x)] dx = aint f(x) dx + bint g(x) dx$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 233,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Họ nguyên hàm của hàm số $f(x) = \\left(\\sin \\frac{x}{2} - \\cos \\frac{x}{2}\\right)^2$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x - \\cos x + C$"
      },
      {
        "key": "B",
        "content": "$x + \\cos x + C$"
      },
      {
        "key": "C",
        "content": "$x + \\sin x + C$"
      },
      {
        "key": "D",
        "content": "$x - \\sin x + C$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Khai triển biểu thức hàm số dưới dấu tích phân:\n$$f(x) = \\sin^2 \\frac{x}{2} - 2\\sin \\frac{x}{2}\\cos \\frac{x}{2} + \\cos^2 \\frac{x}{2}$$\n$$f(x) = \\left(\\sin^2 \\frac{x}{2} + \\cos^2 \\frac{x}{2}\\right) - \\sin\\left(2 \\cdot \\frac{x}{2}\\right) = 1 - \\sin x$$\nTìm họ nguyên hàm:\n$$\\int f(x) dx = \\int (1 - \\sin x) dx = x - (-\\cos x) + C = x + \\cos x + C$$",
    "socraticHint": "Khai triển hằng đẳng thức và dùng công thức góc nhân đôi: $2\\sin(x/2)\\cos(x/2) = \\sin x$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 276,
    "type": "mcq",
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "content": "Có bao nhiêu số thực $a < -1$ để $\\int_0^1 \\frac{1}{x + a} dx = \\ln\\left(\\frac{1}{2}\\right)$?",
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
        "content": "$3$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Với $a < -1$, ta có $x + a < 0$ với mọi $x \\in [0; 1]$.\nDo đó: $\\int_0^1 \\frac{1}{x + a} dx = \\ln|x + a| \\Big|_0^1 = \\ln|1 + a| - \\ln|a| = \\ln\\left|\\frac{1 + a}{a}\\right| = \\ln\\left(\\frac{-1 - a}{-a}\\right) = \\ln\\left(\\frac{a + 1}{a}\\right)$.\nTheo đề bài:\n$$\\ln\\left(\\frac{a + 1}{a}\\right) = \\ln\\left(\\frac{1}{2}\\right) \\iff \\frac{a + 1}{a} = \\frac{1}{2} \\iff 2(a + 1) = a \\iff 2a + 2 = a \\iff a = -2$$\nGiá trị $a = -2$ thỏa mãn điều kiện $a < -1$.\nVậy có đúng 1 số thực $a$ thỏa mãn.",
    "socraticHint": "Chú ý tính dấu của biểu thức trong dấu giá trị tuyệt đối khi $x \\in [0; 1]$ và $a < -1$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân"
  }
];
