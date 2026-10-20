import { Question } from '../../../../types/exam';

export const donDieuPart2Questions: Question[] = [
  {
    "id": 364,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{x + 5}{x + m}$ đồng biến trên khoảng $(-\\infty; -8)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(5; +\\infty)$"
      },
      {
        "key": "B",
        "content": "$(5; 8]$"
      },
      {
        "key": "C",
        "content": "$[5; 8)$"
      },
      {
        "key": "D",
        "content": "$(5; 8)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐạo hàm: $y' = \\frac{m - 5}{(x + m)^2}$.\n\nHàm số đồng biến trên $(-\\infty; -8)$ khi:\n$$\\begin{cases} m - 5 > 0 \\\\ -m \\notin (-\\infty; -8) \\end{cases} \\iff \\begin{cases} m > 5 \\\\ -m \\ge -8 \\end{cases} \\iff 5 < m \\le 8.$$\n\nVậy $m \\in (5; 8]$.\n\nChọn B.",
    "socraticHint": "Chú ý dấu tại mút: $-m \\notin (-\\infty; -8) \\iff -m \\ge -8 \\iff m \\le 8$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 365,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{x + 2}{x + m}$ đồng biến trên khoảng $(-\\infty; -5)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(2; 5]$"
      },
      {
        "key": "B",
        "content": "$[2; 5)$"
      },
      {
        "key": "C",
        "content": "$(2; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$(2; 5)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐạo hàm: $y' = \\frac{m - 2}{(x + m)^2}$.\n\nHàm số đồng biến trên $(-\\infty; -5)$ khi:\n$$\\begin{cases} m - 2 > 0 \\\\ -m \\notin (-\\infty; -5) \\end{cases} \\iff \\begin{cases} m > 2 \\\\ -m \\ge -5 \\end{cases} \\iff 2 < m \\le 5.$$\n\nVậy $m \\in (2; 5]$.\n\nChọn A.",
    "socraticHint": "Giải hệ điều kiện: $y' > 0$ và điểm gián đoạn không thuộc miền xét.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 366,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{x + 3}{x + m}$ đồng biến trên khoảng $(-\\infty; -6)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(3; 6]$"
      },
      {
        "key": "B",
        "content": "$(3; 6)$"
      },
      {
        "key": "C",
        "content": "$(3; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$[3; 6)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐạo hàm: $y' = \\frac{m - 3}{(x + m)^2}$.\n\nHàm số đồng biến trên $(-\\infty; -6)$ khi:\n$$\\begin{cases} m - 3 > 0 \\\\ -m \\ge -6 \\end{cases} \\iff \\begin{cases} m > 3 \\\\ m \\le 6 \\end{cases} \\iff 3 < m \\le 6.$$\n\nVậy $m \\in (3; 6]$.\n\nChọn A.",
    "socraticHint": "Tương tự, điều kiện là $m > 3$ và $m \\le 6$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 367,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{x + 1}{x + 3m}$ nghịch biến trên khoảng $(6; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$6$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "Vô số"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-3m\\}$.\nĐạo hàm: $y' = \\frac{3m - 1}{(x + 3m)^2}$.\n\nHàm số nghịch biến trên $(6; +\\infty)$ khi:\n$$\\begin{cases} 3m - 1 < 0 \\\\ -3m \\notin (6; +\\infty) \\end{cases} \\iff \\begin{cases} m < \\frac{1}{3} \\\\ -3m \\le 6 \\end{cases} \\iff \\begin{cases} m < \\frac{1}{3} \\\\ m \\ge -2 \\end{cases} \\iff -2 \\le m < \\frac{1}{3}.$$\n\nDo $m \\in \\mathbb{Z} \\implies m \\in \\{-2; -1; 0\\}$.\nVậy có đúng $3$ giá trị nguyên của $m$.\n\nChọn C.",
    "socraticHint": "Điểm gián đoạn $-3m \\le 6 \\iff m \\ge -2$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 368,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{x + 6}{x + 5m}$ nghịch biến trên khoảng $(10; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "Vô số"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-5m\\}$.\nĐạo hàm: $y' = \\frac{5m - 6}{(x + 5m)^2}$.\n\nHàm số nghịch biến trên $(10; +\\infty)$ khi:\n$$\\begin{cases} 5m - 6 < 0 \\\\ -5m \\le 10 \\end{cases} \\iff \\begin{cases} m < \\frac{6}{5} \\\\ m \\ge -2 \\end{cases} \\iff -2 \\le m < 1{,}2.$$\n\nDo $m \\in \\mathbb{Z} \\implies m \\in \\{-2; -1; 0; 1\\}$.\nVậy có tất cả $4$ giá trị nguyên thỏa mãn.\n\nChọn B.",
    "socraticHint": "$-2 \\le m < 1{,}2$ cho các số nguyên $-2, -1, 0, 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 369,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{mx - 1}{m - 4x}$ nghịch biến trên khoảng $\\left(-\\infty; \\frac{1}{4}\\right)$.",
    "options": [
      {
        "key": "A",
        "content": "$m > 2$"
      },
      {
        "key": "B",
        "content": "$1 \\le m < 2$"
      },
      {
        "key": "C",
        "content": "$-2 < m < 2$"
      },
      {
        "key": "D",
        "content": "$-2 \\le m \\le 2$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta viết lại hàm số: $y = \\frac{mx - 1}{-4x + m}$.\nTập xác định: $D = \\mathbb{R} \\setminus \\left\\{\\frac{m}{4}\\right\\}$.\nĐạo hàm: $y' = \\frac{m^2 - 4}{(-4x + m)^2}$.\n\nHàm số nghịch biến trên khoảng $\\left(-\\infty; \\frac{1}{4}\\right)$ khi:\n$$\\begin{cases} m^2 - 4 < 0 \\\\ \\frac{m}{4} \\notin \\left(-\\infty; \\frac{1}{4}\\right) \\end{cases} \\iff \\begin{cases} -2 < m < 2 \\\\ \\frac{m}{4} \\ge \\frac{1}{4} \\end{cases} \\iff \\begin{cases} -2 < m < 2 \\\\ m \\ge 1 \\end{cases} \\iff 1 \\le m < 2.$$\n\nChọn B.",
    "socraticHint": "Viết mẫu số dưới dạng $-4x + m$ để tính đạo hàm chính xác.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 370,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{mx - 2m + 3}{x + m}$ với $m$ là tham số. Gọi $S$ là tập hợp tất cả các giá trị nguyên của $m$ để hàm số nghịch biến trên khoảng $(2; +\\infty)$. Tìm số phần tử của $S$.",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐạo hàm: $y' = \\frac{m^2 - (-2m + 3)}{(x + m)^2} = \\frac{m^2 + 2m - 3}{(x + m)^2}$.\n\nHàm số nghịch biến trên khoảng $(2; +\\infty)$ khi:\n$$\\begin{cases} m^2 + 2m - 3 < 0 \\\\ -m \\le 2 \\end{cases} \\iff \\begin{cases} -3 < m < 1 \\\\ m \\ge -2 \\end{cases} \\iff -2 \\le m < 1.$$\n\nTập các giá trị nguyên của $m$ là $S = \\{-2; -1; 0\\}$.\nSố phần tử của tập hợp $S$ là $3$.\n\nChọn B.",
    "socraticHint": "Tập các giá trị nguyên gồm $\\{-2; -1; 0\\}$, có $3$ phần tử.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 371,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{x + 18}{x + 4m}$ nghịch biến trên khoảng $(2; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "Vô số"
      },
      {
        "key": "B",
        "content": "$0$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-4m\\}$.\nĐạo hàm: $y' = \\frac{4m - 18}{(x + 4m)^2}$.\n\nHàm số nghịch biến trên khoảng $(2; +\\infty)$ khi:\n$$\\begin{cases} 4m - 18 < 0 \\\\ -4m \\le 2 \\end{cases} \\iff \\begin{cases} m < 4{,}5 \\\\ m \\ge -0{,}5 \\end{cases} \\iff -0{,}5 \\le m < 4{,}5.$$\n\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{0; 1; 2; 3; 4\\}$.\nVậy có tất cả $5$ giá trị nguyên thỏa mãn.\n\nChọn D.",
    "socraticHint": "$-0{,}5 \\le m < 4{,}5$ cho các số nguyên: $0, 1, 2, 3, 4$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 372,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{mx + 9}{4x + m}$ nghịch biến trên khoảng $(0; 4)$?",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$11$"
      },
      {
        "key": "C",
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$7$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{-\\frac{m}{4}\\right\\}$.\nĐạo hàm: $y' = \\frac{m^2 - 36}{(4x + m)^2}$.\n\nHàm số nghịch biến trên khoảng $(0; 4)$ khi:\n$$\\begin{cases} m^2 - 36 < 0 \\\\ -\\frac{m}{4} \\notin (0; 4) \\end{cases} \\iff \\begin{cases} -6 < m < 6 \\\\ \\left[ \\begin{matrix} -\\frac{m}{4} \\le 0 \\\\ -\\frac{m}{4} \\ge 4 \\end{matrix} \\right. \\end{cases} \\iff \\begin{cases} -6 < m < 6 \\\\ \\left[ \\begin{matrix} m \\ge 0 \\\\ m \\le -16 \\end{matrix} \\right. \\end{cases} \\iff 0 \\le m < 6.$$\n\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{0; 1; 2; 3; 4; 5\\}$.\nVậy có $6$ giá trị nguyên của $m$.\n\nChọn C.",
    "socraticHint": "Điểm gián đoạn không thuộc $(0; 4) \\iff -m/4 \\le 0$ hoặc $-m/4 \\ge 4$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 373,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in (-2020; 2020)$ sao cho hàm số $y = \\frac{3x + 18}{x - m}$ nghịch biến trên khoảng $(-\\infty; -3)$?",
    "options": [
      {
        "key": "A",
        "content": "$2020$"
      },
      {
        "key": "B",
        "content": "$2026$"
      },
      {
        "key": "C",
        "content": "$2018$"
      },
      {
        "key": "D",
        "content": "$2023$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{m\\}$.\nĐạo hàm: $y' = \\frac{-3m - 18}{(x - m)^2}$.\n\nHàm số nghịch biến trên khoảng $(-\\infty; -3)$ khi:\n$$\\begin{cases} -3m - 18 < 0 \\\\ m \\notin (-\\infty; -3) \\end{cases} \\iff \\begin{cases} m > -6 \\\\ m \\ge -3 \\end{cases} \\iff m \\ge -3.$$\n\nKết hợp giả thiết $m \\in (-2020; 2020)$, ta được $-3 \\le m < 2020$.\nVì $m \\in \\mathbb{Z}$ nên $m \\in \\{-3; -2; \\dots; 2019\\}$.\nSố giá trị nguyên thỏa mãn là: $2019 - (-3) + 1 = 2023$.\n\nChọn D.",
    "socraticHint": "Số phần tử nguyên trong $[-3; 2019]$ là $2019 - (-3) + 1 = 2023$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 374,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{mx + 4}{x + m}$ nghịch biến trên khoảng $(0; +\\infty)$?",
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
        "content": "$5$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐạo hàm: $y' = \\frac{m^2 - 4}{(x + m)^2}$.\n\nHàm số nghịch biến trên khoảng $(0; +\\infty)$ khi:\n$$\\begin{cases} m^2 - 4 < 0 \\\\ -m \\le 0 \\end{cases} \\iff \\begin{cases} -2 < m < 2 \\\\ m \\ge 0 \\end{cases} \\iff 0 \\le m < 2.$$\n\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{0; 1\\}$.\nVậy có $2$ giá trị nguyên của tham số $m$.\n\nChọn B.",
    "socraticHint": "Hệ điều kiện: $m^2 - 4 < 0$ và $-m \\le 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 375,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (4 - m)x$ đồng biến trên khoảng $(2; +\\infty)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; 1]$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 4]$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; 1)$"
      },
      {
        "key": "D",
        "content": "$(-\\infty; 4)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x + 4 - m$.\n\nHàm số đồng biến trên $(2; +\\infty) \\iff y' \\ge 0, \\forall x \\in (2; +\\infty)$\n$$\\iff 3x^2 - 6x + 4 - m \\ge 0, \\forall x > 2 \\iff m \\le 3x^2 - 6x + 4, \\forall x > 2.$$\n\nXét hàm số $g(x) = 3x^2 - 6x + 4$ với $x > 2$.\n$g'(x) = 6x - 6 = 6(x - 1) > 0, \\forall x > 2$.\nDo đó hàm số $g(x)$ đồng biến trên $(2; +\\infty)$.\nSuy ra $\\min_{[2; +\\infty)} g(x) = g(2) = 3(4) - 6(2) + 4 = 4$.\nVậy điều kiện là: $m \\le 4$, tức là $m \\in (-\\infty; 4]$.\n\nChọn B.",
    "socraticHint": "Cô lập tham số $m$: $m \\le g(x), \\forall x > 2 \\iff m \\le \\min_{[2; +\\infty)} g(x)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 376,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tập hợp tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (5 - m)x$ đồng biến trên khoảng $(2; +\\infty)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; 2)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 5)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; 5]$"
      },
      {
        "key": "D",
        "content": "$(-\\infty; 2]$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x + 5 - m$.\n\nHàm số đồng biến trên $(2; +\\infty) \\iff y' \\ge 0, \\forall x \\in (2; +\\infty)$\n$$\\iff m \\le 3x^2 - 6x + 5, \\forall x > 2.$$\n\nHàm số $g(x) = 3x^2 - 6x + 5$ có $g'(x) = 6x - 6 > 0, \\forall x > 2$ nên đồng biến trên $(2; +\\infty)$.\nSuy ra $\\min_{[2; +\\infty)} g(x) = g(2) = 3(4) - 6(2) + 5 = 5$.\nDo đó $m \\le 5 \\iff m \\in (-\\infty; 5]$.\n\nChọn C.",
    "socraticHint": "Hàm số $g(x)$ đồng biến với $x \\ge 2$ nên đạt giá trị nhỏ nhất tại $x = 2$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 377,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (2 - m)x$ đồng biến trên khoảng $(2; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; -1]$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 2)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; -1)$"
      },
      {
        "key": "D",
        "content": "$(-\\infty; 2]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x + 2 - m$.\n\nHàm số đồng biến trên khoảng $(2; +\\infty) \\iff y' \\ge 0, \\forall x > 2$\n$$\\iff m \\le 3x^2 - 6x + 2, \\forall x > 2.$$\n\nXét hàm $g(x) = 3x^2 - 6x + 2$ với $x \\ge 2$.\n$g'(x) = 6x - 6 > 0, \\forall x > 2 \\implies g(x)$ đồng biến trên $[2; +\\infty)$.\nDo đó $\\min_{[2; +\\infty)} g(x) = g(2) = 3(4) - 6(2) + 2 = 2$.\nVậy $m \\le 2 \\iff m \\in (-\\infty; 2]$.\n\nChọn D.",
    "socraticHint": "Cô lập $m$ và tìm giá trị nhỏ nhất của $3x^2 - 6x + 2$ trên $[2; +\\infty)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 378,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3x^2 + (1 - m)x$ đồng biến trên khoảng $(2; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; -2)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 1)$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; -2]$"
      },
      {
        "key": "D",
        "content": "$(-\\infty; 1]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x + 1 - m$.\n\nHàm số đồng biến trên $(2; +\\infty) \\iff y' \\ge 0, \\forall x > 2$\n$$\\iff m \\le 3x^2 - 6x + 1, \\forall x > 2.$$\n\nXét hàm số $g(x) = 3x^2 - 6x + 1$ trên $[2; +\\infty)$.\n$g'(x) = 6x - 6 > 0, \\forall x > 2 \\implies g(x)$ đồng biến.\nSuy ra $\\min_{[2; +\\infty)} g(x) = g(2) = 3(4) - 6(2) + 1 = 1$.\nVậy $m \\le 1 \\iff m \\in (-\\infty; 1]$.\n\nChọn D.",
    "socraticHint": "Tại $x = 2$, $g(2) = 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 379,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = x^3 + 3x^2 - mx - 4$. Tập hợp tất cả các giá trị của tham số $m$ để hàm số đồng biến trên khoảng $(-\\infty; 0)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-1; 5)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; -3]$"
      },
      {
        "key": "C",
        "content": "$(-\\infty; -4]$"
      },
      {
        "key": "D",
        "content": "$(-1; +\\infty)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 + 6x - m$.\n\nHàm số đồng biến trên khoảng $(-\\infty; 0) \\iff y' \\ge 0, \\forall x < 0$\n$$\\iff m \\le 3x^2 + 6x, \\forall x < 0.$$\n\nXét hàm số $g(x) = 3x^2 + 6x$ trên $(-\\infty; 0]$.\n$g'(x) = 6x + 6 = 0 \\iff x = -1 \\in (-\\infty; 0)$.\nTa có $g(-1) = 3(1) - 6 = -3$, $g(0) = 0$, $\\lim_{x \\to -\\infty} g(x) = +\\infty$.\nBảng biến thiên cho thấy giá trị nhỏ nhất của $g(x)$ trên $(-\\infty; 0)$ là $g(-1) = -3$.\nVậy $m \\le -3 \\iff m \\in (-\\infty; -3]$.\n\nChọn B.",
    "socraticHint": "Đỉnh parabol $g(x) = 3x^2 + 6x$ tại $x = -1$, với giá trị cực tiểu là $-3$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 380,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 + 3x^2 - mx + 1$ đồng biến trên khoảng $(-\\infty; 0)$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\le 0$"
      },
      {
        "key": "B",
        "content": "$m \\ge -2$"
      },
      {
        "key": "C",
        "content": "$m \\le -3$"
      },
      {
        "key": "D",
        "content": "$m \\le -1$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 + 6x - m$.\n\nHàm số đồng biến trên $(-\\infty; 0) \\iff y' \\ge 0, \\forall x < 0$\n$$\\iff m \\le 3x^2 + 6x, \\forall x < 0.$$\n\nXét $g(x) = 3x^2 + 6x$ trên $(-\\infty; 0)$.\n$g'(x) = 6x + 6 = 0 \\iff x = -1$.\nTa có $g(-1) = 3(-1)^2 + 6(-1) = -3$.\nDo đó $\\min_{(-\\infty; 0)} g(x) = -3$.\nVậy điều kiện là $m \\le -3$.\n\nChọn C.",
    "socraticHint": "Cô lập $m$ và tìm giá trị nhỏ nhất của tam thức bậc hai trên $(-\\infty; 0)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 381,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - mx^2 - (m - 6)x + 1$ đồng biến trên khoảng $(0; 4)$.",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; 3)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 3]$"
      },
      {
        "key": "C",
        "content": "$[3; 6]$"
      },
      {
        "key": "D",
        "content": "$(-\\infty; 6]$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 2mx - (m - 6) = 3x^2 + 6 - m(2x + 1)$.\n\nHàm số đồng biến trên khoảng $(0; 4) \\iff y' \\ge 0, \\forall x \\in (0; 4)$\n$$\\iff 3x^2 + 6 \\ge m(2x + 1), \\forall x \\in (0; 4).$$\n\nVì $x \\in (0; 4) \\implies 2x + 1 > 0$, ta có:\n$$m \\le \\frac{3x^2 + 6}{2x + 1} = g(x), \\forall x \\in (0; 4).$$\n\nXét hàm số $g(x) = \\frac{3x^2 + 6}{2x + 1}$ trên $(0; 4)$:\n$$g'(x) = \\frac{6x(2x + 1) - 2(3x^2 + 6)}{(2x + 1)^2} = \\frac{6x^2 + 6x - 12}{(2x + 1)^2} = \\frac{6(x - 1)(x + 2)}{(2x + 1)^2}.$$\n\nVới $x \\in (0; 4)$, $g'(x) = 0 \\iff x = 1$.\nTa có $g(1) = \\frac{3(1) + 6}{2(1) + 1} = 3$.\nBảng biến thiên: $g(x)$ giảm từ $g(0) = 6$ xuống $g(1) = 3$, sau đó tăng lên $g(4) = \\frac{54}{9} = 6$.\nDo đó $\\min_{(0; 4)} g(x) = g(1) = 3$.\nVậy $m \\le 3 \\iff m \\in (-\\infty; 3]$.\n\nChọn B.",
    "socraticHint": "Cô lập $m$ về một vế: $m \\le \\frac{3x^2 + 6}{2x + 1}$ rồi khảo sát hàm số.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 382,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 6x^2 + mx + 1$ đồng biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\ge 12$"
      },
      {
        "key": "B",
        "content": "$m \\le 12$"
      },
      {
        "key": "C",
        "content": "$m \\ge 0$"
      },
      {
        "key": "D",
        "content": "$m \\le 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 12x + m$.\n\nHàm số đồng biến trên $(0; +\\infty) \\iff y' \\ge 0, \\forall x > 0$\n$$\\iff m \\ge 12x - 3x^2, \\forall x > 0 \\iff m \\ge \\max_{(0; +\\infty)} (12x - 3x^2).$$\n\nXét hàm số $g(x) = 12x - 3x^2$ trên $(0; +\\infty)$:\nParabol có đỉnh tại $x = -\\frac{b}{2a} = -\\frac{12}{2(-3)} = 2 > 0$.\nGiá trị lớn nhất là: $g(2) = 12(2) - 3(2^2) = 24 - 12 = 12$.\nDo đó $m \\ge 12$.\n\nChọn A.",
    "socraticHint": "Cô lập $m \\ge 12x - 3x^2$ và tìm giá trị lớn nhất tại đỉnh parabol.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 383,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = -x^3 + 3x^2 + 3mx + m - 1$ nghịch biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\le -1$"
      },
      {
        "key": "B",
        "content": "$m \\le 1$"
      },
      {
        "key": "C",
        "content": "$m < 1$"
      },
      {
        "key": "D",
        "content": "$m > -1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = -3x^2 + 6x + 3m = 3(-x^2 + 2x + m)$.\n\nHàm số nghịch biến trên khoảng $(0; +\\infty) \\iff y' \\le 0, \\forall x \\in [0; +\\infty)$\n$$\\iff -x^2 + 2x + m \\le 0, \\forall x \\ge 0 \\iff m \\le x^2 - 2x, \\forall x \\ge 0.$$\n\nXét hàm số $f(x) = x^2 - 2x$ với $x \\ge 0$:\nĐỉnh parabol tại $x = 1 \\in [0; +\\infty)$ có giá trị cực tiểu là $f(1) = 1^2 - 2(1) = -1$.\nDo đó $\\min_{[0; +\\infty)} f(x) = f(1) = -1$.\nVậy $m \\le -1$.\n\nChọn A.",
    "socraticHint": "Cô lập $m$: $m \\le x^2 - 2x$ với mọi $x \\ge 0$, tìm giá trị nhỏ nhất của parabol.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 384,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên dương của tham số $m$ để hàm số $y = x^3 - 3(2m + 1)x^2 + (12m + 5)x + 2$ đồng biến trên khoảng $(2; +\\infty)$?",
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
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6(2m + 1)x + 12m + 5$.\n\nHàm số đồng biến trên khoảng $(2; +\\infty) \\iff y' \\ge 0, \\forall x > 2$\n$$\\iff 3x^2 - 6x + 5 \\ge 12m(x - 1), \\forall x > 2.$$\n\nVì $x > 2 \\implies x - 1 > 0$, chia cả hai vế cho $12(x - 1)$:\n$$m \\le \\frac{3x^2 - 6x + 5}{12(x - 1)} = g(x), \\forall x > 2.$$\n\nXét hàm số $g(x) = \\frac{3x^2 - 6x + 5}{12(x - 1)}$ với $x > 2$:\n$$g'(x) = \\frac{(6x - 6) \\cdot 12(x - 1) - 12(3x^2 - 6x + 5)}{144(x - 1)^2} = \\frac{6(x - 1)^2 - (3x^2 - 6x + 5)}{12(x - 1)^2} = \\frac{3x^2 - 6x + 1}{12(x - 1)^2}.$$\n\nVới $x > 2$, ta có $3x^2 - 6x + 1 > 3(4) - 6(2) + 1 = 1 > 0$, nên $g'(x) > 0$.\nDo đó hàm số $g(x)$ đồng biến trên khoảng $(2; +\\infty)$.\nSuy ra $\\min_{(2; +\\infty)} g(x) = g(2) = \\frac{3(4) - 6(2) + 5}{12(1)} = \\frac{5}{12}$.\nĐiều kiện là: $m \\le \\frac{5}{12}$.\n\nVì $m$ là số nguyên dương ($m \\in \\mathbb{Z}^+$) nên không tồn tại giá trị nào của $m$ thỏa mãn.\nVậy có $0$ giá trị nguyên dương.\n\nChọn D.",
    "socraticHint": "Chia cho $x - 1 > 0$, tìm giá trị nhỏ nhất của $g(x)$ trên $(2; +\\infty)$, suy ra $m \\le 5/12$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 385,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu số nguyên $m$ để hàm số $f(x) = \\frac{1}{3}x^3 - mx^2 + (m + 6)x + \\frac{1}{3}$ đồng biến trên khoảng $(0; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$9$"
      },
      {
        "key": "B",
        "content": "$10$"
      },
      {
        "key": "C",
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có: $f'(x) = x^2 - 2mx + (m + 6)$.\nHàm số $f(x)$ đồng biến trên $(0; +\\infty) \\iff f'(x) \\ge 0, \\forall x \\in (0; +\\infty)$.\nXét $\\Delta' = m^2 - (m + 6) = m^2 - m - 6 = (m - 3)(m + 2)$.\n- Trường hợp 1: $\\Delta' \\le 0 \\iff -2 \\le m \\le 3$. Khi đó $f'(x) \\ge 0, \\forall x \\in \\mathbb{R}$, thỏa mãn bài toán.\n- Trường hợp 2: $\\Delta' > 0 \\iff m < -2$ hoặc $m > 3$. Khi đó $f'(x) = 0$ có hai nghiệm phân biệt $x_1 < x_2$. Để $f'(x) \\ge 0, \\forall x > 0$ thì hai nghiệm phải thỏa mãn $x_1 < x_2 \\le 0$:\n$$\\begin{cases} x_1 + x_2 < 0 \\\\ x_1 x_2 \\ge 0 \\end{cases} \\iff \\begin{cases} 2m < 0 \\\\ m + 6 \\ge 0 \\end{cases} \\iff -6 \\le m < 0$$\nKết hợp với $m < -2$ ta được $-6 \\le m < -2$.\nKết hợp cả hai trường hợp: $-6 \\le m \\le 3$.\nVì $m \\in \\mathbb{Z}$ nên $m \\in \\{-6; -5; -4; -3; -2; -1; 0; 1; 2; 3\\}$, có 10 giá trị nguyên thỏa mãn.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 386,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{1}{3}x^3 - (m - 1)x^2 + 3(m - 1)x + 1$. Số các giá trị nguyên của $m$ để hàm số đồng biến trên khoảng $(1; +\\infty)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$7$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$6$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Ta có: $y' = x^2 - 2(m - 1)x + 3(m - 1)$.\nHàm số đồng biến trên $(1; +\\infty) \\iff y' \\ge 0, \\forall x \\in (1; +\\infty)$.\nXét $\\Delta' = (m - 1)^2 - 3(m - 1) = m^2 - 5m + 4$.\n- Trường hợp 1: $\\Delta' \\le 0 \\iff m^2 - 5m + 4 \\le 0 \\iff 1 \\le m \\le 4$.\nKhi đó $y' \\ge 0, \\forall x \\in \\mathbb{R}$, thỏa mãn điều kiện. Ta có 4 giá trị nguyên $m \\in \\{1; 2; 3; 4\\}$.\n- Trường hợp 2: $\\Delta' > 0 \\iff m < 1$ hoặc $m > 4$.\nĐể $y' \\ge 0, \\forall x \\in (1; +\\infty)$ thì phương trình $y' = 0$ có hai nghiệm phân biệt thỏa mãn $x_1 < x_2 \\le 1$:\n$$\\begin{cases} (x_1 - 1) + (x_2 - 1) < 0 \\\\ (x_1 - 1)(x_2 - 1) \\ge 0 \\end{cases} \\iff \\begin{cases} 2(m - 1) - 2 < 0 \\\\ 3(m - 1) - 2(m - 1) + 1 \\ge 0 \\end{cases} \\iff \\begin{cases} m < 2 \\\\ m \\ge 0 \\end{cases} \\iff 0 \\le m < 2$$\nKết hợp với điều kiện $m < 1$ ta được $0 \\le m < 1$. Do $m \\in \\mathbb{Z}$ nên $m = 0$ (1 giá trị nguyên).\nVậy tổng cộng có $4 + 1 = 5$ giá trị nguyên của $m$ thỏa mãn.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 387,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in (-2020; 2020)$ để hàm số $y = x^3 - 3x^2 - mx + 2019$ đồng biến trên khoảng $(0; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$2018$"
      },
      {
        "key": "B",
        "content": "$2019$"
      },
      {
        "key": "C",
        "content": "$2020$"
      },
      {
        "key": "D",
        "content": "$2017$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x - m$.\n\nHàm số đồng biến trên khoảng $(0; +\\infty) \\iff y' \\ge 0, \\forall x \\in (0; +\\infty)$\n$$\\iff 3x^2 - 6x - m \\ge 0, \\forall x > 0 \\iff m \\le 3x^2 - 6x, \\forall x > 0.$$\n\nXét hàm số $f(x) = 3x^2 - 6x$ trên $(0; +\\infty)$.\n$f'(x) = 6x - 6 = 0 \\iff x = 1 \\in (0; +\\infty)$.\nTa có $\\min_{(0; +\\infty)} f(x) = f(1) = 3(1) - 6(1) = -3$.\nDo đó điều kiện là: $m \\le -3$.\n\nKết hợp với giả thiết $m \\in (-2020; 2020)$, ta được:\n$$-2020 < m \\le -3 \\implies m \\in \\{-2019; -2018; \\dots; -3\\}.$$\nSố giá trị nguyên của $m$ thỏa mãn là: $-3 - (-2019) + 1 = 2017$.\n\nChọn D.",
    "socraticHint": "Cô lập $m \\le 3x^2 - 6x$ và tìm giá trị nhỏ nhất của tam thức trên $(0; +\\infty)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  }
];
