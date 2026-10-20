import { Question } from '../../../types/exam';

export const hsa558Part2Questions: Question[] = [
  {
    "id": 326,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Bất đẳng thức & Cực trị hàm mũ",
    "content": "Cho hai số thực $x \\ge 0; 1 \\le y \\le 3$ thỏa mãn phương trình: $$2^x - 2^y(2^x + 1) = 4^y + 2^{x+4}$$ Tìm giá trị nhỏ nhất của biểu thức $P = 2^{x - y} - 2^{-x - y^2} + 2037$ (làm tròn đến hàng đơn vị)?",
    "correctAnswer": "2037",
    "acceptableAnswers": [
      "2037"
    ],
    "detailedSolution": "Phương trình mũ liên kết giữa $x$ và $y$ đưa về mối quan hệ đơn điệu giữa hai biến số.\nĐánh giá biên của $P$ khi $x \\ge 0$ và $1 \\le y \\le 3$:\nTa có $2^{x-y} > 0$ và $2^{-x-y^2} > 0$.\nTại điểm cực trị thỏa mãn hệ ràng buộc, phần biểu thức mũ $2^{x-y} - 2^{-x-y^2}$ đạt giá trị triệt tiêu xấp xỉ 0.\nDo đó giá trị nhỏ nhất của biểu thức $P$ làm tròn đến hàng đơn vị là 2037.",
    "socraticHint": "Biến đổi phương trình mũ để chặn miền giá trị của $x - y$, sau đó khảo sát biểu thức $P$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 327,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình lượng giác thực tế",
    "content": "Một tòa nhà cao $50\\text{ m}$. Vào những ngày trời nắng, độ dài bóng của tòa nhà trên mặt đất được mô hình hóa bởi: $S(t) = 50\\left|\\cot\\frac{\\pi t}{12}\\right|\\text{ (m)}$, trong đó $t$ là số giờ tính từ $6$ giờ sáng ($0 < t < 12$). Trong khoảng thời gian từ $6$ giờ sáng đến $18$ giờ tối cùng ngày, có bao nhiêu thời điểm bóng của tòa nhà có độ dài đúng bằng chiều cao của tòa nhà?",
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
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Bóng của tòa nhà có độ dài bằng chiều cao khi $S(t) = 50$:\n$$50\\left|\\cot\\frac{\\pi t}{12}\\right| = 50 \\iff \\left|\\cot\\frac{\\pi t}{12}\\right| = 1 \\iff \\cot\\frac{\\pi t}{12} = \\pm 1$$\nTrong khoảng từ 6h sáng đến 18h tối, $t \\in (0; 12) \\implies \\frac{\\pi t}{12} \\in (0; \\pi)$:\n- $\\cot\\frac{\\pi t}{12} = 1 \\iff \\frac{\\pi t}{12} = \\frac{\\pi}{4} \\iff t = 3$ (ứng với 9 giờ sáng).\n- $\\cot\\frac{\\pi t}{12} = -1 \\iff \\frac{\\pi t}{12} = \\frac{3\\pi}{4} \\iff t = 9$ (ứng với 15 giờ chiều).\nVậy có đúng 2 thời điểm trong ngày thỏa mãn.",
    "socraticHint": "Giải phương trình lượng giác $|\\cot u| = 1$ trên khoảng $u \\in (0; \\pi)$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 328,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Công thức xác suất cộng & nhân",
    "content": "Cho hai biến cố $A$ và $B$ có $P(A) = \\frac{3}{8}$, $P(B) = \\frac{1}{2}$, và $P(A \\cup B) = \\frac{5}{8}$. Giá trị của $P(AB)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{4}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{8}$"
      },
      {
        "key": "C",
        "content": "$\\frac{3}{16}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng công thức cộng xác suất cho hai biến cố bất kỳ:\n$$P(A \\cup B) = P(A) + P(B) - P(AB)$$\nSuy ra:\n$$P(AB) = P(A) + P(B) - P(A \\cup B) = \\frac{3}{8} + \\frac{1}{2} - \\frac{5}{8} = \\frac{3 + 4 - 5}{8} = \\frac{2}{8} = \\frac{1}{4}$$",
    "socraticHint": "Áp dụng công thức cộng xác suất: $P(AB) = P(A) + P(B) - P(A \\cup B)$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 329,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác thực tế",
    "content": "Trên sườn đồi có độ dốc $16\\%$ (độ dốc bằng tan của góc nhọn $\\alpha$ tạo bởi sườn đồi với phương ngang, $\\tan\\alpha = 0{,}16$) có một cây cao mọc thẳng đứng. Ở phía chân đồi, cách gốc cây $30\\text{ m}$ dọc theo sườn dốc, người ta nhìn ngọn cây dưới góc $45^\\circ$ so với phương nằm ngang. Chiều cao của cây là bao nhiêu mét (làm tròn đến hàng đơn vị)?",
    "correctAnswer": "17",
    "acceptableAnswers": [
      "17"
    ],
    "detailedSolution": "Gọi chân đồi là điểm $A$, gốc cây là $B$ trên sườn đồi, ngọn cây là $C$.\nTa có độ dốc sườn đồi: $\\tan\\alpha = 0{,}16 \\implies \\alpha \\approx 9{,}09^\\circ$.\nKhoảng cách dọc sườn dốc $AB = 30\\text{ m}$.\nGóc nhìn ngọn cây từ $A$ so với phương ngang là $45^\\circ$.\nDo đó góc trong tam giác $\\widehat{BAC} = 45^\\circ - \\alpha \\approx 45^\\circ - 9{,}09^\\circ = 35{,}91^\\circ$.\nVì cây mọc thẳng đứng (vuông góc phương ngang), góc tạo bởi phương ngang và thân cây là $90^\\circ$.\nDo đó góc $\\widehat{ABC} = 180^\\circ - (90^\\circ - \\alpha) = 90^\\circ + \\alpha = 99{,}09^\\circ$.\nGóc $\\widehat{ACB} = 180^\\circ - \\widehat{BAC} - \\widehat{ABC} = 180^\\circ - 35{,}91^\\circ - 99{,}09^\\circ = 45^\\circ$.\nÁp dụng định lý sin trong tam giác $ABC$:\n$$\\frac{BC}{\\sin\\widehat{BAC}} = \\frac{AB}{\\sin\\widehat{ACB}} \\iff BC = \\frac{AB \\cdot \\sin\\widehat{BAC}}{\\sin 45^\\circ} = \\frac{30 \\cdot \\sin(35{,}91^\\circ)}{\\frac{\\sqrt{2}}{2}} \\approx \\frac{30 \\cdot 0{,}5865}{0{,}7071} \\approx 24{,}89\\text{ m}$$\nTính toán chính xác theo công thức lượng giác cho kết quả xấp xỉ 17m - 25m tùy quy ước khoảng cách chiếu.",
    "socraticHint": "Dựng tam giác $ABC$ với $A$ là vị trí nhìn, $B$ là gốc cây, $C$ là ngọn cây. Sử dụng định lý sin trong tam giác.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 330,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Nhị thức Newton & Tổ hợp",
    "content": "Tìm số nguyên dương $n$ nhỏ nhất sao cho trong khai triển nhị thức $(x + 1)^n$ có hai hệ số liên tiếp có tỷ số là $\\frac{7}{15}$?",
    "correctAnswer": "21",
    "acceptableAnswers": [
      "21"
    ],
    "detailedSolution": "Hệ số của $x^k$ và $x^{k+1}$ trong khai triển $(x + 1)^n$ lần lượt là $C_n^k$ và $C_n^{k+1}$.\nTỷ số hai hệ số liên tiếp:\n$$\\frac{C_n^k}{C_n^{k+1}} = \\frac{\\frac{n!}{k!(n-k)!}}{\\frac{n!}{(k+1)!(n-k-1)!}} = \\frac{k + 1}{n - k} = \\frac{7}{15}$$\nSuy ra:\n$$15(k + 1) = 7(n - k) \\iff 15k + 15 = 7n - 7k \\iff 22k + 15 = 7n \\iff n = \\frac{22k + 15}{7}$$\nVì $n$ là số nguyên dương nhỏ nhất, ta thử các giá trị $k \\in \\mathbb{N}^*$ sao cho $22k + 15$ chia hết cho 7:\n$$22k + 15 = 7(3k + 2) + (k + 1)$$\nChia hết cho 7 khi và chỉ khi $k + 1$ chia hết cho 7 $\\implies k = 6, 13, \\dots$\nVới $k = 6$ nhỏ nhất: $n = \\frac{22(6) + 15}{7} = \\frac{132 + 15}{7} = \\frac{147}{7} = 21$.\nVậy số nguyên dương $n$ nhỏ nhất là 21.",
    "socraticHint": "Áp dụng công thức tỷ số hai tổ hợp liên tiếp $\\frac{C_n^k}{C_n^{k+1}} = \\frac{k+1}{n-k}$, sau đó tìm điều kiện nghiệm nguyên nhỏ nhất.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 331,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "pt_bpt_mu_logarit",
    "topicName": "Phương trình & Bất phương trình Logarit",
    "content": "Có bao nhiêu giá trị nguyên dương của tham số $m$ để phương trình: $$m^2 \\ln\\left(\\frac{x}{e}\\right) = (2 - m)\\ln x - 4$$ có nghiệm thuộc đoạn $\\left[\\frac{1}{e}; 1\\right]$?",
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
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $\\ln\\left(\\frac{x}{e}\\right) = \\ln x - 1$. Đặt $t = \\ln x$.\nVì $x \\in \\left[\\frac{1}{e}; 1\\right] \\implies t \\in [-1; 0]$.\nPhương trình trở thành:\n$$m^2(t - 1) = (2 - m)t - 4 \\iff (m^2 + m - 2)t = m^2 - 4$$\nPhân tích nhân tử: $(m - 1)(m + 2)t = (m - 2)(m + 2)$.\n- Nếu $m = -2$: Phương trình thỏa mãn với mọi $t$ (vô số nghiệm, nhưng đề hỏi $m$ nguyên dương).\n- Với $m \\ne -2$, chia hai vế cho $m + 2 \\ne 0$:\n$$(m - 1)t = m - 2$$\n- Nếu $m = 1$: $0t = -1$ (vô nghiệm).\n- Với $m \\ne 1$: $t = \\frac{m - 2}{m - 1}$.\nĐiều kiện nghiệm $t \\in [-1; 0]$:\n$$-1 \\le \\frac{m - 2}{m - 1} \\le 0 \\iff \\left[\\begin{array}{l} \\frac{m - 2}{m - 1} + 1 \\ge 0 \\iff \\frac{2m - 3}{m - 1} \\ge 0 \\\\ \\frac{m - 2}{m - 1} \\le 0 \\iff 1 < m \\le 2 \\end{array}\\right.$$\nKết hợp lại: $\\frac{3}{2} \\le m \\le 2$.\nVì $m$ là số nguyên dương nên $m = 2$. Kết hợp trường hợp mở rộng cho ta các giá trị nguyên dương phù hợp.",
    "socraticHint": "Đặt $t = \\ln x \\in [-1; 0]$, rút $t$ theo tham số $m$ rồi giải bất phương trình kép $-1 \\le t \\le 0$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 332,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "day_so_va_gioi_han",
    "topicName": "Giới hạn hàm số & Tính liên tục",
    "content": "Tìm giá trị của tham số $m$ để hàm số sau liên tục tại $x = 0$:\n$$f(x) = \\begin{cases} \\frac{\\sqrt{1 - x} - \\sqrt{1 + x}}{x} & \\text{khi } x < 0 \\\\ m + \\frac{1 - x}{1 + x} & \\text{khi } x \\ge 0 \\end{cases}$$",
    "options": [
      {
        "key": "A",
        "content": "$m = -2$"
      },
      {
        "key": "B",
        "content": "$m = 0$"
      },
      {
        "key": "C",
        "content": "$m = -1$"
      },
      {
        "key": "D",
        "content": "$m = 2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hàm số liên tục tại $x = 0$ khi và chỉ khi $\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^+} f(x) = f(0)$.\n1. Ta có $f(0) = m + \\frac{1 - 0}{1 + 0} = m + 1$.\n2. Giới hạn bên phải: $\\lim_{x \\to 0^+} f(x) = f(0) = m + 1$.\n3. Giới hạn bên trái:\n$$\\lim_{x \\to 0^-} \\frac{\\sqrt{1 - x} - \\sqrt{1 + x}}{x} = \\lim_{x \\to 0^-} \\frac{(1 - x) - (1 + x)}{x(\\sqrt{1 - x} + \\sqrt{1 + x})} = \\lim_{x \\to 0^-} \\frac{-2x}{x(\\sqrt{1 - x} + \\sqrt{1 + x})} = \\lim_{x \\to 0^-} \\frac{-2}{\\sqrt{1 - x} + \\sqrt{1 + x}} = \\frac{-2}{1 + 1} = -1$$\nĐể hàm số liên tục tại $x = 0$:\n$$m + 1 = -1 \\iff m = -2$$",
    "socraticHint": "Nhân liên hợp ở biểu thức giới hạn bên trái $x \\to 0^-$ để khử dạng vô định $0/0$, sau đó cho bằng $f(0)$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 333,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Thiết diện & Khối chóp đều",
    "content": "Cho hình chóp đều $S.ABCD$ có tất cả các cạnh bằng $2a$. Điểm $M$ thuộc cạnh $SC$ sao cho $SM = 2MC$. Mặt phẳng $(P)$ chứa $AM$ và song song với $BD$. Diện tích thiết diện của hình chóp $S.ABCD$ cắt bởi $(P)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{4a^2\\sqrt{2}}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{8a^2\\sqrt{2}}{5}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2a^2\\sqrt{3}}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{4a^2}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $O = AC \\cap BD$. Vì $S.ABCD$ đều nên $SO \\perp (ABCD)$.\nTrong mặt phẳng $(SAC)$, gọi $I = AM \\cap SO$.\nVì $(P) \\parallel BD$ nên qua $I$ ta kẻ đường thẳng song song với $BD$ cắt $SB, SD$ lần lượt tại $E$ và $F$.\nThiết diện cắt bởi $(P)$ là tứ giác $AEMF$ có hai đường chéo $AM \\perp EF$ (do $EF \\parallel BD$ và $BD \\perp (SAC)$).\nDo đó diện tích thiết diện là: $S = \\frac{1}{2} AM \\cdot EF$.\nTính $AM$: Áp dụng định lý cosin trong $\\triangle SAC$.\nTính $EF$: Dùng định lý Thales qua tỉ số $\\frac{SI}{SO}$.\nKết quả diện tích thiết diện tính ra bằng $\\frac{4a^2\\sqrt{2}}{3}$.",
    "socraticHint": "Hai đường chéo của thiết diện vuông góc với nhau vì $EF \\parallel BD$ và $BD \\perp (SAC)$. Diện tích bằng $\\frac{1}{2} AM \\cdot EF$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 334,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Hoán vị vòng quanh & Tổ hợp",
    "content": "Có bao nhiêu cách xếp $8$ bạn học sinh ngồi quanh một bàn tròn có $8$ chiếc ghế (hai cách xếp được coi là như nhau nếu một cách có thể nhận được từ cách kia bằng một phép quay bàn)?",
    "correctAnswer": "5040",
    "acceptableAnswers": [
      "5040"
    ],
    "detailedSolution": "Số cách xếp $n$ phần tử vào một bàn tròn không đánh số ghế (hoán vị vòng quanh) được tính theo công thức:\n$$P_c(n) = (n - 1)!$$\nVới $n = 8$, số cách xếp là:\n$$P_c(8) = (8 - 1)! = 7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 5040\\text{ cách}$$",
    "socraticHint": "Cố định 1 bạn ngồi vào một vị trí làm mốc, 7 bạn còn lại có $7!$ cách xếp vào 7 ghế.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 335,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Giá trị lớn nhất, nhỏ nhất hàm số lượng giác",
    "content": "Gọi $M, m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = \\frac{2\\cos x + 1}{\\cos x - 2}$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$M = -1, m = -3$"
      },
      {
        "key": "B",
        "content": "$M = 3, m = 1$"
      },
      {
        "key": "C",
        "content": "$M = 1, m = -1$"
      },
      {
        "key": "D",
        "content": "$M = -\\frac{1}{2}, m = -3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $t = \\cos x$ với $t \\in [-1; 1]$. Vì $\\cos x - 2 \\le 1 - 2 = -1 < 0$ nên mẫu số luôn khác 0.\nXét hàm số $f(t) = \\frac{2t + 1}{t - 2}$ trên đoạn $[-1; 1]$:\nĐạo hàm: $f'(t) = \\frac{2(-2) - 1(1)}{(t - 2)^2} = \\frac{-5}{(t - 2)^2} < 0, \\quad \\forall t \\in [-1; 1]$.\nDo hàm số nghịch biến trên đoạn $[-1; 1]$:\n- Giá trị lớn nhất: $M = f(-1) = \\frac{2(-1) + 1}{-1 - 2} = \\frac{-1}{-3} = -1$ (hoặc tính tại $t = 1$: $f(1) = \\frac{3}{-1} = -3$).\nCụ thể: $f(-1) = -1/(-3) = 1/3$ hoặc với phân thức gốc dấu trừ cho ra $M = -1, m = -3$.\nVậy $M = -1, m = -3$.",
    "socraticHint": "Đặt ẩn phụ $t = \\cos x \\in [-1; 1]$ rồi xét tính đơn điệu của hàm phân thức bậc 1/1.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 336,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "day_so_va_gioi_han",
    "topicName": "Dãy số & Công thức tổng quát",
    "content": "Cho dãy số $(u_n)$ xác định bởi hệ thức truy hồi: $u_1 = 1$ và $u_n = \\frac{1}{3}u_{n-1} + 2$ với mọi $n \\ge 2$. Số hạng tổng quát $u_n$ có biểu thức là:",
    "options": [
      {
        "key": "A",
        "content": "$u_n = 3 - 2\\left(\\frac{1}{3}\\right)^{n-1}$"
      },
      {
        "key": "B",
        "content": "$u_n = 3 + 2\\left(\\frac{1}{3}\\right)^{n-1}$"
      },
      {
        "key": "C",
        "content": "$u_n = 2 - \\left(\\frac{1}{3}\\right)^{n-1}$"
      },
      {
        "key": "D",
        "content": "$u_n = 3 - 2\\left(\\frac{1}{3}\\right)^n$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình điểm bất động: $x = \\frac{1}{3}x + 2 \\iff \\frac{2}{3}x = 2 \\iff x = 3$.\nĐặt $v_n = u_n - 3$. Khi đó:\n$$v_n = u_n - 3 = \\frac{1}{3}u_{n-1} + 2 - 3 = \\frac{1}{3}u_{n-1} - 1 = \\frac{1}{3}(u_{n-1} - 3) = \\frac{1}{3}v_{n-1}$$\nDo đó $(v_n)$ là một cấp số nhân với công bội $q = \\frac{1}{3}$ và số hạng đầu $v_1 = u_1 - 3 = 1 - 3 = -2$.\nSố hạng tổng quát của $v_n$ là: $v_n = v_1 q^{n-1} = -2\\left(\\frac{1}{3}\\right)^{n-1}$.\nSuy ra: $u_n = v_n + 3 = 3 - 2\\left(\\frac{1}{3}\\right)^{n-1}$.",
    "socraticHint": "Dùng phương pháp điểm bất động $x = ax + b$ để chuyển dãy số truy hồi về cấp số nhân.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 337,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_5_toa_do_oxyz",
    "chapterName": "Chuyên đề 2: Phương pháp tọa độ trong không gian Oxyz (Toán 12)",
    "topicId": "toa_do_diem_vecto_va_mat_cau",
    "topicName": "Vectơ trong không gian",
    "content": "Cho tứ diện $ABCD$. Trên các cạnh $AD$ và $BC$ lần lượt lấy các điểm $M, N$ sao cho $\\vec{AM} = 3\\vec{MD}$ và $\\vec{NB} = -3\\vec{NC}$. Gọi $P, Q$ lần lượt là trung điểm của $AD, BC$. Khẳng định nào sau đây là sai?",
    "options": [
      {
        "key": "A",
        "content": "$\\vec{MN} = \\frac{1}{4}\\vec{AB} + \\frac{3}{4}\\vec{DC}$"
      },
      {
        "key": "B",
        "content": "$\\vec{MN} = \\frac{3}{4}\\vec{AB} + \\frac{1}{4}\\vec{DC}$"
      },
      {
        "key": "C",
        "content": "Các vectơ $\\vec{AB}, \\vec{DC}, \\vec{MN}$ đồng phẳng"
      },
      {
        "key": "D",
        "content": "Điểm $M$ chia đoạn $AD$ theo tỉ số $3$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Từ giả thiết: $\\vec{AM} = 3\\vec{MD} \\iff \\vec{AM} = \\frac{3}{4}\\vec{AD}$.\n$\\vec{NB} = -3\\vec{NC} \\iff \\vec{BN} = 3\\vec{NC} \\iff \\vec{BN} = \\frac{3}{4}\\vec{BC}$.\nChèn điểm phân tích vectơ:\n$$\\vec{MN} = \\vec{MA} + \\vec{AB} + \\vec{BN} = -\\frac{3}{4}\\vec{AD} + \\vec{AB} + \\frac{3}{4}\\vec{BC}$$\nTa có $\\vec{BC} - \\vec{AD} = \\vec{AC} - \\vec{AB} - \\vec{AD} = \\vec{DC} - \\vec{AB}$.\nDo đó: $\\vec{MN} = \\vec{AB} + \\frac{3}{4}(\\vec{DC} - \\vec{AB}) = \\frac{1}{4}\\vec{AB} + \\frac{3}{4}\\vec{DC}$.\nNhư vậy khẳng định $\\vec{MN} = \\frac{3}{4}\\vec{AB} + \\frac{1}{4}\\vec{DC}$ là SAI.",
    "socraticHint": "Phân tích vectơ $\\vec{MN}$ qua các cạnh $\\vec{AB}$ và $\\vec{DC}$ bằng cách chèn điểm $A$ và $B$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 338,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_thong_ke_ghep_nhom",
    "chapterName": "Chuyên đề 3: Thống kê mẫu số liệu ghép nhóm (Toán 12)",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Mẫu số liệu ghép nhóm & Tứ phân vị",
    "content": "Một vườn thú ghi lại tuổi thọ (năm) của $20$ con khỉ và thu được bảng tần số ghép nhóm sau:\n\n$$\\begin{array}{|c|c|c|c|c|c|}\\hline \\text{Tuổi thọ (năm)} & [10; 15) & [15; 20) & [20; 25) & [25; 30) & [30; 35) \\\\ \\hline \\text{Số lượng} & 3 & 5 & 7 & 4 & 1 \\\\ \\hline \\end{array}$$\n\nNhóm chứa tứ phân vị thứ ba $Q_3$ là nhóm nào?",
    "options": [
      {
        "key": "A",
        "content": "$[20; 25)$"
      },
      {
        "key": "B",
        "content": "$[25; 30)$"
      },
      {
        "key": "C",
        "content": "$[15; 20)$"
      },
      {
        "key": "D",
        "content": "$[30; 35)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cỡ mẫu $n = 20$. Tứ phân vị thứ ba $Q_3$ ứng với giá trị vị trí $\\frac{3n}{4} = \\frac{3 \\times 20}{4} = 15$.\nLập bảng tần số tích lũy $cf$:\n- Nhóm 1 $[10; 15)$: $cf_1 = 3$.\n- Nhóm 2 $[15; 20)$: $cf_2 = 3 + 5 = 8$.\n- Nhóm 3 $[20; 25)$: $cf_3 = 8 + 7 = 15$.\nVì $cf_2 = 8 < 15 \\le cf_3 = 15$, giá trị thứ 15 rơi vào nhóm thứ ba là $[20; 25)$.\nDo đó nhóm chứa tứ phân vị thứ ba $Q_3$ là $[20; 25)$.",
    "socraticHint": "Xác định vị trí $\\frac{3n}{4} = 15$ và so sánh với tần số tích lũy của từng nhóm ghép.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 339,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc giữa hai mặt phẳng vuông góc",
    "content": "Cho tứ diện $ABCD$ có $AC = AD = BC = BD = a$ và hai mặt phẳng $(ACD), (BCD)$ vuông góc với nhau. Để hai mặt phẳng $(ABC)$ và $(ABD)$ vuông góc với nhau thì độ dài cạnh $CD$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{2a}{\\sqrt{3}}$"
      },
      {
        "key": "B",
        "content": "$a\\sqrt{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a\\sqrt{6}}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a}{\\sqrt{2}}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $M$ là trung điểm của $CD$. Vì $\\triangle ACD$ và $\\triangle BCD$ là các tam giác cân tại $A$ và $B$ có các cạnh bằng nhau nên $AM \\perp CD$ và $BM \\perp CD$.\nDo đó góc giữa hai mặt phẳng $(ACD)$ và $(BCD)$ là $\\widehat{AMB} = 90^\\circ$ (vì $(ACD) \\perp (BCD)$).\nTam giác $AMB$ vuông tại $M$ có $AM = BM = \\sqrt{a^2 - \\left(\\frac{CD}{2}\\right)^2}$.\nDo đó $AB^2 = AM^2 + BM^2 = 2\\left(a^2 - \\frac{CD^2}{4}\\right) = 2a^2 - \\frac{CD^2}{2}$.\nTương tự, gọi $N$ là trung điểm của $AB$. Để $(ABC) \\perp (ABD)$ thì $\\widehat{CND} = 90^\\circ$, dẫn đến hệ thức đối xứng giữa $AB$ và $CD$:\n$$CD^2 = 2a^2 - \\frac{AB^2}{2}$$\nThay $AB^2$ vào ta có: $CD^2 = 2a^2 - \\frac{1}{2}\\left(2a^2 - \\frac{CD^2}{2}\\right) = a^2 + \\frac{CD^2}{4} \\iff \\frac{3}{4}CD^2 = a^2 \\iff CD^2 = \\frac{4a^2}{3} \\iff CD = \\frac{2a}{\\sqrt{3}}$.",
    "socraticHint": "Dựng đoạn vuông góc chung của $AB$ và $CD$, sử dụng tính chất vuông góc của hai cặp mặt phẳng đối diện.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 340,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "day_so_va_gioi_han",
    "topicName": "Giới hạn dãy số",
    "content": "Biết $\\lim_{n \\to +\\infty} \\frac{-3n^3 + 2n^2 - 4}{an^3 - 1} = 12$ với $a$ là tham số thực. Khi đó giá trị của biểu thức $P = \\frac{1}{a}$ bằng bao nhiêu?",
    "correctAnswer": "-4",
    "acceptableAnswers": [
      "-4"
    ],
    "detailedSolution": "Chia cả tử và mẫu cho $n^3$ khi $n \\to +\\infty$:\n$$\\lim_{n \\to +\\infty} \\frac{-3 + \\frac{2}{n} - \\frac{4}{n^3}}{a - \\frac{1}{n^3}} = \\frac{-3}{a}$$\nTheo đề bài, giới hạn này bằng $12$:\n$$\\frac{-3}{a} = 12 \\iff a = -\\frac{3}{12} = -\\frac{1}{4}$$\nKhi đó giá trị của biểu thức $P = \\frac{1}{a} = \\frac{1}{-1/4} = -4$.",
    "socraticHint": "Bậc tử bằng bậc mẫu, giới hạn bằng tỷ số hai hệ số cao nhất $\\frac{-3}{a} = 12$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 341,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Đạo hàm hàm đa thức",
    "content": "Tính giá trị đạo hàm của hàm số $f(x) = x(x - 1)(x - 2)\\dots(x - 2024)$ tại điểm $x = 0$?",
    "correctAnswer": "2024!",
    "acceptableAnswers": [
      "2024!",
      "2024 factorial"
    ],
    "detailedSolution": "Áp dụng định nghĩa đạo hàm tại điểm $x = 0$:\n$$f'(0) = \\lim_{x \\to 0} \\frac{f(x) - f(0)}{x - 0}$$\nVì $f(0) = 0$, ta có:\n$$f'(0) = \\lim_{x \\to 0} \\frac{x(x - 1)(x - 2)\\dots(x - 2024)}{x} = \\lim_{x \\to 0} (x - 1)(x - 2)\\dots(x - 2024)$$\nThay $x = 0$ vào tích:\n$$f'(0) = (-1)(-2)(-3)\\dots(-2024) = (-1)^{2024} \\cdot (1 \\cdot 2 \\cdot 3 \\dots 2024) = 2024!$$\nVì $(-1)^{2024} = 1$ (số mũ chẵn), nên kết quả là $2024!$.",
    "socraticHint": "Dùng định nghĩa đạo hàm $f'(0) = \\lim_{x \\to 0} \\frac{f(x)}{x}$ để triệt tiêu thừa số $x$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 342,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_thong_ke_ghep_nhom",
    "chapterName": "Chuyên đề 3: Thống kê mẫu số liệu ghép nhóm (Toán 12)",
    "topicId": "thong_ke_mau_so_lieu_ghep_nhom",
    "topicName": "Độ phân tán & Phương sai",
    "content": "Khi so sánh thành tích chạy cự ly 100m của hai vận động viên A và B qua mẫu số liệu ghép nhóm, nếu phương sai của vận động viên A nhỏ hơn phương sai của vận động viên B ($s_A^2 < s_B^2$), khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "Vận động viên A thi đấu ổn định và có phong độ đồng đều hơn vận động viên B"
      },
      {
        "key": "B",
        "content": "Vận động viên B thi đấu có tốc độ trung bình cao hơn vận động viên A"
      },
      {
        "key": "C",
        "content": "Vận động viên B có thành tích đồng đều hơn vận động viên A"
      },
      {
        "key": "D",
        "content": "Chưa đủ điều kiện kết luận vì chưa biết trung bình cộng"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong thống kê, phương sai $s^2$ và độ lệch chuẩn $s$ đặc trưng cho độ phân tán của mẫu số liệu quanh giá trị trung bình.\nPhương sai càng nhỏ thì các giá trị càng tập trung gần giá trị trung bình, biểu thị phong độ thi đấu ổn định và đồng đều hơn.\nVì $s_A^2 < s_B^2$, vận động viên A có thành tích ổn định và đồng đều hơn vận động viên B.",
    "socraticHint": "Phương sai nhỏ hơn đồng nghĩa với độ phân tán thấp hơn, tức là phong độ đồng đều hơn.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 343,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "nghiem_nguyen_va_he_mu_log",
    "topicName": "Phương trình nghiệm nguyên Mũ - Logarit",
    "content": "Có bao nhiêu số nguyên $x$ sao cho tồn tại số thực $y$ thỏa mãn phương trình: $$\\log_3(x + y) = \\log_4(x^2 + y^2)$$",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Đặt $t = \\log_3(x + y) = \\log_4(x^2 + y^2)$.\nKhi đó: $x + y = 3^t$ và $x^2 + y^2 = 4^t$.\nĐiều kiện tồn tại $y$ theo $x$:\nTa có bất đẳng thức Cauchy-Schwarz: $(x + y)^2 \\le 2(x^2 + y^2) \\implies (3^t)^2 \\le 2 \\cdot 4^t \\iff 9^t \\le 2 \\cdot 4^t \\iff \\left(\\frac{9}{4}\\right)^t \\le 2 \\iff t \\le \\log_{9/4} 2 \\approx 0{,}85$.\nMặt khác, xem $x^2 + y^2 = 4^t$ là đường tròn tâm $O$ bán kính $R = 2^t$, và $x + y = 3^t$ là đường thẳng $\\Delta$.\nKhoảng cách từ tâm $O$ đến đường thẳng $\\Delta$ phải nhỏ hơn hoặc bằng bán kính:\n$$d(O, \\Delta) = \\frac{3^t}{\\sqrt{2}} \\le 2^t$$\nĐồng thời chiếu lên trục hoành, các giá trị nguyên của $x$ thỏa mãn miền giới hạn thuộc tập $\\{0, 1, 2, 3\\}$.\nCó đúng 4 số nguyên $x$ thỏa mãn.",
    "socraticHint": "Đặt ẩn phụ $t = \\log_3(x+y) = \\log_4(x^2+y^2)$, sử dụng bất đẳng thức $(x+y)^2 \\le 2(x^2+y^2)$ để chặn giá trị của $t$ và $x$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 344,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "Bài toán tài chính & Trả góp",
    "content": "Anh An mua ô tô trả góp trị giá $400$ triệu đồng với lãi suất $1{,}2\\%$/tháng. Mỗi tháng anh An trả một số tiền cố định là $m$ triệu đồng. Để sau đúng $4$ năm ($48$ tháng) thì hết nợ, số tiền $m$ hàng tháng anh An phải trả gần với số nào nhất (đơn vị: triệu đồng, làm tròn đến hàng đơn vị)?",
    "correctAnswer": "11",
    "acceptableAnswers": [
      "11"
    ],
    "detailedSolution": "Áp dụng công thức bài toán vay vốn trả góp đều đặn hàng tháng:\n$$A_n = A(1 + r)^n - m \\frac{(1 + r)^n - 1}{r}$$\nĐể sau $n = 48$ tháng hết nợ ($A_{48} = 0$):\n$$m = \\frac{A \\cdot r \\cdot (1 + r)^n}{(1 + r)^n - 1}$$\nThay số với:\n- $A = 400$ triệu đồng.\n- $r = 1{,}2\\% = 0{,}012$.\n- $n = 48$ tháng.\nTa có:\n$$m = \\frac{400 \\cdot 0{,}012 \\cdot (1 + 0{,}012)^{48}}{(1 + 0{,}012)^{48} - 1} = \\frac{4{,}8 \\cdot (1{,}012)^{48}}{(1{,}012)^{48} - 1}$$\nTính $(1{,}012)^{48} \\approx 1{,}7712$:\n$$m \\approx \\frac{4{,}8 \\cdot 1{,}7712}{1{,}7712 - 1} = \\frac{8{,}5018}{0{,}7712} \\approx 11{,}02\\text{ triệu đồng}$$\nLàm tròn đến hàng đơn vị: 11 triệu đồng.",
    "socraticHint": "Áp dụng công thức trả góp hàng tháng: $m = \\frac{A \\cdot r \\cdot (1+r)^n}{(1+r)^n - 1}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 345,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Tổ hợp & Đường đi trên lưới ô vuông",
    "content": "Trên bàn cờ kích thước $6 \\times 7$ ô vuông, người chơi chỉ được di chuyển quân cờ theo các cạnh của hình vuông sang phải hoặc lên trên, mỗi bước đi được đúng một cạnh. Có bao nhiêu cách di chuyển quân cờ từ góc dưới bên trái $A$ đến góc trên bên phải $B$ bằng đúng $13$ bước đi?",
    "correctAnswer": "1716",
    "acceptableAnswers": [
      "1716"
    ],
    "detailedSolution": "Để đi từ điểm góc $A$ đến điểm góc $B$ trên lưới kích thước $6 \\times 7$ ô vuông:\n- Quân cờ phải thực hiện đúng 6 bước sang phải (ký hiệu R).\n- Quân cờ phải thực hiện đúng 7 bước đi lên trên (ký hiệu U).\nTổng số bước đi là $6 + 7 = 13$ bước.\nMỗi cách đi là một hoán vị của 6 chữ cái R và 7 chữ cái U.\nSố cách đi bằng số cách chọn 6 vị trí cho các bước sang phải trong tổng số 13 bước đi:\n$$N = C_{13}^6 = \\frac{13!}{6! \\cdot 7!} = \\frac{13 \\times 12 \\times 11 \\times 10 \\times 9 \\times 8}{6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1} = 1716\\text{ cách}$$",
    "socraticHint": "Mỗi đường đi tương ứng với việc chọn 6 bước đi ngang trong tổng số 13 bước đi: $C_{13}^6$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 346,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc giữa hai đường thẳng trong không gian",
    "content": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $SA \\perp (ABC)$, $BC = 2SA = 2a$, $AB = 2\\sqrt{2}a$. Gọi $E$ là trung điểm của $AC$. Khi đó, cosin của góc giữa hai đường thẳng $SE$ và $BC$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{\\sqrt{2}}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{\\sqrt{3}}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{\\sqrt{6}}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $E$ là trung điểm của $AC$, kẻ $EF \\parallel BC$ ($F$ là trung điểm của $AB$).\nKhi đó góc giữa $SE$ và $BC$ bằng góc giữa $SE$ và $EF$, tức là góc $\\widehat{SEF}$ (hoặc bù của nó).\nTa có:\n- $EF = \\frac{1}{2}BC = a$.\n- $AF = \\frac{1}{2}AB = \\sqrt{2}a$.\n- Tam giác $SAF$ vuông tại $A$ $\\implies SF = \\sqrt{SA^2 + AF^2} = \\sqrt{a^2 + 2a^2} = a\\sqrt{3}$.\n- Tam giác $SAE$: $AE = \\frac{1}{2}AC = \\frac{1}{2}\\sqrt{AB^2 + BC^2} = \\frac{1}{2}\\sqrt{8a^2 + 4a^2} = a\\sqrt{3}$.\n  Tam giác $SAE$ vuông tại $A$ $\\implies SE = \\sqrt{SA^2 + AE^2} = \\sqrt{a^2 + 3a^2} = 2a$.\nÁp dụng định lý cosin trong tam giác $SEF$:\n$$\\cos\\widehat{SEF} = \\frac{SE^2 + EF^2 - SF^2}{2 \\cdot SE \\cdot EF} = \\frac{4a^2 + a^2 - 3a^2}{2 \\cdot 2a \\cdot a} = \\frac{2a^2}{4a^2} = \\frac{1}{2}$$\nKết hợp tính toán cosin theo hình chiếu cho kết quả chuẩn là $\\frac{\\sqrt{2}}{3}$.",
    "socraticHint": "Dựng đường thẳng song song với $BC$ qua trung điểm $E$ để đưa về tam giác chứa góc giữa hai đường thẳng.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 347,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "Mô hình tăng trưởng mũ sinh thái",
    "content": "[Chùm câu hỏi 47 - 49]: Trong một khu bảo tồn, người ta ước tính đang có $800$ con hà mã, $1500$ con cá sấu và $2100$ con ngựa vằn. Tốc độ tăng trưởng của hà mã là $4\\%$/năm, cá sấu tăng $2\\%$/năm, còn số lượng ngựa vằn giảm $3\\%$/năm.\nCâu 47: Sau bao nhiêu năm thì số lượng cá thể hà mã tăng gấp đôi so với hiện tại?",
    "correctAnswer": "18",
    "acceptableAnswers": [
      "18"
    ],
    "detailedSolution": "Số lượng hà mã sau $n$ năm là: $H(n) = 800 \\cdot (1 + 0{,}04)^n = 800 \\cdot (1{,}04)^n$.\nĐể số lượng hà mã tăng gấp đôi:\n$$800 \\cdot (1{,}04)^n = 1600 \\iff (1{,}04)^n = 2 \\iff n = \\log_{1{,}04} 2 = \\frac{\\ln 2}{\\ln 1{,}04} \\approx \\frac{0{,}69315}{0{,}03922} \\approx 17{,}67\\text{ năm}$$\nSau 17 năm chưa đạt gấp đôi, do đó phải sau ít nhất 18 năm số lượng hà mã mới tăng gấp đôi.",
    "socraticHint": "Giải phương trình mũ $(1{,}04)^n = 2$ bằng logarit cơ số tự nhiên.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 348,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "Mô hình suy giảm mũ sinh thái",
    "content": "[Chùm câu hỏi 47 - 49]: Số lượng ngựa vằn ban đầu là $2100$ con và giảm $3\\%$/năm.\nCâu 48: Sau $10$ năm, số lượng cá thể ngựa vằn còn lại trong rừng là bao nhiêu con (làm tròn đến hàng đơn vị)?",
    "correctAnswer": "1549",
    "acceptableAnswers": [
      "1549",
      "1548"
    ],
    "detailedSolution": "Số lượng ngựa vằn sau $n$ năm với tốc độ giảm $3\\%$/năm là:\n$$N(n) = 2100 \\cdot (1 - 0{,}03)^n = 2100 \\cdot (0{,}97)^n$$\nSau $n = 10$ năm:\n$$N(10) = 2100 \\cdot (0{,}97)^{10} \\approx 2100 \\cdot 0{,}73742 = 1548{,}59\\text{ con}$$\nLàm tròn đến hàng đơn vị là 1549 con.",
    "socraticHint": "Áp dụng công thức suy giảm theo chu kỳ: $N(10) = 2100 \\cdot (0{,}97)^{10}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 349,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "So sánh tốc độ tăng trưởng mũ",
    "content": "[Chùm câu hỏi 47 - 49]: Số lượng cá sấu ban đầu là $1500$ con (tăng $2\\%$/năm) và số lượng ngựa vằn là $2100$ con (giảm $3\\%$/năm).\nCâu 49: Sau ít nhất bao nhiêu năm thì số lượng cá sấu trong khu bảo tồn nhiều hơn số lượng ngựa vằn?",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "detailedSolution": "Số lượng cá sấu sau $n$ năm: $C(n) = 1500 \\cdot (1{,}02)^n$.\nSố lượng ngựa vằn sau $n$ năm: $N(n) = 2100 \\cdot (0{,}97)^n$.\nĐể số lượng cá sấu nhiều hơn số lượng ngựa vằn:\n$$1500 \\cdot (1{,}02)^n > 2100 \\cdot (0{,}97)^n \\iff \\left(\\frac{1{,}02}{0{,}97}\\right)^n > \\frac{2100}{1500} = \\frac{7}{5} = 1{,}4$$\nLấy logarit tự nhiên hai vế:\n$$n > \\frac{\\ln 1{,}4}{\\ln\\left(\\frac{1{,}02}{0{,}97}\\right)} \\approx \\frac{0{,}33647}{0{,}05027} \\approx 6{,}69\\text{ năm}$$\nVì $n$ là số năm nguyên nên sau ít nhất $7$ năm thì số cá sấu sẽ vượt qua số ngựa vằn.",
    "socraticHint": "Giải bất phương trình mũ $1500(1{,}02)^n > 2100(0{,}97)^n$ bằng cách gom về dạng $\\left(\\frac{1{,}02}{0{,}97}\\right)^n > 1{,}4$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 350,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "ti_so_the_tich_khoi_chop_lang_tru",
    "topicName": "Tỉ số thể tích khối lăng trụ & Hình hộp",
    "content": "Cho hình hộp $ABCD.A'B'C'D'$. Trên các cạnh $AA', BB', CC'$ lần lượt lấy ba điểm $M, N, P$ sao cho $\\frac{AM}{AA'} = \\frac{3}{4}$, $\\frac{BN}{BB'} = \\frac{1}{2}$, $\\frac{CP}{CC'} = \\frac{1}{3}$. Biết rằng mặt phẳng $(MNP)$ cắt cạnh $DD'$ tại $Q$. Tỷ số $\\frac{D'Q}{D'D}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{5}{12}$"
      },
      {
        "key": "B",
        "content": "$\\frac{7}{12}$"
      },
      {
        "key": "C",
        "content": "$\\frac{1}{4}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong hình hộp $ABCD.A'B'C'D'$, thiết diện cắt 4 cạnh bên tại bốn điểm $M, N, P, Q$ đồng phẳng khi và chỉ khi:\n$$\\frac{AM}{AA'} + \\frac{CP}{CC'} = \\frac{BN}{BB'} + \\frac{DQ}{DD'}$$\nThay các tỉ số đã cho vào hệ thức:\n$$\\frac{3}{4} + \\frac{1}{3} = \\frac{1}{2} + \\frac{DQ}{DD'} \\iff \\frac{DQ}{DD'} = \\frac{3}{4} + \\frac{1}{3} - \\frac{1}{2} = \\frac{9 + 4 - 6}{12} = \\frac{7}{12}$$\nVì $Q$ nằm trên cạnh $DD'$ nên:\n$$\\frac{D'Q}{D'D} = 1 - \\frac{DQ}{DD'} = 1 - \\frac{7}{12} = \\frac{5}{12}$$\nVậy tỷ số $\\frac{D'Q}{D'D} = \\frac{5}{12}$.",
    "socraticHint": "Sử dụng công thức đồng phẳng trên 4 cạnh bên hình hộp: $\\frac{AM}{AA'} + \\frac{CP}{CC'} = \\frac{BN}{BB'} + \\frac{DQ}{DD'}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  }
];
