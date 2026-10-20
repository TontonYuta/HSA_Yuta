const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/d057e91c-022f-45f7-a783-27db1727de5a';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1080 } });

  console.log('Navigating to de-thi-hsg-toan-7...');
  await page.goto('https://thcs.toanmath.com/de-thi-hsg-toan-7', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.evaluate(() => window.scrollBy(0, 900));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_hsg_feed.png') });

  const hsgPosts = await page.evaluate(() => {
    const list = [];
    document.querySelectorAll('.post-title a, h2 a, .entry-title a').forEach(a => {
      const title = a.innerText.trim();
      const href = a.href;
      if (title.length > 10 && href.includes('toanmath.com')) {
        list.push({ title, href });
      }
    });
    return list;
  });

  console.log('HSG Posts found:', hsgPosts.slice(0, 15));
  fs.writeFileSync('/tmp/toan7_hsg_posts.json', JSON.stringify(hsgPosts, null, 2));

  await browser.close();
})();
