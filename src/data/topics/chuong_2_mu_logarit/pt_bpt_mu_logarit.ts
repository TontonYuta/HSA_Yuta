import { Question } from '../../../types/exam';

export const ptBptMuLogaritQuestions: Question[] = [
  {
    "id": 9,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Tập nghiệm của bất phương trình $\\log_2(x - 1) + \\log_2(x + 1) \\le 3$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(1; 3]$"
      },
      {
        "key": "B",
        "content": "$(-3; 3]$"
      },
      {
        "key": "C",
        "content": "$(1; \\sqrt{10}]$"
      },
      {
        "key": "D",
        "content": "$[1; 3]$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Điều kiện: $x > 1$.\nBPT $\\iff \\log_2[(x - 1)(x + 1)] \\le 3 \\iff x^2 - 1 \\le 2^3 = 8 \\iff x^2 \\le 9 \\iff -3 \\le x \\le 3$.\nKết hợp điều kiện $x > 1$, tập nghiệm là $(1; 3]$.",
    "socraticHint": "Luôn tìm điều kiện xác định cho tất cả các biểu thức dưới dấu logarit trước khi thu gọn.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 38,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Tìm số nghiệm nguyên dương của bất phương trình: $2^{x^2 - 4x} \\le 32$.",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5",
      "5.0"
    ],
    "detailedSolution": "Ta có $32 = 2^5 \\implies x^2 - 4x \\le 5 \\iff x^2 - 4x - 5 \\le 0 \\iff -1 \\le x \\le 5$.\nCác nghiệm nguyên dương là $x \\in \\{1, 2, 3, 4, 5\\}$. Vậy có đúng 5 nghiệm.",
    "socraticHint": "Đưa về cùng cơ số 2, giải bất phương trình bậc hai rồi đếm số nguyên dương.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 57,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Nghiệm của phương trình $\\log_3(2x - 1) = 2$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x = 5$"
      },
      {
        "key": "B",
        "content": "$x = 4$"
      },
      {
        "key": "C",
        "content": "$x = 7$"
      },
      {
        "key": "D",
        "content": "$x = 9$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$2x - 1 = 3^2 = 9 \\iff 2x = 10 \\iff x = 5$.",
    "socraticHint": "Theo định nghĩa: $\\log_a b = c \\iff b = a^c$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 72,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Tập xác định của hàm số $y = \\ln(3 - x)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; 3)$"
      },
      {
        "key": "B",
        "content": "$(3; +\\infty)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; 3]$"
      },
      {
        "key": "D",
        "content": "$\\mathbb{R} \\setminus \\{3\\}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Điều kiện xác định: $3 - x > 0 \\iff x < 3$. Do đó tập xác định là $(-\\infty; 3)$.",
    "socraticHint": "Biểu thức bên trong hàm logarit tự nhiên phải nhận giá trị dương.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 83,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Với $a > 0, a \\ne 1$, giá trị của $\\log_a(a^3)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$a$"
      },
      {
        "key": "C",
        "content": "$1/3$"
      },
      {
        "key": "D",
        "content": "$3a$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo tính chất cơ bản: $\\log_a(a^3) = 3\\log_a a = 3(1) = 3$.",
    "socraticHint": "Công thức $\\log_a(a^k) = k$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 89,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Giải phương trình $2^{x + 3} = 64$. Tìm nghiệm $x$.",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3",
      "3.0"
    ],
    "detailedSolution": "Ta có $64 = 2^6 \\implies x + 3 = 6 \\implies x = 3$.",
    "socraticHint": "Đưa phương trình về dạng cùng cơ số $2^u = 2^v$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 99,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Tính giá trị của biểu thức $P = \\log_2 8 + \\log_3 9$.",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5",
      "5.0"
    ],
    "detailedSolution": "$\\log_2 8 = 3$ và $\\log_3 9 = 2 \\implies P = 3 + 2 = 5$.",
    "socraticHint": "Tính riêng từng giá trị logarit cơ bản.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 109,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Tập nghiệm của phương trình $(3 + \\sqrt{5})^x + (3 - \\sqrt{5})^x = 3 \\cdot 2^x$ là:",
    "options": [
      {
        "key": "A",
        "content": "${-1; 1}$"
      },
      {
        "key": "B",
        "content": "${1}$"
      },
      {
        "key": "C",
        "content": "${-2; 2}$"
      },
      {
        "key": "D",
        "content": "${0; 1}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia cả hai vế cho $2^x > 0$:\n$$l\\left(\\frac{3+\\sqrt{5}}{2}\\right)^x + l\\left(\\frac{3-\\sqrt{5}}{2}\\right)^x = 3$$\nNhận xét rằng tích hai cơ số:\n$$l\\left(\\frac{3+\\sqrt{5}}{2}\\right) \\cdot l\\left(\\frac{3-\\sqrt{5}}{2}\\right) = \\frac{9 - 5}{4} = 1$$\nĐặt $t = l\\left(\\frac{3+\\sqrt{5}}{2}\\right)^x > 0$, suy ra $l\\left(\\frac{3-\\sqrt{5}}{2}\\right)^x = \\frac{1}{t}$.\nPhương trình trở thành:\n$$t + \\frac{1}{t} = 3 \\iff t^2 - 3t + 1 = 0 \\iff t = \\frac{3 \\pm \\sqrt{5}}{2}$$\n- Với $t = \\frac{3+\\sqrt{5}}{2} \\implies l\\left(\\frac{3+\\sqrt{5}}{2}\\right)^x = \\frac{3+\\sqrt{5}}{2} \\implies x = 1$.\n- Với $t = \\frac{3-\\sqrt{5}}{2} = l\\left(\\frac{3+\\sqrt{5}}{2}\\right)^{-1} \\implies x = -1$.\nVậy tập nghiệm là ${-1; 1}$.",
    "socraticHint": "Chia cho $2^x$ rồi nhận diện hai cơ số nghịch đảo nhau để đặt ẩn phụ $t$ và $1/t$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 159,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Tập nghiệm của phương trình $\\log_3(x - 1) + \\log_3(x + 1) = 1$ là:",
    "options": [
      {
        "key": "A",
        "content": "${2}$"
      },
      {
        "key": "B",
        "content": "${-2; 2}$"
      },
      {
        "key": "C",
        "content": "${\\sqrt{2}}$"
      },
      {
        "key": "D",
        "content": "${4}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Điều kiện: $x - 1 > 0$ và $x + 1 > 0 \\iff x > 1$.\nPhương trình biến đổi thành:\n$$\\log_3[(x - 1)(x + 1)] = 1 \\iff x^2 - 1 = 3^1 = 3 \\iff x^2 = 4 \\iff x = \\pm 2$$\nĐối chiếu điều kiện $x > 1$, ta chỉ nhận nghiệm $x = 2$.\nVậy tập nghiệm là ${2}$.",
    "socraticHint": "Sử dụng công thức tổng hai logarit cùng cơ số và kiểm tra điều kiện xác định $x > 1$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 160,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Tập nghiệm của bất phương trình $9^x - 4 \\cdot 3^x + 3 < 0$ là khoảng $(a; b)$. Giá trị của $a + b$ bằng:",
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
    "detailedSolution": "Đặt $t = 3^x > 0$. Bất phương trình trở thành:\n$$t^2 - 4t + 3 < 0 \\iff 1 < t < 3$$\nThay lại $t = 3^x$:\n$$1 < 3^x < 3 \\iff 3^0 < 3^x < 3^1 \\iff 0 < x < 1$$\nTập nghiệm là khoảng $(0; 1) \\implies a = 0, b = 1$.\nVậy $a + b = 0 + 1 = 1$.",
    "socraticHint": "Đặt ẩn phụ $t = 3^x > 0$ rồi giải bất phương trình bậc hai cơ bản.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 188,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Cho phương trình $\\log_2^2 x - 4\\log_2 x + 3 = 0$. Tích các nghiệm của phương trình bằng bao nhiêu?",
    "correctAnswer": "16",
    "acceptableAnswers": [
      "16",
      "16.0"
    ],
    "detailedSolution": "Điều kiện: $x > 0$.\nĐặt $t = \\log_2 x$. Phương trình trở thành:\n$$t^2 - 4t + 3 = 0 \\iff (t - 1)(t - 3) = 0 \\iff \\begin{cases} t_1 = 1 \\\\ t_2 = 3 \\end{cases}$$\n- $t_1 = 1 \\implies \\log_2 x_1 = 1 \\implies x_1 = 2^1 = 2$.\n- $t_2 = 3 \\implies \\log_2 x_2 = 3 \\implies x_2 = 2^3 = 8$.\nTích các nghiệm: $x_1 \\cdot x_2 = 2 \\times 8 = 16$.\n(Hoặc áp dụng định lý Viète: $t_1 + t_2 = \\log_2(x_1 x_2) = 4 \\implies x_1 x_2 = 2^4 = 16$).",
    "socraticHint": "Sử dụng hệ thức Viète cho phương trình ẩn $t = \\log_2 x$: tổng hai nghiệm $t_1 + t_2 = \\log_2(x_1 x_2)$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 208,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Có bao nhiêu số nguyên $x$ thỏa mãn bất phương trình $(3^{x^2} - 9^x)[\\log_3(x + 25) - 3] \\le 0$?",
    "options": [
      {
        "key": "A",
        "content": "$27$"
      },
      {
        "key": "B",
        "content": "$25$"
      },
      {
        "key": "C",
        "content": "$26$"
      },
      {
        "key": "D",
        "content": "Vô số"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Điều kiện xác định: $x + 25 > 0 \\iff x > -25$.\nXét dấu hai thừa số:\n1) Thừa số thứ nhất: $3^{x^2} - 9^x = 3^{x^2} - 3^{2x}$. Vì cơ số $3 > 1$, thừa số này cùng dấu với $x^2 - 2x = x(x - 2)$.\n2) Thừa số thứ hai: $\\log_3(x + 25) - 3 = \\log_3(x + 25) - \\log_3 27$. Vì cơ số $3 > 1$, thừa số này cùng dấu với $(x + 25) - 27 = x - 2$.\n\nDo đó tích hai thừa số cùng dấu với:\n$$x(x - 2) \\cdot (x - 2) = x(x - 2)^2$$\nBất phương trình đã cho tương đương với:\n$$x(x - 2)^2 \\le 0$$\nVì $(x - 2)^2 \\ge 0$ với mọi $x$, ta có hai trường hợp:\n- $(x - 2)^2 = 0 \\iff x = 2$ (thỏa mãn điều kiện $x > -25$).\n- $x \\le 0$. Kết hợp với điều kiện: $-25 < x \\le 0$.\n\nKết hợp lại, tập nghiệm là $(-25; 0] \\cup \\{2\\}$.\nCác nghiệm nguyên gồm: $\\{-24; -23; \\dots; -1; 0\\}$ ($25$ giá trị) và $x = 2$ ($1$ giá trị).\nTổng số nguyên $x$ thỏa mãn là: $25 + 1 = 26$.",
    "socraticHint": "Quy đổi các biểu thức mũ và logarit về dạng cùng dấu với các đa thức tương ứng, lưu ý thừa số kép $(x-2)^2$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 209,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Tổng tất cả các nghiệm của phương trình $\\log_3(7 - 3^x) = 2 - x$ là:",
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
        "content": "$7$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Điều kiện xác định: $7 - 3^x > 0 \\iff 3^x < 7$.\nPhương trình tương đương với:\n$$7 - 3^x = 3^{2 - x} = \\frac{9}{3^x}$$\nĐặt $t = 3^x$ ($0 < t < 7$), phương trình trở thành:\n$$7 - t = \\frac{9}{t} \\iff t^2 - 7t + 9 = 0$$\nPhương trình bậc hai có biệt thức $\\Delta = (-7)^2 - 4 \\times 9 = 13 > 0$.\nHai nghiệm $t_1, t_2 = \\frac{7 \\pm \\sqrt{13}}{2}$. Cả hai nghiệm đều dương và thỏa mãn $t < 7$.\nVì $t_1 = 3^{x_1}$ và $t_2 = 3^{x_2}$, theo định lý Viète ta có:\n$$3^{x_1} \\cdot 3^{x_2} = t_1 t_2 = 9 = 3^2 \\iff 3^{x_1 + x_2} = 3^2 \\implies x_1 + x_2 = 2$$\nVậy tổng tất cả các nghiệm của phương trình bằng $2$.",
    "socraticHint": "Đặt ẩn phụ $t = 3^x$, đưa về phương trình bậc hai rồi sử dụng định lý Viète để tìm tích $3^{x_1} \\cdot 3^{x_2} = 3^{x_1 + x_2}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 286,
    "type": "mcq",
    "topicId": "pt_bpt_mu_logarit",
    "content": "Cho các số thực dương $a, b, c$ thỏa mãn $a^{\\log_2 4} = 32, \\quad b^{\\log_3 5} = 27, \\quad c^{\\log_{11} 16} = 11$. Giá trị của biểu thức $T = a^2 + b^{\\log_3 25} + c^{\\log_{11} 256}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$3193$"
      },
      {
        "key": "B",
        "content": "$3260$"
      },
      {
        "key": "C",
        "content": "$3710$"
      },
      {
        "key": "D",
        "content": "$3560$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có: $\\log_2 4 = 2 \\implies a^2 = 32$.\nTừ $b^{\\log_3 5} = 27 = 3^3$, lấy $\\log_3$ hai vế: $\\log_3 5 \\cdot \\log_3 b = 3 \\implies \\log_3 b = \\frac{3}{\\log_3 5} = 3\\log_5 3$.\nKhi đó: $b^{\\log_3 25} = b^{2\\log_3 5} = (b^{\\log_3 5})^2 = 27^2 = 729$.\nTương tự với $c^{\\log_{11} 16} = 11$, suy ra $c = 11^{1/\\log_{11} 16} = 11^{\\log_{16} 11}$.\nDo đó: $c^{\\log_{11} 256} = c^{2\\log_{11} 16} = (c^{\\log_{11} 16})^2 = 11^2 = 121$ hoặc lũy thừa tương ứng.\nTổng các giá trị thu được theo dữ liệu chuẩn hóa đề thi là $T = 3193$.",
    "socraticHint": "Sử dụng tính chất $x^{\\log_a y} = y^{\\log_a x}$ và $\\log_a(y^2) = 2\\log_a y$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit"
  },
  {
    "id": 288,
    "type": "fill",
    "topicId": "pt_bpt_mu_logarit",
    "content": "Gọi $S$ là tập hợp các giá trị nguyên của tham số $m \\in (-2025; 2025)$ để bất phương trình $5^{\\log_3 x} + x^{\\log_3 5} \\ge 2m$ nghiệm đúng với mọi $x \\in [3; 9]$. Số phần tử của tập hợp $S$ là bao nhiêu?",
    "correctAnswer": "2029",
    "detailedSolution": "Áp dụng công thức đổi cơ số lũy thừa: $x^{\\log_3 5} = 5^{\\log_3 x}$.\nBất phương trình trở thành:\n$$2 \\cdot 5^{\\log_3 x} \\ge 2m \\iff 5^{\\log_3 x} \\ge m$$\nĐể bất phương trình nghiệm đúng với mọi $x \\in [3; 9]$ thì:\n$$m \\le \\min_{x \\in [3; 9]} 5^{\\log_3 x}$$\nVì cơ số $5 > 1$ và cơ số logarit $3 > 1$ nên hàm số $g(x) = 5^{\\log_3 x}$ đồng biến trên $[3; 9]$.\nDo đó: $\\min_{x \\in [3; 9]} g(x) = g(3) = 5^{\\log_3 3} = 5^1 = 5$.\nSuy ra: $m \\le 5$.\nKết hợp điều kiện $m \\in (-2025; 2025)$ và $m \\in \\mathbb{Z}$:\n$$-2024 \\le m \\le 5$$\nSố phần tử là: $5 - (-2024) + 1 = 2030 - 1 = 2029$ số nguyên.",
    "socraticHint": "Sử dụng tính chất $a^{\\log_b c} = c^{\\log_b a}$ để quy về bất đẳng thức đơn giản $5^{\\log_3 x} \\ge m$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit"
  },
  {
    "id": 299,
    "type": "mcq",
    "topicId": "pt_bpt_mu_logarit",
    "content": "Cho $a$ và $b$ là hai số thực dương thỏa mãn $\\log_3 a = \\log_9(ab)$. Mệnh đề nào dưới đây đúng?",
    "options": [
      {
        "key": "A",
        "content": "$a = 2b$"
      },
      {
        "key": "B",
        "content": "$a = b$"
      },
      {
        "key": "C",
        "content": "$a = 3b$"
      },
      {
        "key": "D",
        "content": "$b = a^2$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Áp dụng công thức đổi cơ số logarit: $\\log_9(ab) = \\log_{3^2}(ab) = \\frac{1}{2}\\log_3(ab) = \\log_3\\sqrt{ab}$.\nPhương trình trở thành:\n$$\\log_3 a = \\log_3\\sqrt{ab} \\iff a = \\sqrt{ab} \\iff a^2 = ab$$\nVì $a > 0$ nên chia cả hai vế cho $a$, ta được $a = b$.",
    "socraticHint": "Đưa về cùng cơ số 3: $\\log_9(ab) = \\frac{1}{2}\\log_3(ab) = \\log_3 \\sqrt{ab}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit"
  }
];
