import os
import json
import re
from scripts.produce_pristine import produce_pristine_questions

def format_question_ts(q):
    # Convert Question dict to pretty TS string
    lines = ["  {"]
    lines.append(f'    "id": {q["id"]},')
    lines.append(f'    "type": "mcq",')
    lines.append(f'    "chapterId": "{q["chapterId"]}",')
    lines.append(f'    "chapterName": "{q["chapterName"]}",')
    lines.append(f'    "topicId": "{q["topicId"]}",')
    lines.append(f'    "topicName": "{q["topicName"]}",')
    lines.append(f'    "content": {json.dumps(q["content"], ensure_ascii=False)},')
    
    # options
    lines.append('    "options": [')
    for idx, opt in enumerate(q["options"]):
        opt_comma = "," if idx < len(q["options"]) - 1 else ""
        lines.append('      {')
        lines.append(f'        "key": "{opt["key"]}",')
        lines.append(f'        "content": {json.dumps(opt["content"], ensure_ascii=False)}')
        lines.append(f'      }}{opt_comma}')
    lines.append('    ],')
    
    lines.append(f'    "correctAnswer": "{q["correctAnswer"]}",')
    lines.append(f'    "detailedSolution": {json.dumps(q["detailedSolution"], ensure_ascii=False)},')
    lines.append(f'    "socraticHint": {json.dumps(q["socraticHint"], ensure_ascii=False)},')
    lines.append(f'    "difficulty": "{q["difficulty"]}"')
    lines.append("  }")
    return "\n".join(lines)

def apply():
    topic_data = produce_pristine_questions()
    
    file_targets = {
        "don_dieu_tham_so_m": "src/data/topics/chuong_1_ham_so/don_dieu_tham_so_m.ts",
        "cuc_tri_tham_so_m": "src/data/topics/chuong_1_ham_so/cuc_tri_tham_so_m.ts",
        "max_min_tham_so_m": "src/data/topics/chuong_1_ham_so/max_min_tham_so_m.ts",
        "tuong_giao_va_ham_hop": "src/data/topics/chuong_1_ham_so/tuong_giao_va_ham_hop.ts",
    }
    
    counts = {}
    
    for topic_id, new_qs in topic_data.items():
        target_path = file_targets[topic_id]
        with open(target_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Count existing questions
        existing_count = len(re.findall(r'"id":\s*\d+', content))
        total_count = existing_count + len(new_qs)
        counts[topic_id] = total_count
        
        # Format new questions
        formatted_qs = ",\n".join(format_question_ts(q) for q in new_qs)
        
        # Replace the last ];
        # Find last occurrence of ];
        last_bracket_idx = content.rfind("];")
        if last_bracket_idx == -1:
            raise ValueError(f"Could not find closing ]; in {target_path}")
            
        # If there are existing questions before ];, add comma
        prefix = content[:last_bracket_idx].rstrip()
        if prefix.endswith(","):
            new_content = prefix + "\n" + formatted_qs + "\n];\n"
        else:
            new_content = prefix + ",\n" + formatted_qs + "\n];\n"
            
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(new_content)
            
        print(f"Updated {target_path}: {existing_count} -> {total_count} questions (+{len(new_qs)})")
        
    # Update CHAPTERS_METADATA in src/data/topics/index.ts
    index_path = "src/data/topics/index.ts"
    with open(index_path, "r", encoding="utf-8") as f:
        idx_content = f.read()
        
    for topic_id, total_cnt in counts.items():
        # Match topic block in CHAPTERS_METADATA
        # id: 'don_dieu_tham_so_m', ... questionCount: \d+
        pattern = re.compile(rf"(id:\s*'{topic_id}',[\s\S]*?questionCount:\s*)\d+", re.MULTILINE)
        idx_content = pattern.sub(rf"\g<1>{total_cnt}", idx_content)
        
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(idx_content)
        
    print(f"Updated {index_path} with new questionCounts: {counts}")

if __name__ == '__main__':
    apply()
