import re
import os
from scripts.audit_candidates import get_candidates_for_topic

def is_option_valid(opt_text):
    t = opt_text.strip()
    if len(t) == 0:
        return False
    # Reject broken multiline bracket remnants like "[\n." or "[ m \ge -1" with no close
    if t.startswith('[\n') or t.endswith('\n.'):
        return False
    if t.count('[') != t.count(']'):
        # unless it is an interval like [1; 2) or (1; 2]
        if not re.search(r'[\[\(]\s*[^;]+;\s*[^\]\)]+[\]\)]', t):
            return False
    # Reject if it leaked "Lời giải" or "Chọn"
    if "Lời giải" in t or "Chọn" in t:
        return False
    # Reject if it contains incomplete words
    if re.search(r'\b(?:đồng biến|nghịch biến|cực trị|tọa độ)\b', t) and len(t) > 100:
        return False
    return True

def clean_fraction_in_stem(stem):
    # Fix fractions where numerator and denominator appear on separate lines around polynomial
    # E.g.
    # 1\nf ( x) = x3 + mx 2 + 4 x + 3\n3
    # -> f(x) = \frac{1}{3}x^3 + mx^2 + 4x + 3
    lines = [l.strip() for l in stem.split('\n') if l.strip()]
    if len(lines) >= 3:
        # Check if line 0 is a number (like 1) and line -1 is a number (like 3)
        if lines[0].isdigit() and lines[-1].isdigit():
            num = lines[0]
            den = lines[-1]
            middle = ' '.join(lines[1:-1])
            # Check where the fraction belongs (usually at front of x^3 or x)
            middle = re.sub(r'([=:])\s*x', rf'\1 \\frac{{{num}}}{{{den}}}x', middle)
            middle = re.sub(r'([=:])\s*-\s*x', rf'\1 -\\frac{{{num}}}{{{den}}}x', middle)
            stem = middle
        elif lines[0].isdigit() and len(lines) > 2 and lines[1].isdigit():
            # Sometimes 1 then 3 then equation
            num = lines[0]
            den = lines[1]
            middle = ' '.join(lines[2:])
            middle = re.sub(r'([=:])\s*x', rf'\1 \\frac{{{num}}}{{{den}}}x', middle)
            middle = re.sub(r'([=:])\s*-\s*x', rf'\1 -\\frac{{{num}}}{{{den}}}x', middle)
            stem = middle
    return stem

def vet_question(q):
    stem = q["stem"].strip()
    opts = q["options"]
    sol = q["detailedSolution"].strip()
    ans = q["correctAnswer"]
    
    # 1. Clean stem fraction if any
    stem = clean_fraction_in_stem(stem)
    
    # 2. Check options validity
    for k in ['A', 'B', 'C', 'D']:
        if not is_option_valid(opts[k]):
            return None, f"Option {k} invalid: {opts[k]!r}"
            
    # Check all options distinct
    opt_vals = [opts[k].strip().rstrip('.') for k in ['A', 'B', 'C', 'D']]
    if len(set(opt_vals)) < 4:
        return None, "Duplicate option values"
        
    # 3. Check stem validity
    # Remove exam metadata tag like (Đề Tham Khảo Lần 2 2020) or (Mã 123 - 2017)
    tag_m = re.match(r'^\s*\(([^)]+)\)\s*', stem)
    tag = tag_m.group(1) if tag_m else ""
    clean_stem = stem[tag_m.end():].strip() if tag_m else stem
    
    if len(clean_stem) < 15:
        return None, "Stem too short"
        
    # Check that stem mentions function and question about m
    if not (re.search(r'[ymf]\s*[\(=]', clean_stem) or 'hàm số' in clean_stem or 'đồ thị' in clean_stem):
        return None, "Stem missing function"
        
    # 4. Check solution validity
    if len(sol) < 25:
        return None, "Solution too short"
        
    return {
        'tag': tag,
        'stem': clean_stem,
        'options': {k: opts[k].strip().rstrip('.') for k in ['A', 'B', 'C', 'D']},
        'correctAnswer': ans,
        'detailedSolution': sol
    }, "OK"

if __name__ == '__main__':
    for fname in ["File đáp án 7-8.pdf", "File đáp án 78.pdf", "File đáp án 78-1.pdf", "File đáp án 78-2.pdf"]:
        cands = get_candidates_for_topic(fname)
        vetted = []
        fail_reasons = {}
        for q in cands:
            vq, status = vet_question(q)
            if vq:
                vetted.append(vq)
            else:
                fail_reasons[status] = fail_reasons.get(status, 0) + 1
        print(f"=== {fname} ===")
        print(f"Total raw: {len(cands)}, Passed strict vetting: {len(vetted)}")
        print(f"Rejections: {fail_reasons}")
