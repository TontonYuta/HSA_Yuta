import { Question } from '../../../types/exam';

export const ch9LuongGiacNangCaoPart2Questions: Question[] = [
  {
    "id": 1021,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Chiều cao mực nước tại một cảng biển được mô hình hóa bởi hàm số $h(t) = 3\\cos\\left(\\frac{\\pi t}{6} + \\frac{\\pi}{3}\\right) + 8$, trong đó $h$ tính bằng mét và $t$ là số giờ tính từ nửa đêm ($0 \\le t \\le 24$). Chiều cao lớn nhất của mực nước trong ngày là bao nhiêu và đạt được lần đầu tiên vào lúc mấy giờ?",
    "options": [
      {
        "key": "A",
        "content": "$11\\text{ m}$ vào lúc 10 giờ"
      },
      {
        "key": "B",
        "content": "$11\\text{ m}$ vào lúc 2 giờ"
      },
      {
        "key": "C",
        "content": "$8\\text{ m}$ vào lúc 6 giờ"
      },
      {
        "key": "D",
        "content": "$14\\text{ m}$ vào lúc 12 giờ"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $-1 \\le \\cos\\left(\\frac{\\pi t}{6} + \\frac{\\pi}{3}\\right) \\le 1$ nên:\n$$h_{\\max} = 3(1) + 8 = 11\\text{ (m)}$$\nĐẳng thức xảy ra khi:\n$$\\cos\\left(\\frac{\\pi t}{6} + \\frac{\\pi}{3}\\right) = 1 \\iff \\frac{\\pi t}{6} + \\frac{\\pi}{3} = k2\\pi \\iff \\frac{t}{6} = 2k - \\frac{1}{3} \\iff t = 12k - 2$$\nVì $0 \\le t \\le 24$ và cần tìm thời điểm lần đầu tiên trong ngày nên chọn $k = 1$:\n$$t = 12(1) - 2 = 10\\text{ (giờ)}$$\nVậy mực nước cao nhất là $11\\text{ m}$ vào lúc 10 giờ sáng.\n\nChọn A.",
    "socraticHint": "Tìm giá trị lớn nhất của hàm dạng $A\\cos(u) + d$ và giải phương trình $\\cos(u) = 1$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1022,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Một cabin của vòng quay Mặt Trời (Ferris Wheel) quay đều và hoàn thành một vòng quay mất đúng 60 giây. Độ cao $h$ (tính bằng mét) của cabin so với mặt đất tại thời điểm $t$ giây được cho bởi công thức $h(t) = 30 - 25\\cos\\left(\\frac{\\pi t}{30}\\right)$. Độ cao cao nhất mà cabin đạt được là bao nhiêu mét? (Điền số nguyên):",
    "correctAnswer": "55",
    "detailedSolution": "Vì $-1 \\le \\cos\\left(\\frac{\\pi t}{30}\\right) \\le 1$ với mọi $t$ nên:\n$$h(t) = 30 - 25\\cos\\left(\\frac{\\pi t}{30}\\right) \\le 30 - 25(-1) = 30 + 25 = 55\\text{ (m)}$$\nĐộ cao lớn nhất đạt được khi $\\cos\\left(\\frac{\\pi t}{30}\\right) = -1$, ứng với đỉnh cao nhất của vòng quay tại $t = 30\\text{ s}$.\nVậy độ cao lớn nhất là 55 m.\n\nĐáp số: 55.",
    "socraticHint": "Độ cao lớn nhất đạt được khi giá trị của $\\cos$ bằng $-1$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1023,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Ở bài toán vòng quay trên với $h(t) = 30 - 25\\cos\\left(\\frac{\\pi t}{30}\\right)$, trong một vòng quay 60 giây ($0 \\le t \\le 60$), khoảng thời gian mà cabin ở độ cao từ $42{,}5\\text{ m}$ trở lên là bao nhiêu giây?",
    "options": [
      {
        "key": "A",
        "content": "$20\\text{ giây}$"
      },
      {
        "key": "B",
        "content": "$15\\text{ giây}$"
      },
      {
        "key": "C",
        "content": "$30\\text{ giây}$"
      },
      {
        "key": "D",
        "content": "$25\\text{ giây}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta giải bất phương trình:\n$$h(t) \\ge 42{,}5 \\iff 30 - 25\\cos\\left(\\frac{\\pi t}{30}\\right) \\ge 42{,}5$$\n$$\\iff -25\\cos\\left(\\frac{\\pi t}{30}\\right) \\ge 12{,}5 \\iff \\cos\\left(\\frac{\\pi t}{30}\\right) \\le -\\frac{1}{2}$$\nĐặt $u = \\frac{\\pi t}{30}$. Vì $0 \\le t \\le 60$ nên $0 \\le u \\le 2\\pi$.\n$$\\cos u \\le -\\frac{1}{2} \\iff \\frac{2\\pi}{3} \\le u \\le \\frac{4\\pi}{3}$$\nThay $u = \\frac{\\pi t}{30}$:\n$$\\frac{2\\pi}{3} \\le \\frac{\\pi t}{30} \\le \\frac{4\\pi}{3} \\iff 20 \\le t \\le 40$$\nKhoảng thời gian cabin ở độ cao từ $42{,}5\\text{ m}$ trở lên là:\n$$\\Delta t = 40 - 20 = 20\\text{ (giây)}$$\n\nChọn A.",
    "socraticHint": "Giải bất phương trình lượng giác $\\cos u \\le -1/2$ trong đoạn $[0; 2\\pi]$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1024,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Phương trình dao động điều hòa của một vật là $x(t) = 5\\cos\\left(4\\pi t - \\frac{\\pi}{3}\\right)$ ($x$ đo bằng cm, $t$ đo bằng giây). Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Vật có biên độ 5 cm, chu kỳ 0,5 s, pha ban đầu $-\\pi/3$ rad và li độ ban đầu là 2,5 cm.\n\n\n\nChọn D.",
    "socraticHint": "Đối chiếu các đại lượng cơ bản $A, \\omega, T, \\varphi$ trong phương trình $x(t) = A\\cos(\\omega t + \\varphi)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Biên độ dao động của vật là $A = 5\\text{ cm}$."
      },
      {
        "key": "B",
        "content": "Chu kỳ dao động của vật là $T = 0{,}5\\text{ s}$."
      },
      {
        "key": "C",
        "content": "Pha ban đầu của dao động là $\\varphi = -\\frac{\\pi}{3}\\text{ rad}$."
      },
      {
        "key": "D",
        "content": "Tại thời điểm ban đầu $t = 0$, li độ của vật đạt cực đại $x(0) = 5\\text{ cm}$."
      }
    ]
  },
  {
    "id": 1025,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Vận tốc tức thời của vật dao động ở câu trên là $v(t) = -20\\pi \\sin\\left(4\\pi t - \\frac{\\pi}{3}\\right)$ (cm/s). Tốc độ cực đại của vật có dạng $k\\pi\\text{ cm/s}$. Tìm số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "20",
    "detailedSolution": "Tốc độ tức thời là độ lớn của vận tốc: $|v(t)| = 20\\pi \\left|\\sin\\left(4\\pi t - \\frac{\\pi}{3}\\right)\\right|$.\nVì $|\\sin| \\le 1$ nên tốc độ cực đại là:\n$$v_{\\max} = \\omega A = 4\\pi \\cdot 5 = 20\\pi\\text{ (cm/s)}$$\nDo đó $k = 20$.\n\nĐáp số: 20.",
    "socraticHint": "Tốc độ cực đại trong dao động điều hòa bằng $\\omega A$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1026,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Nhiệt độ ngoài trời $T$ ($^\\circ\\text{C}$) tại một thành phố vào ngày hè được mô hình hóa bởi $T(t) = 28 + 6\\sin\\left(\\frac{\\pi(t - 9)}{12}\\right)$, trong đó $t$ là số giờ tính từ nửa đêm ($0 \\le t \\le 24$). Nhiệt độ thấp nhất trong ngày là bao nhiêu và đạt được vào lúc mấy giờ?",
    "options": [
      {
        "key": "A",
        "content": "$22^\\circ\\text{C}$ lúc 3 giờ"
      },
      {
        "key": "B",
        "content": "$22^\\circ\\text{C}$ lúc 9 giờ"
      },
      {
        "key": "C",
        "content": "$20^\\circ\\text{C}$ lúc 0 giờ"
      },
      {
        "key": "D",
        "content": "$24^\\circ\\text{C}$ lúc 6 giờ"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Nhiệt độ thấp nhất là:\n$$T_{\\min} = 28 + 6(-1) = 22^\\circ\\text{C}$$\nĐạt được khi:\n$$\\sin\\left(\\frac{\\pi(t - 9)}{12}\\right) = -1 \\iff \\frac{\\pi(t - 9)}{12} = -\\frac{\\pi}{2} + k2\\pi \\iff t - 9 = -6 + 24k \\iff t = 3 + 24k$$\nVới $0 \\le t \\le 24$, chọn $k = 0 \\implies t = 3$ (lúc 3 giờ sáng).\n\nChọn A.",
    "socraticHint": "Nhiệt độ thấp nhất khi hàm sin đạt giá trị $-1$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1027,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Ở thành phố nói trên với $T(t) = 28 + 6\\sin\\left(\\frac{\\pi(t - 9)}{12}\\right)$, trong một ngày có bao nhiêu giờ nhiệt độ ngoài trời đạt từ $31^\\circ\\text{C}$ trở lên? (Điền số nguyên):",
    "correctAnswer": "8",
    "detailedSolution": "Ta có bất phương trình:\n$$28 + 6\\sin\\left(\\frac{\\pi(t - 9)}{12}\\right) \\ge 31 \\iff \\sin\\left(\\frac{\\pi(t - 9)}{12}\\right) \\ge \\frac{1}{2}$$\nTrong một chu kỳ 24 giờ của góc $u = \\frac{\\pi(t-9)}{12}$:\n$$\\frac{\\pi}{6} \\le \\frac{\\pi(t - 9)}{12} \\le \\frac{5\\pi}{6} \\iff 2 \\le t - 9 \\le 10 \\iff 11 \\le t \\le 19$$\nKhoảng thời gian nhiệt độ từ $31^\\circ\\text{C}$ trở lên là từ 11 giờ trưa đến 19 giờ tối:\n$$\\Delta t = 19 - 11 = 8\\text{ (giờ)}$$\n\nĐáp số: 8.",
    "socraticHint": "Giải bất phương trình $\\sin u \\ge 1/2$ để tìm khoảng thời gian.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1028,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Một tấm biển quảng cáo cao 3 m được treo trên tường của một tòa nhà sao cho mép dưới cách tầm mắt người quan sát 3 m và mép trên cách tầm mắt 6 m. Một người đứng cách bức tường khoảng cách $x$ (m). Khoảng cách $x$ bằng bao nhiêu để góc nhìn tấm biển từ mắt người đó đạt giá trị lớn nhất?",
    "options": [
      {
        "key": "A",
        "content": "$3\\sqrt{2}\\text{ m}$"
      },
      {
        "key": "B",
        "content": "$6\\text{ m}$"
      },
      {
        "key": "C",
        "content": "$4{,}5\\text{ m}$"
      },
      {
        "key": "D",
        "content": "$3\\text{ m}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi góc tạo bởi tia nhìn mép trên với phương ngang là $\\beta_2$, mép dưới là $\\beta_1$.\nTa có $\\tan \\beta_2 = \\frac{6}{x}$ và $\\tan \\beta_1 = \\frac{3}{x}$.\nGóc nhìn tấm biển là $\\alpha = \\beta_2 - \\beta_1$.\nÁp dụng công thức trừ tang:\n$$\\tan \\alpha = \\tan(\\beta_2 - \\beta_1) = \\frac{\\tan \\beta_2 - \\tan \\beta_1}{1 + \\tan \\beta_2 \\tan \\beta_1} = \\frac{\\frac{6}{x} - \\frac{3}{x}}{1 + \\frac{18}{x^2}} = \\frac{\\frac{3}{x}}{\\frac{x^2 + 18}{x^2}} = \\frac{3x}{x^2 + 18} = \\frac{3}{x + \\frac{18}{x}}$$\nĐể góc nhìn $\\alpha$ lớn nhất thì $\\tan \\alpha$ lớn nhất, tương đương với mẫu số $x + \\frac{18}{x}$ nhỏ nhất.\nÁp dụng BĐT AM-GM cho hai số dương $x$ và $\\frac{18}{x}$:\n$$x + \\frac{18}{x} \\ge 2\\sqrt{x \\cdot \\frac{18}{x}} = 2\\sqrt{18} = 6\\sqrt{2}$$\nĐẳng thức xảy ra khi:\n$$x = \\frac{18}{x} \\iff x^2 = 18 \\iff x = 3\\sqrt{2}\\text{ (m)}$$\n\nChọn A.",
    "socraticHint": "Dùng công thức $\\tan(\\beta_2 - \\beta_1) = \\frac{\\tan \\beta_2 - \\tan \\beta_1}{1 + \\tan \\beta_2 \\tan \\beta_1}$ rồi áp dụng BĐT AM-GM.",
    "difficulty": "Vận dụng cao",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1029,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Số giờ có ánh sáng mặt trời trong ngày thứ $t$ của năm tại một thành phố xứ lạnh được mô tả bởi $S(t) = 12 + 4\\sin\\left(\\frac{2\\pi(t - 80)}{365}\\right)$ ($1 \\le t \\le 365$). Ngày hạ chí có số giờ chiếu sáng nhiều nhất là bao nhiêu giờ? (Điền số nguyên):",
    "correctAnswer": "16",
    "detailedSolution": "Vì $-1 \\le \\sin\\left(\\frac{2\\pi(t - 80)}{365}\\right) \\le 1$ nên:\n$$S(t) \\le 12 + 4(1) = 16\\text{ (giờ)}$$\nVậy ngày có số giờ chiếu sáng nhiều nhất là 16 giờ.\n\nĐáp số: 16.",
    "socraticHint": "Số giờ chiếu sáng cực đại khi hàm số sin đạt giá trị lớn nhất bằng 1.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1030,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Tín hiệu điện áp điện tim $E(t)$ (đơn vị mV) của một bệnh nhân được mô tả bởi $E(t) = 1{,}2\\sin(100\\pi t) + 0{,}5\\cos(100\\pi t)$. Biên độ điện áp tối đa của tín hiệu điện tim này bằng:",
    "options": [
      {
        "key": "A",
        "content": "$1{,}3\\text{ mV}$"
      },
      {
        "key": "B",
        "content": "$1{,}7\\text{ mV}$"
      },
      {
        "key": "C",
        "content": "$1{,}2\\text{ mV}$"
      },
      {
        "key": "D",
        "content": "$2{,}0\\text{ mV}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Biên độ tổng hợp của biểu thức $a\\sin(\\omega t) + b\\cos(\\omega t)$ là:\n$$A = \\sqrt{a^2 + b^2}$$\nThay $a = 1{,}2$ và $b = 0{,}5$:\n$$A = \\sqrt{(1{,}2)^2 + (0{,}5)^2} = \\sqrt{1{,}44 + 0{,}25} = \\sqrt{1{,}69} = 1{,}3\\text{ (mV)}$$\n\nChọn A.",
    "socraticHint": "Biên độ tổng hợp của hai dao động cùng tần số vuông pha bằng $\\sqrt{a^2 + b^2}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1031,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Một chiếc xe đạp có bánh xe bán kính $R = 30\\text{ cm}$. Trên vành bánh xe có gắn một van phản quang $P$. Khi xe chuyển động thẳng đều trên mặt phẳng ngang, bánh xe lăn không trượt. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Độ cao lớn nhất của van là đường kính bánh xe bằng 60 cm.\n\n\n\nChọn D.",
    "socraticHint": "Độ cao của điểm trên vành bánh xe biến thiên từ 0 đến $2R$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Tốc độ dài của trục bánh xe $v$ liên hệ với tốc độ góc $\\omega$ theo công thức $v = \\omega R$."
      },
      {
        "key": "B",
        "content": "Tọa độ độ cao của điểm van $P$ so với mặt đường biến thiên tuần hoàn theo thời gian."
      },
      {
        "key": "C",
        "content": "Độ cao nhỏ nhất của van phản quang khi chạm sát mặt đất là 0 cm."
      },
      {
        "key": "D",
        "content": "Độ cao lớn nhất của van phản quang so với mặt đất bằng 30 cm."
      }
    ]
  },
  {
    "id": 1032,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Một người đi xe đạp sao cho bánh xe quay đều 5 vòng mỗi giây. Tần số góc $\\omega$ của bánh xe có dạng $k\\pi\\text{ rad/s}$. Tìm số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "10",
    "detailedSolution": "Mỗi vòng quay tương ứng với một góc $2\\pi\\text{ rad}$.\nBánh xe quay 5 vòng trong 1 giây nên tần số $f = 5\\text{ Hz}$.\nTần số góc là:\n$$\\omega = 2\\pi f = 2\\pi \\cdot 5 = 10\\pi\\text{ (rad/s)}$$\nDo đó $k = 10$.\n\nĐáp số: 10.",
    "socraticHint": "Tần số góc $\\omega = 2\\pi f$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1033,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Cường độ dòng điện xoay chiều qua một đoạn mạch có phương trình $i(t) = 4\\sqrt{2}\\cos\\left(100\\pi t - \\frac{\\pi}{4}\\right)$ (A). Cường độ dòng điện hiệu dụng của dòng điện này bằng:",
    "options": [
      {
        "key": "A",
        "content": "$4\\text{ A}$"
      },
      {
        "key": "B",
        "content": "$4\\sqrt{2}\\text{ A}$"
      },
      {
        "key": "C",
        "content": "$2\\sqrt{2}\\text{ A}$"
      },
      {
        "key": "D",
        "content": "$8\\text{ A}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cường độ dòng điện hiệu dụng được tính theo công thức:\n$$I = \\frac{I_0}{\\sqrt{2}}$$\nTrong đó $I_0 = 4\\sqrt{2}\\text{ A}$ là cường độ dòng điện cực đại.\nDo đó:\n$$I = \\frac{4\\sqrt{2}}{\\sqrt{2}} = 4\\text{ (A)}$$\n\nChọn A.",
    "socraticHint": "Giá trị hiệu dụng bằng giá trị cực đại chia cho $\\sqrt{2}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1034,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Trong khoảng thời gian 1 giây ($0 \\le t \\le 1$), dòng điện xoay chiều $i(t) = 4\\sqrt{2}\\cos\\left(100\\pi t - \\frac{\\pi}{4}\\right)$ đổi chiều (tức $i(t) = 0$) bao nhiêu lần? (Điền số nguyên):",
    "correctAnswer": "100",
    "detailedSolution": "Tần số của dòng điện xoay chiều là:\n$$f = \\frac{\\omega}{2\\pi} = \\frac{100\\pi}{2\\pi} = 50\\text{ (Hz)}$$\nTrong mỗi chu kỳ $T = \\frac{1}{50}\\text{ s}$, đồ thị hàm cosin cắt trục hoành 2 lần (dòng điện đổi chiều 2 lần).\nTrong 1 giây có đúng 50 chu kỳ dao động hoàn chỉnh.\nSố lần dòng điện đổi chiều trong 1 giây là:\n$$N = 50 \\times 2 = 100\\text{ (lần)}$$\n\nĐáp số: 100.",
    "socraticHint": "Trong một chu kỳ dòng điện đổi chiều 2 lần, tính số chu kỳ trong 1 giây.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1035,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Một con lắc đơn có chiều dài dây treo $l = 1\\text{ m}$ dao động với góc lệch li độ $\\alpha(t) = 0{,}08\\cos(\\pi t)$ (rad). Biên độ góc của con lắc là:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}08\\text{ rad}$"
      },
      {
        "key": "B",
        "content": "$\\pi\\text{ rad}$"
      },
      {
        "key": "C",
        "content": "$0{,}04\\text{ rad}$"
      },
      {
        "key": "D",
        "content": "$0{,}16\\text{ rad}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình dao động góc có dạng tổng quát $\\alpha(t) = \\alpha_0 \\cos(\\omega t + \\varphi)$.\nBiên độ góc chính là hệ số cực đại $\\alpha_0 = 0{,}08\\text{ rad}$.\n\nChọn A.",
    "socraticHint": "Biên độ góc là giá trị cực đại của góc lệch $\\alpha(t)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1036,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Một chiếc thang dài 4 m tựa vào một bức tường thẳng đứng. Gọi $\\theta$ là góc nghiêng giữa thang và mặt đất ($0 < \\theta < \\frac{\\pi}{2}$). Chiều cao của đầu trên chiếc thang so với mặt đất là $h(\\theta) = 4\\sin \\theta$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Khoảng cách chân thang khi góc $75^\\circ$ là xấp xỉ $1{,}035\\text{ m} < 2\\text{ m}$.\n\n\n\nChọn D.",
    "socraticHint": "Sử dụng các tỉ số lượng giác sin và cos trong tam giác vuông.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Khi $\\theta = 30^\\circ$, đầu trên của thang cách mặt đất 2 m."
      },
      {
        "key": "B",
        "content": "Khi góc $\\theta$ tăng dần thì chiều cao $h(\\theta)$ cũng tăng dần."
      },
      {
        "key": "C",
        "content": "Khoảng cách từ chân thang đến chân tường là $d(\\theta) = 4\\cos \\theta$."
      },
      {
        "key": "D",
        "content": "Khi thang dựng an toàn ở góc $\\theta = 75^\\circ$, khoảng cách từ chân thang đến tường lớn hơn 2 m."
      }
    ]
  },
  {
    "id": 1037,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Khi chiếc thang dài 4 m ở câu trên dựng ở góc nghiêng $\\theta = 60^\\circ$, khoảng cách từ chân thang đến bức tường là bao nhiêu mét? (Điền số nguyên):",
    "correctAnswer": "2",
    "detailedSolution": "Khoảng cách từ chân thang đến tường là:\n$$d = 4\\cos 60^\\circ = 4 \\cdot \\frac{1}{2} = 2\\text{ (m)}$$\n\nĐáp số: 2.",
    "socraticHint": "Cạnh kề bằng cạnh huyền nhân cosin góc kề.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1038,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Một sóng biển hình sin truyền theo phương ngang có li độ mặt nước là $u(x, t) = 2\\cos(4\\pi t - 0{,}5\\pi x)$ (m). Bước sóng $\\lambda$ của con sóng này bằng:",
    "options": [
      {
        "key": "A",
        "content": "$4\\text{ m}$"
      },
      {
        "key": "B",
        "content": "$2\\text{ m}$"
      },
      {
        "key": "C",
        "content": "$8\\text{ m}$"
      },
      {
        "key": "D",
        "content": "$0{,}5\\text{ m}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình sóng tổng quát có dạng:\n$$u(x, t) = A\\cos\\left(\\omega t - \\frac{2\\pi}{\\lambda} x\\right)$$\nĐồng nhất hệ số của $x$:\n$$\\frac{2\\pi}{\\lambda} = 0{,}5\\pi \\implies \\lambda = \\frac{2\\pi}{0{,}5\\pi} = 4\\text{ (m)}$$\n\nChọn A.",
    "socraticHint": "Đồng nhất hệ số trước biến tọa độ $x$ với $\\frac{2\\pi}{\\lambda}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1039,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Chu kỳ $T$ của con sóng ở câu trên có dạng $\\frac{1}{k}$ giây. Tìm số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "2",
    "detailedSolution": "Tần số góc của sóng là $\\omega = 4\\pi\\text{ rad/s}$.\nChu kỳ sóng là:\n$$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{4\\pi} = \\frac{1}{2}\\text{ (s)}$$\nDo đó $k = 2$.\n\nĐáp số: 2.",
    "socraticHint": "Chu kỳ $T = \\frac{2\\pi}{\\omega}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1040,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Dung tích khí trong phổi của một người trưởng thành khi hít thở bình thường được mô hình hóa bởi $V(t) = 2{,}5 - 0{,}5\\cos\\left(\\frac{2\\pi t}{5}\\right)$ (lít), trong đó $t$ là thời gian tính bằng giây. Thời gian thực hiện một chu kỳ hít vào - thở ra hoàn chỉnh là:",
    "options": [
      {
        "key": "A",
        "content": "$5\\text{ giây}$"
      },
      {
        "key": "B",
        "content": "$2{,}5\\text{ giây}$"
      },
      {
        "key": "C",
        "content": "$10\\text{ giây}$"
      },
      {
        "key": "D",
        "content": "$\\pi\\text{ giây}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tần số góc của quá trình hô hấp là $\\omega = \\frac{2\\pi}{5}\\text{ rad/s}$.\nThời gian cho một chu kỳ hoàn chỉnh là:\n$$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{\\frac{2\\pi}{5}} = 5\\text{ (giây)}$$\n\nChọn A.",
    "socraticHint": "Thời gian một chu kỳ hô hấp bằng chu kỳ tuần hoàn $T = \\frac{2\\pi}{\\omega}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1041,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Dung tích khí lớn nhất trong phổi của người đó khi hít thở bình thường ở bài toán trên là bao nhiêu lít? (Điền số nguyên):",
    "correctAnswer": "3",
    "detailedSolution": "Vì $-1 \\le \\cos\\left(\\frac{2\\pi t}{5}\\right) \\le 1$ nên:\n$$V(t) \\le 2{,}5 - 0{,}5(-1) = 2{,}5 + 0{,}5 = 3{,}0\\text{ (lít)}$$\nVậy dung tích tối đa là 3 lít.\n\nĐáp số: 3.",
    "socraticHint": "Dung tích đạt cực đại khi hàm cosin bằng $-1$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1042,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Một âm thoa chuẩn phát ra nốt La (A4) có phương trình dao động của nhánh âm thoa là $x(t) = 0{,}2\\cos(880\\pi t)$ (mm). Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Tần số dao động là 440 Hz, nghĩa là trong 1 giây thực hiện 440 dao động toàn phần.\n\n\n\nChọn D.",
    "socraticHint": "Số dao động toàn phần trong 1 giây chính là định nghĩa của tần số $f$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Tần số dao động của âm thoa là $f = 440\\text{ Hz}$."
      },
      {
        "key": "B",
        "content": "Chu kỳ dao động của âm thoa là $T = \\frac{1}{440}\\text{ s}$."
      },
      {
        "key": "C",
        "content": "Biên độ dao động của nhánh âm thoa là $0{,}2\\text{ mm}$."
      },
      {
        "key": "D",
        "content": "Trong 1 giây, nhánh âm thoa thực hiện được 880 dao động toàn phần."
      }
    ]
  },
  {
    "id": 1043,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Nốt Đô trung (C4) có tần số xấp xỉ $f = 260\\text{ Hz}$. Tần số góc tương ứng có dạng $k\\pi\\text{ rad/s}$. Tìm số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "520",
    "detailedSolution": "Tần số góc được tính bằng:\n$$\\omega = 2\\pi f = 2\\pi \\cdot 260 = 520\\pi\\text{ (rad/s)}$$\nDo đó $k = 520$.\n\nĐáp số: 520.",
    "socraticHint": "$\\omega = 2\\pi f$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1044,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Công suất tức thời của một bóng đèn sợi đốt xoay chiều biến thiên theo thời gian bởi $p(t) = 100 + 100\\cos(100\\pi t)$ (W). Công suất trung bình tiêu thụ của bóng đèn trong thời gian dài bằng:",
    "options": [
      {
        "key": "A",
        "content": "$100\\text{ W}$"
      },
      {
        "key": "B",
        "content": "$200\\text{ W}$"
      },
      {
        "key": "C",
        "content": "$50\\text{ W}$"
      },
      {
        "key": "D",
        "content": "$100\\sqrt{2}\\text{ W}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Giá trị trung bình của hàm dao động điều hòa $100\\cos(100\\pi t)$ trong một hoặc nhiều chu kỳ luôn bằng 0.\nDo đó công suất trung bình tiêu thụ là:\n$$\\bar{P} = 100 + 0 = 100\\text{ (W)}$$\n\nChọn A.",
    "socraticHint": "Giá trị trung bình của thành phần xoay chiều điều hòa theo thời gian bằng 0.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1045,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "mo_hinh_dao_dong_luong_giac_thuc_te",
    "topicName": "Mô hình dao động lượng giác thực tế",
    "content": "Công suất tức thời cực đại của bóng đèn ở câu trên bằng bao nhiêu Oát (W)? (Điền số nguyên):",
    "correctAnswer": "200",
    "detailedSolution": "Vì $\\cos(100\\pi t) \\le 1$ nên công suất tức thời cực đại là:\n$$p_{\\max} = 100 + 100(1) = 200\\text{ (W)}$$\n\nĐáp số: 200.",
    "socraticHint": "Công suất cực đại khi $\\cos = 1$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  }
];
