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

  console.log('Navigating to https://thcs.toanmath.com/tai-lieu-toan-7 ...');
  await page.goto('https://thcs.toanmath.com/tai-lieu-toan-7', { waitUntil: 'domcontentloaded', timeout: 30000 });

  // Take full page screenshot
  const screenshotPath = path.join(ARTIFACT_DIR, 'toan7_portal_overview.png');
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log(`Saved screenshot to ${screenshotPath}`);

  // Extract menu links & subcategories for Toan 7
  const links = await page.evaluate(() => {
    const results = [];
    // Check main navigation and category widgets
    document.querySelectorAll('a').forEach(a => {
      const href = a.href;
      const text = (a.innerText || '').trim();
      if (href && (href.includes('toan-7') || href.includes('hsg') || href.includes('hoc-sinh-gioi')) && text.length > 3) {
        results.push({ text, href });
      }
    });

    // Check article items in the feed
    const articles = [];
    document.querySelectorAll('article, .post, .entry-title, .widget').forEach(el => {
      const a = el.querySelector('a');
      if (a) {
        articles.push({
          title: a.innerText.trim(),
          url: a.href,
          snippet: el.innerText.trim().slice(0, 150)
        });
      }
    });

    return { results, articles };
  });

  fs.writeFileSync('/tmp/toan7_links.json', JSON.stringify(links, null, 2));
  console.log(`Found ${links.results.length} links related to toan 7 and ${links.articles.length} article items`);

  await browser.close();
})();
