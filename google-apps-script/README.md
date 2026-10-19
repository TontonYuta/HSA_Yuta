# Hướng Dẫn Cài Đặt Webhook Google Apps Script & Google Sheets
## Dự án: Luyện Thi Toán THPT Quốc Gia 2027 & ĐGNL HSA - TontonYuta

Hệ thống Webhook Google Apps Script (GAS) tự động đồng bộ kết quả bài thi của học sinh vào Google Sheets và gửi email thông báo chi tiết cho Giáo viên & Thí sinh ngay khi hoàn thành bài thi.

---

### 🌟 Tính Năng Nổi Bật v2.0
1. **Hỗ trợ trọn vẹn 2 Chế độ thi**:
   - **THPTQG 2027 (GDPT 2018)**: Ghi vào Sheet `KetQua_THPTQG` (Màu hồng đỏ `#e11d48`), tự động quy đổi điểm sang thang điểm 10 và tỷ lệ %, xếp loại mục tiêu 9+, 8+, 7+,...
   - **HSA ĐHQGHN**: Ghi vào Sheet `KetQua_HSA` (Màu xanh dương `#0284c7`), thang điểm 50, phân tích chi tiết MCQ và Điền số.
2. **Khởi tạo tự động (`setupSheets`)**:
   - Tự động tạo 4 sheet: `KetQua_THPTQG`, `KetQua_HSA`, `DanhSach_HocSinh`, `LuuLuong_TruyCap`.
   - Dòng tiêu đề in đậm, nền màu sắc nét, căn giữa, cố định dòng đầu tiên (freeze header).
3. **Health Check trực quan (`doGet`)**:
   - Khi mở link Webhook trên trình duyệt, hệ thống hiển thị trang giao diện xác nhận trạng thái Webhook đang hoạt động bình thường, không còn báo lỗi `Script function not found: doGet`.
4. **Email Báo Cáo Chuyên Sâu**:
   - Tự động gửi email kết quả cho **Giáo viên** và bản sao phiếu điểm cho **Học sinh** (nếu học sinh có nhập email).
   - Bảng phân tích tỷ lệ phần trăm từng chuyên đề.
   - Bảng danh sách chi tiết các câu làm **SAI** kèm đáp án của thí sinh vs đáp án chính xác.
   - Giám sát liêm chính: số lần rời tab khi thi và mã băm Checksum chống gian lận.

---

### 📋 Hướng Dẫn Cài Đặt 5 Bước

#### Bước 1: Mở Google Sheet mới
- Truy cập: [https://sheets.new](https://sheets.new) để tạo một bảng tính Google Sheet mới.
- Đặt tên cho bảng tính, ví dụ: `Ket_Qua_Thi_THPTQG_HSA_2027`.

#### Bước 2: Mở Apps Script Editor
- Trên thanh menu của Google Sheet, bấm: **Tiện ích mở rộng** (Extensions) -> **Apps Script**.

#### Bước 3: Dán Mã Nguồn
- Xóa toàn bộ nội dung trong file `Code.gs`.
- Sao chép toàn bộ nội dung từ file [`google-apps-script/Code.gs`](./Code.gs) dán vào.
- Thay đổi email của bạn tại dòng:
  ```javascript
  const DEFAULT_TEACHER_EMAIL = "email_cua_ban@gmail.com";
  ```
- Nhấn **Ctrl + S** (hoặc biểu tượng Lưu) để lưu lại mã nguồn.

#### Bước 4: (Tùy chọn) Chạy hàm Khởi Tạo Bảng Tính
- Trên thanh công cụ Apps Script, chọn hàm `setupSheets` trong danh sách hàm rồi bấm **Chạy** (Run).
- Cấp quyền cho Script nếu Google hỏi xác thực. Khi chạy xong, quay lại Google Sheet bạn sẽ thấy các tab `KetQua_THPTQG`, `KetQua_HSA`, `DanhSach_HocSinh`, `LuuLuong_TruyCap` đã được tạo sẵn cực đẹp!

#### Bước 5: Triển Khai Web App
1. Nhấn nút màu xanh **Triển khai** (Deploy) ở góc trên bên phải -> Chọn **Tùy chọn triển khai mới** (New deployment).
2. Nhấn vào biểu tượng bánh răng **Chọn loại** (Select type) -> Chọn **Ứng dụng web** (Web app).
3. Cấu hình chính xác như sau:
   - **Mô tả**: `HSA & THPTQG Webhook v2.0`
   - **Thực thi dưới dạng** (*Execute as*): **Tôi** (*Me*)
   - **Ai có quyền truy cập** (*Who has access*): **Bất kỳ ai** (*Anyone*) *(Lưu ý: Bắt buộc chọn "Bất kỳ ai" để web app có thể gửi kết quả mà không bị lỗi xác thực)*.
4. Bấm **Triển khai** (Deploy) -> Cấp quyền truy cập cho tài khoản Google của bạn.
5. Sao chép **URL Ứng dụng web** (có dạng `https://script.google.com/macros/s/.../exec`).

#### Bước 6: Dán URL vào Webtest
- Mở ứng dụng webtest, bấm nút **Đồng Bộ Google Sheets & Webhook** (hoặc biểu tượng Webhook trên thanh menu).
- Dán URL vừa sao chép vào ô **Đường link Webhook**.
- Bấm nút **Kiểm tra kết nối** để kiểm tra đồng bộ, sau đó bấm **Lưu cấu hình**.
