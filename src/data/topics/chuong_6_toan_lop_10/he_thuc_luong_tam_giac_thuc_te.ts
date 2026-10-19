import { Question } from '../../../types/exam';

export const heThucLuongTamGiacQuestions: Question[] = [
  {
    "id": 137,
    "latexVerified": true,
    "type": "fill",
    "chapterId": 'chuong_6_toan_lop_10',
    "chapterName": 'Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)',
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Đo đạc thực tế",
    "content": "Hai tàu thủy $A$ và $B$ cùng xuất phát từ một cảng $O$. Tàu $A$ đi theo hướng Đông với quãng đường 30 hải lý, tàu $B$ đi theo hướng chếch lệch góc $120^\\circ$ so với hướng đi của tàu $A$ với quãng đường 50 hải lý. Khoảng cách giữa hai tàu $A$ và $B$ sau hành trình bằng bao nhiêu hải lý?",
    "correctAnswer": "70",
    "acceptableAnswers": [
      "70",
      "70.0"
    ],
    "detailedSolution": "Xét tam giác $OAB$ có $OA = 30$, $OB = 50$, góc $widehat{AOB} = 120^\\circ$.\nÁp dụng định lý côsin:\n$$AB^2 = OA^2 + OB^2 - 2 \\cdot OA \\cdot OB \\cdot \\cos 120^\\circ$$\n$$AB^2 = 30^2 + 50^2 - 2 \\cdot 30 \\cdot 50 \\cdot l\\left(-\\frac{1}{2}\\right) = 900 + 2500 + 1500 = 4900$$\nSuy ra $AB = \\sqrt{4900} = 70$ hải lý.",
    "socraticHint": "Áp dụng định lý côsin trong tam giác: $c^2 = a^2 + b^2 - 2abcos C$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 152,
    "latexVerified": true,
    "type": "mcq",
    "chapterId": 'chuong_6_toan_lop_10',
    "chapterName": 'Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)',
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Đo đạc thực tế",
    "content": "Cho tam giác $ABC$ có cạnh $b = 7$, cạnh $c = 5$ và $\\cos A = \\frac{3}{5}$. Bán kính $R$ của đường tròn ngoại tiếp tam giác $ABC$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{5\\sqrt{2}}{2}$"
      },
      {
        "key": "B",
        "content": "$5\\sqrt{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{7\\sqrt{2}}{2}$"
      },
      {
        "key": "D",
        "content": "$4\\sqrt{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng định lý côsin tính cạnh $a$:\n$$a^2 = b^2 + c^2 - 2bc \\cos A = 7^2 + 5^2 - 2(7)(5)l\\left(\\frac{3}{5}\\right) = 49 + 25 - 42 = 32 \\implies a = 4\\sqrt{2}$$\nVì góc $A$ nhọn nên $\\sin A = \\sqrt{1 - \\cos^2 A} = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$.\nÁp dụng định lý sin:\n$$R = \\frac{a}{2\\sin A} = \\frac{4\\sqrt{2}}{2 \\cdot \\frac{4}{5}} = \\frac{4\\sqrt{2}}{\\frac{8}{5}} = \\frac{5\\sqrt{2}}{2}$$.",
    "socraticHint": "Tính cạnh đối diện bằng định lý Cosin, sau đó dùng định lý Sin $R = \\frac{a}{2\\sin A}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  }
];
