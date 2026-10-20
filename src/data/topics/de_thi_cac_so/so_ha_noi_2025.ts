import { Question } from '../../../types/exam';

export const soHanoi2025Questions: Question[] = [
  {
    "id": 556,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & Bất phương trình Mũ - Logarit",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Bất phương trình $\\left(\\frac{1}{3}\\right)^{x^2 - 3x} \\ge 1$ có tất cả bao nhiêu nghiệm nguyên?",
    "options": [
      {
        "key": "A",
        "content": "2"
      },
      {
        "key": "B",
        "content": "3"
      },
      {
        "key": "C",
        "content": "4"
      },
      {
        "key": "D",
        "content": "1"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Lưu ý cơ số $\\frac{1}{3} < 1$, do đó khi so sánh số mũ thì bất đẳng thức phải đổi chiều: $x^2 - 3x \\le 0$.",
    "detailedSolution": "Ta có:\\n$$\\left(\\frac{1}{3}\\right)^{x^2 - 3x} \\ge 1 \\iff \\left(\\frac{1}{3}\\right)^{x^2 - 3x} \\ge \\left(\\frac{1}{3}\\right)^0$$\\nDo cơ số $0 < \\frac{1}{3} < 1$ nên bất phương trình tương đương:\\n$$x^2 - 3x \\le 0 \\iff 0 \\le x \\le 3$$\\nVì $x \\in \\mathbb{Z}$ nên $x \\in \\{0; 1; 2; 3\\}$.\\nVậy có tất cả 4 nghiệm nguyên.\\n\\textbf{Chọn C.}"
  },
  {
    "id": 557,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "toa_do_diem_vecto_mat_cau",
    "topicName": "Hệ tọa độ Oxyz, Điểm & Vectơ",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -1)$ và $B(2; 4; 1)$. Trọng tâm của tam giác $OAB$ có tọa độ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-1; -2; 0)$"
      },
      {
        "key": "B",
        "content": "$(1; 2; 0)$"
      },
      {
        "key": "C",
        "content": "$(3; 6; 0)$"
      },
      {
        "key": "D",
        "content": "$(1; 3; 0)$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Tọa độ trọng tâm $G$ của tam giác $OAB$ là trung bình cộng tọa độ ba đỉnh $O(0; 0; 0), A, B$.",
    "detailedSolution": "Gốc tọa độ $O(0; 0; 0)$. Trọng tâm $G$ của tam giác $OAB$ có tọa độ là:\\n$$x_G = \\frac{0 + 1 + 2}{3} = 1, \\quad y_G = \\frac{0 + 2 + 4}{3} = 2, \\quad z_G = \\frac{0 + (-1) + 1}{3} = 0$$\\nVậy $G(1; 2; 0)$.\\n\\textbf{Chọn B.}"
  },
  {
    "id": 558,
    "type": "mcq",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 3: Thống kê mẫu số liệu ghép nhóm (Toán 12)",
    "topicId": "thong_ke_so_lieu_ghep_nhom",
    "topicName": "Mẫu số liệu thống kê & Đo lường độ phân tán",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Bảng thống kê thu nhập bình quân đầu người/tháng của người dân Hà Nội (đơn vị: triệu đồng) từ năm 2018 đến 2024 như sau:\n\n$$\\begin{array}{|c|c|c|c|c|c|c|c|}\\hline \\text{Năm} & 2018 & 2019 & 2020 & 2021 & 2022 & 2023 & 2024 \\\\ \\hline \\text{Thu nhập (triệu đồng)} & 5{,}901 & 6{,}403 & 6{,}203 & 6{,}002 & 6{,}423 & 6{,}896 & 7{,}546 \\\\ \\hline \\end{array}$$\n\nMẫu số liệu thống kê trên có khoảng biến thiên bằng bao nhiêu triệu đồng?",
    "options": [
      {
        "key": "A",
        "content": "$2{,}290$"
      },
      {
        "key": "B",
        "content": "$2{,}660$"
      },
      {
        "key": "C",
        "content": "$0{,}867$"
      },
      {
        "key": "D",
        "content": "$1{,}645$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Khoảng biến thiên $R = x_{\\max} - x_{\\min}$. Tìm giá trị lớn nhất và giá trị nhỏ nhất trong dãy số liệu.",
    "detailedSolution": "Trong dãy số liệu đã cho:\\n- Giá trị lớn nhất: $x_{\\max} = 7{,}546$ (năm 2024).\\n- Giá trị nhỏ nhất: $x_{\\min} = 5{,}901$ (năm 2018).\\nKhoảng biến thiên của mẫu số liệu là:\\n$$R = x_{\\max} - x_{\\min} = 7{,}546 - 5{,}901 = 1{,}645 \\text{ (triệu đồng)}$$\\n\\textbf{Chọn D.}"
  },
  {
    "id": 559,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Phương trình Mặt phẳng & Đường thẳng",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Trong không gian $Oxyz$, phương trình mặt phẳng đi qua điểm $M(1; -2; 3)$ và có vectơ pháp tuyến $\\vec{n} = (2; 0; 1)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2x + y = 0$"
      },
      {
        "key": "B",
        "content": "$2y + z + 1 = 0$"
      },
      {
        "key": "C",
        "content": "$x - 2y + 3z - 5 = 0$"
      },
      {
        "key": "D",
        "content": "$2x + z - 5 = 0$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Mặt phẳng có dạng $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$.",
    "detailedSolution": "Phương trình mặt phẳng đi qua $M(1; -2; 3)$ có VTPT $\\vec{n} = (2; 0; 1)$ là:\\n$$2(x - 1) + 0(y + 2) + 1(z - 3) = 0 \\iff 2x + z - 5 = 0$$\\n\\textbf{Chọn D.}"
  },
  {
    "id": 560,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "goc_khoang_cach_khong_gian",
    "topicName": "Góc & Khoảng cách trong không gian",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông cân tại $A$. Gọi các điểm $M, N$ lần lượt là trung điểm của $SB$ và $SC$. Khi đó góc giữa hai đường thẳng $MN$ và $AB$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$90^\\circ$"
      },
      {
        "key": "B",
        "content": "$45^\\circ$"
      },
      {
        "key": "C",
        "content": "$60^\\circ$"
      },
      {
        "key": "D",
        "content": "$30^\\circ$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "$MN$ song song với $BC$, do đó góc giữa $MN$ và $AB$ là góc giữa $BC$ và $AB$.",
    "detailedSolution": "Vì $M, N$ là trung điểm của $SB, SC$ nên $MN$ là đường trung bình của tam giác $SBC$, suy ra $MN \\parallel BC$.\\nDo đó góc giữa hai đường thẳng $MN$ và $AB$ là góc giữa $BC$ và $AB$:\\n$$(MN, AB) = (BC, AB) = \\widehat{ABC}$$\\nTam giác $ABC$ vuông cân tại $A$ nên $\\widehat{ABC} = 45^\\circ$.\\nVậy góc giữa $MN$ và $AB$ bằng $45^\\circ$.\\n\\textbf{Chọn B.}"
  },
  {
    "id": 561,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 2: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "nguyen_ham_co_ban",
    "topicName": "Tính chất Tích phân & Nguyên hàm cơ bản",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Nếu $\\int_0^2 f(x)dx = 3$ thì $\\int_0^2 [f(x) + 2]dx$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "10"
      },
      {
        "key": "B",
        "content": "7"
      },
      {
        "key": "C",
        "content": "6"
      },
      {
        "key": "D",
        "content": "5"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Tách tích phân tổng thành tổng hai tích phân: $\\int_0^2 f(x)dx + \\int_0^2 2dx$.",
    "detailedSolution": "Ta có:\\n$$\\int_0^2 [f(x) + 2]dx = \\int_0^2 f(x)dx + \\int_0^2 2dx = 3 + 2(2 - 0) = 3 + 4 = 7$$\\n\\textbf{Chọn B.}"
  },
  {
    "id": 562,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_do_thi",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Tiệm cận xiên của đồ thị hàm số $y = x - 1 - \\frac{2}{x + 1}$ là đường thẳng có phương trình:",
    "options": [
      {
        "key": "A",
        "content": "$y = -x + 1$"
      },
      {
        "key": "B",
        "content": "$y = -x - 1$"
      },
      {
        "key": "C",
        "content": "$y = x - 1$"
      },
      {
        "key": "D",
        "content": "$y = x + 1$"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Xem xét giới hạn $\\lim_{x \\to +\\infty} [y - (x - 1)] = \\lim_{x \\to +\\infty} \\left(-\\frac{2}{x + 1}\\right) = 0$.",
    "detailedSolution": "Ta có:\\n$$\\lim_{x \\to \\pm\\infty} [y - (x - 1)] = \\lim_{x \\to \\pm\\infty} \\left(-\\frac{2}{x + 1}\\right) = 0$$\\nDo đó đường thẳng $y = x - 1$ là tiệm cận xiên của đồ thị hàm số.\\n\\textbf{Chọn C.}"
  },
  {
    "id": 563,
    "type": "mcq",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 3: Thống kê mẫu số liệu ghép nhóm (Toán 12)",
    "topicId": "thong_ke_so_lieu_ghep_nhom",
    "topicName": "Mẫu số liệu ghép nhóm & Số trung bình",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Cân nặng (kg) của 50 quả mít trong đợt thu hoạch của một trang trại được cho trong bảng tần số ghép nhóm sau:\n\n$$\\begin{array}{|c|c|c|c|c|c|}\\hline \\text{Cân nặng (kg)} & [4; 6) & [6; 8) & [8; 10) & [10; 12) & [12; 14) \\\\ \\hline \\text{Giá trị đại diện } (c_i) & 5 & 7 & 9 & 11 & 13 \\\\ \\hline \\text{Số quả } (n_i) & 6 & 12 & 19 & 9 & 4 \\\\ \\hline \\end{array}$$\n\nKhối lượng trung bình của 50 quả mít trên bằng bao nhiêu?",
    "options": [
      {
        "key": "A",
        "content": "$8{,}72\\text{ kg}$"
      },
      {
        "key": "B",
        "content": "$9{,}12\\text{ kg}$"
      },
      {
        "key": "C",
        "content": "$8{,}82\\text{ kg}$"
      },
      {
        "key": "D",
        "content": "$8{,}52\\text{ kg}$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Công thức tính số trung bình ghép nhóm: $\\bar{x} = \\frac{\\sum c_i n_i}{n}$.",
    "detailedSolution": "Khối lượng trung bình của 50 quả mít là:\\n$$\\bar{x} = \\frac{5 \\cdot 6 + 7 \\cdot 12 + 9 \\cdot 19 + 11 \\cdot 9 + 13 \\cdot 4}{50} = \\frac{30 + 84 + 171 + 99 + 52}{50} = \\frac{436}{50} = 8{,}72 \\text{ (kg)}$$\\n\\textbf{Chọn A.}"
  },
  {
    "id": 564,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_ham_so",
    "topicName": "Tính đơn điệu của hàm số",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Cho hàm số bậc ba $y = f(x)$ có đồ thị có điểm cực đại tại $(0; 1)$ và điểm cực tiểu tại $(1; -1)$. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
    "options": [
      {
        "key": "A",
        "content": "$(0; 1)$"
      },
      {
        "key": "B",
        "content": "$(-\\infty; 0)$"
      },
      {
        "key": "C",
        "content": "$(1; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$(-\\infty; +\\infty)$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Khoảng nghịch biến là khoảng mà đồ thị đi xuống từ trái sang phải giữa cực đại và cực tiểu.",
    "detailedSolution": "Hàm số đạt cực đại tại $x = 0$ và cực tiểu tại $x = 1$. Do đó trên khoảng $(0; 1)$, đồ thị hàm số đi xuống từ trái sang phải, suy ra hàm số nghịch biến trên khoảng $(0; 1)$.\\n\\textbf{Chọn A.}"
  },
  {
    "id": 565,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "khoi_da_dien_the_tich",
    "topicName": "Thể tích khối Lăng trụ & Đa diện",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Cho khối lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $A$, $AB = AC = 1$, $AA' = 2$. Thể tích khối lăng trụ đã cho bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{2}{3}$"
      },
      {
        "key": "B",
        "content": "2"
      },
      {
        "key": "C",
        "content": "1"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{3}$"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Thể tích lăng trụ đứng $V = S_{\\text{đáy}} \\cdot h$.",
    "detailedSolution": "Diện tích đáy tam giác $ABC$ vuông cân tại $A$:\\n$$S_{ABC} = \\frac{1}{2} AB \\cdot AC = \\frac{1}{2} \\cdot 1 \\cdot 1 = \\frac{1}{2}$$\\nChiều cao lăng trụ $h = AA' = 2$.\\nThể tích khối lăng trụ:\\n$$V = S_{ABC} \\cdot AA' = \\frac{1}{2} \\cdot 2 = 1$$\\n\\textbf{Chọn C.}"
  },
  {
    "id": 566,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 8: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_nhan",
    "topicName": "Cấp số nhân",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Cho cấp số nhân $(u_n)$ với $u_3 = 8$ và công bội $q = -2$. Giá trị của $u_2$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "10"
      },
      {
        "key": "B",
        "content": "-4"
      },
      {
        "key": "C",
        "content": "-16"
      },
      {
        "key": "D",
        "content": "6"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "$u_3 = u_2 \\cdot q \\implies u_2 = \\frac{u_3}{q}$.",
    "detailedSolution": "Ta có:\\n$$u_2 = \\frac{u_3}{q} = \\frac{8}{-2} = -4$$\\n\\textbf{Chọn B.}"
  },
  {
    "id": 567,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 2: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "nguyen_ham_co_ban",
    "topicName": "Bảng nguyên hàm cơ bản",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Nguyên hàm của hàm số $f(x) = 3^x$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{3^{x+1}}{x+1} + C$"
      },
      {
        "key": "B",
        "content": "$\\frac{3^x}{\\ln 3} + C$"
      },
      {
        "key": "C",
        "content": "$3^x \\ln 3 + C$"
      },
      {
        "key": "D",
        "content": "$3^x + C$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Công thức nguyên hàm hàm số mũ cơ bản: $\\int a^x dx = \\frac{a^x}{\\ln a} + C$.",
    "detailedSolution": "Áp dụng công thức nguyên hàm hàm mũ với $a = 3$:\\n$$\\int 3^x dx = \\frac{3^x}{\\ln 3} + C$$\\n\\textbf{Chọn B.}"
  },
  {
    "id": 568,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Toán kinh tế & Tối ưu hóa",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Vận dụng",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Anh Thắng có $500$ triệu đồng và đã vay thêm ngân hàng $400$ triệu đồng với lãi suất $8\\%$/năm theo thể thức lãi kép, kì hạn $1$ năm. Anh Thắng đã dùng toàn bộ $900$ triệu đồng này để mua một mảnh đất với giá $20$ triệu đồng/$\\text{m}^2$. Sau đúng $2$ năm, anh bán mảnh đất đó với giá $29$ triệu đồng/$\\text{m}^2$ và dùng số tiền thu được trả hết nợ cho ngân hàng. Sau khi trả nợ xong, anh được lãi bao nhiêu triệu đồng so với số tiền vốn anh có ban đầu? (kết quả làm tròn đến hàng đơn vị).",
    "correctAnswer": "338",
    "acceptableAnswers": [
      "338",
      "338.0",
      "338,0"
    ],
    "socraticHint": "Tính diện tích đất mua từ 900 triệu. Tính tiền bán đất sau 2 năm. Tính nợ ngân hàng sau 2 năm. Lãi ròng = Tiền bán đất - Tiền trả nợ - Vốn tự có ban đầu.",
    "detailedSolution": "Diện tích mảnh đất mua là:\\n$$S = \\frac{900}{20} = 45 \\text{ (m}^2\\text{)}$$\\nSố tiền bán đất sau 2 năm thu về là:\\n$$45 \\times 29 = 1305 \\text{ (triệu đồng)}$$\\nSố tiền nợ ngân hàng sau 2 năm theo thể thức lãi kép $8\\%$/năm là:\\n$$400 \\times (1 + 0{,}08)^2 = 400 \\times 1{,}1664 = 466{,}56 \\text{ (triệu đồng)}$$\\nSố tiền lãi thu được so với vốn tự có ban đầu 500 triệu là:\\n$$1305 - (500 + 466{,}56) = 338{,}44 \\text{ (triệu đồng)}$$\\nLàm tròn đến hàng đơn vị, kết quả là $338$ triệu đồng."
  },
  {
    "id": 569,
    "type": "fill",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 2: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "ung_dung_hinh_hoc_tich_phan",
    "topicName": "Ứng dụng hình học của Tích phân",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Một cửa vòm có dạng hình parabol đi qua đỉnh $(0; 4)$ và điểm $(2; 2)$ trong hệ tọa độ $Oxy$ (đơn vị: mét). Cửa được lắp 3 tấm kính hình tròn đường kính $1\\text{ m}$ và 6 tấm kính hình vuông có cạnh $1\\text{ m}$. Phần còn lại của cửa được sơn màu trang trí với mức giá $1{,}2$ triệu đồng/$\\text{m}^2$. Chi phí sơn màu là bao nhiêu triệu đồng? (kết quả làm tròn đến hàng phần chục).",
    "correctAnswer": "8.1",
    "acceptableAnswers": [
      "8.1",
      "8,1"
    ],
    "socraticHint": "Tìm phương trình parabol $y = ax^2 + 4$, tìm hoành độ giao điểm với $Ox$, tính diện tích vòm bằng tích phân rồi trừ diện tích các tấm kính.",
    "detailedSolution": "Parabol đối xứng qua $Oy$ có dạng $y = ax^2 + 4$.\\nĐi qua $(2; 2) \\implies 2 = 4a + 4 \\implies a = -\\frac{1}{2}$.\\nDo đó parabol là $y = -\\frac{1}{2}x^2 + 4$.\\nParabol cắt trục hoành tại $x = \\pm 2\\sqrt{2}$.\\nDiện tích toàn bộ cửa vòm là:\\n$$S_{\\text{cửa}} = \\int_{-2\\sqrt{2}}^{2\\sqrt{2}} \\left(-\\frac{1}{2}x^2 + 4\\right) dx = \\frac{32\\sqrt{2}}{3} \\approx 15{,}085 \\text{ (m}^2\\text{)}$$\\nTổng diện tích các tấm kính gồm 6 tấm vuông cạnh 1m và 3 tấm tròn bán kính $R = 0{,}5\\text{ m}$:\\n$$S_{\\text{kính}} = 6 \\cdot 1^2 + 3 \\cdot \\pi \\cdot (0{,}5)^2 = 6 + \\frac{3\\pi}{4} \\approx 8{,}356 \\text{ (m}^2\\text{)}$$\\nDiện tích phần còn lại cần sơn màu là:\\n$$S_{\\text{sơn}} = S_{\\text{cửa}} - S_{\\text{kính}} = 15{,}085 - 8{,}356 \\approx 6{,}729 \\text{ (m}^2\\text{)}$$\\nChi phí sơn màu là:\\n$$6{,}729 \\times 1{,}2 \\approx 8{,}075 \\approx 8{,}1 \\text{ (triệu đồng)}$$"
  },
  {
    "id": 570,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế & Chi phí vận hành",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Vận dụng",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Một đại lý nhập khẩu trái cây tươi để phân phối cho các cửa hàng. Mỗi lần nhập khẩu, khoán chi phí vận chuyển là $25$ triệu đồng. Chi phí bảo quản mỗi tạ trái cây dự trữ trong kho là $80$ nghìn đồng/ngày. Thời gian bảo quản trái cây trong kho tối đa $10$ ngày. Kể từ ngày đầu tiên nhập hàng, đại lý phân phối tới các cửa hàng $25$ tạ trái cây mỗi ngày. Mỗi lần nhập hàng, đại lý phải nhập đủ trái cây cho bao nhiêu ngày phân phối để chi phí trung bình cho mỗi ngày thấp nhất?",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5",
      "5.0"
    ],
    "socraticHint": "Lập biểu thức chi phí trung bình $\\frac{x^2 - x + 25}{x}$ và dùng bất đẳng thức Cauchy hoặc đạo hàm để tìm $x$.",
    "detailedSolution": "Giả sử đại lý nhập đủ trái cây cho $x$ ngày ($x \\in \\mathbb{N}^*, 1 \\le x \\le 10$).\\nLượng trái cây nhập là $25x$ tạ.\\nChi phí bảo quản:\\n- Sau ngày 1: còn $25(x - 1)$ tạ, chi phí là $0{,}08 \\cdot 25(x - 1) = 2(x - 1)$ triệu đồng.\\n- Sau ngày 2: chi phí là $2(x - 2)$ triệu đồng.\\n- ...\\n- Sau ngày $x - 1$: chi phí là $2 \\cdot 1 = 2$ triệu đồng.\\nTổng chi phí bảo quản:\\n$$C_{\\text{bq}} = 2[(x - 1) + (x - 2) + \\dots + 1] = 2 \\cdot \\frac{x(x - 1)}{2} = x^2 - x \\text{ (triệu đồng)}$$\\nTổng chi phí cả kỳ là $C(x) = x^2 - x + 25$ triệu đồng.\\nChi phí trung bình mỗi ngày:\\n$$f(x) = \\frac{x^2 - x + 25}{x} = x + \\frac{25}{x} - 1$$\\nTheo bất đẳng thức Cauchy cho hai số dương $x$ và $\\frac{25}{x}$:\\n$$f(x) \\ge 2\\sqrt{x \\cdot \\frac{25}{x}} - 1 = 2 \\cdot 5 - 1 = 9$$\\nDấu bằng xảy ra khi $x = \\frac{25}{x} \\iff x^2 = 25 \\iff x = 5$ (ngày).\\nVậy đại lý cần nhập đủ trái cây cho $5$ ngày phân phối."
  },
  {
    "id": 571,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "goc_khoang_cach_khong_gian",
    "topicName": "Góc giữa đường thẳng và mặt phẳng",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Cho hình chóp tam giác $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, cạnh bên $SA$ vuông góc với mặt phẳng đáy. Biết $AB = 1$, $BC = \\sqrt{2}$ và góc nhị diện $[S, BC, A] = 45^\\circ$. Góc giữa đường thẳng $SC$ và mặt phẳng $(ABC)$ bằng bao nhiêu độ?",
    "correctAnswer": "30",
    "acceptableAnswers": [
      "30",
      "30.0"
    ],
    "socraticHint": "Chứng minh $SB \\perp BC$, suy ra góc nhị diện là $\\widehat{SBA} = 45^\\circ \\implies SA = 1$. Tính $AC = \\sqrt{3}$ rồi tìm $\\tan \\widehat{SCA}$.",
    "detailedSolution": "Ta có $SA \\perp (ABC) \\implies SA \\perp BC$. Lại có $AB \\perp BC \\implies BC \\perp (SAB) \\implies BC \\perp SB$.\\nDo đó góc nhị diện $[S, BC, A]$ là góc $\\widehat{SBA} = 45^\\circ$.\\nTam giác $SAB$ vuông cân tại $A \\implies SA = AB = 1$.\\nÁp dụng định lý Pythagore trong tam giác vuông $ABC$:\\n$$AC = \\sqrt{AB^2 + BC^2} = \\sqrt{1^2 + (\\sqrt{2})^2} = \\sqrt{3}$$\\nHình chiếu vuông góc của $SC$ lên $(ABC)$ là $AC$.\\nDo đó góc giữa $SC$ và $(ABC)$ là $\\widehat{SCA}$:\\n$$\\tan \\widehat{SCA} = \\frac{SA}{AC} = \\frac{1}{\\sqrt{3}} \\implies \\widehat{SCA} = 30^\\circ$$\\nVậy góc cần tìm bằng $30^\\circ$."
  },
  {
    "id": 572,
    "type": "fill",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "mo_hinh_oxyz_thuc_te",
    "topicName": "Mô hình Oxyz định vị & Radar thực tế",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Trạm kiểm soát không lưu đang theo dõi hai máy bay trong không gian $Oxyz$ (đơn vị: kilômét). Tại cùng thời điểm ban đầu: máy bay thứ nhất ở tọa độ $A(0; 35; 10)$ bay theo hướng $\\vec{v}_1 = (3; 4; 0)$ với tốc độ $900\\text{ km/h}$; máy bay thứ hai ở tọa độ $B(31; 10; 11)$ bay theo hướng $\\vec{v}_2 = (5; 12; 0)$ với tốc độ $910\\text{ km/h}$. Khoảng cách an toàn tối thiểu giữa hai máy bay là $9{,}3\\text{ km}$. Sau ít nhất bao nhiêu phút kể từ lúc ban đầu hai máy bay vi phạm khoảng cách an toàn? (kết quả làm tròn đến hàng phần trăm).",
    "correctAnswer": "8.42",
    "acceptableAnswers": [
      "8.42",
      "8,42"
    ],
    "socraticHint": "Đổi vận tốc sang km/phút, lập phương trình chuyển động $M(t)$ và $N(t)$ rồi giải $MN = 9{,}3$ tìm $t$ dương nhỏ nhất.",
    "detailedSolution": "Đổi vận tốc sang km/phút:\\n- Máy bay 1: $15\\text{ km/phút}$. Vectơ vận tốc $\\vec{u}_1 = 15 \\cdot \\frac{(3; 4; 0)}{5} = (9; 12; 0)$.\\nVị trí sau $t$ phút: $M(9t; 12t + 35; 10)$.\\n- Máy bay 2: $\\frac{91}{6}\\text{ km/phút}$. Vectơ vận tốc $\\vec{u}_2 = \\frac{91}{6} \\cdot \\frac{(5; 12; 0)}{13} = \\left(\\frac{35}{6}; 14; 0\\right)$.\\nVị trí sau $t$ phút: $N\\left(\\frac{35}{6}t + 31; 14t + 10; 11\\right)$.\\nKhoảng cách giữa hai máy bay thỏa mãn:\\n$$MN^2 = \\left(-\\frac{19}{6}t + 31\\right)^2 + (2t - 25)^2 + 1$$\\nCho $MN = 9{,}3 \\implies MN^2 = 86{,}49$.\\nGiải phương trình bậc hai theo $t$, nghiệm dương nhỏ nhất là $t \\approx 8{,}42$ phút."
  },
  {
    "id": 573,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_ham_so",
    "topicName": "Cực trị của hàm số",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Đồ thị hàm số $y = \\frac{x^2}{x + 1}$ có hai điểm cực trị là $A$ và $B$. Độ dài đoạn thẳng $AB$ bằng bao nhiêu? (kết quả làm tròn đến hàng phần chục).",
    "correctAnswer": "4.5",
    "acceptableAnswers": [
      "4.5",
      "4,5"
    ],
    "socraticHint": "Tính đạo hàm $y' = \\frac{x^2 + 2x}{(x + 1)^2}$, tìm tọa độ hai điểm cực trị rồi tính độ dài $AB$.",
    "detailedSolution": "Tập xác định $D = \\mathbb{R} \\setminus \\{-1\\}$.\\nĐạo hàm:\\n$$y' = \\frac{2x(x + 1) - x^2}{(x + 1)^2} = \\frac{x^2 + 2x}{(x + 1)^2}$$\\n$y' = 0 \\iff x = 0$ hoặc $x = -2$.\\n- Với $x = 0 \\implies y = 0 \\implies A(0; 0)$.\\n- Với $x = -2 \\implies y = -4 \\implies B(-2; -4)$.\\nĐộ dài đoạn thẳng $AB$:\\n$$AB = \\sqrt{(-2 - 0)^2 + (-4 - 0)^2} = \\sqrt{4 + 16} = \\sqrt{20} \\approx 4{,}472 \\approx 4{,}5$$\\nVậy độ dài $AB \\approx 4{,}5$."
  }
];
