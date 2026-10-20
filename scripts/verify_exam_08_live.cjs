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

  // Click on Thi Thử 90 Phút
  const examTab = await page.$('button:has-text("Thi Thử 90 Phút")');
  if (examTab) await examTab.click();
  await page.waitForTimeout(500);

  // Select Đề 08 card (Hình Học Kẻ Đường Phụ)
  const de08Card = await page.$('div:has-text("Đề 08: Chiến Lược Bứt Phá Điểm 10 Hình Học")');
  if (de08Card) await de08Card.click();
  await page.waitForTimeout(500);

  // Click VÀO THI NGAY
  const startBtn = await page.$('button:has-text("VÀO THI NGAY")');
  if (startBtn) {
    await startBtn.click();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_exam_08_live.png') });
    console.log('Saved toan7_exam_08_live.png');
  }

  await browser.close();
})();
