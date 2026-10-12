import { Question } from '../../src/types/exam';

export const OTHER_EXAMS_UPGRADED_QUESTIONS: Record<number, Partial<Question>> = {
  151: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $f(x) = \\frac{\\sin x + 2\\cos x + 1}{\\sin x + \\cos x + 2}$. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x)$. Tích $M \\cdot m$ bằng:",
    options: [
      { key: "A", content: "$-2$" },
      { key: "B", content: "$2$" },
      { key: "C", content: "$-1$" },
      { key: "D", content: "$0$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Gọi $y$ là một giá trị của hàm số, ta có:\n$$y = \\frac{\\sin x + 2\\cos x + 1}{\\sin x + \\cos x + 2} \\iff y(\\sin x + \\cos x + 2) = \\sin x + 2\\cos x + 1$$\n$$\\iff (y - 1)\\sin x + (y - 2)\\cos x = 1 - 2y.$$\nĐiều kiện để phương trình có nghiệm theo $x$ là:\n$$(y - 1)^2 + (y - 2)^2 \\ge (1 - 2y)^2$$\n$$\\iff y^2 - 2y + 1 + y^2 - 4y + 4 \\ge 4y^2 - 4y + 1 \\iff 2y^2 + 2y - 4 \\le 0$$\n$$\\iff y^2 + y - 2 \\le 0 \\iff -2 \\le y \\le 1.$$\nDo đó $M = 1$ và $m = -2$.\nTích $M \\cdot m = 1 \\cdot (-2) = -2$.",
    socraticHint: "Sử dụng điều kiện có nghiệm $a^2 + b^2 \\ge c^2$ của phương trình lượng giác bậc nhất $a\\sin x + b\\cos x = c$."
  },
  154: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $y = \\frac{2x + 1}{x - 1}$ có đồ thị $(C)$. Có bao nhiêu tiếp tuyến của đồ thị $(C)$ tạo với hai trục tọa độ $Ox, Oy$ một tam giác vuông cân?",
    options: [
      { key: "A", content: "$2$" },
      { key: "B", content: "$1$" },
      { key: "C", content: "$4$" },
      { key: "D", content: "$0$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đạo hàm: $y' = \\frac{-3}{(x - 1)^2} < 0, \\forall x \\ne 1$.\nTiếp tuyến của đồ thị tạo với hai trục tọa độ tam giác vuông cân khi và chỉ khi hệ số góc của tiếp tuyến có độ lớn bằng $1$:\n$$|y'(x_0)| = 1 \\iff \\left| \\frac{-3}{(x_0 - 1)^2} \\right| = 1 \\iff (x_0 - 1)^2 = 3 \\iff x_0 = 1 \\pm \\sqrt{3}.$$\n- Với $x_0 = 1 + \\sqrt{3}$: $y_0 = \\frac{2(1 + \\sqrt{3}) + 1}{\\sqrt{3}} = 2 + \\sqrt{3}$. Phương trình tiếp tuyến là $y = -(x - 1 - \\sqrt{3}) + 2 + \\sqrt{3} = -x + 3 + 2\\sqrt{3}$. Tiếp tuyến này không đi qua gốc tọa độ nên tạo với hai trục một tam giác vuông cân.\n- Với $x_0 = 1 - \\sqrt{3}$: tương tự cũng cho một tiếp tuyến không qua gốc tọa độ.\nVậy có đúng 2 tiếp tuyến thỏa mãn.",
    socraticHint: "Đường thẳng tạo với hai trục tọa độ một tam giác vuông cân có hệ số góc bằng $1$ hoặc $-1$ và không đi qua gốc tọa độ."
  },
  156: {
    difficulty: "Vận dụng",
    content: "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{x^2 - 1}}{x^2 - 3x + 2}$ là:",
    options: [
      { key: "A", content: "$3$" },
      { key: "B", content: "$2$" },
      { key: "C", content: "$4$" },
      { key: "D", content: "$1$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Tập xác định: $x^2 - 1 \\ge 0 \\iff x \\in (-\\infty; -1] \\cup [1; +\\infty)$ và $x^2 - 3x + 2 \\ne 0 \\iff x \\ne 1, x \\ne 2$.\nVậy $D = (-\\infty; -1] \\cup (1; 2) \\cup (2; +\\infty)$.\n1. Tiệm cận ngang:\n$$\\lim_{x \\to +\\infty} y = \\lim_{x \\to +\\infty} \\frac{\\sqrt{x^2 - 1}}{x^2 - 3x + 2} = 0; \\quad \\lim_{x \\to -\\infty} y = 0.$$\nĐồ thị có 1 đường tiệm cận ngang là $y = 0$.\n2. Tiệm cận đứng:\n- Tại $x \\to 2$: mẫu tiến về 0, tử tiến về $\\sqrt{3} \\ne 0$, nên $x = 2$ là tiệm cận đứng.\n- Tại $x \\to 1^+$: $y = \\frac{\\sqrt{(x-1)(x+1)}}{(x-1)(x-2)} = \\frac{\\sqrt{x+1}}{\\sqrt{x-1}(x-2)}$. Khi $x \\to 1^+$, mẫu tiến về $0^-$, tử tiến về $\\sqrt{2}$, nên $y \\to -\\infty$. Do đó $x = 1$ là tiệm cận đứng.\nTổng số đường tiệm cận đứng (2) và tiệm cận ngang (1) là $2 + 1 = 3$.",
    socraticHint: "Phân tích nhân tử và rút gọn $\\sqrt{x - 1}$ khi tính giới hạn một bên tại $x \\to 1^+$."
  },
  157: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $y = \\frac{2x^2 + (m - 1)x + 3}{x - 1}$. Biết rằng đường tiệm cận xiên của đồ thị hàm số đi qua điểm $A(2; 7)$. Giá trị của tham số $m$ bằng:",
    options: [
      { key: "A", content: "$2$" },
      { key: "B", content: "$3$" },
      { key: "C", content: "$1$" },
      { key: "D", content: "$-2$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Chia tử số cho mẫu số:\n$$\\frac{2x^2 + (m - 1)x + 3}{x - 1} = 2x + (m + 1) + \\frac{m + 4}{x - 1}.$$\nĐường tiệm cận xiên của đồ thị hàm số là $d: y = 2x + m + 1$.\nĐiểm $A(2; 7) \\in d$ khi và chỉ khi:\n$$7 = 2(2) + m + 1 \\iff 7 = m + 5 \\iff m = 2.$$",
    socraticHint: "Tìm phương trình đường tiệm cận xiên dạng $y = ax + b$ bằng phép chia đa thức rồi thay tọa độ điểm $A$ vào."
  },
  159: {
    difficulty: "Vận dụng cao",
    content: "Có bao nhiêu giá trị nguyên của tham số $m$ để phương trình $\\log_3^2 x - 2m\\log_3 x + 2m + 3 = 0$ có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1 x_2 = 81$?",
    options: [
      { key: "A", content: "$0$" },
      { key: "B", content: "$1$" },
      { key: "C", content: "$2$" },
      { key: "D", content: "Vô số" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đặt $t = \\log_3 x$. Phương trình trở thành:\n$$t^2 - 2mt + 2m + 3 = 0.$$\nĐể phương trình có hai nghiệm phân biệt thì biệt thức $\\Delta' > 0$:\n$$\\Delta' = m^2 - (2m + 3) = m^2 - 2m - 3 > 0 \\iff m < -1 \\text{ hoặc } m > 3.$$\nTheo bài ra, $x_1 x_2 = 81 \\iff \\log_3(x_1 x_2) = \\log_3 81 = 4 \\iff \\log_3 x_1 + \\log_3 x_2 = 4 \\iff t_1 + t_2 = 4$.\nTheo định lý Viète: $t_1 + t_2 = 2m = 4 \\iff m = 2$.\nThử lại với $m = 2$: $\\Delta' = 2^2 - 2(2) - 3 = -3 < 0$, phương trình vô nghiệm.\nVậy không có giá trị nào của $m$ thỏa mãn.",
    socraticHint: "Kiểm tra kỹ điều kiện có hai nghiệm phân biệt $\\Delta' > 0$ sau khi tìm được giá trị tham số $m$ từ định lý Viète."
  },
  160: {
    difficulty: "Vận dụng",
    content: "Cho bất phương trình $4^x - (m + 3)2^x + 2m + 2 < 0$. Tìm tất cả các giá trị của tham số $m$ để bất phương trình có tập nghiệm là một khoảng có độ dài bằng $2$.",
    options: [
      { key: "A", content: "$m \\in \\left\\{ -\\frac{1}{2}; 7 \\right\\}$" },
      { key: "B", content: "$m = 7$" },
      { key: "C", content: "$m = -\\frac{1}{2}$" },
      { key: "D", content: "$m \\in \\{1; 5\\}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đặt $t = 2^x > 0$. Bất phương trình trở thành:\n$$t^2 - (m + 3)t + 2m + 2 < 0 \\iff (t - 2)(t - (m + 1)) < 0.$$\nGiả sử tập nghiệm của bất phương trình theo $x$ là $(x_1; x_2)$ có độ dài $x_2 - x_1 = 2$.\nKhi đó hai nghiệm theo $t$ thỏa mãn $\\frac{t_2}{t_1} = 2^{x_2 - x_1} = 2^2 = 4$.\n- Trường hợp 1: $t_1 = 2 < t_2 = m + 1$.\n$$\\frac{m + 1}{2} = 4 \\iff m + 1 = 8 \\iff m = 7.$$\nKhi $m = 7$, tập nghiệm là $t \\in (2; 8) \\iff x \\in (1; 3)$, có độ dài $3 - 1 = 2$ (thỏa mãn).\n- Trường hợp 2: $t_1 = m + 1 < t_2 = 2$ ($m + 1 > 0$):\n$$\\frac{2}{m + 1} = 4 \\iff m + 1 = \\frac{1}{2} \\iff m = -\\frac{1}{2}.$$\nKhi $m = -1/2$, tập nghiệm là $t \\in (1/2; 2) \\iff x \\in (-1; 1)$, có độ dài $1 - (-1) = 2$ (thỏa mãn).\nVậy $m \\in \\left\\{ -\\frac{1}{2}; 7 \\right\\}$.",
    socraticHint: "Phân tích tam thức bậc hai thành nhân tử $(t - 2)(t - m - 1) < 0$ và sử dụng mối liên hệ giữa hiệu các số mũ với tỉ số giữa các luỹ thừa."
  },
  161: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\int_0^1 x f'(2x) dx = 3$ và $f(2) = 8$. Giá trị của tích phân $I = \\int_0^2 f(x) dx$ bằng:",
    options: [
      { key: "A", content: "$4$" },
      { key: "B", content: "$2$" },
      { key: "C", content: "$8$" },
      { key: "D", content: "$6$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đổi biến số $t = 2x \\Rightarrow x = \\frac{t}{2}, dx = \\frac{dt}{2}$.\nKhi $x = 0 \\Rightarrow t = 0$; khi $x = 1 \\Rightarrow t = 2$.\nTích phân trở thành:\n$$\\int_0^1 x f'(2x) dx = \\int_0^2 \\frac{t}{2} f'(t) \\frac{dt}{2} = \\frac{1}{4} \\int_0^2 t f'(t) dt = 3 \\iff \\int_0^2 t f'(t) dt = 12.$$\nÁp dụng phương pháp tích phân từng phần:\n$$\\int_0^2 t f'(t) dt = [t f(t)]_0^2 - \\int_0^2 f(t) dt = 2f(2) - I.$$\nThay $f(2) = 8$ và giá trị tích phân bằng 12:\n$$12 = 2(8) - I = 16 - I \\iff I = 16 - 12 = 4.$$",
    socraticHint: "Đổi biến số để đưa biểu thức về dạng $\\int_0^2 t f'(t) dt$, sau đó dùng tích phân từng phần."
  },
  162: {
    difficulty: "Vận dụng",
    content: "Cho hình phẳng $(H)$ giới hạn bởi parabol $(P): y = 4 - x^2$ và đường thẳng $d: y = 2 - x$. Diện tích của hình phẳng $(H)$ bằng:",
    options: [
      { key: "A", content: "$\\frac{9}{2}$" },
      { key: "B", content: "$\\frac{7}{2}$" },
      { key: "C", content: "$5$" },
      { key: "D", content: "$\\frac{11}{2}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Phương trình hoành độ giao điểm của $(P)$ và $d$:\n$$4 - x^2 = 2 - x \\iff x^2 - x - 2 = 0 \\iff x = -1 \\text{ hoặc } x = 2.$$\nDiện tích hình phẳng $(H)$ là:\n$$S = \\int_{-1}^2 [(4 - x^2) - (2 - x)] dx = \\int_{-1}^2 (2 + x - x^2) dx$$\n$$= \\left[ 2x + \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_{-1}^2 = \\left( 4 + 2 - \\frac{8}{3} \\right) - \\left( -2 + \\frac{1}{2} + \\frac{1}{3} \\right) = \\frac{10}{3} - \\left( -\\frac{7}{6} \\right) = \\frac{27}{6} = \\frac{9}{2}.$$",
    socraticHint: "Giải phương trình hoành độ giao điểm để tìm cận tích phân rồi tính tích phân hiệu hai hàm số."
  },
  163: {
    difficulty: "Vận dụng",
    content: "Cho hai hàm số $f(x)$ và $g(x)$ liên tục trên đoạn $[1; 3]$ thỏa mãn $\\int_1^3 [2f(x) + 3g(x)] dx = 10$ và $\\int_1^3 [3f(x) - g(x)] dx = 4$. Tích phân $I = \\int_1^3 [f(x) + g(x)] dx$ bằng:",
    options: [
      { key: "A", content: "$4$" },
      { key: "B", content: "$3$" },
      { key: "C", content: "$5$" },
      { key: "D", content: "$2$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đặt $A = \\int_1^3 f(x) dx$ và $B = \\int_1^3 g(x) dx$.\nTừ giả thiết ta có hệ phương trình bậc nhất hai ẩn:\n$$\\begin{cases} 2A + 3B = 10 \\\\ 3A - B = 4 \\end{cases}$$\nNhân phương trình thứ hai với 3 rồi cộng với phương trình thứ nhất:\n$$2A + 3B + 3(3A - B) = 10 + 3(4) \\iff 11A = 22 \\iff A = 2.$$\nThay $A = 2$ vào phương trình thứ hai: $B = 3(2) - 4 = 2$.\nGiá trị của tích phân cần tính:\n$$I = A + B = 2 + 2 = 4.$$",
    socraticHint: "Dùng tính chất tuyến tính của tích phân xác định để quy về giải hệ hai phương trình bậc nhất."
  },
  166: {
    difficulty: "Vận dụng",
    content: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$. Cạnh bên $SA \\perp (ABC)$ và $SA = a$. Cosin của góc giữa hai mặt phẳng $(SBC)$ và $(ABC)$ bằng:",
    options: [
      { key: "A", content: "$\\frac{\\sqrt{21}}{7}$" },
      { key: "B", content: "$\\frac{\\sqrt{7}}{7}$" },
      { key: "C", content: "$\\frac{\\sqrt{3}}{2}$" },
      { key: "D", content: "$\\frac{2\\sqrt{7}}{7}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Gọi $M$ là trung điểm của cạnh $BC$.\nVì tam giác $ABC$ đều cạnh $a$ nên $AM \\perp BC$ và $AM = \\frac{a\\sqrt{3}}{2}$.\nDo $SA \\perp (ABC)$ nên $SM \\perp BC$.\nGóc giữa mặt phẳng $(SBC)$ và mặt phẳng $(ABC)$ chính là góc $\\widehat{SMA} = \\alpha$.\nTam giác $SAM$ vuông tại $A$:\n$$SM = \\sqrt{SA^2 + AM^2} = \\sqrt{a^2 + \\frac{3a^2}{4}} = \\frac{a\\sqrt{7}}{2}.$$\nCosin của góc giữa hai mặt phẳng là:\n$$\\cos \\alpha = \\frac{AM}{SM} = \\frac{\\frac{a\\sqrt{3}}{2}}{\\frac{a\\sqrt{7}}{2}} = \\frac{\\sqrt{3}}{\\sqrt{7}} = \\frac{\\sqrt{21}}{7}.$$",
    socraticHint: "Xác định góc giữa hai mặt phẳng bằng góc giữa hai đường thẳng cùng vuông góc với giao tuyến $BC$."
  },
  167: {
    difficulty: "Vận dụng",
    content: "Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - 2y + z + 1 = 0$ và điểm $M(1; -2; 3)$. Mặt phẳng $(Q)$ song song với $(P)$ và cách điểm $M$ một khoảng bằng $3$ có phương trình là:",
    options: [
      { key: "A", content: "$2x - 2y + z = 0$" },
      { key: "B", content: "$2x - 2y + z + 9 = 0$" },
      { key: "C", content: "$2x - 2y + z - 6 = 0$" },
      { key: "D", content: "$x - y + 2z = 0$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Mặt phẳng $(Q)$ song song với $(P)$ nên có phương trình dạng:\n$$2x - 2y + z + D = 0 \\quad (D \\ne 1).$$\nKhoảng cách từ điểm $M(1; -2; 3)$ đến mặt phẳng $(Q)$ bằng $3$:\n$$d(M, (Q)) = \\frac{|2(1) - 2(-2) + 3 + D|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = 3$$\n$$\\iff \\frac{|9 + D|}{3} = 3 \\iff |9 + D| = 9 \\iff \\left[\\begin{array}{l} 9 + D = 9 \\iff D = 0 \\\\ 9 + D = -9 \\iff D = -18 \\end{array}\\right.$$\nCả hai giá trị đều thỏa mãn $D \\ne 1$.\nĐối chiếu các phương án, phương trình phù hợp là $2x - 2y + z = 0$.",
    socraticHint: "Lập phương trình chùm mặt phẳng song song dạng $2x - 2y + z + D = 0$ rồi áp dụng công thức khoảng cách."
  },
  169: {
    difficulty: "Vận dụng",
    content: "Trong không gian $Oxyz$, cho mặt cầu $(S)$ có tâm $I(1; 2; -3)$ và tiếp xúc với mặt phẳng $(P): 2x - 2y + z - 7 = 0$. Phương trình của mặt cầu $(S)$ là:",
    options: [
      { key: "A", content: "$(x - 1)^2 + (y - 2)^2 + (z + 3)^2 = 16$" },
      { key: "B", content: "$(x + 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$" },
      { key: "C", content: "$(x - 1)^2 + (y - 2)^2 + (z + 3)^2 = 4$" },
      { key: "D", content: "$(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 16$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Bán kính của mặt cầu bằng khoảng cách từ tâm $I(1; 2; -3)$ đến mặt phẳng tiếp xúc $(P)$:\n$$R = d(I, (P)) = \\frac{|2(1) - 2(2) + 1(-3) - 7|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 - 3 - 7|}{3} = \\frac{|-12|}{3} = 4.$$\nPhương trình chính tắc của mặt cầu $(S)$ có tâm $I(1; 2; -3)$ và bán kính $R = 4$ là:\n$$(x - 1)^2 + (y - 2)^2 + (z + 3)^2 = 16.$$",
    socraticHint: "Mặt cầu tiếp xúc với mặt phẳng khi và chỉ khi bán kính bằng khoảng cách từ tâm đến mặt phẳng đó."
  },
  170: {
    difficulty: "Vận dụng",
    content: "Trong mặt phẳng $Oxy$, cho đường tròn $(C): x^2 + y^2 = 9$. Từ điểm $M(5; 0)$ kẻ hai tiếp tuyến $MA, MB$ đến đường tròn $(C)$ với $A, B$ là hai tiếp điểm. Độ dài đoạn thẳng $AB$ bằng:",
    options: [
      { key: "A", content: "$\\frac{24}{5}$" },
      { key: "B", content: "$\\frac{12}{5}$" },
      { key: "C", content: "$4$" },
      { key: "D", content: "$\\frac{18}{5}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đường tròn $(C)$ có tâm $O(0; 0)$ và bán kính $R = 3$.\nKhoảng cách từ tâm đến điểm ngoài: $OM = 5$.\nTam giác $OAM$ vuông tại $A$, độ dài tiếp tuyến:\n$$MA = \\sqrt{OM^2 - OA^2} = \\sqrt{5^2 - 3^2} = 4.$$\nĐoạn nối hai tiếp điểm $AB$ vuông góc với $OM$ tại $H$. Khi đó $AH$ là đường cao của tam giác vuông $OAM$:\n$$AH = \\frac{OA \\cdot MA}{OM} = \\frac{3 \\times 4}{5} = \\frac{12}{5}.$$\nĐộ dài dây cung $AB$ là:\n$$AB = 2AH = 2 \\times \\frac{12}{5} = \\frac{24}{5}.$$",
    socraticHint: "Đoạn thẳng nối hai tiếp điểm vuông góc với đường nối tâm và điểm ngoài tại trung điểm, dùng hệ thức lượng tam giác vuông."
  },
  172: {
    difficulty: "Vận dụng",
    content: "Cho ba số thực phân biệt $a, b, c$ theo thứ tự lập thành một cấp số nhân với công bội $q$. Biết rằng đồng thời ba số $a, 2b, 3c$ theo thứ tự lập thành một cấp số cộng. Giá trị của công bội $q$ bằng:",
    options: [
      { key: "A", content: "$\\frac{1}{3}$" },
      { key: "B", content: "$3$" },
      { key: "C", content: "$\\frac{1}{2}$" },
      { key: "D", content: "$2$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Vì $a, b, c$ lập thành cấp số nhân nên $b = aq$ và $c = aq^2$ ($a \\ne 0, q \\ne 1$).\nBa số $a, 2b, 3c$ lập thành cấp số cộng nên:\n$$a + 3c = 2(2b) \\iff a + 3aq^2 = 4aq.$$\nVì $a \\ne 0$, chia cả hai vế cho $a$ ta được:\n$$3q^2 - 4q + 1 = 0 \\iff (q - 1)(3q - 1) = 0 \\iff \\left[\\begin{array}{l} q = 1 \\\\ q = \\frac{1}{3} \\end{array}\\right.$$\nDo ba số $a, b, c$ đôi một phân biệt nên $q \\ne 1$. Vậy $q = \\frac{1}{3}$.",
    socraticHint: "Biểu diễn các số hạng qua $a$ và $q$, thiết lập phương trình bậc hai từ tính chất cấp số cộng."
  },
  173: {
    difficulty: "Vận dụng",
    content: "Giới hạn $\\lim\\limits_{x \\to 1} \\frac{\\sqrt{2x + 2} - 2}{x^2 - 1}$ bằng:",
    options: [
      { key: "A", content: "$\\frac{1}{4}$" },
      { key: "B", content: "$\\frac{1}{2}$" },
      { key: "C", content: "$\\frac{1}{8}$" },
      { key: "D", content: "$1$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Nhân lượng liên hợp ở tử số:\n$$\\frac{\\sqrt{2x + 2} - 2}{x^2 - 1} = \\frac{(2x + 2) - 4}{(x - 1)(x + 1)(\\sqrt{2x + 2} + 2)} = \\frac{2(x - 1)}{(x - 1)(x + 1)(\\sqrt{2x + 2} + 2)}.$$\nKhử nhân tử chung $(x - 1)$:\n$$= \\frac{2}{(x + 1)(\\sqrt{2x + 2} + 2)}.$$\nKhi $x \\to 1$:\n$$\\lim_{x \\to 1} \\frac{2}{(x + 1)(\\sqrt{2x + 2} + 2)} = \\frac{2}{(1 + 1)(2 + 2)} = \\frac{2}{2 \\times 4} = \\frac{1}{4}.$$",
    socraticHint: "Khử dạng vô định $0/0$ bằng phương pháp nhân liên hợp."
  },
  179: {
    difficulty: "Vận dụng",
    content: "Cho mẫu số liệu ghép nhóm về năng suất lúa (đơn vị: tạ/ha) của 120 thửa ruộng: $[40; 45)$ có 15 thửa; $[45; 50)$ có 40 thửa; $[50; 55)$ có 45 thửa; $[55; 60)$ có 20 thửa. Tứ phân vị thứ hai (trung vị $Q_2$) của mẫu số liệu ghép nhóm này bằng:",
    options: [
      { key: "A", content: "$\\frac{455}{9}$" },
      { key: "B", content: "$\\frac{452}{9}$" },
      { key: "C", content: "$51$" },
      { key: "D", content: "$\\frac{460}{9}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Tổng cỡ mẫu $n = 120 \\Rightarrow \\frac{n}{2} = 60$.\nTần số tích lũy của nhóm 1 là 15, nhóm 2 là $15 + 40 = 55 < 60$, nhóm 3 là $55 + 45 = 100 \\ge 60$.\nDo đó nhóm chứa trung vị $Q_2$ là nhóm $[50; 55)$.\nÁp dụng công thức tính trung vị mẫu ghép nhóm:\n$$Q_2 = 50 + \\frac{60 - 55}{45} \\times (55 - 50) = 50 + \\frac{5}{45} \\times 5 = 50 + \\frac{5}{9} = \\frac{455}{9} \\approx 50{,}56.$$",
    socraticHint: "Xác định nhóm chứa trung vị theo tần số tích lũy rồi dùng công thức nội suy tuyến tính."
  },
  190: {
    difficulty: "Vận dụng",
    content: "Trong không gian $Oxyz$, cho hai mặt cầu $(S_1): (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 16$ và $(S_2): (x - 4)^2 + (y - 6)^2 + (z - 15)^2 = 25$. Khoảng cách giữa hai tâm của hai mặt cầu $(S_1)$ và $(S_2)$ bằng bao nhiêu?",
    correctAnswer: "13",
    acceptableAnswers: ["13"],
    detailedSolution: "Tâm của mặt cầu $(S_1)$ là $I_1(1; 2; 3)$.\nTâm của mặt cầu $(S_2)$ là $I_2(4; 6; 15)$.\nKhoảng cách giữa hai tâm $I_1$ và $I_2$ là:\n$$I_1 I_2 = \\sqrt{(4 - 1)^2 + (6 - 2)^2 + (15 - 3)^2} = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13.$$",
    socraticHint: "Xác định tọa độ hai tâm mặt cầu rồi tính độ dài đoạn thẳng nối hai điểm."
  },
  194: {
    difficulty: "Vận dụng",
    content: "Cho cấp số cộng $(u_n)$ có $u_5 = 19$ và $u_9 = 35$. Tính tổng 20 số hạng đầu tiên $S_{20}$ của cấp số cộng đó.",
    correctAnswer: "820",
    acceptableAnswers: ["820"],
    detailedSolution: "Ta có $u_9 - u_5 = 4d \\iff 35 - 19 = 16 \\iff d = 4$.\nSố hạng đầu tiên:\n$$u_1 = u_5 - 4d = 19 - 4(4) = 3.$$\nTổng 20 số hạng đầu tiên của cấp số cộng:\n$$S_{20} = \\frac{20[2u_1 + 19d]}{2} = 10[2(3) + 19(4)] = 10(6 + 76) = 10 \\times 82 = 820.$$",
    socraticHint: "Tìm công sai $d$ từ hiệu hai số hạng, suy ra $u_1$ rồi tính tổng $S_{20}$."
  },
  196: {
    difficulty: "Vận dụng",
    content: "Một hình nón có bán kính đáy $r = 6\\text{ cm}$ và độ dài đường sinh $l = 10\\text{ cm}$. Tính diện tích toàn phần của hình nón đó theo đơn vị $\\pi\\text{ cm}^2$ (chỉ điền hệ số của $\\pi$).",
    correctAnswer: "96",
    acceptableAnswers: ["96"],
    detailedSolution: "Diện tích xung quanh của hình nón:\n$$S_{xq} = \\pi r l = \\pi \\cdot 6 \\cdot 10 = 60\\pi\\text{ (cm}^2\\text{)}.$$\nDiện tích đáy của hình nón:\n$$S_{\\text{đáy}} = \\pi r^2 = \\pi \\cdot 6^2 = 36\\pi\\text{ (cm}^2\\text{)}.$$\nDiện tích toàn phần:\n$$S_{tp} = S_{xq} + S_{\\text{đáy}} = 60\\pi + 36\\pi = 96\\pi\\text{ (cm}^2\\text{)}.$$\nHệ số của $\\pi$ là $96$.",
    socraticHint: "Diện tích toàn phần của hình nón bằng diện tích xung quanh cộng với diện tích đáy hình tròn: $S_{tp} = \\pi rl + \\pi r^2$."
  },
  198: {
    difficulty: "Vận dụng",
    content: "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có các đỉnh $A(1; 4), B(3; 0), C(5; 5)$. Tính diện tích tam giác $ABC$.",
    correctAnswer: "9",
    acceptableAnswers: ["9"],
    detailedSolution: "Vectơ $\\vec{AB} = (3 - 1; 0 - 4) = (2; -4)$.\nVectơ $\\vec{AC} = (5 - 1; 5 - 4) = (4; 1)$.\nDiện tích tam giác $ABC$ được tính theo công thức định thức tọa độ:\n$$S_{ABC} = \\frac{1}{2} |x_{\\vec{AB}} y_{\\vec{AC}} - y_{\\vec{AB}} x_{\\vec{AC}}| = \\frac{1}{2} |2(1) - (-4)(4)| = \\frac{1}{2} |2 + 16| = \\frac{18}{2} = 9.$$",
    socraticHint: "Sử dụng công thức diện tích tam giác qua tọa độ hai vectơ chung đỉnh: $S = \\frac{1}{2}|x_1 y_2 - x_2 y_1|$."
  },
  233: {
    difficulty: "Vận dụng cao",
    content: "Cho hàm số $f(x)$ liên tục trên khoảng $(0; +\\infty)$ thỏa mãn $f(x) + x f'(x) = 3x^2 + 2x$ và $f(1) = 3$. Giá trị của $f(2)$ bằng:",
    options: [
      { key: "A", content: "$\\frac{13}{2}$" },
      { key: "B", content: "$6$" },
      { key: "C", content: "$7$" },
      { key: "D", content: "$\\frac{11}{2}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Nhận thấy vế trái chính là đạo hàm của một tích:\n$$[x f(x)]' = 1 \\cdot f(x) + x \\cdot f'(x) = f(x) + x f'(x).$$\nDo đó:\n$$[x f(x)]' = 3x^2 + 2x \\implies x f(x) = \\int (3x^2 + 2x) dx = x^3 + x^2 + C.$$\nThay $x = 1$ vào:\n$$1 \\cdot f(1) = 1^3 + 1^2 + C \\iff 3 = 2 + C \\iff C = 1.$$\nDo đó $x f(x) = x^3 + x^2 + 1 \\implies f(x) = x^2 + x + \\frac{1}{x}$.\nTại $x = 2$:\n$$f(2) = 2^2 + 2 + \\frac{1}{2} = 6 + 0{,}5 = \\frac{13}{2}.$$",
    socraticHint: "Nhận dạng quy tắc đạo hàm của tích $[x f(x)]' = f(x) + x f'(x)$ để tìm nguyên hàm."
  },
  281: {
    difficulty: "Vận dụng",
    content: "Cho hàm số bậc ba $y = f(x)$ có bảng biến thiên với các điểm cực trị là $x = -2$ và $x = 1$. Biết rằng $f'(x) < 0$ trên khoảng $(-2; 1)$. Hàm số $g(x) = f(x^2 - 3)$ nghịch biến trên khoảng nào dưới đây?",
    options: [
      { key: "A", content: "$(1; 2)$" },
      { key: "B", content: "$(0; 1)$" },
      { key: "C", content: "$(2; 3)$" },
      { key: "D", content: "$(-1; 0)$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Ta có $g'(x) = [x^2 - 3]' \\cdot f'(x^2 - 3) = 2x \\cdot f'(x^2 - 3)$.\nHàm số $g(x)$ nghịch biến khi và chỉ khi $g'(x) \\le 0$.\nXét với $x > 0$:\n$$g'(x) \\le 0 \\iff f'(x^2 - 3) \\le 0.$$\nTừ giả thiết, $f'(t) \\le 0 \\iff -2 \\le t \\le 1$.\nDo đó:\n$$-2 \\le x^2 - 3 \\le 1 \\iff 1 \\le x^2 \\le 4.$$\nVì $x > 0$ nên $1 \\le x \\le 2$.\nVậy hàm số $g(x)$ nghịch biến trên khoảng $(1; 2)$.",
    socraticHint: "Tính đạo hàm hàm hợp $g'(x) = 2x f'(x^2 - 3)$ rồi xét dấu với từng trường hợp của $x$."
  },
  298: {
    difficulty: "Vận dụng",
    content: "Một tổ có 10 học sinh gồm 6 bạn nam và 4 bạn nữ. Chọn ngẫu nhiên một ban cán sự gồm 5 học sinh sao cho phải có ít nhất 2 bạn nữ và ít nhất 1 bạn nam. Số cách chọn là:",
    options: [
      { key: "A", content: "$186$" },
      { key: "B", content: "$180$" },
      { key: "C", content: "$192$" },
      { key: "D", content: "$120$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Tổng số cách chọn 5 bạn bất kỳ từ 10 bạn là:\n$$n(\\Omega) = C_{10}^5 = 252\\text{ cách}.$$\nTa dùng phương pháp phần bù. Các trường hợp không thỏa mãn yêu cầu:\n- Trường hợp 1: Không có bạn nữ nào (chọn 5 bạn nam từ 6 nam): $C_6^5 = 6$ cách.\n- Trường hợp 2: Có đúng 1 bạn nữ (chọn 1 nữ từ 4 nữ và 4 nam từ 6 nam): $C_4^1 \\times C_6^4 = 4 \\times 15 = 60$ cách.\n- Trường hợp 3: Không có bạn nam nào (chọn 5 bạn nữ từ 4 nữ): không thể xảy ra (0 cách).\nTổng số cách không thỏa mãn là $6 + 60 = 66$ cách.\nSố cách chọn thỏa mãn yêu cầu là:\n$$N = 252 - 66 = 186\\text{ cách}.$$",
    socraticHint: "Dùng phương pháp biến cố đối (phần bù): lấy tổng số cách chọn trừ đi số cách chọn có 0 nữ và 1 nữ."
  }
};
