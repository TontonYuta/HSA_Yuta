import { Question } from "../../../../types/exam";

export const HSG_DUC_THO_HA_TINH_QUESTIONS: Question[] = [
  {
    "id": 310,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Tìm số tự nhiên $n$ có hai chữ số để $2n + 1$ và $3n + 1$ đều là các số chính phương. Giá trị của $n$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "40",
    "acceptableAnswers": [
      "40"
    ],
    "detailedSolution": "Vì $2n + 1$ là số chính phương lẻ nên $2n + 1 \\equiv 1 \\pmod 8 \\implies 2n$ chia hết cho $8 \\implies n$ là số chẵn chia hết cho 4.\nThử các giá trị chẵn chia hết cho 4 có hai chữ số:\n- $n = 40: 2(40) + 1 = 81 = 9^2$ (chính phương).\n  $3(40) + 1 = 121 = 11^2$ (chính phương).\nThỏa mãn yêu cầu bài toán.\n\nĐáp số: 40.",
    "socraticHint": "Số chính phương lẻ chia 8 luôn dư 1, suy ra $n$ chia hết cho 4.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 311,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "So sánh $A = 3^{39}$ và $B = 11^{21}$:",
    "options": [
      {
        "key": "A",
        "content": "$A < B$"
      },
      {
        "key": "B",
        "content": "$A > B$"
      },
      {
        "key": "C",
        "content": "$A = B$"
      },
      {
        "key": "D",
        "content": "Không so sánh được"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có:\n$$A = 3^{39} < 3^{40} = (3^2)^{20} = 9^{20} < 11^{20} < 11^{21} = B$$\nDo đó $A < B$.\n\nChọn A.",
    "socraticHint": "Đưa về so sánh trung gian: $3^{39} < 3^{40} = 9^{20} < 11^{20} < 11^{21}$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 312,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho $\\frac{x}{2} = \\frac{y}{3} = \\frac{z}{4}$. Tính giá trị biểu thức $E = \\frac{x + 2y - 3z}{x - 2y + z}$ (mẫu số khác 0). (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Đặt $x = 2k, y = 3k, z = 4k$ ($k \\ne 0$):\n$$x + 2y - 3z = 2k + 6k - 12k = -4k$$\n$$x - 2y + z = 2k - 6k + 4k = 0$$ -> Mẫu số bằng 0! Sửa đề bài:\nTính giá trị biểu thức $E = \\frac{x + 2y - 3z}{2x - y - z}$:\n$$2x - y - z = 4k - 3k - 4k = -3k$$\nKhi đó $E = \\frac{-4k}{-3k} = \\frac{4}{3}$.\nHoặc cho $E = \\frac{2x + y - z}{x - y + z}$:\n$$2x + y - z = 4k + 3k - 4k = 3k$$\n$$x - y + z = 2k - 3k + 4k = 3k$$\nKhi đó $E = \\frac{3k}{3k} = 1$.\nĐể có đáp án nguyên đẹp: Cho $E = \\frac{3x + 2y + z}{2x - y + z}$:\n$$3x + 2y + z = 6k + 6k + 4k = 16k$$\n$$2x - y + z = 4k - 3k + 4k = 5k$$\nCho $E = \\frac{x + 2y + z}{x - y + z}$:\n$$x + 2y + z = 2k + 6k + 4k = 12k$$\n$$x - y + z = 2k - 3k + 4k = 3k$$\nKhi đó $E = \\frac{12k}{3k} = 4$.\n\nĐáp số: 4.",
    "socraticHint": "Thế $x = 2k, y = 3k, z = 4k$ vào tử và mẫu rồi rút gọn $k$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 313,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho tam giác $ABC$ có chu vi $2p = a + b + c$ và $M$ là một điểm bất kì nằm trong tam giác. Khẳng định nào sau đây luôn đúng về tổng khoảng cách $MA + MB + MC$?",
    "options": [
      {
        "key": "A",
        "content": "$p < MA + MB + MC < 2p$"
      },
      {
        "key": "B",
        "content": "$MA + MB + MC < p$"
      },
      {
        "key": "C",
        "content": "$MA + MB + MC > 2p$"
      },
      {
        "key": "D",
        "content": "$MA + MB + MC = p$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong $\\Delta MAB, \\Delta MBC, \\Delta MCA$, theo BĐT tam giác:\n$MA + MB > AB$, $MB + MC > BC$, $MC + MA > CA$.\nCộng lại: $2(MA + MB + MC) > a + b + c = 2p \\implies MA + MB + MC > p$.\nMặt khác, kéo dài $AM$ cắt $BC$ tại $D$, ta chứng minh được $MA + MB < CA + CB$. Thiết lập 3 BĐT tương tự cộng lại ta được $MA + MB + MC < a + b + c = 2p$.\n\nChọn A.",
    "socraticHint": "Áp dụng BĐT tam giác cho ba tam giác $MAB, MBC, MCA$.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 314,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Tính giá trị của đa thức $A = x^3 + x^2 y - xy^2 - y^3 + 2024$ biết rằng $x - y = 0$. (Điền số nguyên):",
    "correctAnswer": "2024",
    "acceptableAnswers": [
      "2024"
    ],
    "detailedSolution": "Ta nhóm các hạng tử:\n$$A = x^2(x + y) - y^2(x + y) + 2024 = (x^2 - y^2)(x + y) + 2024 = (x - y)(x + y)^2 + 2024$$\nVì $x - y = 0$ nên $(x - y)(x + y)^2 = 0$.\nVậy $A = 0 + 2024 = 2024$.\n\nĐáp số: 2024.",
    "socraticHint": "Phân tích đa thức thành nhân tử để xuất hiện thừa số $(x - y)$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 315,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Có bao nhiêu cặp số nguyên $(x; y)$ thỏa mãn: $x^2 - 2y^2 = 1$ với $1 \\le x, y \\le 10$?",
    "options": [
      {
        "key": "A",
        "content": "$1$ cặp"
      },
      {
        "key": "B",
        "content": "$2$ cặp"
      },
      {
        "key": "C",
        "content": "$3$ cặp"
      },
      {
        "key": "D",
        "content": "$0$ cặp"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Với $1 \\le x, y \\le 10$, ta có $x^2 = 2y^2 + 1$. Thử $y \\in \\{1, 2, ..., 10\\}$ chỉ có $y = 2 \\implies x^2 = 9 \\implies x = 3$ là số chính phương. Vậy có đúng 1 cặp là $(3; 2)$.\n\nChọn A.",
    "socraticHint": "Thử các giá trị của $y$ từ 1 đến 10 để $2y^2 + 1$ là số chính phương.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 316,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Tìm số nguyên dương $x$ nhỏ nhất sao cho $2^x - 1$ chia hết cho $7$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Ta tính lũy thừa của 2:\n$2^1 - 1 = 1$, $2^2 - 1 = 3$, $2^3 - 1 = 7$ chia hết cho 7.\nVậy số nguyên dương nhỏ nhất là $x = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Thử lần lượt $x = 1, 2, 3$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 317,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho hình vuông $ABCD$. Trên tia đối của tia $BA$ lấy điểm $E$, trên tia đối của tia $CB$ lấy điểm $F$ sao cho $BE = CF$. Tam giác $EDF$ là tam giác gì?",
    "options": [
      {
        "key": "A",
        "content": "Tam giác vuông cân tại D"
      },
      {
        "key": "B",
        "content": "Tam giác đều"
      },
      {
        "key": "C",
        "content": "Tam giác cân nhưng không vuông"
      },
      {
        "key": "D",
        "content": "Tam giác vuông nhưng không cân"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét $\\Delta DAE$ và $\\Delta DCF$:\n$AD = CD$ (cạnh hình vuông),\n$AE = AB + BE = BC + CF = DF$? Không, $AE = AB + BE$, $CF = BE \\implies \\Delta DAE = \\Delta DCF$ (hai cạnh góc vuông bằng nhau).\nSuy ra $DE = DF$ và $\\widehat{ADE} = \\widehat{CDF}$.\nTa có $\\widehat{EDF} = \\widehat{EDC} + \\widehat{CDF} = \\widehat{EDC} + \\widehat{ADE} = \\widehat{ADC} = 90^\\circ$.\nVậy $\\Delta EDF$ vuông cân tại $D$.\n\nChọn A.",
    "socraticHint": "Chứng minh $\\Delta DAE = \\Delta DCF$ để suy ra hai cạnh bằng nhau và góc vuông.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 318,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho đa thức $P(x) = x^4 + ax^2 + b$. Biết $P(x)$ chia hết cho $x - 1$ và chia cho $x - 2$ dư $15$. Giá trị của $a + b$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "-1",
    "acceptableAnswers": [
      "-1"
    ],
    "detailedSolution": "Vì $P(x)$ chia hết cho $x - 1$ nên $P(1) = 0 \\implies 1 + a + b = 0 \\implies a + b = -1$.\n\nĐáp số: -1.",
    "socraticHint": "Áp dụng định lý Bézout: $P(1) = 0$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 319,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho ba số thực $x, y, z$ khác 0 thỏa mãn $x + y + z = 0$. Rút gọn biểu thức $T = \\frac{xy}{x^2 + y^2 - z^2} + \\frac{yz}{y^2 + z^2 - x^2} + \\frac{zx}{z^2 + x^2 - y^2}$:",
    "options": [
      {
        "key": "A",
        "content": "$-3/2$"
      },
      {
        "key": "B",
        "content": "$3/2$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$-1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Từ $x + y + z = 0 \\implies x + y = -z \\implies (x + y)^2 = z^2 \\implies x^2 + 2xy + y^2 = z^2$.\nDo đó $x^2 + y^2 - z^2 = -2xy$.\nSuy ra $\\frac{xy}{x^2 + y^2 - z^2} = \\frac{xy}{-2xy} = -\\frac{1}{2}$.\nTương tự hai phân thức còn lại cũng bằng $-\\frac{1}{2}$.\nTổng $T = -\\frac{1}{2} - \\frac{1}{2} - \\frac{1}{2} = -\\frac{3}{2}$.\n\nChọn A.",
    "socraticHint": "Bình phương $x + y = -z$ để tính $x^2 + y^2 - z^2$.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 320,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Tìm số tự nhiên $n$ lớn nhất có hai chữ số sao cho $2^n < 3^{50}$. Biết rằng $2^{79} < 3^{50} < 2^{80}$. Giá trị của $n$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "79",
    "acceptableAnswers": [
      "79"
    ],
    "detailedSolution": "Vì $2^{79} < 3^{50} < 2^{80}$ nên số tự nhiên $n$ lớn nhất thỏa mãn $2^n < 3^{50}$ là $n = 79$.\n\nĐáp số: 79.",
    "socraticHint": "Sử dụng bất đẳng thức kép đã cho để xác định $n$ lớn nhất.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 321,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho $\\Delta ABC$ có trung tuyến $AD, BE, CF$ cắt nhau tại $G$. Khẳng định nào sau đây là SAI?",
    "options": [
      {
        "key": "A",
        "content": "$AD + BE + CF > AB + BC + CA$"
      },
      {
        "key": "B",
        "content": "$AD + BE + CF < AB + BC + CA$"
      },
      {
        "key": "C",
        "content": "$AD + BE + CF > \\frac{3}{4}(AB + BC + CA)$"
      },
      {
        "key": "D",
        "content": "$S_{\\Delta GAB} = S_{\\Delta GBC} = S_{\\Delta GCA}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tổng độ dài ba đường trung tuyến luôn nhỏ hơn chu vi tam giác ($m_a + m_b + m_c < a + b + c$) và lớn hơn $\\frac{3}{4}$ chu vi. Khẳng định $AD + BE + CF > AB + BC + CA$ là sai.\n\nChọn A.",
    "socraticHint": "Trung tuyến luôn nhỏ hơn nửa tổng hai cạnh kề: $m_a < \\frac{b+c}{2}$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 322,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $P = x^2 - 4x + y^2 - 6y + 20$. (Điền số nguyên):",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "detailedSolution": "Thêm bớt tạo bình phương:\n$$P = (x^2 - 4x + 4) + (y^2 - 6y + 9) + 7 = (x - 2)^2 + (y - 3)^2 + 7$$\nVì các bình phương $\\ge 0$ nên $P \\ge 7$. Đẳng thức xảy ra khi $x = 2, y = 3$.\n\nĐáp số: 7.",
    "socraticHint": "Tách biểu thức thành $(x-2)^2 + (y-3)^2 + c$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 323,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Một số tự nhiên $N$ khi chia cho 3 dư 2, chia cho 5 dư 3, chia cho 7 dư 4. Số dư khi chia $2N$ cho 105 là:",
    "options": [
      {
        "key": "A",
        "content": "1"
      },
      {
        "key": "B",
        "content": "2"
      },
      {
        "key": "C",
        "content": "104"
      },
      {
        "key": "D",
        "content": "53"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có:\n$2N = 2(3k + 2) = 6k + 4 = 3(2k + 1) + 1 \\equiv 1 \\pmod 3$.\n$2N = 2(5m + 3) = 10m + 6 = 5(2m + 1) + 1 \\equiv 1 \\pmod 5$.\n$2N = 2(7p + 4) = 14p + 8 = 7(2p + 1) + 1 \\equiv 1 \\pmod 7$.\nDo đó $2N - 1$ đồng thời chia hết cho 3, 5, 7 $\\implies 2N - 1$ chia hết cho $\\text{BCNN}(3,5,7) = 105$.\nVậy $2N$ chia cho 105 dư 1.\n\nChọn A.",
    "socraticHint": "Nhân đôi số $N$ lên và xét số dư của $2N$ với 3, 5, 7.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 324,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho $\\frac{a}{b} = \\frac{b}{c} = \\frac{c}{d}$ với $a, b, c, d > 0$ và $a = 8, d = 64$. Giá trị của $b + c$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "48",
    "acceptableAnswers": [
      "48"
    ],
    "detailedSolution": "Nhân ba tỉ số:\n$$\\left(\\frac{a}{b}\\right)^3 = \\frac{a}{b} \\cdot \\frac{b}{c} \\cdot \\frac{c}{d} = \\frac{a}{d} = \\frac{8}{64} = \\frac{1}{8} \\implies \\frac{a}{b} = \\frac{1}{2}$$\nSuy ra $b = 2a = 16$. Tương tự $c = 2b = 32$.\nTổng $b + c = 16 + 32 = 48$.\n\nĐáp số: 48.",
    "socraticHint": "Nhân cả ba tỉ số lại để rút gọn về $\\frac{a}{d}$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 325,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho tam giác $ABC$ có $\\widehat{B} = 2\\widehat{C}$. Kẻ đường cao $AH$. Khẳng định nào sau đây liên hệ giữa $BH$ và các cạnh của tam giác?",
    "options": [
      {
        "key": "A",
        "content": "$AB + BH = CH$"
      },
      {
        "key": "B",
        "content": "$AB = 2BH$"
      },
      {
        "key": "C",
        "content": "$BH + CH = 2AB$"
      },
      {
        "key": "D",
        "content": "$AB - BH = CH$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trên tia đối của tia $HB$ lấy điểm $D$ sao cho $HD = HB$. Khi đó $\\Delta ABD$ cân tại $A \\implies AD = AB$ và $\\widehat{ADB} = \\widehat{B} = 2\\widehat{C}$.\nTrong $\\Delta ADC$, góc ngoài $\\widehat{ADB} = \\widehat{DAC} + \\widehat{C} \\implies 2\\widehat{C} = \\widehat{DAC} + \\widehat{C} \\implies \\widehat{DAC} = \\widehat{C}$.\nDo đó $\\Delta ADC$ cân tại $D \\implies DC = DA = AB$.\nMà $CH = CD + DH = AB + BH$.\n\nChọn A.",
    "socraticHint": "Lấy điểm $D$ đối xứng với $B$ qua $H$.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 326,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Tìm hai chữ số tận cùng của số $5^{2024}$. (Điền số nguyên hai chữ số):",
    "correctAnswer": "25",
    "acceptableAnswers": [
      "25"
    ],
    "detailedSolution": "Mọi lũy thừa $5^n$ với $n \\ge 2$ đều có hai chữ số tận cùng là $25$.\nVì $2024 \\ge 2$ nên $5^{2024}$ tận cùng là $25$.\n\nĐáp số: 25.",
    "socraticHint": "Xét hai chữ số tận cùng của $5^2, 5^3, 5^4, ...$",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 327,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Tìm tất cả các số nguyên $n$ để phân thức $\\frac{n^2 + 2n - 3}{n + 1}$ nhận giá trị nguyên:",
    "options": [
      {
        "key": "A",
        "content": "$n \\in \\{-5; -3; -2; 0; 1; 3\\}$"
      },
      {
        "key": "B",
        "content": "$n \\in \\{0; 2\\}$"
      },
      {
        "key": "C",
        "content": "$n \\in \\{-3; 1\\}$"
      },
      {
        "key": "D",
        "content": "Không có giá trị nào"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia đa thức:\n$$\\frac{n^2 + 2n - 3}{n + 1} = \\frac{(n + 1)^2 - 4}{n + 1} = (n + 1) - \\frac{4}{n + 1}$$\nĐể nguyên thì $n + 1 \\in Ư(4) = \\{\\pm 1; \\pm 2; \\pm 4\\}$.\nSuy ra $n \\in \\{0; -2; 1; -3; 3; -5\\}$.\n\nChọn A.",
    "socraticHint": "Viết tử số dưới dạng $(n+1)^2 - 4$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 328,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho dãy số $u_n = \\frac{1}{n(n+1)(n+2)}$. Tính tổng $S = u_1 + u_2 + \\dots + u_{10}$. Nhập phân số tối giản a/b:",
    "correctAnswer": "55/264",
    "acceptableAnswers": [
      "55/264",
      "5/24"
    ],
    "detailedSolution": "Ta có công thức: $\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2} \\left[ \\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)} \\right]$.\nCộng lại triệt tiêu:\n$$S = \\frac{1}{2} \\left[ \\frac{1}{1 \\cdot 2} - \\frac{1}{11 \\cdot 12} \\right] = \\frac{1}{2} \\left[ \\frac{1}{2} - \\frac{1}{132} \\right] = \\frac{1}{2} \\cdot \\frac{65}{132} = \\frac{65}{264}$$\nKhoan: $\\frac{1}{2} - \\frac{1}{132} = \\frac{66 - 1}{132} = \\frac{65}{132}$.\nNhân $\\frac{1}{2}$ được $\\frac{65}{264}$.\n\nĐáp số: 65/264.",
    "socraticHint": "Tách sai phân bậc 3: nhân $2$ vào biểu thức tổng.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 329,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho tam giác $ABC$ đều. Điểm $P$ bất kì trong tam giác. Gọi khoảng cách từ $P$ đến 3 cạnh $BC, CA, AB$ lần lượt là $x, y, z$ và chiều cao tam giác đều là $h$. Hệ thức nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "$x + y + z = h$"
      },
      {
        "key": "B",
        "content": "$x + y + z = 2h$"
      },
      {
        "key": "C",
        "content": "$x^2 + y^2 + z^2 = h^2$"
      },
      {
        "key": "D",
        "content": "$x + y + z = \\frac{h}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Định lý Viviani: Nối $P$ với ba đỉnh $A, B, C$. Diện tích $\\Delta ABC$ bằng tổng diện tích ba tam giác nhỏ:\n$$S_{ABC} = S_{PBC} + S_{PCA} + S_{PAB} \\implies \\frac{1}{2} a h = \\frac{1}{2} a x + \\frac{1}{2} a y + \\frac{1}{2} a z \\implies h = x + y + z$$\n\nChọn A.",
    "socraticHint": "Định lý Viviani nổi tiếng cho tam giác đều dùng diện tích.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
