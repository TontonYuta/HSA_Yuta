const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/d057e91c-022f-45f7-a783-27db1727de5a';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  // 1. Phổ thông: tai-lieu-toan-7
  console.log('Navigating to tai-lieu-toan-7...');
  await page.goto('https://thcs.toanmath.com/tai-lieu-toan-7', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_phothong_articles.png') });

  const phothongArticles = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll('.post-title a, h2.entry-title a, article a').forEach(a => {
      const title = a.innerText.trim();
      const href = a.href;
      if (title.length > 15 && href.includes('toanmath.com')) {
        items.push({ title, href });
      }
    });
    return items;
  });

  // 2. Nâng cao: de-thi-hsg-toan-7
  console.log('Navigating to de-thi-hsg-toan-7...');
  await page.goto('https://thcs.toanmath.com/de-thi-hsg-toan-7', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_hsg_articles.png') });

  const hsgArticles = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll('.post-title a, h2.entry-title a, article a').forEach(a => {
      const title = a.innerText.trim();
      const href = a.href;
      if (title.length > 15 && href.includes('toanmath.com')) {
        items.push({ title, href });
      }
    });
    return items;
  });

  const output = { phothongArticles, hsgArticles };
  fs.writeFileSync('/tmp/toan7_sections.json', JSON.stringify(output, null, 2));
  console.log(`Extracted ${phothongArticles.length} PT articles and ${hsgArticles.length} HSG articles.`);

  await browser.close();
})();
