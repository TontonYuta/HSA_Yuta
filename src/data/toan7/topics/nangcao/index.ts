import { Question } from '../../../../types/exam';
import { HSG_CHU_VAN_AN_QUESTIONS } from './hsg_chu_van_an_thai_nguyen';
import { HSG_SAM_SON_QUESTIONS } from './hsg_sam_son_thanh_hoa';
import { HSG_HOA_LOC_QUESTIONS } from './hsg_hoa_loc_thanh_hoa';
import { HSG_BDT_CUC_TRI_LUY_THUA_QUESTIONS } from './hsg_bdt_cuc_tri_luy_thua';

export const TOAN7_NANGCAO_NEW_QUESTIONS: Question[] = [
  ...HSG_CHU_VAN_AN_QUESTIONS,
  ...HSG_SAM_SON_QUESTIONS,
  ...HSG_HOA_LOC_QUESTIONS,
  ...HSG_BDT_CUC_TRI_LUY_THUA_QUESTIONS,
];
