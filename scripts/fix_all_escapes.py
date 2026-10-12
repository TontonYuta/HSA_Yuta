import glob
import re

files = glob.glob('src/data/topics/**/*.ts', recursive=True)

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()

    # In raw file content, we want to find (?<!\\)\\text{ and replace with \\\\text{
    # In python raw string:
    # (?<!\\)\\text\{ matches single backslash followed by text{
    new_content = re.sub(r'(?<!\\)\\text\{', r'\\\\text{', content)
    new_content = re.sub(r'(?<!\\)\\ne\b', r'\\\\ne', new_content)
    new_content = re.sub(r'(?<!\\)\\le\b', r'\\\\le', new_content)
    new_content = re.sub(r'(?<!\\)\\ge\b', r'\\\\ge', new_content)

    if new_content != content:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(new_content)
        print(f"Fixed escapes in {f}")

print("Done fixing escapes.")
