import { Question } from '../../../types/exam';

export const congThucPtLuongGiacQuestions: Question[] = [
  {
    "id": 1,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tập nghiệm của phương trình $\\cos 2x = -\\frac{1}{2}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x = \\pm \\frac{\\pi}{3} + k\\pi \\quad (k \\\\in \\mathbb{Z})$"
      },
      {
        "key": "B",
        "content": "$x = \\pm \\frac{2\\pi}{3} + k\\pi \\quad (k \\\\in \\mathbb{Z})$"
      },
      {
        "key": "C",
        "content": "$x = \\pm \\frac{\\pi}{6} + k\\pi \\quad (k \\\\in \\mathbb{Z})$"
      },
      {
        "key": "D",
        "content": "$x = \\frac{\\pi}{3} + k2\\pi \\quad (k \\\\in \\mathbb{Z})$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $-\\frac{1}{2} = \\cos\\left(\\frac{2\\pi}{3}\\right)$.\nDo đó phương trình $\\cos 2x = \\cos\\left(\\frac{2\\pi}{3}\\right) \\iff 2x = \\pm \\frac{2\\pi}{3} + k2\\pi \\iff x = \\pm \\frac{\\pi}{3} + k\\pi$ ($k \\\\in \\mathbb{Z}$).",
    "socraticHint": "Áp dụng công thức nghiệm cơ bản $\\cos u = \\cos \\alpha \\iff u = \\pm \\alpha + k2\\pi$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 2,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Số nghiệm của phương trình $\\sin\\left(x + \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$ trên đoạn $[0; 2\\pi]$ là:",
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
    "correctAnswer": "C",
    "detailedSolution": "Ta có $\\frac{\\sqrt{2}}{2} = \\sin\\frac{\\pi}{4}$. Do đó:\n$$\\begin{cases} x + \\frac{\\pi}{4} = \\frac{\\pi}{4} + k2\\pi \\\\ x + \\frac{\\pi}{4} = \\pi - \\frac{\\pi}{4} + k2\\pi = \\frac{3\\pi}{4} + k2\\pi \\end{cases} \\iff \\begin{cases} x = k2\\pi \\\\ x = \\frac{\\pi}{2} + k2\\pi \\end{cases}$$\nTrên đoạn $[0; 2\\pi]$:\n- Họ nghiệm 1: $x = 0$ và $x = 2\\pi$ (2 nghiệm).\n- Họ nghiệm 2: $x = \\frac{\\pi}{2}$ (1 nghiệm).\nTổng cộng có đúng 3 nghiệm phân biệt.",
    "socraticHint": "Liệt kê các nghiệm từ hai nhánh giải cơ bản và đối chiếu với đoạn $[0; 2\\pi]$. Lưu ý kiểm tra cả hai đầu mút 0 và $2\\pi$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 37,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tính giá trị của biểu thức $P = \\sin^2 10^\\circ + \\sin^2 20^\\circ + \\dots + \\sin^2 80^\\circ$.",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0"
    ],
    "detailedSolution": "Nhận xét: $\\sin^2 80^\\circ = \\cos^2 10^\\circ \\implies \\sin^2 10^\\circ + \\sin^2 80^\\circ = 1$.\nTương tự:\n- $\\sin^2 20^\\circ + \\sin^2 70^\\circ = 1$\n- $\\sin^2 30^\\circ + \\sin^2 60^\\circ = 1$\n- $\\sin^2 40^\\circ + \\sin^2 50^\\circ = 1$\nCó 4 cặp số phụ nhau thành 1, vậy tổng $P = 4 \\times 1 = 4$.",
    "socraticHint": "Hai góc phụ nhau $(\\alpha + \\beta = 90^\\circ)$ thỏa mãn $\\sin^2 \\alpha + \\sin^2 \\beta = 1$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 51,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Giá trị lớn nhất của hàm số $y = 3\\sin x - 4\\cos x + 2$ là:",
    "options": [
      {
        "key": "A",
        "content": "$7$"
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
        "content": "$8$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Biểu thức dạng $a\\sin x + b\\cos x$ có miền giá trị $[-\\sqrt{a^2+b^2}; \\sqrt{a^2+b^2}]$.\nTại đây $\\sqrt{3^2 + (-4)^2} = 5$.\nDo đó giá trị lớn nhất $y_{\\max} = 5 + 2 = 7$.",
    "socraticHint": "Sử dụng bất đẳng thức Bunhiacopxki hoặc biến đổi về góc phụ $\\sqrt{a^2+b^2}\\sin(x + \\varphi)$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 52,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Nghiệm dương nhỏ nhất của phương trình $\\tan x = \\sqrt{3}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{\\pi}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{\\pi}{6}$"
      },
      {
        "key": "C",
        "content": "$\\frac{4\\pi}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{2\\pi}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $\\sqrt{3} = \\tan\\frac{\\pi}{3} \\implies x = \\frac{\\pi}{3} + k\\pi$ ($k \\\\in \\mathbb{Z}$).\nNghiệm dương nhỏ nhất ứng với $k = 0$ là $x = \\frac{\\pi}{3}$.",
    "socraticHint": "Giải phương trình lượng giác cơ bản $\\tan x = \\tan \\alpha \\iff x = \\alpha + k\\pi$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 70,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Đẳng thức nào sau đây đúng với mọi $x$?",
    "options": [
      {
        "key": "A",
        "content": "$\\sin 2x = 2\\sin x \\cos x$"
      },
      {
        "key": "B",
        "content": "$\\cos 2x = \\cos^2 x + \\sin^2 x$"
      },
      {
        "key": "C",
        "content": "$\\sin 2x = \\sin^2 x - \\cos^2 x$"
      },
      {
        "key": "D",
        "content": "$\\cos 2x = 2\\cos x$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo công thức nhân đôi cơ bản: $\\sin 2x = 2\\sin x \\cos x$.",
    "socraticHint": "Kiểm tra công thức lượng giác nhân đôi trong sách giáo khoa.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 81,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Giá trị của $\\cos 60^\\circ + \\sin 30^\\circ$ là:",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$\\frac{\\sqrt{3}}{2}$"
      },
      {
        "key": "C",
        "content": "$\\sqrt{3}$"
      },
      {
        "key": "D",
        "content": "$1/2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$\\cos 60^\\circ = \\frac{1}{2}$, $\\sin 30^\\circ = \\frac{1}{2} \\implies \\frac{1}{2} + \\frac{1}{2} = 1$.",
    "socraticHint": "Tra cứu bảng giá trị lượng giác của các góc cơ bản.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 86,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho góc $\\alpha$ thỏa mãn $\\sin \\alpha = \\frac{3}{5}$ và $0 < \\alpha < \\frac{\\pi}{2}$. Tính giá trị của $\\tan \\alpha$.",
    "correctAnswer": "0.75",
    "acceptableAnswers": [
      "0.75",
      "3/4",
      "0,75"
    ],
    "detailedSolution": "Vì $0 < \\alpha < \\frac{\\pi}{2} \\implies \\cos \\alpha = \\sqrt{1 - \\sin^2 \\alpha} = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$.\nDo đó $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{3/5}{4/5} = \\frac{3}{4} = 0{,}75$.",
    "socraticHint": "Dùng hệ thức $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$, chú ý dấu của $\\cos \\alpha$ trong góc phần tư thứ nhất.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 100,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tính chu kỳ tuần hoàn cơ bản $T$ của hàm số $y = \\sin 2x$ (Nhập giá trị của $T / \\pi$, ví dụ nếu $T = \\pi$ thì nhập 1).",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1",
      "1.0"
    ],
    "detailedSolution": "Chu kỳ cơ bản của hàm số $y = \\sin(\\omega x)$ là $T = \\frac{2\\pi}{|\\omega|}$.\nỞ đây $\\omega = 2 \\implies T = \\frac{2\\pi}{2} = \\pi$. Do đó $T / \\pi = 1$.",
    "socraticHint": "Công thức chu kỳ cơ bản của hàm $\\sin(\\omega x)$ là $T = \\frac{2\\pi}{\\omega}$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 102,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tập nghiệm của phương trình $\\sqrt{3}\\sin x + \\cos x = \\sqrt{2}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x = \\frac{\\pi}{12} + k2\\pi; x = \\frac{7\\pi}{12} + k2\\pi \\quad (k \\\\in \\mathbb{Z})$"
      },
      {
        "key": "B",
        "content": "$x = \\frac{\\pi}{6} + k2\\pi; x = \\frac{5\\pi}{6} + k2\\pi \\quad (k \\\\in \\mathbb{Z})$"
      },
      {
        "key": "C",
        "content": "$x = -\\frac{\\pi}{12} + k2\\pi; x = \\frac{7\\pi}{12} + k2\\pi \\quad (k \\\\in \\mathbb{Z})$"
      },
      {
        "key": "D",
        "content": "$x = \\frac{\\pi}{4} + k2\\pi; x = \\frac{3\\pi}{4} + k2\\pi \\quad (k \\\\in \\mathbb{Z})$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia hai vế cho $\\sqrt{(\\sqrt{3})^2 + 1^2} = 2$:\n$$\\frac{\\sqrt{3}}{2}\\sin x + \\frac{1}{2}\\cos x = \\frac{\\sqrt{2}}{2} \\iff \\sin\\left(x + \\frac{\\pi}{6}\\right) = \\sin\\frac{\\pi}{4}$$\n$$\\iff \\begin{cases} x + \\frac{\\pi}{6} = \\frac{\\pi}{4} + k2\\pi \\\\ x + \\frac{\\pi}{6} = \\pi - \\frac{\\pi}{4} + k2\\pi \\end{cases} \\iff \\begin{cases} x = \\frac{\\pi}{12} + k2\\pi \\\\ x = \\frac{7\\pi}{12} + k2\\pi \\end{cases} \\quad (k \\\\in \\mathbb{Z})$$",
    "socraticHint": "Đưa phương trình bậc nhất đối với $\\sin x$ và $\\cos x$ về dạng $\\sin(x + \\alpha)$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 151,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Giá trị lớn nhất của hàm số $y = 3\\sin x - 4\\cos x + 5$ là:",
    "options": [
      {
        "key": "A",
        "content": "$10$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$12$"
      },
      {
        "key": "D",
        "content": "$7$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Biểu thức $3\\sin x - 4\\cos x$ có dạng $asin x + bcos x$.\nGiá trị lớn nhất của $3\\sin x - 4\\cos x$ là $\\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$.\nDo đó giá trị lớn nhất của $y$ là $5 + 5 = 10$.",
    "socraticHint": "Biểu thức $asin x + bcos x$ luôn thuộc đoạn $[-\\sqrt{a^2+b^2}; \\sqrt{a^2+b^2}]$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 187,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho phương trình $\\cos 2x - 3\\cos x + 2 = 0$. Tổng tất cả các nghiệm của phương trình thuộc đoạn $[0; 2\\pi]$ bằng $k\\pi$. Giá trị của $k$ bằng bao nhiêu?",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0"
    ],
    "detailedSolution": "Biến đổi $\\cos 2x = 2\\cos^2 x - 1$:\n$$2\\cos^2 x - 1 - 3\\cos x + 2 = 0 \\iff 2\\cos^2 x - 3\\cos x + 1 = 0$$\n$$\\iff (\\cos x - 1)(2\\cos x - 1) = 0 \\iff \\begin{cases} \\cos x = 1 \\\\ \\cos x = \\frac{1}{2} \\end{cases}$$\nTrên đoạn $[0; 2\\pi]$:\n- $\\cos x = 1 \\iff x = 0$ hoặc $x = 2\\pi$.\n- $\\cos x = \\frac{1}{2} \\iff x = \\frac{\\pi}{3}$ hoặc $x = \\frac{5\\pi}{3}$.\nTổng các nghiệm là: $S = 0 + 2\\pi + \\frac{\\pi}{3} + \\frac{5\\pi}{3} = 4\\pi$.\nVậy $k = 4$.",
    "socraticHint": "Dùng công thức nhân đôi đưa về phương trình bậc hai đối với $\\cos x$, sau đó liệt kê nghiệm trên $[0; 2\\pi]$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 279,
    "type": "mcq",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "content": "Phương trình $\\cos x = \\frac{x^2}{2} + x + 1$ có bao nhiêu nghiệm thực?",
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
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Nhận thấy tại $x = 0$:\n$$\\cos 0 = 1, \\quad \\frac{0^2}{2} + 0 + 1 = 1$$\nVậy $x = 0$ là một nghiệm của phương trình.\nTa chứng minh phương trình không còn nghiệm nào khác:\nXét hàm số $f(x) = \\frac{x^2}{2} + x + 1 - \\cos x$.\n- $f'(x) = x + 1 + \\sin x$.\n- $f''(x) = 1 + \\cos x \\ge 0$ với mọi $x \\\\in \\mathbb{R}$.\nDo $f''(x) \\ge 0$ nên $f'(x)$ là hàm đồng biến trên $\\mathbb{R}$.\nTa có $f'(0) = 0 + 1 + \\sin 0 = 1 > 0$. Suy ra $f'(x) = 0$ có tối đa 1 nghiệm và $f(x)$ đạt cực tiểu tại điểm đó, dẫn đến phương trình $f(x) = 0$ có duy nhất nghiệm $x = 0$.",
    "socraticHint": "Kiểm tra nghiệm đặc biệt $x = 0$ và khảo sát đạo hàm cấp hai $f''(x) = 1 + \\cos x \\ge 0$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Công thức & Phương trình lượng giác",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)"
  }
];
