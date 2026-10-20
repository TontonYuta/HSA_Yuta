import { Question } from '../../../types/exam';

export const maxMinThamSoMQuestions: Question[] = [
  {
    "id": 5,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 87,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 186,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 227,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
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
    ],
    "answerVerified": true
  },
  {
    "id": 258,
    "latexVerified": true,
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
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "answerVerified": true
  },
  {
    "id": 465,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = \\frac{x - m^2}{x + 8}$ với $m$ là tham số thực. Giả sử $m_0$ là giá trị dương của tham số $m$ để hàm số có giá trị nhỏ nhất trên đoạn $[0; 3]$ bằng $-3$. Giá trị $m_0$ thuộc khoảng nào trong các khoảng cho dưới đây?",
    "options": [
      {
        "key": "A",
        "content": "$(2; 5)$"
      },
      {
        "key": "B",
        "content": "$(1; 4)$"
      },
      {
        "key": "C",
        "content": "$(6; 9)$"
      },
      {
        "key": "D",
        "content": "$(20; 25)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-8\\}$.\nTa có: $y' = \\frac{8 + m^2}{(x + 8)^2} > 0, \\forall x \\in D$.\nDo đó hàm số đồng biến trên đoạn $[0; 3]$.\nSuy ra $\\min_{[0; 3]} y = y(0) = -\\frac{m^2}{8}$.\nTheo giả thiết: $\\min_{[0; 3]} y = -3 \\iff -\\frac{m^2}{8} = -3 \\iff m^2 = 24 \\iff m = \\pm 2\\sqrt{6}$.\nVì $m > 0$ nên $m_0 = 2\\sqrt{6} \\approx 4{,}9 \\in (2; 5)$.\nVậy chọn A.",
    "socraticHint": "Tính đạo hàm $y'$, xác định tính đơn điệu của hàm số trên đoạn $[0; 3]$ rồi tìm giá trị nhỏ nhất theo tham số $m$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 466,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Tìm giá trị của tham số thực $m$ để giá trị nhỏ nhất của hàm số $y = \\frac{2x + m}{x + 1}$ trên đoạn $[0; 4]$ bằng $3$.",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$. Ta có $y' = \\frac{2 - m}{(x + 1)^2}$.\n- Xét $m = 2$: Hàm số trở thành $y = 2$ là hàm hằng nên không đạt giá trị nhỏ nhất bằng 3 (loại).\n- Xét $m > 2$: $y' < 0, \\forall x \\ne -1 \\implies \\min_{[0; 4]} y = y(4) = \\frac{8 + m}{5}$.\nTheo đề bài: $\\frac{8 + m}{5} = 3 \\iff 8 + m = 15 \\iff m = 7$ (thỏa mãn $m > 2$).\n- Xét $m < 2$: $y' > 0, \\forall x \\ne -1 \\implies \\min_{[0; 4]} y = y(0) = m$.\nTheo đề bài: $m = 3$ (loại vì đang xét $m < 2$).\nVậy $m = 7$.",
    "socraticHint": "Tính đạo hàm $y'$, xét dấu đạo hàm phụ thuộc vào tử số $2 - m$ để xác định GTNN trên đoạn $[0; 4]$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 467,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = \\frac{x + m}{x + 1}$ ($m$ là tham số thực) thỏa mãn $\\min_{[0; 1]} y = 3$. Mệnh đề nào dưới đây đúng?",
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
        "content": "$3 < m \\le 6$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.\n- Với $m = 1 \\implies y = 1, \\forall x \\in [0; 1] \\implies \\min_{[0; 1]} y = 1 \\ne 3$ (loại).\n- Với $m \\ne 1$, ta có $y' = \\frac{1 - m}{(x + 1)^2}$.\n+ Trường hợp 1: $y' > 0 \\iff m < 1$: Hàm số đồng biến trên $[0; 1] \\implies \\min_{[0; 1]} y = y(0) = m \\implies m = 3$ (loại vì $m < 1$).\n+ Trường hợp 2: $y' < 0 \\iff m > 1$: Hàm số nghịch biến trên $[0; 1] \\implies \\min_{[0; 1]} y = y(1) = \\frac{1 + m}{2}$.\nTheo đề bài: $\\frac{1 + m}{2} = 3 \\iff 1 + m = 6 \\iff m = 5$ (thỏa mãn $m > 1$).\nVới $m = 5$, ta có $3 < m \\le 6$. Chọn D.",
    "socraticHint": "Tính đạo hàm $y' = \\frac{1-m}{(x+1)^2}$ và chia các trường hợp của $m$ so với 1 để tìm GTNN.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 468,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $f(x) = \\frac{x - m^2}{x + 8}$. Giả sử $m_0$ là giá trị dương của tham số $m$ để hàm số có giá trị nhỏ nhất trên đoạn $[0; 3]$ bằng $-3$. Giá trị $m_0$ thuộc khoảng nào trong các khoảng cho dưới đây?",
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
        "content": "$(6; 9)$"
      },
      {
        "key": "D",
        "content": "$(2; 5)$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Xét hàm số $f(x) = \\frac{x - m^2}{x + 8}$ trên đoạn $[0; 3]$.\nTa có: $f'(x) = \\frac{8 + m^2}{(x + 8)^2} > 0, \\forall x \\in [0; 3] \\implies f(x)$ đồng biến trên đoạn $[0; 3]$.\nSuy ra $\\min_{[0; 3]} f(x) = f(0) = -\\frac{m^2}{8}$.\nTheo giả thiết: $\\min_{[0; 3]} f(x) = -3 \\iff -\\frac{m^2}{8} = -3 \\iff m^2 = 24 \\iff m = \\pm 2\\sqrt{6}$.\nMà $m > 0 \\implies m_0 = 2\\sqrt{6} \\approx 4{,}9 \\in (2; 5)$.\nVậy chọn D.",
    "socraticHint": "Tính đạo hàm $f'(x)$, nhận xét tính đồng biến trên đoạn $[0; 3]$, từ đó tìm GTNN tại $x = 0$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 469,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Tìm tất cả các giá trị của tham số $m$ để giá trị nhỏ nhất của hàm số $y = -x^3 - 3x^2 + m$ trên đoạn $[-1; 1]$ bằng $0$.",
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
    "detailedSolution": "Xét hàm số $y = -x^3 - 3x^2 + m$ trên đoạn $[-1; 1]$.\nTa có $y' = -3x^2 - 6x = 0 \\iff x = 0 \\in [-1; 1]$ hoặc $x = -2 \\notin [-1; 1]$.\nTính các giá trị:\n$y(-1) = m - 2$\n$y(0) = m$\n$y(1) = m - 4$\nDo đó $\\min_{[-1; 1]} y = y(1) = m - 4$.\nTheo bài ra: $\\min_{[-1; 1]} y = 0 \\iff m - 4 = 0 \\iff m = 4$.\nVậy chọn D.",
    "socraticHint": "Tìm nghiệm của đạo hàm trên đoạn $[-1; 1]$, so sánh giá trị tại nghiệm và hai đầu mút.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 470,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Có một giá trị $m_0$ của tham số $m$ để hàm số $y = x^3 + (m^2 + 1)x + m + 1$ đạt giá trị nhỏ nhất bằng $5$ trên đoạn $[0; 1]$. Mệnh đề nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$2018m_0 - m_0^2 \\ge 0$"
      },
      {
        "key": "B",
        "content": "$2m_0 - 1 < 0$"
      },
      {
        "key": "C",
        "content": "$6m_0 - m_0^2 < 0$"
      },
      {
        "key": "D",
        "content": "$2m_0 + 1 < 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $f(x) = x^3 + (m^2 + 1)x + m + 1$.\nTa có: $f'(x) = 3x^2 + m^2 + 1 > 0, \\forall x \\in \\mathbb{R}$, nên hàm số luôn đồng biến trên $\\mathbb{R}$.\nSuy ra hàm số đồng biến trên $[0; 1]$, do đó $\\min_{[0; 1]} y = f(0) = m + 1$.\nTheo đề bài: $m + 1 = 5 \\iff m = 4 \\implies m_0 = 4$.\nKiểm tra các mệnh đề với $m_0 = 4$:\n$2018(4) - 4^2 = 8056 \\ge 0$ (đúng).\nVậy chọn A.",
    "socraticHint": "Nhận xét dấu đạo hàm $y' = 3x^2 + m^2 + 1 > 0$ để kết luận hàm số luôn đồng biến.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 471,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = 2x^3 - 3x^2 - m$. Trên $[-1; 1]$ hàm số có giá trị nhỏ nhất là $-1$. Tính $m$.",
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
    "detailedSolution": "Xét trên $[-1; 1]$, ta có $y' = 6x^2 - 6x = 0 \\iff x = 0 \\in [-1; 1]$ hoặc $x = 1 \\in [-1; 1]$.\nTính các giá trị:\n$y(-1) = -5 - m$\n$y(0) = -m$\n$y(1) = -1 - m$\nTa thấy $-5 - m < -1 - m < -m$, do đó $\\min_{[-1; 1]} y = -5 - m$.\nTheo bài ra: $\\min_{[-1; 1]} y = -1 \\iff -5 - m = -1 \\iff m = -4$.\nChọn C.",
    "socraticHint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 472,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Biết $S$ là tập giá trị của $m$ để tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = x^4 - m^2 x^3 - 2x^2 - m$ trên đoạn $[0; 1]$ bằng $-16$. Tính tích các phần tử của $S$.",
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
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nTa có: $y' = 4x^3 - 3m^2 x^2 - 4x = x(4x^2 - 3m^2 x - 4)$.\nPhương trình $y' = 0 \\iff x = 0$ hoặc $4x^2 - 3m^2 x - 4 = 0$.\nVì phương trình bậc hai có tích hệ số $a \\cdot c = 4(-4) = -16 < 0$ nên luôn có hai nghiệm trái dấu $x_1 < 0 < x_2$.\nMặt khác, tại $x = 1$, $g(1) = 4 - 3m^2 - 4 = -3m^2 \\le 0 \\implies x_2 \\ge 1$.\nDo đó trên khoảng $(0; 1)$ đạo hàm không đổi dấu, hàm số đơn điệu trên $(0; 1)$.\nTổng giá trị lớn nhất và giá trị nhỏ nhất trên $[0; 1]$ là:\n$y(0) + y(1) = -16 \\iff -m + (1 - m^2 - 2 - m) = -16 \\iff -m^2 - 2m + 15 = 0 \\iff m^2 + 2m - 15 = 0$.\nPhương trình có 2 nghiệm $m_1, m_2$, theo định lý Viète tích các phần tử của $S$ là $m_1 m_2 = -15$.\nChọn C.",
    "socraticHint": "Xét nghiệm của đạo hàm trên khoảng $(0; 1)$, nhận xét tính đơn điệu của hàm số rồi tính tổng GTLN và GTNN.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 473,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Tìm tất cả giá trị thực của tham số $m$ để hàm số $y = \\frac{x^2 + mx + 1}{x + m}$ liên tục và đạt giá trị nhỏ nhất trên đoạn $[0; 2]$ tại một điểm $x_0 \\in (0; 2)$.",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-m\\}$.\nĐể hàm số liên tục trên $[0; 2]$ thì $-m \\notin [0; 2] \\iff -m < 0$ hoặc $-m > 2 \\iff m > 0$ hoặc $m < -2$ (*).\nTa có: $y' = \\frac{(2x + m)(x + m) - (x^2 + mx + 1)}{(x + m)^2} = \\frac{x^2 + 2mx + m^2 - 1}{(x + m)^2} = \\frac{(x + m)^2 - 1}{(x + m)^2}$.\n$y' = 0 \\iff (x + m)^2 = 1 \\iff x = -m + 1$ hoặc $x = -m - 1$.\nKhoảng cách giữa hai nghiệm là $(-m + 1) - (-m - 1) = 2$ nên chỉ có nhiều nhất một nghiệm thuộc $(0; 2)$.\nVì hệ số của $(x + m)^2$ dương nên $x = -m + 1$ là điểm cực tiểu.\nĐể hàm số đạt GTNN tại $x_0 \\in (0; 2)$ thì điểm cực tiểu phải thuộc khoảng $(0; 2)$:\n$0 < -m + 1 < 2 \\iff -1 < m < 1$ (**).\nKết hợp (*) và (**), ta được $0 < m < 1$.\nChọn A.",
    "socraticHint": "Tìm điều kiện liên tục $-m \\notin [0; 2]$, sau đó tìm điểm cực tiểu thuộc $(0; 2)$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 474,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = \\frac{1 - m\\sin x}{\\cos x + 2}$. Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[0; 10]$ để giá trị nhỏ nhất của hàm số nhỏ hơn $-2$?",
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
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$ vì $\\cos x + 2 > 0, \\forall x$.\nBiến đổi hàm số: $y(\\cos x + 2) = 1 - m\\sin x \\iff m\\sin x + y\\cos x = 1 - 2y$.\nPhương trình có nghiệm đối với $x$ khi và chỉ khi:\n$m^2 + y^2 \\ge (1 - 2y)^2 \\iff m^2 + y^2 \\ge 1 - 4y + 4y^2 \\iff 3y^2 - 4y + 1 - m^2 \\le 0$.\nTam thức bậc hai có $\\Delta' = 4 - 3(1 - m^2) = 1 + 3m^2 > 0$.\nNghiệm của tam thức là $y = \\frac{2 \\pm \\sqrt{1 + 3m^2}}{3}$.\nDo đó: $\\frac{2 - \\sqrt{1 + 3m^2}}{3} \\le y \\le \\frac{2 + \\sqrt{1 + 3m^2}}{3}$.\nSuy ra $\\min_{x \\in \\mathbb{R}} y = \\frac{2 - \\sqrt{1 + 3m^2}}{3}$.\nTheo đề bài: $\\min y < -2 \\iff \\frac{2 - \\sqrt{1 + 3m^2}}{3} < -2 \\iff \\sqrt{1 + 3m^2} > 8 \\iff 1 + 3m^2 > 64 \\iff 3m^2 > 63 \\iff m^2 > 21$.\nVì $m$ nguyên và $m \\in [0; 10]$, ta có $m \\in \\{5, 6, 7, 8, 9, 10\\}$.\nVậy có 6 giá trị nguyên của tham số $m$.\nChọn D.",
    "socraticHint": "Dùng điều kiện có nghiệm của phương trình lượng giác $A\\sin x + B\\cos x = C$ để chặn khoảng giá trị của $y$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 475,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = (x^3 - 3x + m)^2$. Tổng tất cả các giá trị của tham số $m$ sao cho giá trị nhỏ nhất của hàm số trên đoạn $[-1; 1]$ bằng $1$ là:",
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
    "detailedSolution": "Đặt $t = x^3 - 3x$. Với $x \\in [-1; 1]$, ta có $t' = 3x^2 - 3 \\le 0$, hàm số nghịch biến nên $t \\in [t(1); t(-1)] = [-2; 2]$.\nKhi đó hàm số trở thành $f(t) = (t + m)^2$ với $t \\in [-2; 2]$.\n- Trường hợp 1: $-m \\in [-2; 2] \\iff -2 \\le m \\le 2$.\nKhi đó $\\min_{[-2; 2]} f(t) = f(-m) = 0 \\ne 1$ (loại).\n- Trường hợp 2: $-m < -2 \\iff m > 2$.\nKhi đó $\\min_{[-2; 2]} f(t) = f(-2) = (-2 + m)^2$.\nTheo bài: $(m - 2)^2 = 1 \\iff m - 2 = 1$ hoặc $m - 2 = -1 \\iff m = 3$ (nhận vì $m > 2$) hoặc $m = 1$ (loại).\n- Trường hợp 3: $-m > 2 \\iff m < -2$.\nKhi đó $\\min_{[-2; 2]} f(t) = f(2) = (2 + m)^2$.\nTheo bài: $(m + 2)^2 = 1 \\iff m = -1$ (loại) hoặc $m = -3$ (nhận vì $m < -2$).\nVậy có hai giá trị $m = 3$ và $m = -3$.\nTổng các giá trị là $3 + (-3) = 0$.\nChọn C.",
    "socraticHint": "Đặt ẩn phụ $t = x^3 - 3x \\in [-2; 2]$, xét hàm số bậc hai $f(t) = (t + m)^2$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 476,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Tìm tất cả các giá trị của $m > 0$ để giá trị nhỏ nhất của hàm số $y = x^3 - 3x + 1$ trên đoạn $[m + 1; m + 2]$ luôn bé hơn $3$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (0; 2)$"
      },
      {
        "key": "B",
        "content": "$m \\in (0; 1)$"
      },
      {
        "key": "C",
        "content": "$m \\in (1; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$m \\in (0; +\\infty)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có $y' = 3x^2 - 3 = 0 \\iff x = \\pm 1$.\nVì $m > 0$ nên $m + 1 > 1$, do đó trên đoạn $[m + 1; m + 2]$ hàm số luôn đồng biến.\nSuy ra $\\min_{[m + 1; m + 2]} y = y(m + 1) = (m + 1)^3 - 3(m + 1) + 1$.\nĐể GTNN luôn bé hơn 3:\n$(m + 1)^3 - 3(m + 1) + 1 < 3 \\iff (m + 1)^3 - 3(m + 1) - 2 < 0$.\nĐặt $u = m + 1 > 1$, ta có $u^3 - 3u - 2 < 0 \\iff (u + 1)^2(u - 2) < 0$.\nVì $(u + 1)^2 > 0$ với mọi $u > 1$, bất phương trình tương đương $u - 2 < 0 \\iff u < 2$.\nSuy ra $m + 1 < 2 \\iff m < 1$.\nKết hợp với điều kiện $m > 0$, ta được $m \\in (0; 1)$.\nChọn B.",
    "socraticHint": "Với $m > 0$, nhận xét vị trí đoạn $[m + 1; m + 2]$ so với điểm cực trị $x = 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 477,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = x^3 - 3mx^2 + 3(m^2 - 1)x + 2020$. Có tất cả bao nhiêu giá trị nguyên của $m$ sao cho hàm số có giá trị nhỏ nhất trên khoảng $(0; +\\infty)$?",
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
    "detailedSolution": "Ta có: $y' = 3x^2 - 6mx + 3(m^2 - 1) = 3(x^2 - 2mx + m^2 - 1) = 0 \\iff x = m - 1$ hoặc $x = m + 1$.\nVì hệ số $a = 1 > 0$ nên $x_1 = m - 1$ là điểm cực đại, $x_2 = m + 1$ là điểm cực tiểu.\nĐể hàm số có giá trị nhỏ nhất trên $(0; +\\infty)$ thì điểm cực tiểu $x_2 = m + 1$ phải là điểm thấp nhất trên khoảng này:\n- Trường hợp 1: $x_1 \\le 0 < x_2 \\iff m - 1 \\le 0 < m + 1 \\iff -1 < m \\le 1$.\nKhi đó trên khoảng $(0; +\\infty)$ hàm số chỉ có một điểm cực trị là cực tiểu $x = m + 1$, nên $\\min y = y(m + 1)$.\nVì $m \\in \\mathbb{Z} \\implies m \\in \\{0; 1\\}$.\n- Trường hợp 2: $0 < x_1 < x_2 \\iff m - 1 > 0 \\iff m > 1$.\nKhi đó hàm số có cả CĐ và CT trên $(0; +\\infty)$. Để hàm số có GTNN trên $(0; +\\infty)$ thì giá trị cực tiểu phải thỏa mãn $y(m + 1) \\le y(0)$.\nTa có: $y(m + 1) - y(0) = (m + 1)^2(m - 2) \\le 0 \\iff m \\le 2$.\nKết hợp $m > 1 \\implies 1 < m \\le 2$. Vì $m$ nguyên nên $m = 2$.\nTổng hợp lại ta có $m \\in \\{0; 1; 2\\}$. Vậy có 3 giá trị nguyên của $m$.\nChọn D.",
    "socraticHint": "Tìm hai điểm cực trị của hàm số bậc ba, lập bảng biến thiên trên $(0; +\\infty)$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 478,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = \\frac{m\\sin x + 1}{\\cos x + 2}$. Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[-5; 5]$ để giá trị nhỏ nhất của $y$ nhỏ hơn $-1$?",
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
    "detailedSolution": "Điều kiện xác định: $\\cos x + 2 \\ne 0$ luôn đúng với mọi $x \\in \\mathbb{R}$.\nTa có: $y = \\frac{m\\sin x + 1}{\\cos x + 2} \\iff m\\sin x - y\\cos x = 2y - 1$.\nPhương trình có nghiệm khi và chỉ khi:\n$m^2 + (-y)^2 \\ge (2y - 1)^2 \\iff m^2 + y^2 \\ge 4y^2 - 4y + 1 \\iff 3y^2 - 4y + 1 - m^2 \\le 0$.\nSuy ra: $\\frac{2 - \\sqrt{1 + 3m^2}}{3} \\le y \\le \\frac{2 + \\sqrt{1 + 3m^2}}{3}$.\nDo đó $\\min_{\\mathbb{R}} y = \\frac{2 - \\sqrt{1 + 3m^2}}{3}$.\nTheo đề bài: $\\min y < -1 \\iff \\frac{2 - \\sqrt{1 + 3m^2}}{3} < -1 \\iff \\sqrt{1 + 3m^2} > 5 \\iff 1 + 3m^2 > 25 \\iff m^2 > 8$.\nSuy ra $m > 2\\sqrt{2} \\approx 2{,}82$ hoặc $m < -2\\sqrt{2} \\approx -2{,}82$.\nVì $m \\in \\mathbb{Z}$ và $m \\in [-5; 5]$, nên $m \\in \\{-5, -4, -3, 3, 4, 5\\}$.\nVậy có 6 giá trị nguyên của tham số $m$.\nChọn C.",
    "socraticHint": "Dùng điều kiện có nghiệm của phương trình thuần nhất lượng giác $A\\sin x + B\\cos x = C$ để chặn giá trị của $y$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 479,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Gọi $S$ là tập hợp tất cả các giá trị thực của tham số $m$ sao cho giá trị nhỏ nhất của hàm số $f(x) = \\frac{34}{|x^3 - 3x + 2m| + 1}$ trên đoạn $[0; 3]$ bằng $2$. Tổng tất cả các phần tử của $S$ bằng:",
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
        "content": "$-1$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có $\\min_{[0; 3]} f(x) = 2 \\iff \\max_{[0; 3]} (|x^3 - 3x + 2m| + 1) = 17 \\iff \\max_{[0; 3]} |x^3 - 3x + 2m| = 16$.\nXét hàm số $g(x) = x^3 - 3x + 2m$ trên đoạn $[0; 3]$.\nĐạo hàm $g'(x) = 3x^2 - 3 = 0 \\iff x = 1 \\in [0; 3]$ hoặc $x = -1 \\notin [0; 3]$.\nGiá trị tại các điểm:\n$g(0) = 2m$, $g(1) = 2m - 2$, $g(3) = 2m + 18$.\nDo đó trên $[0; 3]$, $2m - 2 \\le g(x) \\le 2m + 18$.\nSuy ra $\\max_{[0; 3]} |g(x)| = \\max\\{|2m - 2|, |2m + 18|\\}$.\nĐể $\\max_{[0; 3]} |g(x)| = 16$:\n- Trường hợp 1: $2m + 18 = 16 \\iff m = -1$. Khi đó $|2m - 2| = |-4| = 4 \\le 16$ (thỏa mãn).\n- Trường hợp 2: $-(2m - 2) = 16 \\iff 2m - 2 = -16 \\iff m = -7$. Khi đó $|2m + 18| = |4| = 4 \\le 16$ (thỏa mãn).\nSuy ra $S = \\{-7, -1\\}$.\nTổng tất cả các phần tử của $S$ là $(-7) + (-1) = -8$.\nChọn B.",
    "socraticHint": "Giá trị nhỏ nhất của phân thức nghịch đảo tương đương với giá trị lớn nhất của mẫu số.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 480,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $y = (x^3 - 3x + m + 1)^2$. Tổng tất cả các giá trị của tham số $m$ sao cho giá trị nhỏ nhất của hàm số trên đoạn $[-1; 1]$ bằng $1$ là:",
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
    "detailedSolution": "Đặt $t = x^3 - 3x + 1$. Với $x \\in [-1; 1]$, ta có $t' = 3x^2 - 3 \\le 0$, hàm số nghịch biến nên $t \\in [t(1); t(-1)] = [-1; 3]$.\nKhi đó hàm số trở thành $f(t) = (t + m)^2$ với $t \\in [-1; 3]$.\n- Nếu $-m \\in [-1; 3] \\iff -3 \\le m \\le 1$ thì $\\min_{[-1; 3]} f(t) = 0 \\ne 1$ (loại).\n- Nếu $-m < -1 \\iff m > 1$ thì $\\min_{[-1; 3]} f(t) = f(-1) = (m - 1)^2$.\nTheo bài: $(m - 1)^2 = 1 \\iff m - 1 = 1 \\implies m = 2$ (thỏa mãn $m > 1$).\n- Nếu $-m > 3 \\iff m < -3$ thì $\\min_{[-1; 3]} f(t) = f(3) = (m + 3)^2$.\nTheo bài: $(m + 3)^2 = 1 \\iff m + 3 = -1 \\implies m = -4$ (thỏa mãn $m < -3$).\nVậy có hai giá trị $m = 2$ và $m = -4$.\nTổng các giá trị là $2 + (-4) = -2$.\nChọn A.",
    "socraticHint": "Đặt ẩn phụ $t = x^3 - 3x + 1$, xét GTNN của hàm bậc hai $(t + m)^2$ trên đoạn giá trị của $t$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 481,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $f(x) = ax^4 + 2(a + 4)x^2 - 1$ với $a$ là tham số thực. Nếu $\\max_{[0; 2]} f(x) = f(1)$ thì $\\min_{[0; 2]} f(x)$ bằng:",
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
    "detailedSolution": "Từ giả thiết $\\max_{[0; 2]} f(x) = f(1)$, suy ra $x = 1$ là điểm cực trị của hàm số, do đó $f'(1) = 0$.\nTa có: $f'(x) = 4ax^3 + 4(a + 4)x$.\n$f'(1) = 0 \\iff 4a + 4(a + 4) = 0 \\iff 8a + 16 = 0 \\iff a = -2$.\nKhi đó $f(x) = -2x^4 + 4x^2 - 1$.\nTính các giá trị trên đoạn $[0; 2]$:\n$f(0) = -1$, $f(1) = 1$, $f(2) = -2(16) + 4(4) - 1 = -17$.\nVậy $\\min_{[0; 2]} f(x) = f(2) = -17$.\nChọn A.",
    "socraticHint": "Sử dụng điều kiện cần $f'(1) = 0$ để tìm tham số $a$, sau đó kiểm tra và tính GTNN.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 482,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Có bao nhiêu giá trị của tham số $a$ thuộc đoạn $[-10; 10]$ để hàm số $y = ax^4 + 3x^2 + cx$ đạt giá trị nhỏ nhất trên đoạn $[0; 4]$ tại $x = 1$?",
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
    "detailedSolution": "Hàm số $y = f(x) = ax^4 + 3x^2 + cx$ đạt giá trị nhỏ nhất trên $[0; 4]$ tại $x = 1 \\implies f'(1) = 0$.\nTa có: $f'(x) = 4ax^3 + 6x + c \\implies f'(1) = 4a + 6 + c = 0 \\implies c = -4a - 6$.\nKhi đó:\n$f'(x) = 4ax^3 + 6x - 4a - 6 = 4a(x^3 - 1) + 6(x - 1) = (x - 1)(4ax^2 + 4ax + 4a + 6)$.\nĐể $x = 1$ là điểm cực tiểu trên $(0; 4)$, tam thức $g(x) = 4ax^2 + 4ax + 4a + 6$ phải dương với mọi $x \\in (0; 4)$, dẫn đến:\n$\\Delta' = (2a)^2 - 4a(4a + 6) = 4a^2 - 16a^2 - 24a = -12a^2 - 24a < 0 \\iff a(a + 2) > 0 \\iff a > 0$ hoặc $a < -2$.\nĐồng thời cần $f(4) > f(1)$ và $f(0) > f(1)$:\n$f(0) > f(1) \\iff 0 > a + 3 + c = a + 3 - 4a - 6 = -3a - 3 \\iff 3a > -3 \\iff a > -1$.\nKết hợp $a > 0$ và $a \\in [-10; 10]$, ta được $a \\in \\{1, 2, 3, \\dots, 10\\}$, có đúng 10 giá trị nguyên của $a$.\nChọn B.",
    "socraticHint": "Sử dụng điều kiện cần $f'(1) = 0$ để biểu diễn $c$ theo $a$, rồi phân tích $f'(x)$ thành nhân tử.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  }
];
