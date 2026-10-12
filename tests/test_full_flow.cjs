const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(`[CONSOLE ERROR] ${msg.text()}`);
  });
  page.on('pageerror', err => errors.push(`[PAGEERROR] ${err.stack || err.message}`));

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  // Start exam
  await page.click('button:has-text("Bắt đầu làm bài")');
  await page.waitForTimeout(1000);

  // Click option A for question 1
  const optA = await page.$('button:has-text("A.")');
  if (optA) await optA.click();
  await page.waitForTimeout(500);

  // Submit exam
  await page.click('button:has-text("Nộp bài")');
  await page.waitForTimeout(500);

  // Confirm submit
  await page.click('button:has-text("Xác nhận nộp bài")');
  await page.waitForTimeout(1500);

  console.log('Results page loaded. Now click HSA logo...');
  const hsaBtn = await page.$('button[title="Trang chủ Luyện thi HSA"]');
  await hsaBtn.click();
  await page.waitForTimeout(1000);

  const mainHTML = await page.innerHTML('main');
  console.log('Main length:', mainHTML.length);
  if (mainHTML.trim().length === 0) {
    console.log('❌ CRITICAL ERROR: MAIN IS EMPTY (WHITE SCREEN)!');
  } else {
    console.log('✅ SUCCESS: Main is populated with Intro screen!');
  }

  console.log('Errors logged:', errors);

  await browser.close();
})();
