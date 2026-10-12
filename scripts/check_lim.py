import glob
import re

print("Checking lim usage in all topic files...")

files = glob.glob('src/data/topics/**/*.ts', recursive=True)

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        lines = fp.readlines()
    for idx, l in enumerate(lines, 1):
        if 'lim' in l:
            # Match any \lim or lim_
            for m in re.finditer(r'(\\+lim(?:\\limits)?_?\{?[^\$\n]+)', l):
                text = m.group(0)
                if '\\limits' not in text and 'eliminate' not in text:
                    print(f"{f}:{idx} => {text[:60]}")
