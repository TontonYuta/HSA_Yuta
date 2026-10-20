const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/d057e91c-022f-45f7-a783-27db1727de5a';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

  await context.addInitScript(() => {
    localStorage.setItem('hsa_student_registered', 'true');
    localStorage.setItem('hsa_student_name', 'Trần Minh Quân');
    localStorage.setItem('hsa_student_school', 'THCS Chu Văn An');
    localStorage.setItem('hsa_student_email', 'quan.tran@example.com');
  });

  const page = await context.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Switch to Nâng Cao
  const ncBtn = await page.$('button:has-text("Nâng cao"), button:has-text("NÂNG CAO")');
  if (ncBtn) await ncBtn.click();
  await page.waitForTimeout(500);

  // Click Chuyên Đề Nâng Cao
  const cdBtn = await page.$('button:has-text("Chuyên Đề Nâng Cao")');
  if (cdBtn) {
    await cdBtn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_topic_practice_nc.png') });
    console.log('Saved toan7_topic_practice_nc.png');
  }

  // Switch to Phổ thông and click Chuyên Đề SGK
  const ptBtn = await page.$('button:has-text("Phổ Thông")');
  if (ptBtn) {
    await ptBtn.click();
    await page.waitForTimeout(500);
    const cdPt = await page.$('button:has-text("Chuyên Đề SGK")');
    if (cdPt) {
      await cdPt.click();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_topic_practice_pt.png') });
      console.log('Saved toan7_topic_practice_pt.png');
    }
  }

  await browser.close();
})();
