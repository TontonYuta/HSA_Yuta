import { Question } from '../../../../types/exam';

export const CHUONG_8_BIEN_CO_XAC_SUAT_QUESTIONS: Question[] = [
  {
    "id": 166,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Khái niệm biến cố",
    "content": "Gieo một con xúc xắc 6 mặt cân đối. Biến cố nào sau đây là \"Biến cố chắc chắn\"?",
    "options": [
      {
        "key": "A",
        "content": "Mặt xuất hiện có số chấm là số chẵn"
      },
      {
        "key": "B",
        "content": "Mặt xuất hiện có số chấm lớn hơn 0 và nhỏ hơn 7"
      },
      {
        "key": "C",
        "content": "Mặt xuất hiện có số chấm chia hết cho 5"
      },
      {
        "key": "D",
        "content": "Mặt xuất hiện có số chấm bằng 8"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Các mặt của xúc xắc có số chấm là $\\{1, 2, 3, 4, 5, 6\\}$, tất cả đều lớn hơn 0 và nhỏ hơn 7, do đó biến cố này luôn luôn xảy ra (biến cố chắc chắn).\n\nChọn B.",
    "socraticHint": "Biến cố chắc chắn là biến cố luôn luôn xảy ra trong mọi trường hợp.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 167,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Khái niệm biến cố",
    "content": "Tung một đồng xu một lần. Biến cố nào sau đây là \"Biến cố không thể\"?",
    "options": [
      {
        "key": "A",
        "content": "Đồng xu xuất hiện mặt ngửa"
      },
      {
        "key": "B",
        "content": "Đồng xu xuất hiện mặt sấp"
      },
      {
        "key": "C",
        "content": "Đồng xu xuất hiện cả mặt sấp và mặt ngửa cùng lúc"
      },
      {
        "key": "D",
        "content": "Đồng xu rơi xuống sàn"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Một đồng xu rơi xuống chỉ có thể ngửa hoặc sấp, không thể đồng thời xuất hiện cả hai mặt.\n\nChọn C.",
    "socraticHint": "Biến cố không bao giờ có thể xảy ra gọi là biến cố không thể.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 168,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Gieo ngẫu nhiên một con xúc xắc 6 mặt đồng chất. Xác suất xuất hiện mặt có số chấm là số nguyên tố là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{6}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Có 6 kết quả có thể: $\\{1; 2; 3; 4; 5; 6\\}$. Các số nguyên tố là $\\{2; 3; 5\\}$ (3 kết quả thuận lợi). Xác suất là $\\frac{3}{6} = \\frac{1}{2}$.\n\nChọn A.",
    "socraticHint": "Các số nguyên tố từ 1 đến 6 là 2, 3, 5.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 169,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Một hộp có $5$ viên bi xanh và $15$ viên bi đỏ có cùng kích thước. Lấy ngẫu nhiên $1$ viên bi. Xác suất để lấy được viên bi màu xanh là bao nhiêu? (Nhập dưới dạng phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "1/4",
    "acceptableAnswers": [
      "1/4",
      "0.25",
      "0,25"
    ],
    "detailedSolution": "Tổng số bi là $5 + 15 = 20$. Xác suất lấy bi xanh là $\\frac{5}{20} = \\frac{1}{4} = 0{,}25$.\n\nĐáp số: 1/4.",
    "socraticHint": "Lấy số bi xanh chia cho tổng số bi trong hộp.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 170,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Xác suất của biến cố chắc chắn luôn luôn bằng bao nhiêu?",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$0{,}5$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$100$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Theo định nghĩa xác suất, biến cố chắc chắn có xác suất bằng $1$, biến cố không thể có xác suất bằng $0$.\n\nChọn C.",
    "socraticHint": "Biến cố luôn xảy ra có tỉ lệ xảy ra là 100%, tức 1.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 171,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Một túi đựng các tấm thẻ được đánh số từ $1$ đến $10$. Rút ngẫu nhiên một tấm thẻ. Xác suất rút được tấm thẻ ghi số chia hết cho $3$ là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "3/10",
    "acceptableAnswers": [
      "3/10",
      "0.3",
      "0,3"
    ],
    "detailedSolution": "Các số từ 1 đến 10 chia hết cho 3 là: $\\{3; 6; 9\\}$ (có 3 kết quả thuận lợi). Xác suất là $\\frac{3}{10} = 0{,}3$.\n\nĐáp số: 3/10.",
    "socraticHint": "Có 3 số chia hết cho 3 trong 10 số.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 172,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất thực nghiệm",
    "content": "Một xạ thủ bắn $100$ viên đạn vào bia, trong đó có $82$ viên trúng vòng 10. Xác suất thực nghiệm bắn trúng vòng 10 của xạ thủ đó là:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}82$"
      },
      {
        "key": "B",
        "content": "$0{,}18$"
      },
      {
        "key": "C",
        "content": "$82$"
      },
      {
        "key": "D",
        "content": "$100$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xác suất thực nghiệm bằng số lần biến cố xảy ra chia cho tổng số lần thử: $\\frac{82}{100} = 0{,}82$.\n\nChọn A.",
    "socraticHint": "Lấy số phát trúng chia cho tổng số phát bắn.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 173,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất thực nghiệm",
    "content": "Tung một đồng xu $50$ lần thì thấy có $27$ lần xuất hiện mặt ngửa. Xác suất thực nghiệm xuất hiện mặt sấp là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "23/50",
    "acceptableAnswers": [
      "23/50",
      "0.46",
      "0,46"
    ],
    "detailedSolution": "Số lần xuất hiện mặt sấp là: $50 - 27 = 23$ lần. Xác suất thực nghiệm mặt sấp là $\\frac{23}{50} = 0{,}46$.\n\nĐáp số: 23/50.",
    "socraticHint": "Tính số lần xuất hiện mặt sấp trước: $50 - 27$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 174,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Khái niệm biến cố",
    "content": "Trong các sự kiện sau, sự kiện nào là biến cố ngẫu nhiên?",
    "options": [
      {
        "key": "A",
        "content": "Ngày mai mặt trời mọc ở hướng Đông"
      },
      {
        "key": "B",
        "content": "Gieo con xúc xắc được mặt 7 chấm"
      },
      {
        "key": "C",
        "content": "Ngày mai trời có mưa tại Hà Nội"
      },
      {
        "key": "D",
        "content": "Nước đóng băng ở 100 độ C ở áp suất tiêu chuẩn"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Ngày mai có mưa hay không là biến cố chưa biết chắc chắn, có thể xảy ra hoặc không xảy ra nên là biến cố ngẫu nhiên.\n\nChọn C.",
    "socraticHint": "Biến cố ngẫu nhiên có thể xảy ra hoặc không xảy ra tùy thuộc vào yếu tố ngẫu nhiên.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 175,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Gieo đồng thời hai con xúc xắc cân đối. Có tất cả bao nhiêu kết quả có thể xảy ra? (Điền số nguyên):",
    "correctAnswer": "36",
    "acceptableAnswers": [
      "36"
    ],
    "detailedSolution": "Mỗi con xúc xắc có 6 khả năng. Hai con xúc xắc có tổng số kết quả là $6 \\times 6 = 36$.\n\nĐáp số: 36.",
    "socraticHint": "Áp dụng quy tắc nhân: $6 \\times 6$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 176,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Một lớp có $20$ bạn nam và $20$ bạn nữ. Chọn ngẫu nhiên $1$ bạn làm lớp trưởng. Xác suất chọn được bạn nữ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{4}$"
      },
      {
        "key": "C",
        "content": "$\\frac{1}{20}$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tổng số học sinh là $40$. Xác suất chọn bạn nữ là $\\frac{20}{40} = \\frac{1}{2}$.\n\nChọn A.",
    "socraticHint": "Số nam và nữ bằng nhau nên cơ hội là 50%.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 177,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Chọn ngẫu nhiên một số tự nhiên có một chữ số (từ $0$ đến $9$). Xác suất để chọn được số chẵn là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "1/2",
    "acceptableAnswers": [
      "1/2",
      "0.5",
      "0,5"
    ],
    "detailedSolution": "Có 10 số tự nhiên có một chữ số: $\\{0; 1; 2; ... ; 9\\}$. Các số chẵn là $\\{0; 2; 4; 6; 8\\}$ (5 số). Xác suất là $\\frac{5}{10} = \\frac{1}{2}$.\n\nĐáp số: 1/2.",
    "socraticHint": "Lưu ý số 0 cũng là một số chẵn.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 178,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Biết xác suất của biến cố $A$ là $P(A) = 0{,}35$. Xác suất của biến cố không xảy ra $A$ (biến cố đối) là:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}65$"
      },
      {
        "key": "B",
        "content": "$0{,}35$"
      },
      {
        "key": "C",
        "content": "$0$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tổng xác suất của biến cố và biến cố đối luôn bằng $1$. Do đó xác suất cần tìm là $1 - 0{,}35 = 0{,}65$.\n\nChọn A.",
    "socraticHint": "Lấy $1$ trừ đi xác suất của biến cố $A$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 179,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Một hộp đựng $3$ quả cầu đỏ, $4$ quả cầu xanh và $5$ quả cầu vàng có kích thước như nhau. Lấy ngẫu nhiên $1$ quả. Xác suất lấy được quả cầu không phải màu đỏ là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "3/4",
    "acceptableAnswers": [
      "3/4",
      "0.75",
      "0,75"
    ],
    "detailedSolution": "Tổng số quả cầu là $3 + 4 + 5 = 12$. Quả cầu không phải màu đỏ là xanh hoặc vàng ($4 + 5 = 9$ quả). Xác suất là $\\frac{9}{12} = \\frac{3}{4} = 0{,}75$.\n\nĐáp số: 3/4.",
    "socraticHint": "Có 9 quả bóng màu xanh hoặc vàng trong tổng số 12 quả.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 180,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Khái niệm biến cố",
    "content": "Khi gieo một con xúc xắc 6 mặt, biến cố nào sau đây có xác suất bằng 0?",
    "options": [
      {
        "key": "A",
        "content": "Xuất hiện mặt có số chấm chia hết cho 7"
      },
      {
        "key": "B",
        "content": "Xuất hiện mặt có số chấm là số lẻ"
      },
      {
        "key": "C",
        "content": "Xuất hiện mặt 6 chấm"
      },
      {
        "key": "D",
        "content": "Xuất hiện mặt có số chấm nhỏ hơn 5"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số chấm trên các mặt là $\\{1, 2, 3, 4, 5, 6\\}$, không có số nào chia hết cho 7 nên biến cố này là không thể, xác suất bằng 0.\n\nChọn A.",
    "socraticHint": "Biến cố không thể xảy ra luôn có xác suất bằng 0.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 181,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Gieo một con xúc xắc 6 mặt cân đối. Xác suất xuất hiện mặt có số chấm là ước của 6 là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "2/3",
    "acceptableAnswers": [
      "2/3"
    ],
    "detailedSolution": "Các ước của 6 trong tập $\\{1; 2; 3; 4; 5; 6\\}$ là: $\\{1; 2; 3; 6\\}$ (4 kết quả thuận lợi). Xác suất là $\\frac{4}{6} = \\frac{2}{3}$.\n\nĐáp số: 2/3.",
    "socraticHint": "Liệt kê các số từ 1 đến 6 mà 6 chia hết cho nó.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 182,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất thực nghiệm",
    "content": "Thực hiện quay một tấm bia tròn chia 4 phần bằng nhau $200$ lần, mũi tên dừng lại ở ô vàng $48$ lần. Xác suất thực nghiệm để mũi tên dừng ở ô vàng là:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}24$"
      },
      {
        "key": "B",
        "content": "$0{,}48$"
      },
      {
        "key": "C",
        "content": "$0{,}25$"
      },
      {
        "key": "D",
        "content": "$0{,}5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xác suất thực nghiệm là $\\frac{48}{200} = \\frac{24}{100} = 0{,}24$.\n\nChọn A.",
    "socraticHint": "Lấy 48 chia cho 200.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 183,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Một hộp có chứa $20$ chiếc thẻ ghi các số tự nhiên từ $1$ đến $20$. Rút ngẫu nhiên một thẻ, xác suất để rút được thẻ ghi số chính phương là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "1/5",
    "acceptableAnswers": [
      "1/5",
      "0.2",
      "0,2"
    ],
    "detailedSolution": "Các số chính phương từ 1 đến 20 là: $\\{1; 4; 9; 16\\}$ (4 số). Xác suất là $\\frac{4}{20} = \\frac{1}{5} = 0{,}2$.\n\nĐáp số: 1/5.",
    "socraticHint": "Số chính phương là bình phương của số tự nhiên: 1, 4, 9, 16.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 184,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Khi số lần thực nghiệm ngày càng lớn thì xác suất thực nghiệm của một biến cố sẽ có xu hướng thế nào?",
    "options": [
      {
        "key": "A",
        "content": "Ngày càng gần với xác suất lý thuyết của biến cố đó"
      },
      {
        "key": "B",
        "content": "Luôn luôn giảm dần về 0"
      },
      {
        "key": "C",
        "content": "Luôn luôn tăng dần lên 1"
      },
      {
        "key": "D",
        "content": "Dao động ngẫu nhiên không có quy luật"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo luật số lớn trong xác suất thống kê, khi số phép thử đủ lớn, xác suất thực nghiệm sẽ hội tụ và xấp xỉ xác suất lý thuyết.\n\nChọn A.",
    "socraticHint": "Càng thử nhiều lần thì kết quả thực tế càng sát với lý thuyết.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 185,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Gieo đồng thời hai đồng xu cân đối và đồng chất. Xác suất để cả hai đồng xu cùng xuất hiện mặt ngửa là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "1/4",
    "acceptableAnswers": [
      "1/4",
      "0.25",
      "0,25"
    ],
    "detailedSolution": "Có 4 kết quả đồng khả năng: $\\{(S,S); (S,N); (N,S); (N,N)\\}$. Kết quả cùng ngửa là $(N,N)$ (1 kết quả). Xác suất là $\\frac{1}{4} = 0{,}25$.\n\nĐáp số: 1/4.",
    "socraticHint": "Tổng số kết quả là $2 \\times 2 = 4$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  }
];
