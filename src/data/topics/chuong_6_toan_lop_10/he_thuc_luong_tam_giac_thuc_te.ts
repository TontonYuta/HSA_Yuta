import { Question } from '../../../types/exam';

export const heThucLuongTamGiacQuestions: Question[] = [
  {
    id: 137,
    type: 'fill',
    chapterId: 'chuong_6_toan_lop_10',
    chapterName: 'Chương 6: Đại số sơ cấp & Hình học phẳng Oxy (Lớp 10)',
    topicId: 'he_thuc_luong_tam_giac_thuc_te',
    topicName: 'Hệ thức lượng trong tam giác thực tế (Định lý Sin, Cosin)',
    content: 'Hai tàu thủy $A$ và $B$ cùng xuất phát từ một cảng $O$. Tàu $A$ đi theo hướng Đông với quãng đường 30 hải lý, tàu $B$ đi theo hướng chếch lệch góc $120^\\circ$ so với hướng đi của tàu $A$ với quãng đường 50 hải lý. Khoảng cách giữa hai tàu $A$ và $B$ sau hành trình bằng bao nhiêu hải lý?',
    correctAnswer: '70',
    acceptableAnswers: ['70', '70.0'],
    detailedSolution: 'Xét tam giác $OAB$ có $OA = 30$, $OB = 50$, góc $widehat{AOB} = 120^\\circ$.\nÁp dụng định lý côsin:\n$$AB^2 = OA^2 + OB^2 - 2 \\cdot OA \\cdot OB \\cdot \\cos 120^\\circ$$\n$$AB^2 = 30^2 + 50^2 - 2 \\cdot 30 \\cdot 50 \\cdot l\\left(-\\frac{1}{2}\\right) = 900 + 2500 + 1500 = 4900$$\nSuy ra $AB = \\sqrt{4900} = 70$ hải lý.',
    socraticHint: 'Áp dụng định lý côsin trong tam giác: $c^2 = a^2 + b^2 - 2abcos C$.',
    difficulty: 'Thông hiểu',
    examSets: ['de_03_moi'],
  },
];
