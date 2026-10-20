const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const hsgPosts = JSON.parse(fs.readFileSync('/tmp/toan7_hsg_posts.json', 'utf8'));
  const pdfList = [];

  // Inspect the first 8 HSG posts
  for (const post of hsgPosts.slice(0, 8)) {
    console.log(`Checking HSG: ${post.title}...`);
    try {
      await page.goto(post.href, { waitUntil: 'domcontentloaded', timeout: 25000 });
      const pdf = await page.evaluate(() => {
        for (const a of document.querySelectorAll('a')) {
          if (a.href.endsWith('.pdf') && a.href.includes('toanmath.com')) {
            return a.href;
          }
        }
        return null;
      });
      if (pdf) {
        pdfList.push({ title: post.title, pdfUrl: pdf });
        console.log(` -> Found PDF: ${pdf}`);
      }
    } catch (e) {
      console.log(` -> Error: ${e.message}`);
    }
  }

  fs.writeFileSync('/tmp/toan7_hsg_pdfs.json', JSON.stringify(pdfList, null, 2));
  await browser.close();
})();
