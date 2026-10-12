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
    "content": "Cho khối chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, góc giữa mặt bên và mặt phẳng đáy bằng $60^\\circ$. Thể tích của khối chóp $S.ABCD$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a^3\\sqrt{3}}{6}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a^3\\sqrt{3}}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a^3\\sqrt{3}}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a^3\\sqrt{3}}{12}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $O$ là tâm của hình vuông đáy $ABCD$, suy ra $SO \\perp (ABCD)$.\nGọi $M$ là trung điểm của cạnh $CD$, ta có $OM \\perp CD$ và $SM \\perp CD$.\nGóc giữa mặt bên $(SCD)$ và đáy là góc $\\widehat{SMO} = 60^\\circ$.\nVì $ABCD$ là hình vuông cạnh $a$ nên $OM = \\frac{a}{2}$.\nChiều cao của khối chóp:\n$$SO = OM \\cdot \\tan 60^\\circ = \\frac{a}{2} \\cdot \\sqrt{3} = \\frac{a\\sqrt{3}}{2}.$$\nDiện tích đáy $S_{ABCD} = a^2$.\nThể tích khối chóp:\n$$V = \\frac{1}{3} S_{ABCD} \\cdot SO = \\frac{1}{3} \\cdot a^2 \\cdot \\frac{a\\sqrt{3}}{2} = \\frac{a^3\\sqrt{3}}{6}.$$",
    "socraticHint": "Xác định góc giữa mặt bên và mặt đáy qua trung điểm cạnh đáy để tính chiều cao $SO$.",
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
    "content": "Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc với nhau tại $O$. Biết $OA = 3, OB = 4, OC = 12$. Tính bán kính $R$ của mặt cầu ngoại tiếp tứ diện $OABC$.",
    "correctAnswer": "6.5",
    "acceptableAnswers": [
      "6.5",
      "6,5",
      "13/2"
    ],
    "detailedSolution": "Đối với tứ diện vuông $OABC$ có ba cạnh $OA, OB, OC$ đôi một vuông góc tại $O$, bán kính mặt cầu ngoại tiếp được tính theo công thức:\n$$R = \\frac{\\sqrt{OA^2 + OB^2 + OC^2}}{2}.$$\nThay số:\n$$R = \\frac{\\sqrt{3^2 + 4^2 + 12^2}}{2} = \\frac{\\sqrt{9 + 16 + 144}}{2} = \\frac{\\sqrt{169}}{2} = \\frac{13}{2} = 6{,}5.$$",
    "socraticHint": "Tứ diện vuông tại một đỉnh nội tiếp trong hình hộp chữ nhật có ba kích thước chính là độ dài ba cạnh bên vuông góc.",
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
    "content": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông cân tại $B$ với $AB = a$, cạnh bên $SA \\perp (ABC)$ và $SA = a\\sqrt{2}$. Gọi $M$ là trung điểm của cạnh $SC$. Mặt phẳng $(\\alpha)$ đi qua $A$ và $M$, song song với đường thẳng $BC$, cắt cạnh $SB$ tại điểm $N$. Thể tích của khối tứ diện $SAMN$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a^3 \\sqrt{2}}{24}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a^3 \\sqrt{2}}{12}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a^3 \\sqrt{2}}{8}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a^3 \\sqrt{2}}{16}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $(\\alpha) \\parallel BC$ và chứa $M \\in SC$, giao tuyến của $(\\alpha)$ với mặt phẳng $(SBC)$ là đường thẳng qua $M$ song song với $BC$, cắt $SB$ tại $N$.\nDo đó $N$ là trung điểm của $SB$.\nÁp dụng công thức tỉ số thể tích Simson cho khối chóp tam giác:\n$$\\frac{V_{S.AMN}}{V_{S.ABC}} = \\frac{SA}{SA} \\cdot \\frac{SN}{SB} \\cdot \\frac{SM}{SC} = 1 \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}.$$\nThể tích khối chóp $S.ABC$:\n$$V_{S.ABC} = \\frac{1}{3} S_{ABC} \\cdot SA = \\frac{1}{3} \\left( \\frac{1}{2} a^2 \\right) (a\\sqrt{2}) = \\frac{a^3 \\sqrt{2}}{6}.$$\nVậy thể tích khối tứ diện $SAMN$ là:\n$$V_{S.AMN} = \\frac{1}{4} V_{S.ABC} = \\frac{a^3 \\sqrt{2}}{24}.$$",
    "socraticHint": "Xác định vị trí điểm $N$ bằng tính chất đường thẳng song song trong mặt phẳng, sau đó dùng công thức tỉ số thể tích Simson.",
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
    "content": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $AB = a, AD = a\\sqrt{3}$. Mặt bên $SAB$ là tam giác đều và nằm trong mặt phẳng vuông góc với đáy. Khoảng cách từ điểm $A$ đến mặt phẳng $(SCD)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a\\sqrt{15}}{5}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a\\sqrt{3}}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a\\sqrt{5}}{5}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a\\sqrt{15}}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $H$ là trung điểm cạnh $AB$. Vì tam giác $SAB$ đều và $(SAB) \\perp (ABCD)$ nên $SH \\perp (ABCD)$ và $SH = \\frac{a\\sqrt{3}}{2}$.\nVì $AB \\parallel CD$ nên $AB \\parallel (SCD)$, do đó $d(A, (SCD)) = d(H, (SCD))$.\nGọi $K$ là trung điểm của $CD$, ta có $HK \\perp CD$ và $HK = AD = a\\sqrt{3}$.\nKẻ $HE \\perp SK$ tại $E$. Khi đó $HE \\perp (SCD)$, suy ra $d(H, (SCD)) = HE$.\nTam giác $SHK$ vuông tại $H$:\n$$\\frac{1}{HE^2} = \\frac{1}{SH^2} + \\frac{1}{HK^2} = \\frac{1}{\\frac{3a^2}{4}} + \\frac{1}{3a^2} = \\frac{4}{3a^2} + \\frac{1}{3a^2} = \\frac{5}{3a^2}.$$\nDo đó:\n$$HE = \\sqrt{\\frac{3a^2}{5}} = \\frac{a\\sqrt{15}}{5}.$$",
    "socraticHint": "Chuyển khoảng cách từ điểm $A$ về chân đường cao $H$ nhờ đường thẳng song song $AB \\parallel (SCD)$.",
    "difficulty": "Vận dụng cao",
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
    "content": "Cho khối lăng trụ tam giác đều $ABC.A'B'C'$ có cạnh đáy bằng $4$ và thể tích bằng $20\\sqrt{3}$. Tính chiều cao $h$ của khối lăng trụ.",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "detailedSolution": "Đáy là tam giác đều cạnh $a = 4$. Diện tích đáy là:\n$$S_{\\text{đáy}} = \\frac{a^2\\sqrt{3}}{4} = \\frac{4^2\\sqrt{3}}{4} = 4\\sqrt{3}.$$\nThể tích của khối lăng trụ đứng là:\n$$V = S_{\\text{đáy}} \\cdot h \\iff 20\\sqrt{3} = 4\\sqrt{3} \\cdot h \\iff h = \\frac{20\\sqrt{3}}{4\\sqrt{3}} = 5.$$",
    "socraticHint": "Áp dụng công thức thể tích lăng trụ $V = S_{\\text{đáy}} \\cdot h$ với đáy là tam giác đều.",
    "difficulty": "Vận dụng",
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
    "detailedSolution": "Đáy $ABCD$ là hình vuông cạnh $a \\implies S_{a} = a^2$.\nĐường chéo $AC = a\\sqrt{2} \\implies OA = \\frac{a\\sqrt{2}}{2}$.\nChiều cao của khối chóp:\n$$SO = \\sqrt{SA^2 - OA^2} = \\sqrt{(a\\sqrt{2})^2 - l\\left(\\frac{a\\sqrt{2}}{2}\\right)^2} = \\sqrt{2a^2 - \\frac{a^2}{2}} = \\sqrt{\\frac{3a^2}{2}} = \\frac{a\\sqrt{6}}{2}$$\nThể tích khối chóp:\n$$V = \\frac{1}{3} S_{a} \\cdot SO = \\frac{1}{3} a^2 \\cdot \\frac{a\\sqrt{6}}{2} = \\frac{a^3\\sqrt{6}}{6}$$.",
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
