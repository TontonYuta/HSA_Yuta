import { Question } from '../../../../types/exam';

export const CHUONG_9_QUAN_HE_TAM_GIAC_QUESTIONS: Question[] = [
  {
    "id": 186,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ giữa góc và cạnh đối diện",
    "content": "Trong một tam giác, góc đối diện với cạnh lớn hơn là:",
    "options": [
      {
        "key": "A",
        "content": "Góc lớn hơn"
      },
      {
        "key": "B",
        "content": "Góc nhỏ hơn"
      },
      {
        "key": "C",
        "content": "Góc vuông"
      },
      {
        "key": "D",
        "content": "Góc tù"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo định lý trong tam giác: Cạnh đối diện với góc lớn hơn là cạnh lớn hơn, và ngược lại góc đối diện với cạnh lớn hơn là góc lớn hơn.\n\nChọn A.",
    "socraticHint": "Cạnh càng dài thì góc nhìn căng mở ra càng lớn.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 187,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ giữa góc và cạnh đối diện",
    "content": "Cho $\\Delta ABC$ có $AB = 5\\text{ cm}, BC = 7\\text{ cm}, AC = 6\\text{ cm}$. Khẳng định nào sau đây là đúng về các góc của tam giác?",
    "options": [
      {
        "key": "A",
        "content": "$\\widehat{A} > \\widehat{B} > \\widehat{C}$"
      },
      {
        "key": "B",
        "content": "$\\widehat{C} > \\widehat{B} > \\widehat{A}$"
      },
      {
        "key": "C",
        "content": "$\\widehat{A} > \\widehat{C} > \\widehat{B}$"
      },
      {
        "key": "D",
        "content": "$\\widehat{B} > \\widehat{C} > \\widehat{A}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $BC > AC > AB$ ($7 > 6 > 5$) nên các góc đối diện tương ứng thoả mãn $\\widehat{A} > \\widehat{B} > \\widehat{C}$.\n\nChọn A.",
    "socraticHint": "Cạnh $BC$ đối diện góc $A$, $AC$ đối diện góc $B$, $AB$ đối diện góc $C$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 188,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Bất đẳng thức tam giác",
    "content": "Bộ ba độ dài đoạn thẳng nào sau đây CÓ THỂ là độ dài ba cạnh của một tam giác?",
    "options": [
      {
        "key": "A",
        "content": "$2\\text{ cm}, 3\\text{ cm}, 6\\text{ cm}$"
      },
      {
        "key": "B",
        "content": "$3\\text{ cm}, 4\\text{ cm}, 5\\text{ cm}$"
      },
      {
        "key": "C",
        "content": "$1\\text{ cm}, 2\\text{ cm}, 3\\text{ cm}$"
      },
      {
        "key": "D",
        "content": "$4\\text{ cm}, 5\\text{ cm}, 10\\text{ cm}$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Theo bất đẳng thức tam giác, tổng hai cạnh bất kì luôn lớn hơn cạnh còn lại: $3 + 4 = 7 > 5$. Các bộ khác đều có tổng hai cạnh nhỏ hơn hoặc bằng cạnh thứ ba.\n\nChọn B.",
    "socraticHint": "Kiểm tra tổng hai cạnh ngắn nhất có lớn hơn cạnh dài nhất không.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 189,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Bất đẳng thức tam giác",
    "content": "Một tam giác cân có độ dài hai cạnh là $4\\text{ cm}$ và $9\\text{ cm}$. Độ dài cạnh thứ ba của tam giác đó là bao nhiêu cm? (Điền số nguyên):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9cm"
    ],
    "detailedSolution": "Nếu cạnh thứ ba là $4\\text{ cm}$ thì $4 + 4 = 8 < 9$ (loại vì vi phạm BĐT tam giác). Vậy cạnh thứ ba phải là $9\\text{ cm}$ ($4 + 9 > 9$ thoả mãn).\n\nĐáp số: 9.",
    "socraticHint": "Tam giác cân có 2 cạnh bằng nhau, thử cả 2 trường hợp 4 và 9.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 190,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Đường vuông góc và đường xiên",
    "content": "Từ một điểm $A$ nằm ngoài đường thẳng $d$, kẻ đường vuông góc $AH$ và đường xiên $AM$ đến $d$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$AH < AM$"
      },
      {
        "key": "B",
        "content": "$AH > AM$"
      },
      {
        "key": "C",
        "content": "$AH = AM$"
      },
      {
        "key": "D",
        "content": "$AH \\ge AM$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong các đường kẻ từ một điểm nằm ngoài một đường thẳng đến đường thẳng đó, đường vuông góc là đường ngắn nhất: $AH < AM$.\n\nChọn A.",
    "socraticHint": "Cạnh góc vuông luôn nhỏ hơn cạnh huyền.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 191,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của ba đường trung tuyến",
    "content": "Cho $\\Delta ABC$ có đường trung tuyến $AM$ dài $12\\text{ cm}$ và trọng tâm $G$. Độ dài đoạn thẳng $AG$ bằng bao nhiêu cm? (Điền số nguyên):",
    "correctAnswer": "8",
    "acceptableAnswers": [
      "8",
      "8cm"
    ],
    "detailedSolution": "Trọng tâm tam giác cách mỗi đỉnh một khoảng bằng $\\frac{2}{3}$ độ dài đường trung tuyến đi qua đỉnh đó:\n$$AG = \\frac{2}{3} AM = \\frac{2}{3} \\cdot 12 = 8\\text{ cm}$$\n\nĐáp số: 8.",
    "socraticHint": "Tính $AG = \\frac{2}{3} AM$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 192,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của ba đường trung tuyến",
    "content": "Điểm đồng quy của ba đường trung tuyến trong một tam giác được gọi là:",
    "options": [
      {
        "key": "A",
        "content": "Trọng tâm của tam giác"
      },
      {
        "key": "B",
        "content": "Trực tâm của tam giác"
      },
      {
        "key": "C",
        "content": "Tâm đường tròn ngoại tiếp"
      },
      {
        "key": "D",
        "content": "Tâm đường tròn nội tiếp"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Giao điểm của ba đường trung tuyến trong tam giác được gọi là trọng tâm của tam giác.\n\nChọn A.",
    "socraticHint": "Điểm phân chia trung tuyến theo tỉ lệ 2/3 gọi là trọng tâm.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 193,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của ba đường phân giác",
    "content": "Giao điểm của ba đường phân giác trong tam giác có tính chất đặc biệt nào?",
    "options": [
      {
        "key": "A",
        "content": "Cách đều ba cạnh của tam giác"
      },
      {
        "key": "B",
        "content": "Cách đều ba đỉnh của tam giác"
      },
      {
        "key": "C",
        "content": "Cách mỗi đỉnh một khoảng bằng 2/3 đường phân giác"
      },
      {
        "key": "D",
        "content": "Luôn nằm trên một cạnh của tam giác"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Giao điểm của ba đường phân giác cách đều ba cạnh của tam giác và chính là tâm đường tròn nội tiếp tam giác.\n\nChọn A.",
    "socraticHint": "Tính chất điểm trên tia phân giác của góc là cách đều hai cạnh của góc.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 194,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của ba đường trung trực",
    "content": "Giao điểm của ba đường trung trực của tam giác có tính chất nào?",
    "options": [
      {
        "key": "A",
        "content": "Cách đều ba đỉnh của tam giác"
      },
      {
        "key": "B",
        "content": "Cách đều ba cạnh của tam giác"
      },
      {
        "key": "C",
        "content": "Là trọng tâm của tam giác"
      },
      {
        "key": "D",
        "content": "Luôn nằm bên trong tam giác"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Giao điểm của ba đường trung trực cách đều ba đỉnh của tam giác và là tâm đường tròn ngoại tiếp tam giác.\n\nChọn A.",
    "socraticHint": "Đường trung trực của đoạn thẳng là tập hợp các điểm cách đều hai mút.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 195,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của ba đường cao",
    "content": "Điểm đồng quy của ba đường cao trong tam giác được gọi là gì?",
    "options": [
      {
        "key": "A",
        "content": "Trực tâm"
      },
      {
        "key": "B",
        "content": "Trọng tâm"
      },
      {
        "key": "C",
        "content": "Tâm nội tiếp"
      },
      {
        "key": "D",
        "content": "Tâm đối xứng"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Giao điểm của ba đường cao trong một tam giác gọi là trực tâm của tam giác.\n\nChọn A.",
    "socraticHint": "Trực ở đây mang ý nghĩa vuông góc (đường cao).",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 196,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của ba đường trung tuyến",
    "content": "Cho $\\Delta ABC$ có trọng tâm $G$ và trung tuyến $AM$. Biết $GM = 3\\text{ cm}$. Độ dài đường trung tuyến $AM$ bằng bao nhiêu cm? (Điền số nguyên):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9cm"
    ],
    "detailedSolution": "Ta có $GM = \\frac{1}{3} AM \\implies AM = 3 \\cdot GM = 3 \\cdot 3 = 9\\text{ cm}$.\n\nĐáp số: 9.",
    "socraticHint": "$GM$ bằng một phần ba cả đoạn trung tuyến $AM$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 197,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của ba đường cao",
    "content": "Trong tam giác vuông, trực tâm của tam giác nằm ở vị trí nào?",
    "options": [
      {
        "key": "A",
        "content": "Chính là đỉnh góc vuông"
      },
      {
        "key": "B",
        "content": "Nằm ở trung điểm cạnh huyền"
      },
      {
        "key": "C",
        "content": "Nằm hoàn toàn bên ngoài tam giác"
      },
      {
        "key": "D",
        "content": "Nằm ở trọng tâm tam giác"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong tam giác vuông, hai cạnh góc vuông chính là hai đường cao, do đó giao điểm của ba đường cao trùng với đỉnh góc vuông.\n\nChọn A.",
    "socraticHint": "Hai cạnh góc vuông cắt nhau tại đỉnh góc vuông và cùng vuông góc với nhau.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 198,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Bất đẳng thức tam giác",
    "content": "Một tam giác có hai cạnh dài $3\\text{ cm}$ và $8\\text{ cm}$. Cạnh thứ ba có độ dài là một số nguyên (cm). Giá trị nguyên nhỏ nhất có thể của cạnh thứ ba là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "6",
    "acceptableAnswers": [
      "6",
      "6cm"
    ],
    "detailedSolution": "Theo BĐT tam giác: $8 - 3 < c < 8 + 3 \\implies 5 < c < 11$. Giá trị nguyên nhỏ nhất của $c$ là $6$.\n\nĐáp số: 6.",
    "socraticHint": "Độ dài cạnh thứ ba lớn hơn hiệu hai cạnh: $c > 8 - 3 = 5$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 199,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của ba đường trung trực",
    "content": "Trong tam giác vuông, tâm đường tròn ngoại tiếp (giao điểm ba đường trung trực) nằm ở đâu?",
    "options": [
      {
        "key": "A",
        "content": "Trung điểm của cạnh huyền"
      },
      {
        "key": "B",
        "content": "Đỉnh góc vuông"
      },
      {
        "key": "C",
        "content": "Trọng tâm của tam giác"
      },
      {
        "key": "D",
        "content": "Bên ngoài tam giác"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền, do đó trung điểm cạnh huyền cách đều ba đỉnh và là tâm đường tròn ngoại tiếp.\n\nChọn A.",
    "socraticHint": "Đoạn nối trung điểm cạnh huyền tới đỉnh góc vuông bằng một nửa cạnh huyền.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 200,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Bất đẳng thức tam giác",
    "content": "Một tam giác có chu vi $18\\text{ cm}$. Cạnh lớn nhất của tam giác này phải luôn nhỏ hơn bao nhiêu cm? (Điền số nguyên):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9cm"
    ],
    "detailedSolution": "Gọi cạnh lớn nhất là $a$. Theo BĐT tam giác, tổng hai cạnh kia $b + c > a$. Mà $a + b + c = 18 \\implies a + a < a + b + c = 18 \\implies 2a < 18 \\implies a < 9$.\n\nĐáp số: 9.",
    "socraticHint": "Cạnh lớn nhất luôn nhỏ hơn một nửa chu vi.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 201,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Tính chất các đường trong tam giác cân",
    "content": "Trong một tam giác cân, đường phân giác xuất phát từ đỉnh đối diện với đáy đồng thời là đường nào sau đây?",
    "options": [
      {
        "key": "A",
        "content": "Đồng thời là đường trung tuyến, đường cao, đường trung trực của cạnh đáy"
      },
      {
        "key": "B",
        "content": "Chỉ là đường cao"
      },
      {
        "key": "C",
        "content": "Chỉ là đường trung tuyến"
      },
      {
        "key": "D",
        "content": "Không trùng với đường nào"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong tam giác cân, đường xuất phát từ đỉnh đối diện đáy đóng cả 4 vai trò: đường trung tuyến, đường phân giác, đường cao và đường trung trực ứng với đáy.\n\nChọn A.",
    "socraticHint": "Tam giác cân có tính đối xứng trục hoàn hảo qua đường phân giác đỉnh.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 202,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ giữa góc và cạnh đối diện",
    "content": "Cho $\\Delta ABC$ có $\\widehat{A} = 100^\\circ$. Trong tam giác này, cạnh có độ dài lớn nhất là cạnh nào? (Nhập tên cạnh, ví dụ: BC):",
    "correctAnswer": "BC",
    "acceptableAnswers": [
      "BC",
      "đoạn BC"
    ],
    "detailedSolution": "Vì $\\widehat{A} = 100^\\circ > 90^\\circ$ là góc tù, góc lớn nhất trong tam giác nên cạnh đối diện với nó là $BC$ sẽ có độ dài lớn nhất.\n\nĐáp số: BC.",
    "socraticHint": "Cạnh đối diện với góc tù luôn là cạnh lớn nhất trong tam giác tù.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 203,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của ba đường cao",
    "content": "Trong tam giác tù, trực tâm nằm ở vị trí nào?",
    "options": [
      {
        "key": "A",
        "content": "Nằm phía ngoài tam giác"
      },
      {
        "key": "B",
        "content": "Nằm bên trong tam giác"
      },
      {
        "key": "C",
        "content": "Nằm trên cạnh lớn nhất"
      },
      {
        "key": "D",
        "content": "Trùng với một đỉnh của tam giác"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong tam giác tù, hai đường cao kẻ từ các góc nhọn nằm bên ngoài tam giác, do đó giao điểm ba đường cao (trực tâm) nằm ở phía ngoài tam giác.\n\nChọn A.",
    "socraticHint": "Đường cao hạ từ đỉnh nhọn xuống cạnh đối diện rơi ra ngoài cạnh đó.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 204,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của ba đường trung tuyến",
    "content": "Cho tam giác $ABC$ có trọng tâm $G$. Biết diện tích tam giác $ABC$ là $36\\text{ cm}^2$. Diện tích của tam giác $GBC$ là bao nhiêu $\\text{cm}^2$? (Điền số nguyên):",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12",
      "12 cm2"
    ],
    "detailedSolution": "Trọng tâm $G$ chia tam giác thành 3 tam giác nhỏ có diện tích bằng nhau: $S_{GAB} = S_{GBC} = S_{GCA} = \\frac{1}{3} S_{ABC} = \\frac{36}{3} = 12\\text{ cm}^2$.\n\nĐáp số: 12.",
    "socraticHint": "Trọng tâm chia tam giác ban đầu thành 3 tam giác con có diện tích bằng nhau.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 205,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Tính chất tam giác đều",
    "content": "Trong một tam giác đều, nhận xét nào sau đây là đúng về 4 điểm: trọng tâm, trực tâm, tâm đường tròn nội tiếp, tâm đường tròn ngoại tiếp?",
    "options": [
      {
        "key": "A",
        "content": "Cả 4 điểm này trùng nhau"
      },
      {
        "key": "B",
        "content": "Cả 4 điểm này thẳng hàng nhưng phân biệt"
      },
      {
        "key": "C",
        "content": "Chỉ có trọng tâm và trực tâm trùng nhau"
      },
      {
        "key": "D",
        "content": "Không có điểm nào trùng nhau"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong tam giác đều, các đường trung tuyến, đường cao, đường phân giác, đường trung trực trùng nhau nên cả 4 tâm điểm đều trùng nhau tại một điểm.\n\nChọn A.",
    "socraticHint": "Tam giác đều có tính đối xứng cao nhất.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  }
];
