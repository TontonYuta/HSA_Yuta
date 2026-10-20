import { Question } from '../../../types/exam';

export const chuyenDongTichPhanQuestions: Question[] = [
  {
    "id": 31,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "bai_toan_chuyen_dong_thuc_te",
    "topicName": "Ứng dụng tích phân trong bài toán chuyển động",
    "content": "Một ô tô tăng tốc với vận tốc $v(t) = 3t$ (m/s) trong 6 giây, sau đó hãm phanh với gia tốc $-2\\text{ m/s}^2$ đến khi dừng hẳn. Tổng quãng đường đi được là:",
    "options": [
      {
        "key": "A",
        "content": "$135$ m"
      },
      {
        "key": "B",
        "content": "$120$ m"
      },
      {
        "key": "C",
        "content": "$144$ m"
      },
      {
        "key": "D",
        "content": "$108$ m"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Giai đoạn 1 ($t \\in [0; 6]$): $s_1 = \\int_0^6 3t dt = 1{,}5(36) = 54$ m. Vận tốc tại $t = 6$ là $18$ m/s.\nGiai đoạn 2: $v(t) = 18 - 2t$, dừng khi $t = 9$s. Quãng đường $s_2 = \\int_0^9 (18 - 2t) dt = [18t - t^2]_0^9 = 81$ m.\nTổng quãng đường: $54 + 81 = 135$ m.",
    "socraticHint": "Chia chuyển động thành 2 giai đoạn và tích phân hàm vận tốc cho từng đoạn.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ],
    "answerVerified": true
  },
  {
    "id": 111,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "bai_toan_chuyen_dong_thuc_te",
    "topicName": "Ứng dụng tích phân trong bài toán chuyển động",
    "content": "Một vật chuyển động thẳng với vận tốc $v(t) = 3t^2 - 2t$ (m/s). Quãng đường vật đi được từ thời điểm $t = 1\\text{ s}$ đến thời điểm $t = 3\\text{ s}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$18\\text{ m}$"
      },
      {
        "key": "B",
        "content": "$20\\text{ m}$"
      },
      {
        "key": "C",
        "content": "$16\\text{ m}$"
      },
      {
        "key": "D",
        "content": "$24\\text{ m}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Quãng đường vật di chuyển từ $t = 1$ đến $t = 3$ là tích phân của vận tốc:\n$$s = \\int_1^3 v(t) dt = \\int_1^3 (3t^2 - 2t) dt = l\\left[ t^3 - t^2 \\right]_1^3$$\n$$= (3^3 - 3^2) - (1^3 - 1^2) = (27 - 9) - (1 - 1) = 18\\text{ m}$$.",
    "socraticHint": "Quãng đường chuyển động trong khoảng thời gian $[t_1; t_2]$ bằng $\\int_{t_1}^{t_2} v(t) dt$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ],
    "answerVerified": true
  },
  {
    "id": 141,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "bai_toan_chuyen_dong_thuc_te",
    "topicName": "Ứng dụng tích phân trong bài toán chuyển động",
    "content": "Một canô đang chạy trên sông thì hãm máy, vận tốc giảm dần theo thời gian với hàm $v(t) = 12 - 2t$ (m/s), trong đó $t$ là thời gian tính bằng giây kể từ lúc bắt đầu hãm máy. Quãng đường canô đi được từ lúc hãm máy cho đến khi dừng hẳn bằng bao nhiêu mét?",
    "correctAnswer": "36",
    "acceptableAnswers": [
      "36",
      "36.0"
    ],
    "detailedSolution": "Canô dừng hẳn khi $v(t) = 0 \\iff 12 - 2t = 0 \\iff t = 6\\text{ s}$.\nQuãng đường canô di chuyển cho đến khi dừng hẳn là:\n$$s = \\int_0^6 (12 - 2t) dt = l\\left[ 12t - t^2 \\right]_0^6 = 12(6) - 6^2 = 72 - 36 = 36\\text{ m}$$.",
    "socraticHint": "Xác định thời điểm vận tốc triệt tiêu ($v(t) = 0$), sau đó tính tích phân vận tốc từ 0 đến thời điểm đó.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ],
    "answerVerified": true
  },
  {
    "id": 236,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "bai_toan_chuyen_dong_thuc_te",
    "topicName": "Ứng dụng tích phân trong bài toán chuyển động",
    "content": "[Ngữ cảnh xe F1] Một chiếc xe hơi công thức 1 khi tăng tốc có thể đạt tới tốc độ lớn nhất là $360\\text{ km/h}$, chỉ mất $11$ giây kể từ lúc bắt đầu chuyển động. Quỹ đạo chuyển động của xe là một đường thẳng. Xe chuyển động với tốc độ $v(t)\\text{ (m/s)}$ là một hàm số liên tục theo thời gian $t$ (giây). Trong $3$ giây đầu tiên, xe có tốc độ $v(t) = 4t^2$ ($0 \\le t \\le 3$). Từ giây thứ $3$ đến giây thứ $11$ xe chạy với gia tốc không đổi là $a\\text{ (m/s}^2\\text{)}$. Giá trị của $a$ là:",
    "options": [
      {
        "key": "A",
        "content": "$6{,}5\\text{ m/s}^2$"
      },
      {
        "key": "B",
        "content": "$8\\text{ m/s}^2$"
      },
      {
        "key": "C",
        "content": "$9{,}5\\text{ m/s}^2$"
      },
      {
        "key": "D",
        "content": "$11\\text{ m/s}^2$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Đổi vận tốc lớn nhất sang đơn vị $\\text{m/s}$:\n$$v_{\\max} = 360\\text{ km/h} = \\frac{360}{3{,}6} = 100\\text{ m/s}$$\nTại thời điểm $t = 3\\text{ s}$, vận tốc của xe là:\n$$v(3) = 4 \\times 3^2 = 36\\text{ m/s}$$\nTừ $t = 3$ đến $t = 11$, xe chuyển động thẳng biến đổi đều với gia tốc không đổi $a$, do đó quy luật vận tốc là:\n$$v(t) = v(3) + a(t - 3) = 36 + a(t - 3)$$\nTại thời điểm $t = 11\\text{ s}$, xe đạt tốc độ cực đại $100\\text{ m/s}$:\n$$36 + a(11 - 3) = 100 \\iff 8a = 64 \\implies a = 8\\text{ m/s}^2$$",
    "socraticHint": "Đổi $360\\text{ km/h}$ ra $100\\text{ m/s}$, tính $v(3)$ rồi dùng công thức biến đổi đều $v(11) = v(3) + a \\Delta t$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ],
    "answerVerified": true
  },
  {
    "id": 237,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "bai_toan_chuyen_dong_thuc_te",
    "topicName": "Ứng dụng tích phân trong bài toán chuyển động",
    "content": "[Ngữ cảnh xe F1] Quãng đường xe đi được kể từ lúc bắt đầu chuyển động cho đến khi đạt tốc độ lớn nhất ($11$ giây đầu) là bao nhiêu mét?",
    "options": [
      {
        "key": "A",
        "content": "$400\\text{ m}$"
      },
      {
        "key": "B",
        "content": "$480\\text{ m}$"
      },
      {
        "key": "C",
        "content": "$580\\text{ m}$"
      },
      {
        "key": "D",
        "content": "$500\\text{ m}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Quãng đường chuyển động gồm hai giai đoạn:\n1) Giai đoạn 1 ($0 \\le t \\le 3$): xe chuyển động với vận tốc $v(t) = 4t^2$:\n$$S_1 = \\int_0^3 4t^2 dt = \\left[ \\frac{4t^3}{3} \\right]_0^3 = \\frac{4 \\times 27}{3} = 36\\text{ m}$$\n2) Giai đoạn 2 ($3 \\le t \\le 11$): xe chạy biến đổi đều từ vận tốc $v_1 = 36\\text{ m/s}$ đến $v_2 = 100\\text{ m/s}$ trong khoảng thời gian $\\Delta t = 8\\text{ s}$:\n$$S_2 = \\frac{v_1 + v_2}{2} \\cdot \\Delta t = \\frac{36 + 100}{2} \\times 8 = 68 \\times 8 = 544\\text{ m}$$\n(Hoặc dùng tích phân: $S_2 = \\int_3^{11} [36 + 8(t - 3)] dt = 544\\text{ m}$).\n\nTổng quãng đường xe đi được đến khi đạt tốc độ cực đại:\n$$S = S_1 + S_2 = 36 + 544 = 580\\text{ m}$$",
    "socraticHint": "Tính quãng đường từng chặng bằng tích phân của vận tốc trên hai khoảng thời gian $[0; 3]$ và $[3; 11]$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ],
    "answerVerified": true
  },
  {
    "id": 238,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chuyên đề 4: Nguyên hàm, Tích phân & Ứng dụng (Toán 12)",
    "topicId": "bai_toan_chuyen_dong_thuc_te",
    "topicName": "Ứng dụng tích phân trong bài toán chuyển động",
    "content": "[Ngữ cảnh xe F1] Biết rằng ngay sau khi đạt được tốc độ lớn nhất, xe chuyển động thẳng đều trong $5$ giây rồi hãm phanh với gia tốc hãm là $a_h = 10\\text{ m/s}^2$ để dừng lại. Tốc độ trung bình của xe kể từ lúc bắt đầu chuyển động cho đến lúc dừng hẳn bằng $\\frac{m}{n}\\text{ (m/s)}$. Giá trị của biểu thức $T = m + n$ là:",
    "options": [
      {
        "key": "A",
        "content": "$1600$"
      },
      {
        "key": "B",
        "content": "$1606$"
      },
      {
        "key": "C",
        "content": "$1616$"
      },
      {
        "key": "D",
        "content": "$1620$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tổng chuyển động của xe trải qua 4 giai đoạn:\n- Giai đoạn 1 & 2 (tăng tốc đến cực đại $100\\text{ m/s}$): thời gian $t_{12} = 11\\text{ s}$, quãng đường $S_{12} = 580\\text{ m}$.\n- Giai đoạn 3 (chuyển động thẳng đều với $v = 100\\text{ m/s}$ trong $5\\text{ s}$):\n  + Thời gian: $t_3 = 5\\text{ s}$.\n  + Quãng đường: $S_3 = 100 \\times 5 = 500\\text{ m}$.\n- Giai đoạn 4 (hãm phanh từ $100\\text{ m/s}$ về $0\\text{ m/s}$ với gia tốc $a_h = 10\\text{ m/s}^2$):\n  + Thời gian dừng lại: $t_4 = \\frac{v}{a_h} = \\frac{100}{10} = 10\\text{ s}$.\n  + Quãng đường hãm phanh: $S_4 = \\frac{v^2}{2a_h} = \\frac{100^2}{2 \\times 10} = 500\\text{ m}$.\n\nTổng quãng đường toàn bộ hành trình:\n$$S_{tong} = 580 + 500 + 500 = 1580\\text{ m}$$\nTổng thời gian toàn bộ hành trình:\n$$t_{tong} = 11 + 5 + 10 = 26\\text{ s}$$\nTốc độ trung bình:\n$$v_{tb} = \\frac{S_{tong}}{t_{tong}} = \\frac{1580}{26}\\text{ m/s}$$\nTheo đáp án gốc của đề thi, biểu thức tỉ số lấy trực tiếp tổng quãng đường và tổng thời gian: $m = 1580$, $n = 26$, do đó $T = m + n = 1580 + 26 = 1606$ (nếu rút gọn tối giản $\\frac{790}{13}$ thì $T = 803$).",
    "socraticHint": "Tính tổng quãng đường cả 4 giai đoạn và tổng thời gian, sau đó tính tỉ số vận tốc trung bình $v_{tb} = S_{tong} / t_{tong}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ],
    "answerVerified": true
  }
];
