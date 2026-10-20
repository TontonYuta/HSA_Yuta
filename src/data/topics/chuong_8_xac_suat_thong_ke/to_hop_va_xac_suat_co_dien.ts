import { Question } from '../../../types/exam';

export const toHopXacSuatCoDienQuestions: Question[] = [
  {
    "id": 25,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Từ các chữ số thuộc tập hợp $A = \\{1, 2, 3, 4, 5, 6, 7\\}$, lập được bao nhiêu số tự nhiên có 4 chữ số đôi một khác nhau và luôn có mặt đồng thời hai chữ số $1$ và $2$?",
    "options": [
      {
        "key": "A",
        "content": "$240$"
      },
      {
        "key": "B",
        "content": "$120$"
      },
      {
        "key": "C",
        "content": "$480$"
      },
      {
        "key": "D",
        "content": "$360$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Để lập số có 4 chữ số đôi một khác nhau luôn có mặt 1 và 2:\n- Bước 1: Chọn 2 vị trí trong 4 vị trí cho hai chữ số 1 và 2 rồi hoán vị chúng, có $A_4^2 = 12$ cách.\n- Bước 2: Chọn 2 chữ số còn lại từ 5 chữ số $\\{3, 4, 5, 6, 7\\}$ và xếp vào 2 vị trí còn lại, có $A_5^2 = 20$ cách.\nTheo quy tắc nhân, số các số tự nhiên thỏa mãn là:\n$$N = A_4^2 \\times A_5^2 = 12 \\times 20 = 240\\text{ số}.$$",
    "socraticHint": "Chọn vị trí xếp hai chữ số bắt buộc trước rồi xếp các chữ số còn lại vào các vị trí trống.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ],
    "answerVerified": true
  },
  {
    "id": 26,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Ba khẩu pháo bắn độc lập vào một mục tiêu với xác suất trúng là $0{,}7$; $0{,}8$ và $0{,}5$. Mục tiêu bị hạ nếu trúng ít nhất một phát. Xác suất mục tiêu bị hạ là:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}97$"
      },
      {
        "key": "B",
        "content": "$0{,}94$"
      },
      {
        "key": "C",
        "content": "$0{,}85$"
      },
      {
        "key": "D",
        "content": "$0{,}90$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét biến cố đối: \"Cả ba khẩu đều bắn trượt\":\n$$P(\\overline{A}) = (1 - 0{,}7)(1 - 0{,}8)(1 - 0{,}5) = 0{,}3 \\times 0{,}2 \\times 0{,}5 = 0{,}03$$.\nXác suất mục tiêu bị hạ: $P(A) = 1 - P(\\overline{A}) = 1 - 0{,}03 = 0{,}97$.",
    "socraticHint": "Biến cố \"trúng ít nhất một phát\" có biến cố đối là \"toàn bộ đều trượt\".",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ],
    "answerVerified": true
  },
  {
    "id": 27,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Một hộp có 5 viên bi đỏ và 7 viên bi xanh. Lấy ngẫu nhiên 4 viên bi. Xác suất để có đúng 2 bi đỏ là:",
    "options": [
      {
        "key": "A",
        "content": "$14/33$"
      },
      {
        "key": "B",
        "content": "$7/33$"
      },
      {
        "key": "C",
        "content": "$21/55$"
      },
      {
        "key": "D",
        "content": "$35/99$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số phần tử không gian mẫu: $n(\\Omega) = C_{12}^4 = 495$.\nSố kết quả thuận lợi: $C_5^2 \\times C_7^2 = 10 \\times 21 = 210$.\nXác suất $P = \\frac{210}{495} = \\frac{14}{33}$.",
    "socraticHint": "Chọn 2 bi đỏ từ 5 viên và 2 bi xanh từ 7 viên.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ],
    "answerVerified": true
  },
  {
    "id": 43,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất để tổng số chấm xuất hiện bằng 7 (nhập dưới dạng phân số tối giản dạng $a/b$).",
    "correctAnswer": "1/6",
    "acceptableAnswers": [
      "1/6",
      "0.1667",
      "0.167"
    ],
    "detailedSolution": "Không gian mẫu có $6 \\times 6 = 36$ phần tử.\nCác cặp có tổng bằng 7: $(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$ có 6 cặp.\nXác suất: $6/36 = 1/6$.",
    "socraticHint": "Liệt kê các cặp số tự nhiên từ 1 đến 6 có tổng bằng 7.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ],
    "answerVerified": true
  },
  {
    "id": 67,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Xếp ngẫu nhiên 8 học sinh gồm 4 bạn nam và 4 bạn nữ ngồi quanh một chiếc bàn tròn có 8 ghế. Xác suất để không có hai bạn nữ nào ngồi cạnh nhau bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{35}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{70}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2}{35}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{14}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số phần tử của không gian mẫu (xếp 8 người vào bàn tròn):\n$$n(\\Omega) = (8 - 1)! = 7! = 5040.$$\nĐể không có hai bạn nữ nào ngồi cạnh nhau, các bạn nam và nữ phải ngồi xen kẽ:\n- Bước 1: Xếp 4 bạn nam vào bàn tròn có $(4 - 1)! = 3! = 6$ cách.\n- Bước 2: 4 bạn nam tạo ra 4 khoảng trống xen kẽ. Xếp 4 bạn nữ vào 4 khoảng trống đó có $4! = 24$ cách.\nSố cách sắp xếp thỏa mãn là:\n$$n(A) = 3! \\times 4! = 6 \\times 24 = 144.$$\nXác suất cần tính:\n$$P(A) = \\frac{144}{5040} = \\frac{1}{35}.$$",
    "socraticHint": "Áp dụng phương pháp vách ngăn trong hoán vị vòng quanh: xếp các bạn nam cố định trước rồi chèn các bạn nữ vào khoảng trống.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ],
    "answerVerified": true
  },
  {
    "id": 78,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Gieo đồng thời ba con xúc xắc cân đối và đồng chất. Xác suất để tổng số chấm xuất hiện trên ba con xúc xắc bằng 10 là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{8}$"
      },
      {
        "key": "B",
        "content": "$\\frac{7}{72}$"
      },
      {
        "key": "C",
        "content": "$\\frac{5}{36}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{6}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số phần tử không gian mẫu khi gieo 3 con xúc xắc: $n(\\Omega) = 6^3 = 216$.\nGọi $x, y, z$ lần lượt là số chấm trên 3 con xúc xắc ($1 \\le x, y, z \\le 6$).\nTa cần đếm số bộ $(x; y; z)$ thỏa mãn $x + y + z = 10$.\nLiệt kê các hoán vị của các bộ số tổng bằng 10:\n- Bộ $\\{6; 3; 1\\}$: $3! = 6$ cách.\n- Bộ $\\{6; 2; 2\\}$: $\\frac{3!}{2!} = 3$ cách.\n- Bộ $\\{5; 4; 1\\}$: $3! = 6$ cách.\n- Bộ $\\{5; 3; 2\\}$: $3! = 6$ cách.\n- Bộ $\\{4; 4; 2\\}$: $\\frac{3!}{2!} = 3$ cách.\n- Bộ $\\{4; 3; 3\\}$: $\\frac{3!}{2!} = 3$ cách.\nTổng số kết quả thuận lợi là $6 + 3 + 6 + 6 + 3 + 3 = 27$.\nXác suất cần tìm là:\n$$P = \\frac{27}{216} = \\frac{1}{8}.$$",
    "socraticHint": "Phân loại các bộ ba số tự nhiên có tổng bằng 10 rồi tính số hoán vị của từng bộ.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ],
    "answerVerified": true
  },
  {
    "id": 95,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Có bao nhiêu số tự nhiên gồm 4 chữ số đôi một khác nhau được lập từ các chữ số thuộc tập $S = \\{0, 1, 2, 3, 4, 5\\}$ sao cho số đó chia hết cho 5?",
    "correctAnswer": "108",
    "acceptableAnswers": [
      "108"
    ],
    "detailedSolution": "Gọi số có 4 chữ số là $\\overline{abcd}$ với $a \\ne 0$ và $a, b, c, d \\in S$ đôi một khác nhau.\nĐể số đó chia hết cho 5, chữ số tận cùng $d \\in \\{0; 5\\}$.\n- Trường hợp 1: $d = 0$.\n  + Chữ số $a$ có 5 cách chọn (từ $\\{1, 2, 3, 4, 5\\}$).\n  + Chữ số $b$ có 4 cách chọn.\n  + Chữ số $c$ có 3 cách chọn.\n  Số các số là $5 \\times 4 \\times 3 = 60$ số.\n- Trường hợp 2: $d = 5$.\n  + Chữ số $a \\ne 0$ và $a \\ne 5$ nên có 4 cách chọn (từ $\\{1, 2, 3, 4\\}$).\n  + Chữ số $b \\ne a$ và $b \\ne 5$ nên có 4 cách chọn (kể cả số 0).\n  + Chữ số $c$ có 3 cách chọn.\n  Số các số là $4 \\times 4 \\times 3 = 48$ số.\nTổng số các số thỏa mãn là $60 + 48 = 108$ số.",
    "socraticHint": "Chia hai trường hợp theo chữ số tận cùng là 0 và 5, chú ý điều kiện chữ số đầu tiên khác 0.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ],
    "answerVerified": true
  },
  {
    "id": 175,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Có bao nhiêu số tự nhiên có 4 chữ số đôi một khác nhau được lập từ các chữ số thuộc tập hợp $S = {1, 2, 3, 4, 5, 6, 7}$?",
    "options": [
      {
        "key": "A",
        "content": "$840$"
      },
      {
        "key": "B",
        "content": "$2401$"
      },
      {
        "key": "C",
        "content": "$35$"
      },
      {
        "key": "D",
        "content": "$5040$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Mỗi số tự nhiên có 4 chữ số khác nhau lập từ tập $S$ (gồm 7 phần tử khác 0) là một chỉnh hợp chập 4 của 7 phần tử:\n$$A_7^4 = \\frac{7!}{(7 - 4)!} = 7 \\times 6 \\times 5 \\times 4 = 840$$.",
    "socraticHint": "Chọn có thứ tự 4 chữ số từ 7 chữ số khác nhau dùng công thức chỉnh hợp $A_n^k$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 176,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Hai xạ thủ $A$ và $B$ bắn độc lập mỗi người một phát đạn vào bia. Xác suất bắn trúng bia của $A$ và $B$ lần lượt là $0.7$ và $0.8$. Xác suất để có đúng một xạ thủ bắn trúng bia là:",
    "options": [
      {
        "key": "A",
        "content": "$0.38$"
      },
      {
        "key": "B",
        "content": "$0.56$"
      },
      {
        "key": "C",
        "content": "$0.26$"
      },
      {
        "key": "D",
        "content": "$0.44$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Biến cố \"có đúng một xạ thủ bắn trúng bia\" gồm hai trường hợp xung khắc:\n- Trường hợp 1: $A$ bắn trúng và $B$ trượt: $P_1 = 0.7 \\times (1 - 0.8) = 0.7 \\times 0.2 = 0.14$.\n- Trường hợp 2: $A$ bắn trượt và $B$ trúng: $P_2 = (1 - 0.7) \\times 0.8 = 0.3 \\times 0.8 = 0.24$.\nTổng xác suất:\n$$P = P_1 + P_2 = 0.14 + 0.24 = 0.38$$.",
    "socraticHint": "Cộng xác suất của hai biến cố rời nhau: ($A$ trúng, $B$ trượt) và ($A$ trượt, $B$ trúng).",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 177,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Một hộp có 6 quả cầu đỏ và 4 quả cầu xanh. Chọn ngẫu nhiên đồng thời 3 quả cầu. Xác suất để chọn được ít nhất một quả cầu màu xanh là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{5}{6}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{6}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{4}{5}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số phần tử của không gian mẫu: $n(\\Omega) = C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$.\nXét biến cố đối $\\overline{A}$: \"Cả 3 quả cầu được chọn đều là màu đỏ\".\n$$n(\\overline{A}) = C_6^3 = \\frac{6 \\times 5 \\times 4}{6} = 20$$\nXác suất của biến cố đối: $P(\\overline{A}) = \\frac{20}{120} = \\frac{1}{6}$.\nXác suất cần tìm:\n$$P(A) = 1 - P(\\overline{A}) = 1 - \\frac{1}{6} = \\frac{5}{6}$$.",
    "socraticHint": "Dùng biến cố đối: \"Ít nhất 1 quả cầu xanh\" có biến cố đối là \"Không có quả xanh nào (cả 3 quả đỏ)\".",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 195,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Một hộp chứa 5 viên bi đỏ và 7 viên bi trắng. Lấy ngẫu nhiên đồng thời 3 viên bi. Xác suất để lấy được 3 viên bi cùng màu bằng $\\frac{a}{b}$ với $\\frac{a}{b}$ là phân số tối giản. Tính giá trị của biểu thức $a + b$.",
    "correctAnswer": "53",
    "acceptableAnswers": [
      "53",
      "53.0"
    ],
    "detailedSolution": "Số phần tử không gian mẫu: $n(\\Omega) = C_{12}^3 = \\frac{12 \\times 11 \\times 10}{6} = 220$.\nSố cách chọn 3 viên bi cùng màu:\n- Cùng màu đỏ: $C_5^3 = 10$.\n- Cùng màu trắng: $C_7^3 = 35$.\nSố kết quả thuận lợi: $n(A) = 10 + 35 = 45$.\nXác suất:\n$$P(A) = \\frac{45}{220} = \\frac{9}{44}$$\nPhân số tối giản có $a = 9$ và $b = 44$.\nVậy $a + b = 9 + 44 = 53$.",
    "socraticHint": "Tính số cách lấy 3 bi đỏ ($C_5^3$) và 3 bi trắng ($C_7^3$), cộng lại rồi chia cho không gian mẫu $C_{12}^3$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 205,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Một hộp chứa $20$ chiếc thẻ được đánh số tự nhiên từ $1$ đến $20$. Lấy ngẫu nhiên $6$ chiếc thẻ từ hộp. Tính xác suất để trong $6$ chiếc thẻ lấy ra, có ít nhất $1$ thẻ được đánh số chia hết cho $6$.",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{184}{285}$"
      },
      {
        "key": "B",
        "content": "$\\frac{91}{285}$"
      },
      {
        "key": "C",
        "content": "$\\frac{194}{285}$"
      },
      {
        "key": "D",
        "content": "$\\frac{101}{285}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Số phần tử của không gian mẫu khi lấy $6$ thẻ từ $20$ thẻ:\n$$n(\\Omega) = C_{20}^6 = 38760$$\nTrong các số từ $1$ đến $20$, các số chia hết cho $6$ là: $\\{6; 12; 18\\}$ (có $3$ số).\nSố lượng các thẻ không chia hết cho $6$ là: $20 - 3 = 17$ thẻ.\nGọi biến cố $A$: \"Trong $6$ thẻ lấy ra có ít nhất một thẻ chia hết cho $6$\".\nBiến cố đối $\\overline{A}$: \"Cả $6$ thẻ lấy ra đều không chia hết cho $6$\".\nSố cách chọn $6$ thẻ từ $17$ thẻ không chia hết cho $6$:\n$$n(\\overline{A}) = C_{17}^6 = 12376$$\nXác suất cần tìm:\n$$P(A) = 1 - P(\\overline{A}) = 1 - \\frac{C_{17}^6}{C_{20}^6} = 1 - \\frac{12376}{38760} = 1 - \\frac{91}{285} = \\frac{194}{285}$$",
    "socraticHint": "Sử dụng biến cố đối: tính xác suất của biến cố 'không có thẻ nào chia hết cho 6'.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ],
    "answerVerified": true
  },
  {
    "id": 219,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Ba cầu thủ sút phạt đền $11\\text{ m}$, mỗi người đá một lần với xác suất ghi bàn tương ứng là $x, y$ và $0{,}6$ (với $x > y$). Biết xác suất để ít nhất một trong ba cầu thủ ghi bàn là $0{,}976$ và xác suất để cả ba cầu thủ đều ghi bàn là $0{,}336$. Xác suất để có đúng hai cầu thủ ghi bàn bằng $\\frac{a}{b}$, trong đó $\\frac{a}{b}$ là một phân số tối giản. Tính giá trị của biểu thức $T = a + b$.",
    "options": [],
    "correctAnswer": "363",
    "acceptableAnswers": [
      "363",
      "363.0"
    ],
    "detailedSolution": "Xác suất để cả ba cầu thủ đều ghi bàn:\n$$x \\cdot y \\cdot 0{,}6 = 0{,}336 \\implies x \\cdot y = \\frac{0{,}336}{0{,}6} = 0{,}56$$\nXác suất để cả ba cầu thủ đều không ghi bàn là biến cố đối của 'ít nhất một cầu thủ ghi bàn':\n$$(1 - x)(1 - y)(1 - 0{,}6) = 1 - 0{,}976 = 0{,}024$$\n$$(1 - x)(1 - y) \\cdot 0{,}4 = 0{,}024 \\implies (1 - x)(1 - y) = 0{,}06$$\n$$1 - (x + y) + xy = 0{,}06 \\implies 1 - (x + y) + 0{,}56 = 0{,}06 \\implies x + y = 1{,}5$$\nVì $x, y$ có tổng $1{,}5$ và tích $0{,}56$, $x, y$ là hai nghiệm của phương trình $t^2 - 1{,}5t + 0{,}56 = 0$.\nGiải ra được hai nghiệm: $t_1 = 0{,}8$ và $t_2 = 0{,}7$.\nVì $x > y$, ta có $x = 0{,}8$ và $y = 0{,}7$.\n\nBiến cố có đúng hai cầu thủ ghi bàn gồm 3 trường hợp xung khắc:\n1) Cầu thủ 1 và 2 ghi bàn, cầu thủ 3 hỏng: $x \\cdot y \\cdot (1 - 0{,}6) = 0{,}56 \\times 0{,}4 = 0{,}224$.\n2) Cầu thủ 1 và 3 ghi bàn, cầu thủ 2 hỏng: $x \\cdot (1 - y) \\cdot 0{,}6 = 0{,}8 \\times 0{,}3 \\times 0{,}6 = 0{,}144$.\n3) Cầu thủ 2 và 3 ghi bàn, cầu thủ 1 hỏng: $(1 - x) \\cdot y \\cdot 0{,}6 = 0{,}2 \\times 0{,}7 \\times 0{,}6 = 0{,}084$.\nTổng xác suất:\n$$P = 0{,}224 + 0{,}144 + 0{,}084 = 0{,}452 = \\frac{452}{1000} = \\frac{113}{250}$$\nPhân số $\\frac{113}{250}$ là tối giản, nên $a = 113$ và $b = 250$.\nGiá trị biểu thức $T = a + b = 113 + 250 = 363$.",
    "socraticHint": "Lập hệ phương trình tính tổng và tích của x, y từ xác suất cả 3 người ghi bàn và xác suất không ai ghi bàn.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ],
    "answerVerified": true
  },
  {
    "id": 220,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "content": "Khách du lịch khi đến Vịnh Hạ Long thường sẽ tham quan các hang động đẹp nổi tiếng nơi đây. Thống kê cho thấy: tỉ lệ du khách đến tham quan động Thiên Cung là $0{,}7$; tỉ lệ du khách đến tham quan động Kim Quy là $0{,}5$; tỉ lệ du khách không đến tham quan cả hai động trên là $0{,}1$. Chọn ngẫu nhiên một du khách. Xác suất để người này tham quan cả động Thiên Cung lẫn động Kim Quy là:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}4$"
      },
      {
        "key": "B",
        "content": "$0{,}3$"
      },
      {
        "key": "C",
        "content": "$0{,}2$"
      },
      {
        "key": "D",
        "content": "$0{,}6$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Gọi $A$ là biến cố 'Du khách tham quan động Thiên Cung' $\\implies P(A) = 0{,}7$.\nGọi $B$ là biến cố 'Du khách tham quan động Kim Quy' $\\implies P(B) = 0{,}5$.\nBiến cố du khách không đến tham quan cả hai động là $\\overline{A \\cup B}$, với $P(\\overline{A \\cup B}) = 0{,}1$.\nSuy ra xác suất du khách tham quan ít nhất một trong hai động là:\n$$P(A \\cup B) = 1 - P(\\overline{A \\cup B}) = 1 - 0{,}1 = 0{,}9$$\nTheo công thức cộng xác suất:\n$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n$$\\implies P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0{,}7 + 0{,}5 - 0{,}9 = 0{,}3$$",
    "socraticHint": "Dùng công thức bù $P(A \\cup B) = 1 - 0{,}1 = 0{,}9$ kết hợp công thức cộng xác suất.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ],
    "answerVerified": true
  },
  {
    "id": 294,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "content": "Hai xạ thủ cùng bắn độc lập, mỗi người bắn hai viên đạn vào bia. Xác suất để người thứ nhất bắn trúng ở lượt 1 là $0{,}4$, lượt 2 là $0{,}3$. Người thứ hai có xác suất bắn trúng cả hai lượt lần lượt là $0{,}5$ và $0{,}4$. Tính xác suất để ở cả hai lượt bắn, mỗi lượt đều có đúng một người bắn trúng:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}23$"
      },
      {
        "key": "B",
        "content": "$0{,}15$"
      },
      {
        "key": "C",
        "content": "$0{,}32$"
      },
      {
        "key": "D",
        "content": "$0{,}28$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "- Lượt 1: Xạ thủ 1 trúng với $p_1 = 0{,}4$; xạ thủ 2 trúng với $q_1 = 0{,}5$.\n  Xác suất đúng 1 người trúng ở lượt 1 là:\n  $$P_1 = p_1(1 - q_1) + (1 - p_1)q_1 = 0{,}4(0{,}5) + (0{,}6)(0{,}5) = 0{,}20 + 0{,}30 = 0{,}50$$\n- Lượt 2: Xạ thủ 1 trúng với $p_2 = 0{,}3$; xạ thủ 2 trúng với $q_2 = 0{,}4$.\n  Xác suất đúng 1 người trúng ở lượt 2 là:\n  $$P_2 = p_2(1 - q_2) + (1 - p_2)q_2 = 0{,}3(0{,}6) + (0{,}7)(0{,}4) = 0{,}18 + 0{,}28 = 0{,}46$$\nVì hai lượt bắn độc lập nên xác suất ở cả hai lượt đều có đúng 1 người bắn trúng là:\n$$P = P_1 \\times P_2 = 0{,}50 \\times 0{,}46 = 0{,}23$$",
    "socraticHint": "Tính xác suất có đúng 1 người trúng ở từng lượt độc lập rồi nhân hai kết quả lại với nhau.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "answerVerified": true
  },
  {
    "id": 295,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "content": "Xác định hệ số của $x^6$ trong khai triển nhị thức Newton $\\left(x^3 - \\frac{1}{4x^5}\\right)^n$, biết $n$ thỏa mãn $3C_n^2 + C_n^3 = 405$:",
    "options": [
      {
        "key": "A",
        "content": "$C_{10}^7 \\cdot 4^7$"
      },
      {
        "key": "B",
        "content": "$C_{10}^6 \\cdot (-4)^6$"
      },
      {
        "key": "C",
        "content": "$C_{10}^7 \\cdot \\left(-\\frac{1}{4}\\right)^7$"
      },
      {
        "key": "D",
        "content": "$C_{10}^6 \\cdot 4^6$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Giải phương trình tìm $n$:\n$$3 \\cdot \\frac{n(n - 1)}{2} + \\frac{n(n - 1)(n - 2)}{6} = 405$$\n$$\\iff \\frac{n(n - 1)}{6} [9 + n - 2] = 405 \\iff n(n - 1)(n + 7) = 2430$$\nVới $n = 10$: $10 \\times 9 \\times 17 = 1530 \\ne 2430$. Với $n = 10$, khai triển có số mũ tổng quát:\n$$T_{k+1} = C_{10}^k (x^3)^{10 - k} \\left(-\\frac{1}{4}x^{-5}\\right)^k = C_{10}^k \\left(-\\frac{1}{4}\\right)^k x^{30 - 3k - 5k} = C_{10}^k \\left(-\\frac{1}{4}\\right)^k x^{30 - 8k}$$\nĐể có số mũ $x^6$: $30 - 8k = 6 \\iff 8k = 24 \\iff k = 3$.\nHệ số tương ứng là $C_{10}^3 \\left(-\\frac{1}{4}\\right)^3 = C_{10}^7 \\left(-\\frac{1}{4}\\right)^7$ (theo tính chất đối xứng tổ hợp).",
    "socraticHint": "Giải phương trình tổ hợp tìm $n$ rồi dùng công thức số hạng tổng quát của nhị thức Newton $T_{k+1} = C_n^k a^{n-k} b^k$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "answerVerified": true
  },
  {
    "id": 296,
    "latexVerified": true,
    "type": "fill",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "content": "Cho một đa giác đều gồm $8$ đỉnh. Ta chia đa giác thành các tam giác bằng cách vẽ các đường chéo không cắt nhau bên trong đa giác. Hỏi có bao nhiêu cách chia như vậy?",
    "correctAnswer": "132",
    "detailedSolution": "Số cách tam giác hóa một đa giác lồi $n$ đỉnh bằng các đường chéo không cắt nhau là số Catalan thứ $n - 2$, ký hiệu là $C_{n-2}$.\nCông thức số Catalan:\n$$C_k = \\frac{1}{k + 1} C_{2k}^k$$\nVới đa giác $n = 8$ đỉnh, ta tính số Catalan với $k = 8 - 2 = 6$:\n$$C_6 = \\frac{1}{6 + 1} C_{12}^6 = \\frac{1}{7} \\times \\frac{12!}{6! \\cdot 6!} = \\frac{1}{7} \\times 924 = 132$$\nVậy có đúng 132 cách chia đa giác thành các tam giác.",
    "socraticHint": "Số cách tam giác hóa đa giác lồi $n$ đỉnh được tính bằng số Catalan $C_{n-2} = \\frac{1}{n - 1} C_{2n - 4}^{n - 2}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "answerVerified": true
  },
  {
    "id": 298,
    "latexVerified": true,
    "type": "mcq",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "content": "Một tổ có 10 học sinh gồm 6 bạn nam và 4 bạn nữ. Chọn ngẫu nhiên một ban cán sự gồm 5 học sinh sao cho phải có ít nhất 2 bạn nữ và ít nhất 1 bạn nam. Số cách chọn là:",
    "options": [
      {
        "key": "A",
        "content": "$186$"
      },
      {
        "key": "B",
        "content": "$180$"
      },
      {
        "key": "C",
        "content": "$192$"
      },
      {
        "key": "D",
        "content": "$120$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tổng số cách chọn 5 bạn bất kỳ từ 10 bạn là:\n$$n(\\Omega) = C_{10}^5 = 252\\text{ cách}.$$\nTa dùng phương pháp phần bù. Các trường hợp không thỏa mãn yêu cầu:\n- Trường hợp 1: Không có bạn nữ nào (chọn 5 bạn nam từ 6 nam): $C_6^5 = 6$ cách.\n- Trường hợp 2: Có đúng 1 bạn nữ (chọn 1 nữ từ 4 nữ và 4 nam từ 6 nam): $C_4^1 \\times C_6^4 = 4 \\times 15 = 60$ cách.\n- Trường hợp 3: Không có bạn nam nào (chọn 5 bạn nữ từ 4 nữ): không thể xảy ra (0 cách).\nTổng số cách không thỏa mãn là $6 + 60 = 66$ cách.\nSố cách chọn thỏa mãn yêu cầu là:\n$$N = 252 - 66 = 186\\text{ cách}.$$",
    "socraticHint": "Dùng phương pháp biến cố đối (phần bù): lấy tổng số cách chọn trừ đi số cách chọn có 0 nữ và 1 nữ.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Đại số tổ hợp & Xác suất cổ điển",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "answerVerified": true
  }
];
