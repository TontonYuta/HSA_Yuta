import { Question } from '../../../../types/exam';

export const CHUONG_6_TI_LE_THUC_QUESTIONS: Question[] = [
  {
    "id": 126,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức",
    "content": "Tìm $x$ trong tỉ lệ thức sau: $\\frac{x}{6} = \\frac{15}{10}$. (Điền số nguyên hoặc số thập phân):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9.0"
    ],
    "detailedSolution": "Áp dụng tính chất tỉ lệ thức: $10 \\cdot x = 6 \\cdot 15 \\implies 10x = 90 \\implies x = 9$.\n\nĐáp số: 9.",
    "socraticHint": "Nhân chéo: $x = \\frac{6 \\cdot 15}{10}$.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 127,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức",
    "content": "Từ đẳng thức $2 \\cdot 15 = 3 \\cdot 10$, ta có thể lập được tỉ lệ thức nào sau đây?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{2}{3} = \\frac{10}{15}$"
      },
      {
        "key": "B",
        "content": "$\\frac{2}{10} = \\frac{3}{15}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2}{15} = \\frac{3}{10}$"
      },
      {
        "key": "D",
        "content": "$\\frac{15}{3} = \\frac{2}{10}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tỉ lệ thức đúng cần giữ nguyên tích chéo: $2 \\cdot 15 = 3 \\cdot 10$, tức là $\\frac{2}{3} = \\frac{10}{15}$.\n\nChọn A.",
    "socraticHint": "Tích ngoại tỉ phải bằng tích trung tỉ.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 128,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tính chất của dãy tỉ số bằng nhau",
    "content": "Tìm hai số $x, y$ biết $\\frac{x}{3} = \\frac{y}{5}$ và $x + y = 32$. Giá trị của $y$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "20",
    "acceptableAnswers": [
      "20"
    ],
    "detailedSolution": "Áp dụng tính chất dãy tỉ số bằng nhau:\n$$\\frac{x}{3} = \\frac{y}{5} = \\frac{x + y}{3 + 5} = \\frac{32}{8} = 4$$\nSuy ra $y = 5 \\cdot 4 = 20$.\n\nĐáp số: 20.",
    "socraticHint": "Tính hằng số tỉ lệ $k = \\frac{x+y}{3+5}$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 129,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tính chất của dãy tỉ số bằng nhau",
    "content": "Tìm $x$ biết $\\frac{x}{4} = \\frac{y}{7}$ và $y - x = 12$. Giá trị của $x$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "16",
    "acceptableAnswers": [
      "16"
    ],
    "detailedSolution": "Ta có:\n$$\\frac{x}{4} = \\frac{y}{7} = \\frac{y - x}{7 - 4} = \\frac{12}{3} = 4 \\implies x = 4 \\cdot 4 = 16$$\n\nĐáp số: 16.",
    "socraticHint": "Lấy tử trừ tử, mẫu trừ mẫu tương ứng.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 130,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "dai_luong_ti_le_thuan_nghich",
    "topicName": "Đại lượng tỉ lệ thuận",
    "content": "Nếu đại lượng $y$ tỉ lệ thuận với đại lượng $x$ theo hệ số tỉ lệ $k = -3$ thì $y$ liên hệ với $x$ theo công thức nào?",
    "options": [
      {
        "key": "A",
        "content": "$y = -\\frac{3}{x}$"
      },
      {
        "key": "B",
        "content": "$y = -3x$"
      },
      {
        "key": "C",
        "content": "$y = x - 3$"
      },
      {
        "key": "D",
        "content": "$x = -3y$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Theo định nghĩa hai đại lượng tỉ lệ thuận: $y = kx = -3x$.\n\nChọn B.",
    "socraticHint": "Công thức tỉ lệ thuận tổng quát là $y = kx$.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 131,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "dai_luong_ti_le_thuan_nghich",
    "topicName": "Đại lượng tỉ lệ thuận",
    "content": "Biết $5\\text{ m}$ dây điện nặng $125\\text{ g}$. Hỏi $12\\text{ m}$ dây điện cùng loại nặng bao nhiêu gam? (Điền số nguyên):",
    "correctAnswer": "300",
    "acceptableAnswers": [
      "300",
      "300g"
    ],
    "detailedSolution": "Khối lượng và chiều dài dây điện tỉ lệ thuận với nhau:\n$$m = 12 \\cdot \\frac{125}{5} = 12 \\cdot 25 = 300\\text{ g}$$\n\nĐáp số: 300.",
    "socraticHint": "Tính khối lượng của $1\\text{ m}$ trước.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 132,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "dai_luong_ti_le_thuan_nghich",
    "topicName": "Đại lượng tỉ lệ nghịch",
    "content": "Cho biết hai đại lượng $x$ và $y$ tỉ lệ nghịch với nhau. Khi $x = 4$ thì $y = 6$. Hệ số tỉ lệ $a$ là:",
    "options": [
      {
        "key": "A",
        "content": "$a = 24$"
      },
      {
        "key": "B",
        "content": "$a = 1{,}5$"
      },
      {
        "key": "C",
        "content": "$a = 10$"
      },
      {
        "key": "D",
        "content": "$a = 2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hệ số tỉ lệ của hai đại lượng tỉ lệ nghịch là tích $a = x \\cdot y = 4 \\cdot 6 = 24$.\n\nChọn A.",
    "socraticHint": "Tích $x \\cdot y = a$ không đổi.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 133,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "dai_luong_ti_le_thuan_nghich",
    "topicName": "Đại lượng tỉ lệ nghịch",
    "content": "Một đội gồm $6$ công nhân làm xong một công việc trong $10$ ngày. Với cùng năng suất đó, nếu muốn hoàn thành công việc trong $5$ ngày thì cần bao nhiêu công nhân? (Điền số nguyên):",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12",
      "12 công nhân",
      "12 người"
    ],
    "detailedSolution": "Số công nhân và số ngày hoàn thành công việc là hai đại lượng tỉ lệ nghịch:\n$$n \\cdot 5 = 6 \\cdot 10 \\implies n = \\frac{60}{5} = 12$$\n\nĐáp số: 12.",
    "socraticHint": "Thời gian giảm một nửa thì số người phải tăng gấp đôi.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 134,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tính chất của dãy tỉ số bằng nhau",
    "content": "Ba số $a, b, c$ tỉ lệ với các số $2; 3; 5$. Cách viết nào sau đây là chính xác?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a}{2} = \\frac{b}{3} = \\frac{c}{5}$"
      },
      {
        "key": "B",
        "content": "$2a = 3b = 5c$"
      },
      {
        "key": "C",
        "content": "$\\frac{2}{a} = \\frac{3}{b} = \\frac{c}{5}$"
      },
      {
        "key": "D",
        "content": "$a + 2 = b + 3 = c + 5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo định nghĩa, ba số $a, b, c$ tỉ lệ với $2; 3; 5$ được viết là $\\frac{a}{2} = \\frac{b}{3} = \\frac{c}{5}$.\n\nChọn A.",
    "socraticHint": "Tỉ số của từng số với các hệ số tương ứng bằng nhau.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 135,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tính chất của dãy tỉ số bằng nhau",
    "content": "Ba lớp 7A, 7B, 7C tham gia trồng cây được tất cả $180$ cây. Biết số cây trồng được tỉ lệ với $4; 5; 6$. Số cây lớp 7C trồng được là bao nhiêu cây? (Điền số nguyên):",
    "correctAnswer": "72",
    "acceptableAnswers": [
      "72",
      "72 cây"
    ],
    "detailedSolution": "Gọi số cây của 3 lớp lần lượt là $a, b, c$:\n$$\\frac{a}{4} = \\frac{b}{5} = \\frac{c}{6} = \\frac{a+b+c}{4+5+6} = \\frac{180}{15} = 12$$\nSố cây lớp 7C là: $c = 6 \\cdot 12 = 72$.\n\nĐáp số: 72.",
    "socraticHint": "Tính giá trị một phần: $180 / 15 = 12$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 136,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức",
    "content": "Tìm giá trị dương của $x$ thoả mãn: $\\frac{x}{3} = \\frac{12}{x}$. (Điền số nguyên):",
    "correctAnswer": "6",
    "acceptableAnswers": [
      "6"
    ],
    "detailedSolution": "Ta có $x^2 = 3 \\cdot 12 = 36 \\implies x = 6$ (do $x > 0$).\n\nĐáp số: 6.",
    "socraticHint": "Nhân chéo ta được $x^2 = 36$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 137,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "dai_luong_ti_le_thuan_nghich",
    "topicName": "Đại lượng tỉ lệ nghịch",
    "content": "Một ô tô chạy từ $A$ đến $B$ với vận tốc $v$ mất thời gian $t$. Mối quan hệ giữa vận tốc $v$ và thời gian $t$ trên cùng một quãng đường là:",
    "options": [
      {
        "key": "A",
        "content": "Tỉ lệ thuận"
      },
      {
        "key": "B",
        "content": "Tỉ lệ nghịch"
      },
      {
        "key": "C",
        "content": "Không có mối quan hệ"
      },
      {
        "key": "D",
        "content": "Bằng nhau"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Vì quãng đường $s = v \\cdot t$ không đổi, tích hai đại lượng bằng hằng số nên $v$ và $t$ tỉ lệ nghịch với nhau.\n\nChọn B.",
    "socraticHint": "Vận tốc càng tăng thì thời gian càng giảm.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 138,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tính chất của dãy tỉ số bằng nhau",
    "content": "Tìm $x$ biết: $\\frac{x}{2} = \\frac{y}{3} = \\frac{z}{5}$ và $x + 2y - z = 9$. Giá trị của $x$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "6",
    "acceptableAnswers": [
      "6"
    ],
    "detailedSolution": "Áp dụng tính chất dãy tỉ số bằng nhau:\n$$\\frac{x}{2} = \\frac{2y}{6} = \\frac{z}{5} = \\frac{x + 2y - z}{2 + 6 - 5} = \\frac{9}{3} = 3 \\implies x = 2 \\cdot 3 = 6$$\n\nĐáp số: 6.",
    "socraticHint": "Biến đổi phân số giữa thành $\\frac{2y}{6}$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 139,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức",
    "content": "Cho $\\frac{a}{b} = \\frac{c}{d}$ với $a, b, c, d \\ne 0$. Khẳng định nào sau đây là SAI?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a}{c} = \\frac{b}{d}$"
      },
      {
        "key": "B",
        "content": "$\\frac{d}{b} = \\frac{c}{a}$"
      },
      {
        "key": "C",
        "content": "$\\frac{b}{a} = \\frac{d}{c}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a}{d} = \\frac{c}{b}$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tỉ lệ thức $\\frac{a}{d} = \\frac{c}{b} \\implies a \\cdot b = c \\cdot d$, trái với giả thiết $a \\cdot d = b \\cdot c$.\n\nChọn D.",
    "socraticHint": "Tích chéo phải là $ad = bc$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 140,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "dai_luong_ti_le_thuan_nghich",
    "topicName": "Đại lượng tỉ lệ thuận",
    "content": "Để làm mứt dâu, công thức quy định khối lượng dâu tây và đường tỉ lệ thuận theo tỉ lệ $2 : 3$. Hỏi nếu dùng $6\\text{ kg}$ dâu tây thì cần bao nhiêu kg đường? (Điền số nguyên):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9kg"
    ],
    "detailedSolution": "Số kg đường cần là: $6 \\cdot \\frac{3}{2} = 9\\text{ kg}$.\n\nĐáp số: 9.",
    "socraticHint": "Khối lượng đường gấp 1,5 lần dâu tây.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 141,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức",
    "content": "Tìm $x$ biết: $\\frac{x - 1}{4} = \\frac{9}{x - 1}$ với $x > 1$. Giá trị của $x$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "detailedSolution": "Ta có $(x - 1)^2 = 36 \\implies x - 1 = 6$ (vì $x > 1$) $\\implies x = 7$.\n\nĐáp số: 7.",
    "socraticHint": "Khai căn hai vế của $(x - 1)^2 = 36$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 142,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "dai_luong_ti_le_thuan_nghich",
    "topicName": "Đại lượng tỉ lệ nghịch",
    "content": "Nếu $y$ tỉ lệ nghịch với $x$ theo hệ số tỉ lệ là $12$, khi $x = -4$ thì giá trị của $y$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$-3$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$-48$"
      },
      {
        "key": "D",
        "content": "$-8$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Công thức tỉ lệ nghịch: $y = \\frac{a}{x} = \\frac{12}{-4} = -3$.\n\nChọn A.",
    "socraticHint": "Lấy hệ số $a$ chia cho $x$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 143,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tính chất của dãy tỉ số bằng nhau",
    "content": "Chu vi một tam giác là $36\\text{ cm}$. Các cạnh của tam giác tỉ lệ với $3; 4; 5$. Độ dài cạnh lớn nhất là bao nhiêu cm? (Điền số nguyên):",
    "correctAnswer": "15",
    "acceptableAnswers": [
      "15",
      "15cm"
    ],
    "detailedSolution": "Gọi độ dài các cạnh là $a, b, c$:\n$$\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = \\frac{36}{12} = 3$$\nCạnh lớn nhất là $c = 5 \\cdot 3 = 15\\text{ cm}$.\n\nĐáp số: 15.",
    "socraticHint": "Cạnh lớn nhất ứng với tỉ số bằng 5.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 144,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức",
    "content": "Cho $\\frac{x}{y} = \\frac{2}{3}$. Giá trị của biểu thức $P = \\frac{x + y}{y}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{5}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{2}{5}$"
      },
      {
        "key": "C",
        "content": "$\\frac{3}{5}$"
      },
      {
        "key": "D",
        "content": "$\\frac{5}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $P = \\frac{x}{y} + 1 = \\frac{2}{3} + 1 = \\frac{5}{3}$.\n\nChọn A.",
    "socraticHint": "Tách phân số thành $\\frac{x}{y} + \\frac{y}{y}$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 145,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tính chất của dãy tỉ số bằng nhau",
    "content": "Số học sinh giỏi, khá, trung bình của khối 7 tỉ lệ với $3; 5; 2$. Biết số học sinh khá nhiều hơn số học sinh giỏi là $40$ em. Hỏi tổng số học sinh của khối 7 là bao nhiêu em? (Điền số nguyên):",
    "correctAnswer": "200",
    "acceptableAnswers": [
      "200",
      "200 em",
      "200 học sinh"
    ],
    "detailedSolution": "Gọi số học sinh là $g, k, t$:\n$$\\frac{g}{3} = \\frac{k}{5} = \\frac{t}{2} = \\frac{k - g}{5 - 3} = \\frac{40}{2} = 20$$\nTổng số học sinh khối 7 là: $20 \\cdot (3 + 5 + 2) = 200$.\n\nĐáp số: 200.",
    "socraticHint": "Hiệu số phần là $5 - 3 = 2$ phần tương ứng 40 học sinh.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  }
];
