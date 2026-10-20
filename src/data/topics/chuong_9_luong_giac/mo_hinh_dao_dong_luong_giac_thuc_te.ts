import { Question } from '../../../types/exam';

export const daoDongLuongGiacThucTeQuestions: Question[] = [
  {
    "id": 101,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Một cabin của vòng quay mặt trời chuyển động tròn đều có độ cao $h(t)$ (tính bằng mét) so với mặt đất tại thời điểm $t$ giây được cho bởi công thức $h(t) = 25 - 20\\cos\\left(\\frac{\\pi t}{20}\\right)$. Thời điểm đầu tiên kể từ lúc bắt đầu quay ($t = 0$) mà cabin đạt độ cao $35\\text{ m}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$t = \\frac{20}{3}\\text{ s}$"
      },
      {
        "key": "B",
        "content": "$t = 10\\text{ s}$"
      },
      {
        "key": "C",
        "content": "$t = \\frac{40}{3}\\text{ s}$"
      },
      {
        "key": "D",
        "content": "$t = 5\\text{ s}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Phương trình độ cao:\n$$h(t) = 35 \\iff 25 - 20\\cos\\left(\\frac{\\pi t}{20}\\right) = 35 \\iff \\cos\\left(\\frac{\\pi t}{20}\\right) = -\\frac{1}{2}$$\nVì $-\\frac{1}{2} = \\cos\\left(\\frac{2\\pi}{3}\\right)$ nên:\n$$\\frac{\\pi t}{20} = \\pm \\frac{2\\pi}{3} + k2\\pi \\iff t = \\pm \\frac{40}{3} + 40k \\quad (k \\in \\mathbb{Z})$$\n- Với nhánh dương: $t = \\frac{40}{3} + 40k$, nghiệm dương nhỏ nhất là $t = \\frac{40}{3}\\text{ s}$ (ứng với $k = 0$).\n- Với nhánh âm: $t = -\\frac{40}{3} + 40k$, nghiệm dương nhỏ nhất là $t = -\\frac{40}{3} + 40 = \\frac{80}{3}\\text{ s}$ (ứng với $k = 1$).\nSo sánh hai giá trị, thời điểm đầu tiên cabin đạt độ cao $35\\text{ m}$ là $t = \\frac{40}{3}\\text{ s}$.\nChọn C.",
    "socraticHint": "Giải phương trình $\\cos u = -\\frac{1}{2}$ với điều kiện thời gian $t > 0$ nhỏ nhất.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ],
    "answerVerified": true
  },
  {
    "id": 278,
    "latexVerified": true,
    "type": "fill",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "content": "Một vật nặng treo bởi lò xo dao động điều hòa lên xuống qua vị trí cân bằng theo phương trình li độ $d = 20\\cos\\left(10t + \\frac{\\pi}{6}\\right)\\text{ cm}$ ($t$ tính bằng giây). Trong 1 giây đầu tiên ($0 \\le t \\le 1$), có bao nhiêu thời điểm vật ở xa vị trí cân bằng nhất?",
    "correctAnswer": "3",
    "detailedSolution": "Khoảng cách từ vật đến vị trí cân bằng là:\n$$|d| = 20\\left|\\cos\\left(10t + \\frac{\\pi}{6}\\right)\\right| \\le 20\\text{ cm}$$\nVật ở xa vị trí cân bằng nhất khi và chỉ khi $|d| = 20 \\iff \\cos^2\\left(10t + \\frac{\\pi}{6}\\right) = 1 \\iff \\sin\\left(10t + \\frac{\\pi}{6}\\right) = 0$.\n$$\\iff 10t + \\frac{\\pi}{6} = k\\pi \\iff t = -\\frac{\\pi}{60} + \\frac{k\\pi}{10}, \\quad k \\in \\mathbb{Z}$$\nVì $0 \\le t \\le 1$ nên:\n$$0 \\le -\\frac{\\pi}{60} + \\frac{k\\pi}{10} \\le 1 \\iff \\frac{1}{6} \\le k \\le \\frac{10}{\\pi} + \\frac{1}{6} \\approx 3{,}18 + 0{,}17 = 3{,}35$$\nDo $k \\in \\mathbb{Z}$ nên $k \\in \\{1, 2, 3\\}$.\nVậy có đúng 3 thời điểm trong 1 giây đầu tiên.",
    "socraticHint": "Vật ở xa vị trí cân bằng nhất khi li độ đạt biên, tức $|\\cos(\\dots)| = 1$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Mô hình dao động lượng giác thực tế",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "answerVerified": true
  }
];
