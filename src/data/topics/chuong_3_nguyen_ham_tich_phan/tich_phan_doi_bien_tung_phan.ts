import { Question } from '../../../types/exam';

export const doiBienTungPhanQuestions: Question[] = [
  {
    "id": 12,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "tich_phan_doi_bien_tung_phan",
    "topicName": "Tích phân đổi biến số & Từng phần",
    "content": "Biết $\\int_1^e x \\ln x \\, dx = \\frac{a e^2 + b}{4}$ với $a, b \\in \\mathbb{Z}$. Tính $P = a^2 + b^2$.",
    "options": [
      {
        "key": "A",
        "content": "$P = 2$"
      },
      {
        "key": "B",
        "content": "$P = 5$"
      },
      {
        "key": "C",
        "content": "$P = 10$"
      },
      {
        "key": "D",
        "content": "$P = 13$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Dùng tích phân từng phần: đặt $u = \\ln x, dv = x dx \\implies du = \\frac{dx}{x}, v = \\frac{x^2}{2}$.\n$$I = \\left[ \\frac{x^2}{2} \\ln x \\right]_1^e - \\int_1^e \\frac{x}{2} dx = \\frac{e^2}{2} - \\left[ \\frac{x^2}{4} \\right]_1^e = \\frac{e^2}{2} - \\frac{e^2 - 1}{4} = \\frac{e^2 + 1}{4}$$.\nSuy ra $a = 1, b = 1 \\implies P = 1^2 + 1^2 = 2$.",
    "socraticHint": "Áp dụng công thức tích phân từng phần $\\int u dv = uv - \\int v du$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 39,
    "type": "fill",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "tich_phan_doi_bien_tung_phan",
    "topicName": "Tích phân đổi biến số & Từng phần",
    "content": "Biết $\\int_0^1 (2x + 1) e^x dx = a \\cdot e + b$ ($a, b \\in \\mathbb{Z}$). Hãy tính tổng $a + b$.",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2",
      "2.0"
    ],
    "detailedSolution": "Tích phân từng phần: đặt $u = 2x + 1, dv = e^x dx \\implies du = 2dx, v = e^x$.\n$$I = [(2x + 1)e^x]_0^1 - \\int_0^1 2e^x dx = 3e - 1 - 2(e - 1) = e + 1$$.\nSuy ra $a = 1, b = 1 \\implies a + b = 2$.",
    "socraticHint": "Tích phân từng phần với đa thức nhân hàm mũ.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 161,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "tich_phan_doi_bien_tung_phan",
    "topicName": "Tích phân đổi biến số & Từng phần",
    "content": "Tính tích phân $I = \\int_0^{\\pi/2} x \\cos x dx$.",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{\\pi}{2} - 1$"
      },
      {
        "key": "B",
        "content": "$\\frac{\\pi}{2} + 1$"
      },
      {
        "key": "C",
        "content": "$1 - \\frac{\\pi}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{\\pi}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng phương pháp tích phân từng phần:\nĐặt $\\begin{cases} u = x \\implies du = dx \\\\ dv = \\cos x dx \\implies v = \\sin x \\end{cases}$\nTa có:\n$$I = [x \\sin x]_0^{\\pi/2} - \\int_0^{\\pi/2} \\sin x dx = \\left(\\frac{\\pi}{2} \\sin\\frac{\\pi}{2} - 0\\right) - [-\\cos x]_0^{\\pi/2}$$\n$$= \\frac{\\pi}{2} - (0 - (-1)) = \\frac{\\pi}{2} - 1$$.",
    "socraticHint": "Tích phân hàm đa thức nhân lượng giác dùng phương pháp từng phần: đặt $u = x, dv = \\cos x dx$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 191,
    "type": "fill",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "tich_phan_doi_bien_tung_phan",
    "topicName": "Tích phân đổi biến số & Từng phần",
    "content": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và thỏa mãn $\\int_0^6 f(x) dx = 18$. Tính giá trị của tích phân $J = \\int_0^2 f(3x) dx$.",
    "correctAnswer": "6",
    "acceptableAnswers": [
      "6",
      "6.0"
    ],
    "detailedSolution": "Đặt $t = 3x \\implies dt = 3dx \\implies dx = \\frac{dt}{3}$.\nĐổi cận:\n- $x = 0 \\implies t = 0$\n- $x = 2 \\implies t = 6$\nTích phân trở thành:\n$$J = \\int_0^6 f(t) \\frac{dt}{3} = \\frac{1}{3} \\int_0^6 f(t) dt = \\frac{1}{3} \\times 18 = 6$$.",
    "socraticHint": "Đổi biến số $t = 3x$, chú ý đổi cận và vi phân $dx = \\frac{1}{3}dt$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 234,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "tich_phan_doi_bien_tung_phan",
    "topicName": "Tích phân đổi biến số & Từng phần",
    "content": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $f(x) = x^3 + 3\\int_0^1 x^4 f(x) dx, \\forall x \\in \\mathbb{R}$. Tính $f(-1)$.",
    "options": [
      {
        "key": "A",
        "content": "$-\\frac{1}{16}$"
      },
      {
        "key": "B",
        "content": "$-\\frac{1}{8}$"
      },
      {
        "key": "C",
        "content": "$\\frac{31}{16}$"
      },
      {
        "key": "D",
        "content": "$\\frac{15}{8}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong biểu thức, tích phân xác định $I = \\int_0^1 t^4 f(t) dt$ là một hằng số $C$.\nDo đó ta có dạng hàm số:\n$$f(x) = x^3 + 3C$$\nThay lại biểu thức này vào định nghĩa của hằng số $C$:\n$$C = \\int_0^1 x^4 f(x) dx = \\int_0^1 x^4 (x^3 + 3C) dx$$\n$$C = \\int_0^1 (x^7 + 3C x^4) dx = \\left[ \\frac{x^8}{8} + 3C \\frac{x^5}{5} \\right]_0^1 = \\frac{1}{8} + \\frac{3}{5} C$$\n$$\\iff C - \\frac{3}{5} C = \\frac{1}{8} \\iff \\frac{2}{5} C = \\frac{1}{8} \\implies C = \\frac{5}{16}$$\nKhi đó hàm số là:\n$$f(x) = x^3 + 3 \\cdot \\frac{5}{16} = x^3 + \\frac{15}{16}$$\nGiá trị cần tính:\n$$f(-1) = (-1)^3 + \\frac{15}{16} = -1 + \\frac{15}{16} = -\\frac{1}{16}$$",
    "socraticHint": "Tích phân xác định $\\int_0^1 x^4 f(x) dx$ là một hằng số $C$. Đặt $C$ rồi thay $f(x) = x^3 + 3C$ vào tích phân để giải tìm $C$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 235,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "tich_phan_doi_bien_tung_phan",
    "topicName": "Tích phân đổi biến số & Từng phần",
    "content": "Cho hàm số $f(x)$ liên tục trên khoảng $(0; +\\infty)$ thỏa mãn $f(x) + 2xf'(x) = 6x^2 \\sqrt{x}, \\forall x \\in (0; +\\infty)$ và $f(4) = 33$. Tính $\\int_1^9 f(x) dx$.",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{2584}{9}$"
      },
      {
        "key": "B",
        "content": "$\\frac{3149}{5}$"
      },
      {
        "key": "C",
        "content": "$\\frac{4428}{7}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1868}{3}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Chia hai vế phương trình cho $2\\sqrt{x} > 0$:\n$$\\frac{1}{2\\sqrt{x}} f(x) + \\sqrt{x} f'(x) = \\frac{6x^2\\sqrt{x}}{2\\sqrt{x}} = 3x^2$$\nVế trái chính là đạo hàm của tích $(\\sqrt{x} \\cdot f(x))'$:\n$$(\\sqrt{x} \\cdot f(x))' = 3x^2$$\nLấy nguyên hàm hai vế:\n$$\\sqrt{x} \\cdot f(x) = x^3 + C$$\nThay $x = 4$ vào giả thiết $f(4) = 33$:\n$$\\sqrt{4} \\cdot 33 = 4^3 + C \\iff 66 = 64 + C \\implies C = 2$$\nDo đó:\n$$\\sqrt{x} \\cdot f(x) = x^3 + 2 \\implies f(x) = \\frac{x^3 + 2}{\\sqrt{x}} = x^{5/2} + 2x^{-1/2}$$\nTính tích phân:\n$$\\int_1^9 f(x) dx = \\int_1^9 (x^{5/2} + 2x^{-1/2}) dx = \\left[ \\frac{2}{7} x^{7/2} + 4x^{1/2} \\right]_1^9$$\n- Tại $x = 9$: $\\frac{2}{7} (3^2)^{7/2} + 4(3) = \\frac{2}{7} (2187) + 12 = \\frac{4374}{7} + \\frac{84}{7} = \\frac{4458}{7}$.\n- Tại $x = 1$: $\\frac{2}{7} (1) + 4(1) = \\frac{2}{7} + \\frac{28}{7} = \\frac{30}{7}$.\nKết quả tích phân:\n$$\\int_1^9 f(x) dx = \\frac{4458}{7} - \\frac{30}{7} = \\frac{4428}{7}$$",
    "socraticHint": "Nhận dạng vế trái là vi phân của $(\\sqrt{x} f(x))'$, tích phân hai vế để xác định biểu thức của $f(x)$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  }
];
