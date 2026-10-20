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

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // 1. Dashboard Homepage
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_dashboard_425.png') });
  console.log('Saved toan7_dashboard_425.png');

  // 2. Switch to Nâng Cao track
  const nangcaoTab = await page.$('button:has-text("Nâng cao"), button:has-text("NÂNG CAO")');
  if (nangcaoTab) {
    await nangcaoTab.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_nangcao_home.png') });
    console.log('Saved toan7_nangcao_home.png');
  }

  // 3. Question Bank
  const bankBtn = await page.$('button:has-text("Ngân Hàng Câu Hỏi"), a:has-text("Ngân Hàng Câu Hỏi")');
  if (bankBtn) {
    await bankBtn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_bank_425.png') });
    console.log('Saved toan7_bank_425.png');
  }

  // 4. Start Exam (Đề 08 Nâng Cao Hình Học)
  const deThiTab = await page.$('button:has-text("Bộ Đề Kiểm Tra"), button:has-text("Thi Thử")');
  if (deThiTab) {
    await deThiTab.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_exam_sets_view.png') });
    console.log('Saved toan7_exam_sets_view.png');

    // Click into Đề 08: Chiến Lược Bứt Phá Điểm 10 Hình Học
    const de08CardBtn = await page.$('button:has-text("Làm Đề Này"), button:has-text("Bắt Đầu Làm Bài")');
    if (de08CardBtn) {
      await de08CardBtn.click();
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(ARTIFACT_DIR, 'toan7_exam_08_running.png') });
      console.log('Saved toan7_exam_08_running.png');
    }
  }

  await browser.close();
  console.log('All verification screenshots captured successfully!');
})();
