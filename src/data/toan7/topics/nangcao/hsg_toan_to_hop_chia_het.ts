import { Question } from "../../../../types/exam";

export const HSG_TOAN_TO_HOP_CHIA_HET_QUESTIONS: Question[] = [
  {
    "id": 430,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Có 5 người bắt tay nhau đôi một. Hỏi có tất cả bao nhiêu cái bắt tay? (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "Số cái bắt tay là số cặp chọn 2 người từ 5 người:\n$$C_5^2 = \\frac{5 \\times 4}{2} = 10$$\n\nĐáp số: 10.",
    "socraticHint": "Mỗi người bắt tay với 4 người khác, chia cho 2 vì lặp lại.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 431,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Chọn ngẫu nhiên 6 số từ tập $\\{1; 2; 3; 4; 5; 6; 7; 8; 9; 10\\}$. Khẳng định nào sau đây chắc chắn đúng?",
    "options": [
      {
        "key": "A",
        "content": "Luôn chọn được 2 số có tổng bằng 11"
      },
      {
        "key": "B",
        "content": "Luôn chọn được 2 số có tích bằng 20"
      },
      {
        "key": "C",
        "content": "Tất cả các số chọn ra đều là số chẵn"
      },
      {
        "key": "D",
        "content": "Không có hai số nào có hiệu bằng 1"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia 10 số thành 5 cặp có tổng bằng 11: $\\{(1, 10); (2, 9); (3, 8); (4, 7); (5, 6)\\}$.\nTheo nguyên lý Dirichlet, khi chọn 6 số từ 5 cặp này, chắc chắn có ít nhất 2 số cùng thuộc một cặp, tức có tổng bằng 11.\n\nChọn A.",
    "socraticHint": "Chia 10 số thành 5 cặp có tổng bằng 11 theo nguyên lý Dirichlet.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 432,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Tìm hai chữ số tận cùng của số $A = 2^{2024}$. (Điền số nguyên hai chữ số):",
    "correctAnswer": "76",
    "acceptableAnswers": [
      "76"
    ],
    "detailedSolution": "Ta có tính chất: $2^{20} \\equiv 76 \\pmod{100}$ và $76^n \\equiv 76 \\pmod{100}$.\nVì $2024 = 20 \\times 101 + 4$ nên:\n$$2^{2024} = (2^{20})^{101} \\times 2^4 \\equiv 76 \\times 16 = 1216 \\equiv 16 \\pmod{100}$$\nKhoan: $76 \\times 16 = 1216$, hai chữ số tận cùng là 16!\nThử lại: $2^{10} = 1024 \\equiv 24 \\pmod{100}$.\n$2^{20} = 1024^2 \\equiv 24^2 = 576 \\equiv 76 \\pmod{100}$.\n$2^{2020} \\equiv 76 \\pmod{100}$.\n$2^{2024} = 2^{2020} \\times 2^4 \\equiv 76 \\times 16 = 1216 \\equiv 16 \\pmod{100}$.\nVậy hai chữ số tận cùng là 16!\n\nĐáp số: 16.",
    "socraticHint": "$2^{20} \\equiv 76 \\pmod{100}$ và $76 \\times 16 \\equiv 16 \\pmod{100}$.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 433,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Trong một hộp có 10 viên bi đỏ, 8 viên bi xanh và 6 viên bi vàng. Cần lấy ra ít nhất bao nhiêu viên bi (không nhìn vào hộp) để chắc chắn có ít nhất 1 viên bi màu vàng?",
    "options": [
      {
        "key": "A",
        "content": "$19$ viên"
      },
      {
        "key": "B",
        "content": "$18$ viên"
      },
      {
        "key": "C",
        "content": "$7$ viên"
      },
      {
        "key": "D",
        "content": "$24$ viên"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét trường hợp xấu nhất: lấy hết tất cả bi đỏ và bi xanh mà vẫn chưa có bi vàng.\nSố bi lấy ra khi đó: $10 + 8 = 18$ viên.\nCần lấy thêm $1$ viên nữa chắc chắn sẽ được viên bi màu vàng: $18 + 1 = 19$ viên.\n\nChọn A.",
    "socraticHint": "Nguyên lý Dirichlet xét trường hợp rủi ro xấu nhất.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 434,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Một giải bóng đá có 8 đội tham gia thi đấu vòng tròn một lượt (mỗi đội đều gặp nhau đúng một lần). Tổng số trận đấu trong giải là bao nhiêu trận? (Điền số nguyên):",
    "correctAnswer": "28",
    "acceptableAnswers": [
      "28"
    ],
    "detailedSolution": "Số trận đấu là: $\\frac{8 \\times 7}{2} = 28$ trận.\n\nĐáp số: 28.",
    "socraticHint": "Công thức thi đấu vòng tròn: $\\frac{n(n-1)}{2}$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 435,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Cho 5 điểm phân biệt trên mặt phẳng sao cho không có 3 điểm nào thẳng hàng. Số đoạn thẳng nối từng cặp điểm là:",
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
        "content": "$15$"
      },
      {
        "key": "D",
        "content": "$20$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số đoạn thẳng là $\\frac{5 \\times 4}{2} = 10$.\n\nChọn A.",
    "socraticHint": "Mỗi cặp điểm xác định một đoạn thẳng: $C_5^2 = 10$.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 436,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Có bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau được lập từ các chữ số $\\{1; 2; 3; 4; 5\\}$? (Điền số nguyên):",
    "correctAnswer": "60",
    "acceptableAnswers": [
      "60"
    ],
    "detailedSolution": "Số cách chọn chữ số hàng trăm: 5 cách.\nSố cách chọn chữ số hàng chục: 4 cách.\nSố cách chọn chữ số hàng đơn vị: 3 cách.\nTổng số các số lập được là: $5 \\times 4 \\times 3 = 60$.\n\nĐáp số: 60.",
    "socraticHint": "Quy tắc nhân: $5 \\times 4 \\times 3$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 437,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Trong một lớp học có 37 học sinh. Khẳng định nào sau đây luôn đúng theo nguyên lý Dirichlet?",
    "options": [
      {
        "key": "A",
        "content": "Có ít nhất 4 học sinh sinh cùng một tháng"
      },
      {
        "key": "B",
        "content": "Có ít nhất 5 học sinh sinh cùng một tháng"
      },
      {
        "key": "C",
        "content": "Tất cả các tháng đều có học sinh sinh ra"
      },
      {
        "key": "D",
        "content": "Không có 2 học sinh nào sinh cùng ngày"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Có 12 tháng trong năm. Ta có $37 = 3 \\times 12 + 1$.\nTheo nguyên lý Dirichlet, tồn tại ít nhất $3 + 1 = 4$ học sinh sinh cùng một tháng.\n\nChọn A.",
    "socraticHint": "$37 = 12 \\times 3 + 1$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 438,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Tìm số dư của số $A = 3^{105} + 4^{105}$ khi chia cho 7. (Điền số nguyên từ 0 đến 6):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0"
    ],
    "detailedSolution": "Ta có $4 \\equiv -3 \\pmod 7$.\nVì $105$ là số lẻ nên $4^{105} \\equiv (-3)^{105} = -3^{105} \\pmod 7$.\nDo đó $A = 3^{105} + 4^{105} \\equiv 3^{105} - 3^{105} = 0 \\pmod 7$.\nVậy $A$ chia hết cho 7, số dư bằng 0.\n\nĐáp số: 0.",
    "socraticHint": "$4 \\equiv -3 \\pmod 7$, số mũ 105 là số lẻ.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 439,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Hai bạn An và Bình chơi trò chơi bốc sỏi: Có 21 viên sỏi trên bàn, mỗi lượt mỗi người được bốc từ 1 đến 3 viên sỏi. Người bốc viên sỏi cuối cùng là người chiến thắng. Ai có chiến thuật chắc chắn thắng nếu chơi tối ưu?",
    "options": [
      {
        "key": "A",
        "content": "Người đi trước (An)"
      },
      {
        "key": "B",
        "content": "Người đi sau (Bình)"
      },
      {
        "key": "C",
        "content": "Tùy thuộc vào may rủi"
      },
      {
        "key": "D",
        "content": "Luôn hòa"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Mỗi lượt hai người có thể bốc tổng cộng $1 + 3 = 4$ viên.\nTa lấy $21 : 4 = 5$ dư 1.\nNgười đi trước (An) bốc trước 1 viên sỏi, để lại 20 viên sỏi (bội số của 4). Sau đó đối thủ bốc $k$ viên thì An bốc $4 - k$ viên. An luôn bốc được viên cuối cùng và chiến thắng.\n\nChọn A.",
    "socraticHint": "Lấy tổng số sỏi chia cho $(1 + 3) = 4$, số dư chính là số viên người đi trước cần bốc.",
    "difficulty": "Vận dụng cao",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 440,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Tìm số tự nhiên $n$ nhỏ nhất sao cho $2^n - 1$ chia hết cho 31. (Điền số nguyên):",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "detailedSolution": "$2^5 - 1 = 32 - 1 = 31$ chia hết cho 31. Do đó $n = 5$.\n\nĐáp số: 5.",
    "socraticHint": "$2^5 = 32$.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 441,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Có 4 bạn học sinh cùng ngồi vào một bàn tròn có 4 ghế. Số cách sắp xếp vị trí ngồi khác nhau (chỉ tính vị trí tương đối) là:",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$24$"
      },
      {
        "key": "C",
        "content": "$12$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số hoán vị vòng quanh của 4 phần tử là $(4 - 1)! = 3! = 6$.\n\nChọn A.",
    "socraticHint": "Công thức xếp bàn tròn $n$ người là $(n - 1)!$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 442,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Tính số hoán vị của tập hợp gồm 4 phần tử phân biệt. (Điền số nguyên):",
    "correctAnswer": "24",
    "acceptableAnswers": [
      "24"
    ],
    "detailedSolution": "$4! = 4 \\times 3 \\times 2 \\times 1 = 24$.\n\nĐáp số: 24.",
    "socraticHint": "Tính $4!$.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 443,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Một số tự nhiên khi chia cho 9 dư 5. Bình phương của số đó khi chia cho 9 sẽ có số dư là:",
    "options": [
      {
        "key": "A",
        "content": "$7$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi số đó là $n \\equiv 5 \\pmod 9$.\nKhi đó $n^2 \\equiv 5^2 = 25 \\pmod 9$.\nVì $25 = 9 \\times 2 + 7$ nên số dư là 7.\n\nChọn A.",
    "socraticHint": "Bình phương số dư: $5^2 = 25$, sau đó chia cho 9.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 444,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Tìm số nguyên dương $n$ để phân số $\\frac{n+7}{n-2}$ là số nguyên tố lớn nhất có thể. Giá trị của phân số đó là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "Ta có $\\frac{n+7}{n-2} = 1 + \\frac{9}{n-2}$.\nĐể biểu thức là số nguyên tố thì $n-2$ phải là ước của 9: Ư$(9) = \\{1; 3; 9\\}$.\n- $n - 2 = 1 \\implies n = 3$, giá trị là $1 + 9 = 10$ (không nguyên tố).\n- $n - 2 = 3 \\implies n = 5$, giá trị là $1 + 3 = 4$ (không nguyên tố).\n- $n - 2 = 9 \\implies n = 11$, giá trị là $1 + 1 = 2$ (số nguyên tố).\n- Với $n - 2 = -1 \\implies n = 1$, giá trị $1 - 9 = -8$ (loại).\nVậy giá trị phân số là số nguyên tố duy nhất là $2$.\n\nĐáp số: 2.",
    "socraticHint": "Thử các ước của 9 để tìm giá trị là số nguyên tố.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 445,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Chọn bất kì 3 số nguyên. Khẳng định nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "Luôn tìm được 2 số có tổng là một số chẵn"
      },
      {
        "key": "B",
        "content": "Luôn tìm được 2 số có tích là một số lẻ"
      },
      {
        "key": "C",
        "content": "Tổng của cả 3 số luôn là một số lẻ"
      },
      {
        "key": "D",
        "content": "Tích của cả 3 số luôn chia hết cho 4"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chỉ có 2 loại tính chẵn lẻ (chẵn hoặc lẻ). Theo nguyên lý Dirichlet, trong 3 số luôn có ít nhất 2 số cùng tính chẵn lẻ. Tổng của hai số cùng chẵn lẻ luôn là một số chẵn.\n\nChọn A.",
    "socraticHint": "Có 3 số nhưng chỉ có 2 tính chẵn hoặc lẻ.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 446,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Có bao nhiêu số tự nhiên chẵn có 3 chữ số? (Điền số nguyên):",
    "correctAnswer": "450",
    "acceptableAnswers": [
      "450"
    ],
    "detailedSolution": "Các số tự nhiên chẵn có 3 chữ số từ 100 đến 998:\n$$(998 - 100) : 2 + 1 = 450$$\n\nĐáp số: 450.",
    "socraticHint": "Từ 100 đến 998 có bao nhiêu số chẵn cách đều 2 đơn vị?",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 447,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Một hình vuông cạnh $2\\text{ cm}$ chứa 5 điểm phân biệt. Chứng minh luôn có 2 điểm mà khoảng cách giữa chúng không vượt quá $\\sqrt{2}\\text{ cm}$. Khẳng định này chứng minh bằng cách chia hình vuông thành mấy phần bằng nhau?",
    "options": [
      {
        "key": "A",
        "content": "$4$ hình vuông nhỏ cạnh $1\\text{ cm}$"
      },
      {
        "key": "B",
        "content": "$2$ hình chữ nhật"
      },
      {
        "key": "C",
        "content": "$3$ phần bằng nhau"
      },
      {
        "key": "D",
        "content": "$5$ hình tam giác"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia hình vuông cạnh 2 thành 4 hình vuông nhỏ cạnh 1. Đường chéo hình vuông nhỏ là $\\sqrt{1^2 + 1^2} = \\sqrt{2}$.\nTheo nguyên lý Dirichlet, 5 điểm vào 4 hình vuông nhỏ thì luôn có 2 điểm cùng nằm trong 1 hình vuông nhỏ, khoảng cách tối đa là đường chéo $\\sqrt{2}$.\n\nChọn A.",
    "socraticHint": "Chia hình vuông thành 4 ô vuông nhỏ có cạnh bằng 1.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 448,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Tìm số dư của $10^{100}$ khi chia cho 9. (Điền số nguyên):",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "detailedSolution": "$10 \\equiv 1 \\pmod 9 \\implies 10^{100} \\equiv 1^{100} = 1 \\pmod 9$.\n\nĐáp số: 1.",
    "socraticHint": "$10$ chia cho 9 dư 1.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 449,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Một người tung một đồng xu 10 lần liên tiếp. Số khả năng kết quả khác nhau có thể xảy ra là:",
    "options": [
      {
        "key": "A",
        "content": "$1024$"
      },
      {
        "key": "B",
        "content": "$20$"
      },
      {
        "key": "C",
        "content": "$100$"
      },
      {
        "key": "D",
        "content": "$512$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Mỗi lần tung có 2 khả năng (sấp hoặc ngửa). 10 lần liên tiếp có tổng cộng $2^{10} = 1024$ khả năng.\n\nChọn A.",
    "socraticHint": "$2^{10} = 1024$.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
