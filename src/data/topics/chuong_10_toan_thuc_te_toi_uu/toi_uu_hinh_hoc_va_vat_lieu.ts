import { Question } from '../../../types/exam';

export const toiUuHinhHocQuestions: Question[] = [
  {
    "id": 32,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "topicName": "Tối ưu hóa hình học, Vật liệu & Nồng độ",
    "content": "Một mảnh đất hình chữ nhật giáp bờ sông thẳng có lưới rào 3 cạnh dài $120$ m (không rào phía bờ sông). Diện tích rào lớn nhất là:",
    "options": [
      {
        "key": "A",
        "content": "$1800\\text{ m}^2$"
      },
      {
        "key": "B",
        "content": "$900\\text{ m}^2$"
      },
      {
        "key": "C",
        "content": "$2400\\text{ m}^2$"
      },
      {
        "key": "D",
        "content": "$1200\\text{ m}^2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi chiều rộng hai cạnh là $x \\implies$ chiều dài song song bờ sông là $120 - 2x$.\nDiện tích: $S(x) = x(120 - 2x) = -2x^2 + 120x$.\nĐỉnh parabol tại $x = 30 \\implies S_{\\max} = 30(60) = 1800\\text{ m}^2$.",
    "socraticHint": "Lập hàm diện tích theo một biến rồi tìm giá trị lớn nhất của tam thức bậc hai.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 46,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "topicName": "Tối ưu hóa hình học, Vật liệu & Nồng độ",
    "content": "Bể bơi thể tích $108\\text{ m}^3$, đáy chữ nhật dài gấp đôi rộng. Chi phí mua gạch lát đáy và 4 thành bể nhỏ nhất khi chiều sâu bể bằng bao nhiêu mét?",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3",
      "3.0"
    ],
    "detailedSolution": "Gọi chiều rộng là $x$, chiều dài là $2x$, chiều sâu là $h \\implies V = 2x^2 h = 108 \\implies h = \\frac{54}{x^2}$.\nDiện tích lát gạch: $S = 2x^2 + 6xh = 2x^2 + \\frac{324}{x}$.\nÁp dụng AM-GM cho 3 số: $2x^2 + \\frac{162}{x} + \\frac{162}{x} \\ge 3\\sqrt[3]{2x^2 \\frac{162^2}{x^2}} = 54$.\nDấu bằng xảy ra khi $2x^2 = \\frac{162}{x} \\iff x^3 = 27 \\implies x = 3$.\nChiều sâu $h = \\frac{54}{3^2} = 3$ mét.",
    "socraticHint": "Thế $h$ theo $x$ rồi áp dụng bất đẳng thức AM-GM 3 số.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 131,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "topicName": "Tối ưu hóa hình học, Vật liệu & Nồng độ",
    "content": "Một người thợ nhôm kính muốn uốn một thanh nhôm dài 12 m thành khung cửa sổ hình chữ nhật. Để diện tích của khung cửa sổ lớn nhất nhằm thu được nhiều ánh sáng nhất, độ dài hai cạnh của khung cửa sổ lần lượt là:",
    "options": [
      {
        "key": "A",
        "content": "$3\\text{ m và } 3\\text{ m}$"
      },
      {
        "key": "B",
        "content": "$4\\text{ m và } 2\\text{ m}$"
      },
      {
        "key": "C",
        "content": "$5\\text{ m và } 1\\text{ m}$"
      },
      {
        "key": "D",
        "content": "$3.5\\text{ m và } 2.5\\text{ m}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $x, y$ là độ dài hai cạnh của khung hình chữ nhật ($x, y > 0$).\nChu vi của khung: $2(x + y) = 12 \\implies x + y = 6$.\nDiện tích khung: $S = x \\cdot y$.\nTheo bất đẳng thức AM-GM:\n$$S = xy \\le l\\left(\\frac{x + y}{2}\\right)^2 = l\\left(\\frac{6}{2}\\right)^2 = 9\\text{ m}^2$$\nDấu bằng xảy ra khi và chỉ khi $x = y = 3\\text{ m}$.\nVậy khung hình chữ nhật trở thành hình vuông có cạnh $3\\text{ m}$.",
    "socraticHint": "Trong các hình chữ nhật có cùng chu vi, hình vuông luôn có diện tích lớn nhất.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 147,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "topicName": "Tối ưu hóa hình học, Vật liệu & Nồng độ",
    "content": "Từ một tấm tôn hình vuông cạnh 12 cm, người ta cắt bỏ 4 hình vuông bằng nhau cạnh $x\\text{ cm}$ ở bốn góc rồi gập các mép lại để tạo thành một chiếc hộp không nắp. Thể tích lớn nhất của chiếc hộp bằng bao nhiêu $\\text{cm}^3$?",
    "correctAnswer": "128",
    "acceptableAnswers": [
      "128",
      "128.0"
    ],
    "detailedSolution": "Sau khi cắt, đáy hộp là hình vuông cạnh $12 - 2x$ và chiều cao của hộp là $x$ ($0 < x < 6$).\nThể tích của hộp:\n$$V(x) = x(12 - 2x)^2 = 4x(6 - x)^2 = 4x(x^2 - 12x + 36) = 4(x^3 - 12x^2 + 36x)$$\nĐạo hàm:\n$$V'(x) = 4(3x^2 - 24x + 36) = 12(x^2 - 8x + 12) = 12(x - 2)(x - 6)$$\nTrên khoảng $(0; 6)$, $V'(x) = 0 \\iff x = 2$.\nThể tích lớn nhất đạt được tại $x = 2$:\n$$V(2) = 2(12 - 2 \\times 2)^2 = 2 \\times 8^2 = 2 \\times 64 = 128\\text{ cm}^3$$.",
    "socraticHint": "Biểu diễn thể tích $V(x) = x(12-2x)^2$, tính đạo hàm $V'(x) = 0$ để tìm điểm cực đại.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 180,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "topicName": "Tối ưu hóa hình học, Vật liệu & Nồng độ",
    "content": "Một gia đình muốn xây một bể chứa nước không nắp có dạng hình hộp chữ nhật với thể tích $V = 32\\text{ m}^3$ và đáy là hình vuông cạnh $x\\text{ m}$. Để tiết kiệm chi phí xây dựng (tương đương với diện tích toàn phần của bể nhỏ nhất), độ dài cạnh đáy $x$ phải bằng:",
    "options": [
      {
        "key": "A",
        "content": "$4\\text{ m}$"
      },
      {
        "key": "B",
        "content": "$2\\text{ m}$"
      },
      {
        "key": "C",
        "content": "$8\\text{ m}$"
      },
      {
        "key": "D",
        "content": "$3\\text{ m}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $h$ là chiều cao của bể. Thể tích $V = x^2 h = 32 \\implies h = \\frac{32}{x^2}$.\nDiện tích toàn phần (gồm 1 đáy và 4 mặt bên do không có nắp):\n$$S(x) = x^2 + 4xh = x^2 + 4x \\cdot \\frac{32}{x^2} = x^2 + \\frac{128}{x} = x^2 + \\frac{64}{x} + \\frac{64}{x}$$\nÁp dụng bất đẳng thức AM-GM cho 3 số dương:\n$$S(x) \\ge 3 \\sqrt[3]{x^2 \\cdot \\frac{64}{x} \\cdot \\frac{64}{x}} = 3 \\sqrt[3]{4096} = 3 \\times 16 = 48\\text{ m}^2$$\nDấu bằng xảy ra khi $x^2 = \\frac{64}{x} \\iff x^3 = 64 \\iff x = 4\\text{ m}$.",
    "socraticHint": "Lập hàm diện tích xây dựng theo cạnh đáy $x$, dùng bất đẳng thức AM-GM hoặc đạo hàm để tìm cực tiểu.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 197,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "topicName": "Tối ưu hóa hình học, Vật liệu & Nồng độ",
    "content": "Một người nông dân dùng một cuộn lưới thép dài 60 m để rào một mảnh vườn hình chữ nhật tựa vào một bức tường đá thẳng có sẵn (không cần rào phía bờ tường). Diện tích lớn nhất của mảnh vườn bằng bao nhiêu $\\text{m}^2$?",
    "correctAnswer": "450",
    "acceptableAnswers": [
      "450",
      "450.0"
    ],
    "detailedSolution": "Gọi cạnh vuông góc với tường là $x\\text{ m}$ ($x > 0$). Vì có hai cạnh này nên chiều dài cạnh song song với tường là $60 - 2x\\text{ m}$.\nĐiều kiện: $0 < x < 30$.\nDiện tích mảnh vườn rào được:\n$$S(x) = x(60 - 2x) = 60x - 2x^2 = -2(x^2 - 30x) = -2(x - 15)^2 + 450$$\nVì $-2(x - 15)^2 \\le 0$ nên $S(x) \\le 450$.\nDấu bằng xảy ra khi $x = 15\\text{ m}$ (khi đó chiều dài là $60 - 2(15) = 30\\text{ m}$).\nDiện tích lớn nhất bằng $450\\text{ m}^2$.",
    "socraticHint": "Tổng chiều dài lưới là $2x + y = 60$, lập hàm diện tích $S(x) = x(60-2x)$ và tìm đỉnh parabol.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 250,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "topicName": "Tối ưu hóa hình học, Vật liệu & Nồng độ",
    "content": "Một ô tô có bốn chiếc lốp xe giống nhau. Nếu gắn ở hai bánh trước thì mỗi lốp sử dụng được tối đa $60\\,000\\text{ km}$, còn nếu gắn ở hai bánh sau thì mỗi lốp sử dụng được tối đa $90\\,000\\text{ km}$. Để sử dụng lốp xe được tối ưu, sau khi đi được một quãng đường nhất định, người ta tiến hành hoán đổi vị trí các lốp trước và lốp sau. Quãng đường lớn nhất mà ô tô có thể đi được với bộ lốp trên là bao nhiêu nghìn kilômét?",
    "options": [],
    "correctAnswer": "72",
    "acceptableAnswers": [
      "72",
      "72.0",
      "72000"
    ],
    "detailedSolution": "Quy ước độ mòn tối đa của một chiếc lốp xe khi hết hạn sử dụng là $1$ (hay $100\\%$):\n- Mỗi kilômét đi ở vị trí bánh trước làm mòn $\\frac{1}{60000}$ độ bền của lốp.\n- Mỗi kilômét đi ở vị trí bánh sau làm mòn $\\frac{1}{90000}$ độ bền của lốp.\n\nGiả sử ô tô chạy $x\\text{ km}$ trước khi hoán đổi lốp, và sau khi hoán đổi chạy thêm $y\\text{ km}$ cho đến khi lốp mòn hết hoàn toàn.\n- Hai chiếc lốp ban đầu lắp ở bánh trước (đi $x\\text{ km}$ trước, $y\\text{ km}$ sau): độ mòn là $\\frac{x}{60000} + \\frac{y}{90000} \\le 1$.\n- Hai chiếc lốp ban đầu lắp ở bánh sau (đi $x\\text{ km}$ sau, $y\\text{ km}$ trước): độ mòn là $\\frac{x}{90000} + \\frac{y}{60000} \\le 1$.\n\nCộng vế với vế của hai bất đẳng thức trên:\n$$\\left(\\frac{1}{60000} + \\frac{1}{90000}\\right)(x + y) \\le 1 + 1 = 2$$\n$$\\left(\\frac{3 + 2}{180000}\\right)(x + y) \\le 2 \\iff \\frac{5}{180000}(x + y) \\le 2$$\n$$\\iff \\frac{1}{36000}(x + y) \\le 2 \\implies x + y \\le 2 \\times 36000 = 72000\\text{ km}$$\nĐẳng thức xảy ra khi và chỉ khi $x = y = 36\\,000\\text{ km}$.\nTức là sau khi xe chạy được $36\\,000\\text{ km}$, ta hoán đổi vị trí hai lốp trước và hai lốp sau cho nhau, xe sẽ chạy thêm được $36\\,000\\text{ km}$ nữa.\nTổng quãng đường tối đa ô tô đi được là $72\\,000\\text{ km} = 72$ nghìn kilômét.\nSố cần nhập vào ô trống là $72$.",
    "socraticHint": "Tính tỉ lệ mòn lốp trên mỗi km ở bánh trước và bánh sau, lập hệ bất phương trình độ mòn rồi cộng vế theo vế.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 262,
    "latexVerified": true,
    "type": "fill",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "content": "Loài côn trùng A thụ phấn cho thực vật B. Giả sử số cây được thụ phấn thành công sau $t$ tháng (kể từ khi hoa nở) được mô hình hóa bởi hàm số: $f(t) = \\frac{40t}{t^2 + 5}$. Hỏi sau bao nhiêu tháng thì số cây được thụ phấn thành công đạt cực đại? (Làm tròn kết quả đến hàng đơn vị).",
    "correctAnswer": "2",
    "detailedSolution": "Xét hàm số $f(t) = \\frac{40t}{t^2 + 5}$ với $t > 0$.\nĐạo hàm:\n$$f'(t) = \\frac{40(t^2 + 5) - 40t(2t)}{(t^2 + 5)^2} = \\frac{40(5 - t^2)}{(t^2 + 5)^2}$$\nCho $f'(t) = 0 \\iff 5 - t^2 = 0 \\iff t = \\sqrt{5} \\approx 2{,}236$ (tháng) do $t > 0$.\nBảng biến thiên cho thấy $f'(t) > 0$ trên $(0; \\sqrt{5})$ và $f'(t) < 0$ trên $(\\sqrt{5}; +\\infty)$, do đó hàm số đạt cực đại tại $t = \\sqrt{5}$.\nLàm tròn đến hàng đơn vị: $t \\approx 2$ tháng.",
    "socraticHint": "Tìm điểm cực trị bằng cách giải phương trình đạo hàm $f'(t) = 0$ trên miền $t > 0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tối ưu hóa hình học, Vật liệu & Nồng độ",
    "chapterId": "chuong_10_toan_thuc_te_toi_uu",
    "chapterName": "Chương 10: Toán ứng dụng & Mô hình hóa tối ưu"
  }
];
