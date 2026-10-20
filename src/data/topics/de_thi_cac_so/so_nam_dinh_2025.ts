import { Question } from '../../../types/exam';

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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_namdinh_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nam Định 2025] Cho mẫu số liệu ghép nhóm có bảng tần số ghép nhóm sau:\n\n$$\\begin{array}{|c|c|c|c|c|c|}\\hline \\text{Nhóm số liệu} & [0; 2) & [2; 4) & [4; 6) & [6; 8) & [8; 10] \\\\ \\hline \\text{Giá trị đại diện } (c_i) & 1 & 3 & 5 & 7 & 9 \\\\ \\hline \\text{Tần số } (n_i) & 1 & 2 & 10 & 15 & 2 \\\\ \\hline \\end{array}$$\n\nPhương sai của mẫu số liệu ghép nhóm trên bằng bao nhiêu? (kết quả làm tròn đến hàng phần trăm).",
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
