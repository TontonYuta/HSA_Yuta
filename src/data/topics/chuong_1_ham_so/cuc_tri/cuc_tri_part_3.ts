import { Question } from '../../../../types/exam';

export const cucTriPart3Questions: Question[] = [
  {
    "id": 443,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của $m$ để hàm số $f(x) = 2x^3 - 6x^2 - m + 1$ có các giá trị cực trị trái dấu?",
    "options": [
      {
        "key": "A",
        "content": "$7$"
      },
      {
        "key": "B",
        "content": "$9$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $f'(x) = 6x^2 - 12x = 6x(x - 2)$.\n$$f'(x) = 0 \\iff \\left[ \\begin{matrix} x = 0 \\implies y_{CĐ} = 1 - m \\\\ x = 2 \\implies y_{CT} = 2(8) - 6(4) - m + 1 = -7 - m \\end{matrix} \\right.$$\n\nHàm số có các giá trị cực trị trái dấu khi và chỉ khi:\n$$y_{CĐ} \\cdot y_{CT} < 0 \\iff (1 - m)(-7 - m) < 0 \\iff (m - 1)(m + 7) < 0 \\iff -7 < m < 1.$$\n\nVì $m$ là số nguyên nên:\n$$m \\in \\{-6; -5; -4; -3; -2; -1; 0\\}.$$\nSố giá trị nguyên của $m$ thỏa mãn là: $0 - (-6) + 1 = 7$.\n\nChọn A.",
    "socraticHint": "Giá trị cực trị trái dấu $\\iff y_{CĐ} \\cdot y_{CT} < 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 444,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = 2x^3 + 3(m - 1)x^2 + 6(m - 2)x - 1$ với $m$ là tham số thực. Tìm tất cả các giá trị của $m$ để hàm số có điểm cực đại và điểm cực tiểu nằm trong khoảng $(-2; 3)$.",
    "options": [
      {
        "key": "A",
        "content": "$m \\in (-1; 4) \\setminus \\{3\\}$"
      },
      {
        "key": "B",
        "content": "$m \\in (3; 4)$"
      },
      {
        "key": "C",
        "content": "$m \\in (1; 3)$"
      },
      {
        "key": "D",
        "content": "$m \\in (-1; 4)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm:\n$$y' = 6x^2 + 6(m - 1)x + 6(m - 2) = 6[x^2 + (m - 1)x + (m - 2)] = 6(x + 1)(x + m - 2).$$\n$$y' = 0 \\iff \\left[ \\begin{matrix} x = -1 \\\\ x = 2 - m \\end{matrix} \\right.$$\n\nTa thấy $x = -1 \\in (-2; 3)$.\nĐể hàm số có điểm cực đại và điểm cực tiểu đều nằm trong khoảng $(-2; 3)$ thì phương trình $y' = 0$ phải có hai nghiệm phân biệt thuộc khoảng $(-2; 3)$:\n$$\\begin{cases} 2 - m \\ne -1 \\\\ -2 < 2 - m < 3 \\end{cases} \\iff \\begin{cases} m \\ne 3 \\\\ -1 < m < 4 \\end{cases} \\iff m \\in (-1; 4) \\setminus \\{3\\}.$$\n\nChọn A.",
    "socraticHint": "Phân tích nhân tử $y' = 6(x + 1)(x + m - 2)$ và đặt điều kiện nghiệm thứ hai phân biệt và thuộc $(-2; 3)$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 445,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - 3mx^2 + 4m^2 - 2$ có đồ thị $(C)$ và điểm $C(1; 4)$. Tính tổng các giá trị nguyên dương của $m$ để $(C)$ có hai điểm cực trị $A, B$ sao cho tam giác $ABC$ có diện tích bằng $4$.",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6mx = 3x(x - 2m) = 0 \\iff \\left[ \\begin{matrix} x = 0 \\\\ x = 2m \\end{matrix} \\right.$.\nĐồ thị $(C)$ có hai điểm cực trị $\\iff m \\ne 0$.\nTọa độ hai điểm cực trị: $A(0; 4m^2 - 2)$ và $B(2m; -4m^3 + 4m^2 - 2)$.\n\nPhương trình đường thẳng $AB$ là: $2m^2 x + y - 4m^2 + 2 = 0$.\nKhoảng cách từ $C(1; 4)$ đến đường thẳng $AB$ là:\n$$d(C, AB) = \\frac{|2m^2(1) + 4 - 4m^2 + 2|}{\\sqrt{4m^4 + 1}} = \\frac{|-2m^2 + 6|}{\\sqrt{4m^4 + 1}} = \\frac{2|m^2 - 3|}{\\sqrt{4m^4 + 1}}.$$\nĐộ dài $AB = \\sqrt{(2m)^2 + (-4m^3)^2} = 2|m|\\sqrt{4m^4 + 1}$.\n\nDiện tích tam giác $ABC$:\n$$S = \\frac{1}{2} AB \\cdot d(C, AB) = \\frac{1}{2} \\cdot 2|m|\\sqrt{4m^4 + 1} \\cdot \\frac{2|m^2 - 3|}{\\sqrt{4m^4 + 1}} = 2|m(m^2 - 3)|.$$\nTheo đề: $S = 4 \\iff |m(m^2 - 3)| = 2 \\iff m^2(m^2 - 3)^2 = 4$.\n$$\\iff m(m^2 - 3) = 2 \\text{ hoặc } m(m^2 - 3) = -2.$$\n- Với $m(m^2 - 3) = 2 \\iff m^3 - 3m - 2 = 0 \\iff (m + 1)^2(m - 2) = 0 \\implies m = 2$.\n- Với $m(m^2 - 3) = -2 \\iff m^3 - 3m + 2 = 0 \\iff (m - 1)^2(m + 2) = 0 \\implies m = 1$.\n\nCác giá trị nguyên dương của $m$ là $m = 1$ và $m = 2$.\nTổng các giá trị nguyên dương bằng: $1 + 2 = 3$.\n\nChọn C.",
    "socraticHint": "Tính diện tích $S = |m(m^2 - 3)| = 2$ và giải phương trình tìm các nghiệm nguyên dương $m = 1, m = 2$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 446,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tổng tất cả các giá trị thực của tham số $m$ để hàm số $y = 3x^3 + 2(m + 1)x^2 - 3mx + m - 5$ có hai điểm cực trị $x_1, x_2$ đồng thời $y(x_1) \\cdot y(x_2) = 0$ là:",
    "options": [
      {
        "key": "A",
        "content": "$-21$"
      },
      {
        "key": "B",
        "content": "$-39$"
      },
      {
        "key": "C",
        "content": "$-8$"
      },
      {
        "key": "D",
        "content": "$3\\sqrt{11} - 13$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hàm số có hai cực trị $x_1, x_2$ đồng thời $y(x_1) \\cdot y(x_2) = 0$ khi và chỉ khi đồ thị tiếp xúc với trục hoành, tức phương trình $y = 0$ có nghiệm bội hai.\n\nPhân tích nhân tử:\n$$3x^3 + 2(m + 1)x^2 - 3mx + m - 5 = (x - 1)[3x^2 + (2m + 5)x - m + 5] = 0.$$\nĐặt $g(x) = 3x^2 + (2m + 5)x - m + 5$.\nĐể phương trình có nghiệm kép:\n- TH1: $g(1) = 0 \\iff 3 + 2m + 5 - m + 5 = 0 \\iff m + 13 = 0 \\iff m_1 = -13$.\n- TH2: $g(x) = 0$ có nghiệm kép khác $1$:\n  $$\\Delta = (2m + 5)^2 - 12(5 - m) = 4m^2 + 20m + 25 - 60 + 12m = 4m^2 + 32m - 35 = 0.$$\n  Theo định lý Vi-ét cho phương trình bậc hai này: $m_2 + m_3 = -\\frac{32}{4} = -8$.\n\nTổng tất cả các giá trị của $m$ là:\n$$m_1 + m_2 + m_3 = -13 + (-8) = -21.$$\n\nChọn A.",
    "socraticHint": "Đồ thị tiếp xúc với trục hoành khi $y = 0$ có nghiệm kép: xét trường hợp $x = 1$ là nghiệm kép và $g(x)$ có nghiệm kép.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 447,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập các giá trị dương của tham số $m$ sao cho hàm số $y = x^3 - 3mx^2 + 27x + 3m - 2$ đạt cực trị tại $x_1, x_2$ thỏa mãn $|x_1 - x_2| \\le 5$. Biết $S = (a; b]$. Tính $T = 2b - a$.",
    "options": [
      {
        "key": "A",
        "content": "$T = 51 + 6$"
      },
      {
        "key": "B",
        "content": "$T = \\sqrt{61} + 3$"
      },
      {
        "key": "C",
        "content": "$T = \\sqrt{61} - 3$"
      },
      {
        "key": "D",
        "content": "$T = 51 - 6$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6mx + 27 = 3(x^2 - 2mx + 9)$.\nHàm số có hai cực trị khi:\n$$\\Delta' = m^2 - 9 > 0 \\iff m > 3 \\quad (\\text{do } m > 0).$$\n\nTheo định lý Vi-ét: $x_1 + x_2 = 2m$ và $x_1 x_2 = 9$.\nTheo giả thiết:\n$$|x_1 - x_2| \\le 5 \\iff (x_1 - x_2)^2 \\le 25 \\iff (x_1 + x_2)^2 - 4x_1 x_2 \\le 25$$\n$$\\iff 4m^2 - 36 \\le 25 \\iff 4m^2 \\le 61 \\iff m^2 \\le \\frac{61}{4} \\iff m \\le \\frac{\\sqrt{61}}{2} \\quad (\\text{do } m > 0).$$\n\nKết hợp điều kiện $m > 3$:\n$$S = \\left(3; \\frac{\\sqrt{61}}{2}\\right] \\implies a = 3, \\quad b = \\frac{\\sqrt{61}}{2}.$$\nVậy:\n$$T = 2b - a = 2 \\cdot \\frac{\\sqrt{61}}{2} - 3 = \\sqrt{61} - 3.$$\n\nChọn C.",
    "socraticHint": "Biến đổi $|x_1 - x_2|^2 = (x_1 + x_2)^2 - 4x_1 x_2 \\le 25$ qua Vi-ét.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 448,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp các giá trị nguyên của tham số $m$ để hàm số $y = \\frac{x^3}{3} - 2x^2 + mx + 3$ có hai điểm cực trị $x_1, x_2 \\le 4$. Số phần tử của $S$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = x^2 - 4x + m$.\nHàm số có hai điểm cực trị khi:\n$$\\Delta' = 4 - m > 0 \\iff m < 4.$$\n\nHai nghiệm của $y' = 0$ là: $x_1 = 2 - \\sqrt{4 - m}$ và $x_2 = 2 + \\sqrt{4 - m}$.\nĐể cả hai nghiệm $x_1, x_2 \\le 4$ thì:\n$$x_2 \\le 4 \\iff 2 + \\sqrt{4 - m} \\le 4 \\iff \\sqrt{4 - m} \\le 2 \\iff 4 - m \\le 4 \\iff m \\ge 0.$$\n\nKết hợp với điều kiện $m < 4$:\n$$0 \\le m < 4.$$\nVì $m \\in \\mathbb{Z} \\implies S = \\{0; 1; 2; 3\\}$.\nSố phần tử của $S$ là $4$.\n\nChọn D.",
    "socraticHint": "Nghiệm lớn nhất $x_2 = 2 + \\sqrt{4 - m} \\le 4 \\iff 0 \\le m < 4$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 449,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ để điểm $M(2m^3; m)$ tạo với hai điểm cực đại, cực tiểu của đồ thị hàm số $y = 2x^3 - 3(2m + 1)x^2 + 6m(m + 1)x + 1$ một tam giác có diện tích nhỏ nhất?",
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
        "content": "Không tồn tại"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm:\n$$y' = 6x^2 - 6(2m + 1)x + 6m(m + 1) = 6(x - m)(x - m - 1).$$\nPhương trình $y' = 0$ luôn có hai nghiệm phân biệt $x_1 = m$ và $x_2 = m + 1$ với mọi $m \\in \\mathbb{R}$.\nTọa độ hai điểm cực trị:\n$$A(m; 2m^3 + 3m^2 + 1), \\quad B(m + 1; 2m^3 + 3m^2).$$\nĐộ dài $AB = \\sqrt{(m + 1 - m)^2 + (-1)^2} = \\sqrt{2}$.\nPhương trình đường thẳng $AB$ là: $x + y - 2m^3 - 3m^2 - m - 1 = 0$.\n\nDiện tích tam giác $MAB$:\n$$S = \\frac{1}{2} AB \\cdot d(M, AB) = \\frac{1}{2} \\cdot \\sqrt{2} \\cdot \\frac{|2m^3 + m - 2m^3 - 3m^2 - m - 1|}{\\sqrt{1^2 + 1^2}} = \\frac{1}{2} |3m^2 + 1| = \\frac{3m^2 + 1}{2}.$$\n\nVì $3m^2 + 1 \\ge 1, \\forall m$ nên $S \\ge \\frac{1}{2}$.\nDấu bằng xảy ra khi $m = 0$.\nVậy chỉ có $1$ giá trị nguyên của $m$ là $m = 0$.\n\nChọn B.",
    "socraticHint": "Diện tích tam giác $S = \\frac{3m^2 + 1}{2} \\ge \\frac{1}{2}$, đạt cực tiểu khi $m = 0$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 450,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = x^3 - 6mx + 4$ có đồ thị $(C_m)$. Gọi $m_0$ là giá trị của $m$ để đường thẳng đi qua điểm cực đại, điểm cực tiểu của $(C_m)$ cắt đường tròn tâm $I(1; 0)$, bán kính $2$ tại hai điểm phân biệt $A, B$ sao cho tam giác $IAB$ có diện tích lớn nhất. Chọn khẳng định đúng.",
    "options": [
      {
        "key": "A",
        "content": "$m_0 \\in (3; 4)$"
      },
      {
        "key": "B",
        "content": "$m_0 \\in (1; 2)$"
      },
      {
        "key": "C",
        "content": "$m_0 \\in (0; 1)$"
      },
      {
        "key": "D",
        "content": "$m_0 \\in (2; 3)$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 - 6m = 0 \\iff x^2 = 2m$.\nHàm số có cực trị khi $m > 0$.\nPhương trình đường thẳng qua hai điểm cực trị là phần dư của phép chia $y$ cho $y'$:\n$$y = -4mx + 4 \\iff 4mx + y - 4 = 0.$$\n\nKhoảng cách từ tâm $I(1; 0)$ đến đường thẳng là:\n$$d = \\frac{|4m(1) + 0 - 4|}{\\sqrt{16m^2 + 1}} = \\frac{4|m - 1|}{\\sqrt{16m^2 + 1}}.$$\n\nDiện tích tam giác $IAB$ nội tiếp đường tròn bán kính $R = 2$:\n$$S_{IAB} = \\frac{1}{2} AB \\cdot d = d\\sqrt{R^2 - d^2} = d\\sqrt{4 - d^2} \\le \\frac{d^2 + (4 - d^2)}{2} = 2.$$\nDấu bằng xảy ra khi $d = \\sqrt{4 - d^2} \\iff d = \\sqrt{2}$.\n$$\\frac{16(m - 1)^2}{16m^2 + 1} = 2 \\iff 16(m^2 - 2m + 1) = 32m^2 + 2$$\n$$\\iff 16m^2 + 32m - 14 = 0 \\iff 8m^2 + 16m - 7 = 0 \\implies m_0 = \\frac{-4 + \\sqrt{30}}{4} \\approx 0{,}369 \\in (0; 1).$$\n\nVậy $m_0 \\in (0; 1)$.\n\nChọn C.",
    "socraticHint": "Diện tích tam giác $IAB$ lớn nhất khi $d(I, AB) = R/\\sqrt{2} = \\sqrt{2}$, giải phương trình tìm $m_0 \\in (0; 1)$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 451,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Biết rằng đồ thị hàm số $f(x) = \\frac{1}{3}x^3 - mx^2 + x - 2$ có giá trị tuyệt đối của hoành độ hai điểm cực trị là độ dài hai cạnh của tam giác vuông có cạnh huyền bằng $\\sqrt{7}$. Hỏi có mấy giá trị của $m$?",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "Không có $m$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $f'(x) = x^2 - 2mx + 1$.\nHàm số có hai cực trị khi và chỉ khi:\n$$\\Delta' = m^2 - 1 > 0 \\iff |m| > 1 \\quad (*)$$\n\nGọi hai nghiệm của $f'(x) = 0$ là $x_1, x_2$. Theo định lý Vi-ét:\n$$\\begin{cases} x_1 + x_2 = 2m \\\\ x_1 x_2 = 1 \\end{cases}$$\n\nĐộ dài hai cạnh góc vuông là $|x_1|$ và $|x_2|$. Tam giác vuông có cạnh huyền bằng $\\sqrt{7}$ nên theo định lý Pytago:\n$$|x_1|^2 + |x_2|^2 = 7 \\iff x_1^2 + x_2^2 = 7$$\n$$\\iff (x_1 + x_2)^2 - 2x_1 x_2 = 7 \\iff (2m)^2 - 2(1) = 7 \\iff 4m^2 = 9 \\iff m = \\pm \\frac{3}{2}.$$\nKiểm tra điều kiện $(*)$: $|m| = 1{,}5 > 1$ (thỏa mãn).\nVậy có đúng $2$ giá trị của $m$ là $m = \\pm \\frac{3}{2}$.\n\nChọn D.",
    "socraticHint": "Áp dụng hệ thức Vi-ét vào phương trình Pytago $x_1^2 + x_2^2 = 7$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 452,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp tất cả các giá trị nguyên của tham số $m$ để điểm cực tiểu của đồ thị hàm số $y = x^3 + x^2 + mx - 1$ nằm bên phải trục tung. Tìm số phần tử của tập hợp $(-5; 6) \\cap S$.",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 3x^2 + 2x + m$.\nHàm số có hai cực trị khi:\n$$\\Delta' = 1 - 3m > 0 \\iff m < \\frac{1}{3}.$$\n\nVì hệ số $a = 3 > 0$, điểm cực tiểu là nghiệm lớn hơn của $y' = 0$:\n$$x_{CT} = \\frac{-1 + \\sqrt{1 - 3m}}{3}.$$\nĐiểm cực tiểu nằm bên phải trục tung khi:\n$$x_{CT} > 0 \\iff \\frac{-1 + \\sqrt{1 - 3m}}{3} > 0 \\iff \\sqrt{1 - 3m} > 1 \\iff 1 - 3m > 1 \\iff m < 0.$$\n\nKết hợp với điều kiện $m < \\frac{1}{3}$, ta có $m < 0$.\nTập các số nguyên $S = \\{\\dots; -3; -2; -1\\}$.\nGiao với khoảng $(-5; 6)$:\n$$(-5; 6) \\cap S = \\{-4; -3; -2; -1\\}.$$\nSố phần tử của tập hợp là $4$.\n\nChọn D.",
    "socraticHint": "Hoành độ cực tiểu của hàm bậc ba có $a > 0$ là nghiệm lớn $x = (-1 + \\sqrt{1 - 3m})/3 > 0 \\iff m < 0$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 453,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = -x^3 + 3x^2 + 3(m^2 - 1)x - 3m^2 - 1$. Có bao nhiêu giá trị nguyên của $m$ để đồ thị hàm số có điểm cực đại, cực tiểu nằm bên trái đường thẳng $x = 2$?",
    "options": [
      {
        "key": "A",
        "content": "$3$"
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
        "content": "$0$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm:\n$$y' = -3x^2 + 6x + 3(m^2 - 1) = -3[x^2 - 2x - (m^2 - 1)].$$\n$$y' = 0 \\iff x^2 - 2x + 1 - m^2 = 0 \\iff (x - 1)^2 = m^2 \\iff \\left[ \\begin{matrix} x = 1 - |m| \\\\ x = 1 + |m| \\end{matrix} \\right.$$\n\nĐể hàm số có cực đại và cực tiểu thì $m \\ne 0$.\nHai điểm cực trị nằm bên trái đường thẳng $x = 2$ khi và chỉ khi:\n$$x_1, x_2 < 2 \\iff 1 + |m| < 2 \\iff |m| < 1 \\iff -1 < m < 1.$$\n\nDo $m \\in \\mathbb{Z}$ và $m \\ne 0$, trong khoảng $(-1; 1)$ không có số nguyên nào thỏa mãn.\nVậy số giá trị nguyên của $m$ là $0$.\n\nChọn D.",
    "socraticHint": "Nghiệm lớn $1 + |m| < 2 \\iff |m| < 1$, kết hợp $m \\ne 0$ suy ra không có số nguyên nào thỏa mãn.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 454,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để đồ thị của hàm số $y = x^4 - 2mx^2$ có ba điểm cực trị tạo thành một tam giác có diện tích nhỏ hơn $1$.",
    "options": [
      {
        "key": "A",
        "content": "$0 < m < 1$"
      },
      {
        "key": "B",
        "content": "$m > 0$"
      },
      {
        "key": "C",
        "content": "$0 < m < \\sqrt[3]{4}$"
      },
      {
        "key": "D",
        "content": "$m < 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4mx = 4x(x^2 - m)$.\nHàm số có $3$ điểm cực trị khi $m > 0$.\nBa điểm cực trị của đồ thị là:\n$$O(0; 0), \\quad A(\\sqrt{m}; -m^2), \\quad B(-\\sqrt{m}; -m^2).$$\n\nTam giác $OAB$ cân tại $O$, đáy $AB$ có độ dài:\n$$AB = 2\\sqrt{m}.$$\nĐường cao kẻ từ $O$ đến $AB$ có độ dài:\n$$h = |-m^2| = m^2.$$\nDiện tích tam giác $OAB$:\n$$S = \\frac{1}{2} AB \\cdot h = \\frac{1}{2} \\cdot 2\\sqrt{m} \\cdot m^2 = m^{5/2} = \\sqrt{m^5}.$$\n\nTheo bài toán:\n$$S < 1 \\iff \\sqrt{m^5} < 1 \\iff m^5 < 1 \\iff m < 1.$$\nKết hợp với điều kiện $m > 0$, ta được:\n$$0 < m < 1.$$\n\nChọn A.",
    "socraticHint": "Diện tích tam giác ba điểm cực trị của $y = x^4 - 2mx^2$ là $S = \\sqrt{m^5} < 1 \\iff 0 < m < 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 455,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = x^4 - 2(m + 1)x^2 + m^2$ có ba điểm cực trị tạo thành ba đỉnh của một tam giác vuông. Số phần tử của tập hợp $S$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$0$"
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
    "correctAnswer": "D",
    "detailedSolution": "Hàm số đã cho là hàm trùng phương $y = ax^4 + bx^2 + c$ với:\n$$a = 1, \\quad b = -2(m + 1), \\quad c = m^2.$$\n\nHàm số có $3$ điểm cực trị khi và chỉ khi:\n$$ab < 0 \\iff 1 \\cdot [-2(m + 1)] < 0 \\iff m + 1 > 0 \\iff m > -1.$$\n\nBa điểm cực trị tạo thành một tam giác vuông (tam giác này luôn cân tại đỉnh trên trục tung) khi và chỉ khi:\n$$8a + b^3 = 0 \\iff 8(1) + [-2(m + 1)]^3 = 0$$\n$$\\iff 8 - 8(m + 1)^3 = 0 \\iff (m + 1)^3 = 1 \\iff m + 1 = 1 \\iff m = 0.$$\n\nKiểm tra điều kiện: $m = 0 > -1$ (thỏa mãn).\nVậy $S = \\{0\\}$, tập hợp $S$ có đúng $1$ phần tử.\n\nChọn D.",
    "socraticHint": "Áp dụng điều kiện tam giác cực trị vuông: $8a + b^3 = 0$, giải ra $m = 0$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 456,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = x^4 - 2m^2 x^2 + 1$ có $3$ điểm cực trị lập thành một tam giác vuông cân.",
    "options": [
      {
        "key": "A",
        "content": "$m = 1$"
      },
      {
        "key": "B",
        "content": "$m \\in \\{-1; 1\\}$"
      },
      {
        "key": "C",
        "content": "$m \\in \\{-1; 0; 1\\}$"
      },
      {
        "key": "D",
        "content": "$m \\in \\emptyset$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4m^2 x = 4x(x^2 - m^2)$.\nHàm số có $3$ điểm cực trị khi:\n$$m \\ne 0.$$\n\nBa điểm cực trị của đồ thị hàm số là:\n$$A(0; 1), \\quad B(m; 1 - m^4), \\quad C(-m; 1 - m^4).$$\nTam giác $ABC$ luôn cân tại $A$.\nVectơ $\\vec{AB} = (m; -m^4)$ và $\\vec{AC} = (-m; -m^4)$.\nTam giác $ABC$ vuông cân tại $A$ khi:\n$$\\vec{AB} \\cdot \\vec{AC} = 0 \\iff m(-m) + (-m^4)(-m^4) = 0 \\iff -m^2 + m^8 = 0$$\n$$\\iff m^2(m^6 - 1) = 0 \\iff m^6 = 1 \\quad (\\text{do } m \\ne 0) \\iff m = \\pm 1.$$\n\nVậy $m \\in \\{-1; 1\\}$.\n\nChọn B.",
    "socraticHint": "Do tính đối xứng qua trục tung, tam giác $ABC$ vuông cân tại $A$ khi $\\vec{AB} \\cdot \\vec{AC} = 0 \\iff m = \\pm 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 457,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp tất cả các giá trị thực của tham số $m$ để đồ thị $(C)$ của hàm số $y = x^4 - 2m^2 x^2 + m^4 + 5$ có ba điểm cực trị, đồng thời ba điểm cực trị đó cùng với gốc tọa độ $O$ tạo thành một tứ giác nội tiếp. Tìm số phần tử của $S$.",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$0$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Đạo hàm: $y' = 4x^3 - 4m^2 x = 4x(x^2 - m^2)$.\nHàm số có ba điểm cực trị khi $m \\ne 0$.\nTọa độ ba điểm cực trị là:\n$$A(0; m^4 + 5), \\quad B(m; 5), \\quad C(-m; 5).$$\n\nDo tính đối xứng qua trục tung $Oy$, tứ giác $ABOC$ có trục đối xứng là $AO$.\nTứ giác này nội tiếp đường tròn khi và chỉ khi $AO$ là đường kính, tức là $\\widehat{ABO} = 90^\\circ$:\n$$\\vec{AB} \\cdot \\vec{OB} = 0.$$\nTa có $\\vec{AB} = (m; -m^4)$ và $\\vec{OB} = (m; 5)$.\n$$\\vec{AB} \\cdot \\vec{OB} = m(m) + (-m^4)(5) = m^2 - 5m^4 = 0$$\n$$\\iff m^2(1 - 5m^2) = 0 \\iff 1 - 5m^2 = 0 \\quad (\\text{do } m \\ne 0) \\iff m = \\pm \\frac{1}{\\sqrt{5}}.$$\n\nVậy có $2$ giá trị thực của $m$ thỏa mãn. Số phần tử của $S$ là $2$.\n\nChọn C.",
    "socraticHint": "Tứ giác đối xứng nội tiếp khi $\\widehat{ABO} = 90^\\circ \\iff \\vec{AB} \\cdot \\vec{OB} = 0$.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 458,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = -x^4 + 2mx^2 + 2$ có đồ thị $(C_m)$. Tìm tất cả các giá trị của $m$ để đồ thị hàm số có ba điểm cực trị tạo thành một tam giác vuông.",
    "options": [
      {
        "key": "A",
        "content": "$m = \\sqrt[3]{3}$"
      },
      {
        "key": "B",
        "content": "$m = -\\sqrt[3]{3}$"
      },
      {
        "key": "C",
        "content": "$m = -1$"
      },
      {
        "key": "D",
        "content": "$m = 1$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Hàm số đã cho là hàm trùng phương $y = ax^4 + bx^2 + c$ với:\n$$a = -1, \\quad b = 2m, \\quad c = 2.$$\n\nHàm số có $3$ điểm cực trị khi:\n$$ab < 0 \\iff -1(2m) < 0 \\iff m > 0.$$\n\nBa điểm cực trị tạo thành tam giác vuông khi và chỉ khi:\n$$8a + b^3 = 0 \\iff 8(-1) + (2m)^3 = 0 \\iff 8m^3 - 8 = 0 \\iff m^3 = 1 \\iff m = 1.$$\nGiá trị $m = 1 > 0$ thỏa mãn điều kiện.\n\nChọn D.",
    "socraticHint": "Áp dụng công thức tam giác cực trị vuông: $8a + b^3 = 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 459,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $A, B, C$ là các điểm cực trị của đồ thị hàm số $y = x^4 - 2x^2 + 4$. Bán kính đường tròn nội tiếp tam giác $ABC$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$\\sqrt{2} + 1$"
      },
      {
        "key": "C",
        "content": "$\\sqrt{2} - 1$"
      },
      {
        "key": "D",
        "content": "$\\sqrt{2}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\iff x \\in \\{0; -1; 1\\}$.\nTọa độ ba điểm cực trị:\n$$A(0; 4), \\quad B(-1; 3), \\quad C(1; 3).$$\n\nĐộ dài các cạnh của tam giác $ABC$:\n$$AB = \\sqrt{(-1)^2 + (-1)^2} = \\sqrt{2},$$\n$$AC = \\sqrt{1^2 + (-1)^2} = \\sqrt{2},$$\n$$BC = \\sqrt{(1 - (-1))^2 + 0^2} = 2.$$\n\nTa thấy $AB^2 + AC^2 = 2 + 2 = 4 = BC^2$, do đó tam giác $ABC$ vuông cân tại $A$.\nDiện tích tam giác $ABC$:\n$$S = \\frac{1}{2} AB \\cdot AC = \\frac{1}{2} \\cdot \\sqrt{2} \\cdot \\sqrt{2} = 1.$$\nNửa chu vi tam giác:\n$$p = \\frac{AB + AC + BC}{2} = \\frac{\\sqrt{2} + \\sqrt{2} + 2}{2} = \\sqrt{2} + 1.$$\n\nBán kính đường tròn nội tiếp:\n$$r = \\frac{S}{p} = \\frac{1}{\\sqrt{2} + 1} = \\sqrt{2} - 1.$$\n\nChọn C.",
    "socraticHint": "Tam giác vuông cân có diện tích $S = 1$ và nửa chu vi $p = \\sqrt{2} + 1 \\implies r = S/p = \\sqrt{2} - 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 460,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để đồ thị của hàm số $y = x^4 - 2mx^2$ có ba điểm cực trị tạo thành một tam giác có diện tích nhỏ hơn $1$.",
    "options": [
      {
        "key": "A",
        "content": "$m < 1$"
      },
      {
        "key": "B",
        "content": "$0 < m < 1$"
      },
      {
        "key": "C",
        "content": "$0 < m < \\sqrt[3]{4}$"
      },
      {
        "key": "D",
        "content": "$m > 0$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R}$.\nĐạo hàm: $y' = 4x^3 - 4mx = 4x(x^2 - m)$.\nĐể đồ thị có 3 điểm cực trị thì $m > 0$.\nBa điểm cực trị là: $O(0; 0), A(\\sqrt{m}; -m^2), B(-\\sqrt{m}; -m^2)$.\nĐộ dài đáy: $AB = 2\\sqrt{m}$.\nChiều cao tương ứng: $h = m^2$.\nDiện tích tam giác:\n$$S = \\frac{1}{2} AB \\cdot h = \\frac{1}{2} \\cdot 2\\sqrt{m} \\cdot m^2 = m^{5/2}.$$\nTheo đề bài: $S < 1 \\iff m^{5/2} < 1 \\iff m < 1$.\nKết hợp điều kiện để có 3 cực trị ($m > 0$):\n$$0 < m < 1.$$\n\nChọn B.",
    "socraticHint": "Nhớ kết hợp điều kiện cần để hàm số có 3 điểm cực trị là $m > 0$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 461,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Điều kiện của tham số $m$ để hàm số $y = \\frac{x^2 - mx}{1 - x}$ có cực đại và cực tiểu là:",
    "options": [
      {
        "key": "A",
        "content": "$m < 1$"
      },
      {
        "key": "B",
        "content": "$m > 1$"
      },
      {
        "key": "C",
        "content": "$m < -1$"
      },
      {
        "key": "D",
        "content": "$m > -1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.\nViết lại hàm số: $y = \\frac{-x^2 + mx}{x - 1}$.\nĐạo hàm:\n$$y' = \\frac{(2x - m)(1 - x) - (-1)(x^2 - mx)}{(1 - x)^2} = \\frac{2x - 2x^2 - m + mx + x^2 - mx}{(1 - x)^2} = \\frac{-x^2 + 2x - m}{(1 - x)^2}.$$\n\nHàm số có cực đại và cực tiểu khi và chỉ khi $y' = 0$ có hai nghiệm phân biệt khác $1$:\n$$g(x) = -x^2 + 2x - m = 0 \\text{ có hai nghiệm phân biệt khác } 1$$\n$$\\iff \\begin{cases} \\Delta' = 1^2 - (-1)(-m) = 1 - m > 0 \\\\ g(1) = -(1^2) + 2(1) - m \\ne 0 \\end{cases} \\iff \\begin{cases} 1 - m > 0 \\\\ 1 - m \\ne 0 \\end{cases} \\iff m < 1.$$\n\nVậy điều kiện là $m < 1$.\n\nChọn A.",
    "socraticHint": "Tử thức đạo hàm là tam thức bậc hai cần có 2 nghiệm phân biệt khác điểm gián đoạn $x = 1$.",
    "difficulty": "Vận dụng",
    "answerVerified": true
  },
  {
    "id": 462,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Gọi $S$ là tập hợp tất cả các giá trị thực của tham số $m$ để đồ thị hàm số $y = \\frac{x^2 + mx + 2m}{x + 1}$ có hai điểm cực trị $A, B$ và tam giác $OAB$ vuông tại $O$. Tổng tất cả các phần tử của $S$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$9$"
      },
      {
        "key": "B",
        "content": "$1$"
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
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.\nĐạo hàm:\n$$y' = \\frac{(2x + m)(x + 1) - (x^2 + mx + 2m)}{(x + 1)^2} = \\frac{x^2 + 2x - m}{(x + 1)^2}$$\nĐồ thị hàm số có hai điểm cực trị khi và chỉ khi phương trình $g(x) = x^2 + 2x - m = 0$ có hai nghiệm phân biệt khác $-1$:\n$$\\begin{cases} \\Delta' = 1 + m > 0 \\\\ g(-1) = 1 - 2 - m \\ne 0 \\end{cases} \\iff m > -1 \\quad (1)$$\nKhi đó, đường thẳng đi qua hai điểm cực trị là:\n$$y = \\frac{(x^2 + mx + 2m)'}{(x + 1)'} = 2x + m$$\nSuy ra tọa độ hai điểm cực trị là $A(x_1; 2x_1 + m)$ và $B(x_2; 2x_2 + m)$, với $x_1, x_2$ là hai nghiệm của $g(x) = 0$.\nTa có: $\\vec{OA} = (x_1; 2x_1 + m)$, $\\vec{OB} = (x_2; 2x_2 + m)$.\nTam giác $OAB$ vuông tại $O \\iff \\vec{OA} \\cdot \\vec{OB} = 0$:\n$$x_1 x_2 + (2x_1 + m)(2x_2 + m) = 0 \\iff 5x_1 x_2 + 2m(x_1 + x_2) + m^2 = 0$$\nTheo định lý Viète: $x_1 + x_2 = -2$, $x_1 x_2 = -m$. Thay vào ta được:\n$$5(-m) + 2m(-2) + m^2 = 0 \\iff m^2 - 9m = 0 \\iff \\begin{bmatrix} m = 0 \\\\ m = 9 \\end{bmatrix}$$\nVới $m = 0$: đường thẳng đi qua hai cực trị là $y = 2x$ đi qua $O(0; 0)$ nên $O, A, B$ thẳng hàng (loại).\nVới $m = 9 > -1$: thỏa mãn điều kiện tam giác $OAB$ vuông tại $O$.\nVậy $S = \\{9\\}$, tổng tất cả các phần tử của $S$ bằng $9$.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 463,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = \\frac{x^2 - mx + 4}{x - m}$. Biết rằng đồ thị hàm số có hai điểm cực trị phân biệt là $A, B$. Tìm số giá trị của $m$ sao cho ba điểm $A, B, C(4; 2)$ phân biệt và thẳng hàng.",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{m\\}$.\nTa có: $y = \\frac{x^2 - mx + 4}{x - m} = x + \\frac{4}{x - m}$.\nĐạo hàm: $y' = 1 - \\frac{4}{(x - m)^2} = 0 \\iff (x - m)^2 = 4 \\iff x = m + 2$ hoặc $x = m - 2$.\nTọa độ hai điểm cực trị là $B(m + 2; m + 4), \\, A(m - 2; m - 4)$.\nTa có $\\vec{AB} = (4; 8), \\, \\vec{AC} = (6 - m; 6 - m)$.\nBa điểm $A, B, C(4; 2)$ phân biệt và thẳng hàng khi và chỉ khi:\n$$\\vec{AC} = k\\vec{AB} \\iff \\left\\{\\begin{array}{l} 6 - m = 4k \\\\ 6 - m = 8k \\\\ 6 - m \\ne 0 \\end{array}\\right. \\implies 4k = 8k \\iff k = 0 \\implies 6 - m = 0 \\text{ (mâu thuẫn)}$$\nVậy không có giá trị nào của $m$ thỏa mãn.\nChọn A.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  },
  {
    "id": 464,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Giá trị của tham số $m$ để hàm số $y = \\frac{x^2 + mx + 1}{x + m}$ đạt cực đại tại điểm $x_0 = 2$ là:",
    "options": [
      {
        "key": "A",
        "content": "$m = -1$"
      },
      {
        "key": "B",
        "content": "$m = -3$"
      },
      {
        "key": "C",
        "content": "$m = 1$"
      },
      {
        "key": "D",
        "content": "$m = 3$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có: $y' = 1 - \\frac{1}{(x + m)^2}, \\, y'' = \\frac{2}{(x + m)^3}$.\nHàm số đạt cực đại tại điểm $x_0 = 2$ khi và chỉ khi:\n$$\\left\\{\\begin{array}{l} y'(2) = 0 \\\\ y''(2) < 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} 1 - \\frac{1}{(2 + m)^2} = 0 \\\\ \\frac{2}{(2 + m)^3} < 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} (2 + m)^2 = 1 \\\\ 2 + m < 0 \\end{array}\\right. \\iff \\left\\{\\begin{array}{l} 2 + m = \\pm 1 \\\\ m < -2 \\end{array}\\right. \\iff m = -3$$\nThử lại với $m = -3$: hàm số đạt cực đại tại điểm $x_0 = 2$.\nChọn B.",
    "socraticHint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên.",
    "difficulty": "Vận dụng cao",
    "answerVerified": true
  }
];
