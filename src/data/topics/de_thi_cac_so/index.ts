import { Question } from '../../../types/exam';
import { soHanoi2025Questions } from './so_ha_noi_2025';
import { soNamDinh2025Questions } from './so_nam_dinh_2025';
import { soNgheAn2025Questions } from './so_nghe_an_2025';
import { soHaiPhong2025Questions } from './so_hai_phong_2025';
import { nguyenKhuyenTphcm2026Questions } from './nguyen_khuyen_tphcm_2026';

export {
  soHanoi2025Questions,
  soNamDinh2025Questions,
  soNgheAn2025Questions,
  soHaiPhong2025Questions,
  nguyenKhuyenTphcm2026Questions,
};

export const deThiCacSoQuestions: Question[] = [
  ...soHanoi2025Questions,
  ...soNamDinh2025Questions,
  ...soNgheAn2025Questions,
  ...soHaiPhong2025Questions,
  ...nguyenKhuyenTphcm2026Questions,
];
