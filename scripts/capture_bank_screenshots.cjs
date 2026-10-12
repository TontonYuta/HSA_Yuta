const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/a77f8a51-82ce-4b87-9fe7-1fdf9b02bb9e';

(async () => {
  console.log('📸 Capturing Question Bank View in Playwright...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  
  // Click "Ngân Hàng Câu Hỏi" tab in Navbar
  await page.click('button:has-text("Ngân Hàng Câu Hỏi")');
  await page.waitForTimeout(1000);

  // Take screenshot of Question Bank Header & First batch
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'bank_overview_top.png') });
  console.log('Saved bank_overview_top.png');

  // Expand first 5 questions to view their solutions & formulas
  const expandButtons = await page.$$('button:has-text("Xem lời giải")');
  console.log(`Found ${expandButtons.length} expand buttons.`);
  for (let i = 0; i < Math.min(5, expandButtons.length); i++) {
    await expandButtons[i].click();
    await page.waitForTimeout(200);
  }

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'bank_questions_expanded_1_5.png') });
  console.log('Saved bank_questions_expanded_1_5.png');

  // Scroll down and expand more questions (e.g. Q#10 to Q#15)
  await page.evaluate(() => window.scrollBy(0, 1500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'bank_questions_scroll_mid.png') });
  console.log('Saved bank_questions_scroll_mid.png');

  await browser.close();
  console.log('Finished capturing screenshots.');
})();
