const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/a77f8a51-82ce-4b87-9fe7-1fdf9b02bb9e';

(async () => {
  console.log('🚀 Running Full E2E Verification & Screenshot Capture...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));

  // 1. Home / Exam Selection Page
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_01_exam_select.png') });
  console.log('Saved verify_01_exam_select.png');

  // 2. Click "30 Chuyên Đề"
  await page.click('button:has-text("30 Chuyên Đề")');
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_02_topics_view.png') });
  console.log('Saved verify_02_topics_view.png');

  // 3. Start Topic Practice: Click first topic button
  const practiceButtons = await page.$$('button:has-text("Luyện chuyên đề")');
  if (practiceButtons.length > 0) {
    await practiceButtons[0].click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_03_topic_practice.png') });
    console.log('Saved verify_03_topic_practice.png');
  }

  // 4. Return to Home via HSA Logo
  await page.click('div:has-text("HSA") >> text=Luyện thi cùng TontonYuta');
  await page.waitForTimeout(600);

  // 5. Start Exam (Đề 01)
  await page.click('button:has-text("Bắt Đầu Làm Bài")');
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_04_exam_interface.png') });
  console.log('Saved verify_04_exam_interface.png');

  // 6. Submit Exam
  await page.click('button:has-text("Nộp bài")');
  await page.waitForTimeout(400);
  // Confirm modal submit
  const confirmBtn = await page.$('div[role="dialog"] button:has-text("Nộp bài"), div.fixed button:has-text("Nộp bài")');
  if (confirmBtn) {
    await confirmBtn.click();
  } else {
    // If modal button with submit text
    const btns = await page.$$('button:has-text("Nộp bài")');
    if (btns.length > 1) await btns[btns.length - 1].click();
  }
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_05_exam_results.png') });
  console.log('Saved verify_05_exam_results.png');

  // 7. Click HSA Logo to verify no white screen
  await page.click('div:has-text("HSA") >> text=Luyện thi cùng TontonYuta');
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_06_after_logo_click.png') });
  console.log('Saved verify_06_after_logo_click.png');

  await browser.close();

  console.log(`E2E Verification Finished. Page errors: ${errors.length}`);
  if (errors.length > 0) {
    console.error('Errors encountered:', errors);
    process.exit(1);
  }
})();
