import glob
import re

print("Finding all instances of corrupted arrow ' o ' across all files...")

files = glob.glob('src/data/topics/**/*.ts', recursive=True)
total = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()

    # Matches like: x  o, t  o, n  o, \to written as o
    # e.g., r'\b([xtn])\s+o\s+([+\-]?\\?(?:infty|\d+))'
    # or inside math: r'(\$[^$]*\b[xtn])\s+o\s+'
    matches = list(re.finditer(r'\b([xtn])\s+o\s+([+\-]?\\?(?:infty|\d+|pminfty))', c))
    if matches:
        print(f"{f}: {len(matches)} matches")
        for m in matches:
            print("  ", repr(m.group(0)))
        total += len(matches)

print(f"Total corrupted arrows found: {total}")
