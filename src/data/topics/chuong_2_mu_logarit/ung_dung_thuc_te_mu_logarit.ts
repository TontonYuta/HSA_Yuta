import { Question } from '../../../types/exam';

export const ungDungMuLogQuestions: Question[] = [
  {
    "id": 80,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "Ứng dụng thực tế mũ & logarit",
    "content": "Dân số tăng theo công thức $P(t) = P_0 e^{rt}$. Nếu tốc độ tăng $r = 2\\%$/năm, sau khoảng bao nhiêu năm dân số tăng gấp đôi?",
    "options": [
      {
        "key": "A",
        "content": "$35$ năm"
      },
      {
        "key": "B",
        "content": "$50$ năm"
      },
      {
        "key": "C",
        "content": "$20$ năm"
      },
      {
        "key": "D",
        "content": "$70$ năm"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Dân số tăng gấp đôi khi $e^{0{,}02 t} = 2 \\implies 0{,}02 t = \\ln 2 \\approx 0{,}693 \\implies t \\approx 34{,}65 \\approx 35$ năm.",
    "socraticHint": "Quy tắc tăng trưởng mũ: thời gian nhân đôi xấp xỉ bằng $\\ln 2 / r$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 97,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "Ứng dụng thực tế mũ & logarit",
    "content": "Gửi tiết kiệm 100 triệu đồng với lãi suất đơn $6\\%$/năm. Sau 2 năm nhận được tổng cộng bao nhiêu triệu đồng tiền cả gốc lẫn lãi?",
    "correctAnswer": "112",
    "acceptableAnswers": [
      "112",
      "112.0"
    ],
    "detailedSolution": "Lãi mỗi năm là $100 \\times 6\\% = 6$ triệu. Sau 2 năm lãi 12 triệu $\\implies$ Tổng nhận được là $100 + 12 = 112$ triệu đồng.",
    "socraticHint": "Lãi đơn tính trực tiếp trên tiền gốc ban đầu.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 182,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit",
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "Ứng dụng thực tế mũ & logarit",
    "content": "Nồng độ của một loại thuốc trong máu bệnh nhân sau $t$ giờ kể từ khi tiêm được cho bởi hàm số $C(t) = \\frac{4t}{t^2 + 4}$ (đơn vị: mg/L). Sau bao nhiêu giờ thì nồng độ thuốc trong máu đạt mức cao nhất?",
    "options": [
      {
        "key": "A",
        "content": "$2\\text{ giờ}$"
      },
      {
        "key": "B",
        "content": "$1\\text{ giờ}$"
      },
      {
        "key": "C",
        "content": "$4\\text{ giờ}$"
      },
      {
        "key": "D",
        "content": "$3\\text{ giờ}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét hàm $C(t)$ với $t > 0$:\n$$C(t) = \\frac{4}{t + \\frac{4}{t}}$$\nTheo bất đẳng thức AM-GM: $t + \\frac{4}{t} \\ge 2sqrt{t \\cdot \\frac{4}{t}} = 4$.\nDo đó: $C(t) \\le \\frac{4}{4} = 1\\text{ mg/L}$.\nDấu bằng xảy ra khi $t = \\frac{4}{t} \\iff t^2 = 4 \\iff t = 2\\text{ giờ}$ (vì $t > 0$).\nVậy sau 2 giờ nồng độ thuốc trong máu đạt mức cao nhất.",
    "socraticHint": "Chia cả tử và mẫu cho $t$ rồi dùng bất đẳng thức AM-GM ở mẫu số, hoặc khảo sát đạo hàm $C'(t) = 0$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 283,
    "type": "fill",
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "content": "Tại Việt Nam, lượng khí thải $\\text{CO}_2$ năm 2022 là $344$ triệu tấn. Giả sử lượng khí thải này tăng trưởng trung bình $0{,}3\\%$ mỗi năm. Dự báo đến năm 2030, lượng khí thải $\\text{CO}_2$ tại Việt Nam là bao nhiêu triệu tấn? (Làm tròn kết quả đến hàng đơn vị).",
    "correctAnswer": "352",
    "detailedSolution": "Khoảng thời gian từ năm 2022 đến năm 2030 là: $n = 2030 - 2022 = 8$ năm.\nLượng phát thải $\\text{CO}_2$ sau 8 năm tính theo công thức tăng trưởng mũ liên tục:\n$$P(8) = P_0 \\cdot (1 + r)^8 = 344 \\times (1 + 0{,}003)^8 = 344 \\times (1{,}003)^8 \\approx 344 \\times 1{,}024257 \\approx 352{,}34\\text{ triệu tấn}$$\nLàm tròn đến hàng đơn vị: $352$ triệu tấn.",
    "socraticHint": "Công thức tăng trưởng định kỳ $P_n = P_0 (1 + r)^n$ với số năm $n = 8$ và lãi suất tăng trưởng $r = 0{,}3\\% = 0{,}003$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Ứng dụng thực tế mũ & logarit",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chương 2: Hàm số mũ & Hàm số Logarit"
  }
];
