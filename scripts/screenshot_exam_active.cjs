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

  // Go to exam list
  const nangcaoTab = await page.$('button:has-text("Nâng cao"), button:has-text("NÂNG CAO")');
  if (nangcaoTab) await nangcaoTab.click();
  await page.waitForTimeout(500);

  const startExamBtn = await page.$('button:has-text("Vào thi thử nâng cao"), button:has-text("Làm bài ngay"), button:has-text("VÀO THI NGAY")');
  if (startExamBtn) {
    await startExamBtn.click();
    await page.waitForTimeout(1000);
  }

  // Click VÀO THI NGAY on the right pane
  const vaoThiBtn = await page.$('button:has-text("VÀO THI NGAY")');
  if (vaoThiBtn) {
    await vaoThiBtn.click();
    await page.waitForTimeout(1500);
  }

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_exam_in_progress.png') });
  console.log('Saved toan7_exam_in_progress.png');

  await browser.close();
})();
