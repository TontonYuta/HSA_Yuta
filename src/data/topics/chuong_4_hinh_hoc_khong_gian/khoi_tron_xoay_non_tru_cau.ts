import { Question } from '../../../types/exam';

export const khoiTronXoayQuestions: Question[] = [
  {
    "id": 74,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay: Khối nón, Khối trụ & Khối cầu",
    "content": "Thể tích khối nón có bán kính đáy $r = 3$ và chiều cao $h = 4$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$12\\pi$"
      },
      {
        "key": "B",
        "content": "$36\\pi$"
      },
      {
        "key": "C",
        "content": "$16\\pi$"
      },
      {
        "key": "D",
        "content": "$24\\pi$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$V = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi (3^2)(4) = 12\\pi$.",
    "socraticHint": "Thể tích nón tròn xoay $V = \\frac{1}{3}\\pi r^2 h$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 196,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay: Khối nón, Khối trụ & Khối cầu",
    "content": "Cho khối nón tròn xoay có bán kính đường tròn đáy $r = 3\\text{ cm}$ và chiều cao $h = 4\\text{ cm}$. Diện tích xung quanh của khối nón bằng $k\\pi\\text{ cm}^2$. Tính giá trị của $k$.",
    "correctAnswer": "15",
    "acceptableAnswers": [
      "15",
      "15.0"
    ],
    "detailedSolution": "Độ dài đường sinh của hình nón:\n$$l = \\sqrt{r^2 + h^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\text{ cm}$$\nDiện tích xung quanh của hình nón:\n$$S_{\\text{xq}} = \\pi r l = \\pi \\times 3 \\times 5 = 15\\pi\\text{ cm}^2$$\nDo đó $k = 15$.",
    "socraticHint": "Đường sinh $l = \\sqrt{r^2+h^2}$, diện tích xung quanh khối nón $S_{\\text{xq}} = \\pi r l$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_04_nang_cao"
    ]
  }
];
