import { Question } from '../../../types/exam';

export const khoiTronXoayQuestions: Question[] = [
  {
    "id": 74,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_4_hinh_hoc_khong_gian',
    "chapterName": 'Chuyên đề 8: Hình học không gian cổ điển (Toán 11)',
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay: Khối nón, Khối trụ & Khối cầu",
    "content": "Một chiếc cốc hình trụ có bán kính đáy $R = 4\\text{ cm}$ chứa một lượng nước. Người ta thả chìm hoàn toàn vào cốc một viên bi sắt hình cầu thì mực nước trong cốc dâng lên thêm $2{,}25\\text{ cm}$. Bán kính của viên bi sắt bằng:",
    "options": [
      {
        "key": "A",
        "content": "$3\\text{ cm}$"
      },
      {
        "key": "B",
        "content": "$2{,}5\\text{ cm}$"
      },
      {
        "key": "C",
        "content": "$2\\text{ cm}$"
      },
      {
        "key": "D",
        "content": "$3{,}5\\text{ cm}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Thể tích phần nước dâng lên chính bằng thể tích của viên bi sắt:\n$$V_{\\text{dâng}} = \\pi R^2 h = \\pi \\cdot 4^2 \\cdot 2{,}25 = 36\\pi\\text{ (cm}^3\\text{)}.$$\nThể tích của viên bi hình cầu bán kính $r$ là:\n$$V_{\\text{bi}} = \\frac{4}{3}\\pi r^3.$$\nTheo bài ra:\n$$\\frac{4}{3}\\pi r^3 = 36\\pi \\iff r^3 = 36 \\times \\frac{3}{4} = 27 \\iff r = 3\\text{ cm}.$$",
    "socraticHint": "Thể tích vật thả chìm hoàn toàn bằng thể tích khối trụ nước dâng lên.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 196,
    "latexVerified": true,
    "type": "fill",
    "chapterId": 'chuong_4_hinh_hoc_khong_gian',
    "chapterName": 'Chuyên đề 8: Hình học không gian cổ điển (Toán 11)',
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay: Khối nón, Khối trụ & Khối cầu",
    "content": "Một hình nón có bán kính đáy $r = 6\\text{ cm}$ và độ dài đường sinh $l = 10\\text{ cm}$. Tính diện tích toàn phần của hình nón đó theo đơn vị $\\pi\\text{ cm}^2$ (chỉ điền hệ số của $\\pi$).",
    "correctAnswer": "96",
    "acceptableAnswers": [
      "96"
    ],
    "detailedSolution": "Diện tích xung quanh của hình nón:\n$$S_{xq} = \\pi r l = \\pi \\cdot 6 \\cdot 10 = 60\\pi\\text{ (cm}^2\\text{)}.$$\nDiện tích đáy của hình nón:\n$$S_{\\text{đáy}} = \\pi r^2 = \\pi \\cdot 6^2 = 36\\pi\\text{ (cm}^2\\text{)}.$$\nDiện tích toàn phần:\n$$S_{tp} = S_{xq} + S_{\\text{đáy}} = 60\\pi + 36\\pi = 96\\pi\\text{ (cm}^2\\text{)}.$$\nHệ số của $\\pi$ là $96$.",
    "socraticHint": "Diện tích toàn phần của hình nón bằng diện tích xung quanh cộng với diện tích đáy hình tròn: $S_{tp} = \\pi rl + \\pi r^2$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  }
];
