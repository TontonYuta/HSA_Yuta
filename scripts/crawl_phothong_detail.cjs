const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/d057e91c-022f-45f7-a783-27db1727de5a';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1080 } });

  const urls = [
    { name: 'bo_de_on_tap_chuong_hk1', url: 'https://thcs.toanmath.com/2026/10/bo-de-on-tap-theo-chuong-mon-toan-7-hoc-ki-1-ngo-duc-tai.html' },
    { name: 'ly_thuyet_phan_dang_hk1', url: 'https://thcs.toanmath.com/2026/07/ly-thuyet-va-phan-dang-bai-tap-toan-7-hoc-ki-1-ngo-duc-tai.html' },
    { name: 'de_thi_giua_hk1', url: 'https://thcs.toanmath.com/de-thi-giua-hk1-toan-7' },
    { name: 'de_thi_hk1', url: 'https://thcs.toanmath.com/de-thi-hk1-toan-7' }
  ];

  const results = [];

  for (const item of urls) {
    console.log(`Checking ${item.url}...`);
    try {
      await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(1000);
      const screenshotPath = path.join(ARTIFACT_DIR, `toan7_${item.name}.png`);
      await page.screenshot({ path: screenshotPath });

      const data = await page.evaluate(() => {
        const title = document.querySelector('h1')?.innerText || document.querySelector('title')?.innerText || '';
        const pdfLinks = [];
        document.querySelectorAll('a').forEach(a => {
          if (a.href.endsWith('.pdf') || (a.href.includes('toanmath.com/thcs-pdf') && !a.href.includes('#'))) {
            pdfLinks.push({ text: a.innerText.trim(), href: a.href });
          }
        });
        const postLinks = [];
        document.querySelectorAll('.post-title a, h2 a, .entry-title a').forEach(a => {
          const t = a.innerText.trim();
          if (t.length > 10 && a.href.includes('toanmath.com')) {
            postLinks.push({ title: t, href: a.href });
          }
        });
        return { title, pdfLinks, postLinks: postLinks.slice(0, 10) };
      });
      results.push({ ...item, ...data });
    } catch (e) {
      console.error(`Error crawling ${item.url}:`, e.message);
    }
  }

  fs.writeFileSync('/tmp/toan7_phothong_results.json', JSON.stringify(results, null, 2));
  console.log('Finished crawling phothong pages.');
  await browser.close();
})();
