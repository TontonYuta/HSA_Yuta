import { Question } from '../../../types/exam';

export const ungDungMuLogQuestions: Question[] = [
  {
    id: 38,
    type: 'fill',
    chapterId: 'chuong_2_mu_logarit',
    chapterName: 'Chương 2: Hàm số mũ & Hàm số Logarit',
    topicId: 'ung_dung_thuc_te_mu_logarit',
    topicName: 'Ứng dụng thực tế mũ & logarit',
    content: 'Tìm số nghiệm nguyên dương của bất phương trình: $2^{x^2 - 4x} \\le 32$.',
    correctAnswer: '5',
    acceptableAnswers: ['5', '5.0'],
    detailedSolution: 'Ta có $32 = 2^5 \\implies x^2 - 4x \\le 5 \\iff x^2 - 4x - 5 \\le 0 \\iff -1 \\le x \\le 5$.\nCác nghiệm nguyên dương là $x \\in \\{1, 2, 3, 4, 5\\}$. Vậy có đúng 5 nghiệm.',
    socraticHint: 'Đưa về cùng cơ số 2, giải bất phương trình bậc hai rồi đếm số nguyên dương.',
    difficulty: 'Thông hiểu',
    examSets: ['de_01_chuan', 'de_03_cap_toc'],
  },
  {
    id: 99,
    type: 'fill',
    chapterId: 'chuong_2_mu_logarit',
    chapterName: 'Chương 2: Hàm số mũ & Hàm số Logarit',
    topicId: 'ung_dung_thuc_te_mu_logarit',
    topicName: 'Ứng dụng thực tế mũ & logarit',
    content: 'Tính giá trị của biểu thức $P = \\log_2 8 + \\log_3 9$.',
    correctAnswer: '5',
    acceptableAnswers: ['5', '5.0'],
    detailedSolution: '$\\log_2 8 = 3$ và $\\log_3 9 = 2 \\implies P = 3 + 2 = 5$.',
    socraticHint: 'Tính riêng từng giá trị logarit cơ bản.',
    difficulty: 'Nhận biết',
    examSets: ['de_02_thuc_chien'],
  },
];
