import { useState, useEffect } from 'react';

/**
 * Tính toán năm thi mục tiêu (Target Exam Year) hoàn toàn tự động theo thời gian thực.
 * - Kỳ thi THPT Quốc Gia diễn ra vào cuối tháng 6 hàng năm.
 * - Kỳ thi ĐGNL HSA ĐHQGHN diễn ra từ tháng 3 đến tháng 6 hàng năm.
 * Do đó:
 * - Nếu tháng hiện tại >= 7 (tháng 7 đến tháng 12): Học sinh bước vào năm học mới ôn thi cho năm tiếp theo (now.getFullYear() + 1).
 *   Ví dụ: Tháng 10/2026 -> Chuẩn bị cho kỳ thi năm 2027!
 * - Nếu tháng hiện tại < 7 (tháng 1 đến tháng 6): Đang trong giai đoạn thi của năm đó (now.getFullYear()).
 *   Ví dụ: Tháng 3/2027 -> Chuẩn bị cho kỳ thi năm 2027!
 */
export function getTargetExamYear(date: Date = new Date()): number {
  return date.getMonth() >= 6 ? date.getFullYear() + 1 : date.getFullYear();
}

/**
 * Lấy ngày dự kiến kỳ thi THPT Quốc Gia cho năm mục tiêu (thường là tuần cuối tháng 6)
 */
export function getTHPTQGExamDate(targetYear: number): Date {
  return new Date(targetYear, 5, 26, 7, 30, 0); // 26/06/targetYear 07:30
}

/**
 * Lấy ngày dự kiến kỳ thi HSA ĐHQGHN Đợt 1 cho năm mục tiêu (thường là tuần cuối tháng 3)
 */
export function getHSAExamDate(targetYear: number): Date {
  return new Date(targetYear, 2, 27, 7, 30, 0); // 27/03/targetYear 07:30
}

/**
 * Tính số ngày còn lại đến một mốc thời gian
 */
export function getDaysRemaining(targetDate: Date, fromDate: Date = new Date()): number {
  const diffTime = targetDate.getTime() - fromDate.getTime();
  if (diffTime <= 0) return 0;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Format ngày theo chuẩn tiếng Việt: "Thứ Hai, 19/10/2026"
 */
export function formatVietnameseDate(date: Date = new Date()): string {
  const dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const dayName = dayNames[date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${dayName}, ${day}/${month}/${year}`;
}

/**
 * Format giờ theo chuẩn HH:mm:ss
 */
export function formatVietnameseTime(date: Date = new Date(), withSeconds: boolean = true): string {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  if (!withSeconds) return `${hours}:${minutes}`;
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

export interface RealtimeClockState {
  now: Date;
  targetYear: number;
  formattedDate: string;
  formattedTime: string;
  daysToTHPTQG: number;
  daysToHSA: number;
}

/**
 * Custom React Hook cung cấp đồng hồ thời gian thực và đếm ngược tự động cập nhật
 */
export function useRealtimeClock(): RealtimeClockState {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const targetYear = getTargetExamYear(now);
  const thptDate = getTHPTQGExamDate(targetYear);
  const hsaDate = getHSAExamDate(targetYear);

  return {
    now,
    targetYear,
    formattedDate: formatVietnameseDate(now),
    formattedTime: formatVietnameseTime(now, true),
    daysToTHPTQG: getDaysRemaining(thptDate, now),
    daysToHSA: getDaysRemaining(hsaDate, now),
  };
}
