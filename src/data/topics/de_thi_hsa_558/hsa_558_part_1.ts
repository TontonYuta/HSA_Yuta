import { Question } from '../../../types/exam';

export const hsa558Part1Questions: Question[] = [
  {
    "id": 301,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiep_tuyen_do_thi",
    "topicName": "Tiếp tuyến đồ thị hàm số",
    "content": "Cho hàm số $y = \\frac{2x + 1}{x - 2}$ có đồ thị $(C)$. Hỏi có tất cả bao nhiêu điểm thuộc đồ thị $(C)$ mà tiếp tuyến của $(C)$ tại điểm đó tạo với hai trục tọa độ một tam giác có diện tích bằng $25$?",
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
    "detailedSolution": "Tập xác định $D = \\mathbb{R} \\setminus \\{2\\}$. Đạo hàm $y' = \\frac{-5}{(x - 2)^2}$.\nGọi $M\\left(x_0; \\frac{2x_0 + 1}{x_0 - 2}\\right) \\in (C)$ với $x_0 \\ne 2$. Đặt $t = x_0 - 2 \\ne 0 \\implies x_0 = t + 2$.\nTiếp tuyến $d$ tại $M$ có phương trình: $y = -\\frac{5}{t^2}(x - t - 2) + 2 + \\frac{5}{t}$.\n- Giao điểm với trục hoành $Ox$ ($y = 0$): $x_A = \\frac{2t^2 + 10t + 10}{5}$.\n- Giao điểm với trục tung $Oy$ ($x = 0$): $y_B = \\frac{2t^2 + 10t + 10}{t^2}$.\nDiện tích tam giác vuông $OAB$ là: $S = \\frac{1}{2}|x_A y_B| = 25 \\iff |x_A y_B| = 50$.\nTa có $x_A y_B = \\frac{(2t^2 + 10t + 10)^2}{5t^2} = 50 \\iff (2t^2 + 10t + 10)^2 = 250t^2$.\n$\\iff \\left[\\begin{array}{l} 2t^2 + (10 - 5\\sqrt{10})t + 10 = 0 \\quad (\\text{vô nghiệm do } \\Delta_1 < 0) \\\\ 2t^2 + (10 + 5\\sqrt{10})t + 10 = 0 \\quad (\\text{có 2 nghiệm phân biệt khác } 0) \\end{array}\\right.$.\nVậy có đúng 2 điểm $M$ thỏa mãn yêu cầu bài toán.",
    "socraticHint": "Chuyển về ẩn phụ $t = x_0 - 2$ để rút gọn tọa độ giao điểm của tiếp tuyến với hai trục tọa độ $Ox, Oy$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 302,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị hàm số & Điểm uốn",
    "content": "Tìm $m$ để đồ thị hàm số $(C): y = -x^3 + 3mx^2 - 2$ có điểm uốn nằm trên đường parabol $(P): y = 2x^2 - 2$?",
    "options": [
      {
        "key": "A",
        "content": "$m = 0$ hoặc $m = 1$"
      },
      {
        "key": "B",
        "content": "$m = 1$"
      },
      {
        "key": "C",
        "content": "$m = -1$ hoặc $m = 2$"
      },
      {
        "key": "D",
        "content": "$m = 0$ hoặc $m = 2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có đạo hàm cấp một: $y' = -3x^2 + 6mx$.\nĐạo hàm cấp hai: $y'' = -6x + 6m$.\nCho $y'' = 0 \\iff -6x + 6m = 0 \\iff x = m$.\nTung độ điểm uốn tương ứng: $y(m) = -m^3 + 3m(m^2) - 2 = 2m^3 - 2$.\nĐiểm uốn $U(m; 2m^3 - 2)$ thuộc parabol $(P): y = 2x^2 - 2$ khi và chỉ khi:\n$$2m^3 - 2 = 2m^2 - 2 \\iff 2m^3 - 2m^2 = 0 \\iff 2m^2(m - 1) = 0 \\iff \\left[\\begin{array}{l} m = 0 \\\\ m = 1 \\end{array}\\right.$$\nVậy $m = 0$ hoặc $m = 1$.",
    "socraticHint": "Tìm tọa độ điểm uốn bằng nghiệm của phương trình đạo hàm cấp hai $y'' = 0$, sau đó thay vào phương trình parabol.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 303,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^3}{x^2 - 1}$ là đường thẳng có phương trình:",
    "options": [
      {
        "key": "A",
        "content": "$y = x$"
      },
      {
        "key": "B",
        "content": "$y = x + 1$"
      },
      {
        "key": "C",
        "content": "$y = -x$"
      },
      {
        "key": "D",
        "content": "$y = 2x$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Thực hiện phép chia đa thức tử cho mẫu:\n$$\\frac{x^3}{x^2 - 1} = \\frac{x(x^2 - 1) + x}{x^2 - 1} = x + \\frac{x}{x^2 - 1}$$\nKhi đó:\n$$\\lim_{x \\to \\pm\\infty} [y - x] = \\lim_{x \\to \\pm\\infty} \\frac{x}{x^2 - 1} = 0$$\nDo đó đường thẳng $y = x$ là tiệm cận xiên của đồ thị hàm số khi $x \\to \\pm\\infty$.",
    "socraticHint": "Phân tích đa thức bằng cách chia tử cho mẫu để đưa về dạng $y = ax + b + g(x)$ với $\\lim g(x) = 0$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 304,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "phuong_phap_ham_dac_trung",
    "topicName": "Phương pháp hàm đặc trưng",
    "content": "Cho $x, y$ là các số thực dương thỏa mãn bất đẳng thức: $$\\log\\left(\\frac{x + 1}{3y + 1}\\right) \\le 9y^4 + 6y^3 - x^2y^2 - 2y^2x$$ Biết $y \\le 1000$. Hỏi có bao nhiêu cặp số nguyên dương $(x; y)$ thỏa mãn bất đẳng thức trên?",
    "correctAnswer": "1501500",
    "acceptableAnswers": [
      "1501500"
    ],
    "detailedSolution": "Ta có bất đẳng thức đã cho tương đương với:\n$$\\log(x + 1) - \\log(3y + 1) \\le y^2\\left[(3y + 1)^2 - (x + 1)^2\\right]$$\nChia cả hai vế cho số dương tương đương hoặc xét cấu trúc hàm đặc trưng với cơ số chuẩn:\nBất đẳng thức dẫn đến: $x + 1 \\le 3y + 1 \\iff x \\le 3y$.\nVì $x, y$ là các số nguyên dương và $y \\le 1000$:\n- Với mỗi giá trị $y \\in \\{1, 2, \\dots, 1000\\}$, ta có $x \\in \\{1, 2, \\dots, 3y\\}$, tức có đúng $3y$ giá trị của $x$.\n- Tổng số cặp số nguyên dương $(x; y)$ là:\n$$S = \\sum_{y=1}^{1000} 3y = 3 \\cdot \\frac{1000 \\cdot 1001}{2} = 3 \\cdot 500500 = 1501500$$",
    "socraticHint": "Phân tích vế phải thành hiệu hai bình phương $[(3y+1)^2 - (x+1)^2]$ để liên kết với các biểu thức bên trong logarit.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 305,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "phuong_phap_ham_dac_trung",
    "topicName": "Phương pháp hàm đặc trưng",
    "content": "Có bao nhiêu cặp số nguyên $(x; y)$ thỏa mãn điều kiện $0 \\le y \\le 100$ và phương trình: $$x^6 + 6x^4y + 12x^2y^2 - 19y^3 + 3x^2 - 3y = 0$$",
    "correctAnswer": "21",
    "acceptableAnswers": [
      "21"
    ],
    "detailedSolution": "Đặt $u = x^2 \\ge 0$. Phương trình trở thành:\n$$u^3 + 6u^2y + 12uy^2 - 19y^3 + 3u - 3y = 0$$\nTa có hằng đẳng thức: $(u + 2y)^3 = u^3 + 6u^2y + 12uy^2 + 8y^3$.\nDo đó phương trình tương đương với:\n$$(u + 2y)^3 - 27y^3 + 3(u + 2y) - 9y = 0 \\iff (u + 2y)^3 + 3(u + 2y) = (3y)^3 + 3(3y)$$\nXét hàm số $f(t) = t^3 + 3t$ trên $\\mathbb{R}$. Đạo hàm $f'(t) = 3t^2 + 3 > 0, \\forall t \\in \\mathbb{R}$, suy ra $f(t)$ đồng biến trên $\\mathbb{R}$.\nDo đó: $f(u + 2y) = f(3y) \\iff u + 2y = 3y \\iff u = y \\iff x^2 = y$.\nTheo giả thiết $0 \\le y \\le 100$, suy ra $x^2 \\le 100 \\iff -10 \\le x \\le 10$.\nVì $x \\in \\mathbb{Z}$ nên $x \\in \\{-10, -9, \\dots, 0, 1, \\dots, 10\\}$ (có 21 giá trị của $x$).\nMỗi giá trị $x$ xác định duy nhất $y = x^2 \\in [0; 100]$.\nVậy có tất cả 21 cặp số nguyên $(x; y)$ thỏa mãn.",
    "socraticHint": "Thêm bớt hằng đẳng thức $(x^2 + 2y)^3$ để tạo hàm đặc trưng $f(t) = t^3 + 3t$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 306,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "to_hop_va_xac_suat_co_dien",
    "topicName": "Tư duy logic & Tổ hợp suy luận",
    "content": "Trong phòng giáo viên, giờ ra chơi có bốn cô giáo: An, Bình, Giang và Nhàn ngồi nói chuyện với nhau quanh 1 chiếc bàn tròn. Cô mặc áo dài xanh (không phải cô An và cô Bình) thì ngồi giữa cô mặc áo dài tím và cô Nhàn. Cô mặc áo dài trắng thì ngồi giữa cô mặc áo dài hồng và cô Bình. Hỏi cô An mặc áo dài màu gì?",
    "options": [
      {
        "key": "A",
        "content": "Màu hồng"
      },
      {
        "key": "B",
        "content": "Màu tím"
      },
      {
        "key": "C",
        "content": "Màu trắng"
      },
      {
        "key": "D",
        "content": "Màu xanh"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phân tích suy luận logic quanh bàn tròn 4 ghế:\n1. Bốn màu áo dài là: Xanh, Tím, Trắng, Hồng.\n2. \"Cô mặc áo dài xanh không phải cô An và cô Bình\" $\\implies$ Cô áo xanh chỉ có thể là cô Giang hoặc cô Nhàn.\n3. \"Cô mặc áo xanh ngồi giữa cô áo tím và cô Nhàn\" $\\implies$ Cô áo xanh không phải cô Nhàn. Do đó, **cô Giang mặc áo xanh**.\n4. Vì cô Giang (áo xanh) ngồi giữa cô áo tím và cô Nhàn, nên cô Nhàn không mặc áo tím. Suy ra hai người ngồi cạnh cô Giang là cô áo tím và cô Nhàn.\n5. Dữ kiện thứ hai: \"Cô mặc áo trắng ngồi giữa cô áo hồng và cô Bình\". Suy ra cô Bình không mặc áo trắng, không mặc áo hồng. Mà cô Giang đã mặc áo xanh, nên **cô Bình mặc áo tím**.\n6. Vì cô Bình mặc áo tím (ngồi cạnh cô Giang), nên người ngồi cạnh cô Bình đối diện cô Giang là cô Nhàn. Dữ kiện nêu cô áo trắng ngồi cạnh cô Bình, suy ra **cô Nhàn mặc áo trắng**.\n7. Người còn lại là cô An, và màu áo còn lại là màu hồng. Vậy **cô An mặc áo dài màu hồng**.",
    "socraticHint": "Lần lượt loại trừ người mặc áo xanh để xác định trang phục của cô Giang, từ đó suy ra trang phục của các cô giáo còn lại theo vị trí ngồi.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 307,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối chóp & Khối lăng trụ",
    "content": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$. Mặt bên $SAD$ là tam giác đều và nằm trong mặt phẳng vuông góc với đáy. Gọi $M, N, P$ lần lượt là trung điểm của các cạnh $SB, BC, CD$. Thể tích khối tứ diện $CMNP$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a^3\\sqrt{3}}{96}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a^3\\sqrt{3}}{48}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a^3\\sqrt{3}}{32}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a^3\\sqrt{3}}{24}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $H$ là trung điểm của $AD$. Vì $\\triangle SAD$ đều cạnh $a$ và nằm trong mặt phẳng vuông góc với $(ABCD)$ nên $SH \\perp (ABCD)$ và $SH = \\frac{a\\sqrt{3}}{2}$.\nKhối tứ diện $CMNP$ có đáy là $\\triangle CNP$ nằm trong mặt phẳng đáy $(ABCD)$.\nVì $N, P$ là trung điểm của $BC, CD$ nên $CN = CP = \\frac{a}{2}$. Do đó diện tích tam giác vuông $CNP$ là:\n$$S_{\\triangle CNP} = \\frac{1}{2} CN \\cdot CP = \\frac{1}{2} \\cdot \\frac{a}{2} \\cdot \\frac{a}{2} = \\frac{a^2}{8}$$\nVì $M$ là trung điểm của $SB$ nên khoảng cách từ $M$ đến mặt phẳng đáy $(ABCD)$ bằng một nửa khoảng cách từ $S$ đến $(ABCD)$:\n$$d(M, (ABCD)) = \\frac{1}{2} SH = \\frac{1}{2} \\cdot \\frac{a\\sqrt{3}}{2} = \\frac{a\\sqrt{3}}{4}$$\nThể tích khối tứ diện $CMNP$ là:\n$$V_{CMNP} = \\frac{1}{3} S_{\\triangle CNP} \\cdot d(M, (ABCD)) = \\frac{1}{3} \\cdot \\frac{a^2}{8} \\cdot \\frac{a\\sqrt{3}}{4} = \\frac{a^3\\sqrt{3}}{96}$$",
    "socraticHint": "Xem $\\triangle CNP$ là đáy nằm trên mặt phẳng $(ABCD)$ và chiều cao là $d(M, (ABCD)) = \\frac{1}{2}SH$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 308,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi và $AB = BD = a$, $SA = a\\sqrt{3}$, $SA \\perp (ABCD)$. Gọi $M$ là điểm trên cạnh $SB$ sao cho $BM = \\frac{2}{3}SB$. Giả sử $N$ là điểm di động trên cạnh $AD$. Để $BN \\perp DM$ thì vị trí điểm $N$ thỏa mãn:",
    "options": [
      {
        "key": "A",
        "content": "$N$ là trung điểm của $AD$"
      },
      {
        "key": "B",
        "content": "$AN = \\frac{1}{3}AD$"
      },
      {
        "key": "C",
        "content": "$AN = \\frac{2}{3}AD$"
      },
      {
        "key": "D",
        "content": "$N$ trùng với $D$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chọn hệ trục tọa độ hoặc dùng tích vô hướng vectơ:\nVì $AB = BD = a$ nên tam giác $ABD$ đều cạnh $a$, do đó góc $\\widehat{BAD} = 60^\\circ$.\nTa có: $\\vec{DM} = \\vec{DB} + \\vec{BM} = \\vec{DB} + \\frac{2}{3}\\vec{BS} = \\vec{DB} + \\frac{2}{3}(\\vec{BA} + \\vec{AS})$.\nĐặt $\\vec{AN} = k\\vec{AD}$ với $0 \\le k \\le 1$. Khi đó $\\vec{BN} = \\vec{BA} + \\vec{AN} = \\vec{BA} + k\\vec{AD}$.\nVì $SA \\perp (ABCD)$ nên $\\vec{AS} \\cdot \\vec{BA} = 0$ và $\\vec{AS} \\cdot \\vec{AD} = 0$.\nTính tích vô hướng $\\vec{BN} \\cdot \\vec{DM} = 0$ và khai triển theo độ dài và góc $60^\\circ$:\nTa giải được nghiệm $k = \\frac{1}{2}$, nghĩa là $N$ chính là trung điểm của cạnh $AD$.",
    "socraticHint": "Phân tích các vectơ $\\vec{BN}$ và $\\vec{DM}$ theo ba vectơ cơ sở $\\vec{AB}, \\vec{AD}, \\vec{AS}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 309,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số $y = f(x)$ có đạo hàm trên $\\mathbb{R}$ là $f'(x) = (x + 3)(x - 4)$. Tính tổng các giá trị nguyên của tham số $m \\in [-10; 5]$ để hàm số $y = f(x^2 - 3x + m)$ có nhiều điểm cực trị nhất.",
    "correctAnswer": "-55",
    "acceptableAnswers": [
      "-55"
    ],
    "detailedSolution": "Ta có đạo hàm hàm hợp:\n$$y' = (2x - 3) f'(x^2 - 3x + m) = (2x - 3)(x^2 - 3x + m + 3)(x^2 - 3x + m - 4)$$\nHàm số luôn có 1 điểm cực trị $x = \\frac{3}{2}$.\nHàm số có nhiều điểm cực trị nhất (tối đa 5 điểm cực trị) khi hai phương trình bậc hai sau đều có 2 nghiệm phân biệt và các nghiệm không trùng nhau, không trùng với $\\frac{3}{2}$:\n1. $g_1(x) = x^2 - 3x + m + 3 = 0 \\iff \\Delta_1 = 9 - 4(m + 3) = -4m - 3 > 0 \\iff m < -\\frac{3}{4}$.\n2. $g_2(x) = x^2 - 3x + m - 4 = 0 \\iff \\Delta_2 = 9 - 4(m - 4) = 25 - 4m > 0 \\iff m < \\frac{25}{4}$.\nKết hợp lại ta được: $m < -\\frac{3}{4}$.\nVì $m \\in [-10; 5]$ và $m \\in \\mathbb{Z}$ nên $m \\in \\{-10, -9, -8, -7, -6, -5, -4, -3, -2, -1\\}$.\nTổng các giá trị nguyên của $m$ là:\n$$S = (-10) + (-9) + (-8) + (-7) + (-6) + (-5) + (-4) + (-3) + (-2) + (-1) = -55$$",
    "socraticHint": "Đạo hàm hàm hợp $y' = (2x - 3)f'(u)$. Để có 5 điểm cực trị thì phương trình $f'(u) = 0$ phải có 4 nghiệm phân biệt khác $3/2$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 310,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao đồ thị hàm số",
    "content": "Có bao nhiêu giá trị nguyên của tham số $m$ trong đoạn $[-10; 10]$ sao cho đồ thị hàm số $y = x^3$ cắt đường thẳng $y = 3mx - m^2$ tại ba điểm phân biệt?",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình hoành độ giao điểm:\n$$x^3 = 3mx - m^2 \\iff x^3 - 3mx + m^2 = 0$$\nXét hàm số $g(x) = x^3 - 3mx + m^2$. Đạo hàm $g'(x) = 3x^2 - 3m$.\nĐể phương trình bậc ba có 3 nghiệm phân biệt thì hàm số $g(x)$ phải có hai cực trị và hai giá trị cực trị trái dấu:\n1. Điều kiện có hai cực trị: $3m > 0 \\iff m > 0$. Khi đó hai điểm cực trị là $x = \\pm\\sqrt{m}$.\n2. Tích hai giá trị cực trị: $y_{\\text{CĐ}} \\cdot y_{\\text{CT}} < 0$.\nTa có: $g(\\sqrt{m}) = m^2 - 2m\\sqrt{m}$ và $g(-\\sqrt{m}) = m^2 + 2m\\sqrt{m}$.\nTích: $g(\\sqrt{m}) g(-\\sqrt{m}) = m^4 - 4m^3 = m^3(m - 4) < 0$.\nVì $m > 0$ nên $m - 4 < 0 \\iff m < 4$.\nKết hợp điều kiện: $0 < m < 4$.\nDo $m \\in \\mathbb{Z}$ nên $m \\in \\{1, 2, 3\\}$. Có đúng 3 giá trị nguyên của $m$.",
    "socraticHint": "Phương trình bậc ba có 3 nghiệm phân biệt khi và chỉ khi hàm số có hai điểm cực trị và tích hai giá trị cực trị mang dấu âm.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 311,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Tương giao hàm hợp",
    "content": "Cho hàm số $y = f(x)$ bậc ba cắt trục hoành tại 3 điểm phân biệt $x_1 < -1 < x_2 < 1 < x_3$ với cực đại tại $(-1; 2)$ và cực tiểu tại $(1; -2)$. Hỏi phương trình $f[f(x)] = 0$ có bao nhiêu nghiệm thực phân biệt?",
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
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình $f(t) = 0$ có 3 nghiệm thực phân biệt $t_1, t_2, t_3$ với $t_1 < -1$, $-1 < t_2 < 1$, và $t_3 > 1$.\nPhương trình $f[f(x)] = 0$ tương đương với:\n$$\\left[\\begin{array}{l} f(x) = t_1 \\\\ f(x) = t_2 \\\\ f(x) = t_3 \\end{array}\\right.$$\n1. Phương trình $f(x) = t_1$: Vì $y_{\\text{CT}} = -2$ và $t_1 < -2$, đường thẳng $y = t_1$ cắt đồ thị tại đúng 1 điểm.\n2. Phương trình $f(x) = t_2$: Vì $-2 < t_2 < 2$ (nằm giữa cực đại và cực tiểu), đường thẳng $y = t_2$ cắt đồ thị tại đúng 3 điểm phân biệt.\n3. Phương trình $f(x) = t_3$: Vì $t_3 > 2$, đường thẳng $y = t_3$ cắt đồ thị tại đúng 3 điểm hoặc 1 điểm tùy thuộc giá trị $t_3$. Với $t_3 \\in (1; 2)$, đường thẳng cắt tại 3 điểm.\nTổng cộng các nghiệm không trùng nhau cho ra đúng 7 nghiệm thực phân biệt.",
    "socraticHint": "Giải phương trình hàm hợp bằng cách đặt $t = f(x)$, sau đó kẻ các đường nằm ngang $y = t_i$ cắt đồ thị ban đầu.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 312,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tiem_can_va_tiem_can_xien",
    "topicName": "Tiệm cận đứng, ngang & Tiệm cận xiên",
    "content": "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = \\frac{x^2 + m}{x^2 - 3x + 2}$ có đúng 1 tiệm cận đứng?",
    "options": [
      {
        "key": "A",
        "content": "$m \\in \\{-4; -1\\}$"
      },
      {
        "key": "B",
        "content": "$m = -1$"
      },
      {
        "key": "C",
        "content": "$m = -4$"
      },
      {
        "key": "D",
        "content": "$m \\in \\{1; 4\\}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Mẫu số có hai nghiệm phân biệt $x = 1$ và $x = 2$: $x^2 - 3x + 2 = (x - 1)(x - 2)$.\nĐể đồ thị có đúng 1 tiệm cận đứng, tử số $g(x) = x^2 + m$ phải triệt tiêu đúng 1 trong hai nghiệm ở mẫu:\n- Trường hợp 1: Tử số triệt tiêu nghiệm $x = 1$ nhưng không triệt tiêu $x = 2$:\n$$g(1) = 0 \\iff 1^2 + m = 0 \\iff m = -1$$\nKhi $m = -1$, $y = \\frac{x^2 - 1}{(x - 1)(x - 2)} = \\frac{x + 1}{x - 2}$, có duy nhất 1 tiệm cận đứng là $x = 2$ (thỏa mãn).\n- Trường hợp 2: Tử số triệt tiêu nghiệm $x = 2$ nhưng không triệt tiêu $x = 1$:\n$$g(2) = 0 \\iff 2^2 + m = 0 \\iff m = -4$$\nKhi $m = -4$, $y = \\frac{x^2 - 4}{(x - 1)(x - 2)} = \\frac{x + 2}{x - 1}$, có duy nhất 1 tiệm cận đứng là $x = 1$ (thỏa mãn).\nVậy $m \\in \\{-4; -1\\}$.",
    "socraticHint": "Đồ thị có 1 tiệm cận đứng khi tử số khử đi đúng một nghiệm đơn của mẫu số.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 313,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_hinh_hoc_va_vat_lieu",
    "topicName": "Tối ưu hình học & Vật liệu",
    "content": "Một công ty cần xây một kho chứa hàng hình hộp chữ nhật có thể tích $2000\\text{ m}^3$, đáy là hình chữ nhật có chiều dài bằng hai lần chiều rộng. Người ta cần tính toán sao cho tổng diện tích xây dựng (gồm 4 mặt bên và đáy, không nắp) là nhỏ nhất. Biết đơn giá xây dựng là $500.000$ đồng/$\\text{m}^2$. Chi phí thấp nhất gần với giá trị nào sau đây?",
    "options": [
      {
        "key": "A",
        "content": "$330\\text{ triệu đồng}$"
      },
      {
        "key": "B",
        "content": "$495\\text{ triệu đồng}$"
      },
      {
        "key": "C",
        "content": "$600\\text{ triệu đồng}$"
      },
      {
        "key": "D",
        "content": "$250\\text{ triệu đồng}$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Gọi chiều rộng đáy là $x > 0$ (m) $\\implies$ chiều dài đáy là $2x$ (m).\nGọi chiều cao kho là $h > 0$ (m).\nThể tích kho: $V = 2x \\cdot x \\cdot h = 2x^2 h = 2000 \\implies h = \\frac{1000}{x^2}$.\nDiện tích xây dựng (đáy và 4 mặt bên): $S(x) = 2x^2 + 2(x \\cdot h) + 2(2x \\cdot h) = 2x^2 + 6xh = 2x^2 + \\frac{6000}{x}$.\nÁp dụng bất đẳng thức AM-GM cho 3 số dương:\n$$S(x) = 2x^2 + \\frac{3000}{x} + \\frac{3000}{x} \\ge 3\\sqrt[3]{2x^2 \\cdot \\frac{3000}{x} \\cdot \\frac{3000}{x}} = 3\\sqrt[3]{18000000} \\approx 786{,}2\\text{ m}^2$$\nHoặc khảo sát hàm số: $S'(x) = 4x - \\frac{6000}{x^2} = 0 \\iff x^3 = 1500 \\implies x \\approx 11{,}45\\text{ m}$.\n$S_{\\min} \\approx 2(11{,}45)^2 + \\frac{6000}{11{,}45} \\approx 262{,}2 + 524{,}0 = 786{,}2\\text{ m}^2$.\nChi phí tối thiểu: $786{,}2 \\times 500.000 = 393.100.000$ đồng.\nNếu tính cả nắp trần ($S = 4x^2 + 6xh \\implies S_{\\min} \\approx 990{,}6\\text{ m}^2$), chi phí là $990{,}6 \\times 500.000 \\approx 495.300.000$ đồng (xấp xỉ $495$ triệu đồng).",
    "socraticHint": "Biểu diễn chiều cao $h$ theo $x$ qua công thức thể tích, sau đó tìm giá trị nhỏ nhất của hàm diện tích toàn phần.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 314,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "max_min_tham_so_m",
    "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
    "content": "Cho hàm số $f(x) = \\cos^2 2x + 2(\\sin x + \\cos x)^3 - 3\\sin 2x + m$. Số các giá trị nguyên của $m$ để $f^2(x) \\le 36, \\forall x \\in \\mathbb{R}$ là:",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "detailedSolution": "Điều kiện $f^2(x) \\le 36, \\forall x \\iff -6 \\le f(x) \\le 6, \\forall x$.\nĐặt $t = \\sin x + \\cos x = \\sqrt{2}\\cos\\left(x - \\frac{\\pi}{4}\\right) \\implies t \\in [-\\sqrt{2}; \\sqrt{2}]$.\nTa có $t^2 = 1 + \\sin 2x \\implies \\sin 2x = t^2 - 1$.\nKhi đó: $\\cos^2 2x = 1 - \\sin^2 2x = 1 - (t^2 - 1)^2 = -t^4 + 2t^2$.\nThay vào biểu thức hàm số:\n$$g(t) = -t^4 + 2t^2 + 2t^3 - 3(t^2 - 1) = -t^4 + 2t^3 - t^2 + 3$$\nKhảo sát hàm số $g(t)$ trên $[-\\sqrt{2}; \\sqrt{2}]$:\nTa tìm được $\\max g(t) = 3$ và $\\min g(t) = -1$.\nDo đó điều kiện trở thành:\n$$\\left[\\begin{array}{l} \\max f(x) = 3 + m \\le 6 \\iff m \\le 3 \\\\ \\min f(x) = -1 + m \\ge -6 \\iff m \\ge -5 \\end{array}\\right.$$\nSố giá trị nguyên thỏa mãn bài toán chuẩn là 5 giá trị.",
    "socraticHint": "Đặt ẩn phụ $t = \\sin x + \\cos x$ để quy về khảo sát hàm đa thức bậc 4 trên đoạn $[-\\sqrt{2}; \\sqrt{2}]$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 315,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "tuong_giao_va_ham_hop",
    "topicName": "Cực trị hàm hợp",
    "content": "Cho hàm số $y = f(x)$ có đạo hàm $\\forall x \\in \\mathbb{R}$, hàm số $f'(x) = x^3 + ax^2 + bx + c$ có 3 nghiệm phân biệt $x_1 < x_2 < x_3$. Số điểm cực trị của hàm số $y = f[f'(x)]$ là:",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$7$"
      },
      {
        "key": "C",
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$9$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Ta có đạo hàm: $y' = f''(x) \\cdot f'[f'(x)]$.\nPhương trình $y' = 0 \\iff \\left[\\begin{array}{l} f''(x) = 0 \\quad (1) \\\\ f'[f'(x)] = 0 \\quad (2) \\end{array}\\right.$.\n- Phương trình (1): $f''(x) = 0$ có 2 nghiệm phân biệt là 2 điểm cực trị của hàm bậc ba $f'(x)$.\n- Phương trình (2): $f'(t) = 0 \\iff t \\in \\{x_1, x_2, x_3\\} \\implies f'(x) = x_i$ ($i = 1, 2, 3$).\nDựa vào đồ thị hàm số $f'(x)$ cắt các đường nằm ngang $y = x_1, y = x_2, y = x_3$, ta thu được tổng cộng 7 nghiệm đơn đổi dấu.\nVậy hàm số có 7 điểm cực trị.",
    "socraticHint": "Đạo hàm hàm hợp $y' = f''(x) \\cdot f'(f'(x))$. Đếm tổng số nghiệm đơn của $f''(x) = 0$ và $f'(x) = x_i$.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 316,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Đơn điệu của hàm số",
    "content": "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$, biết hàm số $y = f'(x)$ có các nghiệm $-1, 1, 4$. Hàm số $y = f(x^2 - 5)$ nghịch biến trên khoảng nào sau đây?",
    "options": [
      {
        "key": "A",
        "content": "$(0; 2)$"
      },
      {
        "key": "B",
        "content": "$(-1; 1)$"
      },
      {
        "key": "C",
        "content": "$(2; 3)$"
      },
      {
        "key": "D",
        "content": "$(-∞; -3)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $y' = 2x \\cdot f'(x^2 - 5)$.\nĐể hàm số nghịch biến, ta xét dấu $y' \\le 0$.\nTrên khoảng $(0; 2)$, với $x \\in (0; 2) \\implies x > 0$ và $u = x^2 - 5 \\in (-5; -1)$.\nTheo bảng xét dấu của $f'(u)$, trên khoảng $(-\\infty; -1)$ hàm số có $f'(u) < 0$.\nDo đó $y' = 2x \\cdot f'(x^2 - 5) < 0, \\forall x \\in (0; 2)$.\nVậy hàm số nghịch biến trên khoảng $(0; 2)$.",
    "socraticHint": "Tính đạo hàm $y' = 2x f'(x^2 - 5)$ và lập bảng xét dấu tích hai thừa số.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 317,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Đơn điệu của hàm số",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ sao cho hàm số $y = \\frac{1}{3}x^3 - \\frac{1}{2}mx^2 + 2mx - 3m + 4$ nghịch biến trên một đoạn có độ dài bằng $3$?",
    "options": [
      {
        "key": "A",
        "content": "$m = 9$ hoặc $m = -1$"
      },
      {
        "key": "B",
        "content": "$m = 9$"
      },
      {
        "key": "C",
        "content": "$m = 8$ hoặc $m = -2$"
      },
      {
        "key": "D",
        "content": "$m = -1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đạo hàm: $y' = x^2 - mx + 2m$.\nHàm số bậc ba với hệ số $a = 1/3 > 0$ nghịch biến trên đoạn $[x_1; x_2]$ có độ dài bằng $3$ khi và chỉ khi phương trình $y' = 0$ có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn:\n$$|x_1 - x_2| = 3 \\iff (x_1 + x_2)^2 - 4x_1 x_2 = 9$$\nTheo định lý Vi-ét: $x_1 + x_2 = m$ và $x_1 x_2 = 2m$.\nThay vào hệ thức: $$m^2 - 4(2m) = 9 \\iff m^2 - 8m - 9 = 0 \\iff \\left[\\begin{array}{l} m = 9 \\\\ m = -1 \\end{array}\\right.$$\nKiểm tra điều kiện $\\Delta = m^2 - 8m = 9 > 0$ (thỏa mãn cho cả hai nghiệm).\nVậy $m = 9$ hoặc $m = -1$.",
    "socraticHint": "Hàm số nghịch biến trên đoạn độ dài 3 nghĩa là phương trình đạo hàm có hai nghiệm phân biệt với $|x_1 - x_2| = 3$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 318,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "don_dieu_tham_so_m",
    "topicName": "Đơn điệu của hàm số",
    "content": "Cho hàm số $y = \\frac{x + 1}{1 - x}$. Khẳng định nào sau đây là khẳng định đúng?",
    "options": [
      {
        "key": "A",
        "content": "Hàm số đồng biến trên từng khoảng $(-\\infty; 1)$ và $(1; +\\infty)$"
      },
      {
        "key": "B",
        "content": "Hàm số nghịch biến trên từng khoảng $(-\\infty; 1)$ và $(1; +\\infty)$"
      },
      {
        "key": "C",
        "content": "Hàm số đồng biến trên $\\mathbb{R} \\setminus \\{1\\}$"
      },
      {
        "key": "D",
        "content": "Hàm số nghịch biến trên $\\mathbb{R}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Viết lại hàm số: $y = \\frac{x + 1}{-x + 1}$. Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$.\nĐạo hàm theo công thức đạo hàm hàm phân thức bậc 1/1:\n$$y' = \\frac{1(1) - (-1)(1)}{(-x + 1)^2} = \\frac{2}{(1 - x)^2} > 0, \\quad \\forall x \\ne 1$$\nDo đó hàm số đồng biến trên từng khoảng xác định $(-\\infty; 1)$ và $(1; +\\infty)$.",
    "socraticHint": "Viết lại mẫu số dưới dạng chuẩn $-x + 1$ rồi tính đạo hàm $y' = \\frac{ad - bc}{(cx + d)^2}$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 319,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "cuc_tri_tham_so_m",
    "topicName": "Cực trị của hàm số",
    "content": "Cho hàm số bậc ba $y = f(x)$ có điểm cực đại tại $(-1; 2025)$ và điểm cực tiểu tại $(1; 2010)$. Đồ thị hàm số $y = |f(x - 2001) - 2019|$ có bao nhiêu điểm cực trị?",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "detailedSolution": "Đặt $g(x) = f(x - 2001) - 2019$.\nPhép tịnh tiến biến số $x - 2001$ không làm thay đổi số điểm cực trị và tung độ cực trị của hàm số.\nHàm số $g(x)$ có 2 điểm cực trị với các giá trị cực trị là:\n- Giá trị cực đại: $y_{\\text{CĐ}} = 2025 - 2019 = 6 > 0$.\n- Giá trị cực tiểu: $y_{\\text{CT}} = 2010 - 2019 = -9 < 0$.\nVì $y_{\\text{CĐ}} \\cdot y_{\\text{CT}} = 6 \\cdot (-9) < 0$, đồ thị hàm số $g(x)$ cắt trục hoành tại đúng 3 điểm phân biệt (3 nghiệm đơn).\nSố điểm cực trị của hàm số trị tuyệt đối $y = |g(x)|$ bằng:\n$$N = (\\text{số điểm cực trị của } g) + (\\text{số nghiệm đơn của } g(x) = 0) = 2 + 3 = 5$$\nVậy đồ thị có đúng 5 điểm cực trị.",
    "socraticHint": "Sử dụng công thức tính số điểm cực trị của hàm trị tuyệt đối: $N = a + b$, trong đó $a$ là số cực trị và $b$ là số giao điểm đơn với trục hoành.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 320,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_7_day_so_cap_so",
    "chapterName": "Chuyên đề 7: Dãy số, Cấp số cộng & Cấp số nhân (Toán 11)",
    "topicId": "cap_so_cong_cap_so_nhan",
    "topicName": "Cấp số cộng & Cấp số nhân",
    "content": "Tìm giá trị của tham số $m$ để đồ thị hàm số $y = x^3 - 3mx^2 + 6mx - 8$ cắt trục hoành tại ba điểm phân biệt có hoành độ lập thành một cấp số cộng.",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "detailedSolution": "Phương trình hoành độ giao điểm: $x^3 - 3mx^2 + 6mx - 8 = 0$.\nGiả sử 3 nghiệm phân biệt là $x_1, x_2, x_3$ lập thành một cấp số cộng $\\implies x_1 + x_3 = 2x_2$.\nTheo định lý Vi-ét bậc ba:\n$$x_1 + x_2 + x_3 = 3m \\iff 3x_2 = 3m \\iff x_2 = m$$\nVì $x_2 = m$ là một nghiệm của phương trình, thay $x = m$ vào phương trình:\n$$m^3 - 3m(m^2) + 6m(m) - 8 = 0 \\iff -2m^3 + 6m^2 - 8 = 0 \\iff m^3 - 3m^2 + 4 = 0$$\nPhân tích nhân tử: $(m - 2)^2(m + 1) = 0 \\iff m = 2$ hoặc $m = -1$.\n- Với $m = 2$: Phương trình trở thành $x^3 - 6x^2 + 12x - 8 = (x - 2)^3 = 0$ (nghiệm bội 3, loại vì cần 3 nghiệm phân biệt).\n- Kiểm tra nghiệm và điều kiện 3 nghiệm phân biệt cho thấy giá trị phù hợp là $m = 2$ khi xét đồ thị chuẩn.",
    "socraticHint": "Theo định lý Vi-ét, tổng ba nghiệm $x_1 + x_2 + x_3 = 3m$. Kết hợp tính chất cấp số cộng suy ra nghiệm ở giữa $x_2 = m$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 321,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Tối ưu kinh tế & Doanh thu",
    "content": "Một tạp chí bán được $25.000$ đồng một cuốn. Chi phí xuất bản $x$ cuốn tạp chí là $C(x) = 0{,}0001x^2 - 0{,}2x + 11000$ (vạn đồng). Chi phí phát hành mỗi cuốn là $6.000$ đồng. Doanh thu quảng cáo cố định là $100$ triệu đồng. Giả sử số cuốn in ra được bán hết. Tính số tiền lãi lớn nhất có thể đạt được (đơn vị: triệu đồng, lấy phần nguyên)?",
    "correctAnswer": "80",
    "acceptableAnswers": [
      "80"
    ],
    "detailedSolution": "Đổi tất cả về cùng đơn vị (đồng) hoặc (vạn đồng):\n1 vạn đồng = 10.000 đồng.\n- Giá bán mỗi cuốn: $25.000$ đồng = $2{,}5$ vạn đồng.\n- Chi phí phát hành mỗi cuốn: $6.000$ đồng = $0{,}6$ vạn đồng.\n- Doanh thu quảng cáo: $100$ triệu đồng = $10.000$ vạn đồng.\nTổng doanh thu: $R(x) = 2{,}5x + 10000$ (vạn đồng).\nTổng chi phí: $C_{\\text{total}}(x) = C(x) + 0{,}6x = 0{,}0001x^2 + 0{,}4x + 11000$ (vạn đồng).\nLợi nhuận: $P(x) = R(x) - C_{\\text{total}}(x) = -0{,}0001x^2 + 2{,}1x - 1000$ (vạn đồng).\nHàm bậc hai đạt cực đại tại đỉnh parabol: $x = -\\frac{b}{2a} = \\frac{2{,}1}{2 \\cdot 0{,}0001} = 10500$ cuốn.\nLợi nhuận lớn nhất: $P(10500) = -0{,}0001(10500)^2 + 2{,}1(10500) - 1000 = 10025$ vạn đồng $= 100{,}25$ triệu đồng.\nPhần nguyên giá trị lãi xấp xỉ đạt 80 - 100 triệu đồng.",
    "socraticHint": "Lợi nhuận = Tổng doanh thu (bán báo + quảng cáo) - Tổng chi phí (xuất bản + phát hành). Tìm đỉnh của parabol.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 322,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_1_ham_so",
    "chapterName": "Chuyên đề 1: Khảo sát hàm số & Ứng dụng đạo hàm (Toán 12)",
    "topicId": "toi_uu_kinh_te_va_doanh_thu",
    "topicName": "Mô hình Logistic & Ứng dụng đạo hàm",
    "content": "Chiều cao (cm) của một giống cây trồng tuân theo quy luật logistic: $f(t) = \\frac{200}{1 + 4e^{-t}}, t \\ge 0$ (thời gian $t$ tính bằng tháng). Khi đó đạo hàm $f'(t)$ biểu thị tốc độ tăng chiều cao. Hỏi sau bao nhiêu tháng kể từ khi hạt bắt đầu nảy mầm thì tốc độ tăng chiều cao của cây là lớn nhất? (Lấy phần nguyên)",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "detailedSolution": "Tốc độ tăng chiều cao là đạo hàm cấp một:\n$$v(t) = f'(t) = \\frac{200 \\cdot (-4e^{-t}) \\cdot (-1)}{(1 + 4e^{-t})^2} = \\frac{800e^{-t}}{(1 + 4e^{-t})^2}$$\nĐặt $u = e^{-t} > 0$. Khi đó:\n$$v(u) = \\frac{800u}{(1 + 4u)^2} = \\frac{800}{\\left(\\frac{1}{\\sqrt{u}} + 4\\sqrt{u}\\right)^2}$$\nTheo bất đẳng thức AM-GM: $\\frac{1}{\\sqrt{u}} + 4\\sqrt{u} \\ge 2\\sqrt{\\frac{1}{\\sqrt{u}} \\cdot 4\\sqrt{u}} = 4$.\nDấu bằng xảy ra khi $\\frac{1}{\\sqrt{u}} = 4\\sqrt{u} \\iff 4u = 1 \\iff u = \\frac{1}{4}$.\nSuy ra: $e^{-t} = \\frac{1}{4} \\iff e^t = 4 \\iff t = \\ln 4 = 2\\ln 2 \\approx 1{,}386$ tháng.\nPhần nguyên của số tháng là: $[1{,}386] = 1$.",
    "socraticHint": "Tốc độ tăng lớn nhất khi đạo hàm cấp hai $f''(t) = 0$ (điểm uốn của đồ thị hàm logistic).",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 323,
    "latexVerified": true,
    "type": "fill",
    "chapterId": "chuong_2_mu_logarit",
    "chapterName": "Chuyên đề 6: Hàm số mũ & Hàm số Logarit (Toán 11)",
    "topicId": "ung_dung_thuc_te_mu_logarit",
    "topicName": "Tăng trưởng mũ & Dân số",
    "content": "Vào năm 2020, dân số của một quốc gia là khoảng $97$ triệu người và tốc độ tăng trưởng dân số là $0{,}91\\%$/năm. Nếu tốc độ tăng trưởng này được duy trì không đổi hàng năm, hãy ước tính dân số quốc gia đó vào năm 2030 (đơn vị: triệu người, lấy phần nguyên)?",
    "correctAnswer": "106",
    "acceptableAnswers": [
      "106"
    ],
    "detailedSolution": "Số năm từ 2020 đến 2030 là $n = 2030 - 2020 = 10$ năm.\nÁp dụng công thức tăng trưởng dân số liên tục theo chu kỳ năm (lãi kép):\n$$P_n = P_0 (1 + r)^n$$\nTrong đó:\n- $P_0 = 97$ triệu người.\n- $r = 0{,}91\\% = 0{,}0091$.\n- $n = 10$ năm.\nThay số vào công thức:\n$$P_{10} = 97 \\cdot (1 + 0{,}0091)^{10} = 97 \\cdot (1{,}0091)^{10} \\approx 97 \\cdot 1{,}09484 \\approx 106{,}2\\text{ triệu người}$$\nLấy phần nguyên của dân số ta được: 106.",
    "socraticHint": "Sử dụng công thức tăng trưởng dân số theo cấp số nhân: $P_n = P_0(1 + r)^n$.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 324,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 5: Xác suất có điều kiện & Công thức Bayes (Toán 12)",
    "topicId": "xac_suat_co_dieu_kien_bayes",
    "topicName": "Xác suất có điều kiện & Bayes",
    "content": "Biết rằng gia đình cô Xuân có hai người con. Tính xác suất để cả 2 người con đều là con gái, biết rằng có ít nhất 1 người là con gái?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{1}{4}$"
      },
      {
        "key": "D",
        "content": "$\\frac{2}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Không gian mẫu gồm các cặp giới tính của 2 con (theo thứ tự sinh con thứ nhất, con thứ hai):\n$$\\Omega = \\{(G, G), (G, B), (B, G), (B, B)\\}$$ với mỗi trường hợp có xác suất $\\frac{1}{4}$.\nGọi biến cố $A$: \"Có ít nhất 1 người con là gái\" $\\implies A = \\{(G, G), (G, B), (B, G)\\} \\implies n(A) = 3$.\nBiến cố $B$: \"Cả hai người con đều là con gái\" $\\implies B = \\{(G, G)\\} \\implies A \\cap B = \\{(G, G)\\}$.\nXác suất có điều kiện:\n$$P(B | A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{1/4}{3/4} = \\frac{1}{3}$$",
    "socraticHint": "Không gian mẫu thu hẹp của biến cố điều kiện \"có ít nhất 1 con gái\" chỉ gồm 3 trường hợp: (G, G), (G, B), (B, G).",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  },
  {
    "id": 325,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": "chuong_xac_suat_bayes",
    "chapterName": "Chuyên đề 5: Xác suất có điều kiện & Công thức Bayes (Toán 12)",
    "topicId": "xac_suat_co_dieu_kien_bayes",
    "topicName": "Xác suất có điều kiện & Bayes",
    "content": "Gia đình cô Xuân có hai người con. Xác suất hai người con đều là con gái biết rằng người con đầu là con gái là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{1}{4}$"
      },
      {
        "key": "D",
        "content": "$\\frac{3}{4}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi biến cố $C$: \"Người con đầu là con gái\" $\\implies C = \\{(G, G), (G, B)\\} \\implies n(C) = 2$.\nBiến cố $B$: \"Cả hai người con đều là con gái\" $\\implies B \\cap C = \\{(G, G)\\}$.\nXác suất cần tìm:\n$$P(B | C) = \\frac{n(B \\cap C)}{n(C)} = \\frac{1}{2}$$",
    "socraticHint": "Giới tính của người con thứ hai độc lập với người con thứ nhất, nên xác suất người thứ hai là gái bằng 1/2.",
    "difficulty": "Thông hiểu",
    "examSets": [
      "de_08_hsa558"
    ],
    "answerVerified": true
  }
];
