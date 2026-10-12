const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  const logs = [];
  page.on('response', resp => {
    if (resp.status() >= 400) {
      console.log('FAILED RESPONSE:', resp.status(), resp.url());
    }
  });
  page.on('console', msg => logs.push(`[CONSOLE ${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => logs.push(`[PAGEERROR] ${err.stack || err.message}`));

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  console.log('1. Click start button...');
  const startBtn = await page.$('text=Bắt đầu làm bài');
  if (startBtn) {
    await startBtn.click();
  } else {
    await page.click('text=Vào thi ngay');
  }
  await page.waitForTimeout(1000);

  console.log('2. In exam mode. Now click Nộp bài...');
  await page.click('button:has-text("Nộp bài")');
  await page.waitForTimeout(800);

  console.log('3. Confirm submit in modal...');
  const confirmBtn = await page.$('button:has-text("Xác nhận nộp bài")');
  if (confirmBtn) {
    await confirmBtn.click();
  } else {
    const btns = await page.$$('button');
    for (const b of btns) {
      const text = await b.textContent();
      if (text && text.includes('Nộp bài')) {
        console.log('Clicking candidate modal button:', text);
        await b.click();
        break;
      }
    }
  }
  await page.waitForTimeout(1500);

  console.log('4. Now on results page. Check report...');
  const reportTitle = await page.$('text=Báo Cáo Phân Tích Năng Lực');
  console.log('Report visible:', !!reportTitle);

  console.log('5. Now click HSA logo on top left...');
  const hsaLogoBtn = await page.$('button[title="Trang chủ Luyện thi HSA"]');
  console.log('Found HSA logo button:', !!hsaLogoBtn);
  if (hsaLogoBtn) {
    await hsaLogoBtn.click();
  } else {
    await page.click('text=HSA');
  }
  await page.waitForTimeout(1500);

  const mainContent = await page.innerHTML('main');
  console.log('Main content length:', mainContent.length);
  const sample = (await page.textContent('main'))?.slice(0, 150);
  console.log('Main text sample:', sample);

  console.log('--- ALL LOGS ---');
  for (const log of logs) console.log(log);

  await page.screenshot({ path: '/tmp/test_submit_click_logo.png' });
  await browser.close();
})();
