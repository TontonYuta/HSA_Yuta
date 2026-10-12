import { Question } from '../../src/types/exam';

export const DE_01_UPGRADED_QUESTIONS: Record<number, Partial<Question>> = {
  1: {
    difficulty: "Vận dụng",
    content: "Số nghiệm thuộc đoạn $[0; 2\\pi]$ của phương trình $\\cos 2x + \\sqrt{3}\\sin 2x = 2\\sin x$ là:",
    options: [
      { key: "A", content: "$4$" },
      { key: "B", content: "$3$" },
      { key: "C", content: "$2$" },
      { key: "D", content: "$5$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Chia hai vế cho 2:\n$$\\frac{1}{2}\\cos 2x + \\frac{\\sqrt{3}}{2}\\sin 2x = \\sin x \\iff \\sin\\left(2x + \\frac{\\pi}{6}\\right) = \\sin x.$$\nPhương trình tương đương:\n$$\\left[\\begin{array}{l} 2x + \\frac{\\pi}{6} = x + k2\\pi \\\\ 2x + \\frac{\\pi}{6} = \\pi - x + k2\\pi \\end{array}\\right. \\iff \\left[\\begin{array}{l} x = -\\frac{\\pi}{6} + k2\\pi \\\\ 3x = \\frac{5\\pi}{6} + k2\\pi \\iff x = \\frac{5\\pi}{18} + \\frac{k2\\pi}{3} \\end{array}\\right.$$\nXét trên đoạn $[0; 2\\pi]$:\n- Nhánh 1: $x = -\\frac{\\pi}{6} + k2\\pi$, với $k = 1 \\Rightarrow x = \\frac{11\\pi}{6}$ (1 nghiệm).\n- Nhánh 2: $x = \\frac{5\\pi}{18} + \\frac{k2\\pi}{3}$:\n  + $k = 0 \\Rightarrow x = \\frac{5\\pi}{18}$\n  + $k = 1 \\Rightarrow x = \\frac{17\\pi}{18}$\n  + $k = 2 \\Rightarrow x = \\frac{29\\pi}{18}$\n  (Có 3 nghiệm).\nCác nghiệm trên đều phân biệt và thuộc $[0; 2\\pi]$.\nTổng cộng có $1 + 3 = 4$ nghiệm.",
    socraticHint: "Đưa vế trái về dạng $\\sin(2x + \\pi/6)$ bằng phương pháp biến đổi góc phụ."
  },
  5: {
    difficulty: "Vận dụng cao",
    content: "Cho hàm số $f(x) = |x^3 - 3x + m|$. Gọi $M$ là giá trị lớn nhất của $f(x)$ trên đoạn $[0; 2]$. Giá trị nhỏ nhất có thể có của $M$ bằng:",
    options: [
      { key: "A", content: "$2$" },
      { key: "B", content: "$1$" },
      { key: "C", content: "$3$" },
      { key: "D", content: "$4$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Xét hàm số $g(x) = x^3 - 3x$ trên đoạn $[0; 2]$.\nĐạo hàm $g'(x) = 3x^2 - 3 = 0 \\iff x = 1 \\in [0; 2]$.\nGiá trị tại các điểm đặc biệt:\n- $g(0) = 0$.\n- $g(1) = -2$.\n- $g(2) = 2$.\nSuy ra $\\min_{[0; 2]} g(x) = -2$ và $\\max_{[0; 2]} g(x) = 2$.\nKhi đó:\n$$M = \\max_{[0; 2]} |g(x) + m| = \\max\\{|-2 + m|; |2 + m|\\}.$$\nÁp dụng bất đẳng thức $|a| + |b| \\ge |a - b|$:\n$$|-2 + m| + |2 + m| = |m - 2| + |m + 2| \\ge |(m + 2) - (m - 2)| = 4.$$\nSuy ra:\n$$M = \\max\\{|m - 2|; |m + 2|\\} \\ge \\frac{|m - 2| + |m + 2|}{2} \\ge \\frac{4}{2} = 2.$$\nDấu bằng xảy ra khi $|m - 2| = |m + 2| \\iff m = 0$.\nVậy giá trị nhỏ nhất của $M$ là $2$.",
    socraticHint: "Khảo sát hàm lõi $g(x) = x^3 - 3x$ trên đoạn $[0; 2]$, sau đó dùng bất đẳng thức $\\max\\{|A|, |B|\\} \\ge \\frac{|A - B|}{2}$."
  },
  6: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $y = \\frac{x^2 + 2x - 3}{x - 2}$ có đồ thị $(C)$. Khoảng cách từ gốc tọa độ $O$ đến đường tiệm cận xiên của đồ thị $(C)$ bằng:",
    options: [
      { key: "A", content: "$2\\sqrt{2}$" },
      { key: "B", content: "$\\sqrt{2}$" },
      { key: "C", content: "$4$" },
      { key: "D", content: "$2$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Chia tử số cho mẫu số:\n$$\\frac{x^2 + 2x - 3}{x - 2} = x + 4 + \\frac{5}{x - 2}.$$\nĐường tiệm cận xiên của đồ thị hàm số là $d: y = x + 4 \\iff x - y + 4 = 0$.\nKhoảng cách từ gốc tọa độ $O(0; 0)$ đến đường thẳng $d$ là:\n$$d(O, d) = \\frac{|0 - 0 + 4|}{\\sqrt{1^2 + (-1)^2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}.$$",
    socraticHint: "Thực hiện phép chia đa thức để xác định phương trình đường tiệm cận xiên $y = ax + b$, rồi áp dụng công thức khoảng cách từ điểm đến đường thẳng."
  },
  9: {
    difficulty: "Vận dụng",
    content: "Tập nghiệm của bất phương trình $\\log_{0{,}5}(x - 1) + \\log_{0{,}5}(x + 2) \\ge -2$ là:",
    options: [
      { key: "A", content: "$(1; 2]$" },
      { key: "B", content: "$[-3; 2]$" },
      { key: "C", content: "$(1; +\\infty)$" },
      { key: "D", content: "$[2; +\\infty)$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Điều kiện xác định:\n$$\\begin{cases} x - 1 > 0 \\\\ x + 2 > 0 \\end{cases} \\iff x > 1.$$\nBất phương trình tương đương:\n$$\\log_{0{,}5}[(x - 1)(x + 2)] \\ge -2 = \\log_{0{,}5} (0{,}5^{-2}) = \\log_{0{,}5} 4.$$\nVì cơ số $0 < 0{,}5 < 1$, ta đổi chiều bất đẳng thức:\n$$(x - 1)(x + 2) \\le 4 \\iff x^2 + x - 2 \\le 4 \\iff x^2 + x - 6 \\le 0 \\iff -3 \\le x \\le 2.$$\nKết hợp điều kiện $x > 1$, ta được tập nghiệm $S = (1; 2]$.",
    socraticHint: "Chú ý cơ số bé hơn 1 phải đổi chiều bất đẳng thức khi bỏ logarit và kết hợp tập xác định."
  },
  16: {
    difficulty: "Vận dụng",
    content: "Cho khối chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, góc giữa mặt bên và mặt phẳng đáy bằng $60^\\circ$. Thể tích của khối chóp $S.ABCD$ bằng:",
    options: [
      { key: "A", content: "$\\frac{a^3\\sqrt{3}}{6}$" },
      { key: "B", content: "$\\frac{a^3\\sqrt{3}}{2}$" },
      { key: "C", content: "$\\frac{a^3\\sqrt{3}}{3}$" },
      { key: "D", content: "$\\frac{a^3\\sqrt{3}}{12}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Gọi $O$ là tâm của hình vuông đáy $ABCD$, suy ra $SO \\perp (ABCD)$.\nGọi $M$ là trung điểm của cạnh $CD$, ta có $OM \\perp CD$ và $SM \\perp CD$.\nGóc giữa mặt bên $(SCD)$ và đáy là góc $\\widehat{SMO} = 60^\\circ$.\nVì $ABCD$ là hình vuông cạnh $a$ nên $OM = \\frac{a}{2}$.\nChiều cao của khối chóp:\n$$SO = OM \\cdot \\tan 60^\\circ = \\frac{a}{2} \\cdot \\sqrt{3} = \\frac{a\\sqrt{3}}{2}.$$\nDiện tích đáy $S_{ABCD} = a^2$.\nThể tích khối chóp:\n$$V = \\frac{1}{3} S_{ABCD} \\cdot SO = \\frac{1}{3} \\cdot a^2 \\cdot \\frac{a\\sqrt{3}}{2} = \\frac{a^3\\sqrt{3}}{6}.$$",
    socraticHint: "Xác định góc giữa mặt bên và mặt đáy qua trung điểm cạnh đáy để tính chiều cao $SO$."
  },
  17: {
    difficulty: "Vận dụng",
    content: "Trong không gian $Oxyz$, cho điểm $A(2; 1; -1)$ và mặt phẳng $(P): x + 2y - 2z + 3 = 0$. Tọa độ điểm $A'$ đối xứng với điểm $A$ qua mặt phẳng $(P)$ là:",
    options: [
      { key: "A", content: "$(0; -3; 3)$" },
      { key: "B", content: "$(1; -1; 1)$" },
      { key: "C", content: "$(-1; -2; 2)$" },
      { key: "D", content: "$(0; 3; -3)$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đường thẳng qua $A(2; 1; -1)$ vuông góc với mặt phẳng $(P)$ có phương trình tham số:\n$$\\begin{cases} x = 2 + t \\\\ y = 1 + 2t \\\\ z = -1 - 2t \\end{cases}$$\nGọi $H$ là hình chiếu vuông góc của $A$ lên $(P)$. Tọa độ $H$ thỏa mãn phương trình $(P)$:\n$$(2 + t) + 2(1 + 2t) - 2(-1 - 2t) + 3 = 0 \\iff 9t + 9 = 0 \\iff t = -1.$$\nSuy ra $H(1; -1; 1)$.\nVì $A'$ đối xứng với $A$ qua $(P)$, $H$ là trung điểm của đoạn thẳng $AA'$:\n$$\\begin{cases} x_{A'} = 2x_H - x_A = 2(1) - 2 = 0 \\\\ y_{A'} = 2y_H - y_A = 2(-1) - 1 = -3 \\\\ z_{A'} = 2z_H - z_A = 2(1) - (-1) = 3 \\end{cases}$$\nVậy $A'(0; -3; 3)$.",
    socraticHint: "Tìm hình chiếu vuông góc $H$ của $A$ lên $(P)$ rồi dùng công thức trung điểm tìm tọa độ điểm đối xứng $A'$."
  },
  19: {
    difficulty: "Vận dụng",
    content: "Trong không gian $Oxyz$, cho hai đường thẳng chéo nhau $d_1: \\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z + 1}{-1}$ và $d_2: \\frac{x + 1}{1} = \\frac{y - 2}{2} = \\frac{z}{1}$. Mặt phẳng $(P)$ chứa đường thẳng $d_1$ và song song với đường thẳng $d_2$ có phương trình là:",
    options: [
      { key: "A", content: "$x - y + z = 0$" },
      { key: "B", content: "$x + y + z - 2 = 0$" },
      { key: "C", content: "$x - y - z - 2 = 0$" },
      { key: "D", content: "$x + y - z = 0$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Vectơ chỉ phương của $d_1$ là $\\vec{u}_1 = (2; 1; -1)$ và của $d_2$ là $\\vec{u}_2 = (1; 2; 1)$.\nĐường thẳng $d_1$ đi qua điểm $M(1; 0; -1)$.\nVectơ pháp tuyến của mặt phẳng $(P)$ cùng phương với tích có hướng $[\vec{u}_1, \\vec{u}_2]$:\n$$[\\vec{u}_1, \\vec{u}_2] = (1(1) - (-1)(2); (-1)(1) - 2(1); 2(2) - 1(1)) = (3; -3; 3) \\sim (1; -1; 1).$$\nPhương trình mặt phẳng $(P)$ đi qua $M(1; 0; -1)$ nhận $\\vec{n} = (1; -1; 1)$ làm VTPT:\n$$1(x - 1) - 1(y - 0) + 1(z + 1) = 0 \\iff x - y + z = 0.$$\nĐiểm $N(-1; 2; 0) \\in d_2$ không thỏa mãn phương trình $(P)$ ($-1 - 2 + 0 = -3 \\ne 0$), nên $d_2 \\parallel (P)$.",
    socraticHint: "Vectơ pháp tuyến của mặt phẳng chứa $d_1$ và song song $d_2$ chính là tích có hướng của hai vectơ chỉ phương."
  },
  20: {
    difficulty: "Vận dụng",
    content: "Trong mặt phẳng $Oxy$, cho đường tròn $(C): x^2 + y^2 - 4x + 2y - 4 = 0$ và đường thẳng $d: 3x - 4y + m = 0$. Có bao nhiêu giá trị của tham số $m$ để đường thẳng $d$ tiếp xúc với đường tròn $(C)$?",
    options: [
      { key: "A", content: "$2$" },
      { key: "B", content: "$1$" },
      { key: "C", content: "$0$" },
      { key: "D", content: "$3$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đường tròn $(C)$ có tâm $I(2; -1)$ và bán kính $R = \\sqrt{2^2 + (-1)^2 - (-4)} = \\sqrt{9} = 3$.\nĐường thẳng $d$ tiếp xúc với đường tròn $(C)$ khi và chỉ khi khoảng cách từ $I$ đến $d$ bằng bán kính $R$:\n$$d(I, d) = R \\iff \\frac{|3(2) - 4(-1) + m|}{\\sqrt{3^2 + (-4)^2}} = 3$$\n$$\\iff \\frac{|10 + m|}{5} = 3 \\iff |10 + m| = 15 \\iff \\left[\\begin{array}{l} 10 + m = 15 \\iff m = 5 \\\\ 10 + m = -15 \\iff m = -25 \\end{array}\\right.$$\nVậy có đúng 2 giá trị của tham số $m$.",
    socraticHint: "Điều kiện tiếp xúc giữa đường thẳng và đường tròn là khoảng cách từ tâm đến đường thẳng bằng bán kính."
  },
  21: {
    difficulty: "Vận dụng",
    content: "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có các đỉnh $A(1; 3), B(-1; 1), C(3; 0)$. Độ dài đường cao kẻ từ đỉnh $A$ của tam giác $ABC$ bằng:",
    options: [
      { key: "A", content: "$\\frac{10\\sqrt{17}}{17}$" },
      { key: "B", content: "$\\frac{5\\sqrt{17}}{17}$" },
      { key: "C", content: "$\\frac{2\\sqrt{17}}{17}$" },
      { key: "D", content: "$\\sqrt{17}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Độ dài đường cao kẻ từ $A$ chính là khoảng cách từ điểm $A$ đến đường thẳng $BC$.\nVectơ $\\vec{BC} = (3 - (-1); 0 - 1) = (4; -1)$.\nVectơ pháp tuyến của đường thẳng $BC$ là $\\vec{n}_{BC} = (1; 4)$.\nPhương trình đường thẳng $BC$ đi qua $C(3; 0)$:\n$$1(x - 3) + 4(y - 0) = 0 \\iff x + 4y - 3 = 0.$$\nKhoảng cách từ $A(1; 3)$ đến đường thẳng $BC$:\n$$h_A = d(A, BC) = \\frac{|1 + 4(3) - 3|}{\\sqrt{1^2 + 4^2}} = \\frac{10}{\\sqrt{17}} = \\frac{10\\sqrt{17}}{17}.$$",
    socraticHint: "Lập phương trình tổng quát của đường thẳng chứa cạnh đối diện $BC$, sau đó tính khoảng cách từ đỉnh $A$ đến đường thẳng đó."
  },
  23: {
    difficulty: "Vận dụng",
    content: "Cho một cấp số nhân $(u_n)$ có công bội $q > 0$. Biết $u_2 = 6$ và $u_4 = 54$. Tổng của 8 số hạng đầu tiên của cấp số nhân đó bằng:",
    options: [
      { key: "A", content: "$6560$" },
      { key: "B", content: "$6561$" },
      { key: "C", content: "$2186$" },
      { key: "D", content: "$19682$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Ta có tỉ số giữa các số hạng:\n$$\\frac{u_4}{u_2} = q^2 = \\frac{54}{6} = 9.$$\nVì công bội $q > 0$ nên $q = 3$.\nSố hạng đầu tiên:\n$$u_1 = \\frac{u_2}{q} = \\frac{6}{3} = 2.$$\nTổng của 8 số hạng đầu tiên của cấp số nhân:\n$$S_8 = \\frac{u_1(q^8 - 1)}{q - 1} = \\frac{2(3^8 - 1)}{3 - 1} = 3^8 - 1 = 6561 - 1 = 6560.$$",
    socraticHint: "Lập tỉ số giữa hai số hạng đã cho để tìm công bội $q$, suy ra $u_1$ rồi dùng công thức tổng $S_n$."
  },
  24: {
    difficulty: "Vận dụng",
    content: "Một quả bóng cao su được thả rơi tự do từ độ cao $18\\text{ m}$ xuống mặt đất. Mỗi lần chạm đất, quả bóng nảy lên được độ cao bằng $\\frac{2}{3}$ độ cao của lần rơi ngay trước đó. Tổng quãng đường mà quả bóng di chuyển được kể từ lúc thả cho đến khi dừng hẳn bằng:",
    options: [
      { key: "A", content: "$90\\text{ m}$" },
      { key: "B", content: "$72\\text{ m}$" },
      { key: "C", content: "$54\\text{ m}$" },
      { key: "D", content: "$108\\text{ m}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Quãng đường quả bóng rơi lần đầu tiên là $h_0 = 18\\text{ m}$.\nKể từ lần chạm đất thứ nhất, mỗi lần nảy lên quả bóng di chuyển cả chiều lên và chiều xuống với độ cao $h_n = 18 \\cdot \\left(\\frac{2}{3}\\right)^n$.\nTổng quãng đường quả bóng di chuyển là:\n$$S = h_0 + 2(h_1 + h_2 + h_3 + \\dots) = 18 + 2 \\sum_{n=1}^\\infty 18 \\cdot \\left(\\frac{2}{3}\\right)^n.$$\nTổng các độ cao nảy lên là tổng của cấp số nhân lùi vô hạn với số hạng đầu $h_1 = 18 \\cdot \\frac{2}{3} = 12$ và công bội $q = \\frac{2}{3}$:\n$$\\sum_{n=1}^\\infty h_n = \\frac{12}{1 - \\frac{2}{3}} = \\frac{12}{\\frac{1}{3}} = 36\\text{ m}.$$\nDo đó tổng quãng đường là:\n$$S = 18 + 2(36) = 18 + 72 = 90\\text{ m}.$$",
    socraticHint: "Tổng quãng đường gồm độ cao thả rơi ban đầu cộng với hai lần tổng các độ cao nảy lên (cấp số nhân lùi vô hạn)."
  },
  25: {
    difficulty: "Vận dụng",
    content: "Từ các chữ số thuộc tập hợp $A = \\{1, 2, 3, 4, 5, 6, 7\\}$, lập được bao nhiêu số tự nhiên có 4 chữ số đôi một khác nhau và luôn có mặt đồng thời hai chữ số $1$ và $2$?",
    options: [
      { key: "A", content: "$240$" },
      { key: "B", content: "$120$" },
      { key: "C", content: "$480$" },
      { key: "D", content: "$360$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Để lập số có 4 chữ số đôi một khác nhau luôn có mặt 1 và 2:\n- Bước 1: Chọn 2 vị trí trong 4 vị trí cho hai chữ số 1 và 2 rồi hoán vị chúng, có $A_4^2 = 12$ cách.\n- Bước 2: Chọn 2 chữ số còn lại từ 5 chữ số $\\{3, 4, 5, 6, 7\\}$ và xếp vào 2 vị trí còn lại, có $A_5^2 = 20$ cách.\nTheo quy tắc nhân, số các số tự nhiên thỏa mãn là:\n$$N = A_4^2 \\times A_5^2 = 12 \\times 20 = 240\\text{ số}.$$",
    socraticHint: "Chọn vị trí xếp hai chữ số bắt buộc trước rồi xếp các chữ số còn lại vào các vị trí trống."
  },
  28: {
    difficulty: "Vận dụng",
    content: "Thống kê điểm thi khảo sát của 50 học sinh được cho bởi bảng tần số ghép nhóm: $[0; 4)$ có 5 học sinh; $[4; 6)$ có 15 học sinh; $[6; 8)$ có 20 học sinh; $[8; 10)$ có 10 học sinh. Mốt của mẫu số liệu ghép nhóm này bằng:",
    options: [
      { key: "A", content: "$\\frac{20}{3}$" },
      { key: "B", content: "$\\frac{19}{3}$" },
      { key: "C", content: "$7$" },
      { key: "D", content: "$\\frac{13}{2}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Nhóm có tần số lớn nhất là nhóm $[6; 8)$ với tần số $m_3 = 20$.\nTần số của nhóm trước đó: $m_2 = 15$.\nTần số của nhóm sau đó: $m_4 = 10$.\nĐộ dài nhóm: $h = 8 - 6 = 2$.\nÁp dụng công thức tính mốt của mẫu số liệu ghép nhóm:\n$$M_o = 6 + \\frac{m_3 - m_2}{(m_3 - m_2) + (m_3 - m_4)} \\times h = 6 + \\frac{20 - 15}{(20 - 15) + (20 - 10)} \\times 2$$\n$$= 6 + \\frac{5}{5 + 10} \\times 2 = 6 + \\frac{1}{3} \\times 2 = 6 + \\frac{2}{3} = \\frac{20}{3}.$$",
    socraticHint: "Xác định nhóm có tần số lớn nhất rồi dùng công thức tính mốt mẫu ghép nhóm."
  },
  29: {
    difficulty: "Vận dụng",
    content: "Mẫu số liệu ghép nhóm về thời gian hoàn thành một bài test (đơn vị: phút) của 40 học sinh: $[10; 15)$ có 6 học sinh; $[15; 20)$ có 14 học sinh; $[20; 25)$ có 12 học sinh; $[25; 30)$ có 8 học sinh. Khoảng biến thiên của mẫu số liệu ghép nhóm này bằng:",
    options: [
      { key: "A", content: "$20$" },
      { key: "B", content: "$15$" },
      { key: "C", content: "$25$" },
      { key: "D", content: "$10$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Khoảng biến thiên của mẫu số liệu ghép nhóm được tính bằng hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên:\n$$R = a_{k+1} - a_1 = 30 - 10 = 20\\text{ (phút)}.$$",
    socraticHint: "Khoảng biến thiên mẫu số liệu ghép nhóm là hiệu giữa mút trên của nhóm cao nhất và mút dưới của nhóm thấp nhất."
  },
  33: {
    difficulty: "Vận dụng",
    content: "Trong không gian $Oxyz$, cho điểm $A(2; 1; 4)$ và đường thẳng $d: \\frac{x - 1}{1} = \\frac{y - 2}{1} = \\frac{z - 1}{2}$. Tọa độ hình chiếu vuông góc của điểm $A$ lên đường thẳng $d$ là:",
    options: [
      { key: "A", content: "$(2; 3; 3)$" },
      { key: "B", content: "$(1; 2; 1)$" },
      { key: "C", content: "$(0; 1; -1)$" },
      { key: "D", content: "$(3; 4; 5)$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Phương trình tham số của $d$: $x = 1 + t, y = 2 + t, z = 1 + 2t$.\nGọi $H(1 + t; 2 + t; 1 + 2t) \\in d$ là hình chiếu vuông góc của $A$ lên $d$.\nVectơ $\\vec{AH} = (t - 1; t + 1; 2t - 3)$.\nVectơ chỉ phương của $d$ là $\\vec{u}_d = (1; 1; 2)$.\nVì $AH \\perp d$ nên:\n$$\\vec{AH} \\cdot \\vec{u}_d = 0 \\iff 1(t - 1) + 1(t + 1) + 2(2t - 3) = 0$$\n$$\\iff t - 1 + t + 1 + 4t - 6 = 0 \\iff 6t - 6 = 0 \\iff t = 1.$$\nThay $t = 1$ vào tọa độ của $H$, ta được $H(2; 3; 3)$.",
    socraticHint: "Tham số hóa tọa độ hình chiếu $H$ thuộc đường thẳng rồi dùng điều kiện tích vô hướng $\\vec{AH} \\cdot \\vec{u} = 0$."
  },
  36: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $y = \\frac{2x^2 - 3x + 5}{x - 2}$. Đường tiệm cận xiên của đồ thị hàm số đi qua điểm $M(4; y_0)$. Hãy tính giá trị của $y_0$.",
    correctAnswer: "9",
    acceptableAnswers: ["9"],
    detailedSolution: "Chia tử số cho mẫu số:\n$$2x^2 - 3x + 5 = (x - 2)(2x + 1) + 7.$$\nDo đó $y = 2x + 1 + \\frac{7}{x - 2}$.\nĐường tiệm cận xiên của đồ thị hàm số là $d: y = 2x + 1$.\nĐiểm $M(4; y_0) \\in d \\iff y_0 = 2(4) + 1 = 9$.",
    socraticHint: "Xác định phương trình tiệm cận xiên $y = ax + b$ rồi thay hoành độ $x = 4$ để tìm tung độ $y_0$."
  },
  37: {
    difficulty: "Vận dụng",
    content: "Cho phương trình $\\cos 2x + 3\\sin x - 2 = 0$. Tìm số nghiệm của phương trình thuộc đoạn $[0; 2\\pi]$.",
    correctAnswer: "3",
    acceptableAnswers: ["3"],
    detailedSolution: "Áp dụng công thức nhân đôi $\\cos 2x = 1 - 2\\sin^2 x$:\n$$1 - 2\\sin^2 x + 3\\sin x - 2 = 0 \\iff 2\\sin^2 x - 3\\sin x + 1 = 0$$\n$$\\iff (2\\sin x - 1)(\\sin x - 1) = 0 \\iff \\left[\\begin{array}{l} \\sin x = 1 \\\\ \\sin x = \\frac{1}{2} \\end{array}\\right.$$\nXét trên đoạn $[0; 2\\pi]$:\n- $\\sin x = 1$ có đúng 1 nghiệm là $x = \\frac{\\pi}{2}$.\n- $\\sin x = \\frac{1}{2}$ có đúng 2 nghiệm là $x = \\frac{\\pi}{6}$ và $x = \\frac{5\\pi}{6}$.\nCác nghiệm này phân biệt từng đôi một.\nTổng số nghiệm thuộc đoạn $[0; 2\\pi]$ là $1 + 2 = 3$.",
    socraticHint: "Đưa phương trình về dạng bậc hai theo $\\sin x$ bằng công thức $\\cos 2x = 1 - 2\\sin^2 x$."
  },
  38: {
    difficulty: "Vận dụng",
    content: "Có bao nhiêu số nguyên $x$ thỏa mãn bất phương trình $\\log_3(x^2 - 3x) \\le 2$?",
    correctAnswer: "2",
    acceptableAnswers: ["2"],
    detailedSolution: "Điều kiện xác định: $x^2 - 3x > 0 \\iff x < 0$ hoặc $x > 3$.\nBất phương trình tương đương:\n$$x^2 - 3x \\le 3^2 = 9 \\iff x^2 - 3x - 9 \\le 0.$$\nNghiệm của bất phương trình:\n$$\\frac{3 - 3\\sqrt{5}}{2} \\le x \\le \\frac{3 + 3\\sqrt{5}}{2}.$$\nVì $\\sqrt{5} \\approx 2{,}236$, nên $-1{,}85 \\le x \\le 4{,}85$.\nKết hợp điều kiện $x < 0$ hoặc $x > 3$, ta có:\n$$x \\in [-1{,}85; 0) \\cup (3; 4{,}85].$$\nCác số nguyên thỏa mãn là $x = -1$ và $x = 4$.\nVậy có đúng 2 số nguyên thỏa mãn.",
    socraticHint: "Giải bất phương trình bậc hai và kết hợp chặt chẽ với điều kiện xác định của biểu thức dưới dấu logarit."
  },
  40: {
    difficulty: "Vận dụng",
    content: "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 20 = 0$ và mặt phẳng $(P): 2x - 2y + z + 3 = 0$. Bán kính của đường tròn giao tuyến tạo bởi mặt phẳng $(P)$ và mặt cầu $(S)$ bằng bao nhiêu?",
    correctAnswer: "4",
    acceptableAnswers: ["4"],
    detailedSolution: "Mặt cầu $(S)$ có tâm $I(2; -1; 0)$ và bán kính:\n$$R = \\sqrt{2^2 + (-1)^2 + 0^2 - (-20)} = \\sqrt{4 + 1 + 20} = \\sqrt{25} = 5.$$\nKhoảng cách từ tâm $I$ đến mặt phẳng $(P)$ là:\n$$d = \\frac{|2(2) - 2(-1) + 1(0) + 3|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|4 + 2 + 3|}{\\sqrt{9}} = \\frac{9}{3} = 3.$$\nVì $d < R$ nên mặt phẳng $(P)$ cắt mặt cầu theo đường tròn có bán kính:\n$$r = \\sqrt{R^2 - d^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4.$$",
    socraticHint: "Bán kính đường tròn giao tuyến được tính theo hệ thức Pythagore $r = \\sqrt{R^2 - d^2}$."
  },
  41: {
    difficulty: "Vận dụng",
    content: "Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc với nhau tại $O$. Biết $OA = 3, OB = 4, OC = 12$. Tính bán kính $R$ của mặt cầu ngoại tiếp tứ diện $OABC$.",
    correctAnswer: "6.5",
    acceptableAnswers: ["6.5", "6,5", "13/2"],
    detailedSolution: "Đối với tứ diện vuông $OABC$ có ba cạnh $OA, OB, OC$ đôi một vuông góc tại $O$, bán kính mặt cầu ngoại tiếp được tính theo công thức:\n$$R = \\frac{\\sqrt{OA^2 + OB^2 + OC^2}}{2}.$$\nThay số:\n$$R = \\frac{\\sqrt{3^2 + 4^2 + 12^2}}{2} = \\frac{\\sqrt{9 + 16 + 144}}{2} = \\frac{\\sqrt{169}}{2} = \\frac{13}{2} = 6{,}5.$$",
    socraticHint: "Tứ diện vuông tại một đỉnh nội tiếp trong hình hộp chữ nhật có ba kích thước chính là độ dài ba cạnh bên vuông góc."
  },
  42: {
    difficulty: "Vận dụng",
    content: "Khảo sát thời gian hoàn thành một sản phẩm của 20 công nhân thu được mẫu số liệu ghép nhóm: $[10; 20)$ có 5 công nhân; $[20; 30)$ có 10 công nhân; $[30; 40)$ có 5 công nhân. Tính số trung bình của mẫu số liệu ghép nhóm này.",
    correctAnswer: "25",
    acceptableAnswers: ["25"],
    detailedSolution: "Giá trị đại diện của các nhóm:\n- Nhóm $[10; 20)$: $c_1 = 15$.\n- Nhóm $[20; 30)$: $c_2 = 25$.\n- Nhóm $[30; 40)$: $c_3 = 35$.\nSố trung bình của mẫu số liệu ghép nhóm:\n$$\\bar{x} = \\frac{5 \\times 15 + 10 \\times 25 + 5 \\times 35}{20} = \\frac{75 + 250 + 175}{20} = \\frac{500}{20} = 25.$$",
    socraticHint: "Thay mỗi khoảng bằng giá trị trung điểm đại diện rồi tính trung bình có trọng số theo tần số."
  },
  44: {
    difficulty: "Vận dụng",
    content: "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = 4$. Biết tổng của $n$ số hạng đầu tiên bằng $253$. Tìm giá trị của $n$.",
    correctAnswer: "11",
    acceptableAnswers: ["11"],
    detailedSolution: "Tổng của $n$ số hạng đầu tiên của cấp số cộng được tính theo công thức:\n$$S_n = \\frac{n[2u_1 + (n - 1)d]}{2}.$$\nThay $u_1 = 3, d = 4$ và $S_n = 253$:\n$$253 = \\frac{n[2(3) + 4(n - 1)]}{2} = \\frac{n(4n + 2)}{2} = n(2n + 1) = 2n^2 + n.$$\nPhương trình trở thành:\n$$2n^2 + n - 253 = 0.$$\nBiệt thức $\\Delta = 1^2 - 4(2)(-253) = 1 + 2024 = 2025 = 45^2$.\nNghiệm nguyên dương:\n$$n = \\frac{-1 + 45}{4} = \\frac{44}{4} = 11.$$",
    socraticHint: "Thiết lập phương trình bậc hai theo $n$ từ công thức tổng $n$ số hạng đầu của cấp số cộng."
  },
  50: {
    difficulty: "Vận dụng cao",
    content: "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và thỏa mãn $f(x) = 6x + \\frac{1}{2} \\int_0^1 f(t) dt$. Tính giá trị của $f(3)$.",
    correctAnswer: "21",
    acceptableAnswers: ["21"],
    detailedSolution: "Đặt hằng số $A = \\int_0^1 f(t) dt$. Khi đó ta có:\n$$f(x) = 6x + \\frac{1}{2}A.$$\nLấy tích phân từ $0$ đến $1$ của cả hai vế:\n$$A = \\int_0^1 \\left( 6t + \\frac{1}{2}A \\right) dt = \\left[ 3t^2 + \\frac{1}{2}At \\right]_0^1 = 3 + \\frac{1}{2}A.$$\nGiải phương trình tìm $A$:\n$$A - \\frac{1}{2}A = 3 \\iff \\frac{1}{2}A = 3 \\iff A = 6.$$\nSuy ra hàm số là $f(x) = 6x + \\frac{1}{2}(6) = 6x + 3$.\nGiá trị cần tính là:\n$$f(3) = 6(3) + 3 = 18 + 3 = 21.$$",
    socraticHint: "Đặt tích phân xác định bằng một hằng số $A$, từ đó tìm được biểu thức hàm số tường minh."
  }
};
