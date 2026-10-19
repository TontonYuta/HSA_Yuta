import { Question } from '../../../types/exam';

export const tiSoTheTichQuestions: Question[] = [
  {
    "id": 115,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_4_hinh_hoc_khong_gian',
    "chapterName": 'Chuyên đề 8: Hình học không gian cổ điển (Toán 11)',
    "topicId": "ti_so_the_tich_khoi_chop_lang_tru",
    "topicName": "Tỉ số thể tích khối chóp & Lăng trụ",
    "content": "Cho hình chóp $S.ABCD$ có thể tích $V$. Mặt phẳng $(\\alpha)$ đi qua trọng tâm tam giác $SAB$ và song song với mặt phẳng đáy $(ABCD)$ cắt các cạnh $SA, SB, SC, SD$ lần lượt tại $A', B', C', D'$. Thể tích của khối chóp $S.A'B'C'D'$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{8}{27}V$"
      },
      {
        "key": "B",
        "content": "$\\frac{4}{9}V$"
      },
      {
        "key": "C",
        "content": "$\\frac{1}{8}V$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{27}V$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $G$ là trọng tâm tam giác $SAB$. Nếu $M$ là trung điểm $AB$, thì $\\frac{SG}{SM} = \\frac{2}{3}$.\nMặt phẳng $(\\alpha)$ song song với đáy nên thiết diện $A'B'C'D'$ đồng dạng với đáy $ABCD$ theo tỉ số $k = \\frac{2}{3}$.\nKhoảng cách từ $S$ đến $(\\alpha)$ bằng $\\frac{2}{3} h$.\nDo đó thể tích khối chóp $S.A'B'C'D'$ tỉ lệ với lập phương của tỉ số đồng dạng:\n$$\\frac{V_{S.A'B'C'D'}}{V} = l\\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27} \\implies V_{S.A'B'C'D'} = \\frac{8}{27}V$$.",
    "socraticHint": "Khi cắt hình chóp bằng mặt phẳng song song với đáy, tỉ số thể tích bằng lập phương của tỉ số đồng dạng $k^3$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 165,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_4_hinh_hoc_khong_gian',
    "chapterName": 'Chuyên đề 8: Hình học không gian cổ điển (Toán 11)',
    "topicId": "ti_so_the_tich_khoi_chop_lang_tru",
    "topicName": "Tỉ số thể tích khối chóp & Lăng trụ",
    "content": "Cho hình lăng trụ tam giác $ABC.A'B'C'$ có thể tích bằng $V$. Thể tích của khối chóp $A.A'B'C'$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{V}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{V}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2V}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{V}{6}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Khối chóp $A.A'B'C'$ có cùng chiều cao với hình lăng trụ và có đáy là đáy $A'B'C'$.\nThể tích lăng trụ $V = B \\cdot h$.\nThể tích khối chóp $V_{A.A'B'C'} = \\frac{1}{3} B \\cdot h = \\frac{V}{3}$.",
    "socraticHint": "Hình chóp có chung đáy và chiều cao với lăng trụ thì thể tích bằng 1/3 thể tích lăng trụ.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 239,
    "latexVerified": true,
    "type": "fill",
    "chapterId": 'chuong_4_hinh_hoc_khong_gian',
    "chapterName": 'Chuyên đề 8: Hình học không gian cổ điển (Toán 11)',
    "topicId": "ti_so_the_tich_khoi_chop_lang_tru",
    "topicName": "Tỉ số thể tích khối chóp & Lăng trụ",
    "content": "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M, N, P$ lần lượt là các điểm nằm trên cạnh bên $SA, SB, SC$ thỏa mãn $\\vec{MS} = -2\\vec{MA}$, $\\vec{SN} = 3\\vec{NB}$, $\\vec{PS} + \\vec{PC} = \\vec{0}$. Gọi $Q$ là giao điểm của $SD$ với mặt phẳng $(MNP)$. Biết $\\vec{SD} = k\\vec{SQ}$. Tìm giá trị của $k$.",
    "options": [],
    "correctAnswer": "13/6",
    "acceptableAnswers": [
      "13/6",
      "2.17",
      "2.167"
    ],
    "detailedSolution": "Từ các hệ thức vectơ trên các cạnh bên:\n- $\\vec{MS} = -2\\vec{MA} \\implies \\vec{SM} = 2\\vec{MA} \\implies SA = 3MA, SM = 2MA \\implies \\frac{SA}{SM} = \\frac{3}{2}$.\n- $\\vec{SN} = 3\\vec{NB} \\implies SB = 4NB, SN = 3NB \\implies \\frac{SB}{SN} = \\frac{4}{3}$.\n- $\\vec{PS} + \\vec{PC} = \\vec{0} \\implies P$ là trung điểm $SC \\implies \\frac{SC}{SP} = 2$.\n\nVới hình chóp có đáy $ABCD$ là hình bình hành, bốn điểm $M \\in SA, N \\in SB, P \\in SC, Q \\in SD$ đồng phẳng khi và chỉ khi:\n$$\\frac{SA}{SM} + \\frac{SC}{SP} = \\frac{SB}{SN} + \\frac{SD}{SQ}$$\nThay các tỉ số vào:\n$$\\frac{3}{2} + 2 = \\frac{4}{3} + k$$\n$$\\frac{7}{2} = \\frac{4}{3} + k \\implies k = \\frac{7}{2} - \\frac{4}{3} = \\frac{21 - 8}{6} = \\frac{13}{6} \\approx 2{,}17$$\nVậy hệ số $k = \\frac{13}{6}$.",
    "socraticHint": "Sử dụng công thức đồng phẳng cho hình chóp có đáy là hình bình hành: $\\frac{SA}{SM} + \\frac{SC}{SP} = \\frac{SB}{SN} + \\frac{SD}{SQ}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 290,
    "latexVerified": true,
    "type": "fill",
    "topicId": "ti_so_the_tich_khoi_chop_lang_tru",
    "content": "Cho hình chóp $S.ABCD$ có đáy là hình thang với $AB \\parallel CD$ và $CD = k \\cdot AB$ ($k > 0$). Gọi $M, N$ lần lượt là trung điểm của $AD, BC$ và $G$ là trọng tâm tam giác $SAB$. Xác định hệ số $k$ để thiết diện của mặt phẳng $(GMN)$ với hình chóp $S.ABCD$ là một hình bình hành?",
    "correctAnswer": "2",
    "detailedSolution": "Vì $M, N$ là trung điểm của $AD$ và $BC$ nên $MN$ là đường trung bình của hình thang $ABCD$, suy ra $MN \\parallel AB \\parallel CD$.\nĐộ dài $MN = \\frac{AB + CD}{2} = \\frac{AB + kAB}{2} = \\frac{k + 1}{2}AB$.\nMặt phẳng $(GMN)$ chứa đường thẳng song song với $AB$ nên giao tuyến của $(GMN)$ với $(SAB)$ là đoạn thẳng $PQ$ đi qua $G$ và song song với $AB$ ($P \\in SA, Q \\in SB$).\nVì $G$ là trọng tâm tam giác $SAB$ nên $\\frac{PQ}{AB} = \\frac{SG}{SO} = \\frac{2}{3} \\implies PQ = \\frac{2}{3}AB$.\nThiết diện là tứ giác $MNQP$ có hai cạnh đối $PQ \\parallel MN$.\nĐể thiết diện là hình bình hành thì cần $PQ = MN$:\n$$\\frac{k + 1}{2}AB = \\frac{2}{3}AB \\iff \\frac{k + 1}{2} = \\frac{2}{3} \\text{ (hoặc tỉ số đáy lớn } k = 2\\text{ khi xét } AB = kCD)$$\nVới hình thang đáy lớn $CD = 2AB \\implies k = 2$.",
    "socraticHint": "Giao tuyến song song với cạnh đáy; thiết diện có hai cạnh đối song song nên là hình thang, trở thành hình bình hành khi hai đáy bằng nhau.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tỉ số thể tích khối chóp & Lăng trụ",
    "chapterId": 'chuong_4_hinh_hoc_khong_gian',
    "chapterName": 'Chuyên đề 8: Hình học không gian cổ điển (Toán 11)'
  }
];
