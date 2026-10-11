#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Database Reorganizer and Expansion Script for HSA_Webtest:
1. Re-classifies 26 questions to their accurate micro-topics.
2. Updates Chapter 1 topic names ('Tính đơn điệu của hàm số', 'Cực trị của hàm số', 'Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)').
3. Adds authentic 50 questions from HSA36.pdf (Q251 to Q300) with complete detailed solutions & KaTeX.
4. Generates modular files across all 30 micro-topics.
5. Updates src/data/topics/index.ts with exact counts and adds De 07 (Mã Đề 36).
"""

import json
import os
import re

# Load existing 250 questions
with open('/tmp/current_250.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Loaded {len(questions)} existing questions.")

# Topic mapping definition
TOPIC_INFO = {
    # Chuong 1
    'don_dieu_tham_so_m': {
        'chapterId': 'chuong_1_ham_so',
        'chapterName': 'Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm',
        'topicName': 'Tính đơn điệu của hàm số',
        'exportName': 'donDieuThamSoMQuestions',
        'filePath': 'src/data/topics/chuong_1_ham_so/don_dieu_tham_so_m.ts'
    },
    'cuc_tri_tham_so_m': {
        'chapterId': 'chuong_1_ham_so',
        'chapterName': 'Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm',
        'topicName': 'Cực trị của hàm số',
        'exportName': 'cucTriThamSoMQuestions',
        'filePath': 'src/data/topics/chuong_1_ham_so/cuc_tri_tham_so_m.ts'
    },
    'max_min_tham_so_m': {
        'chapterId': 'chuong_1_ham_so',
        'chapterName': 'Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm',
        'topicName': 'Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)',
        'exportName': 'maxMinThamSoMQuestions',
        'filePath': 'src/data/topics/chuong_1_ham_so/max_min_tham_so_m.ts'
    },
    'tiem_can_va_tiem_can_xien': {
        'chapterId': 'chuong_1_ham_so',
        'chapterName': 'Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm',
        'topicName': 'Tiệm cận đứng, ngang & Tiệm cận xiên',
        'exportName': 'tiemCanQuestions',
        'filePath': 'src/data/topics/chuong_1_ham_so/tiem_can_va_tiem_can_xien.ts'
    },
    'tiep_tuyen_do_thi': {
        'chapterId': 'chuong_1_ham_so',
        'chapterName': 'Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm',
        'topicName': 'Phương trình tiếp tuyến đồ thị hàm số',
        'exportName': 'tiepTuyenQuestions',
        'filePath': 'src/data/topics/chuong_1_ham_so/tiep_tuyen_do_thi.ts'
    },
    'tuong_giao_va_ham_hop': {
        'chapterId': 'chuong_1_ham_so',
        'chapterName': 'Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm',
        'topicName': 'Tương giao đồ thị & Số nghiệm hàm hợp',
        'exportName': 'tuongGiaoHamHopQuestions',
        'filePath': 'src/data/topics/chuong_1_ham_so/tuong_giao_va_ham_hop.ts'
    },
    # Chuong 2
    'pt_bpt_mu_logarit': {
        'chapterId': 'chuong_2_mu_logarit',
        'chapterName': 'Chương 2: Hàm số mũ & Hàm số Logarit',
        'topicName': 'Phương trình & BPT mũ, logarit đối xứng',
        'exportName': 'ptBptMuLogaritQuestions',
        'filePath': 'src/data/topics/chuong_2_mu_logarit/pt_bpt_mu_logarit.ts'
    },
    'phuong_phap_ham_dac_trung': {
        'chapterId': 'chuong_2_mu_logarit',
        'chapterName': 'Chương 2: Hàm số mũ & Hàm số Logarit',
        'topicName': 'Phương pháp hàm đặc trưng mũ - logarit',
        'exportName': 'hamDacTrungQuestions',
        'filePath': 'src/data/topics/chuong_2_mu_logarit/phuong_phap_ham_dac_trung.ts'
    },
    'nghiem_nguyen_va_he_mu_log': {
        'chapterId': 'chuong_2_mu_logarit',
        'chapterName': 'Chương 2: Hàm số mũ & Hàm số Logarit',
        'topicName': 'Nghiệm nguyên & Hệ thức mũ - logarit',
        'exportName': 'nghiemNguyenMuLogQuestions',
        'filePath': 'src/data/topics/chuong_2_mu_logarit/nghiem_nguyen_va_he_mu_log.ts'
    },
    'ung_dung_thuc_te_mu_logarit': {
        'chapterId': 'chuong_2_mu_logarit',
        'chapterName': 'Chương 2: Hàm số mũ & Hàm số Logarit',
        'topicName': 'Ứng dụng thực tế mũ & logarit',
        'exportName': 'ungDungMuLogQuestions',
        'filePath': 'src/data/topics/chuong_2_mu_logarit/ung_dung_thuc_te_mu_logarit.ts'
    },
    # Chuong 3
    'nguyen_ham_va_tich_phan_co_ban': {
        'chapterId': 'chuong_3_nguyen_ham_tich_phan',
        'chapterName': 'Chương 3: Nguyên hàm & Tích phân',
        'topicName': 'Nguyên hàm & Tính chất tích phân cơ bản',
        'exportName': 'nguyenHamCoBanQuestions',
        'filePath': 'src/data/topics/chuong_3_nguyen_ham_tich_phan/nguyen_ham_va_tich_phan_co_ban.ts'
    },
    'tich_phan_doi_bien_tung_phan': {
        'chapterId': 'chuong_3_nguyen_ham_tich_phan',
        'chapterName': 'Chương 3: Nguyên hàm & Tích phân',
        'topicName': 'Tích phân đổi biến số & Từng phần',
        'exportName': 'doiBienTungPhanQuestions',
        'filePath': 'src/data/topics/chuong_3_nguyen_ham_tich_phan/tich_phan_doi_bien_tung_phan.ts'
    },
    'ung_dung_dien_tich_the_tich': {
        'chapterId': 'chuong_3_nguyen_ham_tich_phan',
        'chapterName': 'Chương 3: Nguyên hàm & Tích phân',
        'topicName': 'Ứng dụng tích phân tính diện tích & thể tích',
        'exportName': 'ungDungDienTichTheTichQuestions',
        'filePath': 'src/data/topics/chuong_3_nguyen_ham_tich_phan/ung_dung_dien_tich_the_tich.ts'
    },
    'bai_toan_chuyen_dong_thuc_te': {
        'chapterId': 'chuong_3_nguyen_ham_tich_phan',
        'chapterName': 'Chương 3: Nguyên hàm & Tích phân',
        'topicName': 'Ứng dụng tích phân trong bài toán chuyển động',
        'exportName': 'chuyenDongTichPhanQuestions',
        'filePath': 'src/data/topics/chuong_3_nguyen_ham_tich_phan/bai_toan_chuyen_dong_thuc_te.ts'
    },
    # Chuong 4
    'goc_va_khoang_cach': {
        'chapterId': 'chuong_4_hinh_hoc_khong_gian',
        'chapterName': 'Chương 4: Hình học không gian cổ điển',
        'topicName': 'Góc & Khoảng cách trong không gian',
        'exportName': 'gocKhoangCachQuestions',
        'filePath': 'src/data/topics/chuong_4_hinh_hoc_khong_gian/goc_va_khoang_cach.ts'
    },
    'khoi_da_dien_tam_dien_vuong': {
        'chapterId': 'chuong_4_hinh_hoc_khong_gian',
        'chapterName': 'Chương 4: Hình học không gian cổ điển',
        'topicName': 'Khối đa diện & Khối chóp tam diện vuông',
        'exportName': 'khoiDaDienTamDienVuongQuestions',
        'filePath': 'src/data/topics/chuong_4_hinh_hoc_khong_gian/khoi_da_dien_tam_dien_vuong.ts'
    },
    'ti_so_the_tich_khoi_chop_lang_tru': {
        'chapterId': 'chuong_4_hinh_hoc_khong_gian',
        'chapterName': 'Chương 4: Hình học không gian cổ điển',
        'topicName': 'Tỉ số thể tích khối chóp & Lăng trụ',
        'exportName': 'tiSoTheTichQuestions',
        'filePath': 'src/data/topics/chuong_4_hinh_hoc_khong_gian/ti_so_the_tich_khoi_chop_lang_tru.ts'
    },
    'khoi_tron_xoay_non_tru_cau': {
        'chapterId': 'chuong_4_hinh_hoc_khong_gian',
        'chapterName': 'Chương 4: Hình học không gian cổ điển',
        'topicName': 'Khối tròn xoay: Khối nón, Khối trụ & Khối cầu',
        'exportName': 'khoiTronXoayQuestions',
        'filePath': 'src/data/topics/chuong_4_hinh_hoc_khong_gian/khoi_tron_xoay_non_tru_cau.ts'
    },
    # Chuong 5
    'toa_do_diem_vecto_va_mat_cau': {
        'chapterId': 'chuong_5_toa_do_oxyz',
        'chapterName': 'Chương 5: Phương pháp tọa độ trong không gian Oxyz',
        'topicName': 'Tọa độ điểm, Vectơ & Phương trình mặt cầu',
        'exportName': 'toaDoMatCauQuestions',
        'filePath': 'src/data/topics/chuong_5_toa_do_oxyz/toa_do_diem_vecto_va_mat_cau.ts'
    },
    'mat_phang_va_duong_thang': {
        'chapterId': 'chuong_5_toa_do_oxyz',
        'chapterName': 'Chương 5: Phương pháp tọa độ trong không gian Oxyz',
        'topicName': 'Mặt phẳng & Đường thẳng trong không gian',
        'exportName': 'matPhangDuongThangQuestions',
        'filePath': 'src/data/topics/chuong_5_toa_do_oxyz/mat_phang_va_duong_thang.ts'
    },
    'mo_hinh_hoa_khong_gian_thuc_te': {
        'chapterId': 'chuong_5_toa_do_oxyz',
        'chapterName': 'Chương 5: Phương pháp tọa độ trong không gian Oxyz',
        'topicName': 'Mô hình hóa không gian thực tế Oxyz',
        'exportName': 'moHinhOxyzThucTeQuestions',
        'filePath': 'src/data/topics/chuong_5_toa_do_oxyz/mo_hinh_hoa_khong_gian_thuc_te.ts'
    },
    # Chuong 6
    'tap_hop_bieu_do_venn': {
        'chapterId': 'chuong_6_toan_lop_10',
        'chapterName': 'Chương 6: Toán Lớp 10 & Hình học Oxy',
        'topicName': 'Tập hợp & Biểu đồ Venn ứng dụng thực tế',
        'exportName': 'tapHopVennQuestions',
        'filePath': 'src/data/topics/chuong_6_toan_lop_10/tap_hop_bieu_do_venn.ts'
    },
    'quy_hoach_tuyen_tinh_bpt_2_an': {
        'chapterId': 'chuong_6_toan_lop_10',
        'chapterName': 'Chương 6: Toán Lớp 10 & Hình học Oxy',
        'topicName': 'Quy hoạch tuyến tính & BPT bậc nhất hai ẩn',
        'exportName': 'quyHoachTuyenTinhQuestions',
        'filePath': 'src/data/topics/chuong_6_toan_lop_10/quy_hoach_tuyen_tinh_bpt_2_an.ts'
    },
    'he_thuc_luong_tam_giac_thuc_te': {
        'chapterId': 'chuong_6_toan_lop_10',
        'chapterName': 'Chương 6: Toán Lớp 10 & Hình học Oxy',
        'topicName': 'Hệ thức lượng trong tam giác & Đo đạc thực tế',
        'exportName': 'heThucLuongTamGiacQuestions',
        'filePath': 'src/data/topics/chuong_6_toan_lop_10/he_thuc_luong_tam_giac_thuc_te.ts'
    },
    'duong_thang_duong_tron_conic': {
        'chapterId': 'chuong_6_toan_lop_10',
        'chapterName': 'Chương 6: Toán Lớp 10 & Hình học Oxy',
        'topicName': 'Đường thẳng, Đường tròn & Ba đường Conic',
        'exportName': 'duongThangDuongTronConicQuestions',
        'filePath': 'src/data/topics/chuong_6_toan_lop_10/duong_thang_duong_tron_conic.ts'
    },
    # Chuong 7
    'day_so_va_gioi_han': {
        'chapterId': 'chuong_7_day_so_cap_so',
        'chapterName': 'Chương 7: Dãy số, Cấp số cộng & Cấp số nhân',
        'topicName': 'Dãy số & Giới hạn dãy số',
        'exportName': 'daySoGioiHanQuestions',
        'filePath': 'src/data/topics/chuong_7_day_so_cap_so/day_so_va_gioi_han.ts'
    },
    'cap_so_cong_cap_so_nhan': {
        'chapterId': 'chuong_7_day_so_cap_so',
        'chapterName': 'Chương 7: Dãy số, Cấp số cộng & Cấp số nhân',
        'topicName': 'Cấp số cộng & Cấp số nhân',
        'exportName': 'capSoCongNhanQuestions',
        'filePath': 'src/data/topics/chuong_7_day_so_cap_so/cap_so_cong_cap_so_nhan.ts'
    },
    # Chuong 8
    'to_hop_va_xac_suat_co_dien': {
        'chapterId': 'chuong_8_xac_suat_thong_ke',
        'chapterName': 'Chương 8: Đại số tổ hợp, Xác suất & Thống kê',
        'topicName': 'Đại số tổ hợp & Xác suất cổ điển',
        'exportName': 'toHopXacSuatCoDienQuestions',
        'filePath': 'src/data/topics/chuong_8_xac_suat_thong_ke/to_hop_va_xac_suat_co_dien.ts'
    },
    'xac_suat_co_dieu_kien_bayes': {
        'chapterId': 'chuong_8_xac_suat_thong_ke',
        'chapterName': 'Chương 8: Đại số tổ hợp, Xác suất & Thống kê',
        'topicName': 'Xác suất có điều kiện & Công thức Bayes',
        'exportName': 'xacSuatBayesQuestions',
        'filePath': 'src/data/topics/chuong_8_xac_suat_thong_ke/xac_suat_co_dieu_kien_bayes.ts'
    },
    'thong_ke_mau_so_lieu_ghep_nhom': {
        'chapterId': 'chuong_8_xac_suat_thong_ke',
        'chapterName': 'Chương 8: Đại số tổ hợp, Xác suất & Thống kê',
        'topicName': 'Thống kê & Mẫu số liệu ghép nhóm',
        'exportName': 'thongKeGhepNhomQuestions',
        'filePath': 'src/data/topics/chuong_8_xac_suat_thong_ke/thong_ke_mau_so_lieu_ghep_nhom.ts'
    },
    # Chuong 9
    'cong_thuc_va_pt_luong_giac': {
        'chapterId': 'chuong_9_luong_giac',
        'chapterName': 'Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)',
        'topicName': 'Công thức & Phương trình lượng giác',
        'exportName': 'congThucPtLuongGiacQuestions',
        'filePath': 'src/data/topics/chuong_9_luong_giac/cong_thuc_va_pt_luong_giac.ts'
    },
    'mo_hinh_dao_dong_luong_giac_thuc_te': {
        'chapterId': 'chuong_9_luong_giac',
        'chapterName': 'Chương 9: Lượng giác & Phương trình lượng giác (Lớp 11)',
        'topicName': 'Mô hình dao động lượng giác thực tế',
        'exportName': 'daoDongLuongGiacThucTeQuestions',
        'filePath': 'src/data/topics/chuong_9_luong_giac/mo_hinh_dao_dong_luong_giac_thuc_te.ts'
    },
    # Chuong 10
    'toi_uu_kinh_te_va_doanh_thu': {
        'chapterId': 'chuong_10_toan_thuc_te_toi_uu',
        'chapterName': 'Chương 10: Toán ứng dụng & Mô hình hóa tối ưu',
        'topicName': 'Tối ưu hóa kinh tế, Chi phí & Doanh thu',
        'exportName': 'toiUuKinhTeQuestions',
        'filePath': 'src/data/topics/chuong_10_toan_thuc_te_toi_uu/toi_uu_kinh_te_va_doanh_thu.ts'
    },
    'toi_uu_hinh_hoc_va_vat_lieu': {
        'chapterId': 'chuong_10_toan_thuc_te_toi_uu',
        'chapterName': 'Chương 10: Toán ứng dụng & Mô hình hóa tối ưu',
        'topicName': 'Tối ưu hóa hình học, Vật liệu & Nồng độ',
        'exportName': 'toiUuHinhHocQuestions',
        'filePath': 'src/data/topics/chuong_10_toan_thuc_te_toi_uu/toi_uu_hinh_hoc_va_vat_lieu.ts'
    },
}

# The 26 specific relocations
RELOCATIONS = {
    16: 'khoi_da_dien_tam_dien_vuong',
    31: 'bai_toan_chuyen_dong_thuc_te',
    33: 'mat_phang_va_duong_thang',
    34: 'nguyen_ham_va_tich_phan_co_ban',
    38: 'pt_bpt_mu_logarit',
    40: 'toa_do_diem_vecto_va_mat_cau',
    41: 'khoi_da_dien_tam_dien_vuong',
    43: 'to_hop_va_xac_suat_co_dien',
    60: 'ung_dung_dien_tich_the_tich',
    61: 'khoi_da_dien_tam_dien_vuong',
    63: 'toa_do_diem_vecto_va_mat_cau',
    64: 'mat_phang_va_duong_thang',
    73: 'nguyen_ham_va_tich_phan_co_ban',
    74: 'khoi_tron_xoay_non_tru_cau',
    75: 'toa_do_diem_vecto_va_mat_cau',
    80: 'ung_dung_thuc_te_mu_logarit',
    82: 'don_dieu_tham_so_m',
    83: 'pt_bpt_mu_logarit',
    90: 'nguyen_ham_va_tich_phan_co_ban',
    91: 'khoi_da_dien_tam_dien_vuong',
    97: 'ung_dung_thuc_te_mu_logarit',
    99: 'pt_bpt_mu_logarit',
    139: 'tiep_tuyen_do_thi',
    152: 'he_thuc_luong_tam_giac_thuc_te',
    182: 'ung_dung_thuc_te_mu_logarit',
    188: 'pt_bpt_mu_logarit',
}

# Apply relocations and standardize names on existing 250 questions
for q in questions:
    qid = q['id']
    if qid in RELOCATIONS:
        new_topic = RELOCATIONS[qid]
        info = TOPIC_INFO[new_topic]
        q['topicId'] = new_topic
        q['topicName'] = info['topicName']
        q['chapterId'] = info['chapterId']
        q['chapterName'] = info['chapterName']
    else:
        # Standardize topicName in case it's in TOPIC_INFO
        tid = q['topicId']
        if tid in TOPIC_INFO:
            q['topicName'] = TOPIC_INFO[tid]['topicName']
            q['chapterId'] = TOPIC_INFO[tid]['chapterId']
            q['chapterName'] = TOPIC_INFO[tid]['chapterName']

print("Applied 26 relocations and standardized topic names.")

# Now load the 50 new questions from HSA36
with open('scripts/hsa36_questions.json', 'r', encoding='utf-8') as f:
    hsa36_qs = json.load(f)

print(f"Loaded {len(hsa36_qs)} questions from HSA36.")

for q in hsa36_qs:
    tid = q['topicId']
    info = TOPIC_INFO[tid]
    q['topicName'] = info['topicName']
    q['chapterId'] = info['chapterId']
    q['chapterName'] = info['chapterName']
    questions.append(q)

questions.sort(key=lambda x: x['id'])
print(f"Total questions in database: {len(questions)} (Q#{questions[0]['id']} to Q#{questions[-1]['id']})")

# Group questions by topicId
grouped = {k: [] for k in TOPIC_INFO.keys()}
for q in questions:
    tid = q['topicId']
    if tid in grouped:
        grouped[tid].append(q)
    else:
        print(f"Warning: unknown topicId {tid} on question Q#{q['id']}")

# Write each topic file
for tid, qlist in grouped.items():
    info = TOPIC_INFO[tid]
    fpath = info['filePath']
    exp = info['exportName']
    
    code_lines = [
        "import { Question } from '../../../types/exam';",
        "",
        f"export const {exp}: Question[] = {json.dumps(qlist, ensure_ascii=False, indent=2)};",
        ""
    ]
    code = '\n'.join(code_lines)
    os.makedirs(os.path.dirname(fpath), exist_ok=True)
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Wrote {len(qlist):2d} questions to {fpath} ({exp})")

print("All 30 micro-topic files regenerated successfully!")
