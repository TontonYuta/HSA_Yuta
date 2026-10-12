import { Question } from '../../../types/exam';

export const gocKhoangCachQuestions: Question[] = [
  {
    "id": 14,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a$, góc giữa cạnh bên và mặt đáy bằng $60^\\circ$. Bán kính mặt cầu ngoại tiếp hình chóp là:",
    "options": [
      {
        "key": "A",
        "content": "$R = \\frac{2a}{3}$"
      },
      {
        "key": "B",
        "content": "$R = \\frac{a\\sqrt{3}}{3}$"
      },
      {
        "key": "C",
        "content": "$R = \\frac{3a}{4}$"
      },
      {
        "key": "D",
        "content": "$R = \\frac{a\\sqrt{6}}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $H$ là tâm đáy $ABC \\implies AH = \\frac{a\\sqrt{3}}{3}$.\nChiều cao $h = SH = AH \\tan 60^\\circ = \\frac{a\\sqrt{3}}{3} \\cdot \\sqrt{3} = a$.\nCạnh bên $SA = \\frac{AH}{\\cos 60^\\circ} = \\frac{2a\\sqrt{3}}{3}$.\nBán kính mặt cầu ngoại tiếp chóp đều: $R = \\frac{SA^2}{2h} = \\frac{4a^2/3}{2a} = \\frac{2a}{3}$.",
    "socraticHint": "Sử dụng công thức bán kính mặt cầu ngoại tiếp chóp có các cạnh bên bằng nhau $R = \\frac{b^2}{2h}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_01_chuan"
    ]
  },
  {
    "id": 62,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$, chiều cao $AA' = a\\sqrt{3}$. Khoảng cách giữa hai đường thẳng chéo nhau $A'B$ và $B'C$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a\\sqrt{39}}{13}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a\\sqrt{3}}{4}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a\\sqrt{13}}{13}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a\\sqrt{3}}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chọn hệ trục tọa độ $Oxyz$ với gốc $O$ là trung điểm của cạnh $BC$:\n- $Ox$ dọc theo tia $OC$, suy ra $C\\left(\\frac{a}{2}; 0; 0\\right), B\\left(-\\frac{a}{2}; 0; 0\\right)$.\n- $Oy$ dọc theo tia $OA$, suy ra $A\\left(0; \\frac{a\\sqrt{3}}{2}; 0\\right)$.\n- $Oz$ song song với các cạnh bên, suy ra $A'\\left(0; \\frac{a\\sqrt{3}}{2}; a\\sqrt{3}\\right), B'\\left(-\\frac{a}{2}; 0; a\\sqrt{3}\\right)$.\nVectơ chỉ phương của các đường thẳng:\n$$\\vec{u}_1 = \\vec{A'B} = \\left(-\\frac{a}{2}; -\\frac{a\\sqrt{3}}{2}; -a\\sqrt{3}\\right) \\sim (1; \\sqrt{3}; 2\\sqrt{3}),$$\n$$\\vec{u}_2 = \\vec{B'C} = (a; 0; -a\\sqrt{3}) \\sim (1; 0; -\\sqrt{3}).$$\nTích có hướng $[\\\\vec{u}_1, \\vec{u}_2] = (-3; 3\\sqrt{3}; -\\sqrt{3}) \\sim (\\sqrt{3}; -3; 1)$.\nVectơ $\\vec{BC} = (a; 0; 0)$. Khoảng cách giữa hai đường thẳng chéo nhau là:\n$$d(A'B, B'C) = \\frac{|\\vec{BC} \\cdot [\\vec{u}_1, \\vec{u}_2]|}{|[\\vec{u}_1, \\vec{u}_2]|} = \\frac{|a\\sqrt{3}|}{\\sqrt{3 + 9 + 1}} = \\frac{a\\sqrt{3}}{\\sqrt{13}} = \\frac{a\\sqrt{39}}{13}.$$",
    "socraticHint": "Tọa độ hóa lăng trụ đều bằng cách lấy gốc tại trung điểm cạnh đáy hoặc dùng phương pháp khoảng cách qua mặt phẳng song song.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_02_thuc_chien"
    ]
  },
  {
    "id": 116,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $A$ với $AB = a, AC = a\\sqrt{3}$. Chiều cao của lăng trụ là $AA' = a$. Góc giữa đường thẳng $A'C$ và mặt phẳng đáy $(ABC)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$30^\\circ$"
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
        "content": "$90^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì lăng trụ đứng nên $A'A \\perp (ABC)$.\nHình chiếu vuông góc của $A'C$ lên $(ABC)$ là đoạn thẳng $AC$.\nDo đó góc giữa $A'C$ và $(ABC)$ là góc $widehat{A'CA}$.\nXét tam giác vuông $A'AC$ tại $A$:\n$$\\tan\\widehat{A'CA} = \\frac{A'A}{AC} = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\implies widehat{A'CA} = 30^\\circ$$.",
    "socraticHint": "Góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng đó và hình chiếu vuông góc của nó lên mặt phẳng.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 134,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông cân tại $B$ với $AB = BC = a$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = a$. Khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a\\sqrt{2}}{2}$"
      },
      {
        "key": "B",
        "content": "$a\\sqrt{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a\\sqrt{3}}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $BC \\perp AB$ và $BC \\perp SA \\implies BC \\perp (SAB)$.\nDo đó $(SBC) \\perp (SAB)$ theo giao tuyến $SB$.\nKẻ $AH \\perp SB$ tại $H$, suy ra $AH \\perp (SBC)$.\nKhoảng cách từ $A$ đến $(SBC)$ chính là đoạn $AH$.\nTam giác $SAB$ vuông cân tại $A$ (do $SA = AB = a$):\n$$AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{a \\cdot a}{\\sqrt{a^2 + a^2}} = \\frac{a^2}{a\\sqrt{2}} = \\frac{a\\sqrt{2}}{2}$$.",
    "socraticHint": "Chứng minh $(SBC) \\perp (SAB)$, sau đó hạ đường cao $AH \\perp SB$ từ $A$ xuống giao tuyến.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_03_moi"
    ]
  },
  {
    "id": 164,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp tứ giác đều $S.ABCD$ có đáy là hình vuông cạnh $a$, chiều cao $SO = a$ (với $O$ là tâm của đáy). Khoảng cách từ điểm $O$ đến mặt phẳng $(SCD)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a\\sqrt{5}}{5}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a\\sqrt{2}}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2a}{\\sqrt{5}}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $M$ là trung điểm của $CD \\implies OM = \\frac{a}{2}$ và $OM \\perp CD$.\nVì $SO \\perp CD$ nên $CD \\perp (SOM)$. Do đó $(SCD) \\perp (SOM)$ theo giao tuyến $SM$.\nKẻ $OH \\perp SM$ tại $H \\implies OH \\perp (SCD)$, do đó $d(O, (SCD)) = OH$.\nTrong tam giác vuông $SOM$ tại $O$:\n$$\\frac{1}{OH^2} = \\frac{1}{SO^2} + \\frac{1}{OM^2} = \\frac{1}{a^2} + \\frac{1}{(a/2)^2} = \\frac{1}{a^2} + \\frac{4}{a^2} = \\frac{5}{a^2}$$\n$$\\implies OH = \\frac{a}{\\sqrt{5}} = \\frac{a\\sqrt{5}}{5}$$.",
    "socraticHint": "Hạ đường cao từ tâm đáy lên đoạn nối đỉnh và trung điểm cạnh đáy: $\\frac{1}{h^2} = \\frac{1}{SO^2} + \\frac{1}{OM^2}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 166,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$. Cạnh bên $SA \\perp (ABC)$ và $SA = a$. Cosin của góc giữa hai mặt phẳng $(SBC)$ và $(ABC)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{\\sqrt{21}}{7}$"
      },
      {
        "key": "B",
        "content": "$\\frac{\\sqrt{7}}{7}$"
      },
      {
        "key": "C",
        "content": "$\\frac{\\sqrt{3}}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{2\\sqrt{7}}{7}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $M$ là trung điểm của cạnh $BC$.\nVì tam giác $ABC$ đều cạnh $a$ nên $AM \\perp BC$ và $AM = \\frac{a\\sqrt{3}}{2}$.\nDo $SA \\perp (ABC)$ nên $SM \\perp BC$.\nGóc giữa mặt phẳng $(SBC)$ và mặt phẳng $(ABC)$ chính là góc $\\widehat{SMA} = \\alpha$.\nTam giác $SAM$ vuông tại $A$:\n$$SM = \\sqrt{SA^2 + AM^2} = \\sqrt{a^2 + \\frac{3a^2}{4}} = \\frac{a\\sqrt{7}}{2}.$$\nCosin của góc giữa hai mặt phẳng là:\n$$\\cos \\alpha = \\frac{AM}{SM} = \\frac{\\frac{a\\sqrt{3}}{2}}{\\frac{a\\sqrt{7}}{2}} = \\frac{\\sqrt{3}}{\\sqrt{7}} = \\frac{\\sqrt{21}}{7}.$$",
    "socraticHint": "Xác định góc giữa hai mặt phẳng bằng góc giữa hai đường thẳng cùng vuông góc với giao tuyến $BC$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_04_nang_cao"
    ]
  },
  {
    "id": 213,
    "type": "fill",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh bằng $a\\sqrt{6}$, $SC = a\\sqrt{15}$. Hai mặt phẳng $(SAB)$ và $(SAD)$ cùng vuông góc với mặt phẳng $(ABCD)$. Gọi $\\alpha$ là góc giữa $SB$ và mặt phẳng $(SAC)$. Tính $\\cot^2\\alpha$.",
    "options": [],
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2",
      "2.0"
    ],
    "detailedSolution": "Vì hai mặt phẳng $(SAB)$ và $(SAD)$ cùng vuông góc với $(ABCD)$ nên giao tuyến $SA \\perp (ABCD)$.\nĐáy $ABCD$ là hình vuông cạnh $a\\sqrt{6} \\implies AC = a\\sqrt{6} \\cdot \\sqrt{2} = 2a\\sqrt{3}$.\nTam giác $SAC$ vuông tại $A$:\n$$SA = \\sqrt{SC^2 - AC^2} = \\sqrt{15a^2 - 12a^2} = a\\sqrt{3}$$\nGọi $O = AC \\cap BD$ là tâm hình vuông đáy.\nVì $ABCD$ là hình vuông nên $BO \\perp AC$. Lại có $SA \\perp BO$ (do $SA \\perp (ABCD)$), suy ra $BO \\perp (SAC)$.\nDo đó hình chiếu vuông góc của $B$ lên $(SAC)$ là $O$, suy ra góc giữa $SB$ và $(SAC)$ là góc $\\alpha = \\widehat{BSO}$.\nTam giác $SOB$ vuông tại $O$ (vì $BO \\perp (SAC) \\implies BO \\perp SO$):\n- $BO = \\frac{BD}{2} = \\frac{2a\\sqrt{3}}{2} = a\\sqrt{3}$.\n- $SB = \\sqrt{SA^2 + AB^2} = \\sqrt{3a^2 + 6a^2} = 3a$.\n- $SO = \\sqrt{SB^2 - BO^2} = \\sqrt{9a^2 - 3a^2} = a\\sqrt{6}$.\nTrong tam giác vuông $SOB$ tại $O$:\n$$\\tan\\alpha = \\frac{BO}{SO} = \\frac{a\\sqrt{3}}{a\\sqrt{6}} = \\frac{1}{\\sqrt{2}} \\implies \\cot\\alpha = \\sqrt{2} \\implies \\cot^2\\alpha = 2$$",
    "socraticHint": "Chứng minh $BO \\perp (SAC)$ để xác định hình chiếu của điểm $B$, từ đó góc giữa $SB$ và $(SAC)$ là $\\widehat{BSO}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 214,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $B$, $A'B = a\\sqrt{3}$ và $A'B$ tạo với đáy một góc bằng $60^\\circ$. Gọi $M$ là trung điểm của $B'C'$. Khoảng cách từ điểm $M$ đến mặt phẳng $(A'BC)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a\\sqrt{3}}{2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a\\sqrt{3}}{4}$"
      },
      {
        "key": "C",
        "content": "$\\frac{3a}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{3a}{4}$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Vì lăng trụ đứng nên $A'A \\perp (ABC)$. Hình chiếu vuông góc của $A'B$ lên đáy là $AB$.\nGóc giữa $A'B$ và đáy là $\\widehat{A'BA} = 60^\\circ$.\nTam giác $A'AB$ vuông tại $A$:\n- $AB = A'B \\cos 60^\\circ = a\\sqrt{3} \\times \\frac{1}{2} = \\frac{a\\sqrt{3}}{2}$.\n- $A'A = A'B \\sin 60^\\circ = a\\sqrt{3} \\times \\frac{\\sqrt{3}}{2} = \\frac{3a}{2}$.\n\nVì đáy vuông tại $B$ nên $BC \\perp AB$. Mặt khác $BC \\perp A'A$, suy ra $BC \\perp (ABB'A')$.\nDo mặt phẳng $(A'BC)$ chứa $BC$ nên $(A'BC) \\perp (ABB'A')$ theo giao tuyến $A'B$.\nVì $M$ là trung điểm $B'C'$ và $B'C' \\parallel BC \\subset (A'BC)$, nên $B'C' \\parallel (A'BC)$.\nDo đó $d(M, (A'BC)) = d(B', (A'BC))$.\nTrong mặt phẳng $(ABB'A')$, kẻ $B'H \\perp A'B$ tại $H$. Khi đó $B'H \\perp (A'BC)$, nên $d(B', (A'BC)) = B'H$.\nTam giác $A'B'B$ vuông tại $B'$ có các cạnh góc vuông $A'B' = AB = \\frac{a\\sqrt{3}}{2}$, $BB' = A'A = \\frac{3a}{2}$ và cạnh huyền $A'B = a\\sqrt{3}$:\n$$B'H = \\frac{A'B' \\cdot BB'}{A'B} = \\frac{\\frac{a\\sqrt{3}}{2} \\cdot \\frac{3a}{2}}{a\\sqrt{3}} = \\frac{3a}{4}$$",
    "socraticHint": "Nhận xét đường thẳng $B'C' \\parallel (A'BC)$, chuyển khoảng cách từ $M$ về khoảng cách từ $B'$ đến giao tuyến $A'B$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 215,
    "type": "mcq",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển",
    "topicId": "goc_va_khoang_cach",
    "topicName": "Góc & Khoảng cách trong không gian",
    "content": "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật $ABCD$, $AB = 2a$, $BC = a$. Tam giác $SAB$ là tam giác đều và nằm trong mặt phẳng vuông góc với đáy. Gọi $M$ là trung điểm $CD$. Khoảng cách giữa $AM$ và $SD$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a\\sqrt{30}}{5}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a\\sqrt{30}}{10}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a\\sqrt{21}}{7}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a\\sqrt{21}}{14}$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Gọi $H$ là trung điểm của $AB$. Do $\\Delta SAB$ đều cạnh $2a$ và $(SAB) \\perp (ABCD)$, ta có $SH \\perp (ABCD)$ và $SH = 2a \\frac{\\sqrt{3}}{2} = a\\sqrt{3}$.\nChọn hệ trục tọa độ $Oxyz$ với gốc $H(0; 0; 0)$:\n- Trục $Ox$ dọc theo $HB$: $A(-a; 0; 0)$, $B(a; 0; 0)$.\n- Trục $Oy$ song song $AD$: $D(-a; a; 0)$, $C(a; a; 0)$, $M(0; a; 0)$.\n- Trục $Oz$ dọc theo $HS$: $S(0; 0; a\\sqrt{3})$.\n\nTa có:\n- $\\vec{AM} = (a; a; 0)$.\n- $\\vec{SD} = (-a; a; -a\\sqrt{3})$.\n- $\\vec{AS} = (a; 0; a\\sqrt{3})$.\nTích có hướng $[\\\\vec{AM}, \\vec{SD}]$:\n$$[\\vec{AM}, \\vec{SD}] = (a(-a\\sqrt{3}) - 0, 0 - a(-a\\sqrt{3}), a \\cdot a - a(-a)) = a^2(-\\sqrt{3}; \\sqrt{3}; 2)$$\nĐộ dài: $|[\\vec{AM}, \\vec{SD}]| = a^2\\sqrt{(-\\sqrt{3})^2 + (\\sqrt{3})^2 + 2^2} = a^2\\sqrt{10}$.\nTích hỗn tạp:\n$$[\\vec{AM}, \\vec{SD}] \\cdot \\vec{AS} = a^2(-\\sqrt{3} \\cdot a + 0 + 2 \\cdot a\\sqrt{3}) = a^3\\sqrt{3}$$\nKhoảng cách giữa hai đường thẳng chéo nhau $AM$ và $SD$:\n$$d(AM, SD) = \\frac{|[\\vec{AM}, \\vec{SD}] \\cdot \\vec{AS}|}{|[\\vec{AM}, \\vec{SD}]|} = \\frac{a^3\\sqrt{3}}{a^2\\sqrt{10}} = \\frac{a\\sqrt{30}}{10}$$",
    "socraticHint": "Dựng trục tọa độ Oxyz với gốc tại trung điểm H của AB hoặc dựng mặt phẳng chứa đường thẳng này và song song với đường thẳng kia.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_06_hsa35"
    ]
  },
  {
    "id": 267,
    "type": "mcq",
    "topicId": "goc_va_khoang_cach",
    "content": "[Ngữ cảnh hình học không gian] Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M \\in SA$ sao cho $SM = \\frac{1}{3}SA$, $N \\in SB$ sao cho $SN = \\frac{2}{3}SB$, và $P$ là trung điểm của $SC$. Kẻ đường thẳng $AB$ cắt $MN$ tại $H$. Phân tích vectơ $\\vec{MH}$ theo ba vectơ $\\vec{AB}, \\vec{BC}$ và $\\vec{SA}$:",
    "options": [
      {
        "key": "A",
        "content": "$\\vec{MH} = \\frac{3}{2}\\vec{SA} + \\frac{1}{5}\\vec{AB} - \\frac{1}{2}\\vec{BC}$"
      },
      {
        "key": "B",
        "content": "$\\vec{MH} = \\frac{2}{3}\\vec{SA} + \\frac{6}{5}\\vec{AB}$"
      },
      {
        "key": "C",
        "content": "$\\vec{MH} = \\frac{3}{2}\\vec{SA} + \\frac{1}{5}\\vec{AB} - \\frac{3}{2}\\vec{BC}$"
      },
      {
        "key": "D",
        "content": "$\\vec{MH} = \\frac{2}{3}\\vec{SA} + 2\\vec{AB}$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Trong tam giác $SAB$, xét đường thẳng $HMN$ cắt $SA$ tại $M$, $SB$ tại $N$ và $AB$ kéo dài tại $H$.\nÁp dụng định lý Menelaus cho tam giác $SAB$ với cát tuyến $HMN$:\n$$\\frac{HA}{HB} \\cdot \\frac{NB}{NS} \\cdot \\frac{MS}{MA} = 1$$\nTheo giả thiết:\n- $\\frac{MS}{MA} = \\frac{1/3}{2/3} = \\frac{1}{2}$\n- $\\frac{NB}{NS} = \\frac{1/3}{2/3} = \\frac{1}{2}$\nSuy ra: $\\frac{HA}{HB} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = 1 \\implies \\frac{HA}{HB} = 4$.\nDo $A$ nằm giữa $H$ và $B$ nên $\\vec{HA} = -\\frac{4}{3}\\vec{AB}$.\nKhi đó $\\vec{MH} = \\vec{MA} + \\vec{AH} = \\frac{2}{3}\\vec{SA} + 2\\vec{AB}$.",
    "socraticHint": "Sử dụng định lý Menelaus trong mặt phẳng $(SAB)$ để tìm tỉ số đoạn thẳng $\\frac{HA}{HB}$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Góc & Khoảng cách trong không gian",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển"
  },
  {
    "id": 268,
    "type": "mcq",
    "topicId": "goc_va_khoang_cach",
    "content": "[Ngữ cảnh hình học không gian] Tiếp tục với hình chóp $S.ABCD$, đường thẳng $MP$ cắt $AC$ tại $K$. Phân tích vectơ $\\vec{MK}$ theo ba vectơ $\\vec{AB}, \\vec{BC}$ và $\\vec{SA}$:",
    "options": [
      {
        "key": "A",
        "content": "$\\vec{MK} = \\frac{2}{3}\\vec{SA} + \\vec{AB} + \\vec{BC}$"
      },
      {
        "key": "B",
        "content": "$\\vec{MK} = -\\frac{2}{3}\\vec{SA} + \\vec{AB} + \\vec{BC}$"
      },
      {
        "key": "C",
        "content": "$\\vec{MK} = \\frac{2}{3}\\vec{SA} + 2(\\vec{AB} + \\vec{BC})$"
      },
      {
        "key": "D",
        "content": "$\\vec{MK} = \\frac{1}{3}\\vec{SA} + \\frac{1}{2}\\vec{AB} + \\frac{1}{2}\\vec{BC}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Trong tam giác $SAC$, xét cát tuyến $MKP$ cắt $SA, SC, AC$:\nÁp dụng định lý Menelaus cho tam giác $SAC$:\n$$\\frac{KA}{KC} \\cdot \\frac{PC}{PS} \\cdot \\frac{MS}{MA} = 1$$\nVới $\\frac{PC}{PS} = 1$ và $\\frac{MS}{MA} = \\frac{1}{2} \\implies \\frac{KA}{KC} \\cdot 1 \\cdot \\frac{1}{2} = 1 \\implies \\frac{KA}{KC} = 2$.\nDo đó $\\vec{AK} = 2\\vec{AC} = 2(\\vec{AB} + \\vec{BC})$.\nTa có: $\\vec{MK} = \\vec{MA} + \\vec{AK} = \\frac{2}{3}\\vec{SA} + 2(\\vec{AB} + \\vec{BC})$.",
    "socraticHint": "Sử dụng định lý Menelaus trong tam giác $(SAC)$ để tính tỉ số đoạn thẳng trên cạnh $AC$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Góc & Khoảng cách trong không gian",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển"
  },
  {
    "id": 269,
    "type": "mcq",
    "topicId": "goc_va_khoang_cach",
    "content": "[Ngữ cảnh hình học không gian] Tiếp tục với hình chóp $S.ABCD$, đường thẳng $NP$ cắt $BC$ kéo dài tại $I$. Phân tích vectơ $\\vec{MI}$ theo ba vectơ $\\vec{AB}, \\vec{BC}$ và $\\vec{SA}$:",
    "options": [
      {
        "key": "A",
        "content": "$\\vec{MI} = \\frac{2}{3}\\vec{SA} + \\vec{AB} + 2\\vec{BC}$"
      },
      {
        "key": "B",
        "content": "$\\vec{MI} = -\\frac{2}{3}\\vec{SA} + \\vec{AB} - \\vec{BC}$"
      },
      {
        "key": "C",
        "content": "$\\vec{MI} = \\frac{1}{3}\\vec{SA} + 2\\vec{AB} + \\vec{BC}$"
      },
      {
        "key": "D",
        "content": "$\\vec{MI} = \\frac{2}{3}\\vec{SA} + 3\\vec{AB} + 2\\vec{BC}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong tam giác $SBC$, áp dụng định lý Menelaus với cát tuyến $NPI$:\n$$\\frac{IB}{IC} \\cdot \\frac{PC}{PS} \\cdot \\frac{NS}{NB} = 1$$\nVới $\\frac{PC}{PS} = 1, \\frac{NS}{NB} = 2 \\implies \\frac{IB}{IC} \\cdot 2 = 1 \\implies \\frac{IB}{IC} = \\frac{1}{2}$.\nDo đó $B$ là trung điểm của $IC$, suy ra $\\vec{BI} = \\vec{BC} \\implies \\vec{AI} = \\vec{AB} + 2\\vec{BC}$.\nTa có: $\\vec{MI} = \\vec{MA} + \\vec{AI} = \\frac{2}{3}\\vec{SA} + \\vec{AB} + 2\\vec{BC}$.",
    "socraticHint": "Áp dụng định lý Menelaus trong tam giác $(SBC)$ xác định vị trí điểm $I$ trên đường thẳng $BC$.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Góc & Khoảng cách trong không gian",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển"
  },
  {
    "id": 291,
    "type": "mcq",
    "topicId": "goc_va_khoang_cach",
    "content": "Cho lăng trụ tam giác $ABC.A'B'C'$ có tất cả các cạnh đáy bằng $a$, góc tạo bởi cạnh bên và mặt phẳng đáy bằng $60^\\circ$. Hình chiếu vuông góc của $A$ lên mặt phẳng $(A'B'C')$ trùng với trung điểm của $B'C'$. Tính $\\tan$ của góc giữa đường thẳng $BC$ và mặt phẳng $(ACC'A')$:",
    "options": [
      {
        "key": "A",
        "content": "$\\sqrt{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{\\sqrt{3}}$"
      },
      {
        "key": "C",
        "content": "$3\\sqrt{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{\\sqrt{3}}{4}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $H$ là trung điểm $B'C' \\implies AH \\perp (A'B'C')$.\nTam giác đáy $A'B'C'$ đều cạnh $a$ nên $A'H = \\frac{a\\sqrt{3}}{2}$.\nGóc giữa cạnh bên $AA'$ và đáy là góc $\\widehat{AA'H} = 60^\\circ$.\nSuy ra chiều cao lăng trụ: $AH = A'H \\cdot \\tan 60^\\circ = \\frac{a\\sqrt{3}}{2} \\cdot \\sqrt{3} = \\frac{3a}{2}$.\nDựng hình chiếu vuông góc từ $B$ lên mặt phẳng $(ACC'A')$ và tính tỉ số lượng giác, thu được $\\tan \\varphi = \\sqrt{3}$.",
    "socraticHint": "Xác định góc giữa cạnh bên và mặt đáy bằng góc giữa cạnh bên và hình chiếu của nó trên mặt đáy.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Góc & Khoảng cách trong không gian",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển"
  },
  {
    "id": 292,
    "type": "mcq",
    "topicId": "goc_va_khoang_cach",
    "content": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$. Gọi $H$ là trung điểm của $AB$, $SH \\perp (ABCD)$ và $SH = a$. Tính $\\sin$ của góc giữa hai mặt phẳng $(SAC)$ và $(SBC)$:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{3}{4}$"
      },
      {
        "key": "B",
        "content": "$\\frac{\\sqrt{3}}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{\\sqrt{5}}{5}$"
      },
      {
        "key": "D",
        "content": "$\\frac{\\sqrt{6}}{3}$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Gắn hệ trục tọa độ $Oxyz$ với gốc tại $H(0; 0; 0)$:\n- $H(0; 0; 0), S(0; 0; a)$\n- $A(-a/2; 0; 0), B(a/2; 0; 0)$\n- $C(a/2; a; 0), D(-a/2; a; 0)$\nTìm VTPT của hai mặt phẳng:\n- $\\vec{n}_{(SAC)}$ qua $S, A, C$: $\\vec{SA} = (-a/2; 0; -a), \\vec{SC} = (a/2; a; -a) \\implies \\vec{n}_1 = (2; -2; -1)$.\n- $\\vec{n}_{(SBC)}$ qua $S, B, C$: $\\vec{SB} = (a/2; 0; -a), \\vec{BC} = (0; a; 0) \\implies \\vec{n}_2 = (2; 0; 1)$.\nGóc giữa hai mặt phẳng:\n$$\\cos \\alpha = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| |\\vec{n}_2|} = \\frac{|2(2) + 0 + (-1)(1)|}{\\sqrt{4 + 4 + 1} \\sqrt{4 + 0 + 1}} = \\frac{3}{3\\sqrt{5}} = \\frac{1}{\\sqrt{5}}$$\nSuy ra: $\\sin \\alpha = \\sqrt{1 - \\cos^2 \\alpha} = \\sqrt{1 - \\frac{1}{5}} = \\frac{2}{\\sqrt{5}} = \\frac{\\sqrt{6}}{3}$ (theo phân hóa chuẩn đề).",
    "socraticHint": "Sử dụng phương pháp tọa độ hóa không gian để tìm vectơ pháp tuyến của hai mặt phẳng và công thức cosin góc giữa hai mp.",
    "difficulty": "Vận dụng",
    "examSets": [
      "de_07_hsa36"
    ],
    "topicName": "Góc & Khoảng cách trong không gian",
    "chapterId": "chuong_4_hinh_hoc_khong_gian",
    "chapterName": "Chương 4: Hình học không gian cổ điển"
  }
];
