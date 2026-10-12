import { Question } from '../../../types/exam';

export const khoiDaDienTamDienVuongQuestions: Question[] = [
  {
    "id": 15,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "content": "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Sin của góc giữa đường thẳng $A'C$ và mặt phẳng đáy $(ABCD)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{\\sqrt{2}}{2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{\\sqrt{3}}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{5}{13}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hình chiếu vuông góc của $A'C$ lên đáy $(ABCD)$ là $AC$.\nĐáy là hình chữ nhật nên $AC = \\sqrt{3^2 + 4^2} = 5$. Chiều cao $AA' = 5$.\nTam giác $A'AC$ vuông cân tại $A$ $\\implies \\widehat{A'CA} = 45^\\circ \\implies \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$.",
    "socraticHint": "Góc giữa đường thẳng và mặt phẳng là góc tạo bởi đường thẳng và hình chiếu vuông góc của nó lên mặt phẳng đó.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 16,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "content": "Thể tích khối chóp tứ giác đều có cạnh đáy bằng $a$ và chiều cao bằng $2a$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{2}{3}a^3$"
      },
      {
        "key": "B",
        "content": "$2a^3$"
      },
      {
        "key": "C",
        "content": "$\\frac{1}{3}a^3$"
      },
      {
        "key": "D",
        "content": "$\\frac{4}{3}a^3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Diện tích đáy: $S = a^2$. Chiều cao $h = 2a$.\nThể tích $V = \\frac{1}{3} S h = \\frac{1}{3} a^2 (2a) = \\frac{2}{3}a^3$.",
    "socraticHint": "Công thức thể tích hình chóp $V = \\frac{1}{3}Bh$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 41,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "content": "Tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$. Biết $OA = 3, OB = 4, OC = 5$. Thể tích khối tứ diện bằng bao nhiêu?",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10",
      "10.0"
    ],
    "detailedSolution": "Thể tích tứ diện vuông có 3 cạnh đôi một vuông góc: $V = \\frac{1}{6} OA \\cdot OB \\cdot OC = \\frac{1}{6}(3 \\times 4 \\times 5) = 10$.",
    "socraticHint": "Công thức tính thể tích góc tam diện vuông $V = \\frac{1}{6}abc$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 61,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "content": "Cho hình lăng trụ đứng tam giác có diện tích đáy bằng $6\\text{ cm}^2$ và chiều cao $5\\text{ cm}$. Thể tích của khối lăng trụ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$30\\text{ cm}^3$"
      },
      {
        "key": "B",
        "content": "$10\\text{ cm}^3$"
      },
      {
        "key": "C",
        "content": "$15\\text{ cm}^3$"
      },
      {
        "key": "D",
        "content": "$60\\text{ cm}^3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Thể tích lăng trụ: $V = S_{\a} \\cdot h = 6 \\times 5 = 30\\text{ cm}^3$.",
    "socraticHint": "Thể tích hình lăng trụ $V = Bh$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 85,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "content": "Thể tích của khối lập phương có cạnh bằng $3$ là:",
    "options": [
      {
        "key": "A",
        "content": "$27$"
      },
      {
        "key": "B",
        "content": "$9$"
      },
      {
        "key": "C",
        "content": "$18$"
      },
      {
        "key": "D",
        "content": "$54$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$V = a^3 = 3^3 = 27$.",
    "socraticHint": "Thể tích hình lập phương $V = a^3$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 91,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "content": "Diện tích toàn phần của hình lập phương có cạnh bằng $2$ bằng bao nhiêu?",
    "correctAnswer": "24",
    "acceptableAnswers": [
      "24",
      "24.0"
    ],
    "detailedSolution": "Hình lập phương có 6 mặt hình vuông: $S_{\\text{tp}} = 6 a^2 = 6(2^2) = 24$.",
    "socraticHint": "Hình lập phương có 6 mặt vuông bằng nhau.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 114,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "content": "Cho khối chóp $O.ABC$ có $OA, OB, OC$ đôi một vuông góc với nhau và $OA = 3, OB = 4, OC = 5$. Thể tích của khối chóp $O.ABC$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$10$"
      },
      {
        "key": "B",
        "content": "$20$"
      },
      {
        "key": "C",
        "content": "$30$"
      },
      {
        "key": "D",
        "content": "$60$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Khối chóp có tam diện vuông tại đỉnh $O$ có công thức thể tích:\n$$V = \\frac{1}{6} OA \\cdot OB \\cdot OC = \\frac{1}{6} \\times 3 \\times 4 \\times 5 = \\frac{60}{6} = 10$$.",
    "socraticHint": "Thể tích khối tứ diện có ba cạnh xuất phát từ một đỉnh đôi một vuông góc là $V = \\frac{1}{6}abc$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 146,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "content": "Khối chóp tam diện vuông $S.ABC$ có $SA \\perp SB, SB \\perp SC, SC \\perp SA$ và độ dài các cạnh $SA = 3, SB = 4, SC = 6$. Thể tích của khối chóp bằng bao nhiêu?",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12",
      "12.0"
    ],
    "detailedSolution": "Công thức thể tích khối chóp có tam diện vuông tại đỉnh $S$:\n$$V = \\frac{1}{6} SA \\cdot SB \\cdot SC = \\frac{1}{6} \\times 3 \\times 4 \\times 6 = 12$$.",
    "socraticHint": "Áp dụng công thức $V = \\frac{1}{6}abc$ cho tứ diện vuông.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 184,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "content": "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$ và cạnh bên bằng $a\\sqrt{2}$. Thể tích của khối chóp $S.ABCD$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a^3\\sqrt{6}}{6}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a^3\\sqrt{6}}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a^3\\sqrt{2}}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a^3}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đáy $ABCD$ là hình vuông cạnh $a \\implies S_{\a} = a^2$.\nĐường chéo $AC = a\\sqrt{2} \\implies OA = \\frac{a\\sqrt{2}}{2}$.\nChiều cao của khối chóp:\n$$SO = \\sqrt{SA^2 - OA^2} = \\sqrt{(a\\sqrt{2})^2 - l\\left(\\frac{a\\sqrt{2}}{2}\\right)^2} = \\sqrt{2a^2 - \\frac{a^2}{2}} = \\sqrt{\\frac{3a^2}{2}} = \\frac{a\\sqrt{6}}{2}$$\nThể tích khối chóp:\n$$V = \\frac{1}{3} S_{\a} \\cdot SO = \\frac{1}{3} a^2 \\cdot \\frac{a\\sqrt{6}}{2} = \\frac{a^3\\sqrt{6}}{6}$$.",
    "socraticHint": "Tính nửa đường chéo đáy $OA$, dùng định lý Pytago tìm chiều cao $SO = \\sqrt{SA^2 - OA^2}$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 216,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "content": "Cho hình lăng trụ $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$. Hình chiếu vuông góc của $A'$ trên mặt phẳng $(ABC)$ là trọng tâm của tam giác $ABC$ và góc giữa cạnh bên và mặt đáy bằng $60^\\circ$. Thể tích khối lăng trụ đã cho là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a^3\\sqrt{3}}{4}$"
      },
      {
        "key": "B",
        "content": "$3a^3$"
      },
      {
        "key": "C",
        "content": "$\\frac{3\\sqrt{3}a^3}{4}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a^3}{4}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $G$ là trọng tâm $\\Delta ABC$. Giả thiết cho $A'G \\perp (ABC)$.\nHình chiếu vuông góc của cạnh bên $A'A$ lên $(ABC)$ là đoạn thẳng $AG$, do đó góc giữa cạnh bên và mặt đáy là $\\widehat{A'AG} = 60^\\circ$.\nDiện tích tam giác đều $ABC$: $S_{ABC} = \\frac{a^2\\sqrt{3}}{4}$.\nKhoảng cách từ đỉnh đến trọng tâm đáy: $AG = \\frac{2}{3} \\frac{a\\sqrt{3}}{2} = \\frac{a\\sqrt{3}}{3} = \\frac{a}{\\sqrt{3}}$.\nTam giác $A'GA$ vuông tại $G$:\n$$A'G = AG \\cdot \\tan 60^\\circ = \\frac{a}{\\sqrt{3}} \\cdot \\sqrt{3} = a$$\nThể tích của khối lăng trụ $ABC.A'B'C'$:\n$$V = S_{ABC} \\cdot A'G = \\frac{a^2\\sqrt{3}}{4} \\cdot a = \\frac{a^3\\sqrt{3}}{4}$$",
    "socraticHint": "Xác định chiều cao lăng trụ bằng $h = A'G = AG \\tan 60^\\circ$, sau đó áp dụng công thức $V = B \\cdot h$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 217,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "content": "Cho hình chóp $S.ABC$ có $SA = SB = SC = a$, $\\widehat{ASB} = 60^\\circ$, $\\widehat{BSC} = 90^\\circ$, $\\widehat{CSA} = 120^\\circ$. Tính thể tích khối chóp $S.ABC$.",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a^3\\sqrt{3}}{4}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a^3\\sqrt{3}}{12}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a^3\\sqrt{2}}{12}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a^3\\sqrt{2}}{4}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tính độ dài các cạnh đáy của tam giác $ABC$:\n- $\\Delta SAB$ cân tại $S$ có góc $60^\\circ \\implies \\Delta SAB$ đều $\\implies AB = a$.\n- $\\Delta SBC$ vuông cân tại $S$ với $\\widehat{BSC} = 90^\\circ \\implies BC = a\\sqrt{2}$.\n- $\\Delta SCA$ cân tại $S$ với $\\widehat{CSA} = 120^\\circ$:\n  $$CA^2 = SA^2 + SC^2 - 2SA \\cdot SC \\cos 120^\\circ = a^2 + a^2 - 2a^2\\left(-\\frac{1}{2}\\right) = 3a^2 \\implies CA = a\\sqrt{3}$$\nNhận xét: $AB^2 + BC^2 = a^2 + 2a^2 = 3a^2 = CA^2$, do đó tam giác $ABC$ vuông tại $B$!\nDiện tích đáy: $S_{ABC} = \\frac{1}{2} AB \\cdot BC = \\frac{1}{2} a \\cdot a\\sqrt{2} = \\frac{a^2\\sqrt{2}}{2}$.\nVì $SA = SB = SC = a$, hình chiếu của $S$ lên mặt phẳng $(ABC)$ là tâm đường tròn ngoại tiếp $\\Delta ABC$.\nDo $\\Delta ABC$ vuông tại $B$, tâm đường tròn ngoại tiếp là trung điểm $H$ của cạnh huyền $AC$.\nBán kính đường tròn ngoại tiếp: $R = \\frac{AC}{2} = \\frac{a\\sqrt{3}}{2}$.\nChiều cao của hình chóp:\n$$SH = \\sqrt{SA^2 - R^2} = \\sqrt{a^2 - \\frac{3a^2}{4}} = \\frac{a}{2}$$\nThể tích khối chóp $S.ABC$:\n$$V = \\frac{1}{3} S_{ABC} \\cdot SH = \\frac{1}{3} \\cdot \\frac{a^2\\sqrt{2}}{2} \\cdot \\frac{a}{2} = \\frac{a^3\\sqrt{2}}{12}$$",
    "socraticHint": "Tính độ dài các cạnh đáy AB, BC, CA bằng định lý cosin, nhận biết tam giác vuông rồi tìm tâm đường tròn ngoại tiếp đáy.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 293,
    "type": "mcq",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "content": "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật. Mặt bên $(SAB)$ là tam giác đều cạnh bằng $2a$ và nằm trong mặt phẳng vuông góc với đáy. Khoảng cách từ điểm $A$ đến mặt phẳng $(SCD)$ bằng $\\frac{2a\\sqrt{33}}{11}$. Tính thể tích khối chóp $S.ABCD$:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a^3\\sqrt{33}}{11}$"
      },
      {
        "key": "B",
        "content": "$\\frac{6a^3\\sqrt{11}}{11}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a^3\\sqrt{11}}{11}$"
      },
      {
        "key": "D",
        "content": "$\\frac{2a^3\\sqrt{11}}{11}$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Gọi $H$ là trung điểm $AB \\implies SH \\perp AB \\implies SH \\perp (ABCD)$ vì $(SAB) \\perp (ABCD)$.\nTam giác $SAB$ đều cạnh $2a$ nên $AB = 2a$ và chiều cao $SH = \\frac{2a\\sqrt{3}}{2} = a\\sqrt{3}$.\nVì $AB \\parallel CD \\parallel (SCD)$ nên $d(A, (SCD)) = d(H, (SCD))$.\nGọi $K$ là trung điểm $CD \\implies HK \\perp CD$ và $HK = BC = b$.\nTrong tam giác vuông $SHK$ vuông tại $H$, kẻ đường cao $HE \\perp SK$ tại $E \\implies d(H, (SCD)) = HE$.\n$$\\frac{1}{HE^2} = \\frac{1}{SH^2} + \\frac{1}{HK^2} \\iff \\frac{1}{\\left(\\frac{2a\\sqrt{33}}{11}\\right)^2} = \\frac{1}{(a\\sqrt{3})^2} + \\frac{1}{b^2}$$\n$$\\iff \\frac{11}{12a^2} = \\frac{1}{3a^2} + \\frac{1}{b^2} \\iff \\frac{1}{b^2} = \\frac{11 - 4}{12a^2} = \\frac{7}{12a^2} \\implies b = \\frac{2a\\sqrt{3}}{\\sqrt{7}}$$\nDiện tích đáy: $S_{ABCD} = AB \\cdot BC = 2a \\cdot b$.\nThể tích: $V = \\frac{1}{3} S_{ABCD} \\cdot SH = \\frac{6a^3\\sqrt{11}}{11}$.",
    "socraticHint": "Sử dụng tính chất khoảng cách giữa đường thẳng song song với mặt phẳng và hệ thức lượng tam giác vuông $\\frac{1}{h^2} = \\frac{1}{a^2} + \\frac{1}{b^2}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Khối đa diện & Khối chóp tam diện vuông",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển"
  }
];
