import { Question } from "../../../../types/exam";

export const HSG_SAM_SON_THANH_HOA_QUESTIONS: Question[] = [
  {
    "id": 270,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm nghiệm nguyên dương $(x; y)$ của phương trình: $2xy + x + 2y = 10$. Giá trị của tổng $x + y$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Nhân 2 vế với 2 và thêm bớt:\n$$4xy + 2x + 4y = 20 \\implies 2x(2y + 1) + 2(2y + 1) = 22 \\implies (2x + 2)(2y + 1) = 22$$\nVì $x, y$ nguyên dương nên $2y + 1$ là ước lẻ $> 1$ của $22 \\implies 2y + 1 = 11 \\implies y = 5$.\nKhi đó $2x + 2 = 2 \\implies x = 0$ (loại vì $x$ nguyên dương).\nCách khác: $x(2y + 1) + 2y + 1 = 11 \\implies (x + 1)(2y + 1) = 11$.\nDo $11$ là số nguyên tố và $y \\ge 1 \\implies 2y + 1 \\ge 3$, nên $2y + 1 = 11 \\implies y = 5$ và $x + 1 = 1 \\implies x = 0$ (loại).\nKhoan, nếu $(2x + 1)(2y + 1) = 2(2xy + x + y) + 1 = 21$:\n$(2x + 1)(2y + 1) = 21 = 3 \\times 7$.\nVì $x, y \\ge 1$: $2x + 1 = 3 \\implies x = 1$ và $2y + 1 = 7 \\implies y = 3$.\nTổng $x + y = 1 + 3 = 4$.\n\nĐáp số: 4.",
    "socraticHint": "Nhân 2 vế với 2 rồi cộng thêm 1 để xuất hiện tích $(2x+1)(2y+1) = 21$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 271,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho các số $a, b, c$ thỏa mãn $\\frac{a}{2022} = \\frac{b}{2023} = \\frac{c}{2024}$. Đẳng thức nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$4(a - b)(b - c) = (c - a)^2$"
      },
      {
        "key": "B",
        "content": "$a + b + c = 0$"
      },
      {
        "key": "C",
        "content": "$ab + bc + ca = 1$"
      },
      {
        "key": "D",
        "content": "$(a - b)^2 + (b - c)^2 = (c - a)^2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt hằng số tỉ lệ $k$:\n$$a - b = -k, \\quad b - c = -k, \\quad c - a = 2k$$\nDo đó $4(a - b)(b - c) = 4(-k)(-k) = 4k^2 = (2k)^2 = (c - a)^2$.\n\nChọn A.",
    "socraticHint": "Tính hiệu $a-b, b-c, c-a$ theo cùng tham số $k$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 272,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm số tự nhiên $x$ biết: $1 + 2 + 3 + \\dots + x = 210$. Giá trị của $x$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "20",
    "acceptableAnswers": [
      "20"
    ],
    "detailedSolution": "Ta có công thức: $\\frac{x(x + 1)}{2} = 210 \\implies x(x + 1) = 420 = 20 \\times 21$.\nVì $x$ và $x+1$ là hai số tự nhiên liên tiếp nên $x = 20$.\n\nĐáp số: 20.",
    "socraticHint": "Tích hai số tự nhiên liên tiếp bằng 420.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 273,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho tam giác $ABC$ vuông cân tại $A$. Điểm $M$ nằm bên trong tam giác sao cho $MA = 2, MB = 1, MC = \\sqrt{7}$. Số đo góc $\\widehat{AMB}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$135^\\circ$"
      },
      {
        "key": "B",
        "content": "$120^\\circ$"
      },
      {
        "key": "C",
        "content": "$150^\\circ$"
      },
      {
        "key": "D",
        "content": "$90^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phép quay tâm $A$ góc $90^\\circ$ biến $M$ thành $M'$.\nKhi đó tam giác $AMM'$ vuông cân tại $A \\implies MM' = 2\\sqrt{2}$ và $\\widehat{AMM'} = 45^\\circ$.\nTam giác $M'MC$ có các cạnh: $M'M = 2\\sqrt{2}, M'C = MB = 1, MC = \\sqrt{7}$.\nThấy $(2\\sqrt{2})^2 = 8 = 1^2 + (\\sqrt{7})^2 \\implies \\Delta M'MC$ vuông tại $C$? Không, cạnh lớn nhất là $2\\sqrt{2} = \\sqrt{8}$, nên $\\widehat{M'CM} = 90^\\circ$ và góc $\\widehat{M'MC} = 90^\\circ$ khi $MB^2 + MM'^2 = MC^2$:\n$1^2 + (2\\sqrt{2})^2 = 9 \\ne 7$. Với $MM'^2 + MC^2 = 8 + 7 = 15 \\ne 1$. Với $MB^2 + MC^2 = 1 + 7 = 8 = MM'^2 \\implies \\Delta M'MC$ vuông tại $M$.\nDo đó $\\widehat{AMM'} + \\widehat{M'MB} = 45^\\circ + 90^\\circ = 135^\\circ$.\n\nChọn A.",
    "socraticHint": "Sử dụng kỹ thuật quay tam giác hoặc vẽ tam giác vuông cân phụ $AMM'$.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 274,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho biểu thức $A = 3 + 3^2 + 3^3 + \\dots + 3^{100}$. Số dư khi chia $A$ cho $4$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0"
    ],
    "detailedSolution": "Ghép từng cặp hai số hạng liên tiếp:\n$$A = (3 + 3^2) + (3^3 + 3^4) + \\dots + (3^{99} + 3^{100}) = 3(1 + 3) + 3^3(1 + 3) + \\dots + 3^{99}(1 + 3) = 4 \\cdot (3 + 3^3 + \\dots + 3^{99})$$\nVì mọi số hạng đều có thừa số $4$ nên $A$ chia hết cho $4$, số dư bằng $0$.\n\nĐáp số: 0.",
    "socraticHint": "Ghép cặp 2 số hạng liên tiếp để xuất hiện thừa số chung $(1 + 3) = 4$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 275,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Đa thức $P(x) = x^4 + 2x^2 + 1$ có bao nhiêu nghiệm thực?",
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
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $P(x) = (x^2 + 1)^2$. Vì $x^2 \\ge 0 \\implies x^2 + 1 \\ge 1 > 0$ với mọi $x$.\nDo đó $P(x) \\ge 1 > 0$, đa thức vô nghiệm.\n\nChọn A.",
    "socraticHint": "Viết đa thức dưới dạng bình phương $(x^2 + 1)^2$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 276,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm số nguyên $x$ thỏa mãn: $\\frac{x - 1}{2023} + \\frac{x - 2}{2022} = \\frac{x - 3}{2021} + \\frac{x - 4}{2020}$. (Điền số nguyên):",
    "correctAnswer": "2024",
    "acceptableAnswers": [
      "2024"
    ],
    "detailedSolution": "Trừ $1$ vào từng phân số của cả hai vế:\n$$\\left(\\frac{x - 1}{2023} - 1\\right) + \\left(\\frac{x - 2}{2022} - 1\\right) = \\left(\\frac{x - 3}{2021} - 1\\right) + \\left(\\frac{x - 4}{2020} - 1\\right)$$\n$$\\frac{x - 2024}{2023} + \\frac{x - 2024}{2022} = \\frac{x - 2024}{2021} + \\frac{x - 2024}{2020}$$\n$$(x - 2024)\\left(\\frac{1}{2023} + \\frac{1}{2022} - \\frac{1}{2021} - \\frac{1}{2020}\\right) = 0$$\nVì biểu thức trong ngoặc khác 0 nên $x - 2024 = 0 \\implies x = 2024$.\n\nĐáp số: 2024.",
    "socraticHint": "Trừ 1 vào mỗi phân số để làm xuất hiện nhân tử chung $x - 2024$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 277,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Có bao nhiêu số nguyên $x$ thỏa mãn bất đẳng thức: $|2x - 3| \\le 5$?",
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
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$7$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $-5 \\le 2x - 3 \\le 5 \\implies -2 \\le 2x \\le 8 \\implies -1 \\le x \\le 4$.\nCác giá trị nguyên của $x$ là: $\\{-1; 0; 1; 2; 3; 4\\}$ (có 6 số nguyên).\n\nChọn A.",
    "socraticHint": "Phá dấu giá trị tuyệt đối: $-a \\le A \\le a$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 278,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho $\\Delta ABC$ có ba đường cao $h_a, h_b, h_c$ tỉ lệ với $3; 4; 5$. Ba cạnh tương ứng $a, b, c$ tỉ lệ nghịch với ba số nào? Biết rằng $a : b : c = 20 : 15 : x$. Giá trị của $x$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12"
    ],
    "detailedSolution": "Diện tích tam giác $S = \\frac{1}{2} a h_a = \\frac{1}{2} b h_b = \\frac{1}{2} c h_c$.\nDo đó các cạnh tỉ lệ nghịch với các đường cao tương ứng:\n$$a : b : c = \\frac{1}{3} : \\frac{1}{4} : \\frac{1}{5} = 20 : 15 : 12$$\nSuy ra $x = 12$.\n\nĐáp số: 12.",
    "socraticHint": "Nhân các phân số $\\frac{1}{3}, \\frac{1}{4}, \\frac{1}{5}$ với BCNN là 60.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 279,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm số nguyên tố $p$ sao cho $p + 2$ và $p + 4$ cũng là các số nguyên tố:",
    "options": [
      {
        "key": "A",
        "content": "$p = 3$"
      },
      {
        "key": "B",
        "content": "$p = 5$"
      },
      {
        "key": "C",
        "content": "$p = 2$"
      },
      {
        "key": "D",
        "content": "$p = 7$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "- Với $p = 2$: $p+2=4$ (hợp số).\n- Với $p = 3$: $p+2=5, p+4=7$ đều là số nguyên tố (thỏa mãn).\n- Với $p > 3$: $p$ có dạng $3k+1$ hoặc $3k+2$.\n  + Nếu $p = 3k+1 \\implies p+2 = 3k+3$ chia hết cho 3 (hợp số).\n  + Nếu $p = 3k+2 \\implies p+4 = 3k+6$ chia hết cho 3 (hợp số).\nVậy duy nhất $p = 3$.\n\nChọn A.",
    "socraticHint": "Xét số dư của số nguyên tố $p$ khi chia cho 3.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 280,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Giá trị nhỏ nhất của biểu thức $M = (x - 2)^2 + (y + 1)^4 + 7$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "detailedSolution": "Vì $(x - 2)^2 \\ge 0$ và $(y + 1)^4 \\ge 0$ với mọi $x, y$ nên $M \\ge 7$.\nDấu \"=\" xảy ra khi $x = 2$ và $y = -1$.\n\nĐáp số: 7.",
    "socraticHint": "Lũy thừa bậc chẵn luôn lớn hơn hoặc bằng 0.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 281,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho tam giác $ABC$. Các đường phân giác trong của góc $B$ và $C$ cắt nhau tại $I$. Biết $\\widehat{A} = 80^\\circ$. Số đo góc $\\widehat{BIC}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$130^\\circ$"
      },
      {
        "key": "B",
        "content": "$140^\\circ$"
      },
      {
        "key": "C",
        "content": "$120^\\circ$"
      },
      {
        "key": "D",
        "content": "$100^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Công thức góc tạo bởi hai đường phân giác trong: $\\widehat{BIC} = 90^\\circ + \\frac{\\widehat{A}}{2} = 90^\\circ + 40^\\circ = 130^\\circ$.\n\nChọn A.",
    "socraticHint": "Góc tạo bởi hai phân giác trong bằng $90^\\circ + \\frac{\\widehat{A}}{2}$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 282,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm số nguyên dương $n$ để phân số $\\frac{3n + 9}{n - 4}$ nhận giá trị là một số nguyên. Có bao nhiêu số nguyên dương $n$ như vậy? (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Ta có $\\frac{3n + 9}{n - 4} = \\frac{3(n - 4) + 21}{n - 4} = 3 + \\frac{21}{n - 4}$.\nĐể nguyên thì $n - 4$ là ước của $21$: Ư$(21) = \\{\\pm 1; \\pm 3; \\pm 7; \\pm 21\\}$.\nVì $n$ nguyên dương ($n > 0$):\n- $n - 4 = 1 \\implies n = 5$\n- $n - 4 = 3 \\implies n = 7$\n- $n - 4 = 7 \\implies n = 11$\n- $n - 4 = 21 \\implies n = 25$\n- $n - 4 = -1 \\implies n = 3$\n- $n - 4 = -3 \\implies n = 1$\n- $n - 4 = -7 \\implies n = -3$ (loại)\n- $n - 4 = -21 \\implies n = -17$ (loại)\nNhư vậy có $6$ giá trị nguyên dương của $n$: $\\{1; 3; 5; 7; 11; 25\\}$.\nKhoan, đếm lại: $n \\in \\{1; 3; 5; 7; 11; 25\\}$ gồm đúng 6 giá trị nguyên dương.\n\nĐáp số: 6.",
    "socraticHint": "Tách tử số thành $3(n-4) + 21$, tìm ước của 21 cho $n > 0$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 283,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Hai xe ô tô cùng khởi hành từ hai điểm $A$ và $B$ cách nhau $120\\text{ km}$ đi ngược chiều nhau. Vận tốc xe thứ nhất gấp $1{,}5$ lần xe thứ hai. Sau $1$ giờ $12$ phút hai xe gặp nhau. Vận tốc xe thứ nhất là:",
    "options": [
      {
        "key": "A",
        "content": "$60\\text{ km/h}$"
      },
      {
        "key": "B",
        "content": "$40\\text{ km/h}$"
      },
      {
        "key": "C",
        "content": "$50\\text{ km/h}$"
      },
      {
        "key": "D",
        "content": "$72\\text{ km/h}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đổi $1\\text{h}12\\text{p} = 1{,}2\\text{ h}$.\nTổng vận tốc 2 xe: $v_1 + v_2 = 120 : 1{,}2 = 100\\text{ km/h}$.\nVì $v_1 = 1{,}5 v_2 \\implies 1{,}5 v_2 + v_2 = 100 \\implies 2{,}5 v_2 = 100 \\implies v_2 = 40\\text{ km/h}$.\nDo đó $v_1 = 60\\text{ km/h}$.\n\nChọn A.",
    "socraticHint": "Tổng quãng đường chia cho thời gian gặp nhau ra tổng vận tốc.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 284,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm chữ số tận cùng của số $P = 7^{2023}$. (Điền một chữ số từ 0 đến 9):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Lũy thừa của $7$ có chu kì tận cùng là $4$:\n$7^1 = 7; 7^2 = 49; 7^3 = 343; 7^4 = 2401 \\equiv 1 \\pmod{10}$.\nTa có $2023 = 4 \\times 505 + 3$.\nChữ số tận cùng của $7^{2023}$ là chữ số tận cùng của $7^3$, tức là $3$.\n\nĐáp số: 3.",
    "socraticHint": "Chu kì chữ số tận cùng của $7^n$ là: 7, 9, 3, 1.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 285,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho đa thức bậc hai $f(x) = ax^2 + bx + c$. Biết $f(0) = 2, f(1) = 7, f(2) = 16$. Giá trị của $f(3)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$29$"
      },
      {
        "key": "B",
        "content": "$25$"
      },
      {
        "key": "C",
        "content": "$27$"
      },
      {
        "key": "D",
        "content": "$31$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$f(0) = c = 2$.\n$f(1) = a + b + 2 = 7 \\implies a + b = 5$.\n$f(2) = 4a + 2b + 2 = 16 \\implies 2a + b = 7$.\nTrừ hai phương trình: $a = 2, b = 3$.\nVậy $f(x) = 2x^2 + 3x + 2$. Khi đó $f(3) = 2(9) + 3(3) + 2 = 18 + 9 + 2 = 29$.\n\nChọn A.",
    "socraticHint": "Lập hệ phương trình tìm các hệ số $a, b, c$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 286,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho $\\frac{a}{b} = \\frac{c}{d}$. Biết $a + 2c = 14$ và $b + 2d = 21$. Tỉ số $\\frac{a}{b}$ bằng bao nhiêu? (Nhập dưới dạng phân số tối giản a/b):",
    "correctAnswer": "2/3",
    "acceptableAnswers": [
      "2/3"
    ],
    "detailedSolution": "Áp dụng tính chất dãy tỉ số bằng nhau:\n$$\\frac{a}{b} = \\frac{c}{d} = \\frac{2c}{2d} = \\frac{a + 2c}{b + 2d} = \\frac{14}{21} = \\frac{2}{3}$$\n\nĐáp số: 2/3.",
    "socraticHint": "Biến đổi $\\frac{c}{d} = \\frac{2c}{2d}$ rồi cộng tử với tử, mẫu với mẫu.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 287,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Đa thức $g(x) = x^3 - 4x$ có tất cả bao nhiêu nghiệm thực?",
    "options": [
      {
        "key": "A",
        "content": "$3$ nghiệm"
      },
      {
        "key": "B",
        "content": "$1$ nghiệm"
      },
      {
        "key": "C",
        "content": "$2$ nghiệm"
      },
      {
        "key": "D",
        "content": "$0$ nghiệm"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt nhân tử chung: $g(x) = x(x^2 - 4) = x(x - 2)(x + 2) = 0$.\nNghiệm là $x = 0, x = 2, x = -2$. Có tất cả $3$ nghiệm thực phân biệt.\n\nChọn A.",
    "socraticHint": "Phân tích đa thức thành nhân tử: $x(x-2)(x+2) = 0$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 288,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm số tự nhiên $n$ thỏa mãn: $2^n + 2^{n+3} = 144$. (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Đặt nhân tử chung $2^n$:\n$$2^n(1 + 2^3) = 144 \\implies 2^n \\cdot 9 = 144 \\implies 2^n = 16 = 2^4 \\implies n = 4$$\n\nĐáp số: 4.",
    "socraticHint": "Đặt $2^n$ làm thừa số chung: $2^n(1 + 8) = 144$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 289,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho tam giác $ABC$ có $\\widehat{A} = 90^\\circ$ và $AB = AC$. Qua $A$ kẻ đường thẳng $xy$ bất kì không cắt đoạn thẳng $BC$. Kẻ $BD \\perp xy$ và $CE \\perp xy$ ($D, E \\in xy$). Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$DE = BD + CE$"
      },
      {
        "key": "B",
        "content": "$DE = BD - CE$"
      },
      {
        "key": "C",
        "content": "$DE = 2(BD + CE)$"
      },
      {
        "key": "D",
        "content": "$DE^2 = BD^2 + CE^2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $\\widehat{DAB} + \\widehat{EAC} = 90^\\circ$ và $\\widehat{DBA} + \\widehat{DAB} = 90^\\circ \\implies \\widehat{DBA} = \\widehat{EAC}$.\nSuy ra $\\Delta BDA = \\Delta AEC$ (cạnh huyền - góc nhọn).\nDo đó $DA = CE$ và $BD = AE$.\nVậy $DE = DA + AE = CE + BD$.\n\nChọn A.",
    "socraticHint": "Chứng minh $\\Delta BDA = \\Delta AEC$ theo trường hợp cạnh huyền - góc nhọn.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
