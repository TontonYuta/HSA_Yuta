import glob
import re

files = glob.glob('src/data/topics/**/*.ts', recursive=True)

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()

    m = list(re.finditer(r'\\\\\\\\([a-zA-Z]+)', c))
    if m:
        print(f"=== {f} ===")
        for match in m:
            start = max(0, match.start() - 25)
            end = min(len(c), match.end() + 25)
            snippet = c[start:end].replace('\n', ' ')
            print(f"  [{match.group(1)}]: {snippet}")
