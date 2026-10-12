import os

target_files = [
    'src/data/topics/chuong_5_toa_do_oxyz/mat_phang_va_duong_thang.ts',
    'src/data/topics/chuong_4_hinh_hoc_khong_gian/goc_va_khoang_cach.ts',
]

for p in target_files:
    with open(p, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    # In JSON string in file, we need 4 backslashes so that when parsed it has 2 backslashes: \\vec
    # Currently it has: "[$[\vec" or "[\vec" with 2 backslashes
    content = content.replace('"[\\\\vec', '"[\\\\\\\\vec')
    content = content.replace(' $[\\\\vec', ' $[\\\\\\\\vec')
    content = content.replace('($[\\\\vec', '($[\\\\\\\\vec')
    content = content.replace('[$[\\\\vec', '[$[\\\\\\\\vec')
    content = content.replace(' $[\\vec', ' $[\\\\\\\\vec')
    content = content.replace('[$[\\vec', '[$[\\\\\\\\vec')
    content = content.replace('[\\vec', '[\\\\\\\\vec')
    
    with open(p, 'w', encoding='utf-8') as fp:
        fp.write(content)
    print('Updated', p)
