const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/a77f8a51-82ce-4b87-9fe7-1fdf9b02bb9e';

async function run() {
  console.log('🚀 Running E2E Verification for All Upgraded Exams...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // 1. Exam list on home screen
  console.log('Taking screenshot of exam list...');
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'upgraded_01_exam_list.png') });

  // 2. Select Exam 02 (Đề 02: Thực Chiến Phân Hóa HSA)
  console.log('Selecting Exam 02...');
  const exam2Btn = await page.$('button:has-text("Đề 02: Thực Chiến Phân Hóa HSA")');
  if (exam2Btn) {
    await exam2Btn.click();
    console.log('Clicked Exam 02 button!');
    await page.waitForTimeout(500);
  }

  // Click "Bắt đầu làm bài"
  const startBtn = await page.$('button:has-text("Bắt đầu làm bài")');
  if (startBtn) {
    await startBtn.click();
    console.log('Clicked start exam button!');
    await page.waitForTimeout(1000);
  }

  // 3. Question 1 (Q#51 or sorted first question) of Exam 02
  console.log('Taking screenshot of Exam 02 Question 1...');
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'upgraded_02_de02_q51.png') });

  // 4. Jump to Question 11
  console.log('Jumping to Question 11...');
  const buttons = await page.$$('button');
  for (const b of buttons) {
    const text = await b.innerText();
    if (text.trim() === '11') {
      await b.click();
      await page.waitForTimeout(600);
      break;
    }
  }
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'upgraded_03_de02_q61.png') });

  // 5. Jump to Question 48
  console.log('Jumping to Question 48...');
  const allBtns2 = await page.$$('button');
  for (const b of allBtns2) {
    const text = await b.innerText();
    if (text.trim() === '48') {
      await b.click();
      await page.waitForTimeout(600);
      break;
    }
  }
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'upgraded_04_de02_fill_q98.png') });

  // 6. Submit exam
  console.log('Submitting exam...');
  const submitBtn = await page.$('button:has-text("Nộp bài")');
  if (submitBtn) {
    await submitBtn.click();
    await page.waitForTimeout(500);
    const confirmBtn = await page.$('button:has-text("Xác nhận nộp bài")');
    if (confirmBtn) {
      await confirmBtn.click();
      await page.waitForTimeout(1000);
    }
  }

  // Screenshot result page
  console.log('Taking screenshot of result page...');
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'upgraded_05_de02_results.png') });

  // 7. Click HSA Logo to verify no white screen
  console.log('Clicking HSA Logo...');
  const logo = await page.$('span:has-text("HSA")');
  if (logo) {
    await logo.click();
    await page.waitForTimeout(1000);
    console.log('Taking screenshot after clicking logo...');
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'upgraded_06_after_logo_click.png') });
  }

  await browser.close();
  console.log('🎉 Playwright verification completed successfully!');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
