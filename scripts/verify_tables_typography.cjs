const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');
const path = require('path');

const ARTIFACT_DIR = '/home/tontonyuta/.gemini/antigravity-cli/brain/d057e91c-022f-45f7-a783-27db1727de5a';

async function verifyTypographyAndTables() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Mobile Context (390x844 - iPhone 13/14)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();

  await mobilePage.addInitScript(() => {
    localStorage.setItem('hsa_student_registered', 'true');
    localStorage.setItem('hsa_student_name', 'Thí sinh Thử Nghiệm');
    localStorage.setItem('hsa_student_school', 'THPT Quốc Gia 2027');
  });

  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Open mobile drawer
  const menuBtn = mobilePage.locator('button[aria-label="Toggle Sidebar Menu"]').first();
  if (await menuBtn.isVisible()) {
    await menuBtn.click();
    await mobilePage.waitForTimeout(500);

    // Click Ngân Hàng Câu Hỏi in mobile drawer (last element)
    const mobileBankItem = mobilePage.locator('aside.fixed button:has-text("Ngân Hàng Câu Hỏi")');
    await mobileBankItem.click();
    await mobilePage.waitForTimeout(800);
  }

  // Filter for 'bảng tần số'
  const mobileSearch = mobilePage.locator('input[placeholder*="Tìm kiếm"]').first();
  if (await mobileSearch.isVisible()) {
    await mobileSearch.fill('bảng tần số');
    await mobilePage.waitForTimeout(600);
  }

  // Expand solution for first statistical question
  const mExpandBtn = mobilePage.locator('button:has-text("Xem lời giải")').first();
  if (await mExpandBtn.isVisible()) {
    await mExpandBtn.click();
    await mobilePage.waitForTimeout(500);
  }

  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_tables_typography.png') });
  console.log('Saved mobile_tables_typography.png');

  // Also test Topic Practice on Mobile (Chuyên đề Thống kê ghép nhóm)
  if (await menuBtn.isVisible()) {
    await menuBtn.click();
    await mobilePage.waitForTimeout(500);
    await mobilePage.locator('aside.fixed button:has-text("Luyện Chuyên Đề")').click();
    await mobilePage.waitForTimeout(800);

    const tkChapter = mobilePage.locator('button:has-text("Thống kê ghép nhóm"), div:has-text("Thống kê ghép nhóm")').first();
    if (await tkChapter.isVisible()) {
      await tkChapter.click();
      await mobilePage.waitForTimeout(600);
    }

    await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_practice_tables.png') });
    console.log('Saved mobile_practice_tables.png');
  }

  await browser.close();
  console.log('Mobile screenshots captured successfully!');
}

verifyTypographyAndTables().catch(err => {
  console.error(err);
  process.exit(1);
});
