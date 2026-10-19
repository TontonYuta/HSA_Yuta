import { Question } from '../../../types/exam';

export const ungDungMuLogQuestions: Question[] = [
  {
    "id": 80,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_2_mu_logarit',
    "chapterName": 'Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)',
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "Ứng dụng thực tế mũ & logarit",
    "content": "Một chất phóng xạ có chu kỳ bán rã là 14 ngày (sau mỗi 14 ngày khối lượng chất phóng xạ giảm đi một nửa). Giả sử ban đầu có $100\\text{ gam}$ chất phóng xạ. Hỏi sau bao nhiêu ngày thì khối lượng chất phóng xạ còn lại đúng $12{,}5\\text{ gam}$?",
    "options": [
      {
        "key": "A",
        "content": "$42$"
      },
      {
        "key": "B",
        "content": "$28$"
      },
      {
        "key": "C",
        "content": "$56$"
      },
      {
        "key": "D",
        "content": "$35$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Khối lượng chất phóng xạ còn lại sau thời gian $t$ ngày là:\n$$m(t) = m_0 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{t}{T}}.$$\nVới $m_0 = 100\\text{ g}$, $T = 14\\text{ ngày}$ và $m(t) = 12{,}5\\text{ g}$, ta có phương trình:\n$$12{,}5 = 100 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{t}{14}} \\iff \\left(\\frac{1}{2}\\right)^{\\frac{t}{14}} = \\frac{12{,}5}{100} = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3.$$\nSuy ra $\\frac{t}{14} = 3 \\iff t = 42\\text{ ngày}$.",
    "socraticHint": "Khối lượng giảm còn $12{,}5\\%$ tương đương với giảm $2^3 = 8$ lần, tức là trải qua 3 chu kỳ bán rã.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 97,
    "latexVerified": true,
    "type": "fill",
    "chapterId": 'chuong_2_mu_logarit',
    "chapterName": 'Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)',
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "Ứng dụng thực tế mũ & logarit",
    "content": "Một người gửi 200 triệu đồng vào ngân hàng với lãi suất kép $6\\%/\\text{năm}$, tiền lãi nhập gốc hàng năm. Sau 4 năm, tổng số tiền (cả gốc lẫn lãi) người đó nhận được là bao nhiêu triệu đồng (làm tròn đến một chữ số thập phân)?",
    "correctAnswer": "252.5",
    "acceptableAnswers": [
      "252.5",
      "252,5"
    ],
    "detailedSolution": "Áp dụng công thức lãi kép:\n$$A = P(1 + r)^n,$$\ntrong đó $P = 200\\text{ triệu đồng}$, $r = 6\\% = 0{,}06$, $n = 4\\text{ năm}$.\nTa có:\n$$A = 200 \\times (1 + 0{,}06)^4 = 200 \\times (1{,}06)^4 \\approx 200 \\times 1{,}262477 = 252{,}4954\\text{ triệu đồng}.$$\nLàm tròn đến một chữ số thập phân ta được $252{,}5\\text{ triệu đồng}$.",
    "socraticHint": "Áp dụng công thức lãi kép định kỳ hàng năm $A = P(1 + r)^n$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 182,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_2_mu_logarit',
    "chapterName": 'Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)',
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "Ứng dụng thực tế mũ & logarit",
    "content": "Nồng độ của một loại thuốc trong máu bệnh nhân sau $t$ giờ kể từ khi tiêm được cho bởi hàm số $C(t) = \\frac{4t}{t^2 + 4}$ (đơn vị: mg/L). Sau bao nhiêu giờ thì nồng độ thuốc trong máu đạt mức cao nhất?",
    "options": [
      {
        "key": "A",
        "content": "$2$ giờ"
      },
      {
        "key": "B",
        "content": "$1$ giờ"
      },
      {
        "key": "C",
        "content": "$4$ giờ"
      },
      {
        "key": "D",
        "content": "$3$ giờ"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét hàm $C(t)$ với $t > 0$:\n$$C(t) = \\frac{4}{t + \\frac{4}{t}}$$\nTheo bất đẳng thức AM-GM: $t + \\frac{4}{t} \\ge 2\\sqrt{t \\cdot \\frac{4}{t}} = 4$.\nDo đó: $C(t) \\le \\frac{4}{4} = 1\\text{ mg/L}$.\nDấu bằng xảy ra khi $t = \\frac{4}{t} \\iff t^2 = 4 \\iff t = 2$ (giờ) (vì $t > 0$).\nVậy sau 2 giờ nồng độ thuốc trong máu đạt mức cao nhất.",
    "socraticHint": "Chia cả tử và mẫu cho $t$ rồi dùng bất đẳng thức AM-GM ở mẫu số, hoặc khảo sát đạo hàm $C'(t) = 0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 283,
    "latexVerified": true,
    "type": "fill",
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "content": "Tại Việt Nam, lượng khí thải $\\text{CO}_2$ năm 2022 là $344$ triệu tấn. Giả sử lượng khí thải này tăng trưởng trung bình $0{,}3\\%$ mỗi năm. Dự báo đến năm 2030, lượng khí thải $\\text{CO}_2$ tại Việt Nam là bao nhiêu triệu tấn? (Làm tròn kết quả đến hàng đơn vị).",
    "correctAnswer": "352",
    "detailedSolution": "Khoảng thời gian từ năm 2022 đến năm 2030 là: $n = 2030 - 2022 = 8$ năm.\nLượng phát thải $\\text{CO}_2$ sau 8 năm tính theo công thức tăng trưởng mũ liên tục:\n$$P(8) = P_0 \\cdot (1 + r)^8 = 344 \\times (1 + 0{,}003)^8 = 344 \\times (1{,}003)^8 \\approx 344 \\times 1{,}024257 \\approx 352{,}34\\text{ triệu tấn}$$\nLàm tròn đến hàng đơn vị: $352$ triệu tấn.",
    "socraticHint": "Công thức tăng trưởng định kỳ $P_n = P_0 (1 + r)^n$ với số năm $n = 8$ và lãi suất tăng trưởng $r = 0{,}3\\% = 0{,}003$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Ứng dụng thực tế mũ & logarit",
    "chapterId": 'chuong_2_mu_logarit',
    "chapterName": 'Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)'
  }
];
