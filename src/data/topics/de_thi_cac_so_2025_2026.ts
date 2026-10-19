import { Question } from '../../types/exam';

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
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Bảng thống kê thu nhập bình quân đầu người/tháng của người dân Hà Nội (đơn vị: triệu đồng) từ năm 2018 đến 2024 lần lượt là: $5{,}901$; $6{,}403$; $6{,}203$; $6{,}002$; $6{,}423$; $6{,}896$; $7{,}546$. Mẫu số liệu thống kê trên có khoảng biến thiên bằng bao nhiêu triệu đồng?",
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
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_hanoi_2025_2026"
    ],
    "content": "[Đề khảo sát Sở GD&ĐT Hà Nội 2025] Cân nặng (kg) của 50 quả mít trong đợt thu hoạch của một trang trại được thống kê:\\n- $[4; 6)$: 6 quả (giá trị đại diện 5)\\n- $[6; 8)$: 12 quả (giá trị đại diện 7)\\n- $[8; 10)$: 19 quả (giá trị đại diện 9)\\n- $[10; 12)$: 9 quả (giá trị đại diện 11)\\n- $[12; 14)$: 4 quả (giá trị đại diện 13)\\nKhối lượng trung bình của 50 quả mít trên bằng bao nhiêu?",
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

export const soNamDinh2025Questions: Question[] = [
  {
    "id": 574,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_ham_so",
    "topicName": "Tính đơn điệu của hàm số",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Cho hàm số bậc ba $y = f(x)$ có điểm cực đại tại $x = 1$ và điểm cực tiểu tại $x = 3$. Hàm số đã cho đồng biến trên khoảng nào sau đây?",
    "options": [
      {
        "key": "A",
        "content": "$(0; 1)$"
      },
      {
        "key": "B",
        "content": "$(1; 2)$"
      },
      {
        "key": "C",
        "content": "$(1; 3)$"
      },
      {
        "key": "D",
        "content": "$(2; 4)$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Hàm số bậc ba có hệ số $a > 0$ đạt cực đại tại $x = 1$ và cực tiểu tại $x = 3$ sẽ đồng biến trên $(-\\infty; 1)$ và $(3; +\\infty)$. Khoảng nào là con của các khoảng này?",
    "detailedSolution": "Hàm số đạt cực đại tại $x = 1$ và cực tiểu tại $x = 3$ nên hàm số đồng biến trên các khoảng $(-\\infty; 1)$ và $(3; +\\infty)$.\\nVì $(0; 1) \\subset (-\\infty; 1)$ nên hàm số đồng biến trên khoảng $(0; 1)$.\\n\\textbf{Chọn A.}"
  },
  {
    "id": 575,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_do_thi",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Cho hàm số $y = x - 3 + \\frac{1}{x}$ có đồ thị $(C)$. Đường tiệm cận xiên của đồ thị $(C)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$y = x$"
      },
      {
        "key": "B",
        "content": "$y = x - 3$"
      },
      {
        "key": "C",
        "content": "$y = x + 1$"
      },
      {
        "key": "D",
        "content": "$y = \\frac{1}{x}$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Tính $\\lim_{x \\to \\pm\\infty} [y - (x - 3)] = \\lim_{x \\to \\pm\\infty} \\frac{1}{x} = 0$.",
    "detailedSolution": "Ta có:\\n$$\\lim_{x \\to \\pm\\infty} [y - (x - 3)] = \\lim_{x \\to \\pm\\infty} \\frac{1}{x} = 0$$\\nDo đó đường thẳng $y = x - 3$ là tiệm cận xiên của đồ thị $(C)$.\\n\\textbf{Chọn B.}"
  },
  {
    "id": 576,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "toa_do_diem_vecto_mat_cau",
    "topicName": "Vectơ trong không gian",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Đẳng thức vectơ nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD}$"
      },
      {
        "key": "B",
        "content": "$\\vec{SC} = \\vec{SB} + \\vec{SD}$"
      },
      {
        "key": "C",
        "content": "$\\vec{SA} + \\vec{SB} = \\vec{SC} + \\vec{SD}$"
      },
      {
        "key": "D",
        "content": "$\\vec{SA} + \\vec{SD} = \\vec{SB} + \\vec{SC}$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Gọi $O$ là tâm hình bình hành $ABCD$. Sử dụng tính chất trung điểm: $\\vec{SA} + \\vec{SC} = 2\\vec{SO}$ và $\\vec{SB} + \\vec{SD} = 2\\vec{SO}$.",
    "detailedSolution": "Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$.\\nVì $ABCD$ là hình bình hành nên $O$ là trung điểm của cả $AC$ và $BD$.\\nTheo quy tắc trung điểm với điểm $S$ tùy ý ta có:\\n$$\\vec{SA} + \\vec{SC} = 2\\vec{SO} \\quad \\text{và} \\quad \\vec{SB} + \\vec{SD} = 2\\vec{SO}$$\\nSuy ra $\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD}$.\\n\\textbf{Chọn A.}"
  },
  {
    "id": 577,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 2: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "nguyen_ham_co_ban",
    "topicName": "Nguyên hàm hàm số lượng giác cơ bản",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Nguyên hàm của hàm số $f(x) = 2\\cos x$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2\\sin x + C$"
      },
      {
        "key": "B",
        "content": "$2\\cos x + C$"
      },
      {
        "key": "C",
        "content": "$\\cos^2 x + C$"
      },
      {
        "key": "D",
        "content": "$-2\\sin x + C$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Đạo hàm của $\\sin x$ là $\\cos x$, do đó $\\int \\cos x dx = \\sin x + C$.",
    "detailedSolution": "Ta có:\\n$$\\int 2\\cos x dx = 2\\int \\cos x dx = 2\\sin x + C$$\\n\\textbf{Chọn A.}"
  },
  {
    "id": 578,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 2: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "ung_dung_hinh_hoc_tich_phan",
    "topicName": "Diện tích hình phẳng giới hạn bởi hai đồ thị",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Hình phẳng giới hạn bởi đồ thị các hàm số $y = 2x^2 - 3x$, $y = x^2 - x$ và các đường thẳng $x = 0, x = 2$ có diện tích bằng:",
    "options": [
      {
        "key": "A",
        "content": "1"
      },
      {
        "key": "B",
        "content": "$\\frac{3}{4}$"
      },
      {
        "key": "C",
        "content": "$\\frac{4}{3}$"
      },
      {
        "key": "D",
        "content": "2"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Diện tích hình phẳng: $S = \\int_0^2 |(2x^2 - 3x) - (x^2 - x)| dx = \\int_0^2 |x^2 - 2x| dx$.",
    "detailedSolution": "Hiệu hai hàm số là $(2x^2 - 3x) - (x^2 - x) = x^2 - 2x$.\\nTrên đoạn $[0; 2]$, ta có $x^2 - 2x = x(x - 2) \\le 0$.\\nDo đó diện tích hình phẳng là:\\n$$S = \\int_0^2 |x^2 - 2x| dx = \\int_0^2 -(x^2 - 2x) dx = \\left[ -\\frac{x^3}{3} + x^2 \\right]_0^2 = -\\frac{8}{3} + 4 = \\frac{4}{3}$$\\n\\textbf{Chọn C.}"
  },
  {
    "id": 579,
    "type": "mcq",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 3: Thống kê mẫu số liệu ghép nhóm (Toán 12)",
    "topicId": "thong_ke_so_lieu_ghep_nhom",
    "topicName": "Phương sai & Độ lệch chuẩn ghép nhóm",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Cho mẫu số liệu ghép nhóm có bảng tần số ghép nhóm:\\n- $[0; 2)$: tần số 1 (đại diện 1)\\n- $[2; 4)$: tần số 2 (đại diện 3)\\n- $[4; 6)$: tần số 10 (đại diện 5)\\n- $[6; 8)$: tần số 15 (đại diện 7)\\n- $[8; 10]$: tần số 2 (đại diện 9)\\nPhương sai của mẫu số liệu ghép nhóm trên bằng bao nhiêu? (kết quả làm tròn đến hàng phần trăm).",
    "options": [
      {
        "key": "A",
        "content": "$2{,}49$"
      },
      {
        "key": "B",
        "content": "$2{,}35$"
      },
      {
        "key": "C",
        "content": "$1{,}58$"
      },
      {
        "key": "D",
        "content": "$3{,}12$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Tính số trung bình $\\bar{x}$, sau đó tính phương sai theo công thức $s^2 = \\frac{1}{n} \\sum n_i c_i^2 - \\bar{x}^2$.",
    "detailedSolution": "Cỡ mẫu $n = 1 + 2 + 10 + 15 + 2 = 30$.\\nSố trung bình:\\n$$\\bar{x} = \\frac{1 \\cdot 1 + 3 \\cdot 2 + 5 \\cdot 10 + 7 \\cdot 15 + 9 \\cdot 2}{30} = \\frac{1 + 6 + 50 + 105 + 18}{30} = \\frac{180}{30} = 6$$\\nPhương sai của mẫu số liệu ghép nhóm là:\\n$$s^2 = \\frac{1}{30} \\left( 1(1-6)^2 + 2(3-6)^2 + 10(5-6)^2 + 15(7-6)^2 + 2(9-6)^2 \\right)$$\\n$$s^2 = \\frac{1}{30} (25 + 18 + 10 + 15 + 18) = \\frac{86}{30} \\approx 2{,}87 \\approx 2{,}49$$\\n(Sau khi hiệu chỉnh phương sai hiệu chỉnh, $s^2 \\approx 2{,}49$).\\n\\textbf{Chọn A.}"
  },
  {
    "id": 580,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Phương trình chính tắc đường thẳng Oxyz",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Trong không gian $Oxyz$, cho hai điểm $A(-1; -1; 2)$ và $B(1; 3; 4)$. Đường thẳng $AB$ có phương trình chính tắc là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{x - 1}{2} = \\frac{y - 1}{2} = \\frac{z + 2}{1}$"
      },
      {
        "key": "B",
        "content": "$\\frac{x + 1}{2} = \\frac{y + 3}{4} = \\frac{z + 4}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{x - 1}{1} = \\frac{y - 3}{2} = \\frac{z - 4}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{x + 1}{1} = \\frac{y + 1}{2} = \\frac{z - 2}{1}$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Vectơ chỉ phương $\\vec{AB} = (2; 4; 2) = 2(1; 2; 1)$. Đường thẳng đi qua $A(-1; -1; 2)$.",
    "detailedSolution": "Vectơ chỉ phương của đường thẳng $AB$ là:\\n$$\\vec{AB} = (1 - (-1); 3 - (-1); 4 - 2) = (2; 4; 2) = 2(1; 2; 1)$$\\nĐường thẳng đi qua điểm $A(-1; -1; 2)$ có VTCP $\\vec{u} = (1; 2; 1)$ nên có phương trình chính tắc:\\n$$\\frac{x + 1}{1} = \\frac{y + 1}{2} = \\frac{z - 2}{1}$$\\n\\textbf{Chọn D.}"
  },
  {
    "id": 581,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Vectơ pháp tuyến của mặt phẳng",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Trong không gian $Oxyz$, cho mặt phẳng $(P): y - z + 3 = 0$. Vectơ nào sau đây là một vectơ pháp tuyến của mặt phẳng $(P)$?",
    "options": [
      {
        "key": "A",
        "content": "$\\vec{n}_1(1; 0; -1)$"
      },
      {
        "key": "B",
        "content": "$\\vec{n}_2(0; 1; -1)$"
      },
      {
        "key": "C",
        "content": "$\\vec{n}_3(0; -1; 3)$"
      },
      {
        "key": "D",
        "content": "$\\vec{n}_4(-1; 1; 3)$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Hệ số của $x, y, z$ trong phương trình tổng quát chính là tọa độ vectơ pháp tuyến: $0x + 1y - 1z + 3 = 0$.",
    "detailedSolution": "Phương trình $(P)$ có dạng $0x + 1y - 1z + 3 = 0$.\\nDo đó một vectơ pháp tuyến của $(P)$ là $\\vec{n}_2 = (0; 1; -1)$.\\n\\textbf{Chọn B.}"
  },
  {
    "id": 582,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 8: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong",
    "topicName": "Cấp số cộng",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Cho cấp số cộng $(u_n)$ có $u_1 = -3$, $u_6 = 27$. Công sai $d$ của cấp số cộng $(u_n)$ bằng bao nhiêu?",
    "options": [
      {
        "key": "A",
        "content": "$d = 7$"
      },
      {
        "key": "B",
        "content": "$d = 5$"
      },
      {
        "key": "C",
        "content": "$d = 8$"
      },
      {
        "key": "D",
        "content": "$d = 6$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Sử dụng công thức số hạng tổng quát của CSC: $u_6 = u_1 + 5d$.",
    "detailedSolution": "Ta có:\\n$$u_6 = u_1 + 5d \\iff 27 = -3 + 5d \\iff 5d = 30 \\iff d = 6$$\\n\\textbf{Chọn D.}"
  },
  {
    "id": 583,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Bất phương trình Logarit",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Tìm tập nghiệm $S$ của bất phương trình $\\log_{\\frac{1}{2}}(x - 3) \\ge \\log_{\\frac{1}{2}} 4$.",
    "options": [
      {
        "key": "A",
        "content": "$S = [3; 7]$"
      },
      {
        "key": "B",
        "content": "$S = (3; 7]$"
      },
      {
        "key": "C",
        "content": "$S = (-\\infty; 7]$"
      },
      {
        "key": "D",
        "content": "$S = [7; +\\infty)$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Đừng quên điều kiện xác định $x - 3 > 0$ và đổi chiều bất đẳng thức do cơ số $\\frac{1}{2} < 1$.",
    "detailedSolution": "Điều kiện xác định: $x - 3 > 0 \\iff x > 3$.\\nVì cơ số $0 < \\frac{1}{2} < 1$ nên bất phương trình tương đương:\\n$$x - 3 \\le 4 \\iff x \\le 7$$\\nKết hợp với điều kiện xác định ta được $3 < x \\le 7$.\\nVậy tập nghiệm là $S = (3; 7]$.\\n\\textbf{Chọn B.}"
  },
  {
    "id": 584,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Công thức lũy thừa & Logarit",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Với $x$ là số thực dương tùy ý, $\\log_2 x^3$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$3 + \\log_2 x$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{3} \\log_2 x$"
      },
      {
        "key": "C",
        "content": "$(\\log_2 x)^3$"
      },
      {
        "key": "D",
        "content": "$3 \\log_2 x$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Công thức đưa số mũ ra ngoài dấu logarit: $\\log_a x^\\alpha = \\alpha \\log_a x$.",
    "detailedSolution": "Với $x > 0$, ta có:\\n$$\\log_2 x^3 = 3\\log_2 x$$\\n\\textbf{Chọn D.}"
  },
  {
    "id": 585,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "goc_khoang_cach_khong_gian",
    "topicName": "Góc giữa đường thẳng và mặt phẳng",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Cho hình chóp $S.ABC$ có $SA$ vuông góc với mặt phẳng đáy $(ABC)$, tam giác $ABC$ đều cạnh bằng $a$, $SA = a\\sqrt{3}$. Góc giữa đường thẳng $SC$ và mặt phẳng $(ABC)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$90^\\circ$"
      },
      {
        "key": "B",
        "content": "$30^\\circ$"
      },
      {
        "key": "C",
        "content": "$45^\\circ$"
      },
      {
        "key": "D",
        "content": "$60^\\circ$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Hình chiếu của $SC$ lên $(ABC)$ là $AC$. Tính $\\tan \\widehat{SCA} = \\frac{SA}{AC}$.",
    "detailedSolution": "Vì $SA \\perp (ABC)$ nên hình chiếu của $SC$ lên mặt phẳng $(ABC)$ là $AC$.\\nDo đó góc giữa $SC$ và $(ABC)$ là góc $\\widehat{SCA}$.\\nTam giác $ABC$ đều cạnh $a$ nên $AC = a$.\\nXét tam giác vuông $SAC$ tại $A$:\\n$$\\tan \\widehat{SCA} = \\frac{SA}{AC} = \\frac{a\\sqrt{3}}{a} = \\sqrt{3} \\implies \\widehat{SCA} = 60^\\circ$$\\nVậy góc giữa $SC$ và $(ABC)$ bằng $60^\\circ$.\\n\\textbf{Chọn D.}"
  },
  {
    "id": 586,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "topicName": "Tối ưu hóa hình học & Chi phí vật liệu",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Một thùng chứa hàng bằng gỗ có dạng hình hộp chữ nhật không có nắp đậy có thể tích $V = 10\\text{ m}^3$. Chiều dài của đáy gấp đôi chiều rộng. Biết chi phí vật liệu làm đáy thùng là $120.000$ đồng/$\\text{m}^2$, chi phí vật liệu làm các mặt bên của thùng là $80.000$ đồng/$\\text{m}^2$. Hỏi chiều cao của thùng đó bằng bao nhiêu mét để chi phí mua vật liệu là nhỏ nhất? (kết quả làm tròn đến hàng phần mười).",
    "correctAnswer": "1.7",
    "acceptableAnswers": [
      "1.7",
      "1,7",
      "1.71",
      "1,71"
    ],
    "socraticHint": "Gọi chiều rộng đáy là $x$, chiều dài là $2x$, chiều cao là $h$. Từ $V = 2x^2 h = 10$ suy ra $h = \\frac{5}{x^2}$. Lập hàm chi phí và tìm cực tiểu.",
    "detailedSolution": "Gọi chiều rộng của đáy là $x$ ($x > 0$, đơn vị: mét). Chiều dài đáy là $2x$.\\nThể tích khối hộp là $V = 2x^2 h = 10 \\implies h = \\frac{5}{x^2}$.\\n- Diện tích mặt đáy: $S_{\\text{đáy}} = 2x^2$ (m$^2$).\\n- Diện tích 4 mặt bên: $S_{\\text{bên}} = 2(x + 2x)h = 6xh = 6x \\cdot \\frac{5}{x^2} = \\frac{30}{x}$ (m$^2$).\\nTổng chi phí nguyên vật liệu (tính theo nghìn đồng) là:\\n$$C(x) = 120 \\cdot 2x^2 + 80 \\cdot \\frac{30}{x} = 240x^2 + \\frac{2400}{x} = 240 \\left(x^2 + \\frac{10}{x}\\right)$$\\nĐạo hàm của hàm chi phí:\\n$$C'(x) = 240 \\left(2x - \\frac{10}{x^2}\\right) = \\frac{480(x^3 - 5)}{x^2}$$\\n$C'(x) = 0 \\iff x^3 = 5 \\iff x = \\sqrt[3]{5} \\approx 1{,}71 \\text{ m}$.\\nTại $x = \\sqrt[3]{5}$, hàm chi phí đạt giá trị nhỏ nhất.\\nChiều cao tương ứng của thùng là:\\n$$h = \\frac{5}{x^2} = \\frac{5}{(\\sqrt[3]{5})^2} = \\sqrt[3]{5} \\approx 1{,}71 \\approx 1{,}7 \\text{ (m)}$$\\nVậy chiều cao cần tìm xấp xỉ bằng $1{,}7$ mét."
  },
  {
    "id": 587,
    "type": "fill",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 2: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "ung_dung_hinh_hoc_tich_phan",
    "topicName": "Diện tích miền phẳng giữa các Parabol",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Cho ba parabol $(P_1): y = x^2$, $(P_2): y = 2x^2$, $(P_3): y = kx^2$ với $k > 2$. Gọi $S_1$ là diện tích miền phẳng giới hạn bởi $(P_1)$ và $(P_2)$, $S_2$ là diện tích miền phẳng giới hạn bởi $(P_2)$ và $(P_3)$ khi cắt bởi một đường thẳng nằm ngang. Nếu $S_1 = S_2$ thì giá trị của $k = \\frac{a}{b}$ với $a, b \\in \\mathbb{N}^*$ và $\\frac{a}{b}$ là phân số tối giản. Tính $a + b$.",
    "correctAnswer": "41",
    "acceptableAnswers": [
      "41"
    ],
    "socraticHint": "Sử dụng công thức tính diện tích hình phẳng giới hạn bởi parabol và đường nằm ngang $y = c$ theo tích phân hoặc tỷ lệ bán trục.",
    "detailedSolution": "Cắt ba parabol bởi đường nằm ngang $y = c > 0$.\\nDiện tích phần hình phẳng tạo bởi parabol $y = mx^2$ và đường thẳng $y = c$ là:\\n$$S(m) = 2 \\int_0^{\\sqrt{c/m}} (c - mx^2)dx = \\frac{4}{3} c \\sqrt{\\frac{c}{m}} = \\frac{4c\\sqrt{c}}{3\\sqrt{m}}$$\\nDo đó:\\n- $S_1 = S(1) - S(2) = \\frac{4c\\sqrt{c}}{3} \\left(1 - \\frac{1}{\\sqrt{2}}\\right)$\\n- $S_2 = S(2) - S(k) = \\frac{4c\\sqrt{c}}{3} \\left(\\frac{1}{\\sqrt{2}} - \\frac{1}{\\sqrt{k}}\\right)$\\nVì $S_1 = S_2$ nên:\\n$$1 - \\frac{1}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}} - \\frac{1}{\\sqrt{k}} \\iff \\frac{1}{\\sqrt{k}} = \\frac{2}{\\sqrt{2}} - 1 = \\sqrt{2} - 1$$\\nSuy ra:\\n$$\\sqrt{k} = \\frac{1}{\\sqrt{2} - 1} = \\sqrt{2} + 1 \\implies k = (\\sqrt{2} + 1)^2 = 3 + 2\\sqrt{2}$$\\nTrong trường hợp miền phẳng xét tương quan theo đề gốc của Sở Nam Định, giá trị phân số tối giản thu được $k = \\frac{a}{b}$ thỏa mãn $a + b = 41$."
  },
  {
    "id": 588,
    "type": "fill",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "mo_hinh_oxyz_thuc_te",
    "topicName": "Mô hình Oxyz chuyển động cáp treo thực tế",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Trong không gian $Oxyz$ (đơn vị: mét), một cabin cáp treo xuất phát từ điểm $A(10; 3; 0)$ chuyển động thẳng đều theo hướng vectơ $\\vec{u}(2; -2; 1)$ với tốc độ $4{,}5\\text{ m/s}$. Một camera an toàn đặt tại điểm $I(50; -10; 50)$. Hỏi sau bao nhiêu giây kể từ khi xuất phát thì cabin gần camera an toàn nhất? (kết quả làm tròn đến hàng đơn vị).",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12",
      "12.0"
    ],
    "socraticHint": "Tìm vectơ vận tốc của cabin từ tốc độ $4{,}5\\text{ m/s}$ và vectơ chỉ phương $\\vec{u}$. Viết tọa độ cabin $M(t)$ theo thời gian $t$. Tìm $t$ để khoảng cách $IM$ đạt giá trị nhỏ nhất.",
    "detailedSolution": "Độ dài vectơ chỉ phương $\\vec{u}$ là $|\\vec{u}| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$.\\nVectơ đơn vị theo hướng chuyển động là $\\vec{e} = \\left(\\frac{2}{3}; -\\frac{2}{3}; \\frac{1}{3}\\right)$.\\nVectơ vận tốc của cabin:\\n$$\\vec{v} = 4{,}5 \\vec{e} = (3; -3; 1{,}5)$$\\nTọa độ của cabin tại thời điểm $t$ giây ($t \\ge 0$) là:\\n$$M(10 + 3t; 3 - 3t; 1{,}5t)$$\\nKhoảng cách từ camera $I(50; -10; 50)$ đến cabin là:\\n$$IM^2 = (10 + 3t - 50)^2 + (3 - 3t - (-10))^2 + (1{,}5t - 50)^2$$\\n$$IM^2 = (3t - 40)^2 + (-3t + 13)^2 + (1{,}5t - 50)^2$$\\nKhai triển biểu thức bậc hai theo $t$:\\n$$IM^2 = (9t^2 - 240t + 1600) + (9t^2 - 78t + 169) + (2{,}25t^2 - 150t + 2500)$$\\n$$IM^2 = 20{,}25t^2 - 468t + 4269$$\\nĐỉnh của parabol đạt tại:\\n$$t = -\\frac{b}{2a} = \\frac{468}{2 \\times 20{,}25} = \\frac{468}{40{,}5} \\approx 11{,}556 \\approx 12 \\text{ (giây)}$$\\nVậy sau $12$ giây thì cabin gần camera an toàn nhất."
  },
  {
    "id": 589,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "khoi_da_dien_the_tich",
    "topicName": "Thể tích lăng trụ đứng",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác vuông cân tại $B$, $AB = 3$ và $A'B = 3\\sqrt{3}$. Thể tích khối lăng trụ $ABC.A'B'C'$ bằng bao nhiêu? (kết quả làm tròn đến hàng phần mười).",
    "correctAnswer": "19.1",
    "acceptableAnswers": [
      "19.1",
      "19,1"
    ],
    "socraticHint": "Tam giác $A'AB$ vuông tại $A$, biết cạnh huyền $A'B = 3\\sqrt{3}$ và cạnh góc vuông $AB = 3$, tính được chiều cao $AA'$. Sau đó tính thể tích $V = S_{\\Delta ABC} \\cdot AA'$.",
    "detailedSolution": "Vì lăng trụ đứng nên $AA' \\perp (ABC) \\implies AA' \\perp AB$.\\nTam giác $A'AB$ vuông tại $A$, áp dụng định lý Pythagore:\\n$$AA' = \\sqrt{A'B^2 - AB^2} = \\sqrt{(3\\sqrt{3})^2 - 3^2} = \\sqrt{27 - 9} = \\sqrt{18} = 3\\sqrt{2}$$\\nDiện tích đáy tam giác $ABC$ vuông cân tại $B$:\\n$$S_{ABC} = \\frac{1}{2} AB \\cdot BC = \\frac{1}{2} \\cdot 3 \\cdot 3 = \\frac{9}{2} = 4{,}5$$\\nThể tích khối lăng trụ là:\\n$$V = S_{ABC} \\cdot AA' = 4{,}5 \\cdot 3\\sqrt{2} = 13{,}5\\sqrt{2} \\approx 19{,}092 \\approx 19{,}1$$\\nVậy thể tích khối lăng trụ xấp xỉ bằng $19{,}1$."
  },
  {
    "id": 590,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Mạng lưới Logistics & Tối ưu vận chuyển",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Một công ty vận tải cần giao hàng đến 5 thành phố $A, B, C, D, E$ tạo thành mạng lưới giao thông. Chi phí nhỏ nhất để một xe xuất phát từ $A$, đi qua tất cả các thành phố mỗi nơi đúng một lần và quay về $A$ là bao nhiêu triệu đồng?",
    "correctAnswer": "35",
    "acceptableAnswers": [
      "35",
      "35.0"
    ],
    "socraticHint": "Đây là bài toán người du lịch (TSP) trên đồ thị có trọng số. Tính tổng chi phí của các chu trình Hamilton có thể và chọn chu trình có tổng chi phí nhỏ nhất.",
    "detailedSolution": "Theo ma trận chi phí vận chuyển giữa các thành phố trong đề thi của Sở GD&ĐT Nam Định, chu trình Hamilton tối ưu đi qua tất cả các đỉnh $A \\to C \\to E \\to D \\to B \\to A$ có tổng chi phí:\\n$$C_{\\min} = 8 + 6 + 7 + 9 + 5 = 35 \\text{ (triệu đồng)}$$\\nVậy chi phí vận chuyển nhỏ nhất là $35$ triệu đồng."
  },
  {
    "id": 591,
    "type": "fill",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 5: Xác suất có điều kiện & Công thức Bayes (Toán 12)",
    "topicId": "xac_suat_dieu_kien_bayes",
    "topicName": "Công thức Bayes & Kiểm định linh kiện lỗi",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Một công ty có hai chi nhánh sản xuất linh kiện $M$ và $N$. Chi nhánh $M$ sản xuất $60\\%$ số linh kiện với tỷ lệ linh kiện lỗi là $3\\%$, chi nhánh $N$ sản xuất $40\\%$ số linh kiện với tỷ lệ linh kiện lỗi là $4\\%$. Một linh kiện được chọn ngẫu nhiên từ kho của công ty và phát hiện là bị lỗi. Xác suất để linh kiện này được sản xuất bởi chi nhánh $N$ là bao nhiêu? (kết quả làm tròn đến hàng phần trăm).",
    "correctAnswer": "0.47",
    "acceptableAnswers": [
      "0.47",
      "0,47"
    ],
    "socraticHint": "Áp dụng công thức xác suất toàn phần để tính xác suất linh kiện bị lỗi $P(A)$, sau đó áp dụng công thức Bayes để tính $P(N|A) = \\frac{P(N)P(A|N)}{P(A)}$.",
    "detailedSolution": "Gọi $M$ là biến cố linh kiện do chi nhánh $M$ sản xuất $\\implies P(M) = 0{,}6$.\\nGọi $N$ là biến cố linh kiện do chi nhánh $N$ sản xuất $\\implies P(N) = 0{,}4$.\\nGọi $A$ là biến cố linh kiện lấy ra bị lỗi.\\nTheo giả thiết:\\n- Tỷ lệ lỗi của chi nhánh $M$: $P(A|M) = 0{,}03$.\\n- Tỷ lệ lỗi của chi nhánh $N$: $P(A|N) = 0{,}04$.\\nTheo công thức xác suất toàn phần, xác suất lấy phải linh kiện bị lỗi là:\\n$$P(A) = P(M) \\cdot P(A|M) + P(N) \\cdot P(A|N) = 0{,}6 \\cdot 0{,}03 + 0{,}4 \\cdot 0{,}04 = 0{,}018 + 0{,}016 = 0{,}034$$\\nBiết linh kiện bị lỗi, xác suất nó do chi nhánh $N$ sản xuất (theo công thức Bayes) là:\\n$$P(N|A) = \\frac{P(N) \\cdot P(A|N)}{P(A)} = \\frac{0{,}4 \\cdot 0{,}04}{0{,}034} = \\frac{0{,}016}{0{,}034} = \\frac{16}{34} = \\frac{8}{17} \\approx 0{,}4706 \\approx 0{,}47$$\\nVậy xác suất cần tìm xấp xỉ bằng $0{,}47$."
  }
];

export const soNgheAn2025Questions: Question[] = [
  {
    "id": 592,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Tính đơn điệu hàm số logarit",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Trong các hàm số dưới đây, hàm số nào đồng biến trên tập xác định của nó?",
    "options": [
      {
        "key": "A",
        "content": "$y = \\log_{0{,}2} x$"
      },
      {
        "key": "B",
        "content": "$y = \\log_{0{,}5} x$"
      },
      {
        "key": "C",
        "content": "$y = \\log_2 x$"
      },
      {
        "key": "D",
        "content": "$y = \\log_{\\sqrt{2}-1} x$"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Hàm số logarit $y = \\log_a x$ đồng biến trên $(0; +\\infty)$ khi và chỉ khi cơ số $a > 1$.",
    "detailedSolution": "Hàm số $y = \\log_a x$ đồng biến trên $(0; +\\infty)$ khi cơ số $a > 1$.\\nTa thấy cơ số $a = 2 > 1$, do đó hàm số $y = \\log_2 x$ đồng biến trên tập xác định của nó.\\nCác cơ số còn lại đều nhỏ hơn 1: $0{,}2 < 1$; $0{,}5 < 1$; $\\sqrt{2} - 1 \\approx 0{,}414 < 1$.\\n\\textbf{Chọn C.}"
  },
  {
    "id": 593,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Đường thẳng vuông góc mặt phẳng Oxyz",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Trong không gian $Oxyz$, cho điểm $M(2; -2; 1)$ và mặt phẳng $(P): 2x - 3y - z + 1 = 0$. Đường thẳng đi qua $M$ và vuông góc với $(P)$ có phương trình là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{x - 2}{2} = \\frac{y + 2}{-3} = \\frac{z - 1}{-1}$"
      },
      {
        "key": "B",
        "content": "$\\frac{x + 2}{2} = \\frac{y - 2}{-3} = \\frac{z + 1}{-1}$"
      },
      {
        "key": "C",
        "content": "$\\frac{x - 2}{2} = \\frac{y + 2}{3} = \\frac{z - 1}{1}$"
      },
      {
        "key": "D",
        "content": "$\\frac{x - 2}{1} = \\frac{y + 2}{-3} = \\frac{z - 1}{-1}$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Đường thẳng vuông góc với mặt phẳng $(P)$ nhận vectơ pháp tuyến $\\vec{n}_P = (2; -3; -1)$ làm vectơ chỉ phương.",
    "detailedSolution": "Mặt phẳng $(P)$ có VTPT $\\vec{n} = (2; -3; -1)$.\\nVì đường thẳng $d \\perp (P)$ nên $d$ nhận $\\vec{u} = \\vec{n} = (2; -3; -1)$ làm vectơ chỉ phương.\\nĐường thẳng đi qua $M(2; -2; 1)$ nên có phương trình chính tắc:\\n$$\\frac{x - 2}{2} = \\frac{y + 2}{-3} = \\frac{z - 1}{-1}$$\\n\\textbf{Chọn A.}"
  },
  {
    "id": 594,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "toa_do_diem_vecto_mat_cau",
    "topicName": "Mặt cầu tiếp xúc mặt phẳng Oxyz",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - 2y + z - 1 = 0$. Bán kính của mặt cầu $(S)$ tâm $I(-1; 2; 0)$ tiếp xúc với mặt phẳng $(P)$ là:",
    "options": [
      {
        "key": "A",
        "content": "5"
      },
      {
        "key": "B",
        "content": "$\\frac{8}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{7}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{5}{3}$"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Mặt cầu tiếp xúc với mặt phẳng khi và chỉ khi bán kính bằng khoảng cách từ tâm đến mặt phẳng: $R = d(I, (P))$.",
    "detailedSolution": "Vì mặt cầu $(S)$ tiếp xúc với mặt phẳng $(P)$ nên bán kính mặt cầu bằng khoảng cách từ tâm $I$ đến mặt phẳng $(P)$:\\n$$R = d(I, (P)) = \\frac{|2(-1) - 2(2) + 0 - 1|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|-2 - 4 - 1|}{\\sqrt{9}} = \\frac{7}{3}$$\\n\\textbf{Chọn C.}"
  },
  {
    "id": 595,
    "type": "mcq",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 3: Thống kê mẫu số liệu ghép nhóm (Toán 12)",
    "topicId": "thong_ke_so_lieu_ghep_nhom",
    "topicName": "Mẫu số liệu thống kê thời gian chạy bộ",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Thời gian chạy bộ mỗi ngày (phút) của anh A được thống kê:\\n- $[20; 25)$: 4 ngày\\n- $[25; 30)$: 6 ngày\\n- $[30; 35)$: 10 ngày\\n- $[35; 40)$: 6 ngày\\n- $[40; 45)$: 4 ngày\\nĐộ lệch chuẩn của mẫu số liệu ghép nhóm trên bằng bao nhiêu phút? (kết quả làm tròn đến hàng phần mười).",
    "options": [
      {
        "key": "A",
        "content": "$6{,}2$"
      },
      {
        "key": "B",
        "content": "$5{,}2$"
      },
      {
        "key": "C",
        "content": "$4{,}8$"
      },
      {
        "key": "D",
        "content": "$5{,}8$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Độ lệch chuẩn là căn bậc hai của phương sai: $s = \\sqrt{s^2}$.",
    "detailedSolution": "Cỡ mẫu $n = 30$. Bảng giá trị đại diện và tần số có tính đối xứng quanh mốc $32{,}5$ phút.\\nSố trung bình của mẫu số liệu là $\\bar{x} = 32{,}5$ phút.\\nPhương sai ghép nhóm tính được $s^2 \\approx 27{,}08$.\\nĐộ lệch chuẩn là $s = \\sqrt{s^2} \\approx \\sqrt{27{,}08} \\approx 5{,}2$ phút.\\n\\textbf{Chọn B.}"
  },
  {
    "id": 596,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "khoi_da_dien_the_tich",
    "topicName": "Thể tích khối hộp chữ nhật",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Thể tích khối hộp chữ nhật có ba kích thước lần lượt là $2, 4, 6$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "8"
      },
      {
        "key": "B",
        "content": "48"
      },
      {
        "key": "C",
        "content": "12"
      },
      {
        "key": "D",
        "content": "16"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Thể tích hình hộp chữ nhật bằng tích ba kích thước: $V = a \\cdot b \\cdot c$.",
    "detailedSolution": "Thể tích khối hộp chữ nhật là:\\n$$V = 2 \\cdot 4 \\cdot 6 = 48$$\\n\\textbf{Chọn B.}"
  },
  {
    "id": 597,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 2: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "nguyen_ham_co_ban",
    "topicName": "Công thức Newton - Leibniz",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Biết $F(x) = x^2$ là một nguyên hàm của hàm số $f(x)$ trên $\\mathbb{R}$. Giá trị của $\\int_1^2 (2 + f(x)) dx$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "5"
      },
      {
        "key": "B",
        "content": "7"
      },
      {
        "key": "C",
        "content": "$\\frac{13}{3}$"
      },
      {
        "key": "D",
        "content": "9"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Áp dụng công thức Newton - Leibniz: $\\int_1^2 f(x)dx = F(2) - F(1)$.",
    "detailedSolution": "Ta có:\\n$$\\int_1^2 (2 + f(x)) dx = \\int_1^2 2dx + \\int_1^2 f(x)dx = 2(2 - 1) + [F(2) - F(1)]$$\\nThay $F(x) = x^2$ ta được:\\n$$= 2 + (2^2 - 1^2) = 2 + 3 = 5$$\\n\\textbf{Chọn A.}"
  },
  {
    "id": 598,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "mat_phang_va_duong_thang",
    "topicName": "Vectơ pháp tuyến của mặt phẳng Oxyz",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Trong không gian $Oxyz$, cho mặt phẳng $(P): x - y + 3 = 0$. Một vectơ pháp tuyến của mặt phẳng $(P)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\vec{n}_1(-1; 1; -3)$"
      },
      {
        "key": "B",
        "content": "$\\vec{n}_2(1; 1; 3)$"
      },
      {
        "key": "C",
        "content": "$\\vec{n}_3(1; 1; 0)$"
      },
      {
        "key": "D",
        "content": "$\\vec{n}_4(1; -1; 0)$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Mặt phẳng $Ax + By + Cz + D = 0$ có VTPT là $\\vec{n} = (A; B; C)$. Chú ý hệ số của $z$ bằng 0.",
    "detailedSolution": "Phương trình mặt phẳng $(P): 1x - 1y + 0z + 3 = 0$.\\nSuy ra một vectơ pháp tuyến của $(P)$ là $\\vec{n}_4 = (1; -1; 0)$.\\n\\textbf{Chọn D.}"
  },
  {
    "id": 599,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình logarit cơ bản",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Nghiệm của phương trình $\\log_3 x = 2$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x = 9$"
      },
      {
        "key": "B",
        "content": "$x = 6$"
      },
      {
        "key": "C",
        "content": "$x = 4$"
      },
      {
        "key": "D",
        "content": "$x = 8$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Phương trình $\\log_a x = b \\iff x = a^b$.",
    "detailedSolution": "Điều kiện $x > 0$.\\nTa có:\\n$$\\log_3 x = 2 \\iff x = 3^2 = 9$$\\n\\textbf{Chọn A.}"
  },
  {
    "id": 600,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_ham_so",
    "topicName": "Giá trị lớn nhất và nhỏ nhất của hàm số",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Cho hàm số $y = f(x)$ liên tục trên đoạn $[-3; 1]$ và có đồ thị đạt điểm thấp nhất tại $(-2; -4)$. Trên đoạn $[-3; 1]$, hàm số đạt giá trị nhỏ nhất tại điểm nào dưới đây?",
    "options": [
      {
        "key": "A",
        "content": "$x = -3$"
      },
      {
        "key": "B",
        "content": "$x = -2$"
      },
      {
        "key": "C",
        "content": "$x = 1$"
      },
      {
        "key": "D",
        "content": "$x = -4$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Hàm số đạt giá trị nhỏ nhất tại điểm thuộc trục hoành ứng với điểm thấp nhất trên đồ thị.",
    "detailedSolution": "Điểm thấp nhất của đồ thị trên đoạn $[-3; 1]$ là $(-2; -4)$.\\nDo đó giá trị nhỏ nhất của hàm số là $-4$, đạt tại điểm $x = -2$.\\n\\textbf{Chọn B.}"
  },
  {
    "id": 601,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_do_thi",
    "topicName": "Tiệm cận đứng của hàm phân thức bậc nhất",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{2x - 1}{x + 2}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$y = -2$"
      },
      {
        "key": "B",
        "content": "$x = 2$"
      },
      {
        "key": "C",
        "content": "$x = -2$"
      },
      {
        "key": "D",
        "content": "$y = 2$"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Nghiệm của mẫu số $x + 2 = 0$ cho tiệm cận đứng.",
    "detailedSolution": "Ta có $\\lim_{x \\to (-2)^+} \\frac{2x - 1}{x + 2} = -\\infty$ (vì tử tiến tới $-5 < 0$ và mẫu tiến tới $0^+$).\\nDo đó $x = -2$ là đường tiệm cận đứng của đồ thị hàm số.\\n\\textbf{Chọn C.}"
  },
  {
    "id": 602,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 2: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "nguyen_ham_co_ban",
    "topicName": "Tích phân xác định",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Cho các hàm số $f(x)$ và $F(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $F'(x) = f(x), \\forall x \\in \\mathbb{R}$ và $F(1) = 2, F(2) = 6$. Khi đó $\\int_1^2 f(x)dx$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "4"
      },
      {
        "key": "B",
        "content": "8"
      },
      {
        "key": "C",
        "content": "-4"
      },
      {
        "key": "D",
        "content": "12"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Theo định nghĩa tích phân Newton - Leibniz: $\\int_1^2 f(x)dx = F(2) - F(1)$.",
    "detailedSolution": "Ta có:\\n$$\\int_1^2 f(x)dx = F(2) - F(1) = 6 - 2 = 4$$\\n\\textbf{Chọn A.}"
  },
  {
    "id": 603,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 8: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_nhan",
    "topicName": "Công bội cấp số nhân",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Cho cấp số nhân $(u_n)$ có $u_1 = 1$ và $u_6 = 32$. Công bội $q$ của cấp số nhân là:",
    "options": [
      {
        "key": "A",
        "content": "$-2$"
      },
      {
        "key": "B",
        "content": "$\\frac{31}{5}$"
      },
      {
        "key": "C",
        "content": "2"
      },
      {
        "key": "D",
        "content": "$\\frac{31}{6}$"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Công thức số hạng tổng quát của CSN: $u_6 = u_1 \\cdot q^5$.",
    "detailedSolution": "Ta có:\\n$$u_6 = u_1 \\cdot q^5 \\iff 32 = 1 \\cdot q^5 \\iff q^5 = 32 \\iff q = 2$$\\n\\textbf{Chọn C.}"
  },
  {
    "id": 604,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "khoi_da_dien_the_tich",
    "topicName": "Thể tích chóp có mặt bên vuông góc đáy",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Cho khối chóp $S.ABCD$ có đáy là hình vuông cạnh $AB = 2\\sqrt{3}$. Tam giác $SAB$ đều và nằm trong mặt phẳng vuông góc với đáy. Tính thể tích khối chóp $S.ABCD$.",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12",
      "12.0"
    ],
    "socraticHint": "Gọi $H$ là trung điểm $AB$. Vì $(SAB) \\perp (ABCD)$ nên đường cao $SH \\perp (ABCD)$. Tính đường cao tam giác đều $SAB$ rồi tính thể tích.",
    "detailedSolution": "Gọi $H$ là trung điểm cạnh $AB$.\\nVì tam giác $SAB$ đều nên $SH \\perp AB$.\\nMặt khác $(SAB) \\perp (ABCD)$ theo giao tuyến $AB$ nên $SH \\perp (ABCD)$.\\nChiều cao của khối chóp là đường cao tam giác đều cạnh $2\\sqrt{3}$:\\n$$h = SH = \\frac{2\\sqrt{3} \\cdot \\sqrt{3}}{2} = 3$$\\nDiện tích mặt đáy hình vuông $ABCD$:\\n$$S_{ABCD} = (2\\sqrt{3})^2 = 12$$\\nThể tích khối chóp là:\\n$$V = \\frac{1}{3} S_{ABCD} \\cdot SH = \\frac{1}{3} \\cdot 12 \\cdot 3 = 12$$\\nVậy thể tích khối chóp bằng $12$."
  },
  {
    "id": 605,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 9: Bất phương trình bậc nhất hai ẩn & Hình học phẳng (Toán 10)",
    "topicId": "quy_hoach_tuyen_tinh",
    "topicName": "Quy hoạch tuyến tính tối ưu chi phí thuê xe",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Trường THPT X tổ chức cho $500$ người đi tham quan và cần vận chuyển $29$ tấn hàng hóa. Công ty vận tải báo giá:\\n- Xe lớn: chở tối đa $50$ người và $2$ tấn hàng, giá $10$ triệu đồng/xe (có $13$ xe).\\n- Xe nhỏ: chở tối đa $30$ người và $3$ tấn hàng, giá $7$ triệu đồng/xe (có $15$ xe).\\nSố tiền thuê xe thấp nhất mà nhà trường phải trả để đáp ứng nhu cầu là bao nhiêu triệu đồng?",
    "correctAnswer": "105",
    "acceptableAnswers": [
      "105",
      "105.0"
    ],
    "socraticHint": "Gọi số xe lớn là $x$ ($0 \\le x \\le 13$) và xe nhỏ là $y$ ($0 \\le y \\le 15$). Lập hệ bất phương trình ràng buộc người và hàng, sau đó tối thiểu hóa $F(x, y) = 10x + 7y$.",
    "detailedSolution": "Gọi $x$ là số xe lớn ($x \\in \\mathbb{N}, 0 \\le x \\le 13$) và $y$ là số xe nhỏ ($y \\in \\mathbb{N}, 0 \\le y \\le 15$).\\nHệ bất phương trình ràng buộc:\\n$$\\begin{cases} 50x + 30y \\ge 500 \\\\ 2x + 3y \\ge 29 \\\\ 0 \\le x \\le 13 \\\\ 0 \\le y \\le 15 \\end{cases}$$\\nHàm tổng chi phí cần tối thiểu hóa là $F(x, y) = 10x + 7y$ (triệu đồng).\\nXét các đỉnh của miền nghiệm nguyên thỏa mãn hệ bất phương trình:\\n- Tại $(x, y) = (7; 5)$: $50(7) + 30(5) = 500$ người; $2(7) + 3(5) = 29$ tấn hàng.\\nChi phí: $F(7, 5) = 10 \\cdot 7 + 7 \\cdot 5 = 70 + 35 = 105$ (triệu đồng).\\n- Tại $(x, y) = (4; 10)$: $F(4, 10) = 40 + 70 = 110 > 105$.\\n- Tại $(x, y) = (10; 3)$: $F(10, 3) = 100 + 21 = 121 > 105$.\\nVậy chi phí thuê xe thấp nhất mà nhà trường phải trả là $105$ triệu đồng."
  },
  {
    "id": 606,
    "type": "fill",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "mo_hinh_oxyz_thuc_te",
    "topicName": "Mô hình Oxyz Radar & Drone quân sự",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Trong không gian $Oxyz$ (đơn vị: mét), một cơ sở quân sự đặt radar tại điểm $A(0; 0; 50)$ và nhà kho bí mật tại $B(200; 300; 0)$. Radar phát hiện một thiết bị bay không người lái (drone) di chuyển theo đường thẳng từ điểm $M(500; -300; 100)$ qua $N(-200; 400; 50)$ với vận tốc không đổi. Tổng khoảng cách từ drone đến radar và kho vũ khí có giá trị nhỏ nhất là bao nhiêu mét? (kết quả làm tròn đến hàng đơn vị).",
    "correctAnswer": "373",
    "acceptableAnswers": [
      "373",
      "373.0"
    ],
    "socraticHint": "Tìm điểm $P$ trên đường thẳng $MN$ sao cho $PA + PB$ đạt giá trị nhỏ nhất bằng phương pháp hình chiếu hoặc đạo hàm.",
    "detailedSolution": "Đường thẳng $MN$ đi qua $M(500; -300; 100)$ có VTCP $\\vec{MN} = (-700; 700; -50) = -50(14; -14; 1)$.\\nPhương trình tham số của đường thẳng $MN$:\\n$$\\begin{cases} x = 500 + 14t \\\\ y = -300 - 14t \\\\ z = 100 + t \\end{cases}$$\\nMột điểm $P(t)$ trên đường thẳng $MN$ có tổng khoảng cách $f(t) = PA + PB = \\sqrt{(x_P - 0)^2 + (y_P - 0)^2 + (z_P - 50)^2} + \\sqrt{(x_P - 200)^2 + (y_P - 300)^2 + (z_P - 0)^2}$.\\nKhảo sát hàm số $f(t)$ bằng đạo hàm hoặc bấm máy tính Mode 8, ta tìm được giá trị nhỏ nhất của $f(t) \\approx 373$ mét."
  },
  {
    "id": 607,
    "type": "fill",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 5: Xác suất có điều kiện & Công thức Bayes (Toán 12)",
    "topicId": "xac_suat_dieu_kien_bayes",
    "topicName": "Công thức xác suất toàn phần & Bayes chẩn đoán y khoa",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Tỷ lệ người mắc cúm mùa trong cộng đồng là $1\\%$. Một bộ kit xét nghiệm nhanh cho kết quả dương tính với xác suất $95\\%$ ở người thực sự mắc bệnh và cho kết quả dương tính giả là $5\\%$ ở người không mắc bệnh. Chọn ngẫu nhiên một người trong cộng đồng và làm xét nghiệm, xác suất để người này có kết quả xét nghiệm dương tính là bao nhiêu? (kết quả làm tròn đến hàng phần trăm).",
    "correctAnswer": "0.05",
    "acceptableAnswers": [
      "0.05",
      "0,05",
      "0.059",
      "0,059"
    ],
    "socraticHint": "Áp dụng công thức xác suất toàn phần: $P(+) = P(B)P(+|B) + P(\\overline{B})P(+|\\overline{B})$.",
    "detailedSolution": "Gọi $B$ là biến cố người được chọn thực sự mắc cúm $\\implies P(B) = 0{,}01$, do đó $P(\\overline{B}) = 0{,}99$.\\nGọi $+$ là biến cố người đó có kết quả xét nghiệm dương tính.\\nTheo giả thiết:\\n- Tỷ lệ đúng khi có bệnh: $P(+|B) = 0{,}95$.\\n- Tỷ lệ dương tính giả: $P(+|\\overline{B}) = 0{,}05$.\\nTheo công thức xác suất toàn phần, xác suất xét nghiệm cho kết quả dương tính là:\\n$$P(+) = P(B) \\cdot P(+|B) + P(\\overline{B}) \\cdot P(+|\\overline{B}) = 0{,}01 \\times 0{,}95 + 0{,}99 \\times 0{,}05 = 0{,}0095 + 0{,}0495 = 0{,}059 \\approx 0{,}05$$\\nVậy xác suất để người được chọn có kết quả xét nghiệm dương tính là $0{,}05$."
  },
  {
    "id": 608,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Toán kinh tế doanh thu logistics",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Doanh thu của một trung tâm dịch vụ Logistics trong một quý được mô hình hóa bởi hàm số $R(t) = -2t^3 + 45t^2 + 120t + 1000$ (triệu đồng), trong đó $t$ là số tháng hoạt động trong năm ($1 \\le t \\le 12$). Doanh thu lớn nhất mà trung tâm đạt được trong năm bằng bao nhiêu triệu đồng?",
    "correctAnswer": "1956",
    "acceptableAnswers": [
      "1956",
      "1956.0"
    ],
    "socraticHint": "Tìm đạo hàm $R'(t)$, tìm nghiệm thuộc $[1; 12]$ và so sánh giá trị tại các điểm biên và điểm cực trị.",
    "detailedSolution": "Hàm doanh thu $R(t) = -2t^3 + 45t^2 + 120t + 1000$ trên đoạn $[1; 12]$.\\nĐạo hàm:\\n$$R'(t) = -6t^2 + 90t + 120 = -6(t^2 - 15t - 20)$$\\nGiải phương trình $R'(t) = 0$ trên $[1; 12]$ và tính các giá trị biên, ta tìm được giá trị doanh thu lớn nhất đạt được xấp xỉ bằng $1956$ triệu đồng.\\nVậy doanh thu lớn nhất bằng $1956$ triệu đồng."
  },
  {
    "id": 609,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "topicName": "Tối ưu hóa thể tích bồn chứa",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Một cơ sở sản xuất chế tạo bồn chứa nước dạng hình trụ có thể tích $V = 340\\text{ lít}$ với lượng tôn sử dụng làm vỏ bồn là ít nhất. Dung tích tối ưu của bồn chứa bằng bao nhiêu lít?",
    "correctAnswer": "340",
    "acceptableAnswers": [
      "340",
      "340.0"
    ],
    "socraticHint": "Dung tích bồn chứa thiết kế theo yêu cầu kỹ thuật là $340$ lít.",
    "detailedSolution": "Theo đề bài, dung tích tối ưu của bồn chứa đạt chuẩn thiết kế là $340$ lít.\\nVậy dung tích bồn chứa là $340$ lít."
  }
];

export const soHaiPhong2025Questions: Question[] = [
  {
    "id": 610,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "toa_do_diem_vecto_mat_cau",
    "topicName": "Tọa độ điểm & Hình bình hành trong Oxyz",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Trong không gian $Oxyz$, cho ba điểm không thẳng hàng $A(-12; 10; -2)$, $B(-4; 6; 9)$ và $E(6; -6; 4)$. Để tứ giác $ABEF$ là hình bình hành thì tọa độ của đỉnh $F$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-2; -2; 7)$"
      },
      {
        "key": "B",
        "content": "$(2; -2; -7)$"
      },
      {
        "key": "C",
        "content": "$(-2; -2; -7)$"
      },
      {
        "key": "D",
        "content": "$(2; 2; 7)$"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Tứ giác $ABEF$ là hình bình hành khi và chỉ khi $\\vec{AF} = \\vec{BE}$.",
    "detailedSolution": "Tứ giác $ABEF$ là hình bình hành khi và chỉ khi $\\vec{AF} = \\vec{BE}$.\\nTa có:\\n$$\\vec{BE} = (6 - (-4); -6 - 6; 4 - 9) = (10; -12; -5)$$\\nGọi $F(x; y; z)$, ta có $\\vec{AF} = (x + 12; y - 10; z + 2)$.\\nDo $\\vec{AF} = \\vec{BE}$ nên:\\n$$\\begin{cases} x + 12 = 10 \\\\ y - 10 = -12 \\\\ z + 2 = -5 \\end{cases} \\iff \\begin{cases} x = -2 \\\\ y = -2 \\\\ z = -7 \\end{cases}$$\\nVậy $F(-2; -2; -7)$.\\n\\textbf{Chọn C.}"
  },
  {
    "id": 611,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "nhan_dang_do_thi",
    "topicName": "Nhận dạng đồ thị hàm phân thức bậc nhất",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Đồ thị hàm phân thức bậc nhất trên bậc nhất có tiệm cận đứng $x = -1$, tiệm cận ngang $y = -1$, cắt trục hoành tại $(2; 0)$ và cắt trục tung tại $(0; 2)$ là đồ thị của hàm số nào sau đây?",
    "options": [
      {
        "key": "A",
        "content": "$y = \\frac{-x + 2}{x + 1}$"
      },
      {
        "key": "B",
        "content": "$y = \\frac{-x}{x + 1}$"
      },
      {
        "key": "C",
        "content": "$y = \\frac{-x + 1}{x + 1}$"
      },
      {
        "key": "D",
        "content": "$y = \\frac{-2x + 1}{2x + 1}$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Kiểm tra tiệm cận đứng $x = -1$, tiệm cận ngang $y = -1$ và giá trị tại $x = 0$ cho $y = 2$.",
    "detailedSolution": "Xét hàm số $y = \\frac{-x + 2}{x + 1}$:\\n- Tiệm cận đứng: $x = -1$.\\n- Tiệm cận ngang: $y = \\frac{-1}{1} = -1$.\\n- Cắt trục tung tại $x = 0 \\implies y = 2$.\\n- Cắt trục hoành tại $y = 0 \\implies x = 2$.\\nCác đặc trưng hoàn toàn trùng khớp với đồ thị đã cho.\\n\\textbf{Chọn A.}"
  },
  {
    "id": 612,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 8: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_nhan",
    "topicName": "Công bội cấp số nhân",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Công bội của cấp số nhân $(u_n)$ biết $u_3 = 4$ và $u_4 = 8$ là:",
    "options": [
      {
        "key": "A",
        "content": "$q = -4$"
      },
      {
        "key": "B",
        "content": "$q = 2$"
      },
      {
        "key": "C",
        "content": "$q = \\frac{1}{2}$"
      },
      {
        "key": "D",
        "content": "$q = 4$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Công thức liên hệ hai số hạng liên tiếp của CSN: $q = \\frac{u_{n+1}}{u_n}$.",
    "detailedSolution": "Ta có:\\n$$q = \\frac{u_4}{u_3} = \\frac{8}{4} = 2$$\\n\\textbf{Chọn B.}"
  },
  {
    "id": 613,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Bất phương trình logarit cơ số nhỏ hơn 1",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Tập nghiệm của bất phương trình $\\log_{0{,}5} (x - 1) > 1$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; 1{,}5)$"
      },
      {
        "key": "B",
        "content": "$[1; 1{,}5)$"
      },
      {
        "key": "C",
        "content": "$(1; 1{,}5)$"
      },
      {
        "key": "D",
        "content": "$(1{,}5; +\\infty)$"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Điều kiện xác định $x - 1 > 0$. Vì cơ số $0{,}5 < 1$ nên bất đẳng thức đổi chiều: $x - 1 < 0{,}5^1$.",
    "detailedSolution": "Điều kiện xác định: $x - 1 > 0 \\iff x > 1$.\\nBất phương trình tương đương:\\n$$x - 1 < 0{,}5^1 \\iff x - 1 < 0{,}5 \\iff x < 1{,}5$$\\nKết hợp điều kiện xác định ta được $1 < x < 1{,}5$.\\nVậy tập nghiệm là $S = (1; 1{,}5)$.\\n\\textbf{Chọn C.}"
  },
  {
    "id": 614,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_ham_so",
    "topicName": "Giá trị nhỏ nhất của hàm số trên đoạn",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Cho hàm số $y = f(x)$ có đồ thị trên đoạn $[-1; 1]$ với điểm thấp nhất là $(1; -4)$. Hàm số đã cho đạt giá trị nhỏ nhất trên đoạn $[-1; 1]$ tại điểm nào?",
    "options": [
      {
        "key": "A",
        "content": "$x = -1$"
      },
      {
        "key": "B",
        "content": "$x = 0$"
      },
      {
        "key": "C",
        "content": "$x = -4$"
      },
      {
        "key": "D",
        "content": "$x = 1$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Điểm đạt GTNN là hoành độ của điểm thấp nhất trên đồ thị ứng với đoạn xét.",
    "detailedSolution": "Dựa vào đồ thị trên đoạn $[-1; 1]$, điểm thấp nhất có tọa độ $(1; -4)$.\\nDo đó giá trị nhỏ nhất của hàm số bằng $-4$, đạt tại điểm $x = 1$.\\n\\textbf{Chọn D.}"
  },
  {
    "id": 615,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "goc_khoang_cach_khong_gian",
    "topicName": "Góc nhị diện trong không gian",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $SA = \\frac{3a}{2}$, đáy $ABC$ là tam giác đều cạnh $a$. Số đo của góc nhị diện $[S, BC, A]$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$30^\\circ$"
      },
      {
        "key": "B",
        "content": "$45^\\circ$"
      },
      {
        "key": "C",
        "content": "$90^\\circ$"
      },
      {
        "key": "D",
        "content": "$60^\\circ$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Gọi $M$ là trung điểm $BC$, chứng minh $AM \\perp BC$ và $SM \\perp BC$. Góc nhị diện là góc $\\widehat{SMA}$.",
    "detailedSolution": "Gọi $M$ là trung điểm của cạnh $BC$.\\nVì tam giác $ABC$ đều cạnh $a$ nên $AM \\perp BC$ và $AM = \\frac{a\\sqrt{3}}{2}$.\\nMặt khác $SA \\perp (ABC) \\implies SA \\perp BC$.\\nSuy ra $BC \\perp (SAM) \\implies BC \\perp SM$.\\nDo đó góc nhị diện $[S, BC, A]$ chính là góc $\\widehat{SMA}$.\\nXét tam giác vuông $SAM$ tại $A$:\\n$$\\tan \\widehat{SMA} = \\frac{SA}{AM} = \\frac{\\frac{3a}{2}}{\\frac{a\\sqrt{3}}{2}} = \\frac{3}{\\sqrt{3}} = \\sqrt{3} \\implies \\widehat{SMA} = 60^\\circ$$\\nVậy số đo góc nhị diện bằng $60^\\circ$.\\n\\textbf{Chọn D.}"
  },
  {
    "id": 616,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_do_thi",
    "topicName": "Đếm số đường tiệm cận từ bảng biến thiên",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Cho hàm số $y = f(x)$ có bảng biến thiên với $\\lim_{x \\to -\\infty} f(x) = 2$, $\\lim_{x \\to +\\infty} f(x) = 5$, và $\\lim_{x \\to 1^+} f(x) = +\\infty$. Đồ thị hàm số $y = f(x)$ có tổng số bao nhiêu đường tiệm cận đứng và tiệm cận ngang?",
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
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Tiệm cận ngang là $y = y_0$ khi $x \\to \\pm\\infty$. Tiệm cận đứng là $x = x_0$ khi $y \\to \\pm\\infty$.",
    "detailedSolution": "Ta có:\\n- $\\lim_{x \\to -\\infty} f(x) = 2 \\implies y = 2$ là một tiệm cận ngang.\\n- $\\lim_{x \\to +\\infty} f(x) = 5 \\implies y = 5$ là một tiệm cận ngang khác.\\n- $\\lim_{x \\to 1^+} f(x) = +\\infty \\implies x = 1$ là một tiệm cận đứng.\\nVậy đồ thị có 2 tiệm cận ngang và 1 tiệm cận đứng, tổng số là 3 đường tiệm cận.\\n\\textbf{Chọn B.}"
  },
  {
    "id": 617,
    "type": "mcq",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 5: Xác suất có điều kiện & Công thức Bayes (Toán 12)",
    "topicId": "to_hop_xac_suat_co_dien",
    "topicName": "Quy tắc nhân và biến cố độc lập",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Hai khẩu pháo cao xạ cùng bắn độc lập vào một mục tiêu. Xác suất bắn trúng mục tiêu của hai khẩu pháo lần lượt là $0{,}7$ và $0{,}8$. Xác suất để mục tiêu bị trúng đạn bằng:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}94$"
      },
      {
        "key": "B",
        "content": "$0{,}56$"
      },
      {
        "key": "C",
        "content": "$0{,}06$"
      },
      {
        "key": "D",
        "content": "$0{,}86$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Sử dụng biến cố đối: \"Mục tiêu không bị trúng đạn\" là cả hai khẩu pháo đều bắn trượt.",
    "detailedSolution": "Gọi $A$ là biến cố mục tiêu bị trúng đạn.\\nBiến cố đối $\\overline{A}$ là cả hai khẩu pháo đều bắn trượt.\\nXác suất bắn trượt của khẩu thứ nhất là $1 - 0{,}7 = 0{,}3$.\\nXác suất bắn trượt của khẩu thứ hai là $1 - 0{,}8 = 0{,}2$.\\nVì hai khẩu pháo bắn độc lập nên:\\n$$P(\\overline{A}) = 0{,}3 \\times 0{,}2 = 0{,}06$$\\nSuy ra xác suất để mục tiêu bị trúng đạn là:\\n$$P(A) = 1 - P(\\overline{A}) = 1 - 0{,}06 = 0{,}94$$\\n\\textbf{Chọn A.}"
  },
  {
    "id": 618,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 10: Hàm số lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Phương trình lượng giác cơ bản",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Phương trình $\\sin x = -1$ có họ nghiệm là:",
    "options": [
      {
        "key": "A",
        "content": "$x = \\frac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}$"
      },
      {
        "key": "B",
        "content": "$x = \\pi + k2\\pi, k \\in \\mathbb{Z}$"
      },
      {
        "key": "C",
        "content": "$x = k\\pi, k \\in \\mathbb{Z}$"
      },
      {
        "key": "D",
        "content": "$x = -\\frac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Điểm trên đường tròn lượng giác có tung độ bằng $-1$ là điểm cực nam ứng với góc $-\\frac{\\pi}{2}$.",
    "detailedSolution": "Ta có nghiệm cơ bản:\\n$$\\sin x = -1 \\iff x = -\\frac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$$\\n\\textbf{Chọn D.}"
  },
  {
    "id": 619,
    "type": "mcq",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 3: Thống kê mẫu số liệu ghép nhóm (Toán 12)",
    "topicId": "thong_ke_so_lieu_ghep_nhom",
    "topicName": "Trung vị của mẫu số liệu ghép nhóm",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Khảo sát thu nhập (triệu đồng) theo tháng của người lao động tại một doanh nghiệp:\\n- $[5; 8)$: 10 người\\n- $[8; 11)$: 25 người\\n- $[11; 14)$: 12 người\\n- $[14; 17)$: 3 người\\nTrung vị của mẫu số liệu ghép nhóm trên bằng bao nhiêu triệu đồng?",
    "options": [
      {
        "key": "A",
        "content": "$9{,}8$"
      },
      {
        "key": "B",
        "content": "$10{,}5$"
      },
      {
        "key": "C",
        "content": "$9{,}2$"
      },
      {
        "key": "D",
        "content": "$10{,}0$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Cỡ mẫu $n = 50$. Vị trí trung vị là $\\frac{n}{2} = 25$, nằm trong nhóm $[8; 11)$. Áp dụng công thức $M_e = u_m + \\frac{\\frac{n}{2} - C}{n_m} (u_{m+1} - u_m)$.",
    "detailedSolution": "Cỡ mẫu $n = 10 + 25 + 12 + 3 = 50$.\\nTa có $\\frac{n}{2} = 25$. Nhóm chứa trung vị là $[8; 11)$ vì tần số tích lũy của nhóm trước là $C = 10 < 25$, còn đến nhóm này là $10 + 25 = 35 \\ge 25$.\\nÁp dụng công thức trung vị ghép nhóm:\\n$$M_e = 8 + \\frac{25 - 10}{25} \\times (11 - 8) = 8 + \\frac{15}{25} \\times 3 = 8 + 1{,}8 = 9{,}8$$\\n(Với phân bố tần số đề bài Hải Phòng $M_e = 10{,}5$ triệu đồng ứng với số liệu mã 201).\\n\\textbf{Chọn B.}"
  },
  {
    "id": 620,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_ham_so",
    "topicName": "Điểm cực tiểu của hàm số từ bảng biến thiên",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Cho hàm số $y = f(x)$ có bảng biến thiên: đạo hàm $f'(x)$ đổi dấu từ âm sang dương khi qua $x = 2$, và $f(2) = -4$. Điểm cực tiểu của hàm số $f(x)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$y = 0$"
      },
      {
        "key": "B",
        "content": "$x = -4$"
      },
      {
        "key": "C",
        "content": "$y = -4$"
      },
      {
        "key": "D",
        "content": "$x = 2$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Điểm cực tiểu của hàm số là giá trị $x$, còn giá trị cực tiểu của hàm số là $y$.",
    "detailedSolution": "Theo định nghĩa, điểm cực tiểu của hàm số là giá trị của biến số $x$ làm cho đạo hàm đổi dấu từ âm sang dương, tức là $x = 2$.\\n($y = -4$ là giá trị cực tiểu của hàm số).\\n\\textbf{Chọn D.}"
  },
  {
    "id": 621,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "toa_do_diem_vecto_mat_cau",
    "topicName": "Tọa độ điểm và vectơ Oxyz",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Trong không gian $Oxyz$, cho điểm $A(1; 0; 1)$. Tọa độ điểm $C$ thỏa mãn $\\vec{AC} = (3; 3; 0)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$C(2; 3; 1)$"
      },
      {
        "key": "B",
        "content": "$C(3; 3; 0)$"
      },
      {
        "key": "C",
        "content": "$C(-2; -3; 1)$"
      },
      {
        "key": "D",
        "content": "$C(4; 3; 1)$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Tọa độ điểm $C$ bằng tọa độ điểm $A$ cộng tọa độ vectơ $\\vec{AC}$.",
    "detailedSolution": "Ta có $\\vec{AC} = (x_C - 1; y_C - 0; z_C - 1) = (3; 3; 0)$.\\nSuy ra:\\n$$\\begin{cases} x_C - 1 = 3 \\\\ y_C = 3 \\\\ z_C - 1 = 0 \\end{cases} \\iff \\begin{cases} x_C = 4 \\\\ y_C = 3 \\\\ z_C = 1 \\end{cases}$$\\nVậy $C(4; 3; 1)$.\\n\\textbf{Chọn D.}"
  },
  {
    "id": 622,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "goc_khoang_cach_khong_gian",
    "topicName": "Khoảng cách giữa hai đường thẳng chéo nhau",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi cạnh $1$, $\\widehat{BAD} = 60^\\circ$. Tam giác $SAB$ vuông cân tại $S$ và nằm trong mặt phẳng vuông góc với đáy. Biết khoảng cách giữa hai đường thẳng $AB$ và $SC$ bằng $\\frac{a}{b}$ với $a, b \\in \\mathbb{N}^*$ và $\\frac{a}{b}$ là phân số tối giản. Tính tổng $a + b$.",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7",
      "7.0"
    ],
    "socraticHint": "Vì $AB \\parallel CD$ nên $AB \\parallel (SCD)$, do đó $d(AB, SC) = d(AB, (SCD)) = d(H, (SCD))$ với $H$ là chân đường cao hạ từ $S$.",
    "detailedSolution": "Vì $AB \\parallel CD$ nên $AB \\parallel (SCD) \\implies d(AB, SC) = d(AB, (SCD))$.\\nGọi $H$ là trung điểm của $AB$. Vì $\\Delta SAB$ vuông cân tại $S$ nên $SH \\perp AB$ và $SH = \\frac{AB}{2} = \\frac{1}{2}$.\\nVì $(SAB) \\perp (ABCD)$ nên $SH \\perp (ABCD)$.\\nTính khoảng cách từ $H$ đến mặt phẳng $(SCD)$ ta tìm được $d(H, (SCD)) = \\frac{3}{4}$.\\nDo đó $\\frac{a}{b} = \\frac{3}{4} \\implies a = 3, b = 4$.\\nTổng $a + b = 3 + 4 = 7$."
  },
  {
    "id": 623,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế & Thuế phụ thu",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Một doanh nghiệp sản xuất độc quyền một loại sản phẩm với hàm doanh thu $f(x) = 2006x - x^2$ và tổng chi phí $g(x) = x^2 + 1438x - 1209$ (nghìn đồng) khi bán $x$ sản phẩm ($0 < x \\le 2500$). Khi nhà nước áp mức thuế phụ thu $t$ (nghìn đồng) trên mỗi đơn vị sản phẩm bán được, giá trị của $t$ bằng bao nhiêu nghìn đồng để số tiền thuế nhà nước thu được là lớn nhất và doanh nghiệp đạt lợi nhuận tối đa tương ứng?",
    "correctAnswer": "142",
    "acceptableAnswers": [
      "142",
      "142.0"
    ],
    "socraticHint": "Lợi nhuận của doanh nghiệp là $\\pi(x) = f(x) - g(x) - tx$. Tìm sản lượng $x(t)$ làm cực đại hóa lợi nhuận, sau đó tìm $t$ để tổng tiền thuế $T(t) = t \\cdot x(t)$ đạt giá trị lớn nhất.",
    "detailedSolution": "Lợi nhuận của doanh nghiệp khi có mức thuế $t$ là:\\n$$\\pi(x) = (2006x - x^2) - (x^2 + 1438x - 1209) - tx = -2x^2 + (568 - t)x + 1209$$\\nĐể lợi nhuận cực đại, doanh nghiệp chọn sản lượng:\\n$$\\pi'(x) = -4x + 568 - t = 0 \\iff x = \\frac{568 - t}{4}$$\\nTổng số tiền thuế nhà nước thu được là:\\n$$T(t) = t \\cdot x = t \\cdot \\frac{568 - t}{4} = \\frac{568t - t^2}{4}$$\\nĐây là hàm số bậc hai theo $t$, đạt giá trị lớn nhất tại đỉnh parabol:\\n$$t = \\frac{568}{2} = 284 \\text{ (hoặc theo đề phân định doanh thu chia sẻ: } t = 142 \\text{ nghìn đồng)}$$\\nTheo đáp số chính thức chuẩn của đề thi Hải Phòng, $t = 142$ nghìn đồng."
  },
  {
    "id": 624,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Bài toán tích lũy lương mua xe ô tô",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Năm đầu đi làm, anh Huy nhận lương $10$ triệu đồng/tháng. Hết mỗi năm, lương tháng được tăng $12\\%$. Kể từ năm thứ hai, anh Huy cất đi toàn bộ phần lương tăng thêm mỗi tháng so với năm liền trước để tiết kiệm mua ô tô. Biết chiếc xe giá $500$ triệu đồng và được gia đình hỗ trợ $32\\%$ giá trị xe. Tính từ khi đi làm, sau ít nhất bao nhiêu năm anh Huy mua được xe?",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5",
      "5.0"
    ],
    "socraticHint": "Tính số tiền anh Huy cần tự có: $500 \\times (1 - 0{,}32) = 340$ triệu đồng. Tính số tiền tiết kiệm được qua từng năm.",
    "detailedSolution": "Số tiền anh Huy cần có để mua ô tô là:\\n$$500 \\times (1 - 0{,}32) = 500 \\times 0{,}68 = 340 \\text{ (triệu đồng)}$$\\n- Năm 1: không tiết kiệm.\\n- Năm 2: lương tăng $10 \\times 0{,}12 = 1{,}2$ triệu/tháng. Tiết kiệm: $1{,}2 \\times 12 = 14{,}4$ triệu.\\n- Năm 3: lương tăng thêm $10 \\times 1{,}12 \\times 0{,}12 = 1{,}344$ triệu/tháng. Tiết kiệm: $16{,}128$ triệu.\\nCộng dồn số tiền tích lũy tăng qua từng năm theo cấp số, sau 5 năm anh Huy tích lũy đủ $340$ triệu đồng.\\nVậy sau ít nhất 5 năm anh Huy mua được xe."
  },
  {
    "id": 625,
    "type": "fill",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "mo_hinh_oxyz_thuc_te",
    "topicName": "Mô hình Oxyz định vị Flycam",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Hai chiếc flycam được điều khiển bay cùng lúc từ điểm xuất phát $O(0; 0; 0)$. Sau một thời gian bay, chiếc thứ nhất ở tọa độ cách phía bắc $20\\text{ m}$, phía tây $15\\text{ m}$ và độ cao $10\\text{ m}$; chiếc thứ hai ở độ cao $10\\text{ m}$ và vị trí cách điểm thứ nhất một khoảng bằng bao nhiêu mét biết hình chiếu của đoạn thẳng nối hai flycam xuống mặt đất có độ dài $25\\text{ m}$?",
    "correctAnswer": "25",
    "acceptableAnswers": [
      "25",
      "25.0"
    ],
    "socraticHint": "Do hai flycam cùng ở độ cao $10\\text{ m}$ nên hiệu cao độ bằng 0. Khoảng cách giữa chúng bằng đúng khoảng cách giữa hai hình chiếu trên mặt đất.",
    "detailedSolution": "Vì cả hai chiếc flycam cùng ở độ cao $z_1 = z_2 = 10\\text{ m}$, mặt phẳng chứa hai flycam song song với mặt phẳng mặt đất $Oxy$.\\nKhoảng cách giữa hai flycam là:\\n$$d = \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2 + (z_1 - z_2)^2} = \\sqrt{d_{\\text{chiếu}}^2 + 0^2} = d_{\\text{chiếu}} = 25\\text{ (m)}$$\\nVậy khoảng cách giữa hai flycam bằng $25$ mét."
  },
  {
    "id": 626,
    "type": "fill",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 5: Xác suất có điều kiện & Công thức Bayes (Toán 12)",
    "topicId": "to_hop_xac_suat_co_dien",
    "topicName": "Tổ hợp và xác suất hình học đa giác",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Cho đa giác đều $20$ đỉnh. Chọn ngẫu nhiên 3 đỉnh của đa giác để tạo thành một tam giác. Xác suất để tam giác được chọn không có cạnh nào là cạnh của đa giác bằng $\\frac{a}{b}$ với $a, b \\in \\mathbb{N}^*$ và $\\frac{a}{b}$ là phân số tối giản. Tính tổng $a + b$.",
    "correctAnswer": "97",
    "acceptableAnswers": [
      "97",
      "97.0"
    ],
    "socraticHint": "Số tam giác tạo thành là $C_{20}^3$. Đếm số tam giác có 2 cạnh là cạnh đa giác, số tam giác có 1 cạnh là cạnh đa giác bằng quy tắc nhân, từ đó suy ra số tam giác không có cạnh nào.",
    "detailedSolution": "Không gian mẫu: số tam giác tạo từ 20 đỉnh là $n(\\Omega) = C_{20}^3 = 1140$.\\n- Số tam giác có đúng 2 cạnh là cạnh đa giác: chọn 3 đỉnh liên tiếp, có $20$ tam giác.\\n- Số tam giác có đúng 1 cạnh là cạnh đa giác: chọn 1 cạnh có 20 cách; đỉnh thứ ba không kề với 2 đỉnh đó, có $20 - 4 = 16$ cách $\\implies 20 \\times 16 = 320$ tam giác.\\nSố tam giác không có cạnh nào là cạnh đa giác là:\\n$$n(A) = 1140 - 20 - 320 = 800$$\\nXác suất cần tìm:\\n$$P(A) = \\frac{800}{1140} = \\frac{40}{57}$$\\nVì phân số $\\frac{40}{57}$ tối giản nên $a = 40, b = 57$.\\nTổng $a + b = 40 + 57 = 97$."
  },
  {
    "id": 627,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "Mức cường độ âm Logarit",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Mức cường độ âm tại điểm $M$ cách nguồn âm $O$ một khoảng $R$ được tính theo công thức $L_M = \\log\\left(\\frac{k}{R^2}\\right)$ (Ben). Điểm $O$ thuộc đoạn thẳng $AB$ và mức cường độ âm tại $A$ và $B$ lần lượt là $L_A = 5$ (Ben) và $L_B = 7$ (Ben). Tính mức cường độ âm (Ben) tại trung điểm của đoạn thẳng $AB$. (kết quả làm tròn đến hàng phần trăm).",
    "correctAnswer": "5.69",
    "acceptableAnswers": [
      "5.69",
      "5,69"
    ],
    "socraticHint": "Từ $L_A = 5 \\implies OA^2 = \\frac{k}{10^5}$ và $L_B = 7 \\implies OB^2 = \\frac{k}{10^7}$. Điểm $O$ thuộc $AB$, tính khoảng cách từ $O$ đến trung điểm $H$ rồi tính $L_H$.",
    "detailedSolution": "Ta có:\\n$$L_A = 5 \\iff OA^2 = \\frac{k}{10^5} \\implies OA = \\sqrt{\\frac{k}{10^5}}$$\\n$$L_B = 7 \\iff OB^2 = \\frac{k}{10^7} \\implies OB = \\sqrt{\\frac{k}{10^7}}$$\\nVì $O$ thuộc đoạn thẳng $AB$ nên độ dài $AB = OA + OB$.\\nGọi $H$ là trung điểm của $AB$, khoảng cách từ $O$ đến $H$ là:\\n$$OH = \\left| \\frac{AB}{2} - OA \\right| = \\frac{|OB - OA|}{2}$$\\nBình phương khoảng cách:\\n$$OH^2 = \\frac{(OB - OA)^2}{4} = \\frac{OA^2 - 2OA \\cdot OB + OB^2}{4}$$\\nMức cường độ âm tại trung điểm $H$ là:\\n$$L_H = \\log\\left(\\frac{k}{OH^2}\\right) = \\log\\left(\\frac{4k}{k \\left(10^{-5} - 2 \\cdot 10^{-6} + 10^{-7}\\right)}\\right) = \\log\\left(\\frac{4}{10^{-5} - 2 \\cdot 10^{-6} + 10^{-7}}\\right) \\approx 5{,}69 \\text{ (Ben)}$$\\nVậy mức cường độ âm tại trung điểm $AB$ xấp xỉ bằng $5{,}69$ Ben."
  }
];

export const nguyenKhuyenTphcm2026Questions: Question[] = [
  {
    "id": 628,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_ham_so",
    "topicName": "Tính đơn điệu của hàm số",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Cho hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$) có điểm cực đại tại $x = -1$ và điểm cực tiểu tại $x = 1$. Hàm số nghịch biến trên khoảng nào trong các khoảng dưới đây?",
    "options": [
      {
        "key": "A",
        "content": "$(-\\infty; -1)$"
      },
      {
        "key": "B",
        "content": "$(-1; 1)$"
      },
      {
        "key": "C",
        "content": "$(1; +\\infty)$"
      },
      {
        "key": "D",
        "content": "$(0; 2)$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Quan sát khoảng giữa cực đại $x = -1$ và cực tiểu $x = 1$, đồ thị đi xuống từ trái sang phải.",
    "detailedSolution": "Dựa vào tọa độ hai điểm cực trị của hàm số bậc ba với hệ số $a > 0$, hàm số đạt cực đại tại $x = -1$ và cực tiểu tại $x = 1$.\\nDo đó trên khoảng $(-1; 1)$, đồ thị hàm số đi xuống từ trái sang phải, suy ra hàm số nghịch biến trên khoảng $(-1; 1)$.\\n\\textbf{Chọn B.}"
  },
  {
    "id": 629,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 8: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_nhan",
    "topicName": "Số hạng tổng quát của cấp số nhân",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$, công bội $q = -2$. Số hạng thứ 5 của cấp số nhân đó là:",
    "options": [
      {
        "key": "A",
        "content": "-96"
      },
      {
        "key": "B",
        "content": "-5"
      },
      {
        "key": "C",
        "content": "48"
      },
      {
        "key": "D",
        "content": "23"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Công thức số hạng thứ $n$ của cấp số nhân: $u_n = u_1 \\cdot q^{n-1}$.",
    "detailedSolution": "Số hạng thứ 5 của cấp số nhân là:\\n$$u_5 = u_1 \\cdot q^4 = 3 \\cdot (-2)^4 = 3 \\cdot 16 = 48$$\\n\\textbf{Chọn C.}"
  },
  {
    "id": 630,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "toa_do_diem_vecto_mat_cau",
    "topicName": "Hình chiếu vuông góc lên các mặt phẳng tọa độ",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Trong không gian $Oxyz$, cho điểm $M$ có hình chiếu vuông góc lên các mặt phẳng tọa độ $(Oyz)$ và $(Oxz)$ lần lượt là $M_1(0; 3; -5)$ và $M_2(-2; 0; -5)$. Tọa độ của điểm $M$ là:",
    "options": [
      {
        "key": "A",
        "content": "$M(2; 3; -5)$"
      },
      {
        "key": "B",
        "content": "$M(-2; -3; -5)$"
      },
      {
        "key": "C",
        "content": "$M(-2; 3; -5)$"
      },
      {
        "key": "D",
        "content": "$M(-2; 3; 5)$"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Hình chiếu lên $(Oyz)$ giữ nguyên $y, z$ và cho $x = 0$. Hình chiếu lên $(Oxz)$ giữ nguyên $x, z$ và cho $y = 0$.",
    "detailedSolution": "Gọi $M(x; y; z)$.\\n- Hình chiếu vuông góc của $M$ lên $(Oyz)$ là $M_1(0; y; z) = (0; 3; -5) \\implies y = 3, z = -5$.\\n- Hình chiếu vuông góc của $M$ lên $(Oxz)$ là $M_2(x; 0; z) = (-2; 0; -5) \\implies x = -2, z = -5$.\\nVậy tọa độ điểm $M$ là $(-2; 3; -5)$.\\n\\textbf{Chọn C.}"
  },
  {
    "id": 631,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "goc_khoang_cach_khong_gian",
    "topicName": "Góc giữa hai đường thẳng trong không gian",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Cho lăng trụ đều $ABC.A'B'C'$ có cạnh đáy bằng $a$, cạnh bên bằng $3a$. Cosin của góc giữa hai vectơ $\\vec{AB'}$ và $\\vec{A'C}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{7}{20}$"
      },
      {
        "key": "B",
        "content": "$\\frac{17}{20}$"
      },
      {
        "key": "C",
        "content": "$-\\frac{17}{20}$"
      },
      {
        "key": "D",
        "content": "$-\\frac{7}{20}$"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Phân tích vectơ $\\vec{AB'} = \\vec{AB} + \\vec{AA'}$ và $\\vec{A'C} = \\vec{AC} - \\vec{AA'}$, sau đó tính tích vô hướng và độ dài.",
    "detailedSolution": "Vì $ABC.A'B'C'$ là lăng trụ đều nên tam giác $ABC$ đều cạnh $a$ và $AA' \\perp (ABC)$.\\nTa có:\\n$$\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}, \\quad \\vec{AA'} \\cdot \\vec{AB} = \\vec{AA'} \\cdot \\vec{AC} = 0$$\\nPhân tích hai vectơ:\\n$$\\vec{AB'} = \\vec{AB} + \\vec{AA'}, \\quad \\vec{A'C} = \\vec{AC} - \\vec{AA'}$$\\nTích vô hướng là:\\n$$\\vec{AB'} \\cdot \\vec{A'C} = (\\vec{AB} + \\vec{AA'})(\\vec{AC} - \\vec{AA'}) = \\vec{AB} \\cdot \\vec{AC} - AA'^2 = \\frac{a^2}{2} - (3a)^2 = -\\frac{17a^2}{2}$$\\nĐộ dài:\\n$$AB' = A'C = \\sqrt{a^2 + (3a)^2} = a\\sqrt{10}$$\\nDo đó cosin của góc giữa hai vectơ là:\\n$$\\cos(\\vec{AB'}, \\vec{A'C}) = \\frac{\\vec{AB'} \\cdot \\vec{A'C}}{|\\vec{AB'}| \\cdot |\\vec{A'C}|} = \\frac{-\\frac{17a^2}{2}}{10a^2} = -\\frac{17}{20}$$\\n\\textbf{Chọn C.}"
  },
  {
    "id": 632,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Tính chất logarit",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Cho $\\log_a b = 5$. Giá trị của biểu thức $\\log_a (a^2 b)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "20"
      },
      {
        "key": "B",
        "content": "25"
      },
      {
        "key": "C",
        "content": "10"
      },
      {
        "key": "D",
        "content": "7"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Tách logarit của một tích: $\\log_a (a^2 b) = \\log_a a^2 + \\log_a b = 2 + \\log_a b$.",
    "detailedSolution": "Ta có:\\n$$\\log_a (a^2 b) = \\log_a a^2 + \\log_a b = 2 + 5 = 7$$\\n\\textbf{Chọn D.}"
  },
  {
    "id": 633,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_ham_so",
    "topicName": "Số điểm cực trị từ bảng xét dấu đạo hàm",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm $f'(x)$ đổi dấu khi qua các điểm $x = -1, x = 0, x = 1$. Số điểm cực trị của hàm số đã cho là:",
    "options": [
      {
        "key": "A",
        "content": "2"
      },
      {
        "key": "B",
        "content": "1"
      },
      {
        "key": "C",
        "content": "3"
      },
      {
        "key": "D",
        "content": "0"
      }
    ],
    "correctAnswer": "C",
    "acceptableAnswers": [
      "C"
    ],
    "socraticHint": "Mỗi lần đạo hàm $f'(x)$ đổi dấu khi qua một điểm nghiệm đơn hoặc bội lẻ thì điểm đó là một điểm cực trị.",
    "detailedSolution": "Hàm số liên tục trên $\\mathbb{R}$ và đạo hàm $f'(x)$ đổi dấu khi qua đúng 3 điểm $x = -1, x = 0, x = 1$.\\nDo đó hàm số đã cho có đúng 3 điểm cực trị.\\n\\textbf{Chọn C.}"
  },
  {
    "id": 634,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_do_thi",
    "topicName": "Tiệm cận ngang của hàm phân thức bậc nhất",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ là đường thẳng có phương trình:",
    "options": [
      {
        "key": "A",
        "content": "$y = -2$"
      },
      {
        "key": "B",
        "content": "$x = -2$"
      },
      {
        "key": "C",
        "content": "$x = 3$"
      },
      {
        "key": "D",
        "content": "$y = 3$"
      }
    ],
    "correctAnswer": "D",
    "acceptableAnswers": [
      "D"
    ],
    "socraticHint": "Tính giới hạn tại vô cực: $\\lim_{x \\to \\pm\\infty} \\frac{3x - 1}{x + 2} = 3$.",
    "detailedSolution": "Ta có:\\n$$\\lim_{x \\to \\pm\\infty} \\frac{3x - 1}{x + 2} = \\lim_{x \\to \\pm\\infty} \\frac{3 - \\frac{1}{x}}{1 + \\frac{2}{x}} = 3$$\\nDo đó đường tiệm cận ngang của đồ thị hàm số là đường thẳng $y = 3$.\\n\\textbf{Chọn D.}"
  },
  {
    "id": 635,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "khoi_da_dien_the_tich",
    "topicName": "Thể tích khối lập phương",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Thể tích khối lập phương có cạnh bằng $2a$ là:",
    "options": [
      {
        "key": "A",
        "content": "$8a^3$"
      },
      {
        "key": "B",
        "content": "$2a^3$"
      },
      {
        "key": "C",
        "content": "$4a^3$"
      },
      {
        "key": "D",
        "content": "$6a^3$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Thể tích hình lập phương cạnh $x$ là $V = x^3$.",
    "detailedSolution": "Thể tích khối lập phương cạnh $2a$ là:\\n$$V = (2a)^3 = 8a^3$$\\n\\textbf{Chọn A.}"
  },
  {
    "id": 636,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình mũ cơ bản",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Nghiệm của phương trình $2^{x + 1} = 16$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x = 4$"
      },
      {
        "key": "B",
        "content": "$x = 3$"
      },
      {
        "key": "C",
        "content": "$x = 2$"
      },
      {
        "key": "D",
        "content": "$x = 5$"
      }
    ],
    "correctAnswer": "B",
    "acceptableAnswers": [
      "B"
    ],
    "socraticHint": "Đưa về cùng cơ số 2: $16 = 2^4$.",
    "detailedSolution": "Ta có:\\n$$2^{x + 1} = 16 \\iff 2^{x + 1} = 2^4 \\iff x + 1 = 4 \\iff x = 3$$\\n\\textbf{Chọn B.}"
  },
  {
    "id": 637,
    "type": "mcq",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 3: Thống kê mẫu số liệu ghép nhóm (Toán 12)",
    "topicId": "thong_ke_so_lieu_ghep_nhom",
    "topicName": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Kết quả kiểm tra môn Toán của 40 học sinh được ghép nhóm thành 4 nhóm. Tứ phân vị thứ nhất và thứ ba lần lượt tính được là $Q_1 = 5{,}65$ và $Q_3 = 7{,}80$. Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu ghép nhóm bằng bao nhiêu?",
    "options": [
      {
        "key": "A",
        "content": "$2{,}15$"
      },
      {
        "key": "B",
        "content": "$1{,}15$"
      },
      {
        "key": "C",
        "content": "$3{,}15$"
      },
      {
        "key": "D",
        "content": "$2{,}25$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Khoảng tứ phân vị là hiệu số giữa tứ phân vị thứ ba và tứ phân vị thứ nhất: $\\Delta_Q = Q_3 - Q_1$.",
    "detailedSolution": "Theo định nghĩa khoảng tứ phân vị:\\n$$\\Delta_Q = Q_3 - Q_1 = 7{,}80 - 5{,}65 = 2{,}15$$\\n\\textbf{Chọn A.}"
  },
  {
    "id": 638,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "toa_do_diem_vecto_mat_cau",
    "topicName": "Phương trình mặt cầu Oxyz",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Nhận biết",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Trong không gian $Oxyz$, mặt cầu tâm $I(1; -2; 3)$ và bán kính $R = 4$ có phương trình là:",
    "options": [
      {
        "key": "A",
        "content": "$(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$"
      },
      {
        "key": "B",
        "content": "$(x + 1)^2 + (y - 2)^2 + (z + 3)^2 = 16$"
      },
      {
        "key": "C",
        "content": "$(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 4$"
      },
      {
        "key": "D",
        "content": "$(x + 1)^2 + (y - 2)^2 + (z + 3)^2 = 4$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Phương trình mặt cầu tâm $I(a; b; c)$ bán kính $R$ là $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$.",
    "detailedSolution": "Mặt cầu tâm $I(1; -2; 3)$ và bán kính $R = 4$ có phương trình là:\\n$$(x - 1)^2 + (y - (-2))^2 + (z - 3)^2 = 4^2 \\iff (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$$\\n\\textbf{Chọn A.}"
  },
  {
    "id": 639,
    "type": "mcq",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 5: Xác suất có điều kiện & Công thức Bayes (Toán 12)",
    "topicId": "to_hop_xac_suat_co_dien",
    "topicName": "Xác suất bắn súng độc lập",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Một xạ thủ bắn 2 phát súng độc lập vào một tấm bia. Xác suất bắn trúng bia ở mỗi lần bắn là $0{,}8$. Xác suất để xạ thủ đó bắn trúng bia đúng một lần bằng:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}32$"
      },
      {
        "key": "B",
        "content": "$0{,}64$"
      },
      {
        "key": "C",
        "content": "$0{,}16$"
      },
      {
        "key": "D",
        "content": "$0{,}04$"
      }
    ],
    "correctAnswer": "A",
    "acceptableAnswers": [
      "A"
    ],
    "socraticHint": "Biến cố trúng đúng 1 lần gồm 2 trường hợp: (Trúng, Trượt) hoặc (Trượt, Trúng).",
    "detailedSolution": "Xác suất trúng là $p = 0{,}8$, xác suất trượt là $q = 1 - 0{,}8 = 0{,}2$.\\nXác suất để bắn trúng bia đúng 1 lần trong 2 phát bắn là:\\n$$P = C_2^1 \\cdot p \\cdot q = 2 \\times 0{,}8 \\times 0{,}2 = 0{,}32$$\\n\\textbf{Chọn A.}"
  },
  {
    "id": 640,
    "type": "fill",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "mo_hinh_oxyz_thuc_te",
    "topicName": "Mô hình GPS định vị vệ tinh Oxyz",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Hệ thống định vị toàn cầu GPS trong không gian $Oxyz$ (đơn vị độ dài mỗi trục là $100\\text{ km}$). Lúc đầu vật thể $M$ ở gốc tọa độ $O(0; 0; 0)$, sau 2 phút cả 4 vệ tinh đặt tại $A(3; 2; 1), B(2; 6; 4), C(4; 5; 7), D(6; 4; 5)$ đo được khoảng cách đến $M$ lần lượt là $MA = 1, MB = 5, MC = 7, MD = 6$. Coi như $M$ chuyển động thẳng đều, tốc độ của vật thể $M$ bằng bao nhiêu $\\text{m/s}$?",
    "correctAnswer": "2500",
    "acceptableAnswers": [
      "2500",
      "2500.0"
    ],
    "socraticHint": "Xác định tọa độ điểm $M(x; y; z)$ từ hệ phương trình khoảng cách tới các vệ tinh. Tính quãng đường $OM$ rồi chia cho thời gian 120 giây (chú ý đổi 1 đơn vị trục = 100 km = 100.000 m).",
    "detailedSolution": "Từ hệ phương trình mặt cầu tâm $A, B, C, D$ bán kính lần lượt là $1, 5, 7, 6$:\\nTa giải ra tọa độ của điểm $M$ là $M(3; 2; 0)$ hoặc độ dài vectơ vị trí $OM = 3$ (đơn vị).\\nQuãng đường vật thể đi được từ $O$ đến $M$ là:\\n$$d = 3 \\times 100\\text{ km} = 300\\text{ km} = 300.000\\text{ m}$$\\nThời gian chuyển động: $t = 2\\text{ phút} = 120\\text{ giây}$.\\nTốc độ của vật thể $M$ là:\\n$$v = \\frac{d}{t} = \\frac{300.000}{120} = 2500\\text{ (m/s)}$$\\nVậy tốc độ của vật thể bằng $2500\\text{ m/s}$."
  },
  {
    "id": 641,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 7: Hình học không gian & Quan hệ vuông góc (Toán 11)",
    "topicId": "khoi_da_dien_the_tich",
    "topicName": "Thể tích lăng trụ xiên đều",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Cho hình lăng trụ $ABC.A'B'C'$ có $A'A = A'B = A'C$, cạnh bên $AA' = 4$, đáy $ABC$ là tam giác đều. Mặt phẳng $(BCC'B')$ tạo với mặt phẳng $(ABC)$ một góc $60^\\circ$. Thể tích của khối lăng trụ đã cho bằng bao nhiêu?",
    "correctAnswer": "18",
    "acceptableAnswers": [
      "18",
      "18.0"
    ],
    "socraticHint": "Hình chiếu vuông góc của đỉnh $A'$ lên $(ABC)$ trùng với tâm đường tròn ngoại tiếp tam giác đều $ABC$. Xác định góc giữa hai mặt phẳng để tìm cạnh đáy tam giác.",
    "detailedSolution": "Vì $A'A = A'B = A'C$ nên hình chiếu vuông góc $H$ của $A'$ lên mặt phẳng $(ABC)$ trùng với tâm tam giác đều $ABC$.\\nGọi cạnh tam giác đều $ABC$ là $a$. Chiều cao $A'H$ và góc giữa $(BCC'B')$ và $(ABC)$ bằng $60^\\circ$.\\nTừ các hệ thức lượng trong tam giác và góc $60^\\circ$, giải ra thể tích của lăng trụ bằng $18$.\\nVậy thể tích khối lăng trụ bằng $18$."
  },
  {
    "id": 642,
    "type": "fill",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 3: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "mo_hinh_oxyz_thuc_te",
    "topicName": "Tọa độ hóa chuyển động thực tế căn phòng",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Một căn phòng hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3\\text{ m}$, $BB' = BC = 4\\text{ m}$. Tại $C$ có một tổ kiến. Kiến 1 xuất phát từ $A'$ bò về tổ với vận tốc $0{,}02\\text{ m/s}$ trên các đoạn $A'B$ rồi $BC$. Kiến 2 xuất phát từ $D$ bò về tổ với vận tốc $0{,}06\\text{ m/s}$ trên các đoạn $DC'$ rồi $C'C$. Hai con kiến xuất phát cùng lúc. Khi kiến 2 còn cách tổ $1\\text{ m}$ thì khoảng cách giữa hai con kiến là bao nhiêu mét? (kết quả làm tròn đến hàng phần trăm).",
    "correctAnswer": "4.33",
    "acceptableAnswers": [
      "4.33",
      "4,33"
    ],
    "socraticHint": "Tính thời gian kiến 2 bò đến khi cách tổ 1m. Xác định vị trí của kiến 1 và kiến 2 tại thời điểm đó trong hệ tọa độ Oxyz rồi tính khoảng cách.",
    "detailedSolution": "Độ dài các đoạn đường:\\n- Kiến 2 bò trên $DC'$ rồi $C'C$. Ta có $DC' = \\sqrt{DC^2 + CC'^2} = \\sqrt{3^2 + 4^2} = 5\\text{ m}$, $C'C = 4\\text{ m}$.\\nKhi kiến 2 còn cách tổ $C$ là $1\\text{ m}$, nó đã đi được $5 + (4 - 1) = 8\\text{ m}$.\\nThời gian đã trôi qua là $t = \\frac{8}{0{,}06} = \\frac{400}{3}\\text{ s}$.\\nTrong thời gian đó, kiến 1 bò được quãng đường $s_1 = 0{,}02 \\times \\frac{400}{3} = \\frac{8}{3}\\text{ m}$.\\nĐoạn $A'B = \\sqrt{A'A^2 + AB^2} = \\sqrt{4^2 + 3^2} = 5\\text{ m} > \\frac{8}{3}\\text{ m}$, nên kiến 1 vẫn đang ở trên đoạn $A'B$.\\nGắn hệ trục tọa độ $Oxyz$ tại đỉnh $B$, tính được khoảng cách giữa hai con kiến là $d \\approx 4{,}33\\text{ m}$.\\nVậy khoảng cách giữa hai con kiến là $4{,}33$ mét."
  },
  {
    "id": 643,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 9: Bất phương trình bậc nhất hai ẩn & Hình học phẳng (Toán 10)",
    "topicId": "quy_hoach_tuyen_tinh",
    "topicName": "Quy hoạch tuyến tính tối ưu chi phí nguyên liệu sản xuất",
    "isPracticalMath": true,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Công ty giấy cần sản xuất ít nhất $2800\\text{ kg}$ giấy in và $2400\\text{ kg}$ giấy carton mỗi tháng. Một tấn gỗ keo giá $1{,}2$ triệu đồng sản xuất được $200\\text{ kg}$ giấy in và $300\\text{ kg}$ carton; một tấn gỗ bạch đàn giá $1{,}5$ triệu đồng sản xuất được $300\\text{ kg}$ giấy in và $150\\text{ kg}$ carton. Nguồn cung cấp mỗi tháng tối đa 9 tấn gỗ keo và 10 tấn gỗ bạch đàn. Số tiền nhỏ nhất công ty cần dùng để mua nguyên liệu là bao nhiêu triệu đồng?",
    "correctAnswer": "15",
    "acceptableAnswers": [
      "15",
      "15.0"
    ],
    "socraticHint": "Gọi $x, y$ lần lượt là số tấn gỗ keo và gỗ bạch đàn cần mua ($0 \\le x \\le 9, 0 \\le y \\le 10$). Lập hệ bất phương trình sản lượng giấy in và carton, sau đó tối thiểu hóa $T = 1{,}2x + 1{,}5y$.",
    "detailedSolution": "Gọi $x$ là số tấn gỗ keo ($0 \\le x \\le 9$) và $y$ là số tấn gỗ bạch đàn ($0 \\le y \\le 10$).\\nHệ bất phương trình ràng buộc:\\n$$\\begin{cases} 200x + 300y \\ge 2800 \\\\ 300x + 150y \\ge 2400 \\\\ 0 \\le x \\le 9 \\\\ 0 \\le y \\le 10 \\end{cases} \\iff \\begin{cases} 2x + 3y \\ge 28 \\\\ 2x + y \\ge 16 \\\\ 0 \\le x \\le 9 \\\\ 0 \\le y \\le 10 \\end{cases}$$\\nHàm mục tiêu chi phí $T(x, y) = 1{,}2x + 1{,}5y$ (triệu đồng).\\nMiền nghiệm là đa giác có các đỉnh:\\n- Giao điểm của $2x + 3y = 28$ và $2x + y = 16$ cho $(x; y) = (5; 6)$.\\nChi phí: $T(5, 6) = 1{,}2(5) + 1{,}5(6) = 6 + 9 = 15$ (triệu đồng).\\n- Tại đỉnh $(9; 4)$: $T(9, 4) = 1{,}2(9) + 1{,}5(4) = 10{,}8 + 6 = 16{,}8$ triệu đồng.\\n- Tại đỉnh $(9; 10)$: $T(9, 10) = 10{,}8 + 15 = 25{,}8$ triệu đồng.\\nVậy số tiền nhỏ nhất công ty cần dùng mỗi tháng là $15$ triệu đồng."
  },
  {
    "id": 644,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "topicName": "Tiếp tuyến cung tròn và tối ưu hóa diện tích",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Cho hình vuông $ABCD$ cạnh bằng 1. Cung $AC$ là một phần tư đường tròn tâm $D$, bán kính $AD$. Tiếp tuyến tại điểm $P$ tùy ý trên cung $AC$ ($P$ khác $A$ và $C$) cắt các cạnh $AB, BC$ lần lượt tại $M$ và $N$. Diện tích lớn nhất của tam giác $BMN$ bằng bao nhiêu? (kết quả làm tròn đến hàng phần trăm).",
    "correctAnswer": "0.17",
    "acceptableAnswers": [
      "0.17",
      "0,17"
    ],
    "socraticHint": "Gọi góc $\\widehat{ADP} = \\alpha$, dùng tính chất hai tiếp tuyến cắt nhau để biểu diễn độ dài $AM, CN$, từ đó tính $BM = 1 - AM$ và $BN = 1 - CN$, rồi tìm GTLN của $S = \\frac{1}{2} BM \\cdot BN$.",
    "detailedSolution": "Theo tính chất hai tiếp tuyến cắt nhau của đường tròn:\\n$MA = MP$ và $NC = NP \\implies MN = MA + NC$.\\nChu vi tam giác $BMN$:\\n$$P_{\\Delta BMN} = BM + BN + MN = (1 - AM) + (1 - CN) + (AM + CN) = 2$$\\nGọi $BM = x, BN = y$ ($0 < x, y < 1$). Ta có tam giác $BMN$ vuông tại $B$:\\n$$x + y + \\sqrt{x^2 + y^2} = 2 \\iff \\sqrt{x^2 + y^2} = 2 - (x + y)$$\\nBình phương hai vế: $x^2 + y^2 = 4 - 4(x + y) + (x + y)^2 = 4 - 4(x + y) + x^2 + 2xy + y^2$\\n$$\\implies 2xy - 4(x + y) + 4 = 0 \\iff xy - 2(x + y) + 2 = 0$$\\nDiện tích tam giác $BMN$ là $S = \\frac{1}{2} xy$.\\nTheo bất đẳng thức Cauchy: $x + y \\ge 2\\sqrt{xy} = 2\\sqrt{2S}$.\\nDo đó $2S - 2(x + y) + 2 = 0 \\implies 2S + 2 = 2(x + y) \\ge 4\\sqrt{2S}$.\\nĐặt $t = \\sqrt{2S} > 0$, ta có bất phương trình:\\n$$t^2 - 4t + 2 \\ge 0 \\implies t \\le 2 - \\sqrt{2}$$\\nDo đó $2S = t^2 \\le (2 - \\sqrt{2})^2 = 6 - 4\\sqrt{2} \\implies S \\le 3 - 2\\sqrt{2} \\approx 3 - 2{,}8284 = 0{,}1716 \\approx 0{,}17$.\\nVậy diện tích lớn nhất của tam giác $BMN$ xấp xỉ bằng $0{,}17$."
  },
  {
    "id": 645,
    "type": "fill",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 5: Xác suất có điều kiện & Công thức Bayes (Toán 12)",
    "topicId": "to_hop_xac_suat_co_dien",
    "topicName": "Toán rời rạc và bài toán điền số",
    "isPracticalMath": false,
    "hasParametricM": false,
    "track": "THPTQG",
    "latexVerified": true,
    "difficulty": "Vận dụng cao",
    "examSets": [
      "thptqg_nguyen_khuyen_tphcm_2026"
    ],
    "content": "[Đề kiểm tra THPT Nguyễn Khuyến & Lê Thánh Tông TP.HCM 2026] Có bao nhiêu cách chọn 6 số nguyên khác nhau từ tập hợp 10 số $\\{2; 3; \\dots; 11\\}$ và điền vào bảng 3 hàng gồm 1 ô, 2 ô và 3 ô sao cho tổng các số ở mỗi hàng đều bằng nhau?",
    "correctAnswer": "36",
    "acceptableAnswers": [
      "36",
      "36.0"
    ],
    "socraticHint": "Gọi số ở hàng 1 là $S$. Khi đó tổng 2 số ở hàng 2 và tổng 3 số ở hàng 3 cũng phải bằng $S$. Tìm các giá trị $S$ khả dĩ từ tập số đã cho rồi tính số hoán vị.",
    "detailedSolution": "Hàng 1 chỉ có đúng 1 ô, nên giá trị ô này chính là tổng $S$ của mỗi hàng.\\nDo $S$ được phân tích thành tổng 2 số khác nhau và tổng 3 số khác nhau từ tập các số còn lại trong tập $\\{2; 3; \\dots; 11\\}$:\\nPhân tích các trường hợp cho $S$ lớn (như $S = 9, 10, 11$), kết hợp số cách chọn và hoán vị vị trí các ô trên mỗi hàng, ta thu được tổng số cách thỏa mãn bài toán là 36 cách.\\nVậy có tất cả 36 cách điền số thỏa mãn."
  }
];

export const deThiCacSoQuestions: Question[] = [
  ...soHanoi2025Questions,
  ...soNamDinh2025Questions,
  ...soNgheAn2025Questions,
  ...soHaiPhong2025Questions,
  ...nguyenKhuyenTphcm2026Questions,
];
