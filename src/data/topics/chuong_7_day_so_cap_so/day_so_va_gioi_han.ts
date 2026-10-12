import { Question } from '../../../types/exam';

export const daySoGioiHanQuestions: Question[] = [
  {
    "id": 22,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "day_so_va_gioi_han",
    "topicName": "Dãy số & Giới hạn dãy số",
    "content": "Một hội trường có 20 hàng ghế. Hàng đầu tiên có 15 ghế, mỗi hàng tiếp theo nhiều hơn hàng liền trước 4 ghế. Tổng số ghế là:",
    "options": [
      {
        "key": "A",
        "content": "$1060$"
      },
      {
        "key": "B",
        "content": "$1020$"
      },
      {
        "key": "C",
        "content": "$980$"
      },
      {
        "key": "D",
        "content": "$1100$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cấp số cộng có $u_1 = 15, d = 4, n = 20$.\n$$S_{20} = \\frac{20}{2}[2(15) + (20 - 1)4] = 10[30 + 76] = 10 \\times 106 = 1060$$.",
    "socraticHint": "Công thức tổng $n$ số hạng đầu của cấp số cộng $S_n = \\frac{n}{2}[2u_1 + (n - 1)d]$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 66,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "day_so_va_gioi_han",
    "topicName": "Dãy số & Giới hạn dãy số",
    "content": "Cho cấp số cộng có $u_1 = 2$ và công sai $d = 3$. Số hạng thứ 10 là:",
    "options": [
      {
        "key": "A",
        "content": "$29$"
      },
      {
        "key": "B",
        "content": "$32$"
      },
      {
        "key": "C",
        "content": "$27$"
      },
      {
        "key": "D",
        "content": "$30$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$u_{10} = u_1 + 9d = 2 + 9(3) = 29$.",
    "socraticHint": "Áp dụng công thức $u_n = u_1 + (n - 1)d$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 173,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "day_so_va_gioi_han",
    "topicName": "Dãy số & Giới hạn dãy số",
    "content": "Giới hạn $\\lim \\frac{3n^2 - 2n + 5}{2n^2 + n - 1}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{3}{2}$"
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
    "detailedSolution": "Chia cả tử và mẫu cho $n^2$ bậc cao nhất:\n$$\\lim \\frac{3n^2 - 2n + 5}{2n^2 + n - 1} = \\lim \\frac{3 - \\frac{2}{n} + \\frac{5}{n^2}}{2 + \\frac{1}{n} - \\frac{1}{n^2}} = \\frac{3 - 0 + 0}{2 + 0 - 0} = \\frac{3}{2}$$.",
    "socraticHint": "Giới hạn tỉ số hai đa thức cùng bậc bằng tỉ số hai hệ số của bậc cao nhất.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 207,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "day_so_va_gioi_han",
    "topicName": "Dãy số & Giới hạn dãy số",
    "content": "Cho tam giác $ABC$ có diện tích là $12\\text{ cm}^2$. Dựng tam giác $A_1B_1C_1$ sao cho $A_1, B_1, C_1$ lần lượt là trung điểm của các cạnh $BC, CA, AB$. Dựng tam giác $A_2B_2C_2$ sao cho $A_2, B_2, C_2$ lần lượt là trung điểm của các cạnh $B_1C_1, C_1A_1, A_1B_1\\dots$ Tiếp tục quá trình này cho đến khi diện tích tam giác dựng được bằng $0$. Tính tổng diện tích các tam giác đã dựng (nhập đáp án theo đơn vị $\\text{cm}^2$).",
    "options": [],
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0",
      "16",
      "16.0"
    ],
    "detailedSolution": "Tam giác nối trung điểm của ba cạnh tam giác đồng dạng với tam giác ban đầu theo tỉ số $k = \\frac{1}{2}$, do đó diện tích bằng $k^2 = \\frac{1}{4}$ diện tích tam giác ban đầu:\n- Tam giác thứ nhất dựng được $A_1B_1C_1$ có diện tích: $S_1 = \\frac{1}{4} S_{ABC} = \\frac{12}{4} = 3\\text{ cm}^2$.\n- Tam giác thứ hai dựng được $A_2B_2C_2$ có diện tích: $S_2 = \\frac{1}{4} S_1 = \\frac{3}{4}\\text{ cm}^2$.\n- Tổng quát: $S_n = 3 \\cdot \\left(\\frac{1}{4}\\right)^{n-1}$.\n\nDãy các diện tích tam giác đã dựng tạo thành cấp số nhân lùi vô hạn với $u_1 = 3$ và công bội $q = \\frac{1}{4}$.\nTổng diện tích các tam giác đã dựng là:\n$$S = \\sum_{n=1}^\\infty S_n = \\frac{u_1}{1 - q} = \\frac{3}{1 - \\frac{1}{4}} = \\frac{3}{\\frac{3}{4}} = 4\\text{ cm}^2$$\n(Nếu tính cả tam giác ban đầu $ABC$, tổng diện tích là $12 + 4 = 16\\text{ cm}^2$. Cả hai cách hiểu đều được hệ thống công nhận).",
    "socraticHint": "Diện tích tam giác trung điểm bằng $1/4$ diện tích tam giác mẹ. Áp dụng công thức tổng cấp số nhân lùi vô hạn $S = \\frac{u_1}{1 - q}$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 280,
    "type": "mcq",
    "topicId": "day_so_va_gioi_han",
    "content": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 3$ và $u_{n+1} = \\frac{1}{2}\\left(u_n + \\frac{3}{u_n}\\right)$ với mọi $n \\\\in \\mathbb{N}^*$. Giới hạn $\\lim u_n$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$2\\sqrt{3}$"
      },
      {
        "key": "C",
        "content": "$\\sqrt{3}$"
      },
      {
        "key": "D",
        "content": "$2\\sqrt{2}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Bằng quy nạp, ta thấy $u_n > 0$ với mọi $n \\ge 1$.\nÁp dụng bất đẳng thức Cauchy:\n$$u_{n+1} = \\frac{1}{2}\\left(u_n + \\frac{3}{u_n}\\right) \\ge \\sqrt{u_n \\cdot \\frac{3}{u_n}} = \\sqrt{3}$$\nVới $n \\ge 2$, ta có $u_n \\ge \\sqrt{3}$. Khi đó:\n$$u_{n+1} - u_n = \\frac{3 - u_n^2}{2u_n} \\le 0$$\nDo đó dãy $(u_n)$ giảm kể từ số hạng thứ hai và bị chặn dưới bởi $\\sqrt{3}$, nên dãy có giới hạn hữu hạn $L \\ge \\sqrt{3}$.\nLấy giới hạn hai vế phương trình truy hồi:\n$$L = \\frac{1}{2}\\left(L + \\frac{3}{L}\\right) \\iff 2L = L + \\frac{3}{L} \\iff L = \\frac{3}{L} \\iff L^2 = 3 \\implies L = \\sqrt{3}$$",
    "socraticHint": "Đây là thuật toán Heron tính căn bậc hai. Chứng minh dãy số giảm và bị chặn dưới bởi $\\sqrt{3}$, sau đó chuyển qua giới hạn.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Dãy số & Giới hạn dãy số",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân"
  },
  {
    "id": 282,
    "type": "mcq",
    "topicId": "day_so_va_gioi_han",
    "content": "Cho hàm số $f(x) = \\begin{cases} \\frac{x^2 - 3x + 2}{x - 1} & \\text{khi } x > 1 \\\\ m & \\text{khi } x = 1 \\\\ 2x - 3 & \\text{khi } x < 1 \\end{cases}$. Giá trị của tham số $m$ để hàm số liên tục tại $x = 1$ là:",
    "options": [
      {
        "key": "A",
        "content": "$m = -1$"
      },
      {
        "key": "B",
        "content": "$m = 1$"
      },
      {
        "key": "C",
        "content": "$m = 0$"
      },
      {
        "key": "D",
        "content": "$m = -2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hàm số liên tục tại $x = 1$ khi và chỉ khi: $\\lim\\limits_{x \\to 1^+} f(x) = \\lim\\limits_{x \\to 1^-} f(x) = f(1) = m$.\n- Giới hạn bên phải:\n  $$\\lim\\limits_{x \\to 1^+} \\frac{x^2 - 3x + 2}{x - 1} = \\lim\\limits_{x \\to 1^+} \\frac{(x - 1)(x - 2)}{x - 1} = \\lim\\limits_{x \\to 1^+} (x - 2) = 1 - 2 = -1$$\n- Giới hạn bên trái:\n  $$\\lim\\limits_{x \\to 1^-} (2x - 3) = 2(1) - 3 = -1$$\nDo đó để hàm số liên tục thì $m = -1$.",
    "socraticHint": "Tính giới hạn trái và giới hạn phải khi $x \\to 1$ rồi cho bằng $f(1) = m$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Dãy số & Giới hạn dãy số",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân"
  },
  {
    "id": 287,
    "type": "mcq",
    "topicId": "day_so_va_gioi_han",
    "content": "Cho đa thức $f(x)$ thỏa mãn $\\lim\\limits_{x \\to 1} \\frac{f(x) - 10}{x - 1} = 4$. Tính giới hạn $L = \\lim\\limits_{x \\to 1} \\frac{\\sqrt[3]{3f(x) + 34} - 4}{2x^2 - 3x + 1}$:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{12}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{4}$"
      },
      {
        "key": "C",
        "content": "$\\frac{1}{16}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{48}$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Vì giới hạn hữu hạn nên khi $x \\to 1$, $f(1) = 10$ và $f'(1) = 4$.\nMẫu số: $2x^2 - 3x + 1 = (x - 1)(2x - 1)$.\nTử số: nhân lượng liên hợp bậc ba của $A - 4$ với $A = \\sqrt[3]{3f(x) + 34}$:\n$$A^3 - 4^3 = 3f(x) + 34 - 64 = 3(f(x) - 10)$$\n$$L = \\lim\\limits_{x \\to 1} \\frac{3(f(x) - 10)}{(x - 1)(2x - 1) [A^2 + 4A + 16]}$$\nThay các giá trị khi $x \\to 1$:\n- $\\lim\\limits_{x \\to 1} \\frac{f(x) - 10}{x - 1} = 4$\n- $\\lim\\limits_{x \\to 1} (2x - 1) = 1$\n- $A = \\sqrt[3]{3(10) + 34} = \\sqrt[3]{64} = 4 \\implies A^2 + 4A + 16 = 16 + 16 + 16 = 48$\nDo đó:\n$$L = \\frac{3 \\times 4}{1 \\times 48} = \\frac{12}{48} = \\frac{1}{4}$$",
    "socraticHint": "Sử dụng hằng đẳng thức lượng liên hợp $A - B = \\frac{A^3 - B^3}{A^2 + AB + B^2}$ kết hợp đạo hàm định nghĩa.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Dãy số & Giới hạn dãy số",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân"
  }
];
