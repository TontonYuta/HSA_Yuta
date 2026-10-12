const fs = require('fs');
const path = require('path');

const bbtMap = {
  104: {
    file: 'src/data/topics/chuong_1_ham_so/tuong_giao_va_ham_hop.ts',
    content: 'Cho hàm số bậc ba $y = f(x)$ có bảng biến thiên như sau:\\n$$\\\\begin{array}{|c|ccccccc|}\\n\\\\hline\\nx & -\\\\infty & & -1 & & 1 & & +\\\\infty \\\\\\\\\\n\\\\hline\\nf\'(x) & & + & 0 & - & 0 & + & \\\\\\\\\\n\\\\hline\\n& & & 2 & & & & +\\\\infty \\\\\\\\\\nf(x) & & \\\\nearrow & & \\\\searrow & & \\\\nearrow & \\\\\\\\\\n& -\\\\infty & & & & -2 & & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\nSố nghiệm thực phân biệt của phương trình $f(f(x)) = 0$ là:'
  },
  153: {
    file: 'src/data/topics/chuong_1_ham_so/tuong_giao_va_ham_hop.ts',
    content: 'Cho hàm số $y = f(x)$ liên tục trên $\\\\mathbb{R}$ có bảng biến thiên như sau:\\n$$\\\\begin{array}{|c|ccccccc|}\\n\\\\hline\\nx & -\\\\infty & & -1 & & 2 & & +\\\\infty \\\\\\\\\\n\\\\hline\\nf\'(x) & & + & 0 & - & 0 & + & \\\\\\\\\\n\\\\hline\\n& & & 4 & & & & +\\\\infty \\\\\\\\\\nf(x) & & \\\\nearrow & & \\\\searrow & & \\\\nearrow & \\\\\\\\\\n& -\\\\infty & & & & -1 & & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\nSố nghiệm thực của phương trình $2f(x) - 5 = 0$ là:'
  },
  158: {
    file: 'src/data/topics/chuong_1_ham_so/tiem_can_va_tiem_can_xien.ts',
    content: 'Cho hàm số $y = f(x)$ có bảng biến thiên như sau:\\n$$\\\\begin{array}{|c|ccccc|}\\n\\\\hline\\nx & -\\\\infty & & 1 & & +\\\\infty \\\\\\\\\\n\\\\hline\\n& & & +\\\\infty & & \\\\\\\\\\nf(x) & & & || & & 2 \\\\\\\\\\n& 2 & & || & & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\nBiết $\\\\lim\\\\limits_{x \\\\to -\\\\infty} f(x) = 2$, $\\\\lim\\\\limits_{x \\\\to +\\\\infty} f(x) = 2$ và $\\\\lim\\\\limits_{x \\\\to 1^+} f(x) = +\\\\infty$. Khẳng định nào sau đây là đúng?'
  },
  223: {
    file: 'src/data/topics/chuong_1_ham_so/don_dieu_tham_so_m.ts',
    content: 'Cho hàm số $f(x)$ liên tục trên $\\\\mathbb{R}$ có bảng xét dấu của đạo hàm $f\'(x)$ như sau:\\n$$\\\\begin{array}{|c|ccccccc|}\\n\\\\hline\\nx & -\\\\infty & & -1 & & 2 & & +\\\\infty \\\\\\\\\\n\\\\hline\\nf\'(x) & & - & 0 & - & 0 & + & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\n(Đạo hàm $f\'(x) \\\\le 0$ với mọi $x \\\\le 2$, tiếp xúc trục hoành tại $x = -1$ và đổi dấu tại $x = 2$). Gọi $S$ là tập hợp các giá trị nguyên của tham số $m$ thuộc đoạn $[-5; 5]$ để hàm số $y = f(x^2 - 2mx + m^2 + 1)$ nghịch biến trên khoảng $\\\\left(0; \\\\frac{1}{2}\\\\right)$. Tính tổng giá trị các phần tử của $S$.'
  },
  225: {
    file: 'src/data/topics/chuong_1_ham_so/cuc_tri_tham_so_m.ts',
    content: 'Cho hàm số $y = f(x)$ liên tục trên $\\\\mathbb{R}$ có bảng biến thiên như sau:\\n$$\\\\begin{array}{|c|ccccccc|}\\n\\\\hline\\nx & -\\\\infty & & 2 & & 7 & & +\\\\infty \\\\\\\\\\n\\\\hline\\nf\'(x) & & + & 0 & - & 0 & + & \\\\\\\\\\n\\\\hline\\n& & & y_{CĐ} & & & & +\\\\infty \\\\\\\\\\nf(x) & & \\\\nearrow & & \\\\searrow & & \\\\nearrow & \\\\\\\\\\n& -\\\\infty & & & & y_{CT} & & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\nKhẳng định nào dưới đây là đúng?'
  },
  226: {
    file: 'src/data/topics/chuong_1_ham_so/cuc_tri_tham_so_m.ts',
    content: 'Cho hàm số $f(x)$ có bảng xét dấu của đạo hàm $f\'(x)$ như sau:\\n$$\\\\begin{array}{|c|ccccccccc|}\\n\\\\hline\\nx & -\\\\infty & & 4 & & 5 & & 6 & & +\\\\infty \\\\\\\\\\n\\\\hline\\nf\'(x) & & + & 0 & - & 0 & + & 0 & + & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\nSố giá trị nguyên dương của tham số $m$ để hàm số $g(x) = f(|x^4 - 2x^2 - 3| + m)$ có ít nhất 7 điểm cực trị là:'
  },
  230: {
    file: 'src/data/topics/chuong_1_ham_so/tuong_giao_va_ham_hop.ts',
    content: 'Cho hàm số bậc ba $y = f(x) = ax^3 + bx^2 + cx + d$ có bảng biến thiên như sau:\\n$$\\\\begin{array}{|c|ccccccc|}\\n\\\\hline\\nx & -\\\\infty & & -2 & & 2 & & +\\\\infty \\\\\\\\\\n\\\\hline\\nf\'(x) & & + & 0 & - & 0 & + & \\\\\\\\\\n\\\\hline\\n& & & y_{CĐ} & & & & +\\\\infty \\\\\\\\\\nf(x) & & \\\\nearrow & & \\\\searrow & & \\\\nearrow & \\\\\\\\\\n& -\\\\infty & & & & y_{CT} & & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\nBiết đồ thị hàm số cắt trục tung tại điểm có tung độ dương $d > 0$. Có bao nhiêu số dương trong các hệ số $a, b, c, d$?'
  },
  252: {
    file: 'src/data/topics/chuong_1_ham_so/cuc_tri_tham_so_m.ts',
    content: 'Cho hàm số $y = f(x)$ liên tục trên $\\\\mathbb{R}$ có bảng xét dấu của đạo hàm $f\'(x)$ như sau:\\n$$\\\\begin{array}{|c|ccccccccccc|}\\n\\\\hline\\nx & -\\\\infty & & -2 & & 0 & & 3 & & 5 & & +\\\\infty \\\\\\\\\\n\\\\hline\\nf\'(x) & & + & 0 & - & 0 & + & 0 & - & 0 & - & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\nSố điểm cực trị của hàm số $y = f(x)$ là bao nhiêu?'
  },
  253: {
    file: 'src/data/topics/chuong_1_ham_so/don_dieu_tham_so_m.ts',
    content: 'Cho hàm số $y = f(x)$ liên tục trên $\\\\mathbb{R}$ có bảng xét dấu của đạo hàm $f\'(x)$ như sau:\\n$$\\\\begin{array}{|c|ccccccccc|}\\n\\\\hline\\nx & -\\\\infty & & -2 & & 1 & & 3 & & +\\\\infty \\\\\\\\\\n\\\\hline\\nf\'(x) & & - & 0 & + & 0 & - & 0 & + & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\nHàm số $g(x) = f(2 - x^2)$ đồng biến trên khoảng nào dưới đây?'
  },
  254: {
    file: 'src/data/topics/chuong_1_ham_so/cuc_tri_tham_so_m.ts',
    content: 'Cho hàm số bậc ba $y = f(x)$ có bảng biến thiên như sau:\\n$$\\\\begin{array}{|c|ccccccc|}\\n\\\\hline\\nx & -\\\\infty & & -1 & & 1 & & +\\\\infty \\\\\\\\\\n\\\\hline\\nf\'(x) & & + & 0 & - & 0 & + & \\\\\\\\\\n\\\\hline\\n& & & 4 & & & & +\\\\infty \\\\\\\\\\nf(x) & & \\\\nearrow & & \\\\searrow & & \\\\nearrow & \\\\\\\\\\n& -\\\\infty & & & & 0 & & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\nGọi $S$ là tập các giá trị nguyên của tham số $m$ để hàm số $y = |f(x) - m|$ có đúng 5 điểm cực trị. Tính tổng các phần tử của $S$?'
  },
  256: {
    file: 'src/data/topics/chuong_1_ham_so/tuong_giao_va_ham_hop.ts',
    content: 'Cho hàm số $y = f(x)$ có bảng biến thiên như sau:\\n$$\\\\begin{array}{|c|ccccccccc|}\\n\\\\hline\\nx & -\\\\infty & & -2 & & 0 & & 2 & & +\\\\infty \\\\\\\\\\n\\\\hline\\nf\'(x) & & - & 0 & + & 0 & - & 0 & + & \\\\\\\\\\n\\\\hline\\n& +\\\\infty & & & & 2 & & & & +\\\\infty \\\\\\\\\\nf(x) & & \\\\searrow & & \\\\nearrow & & \\\\searrow & & \\\\nearrow & \\\\\\\\\\n& & & -2 & & & & -2 & & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\nCó bao nhiêu giá trị nguyên của tham số $m$ để phương trình $f(|x|) - 2025m - 2 = 0$ có đúng 4 nghiệm phân biệt?'
  },
  277: {
    file: 'src/data/topics/chuong_1_ham_so/tuong_giao_va_ham_hop.ts',
    content: 'Cho hàm số bậc ba $y = x^3 + bx^2 + cx + d$ ($b, c, d \\\\in \\\\mathbb{R}$) có bảng biến thiên như sau:\\n$$\\\\begin{array}{|c|ccccccc|}\\n\\\\hline\\nx & -\\\\infty & & x_1 & & x_2 & & +\\\\infty \\\\\\\\\\n\\\\hline\\nf\'(x) & & + & 0 & - & 0 & + & \\\\\\\\\\n\\\\hline\\n& & & y_1 & & & & +\\\\infty \\\\\\\\\\nf(x) & & \\\\nearrow & & \\\\searrow & & \\\\nearrow & \\\\\\\\\\n& -\\\\infty & & & & y_2 & & \\\\\\\\\\n\\\\hline\\n\\\\end{array}$$\\nBiết đồ thị cắt trục tung tại điểm có tung độ dương $d > 0$, hai điểm cực trị thỏa mãn $x_1 < 0 < x_2$ và $|x_1| > x_2$. Mệnh đề nào sau đây đúng?'
  }
};

for (const [idStr, info] of Object.entries(bbtMap)) {
  const id = parseInt(idStr);
  const fullPath = path.resolve(__dirname, '..', info.file);
  let text = fs.readFileSync(fullPath, 'utf8');

  // Match question block by id
  // Find "id": 104 ... "content": "..."
  const regex = new RegExp(`("id":\\s*${id},[\\s\\S]*?"content":\\s*)"([^"]*)"`);
  if (regex.test(text)) {
    text = text.replace(regex, `$1"${info.content}"`);
    fs.writeFileSync(fullPath, text, 'utf8');
    console.log(`Updated Q#${id} with Variation Table in ${info.file}`);
  } else {
    console.warn(`Could not match Q#${id} in ${info.file}`);
  }
}
