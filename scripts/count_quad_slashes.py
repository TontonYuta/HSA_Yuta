import glob
import re

files = glob.glob('src/data/topics/**/*.ts', recursive=True)

# Find any occurrences of 4 backslashes followed by a letter in file
quad_matches = []

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()

    # In python string: r'\\\\\\\\' is 4 literal backslashes
    m = list(re.finditer(r'\\\\\\\\([a-zA-Z]+)', c))
    if m:
        for match in m:
            cmd = match.group(1)
            quad_matches.append((f, cmd))

print(f"Total quad-backslash commands: {len(quad_matches)}")
from collections import Counter
counts = Counter(cmd for f, cmd in quad_matches)
for cmd, count in counts.most_common():
    print(f"  \\\\\\\\{cmd}: {count}")
