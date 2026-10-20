import { Question } from '../../../../types/exam';
import { HSG_CHU_VAN_AN_THAI_NGUYEN_QUESTIONS } from './hsg_chu_van_an_thai_nguyen';
import { HSG_SAM_SON_THANH_HOA_QUESTIONS } from './hsg_sam_son_thanh_hoa';
import { HSG_HOA_LOC_THANH_HOA_QUESTIONS } from './hsg_hoa_loc_thanh_hoa';
import { HSG_DUC_THO_HA_TINH_QUESTIONS } from './hsg_duc_tho_ha_tinh';
import { HSG_LUC_NGAN_BAC_NINH_QUESTIONS } from './hsg_luc_ngan_bac_ninh';
import { HSG_TONG_SON_BA_THUOC_QUESTIONS } from './hsg_tong_son_ba_thuoc';
import { HSG_BDT_CUC_TRI_LUY_THUA_QUESTIONS } from './hsg_bdt_cuc_tri_luy_thua';
import { HSG_DAI_SO_NGHIEM_NGUYEN_QUESTIONS } from './hsg_dai_so_nghiem_nguyen';
import { HSG_HINH_HOC_KE_DUONG_PHU_QUESTIONS } from './hsg_hinh_hoc_ke_duong_phu';
import { HSG_TOAN_TO_HOP_CHIA_HET_QUESTIONS } from './hsg_toan_to_hop_chia_het';

export const TOAN7_NANGCAO_NEW_QUESTIONS: Question[] = [
  ...HSG_CHU_VAN_AN_THAI_NGUYEN_QUESTIONS,
  ...HSG_SAM_SON_THANH_HOA_QUESTIONS,
  ...HSG_HOA_LOC_THANH_HOA_QUESTIONS,
  ...HSG_DUC_THO_HA_TINH_QUESTIONS,
  ...HSG_LUC_NGAN_BAC_NINH_QUESTIONS,
  ...HSG_TONG_SON_BA_THUOC_QUESTIONS,
  ...HSG_BDT_CUC_TRI_LUY_THUA_QUESTIONS,
  ...HSG_DAI_SO_NGHIEM_NGUYEN_QUESTIONS,
  ...HSG_HINH_HOC_KE_DUONG_PHU_QUESTIONS,
  ...HSG_TOAN_TO_HOP_CHIA_HET_QUESTIONS,
];
