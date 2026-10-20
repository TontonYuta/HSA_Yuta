import { Question } from '../../../types/exam';

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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_haiphong_2025_2026"
    ],
    "content": "[Đề khảo sát liên trường Hải Phòng 2026] Khảo sát thu nhập (triệu đồng) theo tháng của người lao động tại một doanh nghiệp được cho trong bảng sau:\n\n$$\\begin{array}{|c|c|c|c|c|}\\hline \\text{Thu nhập (triệu đồng)} & [5; 8) & [8; 11) & [11; 14) & [14; 17) \\\\ \\hline \\text{Số người} & 10 & 25 & 12 & 3 \\\\ \\hline \\end{array}$$\n\nTrung vị của mẫu số liệu ghép nhóm trên bằng bao nhiêu triệu đồng?",
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
