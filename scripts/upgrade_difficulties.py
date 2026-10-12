import glob
import re
import os

files = sorted(glob.glob('src/data/topics/**/*.ts', recursive=True))

questions = {}

# Step 1: Read all questions and score their difficulty
for f in files:
    if f.endswith('index.ts'): continue
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    pattern = re.compile(r'\{\s*\"id\":\s*(\d+),[\s\S]*?\"content\":\s*\"([^\"]+)\"[\s\S]*?\"detailedSolution\":\s*\"([^\"]+)\"[\s\S]*?\"difficulty\":\s*\"([^\"]+)\"', re.DOTALL)
    for m in pattern.finditer(c):
        qid = int(m.group(1))
        content = m.group(2)
        sol = m.group(3)
        diff = m.group(4)
        
        score = 0
        if any(w in content.lower() for w in ['tham số', ' m ', '$m$', 'm^2', 'm \\in', 'm\\in']): score += 5
        if any(w in content.lower() for w in ['hàm hợp', 'g(x) = f(', 'f(x^2', 'f(2x', 'f(x - 1)']): score += 5
        if any(w in content.lower() for w in ['tối ưu', 'lớn nhất', 'nhỏ nhất', 'ngắn nhất', 'chi phí', 'doanh thu']): score += 3
        if any(w in content.lower() for w in ['bayes', 'điều kiện', 'toàn phần']): score += 4
        if any(w in content.lower() for w in ['khoảng cách giữa hai đường', 'mặt phẳng chứa', 'vuông góc chung']): score += 4
        if any(w in content.lower() for w in ['nghiệm nguyên', 'cặp số nguyên']): score += 4
        if len(sol) > 350: score += 2
        if len(sol) > 600: score += 2
        if any(w in content.lower() for w in ['công thức', 'tập nghiệm cơ bản', 'khẳng định nào đúng']): score -= 2
        
        questions[qid] = {
            'id': qid,
            'content': content,
            'file': f,
            'old_diff': diff,
            'score': score
        }

print(f"Total questions loaded: {len(questions)}")

# Step 2: Determine new difficulty per block of 50 questions
new_difficulties = {}

for b in range(6):
    start = b * 50 + 1
    end = start + 49
    block_qs = [questions[i] for i in range(start, end + 1)]
    # Sort by score ascending
    sorted_block = sorted(block_qs, key=lambda q: q['score'])
    
    # 5 easiest -> Thông hiểu (10%)
    for q in sorted_block[:5]:
        new_difficulties[q['id']] = 'Thông hiểu'
    
    # 14 hardest -> Vận dụng cao (28%)
    for q in sorted_block[-14:]:
        new_difficulties[q['id']] = 'Vận dụng cao'
        
    # Remaining 31 -> Vận dụng (62%)
    for q in sorted_block[5:-14]:
        new_difficulties[q['id']] = 'Vận dụng'

# Step 3: Update difficulty in the files
for f in files:
    if f.endswith('index.ts'): continue
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    def replacer(match):
        prefix = match.group(1)
        qid = int(match.group(2))
        middle = match.group(3)
        old_diff = match.group(4)
        new_diff = new_difficulties.get(qid, old_diff)
        return f'{prefix}"id": {qid}{middle}"difficulty": "{new_diff}"'
    
    new_c = re.sub(
        r'(\{\s*)\"id\":\s*(\d+)([\s\S]*?)\"difficulty\":\s*\"([^\"]+)\"',
        replacer,
        c
    )
    
    if new_c != c:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(new_c)
        print(f"Updated {f}")

print("All files updated successfully.")
