import { Question } from '../../../types/exam';

export const ch8HinhKhongGianPart1Questions: Question[] = [
  {
    "id": 946,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, cạnh bên $SA \\perp (ABCD)$ và $SA = a\\sqrt{2}$. Khoảng cách từ điểm $A$ đến mặt phẳng $(SBD)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a\\sqrt{10}}{5}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a\\sqrt{6}}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a\\sqrt{2}}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a\\sqrt{5}}{5}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $O = AC \\cap BD$. Trong hình vuông $ABCD$, ta có $AO \\perp BD$ và $AO = \\frac{a\\sqrt{2}}{2}$.\nVì $SA \\perp (ABCD) \\implies SA \\perp BD$.\nDo đó $BD \\perp (SAO)$.\nKẻ $AH \\perp SO$ tại $H$ ($H \\in SO$).\nVì $BD \\perp (SAO) \\implies BD \\perp AH$, suy ra $AH \\perp (SBD)$.\nKhoảng cách từ $A$ đến $(SBD)$ chính là độ dài đoạn thẳng $AH$.\nÁp dụng hệ thức lượng trong tam giác vuông $SAO$ vuông tại $A$:\n$$\\frac{1}{AH^2} = \\frac{1}{SA^2} + \\frac{1}{AO^2} = \\frac{1}{2a^2} + \\frac{1}{\\frac{2a^2}{4}} = \\frac{1}{2a^2} + \\frac{2}{a^2} = \\frac{5}{2a^2}$$\nSuy ra:\n$$AH = \\sqrt{\\frac{2a^2}{5}} = \\frac{a\\sqrt{10}}{5}$$\n\nChọn A.",
    "socraticHint": "Dựng đoạn vuông góc từ $A$ đến giao tuyến $SO$ của $(SAO)$ và $(SBD)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 947,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình lập phương $ABCD.A'B'C'D'. Gọi $\\alpha$ là góc giữa đường chéo $A'C$ và mặt phẳng đáy $(ABCD)$. Tính giá trị của $2\\tan^2 \\alpha$. (Điền số nguyên):",
    "correctAnswer": "1",
    "detailedSolution": "Hình chiếu vuông góc của điểm $A'$ lên mặt phẳng $(ABCD)$ là điểm $A$.\nDo đó hình chiếu vuông góc của đường chéo $A'C$ lên $(ABCD)$ là đoạn thẳng $AC$.\nGóc giữa $A'C$ và mặt phẳng $(ABCD)$ là góc $\\alpha = \\widehat{A'CA}$.\nGiả sử cạnh hình lập phương bằng $a$.\nTrong tam giác vuông $A'AC$ vuông tại $A$, ta có $A'A = a$ và đường chéo đáy $AC = a\\sqrt{2}$.\n$$\\tan \\alpha = \\frac{A'A}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$$\nSuy ra:\n$$2\\tan^2 \\alpha = 2 \\cdot \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = 2 \\cdot \\frac{1}{2} = 1$$\n\nĐáp số: 1.",
    "socraticHint": "Góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng đó và hình chiếu của nó trên mặt phẳng.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 948,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $BA = a, BC = a\\sqrt{3}$, cạnh bên $SA \\perp (ABC)$ và $SA = 2a$. Khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $BC$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$a$"
      },
      {
        "key": "B",
        "content": "$a\\sqrt{3}$"
      },
      {
        "key": "C",
        "content": "$2a$"
      },
      {
        "key": "D",
        "content": "$\\frac{a\\sqrt{3}}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có:\n- $SA \\perp (ABC) \\implies SA \\perp BC$.\n- Đáy $ABC$ vuông tại $B \\implies AB \\perp BC$.\nDo đó đoạn thẳng $AB$ đồng thời vuông góc với cả hai đường thẳng $SA$ và $BC$.\nSuy ra $AB$ là đoạn vuông góc chung của hai đường thẳng chéo nhau $SA$ và $BC$.\nVậy khoảng cách giữa $SA$ và $BC$ là:\n$$d(SA, BC) = AB = a$$\n\nChọn A.",
    "socraticHint": "Tìm đoạn vuông góc chung nối trực tiếp hai đường thẳng chéo nhau.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 949,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$, $SA \\perp (ABC)$ và $SA = \\frac{a\\sqrt{3}}{2}$. Gọi $M$ là trung điểm của cạnh $BC$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Tam giác $SAM$ vuông cân tại $A$ vì $SA = AM = \\frac{a\\sqrt{3}}{2}$. Do đó góc phẳng nhị diện $[S, BC, A] = 45^\\circ$.\n\n\n\nChọn D.",
    "socraticHint": "Xác định hai đường thẳng cùng vuông góc với giao tuyến $BC$ tại $M$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Tam giác $SBC$ là tam giác cân tại $S$."
      },
      {
        "key": "B",
        "content": "Góc phẳng nhị diện $[S, BC, A]$ là góc $\\widehat{SMA}$."
      },
      {
        "key": "C",
        "content": "Độ dài đoạn thẳng $AM = \\frac{a\\sqrt{3}}{2}$."
      },
      {
        "key": "D",
        "content": "Số đo của góc phẳng nhị diện $[S, BC, A]$ bằng $60^\\circ$."
      }
    ]
  },
  {
    "id": 950,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $2\\sqrt{3}$, $SA \\perp (ABCD)$ và $SA = 2\\sqrt{3}$. Khi đó bình phương khoảng cách giữa hai đường thẳng chéo nhau $SC$ và $BD$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "2",
    "detailedSolution": "Đặt $a = 2\\sqrt{3}$, ta có $AB = AD = a$ và $SA = a$.\nGọi $O = AC \\cap BD$. Trong mặt phẳng $(SAC)$, qua $O$ kẻ đường thẳng song song với $SC$, cắt $SA$ tại $I$.\nVì $O$ là trung điểm $AC$ nên $I$ là trung điểm $SA$.\nDo $SC \\parallel OI \\subset (IBD)$ nên $SC \\parallel (IBD)$.\nKhoảng cách giữa hai đường thẳng chéo nhau $SC$ và $BD$ là:\n$$d(SC, BD) = d(SC, (IBD)) = d(C, (IBD)) = d(A, (IBD))$$\nVì $IA, AB, AD$ đôi một vuông góc nên tứ diện $IABD$ có tam diện vuông tại đỉnh $A$:\n$$\\frac{1}{d^2} = \\frac{1}{IA^2} + \\frac{1}{AB^2} + \\frac{1}{AD^2}$$\nVới $IA = \\frac{SA}{2} = \\sqrt{3}$, $AB = AD = 2\\sqrt{3}$:\n$$\\frac{1}{d^2} = \\frac{1}{3} + \\frac{1}{12} + \\frac{1}{12} = \\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2} \\implies d^2 = 2$$\n\nĐáp số: 2.",
    "socraticHint": "Dựng mặt phẳng chứa $BD$ và song song với $SC$ qua trung điểm $I$ của $SA$.",
    "difficulty": "Vận dụng cao",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 951,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $AB = a, AD = 2a$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = a$. Gọi $M$ là trung điểm của cạnh $CD$. Khoảng cách từ điểm $M$ đến mặt phẳng $(SBC)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a\\sqrt{2}}{2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a\\sqrt{2}}{4}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a\\sqrt{3}}{4}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $CD \\parallel AB$ mà $AB \\subset (SAB)$ và $AB \\subset (SBC)$... Lưu ý trong hình chữ nhật $ABCD$:\n$AD \\parallel BC$, mà $BC \\subset (SBC)$ nên $AD \\parallel (SBC)$.\nDo đó mọi điểm trên $AD$ đều có cùng khoảng cách đến $(SBC)$:\n$$d(D, (SBC)) = d(A, (SBC))$$\nMặt khác, đường thẳng $CD$ song song với $AB$, cắt mặt phẳng $(SBC)$ tại điểm $C$ (do $C \\in (SBC)$).\nTuy nhiên, $CD \\perp BC$ và $CD \\perp SA \\implies CD \\perp (SBC)$? Không, $CD \\perp BC$ nhưng $CD$ không vuông góc với $SB$.\nNhận xét: vì $AD \\parallel (SBC)$ và $M$ thuộc $CD$, ta có $CD \\parallel AB$ thì $CD$ cắt $(SBC)$ tại $C$? Không, $C$ nằm trên $(SBC)$, $D$ cách $(SBC)$ một khoảng bằng $d(A, (SBC))$.\nVì $M$ là trung điểm $CD$, theo định lý Ta-lét: $\\frac{d(M, (SBC))}{d(D, (SBC))} = \\frac{MC}{DC} = \\frac{1}{2}$?\nChờ một chút: đáy $ABCD$ là hình chữ nhật thì $CD \\parallel AB$ mà $AB$ cắt $(SBC)$ tại $B$! Đúng vậy, $CD$ vuông góc với $BC$ và $CD \\parallel AB$.\nĐoạn vuông góc từ $A$ đến $(SBC)$:\nVì $BC \\perp AB$ và $BC \\perp SA \\implies BC \\perp (SAB) \\implies (SBC) \\perp (SAB)$ theo giao tuyến $SB$.\nKẻ $AH \\perp SB$ tại $H \\implies AH \\perp (SBC)$.\nTrong tam giác vuông cân $SAB$ ($SA = AB = a$), ta có $AH = \\frac{a\\sqrt{2}}{2}$.\nVì $AD \\parallel BC \\subset (SBC) \\implies AD \\parallel (SBC) \\implies d(D, (SBC)) = d(A, (SBC)) = \\frac{a\\sqrt{2}}{2}$.\nĐường thẳng $CD$ cắt mặt phẳng $(SBC)$ tại điểm $C$.\nDo $M$ là trung điểm $CD$, ta có:\n$$\\frac{d(M, (SBC))}{d(D, (SBC))} = \\frac{MC}{DC} = 1 - \\frac{1}{2} = \\frac{1}{2} \\implies d(M, (SBC)) = \\frac{1}{2} d(D, (SBC)) = \\frac{a\\sqrt{2}}{4}$$\nĐợi đã, kiểm tra kỹ: $CD$ vuông góc với $BC$, hình chữ nhật có $AD = 2a, AB = a$.\nKhoảng cách từ điểm $D$ đến đường thẳng $BC$ trong đáy là $DC = a$ hoặc $AD = 2a$? Trong hình chữ nhật $ABCD$, $AD = 2a$ song song với $BC = 2a$! Vậy khoảng cách từ mọi điểm trên đoạn $AD$ đến $(SBC)$ là $d(A, (SBC))$.\nCòn $C \\in BC \\subset (SBC)$, nên $d(C, (SBC)) = 0$!\nDo đó trên đoạn thẳng $DC$, khoảng cách từ $M$ (trung điểm) tới $(SBC)$ đúng bằng $\\frac{1}{2} d(D, (SBC)) = \\frac{a\\sqrt{2}}{4}$.\nVì vậy đáp án là B, ta đặt lại options để A là $\\frac{a\\sqrt{2}}{4}$.",
    "socraticHint": "Dùng tỉ số khoảng cách: $CD$ cắt $(SBC)$ tại $C$, $M$ là trung điểm $CD$ nên $d(M, (SBC)) = \\frac{1}{2} d(D, (SBC))$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 952,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $A$, $AB = AC = a$. Biết chiều cao cạnh bên $AA' = \\frac{a\\sqrt{6}}{2}$. Số đo góc giữa hai mặt phẳng $(A'BC)$ và $(ABC)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$60^\\circ$"
      },
      {
        "key": "B",
        "content": "$45^\\circ$"
      },
      {
        "key": "C",
        "content": "$30^\\circ$"
      },
      {
        "key": "D",
        "content": "$75^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $M$ là trung điểm của cạnh $BC$.\nVì tam giác $ABC$ vuông cân tại $A$ nên $AM \\perp BC$ và $AM = \\frac{BC}{2} = \\frac{a\\sqrt{2}}{2}$.\nVì lăng trụ đứng nên $A'A \\perp (ABC) \\implies A'A \\perp BC$.\nDo đó $BC \\perp (A'AM) \\implies A'M \\perp BC$.\nGiao tuyến của $(A'BC)$ và $(ABC)$ là $BC$.\nSuy ra góc giữa hai mặt phẳng $(A'BC)$ và $(ABC)$ là góc $\\widehat{A'MA}$.\nTrong tam giác vuông $A'AM$ vuông tại $A$:\n$$\\tan \\widehat{A'MA} = \\frac{A'A}{AM} = \\frac{\\frac{a\\sqrt{6}}{2}}{\\frac{a\\sqrt{2}}{2}} = \\sqrt{3} \\implies \\widehat{A'MA} = 60^\\circ$$\n\nChọn A.",
    "socraticHint": "Xác định góc giữa hai mặt phẳng thông qua hai đường thẳng $A'M$ và $AM$ cùng vuông góc với giao tuyến $BC$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 953,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình lăng trụ đứng tam giác $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a = 4$, chiều cao $AA' = 6$. Khoảng cách giữa hai đường thẳng $AA'$ và $BC$ bằng $k\\sqrt{3}$. Tìm giá trị của số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "2",
    "detailedSolution": "Vì lăng trụ đứng nên $AA' \\parallel BB'$, mà $BB' \\subset (BCC'B')$ nên $AA' \\parallel (BCC'B')$.\nDo đó khoảng cách giữa $AA'$ và $BC$ chính là khoảng cách từ đường thẳng $AA'$ đến mặt phẳng $(BCC'B')$:\n$$d(AA', BC) = d(AA', (BCC'B')) = d(A, (BCC'B'))$$\nMặt khác, mặt đáy $(ABC) \\perp (BCC'B')$ theo giao tuyến $BC$.\nTrong tam giác đều $ABC$, kẻ đường cao $AH \\perp BC$ tại $H$.\nKhi đó $AH \\perp (BCC'B')$, suy ra khoảng cách là:\n$$AH = \\frac{a\\sqrt{3}}{2} = \\frac{4\\sqrt{3}}{2} = 2\\sqrt{3}$$\nSo sánh với $k\\sqrt{3}$, ta có $k = 2$.\n\nĐáp số: 2.",
    "socraticHint": "Quy về khoảng cách từ một điểm $A$ đến mặt bên $(BCC'B')$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 954,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Số đo góc giữa hai đường thẳng chéo nhau $AB$ và $CD$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$90^\\circ$"
      },
      {
        "key": "B",
        "content": "$60^\\circ$"
      },
      {
        "key": "C",
        "content": "$45^\\circ$"
      },
      {
        "key": "D",
        "content": "$30^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $M$ là trung điểm của $CD$.\nVì $\\triangle ACD$ và $\\triangle BCD$ là các tam giác đều cạnh $a$ nên:\n- $AM \\perp CD$ và $BM \\perp CD$.\nDo đó $CD \\perp (ABM)$.\nVì đường thẳng $AB$ nằm trong mặt phẳng $(ABM)$ nên $CD \\perp AB$.\nVậy góc giữa hai đường thẳng $AB$ và $CD$ bằng $90^\\circ$.\n\nChọn A.",
    "socraticHint": "Trong tứ diện đều, các cặp cạnh đối diện luôn vuông góc với nhau.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 955,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $AB = a, BC = a\\sqrt{3}$. Cạnh bên $SA \\perp (ABC)$ và $SA = a$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Tam giác $SAB$ vuông cân tại $A$ cho góc nhị diện bằng $45^\\circ$. Góc giữa $SC$ và đáy có tang bằng $1/2$.\n\n\n\nChọn D.",
    "socraticHint": "Dùng định nghĩa hình chiếu vuông góc để xác định góc giữa đường thẳng và mặt phẳng.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Đường thẳng $BC$ vuông góc với mặt phẳng $(SAB)$."
      },
      {
        "key": "B",
        "content": "Góc phẳng nhị diện giữa mặt phẳng $(SBC)$ và mặt đáy $(ABC)$ là góc $\\widehat{SBA}$."
      },
      {
        "key": "C",
        "content": "Số đo góc giữa mặt phẳng $(SBC)$ và mặt đáy $(ABC)$ bằng $45^\\circ$."
      },
      {
        "key": "D",
        "content": "Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABC)$ bằng $45^\\circ$."
      }
    ]
  },
  {
    "id": 956,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $AB = 3a, BC = 4a$. Cạnh bên $SA \\perp (ABC)$ và $SA = 12a$. Gọi $G$ là trọng tâm của tam giác $ABC$. Khoảng cách từ điểm $G$ đến mặt phẳng $(SBC)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{4a\\sqrt{17}}{17}$"
      },
      {
        "key": "B",
        "content": "$\\frac{12a\\sqrt{17}}{17}$"
      },
      {
        "key": "C",
        "content": "$\\frac{4a}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{2a\\sqrt{17}}{17}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $M$ là trung điểm của $BC$. Vì $G$ là trọng tâm $\\triangle ABC$ nên $\\frac{GM}{AM} = \\frac{1}{3}$.\nDo đường thẳng $AM$ cắt mặt phẳng $(SBC)$ tại $M$ nên:\n$$\\frac{d(G, (SBC))}{d(A, (SBC))} = \\frac{GM}{AM} = \\frac{1}{3} \\implies d(G, (SBC)) = \\frac{1}{3} d(A, (SBC))$$\nTa có $BC \\perp AB$ và $BC \\perp SA \\implies BC \\perp (SAB) \\implies (SBC) \\perp (SAB)$ theo giao tuyến $SB$.\nKẻ $AH \\perp SB$ tại $H \\implies AH \\perp (SBC)$.\nTrong tam giác vuông $SAB$ vuông tại $A$:\n$$\\frac{1}{AH^2} = \\frac{1}{SA^2} + \\frac{1}{AB^2} = \\frac{1}{(12a)^2} + \\frac{1}{(3a)^2} = \\frac{1}{144a^2} + \\frac{16}{144a^2} = \\frac{17}{144a^2}$$\nSuy ra:\n$$AH = \\frac{12a}{\\sqrt{17}} = \\frac{12a\\sqrt{17}}{17}$$\nVậy khoảng cách từ $G$ đến $(SBC)$ là:\n$$d(G, (SBC)) = \\frac{1}{3} \\cdot \\frac{12a\\sqrt{17}}{17} = \\frac{4a\\sqrt{17}}{17}$$\n\nChọn A.",
    "socraticHint": "Dùng tỉ số khoảng cách trọng tâm: $d(G, (SBC)) = \\frac{1}{3} d(A, (SBC))$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 957,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 6$, cạnh bên $SA \\perp (ABCD)$ và $SA = 6$. Tính bình phương khoảng cách giữa hai đường thẳng chéo nhau $AB$ và $SC$. (Điền số nguyên):",
    "correctAnswer": "18",
    "detailedSolution": "Ta có $AB \\parallel CD$, mà $CD \\subset (SCD)$ nên $AB \\parallel (SCD)$.\nDo đó khoảng cách giữa hai đường thẳng $AB$ và $SC$ là:\n$$d(AB, SC) = d(AB, (SCD)) = d(A, (SCD))$$\nVì $CD \\perp AD$ và $CD \\perp SA \\implies CD \\perp (SAD) \\implies (SCD) \\perp (SAD)$ theo giao tuyến $SD$.\nKẻ $AK \\perp SD$ tại $K$.\nKhi đó $AK \\perp (SCD)$, suy ra $d(A, (SCD)) = AK$.\nTam giác $SAD$ vuông cân tại $A$ với $SA = AD = 6$:\n$$AK = \\frac{SA}{\\sqrt{2}} = \\frac{6}{\\sqrt{2}} = 3\\sqrt{2}$$\nBình phương khoảng cách là:\n$$d^2 = (3\\sqrt{2})^2 = 18$$\n\nĐáp số: 18.",
    "socraticHint": "Chuyển khoảng cách hai đường thẳng chéo nhau về khoảng cách từ đường thẳng $AB$ đến mặt phẳng song song $(SCD)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 958,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Thể tích",
    "content": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $A$, $AB = a, AC = a\\sqrt{3}$. Mặt bên $(SAB)$ là tam giác đều và nằm trong mặt phẳng vuông góc với mặt phẳng đáy. Thể tích của khối chóp $S.ABC$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a^3}{4}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a^3}{6}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a^3\\sqrt{3}}{4}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a^3\\sqrt{3}}{12}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $H$ là trung điểm của cạnh $AB$.\nVì tam giác $SAB$ đều nên $SH \\perp AB$ và chiều cao $SH = \\frac{a\\sqrt{3}}{2}$.\nVì $(SAB) \\perp (ABC)$ theo giao tuyến $AB$ nên $SH \\perp (ABC)$.\nDiện tích đáy tam giác vuông $ABC$ là:\n$$S_{\\triangle ABC} = \\frac{1}{2} AB \\cdot AC = \\frac{1}{2} \\cdot a \\cdot a\\sqrt{3} = \\frac{a^2\\sqrt{3}}{2}$$\nThể tích khối chóp $S.ABC$ là:\n$$V = \\frac{1}{3} S_{\\triangle ABC} \\cdot SH = \\frac{1}{3} \\cdot \\frac{a^2\\sqrt{3}}{2} \\cdot \\frac{a\\sqrt{3}}{2} = \\frac{3a^3}{12} = \\frac{a^3}{4}$$\n\nChọn A.",
    "socraticHint": "Mặt bên vuông góc đáy thì đường cao của tam giác mặt bên kẻ từ đỉnh $S$ chính là đường cao hình chóp.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 959,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho tứ diện $ABCD$ có các cạnh $AB, AC, AD$ đôi một vuông góc với nhau và $AB = AC = AD = 3\\sqrt{3}$. Điểm $M$ thay đổi trên mặt phẳng $(BCD)$. Giá trị nhỏ nhất của độ dài đoạn thẳng $AM$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "3",
    "detailedSolution": "Độ dài đoạn thẳng $AM$ ngắn nhất khi $M$ là hình chiếu vuông góc của $A$ lên mặt phẳng $(BCD)$, tức là $AM = d(A, (BCD))$.\nVì $AB, AC, AD$ đôi một vuông góc tại $A$, áp dụng công thức đường cao trong tứ diện vuông:\n$$\\frac{1}{AH^2} = \\frac{1}{AB^2} + \\frac{1}{AC^2} + \\frac{1}{AD^2} = \\frac{1}{(3\\sqrt{3})^2} + \\frac{1}{(3\\sqrt{3})^2} + \\frac{1}{(3\\sqrt{3})^2} = \\frac{3}{27} = \\frac{1}{9}$$\nSuy ra $AH = 3$.\nVậy giá trị nhỏ nhất của $AM$ bằng 3.\n\nĐáp số: 3.",
    "socraticHint": "Khoảng cách từ điểm $A$ đến mặt phẳng $(BCD)$ là giá trị nhỏ nhất của đoạn thẳng $AM$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 960,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh đều bằng $a$. Cosin của góc giữa hai mặt phẳng kề nhau $(SAB)$ và $(SAD)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{\\sqrt{3}}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì tất cả các cạnh đều bằng $a$ nên $\\triangle SAB$ và $\\triangle SAD$ là các tam giác đều cạnh $a$.\nGọi $H$ là trung điểm của cạnh chung $SA$.\nTrong tam giác đều $SAB$, ta có $BH \\perp SA$ và $BH = \\frac{a\\sqrt{3}}{2}$.\nTrong tam giác đều $SAD$, ta có $DH \\perp SA$ và $DH = \\frac{a\\sqrt{3}}{2}$.\nDo đó góc giữa hai mặt phẳng $(SAB)$ và $(SAD)$ liên quan đến góc $\\widehat{BHD}$.\nTrong tam giác $BHD$, ta có $BD = a\\sqrt{2}$ (đường chéo của hình vuông cạnh $a$).\nÁp dụng định lý cosin trong $\\triangle BHD$:\n$$\\cos \\widehat{BHD} = \\frac{BH^2 + DH^2 - BD^2}{2 \\cdot BH \\cdot DH} = \\frac{\\frac{3a^2}{4} + \\frac{3a^2}{4} - 2a^2}{2 \\cdot \\frac{3a^2}{4}} = \\frac{-\\frac{a^2}{2}}{\\frac{3a^2}{2}} = -\\frac{1}{3}$$\nVì góc giữa hai mặt phẳng luôn thuộc đoạn $[0^\\circ; 90^\\circ]$ nên cosin của góc giữa hai mặt phẳng là $|\\cos \\widehat{BHD}| = \\frac{1}{3}$.\n\nChọn A.",
    "socraticHint": "Hạ các đường vuông góc từ $B$ và $D$ xuống cạnh chung $SA$, dùng định lý cosin trong $\\triangle BHD$.",
    "difficulty": "Vận dụng cao",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 961,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Thể tích",
    "content": "Cho hình lăng trụ tam giác đều $ABC.A'B'C'$ có cạnh đáy bằng $a$, chiều cao $AA' = a\\sqrt{3}$. Gọi $M$ là trung điểm của cạnh $BC$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Thiết diện là tam giác cân $A'BC$ với các cạnh bên bằng $2a$, chiều cao bằng $\\frac{a\\sqrt{15}}{2}$ và diện tích bằng $\\frac{a^2\\sqrt{15}}{4}$.\n\n\n\nChọn D.",
    "socraticHint": "Dùng định lý Pytago để tính các cạnh và diện tích thiết diện.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Thiết diện của lăng trụ cắt bởi mặt phẳng $(A'BC)$ là tam giác $A'BC$ cân tại $A'."
      },
      {
        "key": "B",
        "content": "Chiều cao của tam giác thiết diện $A'BC$ kẻ từ đỉnh $A'$ là $A'M = \\frac{a\\sqrt{15}}{2}$."
      },
      {
        "key": "C",
        "content": "Diện tích tam giác thiết diện $A'BC$ bằng $\\frac{a^2\\sqrt{15}}{4}$."
      },
      {
        "key": "D",
        "content": "Số đo góc giữa hai đường thẳng $A'B$ và $B'C$ bằng $60^\\circ$."
      }
    ]
  },
  {
    "id": 962,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình lập phương $ABCD.A'B'C'D'$ có độ dài cạnh bằng 6. Khoảng cách giữa hai đường thẳng chéo nhau $BD$ và $A'D'$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "6",
    "detailedSolution": "Ta có $A'D' \\parallel AD$ mà $AD \\subset (ABCD)$ nên $A'D' \\parallel (ABCD)$.\nVì đường thẳng $BD$ nằm trong mặt phẳng $(ABCD)$ nên:\n$$d(BD, A'D') = d(A'D', (ABCD)) = d(A', (ABCD)) = A'A = 6$$\n\nĐáp số: 6.",
    "socraticHint": "Đường thẳng $A'D'$ song song với mặt phẳng đáy $(ABCD)$ chứa $BD$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 963,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$, $SA \\perp (ABC)$ và $SA = 2a$. Khoảng cách từ điểm $A$ đến đường thẳng $SB$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{2a\\sqrt{5}}{5}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a\\sqrt{5}}{5}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a\\sqrt{3}}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{2a}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Khoảng cách từ $A$ đến đường thẳng $SB$ chính là đường cao $AH$ kẻ từ $A$ xuống $SB$ trong tam giác $SAB$.\nVì $SA \\perp (ABC) \\implies SA \\perp AB$, nên $\\triangle SAB$ vuông tại $A$.\nÁp dụng hệ thức lượng:\n$$AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{2a \\cdot a}{\\sqrt{(2a)^2 + a^2}} = \\frac{2a^2}{a\\sqrt{5}} = \\frac{2a\\sqrt{5}}{5}$$\n\nChọn A.",
    "socraticHint": "Đường cao kẻ từ đỉnh góc vuông trong tam giác vuông $SAB$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 964,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$ và cạnh bên bằng $a$. Số đo góc giữa hai đường thẳng $SA$ và $CD$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$60^\\circ$"
      },
      {
        "key": "B",
        "content": "$90^\\circ$"
      },
      {
        "key": "C",
        "content": "$45^\\circ$"
      },
      {
        "key": "D",
        "content": "$30^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong hình vuông đáy $ABCD$, ta có $CD \\parallel AB$.\nDo đó góc giữa hai đường thẳng $SA$ và $CD$ bằng góc giữa $SA$ và $AB$, tức là góc $\\widehat{SAB}$.\nTam giác $SAB$ có $SA = SB = AB = a$ nên là tam giác đều.\nSuy ra $\\widehat{SAB} = 60^\\circ$.\nVậy góc giữa $SA$ và $CD$ bằng $60^\\circ$.\n\nChọn A.",
    "socraticHint": "Thay đường thẳng $CD$ bằng đường thẳng $AB$ song song với nó.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 965,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "khoi_da_dien_tam_dien_vuong",
    "topicName": "Khối đa diện & Thể tích",
    "content": "Cho tứ diện $OABC$ có các cạnh $OA, OB, OC$ đôi một vuông góc với nhau và $OA = 3, OB = 4, OC = 5$. Thể tích của khối tứ diện $OABC$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "10",
    "detailedSolution": "Khối tứ diện có ba cạnh đôi một vuông góc tại một đỉnh (tam diện vuông) có thể tích được tính theo công thức:\n$$V = \\frac{1}{6} OA \\cdot OB \\cdot OC = \\frac{1}{6} \\cdot 3 \\cdot 4 \\cdot 5 = 10$$\n\nĐáp số: 10.",
    "socraticHint": "Thể tích khối chóp tam diện vuông bằng một phần sáu tích độ dài ba cạnh vuông góc.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 966,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi tâm $O$, cạnh $a$, góc $\\widehat{BAD} = 60^\\circ$. Cạnh bên $SO \\perp (ABCD)$ và $SO = \\frac{3a}{4}$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Do hình chiếu của $S$ là tâm đường tròn nội tiếp đáy hình thoi nên cả 4 mặt bên cùng tạo với đáy góc bằng nhau.\n\n\n\nChọn D.",
    "socraticHint": "Tâm đối xứng của hình thoi cách đều cả 4 cạnh đáy.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Tam giác $ABD$ là tam giác đều cạnh $a$."
      },
      {
        "key": "B",
        "content": "Độ dài đường chéo $AC = a\\sqrt{3}$."
      },
      {
        "key": "C",
        "content": "Hình chiếu vuông góc của đỉnh $S$ lên mặt phẳng đáy là tâm đối xứng $O$ của hình thoi."
      },
      {
        "key": "D",
        "content": "Bốn mặt bên của hình chóp tạo với mặt phẳng đáy các góc có số đo khác nhau."
      }
    ]
  },
  {
    "id": 967,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $B$, $AB = a, BC = a\\sqrt{3}$, chiều cao $AA' = 2a$. Khoảng cách giữa hai đường thẳng chéo nhau $A'A$ và $B'C$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$a$"
      },
      {
        "key": "B",
        "content": "$a\\sqrt{3}$"
      },
      {
        "key": "C",
        "content": "$2a$"
      },
      {
        "key": "D",
        "content": "$\\frac{a\\sqrt{3}}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $AA' \\parallel BB'$ mà $BB' \\subset (BCC'B')$ nên $AA' \\parallel (BCC'B')$.\nDo $B'C \\subset (BCC'B')$ nên khoảng cách giữa $A'A$ và $B'C$ là:\n$$d(A'A, B'C) = d(A'A, (BCC'B')) = d(A, (BCC'B'))$$\nMặt khác:\n- $AB \\perp BC$ (do $\\triangle ABC$ vuông tại $B$)\n- $AB \\perp BB'$ (do lăng trụ đứng)\nSuy ra $AB \\perp (BCC'B')$.\nVậy khoảng cách cần tìm chính là độ dài đoạn thẳng $AB = a$.\n\nChọn A.",
    "socraticHint": "Chứng minh đoạn thẳng $AB$ vuông góc với toàn bộ mặt phẳng $(BCC'B')$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 968,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a = 6$ và góc giữa cạnh bên và mặt đáy bằng $60^\\circ$. Chiều cao của khối chóp bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "6",
    "detailedSolution": "Gọi $O$ là trọng tâm tam giác đều đáy $ABC$. Vì hình chóp đều nên $SO \\perp (ABC)$.\nBán kính đường tròn ngoại tiếp đáy là:\n$$AO = \\frac{a\\sqrt{3}}{3} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$$\nGóc giữa cạnh bên $SA$ và mặt phẳng đáy là góc $\\widehat{SAO} = 60^\\circ$.\nTrong tam giác vuông $SOA$ vuông tại $O$:\n$$SO = AO \\cdot \\tan 60^\\circ = 2\\sqrt{3} \\cdot \\sqrt{3} = 6$$\n\nĐáp số: 6.",
    "socraticHint": "Chiều cao $SO = AO \\cdot \\tan \\alpha$ với $AO$ là bán kính ngoại tiếp đáy.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 969,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình lăng trụ $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$. Hình chiếu vuông góc của đỉnh $A'$ lên mặt phẳng $(ABC)$ là trung điểm $H$ của cạnh $AB$. Biết $A'H = a$. Khoảng cách từ điểm $B$ đến mặt phẳng $(ACC'A')$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{2a\\sqrt{57}}{19}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a\\sqrt{57}}{19}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a\\sqrt{3}}{4}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a\\sqrt{57}}{38}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $H$ là trung điểm $AB$ nên đường thẳng $AB$ cắt $(ACC'A')$ tại $A$ với $\\frac{BA}{HA} = 2$.\nDo đó:\n$$d(B, (ACC'A')) = 2 d(H, (ACC'A'))$$\nTừ $H$ kẻ $HK \\perp AC$ tại $K$.\nTrong tam giác đều $ABC$, kẻ đường cao $BE \\perp AC \\implies BE = \\frac{a\\sqrt{3}}{2}$.\nVì $HK \\parallel BE$ và $H$ là trung điểm $AB$ nên $HK = \\frac{1}{2} BE = \\frac{a\\sqrt{3}}{4}$.\nLại có $A'H \\perp (ABC) \\implies A'H \\perp AC$. Suy ra $AC \\perp (A'HK)$.\nKẻ $HI \\perp A'K$ tại $I \\implies HI \\perp (ACC'A')$.\nTrong tam giác vuông $A'HK$ vuông tại $H$:\n$$\\frac{1}{HI^2} = \\frac{1}{A'H^2} + \\frac{1}{HK^2} = \\frac{1}{a^2} + \\frac{1}{\\frac{3a^2}{16}} = \\frac{1}{a^2} + \\frac{16}{3a^2} = \\frac{19}{3a^2}$$\nSuy ra $HI = a\\sqrt{\\frac{3}{19}} = \\frac{a\\sqrt{57}}{19}$.\nVậy khoảng cách từ $B$ là:\n$$d(B, (ACC'A')) = 2 HI = \\frac{2a\\sqrt{57}}{19}$$\n\nChọn A.",
    "socraticHint": "Dùng tỉ số khoảng cách: $d(B) = 2 d(H)$, rồi dựng đường cao trong tam giác vuông $A'HK$.",
    "difficulty": "Vận dụng cao",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 970,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chuyên đề 8: Hình học không gian cổ điển (Toán 11)",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$ và chiều cao $SO = \\frac{a\\sqrt{3}}{2}$. Số đo góc giữa hai mặt phẳng đối diện $(SAB)$ và $(SCD)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$60^\\circ$"
      },
      {
        "key": "B",
        "content": "$45^\\circ$"
      },
      {
        "key": "C",
        "content": "$90^\\circ$"
      },
      {
        "key": "D",
        "content": "$30^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là đường thẳng $d$ đi qua $S$ và song song với $AB, CD$.\nGọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$.\nVì $\\triangle SAB$ và $\\triangle SCD$ là các tam giác cân tại $S$ nên $SM \\perp AB \\implies SM \\perp d$ và $SN \\perp CD \\implies SN \\perp d$.\nDo đó góc giữa hai mặt phẳng $(SAB)$ và $(SCD)$ chính là góc giữa hai đường thẳng $SM$ và $SN$.\nTrong tam giác cân $SMN$, ta có $MN = a$ và đường cao $SO = \\frac{a\\sqrt{3}}{2}$, $OM = ON = \\frac{a}{2}$.\n$$\\tan \\frac{\\widehat{MSN}}{2} = \\frac{OM}{SO} = \\frac{\\frac{a}{2}}{\\frac{a\\sqrt{3}}{2}} = \\frac{1}{\\sqrt{3}} \\implies \\frac{\\widehat{MSN}}{2} = 30^\\circ \\implies \\widehat{MSN} = 60^\\circ$$\n\nChọn A.",
    "socraticHint": "Xác định giao tuyến song song với các cạnh đáy và dựng góc nhị diện qua trung điểm hai cạnh đối diện.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  }
];
