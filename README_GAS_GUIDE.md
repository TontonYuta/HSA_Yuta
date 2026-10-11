# Hướng Dẫn Tích Hợp Google Sheets & Tự Động Gửi Email (Google Apps Script)

Hệ thống **Luyện thi HSA cùng TontonYuta** hỗ trợ tự động gửi email báo cáo chi tiết về cho Giáo viên/Admin ngay khi thí sinh nộp bài thi, đồng thời lưu lịch sử điểm số vào Google Sheets thông qua Google Apps Script Webhook.

---

## 1. Tạo Google Sheets & Mở Trình Biên Tập Apps Script

1. Truy cập [sheets.new](https://sheets.new) để tạo một bảng tính mới với tên: `HSA_Ket_Qua_TontonYuta`.
2. Trên thanh menu, chọn **Tiện ích mở rộng (Extensions)** > **Apps Script**.
3. Xóa toàn bộ mã mặc định trong tệp `Mã.gs` (`Code.gs`) và dán toàn bộ đoạn mã bên dưới.

---

## 2. Mã Nguồn Google Apps Script Mẫu (Code.gs)

```javascript
/**
 * =========================================================================
 * LUYỆN THI HSA CÙNG TONTONYUTA - GOOGLE APPS SCRIPT WEBHOOK VÀ EMAIL SENDER
 * =========================================================================
 * Tính năng:
 * 1. Tự động ghi kết quả bài thi vào Google Sheet "KetQua_HSA_TontonYuta"
 * 2. Tự động gửi Email báo cáo kết quả chi tiết kèm phân tích năng lực về cho
 *    Giáo viên / Admin (người sở hữu) và Thí sinh.
 * =========================================================================
 */

// ĐIỀN EMAIL CỦA BẠN VÀO ĐÂY (hoặc để trống để script tự động lấy email tài khoản Google của bạn)
const DEFAULT_TEACHER_EMAIL = "";

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

    // 2. Ghi kết quả vào Google Sheet "KetQua_HSA_TontonYuta"
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

    // 3. Xây dựng nội dung Email HTML báo cáo chuyên sâu
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

    // 4. Gửi email trực tiếp về cho Giáo viên / Admin ("Gửi mail về cho tôi")
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

    // 5. Gửi bản sao cho Thí sinh nếu thí sinh cung cấp email riêng
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

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      message: "Webhook Luyện thi HSA cùng TontonYuta đang hoạt động bình thường!",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## 3. Triển Khai Web App (Deploy)

1. Nhấp vào nút **Triển khai (Deploy)** màu xanh ở góc trên bên phải > Chọn **Tùy chọn triển khai mới (New deployment)**.
2. Nhấp vào biểu tượng bánh răng bên cạnh mục *Chọn loại* > Chọn **Ứng dụng web (Web app)**.
3. Cấu hình chính xác như sau:
   - **Mô tả (Description)**: `HSA Results Receiver & Email Sender`
   - **Thực thi dưới dạng (Execute as)**: **Tôi (Me / email của bạn)**
   - **Người có quyền truy cập (Who has access)**: **Bất kỳ ai (Anyone)** *(Bắt buộc để web app gửi kết quả)*
4. Nhấp **Triển khai (Deploy)**, chọn tài khoản Google của bạn và nhấn **Cho phép (Authorize / Allow)**.
5. Sao chép **URL của ứng dụng web** (kết thúc bằng `/exec`).
6. Dán URL này và Email của bạn vào mục **Cấu hình Webhook & Email** trên hệ thống webtest.
