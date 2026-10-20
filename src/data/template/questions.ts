import { Question } from '../../types/exam';

/**
 * ============================================================================
 * NGÂN HÀNG CÂU HỎI MẪU (STARTER QUESTIONS TEMPLATE)
 * ============================================================================
 * File này chứa các câu hỏi mẫu chuẩn định dạng để bạn tham khảo cách viết:
 * - Công thức toán LaTeX: $...$ (trong dòng) hoặc $$...$$ (khối lớn).
 * - Bảng số liệu: Chuẩn bảng Markdown (đã tự động tối ưu padding và hiển thị mobile).
 * - Lời giải chi tiết: step-by-step rõ ràng.
 * - Gợi ý Socratic: kích thích tư duy tự giải.
 * - Thuộc tính track: 'STANDARD' (Cơ bản/Phổ thông) hoặc 'ADVANCED' (Nâng cao/HSG) hoặc 'BOTH'.
 */

export const TEMPLATE_QUESTIONS: Question[] = [
  // --- CHƯƠNG 1 ---
  {
    id: 1001,
    type: 'mcq',
    chapterId: 'ch_01_nen_tang',
    chapterName: 'Kiến Thức Cốt Lõi',
    topicId: 'tp_01_khai_niem',
    topicName: 'Khái niệm & Tính chất',
    content: 'Cho tập hợp các số thực $\\mathbb{R}$. Khẳng định nào sau đây là **đúng** về giá trị tuyệt đối $|x|$ của một số thực $x$?',
    options: [
      { key: 'A', content: '$|x| = x$ với mọi số thực $x$' },
      { key: 'B', content: '$|x| \\ge 0$ với mọi $x \\in \\mathbb{R}$ và $|x| = 0 \\iff x = 0$' },
      { key: 'C', content: '$|x| < 0$ khi $x$ là số âm' },
      { key: 'D', content: '$|-x| = -|x|$ với mọi số thực $x$' },
    ],
    correctAnswer: 'B',
    difficulty: 'Nhận biết',
    detailedSolution: `Theo định nghĩa giá trị tuyệt đối của số thực:
$$|x| = \\begin{cases} x & \\text{nếu } x \\ge 0 \\\\ -x & \\text{nếu } x < 0 \\end{cases}$$
Do đó khoảng cách từ điểm biểu diễn $x$ đến gốc tọa độ $0$ luôn không âm: $|x| \\ge 0$ với mọi $x$, và đẳng thức xảy ra khi và chỉ khi $x = 0$.
Vậy đáp án đúng là **B**.`,
    socraticHint: 'Hãy nhớ lại ý nghĩa hình học của giá trị tuyệt đối trên trục số: nó biểu diễn khoảng cách từ điểm $x$ đến gốc tọa độ $0$.',
    track: 'STANDARD',
    examSets: ['exam_template_01', 'exam_template_02'],
  },
  {
    id: 1002,
    type: 'mcq',
    chapterId: 'ch_01_nen_tang',
    chapterName: 'Kiến Thức Cốt Lõi',
    topicId: 'tp_02_cong_thuc',
    topicName: 'Công thức tính toán',
    content: 'Tính giá trị của biểu thức lũy thừa sau: $P = \\dfrac{2^{10} \\cdot 9^3}{4^4 \\cdot 3^5}$',
    options: [
      { key: 'A', content: '$P = 6$' },
      { key: 'B', content: '$P = 12$' },
      { key: 'C', content: '$P = 18$' },
      { key: 'D', content: '$P = 36$' },
    ],
    correctAnswer: 'B',
    difficulty: 'Thông hiểu',
    detailedSolution: `Ta đưa các cơ số về dạng thừa số nguyên tố:
- $9^3 = (3^2)^3 = 3^6$
- $4^4 = (2^2)^4 = 2^8$

Thay vào biểu thức $P$:
$$P = \\frac{2^{10} \\cdot 3^6}{2^8 \\cdot 3^5} = 2^{10 - 8} \\cdot 3^{6 - 5} = 2^2 \\cdot 3^1 = 4 \\cdot 3 = 12.$$
Vậy đáp án đúng là **B**.`,
    socraticHint: 'Chuyển đổi các cơ số hợp số (như $9$ và $4$) về các cơ số nguyên tố ($3$ và $2$) rồi áp dụng công thức $a^m : a^n = a^{m-n}$.',
    track: 'STANDARD',
    examSets: ['exam_template_01'],
  },
  {
    id: 1003,
    type: 'mcq',
    chapterId: 'ch_01_nen_tang',
    chapterName: 'Kiến Thức Cốt Lõi',
    topicId: 'tp_03_nhan_dang',
    topicName: 'Nhận dạng đồ thị',
    content: `Bảng số liệu sau thống kê điểm kiểm tra học kỳ của một lớp học:

| Khoảng điểm | $[0; 5)$ | $[5; 7)$ | $[7; 8.5)$ | $[8.5; 10]$ |
| :--- | :---: | :---: | :---: | :---: |
| **Số học sinh** | $4$ | $12$ | $16$ | $8$ |

Tổng số học sinh đạt điểm từ khá trở lên (từ $7.0$ điểm trở lên) chiếm bao nhiêu phần trăm tổng số học sinh của lớp?`,
    options: [
      { key: 'A', content: '$40\\%$' },
      { key: 'B', content: '$50\\%$' },
      { key: 'C', content: '$60\\%$' },
      { key: 'D', content: '$70\\%$' },
    ],
    correctAnswer: 'C',
    difficulty: 'Thông hiểu',
    detailedSolution: `**Bước 1:** Tính tổng số học sinh của cả lớp:
$$N = 4 + 12 + 16 + 8 = 40 \\text{ (học sinh)}.$$

**Bước 2:** Số học sinh đạt điểm từ $7.0$ trở lên gồm hai nhóm $[7; 8.5)$ và $[8.5; 10]$:
$$n_{\\ge 7} = 16 + 8 = 24 \\text{ (học sinh)}.$$

**Bước 3:** Tỷ lệ phần trăm cần tìm:
$$P = \\frac{24}{40} \\times 100\\% = 0.6 \\times 100\\% = 60\\%.$$
Vậy đáp án đúng là **C**.`,
    socraticHint: 'Hãy cộng số lượng ở hai cột cuối cùng, sau đó chia cho tổng toàn bộ số lượng trong hàng số học sinh.',
    track: 'STANDARD',
    examSets: ['exam_template_01', 'exam_template_02'],
  },

  // --- CHƯƠNG 2 ---
  {
    id: 1004,
    type: 'fill',
    chapterId: 'ch_02_ky_nang',
    chapterName: 'Phương Pháp Giải',
    topicId: 'tp_04_bien_doi',
    topicName: 'Biến đổi & Rút gọn',
    content: 'Tìm giá trị của $x$ thỏa mãn phương trình: $\\dfrac{2x - 3}{4} = \\dfrac{x + 5}{3}$. *(Nhập kết quả dưới dạng số thập phân hoặc số nguyên)*',
    correctAnswer: '14.5',
    acceptableAnswers: ['14.5', '29/2', '14,5'],
    difficulty: 'Thông hiểu',
    detailedSolution: `Quy đồng mẫu số chung hai vế (mẫu chung là $12$):
$$3(2x - 3) = 4(x + 5)$$
$$6x - 9 = 4x + 20$$
$$6x - 4x = 20 + 9$$
$$2x = 29 \\implies x = \\frac{29}{2} = 14.5.$$
Vậy nghiệm là $14.5$.`,
    socraticHint: 'Nhân chéo hai phân số với điều kiện tích trung tỉ bằng tích ngoại tỉ: $a/b = c/d \\implies a \\cdot d = b \\cdot c$.',
    track: 'STANDARD',
    examSets: ['exam_template_01'],
  },
  {
    id: 1005,
    type: 'mcq',
    chapterId: 'ch_02_ky_nang',
    chapterName: 'Phương Pháp Giải',
    topicId: 'tp_05_phuong_trinh',
    topicName: 'Giải phương trình',
    content: 'Tập hợp tất cả các nghiệm của phương trình $|2x - 1| = 5$ là:',
    options: [
      { key: 'A', content: '$S = \\{3\\}$' },
      { key: 'B', content: '$S = \\{-2; 3\\}$' },
      { key: 'C', content: '$S = \\{-3; 2\\}$' },
      { key: 'D', content: '$S = \\{-2\\}$' },
    ],
    correctAnswer: 'B',
    difficulty: 'Thông hiểu',
    detailedSolution: `Ta xét 2 trường hợp:
- **Trường hợp 1:** $2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$.
- **Trường hợp 2:** $2x - 1 = -5 \\implies 2x = -4 \\implies x = -2$.

Do đó tập nghiệm của phương trình là $S = \\{-2; 3\\}$. Đáp án đúng là **B**.`,
    socraticHint: 'Phương trình $|A| = B$ (với $B \\ge 0$) tương đương với $A = B$ hoặc $A = -B$.',
    track: 'BOTH',
    examSets: ['exam_template_01', 'exam_template_03'],
  },
  {
    id: 1006,
    type: 'mcq',
    chapterId: 'ch_02_ky_nang',
    chapterName: 'Phương Pháp Giải',
    topicId: 'tp_06_mo_hinh',
    topicName: 'Mô hình hình học',
    content: 'Cho tam giác $ABC$ có $\\widehat{A} = 70^\\circ$, hai tia phân giác của góc $B$ và góc $C$ cắt nhau tại điểm $I$. Số đo của góc $\\widehat{BIC}$ bằng:',
    options: [
      { key: 'A', content: '$110^\\circ$' },
      { key: 'B', content: '$125^\\circ$' },
      { key: 'C', content: '$135^\\circ$' },
      { key: 'D', content: '$140^\\circ$' },
    ],
    correctAnswer: 'B',
    difficulty: 'Vận dụng',
    detailedSolution: `Trong tam giác $ABC$, tổng ba góc bằng $180^\\circ$:
$$\\widehat{B} + \\widehat{C} = 180^\\circ - \\widehat{A} = 180^\\circ - 70^\\circ = 110^\\circ.$$
Vì $BI, CI$ là tia phân giác của $\\widehat{B}$ và $\\widehat{C}$ nên:
$$\\widehat{IBC} + \\widehat{ICB} = \\frac{\\widehat{B} + \\widehat{C}}{2} = \\frac{110^\\circ}{2} = 55^\\circ.$$
Xét trong tam giác $IBC$:
$$\\widehat{BIC} = 180^\\circ - (\\widehat{IBC} + \\widehat{ICB}) = 180^\\circ - 55^\\circ = 125^\\circ.$$
Công thức tổng quát hữu ích: $\\widehat{BIC} = 90^\\circ + \\dfrac{\\widehat{A}}{2} = 90^\\circ + 35^\\circ = 125^\\circ$.
Đáp án đúng là **B**.`,
    socraticHint: 'Hãy áp dụng tính chất tổng 3 góc trong tam giác lớn $ABC$ để tìm $\\widehat{B} + \\widehat{C}$, rồi xét tam giác nhỏ $IBC$.',
    track: 'STANDARD',
    examSets: ['exam_template_02'],
  },

  // --- CHƯƠNG 3: NÂNG CAO & THỰC TIỄN ---
  {
    id: 1007,
    type: 'mcq',
    chapterId: 'ch_03_nang_cao',
    chapterName: 'Ứng Dụng & Nâng Cao',
    topicId: 'tp_07_thuc_te',
    topicName: 'Toán thực tế',
    content: 'Một cửa hàng áp dụng chương trình khuyến mãi: Khách mua sản phẩm thứ hai được giảm $20\\%$ so với giá niêm yết, và nếu mua từ sản phẩm thứ ba trở đi thì mỗi sản phẩm đó được giảm $30\\%$. Biết một sản phẩm có giá niêm yết là $200\\,000$ VNĐ. Bạn Nam mua $3$ sản phẩm cùng loại trên thì phải trả tổng cộng bao nhiêu tiền?',
    options: [
      { key: 'A', content: '$480\\,000$ VNĐ' },
      { key: 'B', content: '$500\\,000$ VNĐ' },
      { key: 'C', content: '$520\\,000$ VNĐ' },
      { key: 'D', content: '$540\\,000$ VNĐ' },
    ],
    correctAnswer: 'B',
    difficulty: 'Vận dụng',
    detailedSolution: `Tính giá tiền từng sản phẩm Nam mua:
1. Sản phẩm thứ nhất: $200\\,000$ VNĐ (giá niêm yết).
2. Sản phẩm thứ hai: giảm $20\\%$ nên có giá:
   $$200\\,000 \\times (1 - 0.20) = 160\\,000 \\text{ VNĐ}.$$
3. Sản phẩm thứ ba: giảm $30\\%$ nên có giá:
   $$200\\,000 \\times (1 - 0.30) = 140\\,000 \\text{ VNĐ}.$$

Tổng số tiền Nam phải trả là:
$$T = 200\\,000 + 160\\,000 + 140\\,000 = 500\\,000 \\text{ VNĐ}.$$
Đáp án đúng là **B**.`,
    socraticHint: 'Hãy tính giá tiền thực tế của từng chiếc áo sau khi giảm giá riêng rẽ, rồi cộng cả 3 lại.',
    track: 'STANDARD',
    examSets: ['exam_template_02', 'exam_template_04'],
  },
  {
    id: 1008,
    type: 'mcq',
    chapterId: 'ch_03_nang_cao',
    chapterName: 'Ứng Dụng & Nâng Cao',
    topicId: 'tp_08_phan_loai',
    topicName: 'Bứt phá điểm 10',
    content: 'Cho dãy phân số có quy luật: $S = \\dfrac{1}{1 \\cdot 3} + \\dfrac{1}{3 \\cdot 5} + \\dfrac{1}{5 \\cdot 7} + \\dots + \\dfrac{1}{(2n-1)(2n+1)}$. Khi $n = 50$, giá trị của $S$ là:',
    options: [
      { key: 'A', content: '$S = \\dfrac{50}{101}$' },
      { key: 'B', content: '$S = \\dfrac{100}{101}$' },
      { key: 'C', content: '$S = \\dfrac{49}{101}$' },
      { key: 'D', content: '$S = \\dfrac{50}{99}$' },
    ],
    correctAnswer: 'A',
    difficulty: 'Vận dụng cao',
    detailedSolution: `Ta nhận thấy hiệu hai thừa số ở mẫu số luôn bằng $2$: $(2k+1) - (2k-1) = 2$.
Do đó:
$$\\frac{1}{(2k-1)(2k+1)} = \\frac{1}{2} \\left( \\frac{1}{2k-1} - \\frac{1}{2k+1} \\right).$$

Nhân cả hai vế của $S$ với $2$:
$$2S = \\left( 1 - \\frac{1}{3} \\right) + \\left( \\frac{1}{3} - \\frac{1}{5} \\right) + \\dots + \\left( \\frac{1}{2n-1} - \\frac{1}{2n+1} \\right)$$
$$2S = 1 - \\frac{1}{2n+1} = \\frac{2n}{2n+1}.$$
Suy ra $S = \\dfrac{n}{2n+1}$.
Với $n = 50$, ta được:
$$S = \\frac{50}{2(50) + 1} = \\frac{50}{101}.$$
Đáp án đúng là **A**.`,
    socraticHint: 'Nhận xét khoảng cách giữa 2 thừa số ở mẫu là 2 đơn vị. Hãy nhân biểu thức với 2 rồi phân tích dạng sai phân triệt tiêu liên tiếp.',
    track: 'ADVANCED',
    examSets: ['exam_template_03', 'exam_template_04'],
  },
  {
    id: 1009,
    type: 'fill',
    chapterId: 'ch_03_nang_cao',
    chapterName: 'Ứng Dụng & Nâng Cao',
    topicId: 'tp_08_phan_loai',
    topicName: 'Bứt phá điểm 10',
    content: 'Tìm giá trị nhỏ nhất của biểu thức $A = |x - 2| + |x - 8| + 2026$. *(Nhập kết quả là một số nguyên)*',
    correctAnswer: '2032',
    acceptableAnswers: ['2032'],
    difficulty: 'Vận dụng cao',
    detailedSolution: `Áp dụng bất đẳng thức giá trị tuyệt đối: $|a| + |b| \\ge |a + b|$, đẳng thức xảy ra khi và chỉ khi $a \\cdot b \\ge 0$.
Ta biến đổi:
$$|x - 2| + |x - 8| = |x - 2| + |8 - x| \\ge |(x - 2) + (8 - x)| = |6| = 6.$$
Đẳng thức xảy ra khi $(x - 2)(8 - x) \\ge 0 \\iff 2 \\le x \\le 8$.
Do đó:
$$A = |x - 2| + |x - 8| + 2026 \\ge 6 + 2026 = 2032.$$
Giá trị nhỏ nhất của $A$ là $2032$.`,
    socraticHint: 'Hãy đổi dấu số hạng thứ hai: $|x - 8| = |8 - x|$, sau đó áp dụng bất đẳng thức $|a| + |b| \\ge |a + b|$.',
    track: 'ADVANCED',
    examSets: ['exam_template_03', 'exam_template_04'],
  },
  {
    id: 1010,
    type: 'mcq',
    chapterId: 'ch_03_nang_cao',
    chapterName: 'Ứng Dụng & Nâng Cao',
    topicId: 'tp_08_phan_loai',
    topicName: 'Bứt phá điểm 10',
    content: 'Có bao nhiêu cặp số nguyên $(x; y)$ thỏa mãn phương trình: $xy + 2x - 3y = 11$?',
    options: [
      { key: 'A', content: '$2$ cặp' },
      { key: 'B', content: '$4$ cặp' },
      { key: 'C', content: '$6$ cặp' },
      { key: 'D', content: '$8$ cặp' },
    ],
    correctAnswer: 'B',
    difficulty: 'Vận dụng cao',
    detailedSolution: `Biến đổi phương trình về dạng tích:
$$xy + 2x - 3y = 11$$
$$x(y + 2) - 3(y + 2) - 6 = 11$$
$$(x - 3)(y + 2) = 17.$$
Vì $x, y \\in \\mathbb{Z}$ nên $(x - 3)$ và $(y + 2)$ là các ước nguyên của $17$.
Số $17$ là số nguyên tố, có $4$ ước là $\\{\\pm 1; \\pm 17\\}$.
Ta có bảng giá trị:
1. $x - 3 = 1 \\implies x = 4$; $y + 2 = 17 \\implies y = 15$.
2. $x - 3 = -1 \\implies x = 2$; $y + 2 = -17 \\implies y = -19$.
3. $x - 3 = 17 \\implies x = 20$; $y + 2 = 1 \\implies y = -1$.
4. $x - 3 = -17 \\implies x = -14$; $y + 2 = -1 \\implies y = -3$.

Vậy có đúng $4$ cặp số nguyên thỏa mãn. Đáp án đúng là **B**.`,
    socraticHint: 'Nhóm các số hạng chứa $x$ và thêm bớt hằng số thích hợp để xuất hiện nhân tử chung $(y + 2)$.',
    track: 'ADVANCED',
    examSets: ['exam_template_03', 'exam_template_04'],
  },
];
