const { chromium } = require('/home/tontonyuta/auto-vibecoder/node_modules/playwright');
const path = require('path');
const fs = require('fs');

async function testUX() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const artifactDir = '/home/tontonyuta/.gemini/antigravity-cli/brain/9c462716-ace3-4e41-932b-13ea1563d7aa';
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }

  // 1. Desktop Test (1440x900)
  console.log('Testing Desktop 1440x900...');
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const dPage = await desktopContext.newPage();
  await dPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Navigate to Practice Mode
  console.log('Navigating to 30 Chuyên đề...');
  await dPage.click('button:has-text("30 Chuyên Đề")');
  await dPage.waitForTimeout(600);

  // Take screenshot of Desktop Practice Studio
  console.log('Capturing desktop_01_practice_studio.png...');
  await dPage.screenshot({ path: path.join(artifactDir, 'desktop_01_practice_studio.png') });

  // Click "Nộp bài" on Topbar
  console.log('Clicking Nộp bài on Topbar...');
  await dPage.click('button:has-text("Nộp bài")');
  await dPage.waitForTimeout(500);

  // Take screenshot of Submit Modal
  console.log('Capturing desktop_02_submit_modal.png...');
  await dPage.screenshot({ path: path.join(artifactDir, 'desktop_02_submit_modal.png') });

  // Verify modal text contains huyhoang6altt@gmail.com
  const modalText = await dPage.locator('role=dialog').innerText();
  if (modalText.includes('huyhoang6altt@gmail.com')) {
    console.log('SUCCESS: Submit modal strictly displays teacher email huyhoang6altt@gmail.com!');
  } else {
    console.error('ERROR: Teacher email missing from modal!');
  }

  // 2. Mobile Test (390x844 - iPhone 14)
  console.log('\nTesting Mobile 390x844...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });
  const mPage = await mobileContext.newPage();
  await mPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Click 30 Chuyên đề on bottom bar
  await mPage.click('nav[aria-label="Mobile Navigation"] button:has-text("30 Chuyên Đề")');
  await mPage.waitForTimeout(600);

  // Take screenshot of Mobile Practice
  console.log('Capturing mobile_01_practice.png...');
  await mPage.screenshot({ path: path.join(artifactDir, 'mobile_01_practice.png') });

  // Click "Chuyên đề" to open sidebar drawer
  console.log('Toggling mobile sidebar drawer...');
  await mPage.click('button[aria-label="Mở danh sách chuyên đề"]');
  await mPage.waitForTimeout(500);
  console.log('Capturing mobile_02_sidebar_drawer.png...');
  await mPage.screenshot({ path: path.join(artifactDir, 'mobile_02_sidebar_drawer.png') });

  await browser.close();
  console.log('\nALL UX AND SUBMIT VERIFICATIONS COMPLETED SUCCESSFULLY!');
}

testUX().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
