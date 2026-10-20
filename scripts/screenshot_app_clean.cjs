const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/d057e91c-022f-45f7-a783-27db1727de5a';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  // Pre-seed localStorage to bypass student registration modal
  await context.addInitScript(() => {
    localStorage.setItem('hsa_student_registered', 'true');
    localStorage.setItem('hsa_student_name', 'Trần Minh Quân');
    localStorage.setItem('hsa_student_school', 'THCS Chu Văn An');
    localStorage.setItem('hsa_student_email', 'quan.tran@example.com');
  });

  const page = await context.newPage();

  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // 1. Screenshot Homepage
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_app_home_clean.png') });
  console.log('Saved toan7_app_home_clean.png');

  // 2. Click Nâng cao button
  const nangcaoTab = await page.$('button:has-text("Nâng cao"), button:has-text("NÂNG CAO")');
  if (nangcaoTab) {
    await nangcaoTab.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_app_nangcao_clean.png') });
    console.log('Saved toan7_app_nangcao_clean.png');
  }

  // 3. Click on the HSG Chu Văn An & Hoa Lộc exam card button
  const examBtn = await page.$('button:has-text("Bắt đầu"), button:has-text("Làm bài")');
  if (examBtn) {
    await examBtn.click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_app_exam_running.png') });
    console.log('Saved toan7_app_exam_running.png');
  }

  await browser.close();
})();
