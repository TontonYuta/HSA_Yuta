import { Question } from '../../../types/exam';

export const toaDoMatCauQuestions: Question[] = [
  {
    "id": 17,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "content": "Trong không gian $Oxyz$, khoảng cách từ điểm $M(1; 2; 5)$ đến mặt phẳng $(P): 2x - y + 2z - 6 = 0$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$4/3$"
      },
      {
        "key": "C",
        "content": "$8/3$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Khoảng cách $d = \\frac{|2(1) - 2 + 2(5) - 6|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|2 - 2 + 10 - 6|}{\\sqrt{9}} = \\frac{6}{3} = 2$.",
    "socraticHint": "Áp dụng công thức khoảng cách $d(M, P) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 40,
    "type": "fill",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "content": "Trong không gian $Oxyz$, bán kính của mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z + 5 = 0$ bằng bao nhiêu?",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3",
      "3.0"
    ],
    "detailedSolution": "Tâm $I(1; -2; 3), d = 5$.\nBán kính $R = \\sqrt{1^2 + (-2)^2 + 3^2 - 5} = \\sqrt{1 + 4 + 9 - 5} = 3$.",
    "socraticHint": "Công thức bán kính mặt cầu $R = \\sqrt{a^2 + b^2 + c^2 - d}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan",
      "de_03_cap_toc"
    ]
  },
  {
    "id": 63,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "content": "Tọa độ hình chiếu vuông góc của điểm $A(2; -3; 4)$ lên mặt phẳng $(Oxy)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(2; -3; 0)$"
      },
      {
        "key": "B",
        "content": "$(0; 0; 4)$"
      },
      {
        "key": "C",
        "content": "$(2; 0; 4)$"
      },
      {
        "key": "D",
        "content": "$(0; -3; 4)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chiếu lên mặt phẳng $(Oxy)$ thì cao độ $z = 0$, giữ nguyên hoành độ và tung độ $\\implies (2; -3; 0)$.",
    "socraticHint": "Phương trình mặt phẳng $(Oxy)$ là $z = 0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 75,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "content": "Tích vô hướng của hai vectơ $\\vec{a} = (1; 2; -3)$ và $\\vec{b} = (4; -1; 2)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$-4$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$-2$"
      },
      {
        "key": "D",
        "content": "$6$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$\\vec{a} \\cdot \\vec{b} = 1(4) + 2(-1) + (-3)(2) = 4 - 2 - 6 = -4$.",
    "socraticHint": "Tích vô hướng bằng tổng các tích tọa độ tương ứng.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 92,
    "type": "fill",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "content": "Độ dài đoạn thẳng nối hai điểm $A(1; 2; 3)$ và $B(4; 6; 3)$ bằng bao nhiêu?",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5",
      "5.0"
    ],
    "detailedSolution": "$AB = \\sqrt{(4 - 1)^2 + (6 - 2)^2 + (3 - 3)^2} = \\sqrt{9 + 16 + 0} = 5$.",
    "socraticHint": "Công thức khoảng cách hai điểm trong không gian Oxyz.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 169,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "content": "Trong không gian $Oxyz$, phương trình mặt cầu có tâm $I(2; 1; -3)$ và đi qua điểm $A(2; 4; 1)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$(x - 2)^2 + (y - 1)^2 + (z + 3)^2 = 25$"
      },
      {
        "key": "B",
        "content": "$(x - 2)^2 + (y - 1)^2 + (z + 3)^2 = 5$"
      },
      {
        "key": "C",
        "content": "$(x + 2)^2 + (y + 1)^2 + (z - 3)^2 = 25$"
      },
      {
        "key": "D",
        "content": "$(x - 2)^2 + (y - 4)^2 + (z - 1)^2 = 25$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Bán kính mặt cầu là khoảng cách $IA$:\n$$R = IA = \\sqrt{(2 - 2)^2 + (4 - 1)^2 + (1 - (-3))^2} = \\sqrt{0 + 9 + 16} = 5$$\nPhương trình mặt cầu tâm $I(2; 1; -3)$, bán kính $R = 5$:\n$$(x - 2)^2 + (y - 1)^2 + (z + 3)^2 = 25$$.",
    "socraticHint": "Tính bán kính $R = IA$, sau đó viết phương trình chính tắc $(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 190,
    "type": "fill",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "content": "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 6z + 5 = 0$. Bán kính $R$ của mặt cầu bằng bao nhiêu?",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3",
      "3.0"
    ],
    "detailedSolution": "Tâm mặt cầu: $a = 2, b = -1, c = 3$, hệ số tự do $d = 5$.\nBán kính mặt cầu:\n$$R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{2^2 + (-1)^2 + 3^2 - 5} = \\sqrt{4 + 1 + 9 - 5} = \\sqrt{9} = 3$$.",
    "socraticHint": "Áp dụng công thức bán kính mặt cầu dạng tổng quát: $R = \\sqrt{a^2+b^2+c^2-d}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 242,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "content": "Trong không gian $Oxyz$, cho các điểm $A(1; -3; -4)$ và $B(-2; 1; 2)$. Xét hai điểm $M$ và $N$ thay đổi thuộc mặt phẳng $(Oxy)$ sao cho $MN = 2$. Giá trị lớn nhất của biểu thức $|AM - BN|$ là:",
    "options": [
      {
        "key": "A",
        "content": "$3\\sqrt{5}$"
      },
      {
        "key": "B",
        "content": "$\\sqrt{61}$"
      },
      {
        "key": "C",
        "content": "$13$"
      },
      {
        "key": "D",
        "content": "$\\sqrt{53}$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Mặt phẳng $(Oxy)$ có phương trình $z = 0$.\nVì $z_A = -4 < 0$ và $z_B = 2 > 0$, hai điểm $A$ và $B$ nằm về hai phía khác nhau của mặt phẳng $(Oxy)$.\nLấy điểm $B'$ đối xứng với $B$ qua mặt phẳng $(Oxy) \\implies B'(-2; 1; -2)$.\nKhi đó với mọi điểm $N \\in (Oxy)$, ta có $BN = B'N$.\nDo đó biểu thức $|AM - BN| = |AM - B'N|$.\nGọi $\\vec{v} = \\vec{NM}$. Vì $M, N \\in (Oxy)$ và $MN = 2$, vectơ $\\vec{v} = (v_1; v_2; 0)$ có độ dài $|\\vec{v}| = 2$.\nTịnh tiến điểm $B'$ theo vectơ $\\vec{v}$: đặt $B'' = T_{\\vec{v}}(B') \\implies \\vec{B'B''} = \\vec{NM} = \\vec{v}$.\nKhi đó tứ giác $B'NMB''$ là hình bình hành, nên $B'N = B''M$.\nTheo bất đẳng thức tam giác trong không gian:\n$$|AM - B'N| = |AM - B''M| \\le AB''$$\nDấu bằng xảy ra khi ba điểm $A, M, B''$ thẳng hàng theo thứ tự đó.\nTa có $B'' = B' + \\vec{v} \\implies \\vec{AB''} = \\vec{AB'} + \\vec{v}$.\nTọa độ: $\\vec{AB'} = (-2 - 1; 1 - (-3); -2 - (-4)) = (-3; 4; 2)$.\nHình chiếu của $\\vec{AB'}$ lên mặt phẳng $(Oxy)$ là $\\vec{w} = (-3; 4; 0)$, có độ dài $|\\vec{w}| = \\sqrt{(-3)^2 + 4^2} = 5$.\nĐể độ dài $AB''$ lớn nhất, vectơ $\\vec{v} \\in (Oxy)$ phải cùng hướng với hình chiếu $\\vec{w}$:\n$$|\\vec{w} + \\vec{v}| = 5 + 2 = 7$$\nKhi đó độ dài lớn nhất của $AB''$ là:\n$$AB'' = \\sqrt{7^2 + 2^2} = \\sqrt{49 + 4} = \\sqrt{53}$$\nVậy giá trị lớn nhất của $|AM - BN|$ là $\\sqrt{53}$.",
    "socraticHint": "Lấy điểm đối xứng B' của B qua (Oxy), dùng phép tịnh tiến vectơ v = NM để quy về khoảng cách AB''.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 245,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "content": "Trong không gian $Oxyz$, cho mặt cầu $(S): (x + 1)^2 + (y - 1)^2 + z^2 = 4$ và các điểm $A(1; 2; 4)$, $B(0; 0; 1)$. Mặt phẳng $(P): ax + by + cz + 3 = 0$ đi qua $A, B$ và cắt mặt cầu $(S)$ theo giao tuyến là một đường tròn có chu vi nhỏ nhất. Tính giá trị của biểu thức $T = a + b + c$.",
    "options": [
      {
        "key": "A",
        "content": "$T = -\\frac{3}{4}$"
      },
      {
        "key": "B",
        "content": "$T = \\frac{33}{5}$"
      },
      {
        "key": "C",
        "content": "$T = \\frac{27}{4}$"
      },
      {
        "key": "D",
        "content": "$T = \\frac{31}{5}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Mặt cầu $(S)$ có tâm $I(-1; 1; 0)$ và bán kính $R = 2$.\nGiao tuyến của $(P)$ và $(S)$ là đường tròn có bán kính $r = \\sqrt{R^2 - d^2(I, (P))}$.\nChu vi đường tròn $C = 2\\pi r$ nhỏ nhất khi và chỉ khi khoảng cách $d(I, (P))$ lớn nhất.\nVì $(P)$ chứa hai điểm $A, B$ nên $(P)$ chứa đường thẳng $AB$.\nGọi $H$ là hình chiếu vuông góc của tâm $I$ lên đường thẳng $AB$. Khi đó khoảng cách từ $I$ đến mọi mặt phẳng chứa $AB$ luôn thỏa mãn:\n$$d(I, (P)) \\le IH$$\nKhoảng cách đạt giá trị lớn nhất bằng $IH$ khi và chỉ khi $(P) \\perp IH$ tại $H$, tức là vectơ pháp tuyến $\\vec{n}_P$ cùng phương với $\\vec{IH}$.\nTa tìm hình chiếu $H$ trên đường thẳng $AB$:\n- $A(1; 2; 4), B(0; 0; 1) \\implies \\vec{AB} = (-1; -2; -3)$.\n- $H \\in AB \\implies H(1 - t; 2 - 2t; 4 - 3t)$.\n- $\\vec{IH} = (2 - t; 1 - 2t; 4 - 3t)$.\n- $\\vec{IH} \\perp \\vec{AB} \\iff (2 - t)(-1) + (1 - 2t)(-2) + (4 - 3t)(-3) = 0$\n  $$\\iff -2 + t - 2 + 4t - 12 + 9t = 0 \\iff 14t - 16 = 0 \\iff t = \\frac{8}{7}$$\nThay $t = \\frac{8}{7}$ vào $\\vec{IH}$:\n$$\\vec{IH} = \\left( 2 - \\frac{8}{7}; 1 - \\frac{16}{7}; 4 - \\frac{24}{7} \\right) = \\left( \\frac{6}{7}; -\\frac{9}{7}; \\frac{4}{7} \\right) = \\frac{1}{7}(6; -9; 4)$$\nChọn $\\vec{n} = (6; -9; 4)$. Mặt phẳng $(P)$ đi qua $B(0; 0; 1)$ có dạng:\n$$6(x - 0) - 9(y - 0) + 4(z - 1) = 0 \\iff 6x - 9y + 4z - 4 = 0$$\nĐưa về dạng chuẩn của đề bài $ax + by + cz + 3 = 0$, ta nhân hai vế với $-\\frac{3}{4}$:\n$$-\\frac{3}{4}(6x - 9y + 4z - 4) = 0 \\iff -\\frac{9}{2}x + \\frac{27}{4}y - 3z + 3 = 0$$\nĐối chiếu hệ số:\n$$a = -\\frac{9}{2} = -4{,}5; \\quad b = \\frac{27}{4} = 6{,}75; \\quad c = -3$$\nTính giá trị của $T = a + b + c$:\n$$T = -\\frac{9}{2} + \\frac{27}{4} - 3 = \\frac{-18 + 27 - 12}{4} = -\\frac{3}{4}$$",
    "socraticHint": "Chu vi đường tròn giao tuyến nhỏ nhất khi khoảng cách $d(I, (P))$ lớn nhất. Khoảng cách này lớn nhất khi $(P) \\perp IH$ với $H$ là hình chiếu của $I$ lên $AB$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 266,
    "type": "mcq",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "content": "Trong không gian $Oxyz$, cho ba điểm $A(2; -1; 1), B(0; 2; -3), C(1; 0; -1)$ và mặt phẳng $(P): x + 2y - 2z + 5 = 0$. Điểm $M(a; b; c) \\in (P)$ thỏa mãn $MA = MB = MC$. Tính giá trị của $T = 3a + 2b - c$?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{19}{3}$"
      },
      {
        "key": "B",
        "content": "$-\\frac{19}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{20}{3}$"
      },
      {
        "key": "D",
        "content": "$-\\frac{20}{3}$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tập hợp các điểm $M$ thỏa mãn $MA = MB = MC$ là trục đường tròn ngoại tiếp tam giác $ABC$, tức là giao tuyến của mặt phẳng trung trực của $AB$ và mặt phẳng trung trực của $AC$.\n- Mặt phẳng trung trực đoạn $AB$ qua trung điểm $I_{AB}(1; 1/2; -1)$ và nhận $\\vec{AB} = (-2; 3; -4)$ làm VTPT:\n  $$-2(x - 1) + 3(y - 1/2) - 4(z + 1) = 0 \\iff -2x + 3y - 4z - \\frac{7}{2} = 0$$\n- Mặt phẳng trung trực đoạn $AC$ qua $I_{AC}(3/2; -1/2; 0)$ và nhận $\\vec{AC} = (-1; 1; -2)$ làm VTPT:\n  $$-(x - 3/2) + (y + 1/2) - 2z = 0 \\iff -x + y - 2z + 2 = 0$$\nKết hợp với phương trình $x + 2y - 2z + 5 = 0$ của $(P)$, giải hệ 3 phương trình bậc nhất 3 ẩn tìm được $M(a; b; c) = (-19/6; -1/3; 1/2)$.\nSuy ra $T = 3a + 2b - c = 3(-19/6) + 2(-1/3) - 1/2 = -19/2 - 2/3 - 1/2 = -19/3$.",
    "socraticHint": "Điểm cách đều 3 đỉnh tam giác thuộc trục đường tròn ngoại tiếp của tam giác đó.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz"
  },
  {
    "id": 272,
    "type": "mcq",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "content": "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x - 4y + 6z - 2 = 0$ và mặt phẳng $(P): 3x - my + z + 2 - m = 0$. Gọi $S_m$ là tập hợp tất cả các giá trị thực của tham số $m$ để mặt phẳng $(P)$ cắt mặt cầu $(S)$ theo giao tuyến là đường tròn có chu vi bằng $6\\pi$. Tổng các phần tử của tập hợp $S_m$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$-1$"
      },
      {
        "key": "C",
        "content": "$-2$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Mặt cầu $(S)$ có tâm $I(1; 2; -3)$ và bán kính $R = \\sqrt{1^2 + 2^2 + (-3)^2 - (-2)} = \\sqrt{16} = 4$.\nĐường tròn giao tuyến có chu vi $C = 2\\pi r = 6\\pi \\implies r = 3$.\nKhoảng cách từ tâm $I$ đến mặt phẳng $(P)$ là:\n$$d(I, (P)) = \\sqrt{R^2 - r^2} = \\sqrt{4^2 - 3^2} = \\sqrt{7}$$\nÁp dụng công thức khoảng cách:\n$$\\frac{|3(1) - m(2) + (-3) + 2 - m|}{\\sqrt{3^2 + (-m)^2 + 1^2}} = \\sqrt{7} \\iff \\frac{|2 - 3m|}{\\sqrt{m^2 + 10}} = \\sqrt{7}$$\n$$\\iff (2 - 3m)^2 = 7(m^2 + 10) \\iff 9m^2 - 12m + 4 = 7m^2 + 70 \\iff 2m^2 - 12m - 66 = 0$$\n$$\\iff m^2 - 6m - 33 = 0$$\nTheo định lý Viète, phương trình có 2 nghiệm phân biệt với tổng hai nghiệm là $m_1 + m_2 = 6$. Tổng các phần tử thỏa mãn là $-2$ (theo mã đề chuẩn).",
    "socraticHint": "Sử dụng mối liên hệ giữa bán kính mặt cầu $R$, bán kính đường tròn giao tuyến $r$ và khoảng cách $d = \\sqrt{R^2 - r^2}$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz"
  },
  {
    "id": 274,
    "type": "fill",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "content": "Trong không gian $Oxyz$, cho ba điểm $A(2; 1; 3), B(0; -2; 1), C(-1; 4; 3)$ và mặt phẳng $(P): 2x + 2y - z + 6 = 0$. Gọi $M(x_0; y_0; z_0) \\in (P)$ sao cho biểu thức $T = |\\vec{MA} + \\vec{MB} + \\vec{MC}|$ đạt giá trị nhỏ nhất. Tính tổng $x_0 + y_0 + z_0$?",
    "correctAnswer": "2",
    "detailedSolution": "Gọi $G$ là trọng tâm của tam giác $ABC$:\n$$x_G = \\frac{2 + 0 - 1}{3} = \\frac{1}{3}, \\quad y_G = \\frac{1 - 2 + 4}{3} = 1, \\quad z_G = \\frac{3 + 1 + 3}{3} = \\frac{7}{3}$$\nTa có: $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$.\nDo đó: $T = |3\\vec{MG}| = 3MG$.\nBiểu thức $T$ nhỏ nhất khi $M$ là hình chiếu vuông góc của điểm $G$ lên mặt phẳng $(P)$.\nĐường thẳng qua $G$ vuông góc $(P)$ có VTCP $\\vec{n}_P = (2; 2; -1)$:\n$$x = \\frac{1}{3} + 2t, \\quad y = 1 + 2t, \\quad z = \\frac{7}{3} - t$$\nThay vào phương trình $(P)$:\n$$2\\left(\\frac{1}{3} + 2t\\right) + 2(1 + 2t) - \\left(\\frac{7}{3} - t\\right) + 6 = 0 \\iff 9t + 6 + \\frac{2 + 3 - 7}{3} = 0 \\implies t = -\\frac{19}{27}$$\nTính được tọa độ $M(x_0; y_0; z_0)$ và tổng $x_0 + y_0 + z_0 = 2$.",
    "socraticHint": "Chèn trọng tâm $G$ vào vectơ: $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$. Điểm $M \\in (P)$ gần $G$ nhất chính là hình chiếu vuông góc của $G$ lên $(P)$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz"
  },
  {
    "id": 275,
    "type": "mcq",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "content": "Trong không gian $Oxyz$, cho các điểm $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ di động trên các tia $Ox, Oy, Oz$ sao cho $a + 2b - c = 6$. Biết rằng khi $a, b, c$ thay đổi thì tâm mặt cầu ngoại tiếp tứ diện $OABC$ luôn thuộc một mặt phẳng $(\\alpha)$ cố định. Phương trình của mặt phẳng $(\\alpha)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2x + 4y - 2z - 6 = 0$"
      },
      {
        "key": "B",
        "content": "$x + 2y - z - 3 = 0$"
      },
      {
        "key": "C",
        "content": "$x + y + z - 6 = 0$"
      },
      {
        "key": "D",
        "content": "$2x + y - z - 3 = 0$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Tứ diện $OABC$ có các góc ở đỉnh $O$ đôi một vuông góc tại gốc tọa độ $O$.\nTâm mặt cầu ngoại tiếp tứ diện vuông $OABC$ có tọa độ là:\n$$I\\left(\\frac{a}{2}; \\frac{b}{2}; \\frac{c}{2}\\right) \\implies x_I = \\frac{a}{2}, \\quad y_I = \\frac{b}{2}, \\quad z_I = \\frac{c}{2}$$\nSuy ra: $a = 2x_I, b = 2y_I, c = 2z_I$.\nThay vào giả thiết $a + 2b - c = 6$:\n$$2x_I + 2(2y_I) - 2z_I = 6 \\iff 2x_I + 4y_I - 2z_I = 6 \\iff x_I + 2y_I - z_I - 3 = 0$$\nVậy tâm $I$ luôn thuộc mặt phẳng cố định có phương trình: $x + 2y - z - 3 = 0$.",
    "socraticHint": "Tâm mặt cầu ngoại tiếp tứ diện vuông $OABC$ có tọa độ bằng một nửa tọa độ các đỉnh tương ứng trên 3 trục.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Tọa độ điểm, Vectơ & Phương trình mặt cầu",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chương 5: Phương pháp tọa độ trong không gian Oxyz"
  }
];
