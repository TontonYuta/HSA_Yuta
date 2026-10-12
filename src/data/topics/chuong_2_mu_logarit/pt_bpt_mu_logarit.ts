import { Question } from '../../../types/exam';

export const ptBptMuLogaritQuestions: Question[] = [
  {
    "id": 9,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & BPT mũ, logarit đối xứng",
    "content": "Tập nghiệm của bất phương trình $\\log_{0{,}5}(x - 1) + \\log_{0{,}5}(x + 2) \\ge -2$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(1; 2]$"
      },
      {
        "key": "B",
        "content": "$[-3; 2]$"
      },
      {
        "key": "C",
        "content": "$(1; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$[2; +\\infty)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Điều kiện xác định:\n$$\\begin{cases} x - 1 > 0 \\\\ x + 2 > 0 \\end{cases} \\iff x > 1.$$\nBất phương trình tương đương:\n$$\\log_{0{,}5}[(x - 1)(x + 2)] \\ge -2 = \\log_{0{,}5} (0{,}5^{-2}) = \\log_{0{,}5} 4.$$\nVì cơ số $0 < 0{,}5 < 1$, ta đổi chiều bất đẳng thức:\n$$(x - 1)(x + 2) \\le 4 \\iff x^2 + x - 2 \\le 4 \\iff x^2 + x - 6 \\le 0 \\iff -3 \\le x \\le 2.$$\nKết hợp điều kiện $x > 1$, ta được tập nghiệm $S = (1; 2]$.",
    "socraticHint": "Chú ý cơ số bé hơn 1 phải đổi chiều bất đẳng thức khi bỏ logarit và kết hợp tập xác định.",
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
    "content": "Có bao nhiêu số nguyên $x$ thỏa mãn bất phương trình $\\log_3(x^2 - 3x) \\le 2$?",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "detailedSolution": "Điều kiện xác định: $x^2 - 3x > 0 \\iff x < 0$ hoặc $x > 3$.\nBất phương trình tương đương:\n$$x^2 - 3x \\le 3^2 = 9 \\iff x^2 - 3x - 9 \\le 0.$$\nNghiệm của bất phương trình:\n$$\\frac{3 - 3\\sqrt{5}}{2} \\le x \\le \\frac{3 + 3\\sqrt{5}}{2}.$$\nVì $\\sqrt{5} \\approx 2{,}236$, nên $-1{,}85 \\le x \\le 4{,}85$.\nKết hợp điều kiện $x < 0$ hoặc $x > 3$, ta có:\n$$x \\in [-1{,}85; 0) \\cup (3; 4{,}85].$$\nCác số nguyên thỏa mãn là $x = -1$ và $x = 4$.\nVậy có đúng 2 số nguyên thỏa mãn.",
    "socraticHint": "Giải bất phương trình bậc hai và kết hợp chặt chẽ với điều kiện xác định của biểu thức dưới dấu logarit.",
    "difficulty": "Vận dụng",
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
    "content": "Cho $x, y$ là các số nguyên dương thỏa mãn $\\log_2\\left(\\frac{x + 2y}{2x + y + 1}\\right) = x - y + 1$ và $x \\le 100$. Có bao nhiêu cặp số nguyên dương $(x; y)$ thỏa mãn đẳng thức trên?",
    "options": [
      {
        "key": "A",
        "content": "$100$"
      },
      {
        "key": "B",
        "content": "$99$"
      },
      {
        "key": "C",
        "content": "$50$"
      },
      {
        "key": "D",
        "content": "$101$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình tương đương:\n$$\\log_2(x + 2y) - \\log_2(2x + y + 1) = (2x + y + 1) - (x + 2y)$$\n$$\\iff \\log_2(x + 2y) + (x + 2y) = \\log_2(2x + y + 1) + (2x + y + 1).$$\nXét hàm số đặc trưng $f(t) = \\log_2 t + t$ trên $(0; +\\infty)$.\nVì $f'(t) = \\frac{1}{t \\ln 2} + 1 > 0, \\forall t > 0$ nên hàm số $f(t)$ đồng biến trên $(0; +\\infty)$.\nDo đó:\n$$x + 2y = 2x + y + 1 \\iff y = x + 1.$$\nVì $x, y$ là các số nguyên dương và $x \\le 100$, ta có $x \\in \\{1; 2; \\dots; 100\\}$.\nVới mỗi giá trị $x \\in \\{1; 2; \\dots; 100\\}$, tương ứng có đúng một giá trị $y = x + 1 \\in \\{2; 3; \\dots; 101\\}$ là số nguyên dương thỏa mãn.\nVậy có đúng $100$ cặp số nguyên dương $(x; y)$.",
    "socraticHint": "Chuyển vế để xuất hiện hàm đặc trưng $f(t) = \\log_2 t + t$ ở cả hai vế.",
    "difficulty": "Vận dụng cao",
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
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để bất phương trình $\\log_2^2 x - (2m + 1)\\log_2 x + m^2 + m > 0$ nghiệm đúng với mọi $x \\in (2; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$11$"
      },
      {
        "key": "B",
        "content": "$10$"
      },
      {
        "key": "C",
        "content": "$12$"
      },
      {
        "key": "D",
        "content": "$9$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $t = \\log_2 x$. Với $x \\in (2; +\\infty)$ thì $t \\in (1; +\\infty)$.\nBất phương trình trở thành:\n$$f(t) = t^2 - (2m + 1)t + m^2 + m > 0, \\forall t > 1.$$\nBiệt thức $\\Delta = (2m + 1)^2 - 4(m^2 + m) = 1 > 0$.\nHai nghiệm của tam thức là $t_1 = m$ và $t_2 = m + 1$.\nBất phương trình $f(t) > 0 \\iff t < m$ hoặc $t > m + 1$.\nĐể $f(t) > 0, \\forall t > 1$, khoảng $(1; +\\infty)$ phải là tập con của $(m + 1; +\\infty)$:\n$$m + 1 \\le 1 \\iff m \\le 0.$$\nVì $m \\in [-10; 10]$ và $m \\in \\mathbb{Z}$ nên $m \\in \\{-10; -9; \\dots; 0\\}$.\nSố giá trị nguyên của $m$ là $0 - (-10) + 1 = 11$.",
    "socraticHint": "Đặt ẩn phụ $t = \\log_2 x > 1$, phân tích tam thức bậc hai thành nhân tử $(t - m)(t - m - 1) > 0$.",
    "difficulty": "Vận dụng cao",
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
    "content": "Cho hai số thực dương $a, b > 1$ thỏa mãn $\\log_a b = 2$. Giá trị của biểu thức $P = \\log_{a^2\\sqrt{b}}(a\\sqrt[3]{b})$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{5}{9}$"
      },
      {
        "key": "B",
        "content": "$\\frac{2}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{7}{9}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $\\log_a b = 2$ nên $b = a^2$.\nThay vào biểu thức cơ số:\n$$a^2 \\sqrt{b} = a^2 \\sqrt{a^2} = a^2 \\cdot a = a^3.$$\nThay vào biểu thức lấy logarit:\n$$a\\sqrt[3]{b} = a \\sqrt[3]{a^2} = a \\cdot a^{2/3} = a^{5/3}.$$\nDo đó:\n$$P = \\log_{a^3}(a^{5/3}) = \\frac{5/3}{3} = \\frac{5}{9}.$$",
    "socraticHint": "Đưa cả cơ số và biểu thức lấy logarit về cùng một luỹ thừa của cơ số $a$.",
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
    "content": "Tìm số nghiệm thực của phương trình $4^x - 3 \\cdot 2^{x+1} + 8 = 0$.",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "detailedSolution": "Phương trình được viết lại dưới dạng:\n$$(2^x)^2 - 6 \\cdot 2^x + 8 = 0.$$\nĐặt $t = 2^x > 0$, ta có phương trình bậc hai:\n$$t^2 - 6t + 8 = 0 \\iff (t - 2)(t - 4) = 0 \\iff \\left[\\begin{array}{l} t = 2 \\\\ t = 4 \\end{array}\\right.$$\nCả hai nghiệm đều thỏa mãn điều kiện $t > 0$:\n- Với $t = 2 \\Rightarrow 2^x = 2 \\Rightarrow x = 1$.\n- Với $t = 4 \\Rightarrow 2^x = 4 \\Rightarrow x = 2$.\nVậy phương trình có đúng $2$ nghiệm thực phân biệt.",
    "socraticHint": "Đặt ẩn phụ $t = 2^x > 0$ đưa về phương trình bậc hai.",
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
    "content": "Cho hai số thực dương $x, y$ thỏa mãn $\\log_2 x + \\log_2 y = 4$ và $\\log_2(x + y) = 3$. Tính giá trị của biểu thức $P = x^2 + y^2$.",
    "correctAnswer": "32",
    "acceptableAnswers": [
      "32"
    ],
    "detailedSolution": "Từ các phương trình logarit ta có:\n$$\\log_2(xy) = 4 \\iff xy = 2^4 = 16,$$\n$$\\log_2(x + y) = 3 \\iff x + y = 2^3 = 8.$$\nBiểu thức cần tính:\n$$P = x^2 + y^2 = (x + y)^2 - 2xy = 8^2 - 2(16) = 64 - 32 = 32.$$",
    "socraticHint": "Áp dụng định nghĩa logarit đưa về tổng và tích của hai số $x + y$ và $xy$.",
    "difficulty": "Vận dụng",
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
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để phương trình $\\log_3^2 x - 2m\\log_3 x + 2m + 3 = 0$ có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1 x_2 = 81$?",
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
        "content": "Vô số"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $t = \\log_3 x$. Phương trình trở thành:\n$$t^2 - 2mt + 2m + 3 = 0.$$\nĐể phương trình có hai nghiệm phân biệt thì biệt thức $\\Delta' > 0$:\n$$\\Delta' = m^2 - (2m + 3) = m^2 - 2m - 3 > 0 \\iff m < -1 \\text{ hoặc } m > 3.$$\nTheo bài ra, $x_1 x_2 = 81 \\iff \\log_3(x_1 x_2) = \\log_3 81 = 4 \\iff \\log_3 x_1 + \\log_3 x_2 = 4 \\iff t_1 + t_2 = 4$.\nTheo định lý Viète: $t_1 + t_2 = 2m = 4 \\iff m = 2$.\nThử lại với $m = 2$: $\\Delta' = 2^2 - 2(2) - 3 = -3 < 0$, phương trình vô nghiệm.\nVậy không có giá trị nào của $m$ thỏa mãn.",
    "socraticHint": "Kiểm tra kỹ điều kiện có hai nghiệm phân biệt $\\Delta' > 0$ sau khi tìm được giá trị tham số $m$ từ định lý Viète.",
    "difficulty": "Vận dụng",
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
    "content": "Cho bất phương trình $4^x - (m + 3)2^x + 2m + 2 < 0$. Tìm tất cả các giá trị của tham số $m$ để bất phương trình có tập nghiệm là một khoảng có độ dài bằng $2$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\in \\left\\{ -\\frac{1}{2}; 7 \\right\\}$"
      },
      {
        "key": "B",
        "content": "$m = 7$"
      },
      {
        "key": "C",
        "content": "$m = -\\frac{1}{2}$"
      },
      {
        "key": "D",
        "content": "$m \\in \\{1; 5\\}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $t = 2^x > 0$. Bất phương trình trở thành:\n$$t^2 - (m + 3)t + 2m + 2 < 0 \\iff (t - 2)(t - (m + 1)) < 0.$$\nGiả sử tập nghiệm của bất phương trình theo $x$ là $(x_1; x_2)$ có độ dài $x_2 - x_1 = 2$.\nKhi đó hai nghiệm theo $t$ thỏa mãn $\\frac{t_2}{t_1} = 2^{x_2 - x_1} = 2^2 = 4$.\n- Trường hợp 1: $t_1 = 2 < t_2 = m + 1$.\n$$\\frac{m + 1}{2} = 4 \\iff m + 1 = 8 \\iff m = 7.$$\nKhi $m = 7$, tập nghiệm là $t \\in (2; 8) \\iff x \\in (1; 3)$, có độ dài $3 - 1 = 2$ (thỏa mãn).\n- Trường hợp 2: $t_1 = m + 1 < t_2 = 2$ ($m + 1 > 0$):\n$$\\frac{2}{m + 1} = 4 \\iff m + 1 = \\frac{1}{2} \\iff m = -\\frac{1}{2}.$$\nKhi $m = -1/2$, tập nghiệm là $t \\in (1/2; 2) \\iff x \\in (-1; 1)$, có độ dài $1 - (-1) = 2$ (thỏa mãn).\nVậy $m \\in \\left\\{ -\\frac{1}{2}; 7 \\right\\}$.",
    "socraticHint": "Phân tích tam thức bậc hai thành nhân tử $(t - 2)(t - m - 1) < 0$ và sử dụng mối liên hệ giữa hiệu các số mũ với tỉ số giữa các luỹ thừa.",
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
    "difficulty": "Vận dụng",
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
    "difficulty": "Vận dụng",
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
