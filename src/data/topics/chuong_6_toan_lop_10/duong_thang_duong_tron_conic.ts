import { Question } from '../../../types/exam';

export const duongThangDuongTronConicQuestions: Question[] = [
  {
    "id": 20,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho đường tròn $(C): x^2 + y^2 - 4x + 2y - 4 = 0$ và đường thẳng $d: 3x - 4y + m = 0$. Có bao nhiêu giá trị của tham số $m$ để đường thẳng $d$ tiếp xúc với đường tròn $(C)$?",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "$0$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đường tròn $(C)$ có tâm $I(2; -1)$ và bán kính $R = \\sqrt{2^2 + (-1)^2 - (-4)} = \\sqrt{9} = 3$.\nĐường thẳng $d$ tiếp xúc với đường tròn $(C)$ khi và chỉ khi khoảng cách từ $I$ đến $d$ bằng bán kính $R$:\n$$d(I, d) = R \\iff \\frac{|3(2) - 4(-1) + m|}{\\sqrt{3^2 + (-4)^2}} = 3$$\n$$\\iff \\frac{|10 + m|}{5} = 3 \\iff |10 + m| = 15 \\iff \\left[\\begin{array}{l} 10 + m = 15 \\iff m = 5 \\\\ 10 + m = -15 \\iff m = -25 \\end{array}\\right.$$\nVậy có đúng 2 giá trị của tham số $m$.",
    "socraticHint": "Điều kiện tiếp xúc giữa đường thẳng và đường tròn là khoảng cách từ tâm đến đường thẳng bằng bán kính.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ],
    "answerVerified": true
  },
  {
    "id": 21,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có các đỉnh $A(1; 3), B(-1; 1), C(3; 0)$. Độ dài đường cao kẻ từ đỉnh $A$ của tam giác $ABC$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{10\\sqrt{17}}{17}$"
      },
      {
        "key": "B",
        "content": "$\\frac{5\\sqrt{17}}{17}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2\\sqrt{17}}{17}$"
      },
      {
        "key": "D",
        "content": "$\\sqrt{17}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Độ dài đường cao kẻ từ $A$ chính là khoảng cách từ điểm $A$ đến đường thẳng $BC$.\nVectơ $\\vec{BC} = (3 - (-1); 0 - 1) = (4; -1)$.\nVectơ pháp tuyến của đường thẳng $BC$ là $\\vec{n}_{BC} = (1; 4)$.\nPhương trình đường thẳng $BC$ đi qua $C(3; 0)$:\n$$1(x - 3) + 4(y - 0) = 0 \\iff x + 4y - 3 = 0.$$\nKhoảng cách từ $A(1; 3)$ đến đường thẳng $BC$:\n$$h_A = d(A, BC) = \\frac{|1 + 4(3) - 3|}{\\sqrt{1^2 + 4^2}} = \\frac{10}{\\sqrt{17}} = \\frac{10\\sqrt{17}}{17}.$$",
    "socraticHint": "Lập phương trình tổng quát của đường thẳng chứa cạnh đối diện $BC$, sau đó tính khoảng cách từ đỉnh $A$ đến đường thẳng đó.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ],
    "answerVerified": true
  },
  {
    "id": 49,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có $A(1; 3), B(-2; 1), C(4; -1)$. Diện tích của tam giác $ABC$ bằng bao nhiêu?",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9.0"
    ],
    "detailedSolution": "Ta có $\\vec{AB} = (-3; -2)$ và $\\vec{AC} = (3; -4)$.\nDiện tích tam giác tính theo định thức tọa độ:\n$$S = \\frac{1}{2} |(-3)(-4) - (3)(-2)| = \\frac{1}{2} |12 + 6| = 9$$.",
    "socraticHint": "Dùng công thức diện tích tam giác theo tọa độ hai vectơ $S = \\frac{1}{2}|x_1 y_2 - x_2 y_1|$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ],
    "answerVerified": true
  },
  {
    "id": 65,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho elip $(E): \\frac{x^2}{16} + \\frac{y^2}{9} = 1$ và điểm $M(2; 1)$. Đường thẳng $\\Delta$ đi qua điểm $M$ cắt $(E)$ tại hai điểm phân biệt $A, B$ sao cho $M$ là trung điểm của đoạn thẳng $AB$. Hệ số góc của đường thẳng $\\Delta$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$-\\frac{9}{8}$"
      },
      {
        "key": "B",
        "content": "$-\\frac{8}{9}$"
      },
      {
        "key": "C",
        "content": "$\\frac{9}{8}$"
      },
      {
        "key": "D",
        "content": "$-\\frac{3}{4}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Giả sử $A(x_1; y_1), B(x_2; y_2) \\in (E)$. Ta có hệ:\n$$\\begin{cases} \\frac{x_1^2}{16} + \\frac{y_1^2}{9} = 1 \\\\ \\frac{x_2^2}{16} + \\frac{y_2^2}{9} = 1 \\end{cases}$$\nTrừ hai phương trình theo vế:\n$$\\frac{x_1^2 - x_2^2}{16} + \\frac{y_1^2 - y_2^2}{9} = 0 \\iff \\frac{(x_1 - x_2)(x_1 + x_2)}{16} + \\frac{(y_1 - y_2)(y_1 + y_2)}{9} = 0.$$\nVì $M(2; 1)$ là trung điểm của đoạn $AB$ nên $x_1 + x_2 = 2x_M = 4$ và $y_1 + y_2 = 2y_M = 2$.\nThay vào đẳng thức trên:\n$$\\frac{4(x_1 - x_2)}{16} + \\frac{2(y_1 - y_2)}{9} = 0 \\iff \\frac{x_1 - x_2}{4} = -\\frac{2(y_1 - y_2)}{9}$$\n$$\\iff k = \\frac{y_1 - y_2}{x_1 - x_2} = -\\frac{9}{8}.$$\nVậy hệ số góc của đường thẳng $\\Delta$ là $-\\frac{9}{8}$.",
    "socraticHint": "Sử dụng tính chất phân giác/hệ thức trung điểm của dây cung conic bằng cách trừ hai phương trình elip tại hai đầu mút.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ],
    "answerVerified": true
  },
  {
    "id": 76,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có trực tâm $H(2; 1)$, tâm đường tròn ngoại tiếp $I(1; 0)$ và trung điểm của cạnh $BC$ là $M(3; 2)$. Tọa độ của đỉnh $A$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(-2; -3)$"
      },
      {
        "key": "B",
        "content": "$(2; 3)$"
      },
      {
        "key": "C",
        "content": "$(-1; -2)$"
      },
      {
        "key": "D",
        "content": "$(0; -1)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo tính chất hình học tam giác (đường thẳng Euler), vectơ nối đỉnh và trực tâm liên hệ với vectơ từ tâm ngoại tiếp đến trung điểm cạnh đối diện qua hệ thức:\n$$\\vec{AH} = 2\\vec{IM}.$$\nTa có $\\vec{IM} = (3 - 1; 2 - 0) = (2; 2)$.\nSuy ra $\\vec{AH} = 2(2; 2) = (4; 4)$.\nVì $H(2; 1)$ nên:\n$$\\vec{AH} = (2 - x_A; 1 - y_A) = (4; 4) \\iff \\begin{cases} 2 - x_A = 4 \\\\ 1 - y_A = 4 \\end{cases} \\iff \\begin{cases} x_A = -2 \\\\ y_A = -3 \\end{cases}.$$\nVậy đỉnh $A$ có tọa độ $(-2; -3)$.",
    "socraticHint": "Áp dụng hệ thức Euler trong tam giác: $\\vec{AH} = 2\\vec{IM}$ với $M$ là trung điểm cạnh $BC$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ],
    "answerVerified": true
  },
  {
    "id": 93,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho đường tròn $(C)$ đi qua ba điểm $A(0; 6), B(8; 6), C(8; 0)$. Bán kính của đường tròn $(C)$ bằng bao nhiêu?",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "detailedSolution": "Xét các vectơ:\n$$\\vec{BA} = (0 - 8; 6 - 6) = (-8; 0),$$\n$$\\vec{BC} = (8 - 8; 0 - 6) = (0; -6).$$\nTích vô hướng $\\vec{BA} \\cdot \\vec{BC} = (-8)(0) + (0)(-6) = 0$, suy ra tam giác $ABC$ vuông tại $B$.\nDo đó đường tròn ngoại tiếp tam giác $ABC$ nhận cạnh huyền $AC$ làm đường kính.\nĐộ dài đường kính là:\n$$AC = \\sqrt{(8 - 0)^2 + (0 - 6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10.$$\nBán kính của đường tròn là $R = \\frac{AC}{2} = 5$.",
    "socraticHint": "Kiểm tra tính vuông góc của tam giác tạo bởi 3 điểm để xác định cạnh huyền là đường kính.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ],
    "answerVerified": true
  },
  {
    "id": 148,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Một bồn hoa có hình elip với độ dài trục lớn bằng 10 m và độ dài trục nhỏ bằng 6 m. Tiêu cự của bồn hoa hình elip này bằng bao nhiêu mét?",
    "correctAnswer": "8",
    "acceptableAnswers": [
      "8",
      "8.0"
    ],
    "detailedSolution": "Độ dài trục lớn $2a = 10 \\implies a = 5$.\nĐộ dài trục nhỏ $2b = 6 \\implies b = 3$.\nNửa tiêu cự: $c = \\sqrt{a^2 - b^2} = \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$.\nTiêu cự của hình elip là khoảng cách giữa 2 tiêu điểm: $2c = 2 \\times 4 = 8\\text{ m}$.",
    "socraticHint": "Tiêu cự của elip là $2c$ với $c = \\sqrt{a^2 - b^2}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ],
    "answerVerified": true
  },
  {
    "id": 170,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho đường tròn $(C): x^2 + y^2 = 9$. Từ điểm $M(5; 0)$ kẻ hai tiếp tuyến $MA, MB$ đến đường tròn $(C)$ với $A, B$ là hai tiếp điểm. Độ dài đoạn thẳng $AB$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{24}{5}$"
      },
      {
        "key": "B",
        "content": "$\\frac{12}{5}$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$\\frac{18}{5}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đường tròn $(C)$ có tâm $O(0; 0)$ và bán kính $R = 3$.\nKhoảng cách từ tâm đến điểm ngoài: $OM = 5$.\nTam giác $OAM$ vuông tại $A$, độ dài tiếp tuyến:\n$$MA = \\sqrt{OM^2 - OA^2} = \\sqrt{5^2 - 3^2} = 4.$$\nĐoạn nối hai tiếp điểm $AB$ vuông góc với $OM$ tại $H$. Khi đó $AH$ là đường cao của tam giác vuông $OAM$:\n$$AH = \\frac{OA \\cdot MA}{OM} = \\frac{3 \\times 4}{5} = \\frac{12}{5}.$$\nĐộ dài dây cung $AB$ là:\n$$AB = 2AH = 2 \\times \\frac{12}{5} = \\frac{24}{5}.$$",
    "socraticHint": "Đoạn thẳng nối hai tiếp điểm vuông góc với đường nối tâm và điểm ngoài tại trung điểm, dùng hệ thức lượng tam giác vuông.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 171,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có đỉnh $A(1; 2)$ và trọng tâm $G(3; 4)$. Tọa độ trung điểm $M$ của cạnh $BC$ là:",
    "options": [
      {
        "key": "A",
        "content": "$M(4; 5)$"
      },
      {
        "key": "B",
        "content": "$M(2; 3)$"
      },
      {
        "key": "C",
        "content": "$M(5; 6)$"
      },
      {
        "key": "D",
        "content": "$M(7; 8)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo tính chất trọng tâm: $\\vec{AG} = 2\\vec{GM} \\iff G - A = 2(M - G) \\iff 3G = A + 2M$.\nSuy ra $M = \\frac{3G - A}{2}$:\n- $x_M = \\frac{3(3) - 1}{2} = \\frac{8}{2} = 4$.\n- $y_M = \\frac{3(4) - 2}{2} = \\frac{10}{2} = 5$.\nVậy $M(4; 5)$.",
    "socraticHint": "Trọng tâm $G$ chia đoạn trung tuyến $AM$ theo tỉ số $AG = 2GM$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 193,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho đường thẳng $\\Delta: 3x - 4y + 5 = 0$ và điểm $I(1; -3)$. Bán kính của đường tròn tâm $I$ tiếp xúc với đường thẳng $\\Delta$ bằng bao nhiêu?",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4.0"
    ],
    "detailedSolution": "Đường tròn tâm $I$ tiếp xúc với đường thẳng $\\Delta$ khi bán kính $R = d(I, \\Delta)$.\n$$R = \\frac{|3(1) - 4(-3) + 5|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3 + 12 + 5|}{5} = \\frac{20}{5} = 4$$.",
    "socraticHint": "Khoảng cách từ tâm đến tiếp tuyến bằng chính bán kính đường tròn.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 198,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có các đỉnh $A(1; 4), B(3; 0), C(5; 5)$. Tính diện tích tam giác $ABC$.",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9"
    ],
    "detailedSolution": "Vectơ $\\vec{AB} = (3 - 1; 0 - 4) = (2; -4)$.\nVectơ $\\vec{AC} = (5 - 1; 5 - 4) = (4; 1)$.\nDiện tích tam giác $ABC$ được tính theo công thức định thức tọa độ:\n$$S_{ABC} = \\frac{1}{2} |x_{\\vec{AB}} y_{\\vec{AC}} - y_{\\vec{AB}} x_{\\vec{AC}}| = \\frac{1}{2} |2(1) - (-4)(4)| = \\frac{1}{2} |2 + 16| = \\frac{18}{2} = 9.$$",
    "socraticHint": "Sử dụng công thức diện tích tam giác qua tọa độ hai vectơ chung đỉnh: $S = \\frac{1}{2}|x_1 y_2 - x_2 y_1|$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ],
    "answerVerified": true
  },
  {
    "id": 203,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "duong_thang_duong_tron_conic",
    "topicName": "Đường thẳng, Đường tròn & Ba đường Conic",
    "content": "Một mảnh vườn hình elip có độ dài trục lớn bằng $20\\text{ m}$, độ dài trục bé bằng $16\\text{ m}$. Người ta dự định trồng hoa trong hình chữ nhật $MNPQ$ nội tiếp elip. Tính diện tích phần trồng hoa, biết chiều dài của phần trồng hoa là $MN = 16\\text{ m}$ (kết quả tính theo $\\text{m}^2$).",
    "options": [],
    "correctAnswer": "153.6",
    "acceptableAnswers": [
      "153.6",
      "153,6",
      "153.60"
    ],
    "detailedSolution": "Chọn hệ trục tọa độ $Oxy$ sao cho gốc $O$ là tâm elip, trục hoành chứa trục lớn và trục tung chứa trục bé.\nPhương trình chính tắc của elip:\n- Độ dài trục lớn: $2a = 20 \\implies a = 10$.\n- Độ dài trục bé: $2b = 16 \\implies b = 8$.\n$$(E): \\frac{x^2}{100} + \\frac{y^2}{64} = 1$$\nHình chữ nhật $MNPQ$ nội tiếp elip và có cạnh $MN = 16\\text{ m}$ song song với trục lớn.\nDo tính đối xứng qua các trục tọa độ, hoành độ đỉnh $M$ thỏa mãn $2x_M = 16 \\implies x_M = 8$.\nThay $x_M = 8$ vào phương trình $(E)$:\n$$\\frac{64}{100} + \\frac{y^2}{64} = 1 \\iff \\frac{y^2}{64} = 0.36 \\implies y_M = \\sqrt{64 \\times 0.36} = 8 \\times 0.6 = 4.8\\text{ m}$$\nChiều rộng hình chữ nhật: $MQ = 2y_M = 2 \\times 4.8 = 9.6\\text{ m}$.\nDiện tích hình chữ nhật trồng hoa:\n$$S = MN \\times MQ = 16 \\times 9.6 = 153.6\\text{ m}^2$$",
    "socraticHint": "Thiết lập phương trình chính tắc elip $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, từ chiều dài cạnh suy ra hoành độ và tìm tung độ.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ],
    "answerVerified": true
  }
];
