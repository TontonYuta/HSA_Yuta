import re

def strip_leaked_preamble(stem):
    # Regex to find legitimate beginning of Vietnamese question stem:
    # 1. An exam tag like (Mã 123 - 2017) or (Chuyên ...) or (Đề ...)
    # 2. Or a standard question starter: Cho, Tìm, Có, Gọi, Biết, Đường thẳng, Hỏi, Giả sử, Tập hợp, Với, Số, Nếu, Đồ thị, Xác định, v.v.
    # We find the earliest match of (Tag)? Starter
    starter_pattern = re.compile(
        r'(\([^\)]*(?:Chuyên|Sở|Mã|Đề|THPT|Cụm|ĐH|Toán|Lần|Đô Lương|Hạ Long|Vĩnh Phúc|Bắc Ninh|Hải Phòng|Hà Nội|Nam Định)[^\)]*\)\s*)?'
        r'\b(?:Cho|Tìm|Có|Gọi|Biết|Đường|Hỏi|Giả|Tập|Với|Số|Nếu|Đồ|Xác|Xét|Hình|Tại|Trong)\b'
    )
    m = starter_pattern.search(stem)
    if m and m.start() > 0:
        stem = stem[m.start():].strip()
    return stem

if __name__ == '__main__':
    samples = [
        "3 (m + 1) m +1 2 3 =- \\iff ^3 (m + 1) = -8 \\iff $m = -1$ - 3 . 16 2 3 (Chuyên Lương Văn Chánh - Phú Yên - 2018) Gọi S là tập hợp tất cả các giá trị thực của tham số m",
        "4+$m = 3$ \\iff $m = 5$ suy ra m > 4 . 3 (Mã 110 2017) Cho hàm số $y = x+m$",
        "x1 + x^2 2 + 2m =- = -m - 1 . 2 2 2x + 3 . Điểm M (x0 ; y0) (THPT Gia Lộc) Gọi (H) là đồ thị hàm số"
    ]
    for s in samples:
        print("BEFORE:", s[:50])
        print("AFTER :", strip_leaked_preamble(s)[:50])
        print("-" * 40)
