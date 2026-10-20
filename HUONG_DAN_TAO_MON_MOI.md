# HƯỚNG DẪN TẠO MÔN HỌC & LỚP HỌC MỚI (TEMPLATE FRAMEWORK GUIDE)

Nhánh **`template`** là một khung ứng dụng (boilerplate / framework) hoàn chỉnh, được module hóa 100% để bạn có thể nhanh chóng biến thành bất kỳ **môn học nào** (Toán, Vật lí, Hóa học, Sinh học, Tiếng Anh, Lịch sử...) hoặc **khối lớp nào** (Lớp 6 đến Lớp 12, Ôn thi vào 10, Ôn thi Tốt nghiệp THPT, ĐGNL HSA/V-SAT/APT...).

Toàn bộ giao diện (*Navbar, Sidebar, Dashboard, Ngân hàng đề thi, Ngân hàng câu hỏi, Luyện chuyên đề, Modal học sinh*) đều tự động cập nhật theo cấu hình tập trung mà **không cần sửa bất kỳ file mã nguồn JSX/TSX nào**.

---

## 🚀 QUY TRÌNH 3 BƯỚC ĐỂ TẠO MÔN MỚI (CHỈ MẤT 3 PHÚT)

### 📌 Bước 1: Tạo nhánh Git mới từ `template`
Mỗi môn học hoặc khối lớp nên được quản lý trên một nhánh độc lập:
```bash
# Đứng tại nhánh template
git checkout template

# Tạo và chuyển sang nhánh môn mới (ví dụ: vatly-10, hoahoc-9, toan-9-vao-10...)
git checkout -b vatly-10
```

---

### 📌 Bước 2: Tạo thư mục dữ liệu cho môn mới
Copy thư mục mẫu `src/data/template/` thành thư mục môn mới:
```bash
cp -r src/data/template src/data/vatly10
```

Trong thư mục `src/data/vatly10/` có 4 file:
1. **`chaptersMetadata.ts`**: Định nghĩa danh mục các chương và chuyên đề con của môn học.
2. **`questions.ts`**: Ngân hàng câu hỏi của môn học (hỗ trợ trắc nghiệm 4 đáp án, điền số, công thức toán/lý KaTeX, bảng biểu Markdown, gợi ý tư duy Socratic).
3. **`examSets.ts`**: Danh sách các bộ đề thi (đề 45 phút, 60 phút, 90 phút, giữa kì, cuối kì, HSG).
4. **`index.ts`**: Xuất các biến ra ngoài:
   ```typescript
   export { TEMPLATE_CHAPTERS_METADATA as VATLY10_CHAPTERS } from './chaptersMetadata';
   export { TEMPLATE_QUESTIONS as VATLY10_QUESTIONS } from './questions';
   export { TEMPLATE_EXAM_SETS as VATLY10_EXAM_SETS } from './examSets';
   ```

---

### 📌 Bước 3: Cấu hình thông tin & Kích hoạt dữ liệu

#### 3.1. Sửa file `src/config/appConfig.ts`
Chỉ cần sửa các trường thông tin cơ bản:
```typescript
export const appConfig: AppConfig = {
  appId: 'vatly-10',
  appName: 'TontonYuta Edu',
  subject: 'Vật Lí',                     // Tên môn học
  grade: 'Lớp 10',                       // Khối lớp
  curriculum: 'GDPT 2018',               // Chuẩn chương trình
  tagline: 'Luyện thi & Học tập Vật lí tương tác',

  author: {
    name: 'TontonYuta',
    role: 'Giáo Viên Vật Lí',
    avatarUrl: '/avt.png',
    email: 'email_cua_ban@gmail.com',
    socialLinks: {
      tiktok: 'https://tiktok.com/@tontonyuta',
      facebook: 'https://facebook.com',
    },
  },

  // Định nghĩa các lộ trình học tập (Tracks)
  // Bạn có thể để 1 lộ trình hoặc 2 lộ trình tùy ý:
  tracks: [
    {
      id: 'STANDARD',
      name: 'Vật Lí 10 Cơ Bản (Chuẩn SGK)',
      shortName: 'Cơ Bản',
      icon: '📘',
      badge: 'Chuẩn SGK 2018',
      subtitle: 'Nắm chắc kiến thức SGK Kết nối tri thức & Cánh diều',
      description: 'Hệ thống học tập và kiểm tra môn Vật lí 10 theo chuẩn GDPT 2018.',
      highlightText: 'Chuẩn SGK 2018 · Nhận biết & Thông hiểu vững chắc',
      examDurationMinutes: 45,
      targetAudience: 'Học sinh ôn tập kiến thức trên lớp và thi định kỳ',
      activeGradient: 'from-sky-600 to-blue-600 text-white shadow-sky-500/25',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800',
    },
    {
      id: 'ADVANCED',
      name: 'Vật Lí 10 Nâng Cao (Bứt Phá 9+ & HSG)',
      shortName: 'Nâng Cao',
      icon: '🚀',
      badge: 'Bứt Phá 9+ & HSG',
      subtitle: 'Chinh phục bài toán điểm 10, bồi dưỡng học sinh giỏi và thi chuyên',
      description: 'Hệ thống bài tập động học, động lực học chất điểm phân hóa chuyên sâu.',
      highlightText: 'Bứt phá điểm 10 · Rèn luyện tư duy vật lí thực nghiệm sâu',
      examDurationMinutes: 60,
      targetAudience: 'Học sinh ôn thi học sinh giỏi và trường chuyên',
      activeGradient: 'from-amber-600 to-rose-600 text-white shadow-amber-500/25',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
    },
  ],

  defaultTrackId: 'STANDARD',

  // Google Sheets Webhook nhận thông báo nộp bài & khảo sát học sinh
  googleSheetsWebhookUrl: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
};
```

#### 3.2. Trỏ dữ liệu tại `src/config/activeData.ts`
Chỉ cần sửa đúng **1 dòng import**:
```typescript
// Trỏ tới thư mục dữ liệu môn bạn vừa tạo:
import { 
  VATLY10_CHAPTERS, 
  VATLY10_QUESTIONS, 
  VATLY10_EXAM_SETS 
} from '../data/vatly10/index';

export const ACTIVE_CHAPTERS_METADATA = VATLY10_CHAPTERS;
export const ACTIVE_QUESTIONS_DATABASE = VATLY10_QUESTIONS;
export const ACTIVE_EXAM_SETS = VATLY10_EXAM_SETS;
```

---

## 🧩 CẤU TRÚC CHI TIẾT DỮ LIỆU CÂU HỎI & ĐỀ THI

### 1. Cấu trúc câu hỏi (`Question`)
```typescript
{
  id: 1001,
  type: 'mcq', // 'mcq' (Trắc nghiệm 4 lựa chọn) hoặc 'fill' (Điền số ngắn)
  chapterId: 'ch_01_dong_hoc',
  chapterName: 'Động Học Chất Điểm',
  topicId: 'tp_01_chuyen_dong_thang',
  topicName: 'Chuyển động thẳng đều',
  content: 'Phương trình chuyển động của một vật chuyển động thẳng đều là: $x = 5 + 20t$ (với $x$ tính bằng mét, $t$ tính bằng giây). Tốc độ của vật là:',
  options: [
    { key: 'A', content: '$5\\text{ m/s}$' },
    { key: 'B', content: '$20\\text{ m/s}$' },
    { key: 'C', content: '$25\\text{ m/s}$' },
    { key: 'D', content: '$4\\text{ m/s}$' },
  ],
  correctAnswer: 'B',
  difficulty: 'Nhận biết', // 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao'
  detailedSolution: `Phương trình chuyển động tổng quát: $x = x_0 + v \\cdot t$.
So sánh với $x = 5 + 20t$ ta có:
- Tọa độ ban đầu: $x_0 = 5\\text{ m}$
- Vận tốc: $v = 20\\text{ m/s}$.
Vậy đáp án đúng là **B**.`,
  socraticHint: 'Hãy so sánh phương trình đề bài cho với dạng tổng quát $x = x_0 + vt$.',
  track: 'STANDARD', // 'STANDARD' | 'ADVANCED' | 'BOTH'
  examSets: ['exam_vl10_01'],
}
```

### 2. Cấu trúc câu hỏi điền số (`fill`)
```typescript
{
  id: 1002,
  type: 'fill',
  chapterId: 'ch_01_dong_hoc',
  topicId: 'tp_01_chuyen_dong_thang',
  topicName: 'Chuyển động thẳng biến đổi đều',
  content: 'Một vật chuyển động từ trạng thái nghỉ với gia tốc $a = 2\\text{ m/s}^2$. Tính quãng đường vật đi được sau $4\\text{ giây}$. *(Nhập số)*',
  correctAnswer: '16',
  acceptableAnswers: ['16', '16.0', '16m'], // Hệ thống tự chấp nhận cả số nguyên và số thực tương đương
  difficulty: 'Thông hiểu',
  detailedSolution: `Áp dụng công thức: $s = v_0 t + \\frac{1}{2} a t^2 = 0 + \\frac{1}{2} \\cdot 2 \\cdot 4^2 = 16\\text{ m}$.`,
  socraticHint: 'Vì vật xuất phát từ trạng thái nghỉ nên vận tốc đầu $v_0 = 0$.',
  track: 'STANDARD',
}
```

### 3. Cấu trúc bộ đề thi (`ExamSet`)
```typescript
{
  id: 'exam_vl10_01',
  title: 'Đề Kiểm Tra Động Học Số 1',
  subtitle: 'Kiểm tra 45 phút chương Động học chất điểm',
  description: 'Đánh giá toàn diện kiến thức chuyển động thẳng đều và biến đổi đều.',
  timeMinutes: 45,
  questionCount: 15,
  mcqCount: 12,
  fillCount: 3,
  badge: 'Kiểm tra 45p',
  track: 'STANDARD',
  questionIds: [1001, 1002, 1003, ...],
}
```

---

## ⚡ KIỂM TRA & BUILD PRODUCTION

Chạy thử trên máy:
```bash
npm run dev
```

Kiểm tra lỗi TypeScript:
```bash
npx tsc --noEmit
```

Build đóng gói hoàn chỉnh:
```bash
npm run build
```

Commit và đẩy nhánh lên GitHub:
```bash
git add .
git commit -m "feat(vatly10): create Physics Grade 10 app"
git push origin vatly-10
```

---

## 💡 DANH SÁCH CÁC NHÁNH ĐÃ SẴN SÀNG
- **`template`**: Nhánh khung sườn chuẩn hóa toàn cầu (dùng để nhân bản môn mới).
- **`thcs-math`**: Nhánh ứng dụng môn **Toán 7 - GDPT 2018** (Phổ Thông & Nâng Cao).
- **`main`**: Nhánh ứng dụng môn **Toán THPT & Đánh giá năng lực HSA**.
