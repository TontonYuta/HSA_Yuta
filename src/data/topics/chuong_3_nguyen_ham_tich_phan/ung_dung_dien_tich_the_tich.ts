import { Question } from '../../../types/exam';

export const ungDungDienTichTheTichQuestions: Question[] = [
  {
    "id": 13,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "ung_dung_dien_tich_the_tich",
    "topicName": "Ứng dụng tích phân tính diện tích & thể tích",
    "content": "Thể tích khối tròn xoay tạo bởi hình phẳng giới hạn bởi $y = \\sqrt{x}$, $y = 0$, $x = 4$ khi quay quanh trục hoành $Ox$ là:",
    "options": [
      {
        "key": "A",
        "content": "$8\\pi$"
      },
      {
        "key": "B",
        "content": "$4\\pi$"
      },
      {
        "key": "C",
        "content": "$16\\pi$"
      },
      {
        "key": "D",
        "content": "$\\frac{32}{3}\\pi$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Công thức thể tích khối tròn xoay:\n$$V = \\pi \\int_0^4 y^2 dx = \\pi \\int_0^4 x \\, dx = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = \\pi \\frac{16}{2} = 8\\pi$$.",
    "socraticHint": "Thể tích khi quay quanh $Ox$ là $V = \\pi \\int_a^b [f(x)]^2 dx$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 60,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "ung_dung_dien_tich_the_tich",
    "topicName": "Ứng dụng tích phân tính diện tích & thể tích",
    "content": "Đường thẳng $d: y = kx$ ($0 < k < 4$) chia hình phẳng giới hạn bởi parabol $(P): y = -x^2 + 4x$ và trục hoành thành hai phần có diện tích bằng nhau. Giá trị của tham số $k$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$4 - 2\\sqrt[3]{4}$"
      },
      {
        "key": "B",
        "content": "$4 - \\sqrt[3]{16}$"
      },
      {
        "key": "C",
        "content": "$2\\sqrt[3]{4}$"
      },
      {
        "key": "D",
        "content": "$4 - 2\\sqrt{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Diện tích toàn bộ hình phẳng giới hạn bởi $(P)$ và trục hoành ($y = 0$):\n$$S_0 = \\int_0^4 (-x^2 + 4x) dx = \\left[ -\\frac{x^3}{3} + 2x^2 \\right]_0^4 = -\\frac{64}{3} + 32 = \\frac{32}{3}.$$\nPhương trình hoành độ giao điểm của $(P)$ và $d$:\n$$-x^2 + 4x = kx \\iff x(4 - k - x) = 0 \\iff x = 0 \\text{ hoặc } x = 4 - k.$$\nDiện tích phần hình phẳng phía trên đường thẳng $d$ là:\n$$S_1 = \\int_0^{4-k} [(-x^2 + 4x) - kx] dx = \\int_0^{4-k} [(4 - k)x - x^2] dx = \\frac{(4 - k)^3}{6}.$$\nĐường thẳng $d$ chia đôi diện tích khi và chỉ khi:\n$$S_1 = \\frac{1}{2} S_0 \\iff \\frac{(4 - k)^3}{6} = \\frac{16}{3} \\iff (4 - k)^3 = 32 \\iff 4 - k = 2\\sqrt[3]{4} \\iff k = 4 - 2\\sqrt[3]{4}.$$",
    "socraticHint": "Tính diện tích toàn phần rồi tính diện tích phần giới hạn giữa parabol và đường thẳng theo cận $[0; 4 - k]$, sau đó giải phương trình tỉ lệ diện tích.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 112,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "ung_dung_dien_tich_the_tich",
    "topicName": "Ứng dụng tích phân tính diện tích & thể tích",
    "content": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2$ và đường thẳng $y = 2x$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{4}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{2}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{8}{3}$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình hoành độ giao điểm: $x^2 = 2x \\iff x^2 - 2x = 0 \\iff x = 0$ hoặc $x = 2$.\nDiện tích hình phẳng:\n$$S = \\int_0^2 |2x - x^2| dx = \\int_0^2 (2x - x^2) dx = l\\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$$.",
    "socraticHint": "Tìm hoành độ giao điểm rồi tính tích phân hiệu hai hàm số $S = \\int_a^b |f(x) - g(x)| dx$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 113,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "ung_dung_dien_tich_the_tich",
    "topicName": "Ứng dụng tích phân tính diện tích & thể tích",
    "content": "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đồ thị $y = \\sqrt{x}$, trục hoành và hai đường thẳng $x = 0, x = 4$ quanh trục $Ox$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$8\\pi$"
      },
      {
        "key": "B",
        "content": "$16\\pi$"
      },
      {
        "key": "C",
        "content": "$4\\pi$"
      },
      {
        "key": "D",
        "content": "$\\frac{16\\pi}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng công thức thể tích khối tròn xoay quay quanh trục $Ox$:\n$$V = \\pi \\int_0^4 [y(x)]^2 dx = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = \\pi \\cdot \\frac{16}{2} = 8\\pi$$.",
    "socraticHint": "Công thức thể tích tròn xoay quanh trục hoành: $V = \\pi \\int_a^b [f(x)]^2 dx$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 162,
    "type": "mcq",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân",
    "topicId": "ung_dung_dien_tich_the_tich",
    "topicName": "Ứng dụng tích phân tính diện tích & thể tích",
    "content": "Cho hình phẳng $(H)$ giới hạn bởi parabol $(P): y = 4 - x^2$ và đường thẳng $d: y = 2 - x$. Diện tích của hình phẳng $(H)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{9}{2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{7}{2}$"
      },
      {
        "key": "C",
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$\\frac{11}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình hoành độ giao điểm của $(P)$ và $d$:\n$$4 - x^2 = 2 - x \\iff x^2 - x - 2 = 0 \\iff x = -1 \\text{ hoặc } x = 2.$$\nDiện tích hình phẳng $(H)$ là:\n$$S = \\int_{-1}^2 [(4 - x^2) - (2 - x)] dx = \\int_{-1}^2 (2 + x - x^2) dx$$\n$$= \\left[ 2x + \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_{-1}^2 = \\left( 4 + 2 - \\frac{8}{3} \\right) - \\left( -2 + \\frac{1}{2} + \\frac{1}{3} \\right) = \\frac{10}{3} - \\left( -\\frac{7}{6} \\right) = \\frac{27}{6} = \\frac{9}{2}.$$",
    "socraticHint": "Giải phương trình hoành độ giao điểm để tìm cận tích phân rồi tính tích phân hiệu hai hàm số.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 264,
    "type": "fill",
    "topicId": "ung_dung_dien_tich_the_tich",
    "content": "Một mảnh vườn hình chữ nhật $ABCD$ có chiều rộng $6\\text{ m}$, chiều dài $10\\text{ m}$. Người ta thiết kế một bồn hoa hình parabol có đỉnh trùng với trung điểm cạnh trên và đi qua hai đỉnh cạnh dưới để trồng cỏ, phần diện tích còn lại được lát đá. Biết chi phí lát đá là $300.000$ đồng/$\\text{m}^2$. Tính tổng chi phí lát đá của mảnh vườn? (Đơn vị: triệu đồng).",
    "correctAnswer": "6",
    "detailedSolution": "Tổng diện tích mảnh vườn hình chữ nhật: $S_{ABCD} = 6 \\times 10 = 60\\text{ m}^2$.\nPhần trồng cỏ có dạng parabol giới hạn bởi đáy chiều dài $10\\text{ m}$ và chiều cao $6\\text{ m}$.\nTheo công thức diện tích parabol Archimedes: $S_{\\text{co}} = \\frac{2}{3} \\cdot a \\cdot h = \\frac{2}{3} \\times 10 \\times 6 = 40\\text{ m}^2$.\nDiện tích phần lát đá còn lại: $S_{\\text{da}} = S_{ABCD} - S_{\\text{co}} = 60 - 40 = 20\\text{ m}^2$.\nChi phí lát đá: $20\\text{ m}^2 \\times 300.000\\text{ đ/m}^2 = 6.000.000(đồng) = 6(triệu đồng)$.",
    "socraticHint": "Diện tích phần giới hạn bởi parabol và dây cung bằng hai phần ba tích của đáy và chiều cao parabol.",
    "difficulty": "Vận dụng cao",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Ứng dụng tích phân tính diện tích & thể tích",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân"
  },
  {
    "id": 265,
    "type": "mcq",
    "topicId": "ung_dung_dien_tich_the_tich",
    "content": "Thể tích khối tròn xoay tạo thành khi quay hình phẳng $(H)$ giới hạn bởi đồ thị hàm số $y = f(x)$, trục hoành $y = 0$ và hai đường thẳng $x = a, x = b$ ($a < b$) quanh trục hoành là:",
    "options": [
      {
        "key": "A",
        "content": "$\\int_a^b f(x) dx$"
      },
      {
        "key": "B",
        "content": "$\\int_a^b [f(x)]^2 dx$"
      },
      {
        "key": "C",
        "content": "$\\pi \\int_a^b |f(x)| dx$"
      },
      {
        "key": "D",
        "content": "$\\pi \\int_a^b [f(x)]^2 dx$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Theo công thức tính thể tích khối tròn xoay chuẩn SGK Giải tích 12:\nThể tích khối tròn xoay sinh ra khi quay hình thang cong quanh trục hoành $Ox$ là:\n$$V = \\pi \\int_a^b [f(x)]^2 dx$$",
    "socraticHint": "Mỗi lát cắt thẳng góc trục $Ox$ là một hình tròn có bán kính $R = |f(x)|$ nên diện tích là $S(x) = \\pi [f(x)]^2$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Ứng dụng tích phân tính diện tích & thể tích",
    "chapterId": "chuong_3_nguyen_ham_tich_phan",
    "chapterName": "Chương 3: Nguyên hàm & Tích phân"
  }
];
