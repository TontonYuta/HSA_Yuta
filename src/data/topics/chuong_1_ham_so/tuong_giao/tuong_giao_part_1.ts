import { Question } from '../../../../types/exam';

export const tuongGiaoPart1Questions: Question[] = [
  {
    "id": 54,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 104,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 153,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 230,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 231,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 256,
    "latexVerified": true,
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
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "answerVerified": true
  },
  {
    "id": 277,
    "latexVerified": true,
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
        "content": "$b < 0, c < 0, d > 0$"
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
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "answerVerified": true
  },
  {
    "id": 483,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    "detailedSolution": "Phương trình hoành độ giao điểm:\n$$x^3 - 3mx^2 + 2m = 0 \\quad (*)$$\nĐồ thị cắt trục hoành tại 3 điểm phân biệt có hoành độ lập thành một cấp số cộng khi và chỉ khi phương trình (*) có 3 nghiệm phân biệt $x_1, x_2, x_3$ lập thành cấp số cộng.\nTheo tính chất của hàm số bậc ba, điểm uốn của đồ thị chính là trung điểm của hai điểm cực trị và cũng là nghiệm ở giữa:\n$$x_2 = -\\frac{-3m}{3 \\cdot 1} = m$$\nThay $x = m$ vào phương trình (*), ta được:\n$$m^3 - 3m(m^2) + 2m = 0 \\iff -2m^3 + 2m = 0 \\iff 2m(1 - m^2) = 0 \\iff \\left[\\begin{array}{l} m = 0 \\\\ m = \\pm 1 \\end{array}\\right.$$\nThử lại:\n- Với $m = 0$: phương trình trở thành $x^3 = 0 \\iff x = 0$ (nghiệm bội 3, loại vì không có 3 nghiệm phân biệt).\n- Với $m = 1$: phương trình trở thành $x^3 - 3x^2 + 2 = 0 \\iff (x - 1)(x^2 - 2x - 2) = 0 \\iff x \\in \\{1 - \\sqrt{3}; 1; 1 + \\sqrt{3}\\}$ (thỏa mãn 3 nghiệm phân biệt lập thành cấp số cộng với công sai $d = \\sqrt{3}$).\n- Với $m = -1$: phương trình trở thành $x^3 + 3x^2 - 2 = 0 \\iff (x + 1)(x^2 + 2x - 2) = 0 \\iff x \\in \\{-1 - \\sqrt{3}; -1; -1 + \\sqrt{3}\\}$ (thỏa mãn 3 nghiệm phân biệt lập thành cấp số cộng với công sai $d = \\sqrt{3}$).\nVậy có đúng 2 giá trị của tham số $m$ thỏa mãn là $m = \\pm 1$.\nChọn B.",
    "socraticHint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 484,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Đường thẳng $\\Delta$ có phương trình $y = 2x + 1$ cắt đồ thị của hàm số $y = x^3 - x + 3$ tại hai điểm $A$ và $B$ với tọa độ được kí hiệu lần lượt là $A(x_A; y_A)$ và $B(x_B; y_B)$ trong đó $x_B < x_A$. Tìm $x_B + y_B$.",
    "options": [
      {
        "key": "A",
        "content": "$x_B + y_B = -5$"
      },
      {
        "key": "B",
        "content": "$x_B + y_B = -2$"
      },
      {
        "key": "C",
        "content": "$x_B + y_B = 4$"
      },
      {
        "key": "D",
        "content": "$x_B + y_B = 7$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình hoành độ giao điểm của $\\Delta$ và đồ thị hàm số $y = x^3 - x + 3$:\n$$x^3 - x + 3 = 2x + 1 \\iff x^3 - 3x + 2 = 0 \\iff (x - 1)^2(x + 2) = 0$$\n$$\\iff \\left[\\begin{array}{l} x = 1 \\implies y = 3 \\\\ x = -2 \\implies y = -3 \\end{array}\\right.$$\nVì $x_B < x_A$ nên $B(-2; -3)$ và $A(1; 3)$.\nSuy ra $x_B + y_B = -2 + (-3) = -5$.\nChọn A.",
    "socraticHint": "Lập phương trình hoành độ giao điểm, giải phương trình bậc ba rồi xác định tọa độ các giao điểm.",
    "difficulty": "Thông hiểu",
    "answerVerified": true
  },
  {
    "id": 485,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Cho hàm số $y = x^3 + 3mx^2 - m^3$ có đồ thị $(C_m)$ và đường thẳng $d: y = m^2 x + 2m^3$. Biết rằng $m_1, m_2$ ($m_1 > m_2$) là hai giá trị thực của $m$ để đường thẳng $d$ cắt đồ thị $(C_m)$ tại 3 điểm phân biệt có hoành độ $x_1, x_2, x_3$ thỏa mãn $x_1^4 + x_2^4 + x_3^4 = 83$. Phát biểu nào sau đây là đúng về quan hệ giữa hai giá trị $m_1, m_2$?",
    "options": [
      {
        "key": "A",
        "content": "$m_1 + m_2 = 0$"
      },
      {
        "key": "B",
        "content": "$m_1^2 + 2m_2 > 4$"
      },
      {
        "key": "C",
        "content": "$m_2^2 + 2m_1 > 4$"
      },
      {
        "key": "D",
        "content": "$m_1 - m_2 = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét phương trình hoành độ giao điểm của $d$ và $(C_m)$:\n$$x^3 + 3mx^2 - m^3 = m^2 x + 2m^3 \\iff x^3 + 3mx^2 - m^2 x - 3m^3 = 0$$\n$$\\iff x(x^2 - m^2) + 3m(x^2 - m^2) = 0 \\iff (x + 3m)(x - m)(x + m) = 0$$\n$$\\iff \\left[\\begin{array}{l} x = -3m \\\\ x = m \\\\ x = -m \\end{array}\\right.$$\nĐể $d$ cắt $(C_m)$ tại 3 điểm phân biệt thì $m \\ne 0$.\nKhi đó:\n$$x_1^4 + x_2^4 + x_3^4 = 83 \\iff (-3m)^4 + m^4 + (-m)^4 = 83 \\iff 81m^4 + m^4 + m^4 = 83$$\n$$\\iff 83m^4 = 83 \\iff m^4 = 1 \\iff m = \\pm 1$$\nVì $m_1 > m_2$ nên $m_1 = 1, m_2 = -1$.\nSuy ra $m_1 + m_2 = 1 + (-1) = 0$.\nChọn A.",
    "socraticHint": "Phân tích phương trình hoành độ giao điểm thành nhân tử để tìm trực tiếp 3 nghiệm theo $m$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 486,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để đồ thị hàm số $y = x^3 - 3x^2$ cắt đường thẳng $y = m$ tại ba điểm phân biệt.",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-\\infty; -4)$"
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
        "content": "$m \\in (-\\infty; -4) \\cup (0; +\\infty)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có $y = x^3 - 3x^2 \\implies y' = 3x^2 - 6x = 0 \\iff x = 0$ hoặc $x = 2$.\nGiá trị cực trị tương ứng:\n- $y(0) = 0$ (cực đại).\n- $y(2) = 2^3 - 3(2^2) = -4$ (cực tiểu).\nĐường thẳng $y = m$ cắt đồ thị hàm số tại ba điểm phân biệt khi và chỉ khi:\n$$y_{\\text{CT}} < m < y_{\\text{CĐ}} \\iff -4 < m < 0 \\implies m \\in (-4; 0)$$\nChọn B.",
    "socraticHint": "Số giao điểm của đồ thị hàm số và đường thẳng $y = m$ là số nghiệm của phương trình, so sánh $m$ với giá trị cực trị.",
    "difficulty": "Thông hiểu",
    "answerVerified": true
  },
  {
    "id": 487,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để đường thẳng $y = mx - m + 1$ cắt đồ thị hàm số $y = x^3 - 3x^2 + x + 2$ tại ba điểm phân biệt $A, B, C$ sao cho $AB = BC$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\in \\left(-\\frac{5}{4}; +\\infty\\right)$"
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
        "content": "$m \\in (-\\infty; 0) \\cup [4; +\\infty)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Phương trình hoành độ giao điểm:\n$$x^3 - 3x^2 + x + 2 = mx - m + 1 \\iff x^3 - 3x^2 + (1 - m)x + m + 1 = 0$$\n$$\\iff (x - 1)(x^2 - 2x - m - 1) = 0 \\iff \\left[\\begin{array}{l} x = 1 \\\\ x^2 - 2x - m - 1 = 0 \\quad (1) \\end{array}\\right.$$\nĐể hai đồ thị cắt nhau tại ba điểm phân biệt thì phương trình (1) có hai nghiệm phân biệt khác 1:\n$$\\left\\{\\begin{array}{l} \\Delta' = 1 - (-m - 1) = m + 2 > 0 \\\\ 1^2 - 2(1) - m - 1 \\ne 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} m > -2 \\\\ -m - 2 \\ne 0 \\end{array}\\right. \\iff m > -2$$\nKhi đó, hai nghiệm $x_1, x_2$ của (1) thỏa mãn $x_1 + x_2 = 2 \\implies \\frac{x_1 + x_2}{2} = 1 = x_B$.\nDo đó điểm $B(1; 1)$ luôn là trung điểm của $AC$, tức là $AB = BC$ luôn thỏa mãn.\nVậy $m > -2$.\nChọn B.",
    "socraticHint": "Phân tích phương trình hoành độ giao điểm thành nhân tử có nghiệm $x = 1$, dùng định lý Viète để kiểm tra điều kiện trung điểm.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 488,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để đường thẳng $y = -mx$ cắt đồ thị của hàm số $y = x^3 - 3x^2 - m + 2$ tại ba điểm phân biệt $A, B, C$ sao cho $AB = BC$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-\\infty; -1)$"
      },
      {
        "key": "B",
        "content": "$m \\in (-\\infty; +\\infty)$"
      },
      {
        "key": "C",
        "content": "$m \\in (1; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$m \\in (-\\infty; 3)$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Phương trình hoành độ giao điểm:\n$$x^3 - 3x^2 - m + 2 = -mx \\iff x^3 - 3x^2 + mx - m + 2 = 0$$\n$$\\iff (x - 1)(x^2 - 2x + m - 2) = 0 \\iff \\left[\\begin{array}{l} x = 1 \\\\ x^2 - 2x + m - 2 = 0 \\quad (1) \\end{array}\\right.$$\nĐể ba giao điểm thỏa mãn $AB = BC$ thì $B(1; -m)$ phải là trung điểm của $AC$, tức là $x_1 + x_3 = 2x_2 = 2$.\nTheo định lý Viète cho phương trình (1), ta luôn có $x_1 + x_3 = 2$.\nDo đó ta chỉ cần phương trình (1) có hai nghiệm phân biệt khác 1:\n$$\\left\\{\\begin{array}{l} \\Delta' = 1 - (m - 2) = 3 - m > 0 \\\\ 1^2 - 2(1) + m - 2 \\ne 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} m < 3 \\\\ m - 3 \\ne 0 \\end{array}\\right. \\iff m < 3$$\nVậy $m \\in (-\\infty; 3)$.\nChọn D.",
    "socraticHint": "Tìm nghiệm $x = 1$, sau đó tìm điều kiện để phương trình bậc hai còn lại có hai nghiệm phân biệt khác 1.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 489,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in [-2018; 2019]$ để đồ thị hàm số $y = x^3 - 3mx + 3$ và đường thẳng $y = 3x + 1$ có duy nhất một điểm chung?",
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
    "detailedSolution": "Phương trình hoành độ giao điểm:\n$$x^3 - 3mx + 3 = 3x + 1 \\iff x^3 - 3x + 2 = 3mx$$\nVới $x = 0$, ta có $2 = 0$ (vô lý) nên $x \\ne 0$. Chia hai vế cho $x$:\n$$3m = \\frac{x^3 - 3x + 2}{x} = x^2 - 3 + \\frac{2}{x}$$\nKhảo sát hàm số $f(x) = x^2 - 3 + \\frac{2}{x}$ với $x \\ne 0$:\n$$f'(x) = 2x - \\frac{2}{x^2} = \\frac{2(x^3 - 1)}{x^2} = 0 \\iff x = 1$$\nBảng biến thiên cho thấy trên $(0; +\\infty)$, giá trị cực tiểu của $f(x)$ là $f(1) = 0$.\nTrên $(-\\infty; 0)$, $f(x)$ nhận mọi giá trị trên $(-\\infty; +\\infty)$.\nĐể phương trình có duy nhất một nghiệm thì $3m < f(1) = 0 \\iff m < 0$.\nVì $m \\in [-2018; 2019]$ và $m \\in \\mathbb{Z}$ nên $m \\in \\{-2018, -2017, \\dots, -1\\}$.\nVậy có 2018 giá trị nguyên thỏa mãn.\nChọn D.",
    "socraticHint": "Cô lập tham số $m$, khảo sát hàm số một biến để biện luận số giao điểm.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 490,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tính tổng tất cả các giá trị của $m$ biết đồ thị hàm số $y = x^3 + 2mx^2 + (m + 3)x + 4$ và đường thẳng $y = x + 4$ cắt nhau tại ba điểm phân biệt $A(0; 4), B, C$ sao cho diện tích tam giác $IBC$ bằng $8\\sqrt{2}$ với $I(1; 3)$.",
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
    "detailedSolution": "Phương trình hoành độ giao điểm:\n$$x^3 + 2mx^2 + (m + 3)x + 4 = x + 4 \\iff x(x^2 + 2mx + m + 2) = 0$$\n$$\\iff \\left[\\begin{array}{l} x = 0 \\implies y = 4 \\implies A(0; 4) \\\\ g(x) = x^2 + 2mx + m + 2 = 0 \\quad (1) \\end{array}\\right.$$\nĐể có 3 giao điểm phân biệt thì (1) phải có 2 nghiệm phân biệt khác 0:\n$$\\left\\{\\begin{array}{l} \\Delta' = m^2 - m - 2 > 0 \\\\ g(0) = m + 2 \\ne 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} m < -1 \\text{ hoặc } m > 2 \\\\ m \\ne -2 \\end{array}\\right. \\quad (*)$$\nKhi đó $B(x_1; x_1 + 4)$ và $C(x_2; x_2 + 4)$ với $x_1, x_2$ là nghiệm của (1).\nĐộ dài $BC = \\sqrt{2(x_2 - x_1)^2} = 2\\sqrt{2(m^2 - m - 2)}$.\nKhoảng cách từ $I(1; 3)$ đến đường thẳng $d: x - y + 4 = 0$ là:\n$$d(I, d) = \\frac{|1 - 3 + 4|}{\\sqrt{1^2 + (-1)^2}} = \\sqrt{2}$$\nDiện tích tam giác $IBC$:\n$$S_{IBC} = \\frac{1}{2} BC \\cdot d(I, d) = \\frac{1}{2} \\cdot 2\\sqrt{2(m^2 - m - 2)} \\cdot \\sqrt{2} = 2\\sqrt{m^2 - m - 2}$$\nTheo giả thiết: $2\\sqrt{m^2 - m - 2} = 8\\sqrt{2} \\iff m^2 - m - 2 = 32 \\iff m^2 - m - 34 = 0$.\nPhương trình có 2 nghiệm thỏa mãn (*), theo Viète tổng các nghiệm là $m_1 + m_2 = 1$.\nChọn C.",
    "socraticHint": "Biểu diễn diện tích tam giác theo độ dài cạnh đáy $BC$ và khoảng cách từ $I$ đến đường thẳng chứa $BC$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 491,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in [-2018; 2019]$ để đồ thị hàm số $y = x^3 - 3mx + 3$ và đường thẳng $y = 3x + 1$ có duy nhất một điểm chung?",
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
    "detailedSolution": "Phương trình hoành độ giao điểm:\n$$x^3 - 3mx + 3 = 3x + 1 \\iff x^3 - 3x + 2 = 3mx$$\nVới $x = 0$, ta có $2 = 0$ (vô lý) nên $x \\ne 0$. Cô lập $m$:\n$$3m = \\frac{x^3 - 3x + 2}{x} = x^2 - 3 + \\frac{2}{x}$$\nKhảo sát hàm số $f(x) = x^2 - 3 + \\frac{2}{x}$ trên $\\mathbb{R} \\setminus \\{0\\}$:\n$$f'(x) = 2x - \\frac{2}{x^2} = \\frac{2(x^3 - 1)}{x^2} = 0 \\iff x = 1$$\nBảng biến thiên cho thấy trên khoảng $(0; +\\infty)$, giá trị nhỏ nhất của $f(x)$ là $f(1) = 0$.\nTrên khoảng $(-\\infty; 0)$, $f(x)$ quét qua toàn bộ khoảng $(-\\infty; +\\infty)$.\nĐể phương trình có nghiệm duy nhất thì $3m < f(1) = 0 \\iff m < 0$.\nKết hợp $m \\in [-2018; 2019]$ và $m \\in \\mathbb{Z}$, ta có $m \\in \\{-2018, -2017, \\dots, -1\\}$.\nVậy có 2018 giá trị nguyên của $m$.\nChọn D.",
    "socraticHint": "Cô lập tham số $m$ rồi khảo sát hàm số để tìm điều kiện có đúng một nghiệm duy nhất.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 492,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Có bao nhiêu giá trị của $m$ để đồ thị hàm số $y = -2x^3 - 3m^2 x^2 + (m^3 + 2m)x + 2$ cắt trục hoành tại ba điểm phân biệt có hoành độ là ba số hạng liên tiếp của một cấp số nhân?",
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
    "detailedSolution": "Phương trình hoành độ giao điểm:\n$$-2x^3 - 3m^2 x^2 + (m^3 + 2m)x + 2 = 0$$\nGiả sử phương trình có ba nghiệm $x_1, x_2, x_3$ theo thứ tự lập thành cấp số nhân $\\implies x_1 x_3 = x_2^2$.\nTheo định lý Viète, tích ba nghiệm là:\n$$x_1 x_2 x_3 = -\\frac{2}{-2} = 1 \\implies x_2^3 = 1 \\implies x_2 = 1$$\nThay $x_2 = 1$ vào phương trình:\n$$-2 - 3m^2 + m^3 + 2m + 2 = 0 \\iff m^3 - 3m^2 + 2m = 0 \\iff m(m - 1)(m - 2) = 0$$\n$$\\iff m = 0, \\, m = 1, \\, m = 2$$\nThử lại:\n- Với $m = 0$: Phương trình $-2x^3 + 2 = 0 \\iff x = 1$ (chỉ có 1 nghiệm, loại).\n- Với $m = 1$: Phương trình $-2x^3 - 3x^2 + 3x + 2 = 0 \\iff (x - 1)(-2x^2 - 5x - 2) = 0 \\iff x = 1, x = -2, x = -\\frac{1}{2}$. Ba nghiệm $-2, 1, -\\frac{1}{2}$ lập thành cấp số nhân với công bội $q = -\\frac{1}{2}$ (thỏa mãn).\n- Với $m = 2$: Phương trình $-2x^3 - 12x^2 + 12x + 2 = 0 \\iff (x - 1)(-2x^2 - 14x - 2) = 0$. Phương trình bậc hai có $\\Delta' = 49 - 4 = 45 > 0$ và tích hai nghiệm bằng $1 = x_2^2$, do đó có ba nghiệm phân biệt lập thành cấp số nhân (thỏa mãn).\nVậy có 2 giá trị của $m$ là $m = 1$ và $m = 2$.\nChọn C.",
    "socraticHint": "Sử dụng tính chất cấp số nhân $x_1 x_3 = x_2^2$ kết hợp định lý Viète để tìm nghiệm cố định $x_2 = 1$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 493,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Tìm $m$ để đồ thị $(C)$ của hàm số $y = x^3 - 3x^2 + 4$ và đường thẳng $y = mx + m$ cắt nhau tại 3 điểm phân biệt $A(-1; 0), B, C$ sao cho $\\Delta OBC$ có diện tích bằng $64$.",
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
    "detailedSolution": "Phương trình hoành độ giao điểm:\n$$x^3 - 3x^2 + 4 = mx + m \\iff (x + 1)(x - 2)^2 - m(x + 1) = 0$$\n$$\\iff (x + 1)[(x - 2)^2 - m] = 0 \\iff \\left[\\begin{array}{l} x = -1 \\implies y = 0 \\implies A(-1; 0) \\\\ (x - 2)^2 = m \\quad (1) \\end{array}\\right.$$\nĐể có 3 giao điểm phân biệt thì phương trình (1) phải có 2 nghiệm phân biệt khác $-1$:\n$$\\left\\{\\begin{array}{l} m > 0 \\\\ (-1 - 2)^2 \\ne m \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} m > 0 \\\\ m \\ne 9 \\end{array}\\right.$$\nKhi đó hoành độ $B, C$ là $x = 2 \\pm \\sqrt{m}$.\nĐộ dài đoạn $BC = \\sqrt{(1 + m^2)(x_C - x_B)^2} = \\sqrt{1 + m^2} \\cdot 2\\sqrt{m}$.\nKhoảng cách từ $O(0; 0)$ đến đường thẳng $d: mx - y + m = 0$ là:\n$$d(O, d) = \\frac{|m|}{\\sqrt{m^2 + 1}} = \\frac{m}{\\sqrt{m^2 + 1}}$$\nDiện tích tam giác $OBC$:\n$$S_{OBC} = \\frac{1}{2} BC \\cdot d(O, d) = \\frac{1}{2} \\cdot 2\\sqrt{m(1 + m^2)} \\cdot \\frac{m}{\\sqrt{m^2 + 1}} = m\\sqrt{m}$$\nTheo đề bài: $S_{OBC} = 64 \\iff m\\sqrt{m} = 64 \\iff m^3 = 64^2 = 4096 \\iff m = 16$.\nChọn C.",
    "socraticHint": "Phân tích phương trình hoành độ giao điểm, biểu diễn diện tích tam giác theo $m$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 494,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Cho hàm số $y = x^3 - 8x^2 + 8x$ có đồ thị $(C)$ và hàm số $y = x^2 + (8 - a)x - b$ (với $a, b \\in \\mathbb{R}$) có đồ thị $(P)$. Biết đồ thị $(C)$ cắt $(P)$ tại ba điểm có hoành độ nằm trong đoạn $[-1; 5]$. Khi $a$ đạt giá trị nhỏ nhất thì tích $ab$ bằng:",
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
    "detailedSolution": "Phương trình hoành độ giao điểm của $(C)$ và $(P)$:\n$$x^3 - 8x^2 + 8x = x^2 + (8 - a)x - b \\iff x^3 - 9x^2 + ax + b = 0 \\quad (1)$$\nGọi $m, n, p \\in [-1; 5]$ là ba nghiệm của (1). Theo định lý Viète:\n$$\\left\\{\\begin{array}{l} m + n + p = 9 \\\\ mn + np + pm = a \\\\ mnp = -b \\end{array}\\right.$$\nVì $m, n, p \\in [-1; 5]$ nên $(m + 1)(n + 1)(p + 1) \\ge 0$ và $(5 - m)(5 - n)(5 - p) \\ge 0$.\nKhai triển hai bất đẳng thức trên và cộng vế theo vế, ta tìm được $a = mn + np + pm \\ge 15$.\nDấu bằng xảy ra khi hai nghiệm bằng $5$ và một nghiệm bằng $-1$ (tổng bằng $9$):\n$$m = 5, \\, n = 5, \\, p = -1 \\implies a = 25 - 5 - 5 = 15$$\nKhi đó $b = -mnp = -(5 \\cdot 5 \\cdot (-1)) = 25$.\nVậy tích $ab = 15 \\cdot 25 = 375$.\nChọn B.",
    "socraticHint": "Sử dụng định lý Viète cho phương trình bậc ba và khai triển bất đẳng thức $(x - x_1)(x - x_2)(x - x_3)$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 495,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để đường thẳng $y = -mx + m$ cắt đồ thị hàm số $y = x^3 + mx^2 + m$ tại 3 điểm phân biệt có hoành độ $x_1, x_2, x_3$ thỏa mãn $-1 < x_1 + x_2 + x_3 < 3$?",
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
    "detailedSolution": "Phương trình hoành độ giao điểm:\n$$x^3 + mx^2 + m = -mx + m \\iff x^3 + mx^2 + mx = 0 \\iff x(x^2 + mx + m) = 0$$\n$$\\iff \\left[\\begin{array}{l} x = 0 \\\\ x^2 + mx + m = 0 \\quad (1) \\end{array}\\right.$$\nĐể có 3 giao điểm phân biệt thì (1) phải có hai nghiệm phân biệt khác 0:\n$$\\left\\{\\begin{array}{l} \\Delta = m^2 - 4m > 0 \\\\ 0^2 + m(0) + m \\ne 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} m < 0 \\text{ hoặc } m > 4 \\\\ m \\ne 0 \\end{array}\\right. \\iff m \\in (-\\infty; 0) \\cup (4; +\\infty)$$\nKhi đó ba nghiệm là $x_3 = 0$ và hai nghiệm $x_1, x_2$ của (1) có $x_1 + x_2 = -m$.\nDo đó: $x_1 + x_2 + x_3 = -m$.\nĐiều kiện: $-1 < -m < 3 \\iff -3 < m < 1$.\nKết hợp với điều kiện trên: $m \\in (-3; 0)$.\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{-2, -1\\}$.\nVậy có đúng 2 giá trị nguyên của $m$.\nChọn C.",
    "socraticHint": "Phân tích phương trình thành nhân tử có nghiệm $x = 0$, dùng định lý Viète tính tổng ba nghiệm.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  }
];
