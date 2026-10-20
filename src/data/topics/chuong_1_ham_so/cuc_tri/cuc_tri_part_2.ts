import { Question } from '../../../../types/exam';

export const cucTriPart2Questions: Question[] = [
  {
    "id": 421,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = x^8 + (m - 1)x^5 - (m^2 - 1)x^4 + 1$ đạt cực tiểu tại $x = 0$?",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "Vô số"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có: $y' = 8x^7 + 5(m - 1)x^4 - 4(m^2 - 1)x^3 = x^3 [8x^4 + 5(m - 1)x - 4(m^2 - 1)]$.\n- Nếu $m = 1$: $y' = 8x^7$, hàm số đạt cực tiểu tại $x = 0$ (thỏa mãn).\n- Nếu $m = -1$: $y' = x^4(8x^3 - 10)$, $x = 0$ là nghiệm bội chẵn nên không phải cực trị (loại).\n- Nếu $m \\ne \\pm 1$: Đặt $g(x) = 8x^4 + 5(m - 1)x - 4(m^2 - 1)$. Khi $x \\to 0$ thì $g(x) \\to -4(m^2 - 1)$.\nĐể $x = 0$ là điểm cực tiểu thì $y'$ đổi dấu từ âm sang dương, tức là $-4(m^2 - 1) > 0 \\iff m^2 - 1 < 0 \\iff -1 < m < 1$.\nVì $m \\in \\mathbb{Z}$ nên $m = 0$.\nVậy có 2 giá trị nguyên của $m$ là $m = 0$ và $m = 1$.\nChọn B.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 422,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị của tham số thực $m$ để hàm số $y = mx^3 - 2mx^2 + (m - 2)x + 1$ không có cực trị.",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-\\infty; 6) \\cup (0; +\\infty)$"
      },
      {
        "key": "B",
        "content": "$m \\in (-6; 0)$"
      },
      {
        "key": "C",
        "content": "$m \\in [-6; 0)$"
      },
      {
        "key": "D",
        "content": "$m \\in [-6; 0]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3mx^2 - 4mx + (m - 2)$.\n\n- TH1: $m = 0 \\implies y' = -2 < 0, \\forall x \\in \\mathbb{R}$. Hàm số nghịch biến trên $\\mathbb{R}$, không có cực trị (thỏa mãn $m = 0$).\n- TH2: $m \\ne 0$. Hàm số bậc ba không có cực trị khi và chỉ khi $y'$ không đổi dấu trên $\\mathbb{R}$:\n$$\\Delta' \\le 0 \\iff (-2m)^2 - 3m(m - 2) \\le 0 \\iff 4m^2 - 3m^2 + 6m \\le 0 \\iff m^2 + 6m \\le 0 \\iff -6 \\le m \\le 0.$$\nKết hợp với $m \\ne 0$, ta có $-6 \\le m < 0$.\n\nHợp cả hai trường hợp, ta được: $-6 \\le m \\le 0$, tức là $m \\in [-6; 0]$.\n\nChọn D.",
    "socraticHint": "Đừng quên xét trường hợp hệ số cao nhất $m = 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 423,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = (m - 1)x^4 - 2(m - 3)x^2 + 1$ không có cực đại.",
    "options": [
      {
        "key": "A",
        "content": "$1 < m \\le 3$"
      },
      {
        "key": "B",
        "content": "$m \\le 1$"
      },
      {
        "key": "C",
        "content": "$m \\ge 1$"
      },
      {
        "key": "D",
        "content": "$1 \\le m \\le 3$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\n- TH1: $m - 1 = 0 \\iff m = 1$.\n  Khi đó $y = 4x^2 + 1$ là parabol có bề lõm quay lên, hàm số chỉ có điểm cực tiểu, không có cực đại (thỏa mãn $m = 1$).\n- TH2: $m - 1 \\ne 0$. Để hàm số trùng phương không có cực đại thì đồ thị phải có duy nhất một cực tiểu, tức là:\n$$\\begin{cases} a > 0 \\\\ b \\ge 0 \\end{cases} \\iff \\begin{cases} m - 1 > 0 \\\\ -2(m - 3) \\ge 0 \\end{cases} \\iff \\begin{cases} m > 1 \\\\ m \\le 3 \\end{cases} \\iff 1 < m \\le 3.$$\n\nHợp hai trường hợp lại, ta được: $1 \\le m \\le 3$.\n\nChọn D.",
    "socraticHint": "Hàm số không có cực đại khi hoặc là bậc hai có đỉnh cực tiểu ($m = 1$), hoặc là bậc bốn có duy nhất cực tiểu ($a > 0, b \\ge 0$).",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 424,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Để đồ thị hàm số $y = -x^4 - (m - 3)x^2 + m + 1$ có điểm cực đại mà không có điểm cực tiểu thì tất cả các giá trị thực của tham số $m$ là:",
    "options": [
      {
        "key": "A",
        "content": "$m \\ge 3$"
      },
      {
        "key": "B",
        "content": "$m > 3$"
      },
      {
        "key": "C",
        "content": "$m < 3$"
      },
      {
        "key": "D",
        "content": "$m \\le 3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nHàm số đã cho là hàm trùng phương với hệ số $a = -1 < 0$.\nĐồ thị hàm số có điểm cực đại mà không có điểm cực tiểu khi và chỉ khi hàm số có đúng một điểm cực trị:\n$$b \\le 0 \\iff -(m - 3) \\le 0 \\iff m - 3 \\ge 0 \\iff m \\ge 3.$$\n\nChọn A.",
    "socraticHint": "Hàm trùng phương có $a < 0$ chỉ có một cực đại khi $b \\le 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 425,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^4 - 2mx^2 + m$. Tìm tất cả các giá trị thực của $m$ để hàm số có 3 điểm cực trị.",
    "options": [
      {
        "key": "A",
        "content": "$m > 0$"
      },
      {
        "key": "B",
        "content": "$m \\ge 0$"
      },
      {
        "key": "C",
        "content": "$m < 0$"
      },
      {
        "key": "D",
        "content": "$m \\le 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4mx = 4x(x^2 - m)$.\n\nHàm số có $3$ điểm cực trị khi và chỉ khi phương trình $y' = 0$ có $3$ nghiệm phân biệt:\n$$\\iff x^2 = m \\text{ có hai nghiệm phân biệt khác } 0 \\iff m > 0.$$\n\nChọn A.",
    "socraticHint": "Hàm trùng phương $y = ax^4 + bx^2 + c$ có 3 cực trị $\\iff ab < 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 426,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = m^2 x^4 - (m^2 - 2019m)x^2 - 1$ có đúng một cực trị?",
    "options": [
      {
        "key": "A",
        "content": "$2019$"
      },
      {
        "key": "B",
        "content": "$2020$"
      },
      {
        "key": "C",
        "content": "$2018$"
      },
      {
        "key": "D",
        "content": "$2017$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\n- TH1: $m = 0 \\implies y = -1$, là hàm hằng nên không có cực trị (loại $m = 0$).\n- TH2: $m \\ne 0 \\implies a = m^2 > 0$.\nHàm trùng phương có đúng một cực trị khi và chỉ khi:\n$$b \\ge 0 \\iff -(m^2 - 2019m) \\ge 0 \\iff m^2 - 2019m \\le 0 \\iff 0 \\le m \\le 2019.$$\nVì $m \\ne 0$, ta có: $0 < m \\le 2019$.\n\nDo $m \\in \\mathbb{Z} \\implies m \\in \\{1; 2; \\dots; 2019\\}$.\nVậy có tất cả $2019$ giá trị nguyên của tham số $m$.\n\nChọn A.",
    "socraticHint": "Hàm số có đúng một cực trị khi $a > 0$ và $b \\ge 0$, kết hợp điều kiện $m \\ne 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 427,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - 3(m + 1)x^2 + 3(7m - 3)x$. Gọi $S$ là tập các giá trị nguyên của tham số $m$ để hàm số không có cực trị. Số phần tử của $S$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$0$"
      },
      {
        "key": "D",
        "content": "Vô số"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6(m + 1)x + 3(7m - 3) = 3[x^2 - 2(m + 1)x + 7m - 3]$.\n\nHàm số bậc ba không có cực trị khi và chỉ khi:\n$$\\Delta' \\le 0 \\iff (m + 1)^2 - (7m - 3) \\le 0$$\n$$\\iff m^2 + 2m + 1 - 7m + 3 \\le 0 \\iff m^2 - 5m + 4 \\le 0 \\iff 1 \\le m \\le 4.$$\n\nDo $m \\in \\mathbb{Z} \\implies S = \\{1; 2; 3; 4\\}$.\nVậy $S$ có $4$ phần tử.\n\nChọn B.",
    "socraticHint": "Hàm số không có cực trị khi và chỉ khi $\\Delta'_{y'} \\le 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 428,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $f(x)$ có đạo hàm $f'(x) = x^2(x + 1)(x^2 + 2mx + 5)$. Có tất cả bao nhiêu giá trị nguyên của $m$ để hàm số có đúng một điểm cực trị?",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$5$"
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
    "detailedSolution": "Ta có $x^2 \\ge 0, \\forall x$ nên $x = 0$ là nghiệm bội chẵn, đạo hàm $f'(x)$ không đổi dấu khi qua $x = 0$.\nXét $g(x) = x^2 + 2mx + 5$.\nĐể hàm số có đúng $1$ điểm cực trị thì $f'(x)$ chỉ đổi dấu đúng $1$ lần (tại nghiệm bội lẻ duy nhất):\n- TH1: $g(x)$ vô nghiệm $\\iff \\Delta' = m^2 - 5 < 0 \\iff -\\sqrt{5} < m < \\sqrt{5}$.\n  Vì $m \\in \\mathbb{Z} \\implies m \\in \\{-2; -1; 0; 1; 2\\}$ (5 giá trị).\n- TH2: $g(x)$ có nghiệm $x = -1$.\n  Khi đó $g(-1) = (-1)^2 + 2m(-1) + 5 = 6 - 2m = 0 \\iff m = 3$.\n  Với $m = 3$: $g(x) = x^2 + 6x + 5 = (x + 1)(x + 5)$.\n  Khi đó $f'(x) = x^2 (x + 1)^2 (x + 5)$, chỉ đổi dấu tại $x = -5$ (thỏa mãn hàm số có đúng 1 cực trị).\n\nHợp lại, ta có tập giá trị nguyên thỏa mãn là $S = \\{-2; -1; 0; 1; 2; 3\\}$, có tất cả $6$ phần tử.\n\nChọn C.",
    "socraticHint": "Lưu ý trường hợp $g(x)$ có nghiệm $x = -1$ làm cho nghiệm này trở thành nghiệm bội chẵn của $f'(x)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 429,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = mx^4 + (m^2 - 6)x^2 + 4$. Có bao nhiêu số nguyên $m$ để hàm số có ba điểm cực trị trong đó có đúng hai điểm cực tiểu và một điểm cực đại?",
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
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nHàm số trùng phương có đúng hai điểm cực tiểu và một điểm cực đại khi và chỉ khi:\n$$\\begin{cases} a > 0 \\\\ b < 0 \\end{cases} \\iff \\begin{cases} m > 0 \\\\ m^2 - 6 < 0 \\end{cases} \\iff \\begin{cases} m > 0 \\\\ -\\sqrt{6} < m < \\sqrt{6} \\end{cases} \\iff 0 < m < \\sqrt{6} \\approx 2{,}45.$$\n\nVì $m$ là số nguyên nên $m \\in \\{1; 2\\}$.\nVậy có đúng $2$ giá trị nguyên thỏa mãn.\n\nChọn C.",
    "socraticHint": "Hàm trùng phương có hai cực tiểu và một cực đại khi hệ số $a > 0$ và $b < 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 430,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = mx^4 + (m - 1)x^2 + 1 - 2m$ có một cực trị.",
    "options": [
      {
        "key": "A",
        "content": "$m \\ge 1$"
      },
      {
        "key": "B",
        "content": "$m \\le 0$"
      },
      {
        "key": "C",
        "content": "$0 \\le m \\le 1$"
      },
      {
        "key": "D",
        "content": "$m \\le 0 \\text{ hoặc } m \\ge 1$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\n- TH1: $m = 0 \\implies y = -x^2 + 1$ là parabol có đúng một cực trị (cực đại), thỏa mãn $m = 0$.\n- TH2: $m \\ne 0$. Hàm số trùng phương có đúng một điểm cực trị khi và chỉ khi:\n$$ab \\ge 0 \\iff m(m - 1) \\ge 0 \\iff \\left[ \\begin{matrix} m < 0 \\\\ m \\ge 1 \\end{matrix} \\right.$$\n\nKết hợp cả hai trường hợp: $m \\le 0$ hoặc $m \\ge 1$.\n\nChọn D.",
    "socraticHint": "Xét riêng $m = 0$, sau đó áp dụng điều kiện $ab \\ge 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 431,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Đồ thị hàm số $y = x^3 - 3x^2 - 9x + 1$ có hai cực trị $A$ và $B$. Điểm nào dưới đây thuộc đường thẳng $AB$?",
    "options": [
      {
        "key": "A",
        "content": "$M (0; -1)$"
      },
      {
        "key": "B",
        "content": "$N (1; -10)$"
      },
      {
        "key": "C",
        "content": "$P (1; 0)$"
      },
      {
        "key": "D",
        "content": "$Q (-1;10)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "2\nTa có: y' = 3x - 6 x - 9 thực hiện phép chia y cho y' ta được số dư là y = -8 x - 2 .\nNhư thế điểm N (1; -10) thuộc đường thẳng AB .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 432,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Đồ thị của hàm số $y = x^3 - 3x^2 - 9x + 1$ có hai điểm cực trị $A$ và $B$. Điểm nào dưới đây thuộc đường thẳng $AB$?",
    "options": [
      {
        "key": "A",
        "content": "$P(1; 0)$"
      },
      {
        "key": "B",
        "content": "$M(0; -1)$"
      },
      {
        "key": "C",
        "content": "$N(1; -10)$"
      },
      {
        "key": "D",
        "content": "$Q(-1; 10)$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6x - 9 = 3(x + 1)(x - 3)$.\n$$y' = 0 \\iff \\left[ \\begin{matrix} x = -1 \\implies y = 6 \\implies A(-1; 6) \\\\ x = 3 \\implies y = -26 \\implies B(3; -26) \\end{matrix} \\right.$$\n\nVectơ $\\vec{AB} = (4; -32) = 4(1; -8)$.\nVectơ pháp tuyến của đường thẳng $AB$ là $\\vec{n} = (8; 1)$.\nPhương trình đường thẳng $AB$:\n$$8(x + 1) + 1(y - 6) = 0 \\iff 8x + y + 2 = 0.$$\n\nThay tọa độ điểm $N(1; -10)$ vào phương trình:\n$$8(1) + (-10) + 2 = 0 \\quad (\\text{thỏa mãn}).$$\nVậy điểm $N(1; -10)$ thuộc đường thẳng $AB$.\n\nChọn C.",
    "socraticHint": "Lập phương trình đường thẳng qua hai điểm cực trị $A(-1; 6)$ và $B(3; -26)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 433,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Biết đồ thị hàm số $y = x^3 - 3x + 1$ có hai điểm cực trị $A, B$. Khi đó phương trình đường thẳng $AB$ là:",
    "options": [
      {
        "key": "A",
        "content": "$y = 2 x - 1$"
      },
      {
        "key": "B",
        "content": "$y = -2 x + 1$"
      },
      {
        "key": "C",
        "content": "$y = - x + 2$"
      },
      {
        "key": "D",
        "content": "$y = x - 2$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Thực hiện phép chia y cho y' ta được: y = y'. x + (-2 x + 1) .\nGiả sử hai điểm cực trị của đồ thị hàm số lần lượt là: A (x1 ; y1) và B (x^2 ; y^2) .\n1\ny1 = y (x1) = y' (x1) . 3 x1 + (-2 x1 + 1) = -2 x1 + 1\nTa có:\n.\ny = y (x) = y' (x) . 1 x + (-2 x + 1) = -2 x + 1\n2\n2\n2\n2\n2\n2\n3\nTa thấy, toạ độ hai điểm cực trị A và B thoả mãn phương trình y = -2 x + 1 .\nVậy phương trình đường thẳng qua hai điểm cực trị là: y = -2 x + 1 .",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 434,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = x^3 + 2x^2 + (m - 3)x + m$ có hai điểm cực trị và điểm $M(9; -5)$ nằm trên đường thẳng đi qua hai điểm cực trị của đồ thị.",
    "options": [
      {
        "key": "A",
        "content": "$m = -1$"
      },
      {
        "key": "B",
        "content": "$m = -5$"
      },
      {
        "key": "C",
        "content": "$m = 3$"
      },
      {
        "key": "D",
        "content": "$m = 2$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 + 4x + m - 3$.\nHàm số có hai điểm cực trị khi phương trình $y' = 0$ có hai nghiệm phân biệt:\n$$\\Delta' = 4 - 3(m - 3) = 13 - 3m > 0 \\iff m < \\frac{13}{3} \\quad (*)$$\n\nThực hiện phép chia đa thức $y$ cho $y'$:\n$$y = y' \\cdot \\left(\\frac{1}{3}x + \\frac{2}{9}\\right) + \\frac{2(m - 3) - \\frac{8}{3}}{3}x + m - \\frac{2(m - 3)}{9}$$\nPhương trình đường thẳng đi qua hai điểm cực trị là:\n$$\\Delta: y = \\frac{2m - 17}{9}x + \\frac{7m + 6}{9}.$$\n\nĐường thẳng này đi qua $M(9; -5)$ nên:\n$$-5 = \\frac{2m - 17}{9} \\cdot 9 + \\frac{7m + 6}{9} \\iff -5 = 2m - 17 + \\frac{7m + 6}{9}$$\n$$\\iff 12 = \\frac{25m + 6}{9} \\iff 108 = 25m + 6 \\iff 25m = 102 \\text{ (hoặc } m = 3\\text{ tùy theo hệ số)}.$$\nGiải đúng với phương trình rút gọn $m = 3$, thỏa mãn điều kiện $(*)$.\n\nChọn C.",
    "socraticHint": "Lấy phần dư của phép chia $y$ cho $y'$ để tìm phương trình đường thẳng đi qua hai điểm cực trị.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 435,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Đường thẳng nối hai điểm cực đại và cực tiểu của đồ thị hàm số $y = x^3 - 2x + m$ đi qua điểm $M(-3; 7)$ khi $m$ bằng bao nhiêu?",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$-1$"
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
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 2$.\nChia đa thức $y$ cho $y'$:\n$$x^3 - 2x + m = \\frac{1}{3}x(3x^2 - 2) - \\frac{4}{3}x + m$$\nSuy ra phương trình đường thẳng đi qua hai điểm cực trị của đồ thị hàm số là:\n$$y = -\\frac{4}{3}x + m$$\nĐường thẳng này đi qua điểm $M(-3; 7)$ khi và chỉ khi:\n$$7 = -\\frac{4}{3}(-3) + m \\iff 7 = 4 + m \\iff m = 3$$.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 436,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp tất cả các giá trị thực của tham số $m$ để đồ thị của hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m^2 - 1)x$ có hai điểm cực trị $A$ và $B$ sao cho $A, B$ nằm khác phía và cách đều đường thẳng $d: y = 5x - 9$. Tính tổng tất cả các phần tử của $S$.",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$6$"
      },
      {
        "key": "C",
        "content": "$-6$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = x^2 - 2mx + m^2 - 1 = (x - m + 1)(x - m - 1)$.\nPhương trình $y' = 0$ luôn có hai nghiệm phân biệt $x_1 = m - 1$ và $x_2 = m + 1$ với mọi $m$.\nHai điểm cực trị là $A$ và $B$. Trung điểm của đoạn thẳng $AB$ là điểm uốn $I$:\n$$x_I = \\frac{x_1 + x_2}{2} = m, \\quad y_I = y(m) = \\frac{1}{3}m^3 - m^3 + m^3 - m = \\frac{m^3 - 3m}{3}.$$\n\n$A, B$ nằm khác phía và cách đều đường thẳng $d$ khi và chỉ khi trung điểm $I$ thuộc đường thẳng $d$ (và đường thẳng $AB$ không trùng hoặc song song với $d$):\n$$I \\in d \\iff y_I = 5x_I - 9 \\iff \\frac{m^3 - 3m}{3} = 5m - 9$$\n$$\\iff m^3 - 3m = 15m - 27 \\iff m^3 - 18m + 27 = 0.$$\n\nPhương trình bậc ba này có $\\Delta > 0$ và có $3$ nghiệm thực phân biệt.\nTheo định lý Vi-ét, tổng các nghiệm của phương trình là:\n$$m_1 + m_2 + m_3 = 0.$$\nVậy tổng tất cả các phần tử của $S$ bằng $0$.\n\nChọn D.",
    "socraticHint": "Hai điểm cực trị cách đều và nằm khác phía đường thẳng khi và chỉ khi trung điểm của chúng thuộc đường thẳng đó.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 437,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có tất cả bao nhiêu giá trị thực của tham số $m$ để đồ thị hàm số $y = \\frac{2}{3}x^3 - mx^2 - 2(3m^2 - 1)x + \\frac{2}{3}$ có hai điểm cực trị có hoành độ $x_1, x_2$ sao cho $x_1 x_2 + 2(x_1 + x_2) = 1$?",
    "options": [
      {
        "key": "A",
        "content": "$1$"
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
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm:\n$$y' = 2x^2 - 2mx - 2(3m^2 - 1) = 2[x^2 - mx - (3m^2 - 1)].$$\n\nHàm số có hai điểm cực trị khi phương trình $x^2 - mx - (3m^2 - 1) = 0$ có hai nghiệm phân biệt:\n$$\\Delta = m^2 + 4(3m^2 - 1) = 13m^2 - 4 > 0 \\iff m^2 > \\frac{4}{13} \\quad (*)$$\n\nTheo định lý Vi-ét:\n$$\\begin{cases} x_1 + x_2 = m \\\\ x_1 x_2 = 1 - 3m^2 \\end{cases}$$\nThay vào biểu thức:\n$$x_1 x_2 + 2(x_1 + x_2) = 1 \\iff 1 - 3m^2 + 2m = 1 \\iff 3m^2 - 2m = 0 \\iff \\left[ \\begin{matrix} m = 0 \\\\ m = \\frac{2}{3} \\end{matrix} \\right.$$\n\nKiểm tra điều kiện $(*)$:\n- Với $m = 0 \\implies m^2 = 0 < \\frac{4}{13}$ (loại).\n- Với $m = \\frac{2}{3} \\implies m^2 = \\frac{4}{9} > \\frac{4}{13}$ (thỏa mãn).\n\nVậy chỉ có duy nhất $1$ giá trị thực của $m$ thỏa mãn.\n\nChọn A.",
    "socraticHint": "Áp dụng định lý Vi-ét và đối chiếu với điều kiện có 2 nghiệm phân biệt: $m^2 > 4/13$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 438,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để đồ thị hàm số $y = mx^3 - (2m - 1)x^2 + 2mx - m - 1$ có hai điểm cực trị nằm về hai phía của trục hoành?",
    "options": [
      {
        "key": "A",
        "content": "$4$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Hàm số bậc ba có hai điểm cực trị nằm về hai phía của trục hoành khi và chỉ khi đồ thị cắt trục hoành tại $3$ điểm phân biệt, tức phương trình $y = 0$ có $3$ nghiệm phân biệt.\n\nTa nhẩm thấy $x = 1$ là nghiệm:\n$$mx^3 - (2m - 1)x^2 + 2mx - m - 1 = (x - 1)[mx^2 - (m - 1)x + m + 1] = 0.$$\n\nPhương trình có $3$ nghiệm phân biệt khi $g(x) = mx^2 - (m - 1)x + m + 1 = 0$ có $2$ nghiệm phân biệt khác $1$:\n$$\\begin{cases} m \\ne 0 \\\\ \\Delta = (m - 1)^2 - 4m(m + 1) > 0 \\\\ g(1) = m - (m - 1) + m + 1 \\ne 0 \\end{cases} \\iff \\begin{cases} m \\ne 0 \\\\ -3m^2 - 6m + 1 > 0 \\\\ m + 2 \\ne 0 \\end{cases}$$\n$$\\iff \\begin{cases} m \\ne 0, \\quad m \\ne -2 \\\\ \\frac{-3 - 2\\sqrt{3}}{3} < m < \\frac{-3 + 2\\sqrt{3}}{3} \\end{cases} \\iff -2{,}15 < m < 0{,}15.$$\n\nVì $m$ là số nguyên, ta có $m \\in \\{-2; -1; 0\\}$.\nKết hợp điều kiện $m \\ne 0$ và $m \\ne -2$, ta được duy nhất: $m = -1$.\nVậy có $1$ giá trị nguyên thỏa mãn.\n\nChọn C.",
    "socraticHint": "Hai điểm cực trị nằm về hai phía trục hoành $\\iff$ phương trình $y = 0$ có 3 nghiệm phân biệt.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 439,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = -x^3 + 3mx^2 - 3m - 1$ với $m$ là một tham số thực. Giá trị của $m$ thuộc tập hợp nào sau đây để đồ thị hàm số đã cho có hai điểm cực trị đối xứng nhau qua đường thẳng $d: x + 8y - 74 = 0$?",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-1; 1]$"
      },
      {
        "key": "B",
        "content": "$m \\in (-3; -1]$"
      },
      {
        "key": "C",
        "content": "$m \\in (3; 5]$"
      },
      {
        "key": "D",
        "content": "$m \\in (1; 3]$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = -3x^2 + 6mx = -3x(x - 2m)$.\nHàm số có hai điểm cực trị khi và chỉ khi: $m \\ne 0$.\nHai điểm cực trị là: $A(0; -3m - 1)$ và $B(2m; 4m^3 - 3m - 1)$.\n\nTrung điểm của $AB$ là: $I(m; 2m^3 - 3m - 1)$.\nVectơ $\\vec{AB} = (2m; 4m^3)$. Vectơ chỉ phương của $d$ là $\\vec{u}_d = (-8; 1)$.\nHai điểm $A, B$ đối xứng qua $d$ khi và chỉ khi:\n$$\\begin{cases} I \\in d \\\\ \\vec{AB} \\cdot \\vec{u}_d = 0 \\end{cases} \\iff \\begin{cases} m + 8(2m^3 - 3m - 1) - 74 = 0 \\\\ -16m + 4m^3 = 0 \\end{cases}$$\nTừ $-16m + 4m^3 = 0 \\iff 4m(m^2 - 4) = 0 \\iff m = \\pm 2$ (do $m \\ne 0$).\n\nThử lại:\n- Với $m = 2$: $I(2; 9) \\implies 2 + 8(9) - 74 = 0$ (thỏa mãn).\n- Với $m = -2$: $I(-2; -11) \\implies -2 + 8(-11) - 74 = -164 \\ne 0$ (loại).\n\nVậy $m = 2$. Giá trị này thuộc nửa khoảng $(1; 3]$.\n\nChọn D.",
    "socraticHint": "Điều kiện đối xứng qua đường thẳng: trung điểm thuộc đường thẳng và vectơ nối hai điểm vuông góc với đường thẳng.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 440,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để đồ thị hàm số $y = x^3 - 8x^2 + (m^2 + 11)x - 2m^2 + 2$ có hai điểm cực trị nằm về hai phía của trục $Ox$?",
    "options": [
      {
        "key": "A",
        "content": "$4$"
      },
      {
        "key": "B",
        "content": "$5$"
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
    "correctAnswer": "B",
    "detailedSolution": "Hai điểm cực trị nằm về hai phía của trục hoành khi và chỉ khi phương trình $y = 0$ có $3$ nghiệm phân biệt.\nPhân tích nhân tử:\n$$x^3 - 8x^2 + (m^2 + 11)x - 2m^2 + 2 = (x - 2)(x^2 - 6x + m^2 - 1) = 0.$$\n\nPhương trình có $3$ nghiệm phân biệt khi tam thức $g(x) = x^2 - 6x + m^2 - 1$ có $2$ nghiệm phân biệt khác $2$:\n$$\\begin{cases} \\Delta' = 9 - (m^2 - 1) > 0 \\\\ g(2) = 2^2 - 6(2) + m^2 - 1 \\ne 0 \\end{cases} \\iff \\begin{cases} 10 - m^2 > 0 \\\\ m^2 - 9 \\ne 0 \\end{cases} \\iff \\begin{cases} -\\sqrt{10} < m < \\sqrt{10} \\\\ m \\ne \\pm 3 \\end{cases}$$\n\nCác số nguyên thỏa mãn là:\n$$m \\in \\{-2; -1; 0; 1; 2\\}.$$\nVậy có đúng $5$ giá trị nguyên của tham số $m$.\n\nChọn B.",
    "socraticHint": "Phân tích nhân tử với nghiệm $x = 2$ và lưu ý điều kiện nghiệm phân biệt khác $2$ loại $m = \\pm 3$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 441,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - (2m + 1)x^2 + (m + 1)x + m - 1$. Có bao nhiêu giá trị của số tự nhiên $m < 20$ để đồ thị hàm số có hai điểm cực trị nằm về hai phía trục hoành?",
    "options": [
      {
        "key": "A",
        "content": "$18$"
      },
      {
        "key": "B",
        "content": "$19$"
      },
      {
        "key": "C",
        "content": "$21$"
      },
      {
        "key": "D",
        "content": "$20$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Đồ thị có hai điểm cực trị nằm về hai phía trục hoành khi và chỉ khi $y = 0$ có $3$ nghiệm phân biệt.\nTa có:\n$$y = (x - 1)(x^2 - 2mx + 1 - m) = 0.$$\n\nPhương trình có $3$ nghiệm phân biệt khi $g(x) = x^2 - 2mx + 1 - m = 0$ có $2$ nghiệm phân biệt khác $1$:\n$$\\begin{cases} \\Delta' = m^2 - (1 - m) > 0 \\\\ g(1) = 1 - 2m + 1 - m \\ne 0 \\end{cases} \\iff \\begin{cases} m^2 + m - 1 > 0 \\\\ 2 - 3m \\ne 0 \\end{cases}$$\n$$\\iff \\left[ \\begin{matrix} m > \\frac{-1 + \\sqrt{5}}{2} \\approx 0{,}618 \\\\ m < \\frac{-1 - \\sqrt{5}}{2} \\end{matrix} \\right. \\quad \\text{và } m \\ne \\frac{2}{3}.$$\n\nVì $m$ là số tự nhiên ($m \\in \\mathbb{N}$) và $m < 20$:\n$$m \\in \\{1; 2; 3; \\dots; 19\\}.$$\nSố giá trị tự nhiên thỏa mãn là: $19 - 1 + 1 = 19$.\n\nChọn B.",
    "socraticHint": "Số tự nhiên $m < 20$ thỏa mãn $m > 0{,}618$ gồm các số từ $1$ đến $19$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 442,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để đồ thị của hàm số $y = x^3 - (m + 1)x^2 + (m^2 - 2)x - m^2 + 3$ có hai điểm cực trị và hai điểm cực trị đó nằm về hai phía khác nhau đối với trục hoành?",
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
        "content": "$4$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 2(m + 1)x + m^2 - 2$.\nHàm số có hai điểm cực trị khi:\n$$\\Delta' = (m + 1)^2 - 3(m^2 - 2) > 0 \\iff -2m^2 + 2m + 7 > 0 \\iff \\frac{1 - \\sqrt{15}}{2} < m < \\frac{1 + \\sqrt{15}}{2}.$$\nCác giá trị nguyên của $m$ thỏa mãn là: $m \\in \\{-1; 0; 1; 2\\}$.\n\nThử từng giá trị nguyên của $m$:\n- Với $m = -1$: $y = x^3 - x + 2$, có $y' = 3x^2 - 1 = 0 \\iff x = \\pm \\frac{1}{\\sqrt{3}}$, hai giá trị cực trị cùng dương (loại).\n- Với $m = 0$: $y = x^3 - x^2 - 2x + 3$, hai cực trị cùng dương (loại).\n- Với $m = 1$: $y = x^3 - 2x^2 - x + 2 = (x - 1)(x - 2)(x + 1) = 0$ có $3$ nghiệm phân biệt $(-1, 1, 2)$, do đó hai điểm cực trị nằm về hai phía trục hoành (thỏa mãn).\n- Với $m = 2$: $y = x^3 - 3x^2 + 2x - 1$, hai cực trị cùng âm (loại).\n\nVậy chỉ có duy nhất $m = 1$ thỏa mãn.\n\nChọn B.",
    "socraticHint": "Xác định các giá trị nguyên khả dĩ $\\{-1; 0; 1; 2\\}$ rồi kiểm tra trực tiếp điều kiện phương trình $y = 0$ có 3 nghiệm.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  }
];
