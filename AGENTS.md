# Hướng Dẫn Phát Triển & Quy Chuẩn Kiến Trúc Dành Cho AI Agent (AGENTS.md)

Chào mừng các AI Agent (Antigravity, Cursor, Claude Code, Copilot, Codex...) đến làm việc với dự án **MathYuta / HSA Webtest**. Tài liệu này định nghĩa các quy tắc cốt lõi, quy chuẩn tổ chức code dữ liệu và quy trình kiểm định chất lượng bắt buộc.

---

## 1. Tổng Quan Dự Án & Tech Stack

- **Dự án**: Ứng dụng Web luyện thi Toán chất lượng cao theo chương trình GDPT 2018 (Toán 12 HSA / THPT Quốc Gia, Toán 7 THCS,...).
- **Core Stack**: React 19, TypeScript 5.8, Vite, Tailwind CSS v4, KaTeX, Lucide React, Motion.
- **Hai nhánh chính**:
  - `main`: Ngân hàng đề & Chuyên đề Toán 12 (HSA ĐHQGHN & THPT Quốc Gia), triển khai tại `https://hsayuta.vercel.app`.
  - `thcs-math`: Ngân hàng đề Toán THCS (Toán 7), triển khai tại `https://toan7-yuta.vercel.app`.

---

## 2. Quy Tắc Vàng: Cấu Trúc File Dữ Liệu (Data Chunking Pattern)

> [!IMPORTANT]
> **QUY TẮC 30 CÂU / 600 DÒNG**:
> Tuyệt đối **KHÔNG** tạo hoặc duy trì các file dữ liệu câu hỏi vượt quá **30 câu** hoặc **600 dòng code**. Các file khổng lồ (nghìn dòng) làm tràn context window của Agent, gây lỗi đọc/ghi và khó kiểm định.

### Cách tổ chức thư mục:
1. **Đối với Đề thi (Exam sets)**: Mỗi đề thi của một trường/sở là một file riêng biệt đặt trong thư mục con:
   ```text
   src/data/topics/de_thi_cac_so/
   ├── ha_noi_2025.ts          (~20 câu)
   ├── nam_dinh_2025.ts        (~20 câu)
   ├── nghe_an_2025.ts         (~20 câu)
   ├── hai_phong_2025.ts       (~15 câu)
   ├── nguyen_khuyen_2026.ts   (~15 câu)
   └── index.ts                (Gộp và xuất deThiCacSoQuestions)
   ```
2. **Đối với Chuyên đề lớn (Topics with many questions)**: Chia nhỏ theo dạng toán hoặc theo phần (Part):
   ```text
   src/data/topics/chuong_1_ham_so/don_dieu/
   ├── don_dieu_bac_3.ts             (~25 câu)
   ├── don_dieu_phan_thuc.ts         (~25 câu)
   ├── don_dieu_chua_m_nang_cao.ts    (~21 câu)
   └── index.ts                      (Gộp và xuất donDieuThamSoMQuestions)
   ```
3. **Cơ chế Barrel Export (`index.ts`)**:
   Mọi file module con phải được export tập hợp qua file `index.ts` gần nhất và cuối cùng là `src/data/topics/index.ts`. Giao diện UI (`ExamView`, `TopicPracticeView`,...) chỉ import từ các module tập hợp này, đảm bảo không bao giờ bị gãy API hoặc phụ thuộc lỏng lẻo.

---

## 3. Chuẩn Interface `Question`

Mỗi câu hỏi phải tuân thủ đúng TypeScript interface trong [`src/types/exam.ts`](file:///home/tontonyuta/Documents/HSA_Webtest/src/types/exam.ts):

```typescript
export interface Question {
  id: number;                          // ID số nguyên duy nhất trong toàn hệ thống
  type: 'mcq' | 'fill';                // Trắc nghiệm 4 lựa chọn hoặc Điền đáp số
  chapterId: string;                   // ID chương (chuong_1_ham_so, chuong_2_mu_logarit,...)
  chapterName: string;                 // Tên chương hiển thị
  topicId: string;                     // ID chuyên đề
  topicName: string;                   // Tên chuyên đề hiển thị
  content: string;                     // Đề bài (Markdown + KaTeX)
  options?: { key: 'A'|'B'|'C'|'D'; content: string }[]; // 4 lựa chọn (với mcq)
  correctAnswer: string;               // 'A'|'B'|'C'|'D' hoặc số chuỗi (ví dụ: "20", "-3.5")
  acceptableAnswers?: string[];        // Các định dạng chấp nhận khi điền (ví dụ: ["20", "20.0"])
  detailedSolution: string;            // Lời giải chi tiết, rõ ràng từng bước bằng KaTeX
  socraticHint: string;                // Gợi ý tư duy sư phạm ngắn gọn (1-2 câu)
  difficulty: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  examSets?: string[];                 // Danh sách mã đề chứa câu hỏi này
  isPracticalMath?: boolean;           // Bài toán thực tế / ứng dụng
  hasParametricM?: boolean;            // Bài toán chứa tham số m
  track?: 'THPTQG' | 'HSA' | 'BOTH' | 'PHOTHONG' | 'NANGCAO';
  latexVerified?: boolean;             // Đánh dấu cú pháp KaTeX đã chuẩn 100%
  answerVerified?: boolean;            // Đánh dấu logic toán & đáp án đã khớp 100%
}
```

---

## 4. Quy Chuẩn KaTeX & Các Lỗi OCR Thường Gặp Cần Tránh

Khi trích xuất câu hỏi từ PDF hoặc file OCR, Agent **phải tuân thủ nghiêm ngặt**:

1. **Bắt buộc bọc LaTeX**: Mọi ký hiệu toán học (`\Delta`, `\mathbb{R}`, `\le`, `\ge`, `\in`, `\implies`, `\iff`, `\pm`, `\infty`, `\ne`, `\vec{...}`) **tuyệt đối không được viết trơ ngoài văn bản**. Phải bọc trong `$..$` (nội dòng) hoặc `$$..$$` (khối công thức).
2. **Tiếng Việt trong công thức**: Tiếng Việt có dấu khi nằm trong math mode **bắt buộc phải bọc qua `\text{...}`**.
   - *Sai*: `$v = 20 km/h$`, `$10 ngày$`
   - *Đúng*: `$v = 20\\text{ km/h}$`, `$10\\text{ ngày}$`
3. **Lỗi font số mũ OCR độc lập**:
   - *Sai*: `$m \\ge ^2$`, `$m = \\pm ^3$`, `Cách^2`, `TH^2`
   - *Đúng*: `$m \\ge 2$`, `$m = \\pm 3$`, `Cách 2`, `TH2`
4. **Không để rác OCR ở đầu lời giải**:
   - *Sai*: `D. 7\nChọn D\nTa có...`
   - *Đúng*: `Ta có... \n\nChọn D.`
5. **Logic đáp án nhất quán**:
   - `correctAnswer` phải trùng khớp với kết luận cuối cùng của `detailedSolution` (ví dụ lời giải kết luận `Chọn B.` thì `correctAnswer` phải là `'B'`).
   - Bốn lựa chọn A, B, C, D không được trùng nội dung nhau.
   - Câu hỏi trắc nghiệm (`mcq`) phải có đúng 4 phương án A, B, C, D.

---

## 5. Quy Trình 4 Bước Thêm Dữ Liệu Mới (Pipeline)

Khi người dùng yêu cầu thêm đề mới từ tài liệu / PDF:

1. **Bước 1 (Extract & Format)**: Đọc nội dung đề thi, chuẩn hóa KaTeX theo mục 4.
2. **Bước 2 (Create Chunk File)**: Tạo file mới $\le 25-30$ câu tại thư mục tương ứng. Đặt tên file theo cú pháp snake_case mô tả rõ nguồn (ví dụ: `src/data/topics/de_thi_cac_so/hai_duong_2026.ts`).
3. **Bước 3 (Register Export)**: Import file chunk mới vào file `index.ts` của thư mục đó và bổ sung vào `HSA_QUESTIONS_DATABASE` (hoặc `TOAN7_QUESTIONS_DATABASE`).
4. **Bước 4 (Validate & Tag)**:
   - Chạy lệnh kiểm tra:
     ```bash
     npm run validate:latex
     ```
   - Chạy kiểm tra TypeScript và build:
     ```bash
     npx tsc --noEmit && npm run build
     ```
   - Nếu có lỗi, sửa ngay tại file chunk đó. Khi đạt 100% không lỗi, câu hỏi sẽ được lưu an toàn với `answerVerified: true` và `latexVerified: true`.

---

## 6. Lệnh Kiểm Tra & Triển Khai Thường Dùng (Cheatsheet)

- Kiểm tra cú pháp KaTeX & logic đáp án: `npm run validate:latex`
- Kiểm tra kiểu dữ liệu TypeScript: `npx tsc --noEmit`
- Build dự án Vite: `npm run build`
- Chạy dev server: `npm run dev`
- Đăng nhập Clasp Google Apps Script: `npm run gas:login`
- Tự động đồng bộ và deploy Google Apps Script Webhook: `npm run gas:deploy`
