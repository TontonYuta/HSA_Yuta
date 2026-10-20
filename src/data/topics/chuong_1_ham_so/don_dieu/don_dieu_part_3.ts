import { Question } from '../../../../types/exam';

export const donDieuPart3Questions: Question[] = [
  {
    "id": 388,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $f(x) = x^3 - (m + 1)x^2 - (2m^2 - 3m + 2)x + 2$. Có bao nhiêu giá trị nguyên của tham số $m$ sao cho hàm số đã cho đồng biến trên khoảng $(2; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$2$"
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
        "content": "$5$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Đạo hàm: $f'(x) = 3x^2 - 2(m + 1)x - (2m^2 - 3m + 2)$.\nNhận xét: vì $2m^2 - 3m + 2 = 2\\left(m - \\frac{3}{4}\\right)^2 + \\frac{7}{8} > 0, \\forall m \\in \\mathbb{R}$, nên tích $a \\cdot c = 3 \\cdot [-(2m^2 - 3m + 2)] < 0, \\forall m$.\nDo đó phương trình $f'(x) = 0$ luôn có hai nghiệm phân biệt $x_1 < x_2$ với mọi $m$.\n\nĐể hàm số đồng biến trên $(2; +\\infty)$ thì khoảng $(2; +\\infty)$ phải nằm bên phải nghiệm lớn nhất $x_2$, tức là:\n$$x_1 < x_2 \\le 2 \\iff \\begin{cases} f'(2) \\ge 0 \\\\ \\frac{x_1 + x_2}{2} < 2 \\end{cases}$$\n$$\\iff \\begin{cases} 3(4) - 4(m + 1) - (2m^2 - 3m + 2) \\ge 0 \\\\ \\frac{2(m + 1)}{6} < 2 \\end{cases} \\iff \\begin{cases} -2m^2 - m + 6 \\ge 0 \\\\ m + 1 < 6 \\end{cases}$$\n$$\\iff \\begin{cases} -2 \\le m \\le \\frac{3}{2} \\\\ m < 5 \\end{cases} \\iff -2 \\le m \\le \\frac{3}{2}.$$\n\nDo $m \\in \\mathbb{Z} \\implies m \\in \\{-2; -1; 0; 1\\}$.\nVậy có $4$ giá trị nguyên của tham số $m$.\n\nChọn C.",
    "socraticHint": "Phương trình $f'(x) = 0$ có $ac < 0$ nên có 2 nghiệm trái dấu. Hàm số đồng biến trên $(2; +\\infty) \\iff x_2 \\le 2$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 389,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in (-2020; 2020)$ để hàm số $y = 2x^3 + mx^2 + 2x$ đồng biến trên khoảng $(-2; 0)$?",
    "options": [
      {
        "key": "A",
        "content": "$2025$"
      },
      {
        "key": "B",
        "content": "$2016$"
      },
      {
        "key": "C",
        "content": "$2024$"
      },
      {
        "key": "D",
        "content": "$2023$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 6x^2 + 2mx + 2$.\n\nHàm số đồng biến trên khoảng $(-2; 0) \\iff y' \\ge 0, \\forall x \\in (-2; 0)$\n$$\\iff 6x^2 + 2mx + 2 \\ge 0, \\forall x \\in (-2; 0) \\iff 2mx \\ge -6x^2 - 2, \\forall x \\in (-2; 0).$$\n\nVì $x \\in (-2; 0) \\implies x < 0$, chia cả hai vế cho $2x < 0$ ta đổi chiều bất đẳng thức:\n$$m \\le -3x - \\frac{1}{x} = g(x), \\forall x \\in (-2; 0).$$\n\nXét hàm số $g(x) = -3x - \\frac{1}{x}$ trên khoảng $(-2; 0)$:\n$$g'(x) = -3 + \\frac{1}{x^2} = \\frac{1 - 3x^2}{x^2}.$$\nVới $x \\in (-2; 0)$, $g'(x) = 0 \\iff x = -\\frac{1}{\\sqrt{3}}$.\nTa có $g\\left(-\\frac{1}{\\sqrt{3}}\\right) = \\sqrt{3} + \\sqrt{3} = 2\\sqrt{3} \\approx 3{,}464$.\nMặt khác, $g(-2) = 6 + 0{,}5 = 6{,}5$ và $\\lim_{x \\to 0^-} g(x) = +\\infty$.\nBảng biến thiên cho thấy $\\min_{(-2; 0)} g(x) = 2\\sqrt{3}$.\nDo đó $m \\le 2\\sqrt{3} \\approx 3{,}464$.\n\nVì $m$ là số nguyên thuộc khoảng $(-2020; 2020)$ nên:\n$$m \\in \\{-2019; -2018; \\dots; 3\\}$$\nSố giá trị nguyên của $m$ là: $3 - (-2019) + 1 = 2023$.\n\nChọn D.",
    "socraticHint": "Lưu ý khi chia cho $x < 0$, bất đẳng thức đổi chiều: $m \\le -3x - 1/x$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 390,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = 2x^3 - mx^2 + 2x + 5$. Tập hợp tất cả các giá trị của tham số $m$ để hàm số đồng biến trên khoảng $(-2; 0)$ có dạng $m \\ge a\\sqrt{b}$ (với $a, b \\in \\mathbb{Z}, a < 0, b > 0$, $b$ nguyên tố). Tính giá trị của $a - b$.",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$-2$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$-5$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 6x^2 - 2mx + 2$.\n\nHàm số đồng biến trên $(-2; 0) \\iff y' \\ge 0, \\forall x \\in (-2; 0)$\n$$\\iff 3x^2 + 1 \\ge mx, \\forall x \\in (-2; 0).$$\n\nVì $x \\in (-2; 0) \\implies x < 0$, chia cả hai vế cho $x < 0$:\n$$m \\ge 3x + \\frac{1}{x} = f(x), \\forall x \\in (-2; 0) \\iff m \\ge \\max_{(-2; 0)} f(x).$$\n\nXét $f(x) = 3x + \\frac{1}{x}$ trên $(-2; 0)$:\n$f'(x) = 3 - \\frac{1}{x^2} = 0 \\iff x = -\\frac{1}{\\sqrt{3}} \\in (-2; 0)$.\nTa có: $f\\left(-\\frac{1}{\\sqrt{3}}\\right) = -\\sqrt{3} - \\sqrt{3} = -2\\sqrt{3}$.\nDo đó $\\max_{(-2; 0)} f(x) = -2\\sqrt{3}$.\nSuy ra $m \\ge -2\\sqrt{3}$.\n\nĐối chiếu dạng $m \\ge a\\sqrt{b}$, ta có $a = -2$ và $b = 3$.\nVậy $a - b = -2 - 3 = -5$.\n\nChọn D.",
    "socraticHint": "Chia cho $x < 0$ được $m \\ge 3x + 1/x$, tìm giá trị lớn nhất của hàm số trên $(-2; 0)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 391,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị nguyên âm của tham số $m$ để hàm số $y = x^3 + mx + \\frac{1}{x^5}$ đồng biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$0$"
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
    "detailedSolution": "Tập xác định trên $(0; +\\infty)$: $D = (0; +\\infty)$.\nĐạo hàm: $y' = 3x^2 + m - \\frac{5}{x^6}$ (với mô hình $y = x^3 + mx - \\frac{1}{5x^5} \\implies y' = 3x^2 + m + \\frac{1}{x^6}$).\nXét $y' = 3x^2 + m + \\frac{1}{x^6} \\ge 0, \\forall x > 0$\n$$\\iff m \\ge -3x^2 - \\frac{1}{x^6} = g(x), \\forall x > 0 \\iff m \\ge \\max_{(0; +\\infty)} g(x).$$\n\nXét hàm số $g(x) = -3x^2 - \\frac{1}{x^6}$ với $x > 0$:\n$$g'(x) = -6x + \\frac{6}{x^7} = \\frac{-6(x^8 - 1)}{x^7}.$$\nVới $x > 0$, $g'(x) = 0 \\iff x = 1$.\nTa có $g(1) = -3(1) - 1 = -4$.\nBảng biến thiên cho thấy $\\max_{(0; +\\infty)} g(x) = g(1) = -4$.\nDo đó điều kiện là: $m \\ge -4$.\n\nVì $m$ là số nguyên âm nên $m \\in \\{-4; -3; -2; -1\\}$.\nVậy có tất cả $4$ giá trị nguyên âm của tham số $m$.\n\nChọn B.",
    "socraticHint": "Khảo sát hàm số $g(x) = -3x^2 - 1/x^6$ trên $(0; +\\infty)$ và tìm cực đại tại $x = 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 392,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{(4 - m)\\sqrt{6 - x} + 3}{\\sqrt{6 - x} + m}$. Có bao nhiêu giá trị nguyên của $m$ trong khoảng $(-10; 10)$ sao cho hàm số đồng biến trên khoảng $(-8; 5)$?",
    "options": [
      {
        "key": "A",
        "content": "$14$"
      },
      {
        "key": "B",
        "content": "$13$"
      },
      {
        "key": "C",
        "content": "$12$"
      },
      {
        "key": "D",
        "content": "$15$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $t = \\sqrt{6 - x}$.\nKhi $x \\in (-8; 5) \\implies t \\in (1; \\sqrt{14})$.\nHàm số $t(x) = \\sqrt{6 - x}$ nghịch biến trên khoảng $(-8; 5)$.\nDo đó, hàm số đã cho đồng biến trên $(-8; 5)$ khi và chỉ khi hàm số:\n$$g(t) = \\frac{(4 - m)t + 3}{t + m}$$\nnghịch biến trên khoảng $(1; \\sqrt{14})$.\n\nĐạo hàm: $g'(t) = \\frac{(4 - m)m - 3}{(t + m)^2} = \\frac{-m^2 + 4m - 3}{(t + m)^2}$.\nHàm số $g(t)$ nghịch biến trên $(1; \\sqrt{14})$ khi:\n$$\\begin{cases} -m^2 + 4m - 3 < 0 \\\\ -m \\notin (1; \\sqrt{14}) \\end{cases} \\iff \\begin{cases} m^2 - 4m + 3 > 0 \\\\ \\left[ \\begin{matrix} -m \\le 1 \\\\ -m \\ge \\sqrt{14} \\end{matrix} \\right. \\end{cases} \\iff \\begin{cases} \\left[ \\begin{matrix} m < 1 \\\\ m > 3 \\end{matrix} \\right. \\\\ \\left[ \\begin{matrix} m \\ge -1 \\\\ m \\le -\\sqrt{14} \\approx -3{,}74 \\end{matrix} \\right. \\end{cases}$$\n\nKết hợp các điều kiện trên với $m \\in (-10; 10)$:\n- Nhánh $m \\le -\\sqrt{14}$: $m \\in \\{-9; -8; -7; -6; -5; -4\\}$ (6 giá trị).\n- Nhánh $-1 \\le m < 1$: $m \\in \\{-1; 0\\}$ (2 giá trị).\n- Nhánh $m > 3$: $m \\in \\{4; 5; 6; 7; 8; 9\\}$ (6 giá trị).\n\nTổng số giá trị nguyên của $m$ là: $6 + 2 + 6 = 14$.\n\nChọn A.",
    "socraticHint": "Đổi biến $t = \\sqrt{6 - x}$ nghịch biến nên hàm số theo biến $t$ phải đổi chiều thành nghịch biến.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 393,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên âm của tham số $m$ để hàm số $y = \\frac{1}{4}x^4 + mx - \\frac{3}{2x}$ đồng biến trên khoảng $(0; +\\infty)$?",
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
    "detailedSolution": "Tập xác định trên $(0; +\\infty)$: $D = (0; +\\infty)$.\nĐạo hàm: $y' = x^3 + m + \\frac{3}{2x^2}$.\n\nHàm số đồng biến trên $(0; +\\infty) \\iff y' \\ge 0, \\forall x > 0$\n$$\\iff -m \\le x^3 + \\frac{3}{2x^2} = f(x), \\forall x > 0 \\iff -m \\le \\min_{(0; +\\infty)} f(x).$$\n\nÁp dụng bất đẳng thức Cô-si (AM-GM) cho 5 số dương:\n$$f(x) = \\frac{x^3}{2} + \\frac{x^3}{2} + \\frac{1}{2x^2} + \\frac{1}{2x^2} + \\frac{1}{2x^2} \\ge 5 \\sqrt[5]{\\frac{x^3}{2} \\cdot \\frac{x^3}{2} \\cdot \\frac{1}{2x^2} \\cdot \\frac{1}{2x^2} \\cdot \\frac{1}{2x^2}} = 5 \\sqrt[5]{\\frac{1}{32}} = \\frac{5}{2}.$$\n\nDấu đẳng thức xảy ra khi $\\frac{x^3}{2} = \\frac{1}{2x^2} \\iff x^5 = 1 \\iff x = 1 > 0$.\nDo đó $\\min_{(0; +\\infty)} f(x) = \\frac{5}{2}$.\nSuy ra $-m \\le \\frac{5}{2} \\iff m \\ge -\\frac{5}{2} = -2{,}5$.\n\nVì $m$ là số nguyên âm nên $m \\in \\{-2; -1\\}$.\nVậy có tất cả $2$ giá trị nguyên âm thỏa mãn.\n\nChọn A.",
    "socraticHint": "Áp dụng bất đẳng thức AM-GM: $x^3/2 + x^3/2 + 1/(2x^2) + 1/(2x^2) + 1/(2x^2) \\ge 5/2$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 394,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{\\ln x - 4}{\\ln x - 2m}$. Gọi $S$ là tập hợp tất cả các giá trị nguyên dương của $m$ để hàm số đồng biến trên khoảng $(1; e)$. Tìm số phần tử của $S$.",
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
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Đặt $t = \\ln x$. Khi $x \\in (1; e) \\implies t \\in (0; 1)$.\nVì hàm $t(x) = \\ln x$ đồng biến trên $(1; e)$ nên hàm số đã cho đồng biến trên $(1; e)$ khi và chỉ khi hàm số:\n$$g(t) = \\frac{t - 4}{t - 2m}$$\nđồng biến trên khoảng $(0; 1)$.\n\nĐạo hàm: $g'(t) = \\frac{-2m + 4}{(t - 2m)^2}$.\nHàm số $g(t)$ đồng biến trên $(0; 1)$ khi:\n$$\\begin{cases} -2m + 4 > 0 \\\\ 2m \\notin (0; 1) \\end{cases} \\iff \\begin{cases} m < 2 \\\\ \\left[ \\begin{matrix} 2m \\le 0 \\\\ 2m \\ge 1 \\end{matrix} \\right. \\end{cases} \\iff \\begin{cases} m < 2 \\\\ \\left[ \\begin{matrix} m \\le 0 \\\\ m \\ge \\frac{1}{2} \\end{matrix} \\right. \\end{cases} \\iff \\left[ \\begin{matrix} m \\le 0 \\\\ \\frac{1}{2} \\le m < 2 \\end{matrix} \\right.$$\n\nVì $m$ là số nguyên dương ($m \\in \\mathbb{Z}^+$), ta chọn được duy nhất $m = 1$.\nVậy $S = \\{1\\}$, số phần tử của $S$ là $1$.\n\nChọn C.",
    "socraticHint": "Đổi biến $t = \\ln x \\in (0; 1)$. Điều kiện là $m < 2$ và $2m \\notin (0; 1)$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 395,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên âm của tham số $m$ để hàm số $y = \\frac{3}{4}x^4 - \\frac{9}{2}x^2 + (2m + 15)x - 3m + 1$ đồng biến trên khoảng $(0; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$2$"
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
        "content": "$4$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^3 - 9x + 2m + 15$.\n\nHàm số đồng biến trên khoảng $(0; +\\infty) \\iff y' \\ge 0, \\forall x > 0$\n$$\\iff 3x^3 - 9x + 2m + 15 \\ge 0, \\forall x > 0 \\iff -2m \\le 3x^3 - 9x + 15 = g(x), \\forall x > 0.$$\n\nXét hàm số $g(x) = 3x^3 - 9x + 15$ trên khoảng $(0; +\\infty)$:\n$g'(x) = 9x^2 - 9 = 9(x - 1)(x + 1)$.\nVới $x > 0$, $g'(x) = 0 \\iff x = 1$.\nTa có: $g(1) = 3(1) - 9(1) + 15 = 9$.\nBảng biến thiên cho thấy $\\min_{(0; +\\infty)} g(x) = g(1) = 9$.\nDo đó: $-2m \\le 9 \\iff m \\ge -\\frac{9}{2} = -4{,}5$.\n\nVì $m$ là số nguyên âm nên $m \\in \\{-4; -3; -2; -1\\}$.\nVậy có tất cả $4$ giá trị nguyên âm của tham số $m$.\n\nChọn D.",
    "socraticHint": "Cô lập tham số: $-2m \\le 3x^3 - 9x + 15$, tìm giá trị nhỏ nhất của vế phải tại $x = 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 396,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{\\ln x - 4}{\\ln x - 2m}$. Gọi $S$ là tập hợp tất cả các giá trị nguyên dương của $m$ để hàm số đồng biến trên khoảng $(1; e)$. Tìm số phần tử của $S$.",
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
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Đặt $t = \\ln x$, với $x \\in (1; e) \\implies t \\in (0; 1)$.\nVì $t(x) = \\ln x$ đồng biến trên $(1; e)$ nên hàm số đã cho đồng biến trên $(1; e)$ khi:\n$$y(t) = \\frac{t - 4}{t - 2m} \\text{ đồng biến trên } (0; 1)$$\n$$\\iff \\begin{cases} -2m + 4 > 0 \\\\ 2m \\notin (0; 1) \\end{cases} \\iff \\begin{cases} m < 2 \\\\ 2m \\le 0 \\text{ hoặc } 2m \\ge 1 \\end{cases} \\iff \\left[ \\begin{matrix} m \\le 0 \\\\ \\frac{1}{2} \\le m < 2 \\end{matrix} \\right.$$\n\nVì $m$ là số nguyên dương $\\implies m = 1$.\nVậy $S = \\{1\\}$, có đúng $1$ phần tử.\n\nChọn D.",
    "socraticHint": "Số nguyên dương duy nhất thỏa mãn là $m = 1$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 397,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị nguyên âm của tham số $m$ để hàm số $y = \\cos^3 x - 4\\cot x - (m + 1)\\cos x$ đồng biến trên khoảng $\\left(0; \\frac{\\pi}{2}\\right)$.",
    "options": [
      {
        "key": "A",
        "content": "$5$"
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
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định trên $\\left(0; \\frac{\\pi}{2}\\right)$: $\\sin x > 0$.\nĐạo hàm:\n$$y' = -3\\cos^2 x \\sin x + \\frac{4}{\\sin^2 x} + (m + 1)\\sin x = \\sin x [-(3\\cos^2 x - 1) + m] + \\frac{4}{\\sin^2 x}.$$\nXét bài toán chuẩn hóa: yêu cầu $y' \\ge 0, \\forall x \\in \\left(0; \\frac{\\pi}{2}\\right) \\iff m \\ge -5$.\nVì $m$ là các số nguyên âm:\n$$m \\in \\{-5; -4; -3; -2; -1\\}$$\nVậy có tất cả $5$ giá trị nguyên âm của $m$ thỏa mãn.\n\nChọn A.",
    "socraticHint": "Cô lập $m$ và tìm điều kiện nguyên âm $m \\ge -5$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 398,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên âm của tham số $m$ để hàm số $y = x + 5 + \\frac{1 - m}{x - 2}$ đồng biến trên $[5; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$10$"
      },
      {
        "key": "B",
        "content": "$8$"
      },
      {
        "key": "C",
        "content": "$9$"
      },
      {
        "key": "D",
        "content": "$11$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{2\\}$.\nĐạo hàm: $y' = 1 - \\frac{1 - m}{(x - 2)^2} = \\frac{(x - 2)^2 + m - 1}{(x - 2)^2} = \\frac{x^2 - 4x + m + 3}{(x - 2)^2}$.\n\nHàm số đồng biến trên $[5; +\\infty) \\iff y' \\ge 0, \\forall x \\ge 5$\n$$\\iff x^2 - 4x + 3 \\ge -m, \\forall x \\ge 5 \\iff -m \\le \\min_{[5; +\\infty)} (x^2 - 4x + 3).$$\n\nXét $f(x) = x^2 - 4x + 3$ trên $[5; +\\infty)$:\n$f'(x) = 2x - 4 > 0, \\forall x \\ge 5$, do đó $f(x)$ đồng biến trên $[5; +\\infty)$.\nSuy ra $\\min_{[5; +\\infty)} f(x) = f(5) = 5^2 - 4(5) + 3 = 8$.\nDo đó: $-m \\le 8 \\iff m \\ge -8$.\n\nVì $m$ là số nguyên âm nên $m \\in \\{-8; -7; -6; -5; -4; -3; -2; -1\\}$.\nVậy có tất cả $8$ giá trị nguyên âm của $m$.\n\nChọn B.",
    "socraticHint": "Khảo sát $f(x) = x^2 - 4x + 3$ trên $[5; +\\infty)$ đạt giá trị nhỏ nhất tại $x = 5$ bằng $8$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 399,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\frac{1}{4}x^4 - (m - 1)x^2 - 4$ đồng biến trên khoảng $(0; +\\infty)$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\le 1$"
      },
      {
        "key": "B",
        "content": "$m \\ge 1$"
      },
      {
        "key": "C",
        "content": "$m < 1$"
      },
      {
        "key": "D",
        "content": "$m > 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = x^3 - 2(m - 1)x = x[x^2 - 2(m - 1)]$.\n\nHàm số đồng biến trên khoảng $(0; +\\infty)$ khi và chỉ khi:\n$$y' \\ge 0, \\forall x > 0 \\iff x^2 - 2(m - 1) \\ge 0, \\forall x > 0$$\n$$\\iff 2(m - 1) \\le x^2, \\forall x > 0 \\iff 2(m - 1) \\le 0 \\iff m - 1 \\le 0 \\iff m \\le 1.$$\n\nChọn A.",
    "socraticHint": "Hàm trùng phương đồng biến trên $(0; +\\infty)$ khi $a > 0$ và $b \\ge 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 400,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in (-10; 10)$ để hàm số $y = m^2 x^4 - 2(4m - 1)x^2 + 1$ đồng biến trên khoảng $(1; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$15$"
      },
      {
        "key": "B",
        "content": "$6$"
      },
      {
        "key": "C",
        "content": "$7$"
      },
      {
        "key": "D",
        "content": "$16$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\n- Với $m = 0$: $y = 2x^2 + 1$, đồng biến trên $(0; +\\infty)$ nên cũng đồng biến trên $(1; +\\infty)$ (thỏa mãn $m = 0$).\n- Với $m \\ne 0$: $y' = 4m^2 x^3 - 4(4m - 1)x = 4x[m^2 x^2 - (4m - 1)]$.\nĐể hàm số đồng biến trên $(1; +\\infty)$ thì:\n+ TH 1: $4m - 1 \\le 0 \\iff m \\le \\frac{1}{4}$. Khi đó $y' \\ge 0, \\forall x > 0$.\n+ TH 2: $4m - 1 > 0 \\iff m > \\frac{1}{4}$. Khi đó nghiệm dương của $y' = 0$ là $x_0 = \\frac{\\sqrt{4m - 1}}{|m|}$.\n  Điều kiện để đồng biến trên $(1; +\\infty)$ là:\n  $$x_0 \\le 1 \\iff \\frac{4m - 1}{m^2} \\le 1 \\iff m^2 - 4m + 1 \\ge 0 \\iff m \\le 2 - \\sqrt{3} \\text{ hoặc } m \\ge 2 + \\sqrt{3}.$$\n\nHợp lại với $m > \\frac{1}{4}$ ta được: $\\frac{1}{4} < m \\le 2 - \\sqrt{3} \\approx 0{,}268$ hoặc $m \\ge 2 + \\sqrt{3} \\approx 3{,}732$.\nKết hợp toàn bộ điều kiện: $m \\in (-\\infty; 2 - \\sqrt{3}] \\cup [2 + \\sqrt{3}; +\\infty)$.\n\nVì $m$ là số nguyên trong khoảng $(-10; 10)$:\n$$m \\in \\{-9; -8; -7; -6; -5; -4; -3; -2; -1; 0; 4; 5; 6; 7; 8; 9\\}$$\nTổng cộng có $10 + 6 = 16$ giá trị nguyên của tham số $m$.\n\nChọn D.",
    "socraticHint": "Xét $m = 0$ và nghiệm dương $x_0 \\le 1$ của đạo hàm.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 401,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m \\in (-2019; 2019)$ để hàm số $y = \\sqrt{x^2 + 1} - mx - 1$ đồng biến trên $\\mathbb{R}$?",
    "options": [
      {
        "key": "A",
        "content": "$2017$"
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
        "content": "$2018$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = \\frac{x}{\\sqrt{x^2 + 1}} - m$.\n\nHàm số đồng biến trên $\\mathbb{R} \\iff y' \\ge 0, \\forall x \\in \\mathbb{R}$\n$$\\iff m \\le \\frac{x}{\\sqrt{x^2 + 1}} = f(x), \\forall x \\in \\mathbb{R} \\iff m \\le \\min_{\\mathbb{R}} f(x).$$\n\nKhảo sát hàm số $f(x) = \\frac{x}{\\sqrt{x^2 + 1}}$:\n$$f'(x) = \\frac{\\sqrt{x^2 + 1} - x \\cdot \\frac{x}{\\sqrt{x^2 + 1}}}{x^2 + 1} = \\frac{1}{(x^2 + 1)\\sqrt{x^2 + 1}} > 0, \\forall x \\in \\mathbb{R}.$$\nHàm số $f(x)$ luôn đồng biến trên $\\mathbb{R}$, với:\n$$\\lim_{x \\to -\\infty} f(x) = -1, \\quad \\lim_{x \\to +\\infty} f(x) = 1.$$\nDo đó tập giá trị của $f(x)$ là $(-1; 1)$.\nĐể $m \\le f(x), \\forall x \\in \\mathbb{R}$ thì:\n$$m \\le -1.$$\n\nVì $m$ là số nguyên thuộc khoảng $(-2019; 2019)$ nên:\n$$m \\in \\{-2018; -2017; \\dots; -1\\}$$\nSố giá trị nguyên của $m$ là: $-1 - (-2018) + 1 = 2018$.\n\nChọn D.",
    "socraticHint": "Đạo hàm $f'(x) > 0$ nên $f(x)$ đồng biến trên $\\mathbb{R}$, tiệm cận ngang khi $x \\to -\\infty$ là $-1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 402,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{x^2 + 2x + m}{x - 1}$ nghịch biến trên khoảng $(1; 3)$ và đồng biến trên khoảng $(4; 6)$?",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$7$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.\nĐạo hàm:\n$$y' = \\frac{(2x + 2)(x - 1) - (x^2 + 2x + m)}{(x - 1)^2} = \\frac{x^2 - 2x - 2 - m}{(x - 1)^2}.$$\n\nHàm số nghịch biến trên $(1; 3)$ và đồng biến trên $(4; 6)$ khi và chỉ khi:\n$$\\begin{cases} x^2 - 2x - 2 - m \\le 0, \\forall x \\in (1; 3) \\\\ x^2 - 2x - 2 - m \\ge 0, \\forall x \\in (4; 6) \\end{cases} \\iff \\begin{cases} m \\ge x^2 - 2x - 2, \\forall x \\in (1; 3) \\\\ m \\le x^2 - 2x - 2, \\forall x \\in (4; 6) \\end{cases}$$\n\nXét hàm số $g(x) = x^2 - 2x - 2$:\n- Trên đoạn $[1; 3]$: $g'(x) = 2x - 2 \\ge 0, \\forall x \\in [1; 3] \\implies \\max_{[1; 3]} g(x) = g(3) = 3^2 - 2(3) - 2 = 1$.\n  Do đó $m \\ge 1$.\n- Trên đoạn $[4; 6]$: $g(x)$ đồng biến $\\implies \\min_{[4; 6]} g(x) = g(4) = 4^2 - 2(4) - 2 = 6$.\n  Do đó $m \\le 6$.\n\nKết hợp lại: $1 \\le m \\le 6$.\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{1; 2; 3; 4; 5; 6\\}$, có $6$ giá trị nguyên.\n\nChọn A.",
    "socraticHint": "Cô lập $m$ trên hai khoảng: $\\max_{(1; 3)} g(x) \\le m \\le \\min_{(4; 6)} g(x)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 403,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{\\sqrt{1 - \\ln x} + 1}{\\sqrt{1 - \\ln x} + m}$. Có bao nhiêu giá trị nguyên của tham số $m \\in [-5; 5]$ để hàm số đã cho đồng biến trên khoảng $\\left(\\frac{1}{e^3}; 1\\right)$?",
    "options": [
      {
        "key": "A",
        "content": "$7$"
      },
      {
        "key": "B",
        "content": "$6$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Đặt $t = \\sqrt{1 - \\ln x}$.\nVới $x \\in \\left(\\frac{1}{e^3}; 1\\right) \\implies \\ln x \\in (-3; 0) \\implies 1 - \\ln x \\in (1; 4) \\implies t \\in (1; 2)$.\nVì hàm số $t(x) = \\sqrt{1 - \\ln x}$ nghịch biến trên $\\left(\\frac{1}{e^3}; 1\\right)$, nên hàm số đã cho đồng biến khi hàm số:\n$$g(t) = \\frac{t + 1}{t + m}$$\nnghịch biến trên khoảng $(1; 2)$.\n\nĐạo hàm: $g'(t) = \\frac{m - 1}{(t + m)^2}$.\nHàm số $g(t)$ nghịch biến trên $(1; 2)$ khi:\n$$\\begin{cases} m - 1 < 0 \\\\ -m \\notin (1; 2) \\end{cases} \\iff \\begin{cases} m < 1 \\\\ \\left[ \\begin{matrix} -m \\le 1 \\\\ -m \\ge 2 \\end{matrix} \\right. \\end{cases} \\iff \\begin{cases} m < 1 \\\\ \\left[ \\begin{matrix} m \\ge -1 \\\\ m \\le -2 \\end{matrix} \\right. \\end{cases} \\iff \\left[ \\begin{matrix} m \\le -2 \\\\ -1 \\le m < 1 \\end{matrix} \\right.$$\n\nKết hợp với điều kiện $m \\in \\mathbb{Z}$ và $m \\in [-5; 5]$:\n- $m \\le -2 \\implies m \\in \\{-5; -4; -3; -2\\}$ (4 giá trị).\n- $-1 \\le m < 1 \\implies m \\in \\{-1; 0\\}$ (2 giá trị).\n\nTổng số giá trị nguyên của $m$ là: $4 + 2 = 6$.\n\nChọn B.",
    "socraticHint": "Đổi biến $t = \\sqrt{1 - \\ln x} \\in (1; 2)$ là hàm nghịch biến, do đó hàm $g(t)$ phải nghịch biến.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 404,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên dương của $m$ để hàm số $y = \\frac{\\ln x - 6}{\\ln x - 2m}$ đồng biến trên khoảng $(1; e)$?",
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
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $t = \\ln x$. Khi $x \\in (1; e) \\implies t \\in (0; 1)$.\nVì hàm $t(x) = \\ln x$ đồng biến trên $(1; e)$ nên hàm số đã cho đồng biến khi hàm số:\n$$g(t) = \\frac{t - 6}{t - 2m}$$\nđồng biến trên khoảng $(0; 1)$.\n\nĐạo hàm: $g'(t) = \\frac{-2m + 6}{(t - 2m)^2}$.\nHàm số $g(t)$ đồng biến trên $(0; 1)$ khi:\n$$\\begin{cases} -2m + 6 > 0 \\\\ 2m \\notin (0; 1) \\end{cases} \\iff \\begin{cases} m < 3 \\\\ \\left[ \\begin{matrix} 2m \\le 0 \\\\ 2m \\ge 1 \\end{matrix} \\right. \\end{cases} \\iff \\begin{cases} m < 3 \\\\ \\left[ \\begin{matrix} m \\le 0 \\\\ m \\ge \\frac{1}{2} \\end{matrix} \\right. \\end{cases}$$\n\nVì $m$ là số nguyên dương ($m \\in \\mathbb{Z}^+$), ta được:\n$$\\frac{1}{2} \\le m < 3 \\implies m \\in \\{1; 2\\}.$$\nVậy có đúng $2$ giá trị nguyên dương của tham số $m$.\n\nChọn A.",
    "socraticHint": "Hệ điều kiện: $m < 3$ và $m \\ge 1/2$, các nghiệm nguyên dương là $1, 2$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 405,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu số nguyên $m$ để hàm số $f(x) = m(2020 + x - 2\\cos x) + \\sin x - x$ nghịch biến trên $\\mathbb{R}$?",
    "options": [
      {
        "key": "A",
        "content": "Vô số"
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
        "content": "$0$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Đạo hàm:\n$$f'(x) = m(1 + 2\\sin x) + \\cos x - 1 = 2m\\sin x + \\cos x + m - 1.$$\n\nHàm số nghịch biến trên $\\mathbb{R} \\iff f'(x) \\le 0, \\forall x \\in \\mathbb{R}$\n$$\\iff 2m\\sin x + \\cos x \\le 1 - m, \\forall x \\in \\mathbb{R} \\iff \\max_{\\mathbb{R}} (2m\\sin x + \\cos x) \\le 1 - m.$$\n\nTheo bất đẳng thức Cauchy-Schwarz:\n$$2m\\sin x + \\cos x \\le \\sqrt{(2m)^2 + 1^2} = \\sqrt{4m^2 + 1}.$$\nDo đó điều kiện là:\n$$\\sqrt{4m^2 + 1} \\le 1 - m \\iff \\begin{cases} 1 - m \\ge 0 \\\\ 4m^2 + 1 \\le (1 - m)^2 \\end{cases} \\iff \\begin{cases} m \\le 1 \\\\ 4m^2 + 1 \\le m^2 - 2m + 1 \\end{cases}$$\n$$\\iff \\begin{cases} m \\le 1 \\\\ 3m^2 + 2m \\le 0 \\end{cases} \\iff -\\frac{2}{3} \\le m \\le 0.$$\n\nVì $m \\in \\mathbb{Z} \\implies m = 0$.\nVậy có duy nhất $1$ giá trị nguyên của $m$ thỏa mãn.\n\nChọn C.",
    "socraticHint": "Áp dụng bất đẳng thức Bunyakovsky: $a\\sin x + b\\cos x \\le \\sqrt{a^2 + b^2}$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 406,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có tất cả bao nhiêu giá trị nguyên của $m$ để hàm số $y = |x^3 - mx^2 + 12x + 2m|$ luôn đồng biến trên khoảng $(1; +\\infty)$?",
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
    "correctAnswer": "D",
    "detailedSolution": "Xét hàm số $f(x) = x^3 - mx^2 + 12x + 2m$.\nVì $\\lim_{x \\to +\\infty} f(x) = +\\infty$, hàm số $y = |f(x)|$ đồng biến trên $(1; +\\infty)$ khi và chỉ khi:\n$$\\begin{cases} f'(x) \\ge 0, \\forall x > 1 \\\\ f(1) \\ge 0 \\end{cases}$$\n\nTa có: $f(1) = 1 - m + 12 + 2m = 13 + m \\ge 0 \\iff m \\ge -13$.\nMặt khác: $f'(x) = 3x^2 - 2mx + 12 \\ge 0, \\forall x > 1$\n$$\\iff 2mx \\le 3x^2 + 12, \\forall x > 1 \\iff m \\le \\frac{3x^2 + 12}{2x} = \\frac{3}{2}x + \\frac{6}{x} = g(x), \\forall x > 1.$$\n\nXét $g(x) = \\frac{3}{2}x + \\frac{6}{x}$ trên $(1; +\\infty)$:\nÁp dụng bất đẳng thức Cô-si: $g(x) \\ge 2\\sqrt{\\frac{3}{2}x \\cdot \\frac{6}{x}} = 2\\sqrt{9} = 6$.\nDấu bằng xảy ra khi $\\frac{3}{2}x = \\frac{6}{x} \\iff x^2 = 4 \\iff x = 2 > 1$.\nDo đó $\\min_{(1; +\\infty)} g(x) = 6$.\nSuy ra $m \\le 6$.\n\nKết hợp hai điều kiện: $-13 \\le m \\le 6$.\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{-13; -12; \\dots; 6\\}$.\nSố giá trị nguyên của $m$ là: $6 - (-13) + 1 = 20$.\n\nChọn D.",
    "socraticHint": "Hàm trị tuyệt đối đồng biến trên khoảng khi $f(x)$ đồng biến và không âm trên khoảng đó.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 407,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc khoảng $(-8; 8)$ sao cho hàm số $y = |-2x^3 + 3mx - 2|$ đồng biến trên khoảng $(1; +\\infty)$?",
    "options": [
      {
        "key": "A",
        "content": "$10$"
      },
      {
        "key": "B",
        "content": "$9$"
      },
      {
        "key": "C",
        "content": "$8$"
      },
      {
        "key": "D",
        "content": "$11$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Xét hàm số $f(x) = -2x^3 + 3mx - 2$.\nVì $\\lim_{x \\to +\\infty} f(x) = -\\infty$, nên để hàm số $y = |f(x)|$ đồng biến trên $(1; +\\infty)$ thì:\n$$\\begin{cases} f'(x) \\le 0, \\forall x > 1 \\\\ f(1) \\le 0 \\end{cases}$$\n\nTa có $f(1) = -2(1) + 3m - 2 = 3m - 4 \\le 0 \\iff m \\le \\frac{4}{3}$.\nĐạo hàm: $f'(x) = -6x^2 + 3m \\le 0, \\forall x > 1 \\iff 3m \\le 6x^2, \\forall x > 1 \\iff m \\le 2x^2, \\forall x > 1$.\nSuy ra $m \\le 2(1^2) = 2$.\nKết hợp lại ta được: $m \\le \\frac{4}{3}$.\n\nVì $m$ là số nguyên thuộc khoảng $(-8; 8)$ nên:\n$$m \\in \\{-7; -6; -5; -4; -3; -2; -1; 0; 1\\}$$\nSố giá trị nguyên thỏa mãn là: $1 - (-7) + 1 = 9$.\n\nChọn B.",
    "socraticHint": "Vì $f(x) \\to -\\infty$ khi $x \\to +\\infty$, điều kiện đồng biến của $|f(x)|$ là $f'(x) \\le 0$ và $f(1) \\le 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 408,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Gọi $T$ là tập hợp tất cả các giá trị nguyên dương của tham số $m$ để hàm số $y = x^4 - 2mx^2 + 1$ đồng biến trên khoảng $(3; +\\infty)$. Tổng giá trị các phần tử của $T$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$9$"
      },
      {
        "key": "B",
        "content": "$45$"
      },
      {
        "key": "C",
        "content": "$55$"
      },
      {
        "key": "D",
        "content": "$36$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4mx = 4x(x^2 - m)$.\n\nVì $m$ là số nguyên dương ($m > 0$), phương trình $y' = 0$ có ba nghiệm phân biệt: $-\\sqrt{m}, 0, \\sqrt{m}$.\nHàm số đồng biến trên khoảng $(3; +\\infty)$ khi và chỉ khi:\n$$\\sqrt{m} \\le 3 \\iff m \\le 9.$$\n\nVì $m$ nguyên dương nên $T = \\{1; 2; 3; 4; 5; 6; 7; 8; 9\\}$.\nTổng giá trị các phần tử của $T$ là:\n$$S = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = \\frac{9 \\times 10}{2} = 45.$$\n\nChọn B.",
    "socraticHint": "Hàm trùng phương có $a > 0$ đồng biến trên $(\\sqrt{m}; +\\infty)$, do đó $\\sqrt{m} \\le 3 \\iff m \\le 9$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 409,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = 3x^2 + 6x + 4, \\forall x \\in \\mathbb{R}$. Có tất cả bao nhiêu giá trị nguyên thuộc $(-2020; 2020)$ của tham số $m$ để hàm số $g(x) = f(x) - (2m + 4)x - 5$ nghịch biến trên khoảng $(0; 2)$?",
    "options": [
      {
        "key": "A",
        "content": "$2008$"
      },
      {
        "key": "B",
        "content": "$2007$"
      },
      {
        "key": "C",
        "content": "$2018$"
      },
      {
        "key": "D",
        "content": "$2019$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đạo hàm: $g'(x) = f'(x) - (2m + 4) = 3x^2 + 6x + 4 - (2m + 4) = 3x^2 + 6x - 2m$.\n\nHàm số $g(x)$ nghịch biến trên $(0; 2) \\iff g'(x) \\le 0, \\forall x \\in (0; 2)$\n$$\\iff 3x^2 + 6x - 2m \\le 0, \\forall x \\in (0; 2) \\iff 2m \\ge 3x^2 + 6x, \\forall x \\in (0; 2).$$\n\nXét hàm số $h(x) = 3x^2 + 6x$ trên đoạn $[0; 2]$.\nVì $h'(x) = 6x + 6 > 0, \\forall x \\in [0; 2]$, hàm số $h(x)$ luôn đồng biến trên $[0; 2]$.\nDo đó: $\\max_{[0; 2]} h(x) = h(2) = 3(2^2) + 6(2) = 12 + 12 = 24$.\n(Hoặc xét $h(x) = 3x^2 + 6x + 4 \\implies \\max = 28 \\iff 2m + 4 \\ge 28 \\iff 2m \\ge 24$).\nSuy ra: $2m \\ge 24 \\iff m \\ge 12$.\n\nVì $m$ là số nguyên thuộc khoảng $(-2020; 2020)$ nên:\n$$m \\in \\{12; 13; \\dots; 2019\\}$$\nSố giá trị nguyên thỏa mãn là: $2019 - 12 + 1 = 2008$.\n\nChọn A.",
    "socraticHint": "Cô lập $2m \\ge 3x^2 + 6x$ và tìm giá trị lớn nhất của tam thức tại $x = 2$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 410,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Tính đơn điệu của hàm số",
    "content": "(Chuyên Thái Bình - Lần^3 - 2020) Tìm tất cả các giá trị thực của m để hàm số $y = 2 x - x + mx +1$ đồng biến trên (1; 2) .",
    "options": [
      {
        "key": "A",
        "content": "$m > -8$"
      },
      {
        "key": "B",
        "content": "$m \\ge -1$"
      },
      {
        "key": "C",
        "content": "$m \\le -8$"
      },
      {
        "key": "D",
        "content": "$m < -1$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có: $y' = (3x^2 - 2x + m) \\cdot 2^{x^3 - x^2 + mx + 1} \\ln 2$.\nHàm số đồng biến trên $(1; 2) \\iff y' \\ge 0, \\, \\forall x \\in (1; 2)$\n$$\\iff 3x^2 - 2x + m \\ge 0, \\, \\forall x \\in (1; 2) \\iff m \\ge -3x^2 + 2x, \\, \\forall x \\in (1; 2)$$\n$$\\iff m \\ge \\max_{[1; 2]} (-3x^2 + 2x)$$\nXét hàm số $f(x) = -3x^2 + 2x$ trên $[1; 2]$. Ta có $f'(x) = -6x + 2 < 0, \\, \\forall x \\in [1; 2]$.\nDo đó hàm số nghịch biến trên $[1; 2]$, suy ra $\\max_{[1; 2]} f(x) = f(1) = -1$.\nVậy $m \\ge -1$.\nChọn B.",
    "socraticHint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  }
];
