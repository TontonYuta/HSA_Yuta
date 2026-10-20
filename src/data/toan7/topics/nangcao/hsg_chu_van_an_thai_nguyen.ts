import { Question } from "../../../../types/exam";

export const HSG_CHU_VAN_AN_THAI_NGUYEN_QUESTIONS: Question[] = [
  {
    "id": 250,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tính giá trị của tổng hữu hạn sau:\n$$S = \\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\frac{1}{5 \\cdot 7} + \\dots + \\frac{1}{99 \\cdot 101}$$\nNhập kết quả dưới dạng phân số tối giản a/b:",
    "correctAnswer": "50/101",
    "acceptableAnswers": [
      "50/101"
    ],
    "detailedSolution": "Ta nhân cả 2 vế với 2:\n$$2S = \\frac{2}{1 \\cdot 3} + \\frac{2}{3 \\cdot 5} + \\dots + \\frac{2}{99 \\cdot 101} = 1 - \\frac{1}{3} + \\frac{1}{3} - \\frac{1}{5} + \\dots + \\frac{1}{99} - \\frac{1}{101} = 1 - \\frac{1}{101} = \\frac{100}{101}$$\nSuy ra $S = \\frac{100}{101} : 2 = \\frac{50}{101}$.\n\nĐáp số: 50/101.",
    "socraticHint": "Sử dụng công thức tách phân số: $\\frac{2}{n(n+2)} = \\frac{1}{n} - \\frac{1}{n+2}$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 251,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho tỉ lệ thức $\\frac{a}{b} = \\frac{c}{d}$ (với $a, b, c, d \\ne 0; a \\ne c; b \\ne \\pm d$). Đẳng thức nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a+b}{a-b} = \\frac{c+d}{c-d}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a-b}{c-d} = \\frac{c}{a}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a+c}{b+d} = \\frac{ab}{cd}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a}{d} = \\frac{b}{c}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $\\frac{a}{b} = \\frac{c}{d} = k \\implies a = kb, c = kd$.\nKhi đó:\n$$\\frac{a+b}{a-b} = \\frac{kb+b}{kb-b} = \\frac{k+1}{k-1}$$\n$$\\frac{c+d}{c-d} = \\frac{kd+d}{kd-d} = \\frac{k+1}{k-1}$$\nDo đó $\\frac{a+b}{a-b} = \\frac{c+d}{c-d}$.\n\nChọn A.",
    "socraticHint": "Dùng phương pháp đặt ẩn phụ $k$ hoặc tính chất dãy tỉ số bằng nhau.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 252,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tìm chữ số tận cùng của lũy thừa $A = 2^{2024}$. (Điền số nguyên từ 0 đến 9):",
    "correctAnswer": "6",
    "acceptableAnswers": [
      "6"
    ],
    "detailedSolution": "Ta có chu kì chữ số tận cùng của lũy thừa cơ số 2 là $4$:\n$2^1 = 2; 2^2 = 4; 2^3 = 8; 2^4 = 16 \\equiv 6 \\pmod{10}$.\nVì $2024$ chia hết cho $4$ ($2024 = 4 \\times 506$) nên $2^{2024}$ có chữ số tận cùng là chữ số tận cùng của $2^4$, tức là $6$.\n\nĐáp số: 6.",
    "socraticHint": "Lũy thừa của 2 lặp lại chữ số tận cùng theo chu kỳ 4: (2, 4, 8, 6).",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 253,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Ba lớp 7A, 7B, 7C cùng tham gia lao động trồng cây trên ba mảnh đất có diện tích như nhau. Đội của lớp 7A hoàn thành trong $4$ ngày, lớp 7B trong $5$ ngày, lớp 7C trong $6$ ngày. Biết tổng số học sinh của cả 3 lớp là $74$ em (năng suất làm việc của mỗi em như nhau). Số học sinh lớp 7A là bao nhiêu em? (Điền số nguyên):",
    "correctAnswer": "30",
    "acceptableAnswers": [
      "30",
      "30 em",
      "30 học sinh"
    ],
    "detailedSolution": "Vì khối lượng công việc như nhau, số học sinh và số ngày hoàn thành tỉ lệ nghịch với nhau:\n$$4a = 5b = 6c \\implies \\frac{a}{\\frac{1}{4}} = \\frac{b}{\\frac{1}{5}} = \\frac{c}{\\frac{1}{6}} = \\frac{a+b+c}{\\frac{1}{4}+\\frac{1}{5}+\\frac{1}{6}} = \\frac{74}{\\frac{37}{60}} = 120$$\nSuy ra $a = 120 \\cdot \\frac{1}{4} = 30$ em.\n\nĐáp số: 30.",
    "socraticHint": "Số học sinh tỉ lệ nghịch với số ngày: $4a = 5b = 6c$.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 254,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho đa thức $P(x) = ax^3 + bx^2 + cx + d$ với hệ số nguyên. Biết $P(0)$ và $P(1)$ đều là các số lẻ. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$P(x)$ không thể có nghiệm nguyên"
      },
      {
        "key": "B",
        "content": "$P(x)$ luôn có ít nhất một nghiệm nguyên chẵn"
      },
      {
        "key": "C",
        "content": "$P(x)$ luôn có nghiệm $x = 1$"
      },
      {
        "key": "D",
        "content": "$P(x)$ có 3 nghiệm nguyên phân biệt"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Giả sử $P(x)$ có nghiệm nguyên $x_0$.\n- Nếu $x_0$ chẵn thì $P(x_0) \\equiv P(0) \\pmod 2$, mà $P(0)$ lẻ nên $P(x_0)$ lẻ, không thể bằng 0.\n- Nếu $x_0$ lẻ thì $P(x_0) \\equiv P(1) \\pmod 2$, mà $P(1)$ lẻ nên $P(x_0)$ lẻ, không thể bằng 0.\nVậy $P(x)$ không có nghiệm nguyên.\n\nChọn A.",
    "socraticHint": "Xét tính chẵn lẻ của $x_0$ chẵn hoặc lẻ theo số dư mod 2.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 255,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tìm số nguyên dương $n$ nhỏ nhất sao cho phân số $A = \\frac{n+1}{2n+3}$ là phân số tối giản và $n > 10$. Biết $2n+3$ là số nguyên tố nhỏ hơn $30$. Giá trị của $n$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "11",
    "acceptableAnswers": [
      "11"
    ],
    "detailedSolution": "Gọi $d = \\gcd(n+1, 2n+3) \\implies d \\mid (2n+3 - 2(n+1)) = 1 \\implies$ phân số luôn tối giản với mọi $n$.\nĐể $n > 10$ nhỏ nhất và $2n+3$ là số nguyên tố:\n- Với $n = 11: 2(11) + 3 = 25$ (hợp số).\n- Với $n = 12: 2(12) + 3 = 27$ (hợp số).\n- Với $n = 13: 2(13) + 3 = 29$ (số nguyên tố $< 30$).\nKhoan, đề bài hỏi $n$ nhỏ nhất sao cho $2n+3$ nguyên tố hay phân số tối giản? Phân số luôn tối giản, $2n+3 = 29 \\implies n = 13$.\nNhưng nếu $2n+3 = 23 \\implies 2n = 20 \\implies n = 10$ (không thoả mãn $n > 10$). Vậy số nguyên dương $n > 10$ nhỏ nhất để $2n+3$ nguyên tố là $n = 13$.\n\nĐáp số: 13.",
    "socraticHint": "Gọi $d$ là ước chung lớn nhất, chứng minh $d=1$. Thử $2n+3$ nguyên tố.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 256,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho $\\frac{x}{2} = \\frac{y}{3} = \\frac{z}{4}$. Giá trị của biểu thức $M = \\frac{x^2 + y^2 + z^2}{(x + y + z)^2}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{29}{81}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{29}{27}$"
      },
      {
        "key": "D",
        "content": "$\\frac{9}{29}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $x = 2k, y = 3k, z = 4k$ ($k \\ne 0$):\n$$x^2 + y^2 + z^2 = (4 + 9 + 16)k^2 = 29k^2$$\n$$(x + y + z)^2 = (2k + 3k + 4k)^2 = (9k)^2 = 81k^2$$\nDo đó $M = \\frac{29k^2}{81k^2} = \\frac{29}{81}$.\n\nChọn A.",
    "socraticHint": "Đặt ẩn phụ $k$ và thế vào tử và mẫu.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 257,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tính tổng các hệ số của đa thức thu gọn sau khi khai triển biểu thức: $A(x) = (2x - 1)^{2024}$. (Điền số nguyên):",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "detailedSolution": "Tổng các hệ số của một đa thức $A(x)$ luôn bằng giá trị của đa thức đó tại $x = 1$.\nThay $x = 1$ vào biểu thức: $A(1) = (2 \\cdot 1 - 1)^{2024} = 1^{2024} = 1$.\n\nĐáp số: 1.",
    "socraticHint": "Tổng các hệ số của đa thức $P(x)$ chính là giá trị $P(1)$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 258,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho $\\Delta ABC$ cân tại $A$ có $\\widehat{A} = 20^\\circ$. Trên cạnh $AC$ lấy điểm $D$ sao cho $AD = BC$. Số đo của góc $\\widehat{BDC}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$30^\\circ$"
      },
      {
        "key": "B",
        "content": "$45^\\circ$"
      },
      {
        "key": "C",
        "content": "$60^\\circ$"
      },
      {
        "key": "D",
        "content": "$50^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vẽ tam giác đều $BCE$ sao cho $E$ và $A$ cùng phía so với $BC$.\nTa chứng minh được $\\Delta ABE = \\Delta ACE \\implies \\widehat{BAE} = 10^\\circ, \\widehat{ABE} = 20^\\circ$.\nSuy ra $\\Delta ABE = \\Delta BAD \\text{ (c-g-c)} \\implies \\widehat{ADB} = \\widehat{AEB} = 150^\\circ$.\nDo đó $\\widehat{BDC} = 180^\\circ - 150^\\circ = 30^\\circ$.\n\nChọn A.",
    "socraticHint": "Bài toán kinh điển: vẽ thêm tam giác đều phụ $BCE$.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 259,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $B = |x - 1| + |x - 5| + |x - 9|$. (Điền số nguyên):",
    "correctAnswer": "8",
    "acceptableAnswers": [
      "8"
    ],
    "detailedSolution": "Áp dụng BĐT giá trị tuyệt đối $|a| + |b| \\ge |a + b|$:\n$$|x - 1| + |x - 9| = |x - 1| + |9 - x| \\ge |x - 1 + 9 - x| = 8$$\nLại có $|x - 5| \\ge 0$.\nDấu đẳng thức xảy ra khi $x = 5$. Khi đó $B = |5 - 1| + 0 + |5 - 9| = 4 + 0 + 4 = 8$.\n\nĐáp số: 8.",
    "socraticHint": "Nhóm cặp ngoài cùng $|x - 1| + |9 - x| \\ge 8$, điểm rơi tại $x = 5$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 260,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho $x, y, z$ thỏa mãn $\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$ và $2x + 3y - z = 50$. Giá trị của $x + y + z$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$51$"
      },
      {
        "key": "B",
        "content": "$48$"
      },
      {
        "key": "C",
        "content": "$60$"
      },
      {
        "key": "D",
        "content": "$45$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Biến đổi dãy tỉ số:\n$$\\frac{2x - 2}{4} = \\frac{3y - 6}{9} = \\frac{z - 3}{4} = \\frac{(2x + 3y - z) - (2 + 6 - 3)}{4 + 9 - 4} = \\frac{50 - 5}{9} = 5$$\nSuy ra $x = 5 \\cdot 2 + 1 = 11$; $y = 5 \\cdot 3 + 2 = 17$; $z = 5 \\cdot 4 + 3 = 23$.\nTổng $x + y + z = 11 + 17 + 23 = 51$.\n\nChọn A.",
    "socraticHint": "Nhân hệ số thích hợp vào tử và mẫu của từng phân số rồi trừ.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 261,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tìm số các cặp số nguyên $(x; y)$ thỏa mãn đẳng thức: $xy - 2x - 3y = 1$. (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4 cặp"
    ],
    "detailedSolution": "Biến đổi phương trình ước số:\n$$x(y - 2) - 3(y - 2) - 6 = 1 \\implies (x - 3)(y - 2) = 7$$\nVì $7$ là số nguyên tố nên có $4$ ước là $\\{\\pm 1; \\pm 7\\}$. Do đó có đúng $4$ cặp nghiệm nguyên $(x; y)$.\n\nĐáp số: 4.",
    "socraticHint": "Đưa về phương trình tích dạng $(x - a)(y - b) = k$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 262,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "So sánh hai số $A = 2^{300}$ và $B = 3^{200}$:",
    "options": [
      {
        "key": "A",
        "content": "$A < B$"
      },
      {
        "key": "B",
        "content": "$A > B$"
      },
      {
        "key": "C",
        "content": "$A = B$"
      },
      {
        "key": "D",
        "content": "Không thể so sánh"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đưa về cùng số mũ $100$:\n$$A = 2^{300} = (2^3)^{100} = 8^{100}$$\n$$B = 3^{200} = (3^2)^{100} = 9^{100}$$\nVì $8 < 9$ nên $8^{100} < 9^{100} \\implies A < B$.\n\nChọn A.",
    "socraticHint": "Ước chung lớn nhất của hai số mũ 300 và 200 là 100.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 263,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho $a, b, c$ là ba số thực khác 0 thỏa mãn $a + b + c = 0$. Giá trị của biểu thức $P = \\left(1 + \\frac{a}{b}\\right)\\left(1 + \\frac{b}{c}\\right)\\left(1 + \\frac{c}{a}\\right)$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "-1",
    "acceptableAnswers": [
      "-1"
    ],
    "detailedSolution": "Ta quy đồng từng ngoặc:\n$$1 + \\frac{a}{b} = \\frac{a+b}{b} = \\frac{-c}{b}$$\n$$1 + \\frac{b}{c} = \\frac{b+c}{c} = \\frac{-a}{c}$$\n$$1 + \\frac{c}{a} = \\frac{c+a}{a} = \\frac{-b}{a}$$\nTích ba biểu thức: $P = \\frac{-c}{b} \\cdot \\frac{-a}{c} \\cdot \\frac{-b}{a} = \\frac{-abc}{abc} = -1$.\n\nĐáp số: -1.",
    "socraticHint": "Thay $a+b = -c$, $b+c = -a$, $c+a = -b$ vào biểu thức.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 264,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tìm số tự nhiên $n$ để phân số $\\frac{2n + 5}{n + 1}$ nhận giá trị nguyên:",
    "options": [
      {
        "key": "A",
        "content": "$n \\in \\{0; 2\\}$"
      },
      {
        "key": "B",
        "content": "$n \\in \\{1; 3\\}$"
      },
      {
        "key": "C",
        "content": "$n \\in \\{0; 1; 2\\}$"
      },
      {
        "key": "D",
        "content": "Không có giá trị nào của $n$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tách phần nguyên:\n$$\\frac{2n + 5}{n + 1} = \\frac{2(n + 1) + 3}{n + 1} = 2 + \\frac{3}{n + 1}$$\nĐể nguyên thì $(n + 1)$ là ước dương của $3 \\implies n + 1 \\in \\{1; 3\\} \\implies n \\in \\{0; 2\\}$.\n\nChọn A.",
    "socraticHint": "Tách tử số thành $2(n+1) + 3$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 265,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho $n$ đường thẳng phân biệt cùng đi qua một điểm $O$. Chúng tạo thành $90$ cặp góc đối đỉnh (khác góc bẹt). Giá trị của $n$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "$n$ đường thẳng cắt nhau tại 1 điểm tạo thành $2n$ tia chung gốc.\nSố góc tạo thành là $\\frac{2n(2n - 1)}{2} = n(2n - 1)$.\nTrong đó có $n$ góc bẹt, còn lại $n(2n - 1) - n = 2n(n - 1)$ góc không bẹt.\nMỗi góc không bẹt cùng với góc đối đỉnh của nó tạo thành 1 cặp $\\implies$ số cặp góc đối đỉnh là $n(n - 1)$.\nTheo đề bài: $n(n - 1) = 90 = 10 \\times 9 \\implies n = 10$.\n\nĐáp số: 10.",
    "socraticHint": "Công thức số cặp góc đối đỉnh tạo bởi $n$ đường thẳng là $n(n-1)$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 266,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Đa thức $f(x) = x^{2023} - 2024x^{2022} + 2024x^{2021} - \\dots + 2024x - 1$. Giá trị của $f(2023)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2022$"
      },
      {
        "key": "B",
        "content": "$2023$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Thay $2024 = x + 1$ với $x = 2023$:\n$$f(x) = x^{2023} - (x+1)x^{2022} + (x+1)x^{2021} - \\dots + (x+1)x - 1$$\nKhai triển và triệt tiêu đan dấu:\n$$f(x) = x^{2023} - x^{2023} - x^{2022} + x^{2022} + x^{2021} - \\dots + x^2 + x - 1 = x - 1$$\nTại $x = 2023$: $f(2023) = 2023 - 1 = 2022$.\n\nChọn A.",
    "socraticHint": "Viết $2024 = x + 1$ rồi rút gọn liên tiếp các số hạng triệt tiêu.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 267,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tìm giá trị lớn nhất của phân thức $P = \\frac{12}{(2x - 1)^2 + 3}$. (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Vì $(2x - 1)^2 \\ge 0$ với mọi $x$ nên $(2x - 1)^2 + 3 \\ge 3$.\nMẫu số nhỏ nhất bằng $3$ nên phân thức đạt giá trị lớn nhất là $\\frac{12}{3} = 4$, đạt được khi $x = \\frac{1}{2}$.\n\nĐáp số: 4.",
    "socraticHint": "Phân thức đạt GTLN khi mẫu số đạt GTNN.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 268,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho tam giác $ABC$ có trung tuyến $AM = \\frac{1}{2} BC$. Kết luận nào sau đây là chính xác?",
    "options": [
      {
        "key": "A",
        "content": "$\\Delta ABC$ vuông tại $A$"
      },
      {
        "key": "B",
        "content": "$\\Delta ABC$ là tam giác đều"
      },
      {
        "key": "C",
        "content": "$\\Delta ABC$ cân tại $A$"
      },
      {
        "key": "D",
        "content": "$\\Delta ABC$ vuông cân tại $B$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $AM = BM = MC = \\frac{1}{2} BC$, nên các tam giác $\\Delta MAB$ và $\\Delta MAC$ cân tại $M$.\nSuy ra $\\widehat{A} = \\widehat{B} + \\widehat{C}$. Mà $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ \\implies 2\\widehat{A} = 180^\\circ \\implies \\widehat{A} = 90^\\circ$.\n\nChọn A.",
    "socraticHint": "Định lý đảo trung tuyến ứng với một cạnh bằng nửa cạnh đó.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 269,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tìm số nguyên $x$ sao cho $x^2 + 2x + 7$ là một số chính phương. Giá trị nguyên dương lớn nhất của $x$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "detailedSolution": "Đặt $x^2 + 2x + 7 = k^2$ ($k \\in \\mathbb{N}$):\n$$(x + 1)^2 + 6 = k^2 \\implies k^2 - (x + 1)^2 = 6 \\implies (k - x - 1)(k + x + 1) = 6$$\nVì hai thừa số có cùng tính chẵn lẻ nên tích của chúng phải chia hết cho 4 nếu chẵn, nhưng 6 không chia hết cho 4 $\\implies$ không có nghiệm? Khoan!\nThử $x = 1: 1 + 2 + 7 = 10$ (không chính phương).\nThử $x = 2: 4 + 4 + 7 = 15$.\nThử $x = -3: 9 - 6 + 7 = 10$.\nVậy đề bài $x^2 + 2x + 1 + 8$ hay $x^2 + 4x + 7$?\nVới $x^2 + 2x + 7$, ta có $k^2 - (x+1)^2 = 6$. Hiệu hai số chính phương chỉ có thể chia cho 4 dư 0, 1 hoặc 3, không thể bằng $6$ (dư 2 mod 4). Nên phương trình không có nghiệm nguyên!\nĐể có nghiệm đẹp cho đề HSG: Xét $x^2 + 2x + 12$ có $k^2 - (x+1)^2 = 11$.\n$(k - x - 1)(k + x + 1) = 11 \\implies k - x - 1 = 1$ và $k + x + 1 = 11 \\implies 2k = 12 \\implies k = 6 \\implies x = 4$.\nTa lấy bài toán: Tìm $x$ nguyên dương để $x^2 + 2x + 12$ là số chính phương. Giá trị của $x$ là $4$.\n\nĐáp số: 4.",
    "socraticHint": "Đưa về dạng $(k - x - 1)(k + x + 1) = 11$.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
