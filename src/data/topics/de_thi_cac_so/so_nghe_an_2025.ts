import { Question } from '../../../types/exam';

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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
    "difficulty": "Thông hiểu",
    "examSets": [
      "thptqg_so_nghean_2025_2026"
    ],
    "content": "[Đề thi thử Sở GD&ĐT Nghệ An 2025] Thời gian chạy bộ mỗi ngày (phút) của anh A được cho trong bảng tần số ghép nhóm sau:\n\n$$\\begin{array}{|c|c|c|c|c|c|}\\hline \\text{Thời gian (phút)} & [20; 25) & [25; 30) & [30; 35) & [35; 40) & [40; 45) \\\\ \\hline \\text{Số ngày} & 4 & 6 & 10 & 6 & 4 \\\\ \\hline \\end{array}$$\n\nĐộ lệch chuẩn của mẫu số liệu ghép nhóm trên bằng bao nhiêu phút? (kết quả làm tròn đến hàng phần mười).",
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
    "answerVerified": true,
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
