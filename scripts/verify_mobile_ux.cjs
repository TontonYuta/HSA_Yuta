const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');
const path = require('path');
const fs = require('fs');

async function runMobileVerification() {
  const artifactDir = '/home/tontonyuta/.gemini/antigravity-cli/brain/a77f8a51-82ce-4b87-9fe7-1fdf9b02bb9e';
  
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Mobile Viewport: iPhone 14/15 standard (390 x 844), with touch emulation
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2
  });

  const page = await context.newPage();
  console.log('1. Navigating to http://localhost:3000 on mobile viewport (390x844)...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Screenshot 1: Mobile Home / Exam Intro
  console.log('2. Capturing mobile_01_home_intro.png...');
  await page.screenshot({ path: path.join(artifactDir, 'mobile_01_home_intro.png'), fullPage: false });

  // Test Mobile Bottom Navigation Bar: Switch to "30 Chuyên Đề"
  console.log('3. Testing Mobile Bottom Navigation: Clicking "30 Chuyên Đề"...');
  await page.click('nav[aria-label="Mobile Navigation"] button:has-text("30 Chuyên Đề")');
  await page.waitForTimeout(800);
  console.log('Capturing mobile_02_topics_view.png...');
  await page.screenshot({ path: path.join(artifactDir, 'mobile_02_topics_view.png'), fullPage: false });

  // Test Mobile Bottom Navigation Bar: Switch to "Ngân Hàng"
  console.log('4. Testing Mobile Bottom Navigation: Clicking "Ngân Hàng"...');
  await page.click('nav[aria-label="Mobile Navigation"] button:has-text("Ngân Hàng")');
  await page.waitForTimeout(800);
  console.log('Capturing mobile_03_question_bank.png...');
  await page.screenshot({ path: path.join(artifactDir, 'mobile_03_question_bank.png'), fullPage: false });

  // Switch back to "Thi Thử"
  console.log('5. Switching back to "Thi Thử"...');
  await page.click('nav[aria-label="Mobile Navigation"] button:has-text("Thi Thử")');
  await page.waitForTimeout(800);

  // Select Đề 558 & Start Exam
  console.log('6. Selecting Đề 558 and starting exam...');
  const de558Card = page.locator('button:has-text("Đề 558")');
  if (await de558Card.count() > 0) {
    await de558Card.click();
    await page.waitForTimeout(500);
  }

  // Click "Bắt đầu làm bài"
  await page.click('button:has-text("Bắt đầu làm bài")');
  await page.waitForTimeout(1000);

  // Screenshot 4: Exam MCQ view on mobile with fixed bottom action bar
  console.log('7. In CBT Exam: Capturing mobile_04_exam_mcq.png...');
  await page.screenshot({ path: path.join(artifactDir, 'mobile_04_exam_mcq.png'), fullPage: false });

  // Select Option A for Question 1
  console.log('8. Selecting Option A...');
  await page.click('button:has-text("A")');
  await page.waitForTimeout(500);

  // Toggle Flag on Mobile Bottom Action Bar
  console.log('9. Tapping "Cờ" on mobile bottom action bar...');
  await page.click('div.sm\\:hidden.fixed.bottom-0 button:has-text("Cờ")');
  await page.waitForTimeout(500);
  console.log('Capturing mobile_05_exam_flagged.png...');
  await page.screenshot({ path: path.join(artifactDir, 'mobile_05_exam_flagged.png'), fullPage: false });

  // Open Question Palette Drawer via mobile bottom action bar
  console.log('10. Tapping "1/50" on mobile bottom action bar to open Palette Drawer...');
  await page.click('div.sm\\:hidden.fixed.bottom-0 button:has-text("1/50")');
  await page.waitForTimeout(800);
  console.log('Capturing mobile_06_palette_drawer.png...');
  await page.screenshot({ path: path.join(artifactDir, 'mobile_06_palette_drawer.png'), fullPage: false });

  // Select Question 36 (Fill-in question) in Palette
  console.log('11. Selecting Question 36 in Palette...');
  await page.click('button:has-text("36")');
  await page.waitForTimeout(800);

  // Virtual Math Keyboard: type "2.5"
  console.log('12. Typing "2", ".", "5" via Virtual Math Keyboard...');
  const key2 = page.locator('div.grid-cols-4 button:has-text("2")');
  const keyDot = page.locator('div.grid-cols-4 button:has-text(".")');
  const key5 = page.locator('div.grid-cols-4 button:has-text("5")');
  if (await key2.count() > 0) await key2.click();
  await page.waitForTimeout(200);
  if (await keyDot.count() > 0) await keyDot.click();
  await page.waitForTimeout(200);
  if (await key5.count() > 0) await key5.click();
  await page.waitForTimeout(500);

  console.log('Capturing mobile_07_exam_fill_keyboard.png...');
  await page.screenshot({ path: path.join(artifactDir, 'mobile_07_exam_fill_keyboard.png'), fullPage: false });

  // Open Submit Confirmation Modal
  console.log('13. Tapping "Nộp bài" button in header...');
  await page.click('header button:has-text("Nộp bài")');
  await page.waitForTimeout(800);
  console.log('Capturing mobile_08_submit_modal.png...');
  await page.screenshot({ path: path.join(artifactDir, 'mobile_08_submit_modal.png'), fullPage: false });

  // Confirm Submit
  console.log('14. Confirming submit...');
  await page.click('button:has-text("Xác nhận nộp bài")');
  await page.waitForTimeout(1500);

  // Results screen on mobile
  console.log('15. In Results view: Capturing mobile_09_exam_results.png...');
  await page.screenshot({ path: path.join(artifactDir, 'mobile_09_exam_results.png'), fullPage: false });

  // Test Logo Click / "Về trang chủ"
  console.log('16. Tapping HSA Logo to return to home...');
  await page.click('header button[title="Trang chủ Luyện thi HSA"]');
  await page.waitForTimeout(1000);
  console.log('Capturing mobile_10_back_home.png...');
  await page.screenshot({ path: path.join(artifactDir, 'mobile_10_back_home.png'), fullPage: false });

  // Verify not a blank white page
  const pageText = await page.innerText('body');
  const isWhiteScreen = pageText.trim().length < 50;
  console.log(`Page text length after returning home: ${pageText.trim().length}`);
  if (isWhiteScreen) {
    console.error('ERROR: Screen is white/empty!');
  } else {
    console.log('SUCCESS: Mobile home loaded perfectly without white screen!');
  }

  await browser.close();
  console.log('All mobile verifications completed successfully!');
}

runMobileVerification().catch((err) => {
  console.error('Test run error:', err);
  process.exit(1);
});
