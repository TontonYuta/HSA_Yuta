const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/a77f8a51-82ce-4b87-9fe7-1fdf9b02bb9e';

(async () => {
  console.log('📸 Capturing Updated Question Bank in Playwright...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage({ viewport: { width: 1280, height: 950 } });
  
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  
  // Click "Ngân Hàng Câu Hỏi" tab in Navbar
  await page.click('button:has-text("Ngân Hàng Câu Hỏi")');
  await page.waitForTimeout(1000);

  // 1. Overview screenshot
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'bank_view_300_overview.png') });
  console.log('Saved bank_view_300_overview.png');

  // 2. Expand first 4 questions to view formatted KaTeX, solutions, and colored badges
  const expandButtons = await page.$$('button:has-text("Xem lời giải")');
  console.log(`Found ${expandButtons.length} expand buttons.`);
  for (let i = 0; i < Math.min(4, expandButtons.length); i++) {
    await expandButtons[i].click();
    await page.waitForTimeout(200);
  }
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'bank_view_expanded_solutions.png') });
  console.log('Saved bank_view_expanded_solutions.png');

  // 3. Test Difficulty Filter: Filter only "Vận dụng cao"
  await page.selectOption('select:has-text("Tất cả mức độ")', 'Vận dụng cao');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'bank_view_filter_vdc.png') });
  console.log('Saved bank_view_filter_vdc.png');

  await browser.close();
  console.log('All screenshots captured successfully.');
})();
