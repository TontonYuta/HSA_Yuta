import glob
import re

files = glob.glob('src/data/topics/**/*.ts', recursive=True)
quad_commands = {}

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()

    # Find 4 backslashes followed by a word
    matches = list(re.finditer(r'\\\\([a-zA-Z]+)', c))
    for m in matches:
        cmd = m.group(1)
        quad_commands[cmd] = quad_commands.get(cmd, 0) + 1

print("All 4-backslash commands found in source files:")
for cmd, cnt in sorted(quad_commands.items(), key=lambda x: -x[1]):
    print(f"  \\\\{cmd}: {cnt}")
