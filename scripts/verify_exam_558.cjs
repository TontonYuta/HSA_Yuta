const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/a77f8a51-82ce-4b87-9fe7-1fdf9b02bb9e';

(async () => {
  console.log('🚀 Running E2E Verification for HSA Exam 558...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  // 1. Home Exam Selection: Select De 08 (HSA 558)
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // Click card for De 08
  const de08Card = await page.$('div:has-text("Đề 08: Đề Thi Thực Chiến HSA VNU (Mã Đề 558)")');
  if (de08Card) {
    await de08Card.click();
    console.log('Selected De 08 card.');
  }

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'exam_558_01_card_selected.png') });
  console.log('Saved exam_558_01_card_selected.png');

  // 2. Start Exam 558
  await page.click('button:has-text("Bắt đầu làm bài")');
  await page.waitForTimeout(800);

  // 3. Question 1 (Q301: Tiếp tuyến tạo tam giác diện tích 25)
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'exam_558_02_question_1.png') });
  console.log('Saved exam_558_02_question_1.png');

  // 4. Click Question 6 (Logic cô giáo)
  const q6Btn = await page.$('div.font-mono:has-text("6"), button:has-text("6")');
  const allBtns = await page.$$('button');
  for (const b of allBtns) {
    const text = (await b.innerText()).trim();
    if (text === '6') {
      await b.click();
      break;
    }
  }
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'exam_558_03_question_6_logic.png') });
  console.log('Saved exam_558_03_question_6_logic.png');

  // 5. Click Question 24 (Xác suất chùm gia đình 2 con)
  for (const b of allBtns) {
    const text = (await b.innerText()).trim();
    if (text === '24') {
      await b.click();
      break;
    }
  }
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'exam_558_04_question_24_bayes.png') });
  console.log('Saved exam_558_04_question_24_bayes.png');

  // 6. Click Question 47 (Chùm sinh thái học)
  for (const b of allBtns) {
    const text = (await b.innerText()).trim();
    if (text === '47') {
      await b.click();
      break;
    }
  }
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'exam_558_05_question_47_ecology.png') });
  console.log('Saved exam_558_05_question_47_ecology.png');

  await browser.close();
  console.log('Finished capturing all Exam 558 screenshots.');
})();
