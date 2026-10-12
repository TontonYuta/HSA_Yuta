import { Question } from '../../../types/exam';

export const maxMinThamSoMQuestions: Question[] = [
  {
    "id": 5,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $f(x) = |x^3 - 3x + m|$. Gọi $M$ là giá trị lớn nhất của $f(x)$ trên đoạn $[0; 2]$. Giá trị nhỏ nhất có thể có của $M$ bằng:",
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
    "correctAnswer": "A",
    "detailedSolution": "Xét hàm số $g(x) = x^3 - 3x$ trên đoạn $[0; 2]$.\nĐạo hàm $g'(x) = 3x^2 - 3 = 0 \\iff x = 1 \\in [0; 2]$.\nGiá trị tại các điểm đặc biệt:\n- $g(0) = 0$.\n- $g(1) = -2$.\n- $g(2) = 2$.\nSuy ra $\\min_{[0; 2]} g(x) = -2$ và $\\max_{[0; 2]} g(x) = 2$.\nKhi đó:\n$$M = \\max_{[0; 2]} |g(x) + m| = \\max\\{|-2 + m|; |2 + m|\\}.$$\nÁp dụng bất đẳng thức $|a| + |b| \\ge |a - b|$:\n$$|-2 + m| + |2 + m| = |m - 2| + |m + 2| \\ge |(m + 2) - (m - 2)| = 4.$$\nSuy ra:\n$$M = \\max\\{|m - 2|; |m + 2|\\} \\ge \\frac{|m - 2| + |m + 2|}{2} \\ge \\frac{4}{2} = 2.$$\nDấu bằng xảy ra khi $|m - 2| = |m + 2| \\iff m = 0$.\nVậy giá trị nhỏ nhất của $M$ là $2$.",
    "socraticHint": "Khảo sát hàm lõi $g(x) = x^3 - 3x$ trên đoạn $[0; 2]$, sau đó dùng bất đẳng thức $\\max\\{|A|, |B|\\} \\ge \\frac{|A - B|}{2}$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 87,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Tìm giá trị lớn nhất của hàm số $y = x^3 - 3x^2 - 9x + 35$ trên đoạn $[-2; 2]$.",
    "correctAnswer": "40",
    "acceptableAnswers": [
      "40"
    ],
    "detailedSolution": "Hàm số liên tục trên đoạn $[-2; 2]$.\nĐạo hàm: $y' = 3x^2 - 6x - 9$.\nCho $y' = 0 \\iff 3(x^2 - 2x - 3) = 0 \\iff x = -1$ hoặc $x = 3$.\nVì $3 \\notin [-2; 2]$, ta chỉ xét điểm tới hạn $x = -1$.\nTính giá trị tại các đầu mút và điểm tới hạn:\n- $y(-2) = (-2)^3 - 3(-2)^2 - 9(-2) + 35 = -8 - 12 + 18 + 35 = 33$.\n- $y(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 35 = -1 - 3 + 9 + 35 = 40$.\n- $y(2) = 2^3 - 3(2)^2 - 9(2) + 35 = 8 - 12 - 18 + 35 = 13$.\nSo sánh các giá trị, ta được giá trị lớn nhất là $40$ tại $x = -1$.",
    "socraticHint": "Khảo sát hàm số trên đoạn đóng bằng cách tính giá trị tại các điểm cực trị thuộc đoạn và hai đầu mút.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 186,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = x^3 - 3x^2 + 1$. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn $[-1; 4]$. Tính giá trị của biểu thức $T = M + 2m$.",
    "correctAnswer": "11",
    "acceptableAnswers": [
      "11",
      "11.0"
    ],
    "detailedSolution": "Đạo hàm $y' = 3x^2 - 6x = 3x(x - 2) = 0 \\iff x = 0$ hoặc $x = 2$ (đều thuộc $[-1; 4]$).\nTính các giá trị tại các điểm tới hạn và biên:\n- $y(-1) = (-1)^3 - 3(-1)^2 + 1 = -3$\n- $y(0) = 1$\n- $y(2) = 2^3 - 3(2^2) + 1 = 8 - 12 + 1 = -3$\n- $y(4) = 4^3 - 3(4^2) + 1 = 64 - 48 + 1 = 17$\nDo đó $M = \\max y = 17$ và $m = \\min y = -3$.\nGiá trị biểu thức: $T = M + 2m = 17 + 2(-3) = 17 - 6 = 11$.",
    "socraticHint": "Tìm các nghiệm $y' = 0$ nằm trong đoạn, so sánh giá trị tại các nghiệm đó và hai đầu mút.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 227,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Giá trị nhỏ nhất của hàm số $y = f(x) = -x + 3 - \\frac{1}{x + 2}$ trên $[-4; -2)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$-3$"
      },
      {
        "key": "C",
        "content": "$7$"
      },
      {
        "key": "D",
        "content": "$\\frac{15}{2}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Với $x \\in [-4; -2)$, đặt $t = -(x + 2)$. Khi đó $x + 2 \\in [-2; 0) \\implies t \\in (0; 2]$.\nBiểu diễn $x = -t - 2$. Khi đó:\n$$y = -(-t - 2) + 3 - \\frac{1}{-t} = t + 2 + 3 + \\frac{1}{t} = t + \\frac{1}{t} + 5$$\nVì $t > 0$, áp dụng bất đẳng thức AM-GM (Cauchy):\n$$t + \\frac{1}{t} \\ge 2\\sqrt{t \\cdot \\frac{1}{t}} = 2$$\nĐẳng thức xảy ra khi $t = \\frac{1}{t} \\iff t^2 = 1 \\iff t = 1$ (thỏa mãn $t \\in (0; 2]$).\nVới $t = 1 \\implies -(x + 2) = 1 \\iff x = -3 \\in [-4; -2)$.\nGiá trị nhỏ nhất của hàm số là:\n$$y_{\\min} = 2 + 5 = 7$$",
    "socraticHint": "Đổi biến $t = -(x+2) > 0$ để đưa về dạng $t + \\frac{1}{t} + 5$ rồi áp dụng bất đẳng thức Cauchy.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 258,
    "type": "fill",
    "topicId": "max_min_tham_so_m",
    "content": "Cho hàm số $y = f(x) = (1 + \\sin x + \\cos x)^2 + (1 - \\sin x - \\cos x)^2 - (1 - \\sin 2x) + 2m$. Số các giá trị nguyên dương của tham số $m$ để $f(x) \\le 36$ với mọi $x \\in \\mathbb{R}$ là bao nhiêu?",
    "correctAnswer": "15",
    "detailedSolution": "Đặt $t = \\sin x + \\cos x = \\sqrt{2}\\sin(x + \\pi/4) \\implies t \\in [-\\sqrt{2}; \\sqrt{2}]$.\nTa có: $t^2 = 1 + \\sin 2x \\implies 1 - \\sin 2x = 2 - t^2$.\nBiến đổi hàm số:\n$$(1 + t)^2 + (1 - t)^2 - (2 - t^2) + 2m = 2(1 + t^2) - 2 + t^2 + 2m = 3t^2 + 2m$$\nVì $t \\in [-\\sqrt{2}; \\sqrt{2}]$ nên $t^2 \\in [0; 2]$.\nGiá trị lớn nhất của $f(x)$ là: $\\max f(x) = 3(2) + 2m = 6 + 2m$.\nĐiều kiện $f(x) \\le 36, \\forall x \\iff 6 + 2m \\le 36 \\iff 2m \\le 30 \\iff m \\le 15$.\nVì $m$ là số nguyên dương nên $m \\in \\{1, 2, \\dots, 15\\}$.\nVậy có đúng 15 giá trị nguyên dương của $m$.",
    "socraticHint": "Đặt ẩn phụ $t = \\sin x + \\cos x$ với điều kiện $t \\in [-\\sqrt{2}; \\sqrt{2}]$ và biểu diễn $1 - \\sin 2x$ theo $t^2$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  },
  {
    "id": 465,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = 3m^2 - 1$ = 1 \\iff $m = 2$ (vì m > 0). 5 x - m^2 với m là tham số thực. Giả sử m0 là giá trị dương của tham số m để x +8 hàm số có giá trị nhỏ nhất trên đoạn $[0;3]$ bằng -3. Giá trị m0 thuộc khoảng nào trong các khoảng cho dưới đây?",
    "options": [
      {
        "key": "A",
        "content": "$(2;5)$"
      },
      {
        "key": "B",
        "content": "$(1; 4)$"
      },
      {
        "key": "C",
        "content": "$(6;9)$"
      },
      {
        "key": "D",
        "content": "$(20; 25)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "+ TXĐ: D = \\mathbb{R} \\ \\{-8\\} .\n+ y' =\n8 + m^2\n(x + 8)\n2\n> 0, \\forall x \\in D\nVậy hàm số y =\nx - m^2\nđồng biến trên [0;3] .\nx +8\n\\implies min y = y(0) =\n-m^2\n8\nĐể min y = -3 \\iff -m^2\n= -3 \\iff m = \\pm ^2 6.\n8\n[ 0;3]\n[ 0;3]\n\\implies m0 = 2 6 \\in (2;5) . Vậy chọnA.",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 466,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Tìm giá trị của tham số thực m để giá trị nhỏ nhất của hàm 2x + m số $y = trên đoạn $[ 0$; 4]$ bằng^3 . x +1",
    "options": [
      {
        "key": "A",
        "content": "$m = 3$"
      },
      {
        "key": "B",
        "content": "$m = 1$"
      },
      {
        "key": "C",
        "content": "$m = 7$"
      },
      {
        "key": "D",
        "content": "$m = 5$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Ta có: y' =\n2-m\n(x + 1)\n2\n.\n+ Xét m = 2 .\n\\implies Hàm số trở thành: y = 2 là hàm số hằng nên không đạt giá trị nhỏ nhất bằng^3\n\\implies m = 2 (loại)\n+ Xét m > 2 .\n\\implies y' =\n\\implies ^2-m\n(x + 1)\n2\n< 0 (\\forall x \\ne -1) \\implies min y = y (4) =\n[0;4]\n8+ m\n.\n5\n8+ m\n= 3 \\iff m = 7 (thoả mãn).\n5\n+ Xét m < 2 .\n\\implies y' =\n2-m\n(x + 1)\n2\n> 0 (\\forall x \\ne -1) \\implies min y = y(0) = m .\n[ 0;4]\n\\implies m = 3 (loại).\nVậy m = 7 .",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 467,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = x +m$ (m là tham số thực) thỏa mãn x +1 min $y = 3$. Mệnh đề nào dưới đây đúng? [ ] $[0;1]$",
    "options": [
      {
        "key": "A",
        "content": "$1 \\le m < 3$"
      },
      {
        "key": "B",
        "content": "$m > 6$"
      },
      {
        "key": "C",
        "content": "$m < 1$"
      },
      {
        "key": "D",
        "content": "$3 < m \\le ^6$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. 3 < m \\le ^6\nChọn D\nTập xác định: D = \\mathbb{R} \\ \\{-1\\} .\ny \\ne ^3.\nVới m = 1 \\implies y = 1 , \\forall x \\in [[0;1]] thì min\n[ ]\n[0;1]\nSuy ra m \\ne 1 . Khi đó y' =\n1-m\n(x + 1)\n2\nkhông đổi dấu trên từng khoảng xác định.\ny = y (0) \\implies m = 3 (loại).\nTH 1: y' > 0 \\iff m < 1 thì min\n[ ]\n[0;1]\ny = y (1) \\implies m = 5 (thỏa mãn).\nTH^2: y' < 0 \\iff m > 1 thì min\n[ ]\n[0;1]",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 468,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Giả sử m0 là giá trị dương x+8 của tham số m để hàm số có giá trị nhỏ nhất trên đoạn $[ 0;3]$ bằng -3 . Giá trị m0 thuộc khoảng (Sở Hưng Yên) Cho hàm số f (x) = nào trong các khoảng cho dưới đây?",
    "options": [
      {
        "key": "A",
        "content": "$(20; 25)$"
      },
      {
        "key": "B",
        "content": "$(5; 6)$"
      },
      {
        "key": "C",
        "content": "$(6;9)$"
      },
      {
        "key": "D",
        "content": "$(2;5)$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Xét hàm số f (x) =\nx - m^2\ntrên đoạn [ 0;3] .\nx +8\nTa có: y' =\n8 + m^2\n(x + 8)\n> 0, \\forall x \\in [ 0;3] \\implies hàm số f (x) =\n2\n\\implies min f (x) = f (0) =\n[0;3]\nx - m^2\nđồng biến trên đoạn [ 0;3]\nx +8\n-m^2\n.\n8\nTheo giả thiết, ta có: min f (x) = -3 \\iff [0;3]\n[m = 2 6\n-m^2\n= -3 \\iff m^2 = 24 \\iff [\n.\n8\n[ m = -2 6\nMà m > 0, m \\in \\mathbb{R} \\implies m = 2 6  4,9 \\in (2;5) .",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 469,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Tìm tất cả các giá trị của tham số m để giá trị nhỏ nhất của hàm số $y = - x^3 - 3x^2 + m trên đoạn $[ -1$;1]$ bằng 0 .",
    "options": [
      {
        "key": "A",
        "content": "$m = 2$"
      },
      {
        "key": "B",
        "content": "$m = 6$"
      },
      {
        "key": "C",
        "content": "$m = 0$"
      },
      {
        "key": "D",
        "content": "$m = 4$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. m = 4.\nChọn D\n[ x = 0 \\in [ -1;1]\nXét hàm số y = - x^3 - 3x^2 + m trên đoạn [ -1;1] , ta có y' = -3 x^2 - 6 x; y' = 0 \\iff [\n[ x = -2 \\notin [ -1;1]\ny'(-1) = m - 2\nMà y'(0) = m\ny'(1) = m - 4\nDo đó min y = -4 + m = 0 \\iff m = 4.\n[ -1;1]\nVậy m = 4 thỏa yêu cầu bài toán.",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 470,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Có một giá trị m0 của tham số m để hàm số $y = x^3 + (m^2 +1) x + m +1 đạt giá trị nhỏ nhất bằng^5 trên đoạn $[ 0$;1]$ . Mệnh đề nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$2018m0 - m02 \\ge 0$"
      },
      {
        "key": "B",
        "content": "$2m0 -1 < 0$"
      },
      {
        "key": "C",
        "content": "$6m0 - m02 < 0$"
      },
      {
        "key": "D",
        "content": "$2m0 +1 < 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "+ Đặt f (x) = x^3 + (m^2 +1) x + m +1 .\n+ Ta có: y' = 3x^2 + m^2 +1. Dễ thấy rằng y' > 0 với mọi x , m thuộc \\mathbb{R} nên hàm số đồng biến\ntrên \\mathbb{R} , suy ra hàm số đồng biến trên [ 0;1] . Vì thế min y = min f (x) = f (0) = m + 1 .\n[ 0;1]\n[ 0;1]\n+ Theo bài ra ta có: m + 1 = 5 , suy ra m = 4 .\n+ Như vậy m0 = 4 và mệnh đề đúng là 2018m0 - m02 \\ge 0 .",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 471,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = 2 x^3 - 3x^2 - m$. Trên $[ -1;1]$ hàm số có giá trị nhỏ nhất là -1 . Tính m ?",
    "options": [
      {
        "key": "A",
        "content": "$m = -6$"
      },
      {
        "key": "B",
        "content": "$m = -3$"
      },
      {
        "key": "C",
        "content": "$m = -4$"
      },
      {
        "key": "D",
        "content": "$m = -5$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. m = -5 .\nChọn C\nXét [ -1;1] có y' = 6 x^2 - 6 x .\n[ x = 0 \\in [ -1;1]\n.\ny' = 0 \\iff ^6 x^2 - 6 x = 0 \\iff [\n[ x = 1 \\in [ -1;1]\nKhi đó\ny (-1) = -5 - m ; y (0) = - m ; y (1) = -1 - m\nTa thấy -5 - m < -1 - m < -m nên min y = -5 - m .\n[-1;1]\nTheo bài ra ta có min y = -1 nên -5 - m = -1 \\iff m = -4 .\n[ -1;1]",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 472,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Biết S là tập giá trị của m để tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = x^4 - m^2 x^3 - 2 x^2 - m trên đoạn $[ 0$;1]$ bằng -16 . Tính tích các phần tử của S .",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$-2$"
      },
      {
        "key": "C",
        "content": "$-15$"
      },
      {
        "key": "D",
        "content": "$-17$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "TXĐ: D = \\mathbb{R} .\nTa có: y' = 4 x^3 - 3m^2 x^2 - 4 x\n[x = 0\ny' = 0 \\iff ^4 x^3 - 3m^2 x^2 - 4 x = 0 \\iff [ 2\n2\n2\n[ 4 x - 3m x - 4 = 0 (\\\\Delta = 9m + 64)\n[\n[x = 0\n[\n3m^2 + 9m^4 + 64\n[\n\\iff [x =\n>1\n8\n[\n[\n3m^2 - 9m^4 + 64\nx\n=\n<0\n[\n8\n[\nNên hàm số đơn điệu trên (0;1) .\nTổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn\n[0;1] bằng -16 nên\ny (0) + y (1) = -16 \\iff -m + (-m^2 - m - 1) = -16 \\iff -m^2 - 2m + 15 = 0 .\nVậy m1.m^2 = -15 .",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 473,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Tìm tất cả giá trị thực của tham số m để hàm số x^2 + mx + 1 liên tục và đạt giá trị nhỏ nhất trên đoạn $[ 0; 2 ]$ tại một điểm x0 \\in (0; 2) . x+m",
    "options": [
      {
        "key": "A",
        "content": "$0 < m < 1$"
      },
      {
        "key": "B",
        "content": "$m > 1$"
      },
      {
        "key": "C",
        "content": "$m > 2$"
      },
      {
        "key": "D",
        "content": "$-1 < m < 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "[-m < 0\n[m > 0\n\\iff [\nTập xác định: D = \\mathbb{R} \\ \\{- m\\} . Hàm số liên tục trên [ 0; 2 ] \\iff [\n[-m > 2\n[ m < -2\ny=\nTa có y' =\nx^2 + 2mx + m^2 - 1\n(x + m)\n2\n2\n=\n[ x1 = - m - 1\n(x + m) - 1 . Cho '\n.\ny =0 \\iff [\n2\n(x + m)\n[ x^2 = - m + 1\nTa có bảng biến thiên\nHàm số đạt giá trị nhỏ nhất tại x0 \\in (0; 2) nên 0 < - m + 1 < 2 \\iff -1 < m < 1\nSo với điều kiện hàm số liên tục trên đoạn [ 0; 2 ] . Ta có 0 < m < 1 .\nCÓ THỂ GIẢI NHƯ SAU:\nĐiều kiện xác định x \\ne -m\n[-m < 0\n[m > 0\nHàm số liên tục trên đoạn [ 0; 2 ] nên - m \\in [ 0; 2] \\implies [\n\\iff [\n(*)\n[-m > 2\n[ m < -2\ny'=\nx^2 + 2mx + m^2 - 1\n(x + m)\n2\n2\n(x + m) -1\n=\n2\n(x + m)\n[ x = -m + 1\n,\ny' = 0 có hai nghiệm là [ 1\n[ x^2 = - m - 1\nx1 - x^2 = 2 nên chỉ có nhiều nhất một nghiệm thuộc (0; 2)\nTa thấy -m + 1 > -m - 1, \\forall m và do đó để hàm số liên tục và đạt giá trị nhỏ nhất trên [ 0; 2 ] tại một\nđiểm x0 \\in (0; 2) thì 0 < - m + 1 < 2 \\iff -1 < m < 1 (**)\nTừ (*) , (**) ta có 0 < m < 1",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 474,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Có bao nhiêu giá trị nguyên cos x + 2 của tham số m thuộc đoạn $[ 0;10]$ để giá trị nhỏ nhất của hàm số nhỏ hơn -2 ? (THPT Bạch Đằng Quảng Ninh 2019) Cho hàm số y =",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$9$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$6$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. 6 .\nTập xác định: D = \\mathbb{R} .\n1 - m sin x\n\\iff y cos x + m sin x = 1 - 2 y .\nTa có: y =\ncos x + 2\nPhương trình có nghiệm khi và chỉ khi: y^2 + m^2 \\ge 1 - 4 y + 4 y^2 \\iff ^3 y^2 - 4 y + 1 - m^2 \\le 0\n\\iff ^2 - 1 + 3m^2\n2 + 1 + 3m^2\n\\le y\\le .\n3\n3\n2 - 1 + 3m^2\n< -2\nmin y =\n1 + 3m^2 > 8\n3m^2 > 63\nm^2 > 21\n3\nx\\in \\mathbb{R}\nTheo đề bài, ta có: m \\in [ 0;10]\n\\iff m \\in [ 0;10] \\iff m \\in [ 0;10] \\iff m \\in [ 0;10]\nm \\in '\nm \\in '\nm \\in '\nm \\in '\n\\iff m \\in \\{5, 6, 7,8, 9,10\\} .\nVậy có 6 giá trị nguyên của tham số m thỏa yêu cầu bài toán.",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 475,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = (x^3 - 3x + m)$. Tổng tất cả các giá trị của tham số m sao cho giá trị nhỏ nhất của hàm số trên đoạn $[ -1;1]$ bằng 1 là",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$-4$"
      },
      {
        "key": "C",
        "content": "$0$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 4 .\nChọn C\nD = \\mathbb{R}.\nĐặt t = x^3 - 3 x, x \\in [ -1;1] \\implies t \\in [ -2; 2 ] .\n2\nKhi đó ta có hàm số f (t) = (t + m) .\nf'(t) = 2 (t + m) ; f'(t) = 0 \\iff t = - m.\nTrường hợp 1: -2 < -m < 2 \\iff -2 < m < 2.\nTừ bảng biến thiên ta thấy: min f (t) = f (-m) = 0 không thỏa mãn yêu cầu.\n[ -2;2]\nTrường hợp^2: -m \\le -2 \\iff m \\ge ^2\n2\nTừ bảng biến thiên ta thấy: min f (t) = f (-2) = (m - 2) .\n[ -2;2]\n[m = 3 m \\ge ^2\n2\n\\to m = 3.\nTheo yêu cầu bài toán: (m - 2) = 1 \\iff [\n[m = 1\nTrường hợp^3: -m \\ge ^2 \\iff m \\le -2\n2\nTừ bảng biến thiên ta thấy: min f (t) = f (2) = (m + 2) .\n[ -2;2]\n[ m = -3 m \\le -2\n2\n\\to m = -3.\nTheo yêu cầu bài toán: (m + 2) = 1 \\iff [\n[ m = -1\nVậy tổng các giá trị của tham số m thỏa mãn yêu cầu là: 3 + (-3) = 0.",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 476,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Tìm tất cả các giá trị của m > 0 để giá trị nhỏ nhất của hàm số $y = x^3 - 3 x + 1 trên đoạn $[ m + 1$; m + 2 ]$ luôn bé hơn^3 .",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (0; 2)$"
      },
      {
        "key": "B",
        "content": "$m \\in (0;1)$"
      },
      {
        "key": "C",
        "content": "$m \\in (1; + \\infty)$"
      },
      {
        "key": "D",
        "content": "$m \\in (0; + \\infty)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "2\nTa có y' = 3x - 3 , y' = 0 \\iff x = \\pm 1 do đó yCT = y (1) = -1 và yCĐ = y (-1) = 3 .\nThấy ngay với m > 0 thì trên đoạn [ m + 1; m + 2 ] hàm số luôn đồng biến.\n3\nVậy GTNN của hàm số đã cho trên đoạn [ m + 1; m + 2 ] là y (m + 1) = (m + 1) - 3 (m + 1) + 1 .\nm + 1 < 2\nm < 1\n3\n\\iff GTNN luôn bé hơn^3 \\iff (m + 1) - 3 (m + 1) - 2 < 0 \\iff .\nm + 1 \\ne -1\nm \\ne -2\nKết hợp điều kiện m > 0 ta được m \\in (0;1) .",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 477,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "(Chuyên Thái Bình - 2020) Cho hàm số $y = x^3 - 3mx^2 + 3 m^2 - 1 x + 2020$. Có tất cả bao nhiêu giá trị nguyên của m sao cho hàm số có giá trị nhỏ nhất trên khoảng $(0; +\\infty)$ ?",
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
        "content": "Vô số"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "D. 3 .\nChọn D\n[ x1 = m - 1\nTa có: y' = 3x^2 - 6mx + 3 (m^2 - 1) = 0 \\iff [\n.\n[ x^2 = m + 1\nĐể hàm số có giá trị nhỏ nhất trên khoảng (0; +\\infty) thì x1 \\le 0 < x^2 hoặc 0 < x1 < x^2 .\nTH1: x1 \\le 0 < x^2 \\iff m - 1 \\le 0 < m + 1 \\iff -1 < m \\le 1 . Do m \\in ' \\implies m \\in \\{0;1\\} .\nBBT của hàm số:\nTH^2: 0 < x1 < x^2 .\nBBT của hàm số\nm - 1 > 0\nHàm số có giá trị nhỏ nhất trên khoảng (0; +\\infty) khi và chỉ khi\n.\ny (m + 1) \\le y (0)\nm > 1\n\\iff ^3\n2\n2\n(m + 1) - 3m (m + 1) + 3 (m - 1) (m + 1) + 2020 \\le 2020\nm > 1\n\\iff ^2\n(m + 1) (m - 2) \\le 0\nm > 1\n\\iff [m \\le ^2 \\iff 1 < m \\le ^2 .\n[ m = -1\n[\nDo m \\in ' \\implies m = 2 .\nVậy m \\in \\{0;1; 2\\} .",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 478,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = m sin x + 1$ có bao nhiêu giá trị nguyên của tham cosx + 2 số m thuộc đoạn $[ -5;5]$ để giá trị nhỏ nhất của y nhỏ hơn -1 .",
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
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$8$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "D. 8 .\nChọn C\nĐiều kiện: cosx + 2 \\ne 0 luôn đúng \\forall x \\in \\mathbb{R} .\nm sin x + 1\ny=\n\\iff y (cosx + 2) = m sin x + 1 (do cosx + 2 \\ne 0 luôn đúng \\forall x \\in \\mathbb{R})\ncosx + 2\n\\iff m sin x - ycosx = 2 y - 1 (*).\nPhương trình (*) có nghiệm^2\n\\iff m^2 + y^2 \\ge (2 y - 1) \\iff ^3 y^2 - 4 y + 1 - m^2 \\le 0 \\iff Vậy Min y =\n\\mathbb{R}\n2 - 1 + 3m^2\n2 + 1 + 3m^2\n\\le y\\le .\n3\n3\n2 - 1 + 3m^2\n.\n3\nMin y < -1 \\iff \\mathbb{R}\n[ m > 2 2  2,82\n2 - 1 + 3m^2\n.\n< -1 \\iff 1 + 3m^2 > 5 \\iff m^2 - 8 > 0 \\iff [\n3\n[ m < -2 2  -2,82\nMà m \\in ', m \\in [ -5;5] nên m \\in \\{-5; -4; -3;3; 4;5\\} .",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 479,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Gọi S là tập hợp tất cả các giá trị thực của tham số m sao cho giá 34 trị nhỏ nhất của hàm số f (x) = trên đoạn $[ 0;3]$ bằng^2. Tổng tất cả các phần^2 3 (x - 3 x + 2m) + 1 tử của S bằng",
    "options": [
      {
        "key": "A",
        "content": "$8$"
      },
      {
        "key": "B",
        "content": "$-8$"
      },
      {
        "key": "C",
        "content": "$-6$"
      },
      {
        "key": "D",
        "content": "$- 1$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "D. - 1 .\nChọn B\nTa có\n2\n(x - 3 x + 2m) = x - 3 x + 2m^3\n3\nNhận thấy min f (x) = 2 \\iff max x^3 - 3 x + 2m = 16\n[0;3]\n[0;3]\n(1) .\nXét hàm số g (x) = x^3 - 3 x + 2m trên [ 0;3] , ta có:\n[ x = 1 \\in (0;3)\n+ g ' (x) = 3x^2 - 3 , g ' (x) = 3x^2 - 3 = 0 \\iff [\n[ x = -1 \\notin (0;3)\n+ g (0) = 2m, g (1) = 2m - 2, g (3) = 2m + 18\nDo đó 2m - 2 \\le g (x) \\le 2m + 18, \\forall x \\in [ 0;3] , tức max x^3 - 3x + 2m = max \\{ 2m - 2 ; 2m + 18 \\} .\n[0;3]\n[0;3]\nTừ đây ta có (1) \\iff max \\{ 2m - 2 ; 2m + 18 \\} = 16\n[0;3]\n[ 2m + 18 > 2m - 2\n[\n[ 2m + 18 = 16\n[ m = -1\n. Suy ra S = \\{-7; -1\\} . Vậy, tổng các phần tử của S là -8 .\n\\iff [\n\\iff [\n[ m = -7\n[ 2m + 18 \\le 2m - 2\n[\n[ 2m - 2 = 16",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 480,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "(THPT Nguyễn Viết Xuân - 2020) Cho hàm số $y = (x^3 - 3 x + m + 1)$. Tổng tất cả các giá trị của tham số m sao cho giá trị nhỏ nhất của hàm số trên đoạn $[ -1;1]$ bằng 1 là",
    "options": [
      {
        "key": "A",
        "content": "$-2$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$-4$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "D. 0 .\nChọn A^2\nĐặt y = f (x) = (x^3 - 3 x + m + 1) là hàm số xác định và liên tục trên đoạn [ -1;1] .\nTa có y' = f'(x) = 2 (x^3 - 3 x + m + 1)(3 x^2 - 3) .\n[ x = \\pm 1\nf'(x) = 0 \\iff [\n.\n3\n[ m = - x + 3 x - 1 = g (x)\nTa khảo sát hàm số g (x) trên đoạn [ -1;1] .\nBảng biến thiên của g (x)\nNếu m \\in [ -3;1] thì luôn tồn tại x0 \\in [ -1;1] sao cho m = g (x0) hay f (x0) = 0 . Suy ra\nmin y = 0 , tức là không tồn tại m thỏa mãn yêu cầu bài toán.\n[ -1;1]\nNếu m \\notin [ -3;1] thì f'(x) = 0 \\iff x = \\pm 1\\in [ -1;1] .\nTa có: min f (x) = min \\{ f (1); f (-1)\\} = min \\{(m - 1) 2 ;(m + 3)2 \\}\n[ -1;1]\nTrường hợp 1: m > 1 tức là m + 3 > m - 1 > 0 suy ra\n[ m = 2 (TM)\nmin f (x) = (m - 1)2 = 1 \\iff [\n[ -1;1]\n[ m = 0 (KTM)\nTrường hợp^2: m < -3 tức là m - 1 < m + 3 < 0 suy ra\n[ m = -4 (TM)\nmin f (x) = (m + 3)2 = 1 \\iff [\n[-1;1]\n[ m = -2 (KTM)\nVậy có hai giá trị của m thỏa mãn yêu cầu bài toán: m = 2; m = -4 , từ đó tổng tất cả các giá trị\ncủa m là -2 .",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng cao"
  },
  {
    "id": 481,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số f (x) = ax^4 + 2 (a + 4) x^2 - 1 với a là tham số thực. Nếu max f (x) = f (1) thì min f (x) bằng $[0;2] [0;2]$",
    "options": [
      {
        "key": "A",
        "content": "$-17$"
      },
      {
        "key": "B",
        "content": "$-16$"
      },
      {
        "key": "C",
        "content": "$-1$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Từ giả thiết ta có f'(1) = 0\n\\implies 4a + 4 (a + 4) = 0 \\iff a = -2 và f (x) = -2 x^4 + 4 x^2 - 1\nTa có f (0) = -1 , f (1) = 1 , f (2) = -17\nVậy min f (x) = f (2) = -17\n[0;2]",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng"
  },
  {
    "id": 482,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Có bao nhiên giá trị của tham số a thuộc đoạn $[ -10;10]$ để hàm số $y = ax^4 + 3x^2 + cx đạt giá trị nhỏ nhất trên đoạn $[0$; 4]$ tại $x = 1$",
    "options": [
      {
        "key": "A",
        "content": "$11$"
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
    "detailedSolution": "y = f (x) = ax^4 + 3x^2 + cx đạt giá trị nhỏ nhất trên đoạn [0; 4] tại x = 1 \\implies f'(1) = 0\nf'(x) = 4ax^3 + 6 x + c\n\\implies f'(1) = 4a + 6 + c = 0 \\implies c = -4a - 6\n\\implies 4ax^3 + 6 x - 4 a - 6 = 0\n\\iff 4a (x^3 - 1) + 6(x - 1) = 0\n()\n\\iff (x - 1) [ 4a x^2 + x + 1 + 6 ] = 0\nĐể y = f (x) đạt giá trị nhỏ nhất trên đoạn [0; 4] tại x = 1\n\\implies ^4 ax^2 + 4ax + 4a + 6 = 0 vô nghiệm\n\\\\Delta' = 4a^2 - 4a(4a + 6) < 0\n\\iff a^2 + 2a > 0\n\\implies a < -2 hoặc a > 0\nf (4) > f (1) \\iff 256a + 48 + 4(-4a - 6) > a + 3 + (-4a - 6) \\implies a >\n-1\n9\nf (0) > f (1) \\iff 0 > a + 3 + (-4a - 6) \\implies a > -1\nKết hợp với điêu kiện m = {1; 2;310} có 10 giá trị \\implies chọn B",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng"
  }
];
