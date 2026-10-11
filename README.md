# Luyện thi HSA cùng TontonYuta (HSA_Yuta)

Nền tảng ôn luyện thi **Đánh giá năng lực ĐHQGHN (HSA)** môn **Toán học & Tư duy định lượng** theo chương trình giáo dục phổ thông mới **GDPT 2018**.

Ứng dụng được thiết kế tối giản, sạch sẽ, không quảng cáo, mô phỏng 100% giao diện phòng thi máy tính (CBT) của Trung tâm Khảo thí ĐHQGHN, tích hợp công thức toán học chuẩn KaTeX, xáo trộn độ khó tăng dần và phân tích năng lực chi tiết kèm Google Apps Script Webhook.

---

## 🌟 Điểm Nổi Bật

1. **Trải nghiệm phòng thi CBT chân thực (Zen Focus Mode):**
   - Đầy đủ 50 câu trong 75 phút (35 câu trắc nghiệm 4 lựa chọn + 15 câu điền đáp số ngắn).
   - Đồng hồ bấm giờ tròn SVG (Countdown Timer Ring) cảnh báo màu ở 10 phút và 3 phút cuối.
   - Bảng 50 câu hỏi có thể **đóng/mở linh hoạt**:
     - Khi mở: Quan sát trực quan trạng thái từng câu (Đã làm, Chưa làm, Gắn cờ, Đang làm).
     - Khi đóng: Chuyển sang chế độ tập trung 100% không gian làm bài, thanh điều hướng nổi bên mép phải giúp mở lại tức thì bằng 1 click.
   - Hỗ trợ phím tắt bàn phím:
     - `A`, `B`, `C`, `D` hoặc `1`, `2`, `3`, `4`: Chọn nhanh phương án trắc nghiệm.
     - `←` / `→`: Chuyển câu trước / câu sau.
     - `F`: Đánh dấu cờ cần xem lại.
   - Bàn phím toán học ảo chuyên dụng (Virtual Math Keyboard) hỗ trợ phân số (`/`), số thập phân, số âm cho câu điền đáp số.

2. **Xáo trộn câu hỏi & đáp án theo độ khó tăng dần:**
   - Trong mỗi chuyên đề và trong mỗi đề thi, các câu hỏi luôn được sắp xếp theo đúng trình tự độ khó tăng dần:
     $$\text{Nhận biết} \longrightarrow \text{Thông hiểu} \longrightarrow \text{Vận dụng} \longrightarrow \text{Vận dụng cao}$$
   - Câu dễ luôn xuất hiện trước, câu khó xếp sau (tuyệt đối không xếp câu quá khó lên trước).
   - Các câu hỏi bên trong mỗi bậc độ khó được xáo trộn ngẫu nhiên mỗi lần làm bài.
   - Phương án $A, B, C, D$ của từng câu trắc nghiệm được shuffle ngẫu nhiên và tự động ánh xạ lại `correctAnswer`.
   - Nút **"Xáo trộn & Làm lại"** tiện lợi ngay trong giao diện luyện tập.

3. **Ngân hàng 250 câu hỏi chuẩn hóa chia thành 10 Chương lớn & 30 Chuyên đề vi mô:**
   - Chương 1: Khảo sát hàm số (Đơn điệu có tham số, Cực trị có tham số, Max-Min, Tiệm cận xiên, Tiếp tuyến, Tương giao)
   - Chương 2: Mũ & Logarit (Rút gọn, Phương trình & BPT mũ, Phương trình & BPT logarit)
   - Chương 3: Nguyên hàm & Tích phân (Đổi biến, Từng phần, Ứng dụng diện tích & thể tích)
   - Chương 4: Hình học không gian (Góc khoảng cách, Thể tích chóp lăng trụ, Khối tròn xoay)
   - Chương 5: Phương pháp tọa độ Oxyz (Hệ trục, Mặt phẳng, Đường thẳng & Vị trí tương đối)
   - Chương 6: Toán Lớp 10 (Tập hợp Venn, BPT 2 ẩn, Hệ thức lượng, Elip & Hyperbol)
   - Chương 7: Dãy số & Cấp số (Cấp số cộng, Cấp số nhân, Giới hạn dãy số)
   - Chương 8: Xác suất & Thống kê (Xác suất cổ điển, Xác suất có điều kiện, Công thức Bayes, Thống kê ghép nhóm)
   - Chương 9: Lượng giác (Công thức biến đổi, Phương trình lượng giác)
   - Chương 10: Toán thực tế & Tối ưu hóa (Mô hình kinh tế, Tối ưu hình học)

4. **Tích hợp Google Sheets & Tự động gửi Email báo cáo (Google Apps Script):**
   - Tự động ghi kết quả vào Google Sheet `KetQua_HSA_TontonYuta`.
   - Tự động gửi email báo cáo chi tiết về cho Giáo viên/Admin ngay khi học sinh nộp bài.
   - Phân tích chi tiết: Tổng điểm, xếp loại, thời gian làm bài, bảng năng lực theo chuyên đề, và **danh sách chi tiết các câu học sinh làm sai** để giáo viên hỗ trợ kịp thời.
   - Chi tiết hướng dẫn cài đặt xem tại: [`README_GAS_GUIDE.md`](./README_GAS_GUIDE.md).

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Cục Bộ

### Yêu cầu môi trường
- **Node.js**: v18+ (khuyến nghị v20 hoặc v22)
- **npm** / **yarn** / **pnpm** / **bun**

### Các bước thực hiện

```bash
# 1. Clone repository
git clone https://github.com/TontonYuta/HSA_Yuta.git
cd HSA_Yuta

# 2. Cài đặt các gói phụ thuộc
npm install

# 3. Khởi chạy máy chủ phát triển
npm run dev

# 4. Mở trình duyệt tại:
# http://localhost:3000
```

### Các lệnh hữu ích khác
```bash
# Kiểm tra lỗi kiểu TypeScript
npm run lint

# Đóng gói sản phẩm cho production
npm run build

# Chạy bản xem trước production
npm run preview
```

---

## 📁 Cấu Trúc Mã Nguồn

```text
HSA_Yuta/
├── README.md                 # Tài liệu tổng quan dự án
├── README_GAS_GUIDE.md       # Hướng dẫn chi tiết Google Apps Script Webhook
├── index.html                # HTML gốc nạp font Plus Jakarta Sans & KaTeX CDN
├── package.json              # Khai báo phụ thuộc chuẩn (Vite, React 19, KaTeX, Tailwind v4)
├── vite.config.ts            # Cấu hình Vite & Tailwind v4
└── src/
    ├── App.tsx               # Root component điều phối chế độ (Exam, Practice, Bank, Results)
    ├── index.css             # Tailwind v4, KaTeX CSS, micro-animations & dark/light theme
    ├── main.tsx              # Điểm khởi chạy React
    ├── types/
    │   └── exam.ts           # Định nghĩa TypeScript cho Câu hỏi, Bài thi, Báo cáo
    ├── utils/
    │   ├── scoring.ts        # Thuật toán chấm điểm, xử lý phân số/số thực, báo cáo năng lực
    │   └── questionRandomizer.ts # Sắp xếp độ khó tăng dần, shuffle và đảo phương án A/B/C/D
    ├── components/
    │   ├── Navbar.tsx             # Thanh điều hướng 52px chuẩn, timer, chuyển theme Sáng/Tối
    │   ├── ExamIntro.tsx          # Màn hình chọn đề thi và nhập tên thí sinh
    │   ├── ExamSimulation.tsx     # Phòng thi CBT Zen Focus Mode (hỗ trợ phím tắt, bảng 50 câu)
    │   ├── QuestionPalette.tsx    # Bảng 50 câu hỏi đóng mở linh hoạt
    │   ├── CountdownTimerRing.tsx # Đồng hồ đếm ngược SVG mượt mà
    │   ├── ExamTimer.tsx          # Bộ tính giờ thi với cảnh báo đổi màu
    │   ├── MathRenderer.tsx       # Bộ render KaTeX tối ưu cho biểu thức toán học
    │   ├── VirtualMathKeyboard.tsx# Bàn phím số ảo chuyên dụng cho câu điền đáp số
    │   ├── TopicPractice.tsx      # Chế độ luyện tập 10 chương & 30 chuyên đề vi mô
    │   ├── QuestionBankView.tsx   # Ngân hàng 250 câu hỏi có bộ lọc và tìm kiếm
    │   ├── ExamResults.tsx        # Bảng điểm và phân tích năng lực kèm lời giải chi tiết
    │   └── WebhookModal.tsx       # Hướng dẫn cấu hình Google Sheets & Email cho giáo viên
    └── data/
        └── topics/                # 10 Chương & 30 Chuyên đề vi mô (250 câu hỏi)
            ├── index.ts           # Tổng hợp 250 câu hỏi và 6 bộ đề chuẩn HSA
            ├── chuong1_hamso.ts   # Khảo sát hàm số (46 câu)
            ├── chuong2_mulog.ts   # Mũ & Logarit (19 câu)
            ├── chuong3_nguyenham.ts # Nguyên hàm & Tích phân (27 câu)
            ├── chuong4_hinhhoc.ts # Hình học không gian (25 câu)
            ├── chuong5_oxyz.ts    # Tọa độ Oxyz (23 câu)
            ├── chuong6_lop10.ts   # Toán Lớp 10 (18 câu)
            ├── chuong7_dayso.ts   # Dãy số & Cấp số (18 câu)
            ├── chuong8_xacsuat.ts # Xác suất & Thống kê (36 câu)
            ├── chuong9_luonggiac.ts # Lượng giác (14 câu)
            └── chuong10_toanthucte.ts # Toán thực tế & Tối ưu (24 câu)
```

---

## 📝 Bản Quyền & Giấy Phép
Dự án được xây dựng phục vụ cộng đồng học sinh ôn luyện kỳ thi Đánh giá năng lực ĐHQGHN (HSA) theo chương trình GDPT 2018.
Phát triển bởi **TontonYuta**.
