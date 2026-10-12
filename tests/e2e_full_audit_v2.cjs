const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');
const path = require('path');
const fs = require('fs');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/a77f8a51-82ce-4b87-9fe7-1fdf9b02bb9e';

(async () => {
  console.log('🚀 Starting Comprehensive Playwright Audit (Desktop + Mobile)...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  // =========================================================================
  // TEST SUITE 1: Desktop - Submit Exam & Click HSA Logo (White screen fix test)
  // =========================================================================
  console.log('\n[1/4] Testing Submit Exam & Top-Left HSA Logo Click (White Screen Bug Fix)...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await desktopContext.newPage();

  // Handle page errors
  page.on('pageerror', (err) => {
    console.error('Browser Page Error:', err.message);
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Verify Teacher section is hidden from footer
  const hasTeacherFooter = await page.locator('text=Hướng dẫn Google Sheets (Giáo viên)').isVisible();
  console.log('Teacher footer section hidden:', !hasTeacherFooter ? '✅ PASS (Hidden)' : '❌ FAIL (Visible)');

  // Select Đề 07
  const examSet7Btn = page.locator('button:has-text("Đề 07"), button:has-text("Mã Đề 36")').first();
  if (await examSet7Btn.isVisible()) {
    await examSet7Btn.click();
    await page.waitForTimeout(400);
  }

  // Start Exam
  const startBtn = page.locator('button:has-text("Bắt đầu làm bài")').first();
  await startBtn.click();
  await page.waitForTimeout(800);
  console.log('Exam Started successfully.');

  // Answer question 1
  const optionA = page.locator('button:has-text("A")').first();
  await optionA.click();
  await page.waitForTimeout(300);

  // Open submit modal from header
  const submitHeaderBtn = page.locator('header button:has-text("Nộp bài")');
  await submitHeaderBtn.click();
  await page.waitForTimeout(500);

  // Confirm submit
  const confirmSubmitBtn = page.locator('button:has-text("Xác nhận nộp bài")');
  await confirmSubmitBtn.click();
  await page.waitForTimeout(1500);

  // Verify Result Screen
  const hasResultScreen = await page.locator('text=Báo Cáo Phân Tích Năng Lực Bài Thi').isVisible();
  console.log('Result Screen displayed after submit:', hasResultScreen ? '✅ PASS' : '❌ FAIL');
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hsa_v2_result_screen.png') });

  // CRITICAL TEST: Click HSA logo button in top-left corner
  console.log('Clicking top-left HSA logo to return home...');
  const hsaLogoBtn = page.locator('header button[title*="Trang chủ"]').first();
  await hsaLogoBtn.click();
  await page.waitForTimeout(1000);

  // Verify Home page (ExamIntro) is displayed and screen is NOT white!
  const hasIntroCard = await page.locator('text=Phòng Thi Thử Toán Học & Tư Duy Định Lượng').isVisible();
  const pageContentLength = (await page.content()).length;
  console.log('Home screen restored after clicking HSA logo:', hasIntroCard ? '✅ PASS' : '❌ FAIL');
  console.log('Page content length (non-empty):', pageContentLength > 2000 ? '✅ PASS' : '❌ FAIL');
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hsa_v2_home_after_logo_click.png') });

  // =========================================================================
  // TEST SUITE 2: Mobile Viewport (iPhone 390x844) Responsiveness
  // =========================================================================
  console.log('\n[2/4] Testing Mobile Viewport (390x844) Responsive Layout...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, 'hsa_v2_mobile_home.png') });
  console.log('Mobile Home page screenshot captured.');

  // Start exam on mobile
  const mobileStartBtn = mobilePage.locator('button:has-text("Bắt đầu làm bài")').first();
  await mobileStartBtn.click();
  await mobilePage.waitForTimeout(800);

  // Verify mobile exam layout
  const mobileBrand = await mobilePage.locator('text=HSA Yuta').isVisible();
  console.log('Mobile compact brand title (HSA Yuta):', mobileBrand ? '✅ PASS' : '❌ FAIL');

  // Verify palette toggle drawer on mobile
  const paletteMobileBtn = mobilePage.locator('header button[title*="bảng câu hỏi"]').first();
  if (await paletteMobileBtn.isVisible()) {
    await paletteMobileBtn.click();
    await mobilePage.waitForTimeout(500);
    const hasPaletteDrawer = await mobilePage.locator('text=Danh Sách 50 Câu').isVisible();
    console.log('Mobile question palette drawer opens:', hasPaletteDrawer ? '✅ PASS' : '❌ FAIL');
    await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, 'hsa_v2_mobile_palette_open.png') });

    // Close palette drawer
    const closePaletteBtn = mobilePage.locator('button[title*="Đóng bảng câu hỏi"]').first();
    if (await closePaletteBtn.isVisible()) {
      await closePaletteBtn.click();
      await mobilePage.waitForTimeout(400);
    }
  }

  // Open Formula Sheet modal on mobile
  const formulaBtnMobile = mobilePage.locator('button[title*="công thức"]').first();
  await formulaBtnMobile.click();
  await mobilePage.waitForTimeout(500);
  const hasFormulaModalMobile = await mobilePage.locator('text=Sổ Tay Tra Cứu Công Thức Trọng Tâm HSA').isVisible();
  console.log('Formula Modal opens on mobile:', hasFormulaModalMobile ? '✅ PASS' : '❌ FAIL');
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, 'hsa_v2_mobile_formula_modal.png') });

  // Close formula modal with Escape
  await mobilePage.keyboard.press('Escape');
  await mobilePage.waitForTimeout(400);

  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, 'hsa_v2_mobile_question_cbt.png') });
  console.log('Mobile CBT question screenshot captured.');

  // =========================================================================
  // TEST SUITE 3: Visual Audit of Questions with Variation Tables (Bảng Biến Thiên)
  // =========================================================================
  console.log('\n[3/4] Visual Audit of Bảng Biến Thiên & Table Renderings...');
  
  // Go to 30 Chuyên Đề tab on desktop
  await page.locator('header button[title*="Trang chủ"]').first().click();
  await page.waitForTimeout(500);

  const practiceTabBtn = page.locator('button:has-text("30 Chuyên Đề")').first();
  await practiceTabBtn.click();
  await page.waitForTimeout(600);

  // Click topic "Tương giao đồ thị & Số nghiệm hàm hợp" (Contains Q#104, Q#153, Q#230, Q#256, Q#277 with tables!)
  const tuongGiaoTopicBtn = page.locator('button:has-text("Tương giao đồ thị")').first();
  if (await tuongGiaoTopicBtn.isVisible()) {
    await tuongGiaoTopicBtn.click();
    await page.waitForTimeout(800);

    // Capture screenshot of question with Bảng Biến Thiên
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'hsa_v2_topic_variation_table.png') });
    console.log('Topic practice with Variation Table screenshot captured.');
  }

  // =========================================================================
  // TEST SUITE 4: Verify KaTeX Elements on Live DOM
  // =========================================================================
  console.log('\n[4/4] Verifying KaTeX DOM rendering and 0 parse errors on live page...');
  const katexElements = await page.locator('.katex').count();
  console.log(`Live KaTeX elements found on page: ${katexElements} elements.`);
  const katexErrors = await page.locator('.text-rose-500.font-mono').count();
  console.log(`Live KaTeX syntax errors found: ${katexErrors} errors (Expected 0):`, katexErrors === 0 ? '✅ PASS' : '❌ FAIL');

  await browser.close();
  console.log('\n🎉 ALL AUDIT SUITES COMPLETED SUCCESSFULLY!');
})();
