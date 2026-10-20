/**
 * ============================================================================
 * CẤU HÌNH TOÀN CỤC CỦA ỨNG DỤNG (APPLICATION CONFIGURATION)
 * ============================================================================
 * Để đổi sang MÔN HỌC KHÁC hoặc LỚP HỌC KHÁC:
 * Bạn chỉ cần chỉnh sửa các thông số trong file này!
 * Giao diện (Navbar, Sidebar, Dashboard, Ngân hàng đề, v.v.) sẽ tự động
 * cập nhật theo thông tin bạn khai báo ở đây.
 */

export interface TrackConfig {
  /** Mã định danh lộ trình (e.g. 'STANDARD', 'ADVANCED', 'CO_BAN', 'NANG_CAO') */
  id: string;
  /** Tên đầy đủ hiển thị trên tiêu đề lớn */
  name: string;
  /** Tên ngắn hiển thị trên nút bấm / tabs / badges */
  shortName: string;
  /** Biểu tượng icon emoji (e.g. '📘', '🚀', '🔬', '📐', '⭐') */
  icon: string;
  /** Huy hiệu nhỏ gọn (e.g. 'Chuẩn SGK', 'Bứt Phá 9+') */
  badge: string;
  /** Phụ đề ngắn mô tả mục tiêu học tập */
  subtitle: string;
  /** Mô tả chi tiết hiển thị trong phần giới thiệu và ma trận đề thi */
  description: string;
  /** Dòng text nổi bật tóm tắt đặc điểm */
  highlightText: string;
  /** Thời gian làm bài thi mặc định (phút) */
  examDurationMinutes: number;
  /** Đối tượng học sinh hướng tới */
  targetAudience: string;
  /** Gradient màu nút đang chọn (Tailwind CSS) */
  activeGradient: string;
  /** Màu sắc viền và nền badge (Tailwind CSS) */
  badgeColor: string;
}

export interface AppAuthor {
  name: string;
  role: string;
  avatarUrl: string;
  email: string;
  socialLinks?: {
    facebook?: string;
    tiktok?: string;
    youtube?: string;
  };
}

export interface SurveyConfig {
  /** Danh sách nguồn biết đến ứng dụng */
  channelOptions: string[];
  /** Thang đánh giá sao */
  ratingOptions: { stars: number; label: string }[];
  /** Câu hỏi góp ý */
  feedbackPrompt: string;
}

export interface AppConfig {
  /** Mã ứng dụng duy nhất (dùng cho localStorage prefix nếu cần) */
  appId: string;
  /** Tên thương hiệu ứng dụng (e.g. 'TontonYuta Edu') */
  appName: string;
  /** Môn học (e.g. 'Toán Học', 'Vật Lí', 'Hóa Học', 'Tiếng Anh', 'Lịch Sử') */
  subject: string;
  /** Khối lớp hoặc mục tiêu (e.g. 'Lớp 7', 'Lớp 10', 'Lớp 12', 'Ôn Thi Vào 10') */
  grade: string;
  /** Chuẩn chương trình giáo dục (e.g. 'GDPT 2018', 'ĐGNL HSA', 'Chuyên Sâu') */
  curriculum: string;
  /** Khẩu hiệu / Tagline ngắn gọn */
  tagline: string;

  /** Thông tin giáo viên / tác giả */
  author: AppAuthor;

  /** Danh sách các lộ trình học tập (Ví dụ: Cơ Bản vs Nâng Cao) */
  tracks: TrackConfig[];
  /** Lộ trình mặc định khi học sinh mới vào trang */
  defaultTrackId: string;

  /** Bật/tắt các tính năng hệ thống */
  features: {
    /** Bật modal khảo sát ngắn sau khi học sinh nhập tên */
    enableSurvey: boolean;
    /** Hiển thị đồng hồ thời gian thực và đếm ngày thi */
    enableRealtimeClock: boolean;
    /** Bật hiệu ứng pháo hoa khi nộp bài / hoàn thành */
    enableConfetti: boolean;
  };

  /** Webhook URL nhận thông báo nộp bài và khảo sát từ Google Apps Script */
  googleSheetsWebhookUrl?: string;

  /** Cấu hình nội dung khảo sát */
  surveyConfig: SurveyConfig;
}

// ============================================================================
// DỮ LIỆU CẤU HÌNH MẶC ĐỊNH
// (Chỉnh sửa nội dung bên dưới để biến ứng dụng thành môn học/lớp học của bạn)
// ============================================================================

export const appConfig: AppConfig = {
  appId: 'edu-framework',
  appName: 'TontonYuta Edu',
  subject: 'Toán Học',
  grade: 'Lớp 7',
  curriculum: 'GDPT 2018',
  tagline: 'Nền Tảng Luyện Thi & Học Tập Trực Tuyến Tương Tác',

  author: {
    name: 'TontonYuta',
    role: 'Giáo Viên Toán Sáng Tạo',
    avatarUrl: '/avt.png',
    email: 'huyhoang6altt@gmail.com',
    socialLinks: {
      facebook: 'https://facebook.com',
      tiktok: 'https://tiktok.com/@tontonyuta',
      youtube: 'https://youtube.com',
    },
  },

  tracks: [
    {
      id: 'STANDARD',
      name: 'Toán 7 Phổ Thông (Chuẩn SGK GDPT 2018)',
      shortName: 'Phổ Thông',
      icon: '📘',
      badge: 'Chuẩn GDPT 2018',
      subtitle: 'Nắm chắc kiến thức SGK Kết nối tri thức & Cánh diều, bứt phá điểm 8-9 trong các bài thi định kỳ',
      description: 'Hệ thống học tập và kiểm tra môn Toán theo chuẩn chương trình GDPT 2018. Bao phủ toàn diện các chương trọng tâm, câu hỏi bám sát cấu trúc đề kiểm tra định kỳ tại trường học.',
      highlightText: 'Chuẩn SGK 2018 · Phân hóa từ Nhận biết đến Vận dụng vừa sức',
      examDurationMinutes: 60,
      targetAudience: 'Học sinh ôn tập kiến thức trên lớp và thi giữa kì, cuối kì',
      activeGradient: 'from-sky-600 to-blue-600 text-white shadow-sky-500/25',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800',
    },
    {
      id: 'ADVANCED',
      name: 'Toán 7 Nâng Cao (Bứt Phá 9+ & Học Sinh Giỏi)',
      shortName: 'Nâng Cao',
      icon: '🚀',
      badge: 'Bứt Phá 9+ & HSG',
      subtitle: 'Chinh phục bài toán điểm 10, bồi dưỡng học sinh giỏi cấp trường, quận/huyện và chuyên Toán',
      description: 'Hệ thống bài tập và đề thi nâng cao dành cho học sinh target điểm 9+, thi HSG và ôn thi vào trường Chuyên. Rèn luyện tư duy toán học logic, phương pháp giải toán nâng cao và câu hỏi phân loại sâu.',
      highlightText: 'Bứt phá điểm 10 · Rèn luyện tư duy logic & giải bài toán chuyên',
      examDurationMinutes: 90,
      targetAudience: 'Học sinh ôn thi học sinh giỏi, câu điểm 10 và thi trường chuyên',
      activeGradient: 'from-amber-600 to-rose-600 text-white shadow-amber-500/25',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
    },
  ],

  defaultTrackId: 'STANDARD',

  features: {
    enableSurvey: true,
    enableRealtimeClock: true,
    enableConfetti: true,
  },

  googleSheetsWebhookUrl: 'https://script.google.com/macros/s/AKfycbyi81vA_Yg4B8Kqf52z4_q0YQpQfM7U/exec',

  surveyConfig: {
    channelOptions: [
      'TikTok (@tontonyuta)',
      'Facebook',
      'Được bạn bè / thầy cô giới thiệu',
      'Tìm kiếm Google',
    ],
    ratingOptions: [
      { stars: 1, label: '1★ - Cần cải thiện thêm' },
      { stars: 2, label: '2★ - Chưa thực sự ấn tượng' },
      { stars: 3, label: '3★ - Tạm chấp nhận được' },
      { stars: 4, label: '4★ - Khá bổ ích & thiết thực' },
      { stars: 5, label: '5★ - Siêu bá khí & cuốn hút 🔥' },
    ],
    feedbackPrompt: 'Bạn có thắc mắc hay đóng góp gì với tác giả không?',
  },
};

/**
 * Trợ giúp lấy thông tin Track theo ID
 */
export function getTrackConfig(trackId?: string): TrackConfig {
  const found = appConfig.tracks.find((t) => t.id === trackId);
  return found || appConfig.tracks[0];
}

/**
 * Lấy tiêu đề đầy đủ hiển thị trên trang
 */
export function getFullAppTitle(): string {
  return `${appConfig.appName} - ${appConfig.subject} ${appConfig.grade}`;
}
