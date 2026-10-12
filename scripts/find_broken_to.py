import glob
import re

print("Finding all broken \\to occurrences in all topic files...")

files = glob.glob('src/data/topics/**/*.ts', recursive=True)
count = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()

    # In raw file: look for single backslash \to: (?<!\\)\\to\b
    # Also look for literal tab character \t followed by o: \to
    matches1 = list(re.finditer(r'(?<!\\)\\to\b', content))
    matches2 = list(re.finditer(r'\to\b', content))

    total = len(matches1) + len(matches2)
    if total > 0:
        print(f"{f}: {len(matches1)} single backslash \\to, {len(matches2)} tab-o")
        count += total

print(f"Total broken \\to instances: {count}")
