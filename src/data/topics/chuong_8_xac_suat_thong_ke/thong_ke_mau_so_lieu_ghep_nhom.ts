import { Question } from '../../../types/exam';

export const thongKeGhepNhomQuestions: Question[] = [
  {
    "id": 28,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Cho mẫu số liệu ghép nhóm thời gian học (phút):\n$[30; 60): 6, \\quad [60; 90): 14, \\quad [90; 120): 12, \\quad [120; 150): 8$.\nKhoảng biến thiên của mẫu số liệu ghép nhóm là:",
    "options": [
      {
        "key": "A",
        "content": "$120$"
      },
      {
        "key": "B",
        "content": "$150$"
      },
      {
        "key": "C",
        "content": "$90$"
      },
      {
        "key": "D",
        "content": "$100$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo định nghĩa chuẩn GDPT 2018, khoảng biến thiên $R$ là hiệu số giữa đầu mút phải của nhóm cuối và đầu mút trái của nhóm đầu:\n$$R = 150 - 30 = 120$$.",
    "socraticHint": "Khoảng biến thiên của mẫu ghép nhóm bằng đầu mút lớn nhất trừ đầu mút nhỏ nhất.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 29,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Số bàn thắng của 20 trận đấu bóng đá được tổng hợp:\n$[0; 2): 4, \\quad [2; 4): 10, \\quad [4; 6): 6$.\nSố trung bình của mẫu số liệu ghép nhóm này là:",
    "options": [
      {
        "key": "A",
        "content": "$3{,}2$"
      },
      {
        "key": "B",
        "content": "$3{,}0$"
      },
      {
        "key": "C",
        "content": "$3{,}5$"
      },
      {
        "key": "D",
        "content": "$2{,}8$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Giá trị đại diện: nhóm 1 là 1, nhóm 2 là 3, nhóm 3 là 5.\nTrung bình: $\\bar{x} = \\frac{4(1) + 10(3) + 6(5)}{20} = \\frac{64}{20} = 3{,}2$.",
    "socraticHint": "Lấy giá trị đại diện (trung điểm) nhân tần số tương ứng rồi chia tổng số phần tử.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 42,
    "type": "fill",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Bảng tần số ghép nhóm số bàn thắng:\n$[0; 2): 4, \\quad [2; 4): 10, \\quad [4; 6): 6$.\nHãy tính số trung bình số bàn thắng của mẫu trên.",
    "correctAnswer": "3.2",
    "acceptableAnswers": [
      "3.2",
      "3,2",
      "16/5"
    ],
    "detailedSolution": "Số trung bình: $\\bar{x} = \\frac{4(1) + 10(3) + 6(5)}{20} = \\frac{64}{20} = 3{,}2$.",
    "socraticHint": "Trung bình trọng số với giá trị tâm của mỗi khoảng.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 68,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Trong mẫu số liệu ghép nhóm, nhóm chứa trung vị $M_e$ là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng:",
    "options": [
      {
        "key": "A",
        "content": "$n/2$"
      },
      {
        "key": "B",
        "content": "$n/4$"
      },
      {
        "key": "C",
        "content": "$3n/4$"
      },
      {
        "key": "D",
        "content": "$n$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo định nghĩa SGK Toán 12 GDPT 2018, nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy $\\ge \\frac{n}{2}$.",
    "socraticHint": "Trung vị chia dữ liệu thành hai nửa bằng nhau ($50\\% - 50\\%$).",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 79,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Độ dài của nhóm $[20; 25)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$22{,}5$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$25$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Độ dài nhóm $[a; b)$ là hiệu $b - a = 25 - 20 = 5$.",
    "socraticHint": "Độ dài nhóm bằng đầu mút phải trừ đầu mút trái.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 96,
    "type": "fill",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Độ dài của khoảng $[10; 30)$ bằng bao nhiêu?",
    "correctAnswer": "20",
    "acceptableAnswers": [
      "20",
      "20.0"
    ],
    "detailedSolution": "Độ dài của khoảng là $30 - 10 = 20$.",
    "socraticHint": "Lấy đầu mút phải trừ đầu mút trái.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 128,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Một mẫu số liệu ghép nhóm về thời gian hoàn thành bài tập của 40 học sinh có phân bố: $[0; 5)$ có 4 hs, $[5; 10)$ có 12 hs, $[10; 15)$ có 16 hs, $[15; 20)$ có 8 hs. Khoảng tứ phân vị $Delta_Q = Q_3 - Q_1$ của mẫu ghép nhóm bằng:",
    "options": [
      {
        "key": "A",
        "content": "$6.875$"
      },
      {
        "key": "B",
        "content": "$7.500$"
      },
      {
        "key": "C",
        "content": "$6.250$"
      },
      {
        "key": "D",
        "content": "$8.125$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cỡ mẫu $n = 40$. Tần số tích lũy: $cf_1 = 4, cf_2 = 16, cf_3 = 32, cf_4 = 40$.\n- Tứ phân vị thứ nhất $Q_1$: vị trí $\\frac{n}{4} = 10$. Nhóm chứa $Q_1$ là $[5; 10)$:\n$$Q_1 = 5 + \\frac{10 - 4}{12} \\times (10 - 5) = 5 + \\frac{6}{12} \\times 5 = 5 + 2.5 = 7.5$$\n- Tứ phân vị thứ ba $Q_3$: vị trí $\\frac{3n}{4} = 30$. Nhóm chứa $Q_3$ là $[10; 15)$:\n$$Q_3 = 10 + \\frac{30 - 16}{16} \\times (15 - 10) = 10 + \\frac{14}{16} \\times 5 = 10 + 4.375 = 14.375$$\nKhoảng tứ phân vị:\n$$Delta_Q = Q_3 - Q_1 = 14.375 - 7.5 = 6.875$$.",
    "socraticHint": "Tính $Q_1$ và $Q_3$ theo công thức tứ phân vị mẫu số liệu ghép nhóm rồi lấy hiệu $Delta_Q = Q_3 - Q_1$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 129,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Cho mẫu số liệu ghép nhóm về điểm thi của 30 học sinh: nhóm $[4; 6)$ có 6 học sinh, nhóm $[6; 8)$ có 15 học sinh, nhóm $[8; 10]$ có 9 học sinh. Số trung bình cộng $\\bar{x}$ của mẫu số liệu ghép nhóm này bằng:",
    "options": [
      {
        "key": "A",
        "content": "$7.2$"
      },
      {
        "key": "B",
        "content": "$7.0$"
      },
      {
        "key": "C",
        "content": "$7.5$"
      },
      {
        "key": "D",
        "content": "$6.8$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xác định giá trị đại diện của từng nhóm:\n- Nhóm $[4; 6)$ có giá trị đại diện $c_1 = \\frac{4 + 6}{2} = 5$.\n- Nhóm $[6; 8)$ có giá trị đại diện $c_2 = \\frac{6 + 8}{2} = 7$.\n- Nhóm $[8; 10]$ có giá trị đại diện $c_3 = \\frac{8 + 10}{2} = 9$.\nSố trung bình cộng của mẫu số liệu ghép nhóm:\n$$\\bar{x} = \\frac{6(5) + 15(7) + 9(9)}{30} = \\frac{30 + 105 + 81}{30} = \\frac{216}{30} = 7.2$$.",
    "socraticHint": "Lấy trung điểm mỗi nhóm làm giá trị đại diện rồi áp dụng công thức trung bình có trọng số.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 142,
    "type": "fill",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Khảo sát số giờ tự học mỗi tuần của 20 học sinh thu được bảng số liệu ghép nhóm: $[0; 2)$ có 2 hs; $[2; 4)$ có 6 hs; $[4; 6)$ có 8 hs; $[6; 8)$ có 4 hs. Phương sai $s^2$ của mẫu số liệu ghép nhóm này bằng bao nhiêu?",
    "correctAnswer": "3.24",
    "acceptableAnswers": [
      "3.24",
      "3,24"
    ],
    "detailedSolution": "Giá trị đại diện các nhóm: $c_1 = 1, c_2 = 3, c_3 = 5, c_4 = 7$.\nCỡ mẫu $n = 20$.\nSố trung bình:\n$$\\bar{x} = \\frac{2(1) + 6(3) + 8(5) + 4(7)}{20} = \\frac{2 + 18 + 40 + 28}{20} = \\frac{88}{20} = 4.4$$\nTổng bình phương các giá trị đại diện nhân tần số:\n$$\\sum n_i c_i^2 = 2(1^2) + 6(3^2) + 8(5^2) + 4(7^2) = 2 + 54 + 200 + 196 = 452$$\nPhương sai:\n$$s^2 = \\frac{1}{n}\\sum n_i c_i^2 - \\bar{x}^2 = \\frac{452}{20} - 4.4^2 = 22.6 - 19.36 = 3.24$$.",
    "socraticHint": "Tính số trung bình $\\bar{x}$, sau đó dùng công thức $s^2 = \\frac{1}{n}\\sum n_i c_i^2 - \\bar{x}^2$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 149,
    "type": "fill",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Cho bảng tần số ghép nhóm về chiều cao của 40 cây non: nhóm $[10; 20)$ có 6 cây; nhóm $[20; 30)$ có 14 cây; nhóm $[30; 40)$ có 12 cây; nhóm $[40; 50)$ có 8 cây. Trung vị $M_e$ của mẫu ghép nhóm bằng bao nhiêu?",
    "correctAnswer": "30",
    "acceptableAnswers": [
      "30",
      "30.0"
    ],
    "detailedSolution": "Cỡ mẫu $n = 40 \\implies \\frac{n}{2} = 20$.\nTần số tích lũy: $cf_1 = 6, cf_2 = 20, cf_3 = 32, cf_4 = 40$.\nVì $cf_1 = 6 < 20 \\le cf_2 = 20$, trung vị rơi vào nhóm $[20; 30)$ (cụ thể ngay tại mút trên).\nÁp dụng công thức trung vị mẫu ghép nhóm:\n$$M_e = a_2 + \\frac{\\frac{n}{2} - cf_1}{n_2} \\cdot (a_3 - a_2) = 20 + \\frac{20 - 6}{14} \\cdot (30 - 20) = 20 + \\frac{14}{14} \\cdot 10 = 30$$.",
    "socraticHint": "Xác định nhóm chứa trung vị qua vị trí $n/2 = 20$ rồi áp dụng công thức $M_e = a_p + \\frac{n/2 - cf_{p-1}}{n_p} h$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 178,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Cho mẫu số liệu ghép nhóm về thời gian hoàn thành một công việc: $[10; 20)$ có 5 người, $[20; 30)$ có 18 người, $[30; 40)$ có 12 người, $[40; 50)$ có 5 người. Nhóm chứa mốt của mẫu số liệu ghép nhóm là:",
    "options": [
      {
        "key": "A",
        "content": "$[20; 30)$"
      },
      {
        "key": "B",
        "content": "$[30; 40)$"
      },
      {
        "key": "C",
        "content": "$[10; 20)$"
      },
      {
        "key": "D",
        "content": "$[40; 50)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Nhóm chứa mốt của mẫu số liệu ghép nhóm là nhóm có tần số lớn nhất.\nTrong bảng trên, nhóm $[20; 30)$ có tần số lớn nhất là $18$.\nDo đó nhóm chứa mốt là $[20; 30)$.",
    "socraticHint": "Nhóm chứa mốt là nhóm có tần số xuất hiện cao nhất trong bảng số liệu.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 179,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Khoảng biến thiên của mẫu số liệu ghép nhóm gồm các nhóm $[10; 20), [20; 30), [30; 40), [40; 50)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$40$"
      },
      {
        "key": "B",
        "content": "$50$"
      },
      {
        "key": "C",
        "content": "$10$"
      },
      {
        "key": "D",
        "content": "$30$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Khoảng biến thiên của mẫu số liệu ghép nhóm là hiệu số giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên:\n$$R = 50 - 10 = 40$$.",
    "socraticHint": "Khoảng biến thiên $R$ là hiệu số giữa giá trị lớn nhất và nhỏ nhất của thang đo: $R = x_{\\max} - x_{\\min}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 192,
    "type": "fill",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Khảo sát chiều cao của 40 học sinh thu được bảng số liệu: $[150; 155)$ có 5 học sinh; $[155; 160)$ có 12 học sinh; $[160; 165)$ có 15 học sinh; $[165; 170)$ có 8 học sinh. Số trung bình cộng của mẫu ghép nhóm bằng bao nhiêu?",
    "correctAnswer": "160.75",
    "acceptableAnswers": [
      "160.75",
      "160,75"
    ],
    "detailedSolution": "Giá trị đại diện các nhóm:\n- $[150; 155)$: $c_1 = 152.5$\n- $[155; 160)$: $c_2 = 157.5$\n- $[160; 165)$: $c_3 = 162.5$\n- $[165; 170)$: $c_4 = 167.5$\nSố trung bình cộng:\n$$\\bar{x} = \\frac{5(152.5) + 12(157.5) + 15(162.5) + 8(167.5)}{40} = \\frac{762.5 + 1890 + 2437.5 + 1340}{40} = \\frac{6430}{40} = 160.75$$.",
    "socraticHint": "Tìm giá trị đại diện của từng nhóm rồi tính trung bình có trọng số theo công thức chuẩn.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 199,
    "type": "fill",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Cho bảng số liệu ghép nhóm về điểm kiểm tra của học sinh: nhóm $[0; 4)$ có 2 em; nhóm $[4; 7)$ có 10 em; nhóm $[7; 10]$ có 8 em. Khoảng biến thiên của mẫu số liệu ghép nhóm này bằng bao nhiêu?",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10",
      "10.0"
    ],
    "detailedSolution": "Đầu mút trái của nhóm đầu tiên là 0. Đầu mút phải của nhóm cuối cùng là 10.\nKhoảng biến thiên của mẫu số liệu ghép nhóm:\n$$R = 10 - 0 = 10$$.",
    "socraticHint": "Khoảng biến thiên $R$ bằng đầu mút phải của nhóm lớn nhất trừ đầu mút trái của nhóm nhỏ nhất.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 204,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Thống kê điểm thi giữa học kì I môn Toán của các bạn học sinh trong một lớp theo bảng sau:\n\n$$\\begin{array}{|c|c|c|c|c|c|c|}\\hline \\text{Điểm} & 5 & 6 & 7 & 8 & 9 & 10 \\\\ \\hline \\text{Số học sinh} & 1 & 3 & 10 & 15 & 7 & 4 \\\\ \\hline \\end{array}$$\n\nPhương sai của mẫu số liệu trên là (kết quả tính làm tròn đến hàng phần trăm):",
    "options": [
      {
        "key": "A",
        "content": "$1{,}34$"
      },
      {
        "key": "B",
        "content": "$1{,}16$"
      },
      {
        "key": "C",
        "content": "$1{,}37$"
      },
      {
        "key": "D",
        "content": "$1{,}17$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tổng số học sinh: $n = 1 + 3 + 10 + 15 + 7 + 4 = 40$.\nĐiểm trung bình cộng của mẫu số liệu:\n$$\\bar{x} = \\frac{5 \\times 1 + 6 \\times 3 + 7 \\times 10 + 8 \\times 15 + 9 \\times 7 + 10 \\times 4}{40} = \\frac{316}{40} = 7{,}9$$\nPhương sai của mẫu số liệu theo định nghĩa SGK:\n$$s^2 = \\frac{1}{n} \\sum_{i=1}^k n_i(x_i - \\bar{x})^2$$\n$$s^2 = \\frac{1(5-7.9)^2 + 3(6-7.9)^2 + 10(7-7.9)^2 + 15(8-7.9)^2 + 7(9-7.9)^2 + 4(10-7.9)^2}{40}$$\n$$s^2 = \\frac{1(8.41) + 3(3.61) + 10(0.81) + 15(0.01) + 7(1.21) + 4(4.41)}{40} = \\frac{53.60}{40} = 1{,}34$$\n(Nếu dùng phương sai mẫu hiệu chỉnh: $s'^2 = \\frac{53.60}{39} \\approx 1{,}37$. Phương án chuẩn theo SGK Lớp 10 là $s^2 = 1{,}34$).",
    "socraticHint": "Tính số trung bình $\\bar{x}$ trước, sau đó áp dụng công thức phương sai $s^2 = \\frac{1}{n} \\sum n_i(x_i - \\bar{x})^2$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 218,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Thống kê thời gian (đơn vị: phút) đi từ nhà đến nơi làm việc của các nhân viên một công ty theo bảng sau:\n\n$$\\begin{array}{|c|c|c|c|c|c|c|}\\hline \\text{Thời gian} & [15; 20) & [20; 25) & [25; 30) & [30; 35) & [35; 40) & [40; 45) \\\\ \\hline \\text{Số nhân viên} & 6 & 12 & 20 & 25 & 15 & 2 \\\\ \\hline \\end{array}$$\n\nTính mốt của mẫu số liệu ghép nhóm trên:",
    "options": [
      {
        "key": "A",
        "content": "$32$"
      },
      {
        "key": "B",
        "content": "$31$"
      },
      {
        "key": "C",
        "content": "$\\frac{95}{3}$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Nhóm chứa mốt là nhóm có tần số lớn nhất: nhóm $[30; 35)$ với tần số $m_j = 25$.\nCác thông số:\n- Đầu mút trái: $u_j = 30$.\n- Độ dài nhóm: $h = 35 - 30 = 5$.\n- Tần số nhóm trước nó: $m_{j-1} = 20$.\n- Tần số nhóm sau nó: $m_{j+1} = 15$.\n\nCông thức mốt của mẫu số liệu ghép nhóm:\n$$M_o = u_j + \\frac{m_j - m_{j-1}}{(m_j - m_{j-1}) + (m_j - m_{j+1})} \\cdot h$$\n$$M_o = 30 + \\frac{25 - 20}{(25 - 20) + (25 - 15)} \\cdot 5 = 30 + \\frac{5}{5 + 10} \\cdot 5 = 30 + \\frac{5}{3} = \\frac{95}{3} \\approx 31{,}67$$",
    "socraticHint": "Tìm nhóm có tần số lớn nhất rồi thay vào công thức chuẩn tính mốt của mẫu số liệu ghép nhóm.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 246,
    "type": "mcq",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "content": "Thống kê kết quả điểm số của các kỳ thủ trong một giải thi đấu cờ tướng theo bảng sau:\n\n$$\\begin{array}{|c|c|c|c|c|c|}\\hline \\text{Điểm số} & [0; 2) & [2; 4) & [4; 6) & [6; 8) & [8; 10) \\\\ \\hline \\text{Số kỳ thủ} & 2 & 4 & 8 & 5 & 6 \\\\ \\hline \\end{array}$$\n\nKhoảng tứ phân vị của mẫu số liệu ghép nhóm trên là:",
    "options": [
      {
        "key": "A",
        "content": "$4{,}3$"
      },
      {
        "key": "B",
        "content": "$3{,}8$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tổng số kỳ thủ: $n = 2 + 4 + 8 + 5 + 6 = 25$.\nTần số tích lũy: $cf_1 = 2, cf_2 = 6, cf_3 = 14, cf_4 = 19, cf_5 = 25$.\n1) Tìm tứ phân vị thứ nhất $Q_1$:\n- Vị trí: $\\frac{n}{4} = \\frac{25}{4} = 6{,}25$. Giá trị này rơi vào nhóm thứ ba $[4; 6)$ vì $6 < 6{,}25 \\le 14$.\n- Đầu mút trái $u = 4$, tần số tích lũy nhóm trước $cf = 6$, tần số nhóm $n_3 = 8$, độ dài nhóm $h = 2$.\n$$Q_1 = 4 + \\frac{6{,}25 - 6}{8} \\times 2 = 4 + \\frac{0{,}25}{8} \\times 2 = 4 + 0{,}0625 = 4{,}0625$$\n2) Tìm tứ phân vị thứ ba $Q_3$:\n- Vị trí: $\\frac{3n}{4} = \\frac{75}{4} = 18{,}75$. Giá trị này rơi vào nhóm thứ tư $[6; 8)$ vì $14 < 18{,}75 \\le 19$.\n- Đầu mút trái $u = 6$, tần số tích lũy nhóm trước $cf = 14$, tần số nhóm $n_4 = 5$, độ dài nhóm $h = 2$.\n$$Q_3 = 6 + \\frac{18{,}75 - 14}{5} \\times 2 = 6 + \\frac{4{,}75}{5} \\times 2 = 6 + 1{,}9 = 7{,}9$$\n3) Khoảng tứ phân vị $\\Delta_Q$:\n$$\\Delta_Q = Q_3 - Q_1 = 7{,}9 - 4{,}0625 = 3{,}8375 \\approx 3{,}8$$",
    "socraticHint": "Tìm nhóm chứa $Q_1$ và nhóm chứa $Q_3$ theo tần số tích lũy rồi áp dụng công thức tính khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 285,
    "type": "fill",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "content": "Bảng thống kê thời gian đi làm bằng xe buýt của 100 lần di chuyển:\n$[15; 18): 22, \\quad [18; 21): 38, \\quad [21; 24): 27, \\quad [24; 27): 8, \\quad [27; 30): 4, \\quad [30; 33): 1$.\nTính khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ của mẫu số liệu ghép nhóm trên? (Làm tròn kết quả đến hàng đơn vị).",
    "correctAnswer": "4",
    "detailedSolution": "Tổng số quan sát $n = 100$.\n- Tìm $Q_1$: vị trí $\\frac{n}{4} = 25$. Tần số tích lũy: nhóm 1 có 22, nhóm 2 có $22 + 38 = 60$. Vậy nhóm chứa $Q_1$ là $[18; 21)$.\n  $$Q_1 = 18 + \\frac{25 - 22}{38} \\times (21 - 18) = 18 + \\frac{9}{38} \\approx 18{,}237$$\n- Tìm $Q_3$: vị trí $\\frac{3n}{4} = 75$. Tần số tích lũy nhóm 3 là $60 + 27 = 87$. Vậy nhóm chứa $Q_3$ là $[21; 24)$.\n  $$Q_3 = 21 + \\frac{75 - 60}{27} \\times (24 - 21) = 21 + \\frac{15}{27} \\times 3 = 21 + \\frac{5}{3} \\approx 22{,}667$$\n- Khoảng tứ phân vị:\n  $$\\Delta_Q = Q_3 - Q_1 = 22{,}667 - 18{,}237 = 4{,}43$$\nLàm tròn đến hàng đơn vị: $4$.",
    "socraticHint": "Xác định nhóm chứa $Q_1$ và nhóm chứa $Q_3$ theo tần số tích lũy rồi áp dụng công thức nội suy tứ phân vị.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Thống kê & Mẫu số liệu ghép nhóm",
    "chapterId": "chuong_8_xac_suat_thong_ke",
    "chapterName": "Chương 8: Đại số tổ hợp, Xác suất & Thống kê"
  }
];
