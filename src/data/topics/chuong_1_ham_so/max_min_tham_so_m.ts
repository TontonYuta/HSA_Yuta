import { Question } from '../../../types/exam';

export const maxMinThamSoMQuestions: Question[] = [
  {
    "id": 5,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Giá trị nhỏ nhất của hàm số $y = x + \\frac{4}{x}$ trên đoạn $[1; 3]$ bằng:",
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
        "content": "$\\frac{13}{3}$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Với $x > 0$, áp dụng bất đẳng thức Cauchy: $x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 4$.\nDấu bằng xảy ra khi $x = 2 \\in [1; 3]$.\nTa có $y(1) = 5$, $y(3) = 13/3$. Vậy giá trị nhỏ nhất trên đoạn $[1; 3]$ là 4.",
    "socraticHint": "Khảo sát hàm số hoặc dùng bất đẳng thức AM-GM cho hai số dương $x$ và $\\frac{4}{x}$.",
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
    "content": "Tìm giá trị lớn nhất của hàm số $y = -x^2 + 6x - 5$.",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0"
    ],
    "detailedSolution": "Hoành độ đỉnh parabol: $x = -\\frac{6}{2(-1)} = 3$.\nGiá trị lớn nhất: $y(3) = -(3^2) + 6(3) - 5 = -9 + 18 - 5 = 4$.",
    "socraticHint": "Tọa độ đỉnh của parabol $y = ax^2 + bx + c$ với $a < 0$.",
    "difficulty": "Vận dụng cao",
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
