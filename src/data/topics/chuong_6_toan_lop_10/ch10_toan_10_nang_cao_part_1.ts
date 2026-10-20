import { Question } from '../../../types/exam';

export const ch10Toan10NangCaoPart1Questions: Question[] = [
  {
    "id": 1046,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "quy_hoach_tuyen_tinh_bpt_2_an",
    "topicName": "Quy hoạch tuyến tính & BPT bậc nhất hai ẩn",
    "content": "Một xưởng may sản xuất hai loại áo sơ mi: loại A và loại B. Mỗi áo loại A cần 2 m vải và 3 giờ công lao động, đem lại lợi nhuận 100 nghìn đồng. Mỗi áo loại B cần 3 m vải và 2 giờ công lao động, đem lại lợi nhuận 120 nghìn đồng. Xưởng may hiện có tối đa 180 m vải và 150 giờ công mỗi tuần. Để lợi nhuận hàng tuần đạt mức cao nhất, xưởng cần sản xuất bao nhiêu áo mỗi loại?",
    "options": [
      {
        "key": "A",
        "content": "18 áo loại A và 48 áo loại B"
      },
      {
        "key": "B",
        "content": "50 áo loại A và 0 áo loại B"
      },
      {
        "key": "C",
        "content": "0 áo loại A và 60 áo loại B"
      },
      {
        "key": "D",
        "content": "30 áo loại A và 30 áo loại B"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $x, y$ lần lượt là số lượng áo loại A và loại B xưởng sản xuất trong tuần ($x, y \\ge 0$).\nĐiều kiện về nguyên liệu vải: $2x + 3y \\le 180$.\nĐiều kiện về thời gian công nhân: $3x + 2y \\le 150$.\nLợi nhuận thu được là: $F(x, y) = 100x + 120y$ (nghìn đồng).\nMiền nghiệm là tứ giác $OABC$ với tọa độ các đỉnh:\n- $O(0; 0) \\implies F(0, 0) = 0$.\n- $A(50; 0)$ (giao điểm của $3x + 2y = 150$ với trục hoành) $\\implies F(50, 0) = 5000$ nghìn đồng.\n- $B(18; 48)$ (nghiệm của hệ $\\begin{cases} 2x + 3y = 180 \\\\ 3x + 2y = 150 \\end{cases}$) $\\implies F(18, 48) = 100(18) + 120(48) = 1800 + 5760 = 7560$ nghìn đồng.\n- $C(0; 60)$ (giao điểm của $2x + 3y = 180$ với trục tung) $\\implies F(0, 60) = 120(60) = 7200$ nghìn đồng.\nSo sánh các giá trị, lợi nhuận lớn nhất đạt được là 7.560.000 đồng khi sản xuất 18 áo loại A và 48 áo loại B.\n\nChọn A.",
    "socraticHint": "Lập hệ bất phương trình bậc nhất hai ẩn biểu diễn giới hạn vải và công, tìm đỉnh đa giác miền nghiệm làm cực đại hóa hàm lợi nhuận.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1047,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "quy_hoach_tuyen_tinh_bpt_2_an",
    "topicName": "Quy hoạch tuyến tính & BPT bậc nhất hai ẩn",
    "content": "Lợi nhuận tối đa xưởng may thu được trong một tuần ở bài toán trên bằng bao nhiêu nghìn đồng? (Điền số nguyên):",
    "correctAnswer": "7560",
    "detailedSolution": "Lợi nhuận tối đa đạt được tại đỉnh $B(18; 48)$:\n$$F_{\\max} = 100 \\times 18 + 120 \\times 48 = 1800 + 5760 = 7560\\text{ (nghìn đồng)}$$\n\nĐáp số: 7560.",
    "socraticHint": "Thay tọa độ điểm tối ưu $x = 18, y = 48$ vào hàm mục tiêu $F(x, y)$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1048,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Để đo chiều cao của ngọn đèn hải đăng trên đỉnh vách đá ven biển, hai người quan sát đứng tại hai vị trí $A$ và $B$ trên mặt nước thẳng hàng với chân vách đá. Biết khoảng cách $AB = 30\\text{ m}$. Góc nâng nhìn đỉnh ngọn đèn từ $A$ là $30^\\circ$ và từ $B$ là $45^\\circ$. Chiều cao của đỉnh đèn so với mặt nước bằng:",
    "options": [
      {
        "key": "A",
        "content": "$15(\\sqrt{3} + 1)\\text{ m}$"
      },
      {
        "key": "B",
        "content": "$30(\\sqrt{3} - 1)\\text{ m}$"
      },
      {
        "key": "C",
        "content": "$20\\sqrt{3}\\text{ m}$"
      },
      {
        "key": "D",
        "content": "$45\\text{ m}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $C$ là đỉnh ngọn đèn và $H$ là hình chiếu của $C$ lên mặt nước (chân tháp).\nTam giác $ABC$ có:\n- $\\widehat{CAB} = 30^\\circ$\n- $\\widehat{CBH} = 45^\\circ \\implies \\widehat{CBA} = 180^\\circ - 45^\\circ = 135^\\circ$\n- $\\widehat{ACB} = 180^\\circ - (30^\\circ + 135^\\circ) = 15^\\circ$\nÁp dụng định lý sin trong $\\triangle ABC$:\n$$\\frac{BC}{\\sin 30^\\circ} = \\frac{AB}{\\sin 15^\\circ} \\implies BC = \\frac{30 \\cdot \\sin 30^\\circ}{\\sin 15^\\circ} = \\frac{15}{\\frac{\\sqrt{6} - \\sqrt{2}}{4}} = \\frac{60}{\\sqrt{6} - \\sqrt{2}} = 15(\\sqrt{6} + \\sqrt{2})$$\nTrong tam giác vuông $CHB$ vuông tại $H$:\n$$CH = BC \\cdot \\sin 45^\\circ = 15(\\sqrt{6} + \\sqrt{2}) \\cdot \\frac{\\sqrt{2}}{2} = 15(2\\sqrt{3} + 2) \\cdot \\frac{1}{2} = 15(\\sqrt{3} + 1)\\text{ (m)}$$\n\nChọn A.",
    "socraticHint": "Dùng định lý sin trong tam giác $ABC$ để tìm cạnh $BC$, sau đó tính $CH = BC \\cdot \\sin 45^\\circ$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1049,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Cho tam giác $ABC$ có ba cạnh lần lượt là $a = 7, b = 8, c = 5$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Tam giác có diện tích $10\\sqrt{3}$, bán kính nội tiếp $\\sqrt{3}$ và góc $A = 60^\\circ$.\n\n\n\nChọn D.",
    "socraticHint": "Áp dụng công thức Hê-rông và định lý cosin cho góc $A$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Nửa chu vi của tam giác là $p = 10$."
      },
      {
        "key": "B",
        "content": "Diện tích tam giác tính theo công thức Hê-rông là $S = 10\\sqrt{3}$."
      },
      {
        "key": "C",
        "content": "Bán kính đường tròn nội tiếp tam giác $r = \\sqrt{3}$."
      },
      {
        "key": "D",
        "content": "Số đo góc $A$ bằng $90^\\circ$."
      }
    ]
  },
  {
    "id": 1050,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$ ở câu trên ($a = 7, A = 60^\\circ$) có dạng $\\frac{k\\sqrt{3}}{3}$. Tìm số nguyên $k$. (Điền số nguyên):",
    "correctAnswer": "7",
    "detailedSolution": "Áp dụng định lý sin trong tam giác $ABC$:\n$$2R = \\frac{a}{\\sin A} = \\frac{7}{\\sin 60^\\circ} = \\frac{7}{\\frac{\\sqrt{3}}{2}} = \\frac{14}{\\sqrt{3}} = \\frac{14\\sqrt{3}}{3}$$\nSuy ra:\n$$R = \\frac{7\\sqrt{3}}{3}$$\nDo đó $k = 7$.\n\nĐáp số: 7.",
    "socraticHint": "Định lý sin: $R = \\frac{a}{2\\sin A}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1051,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Hai chiếc tàu thủy cùng xuất phát từ một cảng $O$ vào cùng một thời điểm, di chuyển theo hai hướng tạo với nhau một góc $60^\\circ$. Tàu thứ nhất chạy với vận tốc $20\\text{ km/h}$, tàu thứ hai chạy với vận tốc $30\\text{ km/h}$. Sau 2 giờ, khoảng cách giữa hai tàu là:",
    "options": [
      {
        "key": "A",
        "content": "$20\\sqrt{7}\\text{ km}$"
      },
      {
        "key": "B",
        "content": "$50\\text{ km}$"
      },
      {
        "key": "C",
        "content": "$20\\sqrt{19}\\text{ km}$"
      },
      {
        "key": "D",
        "content": "$40\\sqrt{3}\\text{ km}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Sau 2 giờ:\n- Tàu 1 đi được đoạn thẳng $OA = 20 \\times 2 = 40\\text{ km}$.\n- Tàu 2 đi được đoạn thẳng $OB = 30 \\times 2 = 60\\text{ km}$.\nGóc xen giữa là $\\widehat{AOB} = 60^\\circ$.\nÁp dụng định lý cosin trong tam giác $OAB$ để tính khoảng cách $AB$:\n$$AB^2 = OA^2 + OB^2 - 2OA \\cdot OB \\cdot \\cos 60^\\circ$$\n$$AB^2 = 40^2 + 60^2 - 2(40)(60) \\cdot \\frac{1}{2} = 1600 + 3600 - 2400 = 2800$$\n$$AB = \\sqrt{2800} = 20\\sqrt{7}\\text{ (km)}$$\n\nChọn A.",
    "socraticHint": "Dùng định lý cosin tính cạnh thứ ba khi biết hai cạnh và góc xen giữa $60^\\circ$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1052,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Trong một cuộc khảo sát 100 học sinh về sở thích thể thao, kết quả cho thấy: 45 bạn thích bóng đá ($B$), 38 bạn thích bóng rổ ($R$), 35 bạn thích bơi lội ($L$). Biết có 18 bạn thích cả $B$ và $R$; 15 bạn thích cả $B$ và $L$; 12 bạn thích cả $R$ và $L$; và 8 bạn thích cả 3 môn. Hỏi có bao nhiêu bạn không thích môn nào trong ba môn trên? (Điền số nguyên):",
    "correctAnswer": "19",
    "detailedSolution": "Áp dụng công thức nguyên lý bao hàm - loại trừ cho hợp của 3 tập hợp:\n$$|B \\cup R \\cup L| = (|B| + |R| + |L|) - (|B \\cap R| + |B \\cap L| + |R \\cap L|) + |B \\cap R \\cap L|$$\n$$|B \\cup R \\cup L| = (45 + 38 + 35) - (18 + 15 + 12) + 8 = 118 - 45 + 8 = 81$$\nSố học sinh không thích môn nào trong 3 môn là:\n$$N = 100 - 81 = 19$$\n\nĐáp số: 19.",
    "socraticHint": "Áp dụng công thức nguyên lý bù trừ cho 3 tập hợp: $|A \\cup B \\cup C|$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1053,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Ở cuộc khảo sát trên, có bao nhiêu học sinh chỉ thích đúng một môn thể thao trong ba môn?",
    "options": [
      {
        "key": "A",
        "content": "$52$"
      },
      {
        "key": "B",
        "content": "$48$"
      },
      {
        "key": "C",
        "content": "$60$"
      },
      {
        "key": "D",
        "content": "$45$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Sử dụng biểu đồ Venn để bóc tách từng phần tử riêng biệt:\n- Số bạn chỉ thích bóng đá: $45 - (18 - 8) - (15 - 8) - 8 = 45 - 10 - 7 - 8 = 20$.\n- Số bạn chỉ thích bóng rổ: $38 - (18 - 8) - (12 - 8) - 8 = 38 - 10 - 4 - 8 = 16$.\n- Số bạn chỉ thích bơi lội: $35 - (15 - 8) - (12 - 8) - 8 = 35 - 7 - 4 - 8 = 16$.\nTổng số học sinh chỉ thích đúng 1 môn là:\n$$20 + 16 + 16 = 52$$\n\nChọn A.",
    "socraticHint": "Trừ đi các phần giao đôi một và giao ba để tìm số phần tử chỉ thuộc duy nhất một tập.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1054,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "quy_hoach_tuyen_tinh_bpt_2_an",
    "topicName": "Quy hoạch tuyến tính & BPT bậc nhất hai ẩn",
    "content": "Một khẩu phần ăn kết hợp hai loại thực phẩm $X$ và $Y$: mỗi đơn vị $X$ chứa 2 đơn vị protein và 1 đơn vị vitamin, giá 20 nghìn đồng; mỗi đơn vị $Y$ chứa 1 đơn vị protein và 3 đơn vị vitamin, giá 30 nghìn đồng. Yêu cầu dinh dưỡng tối thiểu mỗi ngày cần ít nhất 8 đơn vị protein và 9 đơn vị vitamin. Chi phí mua thực phẩm ít nhất mỗi ngày để thỏa mãn yêu cầu là:",
    "options": [
      {
        "key": "A",
        "content": "$120\\text{ nghìn đồng}$"
      },
      {
        "key": "B",
        "content": "$150\\text{ nghìn đồng}$"
      },
      {
        "key": "C",
        "content": "$180\\text{ nghìn đồng}$"
      },
      {
        "key": "D",
        "content": "$100\\text{ nghìn đồng}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $x, y$ lần lượt là số đơn vị thực phẩm $X$ và $Y$ ($x \\ge 0, y \\ge 0$).\nHệ bất phương trình ràng buộc:\n$$\\begin{cases} 2x + y \\ge 8 \\\\ x + 3y \\ge 9 \\end{cases}$$\nHàm chi phí cần cực tiểu hóa: $C(x, y) = 20x + 30y$ (nghìn đồng).\nMiền nghiệm là miền không bị chặn với các đỉnh:\n- Điểm $A(0; 8)$ (giao của $2x + y = 8$ với trục tung) $\\implies C(0, 8) = 20(0) + 30(8) = 240$ nghìn đồng.\n- Điểm $B(3; 2)$ (giao điểm của hai đường thẳng) $\\implies C(3, 2) = 20(3) + 30(2) = 60 + 60 = 120$ nghìn đồng.\n- Điểm $C(9; 0)$ (giao của $x + 3y = 9$ với trục hoành) $\\implies C(9, 0) = 20(9) + 30(0) = 180$ nghìn đồng.\nChi phí ít nhất là 120 nghìn đồng khi dùng 3 đơn vị $X$ và 2 đơn vị $Y$.\n\nChọn A.",
    "socraticHint": "Tìm tọa độ các đỉnh của miền nghiệm mở và so sánh giá trị của hàm mục tiêu tại các đỉnh đó.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1055,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Cho tam giác $ABC$ có trọng tâm $G$. Gọi $M$ là trung điểm của cạnh $BC$. Xét tính đúng/sai của các mệnh đề vector sau:",
    "correctAnswer": "D",
    "detailedSolution": "Điều kiện $|\u000bec{AB} + \\vec{AC}| = |\\vec{AB} - \\vec{AC}|$ tương đương với tam giác $ABC$ vuông tại $A$.\n\n\n\nChọn D.",
    "socraticHint": "Dùng quy tắc hình bình hành: hai đường chéo bằng nhau thì hình bình hành là hình chữ nhật.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Tổng vector $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$."
      },
      {
        "key": "B",
        "content": "Với điểm $O$ bất kỳ trong mặt phẳng, ta luôn có $\\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$."
      },
      {
        "key": "C",
        "content": "Tổng hai vector cạnh xuất phát từ đỉnh $A$: $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$."
      },
      {
        "key": "D",
        "content": "Nếu $|\u000bec{AB} + \\vec{AC}| = |\\vec{AB} - \\vec{AC}|$ thì tam giác $ABC$ là tam giác đều."
      }
    ]
  },
  {
    "id": 1056,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Cho tam giác đều $ABC$ có cạnh bằng $a = 6$. Tính tích vô hướng của hai vector $\\vec{AB} \\cdot \\vec{AC}$. (Điền số nguyên):",
    "correctAnswer": "18",
    "detailedSolution": "Áp dụng định nghĩa tích vô hướng của hai vector:\n$$\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| \\cdot |\\vec{AC}| \\cdot \\cos(\\vec{AB}, \\vec{AC})$$\nVì tam giác $ABC$ đều nên góc giữa hai vector là $60^\\circ$:\n$$\\vec{AB} \\cdot \\vec{AC} = 6 \\cdot 6 \\cdot \\cos 60^\\circ = 36 \\cdot \\frac{1}{2} = 18$$\n\nĐáp số: 18.",
    "socraticHint": "Tích vô hướng bằng tích hai độ dài nhân với cosin góc xen giữa.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1057,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Cho hình chữ nhật $ABCD$ có các cạnh $AB = 3$ và $AD = 4$. Độ dài của vector tổng $\\vec{AB} + \\vec{AD}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$7$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$12$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo quy tắc hình bình hành đối với hình chữ nhật $ABCD$:\n$$\\vec{AB} + \\vec{AD} = \\vec{AC}$$\nĐộ dài của vector tổng là độ dài đường chéo $AC$:\n$$|\\vec{AC}| = \\sqrt{AB^2 + AD^2} = \\sqrt{3^2 + 4^2} = 5$$\n\nChọn A.",
    "socraticHint": "Quy tắc hình bình hành cho $\\vec{AB} + \\vec{AD} = \\vec{AC}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1058,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Cho tam giác $ABC$ vuông cân tại $A$. Số đo góc giữa hai vector $\\vec{BA}$ và $\\vec{BC}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$45^\\circ$"
      },
      {
        "key": "B",
        "content": "$135^\\circ$"
      },
      {
        "key": "C",
        "content": "$90^\\circ$"
      },
      {
        "key": "D",
        "content": "$60^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hai vector $\\vec{BA}$ và $\\vec{BC}$ có chung gốc $B$.\nDo đó góc giữa hai vector này chính là góc $\\widehat{ABC}$ của tam giác.\nVì $\\triangle ABC$ vuông cân tại $A$ nên góc $\\widehat{ABC} = 45^\\circ$.\n\nChọn A.",
    "socraticHint": "Góc giữa hai vector chung gốc $B$ là góc $\\widehat{B}$ của tam giác.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1059,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Cho tam giác $ABC$ có $AB = 6, AC = 8$ và góc $\\widehat{A} = 30^\\circ$. Diện tích của tam giác $ABC$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "12",
    "detailedSolution": "Áp dụng công thức tính diện tích tam giác theo hai cạnh và góc xen giữa:\n$$S = \\frac{1}{2} AB \\cdot AC \\cdot \\sin A = \\frac{1}{2} \\cdot 6 \\cdot 8 \\cdot \\sin 30^\\circ = 24 \\cdot \\frac{1}{2} = 12$$\n\nĐáp số: 12.",
    "socraticHint": "Dùng công thức $S = \\frac{1}{2} b c \\sin A$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1060,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Cho tam giác $ABC$ có cạnh $a = 10$, góc $B = 45^\\circ$ và góc $C = 75^\\circ$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Góc $A = 60^\\circ$, bán kính ngoại tiếp $\\frac{10\\sqrt{3}}{3}$, cạnh $b = \\frac{10\\sqrt{6}}{3}$, và $c > a$.\n\n\n\nChọn D.",
    "socraticHint": "Tìm góc $A$ trước, sau đó dùng định lý sin.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Số đo của góc $A = 60^\\circ$."
      },
      {
        "key": "B",
        "content": "Bán kính đường tròn ngoại tiếp của tam giác là $R = \\frac{10\\sqrt{3}}{3}$."
      },
      {
        "key": "C",
        "content": "Độ dài cạnh $b$ bằng $\\frac{10\\sqrt{6}}{3}$."
      },
      {
        "key": "D",
        "content": "Độ dài cạnh $c$ nhỏ hơn độ dài cạnh $a$."
      }
    ]
  },
  {
    "id": 1061,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Cho tam giác $ABC$ có ba cạnh $a = 6, b = 8, c = 10$. Tính độ dài đường trung tuyến $m_c$ kẻ từ đỉnh $C$ đến cạnh $AB$. (Điền số nguyên):",
    "correctAnswer": "5",
    "detailedSolution": "Ta có $6^2 + 8^2 = 36 + 64 = 100 = 10^2$.\nTheo định lý Pytago đảo, tam giác $ABC$ vuông tại $C$ với cạnh huyền là $AB = c = 10$.\nĐường trung tuyến ứng với cạnh huyền trong tam giác vuông bằng một nửa cạnh huyền:\n$$m_c = \\frac{AB}{2} = \\frac{10}{2} = 5$$\n\nĐáp số: 5.",
    "socraticHint": "Nhận diện tam giác vuông và dùng tính chất đường trung tuyến ứng với cạnh huyền.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1062,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Cho hai tập hợp $A = [m; m+2]$ và $B = [1; 3]$. Tìm tất cả các giá trị thực của tham số $m$ để $A \\cap B = \\emptyset$:",
    "options": [
      {
        "key": "A",
        "content": "$m < -1$ hoặc $m > 3$"
      },
      {
        "key": "B",
        "content": "$-1 \\le m \\le 3$"
      },
      {
        "key": "C",
        "content": "$m \\le -1$ hoặc $m \\ge 3$"
      },
      {
        "key": "D",
        "content": "$-1 < m < 3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hai đoạn $A = [m; m+2]$ và $B = [1; 3]$ rời nhau ($A \\cap B = \\emptyset$) khi và chỉ khi:\n- Toàn bộ đoạn $A$ nằm hẳn bên trái đoạn $B$: $m + 2 < 1 \\iff m < -1$.\n- Hoặc toàn bộ đoạn $A$ nằm hẳn bên phải đoạn $B$: $m > 3$.\nVậy điều kiện là $m < -1$ hoặc $m > 3$.\n\nChọn A.",
    "socraticHint": "Hai đoạn thẳng trên trục số rời nhau khi điểm cuối đoạn này nhỏ hơn điểm đầu đoạn kia.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1063,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Cho hai tập hợp hữu hạn $A$ và $B$ thỏa mãn $|A| = 25, |B| = 30$ và $|A \\cap B| = 12$. Số phần tử của tập hợp hợp $|A \\cup B|$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "43",
    "detailedSolution": "Áp dụng công thức số phần tử của hợp hai tập hợp:\n$$|A \\cup B| = |A| + |B| - |A \\cap B| = 25 + 30 - 12 = 43$$\n\nĐáp số: 43.",
    "socraticHint": "$|A \\cup B| = |A| + |B| - |A \\cap B|$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1064,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Một trạm phát sóng di động đặt tại vị trí $A(2; 3)$ trong mặt phẳng tọa độ Oxy (đơn vị: km). Một con đường thẳng đi qua hai vị trí $M(0; 1)$ và $N(4; 4)$. Khoảng cách ngắn nhất từ trạm phát sóng đến con đường bằng:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}4\\text{ km}$"
      },
      {
        "key": "B",
        "content": "$0{,}5\\text{ km}$"
      },
      {
        "key": "C",
        "content": "$0{,}6\\text{ km}$"
      },
      {
        "key": "D",
        "content": "$1\\text{ km}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vector chỉ phương của đường thẳng $MN$ là $\\vec{MN} = (4; 3)$.\nVector pháp tuyến là $\\vec{n} = (3; -4)$.\nPhương trình đường thẳng $MN$:\n$$3(x - 0) - 4(y - 1) = 0 \\iff 3x - 4y + 4 = 0$$\nKhoảng cách ngắn nhất từ điểm $A(2; 3)$ đến đường thẳng là:\n$$d = \\frac{|3(2) - 4(3) + 4|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|6 - 12 + 4|}{5} = \\frac{|-2|}{5} = 0{,}4\\text{ (km)}$$\n\nChọn A.",
    "socraticHint": "Viết phương trình đường thẳng $MN$ rồi áp dụng công thức khoảng cách từ điểm đến đường thẳng.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1065,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Một trạm phát tín hiệu vô tuyến đặt tại điểm $A(1; 5)$ có bán kính phủ sóng là $R = \\sqrt{13}\\text{ km}$. Một con đường thẳng có phương trình $3x - 4y + 7 = 0$. Chiều dài của đoạn đường nằm trong vùng phủ sóng của trạm phát tín hiệu bằng bao nhiêu km? (Điền số nguyên):",
    "correctAnswer": "6",
    "detailedSolution": "Khoảng cách từ trạm $A(1; 5)$ đến con đường là:\n$$d = \\frac{|3(1) - 4(5) + 7|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3 - 20 + 7|}{5} = \\frac{|-10|}{5} = 2\\text{ (km)}$$\nĐoạn đường nằm trong vùng phủ sóng là dây cung của đường tròn phủ sóng cắt bởi đường thẳng.\nĐộ dài dây cung được tính theo định lý Pytago:\n$$L = 2\\sqrt{R^2 - d^2} = 2\\sqrt{(\\sqrt{13})^2 - 2^2} = 2\\sqrt{13 - 4} = 2\\sqrt{9} = 2 \\times 3 = 6\\text{ (km)}$$\n\nĐáp số: 6.",
    "socraticHint": "Độ dài đoạn đường là dây cung cắt bởi đường thẳng: $L = 2\\sqrt{R^2 - d^2}$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1066,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "quy_hoach_tuyen_tinh_bpt_2_an",
    "topicName": "Quy hoạch tuyến tính & BPT bậc nhất hai ẩn",
    "content": "Cho bất phương trình bậc nhất hai ẩn $2x - 3y + 6 \\ge 0$. Khẳng định nào sau đây là SAI?",
    "correctAnswer": "D",
    "detailedSolution": "Miền nghiệm là một nửa mặt phẳng chứa điểm $O$, không chứa điểm $M$, và không phải là đa giác hữu hạn.\n\n\n\nChọn D.",
    "socraticHint": "Kiểm tra tọa độ các điểm bằng cách thay trực tiếp vào bất phương trình.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true,
    "options": [
      {
        "key": "A",
        "content": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình."
      },
      {
        "key": "B",
        "content": "Đường thẳng bờ của miền nghiệm có phương trình là $2x - 3y + 6 = 0$."
      },
      {
        "key": "C",
        "content": "Điểm $M(1; 3)$ không thuộc miền nghiệm của bất phương trình."
      },
      {
        "key": "D",
        "content": "Miền nghiệm của bất phương trình là một hình đa giác có diện tích hữu hạn."
      }
    ]
  },
  {
    "id": 1067,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "quy_hoach_tuyen_tinh_bpt_2_an",
    "topicName": "Quy hoạch tuyến tính & BPT bậc nhất hai ẩn",
    "content": "Cho miền nghiệm của hệ bất phương trình: $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\ge 3 \\\\ x + 2y \\ge 4 \\end{cases}$. Giá trị nhỏ nhất của biểu thức $F(x, y) = 2x + 3y$ trên miền nghiệm này bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "7",
    "detailedSolution": "Miền nghiệm là miền không bị chặn có các đỉnh giao điểm:\n- Đỉnh $A(0; 3)$ (giao của $x+y=3$ với trục tung) $\\implies F(0, 3) = 2(0) + 3(3) = 9$.\n- Đỉnh $B(2; 1)$ (giao của hai đường thẳng $x+y=3$ và $x+2y=4$) $\\implies F(2, 1) = 2(2) + 3(1) = 4 + 3 = 7$.\n- Đỉnh $C(4; 0)$ (giao của $x+2y=4$ với trục hoành) $\\implies F(4, 0) = 2(4) + 3(0) = 8$.\nGiá trị nhỏ nhất của $F(x, y)$ là 7, đạt tại điểm $(2; 1)$.\n\nĐáp số: 7.",
    "socraticHint": "Tính giá trị của biểu thức $F$ tại 3 đỉnh của miền nghiệm.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1068,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Cho mệnh đề kéo theo: \"Nếu tứ giác $ABCD$ là hình thoi thì tứ giác $ABCD$ có hai đường chéo vuông góc với nhau\". Mệnh đề đảo của mệnh đề trên là:",
    "options": [
      {
        "key": "A",
        "content": "Nếu tứ giác $ABCD$ có hai đường chéo vuông góc với nhau thì tứ giác $ABCD$ là hình thoi."
      },
      {
        "key": "B",
        "content": "Nếu tứ giác $ABCD$ không là hình thoi thì tứ giác $ABCD$ không có hai đường chéo vuông góc."
      },
      {
        "key": "C",
        "content": "Nếu tứ giác $ABCD$ có hai đường chéo không vuông góc thì tứ giác $ABCD$ không là hình thoi."
      },
      {
        "key": "D",
        "content": "Tứ giác $ABCD$ có hai đường chéo vuông góc khi và chỉ khi nó là hình vuông."
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Mệnh đề có dạng $P \\implies Q$ (\"Nếu $P$ thì $Q$\").\nMệnh đề đảo có dạng $Q \\implies P$ (\"Nếu $Q$ thì $P$\"):\n\"Nếu tứ giác $ABCD$ có hai đường chéo vuông góc với nhau thì tứ giác $ABCD$ là hình thoi\".\n\nChọn A.",
    "socraticHint": "Mệnh đề đảo của \"Nếu $P$ thì $Q$\" là \"Nếu $Q$ thì $P$\".",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1069,
    "type": "fill",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "tap_hop_bieu_do_venn",
    "topicName": "Tập hợp & Biểu đồ Venn",
    "content": "Cho tập hợp $A = \\{1; 2; 3; 4; 5\\}$. Số tập hợp con gồm đúng 3 phần tử của tập hợp $A$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "10",
    "detailedSolution": "Mỗi tập hợp con gồm 3 phần tử của tập hợp có 5 phần tử là một tổ hợp chập 3 của 5 phần tử:\n$$C_5^3 = \\frac{5!}{3! \\cdot 2!} = \\frac{5 \\cdot 4}{2} = 10$$\n\nĐáp số: 10.",
    "socraticHint": "Số tập con $k$ phần tử của tập hợp $n$ phần tử là tổ hợp $C_n^k$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  },
  {
    "id": 1070,
    "type": "mcq",
    "chapterId": "chuong_6_toan_lop_10",
    "chapterName": "Chuyên đề 10: Tổ hợp, Xác suất cổ điển & Quy hoạch tuyến tính (Toán 10)",
    "topicId": "he_thuc_luong_tam_giac_thuc_te",
    "topicName": "Hệ thức lượng trong tam giác & Ứng dụng thực tế",
    "content": "Một học sinh đo chiều dài của một chiếc bàn học và thu được kết quả đo là $L = 120\\text{ cm} \\pm 0{,}6\\text{ cm}$. Sai số tương đối của phép đo bằng:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}5\\%$"
      },
      {
        "key": "B",
        "content": "$0{,}05\\%$"
      },
      {
        "key": "C",
        "content": "$5\\%$"
      },
      {
        "key": "D",
        "content": "$0{,}6\\%$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Sai số tuyệt đối là $\\Delta L = 0{,}6\\text{ cm}$.\nGiá trị đo là $L = 120\\text{ cm}$.\nSai số tương đối của phép đo được tính theo công thức:\n$$\\delta = \\frac{\\Delta L}{L} = \\frac{0{,}6}{120} = 0{,}005 = 0{,}5\\%$$\n\nChọn A.",
    "socraticHint": "Sai số tương đối $\\delta = \\frac{\\Delta d}{|d|} \\times 100\\%$.",
    "difficulty": "Vận dụng",
    "track": "THPTQG",
    "latexVerified": true,
    "answerVerified": true
  }
];
