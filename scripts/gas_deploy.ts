import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { generateGasScript } from '../src/data/gasScriptTemplate.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const claspConfigPath = path.join(rootDir, '.clasp.json');
const codeGsPath = path.join(rootDir, 'google-apps-script', 'Code.gs');

const DEFAULT_DEPLOYMENT_ID = 'AKfycbydbnEnhDyyS4zkTvZhm6P2kRLLznrpIVSmwSt0YJBa4n3YJLKdNQ4k_zgzHyDox6Rmiw';
const DEFAULT_TEACHER_EMAIL = 'huyhoang6altt@gmail.com';

console.log('======================================================================');
console.log('   GOOGLE APPS SCRIPT CI/CD AUTO-DEPLOY PIPELINE');
console.log('======================================================================\n');

// 1. Sync template to Code.gs
console.log('[1/4] Đồng bộ mã nguồn từ src/data/gasScriptTemplate.ts sang Code.gs...');
try {
  const codeContent = generateGasScript(DEFAULT_TEACHER_EMAIL);
  fs.writeFileSync(codeGsPath, codeContent, 'utf-8');
  console.log(' -> Đã cập nhật Code.gs chuẩn mực (đã làm sạch branding, tối ưu logic).\n');
} catch (err: any) {
  console.error(' -> LỖI đồng bộ template:', err.message);
  process.exit(1);
}

// 2. Check .clasp.json
console.log('[2/4] Kiểm tra cấu hình liên kết dự án (.clasp.json)...');
if (!fs.existsSync(claspConfigPath)) {
  console.error('\n[CHƯA CẤU HÌNH SCRIPT ID]');
  console.log('Chưa tìm thấy file .clasp.json!');
  console.log('Để tự động deploy, bạn hãy làm theo 2 bước sau:');
  console.log(' 1. Mở Google Sheet -> Tiện ích mở rộng -> Apps Script.');
  console.log(' 2. Bấm Cài đặt dự án (Project Settings - biểu tượng bánh răng bên trái) -> Copy "ID tập lệnh" (Script ID).');
  console.log(' 3. Tạo file .clasp.json ở thư mục gốc với nội dung:');
  console.log(`    {\n      "scriptId": "DAN_SCRIPT_ID_VAO_DAY",\n      "rootDir": "./google-apps-script"\n    }\n`);
  process.exit(1);
}

const claspConfig = JSON.parse(fs.readFileSync(claspConfigPath, 'utf-8'));
if (!claspConfig.scriptId || claspConfig.scriptId.includes('DAN_SCRIPT_ID')) {
  console.error('\n[LỖI] Script ID trong .clasp.json chưa hợp lệ!');
  console.log('Vui lòng mở .clasp.json và điền đúng Script ID từ Google Apps Script.');
  process.exit(1);
}
console.log(` -> Tìm thấy Script ID: ${claspConfig.scriptId.slice(0, 8)}... (${claspConfig.scriptId.length} ký tự)\n`);

// 3. Push code to Google Apps Script
console.log('[3/4] Đẩy mã nguồn lên Google Apps Script Cloud (clasp push)...');
try {
  const pushOutput = execSync('npx @google/clasp push -f', { cwd: rootDir, encoding: 'utf-8' });
  console.log(pushOutput.trim());
  console.log(' -> Đẩy mã nguồn thành công!\n');
} catch (err: any) {
  console.error('\n[LỖI CLASP PUSH]');
  if (err.message && (err.message.includes('login') || err.message.includes('credentials'))) {
    console.error('Bạn chưa đăng nhập clasp! Hãy chạy lệnh sau trên terminal để đăng nhập:');
    console.error('  npm run gas:login');
  } else {
    console.error(err.stdout || err.message);
  }
  process.exit(1);
}

// 4. Redeploy to keep the existing Webhook URL
console.log('[4/4] Triển khai bản cập nhật mới (giữ nguyên Webhook URL hiện tại)...');
const deploymentId = process.env.GAS_DEPLOYMENT_ID || DEFAULT_DEPLOYMENT_ID;
const description = `Auto-deploy via MathYuta CLI (${new Date().toLocaleString('vi-VN')})`;

try {
  const deployCmd = `npx @google/clasp deploy -i ${deploymentId} -d "${description}"`;
  const deployOutput = execSync(deployCmd, { cwd: rootDir, encoding: 'utf-8' });
  console.log(deployOutput.trim());
  console.log('\n======================================================================');
  console.log('🎉 CẬP NHẬT GOOGLE APPS SCRIPT THÀNH CÔNG RỰC RỠ!');
  console.log(`URL Webhook giữ nguyên 100%: https://script.google.com/macros/s/${deploymentId}/exec`);
  console.log('======================================================================\n');
} catch (err: any) {
  console.warn('Lưu ý khi cập nhật deployment ID:', err.stdout || err.message);
  console.log('Đang tạo bản triển khai mới nếu deployment ID chỉ định chưa khớp...');
  try {
    const newDeployOutput = execSync(`npx @google/clasp deploy -d "${description}"`, { cwd: rootDir, encoding: 'utf-8' });
    console.log(newDeployOutput.trim());
    console.log('\n[THÀNH CÔNG] Đã tạo bản triển khai phiên bản mới!');
  } catch (innerErr: any) {
    console.error('Lỗi triển khai:', innerErr.stdout || innerErr.message);
  }
}
