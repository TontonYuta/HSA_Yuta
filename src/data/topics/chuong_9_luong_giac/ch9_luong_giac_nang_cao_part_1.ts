import { Question } from '../../../types/exam';

export const ch9LuongGiacNangCaoPart1Questions: Question[] = [
  {
    "id": 996,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Số nghiệm của phương trình $\\sin 3x - \\sqrt{3}\\cos 3x = \\sqrt{2}$ trên khoảng $(0; \\pi)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia cả hai vế cho 2:\n$$\\frac{1}{2}\\sin 3x - \\frac{\\sqrt{3}}{2}\\cos 3x = \\frac{\\sqrt{2}}{2} \\iff \\sin\\left(3x - \\frac{\\pi}{3}\\right) = \\sin \\frac{\\pi}{4}$$\nTrường hợp 1:\n$$3x - \\frac{\\pi}{3} = \\frac{\\pi}{4} + k2\\pi \\iff 3x = \\frac{7\\pi}{12} + k2\\pi \\iff x = \\frac{7\\pi}{36} + \\frac{k2\\pi}{3}$$\nVì $x \\in (0; \\pi)$ nên ta lấy $k = 0 \\implies x = \\frac{7\\pi}{36}$ và $k = 1 \\implies x = \\frac{31\\pi}{36}$ (2 nghiệm).\n\nTrường hợp 2:\n$$3x - \\frac{\\pi}{3} = \\pi - \\frac{\\pi}{4} + k2\\pi = \\frac{3\\pi}{4} + k2\\pi \\iff 3x = \\frac{13\\pi}{12} + k2\\pi \\iff x = \\frac{13\\pi}{36} + \\frac{k2\\pi}{3}$$\nVì $x \\in (0; \\pi)$ nên ta lấy $k = 0 \\implies x = \\frac{13\\pi}{36}$ (1 nghiệm, với $k=1$ thì $x = \\frac{37\\pi}{36} > \\pi$).\nTổng cộng có $2 + 1 = 3$ nghiệm thuộc khoảng $(0; \\pi)$.\n\nChọn A.",
    "socraticHint": "Đưa về dạng $\\sin(3x - \\alpha) = \\sin \\beta$ rồi chặn $k$ trên khoảng $(0; \\pi)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 997,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tính tổng tất cả các nghiệm của phương trình $\\cos 2x - 3\\cos x + 2 = 0$ trên đoạn $[0; 2\\pi]$ theo $\\pi$ dưới dạng $k\\pi$. Tìm số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "4",
    "detailedSolution": "Sử dụng công thức nhân đôi $\\cos 2x = 2\\cos^2 x - 1$:\n$$2\\cos^2 x - 1 - 3\\cos x + 2 = 0 \\iff 2\\cos^2 x - 3\\cos x + 1 = 0$$\n$$\\iff (2\\cos x - 1)(\\cos x - 1) = 0 \\iff \\left[ \\begin{aligned} \\cos x &= 1 \\\\ \\cos x &= \\frac{1}{2} \\end{aligned} \\right.$$\nXét các nghiệm trên đoạn $[0; 2\\pi]$:\n- $\\cos x = 1 \\implies x = 0$ hoặc $x = 2\\pi$.\n- $\\cos x = \\frac{1}{2} \\implies x = \\frac{\\pi}{3}$ hoặc $x = \\frac{5\\pi}{3}$.\nTổng tất cả các nghiệm là:\n$$S = 0 + 2\\pi + \\frac{\\pi}{3} + \\frac{5\\pi}{3} = 2\\pi + 2\\pi = 4\\pi$$\nDo đó $k = 4$.\n\nĐáp số: 4.",
    "socraticHint": "Dùng công thức $\\cos 2x = 2\\cos^2 x - 1$ để đưa về phương trình bậc hai theo $\\cos x$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 998,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tìm tất cả các giá trị thực của tham số $m$ để phương trình $\\sin x + \\cos x = m$ có nghiệm:",
    "options": [
      {
        "key": "A",
        "content": "$-\\sqrt{2} \\le m \\le \\sqrt{2}$"
      },
      {
        "key": "B",
        "content": "$-2 \\le m \\le 2$"
      },
      {
        "key": "C",
        "content": "$m \\le \\sqrt{2}$"
      },
      {
        "key": "D",
        "content": "$m \\ge -\\sqrt{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình bậc nhất đối với $\\sin x$ và $\\cos x$ dạng $a\\sin x + b\\cos x = c$ có nghiệm khi và chỉ khi:\n$$a^2 + b^2 \\ge c^2$$\nỞ đây $a = 1, b = 1, c = m$. Điều kiện là:\n$$1^2 + 1^2 \\ge m^2 \\iff m^2 \\le 2 \\iff -\\sqrt{2} \\le m \\le \\sqrt{2}$$\n\nChọn A.",
    "socraticHint": "Điều kiện có nghiệm của phương trình $a\\sin x + b\\cos x = c$ là $a^2 + b^2 \\ge c^2$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 999,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho hàm số $f(x) = \\frac{\\tan x}{\\cos 2x}$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Hàm số có tập xác định gồm hai họ điểm loại trừ, là hàm lẻ tuần hoàn chu kỳ $\\pi$, và có $f(\\pi/6) = \\frac{2\\sqrt{3}}{3}$.\n\n\n\nChọn D.",
    "socraticHint": "Xét điều kiện mẫu số khác 0 và tính chất tính chẵn lẻ của $\\tan$ và $\\cos$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\left( \\left\\{ \\frac{\\pi}{2} + k\\pi \\right\\} \\cup \\left\\{ \\frac{\\pi}{4} + \\frac{k\\pi}{2} \\right\\} \\right), k \\in \\mathbb{Z}$."
      },
      {
        "key": "B",
        "content": "Hàm số $f(x)$ là một hàm số lẻ trên tập xác định."
      },
      {
        "key": "C",
        "content": "Hàm số $f(x)$ tuần hoàn với chu kỳ $\\pi$."
      },
      {
        "key": "D",
        "content": "Giá trị của hàm số tại điểm $x = \\frac{\\pi}{6}$ bằng $\\frac{\\sqrt{3}}{3}$."
      }
    ]
  },
  {
    "id": 1000,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tìm giá trị lớn nhất của biểu thức $P = \\sin^4 x + \\cos^4 x$. (Điền số nguyên):",
    "correctAnswer": "1",
    "detailedSolution": "Biến đổi biểu thức:\n$$P = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x \\cos^2 x = 1 - 2\\left(\\frac{\\sin 2x}{2}\\right)^2 = 1 - \\frac{1}{2}\\sin^2 2x$$\nVì $0 \\le \\sin^2 2x \\le 1$ với mọi $x \\in \\mathbb{R}$ nên:\n$$P \\le 1 - 0 = 1$$\nDấu đẳng thức xảy ra khi $\\sin 2x = 0 \\iff x = \\frac{k\\pi}{2}$ ($k \\in \\mathbb{Z}$).\nVậy giá trị lớn nhất của $P$ bằng 1.\n\nĐáp số: 1.",
    "socraticHint": "Biến đổi về $\\sin 2x$: $P = 1 - \\frac{1}{2}\\sin^2 2x$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1001,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Giá trị nhỏ nhất của biểu thức $P = \\sin^4 x + \\cos^4 x$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{4}$"
      },
      {
        "key": "C",
        "content": "$\\frac{3}{4}$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có biểu diễn: $P = 1 - \\frac{1}{2}\\sin^2 2x$.\nVì $\\sin^2 2x \\le 1$ nên:\n$$P \\ge 1 - \\frac{1}{2}(1) = \\frac{1}{2}$$\nDấu đẳng thức xảy ra khi $\\sin^2 2x = 1 \\iff \\cos 2x = 0 \\iff 2x = \\frac{\\pi}{2} + k\\pi \\iff x = \\frac{\\pi}{4} + \\frac{k\\pi}{2}$.\nVậy giá trị nhỏ nhất của $P$ là $\\frac{1}{2}$.\n\nChọn A.",
    "socraticHint": "Giá trị nhỏ nhất đạt được khi $\\sin^2 2x = 1$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1002,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Nghiệm của phương trình thuần nhất bậc hai $\\sin^2 x - 3\\sin x \\cos x + 2\\cos^2 x = 0$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x = \\frac{\\pi}{4} + k\\pi,\\ x = \\arctan 2 + k\\pi\\ (k \\in \\mathbb{Z})$"
      },
      {
        "key": "B",
        "content": "$x = \\frac{\\pi}{4} + k2\\pi,\\ x = \\arctan 2 + k2\\pi\\ (k \\in \\mathbb{Z})$"
      },
      {
        "key": "C",
        "content": "$x = -\\frac{\\pi}{4} + k\\pi\\ (k \\in \\mathbb{Z})$"
      },
      {
        "key": "D",
        "content": "Phương trình vô nghiệm"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét $\\cos x = 0 \\implies \\sin^2 x = 1 \\ne 0$, không thỏa mãn phương trình.\nChia cả hai vế của phương trình cho $\\cos^2 x \\ne 0$:\n$$\\tan^2 x - 3\\tan x + 2 = 0 \\iff (\\tan x - 1)(\\tan x - 2) = 0$$\n$$\\iff \\left[ \\begin{aligned} \\tan x &= 1 \\implies x = \\frac{\\pi}{4} + k\\pi \\\\ \\tan x &= 2 \\implies x = \\arctan 2 + k\\pi \\end{aligned} \\right. \\quad (k \\in \\mathbb{Z})$$\n\nChọn A.",
    "socraticHint": "Chia cả hai vế cho $\\cos^2 x$ để đưa về phương trình bậc hai theo $\\tan x$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1003,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Số nghiệm thuộc đoạn $[0; 2\\pi]$ của phương trình $\\sin 2x \\cdot \\cos x = 0$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "5",
    "detailedSolution": "Biến đổi phương trình:\n$$\\sin 2x \\cdot \\cos x = 0 \\iff 2\\sin x \\cos^2 x = 0 \\iff \\left[ \\begin{aligned} \\sin x &= 0 \\\\ \\cos x &= 0 \\end{aligned} \\right. \\iff \\sin 2x = 0$$\n$$2x = k\\pi \\iff x = \\frac{k\\pi}{2} \\quad (k \\in \\mathbb{Z})$$\nĐể $x \\in [0; 2\\pi]$:\n$$0 \\le \\frac{k\\pi}{2} \\le 2\\pi \\iff 0 \\le k \\le 4$$\nVì $k \\in \\mathbb{Z}$ nên $k \\in \\{0, 1, 2, 3, 4\\}$.\nCác nghiệm cụ thể là $x \\in \\left\\{0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi\\right\\}$, có đúng 5 nghiệm.\n\nĐáp số: 5.",
    "socraticHint": "Tích $\\sin 2x \\cos x = 0$ tương đương với $\\sin 2x = 0$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1004,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Rút gọn biểu thức $A = \\frac{\\sin 3x}{\\sin x} - \\frac{\\cos 3x}{\\cos x}$ với $\\sin 2x \\ne 0$:",
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
        "content": "$\\cos 2x$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Quy đồng mẫu thức:\n$$A = \\frac{\\sin 3x \\cos x - \\cos 3x \\sin x}{\\sin x \\cos x}$$\nSử dụng công thức cộng $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$:\nTử số: $\\sin(3x - x) = \\sin 2x$.\nMẫu số: $\\sin x \\cos x = \\frac{1}{2}\\sin 2x$.\nDo đó:\n$$A = \\frac{\\sin 2x}{\\frac{1}{2}\\sin 2x} = 2$$\n\nChọn A.",
    "socraticHint": "Quy đồng mẫu rồi áp dụng công thức $\\sin(a-b)$ trên tử số.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1005,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho phương trình lượng giác đối xứng $\\sin x + \\cos x - 2\\sin x \\cos x - 1 = 0$. Đặt ẩn phụ $t = \\sin x + \\cos x$ với $|t| \\le \\sqrt{2}$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Phương trình ẩn $t$ có 2 nghiệm $t=0, t=1$. Ứng với hai giá trị này có tất cả 5 nghiệm trên đoạn $[0; 2\\pi]$.\n\n\n\nChọn D.",
    "socraticHint": "Đặt ẩn phụ $t = \\sin x + \\cos x$ và chú ý tìm nghiệm $x$ trên cả hai họ nghiệm.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Biểu diễn tích theo $t$ là $\\sin x \\cos x = \\frac{t^2 - 1}{2}$."
      },
      {
        "key": "B",
        "content": "Phương trình quy về ẩn $t$ là $-t^2 + t = 0$."
      },
      {
        "key": "C",
        "content": "Nghiệm của phương trình theo ẩn $t$ là $t = 0$ hoặc $t = 1$."
      },
      {
        "key": "D",
        "content": "Số nghiệm của phương trình ban đầu trên đoạn $[0; 2\\pi]$ bằng 3."
      }
    ]
  },
  {
    "id": 1006,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tìm nghiệm dương nhỏ nhất của phương trình $\\tan x = \\sqrt{3}$ theo đơn vị độ ($^\\circ$). (Điền số nguyên):",
    "correctAnswer": "60",
    "detailedSolution": "Ta có $\\tan 60^\\circ = \\sqrt{3}$.\nPhương trình có nghiệm tổng quát:\n$$x = 60^\\circ + k \\cdot 180^\\circ \\quad (k \\in \\mathbb{Z})$$\nNghiệm dương nhỏ nhất ứng với $k = 0$ là $x = 60^\\circ$.\n\nĐáp số: 60.",
    "socraticHint": "Góc có tang bằng $\\sqrt{3}$ trong khoảng $(0^\\circ; 90^\\circ)$ là $60^\\circ$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1007,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Biến đổi biểu thức $P = \\sin^2 x \\cos^2 x$ về góc nhân bội ta được kết quả nào sau đây?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1 - \\cos 4x}{8}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1 + \\cos 4x}{8}$"
      },
      {
        "key": "C",
        "content": "$\\frac{1 - \\cos 2x}{4}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1 - \\cos 4x}{4}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng công thức nhân đôi:\n$$P = (\\sin x \\cos x)^2 = \\left(\\frac{1}{2}\\sin 2x\\right)^2 = \\frac{1}{4}\\sin^2 2x$$\nÁp dụng công thức hạ bậc $\\sin^2 2x = \\frac{1 - \\cos 4x}{2}$:\n$$P = \\frac{1}{4} \\cdot \\frac{1 - \\cos 4x}{2} = \\frac{1 - \\cos 4x}{8}$$\n\nChọn A.",
    "socraticHint": "Đưa về $(\\frac{1}{2}\\sin 2x)^2$ rồi dùng công thức hạ bậc cho góc $2x$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1008,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Trong một tam giác $ABC$ không vuông, hệ thức lượng giác nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "$\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$"
      },
      {
        "key": "B",
        "content": "$\\sin A + \\sin B + \\sin C = \\sin A \\sin B \\sin C$"
      },
      {
        "key": "C",
        "content": "$\\cos A + \\cos B + \\cos C = 1$"
      },
      {
        "key": "D",
        "content": "$\\tan A + \\tan B + \\tan C = 3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $A + B + C = \\pi \\implies A + B = \\pi - C$.\nDo tam giác không vuông nên:\n$$\\tan(A + B) = \\tan(\\pi - C) = -\\tan C$$\n$$\\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = -\\tan C$$\n$$\\iff \\tan A + \\tan B = -\\tan C + \\tan A \\tan B \\tan C$$\n$$\\iff \\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$$\n\nChọn A.",
    "socraticHint": "Dùng công thức $\\tan(A+B) = -\\tan C$ với $A+B+C = \\pi$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1009,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Số nghiệm của phương trình $2\\sin^2 x - 5\\sin x + 2 = 0$ trên đoạn $[0; 2\\pi]$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "2",
    "detailedSolution": "Giải phương trình bậc hai theo $\\sin x$:\n$$2\\sin^2 x - 5\\sin x + 2 = 0 \\iff (2\\sin x - 1)(\\sin x - 2) = 0$$\n- $\\sin x = 2$: vô nghiệm vì $-1 \\le \\sin x \\le 1$.\n- $\\sin x = \\frac{1}{2}$: trên đoạn $[0; 2\\pi]$ có đúng 2 nghiệm là $x = \\frac{\\pi}{6}$ và $x = \\frac{5\\pi}{6}$.\nVậy phương trình có 2 nghiệm.\n\nĐáp số: 2.",
    "socraticHint": "Nghiệm $\\sin x = 2$ bị loại, chỉ nhận $\\sin x = 1/2$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1010,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho hàm số $y = 3\\sin 2x - 4\\cos 2x + 1$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Hàm số đạt GTLN $M = 6$, GTNN $m = -4$, tổng $M + m = 2$.\n\n\n\nChọn D.",
    "socraticHint": "Đánh giá biểu thức $a\\sin u + b\\cos u$ nằm trong khoảng $[-\\sqrt{a^2+b^2}; \\sqrt{a^2+b^2}]$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Tập giá trị của biểu thức $T = 3\\sin 2x - 4\\cos 2x$ là đoạn $[-5; 5]$."
      },
      {
        "key": "B",
        "content": "Giá trị lớn nhất của hàm số là $M = 6$."
      },
      {
        "key": "C",
        "content": "Giá trị nhỏ nhất của hàm số là $m = -4$."
      },
      {
        "key": "D",
        "content": "Tổng của giá trị lớn nhất và giá trị nhỏ nhất $M + m = 0$."
      }
    ]
  },
  {
    "id": 1011,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Trong tam giác $ABC$, biết $\\cos A \\cos B = \\frac{1}{4}$ và $\\sin A \\sin B = \\frac{3}{4}$. Số đo góc $C$ bằng bao nhiêu độ ($^\\circ$)? (Điền số nguyên):",
    "correctAnswer": "60",
    "detailedSolution": "Áp dụng công thức cộng đối với cosin:\n$$\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B = \\frac{1}{4} - \\frac{3}{4} = -\\frac{1}{2}$$\nVì $A + B + C = 180^\\circ$ nên:\n$$\\cos C = \\cos(180^\\circ - (A + B)) = -\\cos(A + B) = -\\left(-\\frac{1}{2}\\right) = \\frac{1}{2}$$\nDo góc $C$ trong tam giác thỏa mãn $0^\\circ < C < 180^\\circ$ nên:\n$$C = 60^\\circ$$\n\nĐáp số: 60.",
    "socraticHint": "Dùng công thức $\\cos(A+B) = \\cos A \\cos B - \\sin A \\sin B$ và liên hệ $\\cos C = -\\cos(A+B)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1012,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Số nghiệm của phương trình $\\sqrt{3}\\tan\\left(2x - \\frac{\\pi}{4}\\right) = 1$ trên khoảng $\\left(0; \\frac{\\pi}{2}\\right)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$0$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có:\n$$\\tan\\left(2x - \\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{3}} = \\tan \\frac{\\pi}{6}$$\n$$2x - \\frac{\\pi}{4} = \\frac{\\pi}{6} + k\\pi \\iff 2x = \\frac{5\\pi}{12} + k\\pi \\iff x = \\frac{5\\pi}{24} + \\frac{k\\pi}{2} \\quad (k \\in \\mathbb{Z})$$\nXét điều kiện $x \\in \\left(0; \\frac{\\pi}{2}\\right)$:\n$$0 < \\frac{5\\pi}{24} + \\frac{k\\pi}{2} < \\frac{\\pi}{2} \\iff -\\frac{5}{12} < k < \\frac{7}{12}$$\nVì $k \\in \\mathbb{Z}$ nên chỉ có duy nhất giá trị $k = 0$.\nNghiệm tương ứng là $x = \\frac{5\\pi}{24}$. Vậy có đúng 1 nghiệm.\n\nChọn A.",
    "socraticHint": "Giải phương trình tang cơ bản rồi chặn nghiệm $k$ trong khoảng $(0; \\pi/2)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1013,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tính giá trị của tích $P = 8 \\sin 20^\\circ \\sin 40^\\circ \\sin 80^\\circ$. Biểu thức $P$ có dạng $\\sqrt{k}$. Tìm số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "3",
    "detailedSolution": "Áp dụng đẳng thức lượng giác đặc biệt:\n$$\\sin x \\sin(60^\\circ - x) \\sin(60^\\circ + x) = \\frac{1}{4}\\sin 3x$$\nVới $x = 20^\\circ$, ta có $60^\\circ - x = 40^\\circ$ và $60^\\circ + x = 80^\\circ$:\n$$\\sin 20^\\circ \\sin 40^\\circ \\sin 80^\\circ = \\frac{1}{4}\\sin 60^\\circ = \\frac{1}{4} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{8}$$\nNhân hai vế với 8:\n$$P = 8 \\cdot \\frac{\\sqrt{3}}{8} = \\sqrt{3}$$\nDo đó $k = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Dùng đẳng thức $\\sin x \\sin(60^\\circ - x) \\sin(60^\\circ + x) = \\frac{1}{4}\\sin 3x$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1014,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Phương trình $m\\sin x + 3\\cos x = 5$ vô nghiệm khi và chỉ khi:",
    "options": [
      {
        "key": "A",
        "content": "$-4 < m < 4$"
      },
      {
        "key": "B",
        "content": "$m > 4$"
      },
      {
        "key": "C",
        "content": "$m < -4$"
      },
      {
        "key": "D",
        "content": "$-5 < m < 5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phương trình $a\\sin x + b\\cos x = c$ vô nghiệm khi và chỉ khi:\n$$a^2 + b^2 < c^2$$\nỞ đây $a = m, b = 3, c = 5$. Ta có:\n$$m^2 + 3^2 < 5^2 \\iff m^2 + 9 < 25 \\iff m^2 < 16 \\iff -4 < m < 4$$\n\nChọn A.",
    "socraticHint": "Điều kiện vô nghiệm của phương trình lượng giác bậc nhất là $a^2 + b^2 < c^2$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1015,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho biểu thức $A = \\cos x + \\cos 3x + \\cos 5x$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Phương trình $2\\cos 2x + 1 = 0$ cho nghiệm $x = \\pm \\frac{\\pi}{3} + k\\pi$.\n\n\n\nChọn D.",
    "socraticHint": "Nhóm $\\cos x$ và $\\cos 5x$ để xuất hiện nhân tử chung $\\cos 3x$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Biến đổi tổng thành tích cho hai số hạng ngoài cùng: $\\cos x + \\cos 5x = 2\\cos 3x \\cos 2x$."
      },
      {
        "key": "B",
        "content": "Biểu thức $A$ có dạng nhân tử $A = \\cos 3x (2\\cos 2x + 1)$."
      },
      {
        "key": "C",
        "content": "Khi $x = \\frac{\\pi}{6}$, giá trị của $A = 0$."
      },
      {
        "key": "D",
        "content": "Phương trình $A = 0$ có nghiệm thỏa mãn $2\\cos 2x + 1 = 0 \\iff x = \\pm \\frac{\\pi}{6} + k\\pi$."
      }
    ]
  },
  {
    "id": 1016,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tính giá trị của biểu thức $P = 4\\sin 18^\\circ \\cos 36^\\circ$. (Điền số nguyên):",
    "correctAnswer": "1",
    "detailedSolution": "Nhân cả hai vế với $\\cos 18^\\circ \\ne 0$:\n$$P \\cdot \\cos 18^\\circ = 4\\sin 18^\\circ \\cos 18^\\circ \\cos 36^\\circ = 2\\sin 36^\\circ \\cos 36^\\circ = \\sin 72^\\circ$$\nVì $72^\\circ + 18^\\circ = 90^\\circ$ nên $\\sin 72^\\circ = \\cos 18^\\circ$.\nDo đó:\n$$P \\cdot \\cos 18^\\circ = \\cos 18^\\circ \\iff P = 1$$\n\nĐáp số: 1.",
    "socraticHint": "Nhân với $\\cos 18^\\circ$ rồi dùng liên tiếp công thức nhân đôi $\\sin 2\\alpha$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1017,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Nghiệm của phương trình $\\cos 4x + 6\\sin^2 x - 1 = 0$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x = k\\pi$ hoặc $x = \\pm \\frac{\\pi}{6} + k\\pi\\ (k \\in \\mathbb{Z})$"
      },
      {
        "key": "B",
        "content": "$x = \\frac{k\\pi}{2}\\ (k \\in \\mathbb{Z})$"
      },
      {
        "key": "C",
        "content": "$x = \\pm \\frac{\\pi}{3} + k\\pi\\ (k \\in \\mathbb{Z})$"
      },
      {
        "key": "D",
        "content": "$x = \\frac{\\pi}{4} + k\\pi\\ (k \\in \\mathbb{Z})$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Biến đổi theo $\\sin^2 x$:\n$$\\cos 4x = 1 - 2\\sin^2 2x = 1 - 2(2\\sin x \\cos x)^2 = 1 - 8\\sin^2 x(1 - \\sin^2 x) = 8\\sin^4 x - 8\\sin^2 x + 1$$\nThay vào phương trình:\n$$(8\\sin^4 x - 8\\sin^2 x + 1) + 6\\sin^2 x - 1 = 0 \\iff 8\\sin^4 x - 2\\sin^2 x = 0$$\n$$\\iff 2\\sin^2 x(4\\sin^2 x - 1) = 0 \\iff \\left[ \\begin{aligned} \\sin x &= 0 \\\\ \\sin^2 x &= \\frac{1}{4} \\end{aligned} \\right.$$\n- $\\sin x = 0 \\iff x = k\\pi$.\n- $\\sin^2 x = \\frac{1}{4} = \\sin^2 \\frac{\\pi}{6} \\iff x = \\pm \\frac{\\pi}{6} + k\\pi$.\n\nChọn A.",
    "socraticHint": "Đưa $\\cos 4x$ về đa thức bậc 4 theo $\\sin x$ rồi đặt nhân tử chung $\\sin^2 x$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1018,
    "type": "fill",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Cho $\\sin x + \\cos x = \\frac{1}{2}$. Tính giá trị của biểu thức $P = |\\sin x - \\cos x|$. Biết $P$ có dạng $\\frac{\\sqrt{k}}{2}$, tìm số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "7",
    "detailedSolution": "Ta có đồng nhất thức:\n$$(\\sin x + \\cos x)^2 + (\\sin x - \\cos x)^2 = 2(\\sin^2 x + \\cos^2 x) = 2$$\nThay $\\sin x + \\cos x = \\frac{1}{2}$ vào:\n$$\\left(\\frac{1}{2}\\right)^2 + P^2 = 2 \\iff \\frac{1}{4} + P^2 = 2 \\iff P^2 = \\frac{7}{4}$$\nVì $P = |\\sin x - \\cos x| \\ge 0$ nên:\n$$P = \\frac{\\sqrt{7}}{2}$$\nDo đó $k = 7$.\n\nĐáp số: 7.",
    "socraticHint": "Áp dụng hằng đẳng thức $(a+b)^2 + (a-b)^2 = 2(a^2 + b^2)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1019,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Tìm điều kiện của tham số thực $m$ để phương trình $\\cos x = m$ có đúng một nghiệm thuộc đoạn $[0; \\pi]$:",
    "options": [
      {
        "key": "A",
        "content": "$-1 \\le m \\le 1$"
      },
      {
        "key": "B",
        "content": "$0 \\le m \\le 1$"
      },
      {
        "key": "C",
        "content": "$-1 < m < 1$"
      },
      {
        "key": "D",
        "content": "$m \\in \\mathbb{R}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hàm số $y = \\cos x$ liên tục và nghịch biến nghiêm ngặt trên đoạn $[0; \\pi]$.\nVới $x = 0 \\implies y = 1$; với $x = \\pi \\implies y = -1$.\nTập giá trị của hàm số trên đoạn $[0; \\pi]$ là $[-1; 1]$.\nDo tính đơn điệu, với mỗi giá trị $m \\in [-1; 1]$, đường thẳng $y = m$ luôn cắt đồ thị hàm số $y = \\cos x$ tại đúng một điểm duy nhất có hoành độ thuộc $[0; \\pi]$.\n\nChọn A.",
    "socraticHint": "Hàm số cosin nghịch biến nghiêm ngặt trên $[0; \\pi]$ từ 1 về -1.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1020,
    "type": "mcq",
    "chapterId": "chuong_9_luong_giac",
    "chapterName": "Chuyên đề 9: Lượng giác & Phương trình lượng giác (Toán 11)",
    "topicId": "cong_thuc_va_pt_luong_giac",
    "topicName": "Công thức & Phương trình lượng giác",
    "content": "Chu kỳ tuần hoàn cơ sở của hàm số $y = \\sin 3x + \\cos 2x$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2\\pi$"
      },
      {
        "key": "B",
        "content": "$\\pi$"
      },
      {
        "key": "C",
        "content": "$6\\pi$"
      },
      {
        "key": "D",
        "content": "$\\frac{2\\pi}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hàm số $y_1 = \\sin 3x$ có chu kỳ $T_1 = \\frac{2\\pi}{3}$.\nHàm số $y_2 = \\cos 2x$ có chu kỳ $T_2 = \\frac{2\\pi}{2} = \\pi$.\nChu kỳ cơ sở của hàm tổng $y = y_1 + y_2$ là bội chung nhỏ nhất của $T_1$ và $T_2$:\n$$T = \\text{BCNN}\\left(\\frac{2\\pi}{3}, \\pi\\right) = 2\\pi$$\nThật vậy:\n$$2\\pi = 3 \\cdot \\frac{2\\pi}{3} = 2 \\cdot \\pi$$\n\nChọn A.",
    "socraticHint": "Chu kỳ của tổng hai hàm tuần hoàn bằng bội chung nhỏ nhất của hai chu kỳ thành phần.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  }
];
