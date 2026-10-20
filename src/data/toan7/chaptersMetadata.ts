import { ChapterInfo, MicroTopicInfo } from '../../types/exam';

export const TOAN7_CHAPTERS_METADATA: ChapterInfo[] = [
  {
    id: 'chuong_1_so_huu_ti',
    name: 'Chương 1: Số hữu tỉ',
    shortName: 'Số hữu tỉ',
    description: 'Tập hợp các số hữu tỉ, bốn phép tính, lũy thừa số mũ tự nhiên, quy tắc dấu ngoặc và chuyển vế.',
    color: '#0284c7', // Sky
    topics: [
      {
        id: 'tap_hop_so_huu_ti',
        name: 'Tập hợp các số hữu tỉ & Biểu diễn trên trục số',
        shortName: 'Tập hợp số hữu tỉ',
        chapterId: 'chuong_1_so_huu_ti',
        description: 'Định nghĩa số hữu tỉ a/b (b khác 0), biểu diễn số hữu tỉ trên trục số, số đối, so sánh hai số hữu tỉ.',
      },
      {
        id: 'phep_tinh_so_huu_ti',
        name: 'Cộng, trừ, nhân, chia số hữu tỉ',
        shortName: 'Phép tính số hữu tỉ',
        chapterId: 'chuong_1_so_huu_ti',
        description: 'Quy tắc cộng trừ nhân chia, tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng.',
      },
      {
        id: 'luy_thua_so_huu_ti',
        name: 'Lũy thừa với số mũ tự nhiên của số hữu tỉ',
        shortName: 'Lũy thừa số hữu tỉ',
        chapterId: 'chuong_1_so_huu_ti',
        description: 'Tích, thương hai lũy thừa cùng cơ số, lũy thừa của lũy thừa, lũy thừa của một tích và một thương.',
      },
      {
        id: 'quy_tac_dau_ngoac_chuyen_ve',
        name: 'Quy tắc dấu ngoặc & Quy tắc chuyển vế',
        shortName: 'Quy tắc ngoặc & chuyển vế',
        chapterId: 'chuong_1_so_huu_ti',
        description: 'Bỏ ngoặc khi có dấu cộng/trừ đằng trước, chuyển vế đổi dấu và thứ tự thực hiện phép tính.',
      },
    ],
  },
  {
    id: 'chuong_2_so_thuc',
    name: 'Chương 2: Số thực & Căn bậc hai',
    shortName: 'Số thực',
    description: 'Số thập phân vô hạn tuần hoàn, số vô tỉ, căn bậc hai số học, tập hợp số thực và giá trị tuyệt đối.',
    color: '#8b5cf6', // Violet
    topics: [
      {
        id: 'so_vo_ti_can_bac_hai',
        name: 'Số vô tỉ & Căn bậc hai số học',
        shortName: 'Căn bậc hai số học',
        chapterId: 'chuong_2_so_thuc',
        description: 'Khái niệm căn bậc hai số học của số không âm, phân biệt số hữu tỉ và số vô tỉ.',
      },
      {
        id: 'tap_hop_so_thuc',
        name: 'Tập hợp số thực & Trục số thực',
        shortName: 'Tập hợp số thực',
        chapterId: 'chuong_2_so_thuc',
        description: 'Khái niệm số thực, biểu diễn số thực trên trục số, thứ tự trong tập hợp số thực.',
      },
      {
        id: 'gia_tri_tuyet_doi_so_thuc',
        name: 'Giá trị tuyệt đối của một số thực',
        shortName: 'Giá trị tuyệt đối',
        chapterId: 'chuong_2_so_thuc',
        description: 'Định nghĩa giá trị tuyệt đối |x|, tính chất |x| >= 0, các bài toán tìm x chứa dấu giá trị tuyệt đối.',
      },
      {
        id: 'lam_tron_va_uoc_luong',
        name: 'Làm tròn số & Ước lượng kết quả',
        shortName: 'Làm tròn số',
        chapterId: 'chuong_2_so_thuc',
        description: 'Quy tắc làm tròn số thập phân, ước lượng độ chính xác trong các bài toán đo lường đời sống.',
      },
    ],
  },
  {
    id: 'chuong_3_goc_va_duong_thang_song_song',
    name: 'Chương 3: Góc & Đường thẳng song song',
    shortName: 'Góc & ĐT song song',
    description: 'Hai góc đối đỉnh, kề bù, tia phân giác, dấu hiệu song song, tiên đề Euclid, định lý và chứng minh.',
    color: '#059669', // Emerald
    topics: [
      {
        id: 'goc_doi_dinh_ke_bu_phan_giac',
        name: 'Góc ở vị trí đặc biệt & Tia phân giác',
        shortName: 'Góc đặc biệt & Phân giác',
        chapterId: 'chuong_3_goc_va_duong_thang_song_song',
        description: 'Hai góc kề bù, hai góc đối đỉnh, tính chất tia phân giác của một góc.',
      },
      {
        id: 'dau_hieu_song_song_tien_de_euclid',
        name: 'Hai đường thẳng song song & Tiên đề Euclid',
        shortName: 'Đường thẳng song song',
        chapterId: 'chuong_3_goc_va_duong_thang_song_song',
        description: 'Góc so le trong, đồng vị, trong cùng phía, dấu hiệu nhận biết hai đường thẳng song song.',
      },
      {
        id: 'dinh_ly_va_chung_minh',
        name: 'Định lí & Phương pháp chứng minh hình học',
        shortName: 'Định lí & Chứng minh',
        chapterId: 'chuong_3_goc_va_duong_thang_song_song',
        description: 'Cấu trúc giả thiết - kết luận của một định lí, cách lập luận suy diễn logic hình học chặt chẽ.',
      },
    ],
  },
  {
    id: 'chuong_4_tam_giac_bang_nhau',
    name: 'Chương 4: Tam giác bằng nhau',
    shortName: 'Tam giác bằng nhau',
    description: 'Tổng ba góc của tam giác, các trường hợp bằng nhau c-c-c, c-g-c, g-c-g, tam giác vuông và tam giác cân.',
    color: '#dc2626', // Red
    topics: [
      {
        id: 'tong_cac_goc_trong_tam_giac',
        name: 'Tổng các góc trong một tam giác',
        shortName: 'Tổng góc tam giác',
        chapterId: 'chuong_4_tam_giac_bang_nhau',
        description: 'Định lý tổng ba góc bằng 180 độ, tính chất góc ngoài của một tam giác.',
      },
      {
        id: 'hai_tam_giac_bang_nhau_thuong',
        name: 'Ba trường hợp bằng nhau của tam giác (c.c.c, c.g.c, g.c.g)',
        shortName: 'Các TH bằng nhau',
        chapterId: 'chuong_4_tam_giac_bang_nhau',
        description: 'Chứng minh hai tam giác bằng nhau theo cạnh-cạnh-cạnh, cạnh-góc-cạnh, góc-cạnh-góc.',
      },
      {
        id: 'tam_giac_vuong_bang_nhau',
        name: 'Các trường hợp bằng nhau của tam giác vuông',
        shortName: 'Tam giác vuông',
        chapterId: 'chuong_4_tam_giac_bang_nhau',
        description: 'Cạnh huyền - góc nhọn, cạnh huyền - cạnh góc vuông, hai cạnh góc vuông.',
      },
      {
        id: 'tam_giac_can_duong_trung_truc',
        name: 'Tam giác cân & Đường trung trực của đoạn thẳng',
        shortName: 'Tam giác cân & Trung trực',
        chapterId: 'chuong_4_tam_giac_bang_nhau',
        description: 'Định nghĩa, tính chất, dấu hiệu nhận biết tam giác cân, tam giác đều; định lý đường trung trực.',
      },
    ],
  },
  {
    id: 'chuong_5_thong_ke_thu_thap_du_lieu',
    name: 'Chương 5: Thu thập & Biểu diễn dữ liệu',
    shortName: 'Thu thập dữ liệu',
    description: 'Thu thập, phân loại dữ liệu, biểu đồ hình quạt tròn và biểu đồ đoạn thẳng.',
    color: '#d97706', // Amber
    topics: [
      {
        id: 'thu_thap_phan_loai_du_lieu',
        name: 'Thu thập & Phân loại dữ liệu',
        shortName: 'Phân loại dữ liệu',
        chapterId: 'chuong_5_thong_ke_thu_thap_du_lieu',
        description: 'Phương pháp thu thập dữ liệu, dữ liệu định tính, dữ liệu định lượng, tính hợp lý của dữ liệu.',
      },
      {
        id: 'bieu_do_quat_tron_doan_thang',
        name: 'Biểu đồ hình quạt tròn & Biểu đồ đoạn thẳng',
        shortName: 'Biểu đồ quạt & đoạn thẳng',
        chapterId: 'chuong_5_thong_ke_thu_thap_du_lieu',
        description: 'Đọc, phân tích và biểu diễn số liệu bằng biểu đồ hình quạt tròn và biểu đồ đoạn thẳng.',
      },
    ],
  },
  {
    id: 'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
    name: 'Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ',
    shortName: 'Tỉ lệ thức',
    description: 'Tỉ lệ thức, tính chất dãy tỉ số bằng nhau, đại lượng tỉ lệ thuận, đại lượng tỉ lệ nghịch.',
    color: '#2563eb', // Blue
    topics: [
      {
        id: 'ti_le_thuc_day_ti_so_bang_nhau',
        name: 'Tỉ lệ thức & Dãy tỉ số bằng nhau',
        shortName: 'Dãy tỉ số bằng nhau',
        chapterId: 'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
        description: 'Tính chất a/b = c/d <=> ad = bc, tính chất dãy tỉ số bằng nhau và ứng dụng tìm x, y, z.',
      },
      {
        id: 'dai_luong_ti_le_thuan_nghich',
        name: 'Đại lượng tỉ lệ thuận & Tỉ lệ nghịch',
        shortName: 'Tỉ lệ thuận & nghịch',
        chapterId: 'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
        description: 'Công thức y = kx, y = a/x; giải bài toán chia phần tỉ lệ trong thực tế và khoa học.',
      },
    ],
  },
  {
    id: 'chuong_7_bieu_thuc_dai_so_va_da_thuc',
    name: 'Chương 7: Biểu thức đại số & Đa thức một biến',
    shortName: 'Đa thức một biến',
    description: 'Biểu thức đại số, đa thức một biến, phép cộng trừ nhân chia và nghiệm của đa thức một biến.',
    color: '#ec4899', // Pink
    topics: [
      {
        id: 'bieu_thuc_dai_so_khai_niem',
        name: 'Biểu thức đại số & Đa thức một biến',
        shortName: 'Đa thức một biến',
        chapterId: 'chuong_7_bieu_thuc_dai_so_va_da_thuc',
        description: 'Thu gọn, sắp xếp lũy thừa giảm dần, bậc của đa thức, hệ số cao nhất, hệ số tự do.',
      },
      {
        id: 'phep_tinh_da_thuc_mot_bien',
        name: 'Cộng, trừ, nhân, chia đa thức một biến',
        shortName: 'Phép tính đa thức',
        chapterId: 'chuong_7_bieu_thuc_dai_so_va_da_thuc',
        description: 'Quy tắc cộng trừ đa thức theo cột dọc/hàng ngang, nhân đa thức, chia đa thức một biến.',
      },
      {
        id: 'nghiem_cua_da_thuc_mot_bien',
        name: 'Nghiệm của đa thức một biến',
        shortName: 'Nghiệm đa thức',
        chapterId: 'chuong_7_bieu_thuc_dai_so_va_da_thuc',
        description: 'Khái niệm nghiệm P(x) = 0, tìm nghiệm của đa thức, chứng minh đa thức không có nghiệm.',
      },
    ],
  },
  {
    id: 'chuong_8_bien_co_va_xac_suat',
    name: 'Chương 8: Làm quen với biến cố & Xác suất',
    shortName: 'Xác suất biến cố',
    description: 'Biến cố ngẫu nhiên, biến cố chắc chắn, biến cố không thể và xác suất của biến cố trong trò chơi đơn giản.',
    color: '#06b6d4', // Cyan
    topics: [
      {
        id: 'khai_niem_bien_co_ngau_nhien',
        name: 'Biến cố chắc chắn, không thể & ngẫu nhiên',
        shortName: 'Biến cố ngẫu nhiên',
        chapterId: 'chuong_8_bien_co_va_xac_suat',
        description: 'Nhận biết các loại biến cố trong đời sống và các trò chơi gieo xúc xắc, tung đồng xu.',
      },
      {
        id: 'xac_suat_bien_co_don_gian',
        name: 'Xác suất của biến cố trong trò chơi đơn giản',
        shortName: 'Xác suất đơn giản',
        chapterId: 'chuong_8_bien_co_va_xac_suat',
        description: 'Tính xác suất biến cố bằng tỉ số giữa số kết quả thuận lợi và tổng số kết quả có thể xảy ra.',
      },
    ],
  },
  {
    id: 'chuong_9_quan_he_trong_tam_giac_dong_quy',
    name: 'Chương 9: Quan hệ trong tam giác & Các đường đồng quy',
    shortName: 'Đường đồng quy',
    description: 'Quan hệ góc - cạnh đối diện, đường vuông góc - đường xiên, BĐT tam giác, sự đồng quy của 4 loại đường.',
    color: '#10b981', // Emerald
    topics: [
      {
        id: 'quan_he_goc_canh_bdt_tam_giac',
        name: 'Quan hệ góc - cạnh & Bất đẳng thức tam giác',
        shortName: 'BĐT tam giác',
        chapterId: 'chuong_9_quan_he_trong_tam_giac_dong_quy',
        description: 'Góc đối diện cạnh lớn hơn thì lớn hơn, bất đẳng thức tam giác: |b - c| < a < b + c.',
      },
      {
        id: 'bon_duong_dong_quy_trong_tam_giac',
        name: 'Sự đồng quy của trung tuyến, phân giác, trung trực, đường cao',
        shortName: 'Bốn đường đồng quy',
        chapterId: 'chuong_9_quan_he_trong_tam_giac_dong_quy',
        description: 'Trọng tâm G (tỉ lệ 2/3), trực tâm H, tâm đường tròn ngoại tiếp, tâm đường tròn nội tiếp.',
      },
    ],
  },
  {
    id: 'chuong_10_hinh_khoi_trong_thuc_tien',
    name: 'Chương 10: Hình khối trong thực tiễn',
    shortName: 'Hình khối thực tiễn',
    description: 'Hình hộp chữ nhật, hình lập phương, hình lăng trụ đứng tam giác và tứ giác.',
    color: '#6366f1', // Indigo
    topics: [
      {
        id: 'hinh_hop_chu_nhat_lap_phuong',
        name: 'Hình hộp chữ nhật & Hình lập phương',
        shortName: 'Hộp chữ nhật & Lập phương',
        chapterId: 'chuong_10_hinh_khoi_trong_thuc_tien',
        description: 'Các đỉnh, cạnh, góc, mặt bên, diện tích xung quanh Sxq = 2(a+b)h, thể tích V = a.b.h.',
      },
      {
        id: 'hinh_lang_tru_dung',
        name: 'Hình lăng trụ đứng tam giác & tứ giác',
        shortName: 'Lăng trụ đứng',
        chapterId: 'chuong_10_hinh_khoi_trong_thuc_tien',
        description: 'Đặc điểm mặt đáy, mặt bên, diện tích xung quanh Sxq = C_đáy . h, thể tích V = S_đáy . h.',
      },
    ],
  },
];

export const TOAN7_MICRO_TOPICS_METADATA: MicroTopicInfo[] = TOAN7_CHAPTERS_METADATA.flatMap(
  (c) => c.topics
);
