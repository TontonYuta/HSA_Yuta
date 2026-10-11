import { Question } from '../../../types/exam';

export const daoDongLuongGiacThucTeQuestions: Question[] = [
  {
    id: 101,
    type: 'mcq',
    chapterId: 'chuong_9_luong_giac',
    chapterName: 'Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)',
    topicId: 'mo_hinh_dao_dong_luong_giac_thuc_te',
    topicName: 'Mô hình dao động lượng giác thực tế',
    content: 'Một cabin của vòng quay mặt trời chuyển động tròn đều có độ cao $h(t)$ (tính bằng mét) so với mặt đất tại thời điểm $t$ giây được cho bởi công thức $h(t) = 25 - 20cosl\\left(\\frac{\\pi t}{20}\\right)$. Thời điểm đầu tiên kể từ lúc bắt đầu quay ($t = 0$) mà cabin đạt độ cao $35\\text{ m}$ là:',
    options: [
      { key: 'A', content: '$t = \\frac{20}{3}\\text{ s}$' },
      { key: 'B', content: '$t = 10\\text{ s}$' },
      { key: 'C', content: '$t = \\frac{40}{3}\\text{ s}$' },
      { key: 'D', content: '$t = 5\\text{ s}$' },
    ],
    correctAnswer: 'A',
    detailedSolution: 'Ta thiết lập phương trình độ cao:\n$$h(t) = 35 \\iff 25 - 20cosl\\left(\\frac{\\pi t}{20}\\right) = 35 \\iff -20cosl\\left(\\frac{\\pi t}{20}\\right) = 10 \\iff cosl\\left(\\frac{\\pi t}{20}\\right) = -\\frac{1}{2}$$\nVì $-\\frac{1}{2} = cosl\\left(\\frac{2pi}{3}\\right)$ nên:\n$$\\frac{\\pi t}{20} = \\pm \\frac{2pi}{3} + k2pi \\iff t = \\pm \\frac{40}{3} + 40k \\quad (k in mathbb{Z})$$\nVới $t > 0$, thời điểm dương nhỏ nhất tương ứng với nghiệm $t = -\\frac{40}{3} + 40 = \\frac{80}{3}$ hoặc nhánh dương $t = \\frac{40}{3}$? Khoan: $\\frac{\\pi t}{20} = \\frac{2pi}{3} \\implies t = 20 \\times \\frac{2}{3} = \\frac{40}{3} \\approx 13.33\\text{ s}$... Ơ, $\\frac{40}{3}$ mới là nghiệm nhỏ nhất! Nhánh âm: $t = -\\frac{40}{3} + 40 = \\frac{80}{3} \\approx 26.67\\text{ s}$. Vậy thời điểm đầu tiên là $t = \\frac{40}{3}\\text{ s}$. Ta chọn C.',
    socraticHint: 'Giải phương trình $\\cos u = -\\frac{1}{2}$ với điều kiện thời gian $t > 0$ nhỏ nhất.',
    difficulty: 'Vận dụng',
    examSets: ['de_03_moi'],
  },
];
