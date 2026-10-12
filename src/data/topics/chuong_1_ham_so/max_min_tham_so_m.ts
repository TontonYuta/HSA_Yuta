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
    "difficulty": "Vận dụng cao",
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
  }
];
