const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/d057e91c-022f-45f7-a783-27db1727de5a';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1080 } });

  // 1. Inspect HSG Chu Văn An
  console.log('Navigating to HSG Chu Van An...');
  await page.goto('https://thcs.toanmath.com/2026/09/de-chon-doi-tuyen-hsg-toan-7-nam-2026-2027-truong-thcs-chu-van-an-thai-nguyen.html', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_hsg_cva_top.png') });
  
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_hsg_cva_content.png') });

  const cvaData = await page.evaluate(() => {
    const title = document.querySelector('h1')?.innerText || '';
    const contentText = document.querySelector('.entry-content')?.innerText || '';
    const pdfLinks = [];
    document.querySelectorAll('a').forEach(a => {
      if (a.href.endsWith('.pdf') || a.href.includes('drive.google.com') || a.innerText.toLowerCase().includes('tải về') || a.innerText.toLowerCase().includes('download')) {
        pdfLinks.push({ text: a.innerText.trim(), href: a.href });
      }
    });
    return { title, contentText: contentText.slice(0, 1500), pdfLinks };
  });

  fs.writeFileSync('/tmp/cva_post.json', JSON.stringify(cvaData, null, 2));
  console.log('CVA post info:', cvaData);

  await browser.close();
})();
