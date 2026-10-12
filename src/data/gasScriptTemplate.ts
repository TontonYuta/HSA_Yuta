/**
 * Google Apps Script Webhook Template Generator
 * Handles Google Sheets auto-recording and automated email dispatch
 */
export function generateGasScript(teacherEmail: string = ''): string {
  const safeTeacherEmail = teacherEmail || '';
  return `/**
 * =========================================================================
 * LUYỆN THI HSA CÙNG TONTONYUTA - GOOGLE APPS SCRIPT WEBHOOK VÀ EMAIL SENDER
 * =========================================================================
 * Hướng dẫn:
 * 1. Mở Google Sheet mới -> Tiện ích mở rộng (Extensions) -> Apps Script
 * 2. Dán toàn bộ mã này vào Code.gs và nhấn Lưu (Ctrl+S)
 * 3. Điền email của bạn vào TEACHER_EMAIL bên dưới (hoặc để trống để tự lấy email Google của bạn)
 * 4. Nhấn "Triển khai" -> "Tùy chọn triển khai mới" -> Chọn "Ứng dụng web" (Web app)
 *    - Thực thi dưới dạng: "Tôi" (Me)
 *    - Người có quyền truy cập: "Bất kỳ ai" (Anyone)
 * 5. Sao chép URL Web App dán vào ô Webhook URL trên hệ thống Webtest
 * =========================================================================
 */

// ĐIỀN EMAIL CỦA BẠN VÀO ĐÂY (hoặc để trống để script tự động lấy email tài khoản Google của bạn)
const DEFAULT_TEACHER_EMAIL = "${safeTeacherEmail}";

function doPost(e) {
  try {
    const lock = LockService.getScriptLock();
    lock.waitLock(15000); // Tránh xung đột khi nhiều học sinh nộp bài cùng lúc

    const rawData = e.postData.contents;
    const data = JSON.parse(rawData);

    // 1. Xác định Email nhận báo cáo của Giáo viên / Admin
    let teacherEmail = (data.teacherEmail && data.teacherEmail.trim()) || DEFAULT_TEACHER_EMAIL.trim();
    if (!teacherEmail) {
      try {
        teacherEmail = Session.getActiveUser().getEmail();
      } catch (err) {}
    }

    // 2. Xử lý trường hợp Học sinh mới tham gia / Cập nhật tên (STUDENT_JOINED)
    if (data.type === "STUDENT_JOINED") {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      let sheetStudents = ss.getSheetByName("DanhSach_HocSinh");
      if (!sheetStudents) {
        sheetStudents = ss.insertSheet("DanhSach_HocSinh");
        sheetStudents.appendRow(["Thời Gian", "Họ Tên Học Sinh", "Lớp / Trường THPT", "Email Học Sinh", "Trình Duyệt"]);
        sheetStudents.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#0284c7").setFontColor("#ffffff");
      }
      sheetStudents.appendRow([
        new Date().toLocaleString("vi-VN"),
        data.studentName || "Chưa rõ",
        data.school || "Chưa cung cấp",
        data.studentEmail || "Chưa cung cấp",
        data.userAgent || ""
      ]);
      lock.releaseLock();

      // Gửi email thông báo cho Giáo viên
      if (teacherEmail && teacherEmail.indexOf("@") !== -1) {
        MailApp.sendEmail({
          to: teacherEmail,
          subject: "[HSA TontonYuta] Học sinh mới tham gia: " + (data.studentName || "Học sinh mới"),
          htmlBody: "<div style='font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; max-width: 600px;'>" +
            "<h3 style='color: #0284c7; margin-top: 0;'>🎉 Học sinh mới vừa tham gia hệ thống luyện thi HSA!</h3>" +
            "<p><strong>Họ và tên:</strong> " + (data.studentName || "") + "</p>" +
            "<p><strong>Lớp / Trường:</strong> " + (data.school || "Chưa cung cấp") + "</p>" +
            "<p><strong>Email học sinh:</strong> " + (data.studentEmail || "Chưa cung cấp") + "</p>" +
            "<p><strong>Thời gian:</strong> " + (data.joinedAt || new Date().toLocaleString("vi-VN")) + "</p>" +
            "<hr style='border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;'/>" +
            "<p style='font-size: 12px; color: #64748b;'>Hệ thống Luyện thi HSA cùng TontonYuta (Email mặc định: " + teacherEmail + ")</p>" +
            "</div>",
          name: "Luyện thi HSA cùng TontonYuta"
        });
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "success", type: "STUDENT_JOINED" })).setMimeType(ContentService.MimeType.JSON);
    }

    // 3. Xử lý Ping lưu lượng (TRAFFIC_PING)
    if (data.type === "TRAFFIC_PING") {
      lock.releaseLock();
      return ContentService.createTextOutput(JSON.stringify({ status: "success", type: "TRAFFIC_PING" })).setMimeType(ContentService.MimeType.JSON);
    }

    // 4. Ghi kết quả bài thi vào Google Sheet "KetQua_HSA_TontonYuta"
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("KetQua_HSA_TontonYuta");
    if (!sheet) {
      sheet = ss.insertSheet("KetQua_HSA_TontonYuta");
      sheet.appendRow([
        "Thời Gian Nộp",
        "Bộ Đề Thi",
        "Họ Tên Thí Sinh",
        "Email Thí Sinh",
        "Email Giáo Viên",
        "Tổng Điểm",
        "Trắc Nghiệm (MCQ)",
        "Điền Đáp Số (Fill)",
        "Thời Gian Làm",
        "Chuyên Đề Yếu Nhất",
        "Số Câu Sai"
      ]);
      sheet.getRange(1, 1, 1, 11)
        .setFontWeight("bold")
        .setBackground("#0284c7")
        .setFontColor("#ffffff");
    }

    const timeSpentMin = Math.round((data.totalTimeSpentSeconds || 0) / 60);
    const incorrectCount = (data.answers ? data.answers.filter(function(a) { return !a.isCorrect; }).length : (data.maxScore - data.totalScore));

    sheet.appendRow([
      new Date().toLocaleString("vi-VN"),
      data.examSetTitle || "Đề Chuẩn HSA",
      data.studentName || "Thí sinh HSA",
      data.studentEmail || "Chưa cung cấp",
      teacherEmail || "Chưa cung cấp",
      data.totalScore + " / " + data.maxScore,
      data.mcqScore + " / " + data.mcqTotal,
      data.fillScore + " / " + data.fillTotal,
      timeSpentMin + " phút",
      (data.weakestTopic ? data.weakestTopic.topicName + " (" + data.weakestTopic.percentage + "%)" : "Không có"),
      incorrectCount
    ]);

    lock.releaseLock();

    // 5. Xây dựng nội dung Email HTML báo cáo chuyên sâu
    const scorePercent = Math.round((data.totalScore / (data.maxScore || 50)) * 100);
    let rankBadge = "Cần bổ sung kiến thức";
    let rankBg = "#ef4444";
    if (data.totalScore >= 45) { rankBadge = "Xuất sắc (Top 1% HSA)"; rankBg = "#10b981"; }
    else if (data.totalScore >= 40) { rankBadge = "Rất giỏi (Mục tiêu 100+ ĐHQG)"; rankBg = "#0284c7"; }
    else if (data.totalScore >= 32) { rankBadge = "Khá tốt (Đạt chuẩn tuyển sinh)"; rankBg = "#f59e0b"; }

    // Bảng chuyên đề
    let breakdownHtml = "";
    if (data.topicBreakdown && data.topicBreakdown.length > 0) {
      breakdownHtml += "<table style='width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px;'>";
      breakdownHtml += "<tr style='background: #f1f5f9; text-align: left;'><th style='padding: 8px; border: 1px solid #e2e8f0;'>Chuyên đề</th><th style='padding: 8px; border: 1px solid #e2e8f0; text-align: center;'>Đúng/Tổng</th><th style='padding: 8px; border: 1px solid #e2e8f0; text-align: center;'>Tỷ lệ</th></tr>";
      data.topicBreakdown.forEach(function(item) {
        const barColor = item.percentage >= 80 ? "#10b981" : (item.percentage >= 50 ? "#f59e0b" : "#ef4444");
        breakdownHtml += "<tr>";
        breakdownHtml += "<td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 500;'>" + item.topicName + "</td>";
        breakdownHtml += "<td style='padding: 8px; border: 1px solid #e2e8f0; text-align: center;'>" + item.correctCount + "/" + item.totalCount + "</td>";
        breakdownHtml += "<td style='padding: 8px; border: 1px solid #e2e8f0; text-align: center;'><span style='color: " + barColor + "; font-weight: bold;'>" + item.percentage + "%</span></td>";
        breakdownHtml += "</tr>";
      });
      breakdownHtml += "</table>";
    }

    // Bảng chi tiết các câu làm SAI
    let incorrectListHtml = "";
    if (data.answers && data.answers.length > 0) {
      const wrongAnswers = data.answers.filter(function(a) { return !a.isCorrect; });
      if (wrongAnswers.length > 0) {
        incorrectListHtml += "<h4 style='color: #dc2626; margin: 20px 0 8px;'>Danh sách " + wrongAnswers.length + " câu thí sinh làm sai / cần chữa bài:</h4>";
        incorrectListHtml += "<table style='width: 100%; border-collapse: collapse; font-size: 12px;'>";
        incorrectListHtml += "<tr style='background: #fef2f2; color: #991b1b; text-align: left;'><th style='padding: 6px; border: 1px solid #fecaca;'>Câu</th><th style='padding: 6px; border: 1px solid #fecaca;'>Chuyên đề</th><th style='padding: 6px; border: 1px solid #fecaca; text-align: center;'>Thí sinh chọn</th><th style='padding: 6px; border: 1px solid #fecaca; text-align: center;'>Đáp án đúng</th></tr>";
        wrongAnswers.forEach(function(w) {
          incorrectListHtml += "<tr>";
          incorrectListHtml += "<td style='padding: 6px; border: 1px solid #fecaca; font-weight: bold;'>Câu " + w.questionId + "</td>";
          incorrectListHtml += "<td style='padding: 6px; border: 1px solid #fecaca;'>" + (w.topicName || "Chuyên đề") + "</td>";
          incorrectListHtml += "<td style='padding: 6px; border: 1px solid #fecaca; text-align: center; color: #dc2626; font-weight: bold;'>" + (w.userAnswer || "(Bỏ trống)") + "</td>";
          incorrectListHtml += "<td style='padding: 6px; border: 1px solid #fecaca; text-align: center; color: #16a34a; font-weight: bold;'>" + w.correctAnswer + "</td>";
          incorrectListHtml += "</tr>";
        });
        incorrectListHtml += "</table>";
      } else {
        incorrectListHtml = "<p style='color: #16a34a; font-weight: bold; margin-top: 15px;'>🎉 Thí sinh làm đúng tuyệt đối 100% tất cả các câu hỏi!</p>";
      }
    }

    const emailHtmlBody = 
      "<div style='font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; line-height: 1.6; color: #1e293b; padding: 24px; border: 1px solid #e2e8f0; border-radius: 14px; background-color: #ffffff;'>" +
      "<div style='background: linear-gradient(135deg, #0284c7, #0369a1); padding: 20px; border-radius: 10px; color: #ffffff; margin-bottom: 20px; text-align: center;'>" +
      "<h2 style='margin: 0; font-size: 20px; font-weight: 700; color: #ffffff;'>LUYỆN THI HSA CÙNG TONTONYUTA</h2>" +
      "<p style='margin: 4px 0 0; font-size: 13px; color: #e0f2fe;'>Báo Cáo Kết Quả Thi Môn Toán Học & Tư Duy Định Lượng (ĐHQGHN)</p>" +
      "</div>" +

      "<p>Kính gửi Thầy/Cô và Thí sinh <strong>" + (data.studentName || "Thí sinh HSA") + "</strong>,</p>" +
      "<p>Hệ thống vừa ghi nhận kết quả hoàn thành bài thi <strong>" + (data.examSetTitle || "Đề Chuẩn HSA") + "</strong>. Thông tin chi tiết kết quả như sau:</p>" +

      "<div style='background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; margin: 18px 0;'>" +
      "<div style='text-align: center; margin-bottom: 14px;'>" +
      "<span style='font-size: 13px; color: #64748b; text-transform: uppercase; font-weight: 600;'>Tổng điểm đạt được</span><br/>" +
      "<span style='font-size: 32px; font-weight: 800; color: #0284c7;'>" + data.totalScore + " / " + data.maxScore + "</span>" +
      "<div style='margin-top: 4px;'><span style='background: " + rankBg + "; color: #ffffff; padding: 3px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold;'>" + rankBadge + " (" + scorePercent + "%)</span></div>" +
      "</div>" +
      "<table style='width: 100%; border-collapse: collapse; font-size: 13px;'>" +
      "<tr><td style='padding: 6px 0; color: #64748b;'>Họ và tên thí sinh:</td><td style='padding: 6px 0; font-weight: bold; text-align: right;'>" + (data.studentName || "Thí sinh tự do") + "</td></tr>" +
      "<tr><td style='padding: 6px 0; color: #64748b;'>Email thí sinh:</td><td style='padding: 6px 0; text-align: right;'>" + (data.studentEmail || "Chưa cung cấp") + "</td></tr>" +
      "<tr><td style='padding: 6px 0; color: #64748b;'>Thời gian làm bài:</td><td style='padding: 6px 0; font-weight: bold; text-align: right;'>" + timeSpentMin + " phút (" + (data.totalTimeSpentSeconds || 0) + " giây)</td></tr>" +
      "<tr><td style='padding: 6px 0; color: #64748b;'>Phần Trắc nghiệm 4 lựa chọn:</td><td style='padding: 6px 0; font-weight: bold; text-align: right;'>" + data.mcqScore + " / " + data.mcqTotal + " câu</td></tr>" +
      "<tr><td style='padding: 6px 0; color: #64748b;'>Phần Tự luận điền số ngắn:</td><td style='padding: 6px 0; font-weight: bold; text-align: right;'>" + data.fillScore + " / " + data.fillTotal + " câu</td></tr>" +
      "<tr><td style='padding: 6px 0; color: #dc2626;'>Chuyên đề cần bổ trợ cấp tốc:</td><td style='padding: 6px 0; font-weight: bold; color: #dc2626; text-align: right;'>" + (data.weakestTopic ? data.weakestTopic.topicName + " (" + data.weakestTopic.percentage + "%)" : "Không có") + "</td></tr>" +
      "</table>" +
      "</div>" +

      "<h4 style='color: #0f172a; margin: 20px 0 8px;'>Phân tích năng lực theo từng chuyên đề:</h4>" +
      breakdownHtml +

      incorrectListHtml +

      "<p style='margin-top: 25px; font-size: 11px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 12px; text-align: center;'>" +
      "Hệ thống Luyện thi HSA cùng TontonYuta · Nền tảng luyện thi chuẩn cấu trúc GDPT 2018." +
      "</p>" +
      "</div>";

    const emailSubject = "[HSA TontonYuta] Báo cáo kết quả: " + (data.studentName || "Thí sinh") + " - " + (data.examSetTitle || "Đề HSA") + " (" + data.totalScore + "/" + data.maxScore + " điểm)";

    // 6. Gửi email trực tiếp về cho Giáo viên / Admin ("Gửi mail về cho tôi")
    let sentCount = 0;
    if (teacherEmail && teacherEmail.indexOf("@") !== -1) {
      MailApp.sendEmail({
        to: teacherEmail,
        subject: emailSubject,
        htmlBody: emailHtmlBody,
        name: "Luyện thi HSA cùng TontonYuta"
      });
      sentCount++;
    }

    // 7. Gửi bản sao cho Thí sinh nếu thí sinh cung cấp email riêng
    if (data.studentEmail && data.studentEmail.indexOf("@") !== -1 && data.studentEmail.toLowerCase() !== teacherEmail.toLowerCase()) {
      MailApp.sendEmail({
        to: data.studentEmail,
        subject: "[Kết quả bài thi] " + emailSubject,
        htmlBody: emailHtmlBody,
        name: "Luyện thi HSA cùng TontonYuta"
      });
      sentCount++;
    }

    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: "success", 
        message: "Đã lưu vào Google Sheet và gửi email thành công tới " + sentCount + " địa chỉ!",
        teacherEmailSent: teacherEmail || null,
        sheetRecorded: true
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`;
}
