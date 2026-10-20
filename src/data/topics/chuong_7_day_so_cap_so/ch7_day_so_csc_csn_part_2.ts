import { Question } from '../../../types/exam';

export const ch7DaySoCscCsnPart2Questions: Question[] = [
  {
    "id": 921,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Ông A vay ngân hàng 200 triệu đồng với lãi suất $0{,}8\\%$/tháng theo hình thức trả góp. Mỗi tháng ông A trả cố định $m$ triệu đồng vào cuối tháng. Biết sau đúng 24 tháng thì ông A trả hết nợ. Số tiền $m$ gần nhất với giá trị nào sau đây?",
    "options": [
      {
        "key": "A",
        "content": "$9{,}2$ triệu đồng"
      },
      {
        "key": "B",
        "content": "$8{,}3$ triệu đồng"
      },
      {
        "key": "C",
        "content": "$10{,}1$ triệu đồng"
      },
      {
        "key": "D",
        "content": "$9{,}8$ triệu đồng"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi số tiền vay ban đầu là $A = 200$ (triệu đồng), lãi suất $r = 0{,}8\\% = 0{,}008$/tháng, số tiền trả đều đặn mỗi tháng là $m$.\n- Cuối tháng 1, số tiền còn nợ: $N_1 = A(1+r) - m$.\n- Cuối tháng 2, số tiền còn nợ: $N_2 = N_1(1+r) - m = A(1+r)^2 - m(1+r) - m$.\n- Bằng quy nạp, cuối tháng thứ $n$, số tiền còn nợ là:\n$$N_n = A(1+r)^n - m\\frac{(1+r)^n - 1}{r}$$\nSau $n = 24$ tháng ông A trả hết nợ nên $N_{24} = 0$:\n$$A(1+r)^{24} - m\\frac{(1+r)^{24} - 1}{r} = 0 \\implies m = \\frac{A \\cdot r \\cdot (1+r)^{24}}{(1+r)^{24} - 1}$$\nThay số $A = 200$, $r = 0{,}008$:\n$$m = \\frac{200 \\cdot 0{,}008 \\cdot (1{,}008)^{24}}{(1{,}008)^{24} - 1} \\approx 9{,}204\\text{ (triệu đồng)}$$\nVậy $m$ gần nhất với $9{,}2$ triệu đồng.\n\nChọn A.",
    "socraticHint": "Dùng công thức hoàn nợ trả góp hàng tháng: $m = \\frac{A \\cdot r \\cdot (1+r)^n}{(1+r)^n - 1}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 922,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Một quả bóng cao su được thả rơi tự do từ độ cao 10 m xuống mặt sàn cứng nằm ngang. Mỗi lần chạm đất, bóng nảy lên được độ cao bằng $\\frac{3}{4}$ độ cao của lần rơi trước đó. Tính tổng quãng đường quả bóng di chuyển từ lúc bắt đầu thả đến khi bóng hoàn toàn dừng lại trên mặt đất theo đơn vị mét. (Điền số nguyên):",
    "correctAnswer": "70",
    "detailedSolution": "Quãng đường bóng rơi lần đầu là: $h_0 = 10\\text{ m}$.\n- Lần nảy thứ 1: bóng lên cao $h_1 = 10 \\cdot \\frac{3}{4}\\text{ m}$, rồi lại rơi xuống $h_1\\text{ m}$. Quãng đường là $2h_1$.\n- Lần nảy thứ $k$: quãng đường đi và về là $2h_k = 2 \\cdot 10 \\cdot \\left(\\frac{3}{4}\\right)^k$.\nTổng quãng đường bóng di chuyển từ lúc thả đến khi dừng hẳn là:\n$$S = h_0 + 2\\sum_{k=1}^{\\infty} h_k = 10 + 2 \\cdot \\frac{10 \\cdot \\frac{3}{4}}{1 - \\frac{3}{4}} = 10 + 2 \\cdot \\frac{7{,}5}{0{,}25} = 10 + 2 \\cdot 30 = 70\\text{ m}$$\n\nĐáp số: 70.",
    "socraticHint": "Lưu ý lần rơi đầu tiên chỉ tính 1 chiều rơi ($h_0$), các lần nảy tiếp theo đều có 2 chiều (lên và xuống).",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 923,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_{n+1} = 2u_n + 3n - 1$ với mọi $n \\ge 1$. Số hạng thứ 5 của dãy số ($u_5$) bằng:",
    "options": [
      {
        "key": "A",
        "content": "$79$"
      },
      {
        "key": "B",
        "content": "$83$"
      },
      {
        "key": "C",
        "content": "$95$"
      },
      {
        "key": "D",
        "content": "$67$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tính trực tiếp từng số hạng theo công thức truy hồi:\n- $u_1 = 1$\n- $u_2 = 2u_1 + 3(1) - 1 = 2(1) + 2 = 4$\n- $u_3 = 2u_2 + 3(2) - 1 = 2(4) + 5 = 13$\n- $u_4 = 2u_3 + 3(3) - 1 = 2(13) + 8 = 34$\n- $u_5 = 2u_4 + 3(4) - 1 = 2(34) + 11 = 68 + 11 = 79$.\n\nChọn A.",
    "socraticHint": "Tính tuần tự từ $u_1$ đến $u_5$ theo hệ thức truy hồi đã cho.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 924,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Một rạp hát có 25 hàng ghế. Hàng đầu tiên có 16 ghế, mỗi hàng sau có nhiều hơn hàng liền trước 2 ghế. Tổng số ghế trong rạp hát đó là:",
    "options": [
      {
        "key": "A",
        "content": "$1000$"
      },
      {
        "key": "B",
        "content": "$960$"
      },
      {
        "key": "C",
        "content": "$1050$"
      },
      {
        "key": "D",
        "content": "$1024$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số ghế ở các hàng lập thành một cấp số cộng với số hạng đầu $u_1 = 16$, công sai $d = 2$, số số hạng $n = 25$.\nTổng số ghế trong rạp hát là tổng của 25 số hạng đầu:\n$$S_{25} = \\frac{25}{2}[2u_1 + (25-1)d] = \\frac{25}{2}[2(16) + 24 \\cdot 2] = \\frac{25}{2}[32 + 48] = \\frac{25 \\cdot 80}{2} = 1000$$\n\nChọn A.",
    "socraticHint": "Áp dụng công thức tổng $n$ số hạng đầu cấp số cộng: $S_n = \\frac{n}{2}[2u_1 + (n-1)d]$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 925,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho cấp số cộng $(u_n)$ thỏa mãn hệ thức $u_3 + u_7 = 20$ và $u_2 \\cdot u_6 = 48$, biết công sai $d > 0$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Giải hệ: $u_5 = 10$, $u_2 \\cdot u_6 = (10-3d)(10+d) = 48 \\implies 3d^2 + 20d - 52 = 0 \\implies d = 2$.\nSuy ra $u_1 = 2$, $S_{20} = 420$, $u_{100} = 200$.\n\n\n\nChọn D.",
    "socraticHint": "Sử dụng tính chất đối xứng $u_3 + u_7 = 2u_5$ để tìm ngay $u_5$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Công sai của cấp số cộng là $d = 2$."
      },
      {
        "key": "B",
        "content": "Số hạng đầu của cấp số cộng là $u_1 = 2$."
      },
      {
        "key": "C",
        "content": "Tổng của 20 số hạng đầu tiên $S_{20} = 420$."
      },
      {
        "key": "D",
        "content": "Số hạng thứ 100 của cấp số cộng là $u_{100} = 202$."
      }
    ]
  },
  {
    "id": 926,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 123$ và công sai $d = -4$. Tổng $n$ số hạng đầu tiên $S_n$ đạt giá trị lớn nhất khi $n$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "31",
    "detailedSolution": "Số hạng tổng quát: $u_n = u_1 + (n-1)d = 123 - 4(n-1) = 127 - 4n$.\nVì $d = -4 < 0$ nên dãy số là một dãy giảm.\nTổng $S_n$ đạt giá trị lớn nhất khi ta cộng tất cả các số hạng dương $u_n > 0$:\n$$u_n > 0 \\iff 127 - 4n > 0 \\iff n < \\frac{127}{4} = 31{,}75$$\nDo $n \\in \\mathbb{N}^*$ nên giá trị lớn nhất của $n$ thỏa mãn là $n = 31$.\nKiểm tra: $u_{31} = 127 - 4(31) = 3 > 0$, trong khi $u_{32} = 127 - 4(32) = -1 < 0$.\nVậy $S_n$ đạt GTLN tại $n = 31$.\n\nĐáp số: 31.",
    "socraticHint": "Dãy giảm dần từ dương sang âm, tổng lớn nhất khi lấy hết tất cả số hạng không âm.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 927,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Đầu mỗi tháng, chị Lan gửi vào ngân hàng số tiền 5 triệu đồng với lãi suất $0{,}6\\%$/tháng theo hình thức lãi kép. Biết lãi suất không đổi trong suốt thời gian gửi và chị Lan không rút tiền ra. Sau đúng 3 năm (36 tháng), tổng số tiền cả gốc lẫn lãi chị Lan nhận được là bao nhiêu (làm tròn đến hàng nghìn đồng)?",
    "options": [
      {
        "key": "A",
        "content": "$201.133.000$ đồng"
      },
      {
        "key": "B",
        "content": "$198.500.000$ đồng"
      },
      {
        "key": "C",
        "content": "$215.340.000$ đồng"
      },
      {
        "key": "D",
        "content": "$180.000.000$ đồng"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số tiền gửi đầu mỗi tháng là $A = 5$ triệu đồng, lãi suất $r = 0{,}6\\% = 0{,}006$/tháng, thời gian $n = 36$ tháng.\nKhoản tiền gửi tháng thứ $k$ sẽ sinh lãi trong $36 - k + 1$ tháng.\nTổng số tiền nhận được sau 36 tháng là tổng cấp số nhân:\n$$S_{36} = A(1+r) + A(1+r)^2 + \\dots + A(1+r)^{36} = \\frac{A(1+r)[(1+r)^{36} - 1]}{r}$$\nThay số:\n$$S_{36} = \\frac{5 \\cdot 1{,}006 \\cdot [(1{,}006)^{36} - 1]}{0{,}006} \\approx 201{,}133\\text{ (triệu đồng)} = 201.133.000\\text{ đồng}$$\n\nChọn A.",
    "socraticHint": "Dùng công thức tích lũy định kỳ đầu tháng: $S_n = \\frac{A(1+r)[(1+r)^n - 1]}{r}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 928,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho tam giác đều $T_1$ có diện tích bằng $S_1 = 16\\text{ cm}^2$. Nối trung điểm các cạnh của $T_1$ tạo thành 4 tam giác nhỏ, xóa tam giác ở giữa, còn lại 3 tam giác nhỏ màu đen có tổng diện tích là $S_2$. Ở mỗi bước tiếp theo, chia mỗi tam giác màu đen thành 4 tam giác nhỏ hơn rồi tiếp tục xóa tam giác ở giữa. Gọi $S_n$ là tổng diện tích các tam giác màu đen sau bước thứ $n$. Diện tích $S_5$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{81}{16}\\text{ cm}^2$"
      },
      {
        "key": "B",
        "content": "$\\frac{27}{8}\\text{ cm}^2$"
      },
      {
        "key": "C",
        "content": "$\\frac{243}{64}\\text{ cm}^2$"
      },
      {
        "key": "D",
        "content": "$\\frac{9}{4}\\text{ cm}^2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ở mỗi bước, ta giữ lại $\\frac{3}{4}$ diện tích của bước trước đó.\nDo đó $(S_n)$ là một cấp số nhân có số hạng đầu $S_1 = 16$ và công bội $q = \\frac{3}{4}$.\nSố hạng thứ 5 là:\n$$S_5 = S_1 \\cdot q^4 = 16 \\cdot \\left(\\frac{3}{4}\\right)^4 = 16 \\cdot \\frac{81}{256} = \\frac{81}{16}\\text{ cm}^2$$\n\nChọn A.",
    "socraticHint": "Mỗi lần chia đều và bỏ 1 trong 4 phần thì diện tích còn lại bằng $3/4$ diện tích trước.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 929,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$. Biết tổng $n$ số hạng đầu tiên của cấp số nhân là $S_n = 3069$. Tìm $n$. (Điền số nguyên):",
    "correctAnswer": "10",
    "detailedSolution": "Áp dụng công thức tính tổng $n$ số hạng đầu của cấp số nhân:\n$$S_n = u_1 \\frac{q^n - 1}{q - 1} = 3 \\cdot \\frac{2^n - 1}{2 - 1} = 3(2^n - 1)$$\nTheo giả thiết:\n$$3(2^n - 1) = 3069 \\iff 2^n - 1 = 1023 \\iff 2^n = 1024 = 2^{10} \\iff n = 10$$\n\nĐáp số: 10.",
    "socraticHint": "Giải phương trình mũ $3(2^n - 1) = 3069$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 930,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho ba số thực dương $a, b, c$ theo thứ tự lập thành một cấp số nhân có công bội $q > 1$. Nếu tăng số thứ hai thêm 4 đơn vị thì ba số $a, b+4, c$ lập thành một cấp số cộng. Tiếp tục tăng số thứ ba thêm 32 đơn vị thì ba số $a, b+4, c+32$ lại lập thành một cấp số nhân. Giá trị của tổng $a + b + c$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$26$"
      },
      {
        "key": "B",
        "content": "$32$"
      },
      {
        "key": "C",
        "content": "$18$"
      },
      {
        "key": "D",
        "content": "$30$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $a, b, c$ lập thành CSN nên $b = aq$, $c = aq^2$ ($a > 0, q > 1$).\n1) Ba số $a, b+4, c$ lập thành CSC:\n$$2(aq + 4) = a + aq^2 \\iff a(q^2 - 2q + 1) = 8 \\iff a(q - 1)^2 = 8 \\quad (1)$$\n2) Ba số $a, b+4, c+32$ lập thành CSN:\n$$(aq + 4)^2 = a(aq^2 + 32) \\iff a^2 q^2 + 8aq + 16 = a^2 q^2 + 32a \\iff 8aq + 16 = 32a$$\n$$\\iff 8a(4 - q) = 16 \\iff a(4 - q) = 2 \\quad (2)$$\nLấy (1) chia cho (2):\n$$\\frac{a(q - 1)^2}{a(4 - q)} = \\frac{8}{2} = 4 \\iff (q - 1)^2 = 4(4 - q) \\iff q^2 - 2q + 1 = 16 - 4q$$\n$$\\iff q^2 + 2q - 15 = 0 \\iff (q + 5)(q - 3) = 0$$\nVì $q > 1$ nên $q = 3$.\nThay $q = 3$ vào (2): $a(4 - 3) = 2 \\implies a = 2$.\nSuy ra ba số là: $a = 2, b = 6, c = 18$.\nTổng $a + b + c = 2 + 6 + 18 = 26$.\n\nChọn A.",
    "socraticHint": "Lập 2 phương trình theo $a$ và $q$ từ tính chất số hạng giữa của CSC và CSN.",
    "difficulty": "Vận dụng cao",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 931,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_{n+1} = \\frac{1}{2}u_n + 1$ với mọi $n \\ge 1$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "C",
    "detailedSolution": "Biến đổi về cấp số nhân phụ $v_n = u_n - 2$ ta được $v_n = -(1/2)^{n-1}$.\nDo đó $u_n = 2 - (1/2)^{n-1}$. Dãy số tăng tiệm cận về 2.\n\n\n\nChọn C.",
    "socraticHint": "Dùng dãy phụ $v_n = u_n - c$ với $c = \\frac{1}{1 - 1/2} = 2$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Đặt $v_n = u_n - 2$, dãy số $(v_n)$ là cấp số nhân có công bội $q = \\frac{1}{2}$."
      },
      {
        "key": "B",
        "content": "Số hạng tổng quát của dãy $(u_n)$ là $u_n = 2 - \\left(\\frac{1}{2}\\right)^{n-1}$."
      },
      {
        "key": "C",
        "content": "Dãy số $(u_n)$ là một dãy số giảm."
      },
      {
        "key": "D",
        "content": "Giới hạn của dãy số $\\lim u_n = 2$."
      }
    ]
  },
  {
    "id": 932,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1, u_2 = 2$ và $u_{n+2} = u_{n+1} + u_n$ với mọi $n \\ge 1$. Tính số dư của $u_{2026}$ khi chia cho 3. (Điền số nguyên):",
    "correctAnswer": "2",
    "detailedSolution": "Xét dãy số dư của $u_n$ khi chia cho 3:\n- $u_1 \\equiv 1 \\pmod 3$\n- $u_2 \\equiv 2 \\pmod 3$\n- $u_3 = 1 + 2 = 3 \\equiv 0 \\pmod 3$\n- $u_4 = 2 + 0 = 2 \\equiv 2 \\pmod 3$\n- $u_5 = 0 + 2 = 2 \\equiv 2 \\pmod 3$\n- $u_6 = 2 + 2 = 4 \\equiv 1 \\pmod 3$\n- $u_7 = 2 + 1 = 3 \\equiv 0 \\pmod 3$\n- $u_8 = 1 + 0 = 1 \\equiv 1 \\pmod 3$\n- $u_9 = 0 + 1 = 1 \\equiv 1 \\pmod 3$\n- $u_{10} = 1 + 1 = 2 \\equiv 2 \\pmod 3$.\nNhư vậy dãy số dư tuần hoàn với chu kỳ $T = 8$: $(1, 2, 0, 2, 2, 1, 0, 1)$.\nTa có $2026 = 8 \\times 253 + 2$.\nDo đó số dư của $u_{2026}$ khi chia cho 3 bằng số dư của $u_2$, tức là bằng 2.\n\nĐáp số: 2.",
    "socraticHint": "Dãy số dư modulo 3 tuần hoàn, hãy lập bảng dư vài số hạng đầu để tìm chu kỳ.",
    "difficulty": "Vận dụng cao",
    "track": "HSA",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 933,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho hình vuông thứ nhất cạnh $a_1 = 8\\text{ cm}$. Người ta dựng hình vuông thứ hai có các đỉnh là trung điểm các cạnh hình vuông thứ nhất; dựng hình vuông thứ ba có các đỉnh là trung điểm các cạnh hình vuông thứ hai; và cứ tiếp tục như vậy vô hạn lần. Tổng chu vi của tất cả các hình vuông tạo thành là:",
    "options": [
      {
        "key": "A",
        "content": "$64 + 32\\sqrt{2}\\text{ cm}$"
      },
      {
        "key": "B",
        "content": "$32 + 32\\sqrt{2}\\text{ cm}$"
      },
      {
        "key": "C",
        "content": "$32 + 16\\sqrt{2}\\text{ cm}$"
      },
      {
        "key": "D",
        "content": "$64\\sqrt{2}\\text{ cm}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cạnh của hình vuông thứ hai: $a_2 = \\sqrt{(a_1/2)^2 + (a_1/2)^2} = \\frac{a_1}{\\sqrt{2}}$.\nTương tự, $a_{n+1} = \\frac{a_n}{\\sqrt{2}}$.\nChu vi của hình vuông thứ $n$ là $P_n = 4a_n$.\nDãy chu vi $(P_n)$ là cấp số nhân lùi vô hạn với số hạng đầu $P_1 = 4(8) = 32\\text{ cm}$ và công bội $q = \\frac{1}{\\sqrt{2}} < 1$.\nTổng chu vi của tất cả các hình vuông là:\n$$S = \\frac{P_1}{1 - q} = \\frac{32}{1 - \\frac{1}{\\sqrt{2}}} = \\frac{32\\sqrt{2}}{\\sqrt{2} - 1} = 32\\sqrt{2}(\\sqrt{2} + 1) = 64 + 32\\sqrt{2}\\text{ cm}$$\n\nChọn A.",
    "socraticHint": "Tổng chu vi là tổng cấp số nhân lùi vô hạn với $q = 1/\\sqrt{2}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 934,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho dãy số $(u_n)$ xác định bởi $u_1 = 3$ và $u_{n+1} = \\frac{u_n}{1 + 2u_n}$ với mọi $n \\ge 1$. Số hạng tổng quát $u_n$ của dãy số là:",
    "options": [
      {
        "key": "A",
        "content": "$u_n = \\frac{3}{6n - 5}$"
      },
      {
        "key": "B",
        "content": "$u_n = \\frac{3}{2n + 1}$"
      },
      {
        "key": "C",
        "content": "$u_n = \\frac{1}{2n + 1}$"
      },
      {
        "key": "D",
        "content": "$u_n = \\frac{3}{6n + 1}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $u_1 = 3 > 0$ nên bằng quy nạp ta có $u_n > 0$ với mọi $n \\ge 1$.\nLấy nghịch đảo hai vế của hệ thức truy hồi:\n$$\\frac{1}{u_{n+1}} = \\frac{1 + 2u_n}{u_n} = \\frac{1}{u_n} + 2$$\nĐặt $v_n = \\frac{1}{u_n}$, ta có $v_{n+1} = v_n + 2$.\nDo đó $(v_n)$ là cấp số cộng có $v_1 = \\frac{1}{u_1} = \\frac{1}{3}$ và công sai $d = 2$.\nSố hạng tổng quát của $v_n$ là:\n$$v_n = v_1 + (n-1)d = \\frac{1}{3} + 2(n-1) = \\frac{1 + 6n - 6}{3} = \\frac{6n - 5}{3}$$\nSuy ra:\n$$u_n = \\frac{1}{v_n} = \\frac{3}{6n - 5}$$\n\nChọn A.",
    "socraticHint": "Lấy nghịch đảo hai vế để quy về cấp số cộng của dãy $v_n = 1/u_n$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 935,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Một đa giác lồi có $n$ cạnh và các góc trong của nó lập thành một cấp số cộng có công sai $d = 5^\\circ$. Biết góc nhỏ nhất của đa giác bằng $120^\\circ$. Tìm số cạnh $n$ của đa giác. (Điền số nguyên):",
    "correctAnswer": "9",
    "detailedSolution": "Tổng các góc trong của một đa giác lồi $n$ cạnh là $(n - 2) \\cdot 180^\\circ$.\nMặt khác, theo công thức tổng cấp số cộng:\n$$S_n = \\frac{n}{2}[2(120^\\circ) + (n-1) \\cdot 5^\\circ] = \\frac{n(5n + 235)}{2}$$\nTa có phương trình:\n$$\\frac{n(5n + 235)}{2} = 180(n - 2) \\iff 5n^2 + 235n = 360n - 720$$\n$$\\iff 5n^2 - 125n + 720 = 0 \\iff n^2 - 25n + 144 = 0 \\iff (n - 9)(n - 16) = 0$$\n- Với $n = 16$: góc lớn nhất là $u_{16} = 120^\\circ + 15 \\cdot 5^\\circ = 195^\\circ > 180^\\circ$ (loại vì đa giác lồi thì mọi góc trong phải $< 180^\\circ$).\n- Với $n = 9$: góc lớn nhất là $u_9 = 120^\\circ + 8 \\cdot 5^\\circ = 160^\\circ < 180^\\circ$ (thỏa mãn).\nVậy đa giác có $n = 9$ cạnh.\n\nĐáp số: 9.",
    "socraticHint": "Lưu ý điều kiện đa giác lồi: góc trong lớn nhất không được vượt quá $180^\\circ$.",
    "difficulty": "Vận dụng",
    "track": "HSA",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 936,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Một mẻ vi khuẩn ban đầu có 1.000 con. Cứ sau mỗi giờ, số lượng vi khuẩn tăng gấp đôi. Tuy nhiên, sau mỗi khoảng thời gian 2 giờ (ở cuối giờ thứ 2, thứ 4, ...), người ta đưa thuốc kháng sinh vào tiêu diệt 500 con vi khuẩn ngay sau khi chúng vừa nhân đôi. Số lượng vi khuẩn ở cuối giờ thứ 4 là:",
    "options": [
      {
        "key": "A",
        "content": "$13.500$ con"
      },
      {
        "key": "B",
        "content": "$14.000$ con"
      },
      {
        "key": "C",
        "content": "$15.500$ con"
      },
      {
        "key": "D",
        "content": "$12.000$ con"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tính tuần tự qua từng giờ:\n- Ban đầu: 1.000 con.\n- Cuối giờ 1: $1.000 \\times 2 = 2.000$ con.\n- Cuối giờ 2: $2.000 \\times 2 - 500 = 3.500$ con.\n- Cuối giờ 3: $3.500 \\times 2 = 7.000$ con.\n- Cuối giờ 4: $7.000 \\times 2 - 500 = 13.500$ con.\n\nChọn A.",
    "socraticHint": "Lưu ý trừ 500 con ở các mốc giờ chẵn (giờ 2 và giờ 4).",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 937,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho bốn số nguyên $x, y, z, t$ thỏa mãn: ba số đầu $x, y, z$ theo thứ tự lập thành một cấp số cộng với công sai $d < 0$, ba số sau $y, z, t$ theo thứ tự lập thành một cấp số nhân. Biết rằng $x + t = 14$ và $y + z = 12$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Giải hệ: $x = 12, y = 8, z = 4, t = 2$. Khi đó CSC có $d = -4$, CSN có $q = 1/2$, tích là 768, tổng là 26.\n\n\n\nChọn D.",
    "socraticHint": "Dùng quan hệ $2y = x + z$ và $z^2 = yt$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Công sai của cấp số cộng $x, y, z$ là $d = -4$."
      },
      {
        "key": "B",
        "content": "Công bội của cấp số nhân $y, z, t$ là $q = \\frac{1}{2}$."
      },
      {
        "key": "C",
        "content": "Tích bốn số $x \\cdot y \\cdot z \\cdot t = 768$."
      },
      {
        "key": "D",
        "content": "Tổng bốn số $x + y + z + t = 28$."
      }
    ]
  },
  {
    "id": 938,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Một chiếc ô tô có giá mua mới là 800 triệu đồng. Cứ sau mỗi năm sử dụng, giá trị của chiếc ô tô giảm $10\\%$ so với giá trị của năm liền trước đó. Sau ít nhất bao nhiêu năm thì giá trị của chiếc ô tô còn lại dưới 400 triệu đồng?",
    "options": [
      {
        "key": "A",
        "content": "$7$ năm"
      },
      {
        "key": "B",
        "content": "$6$ năm"
      },
      {
        "key": "C",
        "content": "$8$ năm"
      },
      {
        "key": "D",
        "content": "$5$ năm"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Giá trị xe sau $n$ năm sử dụng là:\n$$V_n = 800 \\cdot (1 - 0{,}1)^n = 800 \\cdot (0{,}9)^n\\text{ (triệu đồng)}$$\nĐể giá trị xe dưới 400 triệu đồng:\n$$800 \\cdot (0{,}9)^n < 400 \\iff (0{,}9)^n < 0{,}5 \\iff n > \\log_{0{,}9}(0{,}5) = \\frac{\\ln 0{,}5}{\\ln 0{,}9} \\approx 6{,}58$$\nVì $n$ là số nguyên dương nên giá trị nhỏ nhất của $n$ là $n = 7$ năm.\n\nChọn A.",
    "socraticHint": "Dùng bất phương trình mũ $V_0 \\cdot (1 - r)^n < V$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 939,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\frac{1}{n(n+1)(n+2)}$. Tính giá trị của biểu thức $12 \\cdot \\lim_{n \\to \\infty} \\sum_{k=1}^n u_k$. (Điền số nguyên):",
    "correctAnswer": "3",
    "detailedSolution": "Ta có phân tích sai phân:\n$$u_k = \\frac{1}{k(k+1)(k+2)} = \\frac{1}{2}\\left( \\frac{1}{k(k+1)} - \\frac{1}{(k+1)(k+2)} \\right)$$\nTổng $n$ số hạng đầu là:\n$$S_n = \\sum_{k=1}^n u_k = \\frac{1}{2}\\left[ \\left(\\frac{1}{1 \\cdot 2} - \\frac{1}{2 \\cdot 3}\\right) + \\dots + \\left(\\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)}\\right) \\right]$$\n$$S_n = \\frac{1}{2}\\left[ \\frac{1}{2} - \\frac{1}{(n+1)(n+2)} \\right]$$\nKhi $n \\to \\infty$, ta có $\\lim_{n \\to \\infty} S_n = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$.\nVậy giá trị cần tính: $12 \\cdot \\frac{1}{4} = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Tách phân số thành hiệu: $\\frac{1}{k(k+1)(k+2)} = \\frac{1}{2}\\left( \\frac{1}{k(k+1)} - \\frac{1}{(k+1)(k+2)} \\right)$.",
    "difficulty": "Vận dụng",
    "track": "HSA",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 940,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = -2$ và công bội $q = -3$. Số $486$ là số hạng thứ mấy của cấp số nhân?",
    "options": [
      {
        "key": "A",
        "content": "Thứ 6"
      },
      {
        "key": "B",
        "content": "Thứ 5"
      },
      {
        "key": "C",
        "content": "Thứ 7"
      },
      {
        "key": "D",
        "content": "Không thuộc dãy"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số hạng tổng quát: $u_n = u_1 \\cdot q^{n-1} = (-2) \\cdot (-3)^{n-1}$.\nTheo đề bài:\n$$(-2) \\cdot (-3)^{n-1} = 486 \\iff (-3)^{n-1} = -243 = (-3)^5 \\iff n - 1 = 5 \\iff n = 6$$\nVậy 486 là số hạng thứ 6 của cấp số nhân.\n\nChọn A.",
    "socraticHint": "Giải phương trình $u_1 \\cdot q^{n-1} = 486$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 941,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Tính tổng $S = C_{20}^1 + 2 C_{20}^2 + 3 C_{20}^3 + \\dots + 20 C_{20}^{20}$:",
    "options": [
      {
        "key": "A",
        "content": "$20 \\cdot 2^{19}$"
      },
      {
        "key": "B",
        "content": "$19 \\cdot 2^{20}$"
      },
      {
        "key": "C",
        "content": "$20 \\cdot 2^{20}$"
      },
      {
        "key": "D",
        "content": "$21 \\cdot 2^{19}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng hệ thức tổ hợp $k C_n^k = n C_{n-1}^{k-1}$ với $1 \\le k \\le n$:\n$$S = \\sum_{k=1}^{20} k C_{20}^k = \\sum_{k=1}^{20} 20 C_{19}^{k-1} = 20 \\left( C_{19}^0 + C_{19}^1 + \\dots + C_{19}^{19} \\right)$$\nTa biết tổng $\\sum_{j=0}^{19} C_{19}^j = 2^{19}$.\nDo đó: $S = 20 \\cdot 2^{19}$.\n\nChọn A.",
    "socraticHint": "Dùng công thức $k C_n^k = n C_{n-1}^{k-1}$ hoặc lấy đạo hàm hàm số $(1+x)^{20}$ tại $x=1$.",
    "difficulty": "Vận dụng",
    "track": "HSA",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 942,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho dãy số $(u_n)$ xác định bởi $u_n = \\frac{(-1)^n n}{n^2 + 1}$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "C",
    "detailedSolution": "Dãy số đan dấu, $|u_n| \\le 1/2$ nên bị chặn, và có giới hạn bằng 0.\n\n\n\nChọn C.",
    "socraticHint": "Đánh giá $|u_n| = \\frac{n}{n^2+1} \\le \\frac{1}{2}$ bằng BĐT Cauchy.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Dãy số $(u_n)$ là một dãy số đan dấu."
      },
      {
        "key": "B",
        "content": "Số hạng thứ 3 của dãy là $u_3 = -\\frac{3}{10}$."
      },
      {
        "key": "C",
        "content": "Dãy số $(u_n)$ không bị chặn."
      },
      {
        "key": "D",
        "content": "Giới hạn của dãy số $\\lim u_n = 0$."
      }
    ]
  },
  {
    "id": 943,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho ba số thực $a, b, c$ lập thành một cấp số cộng tăng có tổng bằng 15 và tích bằng 80. Tìm giá trị của số lớn nhất trong ba số đó ($c$). (Điền số nguyên):",
    "correctAnswer": "8",
    "detailedSolution": "Gọi ba số lập thành cấp số cộng tăng là $b - d, b, b + d$ với công sai $d > 0$.\n- Tổng ba số: $(b - d) + b + (b + d) = 3b = 15 \\implies b = 5$.\n- Tích ba số: $(5 - d) \\cdot 5 \\cdot (5 + d) = 80 \\iff 25 - d^2 = 16 \\iff d^2 = 9$.\nVì cấp số cộng tăng nên $d = 3$.\nBa số đó lần lượt là $a = 5 - 3 = 2$, $b = 5$, $c = 5 + 3 = 8$.\nSố lớn nhất là $c = 8$.\n\nĐáp số: 8.",
    "socraticHint": "Đặt ba số hạng đối xứng $b-d, b, b+d$ để tìm được $b$ ngay lập tức.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 944,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 1^2 + 2^2 + 3^2 + \\dots + n^2$. Giới hạn $\\lim \\frac{u_n}{n^3}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{6}$"
      },
      {
        "key": "C",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có công thức tổng bình phương các số tự nhiên liên tiếp:\n$$u_n = \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6} = \\frac{2n^3 + 3n^2 + n}{6}$$\nDo đó:\n$$\\lim \\frac{u_n}{n^3} = \\lim \\frac{2n^3 + 3n^2 + n}{6n^3} = \\frac{2}{6} = \\frac{1}{3}$$\n\nChọn A.",
    "socraticHint": "Dùng công thức tổng bình phương $\\frac{n(n+1)(2n+1)}{6}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 945,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Một tờ giấy có độ dày $0{,}1\\text{ mm}$. Giả sử có thể gập đôi tờ giấy liên tiếp nhiều lần. Sau ít nhất bao nhiêu lần gập đôi thì bề dày của thếp giấy vượt quá chiều cao đỉnh Fansipan ($3143\\text{ m}$)? (Điền số nguyên):",
    "correctAnswer": "25",
    "detailedSolution": "Đổi $3143\\text{ m} = 3.143.000\\text{ mm}$.\nSau $n$ lần gập đôi, bề dày của thếp giấy tăng gấp $2^n$ lần và bằng:\n$$d_n = 0{,}1 \\cdot 2^n\\text{ (mm)}$$\nĐể bề dày vượt quá đỉnh Fansipan:\n$$0{,}1 \\cdot 2^n > 3.143.000 \\iff 2^n > 31.430.000$$\nTa có:\n- $2^{24} = 16.777.216 < 31.430.000$\n- $2^{25} = 33.554.432 > 31.430.000$\nVậy cần ít nhất 25 lần gập đôi.\n\nĐáp số: 25.",
    "socraticHint": "Bề dày tăng theo cấp số nhân $0{,}1 \\cdot 2^n$ (mm). Đổi đơn vị sang mm trước khi so sánh.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  }
];
