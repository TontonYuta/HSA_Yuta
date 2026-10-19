/**
 * Question Source Parser & Utility
 * Tách và xử lý nguồn câu hỏi từ các Sở GD&ĐT, Bộ GD&ĐT, Kỳ thi ĐGNL HSA
 */

export interface ParsedQuestionContent {
  sourceTag: string | null;
  cleanContent: string;
}

const HIDE_SOURCE_STORAGE_KEY = 'hsa_hide_question_source';

/**
 * Phân tích và tách biệt nguồn câu hỏi (ví dụ: [Đề khảo sát Sở GD&ĐT Hà Nội 2025])
 * ra khỏi nội dung câu hỏi toán học thuần túy.
 */
export function parseQuestionSource(content: string): ParsedQuestionContent {
  if (!content) return { sourceTag: null, cleanContent: '' };

  // Match leading bracket tag: ^\[([^\]]+)\]\s*(.*)$
  const match = content.match(/^\s*\[([^\]]+)\]\s*(.*)$/s);
  if (match) {
    const rawTag = match[1].trim();
    // Nhận diện các thẻ nguồn đề thi phổ biến
    const isSource = /^(Đề|Trích|Nguồn|TN|HSA|ĐGNL|Sở|THPT|Khảo sát|Kiểm tra|Tham khảo|Minh họa)/i.test(rawTag);
    if (isSource) {
      return {
        sourceTag: rawTag,
        cleanContent: match[2].trim(),
      };
    }
  }

  return {
    sourceTag: null,
    cleanContent: content,
  };
}

/**
 * Đọc trạng thái ẩn/hiện nguồn câu hỏi từ localStorage
 */
export function getHideQuestionSourcePref(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(HIDE_SOURCE_STORAGE_KEY) === 'true';
}

/**
 * Lưu trạng thái ẩn/hiện nguồn câu hỏi vào localStorage
 */
export function setHideQuestionSourcePref(hide: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(HIDE_SOURCE_STORAGE_KEY, hide ? 'true' : 'false');
}
