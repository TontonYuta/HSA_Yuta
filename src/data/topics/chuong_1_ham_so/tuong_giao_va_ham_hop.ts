import { Question } from '../../../types/exam';

export const tuongGiaoHamHopQuestions: Question[] = [
  {
    "id": 54,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Cho hàm số bậc ba $y = f(x)$ có điểm cực đại là $(-1; 2)$ và điểm cực tiểu là $(1; -2)$. Số nghiệm thực phân biệt của phương trình $f(f(x) - 1) = 2$ là:",
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
    "detailedSolution": "Từ đồ thị hàm số bậc ba $y = f(x)$, đường thẳng nằm ngang $y = 2$ tiếp xúc với đồ thị tại điểm cực đại $x = -1$ (nghiệm kép) và cắt đồ thị tại một điểm có hoành độ $x = 2$ (nghiệm đơn).\nDo đó phương trình $f(t) = 2 \\iff t = -1$ hoặc $t = 2$.\nÁp dụng với $t = f(x) - 1$:\n1. $f(x) - 1 = -1 \\iff f(x) = 0$.\nVì giá trị cực tiểu là $-2$ và cực đại là $2$, đường thẳng $y = 0$ cắt đồ thị tại $3$ điểm phân biệt (nằm giữa cực tiểu và cực đại).\n2. $f(x) - 1 = 2 \\iff f(x) = 3$.\nVì $3 > 2$ (lớn hơn giá trị cực đại), đường thẳng $y = 3$ chỉ cắt đồ thị tại đúng $1$ điểm phân biệt.\nTổng số nghiệm thực phân biệt là $3 + 1 = 4$.",
    "socraticHint": "Phương trình hàm hợp $f(t) = 2$ cho các giá trị của $t$, sau đó giải phương trình tương giao $f(x) = t + 1$ dựa trên tung độ cực trị.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 104,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Cho hàm số bậc ba $y = f(x)$ có bảng biến thiên như sau:\n$\\begin{array}{|c|ccccccc|}\n\\hline\nx & -\\infty & & -1 & & 1 & & +\\infty \\\\\n\\hline\nf'(x) & & + & 0 & - & 0 & + & \\\\\n\\hline\n& & & 2 & & & & +\\infty \\\\\nf(x) & & \\nearrow & & \\searrow & & \\nearrow & \\\\\n& -\\infty & & & & -2 & & \\\\\n\\hline\n\\end{array}$\nSố nghiệm thực phân biệt của phương trình $f(f(x)) = 0$ là:",
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
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$9$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình $f(t) = 0$ có 3 nghiệm phân biệt $t_1 in (-\\infty; -2)$, $t_2 in (-1; 1)$, $t_3 in (1; 2)$.\nKhi đó:\n- $f(x) = t_1 < -2$ có đúng 1 nghiệm thực.\n- $f(x) = t_2 in (-2; 2)$ có đúng 3 nghiệm thực phân biệt.\n- $f(x) = t_3 in (-2; 2)$ có đúng 3 nghiệm thực phân biệt.\nTổng cộng có $1 + 3 + 3 = 7$ nghiệm thực phân biệt.",
    "socraticHint": "Đặt $t = f(x)$, giải tìm nghiệm $t$ rồi tương giao đồ thị $y = f(x)$ với các đường thẳng nằm ngang $y = t_i$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 153,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng biến thiên như sau:\n$\\begin{array}{|c|ccccccc|}\n\\hline\nx & -\\infty & & -1 & & 2 & & +\\infty \\\\\n\\hline\nf'(x) & & + & 0 & - & 0 & + & \\\\\n\\hline\n& & & 4 & & & & +\\infty \\\\\nf(x) & & \\nearrow & & \\searrow & & \\nearrow & \\\\\n& -\\infty & & & & -1 & & \\\\\n\\hline\n\\end{array}$\nSố nghiệm thực của phương trình $2f(x) - 5 = 0$ là:",
    "options": [
      {
        "key": "A",
        "content": "$3$"
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
        "content": "$0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình $2f(x) - 5 = 0 \\iff f(x) = \\frac{5}{2} = 2.5$.\nSo sánh với giá trị cực trị của hàm số: $y_{\\text{CT}} = -1 < 2.5 < y_{\\text{CĐ}} = 4$.\nDo $2.5$ nằm trong khoảng $(-1; 4)$, đường thẳng $y = 2.5$ cắt đồ thị hàm số tại đúng 3 điểm phân biệt.\nVậy phương trình có đúng 3 nghiệm thực.",
    "socraticHint": "Số nghiệm phương trình $f(x) = c$ bằng số giao điểm giữa đồ thị và đường thẳng ngang $y = c$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 230,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Cho hàm số bậc ba $y = f(x) = ax^3 + bx^2 + cx + d$ có bảng biến thiên như sau:\n$\\begin{array}{|c|ccccccc|}\n\\hline\nx & -\\infty & & -2 & & 2 & & +\\infty \\\\\n\\hline\nf'(x) & & + & 0 & - & 0 & + & \\\\\n\\hline\n& & & y_{\\text{CĐ}} & & & & +\\infty \\\\\nf(x) & & \\nearrow & & \\searrow & & \\nearrow & \\\\\n& -\\infty & & & & y_{\\text{CT}} & & \\\\\n\\hline\n\\end{array}$\nBiết đồ thị hàm số cắt trục tung tại điểm có tung độ dương $d > 0$. Có bao nhiêu số dương trong các hệ số $a, b, c, d$?",
    "options": [
      {
        "key": "A",
        "content": "$4$"
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
    "correctAnswer": "C",
    "detailedSolution": "1) Nhánh cuối của đồ thị đi lên khi $x \\to +\\infty$, suy ra $a > 0$.\n2) Đồ thị cắt trục tung tại điểm $(0; d)$ nằm phía trên trục hoành ($d = f(0) > 0$), suy ra $d > 0$.\n3) Đạo hàm: $y' = 3ax^2 + 2bx + c$. Đồ thị có 2 điểm cực trị tại $x_1 = -2$ và $x_2 = 2$.\nTheo định lý Viète:\n- $x_1 + x_2 = -2 + 2 = 0 \\iff -\\frac{2b}{3a} = 0 \\implies b = 0$ (không dương, không âm).\n- $x_1 x_2 = (-2)(2) = -4 < 0 \\iff \\frac{c}{3a} = -4 \\implies c = -12a < 0$ (do $a > 0$).\n\nNhư vậy:\n- $a > 0$ (dương)\n- $b = 0$ (không phải số dương)\n- $c < 0$ (âm)\n- $d > 0$ (dương)\nTrong bốn hệ số $a, b, c, d$, có đúng $2$ số dương là $a$ và $d$.",
    "socraticHint": "Xác định dấu của $a$ từ nhánh vô cùng, dấu của $d$ từ giao điểm với trục tung, và dùng định lý Viète cho hai điểm cực trị để suy ra dấu của $b$ và $c$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 231,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Đồ thị hàm số $y = 2x^3 - x^2 + x + 2$ cắt parabol $y = -6x^2 - 4x - 4$ tại điểm có tọa độ là $(x_0; y_0)$. Tính giá trị của biểu thức $P = x_0 + y_0$.",
    "options": [],
    "correctAnswer": "-22",
    "acceptableAnswers": [
      "-22",
      "-22.0"
    ],
    "detailedSolution": "Phương trình hoành độ giao điểm của hai đồ thị:\n$$2x^3 - x^2 + x + 2 = -6x^2 - 4x - 4$$\n$$\\iff 2x^3 + 5x^2 + 5x + 6 = 0$$\n$$\\iff (x + 2)(2x^2 + x + 3) = 0$$\nPhương trình bậc hai $2x^2 + x + 3 = 0$ có biệt thức $\\Delta = 1^2 - 4 \\times 2 \\times 3 = -23 < 0$, nên vô nghiệm thực.\nDo đó phương trình chỉ có một nghiệm thực duy nhất là $x_0 = -2$.\nThay $x_0 = -2$ vào phương trình parabol:\n$$y_0 = -6(-2)^2 - 4(-2) - 4 = -24 + 8 - 4 = -20$$\nVậy tọa độ giao điểm là $(-2; -20)$.\nGiá trị của biểu thức $P = x_0 + y_0 = -2 + (-20) = -22$.",
    "socraticHint": "Lập phương trình hoành độ giao điểm, nhẩm nghiệm $x = -2$ rồi phân tích thành nhân tử.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 256,
    "type": "fill",
    "topicId": "tuong_giao_va_ham_hop",
    "content": "Cho hàm số $y = f(x)$ có bảng biến thiên như sau:\n$\\begin{array}{|c|ccccccccc|}\n\\hline\nx & -\\infty & & -2 & & 0 & & 2 & & +\\infty \\\\\n\\hline\nf'(x) & & - & 0 & + & 0 & - & 0 & + & \\\\\n\\hline\n& +\\infty & & & & 2 & & & & +\\infty \\\\\nf(x) & & \\searrow & & \\nearrow & & \\searrow & & \\nearrow & \\\\\n& & & -2 & & & & -2 & & \\\\\n\\hline\n\\end{array}$\nCó bao nhiêu giá trị nguyên của tham số $m$ để phương trình $f(|x|) - 2025m - 2 = 0$ có đúng 4 nghiệm phân biệt?",
    "correctAnswer": "0",
    "detailedSolution": "Phương trình tương đương với: $f(|x|) = 2025m + 2$.\nĐồ thị hàm số $y = f(|x|)$ có giá trị cực tiểu là $-2$ và cực đại là $2$.\nSố nghiệm của phương trình là số giao điểm của đồ thị $y = f(|x|)$ và đường thẳng nằm ngang $y = 2025m + 2$.\nĐể phương trình có 4 nghiệm phân biệt thì đường thẳng phải cắt đồ thị tại 4 điểm, tức là $-2 < 2025m + 2 < 2 \\iff -4 < 2025m < 0 \\iff -\\frac{4}{2025} < m < 0$.\nVì $m$ là số nguyên nên không tồn tại giá trị nguyên nào của $m$ trong khoảng $(-4/2025; 0)$.\nVậy có 0 giá trị nguyên của $m$ thỏa mãn.",
    "socraticHint": "Phương trình có 4 nghiệm phân biệt khi đường thẳng nằm giữa giá trị cực tiểu và giá trị cực đại.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  },
  {
    "id": 277,
    "type": "mcq",
    "topicId": "tuong_giao_va_ham_hop",
    "content": "Cho hàm số bậc ba $y = x^3 + bx^2 + cx + d$ ($b, c, d \\in \\mathbb{R}$) có bảng biến thiên như sau:\n$\\begin{array}{|c|ccccccc|}\n\\hline\nx & -\\infty & & x_1 & & x_2 & & +\\infty \\\\\n\\hline\nf'(x) & & + & 0 & - & 0 & + & \\\\\n\\hline\n& & & y_1 & & & & +\\infty \\\\\nf(x) & & \\nearrow & & \\searrow & & \\nearrow & \\\\\n& -\\infty & & & & y_2 & & \\\\\n\\hline\n\\end{array}$\nBiết đồ thị cắt trục tung tại điểm có tung độ dương $d > 0$, hai điểm cực trị thỏa mãn $x_1 < 0 < x_2$ và $|x_1| > x_2$. Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "content": "$b > 0, c < 0, d > 0$"
      },
      {
        "key": "B",
        "content": "$b > 0, c > 0, d > 0$"
      },
      {
        "key": "C",
        "content": "$b > 0, c < 0, d > 0$"
      },
      {
        "key": "D",
        "content": "$b < 0, c > 0, d < 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "- Giao điểm với trục tung là $(0; d) \\implies d > 0$.\n- Đạo hàm: $y' = 3x^2 + 2bx + c$. Đồ thị có hai điểm cực trị trái dấu $x_1 < 0 < x_2$ nên theo Viète:\n  $$x_1 x_2 = \\frac{c}{3} < 0 \\implies c < 0$$\n- Tổng hai nghiệm: $x_1 + x_2 = -\\frac{2b}{3}$. Vì $|x_1| > x_2$ và $x_1 < 0$ nên $x_1 + x_2 < 0 \\implies -\\frac{2b}{3} < 0 \\implies b > 0$.\nVậy $b > 0, c < 0, d > 0$.",
    "socraticHint": "Sử dụng định lý Viète cho phương trình đạo hàm bậc hai để xác định dấu của $b$ và $c$, dùng giao điểm với $Oy$ để xác định dấu của $d$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  },
  {
    "id": 483,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Cho hàm số $y = x^3 - 3mx^2 + 2m$. Có bao nhiêu giá trị của tham số thực m để đồ thị hàm số cắt trục hoành tại ba điểm phân biệt có hoành độ lập thành cấp số cộng?",
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
    "correctAnswer": "B",
    "detailedSolution": "Phương trình hoành độ giao điểm: x^3 - 3mx^2 + 2m = 0 (*)\nPhương trình ax^3 + bx^2 + cx + d = 0 có ba nghiệm lập thành cấp số cộng\n\\to phương trình có một\nnghiệm x 0 = - b .\n3a\nSuy ra phương trình (*) có một nghiệm x = m.\n[ m = \\pm 1\nThay x = m vào phương trình (*) , ta được m^3 - 3m . m^2 + 2m = 0 \\iff -2m^3 + 2m = 0 << [\n[m = 0\n.\nThử lại:\n[ x = 1- 3\n[\n= Với m = 1 , ta được x - 3 x + 2 = 0 << [ x = 1\n.\n[\n[ x = 1 + 3\nDo đó m = 1 thỏa mãn.\n[ x = -1 + 3\n[\n3\n2\n= Với m = -1 , ta được x + 3x - 2 = 0 << [ x = -1\n.\n[\n[ x = -1 - 3\nDo đó m = -1 thỏa mãn.\n= Với m = 0 , ta được x^3 = 0 \\iff x = 0 .\nDo đó m = 0 không thỏa mãn.\nVậy m = \\pm 1 là hai giá trị cần tìm.\n3",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 484,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Đường thẳng \\\\Delta có phương trình $y = 2 x +1 cắt đồ thị của hàm số y = x^3 - x + 3 tại hai điểm A và B với tọa độ được kí hiệu lần lượt là A(x A$; y A) và B (xB ; yB) trong đó xB < xA . Tìm xB + yB ?",
    "options": [
      {
        "key": "A",
        "content": "$xB + yB =-5$"
      },
      {
        "key": "B",
        "content": "$xB + yB =-2$"
      },
      {
        "key": "C",
        "content": "$xB + yB = 4$"
      },
      {
        "key": "D",
        "content": "$xB + yB = 7$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. xB + yB = 7\nPhương trình hoành độ giao điểm của \\\\Delta và y = x^3 - x + 3 :\n[ x = -2 \\implies y = -3\nx^3 - x + 3 = 2 x +1 \\iff x^3 - 3 x + 2 = 0 \\iff [\n[ x = 1 \\implies y = 3\nVậy A(1;3); B (-2; -3) \\implies xB + yB = -5",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 485,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Cho hàm số $y = x^3 + 3mx^2 - m^3 có đồ thị (Cm) và đường thẳng$ d : $y = m^2 x + 2m^3$. Biết rằng m1 , m^2 (m1 > m^2) là hai giá trị thực của m để đường thẳng d cắt đồ thị (Cm) tại^3 điểm phân biệt có hoành độ x1 , x^2 , x^3 thỏa mãn x14 + x^2 4 + x34 = 83 . Phát biểu nào sau đây là đúng về quan hệ giữa hai giá trị m1 , m^2 ?",
    "options": [
      {
        "key": "A",
        "content": "$m1 + m^2 = 0$"
      },
      {
        "key": "B",
        "content": "$m12 + 2m^2 > 4$"
      },
      {
        "key": "C",
        "content": "$m^2 2 + 2m1 > 4$"
      },
      {
        "key": "D",
        "content": "$m1 - m^2 = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. m1 - m^2 = 0 .\nXét phương trình hoành độ giao điểm của d và (Cm)\nx^3 + 3mx^2 - m^3 = m^2 x + 2 m^3\n\\iff x^3 + 3mx^2 - m^2 x - 3m^3 = 0\n\\iff x^3 - m^2 x + 3mx^2 - 3m^3 = 0\n() ()\n\\iff x (x - m) + 3m (x - m) = 0\n\\iff (x + 3m) (x - m) = 0\n2\n2\n2\n2\n2\n2\n[ x = -3m\n\\iff [ x = m\n[ x = - m\nĐể đường thẳng d cắt đồ thị (Cm) tại^3 điểm phân biệt có hoành độ x1 , x^2 , x^3 \\iff m \\ne 0 .\n4\n4\nKhi đó, x14 + x^2 4 + x34 = 83 \\iff m^4 + (- m) + (-3m) = 83\n\\iff 83m^4 = 83 \\iff m = \\pm 1\nVậy m1 = 1, m^2 = -1 hay m1 + m^2 = 0 .",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 486,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm tất cả các giá trị thực của tham số m để đồ thị hàm số $y = x^3 - 3x^2 cắt đường thẳng y = m tại ba điểm phân biệt$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-\\infty ; -4)$"
      },
      {
        "key": "B",
        "content": "$m \\in (-4; 0)$"
      },
      {
        "key": "C",
        "content": "$m \\in (0; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$m \\in (-\\infty ; -4) \\cup (0; +\\infty)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "[x = 0\nTa có y = x^3 - 3x^2 \\implies y' = 3x^2 - 6 x; y' = 0 \\iff [\n[x = 2\nBảng biến thiên:\nx\ny'\n-\\infty\n+\n0\n0\n0\n+\\infty^2\n-\n0\n+\n+\\infty\ny\n-\\infty\n-4\nDựa vào bảng biến thiên ta thấy đồ thị hàm số y = x^3 - 3x^2 cắt đường thẳng y = m tại ba điểm\nphân biệt khi -4 < m < 0",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 487,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm tất cả các giá trị thực của tham số mđể đường thẳng $y = mx - m + 1 cắt đồ thị$ hàm số $y = x^3 - 3x^2 + x + 2 tại ba điểm A$, B, C phân biệt sao AB = BC^5",
    "options": [
      {
        "key": "A",
        "content": "$m \\in - ; +\\infty^4$"
      },
      {
        "key": "B",
        "content": "$m \\in (-2; +\\infty)$"
      },
      {
        "key": "C",
        "content": "$m \\in \\mathbb{R}$"
      },
      {
        "key": "D",
        "content": "$m \\in (-\\infty ; 0) \\cup [ 4; +\\infty)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có phương trình hoành độ giao điểm là:\nx^3 - 3 x^2 + x + 2 = mx - m + 1 \\iff x^3 - 3 x^2 + x - mx + m + 1 = 0\n(1)\n[x = 1\n\\iff (x - 1) x^2 - 2 x - m - 1 = 0 \\iff [ 2\n.Để đường thẳng cắt đồ thị hàm số tại ba\n[x - 2x - m - 1 = 0\nđiểm phân biệt thì phương trình x^2 - 2 x - m - 1 = 0 có hai nghiệm phân biệt khác 1 .Hay\n1 + m + 1 > 0\nm > -2\n\\iff \\iff m > -2 .Với m > -2 thì phương trình (1) có ba nghiệm phân\n1 - 2 - m - 1 \\ne 0\nm \\ne -2\nx + x^2\nbiệt là 1, x1 , x^2 (x1 , x^2 là nghiệm của x^2 - 2 x - m - 1 = 0). Mà 1\n= 1 suy ra điểm có hoành^2\nđộ x=1 luôn là trung điểm của hai điểm còn lại. Nên luôn có 3 điểm A,B,C thoả mãn AB = BC\nVậy m > -2 .\n(",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 488,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm tất cả các giá trị thực của tham số m để đường thẳng $y = - mx cắt đồ thị của$ hàm số $y = x^3 - 3x^2 - m + 2 tại ba điểm phân biệt A$, B, C sao cho AB = BC .",
    "options": [
      {
        "key": "A",
        "content": "$m\\in (-\\infty ; -1)$"
      },
      {
        "key": "B",
        "content": "$m\\in (-\\infty : +\\infty)$"
      },
      {
        "key": "C",
        "content": "$m\\in (1: +\\infty)$"
      },
      {
        "key": "D",
        "content": "$m\\in (-\\infty ;3)$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Hoành độ giao điểm là nghiệm của phương trình\n[x = 1\nx^3 - 3 x^2 - m + 2 = -mx \\iff (x - 1) (x^2 - 2 x + m - 2) = 0 \\iff [ 2\n[ x - 2x + m - 2 = 0\nĐặt nghiệm x^2 = 1. Từ giải thiết bài toán trở thành tìm m để phương trình có 3 nghiệm lập thành\ncấp số cộng.\nKhi đó phương trình x^2 - 2 x + m - 2 = 0 phải có 2 nghiệm phân biệt (vì theo Viet rõ ràng\nx1 + x^3 = 2 = 2 x^2)\nVậy ta chỉ cần \\\\Delta' = 1 - (m - 2) > 0 \\iff m < 3",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 489,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "(Chuyên Lê Thánh Tông 2019) Có bao nhiêu giá trị nguyên của tham số m \\in $[ -2018; 2019]$ để đồ thị hàm số $y = x^3 - 3mx + 3 và đường thẳng y = 3x + 1 có duy nhất một điểm chung$?",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$2019$"
      },
      {
        "key": "C",
        "content": "$4038$"
      },
      {
        "key": "D",
        "content": "$2018$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Phương trình hoành độ giao điểm:\nx^3 - 3x + 2\nx^3 - 3mx + 3 = 3x + 1 \\iff x^3 - 3x + 2 = 3mx \\iff 3m =\n(1).\nx\nx^3 - 3x + 2\n2\n2 2 x^3 - 2\nXét hàm f (x) =\n; f'(x) = 0 \\iff x = 1 .\n= x^2 - 3 + ; f'(x) = 2 x - 2 =\nx\nx\nx\nx^2\nBảng biến thiên.\nx\n0\n1\n-\\infty\n+\\infty'\nf (x)\n0\n+\n-\n-\n+\\infty\n+\\infty\n+\\infty\nf (x)\n0\n-\\infty\nKhi đó yêu cầu bài toán \\iff m < 0 . Mà m nguyên và m \\in [ -2018; 2019] nên có 2018 giá trị thỏa\nmãn.",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 490,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tính tổng tất cả các giá trị của m biết đồ thị hàm số $y = x^3 + 2 mx^2 + (m + 3) x + 4 và đường thẳng y = x + 4 cắt nhau tại ba điểm phân biệt A (0$; 4) , B , C sao cho diện tích tam giác IBC bằng^8 2 với I (1;3) .",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$8$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 5 .\nChọn C\n+) Gọi đồ thị hàm số y = x^3 + 2 mx^2 + (m + 3) x + 4 là (C m) và đồ thị hàm số y = x + 4 là (d) .\n+) Phương trình hoành độ giao điểm của (C m) và (d) là\n[x = 0\nx^3 + 2 mx^2 + (m + 3) x + 4 = x + 4 \\iff x^3 + 2mx^2 + (m + 2) x = 0 (*) \\iff [ 2\n[ x + 2mx + m + 2 = 0\n2\n+) Gọi g (x) = x + 2 mx + m + 2 .\n+) (d) cắt (C m) tại ba điểm phân biệt \\iff phương trình (*) có ba nghiệm phân biệt\n\\iff phương trình g (x) = 0 có hai nghiệm phân biệt khác 0\n[ m < -1\n\\\\Delta'g > 0\nm^2 - m - 2 > 0\n\\iff \\iff \\iff [ m > 2 (a)\ng (0) \\ne 0\nm + 2 \\ne 0\nm \\ne -2\n+) x = 0 là hoành độ điểm A , hoành độ điểm B , C là hai nghiệm x1 , x^2 của phương trình\ng (x) = 0\n2\n2\n2\n+) BC^2 = (x^2 - x1) + [(x^2 + 4) - (x1 + 4) ] = 2 (x^2 - x1) (do B , C thuộc đường thẳng (d)\n2\n= 2 [(x^2 + x1) - 4 x1 x^2 ] = 8 m^2 - m - 2\n[\n]\n+) Viết phương trình đường thẳng (d) dưới dạng x - y + 4 = 0 , ta có\n(d (I , (d)) =\n1- 3 + 4\n2\n+) S IBC = 8 2 \\iff )\n= 2.\n2\n1\n1\nBC.d (I , (d)) = 8 2 \\iff BC^2 . [d (I , (d)) ] = 128\n2\n4\n1\n\\iff ^8 (m^2 - m - 2) .2 = 128\n4\n[\n1 + 137\n[m =\n2\n(thỏa điều kiện (a))\n\\iff m^2 - m - 34 = 0 \\iff [\n[\n1 - 137\n[m =\n[\n2\n+) Vậy tổng tất cả các giá trị m là 1.",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 491,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Có bao nhiêu giá trị nguyên của tham số m \\in $[ -2018; 2019]$ để đồ thị hàm số $y = x^3 - 3mx + 3 và$ đường thẳng $y = 3 x + 1 có duy nhất một điểm chung$?",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$2019$"
      },
      {
        "key": "C",
        "content": "$4038$"
      },
      {
        "key": "D",
        "content": "$2018$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "+ Phương trình hoành độ giao điểm: x^3 - 3mx + 3 = 3 x + 1 \\iff 3mx = x^3 - 3 x + 2 . (1)\n+ Dễ thấy x = 0 không thỏa.\n2\n+ (1) \\iff 3m = x^2 - 3 + = f (x) .\nx^2 2 x^3 - 2\n= 0 \\iff x = 1.\n+ f'(x) = 2x - 2 =\nx\nx^2\n+ Bảng biến thiên:\n+ Đồ thị hàm số y = x^3 - 3mx + 3 và đường thẳng y = 3 x + 1 có duy nhất một điểm chung\n\\iff 3m < 0 \\iff m < 0 .\n+ Do m\\in ' và m \\in [ -2018; 2019] nên có 2018 giá trị.",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 492,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Có bao nhiêu giá trị của m để đồ thị hàm số $y = -2 x^3 - 3m^2 x^2 + (m^3 + 2m) x + 2 cắt trục hoành tại$ ba điểm phân biệt có hoành độ là ba số hạng liên tiếp của một cấp số nhân?",
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
    "correctAnswer": "C",
    "detailedSolution": "Hoành độ giao điểm của đồ thị với trục hoành là nghiệm của phương trình\n-2 x^3 - 3m^2 x^2 + (m^3 + 2 m) x + 2 = 0. (*)\nGiả sử đồ thị cắt trục hoành tại^3 điểm có hoành độ x1 , x^2 , x^3 .\nKhi đó ta có\ny = -2 (x - x1)(x - x^2)(x - x^3) = -2 x^3 + 2 (x1 + x^2 + x^3) x^2 - 2 (x1 x^2 + x^2 x^3 + x^3 x1) x + 2 x1 x^2 x^3 .\nĐồng nhất thức ta được\n3m^2\nx\n+\nx\n+\nx\n=\n-\n1 2 3\n2\n2 (x1 + x^2 + x^3) = -3m^2\nm^3 + 2m^3\n-2 (x1 x^2 + x^2 x^3 + x^3 x1) = m + 2m \\iff x1 x^2 + x^2 x^3 + x^3 x1 = -\n2\n2\nx\nx\nx\n=\n2\n1\n2\n3\nx1 x^2 x^3 = 1\nx\n,\nx\n,\nx\nVì 1 2 3 lập thành cấp số nhân nên x1 x^3 = x22 .\n(1)\n(2)\n(3)\n(4)\n[m = 0\nTừ (2) và (3) : x^2 = 1. Thay vào phương trình (*) rút ra được [ m = 1 .\n[ m = 2\nVới m = 0 \\implies phương trình (*) : -2 x^3 + 2 = 0 \\iff x = 1 (không thỏa mãn).\n[\n[ x1 = -2\n[\n3\n2\nVới m = 1 \\implies phương trình (*) : -2 x - 3x + 3x + 2 = 0 \\iff [ x^2 = 1 (thỏa mãn).\n[\n1\n[ x^3 = -\n[\n2\n[\n-7 - 45\n[ x1 =\n2\n[\n3\n2\nVới m = 2 \\implies phương trình (*) : x + 6 x - 6 x - 1 = 0 \\iff [ x^2 = 1\n(thỏa mãn).\n[\n[ x = -7 + 45\n[ 3\n2\nVậy có 2 giá trị m thỏa mãn.",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 493,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm m để đồ thị (C) của $y = x^3 - 3x^2 + 4 và đường thẳng y = mx + m cắt nhau tại^3 điểm phân biệt A (-1$; 0) , B , C sao cho \\\\Delta OBC có diện tích bằng 64 .",
    "options": [
      {
        "key": "A",
        "content": "$m = 14$"
      },
      {
        "key": "B",
        "content": "$m = 15$"
      },
      {
        "key": "C",
        "content": "$m = 16$"
      },
      {
        "key": "D",
        "content": "$m = 17$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "d (O, BC) =\nm^2 + 1\n2\n2\n(xB - xC) + (yb - yc) = (m^2 + 1) (xB - xC)\nBC =\n=\nm^2\n2\n(m + 1) [(x + x) - 4 x x ] = (m + 1) 4m^2\n\\implies S\\\\Delta OBC =\nB\nC^2\nB C\n1\nd (O, BC) .BC = m m = 64 \\iff m = 16.\n2\nCách^2:\nPhương trình hoành độ giao điểm:\n[ x = -1\nx^3 - 3 x^2 + 4 = mx + m \\iff (x + 1) (x^2 - 4 x + 4 - m) = 0 \\iff [\n2\n[(x - 2) = m (*)\nm > 0\nĐể d cắt (C) tại^3 điểm phân biệt phương trình (*) có 2 nghiệm phân biệt khác -1 \\iff m \\ne ^9\n[ x = 2 - m \\implies B^2 - m ;3m - m m\n(*) \\iff [\n[ x = 2 + m \\implies C^2 + m ;3m + m m\n\\cup\\cup\\cup\\to\n\\cup\\cup\\cup\\to\nOB = 2 - m ;3m - m m , OC = 2 + m ;3m + m m\n1 \\cup\\cup\\cup\\to \\cup\\cup\\cup\\to\n\\implies S \\\\Delta OBC = [OB, OC ] = m m = 64 \\implies m = 16.\n2\n(((",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 494,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "(Sở Bắc Ninh 2019) Cho hàm số $y = x^3 - 8 x^2 + 8 x có đồ thị (C) và hàm số y = x^2 + (8 - a) x - b$ (với a , b \\in $\\mathbb{R}$) có đồ thị (P) . Biết đồ thị hàm số (C) cắt (P) tại ba điểm có hoành độ nằm trong $[ -1;5]$ . Khi a đạt giá trị nhỏ nhất thì tích ab bằng",
    "options": [
      {
        "key": "A",
        "content": "$-729$"
      },
      {
        "key": "B",
        "content": "$375$"
      },
      {
        "key": "C",
        "content": "$225$"
      },
      {
        "key": "D",
        "content": "$-384$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "D. -384 .\nChọn B\nCách 1:\nPhương trình hoành độ giao điểm là x^3 - 8 x^2 + 8 x = x^2 + (8 - a) x - b \\iff x^3 - 9 x^2 + ax + b = 0 (1).\nm + n + p = 9\nGọi m, n, p là 3 nghiệm của phương trình (1) ta có mn + np + pm = a\nmnp = -b\nDo (C) cắt (P) tại ba điểm có hoành độ nằm trong [ -1;5] nên\n(m + 1)(n + 1)(p + 1) \\ge 0\nmnp + (mn + np + pm) + (m + n + p) + 1 \\ge 0\n\\iff (5 - m)(5 - n)(5 - p) \\ge 0\n- mnp + 5(mn + np + pm) - 25(m + n + p) + 125 \\ge 0\nCộng vế theo vế của hệ phương trình trên ta\ncó 6(mn + np + pm) - 24(m + n + p) - 124 \\ge 0 \\iff mn + np + pm \\ge 15 \\implies a \\ge 15.\nmnp \\ge -25\nDấu bằng xảy ra khi\n\\iff mnp = -25 \\implies b = 25\nmnp \\le -25\nVậy tích ab = 375.\nCách^2: Phương trình hoành độ giao điểm là\nx^3 - 8 x^2 + 8 x = x^2 + (8 - a) x - b \\iff x^3 - 9 x^2 + ax + b = 0 (1).\nKhi đó phương trình (1) có 3 nghiệm nằm trong [ -1;5] .\nĐặt f (x) = x^3 - 9 x^2 + ax + b suy ra f'(x) = 3x^2 - 18 x + a . Để phương trình (1) có 3 nghiệm nằm\ntrong [ -1;5] thì f'(x) = 3x^2 - 18 x + a = 0 có hai nghiệm phân biệt thuộc\n[ -1;5] \\iff a = -3x^2 + 18 x có hai nghiệm phân biệt thuộc [ -1;5] .\nXét hàm số g (x) = -3x^2 + 18 x suy ra g '(x) = -6 x + 18 , ta có g '(x) = 0 \\iff x = 3 .\nBảng biến thiên của y = g (x)\nTừ BBT ta có 15 \\le a < 27 suy ra giá trị nhỏ nhất của a bằng 15 khi x = 5 , khi đó b = 25 .\nVậy tích ab = 375.",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 495,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Có bao nhiêu giá trị nguyên của tham số m để đường thẳng $y = -mx + m$ cắt đồ thị hàm số $y = x^3 + mx^2 + m tại^3 điểm phân biêt có hoành độ x1$, x^2 , x^3 thỏa mãn -1 < x1 + x^2 + x^3 < 3 ?.",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$5$"
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
    "correctAnswer": "C",
    "detailedSolution": "(d) y = -mx + m , (C) y = x^3 + mx^2 + m .\nPhương trình hoành độ giao điểm của (d) và (C) : x^3 + mx^2 + mx = 0 (1) .\n[x = 0\n\\iff [ 2\n[ x + mx + m = 0 (2)\nGọi x1 , x^2 là 2 nghiệm của phương trình (2) , x^3 = 0 .\n(1) có 3 nghiệm phân biệt \\iff (2) có 2 nghiệm x , x phân biệt và khác 0 .\n1\n2\n2\n\\\\Delta > 0, \\\\Delta = m - 4 m\n\\iff m \\in (-\\infty ; 0) \\cup (4; +\\infty) .\n\\iff m \\ne 0\n(1) có 3 nghiệm phân biệt x1 , x^2 , x^3 thỏa -1 < x1 + x^2 + x^3 < 3 , với x1 + x^2 = -m , x^3 = 0 .\n\\iff -1 < -m < 3\n\\iff -3 < m < 1 , mà m \\in (-\\infty ; 0) \\cup (4; +\\infty) , m \\in '\n\\implies m \\in \\{-2; -1\\} . Vậy có 2 giá trị m .",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 496,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Cho hàm số bậc ba . $y = f (x) có đồ thị đi qua điểm$ A (1;1) , B (2; 4) , C (3;9) . Các đường thẳng AB , AC , BC lại cắt đồ thị lần lượt tại các điểm M , N , P (M khác A và B , N khác A và C , P khác B và C . Biết rằng tổng các hoành độ của M , N , P bằng^5, giá trị của f (0) là",
    "options": [
      {
        "key": "A",
        "content": "$-6$"
      },
      {
        "key": "B",
        "content": "$-18$"
      },
      {
        "key": "C",
        "content": "$18$"
      },
      {
        "key": "D",
        "content": "$6$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "D. 6.\nChọn B\nTừ giả thuyết bài toán ta giả sử f (x) = a (x - 1)(x - 2)(x - 3) + x^2 (a \\ne 0)\nTa có: AB : y = 3 x - 2 , AC : y = 4 x - 3 , BC : y = 5 x - 6 .\nKhi đó:\nHoành\nđộ\ncủa\nlà\nnghiệm\ncủa\nphương\ntrình:\nM^2\na (xM - 1)(xM - 2)(xM - 3) + xM = 3xM - 2 \\iff a (xM - 1)(xM - 2)(xM - 3) + (xM - 1)(xM - 2) = 0\n1\n.\na\nN\nHoành\nđộ\ncủa\nlà\nnghiệm\ncủa\nphương\ntrình:\n2\na (xN - 1)(xN - 2)(xN - 3) + xN = 4 xN - 3 \\iff a (xN - 1)(xN - 2)(xN - 3) + (xN - 1)(xN - 3) = 0\n\\iff a (xM - 3) + 1 = 0 \\iff x M = 3 -\n1\n.\na\nHoành\nđộ\ncủa\nlà\nnghiệm\ncủa\nphương\ntrình:\nP^2\na (xP - 1)(xP - 2)(xP - 3) + xP = 5 xP - 6 \\iff a (xP - 1)(xP - 2)(xP - 3) + (xP - 2)(xP - 3) = 0\n\\iff a (xN - 2) + 1 = 0 \\iff x N = 2 -\n\\iff a (xP - 1) + 1 = 0 \\iff xP = 1 -\n1\n.\na\nTừ giả thuyết ta có; xM + xN + xP = 5 \\iff ^6 -\n3\n= 5 \\iff a = 3.\na\nDo đó: f (x) = 3 (x - 1)(x - 2)(x - 3) + x^2\nf (0) = -18 .",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 497,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm giá trị thực của tham số m để đồ thị hàm số $y = x^3 - 3x^2 + 2 cắt đường thẳng d : y = m (x -1) tại ba điểm phân biệt có hoành độ x1$, x^2 , x^3 thỏa mãn x12 + x22 + x22 > 5 .",
    "options": [
      {
        "key": "A",
        "content": "$m \\ge -3$"
      },
      {
        "key": "B",
        "content": "$m \\ge -2$"
      },
      {
        "key": "C",
        "content": "$m > -3$"
      },
      {
        "key": "D",
        "content": "$m > -2$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. m > -2 .\nChọn D\nPhương trình hoành độ giao điểm:\nx^3 - 3x^2 + 2 = m (x -1) \\iff x^3 - 3x^2 - mx + m + 2 = 0\n[ x1 = 1\n.\n\\iff (x - 1) (x^2 - 2 x - m - 2) = 0 \\iff [\n2\n[ g (x) = x - 2 x - (m + 2) = 0 (*)\nĐể hai đồ thị cắt nhau tại ba điểm phân biệt thì phương trình (*) phải có hai nghiệm phân biệt\n12 + (m + 2) > 0\n\\\\Delta' > 0\nm > -3\n\\iff \\iff \\iff m > -3 .\nkhác 1 \\iff g (1) \\ne 0 1 - 2 - m - 2 \\ne 0 m \\ne -3\nGọi x^2 , x^3 là hai nghiệm phương trình (*) .\nx^2 + x^3 = 2\nTheo định lý Viét ta có\n.\nx^2 .x^3 = - (m + 2)\nTheo bài ta có x12 + x22 + x32 > 5 \\iff 1 + x22 + x32 > 5 \\iff x22 + x32 > 4\n2\n\\iff (x^2 + x^3) - 2 x^2 x^3 > 4 \\iff ^4 + 2 (m + 2) > 4 \\iff m > -2 .\nSo sánh với điều kiện ở trên suy ra m > -2 .\nKết luận: m > -2 thỏa mãn yêu cầu bài toán.",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 498,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Gọi S là tập tất cả các giá trị của tham số m để đồ thị hàm số $y = x^3 + 3x^2 - 9 x + 2m + 1 và trục$ Ox có đúng hai điểm chung phân biệt. Tính tổng T của các phần tử thuộc tập S",
    "options": [
      {
        "key": "A",
        "content": "$T = -10$"
      },
      {
        "key": "B",
        "content": "$T = 10$"
      },
      {
        "key": "C",
        "content": "$T = -12$"
      },
      {
        "key": "D",
        "content": "$T = 12$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Hoành độ giao điểm của đồ thị hàm số y = x^3 + 3x^2 - 9 x + 2m + 1 và trục Ox là nghiệm của\nphương trình : x^3 + 3x^2 - 9 x + 2m + 1 = 0 \\iff - x^3 - 3x^2 + 9 x = 2m + 1 .\nXét hàm số f (x) = - x^3 - 3x^2 + 9 x .\nTập xác định: D = \\mathbb{R} .\n[x = 1\nf'(x) = -3x^2 - 6 x + 9, f'(x) = 0 \\iff -3x^2 - 6 x + 9 = 0 \\iff [\n.\n[ x = -3\nBảng biến thiên:\nĐồ thị hàm số y = x^3 + 3 x^2 - 9 x + 2m + 1 cắt trục Ox tại hai điểm phân biệt khi và chỉ khi đường\nthẳng y = 2m + 1 cắt đồ thị hàm số f (x) = - x^3 - 3x^2 + 9 x tại hai điểm phân biệt.\n[ 2m + 1 = 5\n[m = 2\n\\iff [\n\\implies S = \\{-14; 2\\} .\nTừ bảng biến thiên suy ra : [\n[ 2m + 1 = -27\n[ m = -14\nTổng của các phần tử thuộc tập S là : T = -14 + 2 = -12 .",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 499,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Số giá trị nguyên của tham số m \\in $[ -2020; 2021]$ để đường thẳng $y = 3mx + 1 cắt đồ thị hàm$ số $y = x^3 - 3x + 3 tại ba điểm phân biệt là$",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$2021$"
      },
      {
        "key": "C",
        "content": "$670$"
      },
      {
        "key": "D",
        "content": "$2020$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "- Phương trình hoành độ giao điểm của đồ thị y = x^3 - 3x + 3 và đường thẳng y = 3mx + 1 là\nx^3 - 3x + 3 = 3mx + 1 \\iff x^3 + 2 = 3x (m + 1) (1).\nNếu x = 0 thì (1) không thỏa mãn.\nx^3 + 2\n= 3 (m + 1) .\nNếu x \\ne 0 ta có (1) \\iff x\nx^3 + 2\n- Xét hàm số g (x) =\nvới x \\in \\mathbb{R} \\ \\{0\\} .\nx^2 x^3 - 2\n, \\forall x \\in \\mathbb{R} \\ \\{0\\}\nTa có g ' (x) =\nx^2\ng'(x) = 0 \\iff x = 1 .\nx^3 + 2\nvới x \\in \\mathbb{R} \\ \\{0\\}\nx\nx -\\infty\n+\\infty\n1\n0\n-\n- 0 +\ng'(x)\n+\\infty\n+\\infty\n+\\infty\nBảng biến thiên của hàm số g (x) =\ng(x)\n3\n-\\infty\n- Dựa vào bảng biến thiên ta thấy đồ thị hàm số đã cho cắt đường thẳng y = 3mx + 1 tại^3 điểm\nphân biệt \\iff ^3 (m + 1) > 3 \\iff m + 1 > 1 \\iff m \\in (0; +\\infty) .\nKết hợp với điều kiện m \\in [ -2020; 2021] ta được m \\in (0; 2021] .\nDo m \\in ' \\implies m \\in \\{1; 2;3;...; 2021\\} .",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 500,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Có tất cả bao nhiêu giá trị nguyên thuộc đoạn $[ -2020; 2020]$ của tham số m để đường thẳng $y = x + m cắt đồ thị hàm số y =$ 2x - 3 tại hai điểm phân biệt? x -1",
    "options": [
      {
        "key": "A",
        "content": "$4036$"
      },
      {
        "key": "B",
        "content": "$4040$"
      },
      {
        "key": "C",
        "content": "$4038$"
      },
      {
        "key": "D",
        "content": "$4034$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. 4034.\nChọn A\nTa có phương trình hoành độ giao điểm của đường thẳng y = x + m và đường cong y =\n2x - 3\nx -1\n2x - 3\n\\iff (x + m)(x - 1) = 2 x - 3 (x \\ne 1) .\nx -1\n\\iff x^2 + mx - x - m = 2 x - 3 \\iff x^2 + (m - 3) x - m + 3 = 0 (*)\nx+m=\n2\nTa có \\\\Delta = (m - 3) - 4 (-m + 3) = m^2 - 6m + 9 + 4m - 12 = m^2 - 2m - 3 .\nĐể đường thẳng y = x + m cắt đồ thị hàm số y =\n2x - 3\ntại hai điểm phân biệt thì phương trình\nx -1\n(*) có hai nghiệm phân biệt khác 1 .\n2\n\\\\Delta > 0\n[ m < -1\nm - 2m - 3 > 0\n.\n\\iff ^2\n\\iff \\iff [\n1 + (m - 3) .1 - m + 3 \\ne 0\n[m > 3\n1 \\ne 0 (lđ)\n[m < -1\n[ -2020 \\le m < -1\nTheo giả thiết: -2020 \\le m \\le 2020 và [\nnên [\n.\n[m > 3\n[3 < m \\le 2020\nVì m \\in ' và -2020 \\le m < -1 , suy ra có\n-2 - (-2020)\n1\n+ 1 = 2019 giá trị nguyên m .\n2020 - 4\n+ 1 = 2017 giá trị nguyên m .\n1\nTóm lại có tất cả 2019 + 2017 = 4036 giá trị nguyên của tham số m .\nVì m \\in ' và 3 < m \\le 2020 , suy ra có",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 501,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm tất cả các giá trị thực của tham số m để đường thẳng $y = 2 x + m cắt đồ thị$ x+3 của hàm số $y = tại hai điểm phân biệt$. x +1",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-\\infty ; + \\infty)$"
      },
      {
        "key": "B",
        "content": "$m \\in (-1; + \\infty)$"
      },
      {
        "key": "C",
        "content": "$m \\in (-2; 4)$"
      },
      {
        "key": "D",
        "content": "$m \\in (-\\infty ; - 2)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình hoành độ giao điểm:\nx+3\n= 2 x + m (*), với điều kiện xác định x \\ne -1 .\nx +1\nBiến đổi (*) về thành: 2 x^2 + (m + 1) x + m - 3 = 0 (**) .\nTheo yêu cầu đề bài, phương trình (**) cần có hai nghiệm phân biệt khác -1 , tức là:\n2\nm^2 - 6m + 25 > 0\n\\\\Delta = (m + 1) - 4.2.(m - 3) > 0\n\\iff \\iff m \\in (-\\infty ; + \\infty).\n2\n-2 \\ne 0\n2.\n-\n1\n+\nm\n+\n1\n.\n-\n1\n+\nm\n-\n3\n\\ne 0\n()\n()\n()",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 502,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Gọi S là tập các số thực m để đường thẳng d cắt đồ thị (C) tại hai điểm phân biệt A , B sao (Chuyên Nguyễn Du ĐăkLăk 2019) Cho hàm số $y = cho tam giác OAB (O là gốc tọa độ) có bán kính đường tròn ngoại tiếp bằng^2 2$. Tổng các phần tử của S bằng",
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
        "content": "$0$"
      },
      {
        "key": "D",
        "content": "$8$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "x\nXét phương trình\n= - x + m, (điều kiện x \\ne 1).\nx -1\nPhương trình tương đương x^2 - mx + m = 0 (1) .\nĐồ thị (C) và đường thẳng d cắt nhau tại hai điểm phân biệt A và B khi và chỉ khi phương\ntrình (1) có hai nghiệm phân biệt x \\ne 1 điều kiện cần và đủ là m < 0 \\Rightarrow m > 4 .\nKhi đó hai giao điểm là A(x1 ; - x1 + m) ; B(x^2 ; - x^2 + m) .\nTa có OA = m^2 - 2m ; OB = m^2 - 2m ; AB = 2(m^2 - 4m) ; d (O, d) =\nm^2\n.\n1\n1 m\nOA.OB. AB\n.\nS\\\\Delta OAB = . AB.d (O, d) = .\n. 2(m^2 - 4m) =\n2\n2 2\n4R\n(m^2 - 2m). 2(m^2 - 4m)\n1 m\n.\n2(m^2 - 4m) =\n2 2\n4.2 2\n[ m = 0 (l)\n2\n\\iff m - 2m = 4 m \\iff [ m = 6 (n) .\n[\n[ m = -2 (n)\nSuy ra\nVậy tổng các phần từ của S bằng^4 .",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 503,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm tất cả các giá trị của tham số 1- x m để đường thẳng d cắt đồ thị (C) tại^2 điểm phân biệt Đồ thị hàm số y =",
    "options": [
      {
        "key": "A",
        "content": "$m > -1$"
      },
      {
        "key": "B",
        "content": "$-5 < m < -1$"
      },
      {
        "key": "C",
        "content": "$m < -5$"
      },
      {
        "key": "D",
        "content": "$m < -5 hoặc m > -1$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. m < -5 hoặc m > -1 .\nChọn D\n2x -1\ncó tập xác định D = \\mathbb{R} \\ \\{1\\} .\n1- x\n2x -1\n= x + m (x \\ne 1)\nLập phương trình hoành độ giao điểm:\n1- x\nx^2 + (m + 1) x - (m + 1) = 0 (*)\n2 x - 1 = x + m - x^2 - mx\n\\iff \\iff x \\ne 1\nx \\ne 1\nHàm số y =\nĐường thẳng d cắt đồ thị (C) tại^2 điểm phân biệt\n\\iff phương trình (*) có 2 nghiệm phân biệt x \\ne 1\n2\n\\\\Delta > 0\nm + 6m + 5 > 0\n\\iff m < -5 hoặc m > -1 .\n\\iff ^2\n\\iff 1 + (m + 1) - (m + 1) \\ne 0\n1 \\ne 0 (t/m)",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 504,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Biết rằng đường thẳng d cắt (C) tại hai điểm phân biệt A và B sao cho điểm (Sở Cần Thơ 2019) Cho hàm số $y = G (2$; -2) là trọng tâm của tam giác OAB (O là gốc toạ độ). Giá trị của m bằng",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$-9$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. 5 .\nChọn A\nHàm số y =\nx+3\n-2\n< 0 , \\forall x \\in D và đường thẳng d : y = x - m có hệ số a = 1 > 0\ncó y' =\n2\nx +1\n(x + 1)\nnên d luôn cắt (C) tại hai điểm phân biệt A (x A ; y A) và B (xB ; yB) với mọi giá trị của tham số\nm.\nx+3\n= x-m\nPhương trình hoành độ giao điểm của d và (C) là:\nx +1\n\\iff x^2 - mx - m - 3 = 0 (x \\ne -1) .\nSuy ra xA , xB là 2 nghiệm của phương trình x^2 - mx - m - 3 = 0 .\nTheo định lí Viet, ta có xA + xB = m .\nMặt khác, G (2; -2) là trọng tâm của tam giác OAB nên xA + xB + xO = 3xG\n\\iff xA + xB = 6\n\\iff m = 6.\nVậy m = 6 thoả mãn yêu cầu đề bài.",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 505,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Có bao nhiêu giá trị nguyên dương của tham số m để đường thẳng $y = -3x + m^2 x +1$ cắt đồ thị hàm số $y = tại hai điểm phân biệt A và B sao cho trọng tâm tam giác OAB (O$ x -1 là gốc tọa độ) thuộc đường thẳng x - 2 y - 2 = 0 ?",
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
        "content": "$0$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "2 x +1\nPhương trình hoành độ giao điểm: -3x + m =\n(*)\nx -1\nVới điều kiện x \\ne 1 , (*) \\implies ^3 x^2 - (m + 1) x + m + 1 = 0 (1)\n2 x +1\ntại hai điểm phân biệt A và B khi và\nx -1\nchỉ khi phương trình (1) có hai nghiệm phân biệt khác 1, điều kiện:\n2\n[ m < -1\nm^2 -10m -11 > 0\n(m + 1) -12 (m + 1) > 0\n\\iff [\n. (**)\n\\iff ^2\n[ m > 11\n3\\ne 0\n3.1\n-\nm\n+\n1\n.1\n+\nm\n+\n1\n\\ne 0\n()\nKhông mất tính tổng quát, giả sử A (x1 ; - 3 x1 + m) , B (x^2 ; - 3 x^2 + m) với x1 , x^2 là hai nghiệm\nĐường thẳng y = -3x + m cắt đồ thị hàm số y =\nphân biệt phương trình (1). Theo Vi-et ta có: x1 + x^2 =\nm +1\n.\n3\nm +1 m -1\n;\nGọi M là trung điểm AB , ta có: M\n. Giả sử G (x ; y) là trọng tâm tam giác OAB ,\n6\n2\n2 m +1\nm +1\nx= .\nx=\n\\cup\\cup\\cup\\to^2 \\cup\\cup\\cup\\cup\\to^3 6\n9 . Vậy G m + 1 ; m -1 .\nta có OG = OM \\iff \\iff ^3\n9\n3\n2 m -1\nm -1\ny= .\ny=\n3 2\n3\nm +1\nm -1\nMặt khác, điểm G thuộc đường thẳng x - 2 y - 2 = 0 nên ta có:\n- 2.\n-2 = 0\n9\n3\n11\n\\iff m = - (thỏa mãn (**)). Do đó không có giá trị nguyên dương của m thỏa mãn yêu cầu bài^5\ntoán.\nb",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 506,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Giả sử m = - , a, b \\in '+ , (a, b) = 1 là giá trị thực của tham số m để đường thẳng a^2 x +1 d : $y = -3 x + m cắt đồ thị hàm số y =$ (C) tại hai điểm phân biệt A , B sao cho trọng x -1 tâm tam giác OAB thuộc đường thẳng \\\\Delta  x - 2 y - 2 = 0 , với O là gốc toạ độ. Tính a + 2b .",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$11$"
      },
      {
        "key": "D",
        "content": "$21$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "2 x +1\nPhương trình hoành độ giao điểm:\n= -3 x + m , x \\ne 1 .\nx -1\n\\implies ^3 x^2 -(m +1) x + m +1 = 0 (*) .\nĐể (C) cắt d tại hai điểm phân biệt thì (*) phải có hai nghiệm phân biệt khác 1. Suy ra^2\n[ m +1 < 0\n[ m < -1\n(m + 1) -12 (m + 1) > 0\n\\implies [\n\\implies [\n.\n2\n[ m + 1 > 12\n[\nm\n>\n11\n3.1\n-\nm\n+\n1\n.1\n+\nm\n+\n1\n\\ne 0\n()\n()\n[\nKhi đó A(x1 ; -3x1 + m) , B (x^2 ; -3x^2 + m) , với x1 và x^2 là nghiệm của phương trình (*) đồng\nthời thoả mãn x1 + x^2 =\nm +1\n.\n3\nm + 1 m -1\nGọi G là trọng tâm của \\\\Delta OAB , ta có G\n;\n.\n9\n3\na = 11\nm +1\nm -1\n11\n.\n-2\n- 2 = 0 \\implies m = - . Suy ra^9\n3\n5\nb = 5\nVậy a + 2b = 21 .\nMà G \\in \\\\Delta nên\n3x + 2\n, (C) và đường thẳng d : y = ax + 2b - 4 . Đường thẳng d cắt (C) tại A,\nx+2\nB đối xứng nhau qua gốc tọa độ O, khi đó T = a + b bằng^5\n7\nA. T = 2 .\nB. T = .\nC. T = 4 .\nD. T = .\n2\n2\nLời giải\nChọn D\n3x + 2\n= ax + 2b - 4; x \\ne -2.\nXét phương trình hoành độ:\nx+2\n\\iff ax^2 + (2a + 2b - 7) x -10 = 0 (*).",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 507,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm điều kiện của m để đường thẳng $y = mx + 1 cắt đồ$ x-3 thị hàm số $y = tại hai điểm phân biệt$. x +1",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty ;0] \\cup [16; +\\infty)$"
      },
      {
        "key": "B",
        "content": "$(16; +\\infty)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty ; 0)$"
      },
      {
        "key": "D",
        "content": "$(-\\infty ; 0) \\cup (16; +\\infty)$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "x-3\n= mx + 1\nx +1\nmx^2 + mx + 4 = 0 (*)\nx - 3 = (mx + 1)(x + 1)\n\\iff \\iff x \\ne -1\nx \\ne -1\nx-3\nĐể đường thẳng y = mx + 1 cắt đồ thị hàm số y =\ntại hai điểm phân biệt thì phương trình\nx +1\n\\\\Delta > 0\nm^2 - 16m > 0\n\\iff (*) có hai nghiệm phân biệt khác -1 hay^2\nm (-1) + m (-1) + 4 \\ne 0\n4 \\ne 0\nHoành độ giao điểm là nghiệm của phương trình:\n\\iff m \\in (-\\infty ;0) \\cup (16; +\\infty) .",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 508,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Để đường thẳng d : $y = x - m + 2 cắt đồ thị hàm số$ 2x $y= (C) tại hai điểm phân biệt A và$ x -1 B sao cho độ dài AB ngắn nhất thì giá trị của m thuộc khoảng nào?",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-4; -2)$"
      },
      {
        "key": "B",
        "content": "$m \\in (2; 4)$"
      },
      {
        "key": "C",
        "content": "$m \\in (-2;0)$"
      },
      {
        "key": "D",
        "content": "$m \\in (0; 2)$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Phương trình hoành độ giao điểm của d và (C) :\n2x\n= x - m + 2 \\iff x^2 - (m + 1) x + m - 2 = 0 (*) (vì x = 1 không phải là nghiệm).\nx -1\nĐường thẳng d cắt (C) tại hai điểm phân biệt:\n\\iff Phương trình (*) có hai nghiệm phân biệt x1, x^2 .\n2\n2\n\\iff \\\\Delta = (m + 1) - 4 (m - 2) = (m - 1) + 8 > 0, \\forall m \\in \\mathbb{R} .\nx1 + x^2 = m + 1\nTheo định lý Vi-et ta có:\nx1.x^2 = m - 2\nKhi đó A (x1 ; x1 - m + 2) , B (x^2 ; x^2 - m + 2) .\n2\n2\n2\n2\nAB =\n(x^2 - x1) + (x^2 - m + 2 - x1 + m - 2) = 2 (x^2 - x1) = 2 (x^2 + x1) - 4 x1 x^2 .\n= 2\n(m -1) + 8 \\ge ^4 .\n2\nAB nhỏ nhất \\iff AB = 4 \\iff m = 1 .",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 509,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Biết rằng đường thẳng $y = 2 x + 2m luôn cắt đồ thị hàm số$ x^2 + 3 tại hai điểm phân biệt A, B với mọi giá trị của tham số m. Tìm hoành độ trung điểm x +1 của AB?",
    "options": [
      {
        "key": "A",
        "content": "$m + 1$"
      },
      {
        "key": "B",
        "content": "$-m - 1$"
      },
      {
        "key": "C",
        "content": "$-2m - 2$"
      },
      {
        "key": "D",
        "content": "$-2m + 1$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Phương trình hoành độ giao điểm của (C) và d là:\ny=\nx^2 + 3\n= 2 x + 2m \\iff x^2 + 2 (1 + m) x + 2m - 3 = 0 (1) , (x \\ne -1).\nx +1\nĐường thẳng d cắt (C) tại hai điểm phân biệt A , B \\iff Phương trình (1) có hai nghiệm phân\nbiệt khác^2\n\\\\Delta' = (1 + m)2 - (2 m - 3) > 0\nm^2 + 4 > 0, \\forall m\n\\iff .\n\\iff ^2\n-4 \\ne 0\n(-1) + 2 (1 + m) . (-1) + 2m - 3 \\ne 0\nKhi đó, gọi A (x1 ; 2 x1 + 2m) ; B (x^2 ; 2 x^2 + 2m)\nHoành độ trung điểm của AB là xI =",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 510,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Gọi S là tập hợp tất cả các giá trị nguyên của tham số m để đường -2 x + 1 thẳng d : $y = -x + m cắt đồ thị hàm số y =$ tại hai điểm phân biệt A, B sao cho x +1 AB \\le ^2 2 . Tổng giá trị các phần tử của S bằng",
    "options": [
      {
        "key": "A",
        "content": "$-6$"
      },
      {
        "key": "B",
        "content": "$-27$"
      },
      {
        "key": "C",
        "content": "$9$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "-2 x + 1\nPhương trình hoành độ giao điểm:\n= - x + m (1)\nx +1\nĐiều kiện: x \\ne -1.\n-2 x + 1\nPhương trình (1) \\implies = -x + m\nx +1\n\\iff -2 x + 1 = (- x + m)(x + 1)\n\\iff - x^2 + (m + 1) x + m - 1 = 0 (2).\n-2 x + 1\ntại hai điểm phân biệt A, B thì\nx +1\n\\\\Delta > 0\n\\iff m^2 + 6m - 3 > 0.\nphương trình (2) có 2 nghiệm phân biệt khác -1 \\iff -3 \\ne 0\nĐể đường thẳng d : y = -x + m cắt đồ thị hàm số y =\n() ()\n\\iff m \\in -\\infty ; - 3 - 2 3 \\cup - 3 + 2 3; +\\infty (3).\nGọi A (x A ; - x A + m) , B (xB ; - xB + m) là tọa độ giao điểm:\nTheo đề ta có:\nAB \\le ^2 2 \\iff (xB - xA) + (xB - xA) \\le ^2 2\n2\n2\n\\iff ^2 (xB - x A) = 8 \\iff xB^2 - 2 x A .xB + x A^2 - 4 \\le 0\n2\n\\iff (x A + x B) - 4 x A . xB - 4 \\le 0 .\n2\n\\iff (m + 1) - 4 (1- m) - 4 < 0\n2\n\\iff m^2 + 6 m - 7 < 0 \\iff m \\in (-7;1) (4)\nTừ (3) và (4) ta có m \\in (-7; -3 - 2 2) \\cup (-3 + 2 2;1) .\nVì m \\in ' \\implies m \\in \\{- 6; 0\\}\nChọn",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 511,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm m để đường thẳng $y = 2 x + m cắt đồ thị hàm số$ x+3 tại hai điểm A, B sao cho độ dài AB là nhỏ nhất. $y= x +1$",
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
        "content": "$-1$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "x+3\nGọi hàm số y =\ncó đồ thị là (C) và đường thẳng y = 2 x + m có đồ thị là (d) .\nx +1\nx+3\nXét phương trình hoành độ giao điểm của (C) và (d) :\n= 2 x + m, \\forall x \\ne -1.\nx +1\n\\iff x + 3 = 2 x^2 + 2 x + mx + m \\iff ^2 x^2 + (m + 1) x + m - 3 = 0, \\forall x \\ne 1 (1)\nĐể (d) cắt (C) tại hai điểm A, B \\iff Phương trình (1) có hai nghiệm phân biệt khác -1\n\\\\Delta > 0\nvới g (x) = 2 x^2 + (m + 1) x + m - 3\n\\iff g\n-\n1\n\\ne 0\n()\n(m + 1)2 - 4.2. (m - 3) > 0\n\\iff \\iff m^2 - 6m + 25 > 0, \\forall m.\n-2 \\ne 0\nGiả sử hoành độ giao điểm của (C) và (d) là x1 , x^2 . Khi đó A (x1 ; 2 x1 + m) B (x^2 ; 2 x^2 + m) .\nTheo hệ thức Vi-ét ta có x1 + x^2 = -\nTa có AB =\n2\nm +1\nm-3\n; x1 x^2 =\n2\n2\n2\n2\n2\n(x^2 - x1) + (2 x^2 - 2 x1) = 5 (x1 - x^2) = 5 (x1 + x^2) - 20 x1 x^2\n2\n2\n5 (m - 3) + 80\n5m^2 + 10m + 5 - 40m + 120\nm-3\nm +1\n=\nAB = 5.\n-\n20.\n=\n\\ge ^2 5.\n4\n2\n2\n2\nDấu \" = \" xảy ra khi và chỉ khi m = 3.\nVậy m = 3 thì độ dài AB đạt giá trị nhỏ nhất bằng^2 5.\nDạng^3. Bài toán tương giao của đường thẳng với hàm số trùng phương (CHỨA THAM SỐ)\n. Bài toán tổng quát: Tìm m để đường thẳng d : y = \\alpha cắt đồ thị (C) : y = f (x; m) = ax^4 + bx^2 + c tại n điểm\nphân biệt thỏa mãn điều kiện K cho trước?\n Phương pháp giải:\nBước 1. Lập phương trình hoành độ giao điểm của d và (C) là: ax^4 + bx^2 + c - \\alpha = 0 (1)\nĐặt t = x^2 \\ge 0 thì (1) \\iff at^2 + bt + c - \\alpha = 0 (2)\nTùy vào số giao điểm n mà ta biện luận để tìm giá trị m \\in D1. Cụ thể:\n- Để d \\cap (C) = n = 4 điểm phân biệt \\iff (1) có 4 nghiệm phân biệt\n\\\\Delta > 0\n\\iff (2) có 2 nghiệm t1 , t^2 thỏa điều kiện: 0 < t1 < t^2 \\iff S > 0 \\implies m \\in D1.\nP > 0\n- Để d \\cap (C) = n = 3 điểm phân biệt \\iff (1) có 3 nghiệm phân biệt\nc - \\alpha = 0\n\\implies m \\in D1.\n\\iff (2) có nghiệm t1 , t^2 thỏa điều kiện: 0 = t1 < t^2 \\iff b\n<\n0\na\n- Để d \\cap (C) = n = 2 điểm phân biệt \\iff (1) có 2 nghiệm phân biệt\n[ ac < 0\n\\iff (2) có 2 nghiệm trái dấu hoặc có nghiệm kép dương \\iff [ \\\\Delta = 0 \\implies m \\in D1.\n[ S > 0\n- Để d \\cap (C) = n = 1 điểm phân biệt \\iff (1) có đúng 1 nghiệm\nc - \\alpha = 0\nt1 < 0\n\\\\Delta = 0\n\\iff \\Rightarrow b\n\\implies m \\in D1.\n\\iff (2) có nghiệm kép = 0 hoặc\n>\n0\nt^2 = 0 c - \\alpha = 0\na\nBước^2. Biến đổi điều kiện K về dạng có chứa tổng và tích của t1 , t^2 (3)\nThế biểu thức tổng, tích vào (3) sẽ thu được phương trình hoặc bất phương trình với biến số là m. Giải\nchúng ta sẽ tìm được m \\in D^2 .\nKết luận: m \\in D1 \\cap D^2 .\nTìm điều kiện để đồ thị hàm số y = ax^4 + bx^2 + c cắt trục hoành tại^4 điểm phân biệt có hoành độ\nlập thành cấp số cộng.\nTa có: ax^4 + bx^2 + c = 0 (1) , đặt t = x^2 \\ge 0 , thì có: at^2 + bt + c = 0 (2)\n\\\\Delta > 0\nĐể (1) có 4 nghiệm phân biệt thì (2) có hai nghiệm phân biệt dương, tức là: t1 + t^2 > 0\nt .t > 0\n1 2\nKhi đó (1) có 4 nghiệm phân biệt lần lượt là - t^2 ; - t1 ; t1 ; t^2 lập thành cấp số cộng khi và chỉ khi:\nt^2 - t1 = t1 - (- t1) \\iff t^2 = 3 t1 \\iff t^2 = 9t1 . Theo định lý Vi - et\nt1 + t^2 = -\nb\na\nsuy ra\nb\n9b\nc\n; t^2 = -\n, kết hợp t1.t^2 = nên có: 9ab^2 = 100a 2c\n10a\n10a\na^4\n2\nTóm lại: Hàm số y = ax + bx + c cắt trục hoành tại^3 điểm phân biệt có hoành độ lập thành cấp số cộng,\nt1 = -\nb^2 - 4ac > 0\n- b > 0\nthì điều kiện cần và đủ là: a\nc > 0\na\n9ab^2 = 100a^2 c",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 512,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tập tất cả các giá trị của tham số m để phương trình x^4 - 4 x^2 + 3 + $m = 0$ có 4 nghiệm phân biệt là",
    "options": [
      {
        "key": "A",
        "content": "$(-1;3)$"
      },
      {
        "key": "B",
        "content": "$(-3;1)$"
      },
      {
        "key": "C",
        "content": "$(2; 4)$"
      },
      {
        "key": "D",
        "content": "$(-3;0)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có: x^4 - 4 x^2 + 3 + m = 0 \\iff -x^4 + 4 x^2 - 3 = m .\nXét hàm số y = -x^4 + 4 x^2 - 3 , khi đó:\n[x = \\pm ^2\ny' = -4 x^3 + 8 x; y' = 0 \\iff [\n.\nx\n=\n0\n[\nSuy ra yCD = 1; yCT = -3 .\nVậy để phương trình đã cho có 4 nghiệm phân biệt thì: -3 < m < 1 \\implies m \\in (-3;1) .",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 513,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Một đường thẳng cắt đồ thị hàm số $y = x^4 - 2 x^2 tại^4$ điểm phân biệt có hoành độ là 0, 1, m, n . Tính S = m^2 + n^2 .",
    "options": [
      {
        "key": "A",
        "content": "$S = 1$"
      },
      {
        "key": "B",
        "content": "$S = 0$"
      },
      {
        "key": "C",
        "content": "$S = 3$"
      },
      {
        "key": "D",
        "content": "$S = 2$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tọa độ các giao điểm lần lượt là A (0;0) , B (1; -1) , C m; m^4 - 2 m^2 , D n; n^4 - 2 n^2 .\n() ()\nĐường thẳng qua các điểm A, B, C , D có phương trình: y = - x.\n[x = 0\n[\nXét phương trình hoành độ giao điểm: x^4 - 2 x^2 = - x \\iff x^4 - 2 x^2 + x = 0 \\iff [ x = 1\n[x^2 + x -1 = 0 *\n()\n[\nVậy m, n là các nghiệm của phương trình (*) .\n2\nKhi đó: S = m^2 + n^2 = (m + n) - 2mn = 3.",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 514,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Cho hàm số $y = x^4 + 2mx^2 + m (với m là tham số thực)$. Tập tất cả các giá trị của tham số m để đồ thị hàm số đã cho cắt đường thẳng $y = -3 tại bốn điểm phân biệt$, trong đó có một điểm có hoành độ lớn hơn^2 còn ba điểm kia có hoành độ nhỏ hơn 1 , là khoảng (a; b) (với a , b \\in  , a , b là phân số tối giản). Khi đó, 15ab nhận giá trị nào sau đây?",
    "options": [
      {
        "key": "A",
        "content": "$-63$"
      },
      {
        "key": "B",
        "content": "$63$"
      },
      {
        "key": "C",
        "content": "$95$"
      },
      {
        "key": "D",
        "content": "$-95$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét phương trình hoành độ giao điểm x^4 + 2mx^2 + m = -3 . Đặt x^2 = t , t \\ge 0 . Khi đó phương trình\ntrở thành t^2 + 2mt + m + 3 = 0 (1) và đặt f (t) = t^2 + 2 mt + m + 3 .\nĐể đồ thị hàm số cắt đường thẳng y = -3 tại^4 điểm phân biệt thì phương trình (1) có hai\nnghiệm thỏa mãn 0 < t1 < t^2 và khi đó hoành độ bốn giao điểm là - t^2 < - t1 < t1 < t^2 .\nt^2 > 2\nDo đó, từ điều kiện của bài toán suy ra\nhay 0 < t1 < 1 < 4 < t^2 .\nt1 < 1\nf (0) > 0\nm + 3 > 0\n19\nĐiều này xảy ra khi và chỉ khi f (1) < 0 \\iff 3m + 4 < 0 \\iff -3 < m < - .\n9\n9m + 19 < 0\nf^4\n<\n0\n()\n19\nVậy a = -3 , b = -\nnên 15ab = 95 .\n9",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 515,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tất cả các giá trị thực của tham số m , để đồ thị hàm số $y = x^4 - 2 (2 - m) x^2 + m^2 - 2 m - 2 không cắt trục hoành$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\ge ^3 + 1$"
      },
      {
        "key": "B",
        "content": "$m < 3$"
      },
      {
        "key": "C",
        "content": "$m > 3 + 1$"
      },
      {
        "key": "D",
        "content": "$m > 3$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Xét phương trình hoành độ giao điểm x^4 - 2 (2 - m) x^2 + m^2 - 2 m - 2 = 0\n(1)\nĐặt t = x^2 \\ge 0 . Phương trình (1) trở thành t^2 - 2 (2 - m) t + m^2 - 2 m - 2 = 0 (2)\nĐồ thị hàm số không cắt trục hoành \\iff (1) vô nghiệm \\iff (2) vô nghiệm hoặc có nghiệm âm\n[m > 3\n[\n[\n[ \\\\Delta' = -2 m + 6 < 0\n[\n[\nm \\le ^3\n'\n[m > 3\n\\\\Delta\n=\n-\n2\nm\n+\n6\n\\ge 0\n\\iff [\n\\iff [\nHay [\n\\iff m > 1 + 3.\n[ 2 - m < 0\n1+ 3 < m \\le ^3\nm > 2\n[\n[\n[ 2\n[m > 1 + 3\n[ m - 2m - 2 > 0\n[\n[ [ m < 1 - 3",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng"
  }
];
