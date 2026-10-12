import { Question } from '../../../types/exam';

export const duongThangDuongTronConicQuestions: Question[] = [
  {
    "id": 20,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, phương trình đường tròn có tâm $I(2; -1)$ và bán kính $R = 3$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(x - 2)^2 + (y + 1)^2 = 9$"
      },
      {
        "key": "B",
        "content": "$(x + 2)^2 + (y - 1)^2 = 9$"
      },
      {
        "key": "C",
        "content": "$(x - 2)^2 + (y + 1)^2 = 3$"
      },
      {
        "key": "D",
        "content": "$(x + 2)^2 + (y - 1)^2 = 3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình chính tắc đường tròn: $(x - a)^2 + (y - b)^2 = R^2$.\nThay $a = 2, b = -1, R = 3 \\implies (x - 2)^2 + (y + 1)^2 = 9$.",
    "socraticHint": "Đổi dấu tọa độ tâm khi viết vào phương trình chính tắc.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 21,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, khoảng cách từ điểm $M(3; 4)$ đến đường thẳng $\\Delta: 3x - 4y + 12 = 0$ bằng:",
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
        "content": "$5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Khoảng cách $d(M, \\Delta) = \\frac{|3(3) - 4(4) + 12|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|9 - 16 + 12|}{5} = \\frac{5}{5} = 1$.",
    "socraticHint": "Công thức khoảng cách từ điểm đến đường thẳng trong mặt phẳng Oxy.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 49,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có $A(1; 3), B(-2; 1), C(4; -1)$. Diện tích của tam giác $ABC$ bằng bao nhiêu?",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9.0"
    ],
    "detailedSolution": "Ta có $\\vec{AB} = (-3; -2)$ và $\\vec{AC} = (3; -4)$.\nDiện tích tam giác tính theo định thức tọa độ:\n$$S = \\frac{1}{2} |(-3)(-4) - (3)(-2)| = \\frac{1}{2} |12 + 6| = 9$$.",
    "socraticHint": "Dùng công thức diện tích tam giác theo tọa độ hai vectơ $S = \\frac{1}{2}|x_1 y_2 - x_2 y_1|$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 65,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Tâm của elip $(E): \\frac{x^2}{9} + \\frac{y^2}{4} = 1$ là:",
    "options": [
      {
        "key": "A",
        "content": "$O(0; 0)$"
      },
      {
        "key": "B",
        "content": "$(3; 2)$"
      },
      {
        "key": "C",
        "content": "$(9; 4)$"
      },
      {
        "key": "D",
        "content": "$(3; 0)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình chính tắc của elip $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ có tâm đối xứng là gốc tọa độ $O(0; 0)$.",
    "socraticHint": "Elip chính tắc có tâm đối xứng tại gốc tọa độ.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 76,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Đường thẳng $d: 2x - 3y + 5 = 0$ có một vectơ pháp tuyến là:",
    "options": [
      {
        "key": "A",
        "content": "$\\vec{n} = (2; -3)$"
      },
      {
        "key": "B",
        "content": "$\\vec{n} = (3; 2)$"
      },
      {
        "key": "C",
        "content": "$\\vec{n} = (2; 3)$"
      },
      {
        "key": "D",
        "content": "$\\vec{n} = (-3; 2)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Từ phương trình $Ax + By + C = 0$, VTPT là $\\vec{n} = (A; B) = (2; -3)$.",
    "socraticHint": "Hệ số của $x$ và $y$ chính là tọa độ vectơ pháp tuyến.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 93,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Bán kính của đường tròn $(C): x^2 + y^2 - 4x + 6y - 12 = 0$ bằng bao nhiêu?",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5",
      "5.0"
    ],
    "detailedSolution": "Tâm $I(2; -3), c = -12$. Bán kính $R = \\sqrt{2^2 + (-3)^2 - (-12)} = \\sqrt{4 + 9 + 12} = 5$.",
    "socraticHint": "Bán kính đường tròn dạng tổng quát $R = \\sqrt{a^2 + b^2 - c}$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 148,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Một bồn hoa có hình elip với độ dài trục lớn bằng 10 m và độ dài trục nhỏ bằng 6 m. Tiêu cự của bồn hoa hình elip này bằng bao nhiêu mét?",
    "correctAnswer": "8",
    "acceptableAnswers": [
      "8",
      "8.0"
    ],
    "detailedSolution": "Độ dài trục lớn $2a = 10 \\implies a = 5$.\nĐộ dài trục nhỏ $2b = 6 \\implies b = 3$.\nNửa tiêu cự: $c = \\sqrt{a^2 - b^2} = \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$.\nTiêu cự của hình elip là khoảng cách giữa 2 tiêu điểm: $2c = 2 \\times 4 = 8\\text{ m}$.",
    "socraticHint": "Tiêu cự của elip là $2c$ với $c = \\sqrt{a^2 - b^2}$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 170,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, phương trình tiếp tuyến của đường tròn $(C): x^2 + y^2 = 25$ tại điểm $M(3; 4)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$3x + 4y - 25 = 0$"
      },
      {
        "key": "B",
        "content": "$4x - 3y = 0$"
      },
      {
        "key": "C",
        "content": "$3x + 4y + 25 = 0$"
      },
      {
        "key": "D",
        "content": "$3x - 4y + 7 = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đường tròn $(C)$ có tâm $O(0; 0)$ và bán kính $R = 5$.\nTiếp tuyến tại $M(3; 4)$ nhận vectơ $\\vec{OM} = (3; 4)$ làm vectơ pháp tuyến.\nPhương trình tiếp tuyến: $3(x - 3) + 4(y - 4) = 0 \\iff 3x + 4y - 25 = 0$.",
    "socraticHint": "Phương trình tiếp tuyến tại $M(x_0; y_0)$ của đường tròn $x^2 + y^2 = R^2$ là $x_0 x + y_0 y = R^2$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 171,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có đỉnh $A(1; 2)$ và trọng tâm $G(3; 4)$. Tọa độ trung điểm $M$ của cạnh $BC$ là:",
    "options": [
      {
        "key": "A",
        "content": "$M(4; 5)$"
      },
      {
        "key": "B",
        "content": "$M(2; 3)$"
      },
      {
        "key": "C",
        "content": "$M(5; 6)$"
      },
      {
        "key": "D",
        "content": "$M(7; 8)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo tính chất trọng tâm: $\\vec{AG} = 2\\vec{GM} \\iff G - A = 2(M - G) \\iff 3G = A + 2M$.\nSuy ra $M = \\frac{3G - A}{2}$:\n- $x_M = \\frac{3(3) - 1}{2} = \\frac{8}{2} = 4$.\n- $y_M = \\frac{3(4) - 2}{2} = \\frac{10}{2} = 5$.\nVậy $M(4; 5)$.",
    "socraticHint": "Trọng tâm $G$ chia đoạn trung tuyến $AM$ theo tỉ số $AG = 2GM$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 193,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho đường thẳng $\\Delta: 3x - 4y + 5 = 0$ và điểm $I(1; -3)$. Bán kính của đường tròn tâm $I$ tiếp xúc với đường thẳng $\\Delta$ bằng bao nhiêu?",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0"
    ],
    "detailedSolution": "Đường tròn tâm $I$ tiếp xúc với đường thẳng $\\Delta$ khi bán kính $R = d(I, \\Delta)$.\n$$R = \\frac{|3(1) - 4(-3) + 5|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3 + 12 + 5|}{5} = \\frac{20}{5} = 4$$.",
    "socraticHint": "Khoảng cách từ tâm đến tiếp tuyến bằng chính bán kính đường tròn.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 198,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có trọng tâm $G(1; 2)$ và hai đỉnh $A(-1; 4), B(3; 0)$. Tìm tung độ $y_C$ của đỉnh $C$.",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2",
      "2.0"
    ],
    "detailedSolution": "Tọa độ trọng tâm $G$ thỏa mãn:\n$$y_G = \\frac{y_A + y_B + y_C}{3} \\iff 2 = \\frac{4 + 0 + y_C}{3} \\iff 6 = 4 + y_C \\iff y_C = 2$$.",
    "socraticHint": "Tung độ trọng tâm bằng trung bình cộng tung độ ba đỉnh của tam giác.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 203,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chương 6: Toán Lớp 10 & Hình học Oxy",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Một mảnh vườn hình elip có độ dài trục lớn bằng $20\\text{ m}$, độ dài trục bé bằng $16\\text{ m}$. Người ta dự định trồng hoa trong hình chữ nhật $MNPQ$ nội tiếp elip. Tính diện tích phần trồng hoa, biết chiều dài của phần trồng hoa là $MN = 16\\text{ m}$ (kết quả tính theo $\\text{m}^2$).",
    "options": [],
    "correctAnswer": "153.6",
    "acceptableAnswers": [
      "153.6",
      "153,6",
      "153.60"
    ],
    "detailedSolution": "Chọn hệ trục tọa độ $Oxy$ sao cho gốc $O$ là tâm elip, trục hoành chứa trục lớn và trục tung chứa trục bé.\nPhương trình chính tắc của elip:\n- Độ dài trục lớn: $2a = 20 \\implies a = 10$.\n- Độ dài trục bé: $2b = 16 \\implies b = 8$.\n$$(E): \\frac{x^2}{100} + \\frac{y^2}{64} = 1$$\nHình chữ nhật $MNPQ$ nội tiếp elip và có cạnh $MN = 16\\text{ m}$ song song với trục lớn.\nDo tính đối xứng qua các trục tọa độ, hoành độ đỉnh $M$ thỏa mãn $2x_M = 16 \\implies x_M = 8$.\nThay $x_M = 8$ vào phương trình $(E)$:\n$$\\frac{64}{100} + \\frac{y^2}{64} = 1 \\iff \\frac{y^2}{64} = 0.36 \\implies y_M = \\sqrt{64 \\times 0.36} = 8 \\times 0.6 = 4.8\\text{ m}$$\nChiều rộng hình chữ nhật: $MQ = 2y_M = 2 \\times 4.8 = 9.6\\text{ m}$.\nDiện tích hình chữ nhật trồng hoa:\n$$S = MN \\times MQ = 16 \\times 9.6 = 153.6\\text{ m}^2$$",
    "socraticHint": "Thiết lập phương trình chính tắc elip $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, từ chiều dài cạnh suy ra hoành độ và tìm tung độ.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  }
];
