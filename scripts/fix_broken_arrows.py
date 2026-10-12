import glob
import re

print("Fixing all ' o ' broken arrows...")

files = [
    'src/data/topics/chuong_1_ham_so/tiem_can_va_tiem_can_xien.ts',
    'src/data/topics/chuong_10_toan_thuc_te_toi_uu/toi_uu_kinh_te_va_doanh_thu.ts',
]

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    orig = c

    # Replace x  o with x \\to
    c = re.sub(r'\bx\s+o\s+', r'x \\\\to ', c)
    # Replace t  o with t \\to
    c = re.sub(r'(\b|-0\.2)t\s+o\s+', r'\1t \\\\to ', c)

    if c != orig:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(c)
        print(f"Fixed broken arrows in {f}")

print("Arrow fix complete.")
