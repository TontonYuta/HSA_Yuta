import glob
import re

print("Fixing math unit texts across all topic files...")

files = glob.glob('src/data/topics/**/*.ts', recursive=True)

# Replacements: move Vietnamese units out of math delimiters when at the end of inline math
unit_patterns = [
    (r'\$(\d+(?:[,\.]\d+)?)\\text\{\s*(triệu đồng|học sinh|giờ|nghìn người|quả|đồng|phút|tấn)\s*\}\$', r'$\1$ \2'),
    (r'(\d+)\\text\{\s*(triệu đồng|học sinh|giờ|nghìn người|quả|đồng|phút|tấn)\s*\}', r'\1 \2'),
    (r'\\text\{\s*(triệu đồng|học sinh|giờ|nghìn người|quả|đồng|phút|tấn)\s*\}', r'(\1)'),
    (r'\$y = 1\\text\{\s*là một TCN\.\s*\}\$', r'$y = 1$ là một tiệm cận ngang'),
    (r'\$y = -1\\text\{\s*là một TCN\.\s*\}\$', r'$y = -1$ là một tiệm cận ngang'),
    (r'\$x = 2\\text\{\s*là một TCĐ\.\s*\}\$', r'$x = 2$ là một tiệm cận đứng'),
    (r'\$x = -2\\text\{\s*là một TCĐ\.\s*\}\$', r'$x = -2$ là một tiệm cận đứng'),
    (r'\\text\{chiều cao\}', r'h'),
    (r'\\text\{đáy\}', r'a'),
    (r'\\text\{cỏ\}', r'\\text{co}'),
    (r'\\text\{đá\}', r'\\text{da}'),
    (r'\\text\{Tổng tiền\}', r'T'),
]

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    orig = c

    for pat, rep in unit_patterns:
        c = re.sub(pat, rep, c)

    if c != orig:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(c)
        print(f"Updated units in {f}")

print("Unit text cleanup complete.")
