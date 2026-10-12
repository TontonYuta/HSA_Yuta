import glob
import re

files = sorted(glob.glob("src/data/topics/**/*.ts", recursive=True))
print(f"Applying LaTeX corrections to {len(files)} files...")

for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        orig = fp.read()
    
    text = orig

    # 1. Typos: sinl, l\left, anwidehat
    text = re.sub(r'sinl\\left\(', r'\\\\sin\\\\left(', text)
    text = re.sub(r'\bsinl\b', r'\\\\sin', text)
    text = re.sub(r'\bl\\left', r'\\\\left', text)
    text = re.sub(r'\b anwidehat\{', r'\\\\tan\\\\widehat{', text)
    text = re.sub(r'(?<!\\) anwidehat', r'\\\\tan\\\\widehat', text)
    text = re.sub(r'\\pi l\\left\[', r'\\\\pi \\\\left[', text)

    # 2. Greek and Pi: k2pi, 8pi, 16pi, 4pi, 15pi, 7pi, 5pi, 3pi, kpi
    # In math expressions: replace 8pi with 8\\pi
    text = re.sub(r'\b(\d+)pi\b', r'\1\\\\pi', text)
    text = re.sub(r'\bk(\d*)pi\b', r'k\1\\\\pi', text)
    text = re.sub(r'(?<!\\)k2pi\b', r'k2\\\\pi', text)
    text = re.sub(r'(?<!\\)kpi\b', r'k\\\\pi', text)

    # 3. in mathbb and mathbb
    text = re.sub(r'\bin mathbb\{', r'\\\\in \\\\mathbb{', text)
    text = re.sub(r'\bin \\\\mathbb\{', r'\\\\in \\\\mathbb{', text)
    text = re.sub(r'(?<!\\)mathbb\{', r'\\\\mathbb{', text)

    # 4. sqrt missing backslash or letter attached (e.g. asqrt, 5sqrt, 2sqrt, 100sqrt, a^3sqrt)
    text = re.sub(r'([0-9a-zA-Z\^]+)sqrt\{', r'\1\\\\sqrt{', text)
    text = re.sub(r'(?<!\\)sqrt\{', r'\\\\sqrt{', text)
    text = re.sub(r'(?<!\\)frac\{', r'\\\\frac{', text)

    # 5. infty and pminfty
    text = re.sub(r'pminfty', r'\\\\pm\\\\infty', text)
    text = re.sub(r'\\\\pm infty', r'\\\\pm\\\\infty', text)
    text = re.sub(r'(?<!\\)pm\\\\infty', r'\\\\pm\\\\infty', text)
    text = re.sub(r'(?<!\\)infty', r'\\\\infty', text)

    # 6. lim and \to
    text = re.sub(r'(?<!\\)lim_\{', r'\\\\lim\\\\limits_{', text)
    text = re.sub(r'\\\\lim_\{', r'\\\\lim\\\\limits_{', text)
    text = re.sub(r'([xt])\s+o\s+([+\-]?\\?(?:infty|pminfty|\d+))', r'\1 \\\\to \2', text)

    # 7. setminus, forall
    text = re.sub(r'\bsetminus\b', r'\\\\setminus', text)
    text = re.sub(r'\bforall\b', r'\\\\forall', text)

    # 8. Trigonometric functions
    text = re.sub(r'\b2bccos\b', r'2bc \\\\cos', text)
    text = re.sub(r'\b2sin\b', r'2\\\\sin', text)
    text = re.sub(r'\b2cos\b', r'2\\\\cos', text)

    if text != orig:
        with open(f, "w", encoding="utf-8") as fp:
            fp.write(text)
        print(f"Updated: {f}")

print("LaTeX corrections applied successfully!")
