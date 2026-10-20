import { Question } from '../../../../types/exam';
import { CHUONG_1_SO_HUU_TI_QUESTIONS } from './chuong_1_so_huu_ti';
import { CHUONG_2_SO_THUC_QUESTIONS } from './chuong_2_so_thuc';
import { CHUONG_3_GOC_SONG_SONG_QUESTIONS } from './chuong_3_goc_song_song';
import { CHUONG_4_TAM_GIAC_BANG_NHAU_QUESTIONS } from './chuong_4_tam_giac_bang_nhau';
import { CHUONG_5_THU_THAP_DU_LIEU_QUESTIONS } from './chuong_5_thu_thap_du_lieu';
import { CHUONG_6_TI_LE_THUC_QUESTIONS } from './chuong_6_ti_le_thuc';
import { CHUONG_7_DA_THUC_QUESTIONS } from './chuong_7_da_thuc';
import { CHUONG_8_BIEN_CO_XAC_SUAT_QUESTIONS } from './chuong_8_bien_co_xac_suat';
import { CHUONG_9_QUAN_HE_TAM_GIAC_QUESTIONS } from './chuong_9_quan_he_tam_giac';
import { CHUONG_10_HINH_KHOI_THUC_TIEN_QUESTIONS } from './chuong_10_hinh_khoi_thuc_tien';

export const TOAN7_PHOTHONG_NEW_QUESTIONS: Question[] = [
  ...CHUONG_1_SO_HUU_TI_QUESTIONS,
  ...CHUONG_2_SO_THUC_QUESTIONS,
  ...CHUONG_3_GOC_SONG_SONG_QUESTIONS,
  ...CHUONG_4_TAM_GIAC_BANG_NHAU_QUESTIONS,
  ...CHUONG_5_THU_THAP_DU_LIEU_QUESTIONS,
  ...CHUONG_6_TI_LE_THUC_QUESTIONS,
  ...CHUONG_7_DA_THUC_QUESTIONS,
  ...CHUONG_8_BIEN_CO_XAC_SUAT_QUESTIONS,
  ...CHUONG_9_QUAN_HE_TAM_GIAC_QUESTIONS,
  ...CHUONG_10_HINH_KHOI_THUC_TIEN_QUESTIONS,
];
