import re
import os
import json
from scripts.audit_candidates import get_candidates_for_topic
from scripts.vetting import vet_question
from scripts.format_test import polish_katex, format_opt_katex
from scripts.ingest_questions import clean_stem_katex, clean_solution_katex, extract_core_formula, get_existing_formulas, TOPIC_CONFIGS
from scripts.clean_preamble import strip_leaked_preamble

def is_clean_option(opt_str):
    if '\n' in opt_str:
        return False
    if opt_str in ["$", "$$", "$-$", "$- $", "$ $", ""]:
        return False
    clean_inner = opt_str.replace('$', '').strip()
    if clean_inner.endswith(('=', '<', '>', '+', '-', '\\le', '\\ge')):
        return False
    if clean_inner in ['m =', 'm \\le', 'm \\ge', 'm <', 'm >', 'y =', 'x =', 'P =', 'pq =', '-']:
        return False
    if len(clean_inner) == 0 or len(clean_inner) > 80:
        return False
    for leak_word in ["Mệnh đề", "thỏa mãn", "Lời giải", "Chọn", "Cho hàm số", "đồng biến", "nghịch biến"]:
        if leak_word in clean_inner:
            return False
    return True

def is_clean_stem(stem):
    if len(stem) < 25:
        return False
    if re.match(r'^\s*(?:\d+\s*\+|-?\d+\s*=|\\iff|suy ra|=|TH\s*\d)', stem):
        return False
    if re.search(r'(?:y\s*=\s*biến|y\s*=\s*dưới đây|dưới đây đúng\?\s*$)', stem):
        return False
    has_kw = any(w in stem.lower() for w in ["đồng biến", "nghịch biến", "cực trị", "cực đại", "cực tiểu", "lớn nhất", "nhỏ nhất", "cắt", "giao điểm", "tiếp xúc", "nghiệm", "tham số", "tiếp tuyến", "khoảng cách"])
    if not has_kw:
        return False
    return True

def produce_pristine_questions():
    existing_forms = get_existing_formulas()
    seen_forms = set(existing_forms)
    
    current_id = 351
    topic_results = {}
    
    for topic_id, cfg in TOPIC_CONFIGS.items():
        cands = get_candidates_for_topic(cfg["file"])
        pristine = []
        for q in cands:
            vq, status = vet_question(q)
            if not vq:
                continue
                
            raw_stem = strip_leaked_preamble(vq["stem"])
            cf = extract_core_formula(raw_stem)
            if cf and cf in seen_forms:
                continue
                
            content = clean_stem_katex(raw_stem)
            if not is_clean_stem(content):
                continue
                
            opts = [
                {"key": "A", "content": format_opt_katex(vq["options"]["A"])},
                {"key": "B", "content": format_opt_katex(vq["options"]["B"])},
                {"key": "C", "content": format_opt_katex(vq["options"]["C"])},
                {"key": "D", "content": format_opt_katex(vq["options"]["D"])}
            ]
            
            if not all(is_clean_option(o["content"]) for o in opts):
                continue
            opt_texts = [o["content"].replace('$', '').strip() for o in opts]
            if len(set(opt_texts)) < 4:
                continue
                
            sol = clean_solution_katex(vq["detailedSolution"])
            if len(sol) < 30:
                continue
                
            if cf:
                seen_forms.add(cf)
                
            q_obj = {
                "id": current_id,
                "type": "mcq",
                "chapterId": "chuong_1_ham_so",
                "chapterName": "Chương 1: Khảo sát hàm số & Ứng dụng đạo hàm",
                "topicId": topic_id,
                "topicName": cfg["topicName"],
                "content": content,
                "options": opts,
                "correctAnswer": vq["correctAnswer"],
                "detailedSolution": sol,
                "socraticHint": cfg["hint"],
                "difficulty": "Vận dụng" if len(content) < 160 else "Vận dụng cao"
            }
            pristine.append(q_obj)
            current_id += 1
            
        topic_results[topic_id] = pristine
        print(f"[{topic_id}] {len(pristine)} pristine questions (IDs: {pristine[0]['id']} -> {pristine[-1]['id']})")
        
    total = sum(len(v) for v in topic_results.values())
    print(f"\nGRAND TOTAL PRISTINE QUESTIONS: {total}")
    return topic_results

if __name__ == '__main__':
    res = produce_pristine_questions()
