const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/d057e91c-022f-45f7-a783-27db1727de5a';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // 1. Screenshot Homepage
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_app_home.png') });
  console.log('Saved toan7_app_home.png');

  // 2. Click on Nâng cao tab or scroll to see Nâng cao exams
  const nangcaoTab = await page.$('button:has-text("Nâng cao"), button:has-text("NÂNG CAO"), div:has-text("Nâng cao")');
  if (nangcaoTab) {
    await nangcaoTab.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_app_nangcao.png') });
    console.log('Saved toan7_app_nangcao.png');
  }

  // 3. Find and click on an exam card to open exam
  const examBtn = await page.$('button:has-text("Làm bài"), button:has-text("Bắt đầu"), [data-testid="start-exam"]');
  if (examBtn) {
    await examBtn.click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_app_exam_view.png') });
    console.log('Saved toan7_app_exam_view.png');
  }

  await browser.close();
})();
