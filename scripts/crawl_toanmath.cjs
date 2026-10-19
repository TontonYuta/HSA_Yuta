const { chromium } = require('/home/tontonyuta/.gemini/antigravity-cli/brain/edb43cc5-21f8-4df1-9adb-8c3d9a9b220e/scratch/node_modules/playwright-chromium');

async function crawlToanmath() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  const queries = [
    'toán thực tế 12 chương trình mới 2025',
    'xác suất điều kiện bayes toanmath 12',
    'tọa độ oxyz thực tế toanmath',
    'đề tham khảo đánh giá năng lực hsa 2025'
  ];

  for (const q of queries) {
    try {
      console.log(`\n=== Searching: ${q} ===`);
      const url = `https://toanmath.com/?s=${encodeURIComponent(q)}`;
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 25000 });
      const items = await page.$$eval('.entry-title a, h2.entry-title a', elements =>
        elements.slice(0, 5).map(el => ({
          title: el.innerText.trim(),
          link: el.href
        }))
      );
      items.forEach(it => console.log(`- ${it.title} (${it.link})`));
    } catch (e) {
      console.log(`Error searching ${q}:`, e.message);
    }
  }

  await browser.close();
}

crawlToanmath();
