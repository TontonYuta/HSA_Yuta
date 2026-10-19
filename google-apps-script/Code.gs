/**
 * ========================================================================================
 * HỆ THỐNG WEBHOOK GOOGLE APPS SCRIPT ĐỒNG BỘ GOOGLE SHEETS & EMAIL BÁO CÁO KẾT QUẢ THI
 * DỰ ÁN: LUYỆN THI TOÁN THPT QUỐC GIA 2027 & ĐGNL HSA ĐHQGHN - TONTONYUTA
 * Phiên bản: v2.2 (Sửa lỗi gửi trùng email & Bổ sung thông báo học sinh truy cập web)
 * ========================================================================================
 * 
 * 📋 HƯỚNG DẪN CÀI ĐẶT 5 BƯỚC CỰC KỲ ĐƠN GIẢN:
 * 1. Mở trang Google Trang Tính (Google Sheets) mới: https://sheets.new
 * 2. Trên thanh menu: Nhấn "Tiện ích mở rộng" (Extensions) -> Chọn "Apps Script".
 * 3. Xóa hết mã cũ trong file "Code.gs", dán toàn bộ đoạn mã này vào rồi bấm Lưu (Ctrl + S).
 * 4. (Tùy chọn) Chọn hàm "setupSheets" ở thanh công cụ phía trên và bấm "Chạy" (Run) để tự động
 *    khởi tạo sẵn các Sheet đẹp mắt.
 * 5. Nhấn "Triển khai" (Deploy) -> "Tùy chọn triển khai mới" (New deployment):
 *    - Chọn loại: "Ứng dụng web" (Web app)
 *    - Mô tả: "HSA & THPTQG Webhook v2.2"
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me)
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone) -> BẮT BUỘC!
 * 6. Bấm "Triển khai", cấp quyền cho tài khoản Google của bạn và SAO CHÉP URL Web App.
 * 7. Dán URL này vào mục "Đồng bộ Webhook" trên ứng dụng Webtest.
 * ========================================================================================
 */

// EMAIL GIÁO VIÊN / ADMIN MẶC ĐỊNH NHẬN KẾT QUẢ & THÔNG BÁO TRUY CẬP
const DEFAULT_TEACHER_EMAIL = "huyhoang6altt@gmail.com";

/**
 * 1. HÀM KIỂM TRA TRẠNG THÁI WEBHOOK (GET REQUEST - HEALTH CHECK)
 * Cho phép kiểm tra Webhook trực tiếp bằng cách mở đường link trên trình duyệt
 */
function doGet(e) {
  try {
    const isJson = e && e.parameter && (e.parameter.json === "1" || e.parameter.format === "json");
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheetName = ss.getName();
    const activeSheets = ss.getSheets().map(function(s) { return s.getName(); });
    
    if (isJson) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        active: true,
        message: "Webhook Luyện Thi THPTQG & HSA TontonYuta đang hoạt động bình thường!",
        spreadsheetName: sheetName,
        availableSheets: activeSheets,
        timestamp: new Date().toISOString()
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const htmlOutput = HtmlService.createHtmlOutput(
      "<!DOCTYPE html>" +
      "<html>" +
      "<head>" +
      "<meta charset='utf-8'/>" +
      "<meta name='viewport' content='width=device-width, initial-scale=1.0'/>" +
      "<title>Trạng Thái Webhook - HSA TontonYuta</title>" +
      "<style>" +
      "  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f172a; color: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; }" +
      "  .card { background: #1e293b; border: 1px solid #334155; border-radius: 20px; padding: 36px; max-width: 520px; width: 100%; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); text-align: center; }" +
      "  .badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 9999px; font-size: 13px; font-weight: 700; background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.3); margin-bottom: 20px; }" +
      "  h1 { font-size: 22px; font-weight: 800; margin: 0 0 10px; color: #ffffff; }" +
      "  p { font-size: 14px; color: #94a3b8; line-height: 1.6; margin: 0 0 24px; }" +
      "  .info-box { background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 16px; text-align: left; font-size: 13px; color: #cbd5e1; margin-bottom: 24px; }" +
      "  .info-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #1e293b; }" +
      "  .info-row:last-child { border-bottom: none; }" +
      "  .info-label { color: #64748b; }" +
      "  .info-val { font-weight: 600; color: #38bdf8; }" +
      "  .footer-note { font-size: 12px; color: #64748b; }" +
      "</style>" +
      "</head>" +
      "<body>" +
      "  <div class='card'>" +
      "    <div class='badge'>● HOẠT ĐỘNG HOÀN HẢO</div>" +
      "    <h1>Webhook Đồng Bộ Dữ Liệu Thi</h1>" +
      "    <p>Hệ thống tự động ghi điểm Google Sheets và gửi email báo cáo kết quả thi THPTQG 2027 & HSA ĐHQGHN đã sẵn sàng kết nối.</p>" +
      "    <div class='info-box'>" +
      "      <div class='info-row'><span class='info-label'>Google Sheet:</span><span class='info-val'>" + sheetName + "</span></div>" +
      "      <div class='info-row'><span class='info-label'>Thời gian máy chủ:</span><span class='info-val'>" + new Date().toLocaleString('vi-VN') + "</span></div>" +
      "      <div class='info-row'><span class='info-label'>Chế độ hỗ trợ:</span><span class='info-val'>THPTQG 2027 & HSA ĐHQGHN</span></div>" +
      "      <div class='info-row'><span class='info-label'>Email quản trị:</span><span class='info-val'>" + (DEFAULT_TEACHER_EMAIL || Session.getActiveUser().getEmail()) + "</span></div>" +
      "    </div>" +
      "    <div class='footer-note'>Hãy dán URL này vào ứng dụng Webtest để tự động thu thập kết quả thi.</div>" +
      "  </div>" +
      "</body>" +
      "</html>"
    );
    htmlOutput.setTitle("Webhook Status - HSA & THPTQG TontonYuta");
    return htmlOutput;
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 2. HÀM XỬ LÝ DỮ LIỆU NỘP BÀI VÀ SỰ KIỆN (POST REQUEST)
 */
function doPost(e) {
  try {
    const lock = LockService.getScriptLock();
    // Chờ tối đa 30s để đảm bảo không bị nghẽn khi hàng trăm học sinh nộp bài cùng lúc
    lock.waitLock(30000);

    const rawData = e.postData.contents;
    const data = JSON.parse(rawData);
    const cache = CacheService.getScriptCache();

    // 2.1. Xác định Email nhận báo cáo của Giáo viên
    let teacherEmail = (data.teacherEmail && data.teacherEmail.trim()) || DEFAULT_TEACHER_EMAIL.trim();
    if (!teacherEmail) {
      try {
        teacherEmail = Session.getActiveUser().getEmail();
      } catch (err) {}
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // 2.2. XỬ LÝ SỰ KIỆN HỌC SINH MỚI THAM GIA & KHẢO SÁT (STUDENT_JOINED)
    if (data.type === "STUDENT_JOINED") {
      let sheetStudents = ss.getSheetByName("DanhSach_HocSinh");
      if (!sheetStudents) {
        sheetStudents = ss.insertSheet("DanhSach_HocSinh");
        sheetStudents.appendRow([
          "Thời Gian Đăng Ký",
          "Họ Và Tên Học Sinh",
          "Trường / Lớp THPT",
          "Biết Qua Đâu",
          "Đánh Giá Kênh TikTok",
          "Thắc Mắc / Góp Ý",
          "Nội Dung Lời Nhắn",
          "Email Học Sinh",
          "Mục Tiêu Ôn Thi",
          "Thiết Bị / Trình Duyệt"
        ]);
        formatHeaderRow(sheetStudents, 10, "#059669"); // Xanh lục Emerald
      }

      sheetStudents.appendRow([
        data.joinedAt || new Date().toLocaleString("vi-VN"),
        data.studentName || "Chưa rõ",
        data.school || "Chưa cung cấp",
        data.source || "Chưa cung cấp",
        data.tiktokRating || "Chưa đánh giá",
        data.hasFeedback || "Không",
        data.feedbackMessage || "",
        data.studentEmail || "Chưa cung cấp",
        data.track || "THPTQG 2027",
        data.userAgent || "Web Browser"
      ]);

      lock.releaseLock();

      // Gửi email thông báo tức thì cho Giáo viên kèm kết quả khảo sát
      if (teacherEmail && teacherEmail.indexOf("@") !== -1) {
        MailApp.sendEmail({
          to: teacherEmail,
          subject: "[TontonYuta] 🎉 Học sinh mới đăng ký & khảo sát: " + (data.studentName || "Học sinh mới") + " (" + (data.school || "THPT") + ")",
          htmlBody: buildStudentJoinedEmail(data, teacherEmail),
          name: "Luyện thi Toán TontonYuta"
        });
      }

      return jsonResponse({ status: "success", type: "STUDENT_JOINED", message: "Đã ghi nhận học sinh và kết quả khảo sát." });
    }

    // 2.3. XỬ LÝ SỰ KIỆN HỌC SINH TRUY CẬP WEB (STUDENT_VISIT hoặc TRAFFIC_PING)
    if (data.type === "STUDENT_VISIT" || data.type === "TRAFFIC_PING") {
      let sheetTraffic = ss.getSheetByName("LuuLuong_TruyCap");
      if (!sheetTraffic) {
        sheetTraffic = ss.insertSheet("LuuLuong_TruyCap");
        sheetTraffic.appendRow([
          "Thời Gian",
          "Họ Tên Thí Sinh",
          "Trường / Lớp",
          "Chế Độ Quan Tâm",
          "Thiết Bị / Trình Duyệt",
          "Nguồn Đến (Referrer)",
          "Lượt Hôm Nay",
          "Tổng Lượt Xem"
        ]);
        formatHeaderRow(sheetTraffic, 8, "#7c3aed"); // Tím Violet
      }

      sheetTraffic.appendRow([
        data.visitedAt || new Date().toLocaleString("vi-VN"),
        data.studentName || "Khách truy cập",
        data.school || "Chưa cung cấp",
        data.track || "THPTQG 2027",
        data.userAgent || "Web Browser",
        data.referrer || "direct",
        data.todayVisits || 1,
        data.totalVisits || 1
      ]);

      // Debounce: Mỗi học sinh/thiết bị chỉ gửi email thông báo 1 lần trong vòng 15 phút (900 giây) để tránh ngập hộp thư
      const visitKey = "visit_" + (data.studentName || "guest") + "_" + (data.school || "none");
      const alreadyNotified = cache.get(visitKey);

      if (!alreadyNotified && teacherEmail && teacherEmail.indexOf("@") !== -1) {
        cache.put(visitKey, "1", 900); // 15 phút cooldown

        const visitSubject = "[TontonYuta] 🔔 Có học sinh vừa truy cập: " + (data.studentName || "Khách mới") + (data.school && data.school !== "Chưa cung cấp" ? (" (" + data.school + ")") : "");
        const visitHtml = buildStudentVisitEmail(data, teacherEmail);

        MailApp.sendEmail({
          to: teacherEmail,
          subject: visitSubject,
          htmlBody: visitHtml,
          name: "Luyện thi Toán TontonYuta"
        });
      }

      lock.releaseLock();
      return jsonResponse({ status: "success", type: "STUDENT_VISIT", emailNotified: !alreadyNotified });
    }

    // 2.4. XỬ LÝ GHI NHẬN KẾT QUẢ BÀI THI (EXAM SUBMISSION)
    // CHỐNG GỬI TRÙNG LẶP EMAIL: Dùng Cache kiểm tra xem bài thi này vừa được gửi trong 5 phút qua hay chưa
    const submissionId = "sub_" + (data.integrityChecksum || (data.studentName + "_" + data.totalScore + "_" + (data.completedAt || "")));
    if (cache.get(submissionId)) {
      lock.releaseLock();
      return jsonResponse({
        status: "success",
        duplicateIgnored: true,
        message: "Kết quả bài thi này đã được gửi trước đó, bỏ qua để tránh trùng lặp email."
      });
    }
    // Đánh dấu đã nhận bài thi trong 5 phút (300 giây)
    cache.put(submissionId, "1", 300);

    const isTHPT = (data.track === "THPTQG") || (data.examSetTitle && data.examSetTitle.indexOf("THPT") !== -1);
    const targetSheetName = isTHPT ? "KetQua_THPTQG" : "KetQua_HSA";
    const headerColor = isTHPT ? "#e11d48" : "#0284c7"; // Đỏ ruby cho THPTQG, Xanh dương cho HSA

    let sheet = ss.getSheetByName(targetSheetName);
    if (!sheet) {
      sheet = ss.insertSheet(targetSheetName);
      sheet.appendRow([
        "Thời Gian Nộp",
        "Chế Độ Thi",
        "Bộ Đề Thi",
        "Họ Tên Thí Sinh",
        "Trường / Lớp",
        "Email Thí Sinh",
        "Email Giáo Viên",
        "Tổng Điểm",
        "Điểm Thang 10 / %",
        "Trắc Nghiệm (MCQ)",
        "Điền Số / Trả Lời Ngắn",
        "Thời Gian Làm",
        "Xếp Loại Năng Lực",
        "Chuyên Đề Cần Ôn Luyện",
        "Số Câu Sai",
        "Giám Sát (Rời Tab)",
        "Mã Checksum"
      ]);
      formatHeaderRow(sheet, 17, headerColor);
    }

    const timeSpentMin = Math.round((data.totalTimeSpentSeconds || 0) / 60);
    const timeSpentStr = timeSpentMin + " phút (" + (data.totalTimeSpentSeconds || 0) + "s)";
    const maxScore = data.maxScore || (isTHPT ? 50 : 50);
    const scoreFraction = (data.totalScore || 0) + " / " + maxScore;
    
    // Tính điểm quy đổi sang thang 10 và phần trăm
    const scorePercent = Math.round(((data.totalScore || 0) / maxScore) * 100);
    const scoreScale10 = (((data.totalScore || 0) / maxScore) * 10).toFixed(2) + " đ";
    const scoreDisplay = isTHPT ? (scoreScale10 + " (" + scorePercent + "%)") : (scoreFraction + " (" + scorePercent + "%)");

    // Xếp loại học lực
    let rankBadge = "Cần củng cố kiến thức";
    let rankColor = "#ef4444";
    if (isTHPT) {
      if (scorePercent >= 90) { rankBadge = "Xuất sắc (Mục tiêu 9+)"; rankColor = "#10b981"; }
      else if (scorePercent >= 80) { rankBadge = "Giỏi (Mục tiêu 8+)"; rankColor = "#0284c7"; }
      else if (scorePercent >= 65) { rankBadge = "Khá (Mục tiêu 7+)"; rankColor = "#f59e0b"; }
      else if (scorePercent >= 50) { rankBadge = "Trung bình (Đạt chuẩn tốt nghiệp)"; rankColor = "#eab308"; }
    } else {
      if (data.totalScore >= 45) { rankBadge = "Xuất sắc (Top 1% HSA ĐHQG)"; rankColor = "#10b981"; }
      else if (data.totalScore >= 40) { rankBadge = "Rất giỏi (Mục tiêu 100+ ĐHQG)"; rankColor = "#0284c7"; }
      else if (data.totalScore >= 32) { rankBadge = "Khá tốt (Đạt chuẩn tuyển sinh)"; rankColor = "#f59e0b"; }
    }

    const incorrectCount = data.answers 
      ? data.answers.filter(function(a) { return !a.isCorrect; }).length 
      : (maxScore - (data.totalScore || 0));

    const weakestTopicStr = data.weakestTopic 
      ? (data.weakestTopic.topicName + " (" + data.weakestTopic.percentage + "%)") 
      : "Không có";

    const tabSwitchStr = (data.tabSwitchCount && data.tabSwitchCount > 0)
      ? ("Cảnh báo: Rời tab " + data.tabSwitchCount + " lần")
      : "100% Nghiêm túc (0 lần)";

    // Thêm bản ghi mới vào Google Sheet
    sheet.appendRow([
      new Date().toLocaleString("vi-VN"),
      isTHPT ? "THPTQG 2027" : "HSA ĐHQGHN",
      data.examSetTitle || (isTHPT ? "Đề Thi THPTQG 2027" : "Đề Thi HSA"),
      data.studentName || "Thí sinh tự do",
      data.school || "Chưa cung cấp",
      data.studentEmail || "Chưa cung cấp",
      teacherEmail || "Chưa cung cấp",
      scoreFraction,
      scoreDisplay,
      (data.mcqScore || 0) + " / " + (data.mcqTotal || 0),
      (data.fillScore || 0) + " / " + (data.fillTotal || 0),
      timeSpentStr,
      rankBadge,
      weakestTopicStr,
      incorrectCount,
      tabSwitchStr,
      data.integrityChecksum ? ("#" + data.integrityChecksum) : "N/A"
    ]);

    lock.releaseLock();

    // 2.5. XÂY DỰNG VÀ GỬI EMAIL BÁO CÁO KẾT QUẢ CHUYÊN SÂU
    const emailSubject = (isTHPT ? "[THPTQG 2027] " : "[HSA ĐHQGHN] ") +
      "Kết quả bài thi: " + (data.studentName || "Thí sinh") + " - " + 
      (data.examSetTitle || "Đề Thi") + " (" + (isTHPT ? scoreScale10 : (data.totalScore + "/" + maxScore + "đ")) + ")";

    const emailHtmlBody = buildExamResultEmail(data, isTHPT, rankBadge, rankColor, scorePercent, scoreScale10, timeSpentStr, teacherEmail);

    let sentCount = 0;

    // 1. Gửi email duy nhất cho Giáo viên / Admin
    if (teacherEmail && teacherEmail.indexOf("@") !== -1) {
      MailApp.sendEmail({
        to: teacherEmail,
        subject: emailSubject,
        htmlBody: emailHtmlBody,
        name: isTHPT ? "Hệ Thống Luyện Thi THPTQG 2027" : "Hệ Thống Luyện Thi HSA TontonYuta"
      });
      sentCount++;
    }

    // 2. Gửi bản sao phiếu điểm điện tử cho Thí sinh NẾU email thí sinh khác email giáo viên
    const isStudentEmailDifferent = data.studentEmail && 
      data.studentEmail.indexOf("@") !== -1 && 
      data.studentEmail.trim().toLowerCase() !== teacherEmail.trim().toLowerCase();

    if (isStudentEmailDifferent) {
      MailApp.sendEmail({
        to: data.studentEmail.trim(),
        subject: "[Phiếu Báo Điểm Điện Tử] " + emailSubject,
        htmlBody: emailHtmlBody,
        name: isTHPT ? "Hệ Thống Luyện Thi THPTQG 2027" : "Hệ Thống Luyện Thi HSA TontonYuta"
      });
      sentCount++;
    }

    return jsonResponse({
      status: "success",
      message: "Đã đồng bộ Google Sheets thành công và gửi email báo cáo (duy nhất 1 email cho mỗi người nhận)!",
      sheetRecorded: targetSheetName,
      teacherEmailSent: teacherEmail,
      studentEmailSent: isStudentEmailDifferent ? data.studentEmail : null
    });

  } catch (error) {
    return jsonResponse({ status: "error", error: error.toString() });
  }
}

/**
 * 3. HÀM TỰ ĐỘNG KHỞI TẠO VÀ ĐỊNH DẠNG TẤT CẢ CÁC BẢNG TÍNH (Bấm Run trong Apps Script)
 */
function setupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Tab 1: THPTQG
  let s1 = ss.getSheetByName("KetQua_THPTQG") || ss.insertSheet("KetQua_THPTQG");
  if (s1.getLastRow() === 0) {
    s1.appendRow(["Thời Gian Nộp", "Chế Độ Thi", "Bộ Đề Thi", "Họ Tên Thí Sinh", "Trường / Lớp", "Email Thí Sinh", "Email Giáo Viên", "Tổng Điểm", "Điểm Thang 10 / %", "Trắc Nghiệm (MCQ)", "Điền Số / Trả Lời Ngắn", "Thời Gian Làm", "Xếp Loại Năng Lực", "Chuyên Đề Cần Ôn Luyện", "Số Câu Sai", "Giám Sát (Rời Tab)", "Mã Checksum"]);
    formatHeaderRow(s1, 17, "#e11d48");
  }

  // Tab 2: HSA
  let s2 = ss.getSheetByName("KetQua_HSA") || ss.insertSheet("KetQua_HSA");
  if (s2.getLastRow() === 0) {
    s2.appendRow(["Thời Gian Nộp", "Chế Độ Thi", "Bộ Đề Thi", "Họ Tên Thí Sinh", "Trường / Lớp", "Email Thí Sinh", "Email Giáo Viên", "Tổng Điểm", "Điểm Thang 10 / %", "Trắc Nghiệm (MCQ)", "Điền Số / Trả Lời Ngắn", "Thời Gian Làm", "Xếp Loại Năng Lực", "Chuyên Đề Cần Ôn Luyện", "Số Câu Sai", "Giám Sát (Rời Tab)", "Mã Checksum"]);
    formatHeaderRow(s2, 17, "#0284c7");
  }

  // Tab 3: Học Sinh
  let s3 = ss.getSheetByName("DanhSach_HocSinh") || ss.insertSheet("DanhSach_HocSinh");
  if (s3.getLastRow() === 0) {
    s3.appendRow([
      "Thời Gian Đăng Ký",
      "Họ Và Tên Học Sinh",
      "Trường / Lớp THPT",
      "Biết Qua Đâu",
      "Đánh Giá Kênh TikTok",
      "Thắc Mắc / Góp Ý",
      "Nội Dung Lời Nhắn",
      "Email Học Sinh",
      "Mục Tiêu Ôn Thi",
      "Thiết Bị / Trình Duyệt"
    ]);
    formatHeaderRow(s3, 10, "#059669");
  }

  // Tab 4: Lưu Lượng
  let s4 = ss.getSheetByName("LuuLuong_TruyCap") || ss.insertSheet("LuuLuong_TruyCap");
  if (s4.getLastRow() === 0) {
    s4.appendRow(["Thời Gian", "Họ Tên Thí Sinh", "Trường / Lớp", "Chế Độ Quan Tâm", "Thiết Bị / Trình Duyệt", "Nguồn Đến (Referrer)", "Lượt Hôm Nay", "Tổng Lượt Xem"]);
    formatHeaderRow(s4, 8, "#7c3aed");
  }

  Logger.log("✅ Đã khởi tạo hoàn tất toàn bộ cấu trúc bảng tính Google Sheets!");
}

/**
 * Helper: Định dạng dòng tiêu đề bảng tính Google Sheets
 */
function formatHeaderRow(sheet, numColumns, bgColor) {
  const range = sheet.getRange(1, 1, 1, numColumns);
  range.setFontWeight("bold")
       .setBackground(bgColor)
       .setFontColor("#ffffff")
       .setHorizontalAlignment("center")
       .setVerticalAlignment("middle");
  sheet.setRowHeight(1, 38);
  sheet.setFrozenRows(1);
  for (let c = 1; c <= numColumns; c++) {
    sheet.autoResizeColumn(c);
  }
}

/**
 * Helper: Trả về JSON Response chuẩn
 */
function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Helper: Tạo template HTML Email thông báo học sinh tham gia mới
 */
function buildStudentJoinedEmail(data, teacherEmail) {
  var feedbackHtml = "";
  if (data.feedbackMessage && data.feedbackMessage.toString().trim() !== "") {
    feedbackHtml = "<tr><td style='color: #4b5563;'>Nội dung lời nhắn:</td><td style='font-style: italic; color: #1e293b; background: #ffffff; padding: 6px 10px; border-radius: 6px; border: 1px dashed #cbd5e1;'>" + data.feedbackMessage + "</td></tr>";
  }

  return "<div style='font-family: Arial, sans-serif; padding: 24px; border: 1px solid #e2e8f0; border-radius: 14px; max-width: 600px; margin: 0 auto; background: #ffffff;'>" +
    "<div style='background: linear-gradient(135deg, #059669, #047857); padding: 18px 20px; border-radius: 10px; color: #ffffff; text-align: center; margin-bottom: 20px;'>" +
    "<h2 style='margin: 0; font-size: 18px; color: #ffffff;'>🎉 HỌC SINH MỚI THAM GIA & KHẢO SÁT</h2>" +
    "<p style='margin: 4px 0 0; font-size: 13px; opacity: 0.9; color: #ffffff;'>Nền tảng Luyện Thi Toán THPTQG 2027 & HSA TontonYuta</p>" +
    "</div>" +
    "<table style='width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.8;'>" +
    "<tr><td style='color: #64748b; width: 150px;'>Họ và tên:</td><td style='font-weight: bold; color: #0f172a;'>" + (data.studentName || "Chưa rõ") + "</td></tr>" +
    "<tr><td style='color: #64748b;'>Trường / Lớp:</td><td style='font-weight: bold; color: #0284c7;'>" + (data.school || "Chưa cung cấp") + "</td></tr>" +
    (data.studentEmail ? ("<tr><td style='color: #64748b;'>Email liên hệ:</td><td>" + data.studentEmail + "</td></tr>") : "") +
    "<tr><td style='color: #64748b;'>Mục tiêu luyện thi:</td><td style='font-weight: bold; color: #e11d48;'>" + (data.track || "THPTQG 2027") + "</td></tr>" +
    "<tr><td style='color: #64748b;'>Thời gian đăng ký:</td><td>" + (data.joinedAt || new Date().toLocaleString("vi-VN")) + "</td></tr>" +
    "</table>" +
    "<div style='background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 14px 16px; margin: 16px 0;'>" +
    "<div style='font-weight: bold; color: #166534; font-size: 13.5px; margin-bottom: 8px;'>📊 KẾT QUẢ KHẢO SÁT HỌC SINH:</div>" +
    "<table style='width: 100%; border-collapse: collapse; font-size: 13px; line-height: 1.7;'>" +
    "<tr><td style='color: #4b5563; width: 150px;'>Biết tới qua đâu:</td><td style='font-weight: 600; color: #0284c7;'>" + (data.source || "Chưa cung cấp") + "</td></tr>" +
    "<tr><td style='color: #4b5563;'>Đánh giá kênh TikTok:</td><td style='font-weight: bold; color: #d97706;'>" + (data.tiktokRating || "Chưa đánh giá") + "</td></tr>" +
    "<tr><td style='color: #4b5563;'>Thắc mắc / Góp ý:</td><td style='font-weight: 600; color: #e11d48;'>" + (data.hasFeedback || "Không") + "</td></tr>" +
    feedbackHtml +
    "</table>" +
    "</div>" +
    "<hr style='border: none; border-top: 1px solid #f1f5f9; margin: 20px 0;'/>" +
    "<p style='font-size: 12px; color: #94a3b8; text-align: center; margin: 0;'>Dữ liệu tự động đồng bộ về Google Sheet của: " + teacherEmail + "</p>" +
    "</div>";
}

/**
 * Helper: Tạo template HTML Email thông báo học sinh truy cập web
 */
function buildStudentVisitEmail(data, teacherEmail) {
  const brandGradient = "linear-gradient(135deg, #7c3aed, #4f46e5)";
  return "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6; color: #1e293b; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;'>" +
    "<div style='background: " + brandGradient + "; padding: 20px; border-radius: 12px; color: #ffffff; margin-bottom: 20px; text-align: center;'>" +
    "<h2 style='margin: 0; font-size: 19px; font-weight: 800; color: #ffffff;'>🔔 THÔNG BÁO HỌC SINH TRUY CẬP WEB</h2>" +
    "<p style='margin: 4px 0 0; font-size: 13px; opacity: 0.95; color: #ffffff;'>Hệ thống Luyện thi Toán THPTQG 2027 & ĐGNL HSA TontonYuta</p>" +
    "</div>" +
    "<p style='font-size: 14.5px;'>Kính gửi Thầy/Cô,</p>" +
    "<p style='font-size: 14px; color: #475569;'>Hệ thống vừa ghi nhận một lượt truy cập mới vào nền tảng ôn luyện:</p>" +
    "<div style='background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin: 18px 0;'>" +
    "<table style='width: 100%; border-collapse: collapse; font-size: 13.5px; line-height: 1.8;'>" +
    "<tr><td style='color: #64748b; width: 140px;'>Họ và tên:</td><td style='font-weight: bold; color: #0f172a;'>" + (data.studentName || "Khách truy cập") + "</td></tr>" +
    "<tr><td style='color: #64748b;'>Trường / Lớp:</td><td style='font-weight: 600; color: #0284c7;'>" + (data.school || "Chưa cung cấp") + "</td></tr>" +
    (data.studentEmail ? ("<tr><td style='color: #64748b;'>Email:</td><td>" + data.studentEmail + "</td></tr>") : "") +
    "<tr><td style='color: #64748b;'>Chế độ quan tâm:</td><td style='font-weight: bold; color: #e11d48;'>" + (data.track || "THPTQG 2027") + "</td></tr>" +
    "<tr><td style='color: #64748b;'>Thời gian truy cập:</td><td style='font-weight: 600;'>" + (data.visitedAt || new Date().toLocaleString("vi-VN")) + "</td></tr>" +
    "<tr><td style='color: #64748b;'>Thiết bị / Màn hình:</td><td style='color: #64748b; font-size: 12px;'>" + (data.screen ? (data.screen + " · ") : "") + (data.userAgent || "Web Browser") + "</td></tr>" +
    "</table>" +
    "</div>" +
    "<p style='font-size: 12px; color: #94a3b8; text-align: center; margin: 20px 0 0; border-top: 1px solid #f1f5f9; padding-top: 12px;'>" +
    "Thông báo tự động gửi về: " + teacherEmail + " · Hệ thống tự động gộp (cooldown 15 phút) để tránh spam hộp thư." +
    "</p>" +
    "</div>";
}

/**
 * Helper: Tạo template HTML Email báo cáo kết quả bài thi chuyên sâu
 */
function buildExamResultEmail(data, isTHPT, rankBadge, rankColor, scorePercent, scoreScale10, timeSpentStr, teacherEmail) {
  const brandColor = isTHPT ? "#e11d48" : "#0284c7";
  const brandGradient = isTHPT ? "linear-gradient(135deg, #e11d48, #be123c)" : "linear-gradient(135deg, #0284c7, #0369a1)";
  const systemName = isTHPT ? "LUYỆN THI THPT QUỐC GIA 2027" : "LUYỆN THI ĐGNL HSA ĐHQGHN";
  const examSub = isTHPT ? "Chương trình GDPT 2018 · Đã lọc bỏ tham số m · Tăng cường Toán thực tế" : "Đánh Giá Năng Lực ĐHQG Hà Nội · Tư Duy Định Lượng";

  // 1. Phân tích từng chuyên đề
  let breakdownHtml = "";
  if (data.topicBreakdown && data.topicBreakdown.length > 0) {
    breakdownHtml += "<table style='width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px;'>";
    breakdownHtml += "<tr style='background: #f8fafc; text-align: left; color: #475569;'><th style='padding: 8px 10px; border: 1px solid #e2e8f0;'>Chuyên đề</th><th style='padding: 8px; border: 1px solid #e2e8f0; text-align: center; width: 80px;'>Số câu đúng</th><th style='padding: 8px; border: 1px solid #e2e8f0; text-align: center; width: 80px;'>Tỷ lệ</th></tr>";
    data.topicBreakdown.forEach(function(item) {
      const barColor = item.percentage >= 80 ? "#10b981" : (item.percentage >= 50 ? "#f59e0b" : "#ef4444");
      breakdownHtml += "<tr>";
      breakdownHtml += "<td style='padding: 8px 10px; border: 1px solid #e2e8f0; font-weight: 500; color: #1e293b;'>" + item.topicName + "</td>";
      breakdownHtml += "<td style='padding: 8px; border: 1px solid #e2e8f0; text-align: center; font-weight: 600;'>" + item.correctCount + " / " + item.totalCount + "</td>";
      breakdownHtml += "<td style='padding: 8px; border: 1px solid #e2e8f0; text-align: center;'><span style='color: " + barColor + "; font-weight: bold;'>" + item.percentage + "%</span></td>";
      breakdownHtml += "</tr>";
    });
    breakdownHtml += "</table>";
  }

  // 2. Danh sách câu làm SAI cần chữa
  let incorrectListHtml = "";
  if (data.answers && data.answers.length > 0) {
    const wrongAnswers = data.answers.filter(function(a) { return !a.isCorrect; });
    if (wrongAnswers.length > 0) {
      incorrectListHtml += "<h4 style='color: #dc2626; margin: 24px 0 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;'>⚠️ Danh sách " + wrongAnswers.length + " câu thí sinh làm sai cần chữa bài:</h4>";
      incorrectListHtml += "<table style='width: 100%; border-collapse: collapse; font-size: 12.5px;'>";
      incorrectListHtml += "<tr style='background: #fef2f2; color: #991b1b; text-align: left;'><th style='padding: 8px; border: 1px solid #fecaca; width: 60px; text-align: center;'>Câu</th><th style='padding: 8px; border: 1px solid #fecaca;'>Chuyên đề kiến thức</th><th style='padding: 8px; border: 1px solid #fecaca; text-align: center; width: 90px;'>Thí sinh chọn</th><th style='padding: 8px; border: 1px solid #fecaca; text-align: center; width: 90px;'>Đáp án đúng</th></tr>";
      wrongAnswers.forEach(function(w) {
        incorrectListHtml += "<tr>";
        incorrectListHtml += "<td style='padding: 7px; border: 1px solid #fecaca; font-weight: bold; text-align: center;'>#" + w.questionId + "</td>";
        incorrectListHtml += "<td style='padding: 7px; border: 1px solid #fecaca; color: #334155;'>" + (w.topicName || "Chuyên đề") + "</td>";
        incorrectListHtml += "<td style='padding: 7px; border: 1px solid #fecaca; text-align: center; color: #dc2626; font-weight: bold; background: #fff1f2;'>" + (w.userAnswer ? w.userAnswer : "(Bỏ trống)") + "</td>";
        incorrectListHtml += "<td style='padding: 7px; border: 1px solid #fecaca; text-align: center; color: #16a34a; font-weight: bold; background: #f0fdf4;'>" + w.correctAnswer + "</td>";
        incorrectListHtml += "</tr>";
      });
      incorrectListHtml += "</table>";
    } else {
      incorrectListHtml = "<div style='background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 14px; margin-top: 20px; text-align: center; color: #166534; font-weight: bold;'>🎉 XUẤT SẮC! Thí sinh làm đúng tuyệt đối 100% tất cả các câu hỏi trong đề!</div>";
    }
  }

  // 3. Toàn bộ Layout Email
  return "<div style='font-family: Arial, sans-serif; max-width: 660px; margin: 0 auto; line-height: 1.6; color: #1e293b; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;'>" +
    "<div style='background: " + brandGradient + "; padding: 22px 24px; border-radius: 12px; color: #ffffff; margin-bottom: 22px; text-align: center;'>" +
    "<h2 style='margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; color: #ffffff;'>" + systemName + "</h2>" +
    "<p style='margin: 6px 0 0; font-size: 13px; opacity: 0.95; color: #ffffff;'>" + examSub + "</p>" +
    "</div>" +

    "<p style='font-size: 15px;'>Kính gửi Quý Thầy/Cô và Thí sinh <strong>" + (data.studentName || "Thí sinh tự do") + "</strong>" + (data.school ? (" (" + data.school + ")") : "") + ",</p>" +
    "<p style='font-size: 14px; color: #475569;'>Hệ thống vừa ghi nhận kết quả hoàn thành bài thi <strong>" + (data.examSetTitle || "Đề Chuẩn") + "</strong>. Thông tin chi tiết như sau:</p>" +

    "<div style='background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 20px 0;'>" +
    "<div style='text-align: center; margin-bottom: 16px;'>" +
    "<span style='font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;'>Tổng điểm bài thi</span><br/>" +
    "<span style='font-size: 34px; font-weight: 900; color: " + brandColor + ";'>" + (isTHPT ? scoreScale10 : (data.totalScore + " / " + (data.maxScore || 50))) + "</span>" +
    "<div style='margin-top: 6px;'><span style='background: " + rankColor + "; color: #ffffff; padding: 4px 14px; border-radius: 9999px; font-size: 12px; font-weight: bold;'>" + rankBadge + " (" + scorePercent + "%)</span></div>" +
    "</div>" +

    "<table style='width: 100%; border-collapse: collapse; font-size: 13.5px;'>" +
    "<tr><td style='padding: 6px 0; color: #64748b;'>Họ và tên thí sinh:</td><td style='padding: 6px 0; font-weight: bold; text-align: right;'>" + (data.studentName || "Thí sinh tự do") + "</td></tr>" +
    (data.school ? ("<tr><td style='padding: 6px 0; color: #64748b;'>Trường / Lớp:</td><td style='padding: 6px 0; font-weight: 600; text-align: right; color: #0284c7;'>" + data.school + "</td></tr>") : "") +
    "<tr><td style='padding: 6px 0; color: #64748b;'>Email thí sinh:</td><td style='padding: 6px 0; text-align: right;'>" + (data.studentEmail || "Chưa cung cấp") + "</td></tr>" +
    "<tr><td style='padding: 6px 0; color: #64748b;'>Thời gian làm bài:</td><td style='padding: 6px 0; font-weight: bold; text-align: right;'>" + timeSpentStr + "</td></tr>" +
    "<tr><td style='padding: 6px 0; color: #64748b;'>Phần Trắc nghiệm (MCQ):</td><td style='padding: 6px 0; font-weight: 600; text-align: right;'>" + (data.mcqScore || 0) + " / " + (data.mcqTotal || 0) + " câu</td></tr>" +
    "<tr><td style='padding: 6px 0; color: #64748b;'>Phần Điền số / Trả lời ngắn:</td><td style='padding: 6px 0; font-weight: 600; text-align: right;'>" + (data.fillScore || 0) + " / " + (data.fillTotal || 0) + " câu</td></tr>" +
    "<tr><td style='padding: 6px 0; color: #dc2626;'>Chuyên đề cần bổ trợ:</td><td style='padding: 6px 0; font-weight: bold; color: #dc2626; text-align: right;'>" + (data.weakestTopic ? (data.weakestTopic.topicName + " (" + data.weakestTopic.percentage + "%)") : "Không có") + "</td></tr>" +
    "<tr><td style='padding: 6px 0; color: #64748b;'>Giám sát liêm chính:</td><td style='padding: 6px 0; font-weight: 600; text-align: right; color: " + (data.tabSwitchCount && data.tabSwitchCount > 0 ? "#dc2626" : "#16a34a") + ";'>" + (data.tabSwitchCount && data.tabSwitchCount > 0 ? ("Đã rời tab " + data.tabSwitchCount + " lần") : "100% Nghiêm túc (0 lần rời tab)") + (data.integrityChecksum ? (" [#" + data.integrityChecksum + "]") : "") + "</td></tr>" +
    "</table>" +
    "</div>" +

    "<h4 style='color: #0f172a; margin: 24px 0 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;'>📊 Phân tích năng lực theo từng chuyên đề:</h4>" +
    breakdownHtml +

    incorrectListHtml +

    "<div style='margin-top: 28px; padding-top: 14px; border-top: 1px solid #f1f5f9; text-align: center; font-size: 12px; color: #94a3b8;'>" +
    "Dự án Luyện thi Toán THPT Quốc Gia 2027 & ĐGNL HSA cùng TontonYuta · Nền tảng luyện thi chuẩn hóa GDPT 2018." +
    "</div>" +
    "</div>";
}
