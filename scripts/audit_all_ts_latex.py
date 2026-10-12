import glob
import re

print("Scanning all TS topic files for LaTeX escape issues...")

suspicious_patterns = [
    (r'(?<!\\)\\ne(?=[0-9\s\\$])', r'\\ne (not equal with single backslash)'),
    (r'(?<!\\)\\ni(?=[0-9\s\\$])', r'\\ni with single backslash'),
    (r'(?<!\\)\\nu(?=[0-9\s\\$])', r'\\nu with single backslash'),
    (r'(?<!\\)\\theta\b', r'\\theta with single backslash (\t tab)'),
    (r'(?<!\\)\\times\b', r'\\times with single backslash (\t tab)'),
    (r'(?<!\\)\\text\b', r'\\text with single backslash (\t tab)'),
    (r'(?<!\\)\\to\b', r'\\to with single backslash (\t tab)'),
    (r'(?<!\\)\\tau\b', r'\\tau with single backslash (\t tab)'),
    (r'(?<!\\)\\frac\b', r'\\frac with single backslash (\f formfeed)'),
    (r'(?<!\\)\\begin\b', r'\\begin with single backslash (\b backspace)'),
    (r'(?<!\\)\\bar\b', r'\\bar with single backslash (\b backspace)'),
    (r'(?<!\\)\\right\b', r'\\right with single backslash (\r return)'),
    (r'(?<!\\)\\rho\b', r'\\rho with single backslash (\r return)'),
    (r'(?<!\\)\\alpha\b', r'\\alpha with single backslash (\a alert)'),
    (r'(?<!\\)\\approx\b', r'\\approx with single backslash (\a alert)'),
    (r'(?<!\\)\\ast\b', r'\\ast with single backslash (\a alert)'),
    (r'(?<!\\)\\angle\b', r'\\angle with single backslash (\a alert)'),
    (r'lim_\{', r'lim_{ without backslash'),
    (r'\\lim\s*(?!\\limits)\_\{', r'\lim without \limits'),
    (r'\\lim\s*\(', r'\lim followed by ('),
    (r'(?<!\\)sqrt\{', r'sqrt{ without backslash'),
    (r'(?<!\\)log_', r'log_ without backslash'),
    (r'(?<!\\)ln\b', r'ln without backslash in math'),
    (r'(?<!\\)mathbb\{', r'mathbb{ without backslash'),
    (r'\bpi\b(?=[\s\+\-\*\/\,\.\;\:\$\)])', r'standalone pi without backslash'),
]

files = glob.glob('src/data/topics/**/*.ts', recursive=True)
total_issues = 0

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    for line_idx, line in enumerate(lines, 1):
        for pattern, desc in suspicious_patterns:
            matches = list(re.finditer(pattern, line))
            for m in matches:
                total_issues += 1
                snippet = line.strip()
                if len(snippet) > 120:
                    start = max(0, m.start() - 30)
                    end = min(len(line), m.end() + 30)
                    snippet = line[start:end].strip()
                print(f"[{filepath}:{line_idx}] {desc}")
                print(f"   Line: {snippet}")

print(f"\nTotal suspicious occurrences found: {total_issues}")
