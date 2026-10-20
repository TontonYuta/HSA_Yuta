import { Question } from '../../../../types/exam';

export const CHUONG_7_DA_THUC_QUESTIONS: Question[] = [
  {
    "id": 146,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Biểu thức đại số",
    "content": "Biểu thức đại số biểu thị diện tích hình chữ nhật có chiều dài là $x$ và chiều rộng kém chiều dài $3\\text{ cm}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x(x - 3)$"
      },
      {
        "key": "B",
        "content": "$x(x + 3)$"
      },
      {
        "key": "C",
        "content": "$2(x + x - 3)$"
      },
      {
        "key": "D",
        "content": "$x^2 - 3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chiều rộng là $x - 3$. Diện tích là dài nhân rộng: $x(x - 3)$.\n\nChọn A.",
    "socraticHint": "Diện tích hình chữ nhật bằng tích hai kích thước.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 147,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Biểu thức đại số",
    "content": "Giá trị của biểu thức $A = 2x^2 - 3x + 1$ tại $x = -2$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "15",
    "acceptableAnswers": [
      "15"
    ],
    "detailedSolution": "Thay $x = -2$ vào $A$:\n$$A = 2(-2)^2 - 3(-2) + 1 = 2 \\cdot 4 + 6 + 1 = 8 + 6 + 1 = 15$$\n\nĐáp số: 15.",
    "socraticHint": "Lưu ý $(-2)^2 = 4$ và $-3(-2) = +6$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 148,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Đa thức một biến",
    "content": "Bậc của đa thức $P(x) = 5x^4 - 2x^3 + 7x^4 + 3x - 12x^4 + 1$ là:",
    "options": [
      {
        "key": "A",
        "content": "$4$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Thu gọn đa thức:\n$$P(x) = (5 + 7 - 12)x^4 - 2x^3 + 3x + 1 = -2x^3 + 3x + 1$$\nHạng tử bậc cao nhất là $-2x^3$ nên bậc của đa thức là $3$.\n\nChọn B.",
    "socraticHint": "Thu gọn các hạng tử đồng dạng trước khi xác định bậc.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 149,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Đa thức một biến",
    "content": "Hệ số cao nhất của đa thức $Q(x) = -4x^3 + 7x^5 - 2x + 9$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "detailedSolution": "Bậc cao nhất là $5$ với số mũ $x^5$, hệ số đi cùng $x^5$ là $7$.\n\nĐáp số: 7.",
    "socraticHint": "Tìm hệ số của lũy thừa có số mũ lớn nhất.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 150,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Đa thức một biến",
    "content": "Hệ số tự do của đa thức $M(x) = 3x^3 - 5x + 8$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "8",
    "acceptableAnswers": [
      "8"
    ],
    "detailedSolution": "Hệ số tự do là hạng tử không chứa biến $x$, ở đây là $8$.\n\nĐáp số: 8.",
    "socraticHint": "Hạng tử tự do tương ứng với bậc 0.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 151,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Cộng trừ đa thức một biến",
    "content": "Cho $P(x) = 2x^2 + 3x - 1$ và $Q(x) = x^2 - 3x + 4$. Kết quả của $P(x) + Q(x)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$3x^2 + 3$"
      },
      {
        "key": "B",
        "content": "$3x^2 + 6x + 3$"
      },
      {
        "key": "C",
        "content": "$x^2 + 6x - 5$"
      },
      {
        "key": "D",
        "content": "$3x^2 - 3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cộng các hệ số tương ứng:\n$$P(x) + Q(x) = (2+1)x^2 + (3-3)x + (-1+4) = 3x^2 + 3$$\n\nChọn A.",
    "socraticHint": "Cộng các hạng tử có cùng số mũ với nhau.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 152,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Nghiệm của đa thức $f(x) = 2x - 8$ là số nào? (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Cho $f(x) = 0 \\implies 2x - 8 = 0 \\implies 2x = 8 \\implies x = 4$.\n\nĐáp số: 4.",
    "socraticHint": "Nghiệm là giá trị của biến làm cho đa thức bằng 0.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 153,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Số nào sau đây là nghiệm của đa thức $g(x) = x^2 - 5x + 6$?",
    "options": [
      {
        "key": "A",
        "content": "$x = 1$"
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
        "content": "$x = 4$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Thay $x = 2$: $2^2 - 5(2) + 6 = 4 - 10 + 6 = 0$. Vậy $x = 2$ là nghiệm.\n\nChọn B.",
    "socraticHint": "Thử thay các giá trị vào xem giá trị nào cho kết quả bằng 0.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 154,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Đa thức $h(x) = x^2 + 9$ có bao nhiêu nghiệm thực? (Điền số nguyên):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0",
      "không có"
    ],
    "detailedSolution": "Vì $x^2 \\ge 0$ với mọi $x$ nên $x^2 + 9 \\ge 9 > 0$. Đa thức vô nghiệm.\n\nĐáp số: 0.",
    "socraticHint": "Bình phương luôn không âm cộng thêm 9 luôn lớn hơn 0.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 155,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Nhân chia đa thức một biến",
    "content": "Tích của đơn thức $2x$ và đa thức $3x^2 - 4x + 1$ là:",
    "options": [
      {
        "key": "A",
        "content": "$6x^3 - 8x^2 + 2x$"
      },
      {
        "key": "B",
        "content": "$6x^2 - 8x + 2$"
      },
      {
        "key": "C",
        "content": "$5x^3 - 6x^2 + 2x$"
      },
      {
        "key": "D",
        "content": "$6x^3 - 4x + 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Nhân phân phối: $2x(3x^2 - 4x + 1) = 6x^3 - 8x^2 + 2x$.\n\nChọn A.",
    "socraticHint": "Nhân $2x$ với từng hạng tử bên trong ngoặc.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 156,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Nhân chia đa thức một biến",
    "content": "Thực hiện phép chia đa thức: $(6x^3 - 9x^2 + 3x) : (3x)$. Khi $x = 3$, giá trị của thương bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "Thực hiện chia từng hạng tử: thương là $2x^2 - 3x + 1$.\nTại $x = 3$: $2(3)^2 - 3(3) + 1 = 18 - 9 + 1 = 10$.\n\nĐáp số: 10.",
    "socraticHint": "Chia từng hạng tử cho $3x$ rồi thay $x = 3$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 157,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Đa thức một biến",
    "content": "Đa thức nào sau đây được sắp xếp theo lũy thừa giảm dần của biến?",
    "options": [
      {
        "key": "A",
        "content": "$5 - 3x + 4x^2 - x^3$"
      },
      {
        "key": "B",
        "content": "$-x^3 + 4x^2 - 3x + 5$"
      },
      {
        "key": "C",
        "content": "$4x^2 - x^3 - 3x + 5$"
      },
      {
        "key": "D",
        "content": "$-3x + 4x^2 - x^3 + 5$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Các số mũ giảm dần lần lượt là $3, 2, 1, 0$: $-x^3 + 4x^2 - 3x + 5$.\n\nChọn B.",
    "socraticHint": "Số mũ của $x$ phải đi từ lớn nhất đến nhỏ nhất.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 158,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Biết đa thức $P(x) = ax - 6$ có một nghiệm là $x = 2$. Hệ số $a$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Vì $x = 2$ là nghiệm nên $P(2) = 0 \\implies a(2) - 6 = 0 \\implies 2a = 6 \\implies a = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Thay $x = 2$ vào đa thức và đặt biểu thức bằng 0.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 159,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Cộng trừ đa thức một biến",
    "content": "Cho $A(x) = 4x^3 - 2x + 5$ và $B(x) = 4x^3 + 3x - 1$. Hiệu $A(x) - B(x)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$-5x + 6$"
      },
      {
        "key": "B",
        "content": "$x + 4$"
      },
      {
        "key": "C",
        "content": "$8x^3 + x + 4$"
      },
      {
        "key": "D",
        "content": "$-5x + 4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Thực hiện trừ:\n$$A(x) - B(x) = (4 - 4)x^3 + (-2 - 3)x + (5 - (-1)) = -5x + 6$$\n\nChọn A.",
    "socraticHint": "Lưu ý đổi dấu toàn bộ hạng tử của $B(x)$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 160,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Nhân chia đa thức một biến",
    "content": "Tìm số dư trong phép chia đa thức $(x^2 - 3x + 5)$ cho $(x - 1)$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Theo định lý Bézout hoặc chia đa thức:\n$$x^2 - 3x + 5 = (x - 1)(x - 2) + 3$$\nSố dư là $3$.\n\nĐáp số: 3.",
    "socraticHint": "Số dư khi chia $f(x)$ cho $x - 1$ chính là giá trị $f(1)$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 161,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Đa thức nào sau đây nhận $x = 1$ và $x = -1$ làm nghiệm?",
    "options": [
      {
        "key": "A",
        "content": "$x^2 - 1$"
      },
      {
        "key": "B",
        "content": "$x^2 + 1$"
      },
      {
        "key": "C",
        "content": "$x^2 - 2x + 1$"
      },
      {
        "key": "D",
        "content": "$x^2 + 2x + 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Với $x = \\pm 1$ thì $(\\pm 1)^2 - 1 = 1 - 1 = 0$.\n\nChọn A.",
    "socraticHint": "Hằng đẳng thức hiệu hai bình phương: $x^2 - 1 = (x-1)(x+1)$.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 162,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Đa thức một biến",
    "content": "Cho đa thức $K(x) = 3x^2 - x + 4$. Giá trị của $K(0) + K(1)$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "Ta có $K(0) = 4$, $K(1) = 3(1)^2 - 1 + 4 = 6$. Tổng là $4 + 6 = 10$.\n\nĐáp số: 10.",
    "socraticHint": "Tính riêng $K(0)$ và $K(1)$ rồi cộng lại.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 163,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Nhân chia đa thức một biến",
    "content": "Khai triển tích $(x + 2)(x - 3)$ ta thu được kết quả là:",
    "options": [
      {
        "key": "A",
        "content": "$x^2 - x - 6$"
      },
      {
        "key": "B",
        "content": "$x^2 + x - 6$"
      },
      {
        "key": "C",
        "content": "$x^2 - 5x - 6$"
      },
      {
        "key": "D",
        "content": "$x^2 - 6$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$(x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6$.\n\nChọn A.",
    "socraticHint": "Nhân lần lượt từng hạng tử: $x \\cdot x - 3x + 2x - 6$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 164,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tìm nghiệm dương của đa thức $G(x) = 4x^2 - 36$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "$4x^2 - 36 = 0 \\implies 4x^2 = 36 \\implies x^2 = 9 \\implies x = 3$ (vì cần nghiệm dương).\n\nĐáp số: 3.",
    "socraticHint": "Giải phương trình $x^2 = 9$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 165,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Biểu thức đại số",
    "content": "Biểu thức đại số biểu thị tổng quãng đường đi được của một người đi bộ trong $2$ giờ với vận tốc $x\\text{ (km/h)}$ và đi xe đạp trong $3$ giờ với vận tốc $y\\text{ (km/h)}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2x + 3y$"
      },
      {
        "key": "B",
        "content": "$3x + 2y$"
      },
      {
        "key": "C",
        "content": "$5(x + y)$"
      },
      {
        "key": "D",
        "content": "$6xy$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Quãng đường đi bộ: $2x$. Quãng đường đi xe đạp: $3y$. Tổng quãng đường là $2x + 3y$.\n\nChọn A.",
    "socraticHint": "Quãng đường bằng vận tốc nhân thời gian.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  }
];
