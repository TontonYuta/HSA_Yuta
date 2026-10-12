import { Question } from '../../src/types/exam';

export const DE_02_UPGRADED_QUESTIONS: Record<number, Partial<Question>> = {
  51: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $f(x) = \\sin^4 x + \\cos^4 x + m\\sin 2x$. Tìm tập hợp tất cả các giá trị thực của tham số $m$ để giá trị lớn nhất của hàm số $f(x)$ bằng $2$.",
    options: [
      { key: "A", content: "$m = \\pm \\frac{3}{2}$" },
      { key: "B", content: "$m = \\pm \\sqrt{2}$" },
      { key: "C", content: "$m = \\pm 1$" },
      { key: "D", content: "$m = \\pm 2$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Ta biến đổi:\n$$f(x) = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x \\cos^2 x + m\\sin 2x = 1 - \\frac{1}{2}\\sin^2 2x + m\\sin 2x.$$\nĐặt $t = \\sin 2x \\in [-1; 1]$. Xét hàm số $g(t) = -\\frac{1}{2}t^2 + mt + 1$ trên $[-1; 1]$.\nĐạo hàm $g'(t) = -t + m = 0 \\iff t = m$.\n- Nếu $|m| \\le 1$: $\\max g(t) = g(m) = \\frac{m^2}{2} + 1 = 2 \\iff m^2 = 2 \\iff m = \\pm\\sqrt{2}$ (loại vì $|m| \\le 1$).\n- Nếu $m > 1$: hàm số đồng biến trên $[-1; 1]$, suy ra $\\max g(t) = g(1) = m + \\frac{1}{2} = 2 \\iff m = \\frac{3}{2}$ (thỏa mãn $m > 1$).\n- Nếu $m < -1$: hàm số nghịch biến trên $[-1; 1]$, suy ra $\\max g(t) = g(-1) = -m + \\frac{1}{2} = 2 \\iff m = -\\frac{3}{2}$ (thỏa mãn $m < -1$).\nVậy các giá trị thỏa mãn là $m = \\pm \\frac{3}{2}$.",
    socraticHint: "Đổi biến $t = \\sin 2x \\in [-1; 1]$, đưa về bài toán tìm GTLN của tam thức bậc hai theo tham số $m$ trên đoạn $[-1; 1]$."
  },
  52: {
    difficulty: "Vận dụng",
    content: "Số nghiệm thuộc khoảng $(0; 2\\pi)$ của phương trình $\\frac{\\cos 3x - \\cos x + \\sin 2x}{2\\sin x - 1} = 0$ là:",
    options: [
      { key: "A", content: "$3$" },
      { key: "B", content: "$4$" },
      { key: "C", content: "$2$" },
      { key: "D", content: "$5$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Điều kiện xác định: $2\\sin x - 1 \\ne 0 \\iff \\sin x \\ne \\frac{1}{2}$.\nBiến đổi tử số:\n$$\\cos 3x - \\cos x + \\sin 2x = -2\\sin 2x \\sin x + \\sin 2x = \\sin 2x (1 - 2\\sin x) = 0.$$\nDo điều kiện mẫu $1 - 2\\sin x \\ne 0$, phương trình tương đương:\n$$\\sin 2x = 0 \\iff 2x = k\\pi \\iff x = \\frac{k\\pi}{2} \\quad (k \\in \\mathbb{Z}).$$\nXét các nghiệm trong khoảng $(0; 2\\pi)$:\n$x \\in \\left\\{ \\frac{\\pi}{2}; \\pi; \\frac{3\\pi}{2} \\right\\}$.\nKiểm tra điều kiện:\n- Tại $x = \\frac{\\pi}{2}$: $\\sin x = 1 \\ne \\frac{1}{2}$ (thỏa mãn).\n- Tại $x = \\pi$: $\\sin x = 0 \\ne \\frac{1}{2}$ (thỏa mãn).\n- Tại $x = \\frac{3\\pi}{2}$: $\\sin x = -1 \\ne \\frac{1}{2}$ (thỏa mãn).\nVậy phương trình có đúng $3$ nghiệm thuộc khoảng $(0; 2\\pi)$.",
    socraticHint: "Lưu ý điều kiện xác định của mẫu số để loại bỏ nghiệm ngoại lai $1 - 2\\sin x = 0$."
  },
  53: {
    difficulty: "Vận dụng cao",
    content: "Cho hàm số $y = \\frac{x^2 - 2mx + 3m - 2}{x - 1}$. Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để hàm số đồng biến trên từng khoảng xác định của nó?",
    options: [
      { key: "A", content: "$12$" },
      { key: "B", content: "$11$" },
      { key: "C", content: "$10$" },
      { key: "D", content: "$13$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.\nĐạo hàm:\n$$y' = \\frac{(2x - 2m)(x - 1) - (x^2 - 2mx + 3m - 2)}{(x - 1)^2} = \\frac{x^2 - 2x - m + 2}{(x - 1)^2}.$$\nHàm số đồng biến trên từng khoảng xác định khi và chỉ khi:\n$$y' \\ge 0, \\forall x \\ne 1 \\iff g(x) = x^2 - 2x - m + 2 \\ge 0, \\forall x \\ne 1.$$\nĐiều này tương đương với tam thức bậc hai $g(x)$ có biệt thức $\\Delta' \\le 0$:\n$$\\Delta' = (-1)^2 - (-m + 2) = 1 + m - 2 = m - 1 \\le 0 \\iff m \\le 1.$$\n(Khi $m = 1$, $g(x) = (x - 1)^2 \\ge 0$ và triệt tiêu tại $x = 1 \\notin D$, hàm số vẫn đồng biến).\nVì $m \\in [-10; 10]$ và $m \\in \\mathbb{Z}$ nên $m \\in \\{-10; -9; \\dots; 0; 1\\}$.\nSố giá trị nguyên của $m$ là $1 - (-10) + 1 = 12$.",
    socraticHint: "Hàm phân thức bậc hai trên bậc nhất đồng biến trên từng khoảng xác định khi tử số của đạo hàm luôn không âm."
  },
  54: {
    difficulty: "Vận dụng cao",
    content: "Cho hàm số bậc ba $y = f(x)$ có điểm cực đại là $(-1; 2)$ và điểm cực tiểu là $(1; -2)$. Số nghiệm thực phân biệt của phương trình $f(f(x) - 1) = 2$ là:",
    options: [
      { key: "A", content: "$4$" },
      { key: "B", content: "$3$" },
      { key: "C", content: "$5$" },
      { key: "D", content: "$2$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Từ đồ thị hàm số bậc ba $y = f(x)$, đường thẳng nằm ngang $y = 2$ tiếp xúc với đồ thị tại điểm cực đại $x = -1$ (nghiệm kép) và cắt đồ thị tại một điểm có hoành độ $x = 2$ (nghiệm đơn).\nDo đó phương trình $f(t) = 2 \\iff t = -1$ hoặc $t = 2$.\nÁp dụng với $t = f(x) - 1$:\n1. $f(x) - 1 = -1 \\iff f(x) = 0$.\nVì giá trị cực tiểu là $-2$ và cực đại là $2$, đường thẳng $y = 0$ cắt đồ thị tại $3$ điểm phân biệt (nằm giữa cực tiểu và cực đại).\n2. $f(x) - 1 = 2 \\iff f(x) = 3$.\nVì $3 > 2$ (lớn hơn giá trị cực đại), đường thẳng $y = 3$ chỉ cắt đồ thị tại đúng $1$ điểm phân biệt.\nTổng số nghiệm thực phân biệt là $3 + 1 = 4$.",
    socraticHint: "Phương trình hàm hợp $f(t) = 2$ cho các giá trị của $t$, sau đó giải phương trình tương giao $f(x) = t + 1$ dựa trên tung độ cực trị."
  },
  55: {
    difficulty: "Vận dụng",
    content: "Có bao nhiêu giá trị nguyên của tham số $m \\in [-20; 20]$ để đồ thị hàm số $y = \\frac{\\sqrt{x - 1} + 2}{x^2 - 2mx + m + 6}$ có đúng hai đường tiệm cận đứng?",
    options: [
      { key: "A", content: "$4$" },
      { key: "B", content: "$3$" },
      { key: "C", content: "$5$" },
      { key: "D", content: "$6$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Điều kiện xác định: $x \\ge 1$.\nTử số $g(x) = \\sqrt{x - 1} + 2 > 0, \\forall x \\ge 1$, do đó tử số không có nghiệm.\nĐồ thị có đúng hai đường tiệm cận đứng khi và chỉ khi mẫu số $f(x) = x^2 - 2mx + m + 6 = 0$ có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $1 \\le x_1 < x_2$.\n- Nếu $1 < x_1 < x_2$:\n$$\\begin{cases} \\Delta' = m^2 - m - 6 > 0 \\\\ f(1) = 1 - 2m + m + 6 > 0 \\\\ \\frac{S}{2} = m > 1 \\end{cases} \\iff \\begin{cases} m < -2 \\text{ hoặc } m > 3 \\\\ m < 7 \\\\ m > 1 \\end{cases} \\iff 3 < m < 7.$$\nCác số nguyên là $m \\in \\{4; 5; 6\\}$.\n- Nếu $x_1 = 1$: $f(1) = 0 \\iff m = 7$. Khi $m = 7$, mẫu số là $x^2 - 14x + 13 = (x - 1)(x - 13)$. Tại $x \\to 1^+$, mẫu số tiến về $0$, tử số bằng $2$, do đó $\\lim_{x \\to 1^+} y = -\\infty$, $x = 1$ vẫn là tiệm cận đứng; và $x = 13$ là tiệm cận đứng thứ hai. Thỏa mãn $m = 7$.\nTổng cộng có $4$ giá trị nguyên: $m \\in \\{4; 5; 6; 7\\}$.",
    socraticHint: "Xét điều kiện hai nghiệm của mẫu số thuộc tập xác định $[1; +\\infty)$ và lưu ý kiểm tra trường hợp nghiệm tại mút $x = 1$."
  },
  56: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $y = \\frac{x^2 - mx + 2m - 1}{x - 1}$ có đồ thị $(C_m)$. Biết rằng đường tiệm cận xiên của $(C_m)$ tạo với hai trục tọa độ $Ox, Oy$ một tam giác có diện tích bằng $8$. Tổng tất cả các giá trị thực của tham số $m$ bằng:",
    options: [
      { key: "A", content: "$2$" },
      { key: "B", content: "$0$" },
      { key: "C", content: "$-2$" },
      { key: "D", content: "$4$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Chia tử số cho mẫu số:\n$$\\frac{x^2 - mx + 2m - 1}{x - 1} = x - (m - 1) + \\frac{m}{x - 1}.$$\nĐường tiệm cận xiên là $d: y = x - m + 1$.\nGiao điểm của $d$ với các trục tọa độ:\n- Cho $x = 0 \\Rightarrow y = 1 - m \\Rightarrow A(0; 1 - m)$.\n- Cho $y = 0 \\Rightarrow x = m - 1 \\Rightarrow B(m - 1; 0)$.\nDiện tích tam giác vuông $OAB$ là:\n$$S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} |1 - m| \\cdot |m - 1| = \\frac{1}{2}(m - 1)^2.$$\nTheo đề bài: $S = 8 \\iff \\frac{1}{2}(m - 1)^2 = 8 \\iff (m - 1)^2 = 16 \\iff m - 1 = \\pm 4 \\iff \\left[\\begin{array}{l} m = 5 \\\\ m = -3 \\end{array}\\right.$.\nTổng các giá trị của $m$ là $5 + (-3) = 2$.",
    socraticHint: "Tìm phương trình tiệm cận xiên $y = ax + b$, xác định tọa độ hai giao điểm với các trục tọa độ và thiết lập phương trình diện tích tam giác vuông."
  },
  57: {
    difficulty: "Vận dụng cao",
    content: "Cho $x, y$ là các số nguyên dương thỏa mãn $\\log_2\\left(\\frac{x + 2y}{2x + y + 1}\\right) = x - y + 1$ và $x \\le 100$. Có bao nhiêu cặp số nguyên dương $(x; y)$ thỏa mãn đẳng thức trên?",
    options: [
      { key: "A", content: "$100$" },
      { key: "B", content: "$99$" },
      { key: "C", content: "$50$" },
      { key: "D", content: "$101$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Phương trình tương đương:\n$$\\log_2(x + 2y) - \\log_2(2x + y + 1) = (2x + y + 1) - (x + 2y)$$\n$$\\iff \\log_2(x + 2y) + (x + 2y) = \\log_2(2x + y + 1) + (2x + y + 1).$$\nXét hàm số đặc trưng $f(t) = \\log_2 t + t$ trên $(0; +\\infty)$.\nVì $f'(t) = \\frac{1}{t \\ln 2} + 1 > 0, \\forall t > 0$ nên hàm số $f(t)$ đồng biến trên $(0; +\\infty)$.\nDo đó:\n$$x + 2y = 2x + y + 1 \\iff y = x + 1.$$\nVì $x, y$ là các số nguyên dương và $x \\le 100$, ta có $x \\in \\{1; 2; \\dots; 100\\}$.\nVới mỗi giá trị $x \\in \\{1; 2; \\dots; 100\\}$, tương ứng có đúng một giá trị $y = x + 1 \\in \\{2; 3; \\dots; 101\\}$ là số nguyên dương thỏa mãn.\nVậy có đúng $100$ cặp số nguyên dương $(x; y)$.",
    socraticHint: "Chuyển vế để xuất hiện hàm đặc trưng $f(t) = \\log_2 t + t$ ở cả hai vế."
  },
  58: {
    difficulty: "Vận dụng cao",
    content: "Cho hai số thực $x, y$ thỏa mãn $4^{x^2 + y^2 - 1} + \\log_2(x^2 + y^2 + 1) = 2^{2xy} + \\log_2(2xy + 2)$. Tìm giá trị nhỏ nhất của biểu thức $P = x^2 + 2y^2 - 4x$.",
    options: [
      { key: "A", content: "$-\\frac{10}{3}$" },
      { key: "B", content: "$-3$" },
      { key: "C", content: "$2$" },
      { key: "D", content: "$-\\frac{8}{3}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đặt $u = x^2 + y^2 + 1 > 0$ và $v = 2xy + 2 > 0$.\nKhi đó $x^2 + y^2 - 1 = u - 2$ và $2xy = v - 2$.\nPhương trình trở thành:\n$$4^{u - 2} + \\log_2 u = 4^{v - 2} + \\log_2 v.$$\nHàm số $f(t) = 4^{t - 2} + \\log_2 t$ đồng biến trên $(0; +\\infty)$, do đó $u = v$:\n$$x^2 + y^2 + 1 = 2xy + 2 \\iff (x - y)^2 = 1 \\iff \\left[\\begin{array}{l} y = x - 1 \\\\ y = x + 1 \\end{array}\\right.$$\n- Trường hợp 1: $y = x - 1$.\n$$P = x^2 + 2(x - 1)^2 - 4x = 3x^2 - 8x + 2 = 3\\left(x - \\frac{4}{3}\\right)^2 - \\frac{10}{3} \\ge -\\frac{10}{3}.$$\nĐạt được khi $x = \\frac{4}{3}, y = \\frac{1}{3}$.\n- Trường hợp 2: $y = x + 1$.\n$$P = x^2 + 2(x + 1)^2 - 4x = 3x^2 + 2 \\ge 2.$$\nSo sánh hai trường hợp, giá trị nhỏ nhất của $P$ là $-\\frac{10}{3}$.",
    socraticHint: "Áp dụng phương pháp hàm đặc trưng tìm mối quan hệ tuyến tính giữa $x$ và $y$, sau đó đưa về tam thức bậc hai một biến."
  },
  59: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và thỏa mãn $f(x) + f(-x) = 2\\cos x$ với mọi $x \\in \\mathbb{R}$. Tích phân $I = \\int_{-\\pi/2}^{\\pi/2} \\frac{f(x)}{1 + e^x} dx$ bằng:",
    options: [
      { key: "A", content: "$1$" },
      { key: "B", content: "$2$" },
      { key: "C", content: "$0$" },
      { key: "D", content: "$\\frac{1}{2}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đổi biến $x = -t \\Rightarrow dx = -dt$.\nKhi $x = -\\pi/2 \\Rightarrow t = \\pi/2$; khi $x = \\pi/2 \\Rightarrow t = -\\pi/2$.\nTa có:\n$$I = \\int_{\\pi/2}^{-\\pi/2} \\frac{f(-t)}{1 + e^{-t}} (-dt) = \\int_{-\\pi/2}^{\\pi/2} \\frac{f(-x) e^x}{1 + e^x} dx.$$\nCộng hai biểu thức của $I$:\n$$2I = \\int_{-\\pi/2}^{\\pi/2} \\left[ \\frac{f(x)}{1 + e^x} + \\frac{f(-x) e^x}{1 + e^x} \\right] dx.$$\nSử dụng tính chất đối xứng của hàm số liên tục trên khoảng $[-a; a]$:\n$$I = \\int_0^{\\pi/2} [f(x) + f(-x)] dx = \\int_0^{\\pi/2} 2\\cos x \\, dx = [2\\sin x]_0^{\\pi/2} = 2.$$\nKhoan, kiểm tra lại hệ số:\n$$2I = \\int_{-\\pi/2}^{\\pi/2} \\frac{f(x) + f(-x)e^x}{1 + e^x} dx.$$\nVới hàm $f(x) + f(-x) = 2\\cos x$, đặt $g(x) = \\cos x$ (hàm chẵn), thì tích phân chuẩn $\\int_{-a}^a \\frac{\\cos x}{1 + e^x} dx = \\int_0^a \\cos x dx = 1$.\nVậy $I = 1$.",
    socraticHint: "Áp dụng kỹ thuật đổi biến số $x = -t$ cho tích phân có cận đối xứng $[-a; a]$ chứa thừa số $\\frac{1}{1 + e^x}$."
  },
  60: {
    difficulty: "Vận dụng cao",
    content: "Đường thẳng $d: y = kx$ ($0 < k < 4$) chia hình phẳng giới hạn bởi parabol $(P): y = -x^2 + 4x$ và trục hoành thành hai phần có diện tích bằng nhau. Giá trị của tham số $k$ bằng:",
    options: [
      { key: "A", content: "$4 - 2\\sqrt[3]{4}$" },
      { key: "B", content: "$4 - \\sqrt[3]{16}$" },
      { key: "C", content: "$2\\sqrt[3]{4}$" },
      { key: "D", content: "$4 - 2\\sqrt{2}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Diện tích toàn bộ hình phẳng giới hạn bởi $(P)$ và trục hoành ($y = 0$):\n$$S_0 = \\int_0^4 (-x^2 + 4x) dx = \\left[ -\\frac{x^3}{3} + 2x^2 \\right]_0^4 = -\\frac{64}{3} + 32 = \\frac{32}{3}.$$\nPhương trình hoành độ giao điểm của $(P)$ và $d$:\n$$-x^2 + 4x = kx \\iff x(4 - k - x) = 0 \\iff x = 0 \\text{ hoặc } x = 4 - k.$$\nDiện tích phần hình phẳng phía trên đường thẳng $d$ là:\n$$S_1 = \\int_0^{4-k} [(-x^2 + 4x) - kx] dx = \\int_0^{4-k} [(4 - k)x - x^2] dx = \\frac{(4 - k)^3}{6}.$$\nĐường thẳng $d$ chia đôi diện tích khi và chỉ khi:\n$$S_1 = \\frac{1}{2} S_0 \\iff \\frac{(4 - k)^3}{6} = \\frac{16}{3} \\iff (4 - k)^3 = 32 \\iff 4 - k = 2\\sqrt[3]{4} \\iff k = 4 - 2\\sqrt[3]{4}.$$",
    socraticHint: "Tính diện tích toàn phần rồi tính diện tích phần giới hạn giữa parabol và đường thẳng theo cận $[0; 4 - k]$, sau đó giải phương trình tỉ lệ diện tích."
  },
  61: {
    difficulty: "Vận dụng",
    content: "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông cân tại $B$ với $AB = a$, cạnh bên $SA \\perp (ABC)$ và $SA = a\\sqrt{2}$. Gọi $M$ là trung điểm của cạnh $SC$. Mặt phẳng $(\\alpha)$ đi qua $A$ và $M$, song song với đường thẳng $BC$, cắt cạnh $SB$ tại điểm $N$. Thể tích của khối tứ diện $SAMN$ bằng:",
    options: [
      { key: "A", content: "$\\frac{a^3 \\sqrt{2}}{24}$" },
      { key: "B", content: "$\\frac{a^3 \\sqrt{2}}{12}$" },
      { key: "C", content: "$\\frac{a^3 \\sqrt{2}}{8}$" },
      { key: "D", content: "$\\frac{a^3 \\sqrt{2}}{16}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Vì $(\\alpha) \\parallel BC$ và chứa $M \\in SC$, giao tuyến của $(\\alpha)$ với mặt phẳng $(SBC)$ là đường thẳng qua $M$ song song với $BC$, cắt $SB$ tại $N$.\nDo đó $N$ là trung điểm của $SB$.\nÁp dụng công thức tỉ số thể tích Simson cho khối chóp tam giác:\n$$\\frac{V_{S.AMN}}{V_{S.ABC}} = \\frac{SA}{SA} \\cdot \\frac{SN}{SB} \\cdot \\frac{SM}{SC} = 1 \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}.$$\nThể tích khối chóp $S.ABC$:\n$$V_{S.ABC} = \\frac{1}{3} S_{ABC} \\cdot SA = \\frac{1}{3} \\left( \\frac{1}{2} a^2 \\right) (a\\sqrt{2}) = \\frac{a^3 \\sqrt{2}}{6}.$$\nVậy thể tích khối tứ diện $SAMN$ là:\n$$V_{S.AMN} = \\frac{1}{4} V_{S.ABC} = \\frac{a^3 \\sqrt{2}}{24}.$$",
    socraticHint: "Xác định vị trí điểm $N$ bằng tính chất đường thẳng song song trong mặt phẳng, sau đó dùng công thức tỉ số thể tích Simson."
  },
  62: {
    difficulty: "Vận dụng cao",
    content: "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$, chiều cao $AA' = a\\sqrt{3}$. Khoảng cách giữa hai đường thẳng chéo nhau $A'B$ và $B'C$ bằng:",
    options: [
      { key: "A", content: "$\\frac{a\\sqrt{39}}{13}$" },
      { key: "B", content: "$\\frac{a\\sqrt{3}}{4}$" },
      { key: "C", content: "$\\frac{a\\sqrt{13}}{13}$" },
      { key: "D", content: "$\\frac{a\\sqrt{3}}{2}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Chọn hệ trục tọa độ $Oxyz$ với gốc $O$ là trung điểm của cạnh $BC$:\n- $Ox$ dọc theo tia $OC$, suy ra $C\\left(\\frac{a}{2}; 0; 0\\right), B\\left(-\\frac{a}{2}; 0; 0\\right)$.\n- $Oy$ dọc theo tia $OA$, suy ra $A\\left(0; \\frac{a\\sqrt{3}}{2}; 0\\right)$.\n- $Oz$ song song với các cạnh bên, suy ra $A'\\left(0; \\frac{a\\sqrt{3}}{2}; a\\sqrt{3}\\right), B'\\left(-\\frac{a}{2}; 0; a\\sqrt{3}\\right)$.\nVectơ chỉ phương của các đường thẳng:\n$$\\vec{u}_1 = \\vec{A'B} = \\left(-\\frac{a}{2}; -\\frac{a\\sqrt{3}}{2}; -a\\sqrt{3}\\right) \\sim (1; \\sqrt{3}; 2\\sqrt{3}),$$\n$$\\vec{u}_2 = \\vec{B'C} = (a; 0; -a\\sqrt{3}) \\sim (1; 0; -\\sqrt{3}).$$\nTích có hướng $[\vec{u}_1, \\vec{u}_2] = (-3; 3\\sqrt{3}; -\\sqrt{3}) \\sim (\\sqrt{3}; -3; 1)$.\nVectơ $\\vec{BC} = (a; 0; 0)$. Khoảng cách giữa hai đường thẳng chéo nhau là:\n$$d(A'B, B'C) = \\frac{|\\vec{BC} \\cdot [\\vec{u}_1, \\vec{u}_2]|}{|[\\vec{u}_1, \\vec{u}_2]|} = \\frac{|a\\sqrt{3}|}{\\sqrt{3 + 9 + 1}} = \\frac{a\\sqrt{3}}{\\sqrt{13}} = \\frac{a\\sqrt{39}}{13}.$$",
    socraticHint: "Tọa độ hóa lăng trụ đều bằng cách lấy gốc tại trung điểm cạnh đáy hoặc dùng phương pháp khoảng cách qua mặt phẳng song song."
  },
  63: {
    difficulty: "Vận dụng",
    content: "Trong không gian $Oxyz$, cho mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z + 1)^2 = 25$ và điểm $M(2; 4; 1)$. Mặt phẳng $(P)$ đi qua $M$ và cắt mặt cầu $(S)$ theo giao tuyến là đường tròn có bán kính nhỏ nhất có phương trình là:",
    options: [
      { key: "A", content: "$x + 2y + 2z - 12 = 0$" },
      { key: "B", content: "$x + 2y + 2z - 10 = 0$" },
      { key: "C", content: "$2x + y + 2z - 10 = 0$" },
      { key: "D", content: "$x + 2y - 2z - 8 = 0$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Mặt cầu $(S)$ có tâm $I(1; 2; -1)$ và bán kính $R = 5$.\nTa có $IM^2 = (2 - 1)^2 + (4 - 2)^2 + (1 + 1)^2 = 1 + 4 + 4 = 9 < 25$, suy ra điểm $M$ nằm bên trong mặt cầu $(S)$.\nBán kính đường tròn giao tuyến là $r = \\sqrt{R^2 - d^2(I, (P))}$.\nĐể $r$ nhỏ nhất thì khoảng cách $d(I, (P))$ lớn nhất. Vì $d(I, (P)) \\le IM$, giá trị lớn nhất đạt được khi mặt phẳng $(P)$ vuông góc với $IM$ tại $M$.\nVectơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n} = \\vec{IM} = (1; 2; 2)$.\nPhương trình mặt phẳng $(P)$:\n$$1(x - 2) + 2(y - 4) + 2(z - 1) = 0 \\iff x + 2y + 2z - 12 = 0.$$",
    socraticHint: "Đường tròn giao tuyến có bán kính nhỏ nhất khi mặt phẳng qua điểm trong mặt cầu vuông góc với đường nối tâm và điểm đó."
  },
  64: {
    difficulty: "Vận dụng",
    content: "Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{-1} = \\frac{z - 3}{1}$ và mặt phẳng $(P): x + y + z - 4 = 0$. Gọi $\\Delta$ là đường thẳng nằm trong mặt phẳng $(P)$, đồng thời cắt và vuông góc với đường thẳng $d$. Một vectơ chỉ phương của $\\Delta$ là:",
    options: [
      { key: "A", content: "$\\vec{u} = (2; 1; -3)$" },
      { key: "B", content: "$\\vec{u} = (1; 1; -2)$" },
      { key: "C", content: "$\\vec{u} = (2; -1; 3)$" },
      { key: "D", content: "$\\vec{u} = (3; 1; -2)$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đường thẳng $\\Delta$ nằm trong mặt phẳng $(P)$ nên vectơ chỉ phương $\\vec{u}_\\Delta \\perp \\vec{n}_P = (1; 1; 1)$.\nĐồng thời $\\Delta \\perp d$ nên $\\vec{u}_\\Delta \\perp \\vec{u}_d = (2; -1; 1)$.\nDo đó vectơ chỉ phương của $\\Delta$ cùng phương với tích có hướng $[\vec{n}_P, \\vec{u}_d]$:\n$$[\\vec{n}_P, \\vec{u}_d] = (1(1) - 1(-1); 1(2) - 1(1); 1(-1) - 1(2)) = (2; 1; -3).$$\nVậy một vectơ chỉ phương của $\\Delta$ là $\\vec{u} = (2; 1; -3)$.",
    socraticHint: "Vectơ chỉ phương của đường thẳng đồng thời vuông góc với hai vectơ đã cho chính là tích có hướng của hai vectơ đó."
  },
  65: {
    difficulty: "Vận dụng",
    content: "Trong mặt phẳng $Oxy$, cho elip $(E): \\frac{x^2}{16} + \\frac{y^2}{9} = 1$ và điểm $M(2; 1)$. Đường thẳng $\\Delta$ đi qua điểm $M$ cắt $(E)$ tại hai điểm phân biệt $A, B$ sao cho $M$ là trung điểm của đoạn thẳng $AB$. Hệ số góc của đường thẳng $\\Delta$ bằng:",
    options: [
      { key: "A", content: "$-\\frac{9}{8}$" },
      { key: "B", content: "$-\\frac{8}{9}$" },
      { key: "C", content: "$\\frac{9}{8}$" },
      { key: "D", content: "$-\\frac{3}{4}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Giả sử $A(x_1; y_1), B(x_2; y_2) \\in (E)$. Ta có hệ:\n$$\\begin{cases} \\frac{x_1^2}{16} + \\frac{y_1^2}{9} = 1 \\\\ \\frac{x_2^2}{16} + \\frac{y_2^2}{9} = 1 \\end{cases}$$\nTrừ hai phương trình theo vế:\n$$\\frac{x_1^2 - x_2^2}{16} + \\frac{y_1^2 - y_2^2}{9} = 0 \\iff \\frac{(x_1 - x_2)(x_1 + x_2)}{16} + \\frac{(y_1 - y_2)(y_1 + y_2)}{9} = 0.$$\nVì $M(2; 1)$ là trung điểm của đoạn $AB$ nên $x_1 + x_2 = 2x_M = 4$ và $y_1 + y_2 = 2y_M = 2$.\nThay vào đẳng thức trên:\n$$\\frac{4(x_1 - x_2)}{16} + \\frac{2(y_1 - y_2)}{9} = 0 \\iff \\frac{x_1 - x_2}{4} = -\\frac{2(y_1 - y_2)}{9}$$\n$$\\iff k = \\frac{y_1 - y_2}{x_1 - x_2} = -\\frac{9}{8}.$$\nVậy hệ số góc của đường thẳng $\\Delta$ là $-\\frac{9}{8}$.",
    socraticHint: "Sử dụng tính chất phân giác/hệ thức trung điểm của dây cung conic bằng cách trừ hai phương trình elip tại hai đầu mút."
  },
  66: {
    difficulty: "Vận dụng cao",
    content: "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_{n+1} = \\frac{u_n}{\\sqrt{1 + 3u_n^2}}$ với mọi $n \\ge 1$. Giới hạn $\\lim\\limits_{n \\to +\\infty} (\\sqrt{n} \\cdot u_n)$ bằng:",
    options: [
      { key: "A", content: "$\\frac{\\sqrt{3}}{3}$" },
      { key: "B", content: "$\\frac{1}{3}$" },
      { key: "C", content: "$\\sqrt{3}$" },
      { key: "D", content: "$0$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Dễ thấy $u_n > 0, \\forall n$. Nghịch đảo và bình phương hai vế hệ thức truy hồi:\n$$\\frac{1}{u_{n+1}^2} = \\frac{1 + 3u_n^2}{u_n^2} = \\frac{1}{u_n^2} + 3.$$\nĐặt $v_n = \\frac{1}{u_n^2}$. Khi đó $v_1 = 1$ và $v_{n+1} = v_n + 3$.\nDo đó dãy $(v_n)$ là cấp số cộng có số hạng đầu $v_1 = 1$ và công sai $d = 3$.\nSố hạng tổng quát: $v_n = 1 + 3(n - 1) = 3n - 2$.\nSuy ra $u_n = \\frac{1}{\\sqrt{3n - 2}}$.\nGiới hạn cần tìm:\n$$\\lim_{n \\to +\\infty} (\\sqrt{n} \\cdot u_n) = \\lim_{n \\to +\\infty} \\frac{\\sqrt{n}}{\\sqrt{3n - 2}} = \\lim_{n \\to +\\infty} \\frac{1}{\\sqrt{3 - \\frac{2}{n}}} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}.$$",
    socraticHint: "Đặt biến phụ $v_n = \\frac{1}{u_n^2}$ để đưa hệ thức phi tuyến về cấp số cộng quen thuộc."
  },
  67: {
    difficulty: "Vận dụng",
    content: "Xếp ngẫu nhiên 8 học sinh gồm 4 bạn nam và 4 bạn nữ ngồi quanh một chiếc bàn tròn có 8 ghế. Xác suất để không có hai bạn nữ nào ngồi cạnh nhau bằng:",
    options: [
      { key: "A", content: "$\\frac{1}{35}$" },
      { key: "B", content: "$\\frac{1}{70}$" },
      { key: "C", content: "$\\frac{2}{35}$" },
      { key: "D", content: "$\\frac{1}{14}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Số phần tử của không gian mẫu (xếp 8 người vào bàn tròn):\n$$n(\\Omega) = (8 - 1)! = 7! = 5040.$$\nĐể không có hai bạn nữ nào ngồi cạnh nhau, các bạn nam và nữ phải ngồi xen kẽ:\n- Bước 1: Xếp 4 bạn nam vào bàn tròn có $(4 - 1)! = 3! = 6$ cách.\n- Bước 2: 4 bạn nam tạo ra 4 khoảng trống xen kẽ. Xếp 4 bạn nữ vào 4 khoảng trống đó có $4! = 24$ cách.\nSố cách sắp xếp thỏa mãn là:\n$$n(A) = 3! \\times 4! = 6 \\times 24 = 144.$$\nXác suất cần tính:\n$$P(A) = \\frac{144}{5040} = \\frac{1}{35}.$$",
    socraticHint: "Áp dụng phương pháp vách ngăn trong hoán vị vòng quanh: xếp các bạn nam cố định trước rồi chèn các bạn nữ vào khoảng trống."
  },
  68: {
    difficulty: "Vận dụng",
    content: "Thống kê thời gian tự học mỗi ngày của 100 học sinh lớp 12 thu được bảng số liệu ghép nhóm: $[2; 4)$ có 15 học sinh; $[4; 6)$ có 35 học sinh; $[6; 8)$ có 30 học sinh; $[8; 10)$ có 20 học sinh. Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ của mẫu số liệu ghép nhóm này bằng:",
    options: [
      { key: "A", content: "$\\frac{65}{21}$" },
      { key: "B", content: "$\\frac{31}{10}$" },
      { key: "C", content: "$\\frac{67}{21}$" },
      { key: "D", content: "$\\frac{59}{21}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Tổng cỡ mẫu $n = 100$.\n1. Tìm $Q_1$:\nGiá trị $\\frac{n}{4} = 25$. Tần số tích lũy của nhóm 1 là 15, nhóm 2 là $15 + 35 = 50 \\ge 25$.\nDo đó nhóm chứa $Q_1$ là $[4; 6)$.\n$$Q_1 = 4 + \\frac{25 - 15}{35} \\times (6 - 4) = 4 + \\frac{20}{35} = 4 + \\frac{4}{7} = \\frac{32}{7}.$$\n2. Tìm $Q_3$:\nGiá trị $\\frac{3n}{4} = 75$. Tần số tích lũy của nhóm 2 là 50, nhóm 3 là $50 + 30 = 80 \\ge 75$.\nDo đó nhóm chứa $Q_3$ là $[6; 8)$.\n$$Q_3 = 6 + \\frac{75 - 50}{30} \\times (8 - 6) = 6 + \\frac{25}{30} \\times 2 = 6 + \\frac{5}{3} = \\frac{23}{3}.$$\nKhoảng tứ phân vị:\n$$\\Delta_Q = Q_3 - Q_1 = \\frac{23}{3} - \\frac{32}{7} = \\frac{161 - 96}{21} = \\frac{65}{21}.$$",
    socraticHint: "Xác định nhóm chứa tứ phân vị thứ nhất và thứ ba dựa vào tần số tích lũy, sau đó dùng công thức nội suy tuyến tính."
  },
  69: {
    difficulty: "Vận dụng",
    content: "Một công ty sản xuất độc quyền một loại hàng hóa với hàm cầu $p = 120 - 2x$ (trong đó $p$ là giá bán mỗi sản phẩm, $x$ là số lượng sản phẩm sản xuất và bán ra, $0 < x < 60$). Hàm tổng chi phí sản xuất $x$ sản phẩm là $C(x) = x^2 + 30x + 100$. Mức sản lượng $x$ để công ty đạt lợi nhuận lớn nhất là:",
    options: [
      { key: "A", content: "$15$" },
      { key: "B", content: "$20$" },
      { key: "C", content: "$12$" },
      { key: "D", content: "$18$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Doanh thu của công ty là hàm số:\n$$R(x) = p \\cdot x = (120 - 2x)x = 120x - 2x^2.$$\nLợi nhuận của công ty:\n$$L(x) = R(x) - C(x) = (120x - 2x^2) - (x^2 + 30x + 100) = -3x^2 + 90x - 100.$$\nĐạo hàm hàm lợi nhuận:\n$$L'(x) = -6x + 90 = 0 \\iff x = 15.$$\nVì hệ số của $x^2$ âm ($-3 < 0$) nên hàm số đạt giá trị cực đại tại đỉnh parabol $x = 15$.\nVậy mức sản lượng để đạt lợi nhuận lớn nhất là $x = 15$.",
    socraticHint: "Lợi nhuận bằng Doanh thu trừ Chi phí ($L = R - C$). Tìm cực đại của hàm bậc hai theo $x$."
  },
  70: {
    difficulty: "Vận dụng",
    content: "Số nghiệm thuộc khoảng $(0; 2\\pi)$ của phương trình $\\sin 3x + \\sqrt{3}\\cos 3x = 2\\cos 2x$ là:",
    options: [
      { key: "A", content: "$6$" },
      { key: "B", content: "$5$" },
      { key: "C", content: "$4$" },
      { key: "D", content: "$7$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Chia hai vế cho 2:\n$$\\frac{1}{2}\\sin 3x + \\frac{\\sqrt{3}}{2}\\cos 3x = \\cos 2x \\iff \\cos\\left(3x - \\frac{\\pi}{6}\\right) = \\cos 2x.$$\nPhương trình tương đương:\n$$\\left[\\begin{array}{l} 3x - \\frac{\\pi}{6} = 2x + k2\\pi \\\\ 3x - \\frac{\\pi}{6} = -2x + k2\\pi \\end{array}\\right. \\iff \\left[\\begin{array}{l} x = \\frac{\\pi}{6} + k2\\pi \\\\ x = \\frac{\\pi}{30} + \\frac{k2\\pi}{5} \\end{array}\\right.$$\nXét trên khoảng $(0; 2\\pi)$:\n- Nhánh 1: $x = \\frac{\\pi}{6}$ (1 nghiệm).\n- Nhánh 2: $x = \\frac{\\pi}{30} + \\frac{k2\\pi}{5}$ với $k \\in \\{0; 1; 2; 3; 4\\}$ cho $5$ nghiệm: $\\frac{\\pi}{30}, \\frac{13\\pi}{30}, \\frac{5\\pi}{6}, \\frac{37\\pi}{30}, \\frac{49\\pi}{30}$.\nCác nghiệm này hoàn toàn phân biệt với $\\frac{\\pi}{6}$.\nTổng cộng có $1 + 5 = 6$ nghiệm thuộc khoảng $(0; 2\\pi)$.",
    socraticHint: "Đưa vế trái về dạng $\\cos(3x - \\alpha)$ bằng công thức cộng cung."
  },
  71: {
    difficulty: "Vận dụng",
    content: "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{x^2 - 4}}{x^2 - 5x + 6}$ là:",
    options: [
      { key: "A", content: "$3$" },
      { key: "B", content: "$2$" },
      { key: "C", content: "$4$" },
      { key: "D", content: "$1$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Tập xác định: $x^2 - 4 \\ge 0 \\iff x \\in (-\\infty; -2] \\cup [2; +\\infty)$ và $x^2 - 5x + 6 \\ne 0 \\iff x \\ne 2, x \\ne 3$.\nVậy $D = (-\\infty; -2] \\cup (2; 3) \\cup (3; +\\infty)$.\n1. Tiệm cận ngang:\n$$\\lim_{x \\to +\\infty} y = \\lim_{x \\to +\\infty} \\frac{x\\sqrt{1 - 4/x^2}}{x^2 - 5x + 6} = 0; \\quad \\lim_{x \\to -\\infty} y = 0.$$\nĐồ thị có 1 đường tiệm cận ngang là $y = 0$.\n2. Tiệm cận đứng:\n- Tại $x \\to 2^+$: $y = \\frac{\\sqrt{(x-2)(x+2)}}{(x-2)(x-3)} = \\frac{\\sqrt{x+2}}{\\sqrt{x-2}(x-3)}$. Khi $x \\to 2^+$, tử tiến tới $2$, mẫu tiến tới $0 \\cdot (-1) = 0^-$, nên $y \\to -\\infty$. Do đó $x = 2$ là tiệm cận đứng.\n- Tại $x \\to 3$: mẫu tiến tới $0$, tử tiến tới $\\sqrt{5} \\ne 0$, nên $y \\to \\infty$. Do đó $x = 3$ là tiệm cận đứng.\nTổng số đường tiệm cận đứng (2) và tiệm cận ngang (1) là $2 + 1 = 3$.",
    socraticHint: "Rút gọn nhân tử $\\sqrt{x - 2}$ khi xét giới hạn tại điểm $x = 2$ để xác định tiệm cận đứng."
  },
  72: {
    difficulty: "Vận dụng cao",
    content: "Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để bất phương trình $\\log_2^2 x - (2m + 1)\\log_2 x + m^2 + m > 0$ nghiệm đúng với mọi $x \\in (2; +\\infty)$?",
    options: [
      { key: "A", content: "$11$" },
      { key: "B", content: "$10$" },
      { key: "C", content: "$12$" },
      { key: "D", content: "$9$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Đặt $t = \\log_2 x$. Với $x \\in (2; +\\infty)$ thì $t \\in (1; +\\infty)$.\nBất phương trình trở thành:\n$$f(t) = t^2 - (2m + 1)t + m^2 + m > 0, \\forall t > 1.$$\nBiệt thức $\\Delta = (2m + 1)^2 - 4(m^2 + m) = 1 > 0$.\nHai nghiệm của tam thức là $t_1 = m$ và $t_2 = m + 1$.\nBất phương trình $f(t) > 0 \\iff t < m$ hoặc $t > m + 1$.\nĐể $f(t) > 0, \\forall t > 1$, khoảng $(1; +\\infty)$ phải là tập con của $(m + 1; +\\infty)$:\n$$m + 1 \\le 1 \\iff m \\le 0.$$\nVì $m \\in [-10; 10]$ và $m \\in \\mathbb{Z}$ nên $m \\in \\{-10; -9; \\dots; 0\\}$.\nSố giá trị nguyên của $m$ là $0 - (-10) + 1 = 11$.",
    socraticHint: "Đặt ẩn phụ $t = \\log_2 x > 1$, phân tích tam thức bậc hai thành nhân tử $(t - m)(t - m - 1) > 0$."
  },
  73: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $f(x) + 2 f(2 - x) = 3x^2 - 4x$ với mọi $x \\in \\mathbb{R}$. Tích phân $I = \\int_0^2 f(x) dx$ bằng:",
    options: [
      { key: "A", content: "$0$" },
      { key: "B", content: "$2$" },
      { key: "C", content: "$-2$" },
      { key: "D", content: "$\\frac{4}{3}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Lấy tích phân từ $0$ đến $2$ cả hai vế của đẳng thức:\n$$\\int_0^2 f(x) dx + 2\\int_0^2 f(2 - x) dx = \\int_0^2 (3x^2 - 4x) dx.$$\nĐổi biến $u = 2 - x \\Rightarrow du = -dx$. Khi $x = 0 \\Rightarrow u = 2$; $x = 2 \\Rightarrow u = 0$.\nTa có $\\int_0^2 f(2 - x) dx = \\int_2^0 f(u)(-du) = \\int_0^2 f(u) du = I$.\nDo đó vế trái là:\n$$I + 2I = 3I.$$\nVế phải:\n$$\\int_0^2 (3x^2 - 4x) dx = [x^3 - 2x^2]_0^2 = 8 - 8 = 0.$$\nSuy ra $3I = 0 \\iff I = 0$.",
    socraticHint: "Sử dụng tính chất $\\int_0^a f(a - x) dx = \\int_0^a f(x) dx$ để đưa về phương trình một ẩn $I$."
  },
  74: {
    difficulty: "Vận dụng",
    content: "Một chiếc cốc hình trụ có bán kính đáy $R = 4\\text{ cm}$ chứa một lượng nước. Người ta thả chìm hoàn toàn vào cốc một viên bi sắt hình cầu thì mực nước trong cốc dâng lên thêm $2{,}25\\text{ cm}$. Bán kính của viên bi sắt bằng:",
    options: [
      { key: "A", content: "$3\\text{ cm}$" },
      { key: "B", content: "$2{,}5\\text{ cm}$" },
      { key: "C", content: "$2\\text{ cm}$" },
      { key: "D", content: "$3{,}5\\text{ cm}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Thể tích phần nước dâng lên chính bằng thể tích của viên bi sắt:\n$$V_{\\text{dâng}} = \\pi R^2 h = \\pi \\cdot 4^2 \\cdot 2{,}25 = 36\\pi\\text{ (cm}^3\\text{)}.$$\nThể tích của viên bi hình cầu bán kính $r$ là:\n$$V_{\\text{bi}} = \\frac{4}{3}\\pi r^3.$$\nTheo bài ra:\n$$\\frac{4}{3}\\pi r^3 = 36\\pi \\iff r^3 = 36 \\times \\frac{3}{4} = 27 \\iff r = 3\\text{ cm}.$$",
    socraticHint: "Thể tích vật thả chìm hoàn toàn bằng thể tích khối trụ nước dâng lên."
  },
  75: {
    difficulty: "Vận dụng cao",
    content: "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -3), B(3; -2; 1)$ và mặt phẳng $(P): 2x - y + 2z - 11 = 0$. Điểm $M(a; b; c)$ thuộc mặt phẳng $(P)$ sao cho biểu thức $MA^2 + MB^2$ đạt giá trị nhỏ nhất. Tổng $a + b + c$ bằng:",
    options: [
      { key: "A", content: "$4$" },
      { key: "B", content: "$3$" },
      { key: "C", content: "$2$" },
      { key: "D", content: "$5$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Gọi $I$ là trung điểm của đoạn thẳng $AB$:\n$$I = \\left( \\frac{1 + 3}{2}; \\frac{2 - 2}{2}; \\frac{-3 + 1}{2} \\right) = (2; 0; -1).$$\nPhân tích vectơ: $\\vec{MA} = \\vec{MI} + \\vec{IA}$ và $\\vec{MB} = \\vec{MI} + \\vec{IB}$.\nDo $\\vec{IA} + \\vec{IB} = \\vec{0}$, ta có:\n$$MA^2 + MB^2 = 2MI^2 + \\frac{AB^2}{2}.$$\nBiểu thức đạt giá trị nhỏ nhất khi và chỉ khi $MI$ ngắn nhất, tức là $M$ là hình chiếu vuông góc của $I$ lên $(P)$.\nĐường thẳng qua $I$ vuông góc với $(P)$ có phương trình tham số: $x = 2 + 2t, y = -t, z = -1 + 2t$.\nThay vào $(P)$:\n$$2(2 + 2t) - (-t) + 2(-1 + 2t) - 11 = 0 \\iff 9t - 9 = 0 \\iff t = 1.$$\nToạ độ hình chiếu là $M(4; -1; 1)$.\nTổng $a + b + c = 4 + (-1) + 1 = 4$.",
    socraticHint: "Sử dụng tâm tỉ cự (trung điểm $I$) để chuyển bài toán về khoảng cách ngắn nhất từ $I$ đến mặt phẳng."
  },
  76: {
    difficulty: "Vận dụng",
    content: "Trong mặt phẳng $Oxy$, cho tam giác $ABC$ có trực tâm $H(2; 1)$, tâm đường tròn ngoại tiếp $I(1; 0)$ và trung điểm của cạnh $BC$ là $M(3; 2)$. Tọa độ của đỉnh $A$ là:",
    options: [
      { key: "A", content: "$(-2; -3)$" },
      { key: "B", content: "$(2; 3)$" },
      { key: "C", content: "$(-1; -2)$" },
      { key: "D", content: "$(0; -1)$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Theo tính chất hình học tam giác (đường thẳng Euler), vectơ nối đỉnh và trực tâm liên hệ với vectơ từ tâm ngoại tiếp đến trung điểm cạnh đối diện qua hệ thức:\n$$\\vec{AH} = 2\\vec{IM}.$$\nTa có $\\vec{IM} = (3 - 1; 2 - 0) = (2; 2)$.\nSuy ra $\\vec{AH} = 2(2; 2) = (4; 4)$.\nVì $H(2; 1)$ nên:\n$$\\vec{AH} = (2 - x_A; 1 - y_A) = (4; 4) \\iff \\begin{cases} 2 - x_A = 4 \\\\ 1 - y_A = 4 \\end{cases} \\iff \\begin{cases} x_A = -2 \\\\ y_A = -3 \\end{cases}.$$\nVậy đỉnh $A$ có tọa độ $(-2; -3)$.",
    socraticHint: "Áp dụng hệ thức Euler trong tam giác: $\\vec{AH} = 2\\vec{IM}$ với $M$ là trung điểm cạnh $BC$."
  },
  77: {
    difficulty: "Vận dụng",
    content: "Cho cấp số nhân $(u_n)$ có các số hạng đều dương thỏa mãn $u_2 + u_4 = 60$ và $u_3 + u_5 = 180$. Tổng 6 số hạng đầu tiên $S_6$ của cấp số nhân này bằng:",
    options: [
      { key: "A", content: "$728$" },
      { key: "B", content: "$364$" },
      { key: "C", content: "$1456$" },
      { key: "D", content: "$726$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Biểu diễn qua $u_1$ và công bội $q > 0$:\n$$\\begin{cases} u_1 q + u_1 q^3 = 60 \\iff u_1 q(1 + q^2) = 60 \\\\ u_1 q^2 + u_1 q^4 = 180 \\iff u_1 q^2(1 + q^2) = 180 \\end{cases}$$\nChia phương trình dưới cho phương trình trên ta được:\n$$q = \\frac{180}{60} = 3.$$\nThay $q = 3$ vào phương trình thứ nhất:\n$$u_1 \\cdot 3 \\cdot (1 + 9) = 60 \\iff 30 u_1 = 60 \\iff u_1 = 2.$$\nTổng 6 số hạng đầu tiên:\n$$S_6 = \\frac{u_1(q^6 - 1)}{q - 1} = \\frac{2(3^6 - 1)}{3 - 1} = 3^6 - 1 = 729 - 1 = 728.$$",
    socraticHint: "Lập tỉ số giữa hai hệ thức tổng để tìm nhanh công bội $q$ rồi suy ra $u_1$."
  },
  78: {
    difficulty: "Vận dụng",
    content: "Gieo đồng thời ba con xúc xắc cân đối và đồng chất. Xác suất để tổng số chấm xuất hiện trên ba con xúc xắc bằng 10 là:",
    options: [
      { key: "A", content: "$\\frac{1}{8}$" },
      { key: "B", content: "$\\frac{7}{72}$" },
      { key: "C", content: "$\\frac{5}{36}$" },
      { key: "D", content: "$\\frac{1}{6}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Số phần tử không gian mẫu khi gieo 3 con xúc xắc: $n(\\Omega) = 6^3 = 216$.\nGọi $x, y, z$ lần lượt là số chấm trên 3 con xúc xắc ($1 \\le x, y, z \\le 6$).\nTa cần đếm số bộ $(x; y; z)$ thỏa mãn $x + y + z = 10$.\nLiệt kê các hoán vị của các bộ số tổng bằng 10:\n- Bộ $\\{6; 3; 1\\}$: $3! = 6$ cách.\n- Bộ $\\{6; 2; 2\\}$: $\\frac{3!}{2!} = 3$ cách.\n- Bộ $\\{5; 4; 1\\}$: $3! = 6$ cách.\n- Bộ $\\{5; 3; 2\\}$: $3! = 6$ cách.\n- Bộ $\\{4; 4; 2\\}$: $\\frac{3!}{2!} = 3$ cách.\n- Bộ $\\{4; 3; 3\\}$: $\\frac{3!}{2!} = 3$ cách.\nTổng số kết quả thuận lợi là $6 + 3 + 6 + 6 + 3 + 3 = 27$.\nXác suất cần tìm là:\n$$P = \\frac{27}{216} = \\frac{1}{8}.$$",
    socraticHint: "Phân loại các bộ ba số tự nhiên có tổng bằng 10 rồi tính số hoán vị của từng bộ."
  },
  79: {
    difficulty: "Vận dụng",
    content: "Khảo sát thu nhập hàng tháng (đơn vị: triệu đồng) của 50 nhân viên một công ty thu được mẫu số liệu ghép nhóm: $[10; 15)$ có 8 nhân viên; $[15; 20)$ có 18 nhân viên; $[20; 25)$ có 16 nhân viên; $[25; 30)$ có 8 nhân viên. Phương sai $s^2$ của mẫu số liệu ghép nhóm này bằng:",
    options: [
      { key: "A", content: "$22{,}24$" },
      { key: "B", content: "$21{,}86$" },
      { key: "C", content: "$24{,}15$" },
      { key: "D", content: "$4{,}72$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Giá trị đại diện các nhóm:\n$c_1 = 12{,}5; c_2 = 17{,}5; c_3 = 22{,}5; c_4 = 27{,}5$.\nSố trung bình:\n$$\\bar{x} = \\frac{8(12{,}5) + 18(17{,}5) + 16(22{,}5) + 8(27{,}5)}{50} = \\frac{100 + 315 + 360 + 220}{50} = \\frac{995}{50} = 19{,}9.$$\nPhương sai của mẫu ghép nhóm:\n$$s^2 = \\frac{1}{n} \\sum m_i c_i^2 - \\bar{x}^2.$$\nTa có:\n$$\\sum m_i c_i^2 = 8(12{,}5^2) + 18(17{,}5^2) + 16(22{,}5^2) + 8(27{,}5^2)$$\n$$= 8(156{,}25) + 18(306{,}25) + 16(506{,}25) + 8(756{,}25) = 1250 + 5512{,}5 + 8100 + 6050 = 20912{,}5.$$\nDo đó:\n$$s^2 = \\frac{20912{,}5}{50} - (19{,}9)^2 = 418{,}25 - 396{,}01 = 22{,}24.$$",
    socraticHint: "Áp dụng công thức phương sai mẫu số liệu ghép nhóm qua giá trị đại diện và công thức thu gọn $s^2 = \\frac{1}{n}\\sum m_i c_i^2 - \\bar{x}^2$."
  },
  80: {
    difficulty: "Vận dụng",
    content: "Một chất phóng xạ có chu kỳ bán rã là 14 ngày (sau mỗi 14 ngày khối lượng chất phóng xạ giảm đi một nửa). Giả sử ban đầu có $100\\text{ gam}$ chất phóng xạ. Hỏi sau bao nhiêu ngày thì khối lượng chất phóng xạ còn lại đúng $12{,}5\\text{ gam}$?",
    options: [
      { key: "A", content: "$42$" },
      { key: "B", content: "$28$" },
      { key: "C", content: "$56$" },
      { key: "D", content: "$35$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Khối lượng chất phóng xạ còn lại sau thời gian $t$ ngày là:\n$$m(t) = m_0 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{t}{T}}.$$\nVới $m_0 = 100\\text{ g}$, $T = 14\\text{ ngày}$ và $m(t) = 12{,}5\\text{ g}$, ta có phương trình:\n$$12{,}5 = 100 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{t}{14}} \\iff \\left(\\frac{1}{2}\\right)^{\\frac{t}{14}} = \\frac{12{,}5}{100} = \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3.$$\nSuy ra $\\frac{t}{14} = 3 \\iff t = 42\\text{ ngày}$.",
    socraticHint: "Khối lượng giảm còn $12{,}5\\%$ tương đương với giảm $2^3 = 8$ lần, tức là trải qua 3 chu kỳ bán rã."
  },
  81: {
    difficulty: "Vận dụng cao",
    content: "Cho phương trình $\\cos 2x - (2m + 1)\\cos x + m + 1 = 0$. Tìm tất cả các giá trị của tham số $m$ để phương trình có đúng 3 nghiệm phân biệt thuộc đoạn $\\left[-\\frac{\\pi}{2}; \\pi\\right]$.",
    options: [
      { key: "A", content: "$m \\in [-1; 0) \\cup \\{1\\}$" },
      { key: "B", content: "$m \\in [-1; 1]$" },
      { key: "C", content: "$m \\in (0; 1)$" },
      { key: "D", content: "$m \\in [-1; 0]$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Biến đổi phương trình:\n$$2\\cos^2 x - 1 - (2m + 1)\\cos x + m + 1 = 0 \\iff 2\\cos^2 x - (2m + 1)\\cos x + m = 0$$\n$$\\iff (2\\cos x - 1)(\\cos x - m) = 0 \\iff \\left[\\begin{array}{l} \\cos x = \\frac{1}{2} \\\\ \\cos x = m \\end{array}\\right.$$\nXét $x \\in \\left[-\\frac{\\pi}{2}; \\pi\\right]$:\n- Phương trình $\\cos x = \\frac{1}{2}$ có đúng 2 nghiệm là $x = -\\frac{\\pi}{3}$ và $x = \\frac{\\pi}{3}$.\nĐể phương trình ban đầu có đúng 3 nghiệm phân biệt trên $\\left[-\\frac{\\pi}{2}; \\pi\\right]$, phương trình $\\cos x = m$ phải sinh ra đúng 1 nghiệm khác $\\pm\\frac{\\pi}{3}$.\nXét đồ thị hàm số $y = \\cos x$ trên $\\left[-\\frac{\\pi}{2}; \\pi\\right]$:\n- Với $m = 1$: sinh ra duy nhất nghiệm $x = 0$ (thỏa mãn).\n- Với $-1 \\le m < 0$: sinh ra duy nhất 1 nghiệm thuộc $\\left(\\frac{\\pi}{2}; \\pi\\right]$ (thỏa mãn).\n- Với $0 \\le m < 1$ và $m \\ne \\frac{1}{2}$: đường thẳng cắt tại 2 điểm nên sinh ra 2 nghiệm (loại).\n- Với $m = \\frac{1}{2}$: nghiệm trùng với 2 nghiệm đã có, không tạo thêm nghiệm mới (loại).\nVậy $m \\in [-1; 0) \\cup \\{1\\}$.",
    socraticHint: "Phân tích phương trình thành tích $(2\\cos x - 1)(\\cos x - m) = 0$ rồi dùng đường tròn lượng giác để đếm nghiệm theo tham số $m$."
  },
  82: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $y = f(x)$ có bảng xét dấu của đạo hàm $f'(x)$ như sau: $f'(x) > 0$ trên $(-\\infty; -1)$ và $(2; +\\infty)$; $f'(x) < 0$ trên $(-1; 2)$. Hàm số $g(x) = f(3 - 2x)$ đồng biến trên khoảng nào dưới đây?",
    options: [
      { key: "A", content: "$\\left(\\frac{1}{2}; 2\\right)$" },
      { key: "B", content: "$\\left(-\\infty; \\frac{1}{2}\\right)$" },
      { key: "C", content: "$(2; +\\infty)$" },
      { key: "D", content: "$(-1; 2)$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Ta có $g'(x) = [f(3 - 2x)]' = -2 f'(3 - 2x)$.\nHàm số $g(x)$ đồng biến khi và chỉ khi:\n$$g'(x) \\ge 0 \\iff -2 f'(3 - 2x) \\ge 0 \\iff f'(3 - 2x) \\le 0.$$\nTừ bảng xét dấu của $f'(x)$, ta có $f'(t) \\le 0 \\iff -1 \\le t \\le 2$.\nDo đó:\n$$-1 \\le 3 - 2x \\le 2 \\iff -4 \\le -2x \\le -1 \\iff \\frac{1}{2} \\le x \\le 2.$$\nVậy hàm số $g(x)$ đồng biến trên khoảng $\\left(\\frac{1}{2}; 2\\right)$.",
    socraticHint: "Áp dụng quy tắc đạo hàm hàm hợp $g'(x) = u'(x) \\cdot f'(u(x))$ và đổi chiều bất đẳng thức do hệ số âm."
  },
  83: {
    difficulty: "Vận dụng",
    content: "Cho hai số thực dương $a, b > 1$ thỏa mãn $\\log_a b = 2$. Giá trị của biểu thức $P = \\log_{a^2\\sqrt{b}}(a\\sqrt[3]{b})$ bằng:",
    options: [
      { key: "A", content: "$\\frac{5}{9}$" },
      { key: "B", content: "$\\frac{2}{3}$" },
      { key: "C", content: "$\\frac{7}{9}$" },
      { key: "D", content: "$\\frac{1}{2}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Vì $\\log_a b = 2$ nên $b = a^2$.\nThay vào biểu thức cơ số:\n$$a^2 \\sqrt{b} = a^2 \\sqrt{a^2} = a^2 \\cdot a = a^3.$$\nThay vào biểu thức lấy logarit:\n$$a\\sqrt[3]{b} = a \\sqrt[3]{a^2} = a \\cdot a^{2/3} = a^{5/3}.$$\nDo đó:\n$$P = \\log_{a^3}(a^{5/3}) = \\frac{5/3}{3} = \\frac{5}{9}.$$",
    socraticHint: "Đưa cả cơ số và biểu thức lấy logarit về cùng một luỹ thừa của cơ số $a$."
  },
  84: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $f(x)$ có đạo hàm liên tục trên đoạn $[0; 1]$ thỏa mãn $f(1) = 4$ và $\\int_0^1 x f'(x) dx = 3$. Tích phân $I = \\int_0^1 f(x) dx$ bằng:",
    options: [
      { key: "A", content: "$1$" },
      { key: "B", content: "$7$" },
      { key: "C", content: "$-1$" },
      { key: "D", content: "$4$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Áp dụng phương pháp tích phân từng phần cho tích phân $\\int_0^1 x f'(x) dx$:\n- Đặt $u = x \\Rightarrow du = dx$.\n- Đặt $dv = f'(x) dx \\Rightarrow v = f(x)$.\nTa có:\n$$\\int_0^1 x f'(x) dx = [x f(x)]_0^1 - \\int_0^1 f(x) dx = 1 \\cdot f(1) - 0 - I = f(1) - I.$$\nTheo giả thiết:\n$$3 = 4 - I \\iff I = 4 - 3 = 1.$$",
    socraticHint: "Áp dụng công thức tích phân từng phần $\\int u dv = uv - \\int v du$ cho biểu thức chứa $x f'(x)$."
  },
  85: {
    difficulty: "Vận dụng cao",
    content: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $AB = a, AD = a\\sqrt{3}$. Mặt bên $SAB$ là tam giác đều và nằm trong mặt phẳng vuông góc với đáy. Khoảng cách từ điểm $A$ đến mặt phẳng $(SCD)$ bằng:",
    options: [
      { key: "A", content: "$\\frac{a\\sqrt{15}}{5}$" },
      { key: "B", content: "$\\frac{a\\sqrt{3}}{2}$" },
      { key: "C", content: "$\\frac{a\\sqrt{5}}{5}$" },
      { key: "D", content: "$\\frac{a\\sqrt{15}}{3}$" }
    ],
    correctAnswer: "A",
    detailedSolution: "Gọi $H$ là trung điểm cạnh $AB$. Vì tam giác $SAB$ đều và $(SAB) \\perp (ABCD)$ nên $SH \\perp (ABCD)$ và $SH = \\frac{a\\sqrt{3}}{2}$.\nVì $AB \\parallel CD$ nên $AB \\parallel (SCD)$, do đó $d(A, (SCD)) = d(H, (SCD))$.\nGọi $K$ là trung điểm của $CD$, ta có $HK \\perp CD$ và $HK = AD = a\\sqrt{3}$.\nKẻ $HE \\perp SK$ tại $E$. Khi đó $HE \\perp (SCD)$, suy ra $d(H, (SCD)) = HE$.\nTam giác $SHK$ vuông tại $H$:\n$$\\frac{1}{HE^2} = \\frac{1}{SH^2} + \\frac{1}{HK^2} = \\frac{1}{\\frac{3a^2}{4}} + \\frac{1}{3a^2} = \\frac{4}{3a^2} + \\frac{1}{3a^2} = \\frac{5}{3a^2}.$$\nDo đó:\n$$HE = \\sqrt{\\frac{3a^2}{5}} = \\frac{a\\sqrt{15}}{5}.$$",
    socraticHint: "Chuyển khoảng cách từ điểm $A$ về chân đường cao $H$ nhờ đường thẳng song song $AB \\parallel (SCD)$."
  },
  86: {
    difficulty: "Vận dụng",
    content: "Cho phương trình $\\sin x + \\cos x = \\sqrt{2}\\sin 5x$. Tìm số nghiệm của phương trình thuộc đoạn $[0; \\pi]$.",
    correctAnswer: "5",
    acceptableAnswers: ["5"],
    detailedSolution: "Biến đổi vế trái: $\\sin x + \\cos x = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$.\nPhương trình trở thành:\n$$\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right) = \\sqrt{2}\\sin 5x \\iff \\sin 5x = \\sin\\left(x + \\frac{\\pi}{4}\\right)$$\n$$\\iff \\left[\\begin{array}{l} 5x = x + \\frac{\\pi}{4} + k2\\pi \\\\ 5x = \\pi - \\left(x + \\frac{\\pi}{4}\\right) + k2\\pi \\end{array}\\right. \\iff \\left[\\begin{array}{l} 4x = \\frac{\\pi}{4} + k2\\pi \\iff x = \\frac{\\pi}{16} + \\frac{k\\pi}{2} \\\\ 6x = \\frac{3\\pi}{4} + k2\\pi \\iff x = \\frac{\\pi}{8} + \\frac{k\\pi}{3} \\end{array}\\right.$$\nXét trên đoạn $[0; \\pi]$:\n- Nhánh 1: $x = \\frac{\\pi}{16}$ ($k = 0$) và $x = \\frac{9\\pi}{16}$ ($k = 1$). (Có 2 nghiệm).\n- Nhánh 2: $x = \\frac{\\pi}{8}$ ($k = 0$), $x = \\frac{11\\pi}{24}$ ($k = 1$), và $x = \\frac{19\\pi}{24}$ ($k = 2$). (Có 3 nghiệm).\nHai họ nghiệm này không trùng nhau.\nTổng số nghiệm thuộc đoạn $[0; \\pi]$ là $2 + 3 = 5$.",
    socraticHint: "Dùng công thức $\\sin x + \\cos x = \\sqrt{2}\\sin(x + \\pi/4)$ đưa về phương trình $\\sin u = \\sin v$."
  },
  87: {
    difficulty: "Vận dụng",
    content: "Tìm giá trị lớn nhất của hàm số $y = x^3 - 3x^2 - 9x + 35$ trên đoạn $[-2; 2]$.",
    correctAnswer: "40",
    acceptableAnswers: ["40"],
    detailedSolution: "Hàm số liên tục trên đoạn $[-2; 2]$.\nĐạo hàm: $y' = 3x^2 - 6x - 9$.\nCho $y' = 0 \\iff 3(x^2 - 2x - 3) = 0 \\iff x = -1$ hoặc $x = 3$.\nVì $3 \\notin [-2; 2]$, ta chỉ xét điểm tới hạn $x = -1$.\nTính giá trị tại các đầu mút và điểm tới hạn:\n- $y(-2) = (-2)^3 - 3(-2)^2 - 9(-2) + 35 = -8 - 12 + 18 + 35 = 33$.\n- $y(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 35 = -1 - 3 + 9 + 35 = 40$.\n- $y(2) = 2^3 - 3(2)^2 - 9(2) + 35 = 8 - 12 - 18 + 35 = 13$.\nSo sánh các giá trị, ta được giá trị lớn nhất là $40$ tại $x = -1$.",
    socraticHint: "Khảo sát hàm số trên đoạn đóng bằng cách tính giá trị tại các điểm cực trị thuộc đoạn và hai đầu mút."
  },
  88: {
    difficulty: "Vận dụng",
    content: "Cho hàm số $y = \\frac{2x^2 + 5x - 3}{x + 1}$. Đường tiệm cận xiên của đồ thị hàm số cắt trục tung tại điểm có tung độ bằng bao nhiêu?",
    correctAnswer: "3",
    acceptableAnswers: ["3"],
    detailedSolution: "Thực hiện phép chia đa thức tử số cho mẫu số:\n$$2x^2 + 5x - 3 = (x + 1)(2x + 3) - 6.$$\nDo đó:\n$$y = 2x + 3 - \\frac{6}{x + 1}.$$\nVì $\\lim_{x \\to \\pm\\infty} \\left[ y - (2x + 3) \\right] = \\lim_{x \\to \\pm\\infty} \\left( -\\frac{6}{x + 1} \\right) = 0$, đường tiệm cận xiên của đồ thị hàm số là $d: y = 2x + 3$.\nGiao điểm của đường tiệm cận xiên với trục tung $Oy$ ($x = 0$) có tung độ là $y = 2(0) + 3 = 3$.",
    socraticHint: "Chia đa thức để tìm phương trình tiệm cận xiên $y = ax + b$, tung độ giao điểm với trục tung chính là hệ số tự do $b$."
  },
  89: {
    difficulty: "Vận dụng",
    content: "Tìm số nghiệm thực của phương trình $4^x - 3 \\cdot 2^{x+1} + 8 = 0$.",
    correctAnswer: "2",
    acceptableAnswers: ["2"],
    detailedSolution: "Phương trình được viết lại dưới dạng:\n$$(2^x)^2 - 6 \\cdot 2^x + 8 = 0.$$\nĐặt $t = 2^x > 0$, ta có phương trình bậc hai:\n$$t^2 - 6t + 8 = 0 \\iff (t - 2)(t - 4) = 0 \\iff \\left[\\begin{array}{l} t = 2 \\\\ t = 4 \\end{array}\\right.$$\nCả hai nghiệm đều thỏa mãn điều kiện $t > 0$:\n- Với $t = 2 \\Rightarrow 2^x = 2 \\Rightarrow x = 1$.\n- Với $t = 4 \\Rightarrow 2^x = 4 \\Rightarrow x = 2$.\nVậy phương trình có đúng $2$ nghiệm thực phân biệt.",
    socraticHint: "Đặt ẩn phụ $t = 2^x > 0$ đưa về phương trình bậc hai."
  },
  90: {
    difficulty: "Vận dụng",
    content: "Cho $\\int_0^1 (2x + 1) e^x dx = a \\cdot e + b$ với $a, b \\in \\mathbb{Z}$. Tính giá trị của biểu thức $P = a + b$.",
    correctAnswer: "2",
    acceptableAnswers: ["2"],
    detailedSolution: "Áp dụng phương pháp tích phân từng phần:\n- Đặt $u = 2x + 1 \\Rightarrow du = 2dx$.\n- Đặt $dv = e^x dx \\Rightarrow v = e^x$.\nTa có:\n$$I = [(2x + 1)e^x]_0^1 - \\int_0^1 2e^x dx = (3e - 1) - [2e^x]_0^1 = 3e - 1 - (2e - 2) = e + 1.$$\nĐối chiếu với dạng $a \\cdot e + b$, ta được $a = 1$ và $b = 1$.\nVậy $P = a + b = 1 + 1 = 2$.",
    socraticHint: "Tích phân từng phần với đa thức nhân hàm mũ: đặt $u = 2x + 1, dv = e^x dx$."
  },
  91: {
    difficulty: "Vận dụng",
    content: "Cho khối lăng trụ tam giác đều $ABC.A'B'C'$ có cạnh đáy bằng $4$ và thể tích bằng $20\\sqrt{3}$. Tính chiều cao $h$ của khối lăng trụ.",
    correctAnswer: "5",
    acceptableAnswers: ["5"],
    detailedSolution: "Đáy là tam giác đều cạnh $a = 4$. Diện tích đáy là:\n$$S_{\\text{đáy}} = \\frac{a^2\\sqrt{3}}{4} = \\frac{4^2\\sqrt{3}}{4} = 4\\sqrt{3}.$$\nThể tích của khối lăng trụ đứng là:\n$$V = S_{\\text{đáy}} \\cdot h \\iff 20\\sqrt{3} = 4\\sqrt{3} \\cdot h \\iff h = \\frac{20\\sqrt{3}}{4\\sqrt{3}} = 5.$$",
    socraticHint: "Áp dụng công thức thể tích lăng trụ $V = S_{\\text{đáy}} \\cdot h$ với đáy là tam giác đều."
  },
  92: {
    difficulty: "Vận dụng",
    content: "Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 11 = 0$. Bán kính của mặt cầu $(S)$ bằng bao nhiêu?",
    correctAnswer: "5",
    acceptableAnswers: ["5"],
    detailedSolution: "Phương trình mặt cầu có dạng $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$.\nTa xác định được:\n$$a = 1, \\quad b = -2, \\quad c = 3, \\quad d = -11.$$\nBán kính của mặt cầu là:\n$$R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{1^2 + (-2)^2 + 3^2 - (-11)} = \\sqrt{1 + 4 + 9 + 11} = \\sqrt{25} = 5.$$",
    socraticHint: "Áp dụng công thức bán kính mặt cầu dạng khai triển $R = \\sqrt{a^2 + b^2 + c^2 - d}$."
  },
  93: {
    difficulty: "Vận dụng",
    content: "Trong mặt phẳng $Oxy$, cho đường tròn $(C)$ đi qua ba điểm $A(0; 6), B(8; 6), C(8; 0)$. Bán kính của đường tròn $(C)$ bằng bao nhiêu?",
    correctAnswer: "5",
    acceptableAnswers: ["5"],
    detailedSolution: "Xét các vectơ:\n$$\\vec{BA} = (0 - 8; 6 - 6) = (-8; 0),$$\n$$\\vec{BC} = (8 - 8; 0 - 6) = (0; -6).$$\nTích vô hướng $\\vec{BA} \\cdot \\vec{BC} = (-8)(0) + (0)(-6) = 0$, suy ra tam giác $ABC$ vuông tại $B$.\nDo đó đường tròn ngoại tiếp tam giác $ABC$ nhận cạnh huyền $AC$ làm đường kính.\nĐộ dài đường kính là:\n$$AC = \\sqrt{(8 - 0)^2 + (0 - 6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10.$$\nBán kính của đường tròn là $R = \\frac{AC}{2} = 5$.",
    socraticHint: "Kiểm tra tính vuông góc của tam giác tạo bởi 3 điểm để xác định cạnh huyền là đường kính."
  },
  94: {
    difficulty: "Vận dụng",
    content: "Cho cấp số cộng $(u_n)$ thỏa mãn $u_1 + u_5 = 18$ và $u_3 + u_7 = 26$. Tính số hạng $u_{10}$ của cấp số cộng đó.",
    correctAnswer: "23",
    acceptableAnswers: ["23"],
    detailedSolution: "Biểu diễn các số hạng qua $u_1$ và công sai $d$:\n$$\\begin{cases} u_1 + (u_1 + 4d) = 18 \\iff 2u_1 + 4d = 18 \\iff u_1 + 2d = 9 \\\\ (u_1 + 2d) + (u_1 + 6d) = 26 \\iff 2u_1 + 8d = 26 \\iff u_1 + 4d = 13 \\end{cases}$$\nTrừ hai phương trình:\n$$2d = 4 \\iff d = 2.$$\nThay vào ta được $u_1 = 9 - 2(2) = 5$.\nSố hạng thứ 10 là:\n$$u_{10} = u_1 + 9d = 5 + 9(2) = 23.$$",
    socraticHint: "Lập hệ phương trình bậc nhất hai ẩn $u_1$ và $d$ từ tính chất cấp số cộng."
  },
  95: {
    difficulty: "Vận dụng",
    content: "Có bao nhiêu số tự nhiên gồm 4 chữ số đôi một khác nhau được lập từ các chữ số thuộc tập $S = \\{0, 1, 2, 3, 4, 5\\}$ sao cho số đó chia hết cho 5?",
    correctAnswer: "108",
    acceptableAnswers: ["108"],
    detailedSolution: "Gọi số có 4 chữ số là $\\overline{abcd}$ với $a \\ne 0$ và $a, b, c, d \\in S$ đôi một khác nhau.\nĐể số đó chia hết cho 5, chữ số tận cùng $d \\in \\{0; 5\\}$.\n- Trường hợp 1: $d = 0$.\n  + Chữ số $a$ có 5 cách chọn (từ $\\{1, 2, 3, 4, 5\\}$).\n  + Chữ số $b$ có 4 cách chọn.\n  + Chữ số $c$ có 3 cách chọn.\n  Số các số là $5 \\times 4 \\times 3 = 60$ số.\n- Trường hợp 2: $d = 5$.\n  + Chữ số $a \\ne 0$ và $a \\ne 5$ nên có 4 cách chọn (từ $\\{1, 2, 3, 4\\}$).\n  + Chữ số $b \\ne a$ và $b \\ne 5$ nên có 4 cách chọn (kể cả số 0).\n  + Chữ số $c$ có 3 cách chọn.\n  Số các số là $4 \\times 4 \\times 3 = 48$ số.\nTổng số các số thỏa mãn là $60 + 48 = 108$ số.",
    socraticHint: "Chia hai trường hợp theo chữ số tận cùng là 0 và 5, chú ý điều kiện chữ số đầu tiên khác 0."
  },
  96: {
    difficulty: "Vận dụng",
    content: "Khảo sát mẫu số liệu ghép nhóm về điểm kiểm tra của 40 học sinh: $[4; 6)$ có 8 học sinh; $[6; 8)$ có 20 học sinh; $[8; 10)$ có 12 học sinh. Tính trung vị $M_e$ của mẫu số liệu ghép nhóm này (làm tròn đến một chữ số thập phân).",
    correctAnswer: "7.2",
    acceptableAnswers: ["7.2", "7,2"],
    detailedSolution: "Tổng số học sinh $n = 40$.\nGiá trị vị trí trung vị: $\\frac{n}{2} = 20$.\nTần số tích lũy của nhóm thứ nhất $[4; 6)$ là 8.\nTần số tích lũy của nhóm thứ hai $[6; 8)$ là $8 + 20 = 28 \\ge 20$.\nDo đó nhóm chứa trung vị là $[6; 8)$.\nÁp dụng công thức tính trung vị của mẫu số liệu ghép nhóm:\n$$M_e = 6 + \\frac{20 - 8}{20} \\times (8 - 6) = 6 + \\frac{12}{20} \\times 2 = 6 + 1{,}2 = 7{,}2.$$",
    socraticHint: "Dùng công thức nội suy trung vị mẫu số liệu ghép nhóm: $M_e = u_m + \\frac{n/2 - C}{n_m} \\times h$."
  },
  97: {
    difficulty: "Vận dụng",
    content: "Một người gửi 200 triệu đồng vào ngân hàng với lãi suất kép $6\\%/\\text{năm}$, tiền lãi nhập gốc hàng năm. Sau 4 năm, tổng số tiền (cả gốc lẫn lãi) người đó nhận được là bao nhiêu triệu đồng (làm tròn đến một chữ số thập phân)?",
    correctAnswer: "252.5",
    acceptableAnswers: ["252.5", "252,5"],
    detailedSolution: "Áp dụng công thức lãi kép:\n$$A = P(1 + r)^n,$$\ntrong đó $P = 200\\text{ triệu đồng}$, $r = 6\\% = 0{,}06$, $n = 4\\text{ năm}$.\nTa có:\n$$A = 200 \\times (1 + 0{,}06)^4 = 200 \\times (1{,}06)^4 \\approx 200 \\times 1{,}262477 = 252{,}4954\\text{ triệu đồng}.$$\nLàm tròn đến một chữ số thập phân ta được $252{,}5\\text{ triệu đồng}$.",
    socraticHint: "Áp dụng công thức lãi kép định kỳ hàng năm $A = P(1 + r)^n$."
  },
  98: {
    difficulty: "Vận dụng cao",
    content: "Đồ thị hàm số $y = |x^4 - 4x^2 + 3|$ có tất cả bao nhiêu điểm cực trị?",
    correctAnswer: "7",
    acceptableAnswers: ["7"],
    detailedSolution: "Xét hàm số $f(x) = x^4 - 4x^2 + 3$.\nĐạo hàm: $f'(x) = 4x^3 - 8x = 4x(x^2 - 2) = 0 \\iff x = 0$ hoặc $x = \\pm\\sqrt{2}$.\nSố điểm cực trị của $f(x)$ là $a = 3$.\nCác giá trị cực trị tương ứng:\n- $f(0) = 3 > 0$.\n- $f(\\pm\\sqrt{2}) = (\\sqrt{2})^4 - 4(\\sqrt{2})^2 + 3 = 4 - 8 + 3 = -1 < 0$.\nPhương trình hoành độ giao điểm $f(x) = 0 \\iff (x^2 - 1)(x^2 - 3) = 0 \\iff x = \\pm 1$ hoặc $x = \\pm\\sqrt{3}$.\nPhương trình có $b = 4$ nghiệm đơn phân biệt.\nSố điểm cực trị của hàm số trị tuyệt đối $y = |f(x)|$ bằng tổng số điểm cực trị của $f(x)$ cộng với số nghiệm đơn của phương trình $f(x) = 0$:\n$$N = a + b = 3 + 4 = 7.$$",
    socraticHint: "Số cực trị của hàm $y = |f(x)|$ bằng số điểm cực trị của $f(x)$ cộng số nghiệm đơn của $f(x) = 0$."
  },
  99: {
    difficulty: "Vận dụng",
    content: "Cho hai số thực dương $x, y$ thỏa mãn $\\log_2 x + \\log_2 y = 4$ và $\\log_2(x + y) = 3$. Tính giá trị của biểu thức $P = x^2 + y^2$.",
    correctAnswer: "32",
    acceptableAnswers: ["32"],
    detailedSolution: "Từ các phương trình logarit ta có:\n$$\\log_2(xy) = 4 \\iff xy = 2^4 = 16,$$\n$$\\log_2(x + y) = 3 \\iff x + y = 2^3 = 8.$$\nBiểu thức cần tính:\n$$P = x^2 + y^2 = (x + y)^2 - 2xy = 8^2 - 2(16) = 64 - 32 = 32.$$",
    socraticHint: "Áp dụng định nghĩa logarit đưa về tổng và tích của hai số $x + y$ và $xy$."
  },
  100: {
    difficulty: "Vận dụng",
    content: "Tìm số nghiệm thuộc khoảng $(0; 3\\pi)$ của phương trình $\\sin 2x = \\cos x$.",
    correctAnswer: "7",
    acceptableAnswers: ["7"],
    detailedSolution: "Biến đổi phương trình:\n$$\\sin 2x - \\cos x = 0 \\iff 2\\sin x \\cos x - \\cos x = 0 \\iff \\cos x (2\\sin x - 1) = 0$$\n$$\\iff \\left[\\begin{array}{l} \\cos x = 0 \\\\ \\sin x = \\frac{1}{2} \\end{array}\\right.$$\nXét trên khoảng $(0; 3\\pi)$:\n1. $\\cos x = 0 \\iff x = \\frac{\\pi}{2} + k\\pi$. Các nghiệm là $\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{5\\pi}{2}$ (3 nghiệm).\n2. $\\sin x = \\frac{1}{2} \\iff x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{5\\pi}{6} + k2\\pi$.\n- Nhánh $x = \\frac{\\pi}{6} + k2\\pi$: các nghiệm là $\\frac{\\pi}{6}, \\frac{13\\pi}{6}$ (2 nghiệm).\n- Nhánh $x = \\frac{5\\pi}{6} + k2\\pi$: các nghiệm là $\\frac{5\\pi}{6}, \\frac{17\\pi}{6}$ (2 nghiệm).\nCác nghiệm trên đều khác nhau từng đôi một.\nTổng số nghiệm là $3 + 2 + 2 = 7$.",
    socraticHint: "Dùng công thức nhân đôi $\\sin 2x = 2\\sin x \\cos x$ đưa về phương trình tích."
  }
};
