import glob
import re

files = sorted(glob.glob("src/data/topics/**/*.ts", recursive=True))
print(f"Fixing remaining LaTeX typos in {len(files)} files...")

for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        orig = fp.read()
    
    text = orig

    # 1. Digit + trig function: 3sin -> 3\sin, 4cos -> 4\cos, 3cos -> 3\cos
    text = re.sub(r'(\d+)sin\b', r'\1\\\\sin', text)
    text = re.sub(r'(\d+)cos\b', r'\1\\\\cos', text)
    text = re.sub(r'(\d+)tan\b', r'\1\\\\tan', text)
    text = re.sub(r'(\d+)cot\b', r'\1\\\\cot', text)
    text = re.sub(r'cosl\\left', r'\\\\cos\\\\left', text)

    # 2. Digit + log / log without backslash
    text = re.sub(r'(\d+)log_', r'\1\\\\log_', text)
    text = re.sub(r'(?<![\\a-zA-Z])log_', r'\\\\log_', text)
    text = re.sub(r'(?<![\\a-zA-Z])log_(\d+)', r'\\\\log_\1', text)
    text = re.sub(r'\blog_\{([^\}]+)\}', r'\\\\log_{\1}', text)

    # 3. max / min without backslash
    text = re.sub(r'\bmax\s+y\b', r'\\\\max y', text)
    text = re.sub(r'\bmin\s+y\b', r'\\\\min y', text)
    text = re.sub(r'OM_\{min\}', r'OM_{\\\\min}', text)
    text = re.sub(r'd_\{max\}', r'd_{\\\\max}', text)
    text = re.sub(r'x_\{max\}', r'x_{\\\\max}', text)
    text = re.sub(r'x_\{min\}', r'x_{\\\\min}', text)

    # 4. sum without backslash
    text = re.sub(r'(?<!\\)\bsum\s+n_i', r'\\\\sum n_i', text)
    text = re.sub(r'\\frac\{1\}\{n\}sum', r'\\\\frac{1}{n}\\\\sum', text)

    if text != orig:
        with open(f, "w", encoding="utf-8") as fp:
            fp.write(text)
        print(f"Updated: {f}")

print("Remaining LaTeX fixes applied successfully!")
