import { Question } from '../../../types/exam';

export const ch10Toan10NangCaoPart2Questions: Question[] = [
  {
    "id": 1071,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Một chiếc cổng chào có hình dạng một parabol $y = ax^2 + bx + c$. Chiều rộng của cổng tại mặt đất là 8 m và chiều cao tại đỉnh là 4 m. Người ta muốn lắp một khung chữ nhật bên trong cổng để treo băng rôn sao cho chiều rộng của khung là 4 m. Chiều cao của khung chữ nhật đó bằng:",
    "options": [
      {
        "key": "A",
        "content": "$3\\text{ m}$"
      },
      {
        "key": "B",
        "content": "$2\\text{ m}$"
      },
      {
        "key": "C",
        "content": "$3{,}5\\text{ m}$"
      },
      {
        "key": "D",
        "content": "$2{,}5\\text{ m}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chọn hệ trục tọa độ $Oxy$ sao cho gốc $O$ là trung điểm chân cổng, trục $Oy$ trùng với trục đối xứng của parabol.\nĐỉnh của parabol nằm tại $(0; 4)$. Chân cổng nằm tại $(-4; 0)$ và $(4; 0)$.\nPhương trình parabol có dạng $y = 4 - k x^2$.\nTại điểm chân cổng $x = 4 \\implies 0 = 4 - k(4^2) \\iff 16k = 4 \\iff k = \\frac{1}{4}$.\nVậy phương trình cổng parabol là $y = 4 - \\frac{1}{4}x^2$.\nKhung chữ nhật có chiều rộng 4 m nên hai mép bên tương ứng với $x = -2$ và $x = 2$.\nChiều cao của khung chữ nhật là tung độ tại $x = 2$:\n$$h = y(2) = 4 - \\frac{1}{4}(2^2) = 4 - 1 = 3\\text{ (m)}$$\n\nChọn A.",
    "socraticHint": "Chọn hệ tọa độ có trục đối xứng trùng với $Oy$ để lập phương trình parabol dạng $y = h - kx^2$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1072,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Ở chiếc cổng parabol trên ($y = 4 - \\frac{1}{4}x^2$), nếu khung chữ nhật cần đạt chiều cao $3{,}75\\text{ m}$ thì chiều rộng của khung bằng bao nhiêu mét? (Điền số nguyên):",
    "correctAnswer": "2",
    "detailedSolution": "Thay chiều cao $y = 3{,}75$ vào phương trình parabol:\n$$3{,}75 = 4 - \\frac{1}{4}x^2 \\iff \\frac{1}{4}x^2 = 0{,}25 \\iff x^2 = 1 \\iff x = \\pm 1$$\nChiều rộng của khung chữ nhật là khoảng cách giữa hai mép đối xứng:\n$$W = 2|x| = 2 \\times 1 = 2\\text{ (m)}$$\n\nĐáp số: 2.",
    "socraticHint": "Giải phương trình $4 - \\frac{1}{4}x^2 = 3{,}75$ để tìm hoành độ, chiều rộng bằng $2x$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1073,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Trái Đất chuyển động quanh Mặt Trời theo quỹ đạo là một elip có Mặt Trời nằm tại một tiêu điểm. Biết độ dài trục lớn của quỹ đạo elip là $2a = 300$ triệu km và tâm sai là $e = 0{,}017$. Khoảng cách gần nhất từ Trái Đất đến Mặt Trời (điểm cận nhật) bằng:",
    "options": [
      {
        "key": "A",
        "content": "$147{,}45\\text{ triệu km}$"
      },
      {
        "key": "B",
        "content": "$152{,}55\\text{ triệu km}$"
      },
      {
        "key": "C",
        "content": "$150\\text{ triệu km}$"
      },
      {
        "key": "D",
        "content": "$145\\text{ triệu km}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Bán trục lớn của elip là $a = \\frac{300}{2} = 150\\text{ (triệu km)}$.\nBán tiêu cự $c = a \\cdot e = 150 \\cdot 0{,}017 = 2{,}55\\text{ (triệu km)}$.\nKhoảng cách gần nhất từ một điểm trên elip đến tiêu điểm (điểm cận nhật) là:\n$$r_{\\min} = a - c = 150 - 2{,}55 = 147{,}45\\text{ (triệu km)}$$\n\nChọn A.",
    "socraticHint": "Khoảng cách gần nhất từ elip đến tiêu điểm là $r_{\\min} = a - c = a(1 - e)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1074,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Khoảng cách xa nhất từ Trái Đất đến Mặt Trời (điểm viễn nhật) ở bài toán trên bằng bao nhiêu triệu km? (Điền số thập phân, ví dụ 152.55):",
    "correctAnswer": "152.55",
    "detailedSolution": "Khoảng cách xa nhất từ một điểm trên elip đến tiêu điểm (điểm viễn nhật) là:\n$$r_{\\max} = a + c = 150 + 2{,}55 = 152{,}55\\text{ (triệu km)}$$\n\nĐáp số: 152.55.",
    "socraticHint": "Khoảng cách xa nhất từ elip đến tiêu điểm là $r_{\\max} = a + c = a(1 + e)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1075,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Cho elip $(E)$ có phương trình chính tắc $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Elip có trục lớn 10, trục nhỏ 6, tiêu cự 8 và tâm sai $e = 4/5$.\n\n\n\nChọn D.",
    "socraticHint": "Dùng các hệ thức cơ bản của elip: $c^2 = a^2 - b^2$ và $e = c/a$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Độ dài trục lớn là $2a = 10$ và độ dài trục nhỏ là $2b = 6$."
      },
      {
        "key": "B",
        "content": "Tiêu cự của elip là $2c = 8$."
      },
      {
        "key": "C",
        "content": "Tọa độ hai tiêu điểm của elip là $F_1(-4; 0)$ và $F_2(4; 0)$."
      },
      {
        "key": "D",
        "content": "Tâm sai của elip là $e = \\frac{3}{5}$."
      }
    ]
  },
  {
    "id": 1076,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$. Tính chu vi của hình chữ nhật cơ sở của elip. (Điền số nguyên):",
    "correctAnswer": "32",
    "detailedSolution": "Hình chữ nhật cơ sở của elip có kích thước hai cạnh bằng độ dài trục lớn và trục nhỏ: $2a = 10$ và $2b = 6$.\nChu vi của hình chữ nhật cơ sở là:\n$$P = 2(2a + 2b) = 2(10 + 6) = 32$$\n\nĐáp số: 32.",
    "socraticHint": "Hình chữ nhật cơ sở có hai kích thước là $2a$ và $2b$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1077,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng Oxy, phương trình của đường tròn có tâm $I(2; -3)$ và tiếp xúc với trục hoành Ox là:",
    "options": [
      {
        "key": "A",
        "content": "$(x - 2)^2 + (y + 3)^2 = 9$"
      },
      {
        "key": "B",
        "content": "$(x - 2)^2 + (y + 3)^2 = 4$"
      },
      {
        "key": "C",
        "content": "$(x + 2)^2 + (y - 3)^2 = 9$"
      },
      {
        "key": "D",
        "content": "$(x - 2)^2 + (y - 3)^2 = 9$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì đường tròn tiếp xúc với trục hoành Ox ($y = 0$) nên bán kính bằng khoảng cách từ tâm $I(2; -3)$ đến Ox:\n$$R = d(I, Ox) = |-3| = 3$$\nPhương trình đường tròn tâm $I(2; -3)$ bán kính $R = 3$ là:\n$$(x - 2)^2 + (y - (-3))^2 = 3^2 \\iff (x - 2)^2 + (y + 3)^2 = 9$$\n\nChọn A.",
    "socraticHint": "Đường tròn tiếp xúc trục hoành có bán kính $R = |y_I|$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1078,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng Oxy, cho tam giác $OAB$ với $O(0; 0), A(6; 0)$ và $B(0; 8)$. Bán kính đường tròn ngoại tiếp tam giác $OAB$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "5",
    "detailedSolution": "Điểm $A(6; 0)$ nằm trên trục Ox, điểm $B(0; 8)$ nằm trên trục Oy.\nDo đó tam giác $OAB$ vuông tại gốc tọa độ $O$.\nCạnh huyền là:\n$$AB = \\sqrt{OA^2 + OB^2} = \\sqrt{6^2 + 8^2} = 10$$\nBán kính đường tròn ngoại tiếp tam giác vuông bằng một nửa cạnh huyền:\n$$R = \\frac{AB}{2} = \\frac{10}{2} = 5$$\n\nĐáp số: 5.",
    "socraticHint": "Tam giác vuông tại $O$ có bán kính ngoại tiếp bằng một nửa cạnh huyền $AB$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1079,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Cho hyperbol $(H)$ có phương trình chính tắc $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$. Tiêu cự của hyperbol bằng:",
    "options": [
      {
        "key": "A",
        "content": "$10$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$8$"
      },
      {
        "key": "D",
        "content": "$2\\sqrt{7}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $a^2 = 16, b^2 = 9$.\nĐối với hyperbol, hệ thức liên hệ là $c^2 = a^2 + b^2$:\n$$c^2 = 16 + 9 = 25 \\implies c = 5$$\nTiêu cự của hyperbol là khoảng cách giữa hai tiêu điểm:\n$$2c = 2 \\times 5 = 10$$\n\nChọn A.",
    "socraticHint": "Trong hyperbol: $c^2 = a^2 + b^2$, tiêu cự bằng $2c$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1080,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Cho parabol $(P)$ có phương trình chính tắc $y^2 = 8x$. Khoảng cách từ tiêu điểm $F$ đến đường chuẩn $\\Delta$ của parabol bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "4",
    "detailedSolution": "Phương trình chính tắc của parabol có dạng $y^2 = 2px$.\nĐồng nhất hệ số: $2p = 8 \\implies p = 4$.\nKhoảng cách từ tiêu điểm $F\\left(\\frac{p}{2}; 0\\right)$ đến đường chuẩn $\\Delta: x = -\\frac{p}{2}$ chính bằng tham số tiêu $p = 4$.\n\nĐáp số: 4.",
    "socraticHint": "Khoảng cách từ tiêu điểm đến đường chuẩn của parabol chính bằng tham số tiêu $p$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1081,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Một ban chấp hành gồm 7 nam và 5 nữ. Cần bầu ra một ban thường trực gồm 4 người sao cho trong đó có ít nhất một nữ. Số cách chọn là:",
    "options": [
      {
        "key": "A",
        "content": "$460$"
      },
      {
        "key": "B",
        "content": "$495$"
      },
      {
        "key": "C",
        "content": "$350$"
      },
      {
        "key": "D",
        "content": "$420$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số cách chọn 4 người bất kỳ từ $7 + 5 = 12$ người là:\n$$C_{12}^4 = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$$\nSố cách chọn 4 người toàn là nam (không có nữ nào) là:\n$$C_7^4 = \\frac{7 \\cdot 6 \\cdot 5}{6} = 35$$\nSố cách chọn ban thường trực có ít nhất một nữ là:\n$$N = 495 - 35 = 460\\text{ (cách)}$$\n\nChọn A.",
    "socraticHint": "Dùng biến cố đối: lấy tổng số cách chọn trừ đi số cách chọn toàn nam.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1082,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Có 5 học sinh nam và 3 học sinh nữ xếp thành một hàng ngang gồm 8 chiếc ghế. Có bao nhiêu cách xếp chỗ sao cho không có hai bạn nữ nào ngồi cạnh nhau? (Điền số nguyên):",
    "correctAnswer": "14400",
    "detailedSolution": "Xếp 5 học sinh nam vào 5 vị trí trước, có $5! = 120$ cách.\n5 học sinh nam tạo ra 6 khoảng trống (gồm hai đầu và 4 khoảng giữa hai bạn nam):\n$$\\_ N_1 \\_ N_2 \\_ N_3 \\_ N_4 \\_ N_5 \\_$$\nĐể không có hai bạn nữ nào ngồi cạnh nhau, ta chọn 3 trong 6 khoảng trống này và xếp 3 bạn nữ vào, số cách là một chỉnh hợp:\n$$A_6^3 = 6 \\times 5 \\times 4 = 120\\text{ cách}$$\nTheo quy tắc nhân, tổng số cách xếp là:\n$$N = 120 \\times 120 = 14400\\text{ (cách)}$$\n\nĐáp số: 14400.",
    "socraticHint": "Dùng phương pháp vách ngăn: xếp các bạn nam trước rồi chèn các bạn nữ vào các khoảng trống.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1083,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Hai xạ thủ độc lập cùng bắn vào một bia, mỗi người bắn một phát. Xác suất bắn trúng của người thứ nhất là $0{,}8$ và của người thứ hai là $0{,}7$. Xác suất để có ít nhất một người bắn trúng bia là:",
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
        "content": "$0{,}86$"
      },
      {
        "key": "D",
        "content": "$0{,}75$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét biến cố đối $\\bar{A}$: \"Cả hai người đều bắn trượt\".\nXác suất bắn trượt của người thứ nhất là $1 - 0{,}8 = 0{,}2$.\nXác suất bắn trượt của người thứ hai là $1 - 0{,}7 = 0{,}3$.\nVì hai người bắn độc lập nên:\n$$P(\\bar{A}) = 0{,}2 \\times 0{,}3 = 0{,}06$$\nXác suất để có ít nhất một người bắn trúng là:\n$$P(A) = 1 - P(\\bar{A}) = 1 - 0{,}06 = 0{,}94$$\n\nChọn A.",
    "socraticHint": "Dùng xác suất biến cố đối: $P = 1 - P(\\text{cả 2 trượt})$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1084,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Một hộp kín chứa 6 viên bi đỏ và 4 viên bi xanh có cùng kích thước. Lấy ngẫu nhiên đồng thời 3 viên bi. Xác suất để lấy được đúng 2 viên bi đỏ bằng $\\frac{m}{n}$ (phân số tối giản). Tính giá trị của $m + n$. (Điền số nguyên):",
    "correctAnswer": "3",
    "detailedSolution": "Số phần tử của không gian mẫu:\n$$n(\\Omega) = C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$$\nBiến cố $A$: \"Lấy được đúng 2 viên bi đỏ và 1 viên bi xanh\".\nSố kết quả thuận lợi:\n$$n(A) = C_6^2 \\times C_4^1 = 15 \\times 4 = 60$$\nXác suất của biến cố:\n$$P(A) = \\frac{60}{120} = \\frac{1}{2}$$\nPhân số tối giản là $\\frac{1}{2} \\implies m = 1, n = 2$.\nSuy ra $m + n = 1 + 2 = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Chọn 2 bi đỏ từ 6 bi đỏ và 1 bi xanh từ 4 bi xanh.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1085,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Xét khai triển nhị thức Newton $(2x - 1)^5$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Khai triển có 6 số hạng, hệ số của $x^3$ là 80, và tổng tất cả các hệ số bằng 1.\n\n\n\nChọn D.",
    "socraticHint": "Thay $x=1$ để tính nhanh tổng các hệ số của khai triển.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Khai triển có tất cả 6 số hạng."
      },
      {
        "key": "B",
        "content": "Số hạng tổng quát thứ $k+1$ là $T_{k+1} = C_5^k (2x)^{5-k} (-1)^k$ ($0 \\le k \\le 5$)."
      },
      {
        "key": "C",
        "content": "Hệ số của số hạng chứa $x^3$ trong khai triển bằng 80."
      },
      {
        "key": "D",
        "content": "Tổng tất cả các hệ số trong khai triển bằng 32."
      }
    ]
  },
  {
    "id": 1086,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Tìm số hạng không chứa $x$ trong khai triển nhị thức $\\left(x + \\frac{2}{x}\\right)^4$ với $x \\ne 0$. (Điền số nguyên):",
    "correctAnswer": "24",
    "detailedSolution": "Số hạng tổng quát trong khai triển là:\n$$T_{k+1} = C_4^k x^{4-k} \\left(\\frac{2}{x}\\right)^k = C_4^k \\cdot 2^k \\cdot x^{4-2k}$$\nSố hạng không chứa $x$ tương ứng với số mũ $4 - 2k = 0 \\iff k = 2$.\nGiá trị của số hạng đó là:\n$$C_4^2 \\cdot 2^2 = 6 \\times 4 = 24$$\n\nĐáp số: 24.",
    "socraticHint": "Cho số mũ của $x$ bằng 0 để tìm $k$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1087,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Có bao nhiêu cách chia 10 chiếc kẹo giống nhau cho 3 em bé sao cho mỗi em bé đều nhận được ít nhất 1 chiếc kẹo?",
    "options": [
      {
        "key": "A",
        "content": "$36$"
      },
      {
        "key": "B",
        "content": "$45$"
      },
      {
        "key": "C",
        "content": "$55$"
      },
      {
        "key": "D",
        "content": "$28$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số cách chia 10 chiếc kẹo giống nhau cho 3 em bé ($x_1, x_2, x_3 \\ge 1$) chính là số nghiệm nguyên dương của phương trình:\n$$x_1 + x_2 + x_3 = 10$$\nTheo bài toán chia kẹo Euler (bài toán ngôi sao và thanh chắn), số nghiệm nguyên dương là:\n$$C_{n-1}^{k-1} = C_{10-1}^{3-1} = C_9^2 = \\frac{9 \\times 8}{2} = 36$$\n\nChọn A.",
    "socraticHint": "Số cách chia $n$ đồ vật giống nhau cho $k$ người (mỗi người ít nhất 1) là $C_{n-1}^{k-1}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1088,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Gieo ngẫu nhiên đồng thời hai con xúc xắc cân đối và đồng chất. Xác suất để tổng số chấm xuất hiện trên hai mặt bằng 8 là $\\frac{m}{n}$ (phân số tối giản). Tính giá trị của $m + n$. (Điền số nguyên):",
    "correctAnswer": "41",
    "detailedSolution": "Không gian mẫu có $n(\\Omega) = 6 \\times 6 = 36$ biến cố đồng khả năng.\nCác cặp số có tổng bằng 8 là:\n$$(2; 6), (3; 5), (4; 4), (5; 3), (6; 2)$$\nCó tất cả 5 kết quả thuận lợi.\nXác suất là:\n$$P = \\frac{5}{36}$$\nVì $\\frac{5}{36}$ là phân số tối giản nên $m = 5, n = 36$.\nSuy ra $m + n = 5 + 36 = 41$.\n\nĐáp số: 41.",
    "socraticHint": "Liệt kê các cặp có tổng bằng 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1089,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng Oxy, khoảng cách giữa hai đường thẳng song song $\\Delta_1: 3x - 4y + 5 = 0$ và $\\Delta_2: 3x - 4y - 15 = 0$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$4$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Khoảng cách giữa hai đường thẳng song song $Ax + By + C_1 = 0$ và $Ax + By + C_2 = 0$ được tính theo công thức:\n$$d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$$\nThay $A = 3, B = -4, C_1 = 5, C_2 = -15$:\n$$d = \\frac{|5 - (-15)|}{\\sqrt{3^2 + (-4)^2}} = \\frac{20}{5} = 4$$\n\nChọn A.",
    "socraticHint": "Dùng công thức khoảng cách giữa 2 đường thẳng song song: $d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1090,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Trong mặt phẳng Oxy, cho tam giác $OAB$ với $O(0; 0), A(3; 0)$ và $B(0; 4)$. Bán kính đường tròn nội tiếp tam giác $OAB$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "1",
    "detailedSolution": "Tam giác $OAB$ vuông tại $O$ với hai cạnh góc vuông là $a = OA = 3$ và $b = OB = 4$.\nCạnh huyền là $c = AB = \\sqrt{3^2 + 4^2} = 5$.\nBán kính đường tròn nội tiếp của tam giác vuông được tính bằng công thức:\n$$r = \\frac{a + b - c}{2} = \\frac{3 + 4 - 5}{2} = \\frac{2}{2} = 1$$\n\nĐáp số: 1.",
    "socraticHint": "Bán kính nội tiếp tam giác vuông: $r = \\frac{a + b - c}{2}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1091,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Cho elip $(E): \\frac{x^2}{100} + \\frac{y^2}{64} = 1$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Tổng khoảng cách từ điểm bất kỳ trên elip đến hai tiêu điểm bằng độ dài trục lớn $2a = 20$.\n\n\n\nChọn D.",
    "socraticHint": "Theo định nghĩa elip, $MF_1 + MF_2 = 2a$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Tọa độ các đỉnh trên trục lớn là $A_1(-10; 0)$ và $A_2(10; 0)$."
      },
      {
        "key": "B",
        "content": "Tọa độ các đỉnh trên trục nhỏ là $B_1(0; -8)$ và $B_2(0; 8)$."
      },
      {
        "key": "C",
        "content": "Tiêu cự của elip bằng 12."
      },
      {
        "key": "D",
        "content": "Với điểm $M$ bất kỳ trên elip, tổng khoảng cách đến hai tiêu điểm $MF_1 + MF_2 = 16$."
      }
    ]
  },
  {
    "id": 1092,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Cho 10 điểm phân biệt trên một mặt phẳng, trong đó không có 3 điểm nào thẳng hàng. Số tam giác có 3 đỉnh là 3 trong số 10 điểm đã cho bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "120",
    "detailedSolution": "Mỗi bộ ba điểm không thẳng hàng tạo thành đúng một tam giác.\nSố tam giác tạo thành là tổ hợp chập 3 của 10 phần tử:\n$$C_{10}^3 = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$$\n\nĐáp số: 120.",
    "socraticHint": "Chọn 3 điểm bất kỳ từ 10 điểm không thẳng hàng để lập thành tam giác.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1093,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Từ tập các chữ số $\\{1; 2; 3; 4; 5\\}$, có thể lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau và là số chẵn?",
    "options": [
      {
        "key": "A",
        "content": "$24$"
      },
      {
        "key": "B",
        "content": "$48$"
      },
      {
        "key": "C",
        "content": "$36$"
      },
      {
        "key": "D",
        "content": "$60$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi số cần tìm có dạng $\\overline{abc}$ với $a, b, c \\in \\{1; 2; 3; 4; 5\\}$ và $a, b, c$ phân biệt.\n- Vì số là số chẵn nên chữ số hàng đơn vị $c \\in \\{2; 4\\}$ $\\implies$ có 2 cách chọn $c$.\n- Chọn chữ số hàng trăm $a \\in \\{1; 2; 3; 4; 5\\} \\setminus \\{c\\}$ $\\implies$ có 4 cách chọn $a$.\n- Chọn chữ số hàng chục $b \\in \\{1; 2; 3; 4; 5\\} \\setminus \\{a; c\\}$ $\\implies$ có 3 cách chọn $b$.\nTheo quy tắc nhân, số các số chẵn lập được là:\n$$N = 2 \\times 4 \\times 3 = 24\\text{ (số)}$$\n\nChọn A.",
    "socraticHint": "Chọn chữ số hàng đơn vị chẵn trước, sau đó chọn các chữ số còn lại.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1094,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Hình học tọa độ Oxy: Đường tròn & Ba đường Conic",
    "content": "Phương trình tiếp tuyến của đường tròn $(C): x^2 + y^2 = 25$ tại điểm $M(3; 4)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$3x + 4y - 25 = 0$"
      },
      {
        "key": "B",
        "content": "$3x - 4y + 7 = 0$"
      },
      {
        "key": "C",
        "content": "$4x + 3y - 25 = 0$"
      },
      {
        "key": "D",
        "content": "$3x + 4y + 25 = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đường tròn $(C)$ có tâm $O(0; 0)$ và bán kính $R = 5$.\nĐiểm $M(3; 4)$ nằm trên đường tròn vì $3^2 + 4^2 = 25$.\nTiếp tuyến tại điểm $M(x_0; y_0)$ có vector pháp tuyến là $\\vec{OM} = (3; 4)$.\nPhương trình tiếp tuyến là:\n$$3(x - 3) + 4(y - 4) = 0 \\iff 3x + 4y - 25 = 0$$\n\nChọn A.",
    "socraticHint": "Phương trình tiếp tuyến tại điểm $M(x_0; y_0)$ thuộc đường tròn $x^2 + y^2 = R^2$ là $x_0 x + y_0 y = R^2$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1095,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Từ một cỗ bài tây 52 lá tiêu chuẩn, rút ngẫu nhiên 1 lá bài. Xác suất để rút được một lá bài màu đỏ hoặc một lá bài hình Át (A) bằng $\\frac{m}{n}$ (phân số tối giản). Tính giá trị của $m + n$. (Điền số nguyên):",
    "correctAnswer": "20",
    "detailedSolution": "Cỗ bài tây gồm 52 lá bài.\n- Số lá bài màu đỏ (chất cơ và rô): 26 lá.\n- Số lá bài hình Át: 4 lá (gồm 2 Át đỏ và 2 Át đen).\nSố lá bài thỏa mãn biến cố (lá đỏ hoặc Át) là:\n$$n = 26 + 2 = 28\\text{ (lá)}$$\nXác suất rút được lá bài thỏa mãn là:\n$$P = \\frac{28}{52} = \\frac{7}{13}$$\nVì $\\frac{7}{13}$ là phân số tối giản nên $m = 7, n = 13$.\nSuy ra $m + n = 7 + 13 = 20$.\n\nĐáp số: 20.",
    "socraticHint": "Lưu ý trừ đi phần giao giữa lá đỏ và lá Át (2 lá Át đỏ).",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  }
];
