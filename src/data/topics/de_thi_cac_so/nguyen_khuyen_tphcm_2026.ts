import { Question } from '../../../types/exam';

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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
