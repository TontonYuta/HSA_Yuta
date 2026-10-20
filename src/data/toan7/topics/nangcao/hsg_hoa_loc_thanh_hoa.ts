import { Question } from "../../../../types/exam";

export const HSG_HOA_LOC_THANH_HOA_QUESTIONS: Question[] = [
  {
    "id": 290,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Chứng minh rằng với mọi số tự nhiên $n$, phân số $A = \\frac{12n + 1}{30n + 2}$ là phân số tối giản. Ước chung lớn nhất của tử số và mẫu số luôn bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "detailedSolution": "Gọi $d = \\gcd(12n + 1, 30n + 2)$:\n$\\implies d \\mid 5(12n + 1) = 60n + 5$\nvà $d \\mid 2(30n + 2) = 60n + 4$.\nSuy ra $d \\mid [(60n + 5) - (60n + 4)] = 1 \\implies d = 1$.\nDo đó phân số luôn tối giản.\n\nĐáp số: 1.",
    "socraticHint": "Nhân tử với 5 và mẫu với 2 để triệt tiêu $60n$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 291,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho các số thực $a, b, c$ thỏa mãn $\\frac{a}{b+c} = \\frac{b}{c+a} = \\frac{c}{a+b}$. Giá trị của biểu thức $P = \\frac{b+c}{a} + \\frac{c+a}{b} + \\frac{a+b}{c}$ khi $a + b + c \\ne 0$ là:",
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
        "content": "$-3$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cộng tử và mẫu theo dãy tỉ số bằng nhau:\n$$\\frac{a}{b+c} = \\frac{b}{c+a} = \\frac{c}{a+b} = \\frac{a+b+c}{2(a+b+c)} = \\frac{1}{2}$$\nSuy ra $b+c = 2a, c+a = 2b, a+b = 2c$.\nKhi đó $P = 2 + 2 + 2 = 6$.\n\nChọn A.",
    "socraticHint": "Cộng 3 tỉ số lại: hằng số tỉ lệ bằng $1/2$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 292,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tính giá trị biểu thức $A = 1 - 2 + 3 - 4 + 5 - 6 + \\dots + 2023 - 2024$. (Điền số nguyên âm):",
    "correctAnswer": "-1012",
    "acceptableAnswers": [
      "-1012"
    ],
    "detailedSolution": "Ghép từng cặp hai số liên tiếp:\n$$A = (1 - 2) + (3 - 4) + \\dots + (2023 - 2024)$$\nCó tất cả $2024 : 2 = 1012$ cặp, mỗi cặp có giá trị bằng $-1$.\nVậy $A = 1012 \\times (-1) = -1012$.\n\nĐáp số: -1012.",
    "socraticHint": "Ghép mỗi cặp $(2k - 1) - 2k = -1$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 293,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tìm giá trị nguyên của $x$ để phân thức $M = \\frac{5}{x - 3}$ đạt giá trị nhỏ nhất:",
    "options": [
      {
        "key": "A",
        "content": "$x = 2$"
      },
      {
        "key": "B",
        "content": "$x = 4$"
      },
      {
        "key": "C",
        "content": "$x = 0$"
      },
      {
        "key": "D",
        "content": "$x = -2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Để $M$ đạt GTNN thì $M$ phải nhận giá trị âm, tức là $x - 3 < 0 \\implies x < 3$.\nĐể phân số âm có giá trị nhỏ nhất (âm lớn nhất về giá trị tuyệt đối) thì mẫu số âm phải lớn nhất, tức là $x - 3 = -1 \\implies x = 2$.\nKhi đó $M = \\frac{5}{-1} = -5$.\n\nChọn A.",
    "socraticHint": "Phân số có tử dương thì GTNN đạt được khi mẫu số âm và gần 0 nhất.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 294,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho hai số $x, y$ thỏa mãn $(2x - 1)^2 + (y + 2)^2 = 0$. Giá trị của $x + y$ là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "-1.5",
    "acceptableAnswers": [
      "-1.5",
      "-3/2",
      "-1,5"
    ],
    "detailedSolution": "Vì tổng hai bình phương bằng 0 nên từng biểu thức phải bằng 0:\n$2x - 1 = 0 \\implies x = 0{,}5$.\n$y + 2 = 0 \\implies y = -2$.\nSuy ra $x + y = 0{,}5 - 2 = -1{,}5 = -\\frac{3}{2}$.\n\nĐáp số: -1.5.",
    "socraticHint": "Tổng hai số không âm bằng 0 khi cả hai số đồng thời bằng 0.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 295,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho tam giác $ABC$ có $\\widehat{B} = 45^\\circ, \\widehat{C} = 30^\\circ$. Đường cao $AH$. Khẳng định nào sau đây là đúng về mối liên hệ giữa $BH$ và $CH$?",
    "options": [
      {
        "key": "A",
        "content": "$CH = BH \\sqrt{3}$"
      },
      {
        "key": "B",
        "content": "$CH = 2BH$"
      },
      {
        "key": "C",
        "content": "$CH = BH$"
      },
      {
        "key": "D",
        "content": "$CH = \\frac{1}{2} BH$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tam giác $ABH$ vuông tại $H$ có $\\widehat{B} = 45^\\circ \\implies AH = BH$.\nTam giác $ACH$ vuông tại $H$ có $\\widehat{C} = 30^\\circ \\implies CH = AH \\cot(30^\\circ) = AH \\sqrt{3} = BH \\sqrt{3}$.\n\nChọn A.",
    "socraticHint": "Tam giác vuông có góc 45 độ là tam giác vuông cân, suy ra $AH = BH$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 296,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tính giá trị của đa thức $P(x) = x^5 - 5x^4 + 5x^3 - 5x^2 + 5x - 1$ tại $x = 4$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Thay $5 = x + 1$ với $x = 4$:\n$$P(x) = x^5 - (x+1)x^4 + (x+1)x^3 - (x+1)x^2 + (x+1)x - 1$$\n$$= x^5 - x^5 - x^4 + x^4 + x^3 - x^3 - x^2 + x^2 + x - 1 = x - 1$$\nTại $x = 4$: $P(4) = 4 - 1 = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Tách hệ số $5 = x + 1$ và rút gọn triệt tiêu liên tiếp.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 297,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Có bao nhiêu cặp số nguyên $(x; y)$ thỏa mãn đẳng thức: $x^2 + y^2 = 5$?",
    "options": [
      {
        "key": "A",
        "content": "$8$ cặp"
      },
      {
        "key": "B",
        "content": "$4$ cặp"
      },
      {
        "key": "C",
        "content": "$2$ cặp"
      },
      {
        "key": "D",
        "content": "$12$ cặp"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phân tích 5 thành tổng hai số chính phương: $5 = 1 + 4 = (\\pm 1)^2 + (\\pm 2)^2$.\nCác cặp $(x; y)$ là: $(\\pm 1; \\pm 2)$ và $(\\pm 2; \\pm 1)$. Có tất cả $4 + 4 = 8$ cặp.\n\nChọn A.",
    "socraticHint": "5 chỉ có thể phân tích thành $1^2 + 2^2$. Đổi dấu và đổi vị trí $x, y$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 298,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho $\\frac{x}{3} = \\frac{y}{4}$ và $x \\cdot y = 48$ với $x, y > 0$. Giá trị của $x + y$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "14",
    "acceptableAnswers": [
      "14"
    ],
    "detailedSolution": "Đặt $x = 3k, y = 4k$ ($k > 0$):\n$$xy = 3k \\cdot 4k = 12k^2 = 48 \\implies k^2 = 4 \\implies k = 2$$\nSuy ra $x = 6, y = 8$. Tổng $x + y = 6 + 8 = 14$.\n\nĐáp số: 14.",
    "socraticHint": "Đặt ẩn phụ $k$ rồi thế vào tích $x \\cdot y$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 299,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho $a, b, c$ là độ dài ba cạnh của một tam giác. Bất đẳng thức nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "$(a + b - c)(b + c - a)(c + a - b) > 0$"
      },
      {
        "key": "B",
        "content": "$a^2 + b^2 = c^2$"
      },
      {
        "key": "C",
        "content": "$a + b = c$"
      },
      {
        "key": "D",
        "content": "$a^2 + b^2 < c^2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo bất đẳng thức tam giác, tổng hai cạnh luôn lớn hơn cạnh thứ ba:\n$a + b - c > 0$, $b + c - a > 0$, $c + a - b > 0$.\nTích ba số dương luôn là một số dương.\n\nChọn A.",
    "socraticHint": "Áp dụng BĐT tam giác cho từng thừa số.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 300,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tìm số tự nhiên $n$ sao cho $2^n + 1$ chia hết cho $3$. Biết $n$ là số tự nhiên lẻ có hai chữ số nhỏ nhất. Giá trị của $n$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "11",
    "acceptableAnswers": [
      "11"
    ],
    "detailedSolution": "Ta có $2 \\equiv -1 \\pmod 3 \\implies 2^n \\equiv (-1)^n \\pmod 3$.\nĐể $2^n + 1 \\equiv 0 \\pmod 3$ thì $(-1)^n + 1 = 0 \\implies n$ phải là số lẻ.\nSố tự nhiên lẻ có hai chữ số nhỏ nhất là $11$.\n\nĐáp số: 11.",
    "socraticHint": "Số dư của $2^n$ khi chia cho 3 phụ thuộc vào tính chẵn lẻ của $n$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 301,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho tam giác $ABC$ vuông tại $A$. Đường phân giác $BD$ ($D \\in AC$). Kẻ $DE \\perp BC$ ($E \\in BC$). Khẳng định nào sau đây là SAI?",
    "options": [
      {
        "key": "A",
        "content": "$AD > DE$"
      },
      {
        "key": "B",
        "content": "$AD = DE$"
      },
      {
        "key": "C",
        "content": "$BA = BE$"
      },
      {
        "key": "D",
        "content": "$BD$ là đường trung trực của đoạn thẳng $AE$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hai tam giác vuông $\\Delta ABD = \\Delta EBD$ (cạnh huyền - góc nhọn) nên $AD = DE$ và $BA = BE$. Khẳng định $AD > DE$ là sai.\n\nChọn A.",
    "socraticHint": "Điểm trên tia phân giác cách đều hai cạnh của góc.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 302,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tìm giá trị của $x$ thỏa mãn đẳng thức: $\\frac{x + 1}{65} + \\frac{x + 3}{63} = \\frac{x + 5}{61} + \\frac{x + 7}{59}$. (Điền số nguyên âm):",
    "correctAnswer": "-66",
    "acceptableAnswers": [
      "-66"
    ],
    "detailedSolution": "Cộng thêm 1 vào mỗi phân số ở cả hai vế:\n$$\\frac{x + 66}{65} + \\frac{x + 66}{63} = \\frac{x + 66}{61} + \\frac{x + 66}{59}$$\n$$(x + 66)\\left(\\frac{1}{65} + \\frac{1}{63} - \\frac{1}{61} - \\frac{1}{59}\\right) = 0 \\implies x + 66 = 0 \\implies x = -66$$\n\nĐáp số: -66.",
    "socraticHint": "Nhận thấy $1 + 65 = 3 + 63 = 5 + 61 = 7 + 59 = 66$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 303,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho $a, b, c$ là ba số thỏa mãn $ab = 1, bc = 2, ca = 8$ và $a, b, c > 0$. Giá trị của biểu thức $a + b + c$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{13}{2}$"
      },
      {
        "key": "B",
        "content": "$7$"
      },
      {
        "key": "C",
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$\\frac{15}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Nhân ba vế: $(abc)^2 = 1 \\times 2 \\times 8 = 16 \\implies abc = 4$.\nSuy ra:\n$c = \\frac{abc}{ab} = \\frac{4}{1} = 4$.\n$a = \\frac{abc}{bc} = \\frac{4}{2} = 2$.\n$b = \\frac{abc}{ca} = \\frac{4}{8} = \\frac{1}{2}$.\nTổng $a + b + c = 2 + \\frac{1}{2} + 4 = \\frac{13}{2}$.\n\nChọn A.",
    "socraticHint": "Nhân cả ba đẳng thức lại để tìm tích $abc$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 304,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tính tổng tất cả các nghiệm nguyên của phương trình: $(x^2 - 4)(x^2 - 9) = 0$. (Điền số nguyên):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0"
    ],
    "detailedSolution": "Các nghiệm là $x = \\pm 2, x = \\pm 3$.\nTổng các nghiệm là $2 + (-2) + 3 + (-3) = 0$.\n\nĐáp số: 0.",
    "socraticHint": "Các nghiệm đối xứng từng đôi một qua gốc toạ độ.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 305,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho $\\Delta ABC$ có trung tuyến $AM$. Gọi $G$ là trọng tâm. Khẳng định nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "$S_{\\Delta ABM} = S_{\\Delta ACM}$"
      },
      {
        "key": "B",
        "content": "$AB = AC$"
      },
      {
        "key": "C",
        "content": "$AM \\perp BC$"
      },
      {
        "key": "D",
        "content": "$AM = \\frac{1}{2} BC$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hai tam giác $ABM$ và $ACM$ có chung đường cao hạ từ $A$ xuống $BC$ và hai đáy bằng nhau ($BM = MC$) nên diện tích của chúng luôn bằng nhau.\n\nChọn A.",
    "socraticHint": "Đường trung tuyến luôn chia tam giác thành hai phần có diện tích bằng nhau.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 306,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tìm số tự nhiên $x$ biết $5^x + 5^{x+2} = 650$. (Điền số nguyên):",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "detailedSolution": "Đặt nhân tử chung: $5^x(1 + 5^2) = 650 \\implies 5^x \\cdot 26 = 650 \\implies 5^x = 25 = 5^2 \\implies x = 2$.\n\nĐáp số: 2.",
    "socraticHint": "Đặt $5^x$ ra ngoài: $5^x(1 + 25) = 650$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 307,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho đa thức $P(x) = (x - 1)(x - 2)(x - 3) + 2024$. Số dư khi chia $P(x)$ cho $x - 2$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2024$"
      },
      {
        "key": "B",
        "content": "$0$"
      },
      {
        "key": "C",
        "content": "$-2024$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo định lý Bézout, số dư khi chia $P(x)$ cho $x - 2$ chính là $P(2)$.\nTa có $P(2) = (2 - 1)(2 - 2)(2 - 3) + 2024 = 0 + 2024 = 2024$.\n\nChọn A.",
    "socraticHint": "Định lý Bézout: số dư khi chia cho $x - a$ là $P(a)$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 308,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho góc bẹt $\\widehat{xOy}$. Trên cùng một nửa mặt phẳng bờ $xy$, vẽ hai tia $Oz, Ot$ sao cho $\\widehat{xOz} = 40^\\circ$ và $\\widehat{yOt} = 60^\\circ$. Số đo của góc $\\widehat{zOt}$ bằng bao nhiêu độ? (Điền số nguyên):",
    "correctAnswer": "80",
    "acceptableAnswers": [
      "80",
      "80 độ"
    ],
    "detailedSolution": "Vì góc $\\widehat{xOy}$ là góc bẹt ($180^\\circ$) và hai tia $Oz, Ot$ nằm giữa hai tia $Ox, Oy$:\n$$\\widehat{zOt} = 180^\\circ - (\\widehat{xOz} + \\widehat{yOt}) = 180^\\circ - (40^\\circ + 60^\\circ) = 80^\\circ$$\n\nĐáp số: 80.",
    "socraticHint": "Lấy $180^\\circ$ trừ đi tổng hai góc hai bên.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 309,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho $\\frac{x}{a} = \\frac{y}{b} = \\frac{z}{c}$. Biểu thức nào sau đây bằng với $\\frac{x^2 + y^2 + z^2}{a^2 + b^2 + c^2}$?",
    "options": [
      {
        "key": "A",
        "content": "$\\left(\\frac{x + y + z}{a + b + c}\\right)^2$"
      },
      {
        "key": "B",
        "content": "$\\frac{x + y + z}{a + b + c}$"
      },
      {
        "key": "C",
        "content": "$\\left(\\frac{x + y + z}{a + b + c}\\right)^3$"
      },
      {
        "key": "D",
        "content": "$\\frac{xyz}{abc}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $\\frac{x}{a} = \\frac{y}{b} = \\frac{z}{c} = k$.\nKhi đó $\\frac{x^2 + y^2 + z^2}{a^2 + b^2 + c^2} = \\frac{k^2(a^2 + b^2 + c^2)}{a^2 + b^2 + c^2} = k^2$.\nMà $\\frac{x+y+z}{a+b+c} = k \\implies \\left(\\frac{x+y+z}{a+b+c}\\right)^2 = k^2$.\n\nChọn A.",
    "socraticHint": "Cả hai biểu thức đều có giá trị bằng $k^2$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
