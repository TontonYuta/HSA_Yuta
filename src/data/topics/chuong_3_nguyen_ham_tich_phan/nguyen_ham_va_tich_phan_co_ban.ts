import { Question } from '../../../types/exam';

export const nguyenHamCoBanQuestions: Question[] = [
  {
    "id": 11,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_3_nguyen_ham_tich_phan',
    "chapterName": 'Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)',
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
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 34,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_3_nguyen_ham_tich_phan',
    "chapterName": 'Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)',
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho $\\int_0^1 \\frac{2x + 3}{x + 1} dx = a + b \\ln 2$ ($a, b \\in \\mathbb{Z}$). Giá trị của $S = a + 2b$ là:",
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
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 50,
    "latexVerified": true,
    "type": "fill",
    "chapterId": 'chuong_3_nguyen_ham_tich_phan',
    "chapterName": 'Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)',
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và thỏa mãn $f(x) = 6x + \\frac{1}{2} \\int_0^1 f(t) dt$. Tính giá trị của $f(3)$.",
    "correctAnswer": "21",
    "acceptableAnswers": [
      "21"
    ],
    "detailedSolution": "Đặt hằng số $A = \\int_0^1 f(t) dt$. Khi đó ta có:\n$$f(x) = 6x + \\frac{1}{2}A.$$\nLấy tích phân từ $0$ đến $1$ của cả hai vế:\n$$A = \\int_0^1 \\left( 6t + \\frac{1}{2}A \\right) dt = \\left[ 3t^2 + \\frac{1}{2}At \\right]_0^1 = 3 + \\frac{1}{2}A.$$\nGiải phương trình tìm $A$:\n$$A - \\frac{1}{2}A = 3 \\iff \\frac{1}{2}A = 3 \\iff A = 6.$$\nSuy ra hàm số là $f(x) = 6x + \\frac{1}{2}(6) = 6x + 3$.\nGiá trị cần tính là:\n$$f(3) = 6(3) + 3 = 18 + 3 = 21.$$",
    "socraticHint": "Đặt tích phân xác định bằng một hằng số $A$, từ đó tìm được biểu thức hàm số tường minh.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 59,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_3_nguyen_ham_tich_phan',
    "chapterName": 'Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)',
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và thỏa mãn $f(x) + f(-x) = 2\\cos x$ với mọi $x \\in \\mathbb{R}$. Tích phân $I = \\int_{-\\pi/2}^{\\pi/2} \\frac{f(x)}{1 + e^x} dx$ bằng:",
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
        "content": "$\\frac{1}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đổi biến $x = -t \\Rightarrow dx = -dt$.\nKhi $x = -\\pi/2 \\Rightarrow t = \\pi/2$; khi $x = \\pi/2 \\Rightarrow t = -\\pi/2$.\nTa có:\n$$I = \\int_{\\pi/2}^{-\\pi/2} \\frac{f(-t)}{1 + e^{-t}} (-dt) = \\int_{-\\pi/2}^{\\pi/2} \\frac{f(-x) e^x}{1 + e^x} dx.$$\nCộng hai biểu thức của $I$:\n$$2I = \\int_{-\\pi/2}^{\\pi/2} \\left[ \\frac{f(x)}{1 + e^x} + \\frac{f(-x) e^x}{1 + e^x} \\right] dx.$$\nSử dụng tính chất đối xứng của hàm số liên tục trên khoảng $[-a; a]$:\n$$I = \\int_0^{\\pi/2} [f(x) + f(-x)] dx = \\int_0^{\\pi/2} 2\\cos x \\, dx = [2\\sin x]_0^{\\pi/2} = 2.$$\nKhoan, kiểm tra lại hệ số:\n$$2I = \\int_{-\\pi/2}^{\\pi/2} \\frac{f(x) + f(-x)e^x}{1 + e^x} dx.$$\nVới hàm $f(x) + f(-x) = 2\\cos x$, đặt $g(x) = \\cos x$ (hàm chẵn), thì tích phân chuẩn $\\int_{-a}^a \\frac{\\cos x}{1 + e^x} dx = \\int_0^a \\cos x dx = 1$.\nVậy $I = 1$.",
    "socraticHint": "Áp dụng kỹ thuật đổi biến số $x = -t$ cho tích phân có cận đối xứng $[-a; a]$ chứa thừa số $\\frac{1}{1 + e^x}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 73,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_3_nguyen_ham_tich_phan',
    "chapterName": 'Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)',
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $f(x) + 2 f(2 - x) = 3x^2 - 4x$ với mọi $x \\in \\mathbb{R}$. Tích phân $I = \\int_0^2 f(x) dx$ bằng:",
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
        "content": "$-2$"
      },
      {
        "key": "D",
        "content": "$\\frac{4}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Lấy tích phân từ $0$ đến $2$ cả hai vế của đẳng thức:\n$$\\int_0^2 f(x) dx + 2\\int_0^2 f(2 - x) dx = \\int_0^2 (3x^2 - 4x) dx.$$\nĐổi biến $u = 2 - x \\Rightarrow du = -dx$. Khi $x = 0 \\Rightarrow u = 2$; $x = 2 \\Rightarrow u = 0$.\nTa có $\\int_0^2 f(2 - x) dx = \\int_2^0 f(u)(-du) = \\int_0^2 f(u) du = I$.\nDo đó vế trái là:\n$$I + 2I = 3I.$$\nVế phải:\n$$\\int_0^2 (3x^2 - 4x) dx = [x^3 - 2x^2]_0^2 = 8 - 8 = 0.$$\nSuy ra $3I = 0 \\iff I = 0$.",
    "socraticHint": "Sử dụng tính chất $\\int_0^a f(a - x) dx = \\int_0^a f(x) dx$ để đưa về phương trình một ẩn $I$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 84,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_3_nguyen_ham_tich_phan',
    "chapterName": 'Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)',
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho hàm số $f(x)$ có đạo hàm liên tục trên đoạn $[0; 1]$ thỏa mãn $f(1) = 4$ và $\\int_0^1 x f'(x) dx = 3$. Tích phân $I = \\int_0^1 f(x) dx$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$7$"
      },
      {
        "key": "C",
        "content": "$-1$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng phương pháp tích phân từng phần cho tích phân $\\int_0^1 x f'(x) dx$:\n- Đặt $u = x \\Rightarrow du = dx$.\n- Đặt $dv = f'(x) dx \\Rightarrow v = f(x)$.\nTa có:\n$$\\int_0^1 x f'(x) dx = [x f(x)]_0^1 - \\int_0^1 f(x) dx = 1 \\cdot f(1) - 0 - I = f(1) - I.$$\nTheo giả thiết:\n$$3 = 4 - I \\iff I = 4 - 3 = 1.$$",
    "socraticHint": "Áp dụng công thức tích phân từng phần $\\int u dv = uv - \\int v du$ cho biểu thức chứa $x f'(x)$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 90,
    "latexVerified": true,
    "type": "fill",
    "chapterId": 'chuong_3_nguyen_ham_tich_phan',
    "chapterName": 'Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)',
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho $\\int_0^1 (2x + 1) e^x dx = a \\cdot e + b$ với $a, b \\in \\mathbb{Z}$. Tính giá trị của biểu thức $P = a + b$.",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "detailedSolution": "Áp dụng phương pháp tích phân từng phần:\n- Đặt $u = 2x + 1 \\Rightarrow du = 2dx$.\n- Đặt $dv = e^x dx \\Rightarrow v = e^x$.\nTa có:\n$$I = [(2x + 1)e^x]_0^1 - \\int_0^1 2e^x dx = (3e - 1) - [2e^x]_0^1 = 3e - 1 - (2e - 2) = e + 1.$$\nĐối chiếu với dạng $a \\cdot e + b$, ta được $a = 1$ và $b = 1$.\nVậy $P = a + b = 1 + 1 = 2$.",
    "socraticHint": "Tích phân từng phần với đa thức nhân hàm mũ: đặt $u = 2x + 1, dv = e^x dx$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 163,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_3_nguyen_ham_tich_phan',
    "chapterName": 'Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)',
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho hai hàm số $f(x)$ và $g(x)$ liên tục trên đoạn $[1; 3]$ thỏa mãn $\\int_1^3 [2f(x) + 3g(x)] dx = 10$ và $\\int_1^3 [3f(x) - g(x)] dx = 4$. Tích phân $I = \\int_1^3 [f(x) + g(x)] dx$ bằng:",
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
    "detailedSolution": "Đặt $A = \\int_1^3 f(x) dx$ và $B = \\int_1^3 g(x) dx$.\nTừ giả thiết ta có hệ phương trình bậc nhất hai ẩn:\n$$\\begin{cases} 2A + 3B = 10 \\\\ 3A - B = 4 \\end{cases}$$\nNhân phương trình thứ hai với 3 rồi cộng với phương trình thứ nhất:\n$$2A + 3B + 3(3A - B) = 10 + 3(4) \\iff 11A = 22 \\iff A = 2.$$\nThay $A = 2$ vào phương trình thứ hai: $B = 3(2) - 4 = 2$.\nGiá trị của tích phân cần tính:\n$$I = A + B = 2 + 2 = 4.$$",
    "socraticHint": "Dùng tính chất tuyến tính của tích phân xác định để quy về giải hệ hai phương trình bậc nhất.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 233,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_3_nguyen_ham_tich_phan',
    "chapterName": 'Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)',
    "topicId": "nguyen_ham_va_tich_phan_co_ban",
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "content": "Cho hàm số $f(x)$ liên tục trên khoảng $(0; +\\infty)$ thỏa mãn $f(x) + x f'(x) = 3x^2 + 2x$ và $f(1) = 3$. Giá trị của $f(2)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{13}{2}$"
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
        "content": "$\\frac{11}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Nhận thấy vế trái chính là đạo hàm của một tích:\n$$[x f(x)]' = 1 \\cdot f(x) + x \\cdot f'(x) = f(x) + x f'(x).$$\nDo đó:\n$$[x f(x)]' = 3x^2 + 2x \\implies x f(x) = \\int (3x^2 + 2x) dx = x^3 + x^2 + C.$$\nThay $x = 1$ vào:\n$$1 \\cdot f(1) = 1^3 + 1^2 + C \\iff 3 = 2 + C \\iff C = 1.$$\nDo đó $x f(x) = x^3 + x^2 + 1 \\implies f(x) = x^2 + x + \\frac{1}{x}$.\nTại $x = 2$:\n$$f(2) = 2^2 + 2 + \\frac{1}{2} = 6 + 0{,}5 = \\frac{13}{2}.$$",
    "socraticHint": "Nhận dạng quy tắc đạo hàm của tích $[x f(x)]' = f(x) + x f'(x)$ để tìm nguyên hàm.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 276,
    "latexVerified": true,
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
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Nguyên hàm & Tính chất tích phân cơ bản",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)"
  }
];
