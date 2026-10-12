import glob
import re

files = glob.glob('src/data/topics/**/*.ts', recursive=True)
count = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()

    # Search for \\\\in (4 backslashes followed by in)
    matches = list(re.finditer(r'\\\\in\b', c))
    if matches:
        print(f"{f}: {len(matches)} occurrences of 4-backslash \\\\in")
        count += len(matches)

print(f"Total: {count}")
