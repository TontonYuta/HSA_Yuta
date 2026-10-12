import re
import os
import json
import subprocess

from scripts.audit_candidates import get_candidates_for_topic
from scripts.vetting import vet_question, is_option_valid
from scripts.format_test import polish_katex, format_opt_katex

def fix_floating_fractions(text):
    lines = text.split('\n')
    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if re.match(r'^-?\d+$', line) and i + 2 < len(lines):
            num = line
            eq_line = lines[i+1].strip()
            den_line = lines[i+2].strip()
            if re.match(r'^-?\d+$', den_line) and re.search(r'(?:y|f\s*\(\s*x\s*\))\s*=', eq_line):
                frac = f"\\frac{{{num}}}{{{den_line}}}"
                eq_line = re.sub(r'(=)\s*(?:-\s*)?x', rf'\1 {frac}x', eq_line)
                new_lines.append(eq_line)
                i += 3
                continue
        new_lines.append(lines[i])
        i += 1
    return '\n'.join(new_lines)

def clean_stem_katex(stem):
    s = fix_floating_fractions(stem)
    s = polish_katex(s)
    # Wrap equations in $ if not wrapped
    # 1. Intervals
    s = re.sub(r'(?<!\$)([\(\[][^\]\)\$]*\\infty[^\]\)\$]*[\)\]])(?!\$)', r'$\1$', s)
    s = re.sub(r'(?<!\$)(\[[^\]\$]*;[^\]\$]*\])(?!\$)', r'$\1$', s)
    # 2. Main formula y = ... or f(x) = ...
    def wrap_formula(m):
        f = m.group(1).strip()
        return f"${f}$"
    s = re.sub(r'(?<!\$)((?:y|f\(x\))\s*=\s*[^,;\.\n\?]+)(?!\$)', wrap_formula, s)
    # 3. Parameter m or x conditions
    s = re.sub(r'(?<!\$)\b(x\s*=\s*-?\d+)\b(?!\$)', r'$\1$', s)
    s = re.sub(r'(?<!\$)\b(m\s*=\s*-?\d+)\b(?!\$)', r'$\1$', s)
    # 4. \mathbb{R}
    s = re.sub(r'(?<!\$)\\mathbb\{R\}(?!\$)', r'$\\mathbb{R}$', s)
    # Clean up double $$ or empty $ $
    s = re.sub(r'\$\s*\$', ' ', s)
    # Clean whitespace
    s = re.sub(r'[ \t]+', ' ', s)
    s = re.sub(r'\n+', ' ', s).strip()
    return s

def clean_solution_katex(sol):
    s = fix_floating_fractions(sol)
    s = polish_katex(s)
    lines = [l.strip() for l in s.split('\n') if l.strip()]
    cleaned_lines = []
    for line in lines:
        # Wrap standalone equations in $$ ... $$ or $ ... $
        line = re.sub(r'\\mathbb\{R\}', r'\\mathbb{R}', line)
        cleaned_lines.append(line)
    res = '\n'.join(cleaned_lines)
    # Escape quotes
    return res

def extract_core_formula(stem):
    m = re.search(r'(?:y|f\s*\(\s*x\s*\)|g\s*\(\s*x\s*\))\s*=\s*([^,\.\n\?]+)', stem)
    if m:
        f = m.group(1).strip()
        f = re.sub(r'\\frac\{([^}]+)\}\{([^}]+)\}', r'\1/\2', f)
        f = re.sub(r'\s+', '', f)
        return f
    chars = re.sub(r'[^a-zA-Z0-9\+\-\*/\^=]', '', stem)
    return chars

def get_existing_formulas():
    existing_files = [
      "src/data/topics/chuong_1_ham_so/don_dieu_tham_so_m.ts",
      "src/data/topics/chuong_1_ham_so/cuc_tri_tham_so_m.ts",
      "src/data/topics/chuong_1_ham_so/max_min_tham_so_m.ts",
      "src/data/topics/chuong_1_ham_so/tuong_giao_va_ham_hop.ts",
      "src/data/topics/chuong_1_ham_so/tiem_can_va_tiem_can_xien.ts",
      "src/data/topics/chuong_1_ham_so/tiep_tuyen_do_thi.ts"
    ]
    formulas = set()
    for ef in existing_files:
        with open(ef, "r", encoding="utf-8") as f:
            t = f.read()
        for m in re.finditer(r'"content":\s*"([^"]+)"', t):
            c = m.group(1)
            cf = extract_core_formula(c)
            if cf:
                formulas.add(cf)
    return formulas

TOPIC_CONFIGS = {
    "don_dieu_tham_so_m": {
        "file": "File đáp án 7-8.pdf",
        "target_file": "src/data/topics/chuong_1_ham_so/don_dieu_tham_so_m.ts",
        "topicName": "Tính đơn điệu của hàm số",
        "hint": "Hàm số đồng biến (nghịch biến) khi và chỉ khi đạo hàm $y' \\ge 0$ ($y' \\le 0$) với mọi $x$ thuộc tập xác định. Xét dấu tam thức bậc hai hoặc cô lập tham số $m$."
    },
    "cuc_tri_tham_so_m": {
        "file": "File đáp án 78.pdf",
        "target_file": "src/data/topics/chuong_1_ham_so/cuc_tri_tham_so_m.ts",
        "topicName": "Cực trị của hàm số",
        "hint": "Điểm cực trị $x_0$ thỏa mãn $y'(x_0) = 0$. Kiểm tra dấu của $y''(x_0)$ ($y'' > 0$ đạt cực tiểu, $y'' < 0$ đạt cực đại) hoặc lập bảng biến thiên."
    },
    "max_min_tham_so_m": {
        "file": "File đáp án 78-1.pdf",
        "target_file": "src/data/topics/chuong_1_ham_so/max_min_tham_so_m.ts",
        "topicName": "Giá trị lớn nhất & Giá trị nhỏ nhất (Max - Min)",
        "hint": "Tính đạo hàm $y'$, tìm các nghiệm thuộc đoạn đang xét, tính giá trị tại các đầu mút và nghiệm rồi so sánh theo tham số $m$."
    },
    "tuong_giao_va_ham_hop": {
        "file": "File đáp án 78-2.pdf",
        "target_file": "src/data/topics/chuong_1_ham_so/tuong_giao_va_ham_hop.ts",
        "topicName": "Tương giao đồ thị & Số nghiệm hàm hợp",
        "hint": "Lập phương trình hoành độ giao điểm, biến đổi về dạng tích hoặc cô lập tham số $m$ để biện luận số nghiệm phân biệt."
    }
}

def generate_vetted_questions():
    existing_formulas = get_existing_formulas()
    seen_formulas = set(existing_formulas)
    
    current_id = 351
    topic_questions = {}
    
    for topic_id, cfg in TOPIC_CONFIGS.items():
        cands = get_candidates_for_topic(cfg["file"])
        vetted_list = []
        for q in cands:
            vq, status = vet_question(q)
            if not vq:
                continue
            cf = extract_core_formula(vq["stem"])
            if cf and cf in seen_formulas:
                continue
            if cf:
                seen_formulas.add(cf)
                
            # Build Question object
            content_cleaned = clean_stem_katex(vq["stem"])
            opt_A = format_opt_katex(vq["options"]["A"])
            opt_B = format_opt_katex(vq["options"]["B"])
            opt_C = format_opt_katex(vq["options"]["C"])
            opt_D = format_opt_katex(vq["options"]["D"])
            
            # Additional check: ensure content is not empty and has question mark or period
            if len(content_cleaned) < 15:
                continue
                
            q_obj = {
                "id": current_id,
                "type": "mcq",
                "chapterId": "chuong_1_ham_so",
                "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
                "topicId": topic_id,
                "topicName": cfg["topicName"],
                "content": content_cleaned,
                "options": [
                    {"key": "A", "content": opt_A},
                    {"key": "B", "content": opt_B},
                    {"key": "C", "content": opt_C},
                    {"key": "D", "content": opt_D}
                ],
                "correctAnswer": vq["correctAnswer"],
                "detailedSolution": clean_solution_katex(vq["detailedSolution"]),
                "socraticHint": cfg["hint"],
                "difficulty": "Vận dụng" if len(content_cleaned) < 180 else "Vận dụng cao"
            }
            vetted_list.append(q_obj)
            current_id += 1
            
        topic_questions[topic_id] = vetted_list
        print(f"Generated {len(vetted_list)} validated questions for {topic_id}")
        
    print(f"\nFinal Question ID reached: {current_id - 1}")
    return topic_questions

if __name__ == '__main__':
    tqs = generate_vetted_questions()
