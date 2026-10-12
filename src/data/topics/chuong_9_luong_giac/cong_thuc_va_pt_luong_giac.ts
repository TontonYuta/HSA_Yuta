import { Question } from '../../../types/exam';

export const congThucPtLuongGiacQuestions: Question[] = [
  {
    "id": 1,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Số nghiệm thuộc đoạn $[0; 2\\pi]$ của phương trình $\\cos 2x + \\sqrt{3}\\sin 2x = 2\\sin x$ là:",
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
    "correctAnswer": "A",
    "detailedSolution": "Chia hai vế cho 2:\n$$\\frac{1}{2}\\cos 2x + \\frac{\\sqrt{3}}{2}\\sin 2x = \\sin x \\iff \\sin\\left(2x + \\frac{\\pi}{6}\\right) = \\sin x.$$\nPhương trình tương đương:\n$$\\left[\\begin{array}{l} 2x + \\frac{\\pi}{6} = x + k2\\pi \\\\ 2x + \\frac{\\pi}{6} = \\pi - x + k2\\pi \\end{array}\\right. \\iff \\left[\\begin{array}{l} x = -\\frac{\\pi}{6} + k2\\pi \\\\ 3x = \\frac{5\\pi}{6} + k2\\pi \\iff x = \\frac{5\\pi}{18} + \\frac{k2\\pi}{3} \\end{array}\\right.$$\nXét trên đoạn $[0; 2\\pi]$:\n- Nhánh 1: $x = -\\frac{\\pi}{6} + k2\\pi$, với $k = 1 \\Rightarrow x = \\frac{11\\pi}{6}$ (1 nghiệm).\n- Nhánh 2: $x = \\frac{5\\pi}{18} + \\frac{k2\\pi}{3}$:\n  + $k = 0 \\Rightarrow x = \\frac{5\\pi}{18}$\n  + $k = 1 \\Rightarrow x = \\frac{17\\pi}{18}$\n  + $k = 2 \\Rightarrow x = \\frac{29\\pi}{18}$\n  (Có 3 nghiệm).\nCác nghiệm trên đều phân biệt và thuộc $[0; 2\\pi]$.\nTổng cộng có $1 + 3 = 4$ nghiệm.",
    "socraticHint": "Đưa vế trái về dạng $\\sin(2x + \\pi/6)$ bằng phương pháp biến đổi góc phụ.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 2,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Số nghiệm của phương trình $\\sin\\left(x + \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$ trên đoạn $[0; 2\\pi]$ là:",
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
    "correctAnswer": "C",
    "detailedSolution": "Ta có $\\frac{\\sqrt{2}}{2} = \\sin\\frac{\\pi}{4}$. Do đó:\n$$\\begin{cases} x + \\frac{\\pi}{4} = \\frac{\\pi}{4} + k2\\pi \\\\ x + \\frac{\\pi}{4} = \\pi - \\frac{\\pi}{4} + k2\\pi = \\frac{3\\pi}{4} + k2\\pi \\end{cases} \\iff \\begin{cases} x = k2\\pi \\\\ x = \\frac{\\pi}{2} + k2\\pi \\end{cases}$$\nTrên đoạn $[0; 2\\pi]$:\n- Họ nghiệm 1: $x = 0$ và $x = 2\\pi$ (2 nghiệm).\n- Họ nghiệm 2: $x = \\frac{\\pi}{2}$ (1 nghiệm).\nTổng cộng có đúng 3 nghiệm phân biệt.",
    "socraticHint": "Liệt kê các nghiệm từ hai nhánh giải cơ bản và đối chiếu với đoạn $[0; 2\\pi]$. Lưu ý kiểm tra cả hai đầu mút 0 và $2\\pi$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 37,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho phương trình $\\cos 2x + 3\\sin x - 2 = 0$. Tìm số nghiệm của phương trình thuộc đoạn $[0; 2\\pi]$.",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Áp dụng công thức nhân đôi $\\cos 2x = 1 - 2\\sin^2 x$:\n$$1 - 2\\sin^2 x + 3\\sin x - 2 = 0 \\iff 2\\sin^2 x - 3\\sin x + 1 = 0$$\n$$\\iff (2\\sin x - 1)(\\sin x - 1) = 0 \\iff \\left[\\begin{array}{l} \\sin x = 1 \\\\ \\sin x = \\frac{1}{2} \\end{array}\\right.$$\nXét trên đoạn $[0; 2\\pi]$:\n- $\\sin x = 1$ có đúng 1 nghiệm là $x = \\frac{\\pi}{2}$.\n- $\\sin x = \\frac{1}{2}$ có đúng 2 nghiệm là $x = \\frac{\\pi}{6}$ và $x = \\frac{5\\pi}{6}$.\nCác nghiệm này phân biệt từng đôi một.\nTổng số nghiệm thuộc đoạn $[0; 2\\pi]$ là $1 + 2 = 3$.",
    "socraticHint": "Đưa phương trình về dạng bậc hai theo $\\sin x$ bằng công thức $\\cos 2x = 1 - 2\\sin^2 x$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 51,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho hàm số $f(x) = \\sin^4 x + \\cos^4 x + m\\sin 2x$. Tìm tập hợp tất cả các giá trị thực của tham số $m$ để giá trị lớn nhất của hàm số $f(x)$ bằng $2$.",
    "options": [
      {
        "key": "A",
        "content": "$m = \\pm \\frac{3}{2}$"
      },
      {
        "key": "B",
        "content": "$m = \\pm \\sqrt{2}$"
      },
      {
        "key": "C",
        "content": "$m = \\pm 1$"
      },
      {
        "key": "D",
        "content": "$m = \\pm 2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta biến đổi:\n$$f(x) = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x \\cos^2 x + m\\sin 2x = 1 - \\frac{1}{2}\\sin^2 2x + m\\sin 2x.$$\nĐặt $t = \\sin 2x \\in [-1; 1]$. Xét hàm số $g(t) = -\\frac{1}{2}t^2 + mt + 1$ trên $[-1; 1]$.\nĐạo hàm $g'(t) = -t + m = 0 \\iff t = m$.\n- Nếu $|m| \\le 1$: $\\max g(t) = g(m) = \\frac{m^2}{2} + 1 = 2 \\iff m^2 = 2 \\iff m = \\pm\\sqrt{2}$ (loại vì $|m| \\le 1$).\n- Nếu $m > 1$: hàm số đồng biến trên $[-1; 1]$, suy ra $\\max g(t) = g(1) = m + \\frac{1}{2} = 2 \\iff m = \\frac{3}{2}$ (thỏa mãn $m > 1$).\n- Nếu $m < -1$: hàm số nghịch biến trên $[-1; 1]$, suy ra $\\max g(t) = g(-1) = -m + \\frac{1}{2} = 2 \\iff m = -\\frac{3}{2}$ (thỏa mãn $m < -1$).\nVậy các giá trị thỏa mãn là $m = \\pm \\frac{3}{2}$.",
    "socraticHint": "Đổi biến $t = \\sin 2x \\in [-1; 1]$, đưa về bài toán tìm GTLN của tam thức bậc hai theo tham số $m$ trên đoạn $[-1; 1]$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 52,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Số nghiệm thuộc khoảng $(0; 2\\pi)$ của phương trình $\\frac{\\cos 3x - \\cos x + \\sin 2x}{2\\sin x - 1} = 0$ là:",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$4$"
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
    "correctAnswer": "A",
    "detailedSolution": "Điều kiện xác định: $2\\sin x - 1 \\ne 0 \\iff \\sin x \\ne \\frac{1}{2}$.\nBiến đổi tử số:\n$$\\cos 3x - \\cos x + \\sin 2x = -2\\sin 2x \\sin x + \\sin 2x = \\sin 2x (1 - 2\\sin x) = 0.$$\nDo điều kiện mẫu $1 - 2\\sin x \\ne 0$, phương trình tương đương:\n$$\\sin 2x = 0 \\iff 2x = k\\pi \\iff x = \\frac{k\\pi}{2} \\quad (k \\in \\mathbb{Z}).$$\nXét các nghiệm trong khoảng $(0; 2\\pi)$:\n$x \\in \\left\\{ \\frac{\\pi}{2}; \\pi; \\frac{3\\pi}{2} \\right\\}$.\nKiểm tra điều kiện:\n- Tại $x = \\frac{\\pi}{2}$: $\\sin x = 1 \\ne \\frac{1}{2}$ (thỏa mãn).\n- Tại $x = \\pi$: $\\sin x = 0 \\ne \\frac{1}{2}$ (thỏa mãn).\n- Tại $x = \\frac{3\\pi}{2}$: $\\sin x = -1 \\ne \\frac{1}{2}$ (thỏa mãn).\nVậy phương trình có đúng $3$ nghiệm thuộc khoảng $(0; 2\\pi)$.",
    "socraticHint": "Lưu ý điều kiện xác định của mẫu số để loại bỏ nghiệm ngoại lai $1 - 2\\sin x = 0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 70,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Số nghiệm thuộc khoảng $(0; 2\\pi)$ của phương trình $\\sin 3x + \\sqrt{3}\\cos 3x = 2\\cos 2x$ là:",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$7$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia hai vế cho 2:\n$$\\frac{1}{2}\\sin 3x + \\frac{\\sqrt{3}}{2}\\cos 3x = \\cos 2x \\iff \\cos\\left(3x - \\frac{\\pi}{6}\\right) = \\cos 2x.$$\nPhương trình tương đương:\n$$\\left[\\begin{array}{l} 3x - \\frac{\\pi}{6} = 2x + k2\\pi \\\\ 3x - \\frac{\\pi}{6} = -2x + k2\\pi \\end{array}\\right. \\iff \\left[\\begin{array}{l} x = \\frac{\\pi}{6} + k2\\pi \\\\ x = \\frac{\\pi}{30} + \\frac{k2\\pi}{5} \\end{array}\\right.$$\nXét trên khoảng $(0; 2\\pi)$:\n- Nhánh 1: $x = \\frac{\\pi}{6}$ (1 nghiệm).\n- Nhánh 2: $x = \\frac{\\pi}{30} + \\frac{k2\\pi}{5}$ với $k \\in \\{0; 1; 2; 3; 4\\}$ cho $5$ nghiệm: $\\frac{\\pi}{30}, \\frac{13\\pi}{30}, \\frac{5\\pi}{6}, \\frac{37\\pi}{30}, \\frac{49\\pi}{30}$.\nCác nghiệm này hoàn toàn phân biệt với $\\frac{\\pi}{6}$.\nTổng cộng có $1 + 5 = 6$ nghiệm thuộc khoảng $(0; 2\\pi)$.",
    "socraticHint": "Đưa vế trái về dạng $\\cos(3x - \\alpha)$ bằng công thức cộng cung.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 81,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho phương trình $\\cos 2x - (2m + 1)\\cos x + m + 1 = 0$. Tìm tất cả các giá trị của tham số $m$ để phương trình có đúng 3 nghiệm phân biệt thuộc đoạn $\\left[-\\frac{\\pi}{2}; \\pi\\right]$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\in [-1; 0) \\cup \\{1\\}$"
      },
      {
        "key": "B",
        "content": "$m \\in [-1; 1]$"
      },
      {
        "key": "C",
        "content": "$m \\in (0; 1)$"
      },
      {
        "key": "D",
        "content": "$m \\in [-1; 0]$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Biến đổi phương trình:\n$$2\\cos^2 x - 1 - (2m + 1)\\cos x + m + 1 = 0 \\iff 2\\cos^2 x - (2m + 1)\\cos x + m = 0$$\n$$\\iff (2\\cos x - 1)(\\cos x - m) = 0 \\iff \\left[\\begin{array}{l} \\cos x = \\frac{1}{2} \\\\ \\cos x = m \\end{array}\\right.$$\nXét $x \\in \\left[-\\frac{\\pi}{2}; \\pi\\right]$:\n- Phương trình $\\cos x = \\frac{1}{2}$ có đúng 2 nghiệm là $x = -\\frac{\\pi}{3}$ và $x = \\frac{\\pi}{3}$.\nĐể phương trình ban đầu có đúng 3 nghiệm phân biệt trên $\\left[-\\frac{\\pi}{2}; \\pi\\right]$, phương trình $\\cos x = m$ phải sinh ra đúng 1 nghiệm khác $\\pm\\frac{\\pi}{3}$.\nXét đồ thị hàm số $y = \\cos x$ trên $\\left[-\\frac{\\pi}{2}; \\pi\\right]$:\n- Với $m = 1$: sinh ra duy nhất nghiệm $x = 0$ (thỏa mãn).\n- Với $-1 \\le m < 0$: sinh ra duy nhất 1 nghiệm thuộc $\\left(\\frac{\\pi}{2}; \\pi\\right]$ (thỏa mãn).\n- Với $0 \\le m < 1$ và $m \\ne \\frac{1}{2}$: đường thẳng cắt tại 2 điểm nên sinh ra 2 nghiệm (loại).\n- Với $m = \\frac{1}{2}$: nghiệm trùng với 2 nghiệm đã có, không tạo thêm nghiệm mới (loại).\nVậy $m \\in [-1; 0) \\cup \\{1\\}$.",
    "socraticHint": "Phân tích phương trình thành tích $(2\\cos x - 1)(\\cos x - m) = 0$ rồi dùng đường tròn lượng giác để đếm nghiệm theo tham số $m$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 86,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho phương trình $\\sin x + \\cos x = \\sqrt{2}\\sin 5x$. Tìm số nghiệm của phương trình thuộc đoạn $[0; \\pi]$.",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "detailedSolution": "Biến đổi vế trái: $\\sin x + \\cos x = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$.\nPhương trình trở thành:\n$$\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right) = \\sqrt{2}\\sin 5x \\iff \\sin 5x = \\sin\\left(x + \\frac{\\pi}{4}\\right)$$\n$$\\iff \\left[\\begin{array}{l} 5x = x + \\frac{\\pi}{4} + k2\\pi \\\\ 5x = \\pi - \\left(x + \\frac{\\pi}{4}\\right) + k2\\pi \\end{array}\\right. \\iff \\left[\\begin{array}{l} 4x = \\frac{\\pi}{4} + k2\\pi \\iff x = \\frac{\\pi}{16} + \\frac{k\\pi}{2} \\\\ 6x = \\frac{3\\pi}{4} + k2\\pi \\iff x = \\frac{\\pi}{8} + \\frac{k\\pi}{3} \\end{array}\\right.$$\nXét trên đoạn $[0; \\pi]$:\n- Nhánh 1: $x = \\frac{\\pi}{16}$ ($k = 0$) và $x = \\frac{9\\pi}{16}$ ($k = 1$). (Có 2 nghiệm).\n- Nhánh 2: $x = \\frac{\\pi}{8}$ ($k = 0$), $x = \\frac{11\\pi}{24}$ ($k = 1$), và $x = \\frac{19\\pi}{24}$ ($k = 2$). (Có 3 nghiệm).\nHai họ nghiệm này không trùng nhau.\nTổng số nghiệm thuộc đoạn $[0; \\pi]$ là $2 + 3 = 5$.",
    "socraticHint": "Dùng công thức $\\sin x + \\cos x = \\sqrt{2}\\sin(x + \\pi/4)$ đưa về phương trình $\\sin u = \\sin v$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 100,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tìm số nghiệm thuộc khoảng $(0; 3\\pi)$ của phương trình $\\sin 2x = \\cos x$.",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "detailedSolution": "Biến đổi phương trình:\n$$\\sin 2x - \\cos x = 0 \\iff 2\\sin x \\cos x - \\cos x = 0 \\iff \\cos x (2\\sin x - 1) = 0$$\n$$\\iff \\left[\\begin{array}{l} \\cos x = 0 \\\\ \\sin x = \\frac{1}{2} \\end{array}\\right.$$\nXét trên khoảng $(0; 3\\pi)$:\n1. $\\cos x = 0 \\iff x = \\frac{\\pi}{2} + k\\pi$. Các nghiệm là $\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{5\\pi}{2}$ (3 nghiệm).\n2. $\\sin x = \\frac{1}{2} \\iff x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{5\\pi}{6} + k2\\pi$.\n- Nhánh $x = \\frac{\\pi}{6} + k2\\pi$: các nghiệm là $\\frac{\\pi}{6}, \\frac{13\\pi}{6}$ (2 nghiệm).\n- Nhánh $x = \\frac{5\\pi}{6} + k2\\pi$: các nghiệm là $\\frac{5\\pi}{6}, \\frac{17\\pi}{6}$ (2 nghiệm).\nCác nghiệm trên đều khác nhau từng đôi một.\nTổng số nghiệm là $3 + 2 + 2 = 7$.",
    "socraticHint": "Dùng công thức nhân đôi $\\sin 2x = 2\\sin x \\cos x$ đưa về phương trình tích.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 102,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tập nghiệm của phương trình $\\sqrt{3}\\sin x + \\cos x = \\sqrt{2}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x = \\frac{\\pi}{12} + k2\\pi; x = \\frac{7\\pi}{12} + k2\\pi \\quad (k \\in \\mathbb{Z})$"
      },
      {
        "key": "B",
        "content": "$x = \\frac{\\pi}{6} + k2\\pi; x = \\frac{5\\pi}{6} + k2\\pi \\quad (k \\in \\mathbb{Z})$"
      },
      {
        "key": "C",
        "content": "$x = -\\frac{\\pi}{12} + k2\\pi; x = \\frac{7\\pi}{12} + k2\\pi \\quad (k \\in \\mathbb{Z})$"
      },
      {
        "key": "D",
        "content": "$x = \\frac{\\pi}{4} + k2\\pi; x = \\frac{3\\pi}{4} + k2\\pi \\quad (k \\in \\mathbb{Z})$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia hai vế cho $\\sqrt{(\\sqrt{3})^2 + 1^2} = 2$:\n$$\\frac{\\sqrt{3}}{2}\\sin x + \\frac{1}{2}\\cos x = \\frac{\\sqrt{2}}{2} \\iff \\sin\\left(x + \\frac{\\pi}{6}\\right) = \\sin\\frac{\\pi}{4}$$\n$$\\iff \\begin{cases} x + \\frac{\\pi}{6} = \\frac{\\pi}{4} + k2\\pi \\\\ x + \\frac{\\pi}{6} = \\pi - \\frac{\\pi}{4} + k2\\pi \\end{cases} \\iff \\begin{cases} x = \\frac{\\pi}{12} + k2\\pi \\\\ x = \\frac{7\\pi}{12} + k2\\pi \\end{cases} \\quad (k \\in \\mathbb{Z})$$",
    "socraticHint": "Đưa phương trình bậc nhất đối với $\\sin x$ và $\\cos x$ về dạng $\\sin(x + \\alpha)$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 151,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho hàm số $f(x) = \\frac{\\sin x + 2\\cos x + 1}{\\sin x + \\cos x + 2}$. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x)$. Tích $M \\cdot m$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$-2$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$-1$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $y$ là một giá trị của hàm số, ta có:\n$$y = \\frac{\\sin x + 2\\cos x + 1}{\\sin x + \\cos x + 2} \\iff y(\\sin x + \\cos x + 2) = \\sin x + 2\\cos x + 1$$\n$$\\iff (y - 1)\\sin x + (y - 2)\\cos x = 1 - 2y.$$\nĐiều kiện để phương trình có nghiệm theo $x$ là:\n$$(y - 1)^2 + (y - 2)^2 \\ge (1 - 2y)^2$$\n$$\\iff y^2 - 2y + 1 + y^2 - 4y + 4 \\ge 4y^2 - 4y + 1 \\iff 2y^2 + 2y - 4 \\le 0$$\n$$\\iff y^2 + y - 2 \\le 0 \\iff -2 \\le y \\le 1.$$\nDo đó $M = 1$ và $m = -2$.\nTích $M \\cdot m = 1 \\cdot (-2) = -2$.",
    "socraticHint": "Sử dụng điều kiện có nghiệm $a^2 + b^2 \\ge c^2$ của phương trình lượng giác bậc nhất $a\\sin x + b\\cos x = c$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 187,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho phương trình $\\cos 2x - 3\\cos x + 2 = 0$. Tổng tất cả các nghiệm của phương trình thuộc đoạn $[0; 2\\pi]$ bằng $k\\pi$. Giá trị của $k$ bằng bao nhiêu?",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0"
    ],
    "detailedSolution": "Biến đổi $\\cos 2x = 2\\cos^2 x - 1$:\n$$2\\cos^2 x - 1 - 3\\cos x + 2 = 0 \\iff 2\\cos^2 x - 3\\cos x + 1 = 0$$\n$$\\iff (\\cos x - 1)(2\\cos x - 1) = 0 \\iff \\begin{cases} \\cos x = 1 \\\\ \\cos x = \\frac{1}{2} \\end{cases}$$\nTrên đoạn $[0; 2\\pi]$:\n- $\\cos x = 1 \\iff x = 0$ hoặc $x = 2\\pi$.\n- $\\cos x = \\frac{1}{2} \\iff x = \\frac{\\pi}{3}$ hoặc $x = \\frac{5\\pi}{3}$.\nTổng các nghiệm là: $S = 0 + 2\\pi + \\frac{\\pi}{3} + \\frac{5\\pi}{3} = 4\\pi$.\nVậy $k = 4$.",
    "socraticHint": "Dùng công thức nhân đôi đưa về phương trình bậc hai đối với $\\cos x$, sau đó liệt kê nghiệm trên $[0; 2\\pi]$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 279,
    "type": "mcq",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "content": "Phương trình $\\cos x = \\frac{x^2}{2} + x + 1$ có bao nhiêu nghiệm thực?",
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
    "correctAnswer": "A",
    "detailedSolution": "Nhận thấy tại $x = 0$:\n$$\\cos 0 = 1, \\quad \\frac{0^2}{2} + 0 + 1 = 1$$\nVậy $x = 0$ là một nghiệm của phương trình.\nTa chứng minh phương trình không còn nghiệm nào khác:\nXét hàm số $f(x) = \\frac{x^2}{2} + x + 1 - \\cos x$.\n- $f'(x) = x + 1 + \\sin x$.\n- $f''(x) = 1 + \\cos x \\ge 0$ với mọi $x \\in \\mathbb{R}$.\nDo $f''(x) \\ge 0$ nên $f'(x)$ là hàm đồng biến trên $\\mathbb{R}$.\nTa có $f'(0) = 0 + 1 + \\sin 0 = 1 > 0$. Suy ra $f'(x) = 0$ có tối đa 1 nghiệm và $f(x)$ đạt cực tiểu tại điểm đó, dẫn đến phương trình $f(x) = 0$ có duy nhất nghiệm $x = 0$.",
    "socraticHint": "Kiểm tra nghiệm đặc biệt $x = 0$ và khảo sát đạo hàm cấp hai $f''(x) = 1 + \\cos x \\ge 0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Công thức & Phương trình lượng giác",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)"
  }
];
