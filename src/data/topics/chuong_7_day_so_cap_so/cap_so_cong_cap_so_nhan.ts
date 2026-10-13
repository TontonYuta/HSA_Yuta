import { Question } from '../../../types/exam';

export const capSoCongNhanQuestions: Question[] = [
  {
    "id": 23,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho một cấp số nhân $(u_n)$ có công bội $q > 0$. Biết $u_2 = 6$ và $u_4 = 54$. Tổng của 8 số hạng đầu tiên của cấp số nhân đó bằng:",
    "options": [
      {
        "key": "A",
        "content": "$6560$"
      },
      {
        "key": "B",
        "content": "$6561$"
      },
      {
        "key": "C",
        "content": "$2186$"
      },
      {
        "key": "D",
        "content": "$19682$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có tỉ số giữa các số hạng:\n$$\\frac{u_4}{u_2} = q^2 = \\frac{54}{6} = 9.$$\nVì công bội $q > 0$ nên $q = 3$.\nSố hạng đầu tiên:\n$$u_1 = \\frac{u_2}{q} = \\frac{6}{3} = 2.$$\nTổng của 8 số hạng đầu tiên của cấp số nhân:\n$$S_8 = \\frac{u_1(q^8 - 1)}{q - 1} = \\frac{2(3^8 - 1)}{3 - 1} = 3^8 - 1 = 6561 - 1 = 6560.$$",
    "socraticHint": "Lập tỉ số giữa hai số hạng đã cho để tìm công bội $q$, suy ra $u_1$ rồi dùng công thức tổng $S_n$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 24,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Một quả bóng cao su được thả rơi tự do từ độ cao $18\\text{ m}$ xuống mặt đất. Mỗi lần chạm đất, quả bóng nảy lên được độ cao bằng $\\frac{2}{3}$ độ cao của lần rơi ngay trước đó. Tổng quãng đường mà quả bóng di chuyển được kể từ lúc thả cho đến khi dừng hẳn bằng:",
    "options": [
      {
        "key": "A",
        "content": "$90\\text{ m}$"
      },
      {
        "key": "B",
        "content": "$72\\text{ m}$"
      },
      {
        "key": "C",
        "content": "$54\\text{ m}$"
      },
      {
        "key": "D",
        "content": "$108\\text{ m}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Quãng đường quả bóng rơi lần đầu tiên là $h_0 = 18\\text{ m}$.\nKể từ lần chạm đất thứ nhất, mỗi lần nảy lên quả bóng di chuyển cả chiều lên và chiều xuống với độ cao $h_n = 18 \\cdot \\left(\\frac{2}{3}\\right)^n$.\nTổng quãng đường quả bóng di chuyển là:\n$$S = h_0 + 2(h_1 + h_2 + h_3 + \\dots) = 18 + 2 \\sum_{n=1}^\\infty 18 \\cdot \\left(\\frac{2}{3}\\right)^n.$$\nTổng các độ cao nảy lên là tổng của cấp số nhân lùi vô hạn với số hạng đầu $h_1 = 18 \\cdot \\frac{2}{3} = 12$ và công bội $q = \\frac{2}{3}$:\n$$\\sum_{n=1}^\\infty h_n = \\frac{12}{1 - \\frac{2}{3}} = \\frac{12}{\\frac{1}{3}} = 36\\text{ m}.$$\nDo đó tổng quãng đường là:\n$$S = 18 + 2(36) = 18 + 72 = 90\\text{ m}.$$",
    "socraticHint": "Tổng quãng đường gồm độ cao thả rơi ban đầu cộng với hai lần tổng các độ cao nảy lên (cấp số nhân lùi vô hạn).",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 44,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = 4$. Biết tổng của $n$ số hạng đầu tiên bằng $253$. Tìm giá trị của $n$.",
    "correctAnswer": "11",
    "acceptableAnswers": [
      "11"
    ],
    "detailedSolution": "Tổng của $n$ số hạng đầu tiên của cấp số cộng được tính theo công thức:\n$$S_n = \\frac{n[2u_1 + (n - 1)d]}{2}.$$\nThay $u_1 = 3, d = 4$ và $S_n = 253$:\n$$253 = \\frac{n[2(3) + 4(n - 1)]}{2} = \\frac{n(4n + 2)}{2} = n(2n + 1) = 2n^2 + n.$$\nPhương trình trở thành:\n$$2n^2 + n - 253 = 0.$$\nBiệt thức $\\Delta = 1^2 - 4(2)(-253) = 1 + 2024 = 2025 = 45^2$.\nNghiệm nguyên dương:\n$$n = \\frac{-1 + 45}{4} = \\frac{44}{4} = 11.$$",
    "socraticHint": "Thiết lập phương trình bậc hai theo $n$ từ công thức tổng $n$ số hạng đầu của cấp số cộng.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 45,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Một tam giác vuông có 3 cạnh lập thành cấp số cộng với công sai $d = 3$. Hãy tính chu vi của tam giác vuông đó.",
    "correctAnswer": "36",
    "acceptableAnswers": [
      "36",
      "36.0"
    ],
    "detailedSolution": "Gọi 3 cạnh là $x - 3, x, x + 3$ ($x > 3$).\nTheo định lý Pythagore: $(x - 3)^2 + x^2 = (x + 3)^2 \\iff x^2 - 12x = 0 \\implies x = 12$.\nBa cạnh là $9, 12, 15$. Chu vi $P = 9 + 12 + 15 = 36$.",
    "socraticHint": "Bộ ba cạnh của tam giác vuông theo cấp số cộng luôn tỉ lệ với (3, 4, 5).",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 77,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho cấp số nhân $(u_n)$ có các số hạng đều dương thỏa mãn $u_2 + u_4 = 60$ và $u_3 + u_5 = 180$. Tổng 6 số hạng đầu tiên $S_6$ của cấp số nhân này bằng:",
    "options": [
      {
        "key": "A",
        "content": "$728$"
      },
      {
        "key": "B",
        "content": "$364$"
      },
      {
        "key": "C",
        "content": "$1456$"
      },
      {
        "key": "D",
        "content": "$726$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Biểu diễn qua $u_1$ và công bội $q > 0$:\n$$\\begin{cases} u_1 q + u_1 q^3 = 60 \\iff u_1 q(1 + q^2) = 60 \\\\ u_1 q^2 + u_1 q^4 = 180 \\iff u_1 q^2(1 + q^2) = 180 \\end{cases}$$\nChia phương trình dưới cho phương trình trên ta được:\n$$q = \\frac{180}{60} = 3.$$\nThay $q = 3$ vào phương trình thứ nhất:\n$$u_1 \\cdot 3 \\cdot (1 + 9) = 60 \\iff 30 u_1 = 60 \\iff u_1 = 2.$$\nTổng 6 số hạng đầu tiên:\n$$S_6 = \\frac{u_1(q^6 - 1)}{q - 1} = \\frac{2(3^6 - 1)}{3 - 1} = 3^6 - 1 = 729 - 1 = 728.$$",
    "socraticHint": "Lập tỉ số giữa hai hệ thức tổng để tìm nhanh công bội $q$ rồi suy ra $u_1$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 94,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho cấp số cộng $(u_n)$ thỏa mãn $u_1 + u_5 = 18$ và $u_3 + u_7 = 26$. Tính số hạng $u_{10}$ của cấp số cộng đó.",
    "correctAnswer": "23",
    "acceptableAnswers": [
      "23"
    ],
    "detailedSolution": "Biểu diễn các số hạng qua $u_1$ và công sai $d$:\n$$\\begin{cases} u_1 + (u_1 + 4d) = 18 \\iff 2u_1 + 4d = 18 \\iff u_1 + 2d = 9 \\\\ (u_1 + 2d) + (u_1 + 6d) = 26 \\iff 2u_1 + 8d = 26 \\iff u_1 + 4d = 13 \\end{cases}$$\nTrừ hai phương trình:\n$$2d = 4 \\iff d = 2.$$\nThay vào ta được $u_1 = 9 - 2(2) = 5$.\nSố hạng thứ 10 là:\n$$u_{10} = u_1 + 9d = 5 + 9(2) = 23.$$",
    "socraticHint": "Lập hệ phương trình bậc nhất hai ẩn $u_1$ và $d$ từ tính chất cấp số cộng.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 122,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho hai cấp số cộng $(u_n): 3, 7, 11, dots$ và $(v_m): 2, 7, 12, dots$. Số hạng chung nhỏ nhất lớn hơn 100 của hai cấp số cộng trên là:",
    "options": [
      {
        "key": "A",
        "content": "$107$"
      },
      {
        "key": "B",
        "content": "$127$"
      },
      {
        "key": "C",
        "content": "$102$"
      },
      {
        "key": "D",
        "content": "$117$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "- Dãy $(u_n)$ có số hạng đầu $u_1 = 3$, công sai $d_1 = 4 \\implies u_n = 4n - 1$.\n- Dãy $(v_m)$ có số hạng đầu $v_1 = 2$, công sai $d_2 = 5 \\implies v_m = 5m - 3$.\nSố hạng chung đầu tiên là 7. Vì $\\text{BCNN}(4, 5) = 20$, dãy các số hạng chung là một cấp số cộng có công sai $D = 20$:\n$$w_k = 7 + 20(k - 1) = 20k - 13 \\quad (k \\in \\mathbb{N}^*)$$\nTa tìm $k$ nguyên dương nhỏ nhất sao cho $w_k > 100$:\n$$20k - 13 > 100 \\iff 20k > 113 \\iff k > 5.65 \\implies k = 6$$\nSố hạng chung nhỏ nhất lớn hơn 100 là $w_6 = 20(6) - 13 = 107$.",
    "socraticHint": "Tìm số hạng chung đầu tiên và công sai chung là BCNN của hai công sai ban đầu.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 123,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Một quả bóng cao su được thả rơi từ độ cao 10 m xuống mặt sàn phẳng. Mỗi lần chạm sàn, quả bóng lại nảy lên được độ cao bằng $\\frac{2}{3}$ độ cao của lần rơi trước đó. Tổng quãng đường quả bóng di chuyển (kể cả rơi xuống và nảy lên) cho đến khi nó dừng lại hẳn bằng:",
    "options": [
      {
        "key": "A",
        "content": "$50\\text{ m}$"
      },
      {
        "key": "B",
        "content": "$30\\text{ m}$"
      },
      {
        "key": "C",
        "content": "$40\\text{ m}$"
      },
      {
        "key": "D",
        "content": "$60\\text{ m}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "- Lần rơi đầu tiên: bóng đi quãng đường $h_0 = 10\\text{ m}$.\n- Từ lần nảy đầu tiên trở đi, ở mỗi chu kỳ bóng nảy lên độ cao $h_k$ và rơi xuống lại độ cao $h_k$, tức đi quãng đường $2h_k$ với $h_k = 10 \\cdot l\\left(\\frac{2}{3}\\right)^k$.\nTổng quãng đường bóng di chuyển là:\n$$S = 10 + 2 \\sum_{k=1}^\\infty 10 l\\left(\\frac{2}{3}\\right)^k = 10 + 20 \\sum_{k=1}^\\infty l\\left(\\frac{2}{3}\\right)^k$$\nTổng cấp số nhân lùi vô hạn với $u_1 = \\frac{2}{3}$ và công bội $q = \\frac{2}{3}$:\n$$\\sum_{k=1}^\\infty l\\left(\\frac{2}{3}\\right)^k = \\frac{\\frac{2}{3}}{1 - \\frac{2}{3}} = 2$$\nDo đó: $S = 10 + 20 \\times 2 = 50\\text{ m}$.",
    "socraticHint": "Tổng quãng đường gồm độ cao ban đầu cộng với 2 lần tổng của chuỗi cấp số nhân lùi vô hạn các độ cao nảy lên.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 124,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 4$. Biết tổng $n$ số hạng đầu tiên của cấp số cộng là $S_n = 253$. Giá trị của $n$ là:",
    "options": [
      {
        "key": "A",
        "content": "$11$"
      },
      {
        "key": "B",
        "content": "$10$"
      },
      {
        "key": "C",
        "content": "$12$"
      },
      {
        "key": "D",
        "content": "$13$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng công thức tổng $n$ số hạng đầu của cấp số cộng:\n$$S_n = \\frac{n}{2}[2u_1 + (n - 1)d] = \\frac{n}{2}[2(3) + 4(n - 1)] = \\frac{n}{2}[4n + 2] = n(2n + 1)$$\nTheo giả thiết:\n$$n(2n + 1) = 253 \\iff 2n^2 + n - 253 = 0$$\nGiải phương trình bậc hai: $\\Delta = 1^2 - 4(2)(-253) = 1 + 2024 = 2025 = 45^2$.\n$$n = \\frac{-1 + 45}{4} = 11 \\quad (\\text{do } n \\in \\mathbb{N}^*)$$\nVậy $n = 11$.",
    "socraticHint": "Sử dụng công thức $S_n = \\frac{n}{2}[2u_1 + (n-1)d]$ để lập phương trình bậc hai theo số nguyên dương $n$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 144,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho hai cấp số cộng $(u_n): 3, 7, 11, dots$ ($u_n = 4n - 1$) và $(v_m): 2, 7, 12, dots$ ($v_m = 5m - 3$). Có bao nhiêu số hạng chung của hai dãy số này nhỏ hơn 2025?",
    "correctAnswer": "101",
    "acceptableAnswers": [
      "101",
      "101.0"
    ],
    "detailedSolution": "Số hạng chung đầu tiên là 7. Công sai chung là $D = \\text{BCNN}(4, 5) = 20$.\nDãy số hạng chung là $w_k = 7 + 20(k - 1) = 20k - 13$ với $k \\in \\mathbb{N}^*$.\nĐiều kiện số hạng chung nhỏ hơn 2025:\n$$w_k < 2025 \\iff 20k - 13 < 2025 \\iff 20k < 2038 \\iff k < 101.9$$\nVì $k \\in \\mathbb{N}^*$, ta có $k in {1; 2; dots; 101}$.\nVậy có đúng 101 số hạng chung nhỏ hơn 2025.",
    "socraticHint": "Dãy số hạng chung lập thành cấp số cộng với công sai $D = \\text{BCNN}(d_1, d_2)$. Đếm số nguyên $k$ thỏa mãn bất đẳng thức.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 172,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho ba số thực phân biệt $a, b, c$ theo thứ tự lập thành một cấp số nhân với công bội $q$. Biết rằng đồng thời ba số $a, 2b, 3c$ theo thứ tự lập thành một cấp số cộng. Giá trị của công bội $q$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{3}$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $a, b, c$ lập thành cấp số nhân nên $b = aq$ và $c = aq^2$ ($a \\ne 0, q \\ne 1$).\nBa số $a, 2b, 3c$ lập thành cấp số cộng nên:\n$$a + 3c = 2(2b) \\iff a + 3aq^2 = 4aq.$$\nVì $a \\ne 0$, chia cả hai vế cho $a$ ta được:\n$$3q^2 - 4q + 1 = 0 \\iff (q - 1)(3q - 1) = 0 \\iff \\left[\\begin{array}{l} q = 1 \\\\ q = \\frac{1}{3} \\end{array}\\right.$$\nDo ba số $a, b, c$ đôi một phân biệt nên $q \\ne 1$. Vậy $q = \\frac{1}{3}$.",
    "socraticHint": "Biểu diễn các số hạng qua $a$ và $q$, thiết lập phương trình bậc hai từ tính chất cấp số cộng.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 174,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho ba số thực dương $x, 5, y$ theo thứ tự lập thành một cấp số cộng và ba số $x, 4, y$ theo thứ tự lập thành một cấp số nhân. Giá trị của biểu thức $P = x^2 + y^2$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$68$"
      },
      {
        "key": "B",
        "content": "$84$"
      },
      {
        "key": "C",
        "content": "$100$"
      },
      {
        "key": "D",
        "content": "$52$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "- Vì $x, 5, y$ lập thành cấp số cộng: $x + y = 2(5) = 10$.\n- Vì $x, 4, y$ lập thành cấp số nhân: $xy = 4^2 = 16$.\nTa có:\n$$P = x^2 + y^2 = (x + y)^2 - 2xy = 10^2 - 2(16) = 100 - 32 = 68$$.",
    "socraticHint": "Sử dụng tính chất số hạng giữa của cấp số cộng và cấp số nhân: $x+y = 2b$ và $xy = b^2$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 194,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Cho cấp số cộng $(u_n)$ có $u_5 = 19$ và $u_9 = 35$. Tính tổng 20 số hạng đầu tiên $S_{20}$ của cấp số cộng đó.",
    "correctAnswer": "820",
    "acceptableAnswers": [
      "820"
    ],
    "detailedSolution": "Ta có $u_9 - u_5 = 4d \\iff 35 - 19 = 16 \\iff d = 4$.\nSố hạng đầu tiên:\n$$u_1 = u_5 - 4d = 19 - 4(4) = 3.$$\nTổng 20 số hạng đầu tiên của cấp số cộng:\n$$S_{20} = \\frac{20[2u_1 + 19d]}{2} = 10[2(3) + 19(4)] = 10(6 + 76) = 10 \\times 82 = 820.$$",
    "socraticHint": "Tìm công sai $d$ từ hiệu hai số hạng, suy ra $u_1$ rồi tính tổng $S_{20}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 206,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Người ta trồng $10000$ cây thành nhiều hàng theo cách như sau: hàng thứ nhất trồng $1$ cây, hàng thứ hai trồng $3$ cây, hàng thứ ba trồng $5$ cây, v.v... Hỏi hàng cuối cùng trồng bao nhiêu cây?",
    "options": [],
    "correctAnswer": "199",
    "acceptableAnswers": [
      "199",
      "199.0"
    ],
    "detailedSolution": "Số lượng cây ở mỗi hàng lập thành một cấp số cộng với số hạng đầu $u_1 = 1$, công sai $d = 2$.\nSố cây ở hàng thứ $n$ là: $u_n = u_1 + (n - 1)d = 1 + 2(n - 1) = 2n - 1$.\nTổng số cây trồng ở cả $n$ hàng là:\n$$S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n(1 + 2n - 1)}{2} = n^2$$\nTheo đề bài, tổng số cây là $10000$:\n$$n^2 = 10000 \\implies n = 100\\text{ (hàng)}$$\nHàng cuối cùng là hàng thứ $100$, số cây trồng ở hàng này là:\n$$u_{100} = 2 \\times 100 - 1 = 199\\text{ cây}$$",
    "socraticHint": "Tổng của $n$ số lẻ liên tiếp bắt đầu từ 1 là $n^2$. Tìm số hàng $n$ rồi tính số cây của hàng thứ $n$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 284,
    "type": "mcq",
    "topicId": "cap_so_cong_cap_so_nhan",
    "content": "Vào ngày sinh nhật, Lan nhận được $2$ triệu đồng tiền mặt và quyết định tiết kiệm. Cứ mỗi ngày trôi qua cho đến sinh nhật tiếp theo (giả sử năm không nhuận có $365$ ngày), cô bé bỏ thêm đều đặn $10$ nghìn đồng vào hũ tiết kiệm mỗi ngày. Tổng số tiền Lan tiết kiệm được ngay trước ngày sinh nhật tiếp theo là:",
    "options": [
      {
        "key": "A",
        "content": "$5.670.000$ đồng"
      },
      {
        "key": "B",
        "content": "$5.000.000$ đồng"
      },
      {
        "key": "C",
        "content": "$5.650.000$ đồng"
      },
      {
        "key": "D",
        "content": "$5.630.000$ đồng"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Số ngày tiết kiệm trong năm không nhuận là $365$ ngày.\nMỗi ngày Lan bỏ thêm $10.000$ đồng vào hũ tiết kiệm.\nTổng số tiền Lan tích lũy thêm trong 365 ngày là:\n$$365 \\times 10.000 = 3.650.000\\text{ (đồng)}$$\nCộng với số tiền ban đầu là $2.000.000$ đồng:\n$$T = 2.000.000 + 3.650.000 = 5.650.000\\text{ (đồng)}$$",
    "socraticHint": "Lấy số tiền tích lũy đều đặn mỗi ngày nhân với 365 ngày rồi cộng với số tiền gốc ban đầu.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Cấp số cộng & Cấp số nhân",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân"
  },
  {
    "id": 297,
    "type": "fill",
    "topicId": "cap_so_cong_cap_so_nhan",
    "content": "Điền một số thích hợp vào vị trí còn trống trong dãy quy luật sau: $1; 2; 3; 8; 19; 46; 111; \\dots$",
    "correctAnswer": "268",
    "detailedSolution": "Xét quy luật của dãy số $(u_n)$:\n- $u_1 = 1, u_2 = 2, u_3 = 3$\n- $u_4 = 8 = 2 \\times 3 + 2 = 2u_3 + u_2$\n- $u_5 = 19 = 2 \\times 8 + 3 = 2u_4 + u_3$\n- $u_6 = 46 = 2 \\times 19 + 8 = 2u_5 + u_4$\n- $u_7 = 111 = 2 \\times 46 + 19 = 2u_6 + u_5$\nQuy luật tổng quát: $u_n = 2u_{n-1} + u_{n-2}$ với mọi $n \\ge 4$.\nDo đó, số hạng tiếp theo $u_8$ là:\n$$u_8 = 2u_7 + u_6 = 2 \\times 111 + 46 = 222 + 46 = 268$$",
    "socraticHint": "Tìm hệ thức truy hồi tuyến tính liên hệ giữa 3 số hạng liên tiếp: $u_n = 2u_{n-1} + u_{n-2}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Cấp số cộng & Cấp số nhân",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chương 7: Dãy số, Cấp số cộng & Cấp số nhân"
  }
];
