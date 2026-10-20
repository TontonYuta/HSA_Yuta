# AGENTS & WORKFLOW GUIDELINES

Tài liệu quy định bắt buộc cho tất cả các AI Agents và Pair Programmer làm việc trên repository này:

---

## 1. Quy Trình Git & Triển Khai (BẮT BUỘC)
- **Tự động Commit & Push**: Mỗi lần hoàn thành sửa đổi (code, dữ liệu, fix bug, bổ sung tính năng), Agent **BẮT BUỘC PHẢI THỰC HIỆN COMMIT VÀ PUSH NGAY LẬP TỨC** lên remote GitHub (`git add .`, `git commit -m "..."`, `git push origin <branch>`).
- **Xác thực trước khi Push**:
  1. `npm run validate:latex`: 100% câu hỏi đạt 0 lỗi cú pháp KaTeX.
  2. `npm run lint` (`tsc --noEmit`): 0 lỗi TypeScript.
  3. `npm run build`: Bản build Vite production thành công không có lỗi runtime/compile.

---

## 2. Quy Chuẩn Cấu Trúc File & Dữ Liệu
- **Module hóa dữ liệu câu hỏi**: Mỗi file `.ts` trong `src/data/` chỉ chứa tối đa **$\le 30$ câu hỏi** và độ dài file không vượt quá **600 dòng**.
- **100% Đồng bộ Ngân hàng đề**: Mọi câu hỏi xuất hiện trong bất kỳ đề thi (`examSets`) hoặc chuyên đề nào đều phải được đăng ký và xuất hiện trong `MASTER_QUESTIONS_DATABASE` (`TOAN7_QUESTIONS_DATABASE` / `HSA_QUESTIONS_DATABASE`).
- **Phân tách Track nghiêm ngặt**:
  * Phổ Thông (`PHOTHONG`): Bám sát SGK chuẩn GDPT 2018 (Chương 1 đến 10).
  * Nâng Cao (`NANGCAO`): 100% câu hỏi phân hóa cao, học sinh giỏi (HSG), thi chuyên, tuyệt đối không đưa các câu nhận biết/cơ bản vào track nâng cao.
