import os

print("Applying targeted fixes to known LaTeX issues...")

# Fix 1: tuong_giao_va_ham_hop.ts (Q#153, Q#230)
p1 = 'src/data/topics/chuong_1_ham_so/tuong_giao_va_ham_hop.ts'
with open(p1, 'r', encoding='utf-8') as f:
    c1 = f.read()

# Fix corrupt prompt in Q#153
corrupt_q153 = 'Số nghiệm thực của phương trình Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có bảng biến thiên: hàm số đồng biến từ $-\\infty$ lên cực đại tại $(-1; 4)$, nghịch biến xuống cực tiểu tại $(2; -1)$, rồi đồng biến lên $+\\infty$. Số nghiệm thực của phương trình $2f(x) - 5 = 0$ là:f(x) - 5 = 0$ là:'
clean_q153 = 'Số nghiệm thực của phương trình $2f(x) - 5 = 0$ là:'

if corrupt_q153 in c1:
    c1 = c1.replace(corrupt_q153, clean_q153)
    print("Fixed corrupt Q#153 text in tuong_giao_va_ham_hop.ts")

c1 = c1.replace('$y_{CT} = -1 < 2.5 < y_{CĐ} = 4$', '$y_{\\text{CT}} = -1 < 2.5 < y_{\\text{CĐ}} = 4$')
c1 = c1.replace('y_{CĐ}', 'y_{\\text{CĐ}}')
c1 = c1.replace('y_{CT}', 'y_{\\text{CT}}')
c1 = c1.replace('\\\\in \\mathbb{R}', '\\in \\mathbb{R}')

with open(p1, 'w', encoding='utf-8') as f:
    f.write(c1)

# Fix 2: cuc_tri_tham_so_m.ts (Q#225, Q#254)
p2 = 'src/data/topics/chuong_1_ham_so/cuc_tri_tham_so_m.ts'
with open(p2, 'r', encoding='utf-8') as f:
    c2 = f.read()

c2 = c2.replace('y_{CĐ}', 'y_{\\text{CĐ}}')
c2 = c2.replace('y_{CT}', 'y_{\\text{CT}}')
c2 = c2.replace('$$y_{CT} < m < y_{CĐ} \\iff 0 < m < 4$$', '$$y_{\\text{CT}} < m < y_{\\text{CĐ}} \\iff 0 < m < 4$$')

with open(p2, 'w', encoding='utf-8') as f:
    f.write(c2)
print("Fixed Q#225, Q#254 in cuc_tri_tham_so_m.ts")

# Fix 3: tiem_can_va_tiem_can_xien.ts (Q#108 \ne)
p3 = 'src/data/topics/chuong_1_ham_so/tiem_can_va_tiem_can_xien.ts'
with open(p3, 'r', encoding='utf-8') as f:
    c3 = f.read()

c3 = c3.replace('$m < 4$ và $m \\ne 3$', '$m < 4$ và $m \\\\ne 3$')
c3 = c3.replace('$m < 4$ và $m \ne 3$', '$m < 4$ và $m \\\\ne 3$')
c3 = c3.replace('$m \\le 4$ và $m \\ne 3$', '$m \\le 4$ và $m \\\\ne 3$')
c3 = c3.replace('$m \\le 4$ và $m \ne 3$', '$m \\le 4$ và $m \\\\ne 3$')
c3 = c3.replace('m - 3 \\ne 0 \\iff m \\ne 3', 'm - 3 \\\\ne 0 \\\\iff m \\\\ne 3')
c3 = c3.replace('m - 3 \ne 0 \\iff m \ne 3', 'm - 3 \\\\ne 0 \\\\iff m \\\\ne 3')
c3 = c3.replace('m < 4$ và $m \\ne 3$', 'm < 4$ và $m \\\\ne 3$')
c3 = c3.replace('m < 4$ và $m \ne 3$', 'm < 4$ và $m \\\\ne 3$')

with open(p3, 'w', encoding='utf-8') as f:
    f.write(c3)
print("Fixed Q#108 \\ne in tiem_can_va_tiem_can_xien.ts")

# Fix 4: don_dieu_tham_so_m.ts (Q#155 \ne)
p4 = 'src/data/topics/chuong_1_ham_so/don_dieu_tham_so_m.ts'
with open(p4, 'r', encoding='utf-8') as f:
    c4 = f.read()

c4 = c4.replace('\\forall x \\ne 1', '\\forall x \\\\ne 1')
c4 = c4.replace('\\forall x \ne 1', '\\forall x \\\\ne 1')
c4 = c4.replace('D = \\mathbb{R} \\setminus {1}', 'D = \\mathbb{R} \\setminus \\{1\\}')
c4 = c4.replace('D = \\\\mathbb{R} \\\\setminus {1}', 'D = \\\\mathbb{R} \\\\setminus \\{1\\}')

with open(p4, 'w', encoding='utf-8') as f:
    f.write(c4)
print("Fixed Q#155 in don_dieu_tham_so_m.ts")

# Fix 5: tich_phan_doi_bien_tung_phan.ts (l\left)
p5 = 'src/data/topics/chuong_3_nguyen_ham_tich_phan/tich_phan_doi_bien_tung_phan.ts'
with open(p5, 'r', encoding='utf-8') as f:
    c5 = f.read()

c5 = c5.replace('l\\left(', '\\left(')
c5 = c5.replace('l\\\\left(', '\\\\left(')

with open(p5, 'w', encoding='utf-8') as f:
    f.write(c5)
print("Fixed typo l\\left in tich_phan_doi_bien_tung_phan.ts")

# Fix 6: ung_dung_dien_tich_the_tich.ts (pi l\left)
p6 = 'src/data/topics/chuong_3_nguyen_ham_tich_phan/ung_dung_dien_tich_the_tich.ts'
with open(p6, 'r', encoding='utf-8') as f:
    c6 = f.read()

c6 = c6.replace('\\pi l\\left[', '\\pi \\left[')
c6 = c6.replace('\\\\pi l\\\\left[', '\\\\pi \\\\left[')

with open(p6, 'w', encoding='utf-8') as f:
    f.write(c6)
print("Fixed typo \\pi l\\left in ung_dung_dien_tich_the_tich.ts")

# Fix 7: day_so_va_gioi_han.ts (lim standardization)
p7 = 'src/data/topics/chuong_7_day_so_cap_so/day_so_va_gioi_han.ts'
with open(p7, 'r', encoding='utf-8') as f:
    c7 = f.read()

c7 = c7.replace('\\\\lim \\\\frac{3n^2', '\\\\lim\\\\limits_{n \\\\to +\\\\infty} \\\\frac{3n^2')
c7 = c7.replace('\\\\lim u_n', '\\\\lim\\\\limits_{n \\\\to +\\\\infty} u_n')

with open(p7, 'w', encoding='utf-8') as f:
    f.write(c7)
print("Standardized lim in day_so_va_gioi_han.ts")
