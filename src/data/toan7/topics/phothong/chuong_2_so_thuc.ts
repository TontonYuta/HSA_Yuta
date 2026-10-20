import { Question } from '../../../../types/exam';

export const CHUONG_2_SO_THUC_QUESTIONS: Question[] = [
  {
    "id": 46,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Căn bậc hai số học của $144$ là:",
    "options": [
      {
        "key": "A",
        "content": "$12$"
      },
      {
        "key": "B",
        "content": "$-12$"
      },
      {
        "key": "C",
        "content": "$\\pm 12$"
      },
      {
        "key": "D",
        "content": "$72$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Căn bậc hai số học của số không âm $a$ là số không âm $x$ sao cho $x^2 = a$. $\\sqrt{144} = 12$.\n\nChọn A.",
    "socraticHint": "Căn bậc hai số học luôn không âm.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 47,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Trong các số sau, số nào là số vô tỉ?",
    "options": [
      {
        "key": "A",
        "content": "$\\sqrt{4}$"
      },
      {
        "key": "B",
        "content": "$\\sqrt{5}$"
      },
      {
        "key": "C",
        "content": "$\\frac{3}{7}$"
      },
      {
        "key": "D",
        "content": "$0{,}(3)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "$\\sqrt{5} \\approx 2{,}236...$ là số thập phân vô hạn không tuần hoàn nên là số vô tỉ.\n\nChọn B.",
    "socraticHint": "Số vô tỉ viết được dưới dạng thập phân vô hạn không tuần hoàn.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 48,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tính giá trị biểu thức: $B = |-\\sqrt{25}| + |3 - 7|$. (Điền số nguyên):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9.0"
    ],
    "detailedSolution": "$\\sqrt{25} = 5 \\implies |-5| = 5$. $|3 - 7| = |-4| = 4$. Do đó $B = 5 + 4 = 9$.\n\nĐáp số: 9.",
    "socraticHint": "Tính căn trước rồi lấy trị tuyệt đối.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 49,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tất cả các giá trị của $x$ thỏa mãn $|x - 1{,}5| = 2$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x = 3{,}5$"
      },
      {
        "key": "B",
        "content": "$x = -0{,}5$"
      },
      {
        "key": "C",
        "content": "$x = 3{,}5$ hoặc $x = -0{,}5$"
      },
      {
        "key": "D",
        "content": "$x = 3{,}5$ hoặc $x = 0{,}5$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "TH1: $x - 1{,}5 = 2 \\implies x = 3{,}5$. TH2: $x - 1{,}5 = -2 \\implies x = -0{,}5$.\n\nChọn C.",
    "socraticHint": "$|A| = m$ ($m > 0$) thì $A = m$ hoặc $A = -m$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 50,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "lam_tron_va_uoc_luong",
    "topicName": "Làm tròn số & Ước lượng kết quả",
    "content": "Làm tròn số $3{,}14159$ đến hàng phần trăm được kết quả là:",
    "options": [
      {
        "key": "A",
        "content": "$3{,}14$"
      },
      {
        "key": "B",
        "content": "$3{,}15$"
      },
      {
        "key": "C",
        "content": "$3{,}1$"
      },
      {
        "key": "D",
        "content": "$3{,}142$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chữ số ngay sau hàng phần trăm là $1 < 5$, ta giữ nguyên: $3{,}14159 \\approx 3{,}14$.\n\nChọn A.",
    "socraticHint": "Chữ số sau hàng phần trăm nhỏ hơn 5 thì giữ nguyên.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 51,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Tính giá trị của biểu thức: $\\sqrt{49} - \\sqrt{16} + \\sqrt{0}$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3",
      "3.0"
    ],
    "detailedSolution": "$\\sqrt{49} = 7, \\sqrt{16} = 4, \\sqrt{0} = 0$. Biểu thức bằng $7 - 4 + 0 = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Khai căn từng số hạng rồi tính toán.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 52,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "tap_hop_so_thuc",
    "topicName": "Tập hợp số thực & Trục số thực",
    "content": "Tập hợp số thực $\\mathbb{R}$ bao gồm các tập hợp số nào?",
    "options": [
      {
        "key": "A",
        "content": "Số hữu tỉ và số vô tỉ"
      },
      {
        "key": "B",
        "content": "Số tự nhiên và số nguyên"
      },
      {
        "key": "C",
        "content": "Số nguyên và phân số"
      },
      {
        "key": "D",
        "content": "Chỉ gồm các số thập phân"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập hợp số thực $\\mathbb{R}$ gồm tập hợp số hữu tỉ $\\mathbb{Q}$ và tập hợp số vô tỉ $\\mathbb{I}$.\n\nChọn A.",
    "socraticHint": "Số thực bao gồm tất cả các số hữu tỉ và vô tỉ.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 53,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Giá trị của $|-2026|$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "2026",
    "acceptableAnswers": [
      "2026"
    ],
    "detailedSolution": "Giá trị tuyệt đối của một số âm là số đối của nó: $|-2026| = 2026$.\n\nĐáp số: 2026.",
    "socraticHint": "Giá trị tuyệt đối luôn không âm.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 54,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Số nghiệm thực của phương trình $|x| = -5$ là:",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "Vô số"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $|x| \\ge 0$ với mọi $x \\in \\mathbb{R}$, mà $-5 < 0$ nên phương trình vô nghiệm (có 0 nghiệm).\n\nChọn A.",
    "socraticHint": "Giá trị tuyệt đối có thể nhận giá trị âm không?",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 55,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Tìm số thực dương $x$ thỏa mãn $\\sqrt{x} = 9$. (Điền số nguyên):",
    "correctAnswer": "81",
    "acceptableAnswers": [
      "81"
    ],
    "detailedSolution": "Bình phương hai vế: $(\\sqrt{x})^2 = 9^2 \\implies x = 81$.\n\nĐáp số: 81.",
    "socraticHint": "Bình phương số 9 lên.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 56,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "lam_tron_va_uoc_luong",
    "topicName": "Làm tròn số & Ước lượng kết quả",
    "content": "Làm tròn số $4567$ đến hàng trăm ta được:",
    "options": [
      {
        "key": "A",
        "content": "$4600$"
      },
      {
        "key": "B",
        "content": "$4500$"
      },
      {
        "key": "C",
        "content": "$4570$"
      },
      {
        "key": "D",
        "content": "$5000$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chữ số hàng chục là $6 \\ge 5$, ta cộng thêm 1 vào hàng trăm: $4567 \\approx 4600$.\n\nChọn A.",
    "socraticHint": "Chữ số hàng chục lớn hơn hoặc bằng 5 thì tăng 1 ở hàng trăm.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 57,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tính giá trị biểu thức: $C = |2 - 5| + |-3| \\cdot 2$. (Điền số nguyên):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9.0"
    ],
    "detailedSolution": "$|2 - 5| = |-3| = 3$. $|-3| \\cdot 2 = 3 \\cdot 2 = 6$. Tổng $C = 3 + 6 = 9$.\n\nĐáp số: 9.",
    "socraticHint": "Thực hiện phép tính trong trị tuyệt đối trước.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 58,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "tap_hop_so_thuc",
    "topicName": "Tập hợp số thực & Trục số thực",
    "content": "Khẳng định nào sau đây là sai?",
    "options": [
      {
        "key": "A",
        "content": "$\\sqrt{2} \\in \\mathbb{Q}$"
      },
      {
        "key": "B",
        "content": "$\\sqrt{2} \\in \\mathbb{R}$"
      },
      {
        "key": "C",
        "content": "$-3 \\in \\mathbb{R}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{2} \\in \\mathbb{R}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$\\sqrt{2}$ là số vô tỉ, không thuộc $\\mathbb{Q}$. Do đó khẳng định A sai.\n\nChọn A.",
    "socraticHint": "$\\sqrt{2}$ có phải là số hữu tỉ không?",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 59,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Một mảnh đất hình vuông có diện tích $64\\text{ m}^2$. Độ dài cạnh của mảnh đất là bao nhiêu mét? (Điền số nguyên):",
    "correctAnswer": "8",
    "acceptableAnswers": [
      "8",
      "8m"
    ],
    "detailedSolution": "Cạnh hình vuông bằng $\\sqrt{S} = \\sqrt{64} = 8\\text{ m}$.\n\nĐáp số: 8.",
    "socraticHint": "Cạnh hình vuông bằng căn bậc hai của diện tích.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "isPracticalMath": true,
    "track": "PHOTHONG"
  },
  {
    "id": 60,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Biểu thức nào sau đây luôn có giá trị không âm với mọi số thực $x$?",
    "options": [
      {
        "key": "A",
        "content": "$|x| + 1$"
      },
      {
        "key": "B",
        "content": "$x - 1$"
      },
      {
        "key": "C",
        "content": "$-|x|$"
      },
      {
        "key": "D",
        "content": "$x$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $|x| \\ge 0$ nên $|x| + 1 \\ge 1 > 0$ với mọi $x$.\n\nChọn A.",
    "socraticHint": "Trị tuyệt đối luôn lớn hơn hoặc bằng 0.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 61,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Tính giá trị của biểu thức $P = \\sqrt{100} : \\sqrt{25}$. (Điền số nguyên):",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2",
      "2.0"
    ],
    "detailedSolution": "$\\sqrt{100} = 10, \\sqrt{25} = 5 \\implies P = 10 : 5 = 2$.\n\nĐáp số: 2.",
    "socraticHint": "Khai căn 100 và 25.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 62,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "lam_tron_va_uoc_luong",
    "topicName": "Làm tròn số & Ước lượng kết quả",
    "content": "Làm tròn số $9{,}876$ với độ chính xác $0{,}05$ (đến hàng phần mười) ta được:",
    "options": [
      {
        "key": "A",
        "content": "$9{,}9$"
      },
      {
        "key": "B",
        "content": "$9{,}8$"
      },
      {
        "key": "C",
        "content": "$10$"
      },
      {
        "key": "D",
        "content": "$9{,}88$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chữ số hàng phần trăm là $7 \\ge 5$, tăng 1 ở hàng phần mười: $9{,}876 \\approx 9{,}9$.\n\nChọn A.",
    "socraticHint": "Xét chữ số ngay sau hàng phần mười.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 63,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm $x$ biết $|x| = 0$. (Điền số nguyên):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0"
    ],
    "detailedSolution": "Chỉ có số $0$ có giá trị tuyệt đối bằng $0$: $x = 0$.\n\nĐáp số: 0.",
    "socraticHint": "Số nào có khoảng cách đến gốc 0 bằng 0?",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 64,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "tap_hop_so_thuc",
    "topicName": "Tập hợp số thực & Trục số thực",
    "content": "Trên trục số thực, giữa hai số hữu tỉ bất kì luôn có:",
    "options": [
      {
        "key": "A",
        "content": "Vô số số thực"
      },
      {
        "key": "B",
        "content": "Chỉ có một số thực"
      },
      {
        "key": "C",
        "content": "Không có số thực nào"
      },
      {
        "key": "D",
        "content": "Chỉ có đúng hai số thực"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trục số thực lấp đầy liên tục, giữa hai số hữu tỉ bất kì có vô số số thực.\n\nChọn A.",
    "socraticHint": "Tập số thực có tính trù mật.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  },
  {
    "id": 65,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Tính giá trị của biểu thức $M = \\sqrt{81} - 3 \\cdot \\sqrt{4}$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "$\\sqrt{81} = 9, \\sqrt{4} = 2$. Do đó $M = 9 - 3 \\cdot 2 = 9 - 6 = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Nhân chia trước, cộng trừ sau.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG"
  }
];
