import { Question } from '../../../types/exam';

import { congThucPtLuongGiacQuestions } from './cong_thuc_va_pt_luong_giac';
import { daoDongLuongGiacThucTeQuestions } from './mo_hinh_dao_dong_luong_giac_thuc_te';
import { ch9LuongGiacNangCaoPart1Questions } from './ch9_luong_giac_nang_cao_part_1';
import { ch9LuongGiacNangCaoPart2Questions } from './ch9_luong_giac_nang_cao_part_2';

export {
  congThucPtLuongGiacQuestions,
  daoDongLuongGiacThucTeQuestions,
  ch9LuongGiacNangCaoPart1Questions,
  ch9LuongGiacNangCaoPart2Questions,
};

export const chuong_9_luong_giacQuestions: Question[] = [
  ...congThucPtLuongGiacQuestions,
  ...daoDongLuongGiacThucTeQuestions,
  ...ch9LuongGiacNangCaoPart1Questions,
  ...ch9LuongGiacNangCaoPart2Questions,
];
