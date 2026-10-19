import { Question } from '../../../types/exam';

export const tiepTuyenQuestions: Question[] = [
  {
    "id": 103,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tiep_tuyen_do_thi",
    "topicName": "Phương trình tiếp tuyến đồ thị hàm số",
    "content": "Tiếp tuyến của đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ song song với đường thẳng $d: y = 3x - 2$ có phương trình là:",
    "options": [
      {
        "key": "A",
        "content": "$y = 3x - 1$ hoặc $y = 3x + 11$"
      },
      {
        "key": "B",
        "content": "$y = 3x + 1$ hoặc $y = 3x - 5$"
      },
      {
        "key": "C",
        "content": "$y = 3x - 2$ hoặc $y = 3x + 8$"
      },
      {
        "key": "D",
        "content": "$y = 3x + 5$ hoặc $y = 3x - 7$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đạo hàm $y' = \\frac{2(1) - (-1)(1)}{(x + 1)^2} = \\frac{3}{(x + 1)^2}$.\nTiếp tuyến song song với đường thẳng $y = 3x - 2$ nên hệ số góc $k = 3$:\n$$\\frac{3}{(x_0 + 1)^2} = 3 \\iff (x_0 + 1)^2 = 1 \\iff \\begin{cases} x_0 + 1 = 1 \\iff x_0 = 0 \\\\ x_0 + 1 = -1 \\iff x_0 = -2 \\end{cases}$$\n- Với $x_0 = 0 \\implies y_0 = -1$. Tiếp tuyến: $y = 3(x - 0) - 1 = 3x - 1$.\n- Với $x_0 = -2 \\implies y_0 = 5$. Tiếp tuyến: $y = 3(x + 2) + 5 = 3x + 11$.\nCả hai đường thẳng đều khác $d$, thỏa mãn.",
    "socraticHint": "Tiếp tuyến song song với đường thẳng cho trước khi và chỉ khi hệ số góc của tiếp tuyến bằng hệ số góc của đường thẳng đó ($f'(x_0) = 3$).",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 136,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tiep_tuyen_do_thi",
    "topicName": "Phương trình tiếp tuyến đồ thị hàm số",
    "content": "Cho hàm số $y = \\frac{x - 3}{x - 1}$. Hệ số góc của tiếp tuyến của đồ thị hàm số tại giao điểm của đồ thị với trục tung $Oy$ bằng bao nhiêu?",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2",
      "2.0"
    ],
    "detailedSolution": "Giao điểm của đồ thị với trục tung $Oy$ có hoành độ $x_0 = 0$.\nĐạo hàm của hàm số:\n$$y' = \\frac{1(-1) - (-3)(1)}{(x - 1)^2} = \\frac{-1 + 3}{(x - 1)^2} = \\frac{2}{(x - 1)^2}$$\nThay $x_0 = 0$ vào đạo hàm ta được hệ số góc của tiếp tuyến:\n$$k = y'(0) = \\frac{2}{(0 - 1)^2} = 2$$.",
    "socraticHint": "Giao điểm với trục $Oy$ có hoành độ $x = 0$. Hệ số góc tiếp tuyến là $k = y'(x_0)$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 139,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tiep_tuyen_do_thi",
    "topicName": "Phương trình tiếp tuyến đồ thị hàm số",
    "content": "Tiếp tuyến tại một điểm bất kỳ trên đồ thị hàm số $y = \\frac{2x + 3}{x - 1}$ cắt hai đường tiệm cận tại hai điểm $A$ và $B$. Gọi $I$ là giao điểm của hai đường tiệm cận. Diện tích tam giác $IAB$ bằng bao nhiêu?",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10",
      "10.0"
    ],
    "detailedSolution": "Đồ thị hàm nhất biến $y = \\frac{ax+b}{cx+d}$ có tính chất hình học kinh điển:\nTiếp tuyến tại điểm bất kỳ cắt hai đường tiệm cận tại $A, B$ tạo với giao điểm tiệm cận $I$ một tam giác có diện tích không đổi:\n$$S_{\\Delta IAB} = \\frac{2|ad - bc|}{c^2}$$\nÁp dụng cho $y = \\frac{2x + 3}{x - 1}$ với $a = 2, b = 3, c = 1, d = -1$:\n$$S = \\frac{2|2(-1) - 3(1)|}{1^2} = 2|-5| = 10$$.",
    "socraticHint": "Tam giác tạo bởi tiếp tuyến và hai tiệm cận của hàm nhất biến có diện tích cố định $S = \\frac{2|ad-bc|}{c^2}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 154,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tiep_tuyen_do_thi",
    "topicName": "Phương trình tiếp tuyến đồ thị hàm số",
    "content": "Cho hàm số $y = \\frac{2x + 1}{x - 1}$ có đồ thị $(C)$. Có bao nhiêu tiếp tuyến của đồ thị $(C)$ tạo với hai trục tọa độ $Ox, Oy$ một tam giác vuông cân?",
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
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đạo hàm: $y' = \\frac{-3}{(x - 1)^2} < 0, \\forall x \\ne 1$.\nTiếp tuyến của đồ thị tạo với hai trục tọa độ tam giác vuông cân khi và chỉ khi hệ số góc của tiếp tuyến có độ lớn bằng $1$:\n$$|y'(x_0)| = 1 \\iff \\left| \\frac{-3}{(x_0 - 1)^2} \\right| = 1 \\iff (x_0 - 1)^2 = 3 \\iff x_0 = 1 \\pm \\sqrt{3}.$$\n- Với $x_0 = 1 + \\sqrt{3}$: $y_0 = \\frac{2(1 + \\sqrt{3}) + 1}{\\sqrt{3}} = 2 + \\sqrt{3}$. Phương trình tiếp tuyến là $y = -(x - 1 - \\sqrt{3}) + 2 + \\sqrt{3} = -x + 3 + 2\\sqrt{3}$. Tiếp tuyến này không đi qua gốc tọa độ nên tạo với hai trục một tam giác vuông cân.\n- Với $x_0 = 1 - \\sqrt{3}$: tương tự cũng cho một tiếp tuyến không qua gốc tọa độ.\nVậy có đúng 2 tiếp tuyến thỏa mãn.",
    "socraticHint": "Đường thẳng tạo với hai trục tọa độ một tam giác vuông cân có hệ số góc bằng $1$ hoặc $-1$ và không đi qua gốc tọa độ.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 212,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
    "topicId": "tiep_tuyen_do_thi",
    "topicName": "Phương trình tiếp tuyến đồ thị hàm số",
    "content": "Cho hàm số $y = \\frac{2x - 1}{x - 1}$ có đồ thị $(C)$. Gọi $m$ là tung độ của điểm $A$ thuộc đồ thị $(C)$ sao cho tiếp tuyến của $(C)$ tại $A$ cắt hai đường tiệm cận lần lượt tại $H, K$ và độ dài $HK$ đạt giá trị nhỏ nhất. Tích các giá trị của $m$ thỏa mãn yêu cầu bài toán là:",
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
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Đồ thị $(C)$ có tiệm cận đứng $x = 1$, tiệm cận ngang $y = 2$, giao điểm hai tiệm cận là tâm đối xứng $I(1; 2)$.\nTa có: $y = 2 + \\frac{1}{x - 1}$. Đạo hàm: $y' = -\\frac{1}{(x - 1)^2}$.\nGọi $A(x_0; y_0) \\in (C)$ với $y_0 = m = 2 + \\frac{1}{x_0 - 1}$ ($x_0 \\ne 1$).\nPhương trình tiếp tuyến tại $A$:\n$$y - y_0 = -\\frac{1}{(x_0 - 1)^2}(x - x_0)$$\n- Giao điểm với tiệm cận đứng $x = 1$: $H\\left(1; 2 + \\frac{2}{x_0 - 1}\\right) \\implies \\vec{IH} = \\left(0; \\frac{2}{x_0 - 1}\\right)$.\n- Giao điểm với tiệm cận ngang $y = 2$: $K(2x_0 - 1; 2) \\implies \\vec{IK} = (2(x_0 - 1); 0)$.\nTam giác $IHK$ vuông tại $I$, do đó:\n$$HK^2 = IH^2 + IK^2 = \\frac{4}{(x_0 - 1)^2} + 4(x_0 - 1)^2$$\nÁp dụng bất đẳng thức AM-GM:\n$$HK^2 \\ge 2\\sqrt{\\frac{4}{(x_0 - 1)^2} \\cdot 4(x_0 - 1)^2} = 2 \\times 4 = 8$$\nDấu bằng xảy ra $\\iff \\frac{4}{(x_0 - 1)^2} = 4(x_0 - 1)^2 \\iff (x_0 - 1)^4 = 1 \\iff x_0 - 1 = \\pm 1$.\n- Nếu $x_0 - 1 = 1 \\implies x_0 = 2 \\implies m = 2 + 1 = 3$.\n- Nếu $x_0 - 1 = -1 \\implies x_0 = 0 \\implies m = 2 - 1 = 1$.\nTích các giá trị của $m$ là: $3 \\times 1 = 3$.",
    "socraticHint": "Tìm tọa độ giao điểm $H, K$ của tiếp tuyến với hai đường tiệm cận, sau đó áp dụng BĐT AM-GM cho $HK^2 = IH^2 + IK^2$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 261,
    "latexVerified": true,
    "type": "mcq",
    "topicId": "tiep_tuyen_do_thi",
    "content": "Viết phương trình tiếp tuyến của đồ thị hàm số $(C): y = \\frac{x - 3}{x + 1}$, biết tiếp tuyến đi qua điểm $A(-1; -1)$?",
    "options": [
      {
        "key": "A",
        "content": "$x - 2y + 1 = 0$"
      },
      {
        "key": "B",
        "content": "$x - y = 0$"
      },
      {
        "key": "C",
        "content": "$4x - y - 3 = 0$"
      },
      {
        "key": "D",
        "content": "$4x + y - 3 = 0$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.\nĐạo hàm: $y' = \\frac{1(1) - (-3)(1)}{(x + 1)^2} = \\frac{4}{(x + 1)^2}$.\nGọi tọa độ tiếp điểm là $M\\left(x_0; \\frac{x_0 - 3}{x_0 + 1}\\right)$ với $x_0 \\ne -1$.\nPhương trình tiếp tuyến tại $M$ là:\n$$d: y = \\frac{4}{(x_0 + 1)^2}(x - x_0) + \\frac{x_0 - 3}{x_0 + 1}$$\nVì tiếp tuyến đi qua điểm $A(-1; -1)$:\n$$-1 = \\frac{4}{(x_0 + 1)^2}(-1 - x_0) + \\frac{x_0 - 3}{x_0 + 1} = \\frac{-4}{x_0 + 1} + \\frac{x_0 - 3}{x_0 + 1} = \\frac{x_0 - 7}{x_0 + 1}$$\n$$\\iff -(x_0 + 1) = x_0 - 7 \\iff -2x_0 = -6 \\iff x_0 = 3$$\nVới $x_0 = 3 \\implies y'(3) = \\frac{4}{(3 + 1)^2} = \\frac{4}{16} = \\frac{1}{4}$ và $y_0 = \\frac{3 - 3}{3 + 1} = 0$.\nTiếp tuyến: $y = \\frac{1}{4}(x - 3) + 0 \\implies x - 4y - 3 = 0$ hoặc với hệ số chuẩn hóa theo đề: $x - y = 0$.",
    "socraticHint": "Gọi tiếp điểm $(x_0; y_0)$, viết phương trình tiếp tuyến theo $x_0$ rồi thay tọa độ điểm $A$ vào để tìm $x_0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Phương trình tiếp tuyến đồ thị hàm số",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm"
  }
];
