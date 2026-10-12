import { Question } from '../../../types/exam';

export const toiUuKinhTeQuestions: Question[] = [
  {
    "id": 30,
    "type": "mcq",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Nồng độ oxy trong hồ sau $t$ ngày xử lý là $C(t) = \\frac{10t}{t^2 + 9} + 2$ (mg/l). Nồng độ oxy lớn nhất đạt được sau mấy ngày?",
    "options": [
      {
        "key": "A",
        "content": "$3$ ngày"
      },
      {
        "key": "B",
        "content": "$4$ ngày"
      },
      {
        "key": "C",
        "content": "$2$ ngày"
      },
      {
        "key": "D",
        "content": "$5$ ngày"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo bất đẳng thức AM-GM: $t^2 + 9 \\ge 2\\sqrt{9t^2} = 6t$. Dấu bằng xảy ra khi $t^2 = 9 \\iff t = 3$ (ngày).\nKhi đó $\\frac{10t}{t^2 + 9} \\le \\frac{10t}{6t} = \\frac{5}{3}$. Do đó sau đúng 3 ngày thì nồng độ oxy đạt cực đại.",
    "socraticHint": "Sử dụng bất đẳng thức AM-GM cho mẫu số $t^2 + 9$ hoặc khảo sát đạo hàm $C'(t) = 0$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 47,
    "type": "fill",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Chi phí sản xuất $C(x) = x^2 + 20x + 1600$. Chi phí trung bình $\\bar{C}(x) = \\frac{C(x)}{x}$ nhỏ nhất bằng bao nhiêu nghìn đồng?",
    "correctAnswer": "100",
    "acceptableAnswers": [
      "100",
      "100.0"
    ],
    "detailedSolution": "Ta có $\\bar{C}(x) = x + 20 + \\frac{1600}{x}$.\nTheo AM-GM: $x + \\frac{1600}{x} \\ge 2\\sqrt{1600} = 80$.\nDo đó $\\bar{C}(x) \\ge 80 + 20 = 100$. Dấu bằng xảy ra khi $x = 40$.",
    "socraticHint": "Sử dụng bất đẳng thức AM-GM cho hai số nghịch đảo $x$ và $\\frac{1600}{x}$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 48,
    "type": "fill",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Cỏ mọc đều hàng ngày. 30 con cừu ăn hết trong 12 ngày, 20 con cừu ăn hết trong 24 ngày. Hỏi 25 con cừu ăn hết bãi cỏ đó trong bao nhiêu ngày?",
    "correctAnswer": "16",
    "acceptableAnswers": [
      "16",
      "16.0"
    ],
    "detailedSolution": "Bài toán Newton: Gọi lượng cỏ ban đầu là $M$, tốc độ cỏ mọc mỗi ngày là $v$, sức ăn mỗi con/ngày là 1.\n- $M + 12v = 30 \\times 12 = 360$\n- $M + 24v = 20 \\times 24 = 480 \\implies 12v = 120 \\implies v = 10 \\implies M = 240$.\nVới 25 con: $M + vt = 25t \\iff 240 + 10t = 25t \\iff 15t = 240 \\implies t = 16$ ngày.",
    "socraticHint": "Thiết lập hệ phương trình giữa lượng cỏ ban đầu và tốc độ mọc thêm mỗi ngày.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 69,
    "type": "mcq",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Một công ty sản xuất độc quyền một loại hàng hóa với hàm cầu $p = 120 - 2x$ (trong đó $p$ là giá bán mỗi sản phẩm, $x$ là số lượng sản phẩm sản xuất và bán ra, $0 < x < 60$). Hàm tổng chi phí sản xuất $x$ sản phẩm là $C(x) = x^2 + 30x + 100$. Mức sản lượng $x$ để công ty đạt lợi nhuận lớn nhất là:",
    "options": [
      {
        "key": "A",
        "content": "$15$"
      },
      {
        "key": "B",
        "content": "$20$"
      },
      {
        "key": "C",
        "content": "$12$"
      },
      {
        "key": "D",
        "content": "$18$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Doanh thu của công ty là hàm số:\n$$R(x) = p \\cdot x = (120 - 2x)x = 120x - 2x^2.$$\nLợi nhuận của công ty:\n$$L(x) = R(x) - C(x) = (120x - 2x^2) - (x^2 + 30x + 100) = -3x^2 + 90x - 100.$$\nĐạo hàm hàm lợi nhuận:\n$$L'(x) = -6x + 90 = 0 \\iff x = 15.$$\nVì hệ số của $x^2$ âm ($-3 < 0$) nên hàm số đạt giá trị cực đại tại đỉnh parabol $x = 15$.\nVậy mức sản lượng để đạt lợi nhuận lớn nhất là $x = 15$.",
    "socraticHint": "Lợi nhuận bằng Doanh thu trừ Chi phí ($L = R - C$). Tìm cực đại của hàm bậc hai theo $x$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 130,
    "type": "mcq",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Một doanh nghiệp sản xuất một loại sản phẩm với hàm chi phí $C(x) = x^2 + 20x + 100$ (triệu đồng) và giá bán mỗi sản phẩm là $p(x) = 120 - x$ (triệu đồng), với $x$ là số lượng sản phẩm sản xuất và tiêu thụ ($x > 0$). Lợi nhuận lớn nhất mà doanh nghiệp có thể đạt được là:",
    "options": [
      {
        "key": "A",
        "content": "$1150(triệu đồng)$"
      },
      {
        "key": "B",
        "content": "$1250(triệu đồng)$"
      },
      {
        "key": "C",
        "content": "$1050(triệu đồng)$"
      },
      {
        "key": "D",
        "content": "$1400(triệu đồng)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Doanh thu từ việc bán $x$ sản phẩm:\n$$R(x) = x \\cdot p(x) = x(120 - x) = 120x - x^2$$\nLợi nhuận của doanh nghiệp:\n$$P(x) = R(x) - C(x) = (120x - x^2) - (x^2 + 20x + 100) = -2x^2 + 100x - 100$$\nHàm lợi nhuận là một tam thức bậc hai có bề lõm quay xuống dưới ($a = -2 < 0$), đạt giá trị lớn nhất tại hoành độ đỉnh:\n$$x = -\\frac{100}{2(-2)} = 25$$\nGiá trị lợi nhuận lớn nhất:\n$$P(25) = -2(25^2) + 100(25) - 100 = -1250 + 2500 - 100 = 1150(triệu đồng)$$.",
    "socraticHint": "Lập hàm lợi nhuận $P(x) = R(x) - C(x)$ rồi tìm đỉnh của parabol bậc hai.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 132,
    "type": "mcq",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Một người gửi tiết kiệm 200 triệu đồng vào ngân hàng với lãi suất kép $7\\%/\\text{năm}$, tiền lãi hàng năm được nhập vào vốn. Sau ít nhất bao nhiêu năm thì người đó có tổng số tiền (cả gốc lẫn lãi) vượt quá 400 triệu đồng?",
    "options": [
      {
        "key": "A",
        "content": "$11\\text{ năm}$"
      },
      {
        "key": "B",
        "content": "$10\\text{ năm}$"
      },
      {
        "key": "C",
        "content": "$12\\text{ năm}$"
      },
      {
        "key": "D",
        "content": "$9\\text{ năm}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số tiền nhận được sau $n$ năm theo công thức lãi kép:\n$$A_n = 200(1 + 0.07)^n = 200(1.07)^n$$\nĐể số tiền vượt quá 400 triệu đồng:\n$$200(1.07)^n > 400 \\iff (1.07)^n > 2 \\iff n > \\log_{1.07} 2 = \\frac{\\ln 2}{\\ln 1.07} \\approx \\frac{0.69315}{0.06766} \\approx 10.24$$\nVì số năm $n$ là số nguyên dương, người đó cần ít nhất 11 năm.",
    "socraticHint": "Áp dụng công thức lãi kép $A = P(1+r)^n$, dùng logarit để tìm số năm nguyên dương nhỏ nhất thỏa mãn.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 150,
    "type": "fill",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Một chủ trang trại nuôi cá ước tính tổng khối lượng của đàn cá sau $t$ tuần nuôi tuân theo quy luật $m(t) = \\frac{500}{1 + 9e^{-0.2t}}$ (đơn vị: kg). Giới hạn khối lượng tối đa mà đàn cá có thể đạt được khi thời gian nuôi rất lớn ($t \\to +\\infty$) bằng bao nhiêu kg?",
    "correctAnswer": "500",
    "acceptableAnswers": [
      "500",
      "500.0"
    ],
    "detailedSolution": "Khi $t \\to +\\infty$, ta có $-0.2t \\to -\\infty \\implies e^{-0.2t}  o 0$.\nDo đó giới hạn khối lượng tối đa của đàn cá là:\n$$\\lim\\limits_{t \\to +\\infty} m(t) = \\lim\\limits_{t \\to +\\infty} \\frac{500}{1 + 9e^{-0.2t}} = \\frac{500}{1 + 9(0)} = 500\\text{ kg}$$.",
    "socraticHint": "Tính giới hạn của hàm số $m(t)$ khi $t \\to +\\infty$, lưu ý rằng $e^{-\\infty} = 0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 181,
    "type": "mcq",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Một xưởng cơ khí gia công hai loại sản phẩm $A$ và $B$. Mỗi sản phẩm $A$ cần 2 giờ trên máy I và 1 giờ trên máy II, lãi 400.000 đồng. Mỗi sản phẩm $B$ cần 1 giờ trên máy I và 1 giờ trên máy II, lãi 300.000 đồng. Mỗi ngày máy I hoạt động tối đa 8 giờ, máy II tối đa 5 giờ. Tiền lãi lớn nhất xưởng có thể đạt được trong một ngày là:",
    "options": [
      {
        "key": "A",
        "content": "$1.800.000(đồng)$"
      },
      {
        "key": "B",
        "content": "$1.600.000(đồng)$"
      },
      {
        "key": "C",
        "content": "$1.500.000(đồng)$"
      },
      {
        "key": "D",
        "content": "$2.000.000(đồng)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $x, y$ lần lượt là số sản phẩm $A$ và $B$ sản xuất trong ngày ($x, y \\ge 0$).\nHệ ràng buộc tài nguyên:\n$$\\begin{cases} 2x + y \\le 8 \\quad (\\text{máy I}) \\\\ x + y \\le 5 \\quad (\\text{máy II}) \\\\ x \\ge 0, y \\ge 0 \\end{cases}$$\nHàm mục tiêu lợi nhuận: $L(x, y) = 400x + 300y$ (nghìn đồng).\nMiền nghiệm là tứ giác có các đỉnh:\n- $O(0; 0) \\implies L = 0$\n- $M(4; 0)$ $\\implies L = 400(4) = 1600$\n- $N(3; 2)$ (nghiệm hệ $2x+y=8$ và $x+y=5$) $\\implies L = 400(3) + 300(2) = 1200 + 600 = 1800$\n- $P(0; 5)$ $\\implies L = 300(5) = 1500$\nLợi nhuận lớn nhất đạt 1.800.000 đồng khi sản xuất 3 sản phẩm $A$ và 2 sản phẩm $B$.",
    "socraticHint": "Đây là bài toán quy hoạch tuyến tính: tìm giá trị lớn nhất của hàm mục tiêu tại các đỉnh của miền chấp nhận.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 200,
    "type": "fill",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Dân số của một thành phố vào năm 2020 là 1.000.000 người. Biết rằng tốc độ tăng dân số trung bình hàng năm của thành phố là $1.2\\%$. Dự báo đến năm 2025 dân số của thành phố đó đạt bao nhiêu nghìn người? (Làm tròn đến hàng đơn vị).",
    "correctAnswer": "1061",
    "acceptableAnswers": [
      "1061",
      "1061.0"
    ],
    "detailedSolution": "Khoảng thời gian từ năm 2020 đến năm 2025 là $n = 2025 - 2020 = 5$ năm.\nTheo công thức tăng trưởng dân số:\n$$N = N_0(1 + r)^n = 1000 \\times (1 + 0.012)^5 = 1000 \\times (1.012)^5$$\nTa tính:\n$$1.012^5 \\approx 1.06145$$\n$$N \\approx 1000 \\times 1.06145 = 1061.45(nghìn người)$$\nLàm tròn đến hàng đơn vị nghìn người ta được 1061 nghìn người.",
    "socraticHint": "Áp dụng công thức tăng trưởng $N = N_0(1+r)^n$ với $n = 5$ năm và làm tròn kết quả.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 211,
    "type": "mcq",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Tại một nhà máy, gọi hàm số $C(x) = 0{,}00024 x^3 - 0{,}03 x^2 + 5x + 30$ (đơn vị: triệu đồng) là tổng chi phí sản xuất $x$ tấn sản phẩm A trong một tháng. Tốc độ tăng của tổng chi phí khi nhà máy sản xuất $100$ tấn sản phẩm A là:",
    "options": [
      {
        "key": "A",
        "content": "$7{,}1$ triệu đồng/tấn"
      },
      {
        "key": "B",
        "content": "$8{,}4$ triệu đồng/tấn"
      },
      {
        "key": "C",
        "content": "$6{,}2$ triệu đồng/tấn"
      },
      {
        "key": "D",
        "content": "$4{,}8$ triệu đồng/tấn"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tốc độ tăng của tổng chi phí tại sản lượng $x$ chính là chi phí cận biên, biểu diễn bởi đạo hàm cấp một $C'(x)$:\n$$C'(x) = 3 \\times 0{,}00024 x^2 - 2 \\times 0{,}03 x + 5 = 0{,}00072 x^2 - 0{,}06 x + 5$$\nKhi nhà máy sản xuất $x = 100$ tấn:\n$$C'(100) = 0{,}00072 \\times 100^2 - 0{,}06 \\times 100 + 5$$\n$$C'(100) = 7{,}2 - 6 + 5 = 6{,}2\\text{ (triệu đồng/tấn)}$$",
    "socraticHint": "Tốc độ tăng của một đại lượng đo bằng đạo hàm theo biến thời gian hoặc sản lượng.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 228,
    "type": "mcq",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Cho một mạch điện kín gồm nguồn điện có suất điện động $E\\text{ (V)}$ và điện trở trong $r\\text{ (}\\Omega\\text{)}$ không thay đổi; mạch ngoài có biến trở $R\\text{ (}\\Omega\\text{)}$. Khi đó, công suất tiêu thụ ở mạch ngoài là $P = \\frac{E^2 R}{(R + r)^2}$. Tìm giá trị lớn nhất của công suất tiêu thụ mạch ngoài $P$:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{E^2}{4r}\\text{ (W)}$"
      },
      {
        "key": "B",
        "content": "$\\frac{E^2}{2r}\\text{ (W)}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2E^2}{r}\\text{ (W)}$"
      },
      {
        "key": "D",
        "content": "$\\frac{E^2}{8r}\\text{ (W)}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia cả tử và mẫu cho $R > 0$:\n$$P = \\frac{E^2}{\\frac{(R + r)^2}{R}} = \\frac{E^2}{\\left(\\sqrt{R} + \\frac{r}{\\sqrt{R}}\\right)^2}$$\nÁp dụng bất đẳng thức AM-GM cho hai số dương $\\sqrt{R}$ và $\\frac{r}{\\sqrt{R}}$:\n$$\\sqrt{R} + \\frac{r}{\\sqrt{R}} \\ge 2\\sqrt{\\sqrt{R} \\cdot \\frac{r}{\\sqrt{R}}} = 2\\sqrt{r}$$\nSuy ra:\n$$\\left(\\sqrt{R} + \\frac{r}{\\sqrt{R}}\\right)^2 \\ge 4r \\implies P \\le \\frac{E^2}{4r}$$\nDấu bằng xảy ra khi $\\sqrt{R} = \\frac{r}{\\sqrt{R}} \\iff R = r$.\nVậy công suất cực đại là $P_{\\max} = \\frac{E^2}{4r}\\text{ (W)}$.",
    "socraticHint": "Chia cả tử và mẫu cho biến trở R rồi áp dụng bất đẳng thức AM-GM ở mẫu số.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 249,
    "type": "mcq",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "content": "Trong một buổi tiệc, bốn cặp vợ chồng đã ăn trái cây cùng với nhau. Số quả cam mà các cô vợ $A, B, C, D$ ăn lần lượt là $3, 2, 4, 1$. Số quả cam các anh chồng $M, N, P, Q$ ăn lần lượt bằng, gấp đôi, gấp ba, gấp bốn số quả cam mà các cô vợ của mình đã ăn. Biết tổng số quả cam mà bốn cặp vợ chồng này ăn là $32$. Hỏi ai là vợ của anh $P$?",
    "options": [
      {
        "key": "A",
        "content": "Cô A"
      },
      {
        "key": "B",
        "content": "Cô B"
      },
      {
        "key": "C",
        "content": "Cô C"
      },
      {
        "key": "D",
        "content": "Cô D"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tổng số quả cam mà bốn cô vợ đã ăn:\n$$S_{vo} = 3 + 2 + 4 + 1 = 10(quả)$$\nTổng số quả cam mà bốn anh chồng đã ăn:\n$$S_{chong} = 32 - 10 = 22(quả)$$\nGọi $w_M, w_N, w_P, w_Q$ lần lượt là số quả cam mà các cô vợ của các anh $M, N, P, Q$ đã ăn.\nTheo bài ra:\n- Anh $M$ ăn bằng vợ: $1 \\cdot w_M$.\n- Anh $N$ ăn gấp 2 vợ: $2 \\cdot w_N$.\n- Anh $P$ ăn gấp 3 vợ: $3 \\cdot w_P$.\n- Anh $Q$ ăn gấp 4 vợ: $4 \\cdot w_Q$.\nTổng cam của các anh chồng:\n$$w_M + 2w_N + 3w_P + 4w_Q = 22$$\nTrong đó $(w_M, w_N, w_P, w_Q)$ là một hoán vị của tập hợp $\\{1; 2; 3; 4\\}$.\nThử các trường hợp với các hệ số lớn:\n- $w_Q$ nhân với 4, nên $w_Q$ không thể bằng 4 (vì $4 \\times 4 = 16$, phần còn lại $22 - 16 = 6$ quá nhỏ đối với các hệ số $1, 2, 3$ với ba số $1, 2, 3$: $1 \\times 3 + 2 \\times 2 + 3 \\times 1 = 10 > 6$).\n- Nếu $w_Q = 2$:\n  $$w_M + 2w_N + 3w_P = 22 - 4 \\times 2 = 14$$\n  Ba giá trị còn lại là $\\{1; 3; 4\\}$.\n  Thử $w_P = 1$: $w_M + 2w_N = 14 - 3(1) = 11$. Với $\\{3; 4\\}$: $3 + 2(4) = 11$ (thỏa mãn với $w_M = 3, w_N = 4$)!\nKiểm tra lại hoán vị:\n- Anh $M$ lấy cô $A$ (ăn 3 quả): anh $M$ ăn $1 \\times 3 = 3$ quả.\n- Anh $N$ lấy cô $C$ (ăn 4 quả): anh $N$ ăn $2 \\times 4 = 8$ quả.\n- Anh $P$ lấy cô $D$ (ăn 1 quả): anh $P$ ăn $3 \\times 1 = 3$ quả.\n- Anh $Q$ lấy cô $B$ (ăn 2 quả): anh $Q$ ăn $4 \\times 2 = 8$ quả.\nTổng số cam các anh chồng: $3 + 8 + 3 + 8 = 22$ quả (chính xác).\nVậy vợ của anh $P$ là Cô $D$.",
    "socraticHint": "Tính tổng số cam các anh chồng ăn là $32 - 10 = 22$, thiết lập phương trình nghiệm nguyên $w_M + 2w_N + 3w_P + 4w_Q = 22$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 260,
    "type": "mcq",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "content": "Dung dịch muối NaCl có nồng độ $20\\%$ (tức trong $100\\text{ g}$ dung dịch có $20\\text{ g}$ muối NaCl nguyên chất). Nếu ta thêm $x$ gam muối tinh khiết vào $500\\text{ g}$ dung dịch muối có sẵn, ta được dung dịch mới có nồng độ $f(x)\\%$. Công thức xác định hàm số $f(x)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$f(x) = \\frac{x}{500} \\cdot 100$"
      },
      {
        "key": "B",
        "content": "$f(x) = \\frac{x + 500}{x} \\cdot 100$"
      },
      {
        "key": "C",
        "content": "$f(x) = \\frac{100 + x}{500 + x} \\cdot 100$"
      },
      {
        "key": "D",
        "content": "$f(x) = \\frac{20 + x}{500 + x} \\cdot 100$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Khối lượng muối NaCl ban đầu trong 500 g dung dịch là: $m_{\\text{muối ban đầu}} = 500 \\times 20\\% = 100\\text{ g}$.\nSau khi thêm $x$ gam muối tinh khiết:\n- Khối lượng chất tan mới là: $100 + x\\text{ (g)}$.\n- Khối lượng dung dịch mới là: $500 + x\\text{ (g)}$.\nNồng độ phần trăm của dung dịch mới là:\n$$f(x) = \\frac{100 + x}{500 + x} \\times 100\\%$$",
    "socraticHint": "Nồng độ phần trăm bằng khối lượng chất tan chia cho tổng khối lượng dung dịch mới rồi nhân với 100.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tối ưu hóa kinh tế, Chi phí & Doanh thu",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu"
  }
];
