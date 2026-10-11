import { Question } from '../../../types/exam';

export const xacSuatBayesQuestions: Question[] = [
  {
    "id": 125,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "xac_suat_co_dieu_kien_bayes",
    "topicName": "Xác suất có điều kiện & Công thức Bayes",
    "content": "Cho hai biến cố $A$ và $B$ có $P(A) = 0.5, P(B) = 0.6$ và $P(A \\cap B) = 0.3$. Xác suất có điều kiện $P(B|A)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$0.6$"
      },
      {
        "key": "B",
        "content": "$0.5$"
      },
      {
        "key": "C",
        "content": "$0.3$"
      },
      {
        "key": "D",
        "content": "$0.8$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng định nghĩa xác suất có điều kiện:\n$$P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.3}{0.5} = 0.6$$.",
    "socraticHint": "Công thức xác suất có điều kiện của $B$ khi biết $A$ là $P(B|A) = \\frac{P(A \\cap B)}{P(A)}$.",
    "difficulty": "Nhận biết",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 126,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "xac_suat_co_dieu_kien_bayes",
    "topicName": "Xác suất có điều kiện & Công thức Bayes",
    "content": "Tại một địa phương đang có dịch bệnh, tỉ lệ người mắc bệnh trong dân số là $10\\%$. Một xét nghiệm chẩn đoán có độ nhạy $90\\%$ (người có bệnh xét nghiệm dương tính với xác suất $0.90$) và tỉ lệ dương tính giả là $5\\%$ (người không bệnh xét nghiệm dương tính với xác suất $0.05$). Chọn ngẫu nhiên một người và người này có kết quả xét nghiệm dương tính. Xác suất người này thực sự mắc bệnh xấp xỉ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$66.7\\%$"
      },
      {
        "key": "B",
        "content": "$90.0\\%$"
      },
      {
        "key": "C",
        "content": "$50.0\\%$"
      },
      {
        "key": "D",
        "content": "$75.0\\%$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $B$ là biến cố \"người được chọn mắc bệnh\", $T$ là biến cố \"kết quả xét nghiệm dương tính\".\nTheo giả thiết:\n$$P(B) = 0.10 \\implies P(\\overline{B}) = 0.90$$\n$$P(T|B) = 0.90, \\quad P(T|\\overline{B}) = 0.05$$\nTheo công thức xác suất toàn phần:\n$$P(T) = P(B)P(T|B) + P(\\overline{B})P(T|\\overline{B}) = 0.10 \\times 0.90 + 0.90 \\times 0.05 = 0.09 + 0.045 = 0.135$$\nTheo công thức Bayes, xác suất người này thực sự mắc bệnh khi đã có kết quả dương tính là:\n$$P(B|T) = \\frac{P(B)P(T|B)}{P(T)} = \\frac{0.09}{0.135} = \\frac{2}{3} \\approx 66.67\\%$$.",
    "socraticHint": "Áp dụng công thức Bayes: $P(B|T) = \\frac{P(B \\cap T)}{P(T)}$ với $P(T)$ tính qua công thức xác suất toàn phần.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 127,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "xac_suat_co_dieu_kien_bayes",
    "topicName": "Xác suất có điều kiện & Công thức Bayes",
    "content": "Có hai hộp đựng thẻ: Hộp I chứa 3 thẻ xanh và 2 thẻ đỏ; Hộp II chứa 4 thẻ xanh và 6 thẻ đỏ. Gieo một con xúc xắc cân đối: nếu xuất hiện mặt 1 hoặc mặt 2 thì rút ngẫu nhiên 1 thẻ từ Hộp I; nếu xuất hiện các mặt khác thì rút ngẫu nhiên 1 thẻ từ Hộp II. Xác suất để rút được thẻ màu xanh là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{7}{15}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2}{5}$"
      },
      {
        "key": "D",
        "content": "$\\frac{3}{5}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $H_1$ là biến cố \"chọn Hộp I\" (xúc xắc ra mặt 1 hoặc 2) $\\implies P(H_1) = \\frac{2}{6} = \\frac{1}{3}$.\nGọi $H_2$ là biến cố \"chọn Hộp II\" $\\implies P(H_2) = 1 - \\frac{1}{3} = \\frac{2}{3}$.\nGọi $A$ là biến cố \"rút được thẻ màu xanh\":\n- Từ Hộp I: $P(A|H_1) = \\frac{3}{3 + 2} = \\frac{3}{5}$.\n- Từ Hộp II: $P(A|H_2) = \\frac{4}{4 + 6} = \\frac{4}{10} = \\frac{2}{5}$.\nTheo công thức xác suất toàn phần:\n$$P(A) = P(H_1)P(A|H_1) + P(H_2)P(A|H_2) = \\frac{1}{3} \\times \\frac{3}{5} + \\frac{2}{3} \\times \\frac{2}{5} = \\frac{3}{15} + \\frac{4}{15} = \\frac{7}{15}$$.",
    "socraticHint": "Phân tích hai giai đoạn độc lập và dùng công thức xác suất toàn phần $P(A) = P(H_1)P(A|H_1) + P(H_2)P(A|H_2)$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 145,
    "type": "fill",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "xac_suat_co_dieu_kien_bayes",
    "topicName": "Xác suất có điều kiện & Công thức Bayes",
    "content": "Một hộp kín chứa 4 quả bóng đỏ và 6 quả bóng xanh. Người ta rút ngẫu nhiên lần lượt 2 quả bóng không hoàn lại. Xác suất để cả hai quả bóng rút ra đều có màu xanh bằng $\\frac{a}{b}$ (với $\\frac{a}{b}$ là phân số tối giản). Giá trị của $a + b$ bằng bao nhiêu?",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0"
    ],
    "detailedSolution": "Xác suất rút quả thứ nhất màu xanh: $P_1 = \\frac{6}{10}$.\nSau khi rút quả thứ nhất màu xanh, trong hộp còn lại 5 quả xanh và tổng số 9 quả bóng.\nXác suất rút quả thứ hai màu xanh: $P_2 = \\frac{5}{9}$.\nXác suất để cả hai quả màu xanh:\n$$P = \\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$$\nPhân số tối giản là $\\frac{1}{3} \\implies a = 1, b = 3$.\nDo đó $a + b = 1 + 3 = 4$.",
    "socraticHint": "Dùng quy tắc nhân xác suất cho hai biến cố liên tiếp không hoàn lại: $P(A \\cap B) = P(A) \\cdot P(B|A)$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 247,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "xac_suat_co_dieu_kien_bayes",
    "topicName": "Xác suất có điều kiện & Công thức Bayes",
    "content": "Một học sinh làm hai bài tập kế tiếp. Xác suất làm đúng bài thứ nhất là $0{,}6$. Xác suất làm đúng bài thứ hai là $0{,}5$. Nếu làm đúng bài thứ nhất thì khả năng làm đúng bài thứ hai là $0{,}8$. Tính xác suất học sinh đó làm sai bài thứ nhất, biết rằng đã làm đúng bài thứ hai.",
    "options": [
      {
        "key": "A",
        "content": "$0{,}36$"
      },
      {
        "key": "B",
        "content": "$0{,}28$"
      },
      {
        "key": "C",
        "content": "$0{,}12$"
      },
      {
        "key": "D",
        "content": "$0{,}04$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Gọi $A$ là biến cố 'Làm đúng bài thứ nhất' $\\implies P(A) = 0{,}6$.\nGọi $B$ là biến cố 'Làm đúng bài thứ hai' $\\implies P(B) = 0{,}5$.\nGiả thiết cho xác suất có điều kiện: $P(B | A) = 0{,}8$.\nÁp dụng công thức nhân xác suất:\n$$P(A \\cap B) = P(A) \\cdot P(B | A) = 0{,}6 \\times 0{,}8 = 0{,}48$$\nTheo công thức xác suất toàn phần:\n$$P(B) = P(A \\cap B) + P(\\overline{A} \\cap B)$$\n$$\\implies P(\\overline{A} \\cap B) = P(B) - P(A \\cap B) = 0{,}5 - 0{,}48 = 0{,}02$$\nXác suất học sinh làm sai bài thứ nhất khi biết đã làm đúng bài thứ hai là:\n$$P(\\overline{A} | B) = \\frac{P(\\overline{A} \\cap B)}{P(B)} = \\frac{0{,}02}{0{,}5} = 0{,}04$$",
    "socraticHint": "Tính $P(A \\cap B) = P(A)P(B|A)$, suy ra $P(\\overline{A} \\cap B) = P(B) - P(A \\cap B)$, rồi tính xác suất có điều kiện $P(\\overline{A}|B)$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 248,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "xac_suat_co_dieu_kien_bayes",
    "topicName": "Xác suất có điều kiện & Công thức Bayes",
    "content": "Một thùng đựng hai loại hộp: hộp loại I và hộp loại II. Có $2$ hộp loại I, mỗi hộp gồm $13$ sản phẩm tốt và $2$ phế phẩm. Có $3$ hộp loại II, mỗi hộp gồm $6$ sản phẩm tốt và $4$ phế phẩm. Chọn ngẫu nhiên trong thùng $1$ hộp rồi từ hộp đó lấy ra $2$ sản phẩm. Biết cả $2$ sản phẩm lấy ra đều là sản phẩm tốt. Tính xác suất để cả $2$ sản phẩm đều thuộc hộp loại I.",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{52}{87}$"
      },
      {
        "key": "B",
        "content": "$\\frac{26}{35}$"
      },
      {
        "key": "C",
        "content": "$\\frac{87}{175}$"
      },
      {
        "key": "D",
        "content": "$\\frac{83}{165}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tổng số hộp trong thùng: $2 + 3 = 5$ hộp.\nGọi $H_1$ là biến cố 'Chọn được hộp loại I' $\\implies P(H_1) = \\frac{2}{5}$.\nGọi $H_2$ là biến cố 'Chọn được hộp loại II' $\\implies P(H_2) = \\frac{3}{5}$.\nGọi $A$ là biến cố 'Lấy ra được $2$ sản phẩm tốt'.\n- Nếu chọn được hộp loại I (gồm 13 tốt + 2 phế = 15 sản phẩm):\n  $$P(A | H_1) = \\frac{C_{13}^2}{C_{15}^2} = \\frac{78}{105} = \\frac{26}{35}$$\n- Nếu chọn được hộp loại II (gồm 6 tốt + 4 phế = 10 sản phẩm):\n  $$P(A | H_2) = \\frac{C_6^2}{C_{10}^2} = \\frac{15}{45} = \\frac{1}{3}$$\nTheo công thức xác suất toàn phần:\n$$P(A) = P(H_1) \\cdot P(A | H_1) + P(H_2) \\cdot P(A | H_2) = \\frac{2}{5} \\cdot \\frac{26}{35} + \\frac{3}{5} \\cdot \\frac{1}{3} = \\frac{52}{175} + \\frac{1}{5} = \\frac{52 + 35}{175} = \\frac{87}{175}$$\nTheo công thức Bayes, xác suất cả 2 sản phẩm tốt lấy ra thuộc hộp loại I là:\n$$P(H_1 | A) = \\frac{P(H_1) \\cdot P(A | H_1)}{P(A)} = \\frac{\\frac{52}{175}}{\\frac{87}{175}} = \\frac{52}{87}$$",
    "socraticHint": "Dùng công thức xác suất toàn phần tính $P(A)$, sau đó áp dụng định lý Bayes $P(H_1|A) = \\frac{P(H_1)P(A|H_1)}{P(A)}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 263,
    "type": "mcq",
    "topicId": "xac_suat_co_dieu_kien_bayes",
    "content": "Giả sử tỉ lệ người dân của một tỉnh nghiện thuốc lá là $30\\%$. Tỉ lệ người bị bệnh phổi trong số người nghiện thuốc lá là $80\\%$, trong khi tỉ lệ người bị bệnh phổi trong số người không nghiện thuốc lá là $10\\%$. Gặp ngẫu nhiên một người dân của tỉnh đó, xác suất người đó bị bệnh phổi là:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}31$"
      },
      {
        "key": "B",
        "content": "$0{,}20$"
      },
      {
        "key": "C",
        "content": "$0{,}42$"
      },
      {
        "key": "D",
        "content": "$0{,}35$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $A$ là biến cố 'Người được chọn nghiện thuốc lá' $\\implies P(A) = 0{,}30$ và $P(\\bar{A}) = 0{,}70$.\nGọi $B$ là biến cố 'Người được chọn bị bệnh phổi'.\nTheo giả thiết:\n- $P(B|A) = 0{,}80$\n- $P(B|\\bar{A}) = 0{,}10$\nÁp dụng công thức xác suất toàn phần:\n$$P(B) = P(A) \\cdot P(B|A) + P(\\bar{A}) \\cdot P(B|\\bar{A}) = 0{,}30 \\times 0{,}80 + 0{,}70 \\times 0{,}10 = 0{,}24 + 0{,}07 = 0{,}31$$",
    "socraticHint": "Sử dụng công thức xác suất toàn phần: $P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A})$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Xác suất có điều kiện & Công thức Bayes",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê"
  }
];
