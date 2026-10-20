import { Question } from '../../../types/exam';

export const ch8HinhKhongGianPart2Questions: Question[] = [
  {
    "id": 971,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "ti_so_the_tich_khoi_chop_lang_tru",
    "topicName": "Tỉ số thể tích khối chóp & Lăng trụ",
    "content": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành thể tích $V$. Gọi $B', D'$ lần lượt là trung điểm của các cạnh $SB$ và $SD$. Mặt phẳng $(AB'D')$ cắt cạnh $SC$ tại điểm $C'. Tỉ số thể tích $\\frac{V_{S.AB'C'D'}}{V}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{6}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{4}$"
      },
      {
        "key": "C",
        "content": "$\\frac{1}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{8}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $x = \\frac{SA}{SA} = 1$, $y = \\frac{SB}{SB'} = 2$, $t = \\frac{SD}{SD'} = 2$, $z = \\frac{SC}{SC'}$.\nTheo tính chất đồng phẳng của hình chóp đáy là hình bình hành:\n$$x + z = y + t \\iff 1 + z = 2 + 2 = 4 \\implies z = 3 \\implies \\frac{SC'}{SC} = \\frac{1}{3}$$\nCông thức tính tỉ số thể tích của khối chóp $S.AB'C'D'$ so với $S.ABCD$:\n$$\\frac{V_{S.AB'C'D'}}{V} = \\frac{1}{4} \\cdot \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC'}{SC} \\cdot \\frac{SD'}{SD} \\left( \\frac{SA}{SA'} + \\frac{SB}{SB'} + \\frac{SC}{SC'} + \\frac{SD}{SD'} \\right)$$\n$$= \\frac{1}{4} \\left(1 \\cdot \\frac{1}{2} \\cdot \\frac{1}{3} \\cdot \\frac{1}{2}\\right) (1 + 2 + 3 + 2) = \\frac{1}{4} \\cdot \\frac{1}{12} \\cdot 8 = \\frac{1}{48} \\cdot 8 = \\frac{1}{6}$$\n\nChọn A.",
    "socraticHint": "Dùng hệ thức tỉ số đồng phẳng $x + z = y + t$ đối với đáy hình bình hành.",
    "difficulty": "Vận dụng cao",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 972,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "ti_so_the_tich_khoi_chop_lang_tru",
    "topicName": "Tỉ số thể tích khối chóp & Lăng trụ",
    "content": "Cho hình chóp tam giác $S.ABC$ có thể tích bằng 48. Gọi $M, N, P$ lần lượt là các điểm nằm trên các cạnh bên $SA, SB, SC$ sao cho $SM = \\frac{1}{2} SA$, $SN = \\frac{1}{3} SB$ và $SP = \\frac{1}{4} SC$. Thể tích của khối đa diện $MNP.ABC$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "46",
    "detailedSolution": "Áp dụng công thức tỉ số thể tích Simson cho hình chóp tam giác:\n$$\\frac{V_{S.MNP}}{V_{S.ABC}} = \\frac{SM}{SA} \\cdot \\frac{SN}{SB} \\cdot \\frac{SP}{SC} = \\frac{1}{2} \\cdot \\frac{1}{3} \\cdot \\frac{1}{4} = \\frac{1}{24}$$\nThể tích phần chóp nhỏ phía trên là:\n$$V_{S.MNP} = \\frac{1}{24} V_{S.ABC} = \\frac{1}{24} \\cdot 48 = 2$$\nThể tích khối đa diện còn lại phía dưới là:\n$$V_{MNP.ABC} = V_{S.ABC} - V_{S.MNP} = 48 - 2 = 46$$\n\nĐáp số: 46.",
    "socraticHint": "Tính thể tích chóp đỉnh $S.MNP$ theo tỉ số Simson rồi lấy thể tích ban đầu trừ đi.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 973,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Một tấm tôn hình quạt tròn có bán kính $R = 12\\text{ cm}$ và góc ở tâm bằng $120^\\circ$. Người ta uốn tấm tôn lại sao cho hai bán kính mép dán khít vào nhau để tạo thành một chiếc phễu hình nón (không có nắp). Bán kính đường tròn đáy $r$ của hình nón tạo thành là:",
    "options": [
      {
        "key": "A",
        "content": "$4\\text{ cm}$"
      },
      {
        "key": "B",
        "content": "$6\\text{ cm}$"
      },
      {
        "key": "C",
        "content": "$3\\text{ cm}$"
      },
      {
        "key": "D",
        "content": "$4\\sqrt{2}\\text{ cm}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đổi góc $120^\\circ = \\frac{2\\pi}{3}\\text{ rad}$.\nĐộ dài cung tròn của hình quạt là:\n$$L = R \\cdot \\alpha = 12 \\cdot \\frac{2\\pi}{3} = 8\\pi\\text{ (cm)}$$\nĐộ dài cung này chính là chu vi đáy của hình nón được uốn thành:\n$$2\\pi r = 8\\pi \\implies r = 4\\text{ (cm)}$$\n\nChọn A.",
    "socraticHint": "Độ dài cung hình quạt tròn bằng chu vi đáy $2\\pi r$ của hình nón.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 974,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Từ chiếc phễu hình nón ở câu trên (uốn từ quạt bán kính $R = 12\\text{ cm}$ có bán kính đáy $r = 4\\text{ cm}$), chiều cao $h$ của phễu có dạng $k\\sqrt{2}\\text{ cm}$. Tìm giá trị của số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "8",
    "detailedSolution": "Đường sinh của hình nón chính là bán kính hình quạt tròn: $l = R = 12\\text{ cm}$.\nBán kính đáy $r = 4\\text{ cm}$.\nChiều cao của hình nón là:\n$$h = \\sqrt{l^2 - r^2} = \\sqrt{12^2 - 4^2} = \\sqrt{144 - 16} = \\sqrt{128} = 8\\sqrt{2}\\text{ (cm)}$$\nDo đó $k = 8$.\n\nĐáp số: 8.",
    "socraticHint": "Đường sinh $l = R = 12\\text{ cm}$, áp dụng hệ thức $h = \\sqrt{l^2 - r^2}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 975,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Một hình trụ $(T)$ nội tiếp trong mặt cầu $(S)$ bán kính $R = 3$. Gọi $h$ là chiều cao và $r$ là bán kính đáy của hình trụ. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Thể tích đạt cực đại khi $h = 2\\sqrt{3}$ với giá trị lớn nhất là $V_{\\max} = 12\\pi\\sqrt{3}$.\n\n\n\nChọn D.",
    "socraticHint": "Lập hàm thể tích theo biến $h$ rồi lấy đạo hàm tìm cực trị.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Mối liên hệ giữa bán kính đáy $r$ và chiều cao $h$ là $r^2 + \\frac{h^2}{4} = 9$."
      },
      {
        "key": "B",
        "content": "Thể tích của khối trụ được tính theo $h$ là $V(h) = \\pi \\left(9 - \\frac{h^2}{4}\\right)h$."
      },
      {
        "key": "C",
        "content": "Thể tích khối trụ đạt giá trị lớn nhất khi chiều cao $h = 2\\sqrt{3}$."
      },
      {
        "key": "D",
        "content": "Giá trị lớn nhất của thể tích khối trụ bằng $18\\pi\\sqrt{3}$."
      }
    ]
  },
  {
    "id": 976,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Thể tích",
    "content": "Cho hình lăng trụ $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$. Cạnh bên $AA' = a$ và tạo với mặt phẳng đáy một góc $45^\\circ$. Thể tích của khối lăng trụ $ABC.A'B'C'$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a^3\\sqrt{6}}{8}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a^3\\sqrt{6}}{24}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a^3\\sqrt{3}}{8}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a^3\\sqrt{2}}{8}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chiều cao của hình lăng trụ là:\n$$h = AA' \\cdot \\sin 45^\\circ = a \\cdot \\frac{\\sqrt{2}}{2} = \\frac{a\\sqrt{2}}{2}$$\nDiện tích đáy tam giác đều $ABC$ là:\n$$S_{\\triangle ABC} = \\frac{a^2\\sqrt{3}}{4}$$\nThể tích khối lăng trụ là:\n$$V = S_{\\triangle ABC} \\cdot h = \\frac{a^2\\sqrt{3}}{4} \\cdot \\frac{a\\sqrt{2}}{2} = \\frac{a^3\\sqrt{6}}{8}$$\n\nChọn A.",
    "socraticHint": "Chiều cao lăng trụ bằng độ dài cạnh bên nhân với sin của góc nghiêng với đáy.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 977,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Cho hình nón có bán kính đáy $r = 3$ và đường sinh $l = 5$. Tính thể tích của khối nón theo $\\pi$ dưới dạng $V = k\\pi$. Tìm số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "12",
    "detailedSolution": "Chiều cao của hình nón là:\n$$h = \\sqrt{l^2 - r^2} = \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$$\nThể tích khối nón là:\n$$V = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi (3^2)(4) = 12\\pi$$\nDo đó $k = 12$.\n\nĐáp số: 12.",
    "socraticHint": "Tính chiều cao $h = \\sqrt{l^2 - r^2}$ rồi áp dụng $V = \\frac{1}{3}\\pi r^2 h$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 978,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $A$ với $AB = 6, AC = 8$, chiều cao $AA' = 24$. Bán kính mặt cầu ngoại tiếp khối lăng trụ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$13$"
      },
      {
        "key": "B",
        "content": "$12$"
      },
      {
        "key": "C",
        "content": "$26$"
      },
      {
        "key": "D",
        "content": "$15$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đáy $ABC$ là tam giác vuông tại $A$, cạnh huyền là:\n$$BC = \\sqrt{AB^2 + AC^2} = \\sqrt{6^2 + 8^2} = 10$$\nBán kính đường tròn ngoại tiếp đáy là:\n$$R_{\\text{đáy}} = \\frac{BC}{2} = 5$$\nBán kính mặt cầu ngoại tiếp hình lăng trụ đứng là:\n$$R = \\sqrt{R_{\\text{đáy}}^2 + \\left(\\frac{h}{2}\\right)^2} = \\sqrt{5^2 + \\left(\\frac{24}{2}\\right)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$\n\nChọn A.",
    "socraticHint": "Dùng công thức mặt cầu ngoại tiếp lăng trụ đứng: $R = \\sqrt{R_{\\text{đáy}}^2 + (h/2)^2}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 979,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Một người thợ cần gò một chiếc thùng hình trụ không có nắp đậy với thể tích chứa yêu cầu là $V = 27\\pi\\text{ dm}^3$. Để lượng vật liệu dùng làm thùng là ít nhất (diện tích toàn phần không nắp nhỏ nhất), bán kính đáy của thùng phải bằng bao nhiêu dm? (Điền số nguyên):",
    "correctAnswer": "3",
    "detailedSolution": "Thùng không nắp có diện tích kim loại cần dùng là diện tích xung quanh cộng 1 mặt đáy:\n$$S = \\pi r^2 + 2\\pi r h$$\nTừ thể tích $V = \\pi r^2 h = 27\\pi \\implies h = \\frac{27}{r^2}$.\nThay vào công thức diện tích:\n$$S(r) = \\pi r^2 + 2\\pi r \\cdot \\frac{27}{r^2} = \\pi \\left(r^2 + \\frac{54}{r}\\right) = \\pi \\left(r^2 + \\frac{27}{r} + \\frac{27}{r}\\right)$$\nÁp dụng bất đẳng thức AM-GM cho 3 số dương $r^2, \\frac{27}{r}, \\frac{27}{r}$:\n$$r^2 + \\frac{27}{r} + \\frac{27}{r} \\ge 3 \\sqrt[3]{r^2 \\cdot \\frac{27}{r} \\cdot \\frac{27}{r}} = 3 \\sqrt[3]{27^2} = 27$$\nDấu đẳng thức xảy ra khi:\n$$r^2 = \\frac{27}{r} \\iff r^3 = 27 \\iff r = 3\\text{ (dm)}$$\nVậy bán kính đáy cần gò là 3 dm.\n\nĐáp số: 3.",
    "socraticHint": "Dùng BĐT AM-GM cho 3 số: $r^2 + \\frac{27}{r} + \\frac{27}{r}$ để tìm cực tiểu.",
    "difficulty": "Vận dụng cao",
    "track": "HSA",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 980,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "ti_so_the_tich_khoi_chop_lang_tru",
    "topicName": "Tỉ số thể tích khối chóp & Lăng trụ",
    "content": "Cho hình lăng trụ tam giác $ABC.A'B'C'$ có thể tích bằng $V$. Mặt phẳng đi qua đỉnh $A$ và các trung điểm của $BB', CC'$ chia khối lăng trụ thành hai phần. Tỉ số thể tích của phần chứa đáy $ABC$ so với $V$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{4}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $M, N$ lần lượt là trung điểm của $BB'$ và $CC'.\nXét ba cạnh bên xuất phát từ đáy $ABC$:\n- Điểm $A$ trùng với đáy nên tỉ số $\\frac{AA}{AA'} = 0$.\n- Điểm $M$ trên cạnh bên $BB'$ có tỉ số $\\frac{BM}{BB'} = \\frac{1}{2}$.\n- Điểm $N$ trên cạnh bên $CC'$ có tỉ số $\\frac{CN}{CC'} = \\frac{1}{2}$.\nÁp dụng công thức tỉ số thể tích khối lăng trụ tam giác bị cắt bởi một mặt phẳng:\n$$\\frac{V_{ABCMN}}{V} = \\frac{\\frac{AA}{AA'} + \\frac{BM}{BB'} + \\frac{CN}{CC'}}{3} = \\frac{0 + \\frac{1}{2} + \\frac{1}{2}}{3} = \\frac{1}{3}$$\n\nChọn A.",
    "socraticHint": "Công thức tỉ số thể tích lăng trụ tam giác bị chia cắt: $\\frac{V_1}{V} = \\frac{x + y + z}{3}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 981,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Cho hình nón $(N)$ có góc ở đỉnh bằng $120^\\circ$ và độ dài đường sinh $l = 4$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Hình nón có bán kính đáy $r = 2\\sqrt{3}$, chiều cao $h = 2$ và diện tích toàn phần là $(8\\sqrt{3} + 12)\\pi$.\n\n\n\nChọn D.",
    "socraticHint": "Góc giữa đường sinh và trục bằng một nửa góc ở đỉnh: $120^\\circ / 2 = 60^\\circ$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Thiết diện qua trục của hình nón là một tam giác cân có góc ở đỉnh bằng $120^\\circ$."
      },
      {
        "key": "B",
        "content": "Bán kính đáy của hình nón là $r = 2\\sqrt{3}$."
      },
      {
        "key": "C",
        "content": "Chiều cao của hình nón là $h = 2$."
      },
      {
        "key": "D",
        "content": "Diện tích toàn phần của hình nón bằng $24\\pi$."
      }
    ]
  },
  {
    "id": 982,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Cho hình nón có bán kính đáy $r = 3$ và chiều cao $h = 4$. Bán kính của mặt cầu nội tiếp bên trong hình nón bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{3}{2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{4}{3}$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$\\frac{5}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Thiết diện qua trục của hình nón là tam giác cân $SAB$ với đáy $AB = 2r = 6$, chiều cao $SO = h = 4$, và cạnh bên $SA = SB = \\sqrt{3^2 + 4^2} = 5$.\nMặt cầu nội tiếp hình nón có bán kính $R_{in}$ chính là bán kính đường tròn nội tiếp tam giác $SAB$.\nDiện tích tam giác $SAB$ là:\n$$S = \\frac{1}{2} AB \\cdot SO = \\frac{1}{2} \\cdot 6 \\cdot 4 = 12$$\nNửa chu vi tam giác $SAB$ là:\n$$p = \\frac{SA + SB + AB}{2} = \\frac{5 + 5 + 6}{2} = 8$$\nBán kính đường tròn nội tiếp là:\n$$R_{in} = \\frac{S}{p} = \\frac{12}{8} = \\frac{3}{2}$$\n\nChọn A.",
    "socraticHint": "Bán kính mặt cầu nội tiếp hình nón bằng bán kính đường tròn nội tiếp thiết diện qua trục.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 983,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Cho mặt cầu $(S)$ có bán kính $R = 5$. Mặt phẳng $(\\alpha)$ cắt mặt cầu $(S)$ theo giao tuyến là một đường tròn có bán kính $r = 3$. Tính diện tích tam giác có các đỉnh gồm tâm mặt cầu $O$ và một đường kính của đường tròn giao tuyến. (Điền số nguyên):",
    "correctAnswer": "12",
    "detailedSolution": "Gọi $H$ là tâm của đường tròn giao tuyến, $H$ là hình chiếu vuông góc của $O$ lên $(\\alpha)$.\nKhoảng cách từ $O$ đến mặt phẳng $(\\alpha)$ là:\n$$OH = \\sqrt{R^2 - r^2} = \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$$\nGọi $AB$ là một đường kính của đường tròn giao tuyến $\\implies AB = 2r = 6$.\nTam giác $OAB$ cân tại $O$ có cạnh đáy $AB = 6$ và đường cao hạ từ đỉnh $O$ là $OH = 4$.\nDiện tích tam giác $OAB$ là:\n$$S_{\\triangle OAB} = \\frac{1}{2} AB \\cdot OH = \\frac{1}{2} \\cdot 6 \\cdot 4 = 12$$\n\nĐáp số: 12.",
    "socraticHint": "Đường kính đáy là $AB = 2r$, đường cao là khoảng cách $d = \\sqrt{R^2 - r^2}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 984,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Cho hình trụ có diện tích xung quanh bằng $40\\pi$ và độ dài đường sinh bằng 5. Thể tích của khối trụ đó bằng:",
    "options": [
      {
        "key": "A",
        "content": "$80\\pi$"
      },
      {
        "key": "B",
        "content": "$40\\pi$"
      },
      {
        "key": "C",
        "content": "$100\\pi$"
      },
      {
        "key": "D",
        "content": "$20\\pi$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Diện tích xung quanh của hình trụ: $S_{xq} = 2\\pi r l = 40\\pi$.\nVới độ dài đường sinh $l = 5$, ta có:\n$$2\\pi r \\cdot 5 = 40\\pi \\implies 10\\pi r = 40\\pi \\implies r = 4$$\nChiều cao của hình trụ là $h = l = 5$.\nThể tích khối trụ là:\n$$V = \\pi r^2 h = \\pi (4^2) \\cdot 5 = 80\\pi$$\n\nChọn A.",
    "socraticHint": "Tính bán kính đáy $r$ từ công thức diện tích xung quanh $S_{xq} = 2\\pi r l$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 985,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "ti_so_the_tich_khoi_chop_lang_tru",
    "topicName": "Tỉ số thể tích khối chóp & Lăng trụ",
    "content": "Cho hình chóp tứ giác đều $S.ABCD$ có thể tích $V = 64$. Gọi $M, N$ lần lượt là trung điểm của các cạnh bên $SA$ và $SC$. Thể tích khối chóp $S.MBDN$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "32",
    "detailedSolution": "Mặt phẳng $(SBD)$ chia khối chóp $S.ABCD$ thành hai khối chóp tam giác bằng nhau $S.ABD$ và $S.CBD$, mỗi khối có thể tích là:\n$$V_{S.ABD} = V_{S.CBD} = \\frac{V}{2} = 32$$\nXét hai khối chóp thành phần tạo nên $S.MBDN$:\n- Trong khối $S.ABD$: $\\frac{V_{S.MBD}}{V_{S.ABD}} = \\frac{SM}{SA} = \\frac{1}{2} \\implies V_{S.MBD} = \\frac{1}{2} \\cdot 32 = 16$.\n- Trong khối $S.CBD$: $\\frac{V_{S.NBD}}{V_{S.CBD}} = \\frac{SN}{SC} = \\frac{1}{2} \\implies V_{S.NBD} = \\frac{1}{2} \\cdot 32 = 16$.\nDo đó thể tích khối $S.MBDN$ là:\n$$V_{S.MBDN} = V_{S.MBD} + V_{S.NBD} = 16 + 16 = 32$$\n\nĐáp số: 32.",
    "socraticHint": "Chia khối chóp $S.MBDN$ thành hai khối chóp tam giác chung mặt phẳng $(SBD)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 986,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Thể tích",
    "content": "Một khối chóp tứ giác đều cụt có cạnh đáy lớn bằng 6, cạnh đáy nhỏ bằng 2 và chiều cao bằng 3. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Áp dụng công thức thể tích chóp cụt ta có $V = 52$.\n\n\n\nChọn D.",
    "socraticHint": "Dùng công thức thể tích khối chóp cụt: $V = \\frac{h}{3}(S_1 + S_2 + \\sqrt{S_1 S_2})$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Diện tích hai mặt đáy lần lượt là $S_1 = 36$ và $S_2 = 4$."
      },
      {
        "key": "B",
        "content": "Thể tích của khối chóp cụt được tính theo công thức $V = \\frac{h}{3}(S_1 + S_2 + \\sqrt{S_1 S_2})$."
      },
      {
        "key": "C",
        "content": "Đại lượng trung bình nhân diện tích đáy $\\sqrt{S_1 S_2} = 12$."
      },
      {
        "key": "D",
        "content": "Thể tích của khối chóp cụt đó bằng 48."
      }
    ]
  },
  {
    "id": 987,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Một chiếc thùng phuy hình trụ có đường kính đáy bằng $60\\text{ cm}$ và chiều cao bằng $90\\text{ cm}$. Người ta đổ đầy nước vào thùng. Thể tích nước chứa trong thùng xấp xỉ bằng bao nhiêu lít (lấy $\\pi \\approx 3{,}14$, làm tròn đến hàng đơn vị)?",
    "options": [
      {
        "key": "A",
        "content": "$254$ lít"
      },
      {
        "key": "B",
        "content": "$320$ lít"
      },
      {
        "key": "C",
        "content": "$127$ lít"
      },
      {
        "key": "D",
        "content": "$508$ lít"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đổi các kích thước sang đơn vị decimet (dm):\n- Bán kính đáy: $r = \\frac{60}{2} = 30\\text{ cm} = 3\\text{ dm}$.\n- Chiều cao: $h = 90\\text{ cm} = 9\\text{ dm}$.\nThể tích của thùng phuy là:\n$$V = \\pi r^2 h \\approx 3{,}14 \\cdot (3^2) \\cdot 9 = 3{,}14 \\cdot 81 = 254{,}34\\text{ (dm}^3\\text{)}$$\nVì $1\\text{ dm}^3 = 1\\text{ lít}$, nên thể tích xấp xỉ 254 lít.\n\nChọn A.",
    "socraticHint": "Đổi kích thước sang dm để có đơn vị thể tích là lít ($1\\text{ dm}^3 = 1\\text{ lít}$).",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 988,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Thể tích",
    "content": "Cho khối bát diện đều có tất cả các cạnh bằng $a = 6$. Thể tích của khối bát diện đều đó có dạng $k\\sqrt{2}$. Tìm giá trị của số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "72",
    "detailedSolution": "Khối bát diện đều cạnh $a$ được ghép từ hai khối chóp tứ giác đều chung đáy vuông cạnh $a$, có tất cả các cạnh đều bằng $a$.\nChiều cao của một khối chóp tứ giác đều là:\n$$h = \\sqrt{a^2 - \\left(\\frac{a\\sqrt{2}}{2}\\right)^2} = \\frac{a\\sqrt{2}}{2}$$\nThể tích một khối chóp là:\n$$V_1 = \\frac{1}{3} a^2 \\cdot \\frac{a\\sqrt{2}}{2} = \\frac{a^3\\sqrt{2}}{6}$$\nThể tích của toàn bộ khối bát diện đều là:\n$$V = 2 V_1 = \\frac{a^3\\sqrt{2}}{3}$$\nVới $a = 6$:\n$$V = \\frac{6^3\\sqrt{2}}{3} = \\frac{216\\sqrt{2}}{3} = 72\\sqrt{2}$$\nSuy ra $k = 72$.\n\nĐáp số: 72.",
    "socraticHint": "Khối bát diện đều ghép từ hai khối chóp tứ giác đều cạnh $a$, thể tích bằng $\\frac{a^3\\sqrt{2}}{3}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 989,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Trong không gian, cho mặt cầu $(S)$ tâm $O$, bán kính $R = 10$. Mặt phẳng $(P)$ cắt mặt cầu theo thiết diện là một hình tròn có chu vi bằng $12\\pi$. Khoảng cách từ tâm $O$ đến mặt phẳng $(P)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$8$"
      },
      {
        "key": "B",
        "content": "$6$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$\\sqrt{136}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chu vi của đường tròn thiết diện là $C = 2\\pi r = 12\\pi \\implies r = 6$.\nKhoảng cách từ tâm $O$ đến mặt phẳng $(P)$ là:\n$$d = \\sqrt{R^2 - r^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$$\n\nChọn A.",
    "socraticHint": "Tìm bán kính thiết diện từ chu vi: $r = C / (2\\pi)$, rồi dùng định lý Pytago $d = \\sqrt{R^2 - r^2}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 990,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Cho tứ diện $OABC$ có các cạnh $OA, OB, OC$ đôi một vuông góc với nhau và $OA = 2, OB = 4, OC = 4$. Tính bán kính mặt cầu ngoại tiếp tứ diện $OABC$. (Điền số nguyên):",
    "correctAnswer": "3",
    "detailedSolution": "Khối tứ diện có tam diện vuông tại $O$ với ba cạnh $OA = a, OB = b, OC = c$ thì tâm mặt cầu ngoại tiếp là trung điểm của đường chéo hình hộp chữ nhật ngoại tiếp.\nBán kính mặt cầu ngoại tiếp được tính bởi công thức:\n$$R = \\frac{\\sqrt{OA^2 + OB^2 + OC^2}}{2} = \\frac{\\sqrt{2^2 + 4^2 + 4^2}}{2} = \\frac{\\sqrt{4 + 16 + 16}}{2} = \\frac{\\sqrt{36}}{2} = \\frac{6}{2} = 3$$\n\nĐáp số: 3.",
    "socraticHint": "Bán kính mặt cầu ngoại tiếp tứ diện vuông: $R = \\frac{1}{2}\\sqrt{a^2 + b^2 + c^2}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 991,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Cho hình nón $(N)$ có diện tích xung quanh gấp 2 lần diện tích đáy. Số đo góc ở đỉnh của hình nón bằng:",
    "options": [
      {
        "key": "A",
        "content": "$60^\\circ$"
      },
      {
        "key": "B",
        "content": "$120^\\circ$"
      },
      {
        "key": "C",
        "content": "$90^\\circ$"
      },
      {
        "key": "D",
        "content": "$30^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo giả thiết:\n$$S_{xq} = 2 S_{\\text{đáy}} \\iff \\pi r l = 2\\pi r^2 \\iff l = 2r$$\nGọi $\\beta$ là góc giữa đường sinh và trục hình nón:\n$$\\sin \\beta = \\frac{r}{l} = \\frac{r}{2r} = \\frac{1}{2} \\implies \\beta = 30^\\circ$$\nGóc ở đỉnh của hình nón là $2\\beta = 2 \\cdot 30^\\circ = 60^\\circ$.\n\nChọn A.",
    "socraticHint": "Góc ở đỉnh gấp đôi góc giữa đường sinh và trục: $\\sin \\beta = r/l = 1/2$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 992,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Cho hình trụ $(T)$ có bán kính đáy $R = 5$ và chiều cao $h = 8$. Một mặt phẳng $(P)$ song song với trục hình trụ và cách trục một khoảng bằng 3. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Thiết diện là hình vuông cạnh 8 có diện tích bằng 64.\n\n\n\nChọn D.",
    "socraticHint": "Tìm dây cung đáy qua khoảng cách tới tâm: $AB = 2\\sqrt{R^2 - d^2}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Thiết diện cắt bởi mặt phẳng $(P)$ là một hình chữ nhật."
      },
      {
        "key": "B",
        "content": "Độ dài cạnh nằm trên đáy của thiết diện bằng 8."
      },
      {
        "key": "C",
        "content": "Thiết diện là một hình vuông."
      },
      {
        "key": "D",
        "content": "Diện tích của thiết diện bằng 48."
      }
    ]
  },
  {
    "id": 993,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Một chiếc xô dạng hình nón cụt có bán kính miệng xô $R = 4\\text{ dm}$, bán kính đáy xô $r = 1\\text{ dm}$, chiều cao $h = 3\\text{ dm}$. Tính thể tích nước chứa đầy trong xô theo $\\pi$ dưới dạng $k\\pi$ lít. Tìm số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "21",
    "detailedSolution": "Thể tích của khối nón cụt được tính theo công thức:\n$$V = \\frac{1}{3} \\pi h (R^2 + r^2 + R \\cdot r)$$\nThay số $R = 4, r = 1, h = 3$:\n$$V = \\frac{1}{3} \\pi \\cdot 3 \\cdot (4^2 + 1^2 + 4 \\cdot 1) = \\pi (16 + 1 + 4) = 21\\pi\\text{ (dm}^3\\text{)} = 21\\pi\\text{ (lít)}$$\nDo đó $k = 21$.\n\nĐáp số: 21.",
    "socraticHint": "Áp dụng công thức thể tích khối nón cụt $V = \\frac{1}{3}\\pi h (R^2 + r^2 + Rr)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 994,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Cho tam giác vuông $ABC$ vuông tại $A$ có $AB = 3, AC = 4$. Khi quay tam giác $ABC$ xung quanh cạnh huyền $BC$, ta thu được một khối tròn xoay gồm hai khối nón chung đáy. Thể tích của khối tròn xoay đó bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{48\\pi}{5}$"
      },
      {
        "key": "B",
        "content": "$\\frac{36\\pi}{5}$"
      },
      {
        "key": "C",
        "content": "$\\frac{64\\pi}{5}$"
      },
      {
        "key": "D",
        "content": "$12\\pi$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cạnh huyền $BC = \\sqrt{3^2 + 4^2} = 5$.\nKẻ đường cao $AH \\perp BC$ tại $H$.\nKhi quay tam giác quanh $BC$, đoạn thẳng $AH$ quét nên hình tròn đáy chung của hai khối nón có bán kính:\n$$r = AH = \\frac{AB \\cdot AC}{BC} = \\frac{3 \\cdot 4}{5} = \\frac{12}{5}$$\nChiều cao của hai khối nón lần lượt là $h_1 = BH$ và $h_2 = CH$ với $h_1 + h_2 = BC = 5$.\nTổng thể tích của khối tròn xoay là:\n$$V = V_1 + V_2 = \\frac{1}{3} \\pi r^2 h_1 + \\frac{1}{3} \\pi r^2 h_2 = \\frac{1}{3} \\pi r^2 (h_1 + h_2) = \\frac{1}{3} \\pi r^2 \\cdot BC$$\nThay số:\n$$V = \\frac{1}{3} \\pi \\cdot \\left(\\frac{12}{5}\\right)^2 \\cdot 5 = \\frac{1}{3} \\pi \\cdot \\frac{144}{25} \\cdot 5 = \\frac{48\\pi}{5}$$\n\nChọn A.",
    "socraticHint": "Bán kính đáy chung là đường cao $AH$, tổng hai chiều cao chính là cạnh huyền $BC$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 995,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_tron_xoay_non_tru_cau",
    "topicName": "Khối tròn xoay (Nón, Trụ, Cầu)",
    "content": "Một quả bóng đá tiêu chuẩn thi đấu có bán kính $R = 11\\text{ cm}$. Diện tích bề mặt của quả bóng theo $\\pi$ có dạng $k\\pi\\text{ cm}^2$. Tìm số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "484",
    "detailedSolution": "Diện tích mặt cầu được tính bởi công thức:\n$$S = 4\\pi R^2$$\nVới $R = 11\\text{ cm}$, ta có:\n$$S = 4\\pi (11^2) = 4\\pi \\cdot 121 = 484\\pi\\text{ (cm}^2\\text{)}$$\nDo đó $k = 484$.\n\nĐáp số: 484.",
    "socraticHint": "Áp dụng công thức diện tích mặt cầu $S = 4\\pi R^2$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  }
];
