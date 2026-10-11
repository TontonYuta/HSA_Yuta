import { Question } from '../../../types/exam';

export const matPhangDuongThangQuestions: Question[] = [
  {
    "id": 18,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Côsin của góc giữa hai đường thẳng $d_1: \\frac{x-1}{2} = \\frac{y}{1} = \\frac{z+1}{-2}$ và $d_2: \\frac{x}{1} = \\frac{y-1}{-2} = \\frac{z-2}{2}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$4/9$"
      },
      {
        "key": "B",
        "content": "$-4/9$"
      },
      {
        "key": "C",
        "content": "$2/9$"
      },
      {
        "key": "D",
        "content": "$1/3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vectơ chỉ phương $\\vec{u}_1 = (2; 1; -2)$ và $\\vec{u}_2 = (1; -2; 2)$.\n$$\\cos \\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1||\\vec{u}_2|} = \\frac{|2(1) + 1(-2) + (-2)(2)|}{\\sqrt{4+1+4}\\sqrt{1+4+4}} = \\frac{|2 - 2 - 4|}{3 \\times 3} = \\frac{4}{9}$$.",
    "socraticHint": "Góc giữa hai đường thẳng luôn thỏa mãn $0^\\circ \\le \\varphi \\le 90^\\circ$, do đó côsin luôn không âm.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 19,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Mặt phẳng $(P)$ đi qua $A(1; -2; 3)$ và vuông góc với đường thẳng $d: \\frac{x-2}{3} = \\frac{y+1}{-1} = \\frac{z}{2}$ có phương trình:",
    "options": [
      {
        "key": "A",
        "content": "$3x - y + 2z - 11 = 0$"
      },
      {
        "key": "B",
        "content": "$3x - y + 2z + 11 = 0$"
      },
      {
        "key": "C",
        "content": "$x - 2y + 3z - 14 = 0$"
      },
      {
        "key": "D",
        "content": "$3x + y - 2z + 5 = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vectơ pháp tuyến của $(P)$ là $\\vec{u}_d = (3; -1; 2)$.\nPhương trình: $3(x - 1) - 1(y + 2) + 2(z - 3) = 0 \\iff 3x - y + 2z - 11 = 0$.",
    "socraticHint": "Mặt phẳng vuông góc đường thẳng thì vectơ chỉ phương của đường thẳng là vectơ pháp tuyến của mặt phẳng.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 33,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Mặt phẳng trung trực của đoạn thẳng $AB$ với $A(1; 1; -2)$ và $B(3; -1; 0)$ có phương trình:",
    "options": [
      {
        "key": "A",
        "content": "$x - y + z - 1 = 0$"
      },
      {
        "key": "B",
        "content": "$x - y + z + 1 = 0$"
      },
      {
        "key": "C",
        "content": "$2x - 2y + 2z - 3 = 0$"
      },
      {
        "key": "D",
        "content": "$x + y - z - 2 = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trung điểm $M(2; 0; -1)$. VTPT $\\vec{AB} = (2; -2; 2) = 2(1; -1; 1)$.\nPhương trình: $1(x - 2) - 1(y - 0) + 1(z + 1) = 0 \\iff x - y + z - 1 = 0$.",
    "socraticHint": "Mặt phẳng trung trực đi qua trung điểm và vuông góc với đoạn thẳng.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 64,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Vectơ nào sau đây là vectơ chỉ phương của đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -1 - t \\\\ z = 3 + 4t \\end{cases}$?",
    "options": [
      {
        "key": "A",
        "content": "$\\vec{u} = (2; -1; 4)$"
      },
      {
        "key": "B",
        "content": "$\\vec{u} = (1; -1; 3)$"
      },
      {
        "key": "C",
        "content": "$\\vec{u} = (2; 1; 4)$"
      },
      {
        "key": "D",
        "content": "$\\vec{u} = (-2; 1; 4)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hệ số của $t$ cho ta tọa độ vectơ chỉ phương: $\\vec{u} = (2; -1; 4)$.",
    "socraticHint": "Vectơ chỉ phương lấy từ hệ số của tham số $t$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 118,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x - 4y + 6z - 2 = 0$ và mặt phẳng $(P): 2x - y + 2z + 12 = 0$. Bán kính $r$ của đường tròn giao tuyến giữa $(P)$ và $(S)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$2sqrt{3}$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$\\sqrt{7}$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tâm mặt cầu $I(1; 2; -3)$, bán kính $R = \\sqrt{1^2 + 2^2 + (-3)^2 - (-2)} = \\sqrt{16} = 4$.\nKhoảng cách từ tâm $I$ đến $(P)$:\n$$d = \\frac{|2(1) - 2 + 2(-3) + 12|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|2 - 2 - 6 + 12|}{3} = \\frac{6}{3} = 2$$\nBán kính đường tròn giao tuyến là:\n$$r = \\sqrt{R^2 - d^2} = \\sqrt{4^2 - 2^2} = \\sqrt{12} = 2sqrt{3}$$.",
    "socraticHint": "Sử dụng hệ thức Pytago liên hệ bán kính mặt cầu, khoảng cách và bán kính đường tròn: $r = \\sqrt{R^2 - d^2}$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 119,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Trong không gian $Oxyz$, mặt phẳng $(\\alpha)$ đi qua điểm $M(1; 2; 3)$ và cắt ba tia $Ox, Oy, Oz$ lần lượt tại $A, B, C$ sao cho $OA = OB = OC > 0$. Phương trình của $(\\alpha)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x + y + z - 6 = 0$"
      },
      {
        "key": "B",
        "content": "$x + y + z - 1 = 0$"
      },
      {
        "key": "C",
        "content": "$x + y + z + 6 = 0$"
      },
      {
        "key": "D",
        "content": "$2x + y + z - 7 = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $OA = OB = OC = a > 0$, tọa độ các giao điểm là $A(a; 0; 0), B(0; a; 0), C(0; 0; a)$.\nPhương trình mặt phẳng theo đoạn chắn:\n$$\\frac{x}{a} + \\frac{y}{a} + \\frac{z}{a} = 1 \\iff x + y + z = a$$\nMặt phẳng đi qua $M(1; 2; 3)$ nên:\n$$1 + 2 + 3 = a \\implies a = 6$$\nPhương trình của mặt phẳng là $x + y + z - 6 = 0$.",
    "socraticHint": "Sử dụng phương trình mặt phẳng theo đoạn chắn $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$ với $a = b = c$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 135,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -1)$ và $B(3; 0; 3)$. Mặt phẳng trung trực của đoạn thẳng $AB$ có phương trình là:",
    "options": [
      {
        "key": "A",
        "content": "$x - y + 2z - 3 = 0$"
      },
      {
        "key": "B",
        "content": "$x - y + 2z + 3 = 0$"
      },
      {
        "key": "C",
        "content": "$2x - 2y + 4z - 1 = 0$"
      },
      {
        "key": "D",
        "content": "$x + y + z - 4 = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trung điểm $I$ của đoạn thẳng $AB$ có tọa độ:\n$$Il\\left(\\frac{1+3}{2}; \\frac{2+0}{2}; \\frac{-1+3}{2}\\right) = I(2; 1; 1)$$\nVectơ pháp tuyến của mặt phẳng trung trực là $\\vec{AB} = (3-1; 0-2; 3-(-1)) = (2; -2; 4) = 2(1; -1; 2)$.\nChọn $\\vec{n} = (1; -1; 2)$. Phương trình mặt phẳng:\n$$1(x - 2) - 1(y - 1) + 2(z - 1) = 0 \\iff x - 2 - y + 1 + 2z - 2 = 0 \\iff x - y + 2z - 3 = 0$$.",
    "socraticHint": "Mặt phẳng trung trực của $AB$ đi qua trung điểm của $AB$ và nhận vectơ $\\vec{AB}$ làm vectơ pháp tuyến.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 167,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Trong không gian $Oxyz$, khoảng cách từ điểm $M(1; -2; 3)$ đến mặt phẳng $(P): 2x - y + 2z - 4 = 0$ bằng:",
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
        "content": "$\\frac{4}{3}$"
      },
      {
        "key": "D",
        "content": "$6$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$:\n$$d(M, (P)) = \\frac{|2(1) - (-2) + 2(3) - 4|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|2 + 2 + 6 - 4|}{\\sqrt{9}} = \\frac{6}{3} = 2$$.",
    "socraticHint": "Áp dụng công thức khoảng cách từ điểm đến mặt phẳng: $d = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2+B^2+C^2}}$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 168,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z - 2}{3}$. Vectơ nào sau đây là một vectơ chỉ phương của $d$?",
    "options": [
      {
        "key": "A",
        "content": "$\\vec{u} = (2; -1; 3)$"
      },
      {
        "key": "B",
        "content": "$\\vec{u} = (1; -1; 2)$"
      },
      {
        "key": "C",
        "content": "$\\vec{u} = (2; 1; 3)$"
      },
      {
        "key": "D",
        "content": "$\\vec{u} = (-2; -1; 3)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Từ phương trình chính tắc của đường thẳng $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$, vectơ chỉ phương là $\\vec{u} = (a; b; c) = (2; -1; 3)$.",
    "socraticHint": "Các hệ số dưới mẫu của phương trình chính tắc chính là tọa độ vectơ chỉ phương.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 185,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Trong không gian $Oxyz$, mặt phẳng đi qua điểm $A(1; 0; -2)$ và vuông góc với đường thẳng $\\Delta: \\frac{x + 1}{2} = \\frac{y - 1}{-3} = \\frac{z}{1}$ có phương trình là:",
    "options": [
      {
        "key": "A",
        "content": "$2x - 3y + z = 0$"
      },
      {
        "key": "B",
        "content": "$2x - 3y + z + 4 = 0$"
      },
      {
        "key": "C",
        "content": "$2x + 3y + z = 0$"
      },
      {
        "key": "D",
        "content": "$x - 2z - 5 = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Mặt phẳng vuông góc với $\\Delta$ nên nhận VTCP $\\vec{u}_Delta = (2; -3; 1)$ làm VTPT.\nPhương trình mặt phẳng đi qua $A(1; 0; -2)$:\n$$2(x - 1) - 3(y - 0) + 1(z + 2) = 0 \\iff 2x - 2 - 3y + z + 2 = 0 \\iff 2x - 3y + z = 0$$.",
    "socraticHint": "Mặt phẳng vuông góc với đường thẳng thì vectơ chỉ phương của đường thẳng là vectơ pháp tuyến của mặt phẳng.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 241,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Trong không gian $Oxyz$, cho các điểm $M(1; 2; 3)$ và $N(-3; -2; -1)$. Phương trình mặt phẳng $(\\alpha)$ đi qua trung điểm của $MN$ và vuông góc với đường thẳng $MN$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x + y + z = 0$"
      },
      {
        "key": "B",
        "content": "$x + y + z + 6 = 0$"
      },
      {
        "key": "C",
        "content": "$x + y + z - 6 = 0$"
      },
      {
        "key": "D",
        "content": "$x - y - z = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Mặt phẳng $(\\alpha)$ là mặt phẳng trung trực của đoạn thẳng $MN$.\nTrung điểm $I$ của đoạn thẳng $MN$:\n$$I = \\left( \\frac{1 + (-3)}{2}; \\frac{2 + (-2)}{2}; \\frac{3 + (-1)}{2} \\right) = (-1; 0; 1)$$\nVectơ pháp tuyến của $(\\alpha)$ cùng phương với vectơ $\\vec{MN}$:\n$$\\vec{MN} = (-3 - 1; -2 - 2; -1 - 3) = (-4; -4; -4) = -4(1; 1; 1)$$\nChọn vectơ pháp tuyến $\\vec{n} = (1; 1; 1)$.\nPhương trình mặt phẳng $(\\alpha)$ đi qua $I(-1; 0; 1)$ và có VTPT $\\vec{n} = (1; 1; 1)$:\n$$1(x + 1) + 1(y - 0) + 1(z - 1) = 0 \\iff x + y + z = 0$$",
    "socraticHint": "Tìm tọa độ trung điểm I của MN và lấy vectơ chỉ phương của đoạn MN làm vectơ pháp tuyến của mặt phẳng.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 243,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Trong không gian $Oxyz$, cho các điểm $A(1; -2; 0)$ và $B(3; 2; -8)$. Trong các vectơ dưới đây, vectơ nào là một vectơ chỉ phương của đường thẳng $AB$?",
    "options": [
      {
        "key": "A",
        "content": "$\\vec{u} = (1; -2; -4)$"
      },
      {
        "key": "B",
        "content": "$\\vec{u} = (-1; -2; 4)$"
      },
      {
        "key": "C",
        "content": "$\\vec{u} = (2; -4; 8)$"
      },
      {
        "key": "D",
        "content": "$\\vec{u} = (-2; -4; -8)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Vectơ chỉ phương của đường thẳng $AB$ là vectơ $\\vec{AB}$:\n$$\\vec{AB} = (3 - 1; 2 - (-2); -8 - 0) = (2; 4; -8)$$\nCác vectơ cùng phương với $\\vec{AB}$ có dạng $k(2; 4; -8) = 2k(1; 2; -4)$.\nChọn hệ số tỉ lệ $k = -\\frac{1}{2}$, ta được:\n$$\\vec{u} = -\\frac{1}{2} \\vec{AB} = (-1; -2; 4)$$\nVậy $\\vec{u} = (-1; -2; 4)$ là một vectơ chỉ phương của đường thẳng $AB$.",
    "socraticHint": "Tính tọa độ vectơ $\\vec{AB}$ rồi tìm vectơ tỉ lệ cùng phương trong 4 phương án.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 244,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "content": "Trong không gian $Oxyz$, cho hai đường thẳng chéo nhau là $\\Delta_1$ và $\\Delta_2$ lần lượt có phương trình: $\\Delta_1: \\frac{x - 1}{1} = \\frac{y - 3}{-1} = \\frac{z - 2}{2}$ và $\\Delta_2: \\frac{x}{3} = \\frac{y}{-1} = \\frac{z + 1}{3}$. Gọi $\\Delta$ là đường vuông góc chung của $\\Delta_1$ và $\\Delta_2$. Phương trình đường thẳng $\\Delta$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{x - 2}{1} = \\frac{y + 2}{-3} = \\frac{z + 1}{-2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{x - 1}{-1} = \\frac{y + 1}{3} = \\frac{z + 3}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{x - 3}{-1} = \\frac{y + 1}{3} = \\frac{z - 2}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{x}{-1} = \\frac{y + 3}{3} = \\frac{z + 2}{2}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Vectơ chỉ phương của $\\Delta_1$: $\\vec{u}_1 = (1; -1; 2)$.\nVectơ chỉ phương của $\\Delta_2$: $\\vec{u}_2 = (3; -1; 3)$.\nVectơ chỉ phương của đường vuông góc chung $\\Delta$ là tích có hướng của $\\vec{u}_1$ và $\\vec{u}_2$:\n$$\\vec{u} = [\\vec{u}_1, \\vec{u}_2] = ((-1)(3) - (2)(-1); (2)(3) - (1)(3); (1)(-1) - (-1)(3)) = (-1; 3; 2)$$\nGọi $M \\in \\Delta_1$ và $N \\in \\Delta_2$ là hai chân đường vuông góc chung:\n- $M(1 + t; 3 - t; 2 + 2t)$.\n- $N(3s; -s; -1 + 3s)$.\nTa có $\\vec{MN} = (3s - t - 1; -s + t - 3; 3s - 2t - 3)$.\nVì $\\vec{MN} \\perp \\vec{u}_1$ và $\\vec{MN} \\perp \\vec{u}_2$:\n$$\\begin{cases} (3s - t - 1)(1) + (-s + t - 3)(-1) + (3s - 2t - 3)(2) = 0 \\\\ (3s - t - 1)(3) + (-s + t - 3)(-1) + (3s - 2t - 3)(3) = 0 \\end{cases}$$\n$$\\iff \\begin{cases} 10s - 6t - 4 = 0 \\\\ 19s - 10t - 9 = 0 \\end{cases} \\iff \\begin{cases} 5s - 3t = 2 \\\\ 19s - 10t = 9 \\end{cases} \\iff \\begin{cases} s = 1 \\\\ t = 1 \\end{cases}$$\nThay $s = 1$ vào tọa độ điểm $N$:\n$$N(3(1); -(1); -1 + 3(1)) = (3; -1; 2)$$\nĐường vuông góc chung $\\Delta$ đi qua điểm $N(3; -1; 2)$ và có VTCP $\\vec{u} = (-1; 3; 2)$, có phương trình chính tắc là:\n$$\\frac{x - 3}{-1} = \\frac{y + 1}{3} = \\frac{z - 2}{2}$$",
    "socraticHint": "Tìm VTCP bằng tích có hướng $[\\vec{u}_1, \\vec{u}_2]$, tham số hóa hai điểm $M \\in \\Delta_1, N \\in \\Delta_2$ rồi giải hệ vuông góc.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 270,
    "type": "fill",
    "topicId": "mat_phang_va_duong_thang",
    "content": "Trong không gian $Oxyz$, mặt phẳng $(\\alpha)$ đi qua điểm $M(2; -1; 0)$ và cắt các tia $Ox, Oy, Oz$ lần lượt tại $A, B, C$ sao cho các độ dài $OA, OB, OC$ theo thứ tự lập thành một cấp số cộng có công sai $d = 3$. Tính khoảng cách từ gốc tọa độ $O$ tới mặt phẳng $(\\alpha)$? (Làm tròn kết quả đến hàng đơn vị).",
    "correctAnswer": "2",
    "detailedSolution": "Gọi $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $a, b, c > 0$.\nTheo đề bài, $OA = a, OB = b, OC = c$ lập thành cấp số cộng có công sai $d = 3$, nên $b = a + 3$ và $c = a + 6$.\nPhương trình mặt phẳng $(\\alpha)$ theo đoạn chắn:\n$$\\frac{x}{a} + \\frac{y}{a+3} + \\frac{z}{a+6} = 1$$\nVì $(\\alpha)$ đi qua $M(2; -1; 0)$ nên:\n$$\\frac{2}{a} - \\frac{1}{a+3} = 1 \\iff \\frac{2(a+3) - a}{a(a+3)} = 1 \\iff a + 6 = a^2 + 3a \\iff a^2 + 2a - 6 = 0$$\nVì $a > 0$ nên $a = -1 + \\sqrt{7} \\approx 1{,}646$.\nSuy ra: $b = 2 + \\sqrt{7} \\approx 4{,}646$ và $c = 5 + \\sqrt{7} \\approx 7{,}646$.\nKhoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(\\alpha)$ thỏa mãn:\n$$\\frac{1}{h^2} = \\frac{1}{a^2} + \\frac{1}{b^2} + \\frac{1}{c^2} \\approx \\frac{1}{2{,}708} + \\frac{1}{21{,}583} + \\frac{1}{58{,}459} \\approx 0{,}4327$$\n$$h = \\frac{1}{\\sqrt{0{,}4327}} \\approx 1{,}52\\text{ m}$$\nLàm tròn đến hàng đơn vị: $h \\approx 2$.",
    "socraticHint": "Sử dụng phương trình mặt phẳng theo đoạn chắn và hệ thức khoảng cách từ gốc tọa độ $\\frac{1}{h^2} = \\frac{1}{a^2} + \\frac{1}{b^2} + \\frac{1}{c^2}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz"
  },
  {
    "id": 271,
    "type": "mcq",
    "topicId": "mat_phang_va_duong_thang",
    "content": "Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\frac{x - 1}{1} = \\frac{y - 1}{2} = \\frac{z - 2}{1}$, $d_2: \\begin{cases} x = 2 + t \\\\ y = -1 - t \\\\ z = 2t \\end{cases}$ và điểm $M(1; -4; 3)$. Đường thẳng $\\Delta$ đi qua $M$ và cắt cả hai đường thẳng $d_1, d_2$ có phương trình chính tắc là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{x - 1}{6} = \\frac{y + 4}{10} = \\frac{z - 3}{-17}$"
      },
      {
        "key": "B",
        "content": "$\\frac{x - 1}{6} = \\frac{y + 4}{-10} = \\frac{z - 3}{17}$"
      },
      {
        "key": "C",
        "content": "$\\frac{x - 1}{2} = \\frac{y + 4}{3} = \\frac{z - 3}{-1}$"
      },
      {
        "key": "D",
        "content": "$\\frac{x - 1}{1} = \\frac{y + 4}{2} = \\frac{z - 3}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $A = \\Delta \\cap d_1 \\implies A(1 + u; 1 + 2u; 2 + u)$.\nGọi $B = \\Delta \\cap d_2 \\implies B(2 + v; -1 - v; 2v)$.\nVì $\\Delta$ đi qua $M(1; -4; 3)$ nên ba điểm $M, A, B$ thẳng hàng, suy ra $\\vec{MA}$ cùng phương với $\\vec{MB}$:\n$\\vec{MA} = (u; 5 + 2u; u - 1)$, $\\vec{MB} = (v + 1; 3 - v; 2v - 3)$.\nGiải hệ tỉ lệ tọa độ tìm được tham số $u, v$, suy ra vectơ chỉ phương của $\\Delta$ tỉ lệ với $(6; 10; -17)$.\nPhương trình chính tắc của $\\Delta$ là: $\\frac{x - 1}{6} = \\frac{y + 4}{10} = \\frac{z - 3}{-17}$.",
    "socraticHint": "Gọi tọa độ hai giao điểm $A, B$ theo tham số rồi sử dụng điều kiện $\\vec{MA}$ và $\\vec{MB}$ cùng phương.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz"
  },
  {
    "id": 273,
    "type": "mcq",
    "topicId": "mat_phang_va_duong_thang",
    "content": "Trong không gian $Oxyz$, cho mặt cầu $(S): (x + 2)^2 + (y - 1)^2 + z^2 = 3$ và đường thẳng $d: \\begin{cases} x = 1 - 2t \\\\ y = -1 + 2t \\\\ z = t \\end{cases}$. Xác định phương trình mặt phẳng chứa đường thẳng $d$ và cắt mặt cầu $(S)$ theo một đường tròn có bán kính nhỏ nhất?",
    "options": [
      {
        "key": "A",
        "content": "$19x - 13y + 20z - 32 = 0$"
      },
      {
        "key": "B",
        "content": "$19x + 13y + 20z + 32 = 0$"
      },
      {
        "key": "C",
        "content": "$19x - 13y - 20z + 32 = 0$"
      },
      {
        "key": "D",
        "content": "$x + y + 2z = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Bán kính đường tròn giao tuyến $r = \\sqrt{R^2 - d^2(I, (P))}$ nhỏ nhất khi và chỉ khi khoảng cách $d(I, (P))$ lớn nhất.\nMặt phẳng $(P)$ chứa đường thẳng $d$ nên khoảng cách từ tâm $I(-2; 1; 0)$ đến $(P)$ luôn nhỏ hơn hoặc bằng khoảng cách từ $I$ đến hình chiếu $H$ của $I$ lên $d$.\nDo đó, khoảng cách lớn nhất đạt được khi $(P) \\perp IH$, tức VTPT của $(P)$ là $\\vec{n} = \\vec{u}_d \\times (\\vec{u}_d \\times \\vec{IA})$.\nTính toán được phương trình mặt phẳng: $19x - 13y + 20z - 32 = 0$.",
    "socraticHint": "Mặt phẳng chứa đường thẳng $d$ và cách tâm $I$ khoảng cách lớn nhất là mặt phẳng vuông góc với hình chiếu vuông góc của $I$ lên $d$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Mặt phẳng & Đường thẳng trong không gian",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz"
  }
];
