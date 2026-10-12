import re
import os
import subprocess
import json

SYMBOL_MAP = {
    '': '=',
    '': '\\le ',
    '': '\\ge ',
    '': '\\mathbb{R}',
    '': '\'',
    '': '\\in ',
    '': '\\notin ',
    '': '\\{',
    '': '\\}',
    '': '[',
    '': ']',
    '': '[',
    '': '[',
    '': ']',
    '': ' \\iff ',
    '': ' \\implies ',
    '': '-',
    '–': '-',
    '—': '-',
    '': ' \\cdot ',
    '': '\\Delta ',
    '': '- ',
    '': '- ',
    '': '- ',
    '': '',
    '': '\\infty ',
    '': '\\ne ',
    '': ' \\cup ',
    '': ' \\cap ',
    '': ' \\subset ',
    '': '\\pm ',
    '': '(',
    '': ')',
    '': '\\to ',
    '': '\\forall ',
    '': '\\exists ',
    '': '\\emptyset ',
    '': '\\perp ',
    '': ';',
    '': '\\widehat',
}

def clean_text(text):
    for k, v in SYMBOL_MAP.items():
        text = text.replace(k, v)
    text = re.sub(r'TÀI LIỆU ÔN THI THPTQG \d{4}', '', text)
    text = re.sub(r'Điện thoại:\s*\d+', '', text)
    text = re.sub(r'Facebook Nguyễn Vương[^\n]*', '', text)
    text = re.sub(r'Fanpage Nguyễn Bảo Vương[^\n]*', '', text)
    text = re.sub(r'Blog:\s*Nguyễn Bảo Vương:[^\n]*', '', text)
    text = re.sub(r'Trang\s+\d+', '', text)
    text = re.sub(r'TÀI LIỆU DÀNH CHO[^\n]*', '', text)
    text = re.sub(r'Chuyên đề\s+\d+[^\n]*', '', text)
    text = re.sub(r'\x0c', '', text) # Form feed page breaks
    return text

def parse_pdf_file(pdf_path):
    raw = subprocess.check_output(["pdftotext", pdf_path, "-"]).decode("utf-8", errors="ignore")
    cleaned = clean_text(raw)
    # Split into questions by Câu \d+
    chunks = re.split(r'\n\s*Câu\s+(\d+)[\.:]', '\n' + cleaned)
    
    questions = []
    # chunks[0] is preamble before Câu 1
    # chunks[1] is number, chunks[2] is content of Câu 1, chunks[3] is number, chunks[4] is content of Câu 2...
    for i in range(1, len(chunks), 2):
        q_num = int(chunks[i])
        chunk_body = chunks[i+1].strip()
        questions.append((q_num, chunk_body))
    return questions

if __name__ == '__main__':
    for fname in ["File đáp án 7-8.pdf", "File đáp án 78.pdf", "File đáp án 78-1.pdf", "File đáp án 78-2.pdf"]:
        p = os.path.join("/home/tontonyuta/Downloads/HamSo-ThamSom", fname)
        qs = parse_pdf_file(p)
        print(f"{fname}: parsed {len(qs)} question chunks")
