const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/a77f8a51-82ce-4b87-9fe7-1fdf9b02bb9e';

(async () => {
  console.log('📸 Capturing screenshots of questions with Bảng Biến Thiên...');
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage({
    viewport: { width: 1200, height: 900 }
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Go to 30 Chuyên Đề
  await page.locator('button:has-text("30 Chuyên Đề")').first().click();
  await page.waitForTimeout(800);

  // 1. Screenshot Tương giao đồ thị (has Q#104, Q#153, Q#230...)
  const tuongGiaoBtn = page.locator('button:has-text("Tương giao đồ thị")').first();
  if (await tuongGiaoBtn.isVisible()) {
    await tuongGiaoBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'bbt_q104_tuong_giao.png') });
    console.log('Captured bbt_q104_tuong_giao.png');
  }

  // 2. Screenshot Cực trị hàm số (has Q#225, Q#226, Q#252, Q#254...)
  const cucTriBtn = page.locator('button:has-text("Cực trị của hàm số")').first();
  if (await cucTriBtn.isVisible()) {
    await cucTriBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'bbt_cuc_tri.png') });
    console.log('Captured bbt_cuc_tri.png');
  }

  // 3. Screenshot Đơn điệu hàm số (has Q#223, Q#253...)
  const donDieuBtn = page.locator('button:has-text("Tính đơn điệu của hàm số")').first();
  if (await donDieuBtn.isVisible()) {
    await donDieuBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'bbt_don_dieu.png') });
    console.log('Captured bbt_don_dieu.png');
  }

  await browser.close();
  console.log('All BBT screenshots captured successfully!');
})();
