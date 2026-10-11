import { Question } from '../../../types/exam';

export const quyHoachTuyenTinhQuestions: Question[] = [
  {
    id: 143,
    type: 'fill',
    chapterId: 'chuong_6_toan_lop_10',
    chapterName: 'Chương 6: Đại số sơ cấp & Hình học phẳng Oxy (Lớp 10)',
    topicId: 'quy_hoach_tuyen_tinh_bpt_2_an',
    topicName: 'Hệ BPT bậc nhất hai ẩn & Miền nghiệm đa giác',
    content: 'Cho miền nghiệm của hệ bất phương trình bậc nhất hai ẩn: $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\\\ 2x + y \\le 6 \\end{cases}$. Giá trị lớn nhất của biểu thức $F(x, y) = 3x + 2y$ trên miền nghiệm này bằng bao nhiêu?',
    correctAnswer: '10',
    acceptableAnswers: ['10', '10.0'],
    detailedSolution: 'Miền nghiệm là tứ giác $OABC$ với tọa độ các đỉnh:\n- $O(0; 0) \\implies F(0, 0) = 0$\n- $A(3; 0)$ (giao của $2x + y = 6$ với trục $Ox$) $\\implies F(3, 0) = 3(3) + 2(0) = 9$\n- $B(2; 2)$ (giao điểm của $x + y = 4$ và $2x + y = 6$) $\\implies F(2, 2) = 3(2) + 2(2) = 10$\n- $C(0; 4)$ (giao của $x + y = 4$ với trục $Oy$) $\\implies F(0, 4) = 3(0) + 2(4) = 8$\nGiá trị lớn nhất của $F(x, y)$ đạt được tại đỉnh $B(2; 2)$ và bằng 10.',
    socraticHint: 'Xác định các đỉnh của đa giác miền nghiệm, tính giá trị của $F$ tại từng đỉnh rồi chọn giá trị lớn nhất.',
    difficulty: 'Vận dụng',
    examSets: ['de_03_moi'],
  },
  {
    id: 202,
    type: 'mcq',
    chapterId: 'chuong_6_toan_lop_10',
    chapterName: 'Chương 6: Toán bổ trợ Lớp 10 (Tập hợp, Bất PT, Conic)',
    topicId: 'quy_hoach_tuyen_tinh_bpt_2_an',
    topicName: 'Bất phương trình & Quy hoạch tuyến tính',
    content: 'Số giá trị nguyên của tham số $m$ để phương trình $(x + 1)(x - 3) + \\sqrt{8 + 2x - x^2} = 2m$ có nghiệm là:',
    options: [
      { key: 'A', content: '$3$' },
      { key: 'B', content: '$21$' },
      { key: 'C', content: '$15$' },
      { key: 'D', content: '$10$' },
    ],
    correctAnswer: 'A',
    detailedSolution: 'Điều kiện xác định: $8 + 2x - x^2 \\ge 0 \\iff -(x - 4)(x + 2) \\ge 0 \\iff -2 \\le x \\le 4$.\nTa có: $(x + 1)(x - 3) = x^2 - 2x - 3 = -(8 + 2x - x^2) + 5$.\nĐặt $t = \\sqrt{8 + 2x - x^2}$.\nVì $8 + 2x - x^2 = -(x - 1)^2 + 9 \\le 9$ với mọi $x \\in [-2; 4]$, nên $0 \\le t \\le 3$.\n\nKhi đó phương trình trở thành:\n$$-t^2 + t + 5 = 2m$$\nXét hàm số $f(t) = -t^2 + t + 5$ trên $[0; 3]$:\n$f\'(t) = -2t + 1 = 0 \\iff t = \\frac{1}{2}$.\nTa có:\n$f(0) = 5$; $f\\left(\\frac{1}{2}\\right) = \\frac{21}{4} = 5.25$; $f(3) = -1$.\nDo đó miền giá trị của $f(t)$ là $[-1; \\frac{21}{4}]$.\nPhương trình có nghiệm $\\iff -1 \\le 2m \\le \\frac{21}{4} \\iff -0.5 \\le m \\le 2.625$.\nVì $m \\in \\mathbb{Z}$, nên $m \\in \\{0; 1; 2\\}$. Vậy có $3$ giá trị nguyên thỏa mãn.',
    socraticHint: 'Khai triển biểu thức $(x+1)(x-3)$ và biểu diễn theo $8 + 2x - x^2$, sau đó đặt ẩn phụ $t = \\sqrt{8 + 2x - x^2}$.',
    difficulty: 'Vận dụng',
    examSets: ['de_06_hsa35'],
  },
];
