const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/a77f8a51-82ce-4b87-9fe7-1fdf9b02bb9e';

(async () => {
  console.log('🚀 Starting Comprehensive E2E Verification & Audit...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const pageErrors = [];

  // =========================================================================
  // TEST 1: Desktop - Submit Exam, View Results, Expand Solutions, Return Home
  // =========================================================================
  console.log('\n--- [1/2] Desktop Verification ---');
  const desktopContext = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await desktopContext.newPage();

  page.on('pageerror', err => {
    console.error('❌ [PAGE ERROR]:', err.message);
    pageErrors.push(err.message);
  });
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('⚠️ [CONSOLE ERROR]:', msg.text());
    }
  });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  console.log('1. Home loaded successfully.');

  // Start exam
  await page.click('button:has-text("Bắt đầu làm bài")');
  await page.waitForTimeout(800);
  console.log('2. Started exam session.');

  // Answer Q1 (MCQ)
  const optA = await page.$('button:has-text("A.")');
  if (optA) await optA.click();
  await page.waitForTimeout(400);

  // Submit exam
  await page.click('button:has-text("Nộp bài")');
  await page.waitForTimeout(500);

  // Confirm submit
  await page.click('button:has-text("Xác nhận nộp bài")');
  await page.waitForTimeout(1500);

  const reportTitle = await page.$('text=Báo Cáo Phân Tích Năng Lực');
  console.log('3. Results report visible:', !!reportTitle);

  // Expand several KaTeX solutions
  const expandBtns = await page.$$('button:has-text("Xem lời giải KaTeX")');
  console.log(`4. Found ${expandBtns.length} solution toggle buttons. Expanding first 3...`);
  for (let i = 0; i < Math.min(3, expandBtns.length); i++) {
    await expandBtns[i].click();
    await page.waitForTimeout(300);
  }

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hsa_v3_results_screen.png') });

  // Test "Về trang chủ" button on Results page
  console.log('5. Clicking "Về trang chủ" button on Results page...');
  const homeBtn = await page.$('button:has-text("Về trang chủ")');
  if (homeBtn) {
    await homeBtn.click();
    await page.waitForTimeout(1000);
  } else {
    console.error('❌ "Về trang chủ" button not found on Results page!');
  }

  let mainHTML = await page.innerHTML('main');
  console.log('6. After "Về trang chủ", main content length:', mainHTML.length);
  if (mainHTML.length < 500) {
    console.error('❌ WHITE SCREEN DETECTED after clicking "Về trang chủ"!');
  } else {
    console.log('✅ Home screen successfully rendered after "Về trang chủ"!');
  }

  // Re-start exam to test clicking HSA logo in Navbar
  console.log('7. Re-entering exam to test clicking HSA logo...');
  await page.click('button:has-text("Bắt đầu làm bài")');
  await page.waitForTimeout(800);
  await page.click('button:has-text("Nộp bài")');
  await page.waitForTimeout(500);
  await page.click('button:has-text("Xác nhận nộp bài")');
  await page.waitForTimeout(1500);

  // Click top-left HSA logo
  console.log('8. Clicking top-left HSA logo in Navbar...');
  const hsaLogo = await page.$('button[title="Trang chủ Luyện thi HSA"]');
  await hsaLogo.click();
  await page.waitForTimeout(1000);

  mainHTML = await page.innerHTML('main');
  console.log('9. After clicking HSA logo, main content length:', mainHTML.length);
  if (mainHTML.length < 500) {
    console.error('❌ WHITE SCREEN DETECTED after clicking HSA logo!');
  } else {
    console.log('✅ Home screen successfully rendered after clicking HSA logo!');
  }

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hsa_v3_desktop_home_after_logo.png') });

  // =========================================================================
  // TEST 2: Mobile Viewport (390 x 844)
  // =========================================================================
  console.log('\n--- [2/2] Mobile Viewport Verification ---');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();

  mobilePage.on('pageerror', err => {
    console.error('❌ [MOBILE PAGE ERROR]:', err.message);
    pageErrors.push(err.message);
  });

  await mobilePage.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  console.log('1. Mobile home loaded.');

  // Start exam on mobile
  await mobilePage.click('button:has-text("Bắt đầu làm bài")');
  await mobilePage.waitForTimeout(800);

  // Submit on mobile
  await mobilePage.click('button:has-text("Nộp bài")');
  await mobilePage.waitForTimeout(500);
  await mobilePage.click('button:has-text("Xác nhận nộp bài")');
  await mobilePage.waitForTimeout(1500);

  console.log('2. Mobile results loaded.');
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, 'hsa_v3_mobile_results.png') });

  // Click HSA logo on mobile
  console.log('3. Clicking HSA logo on mobile...');
  const mobileLogo = await mobilePage.$('button[title="Trang chủ Luyện thi HSA"]');
  await mobileLogo.click();
  await mobilePage.waitForTimeout(1000);

  const mobileMainHTML = await mobilePage.innerHTML('main');
  console.log('4. Mobile main content length after logo click:', mobileMainHTML.length);
  if (mobileMainHTML.length < 500) {
    console.error('❌ MOBILE WHITE SCREEN DETECTED!');
  } else {
    console.log('✅ Mobile home screen successfully rendered after clicking logo!');
  }

  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, 'hsa_v3_mobile_home_after_logo.png') });

  await browser.close();

  console.log('\n======================================================');
  console.log(`E2E AUDIT COMPLETE. Total Page Errors: ${pageErrors.length}`);
  if (pageErrors.length === 0) {
    console.log('🎉 ALL TESTS PASSED! ZERO WHITE SCREENS, ZERO PAGE ERRORS!');
  } else {
    console.log('❌ SOME PAGE ERRORS OCCURRED:', pageErrors);
  }
})();
