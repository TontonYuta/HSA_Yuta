import { Question } from '../../../../types/exam';
import { CHUONG_1_SO_HUU_TI_QUESTIONS } from './chuong_1_so_huu_ti';
import { CHUONG_2_SO_THUC_QUESTIONS } from './chuong_2_so_thuc';
import { CHUONG_3_GOC_SONG_SONG_QUESTIONS } from './chuong_3_goc_song_song';
import { CHUONG_4_TAM_GIAC_BANG_NHAU_QUESTIONS } from './chuong_4_tam_giac_bang_nhau';
import { CHUONG_6_TI_LE_THUC_QUESTIONS } from './chuong_6_ti_le_thuc';
import { CHUONG_7_DA_THUC_QUESTIONS } from './chuong_7_da_thuc';

export const TOAN7_PHOTHONG_NEW_QUESTIONS: Question[] = [
  ...CHUONG_1_SO_HUU_TI_QUESTIONS,
  ...CHUONG_2_SO_THUC_QUESTIONS,
  ...CHUONG_3_GOC_SONG_SONG_QUESTIONS,
  ...CHUONG_4_TAM_GIAC_BANG_NHAU_QUESTIONS,
  ...CHUONG_6_TI_LE_THUC_QUESTIONS,
  ...CHUONG_7_DA_THUC_QUESTIONS,
];
