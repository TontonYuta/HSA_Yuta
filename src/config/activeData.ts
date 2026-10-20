/**
 * ============================================================================
 * CHỌN BỘ DỮ LIỆU ĐANG HOẠT ĐỘNG (ACTIVE DATASET SELECTOR)
 * ============================================================================
 * Khi bạn tạo môn học mới hoặc khối lớp mới:
 * Chỉ cần đổi đường dẫn import ở dòng bên dưới để trỏ tới thư mục dữ liệu của bạn!
 *
 * Ví dụ:
 * - Dùng bộ mẫu Template:       export * from '../data/template';
 * - Dùng dữ liệu Toán 7:         export * from '../data/toan7';
 * - Dùng dữ liệu Vật lí 10:      export * from '../data/vatly10';
 * ============================================================================
 */

import { TEMPLATE_CHAPTERS_METADATA, TEMPLATE_QUESTIONS, TEMPLATE_EXAM_SETS } from '../data/template/index';

export const ACTIVE_CHAPTERS_METADATA = TEMPLATE_CHAPTERS_METADATA;
export const ACTIVE_QUESTIONS_DATABASE = TEMPLATE_QUESTIONS;
export const ACTIVE_EXAM_SETS = TEMPLATE_EXAM_SETS;
