import { Question } from '../../../types/exam';

export const tapHopVennQuestions: Question[] = [
  {
    "id": 120,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn ứng dụng thực tế",
    "content": "Một câu lạc bộ thể thao gồm 30 học sinh, trong đó có 15 bạn chơi bóng đá, 12 bạn chơi cầu lông, 10 bạn chơi bóng chuyền. Có 5 bạn chơi cả bóng đá và cầu lông, 4 bạn chơi cả bóng đá và bóng chuyền, 3 bạn chơi cả cầu lông và bóng chuyền, và 2 bạn chơi cả ba môn. Hỏi có bao nhiêu học sinh không chơi môn nào trong ba môn trên?",
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
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng công thức số phần tử của hợp 3 tập hợp:\n$$|A \\cup B \\cup C| = |A| + |B| + |C| - (|A \\cap B| + |B \\cap C| + |C \\cap A|) + |A \\cap B \\cap C|$$\nThay số:\n$$|A \\cup B \\cup C| = 15 + 12 + 10 - (5 + 4 + 3) + 2 = 37 - 12 + 2 = 27$$\nSố học sinh không chơi môn nào trong ba môn trên là:\n$$30 - 27 = 3\(học sinh)$$.",
    "socraticHint": "Sử dụng công thức nguyên lý bù trừ cho 3 tập hợp rồi lấy tổng số trừ đi số phần tử của hợp.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 121,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn ứng dụng thực tế",
    "content": "Cho hai tập hợp $A = (m - 1; m + 2)$ và $B = (1; 4)$. Tìm tất cả các giá trị của tham số $m$ để $A \\cap B = \\emptyset$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\le -1$ hoặc $m \\ge 5$"
      },
      {
        "key": "B",
        "content": "$m < -1$ hoặc $m > 5$"
      },
      {
        "key": "C",
        "content": "$-1 < m < 5$"
      },
      {
        "key": "D",
        "content": "$m \\le 0$ hoặc $m \\ge 4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Để hai khoảng $A$ và $B$ không giao nhau, khoảng $A$ phải nằm hoàn toàn bên trái hoặc bên phải của khoảng $B$:\n- Trường hợp 1: $A$ nằm bên trái $B$, tức mút phải của $A$ nhỏ hơn hoặc bằng mút trái của $B$:\n$$m + 2 \\le 1 \\iff m \\le -1$$\n- Trường hợp 2: $A$ nằm bên phải $B$, tức mút trái của $A$ lớn hơn hoặc bằng mút phải của $B$:\n$$m - 1 \\ge 4 \\iff m \\ge 5$$\nKết hợp lại: $m \\le -1$ hoặc $m \\ge 5$.",
    "socraticHint": "Hai khoảng rời nhau khi khoảng này nằm hoàn toàn bên trái hoặc bên phải của khoảng kia trên trục số.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 201,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn ứng dụng thực tế",
    "content": "Cho hai tập hợp khác rỗng là $A = (m - 2; 3]$ và $B = (-3; 2m + 6)$. Có bao nhiêu giá trị nguyên của tham số $m$ để $A \\subset B$?",
    "options": [],
    "correctAnswer": "6",
    "acceptableAnswers": [
      "6",
      "6.0"
    ],
    "detailedSolution": "Để hai tập hợp $A$ và $B$ khác rỗng, ta có điều kiện:\n- $A \\ne \\emptyset \\iff m - 2 < 3 \\iff m < 5$.\n- $B \\ne \\emptyset \\iff -3 < 2m + 6 \\iff 2m > -9 \\iff m > -4.5$.\n\nĐể $A \\subset B$, ta cần đồng thời:\n1) $-3 \\le m - 2 \\iff m \\ge -1$.\n2) $3 < 2m + 6 \\iff 2m > -3 \\iff m > -1.5$ (do $3 \\in A$ nhưng $B$ là khoảng mở tại $2m + 6$).\n\nKết hợp tất cả các điều kiện trên:\n$$-1 \\le m < 5$$\nVì $m \\\\in \\mathbb{Z}$, nên $m \\in \\{-1; 0; 1; 2; 3; 4\\}$.\nVậy có đúng $6$ giá trị nguyên của tham số $m$.",
    "socraticHint": "Xác định điều kiện để tập hợp khác rỗng trước, sau đó so sánh hai đầu mút của các khoảng tập hợp.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_06_hsa35"
    ]
  }
];
