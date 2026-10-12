import { Question } from '../../../types/exam';

export const tuongGiaoHamHopQuestions: Question[] = [
  {
    "id": 54,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Số giao điểm của đồ thị hàm số $y = x^3 - 3x^2 + 4$ và trục hoành $Ox$ là:",
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
        "content": "$0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình hoành độ giao điểm: $x^3 - 3x^2 + 4 = 0 \\iff (x + 1)(x - 2)^2 = 0$.\nPhương trình có 2 nghiệm phân biệt là $x = -1$ và $x = 2$.\nDo đó đồ thị cắt trục hoành tại đúng 2 điểm.",
    "socraticHint": "Giải phương trình $y = 0$ bằng phương pháp nhẩm nghiệm nguyên.",
    "difficulty": "Thông hiểu",
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
    "difficulty": "Vận dụng cao",
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
    "difficulty": "Nhận biết",
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
    "difficulty": "Thông hiểu",
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
    "difficulty": "Thông hiểu",
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
    "content": "Cho hàm số bậc ba $y = x^3 + bx^2 + cx + d$ ($b, c, d \\\\in \\mathbb{R}$) có bảng biến thiên như sau:\n$\\begin{array}{|c|ccccccc|}\n\\hline\nx & -\\infty & & x_1 & & x_2 & & +\\infty \\\\\n\\hline\nf'(x) & & + & 0 & - & 0 & + & \\\\\n\\hline\n& & & y_1 & & & & +\\infty \\\\\nf(x) & & \\nearrow & & \\searrow & & \\nearrow & \\\\\n& -\\infty & & & & y_2 & & \\\\\n\\hline\n\\end{array}$\nBiết đồ thị cắt trục tung tại điểm có tung độ dương $d > 0$, hai điểm cực trị thỏa mãn $x_1 < 0 < x_2$ và $|x_1| > x_2$. Mệnh đề nào sau đây đúng?",
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
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  }
];
