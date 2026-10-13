/**
 * =========================================================================
 * IMPARA CREATIVE LABS - ENQUIRY FORM BACKEND
 * Google Apps Script for Google Sheet Storage + Direct Email Notifications
 * =========================================================================
 *
 * HOW IT WORKS:
 * 1. Appends all student enquiry submissions into this Google Sheet automatically.
 * 2. Instantly dispatches a formatted notification email to your inbox.
 * 3. (Optional) Sends an automated confirmation email to the student.
 *
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Open a new Google Sheet (e.g. name it "Impara Enquiries 2026").
 * 2. In the top menu, click Extensions > Apps Script.
 * 3. Delete any default code and paste this entire file.
 * 4. Update NOTIFICATION_EMAIL below to your preferred email address.
 * 5. Click "Deploy" > "New deployment".
 * 6. Under "Select type" (gear icon), choose "Web app".
 * 7. Set:
 *      - Description: "Impara Enquiry Webhook"
 *      - Execute as: "Me" (your Google account)
 *      - Who has access: "Anyone" (crucial so Vercel can post to it)
 * 8. Click "Deploy" and authorize permissions if prompted.
 * 9. Copy the generated Web App URL (starts with https://script.google.com/macros/s/...)
 * 10. Paste this URL into your Vercel Project Settings as GOOGLE_SHEET_WEBHOOK_URL.
 */

// Configuration
var CONFIG = {
  // Email address that receives new enquiry notifications:
  NOTIFICATION_EMAIL: "imparacreativelabs@gmail.com",

  // Brand details shown in emails:
  BRAND_NAME: "Impara Creative Labs",
  PARTNER_NAME: "TechKnots",
  PHONE: "+91 91767 47268",

  // Set to true to send an automatic acknowledgement email to the student:
  SEND_STUDENT_CONFIRMATION: true,
};

/**
 * Handle incoming POST requests from the website form / Vercel API
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10 seconds to prevent concurrent row overlap

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: "No post data received" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 1. Parse JSON payload
    var data = JSON.parse(e.postData.contents);

    // 2. Discard honeypot spam
    if (data.botField) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: true, message: "Ignored bot" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 3. Open Active Sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Auto-create styled headers if this is a fresh sheet
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp",
        "Full Name",
        "Mobile Number",
        "Email",
        "Preferred Programme",
        "Preferred Schedule",
        "Learning Mode",
        "Current Status",
        "College / Organization",
        "Degree / Branch",
        "Graduation Year",
        "Learning Goals"
      ];
      sheet.appendRow(headers);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0866E8");
      headerRange.setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    // 4. Append submission row
    var timestamp = new Date();
    var formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");

    sheet.appendRow([
      formattedDate,
      data.fullName || "",
      "'" + (data.mobileNumber || ""), // Prefix with ' to preserve phone formatting in sheets
      data.email || "",
      data.preferredCourse || "",
      data.preferredSchedule || "",
      data.learningMode || "",
      data.currentStatus || "",
      data.collegeOrOrganization || "",
      data.degree || "",
      data.graduationYear || "",
      data.learningGoals || ""
    ]);

    // 5. Send Direct Email Notification to Admin / Admissions Team
    sendAdminNotification(data, formattedDate);

    // 6. Send Confirmation Email to the Student (Optional)
    if (CONFIG.SEND_STUDENT_CONFIRMATION && data.email) {
      sendStudentConfirmation(data);
    }

    // 7. Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: "Enquiry successfully recorded in Google Sheets and email dispatched."
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error in doPost: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Handle GET request (allows testing the webhook in a browser)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "online",
      service: "Impara Creative Labs - Form Backend Webhook",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Send email notification to Admissions / Admin
 */
function sendAdminNotification(data, formattedDate) {
  var subject = "🎓 New Enquiry: " + (data.fullName || "Student") + " - " + (data.preferredCourse || "General");

  var cleanPhone = String(data.mobileNumber || "").replace(/[^0-9]/g, "");
  var waLink = "https://wa.me/" + cleanPhone + "?text=" + encodeURIComponent("Hi " + (data.fullName || "") + ", thank you for your enquiry regarding " + (data.preferredCourse || "our programmes") + " at Impara Creative Labs!");

  var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #E5E7EB; border-radius: 16px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #0866E8; padding: 24px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">${CONFIG.BRAND_NAME}</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">New Programme Registration of Interest</p>
      </div>

      <div style="padding: 28px 24px;">
        <p style="font-size: 15px; color: #374151; margin-top: 0; line-height: 1.5;">
          A new enquiry was submitted through the website. Here are the candidate details:
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; width: 38%; background: #F9FAFB;">Full Name</td>
            <td style="padding: 10px 12px; color: #111827; font-weight: 700;">${data.fullName || "-"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; background: #F9FAFB;">Mobile Number</td>
            <td style="padding: 10px 12px; color: #111827;">
              <a href="tel:${data.mobileNumber}" style="color: #0866E8; text-decoration: none; font-weight: bold;">${data.mobileNumber || "-"}</a>
              &nbsp;|&nbsp;
              <a href="${waLink}" style="color: #10B981; text-decoration: none; font-weight: bold;">Chat on WhatsApp</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; background: #F9FAFB;">Email Address</td>
            <td style="padding: 10px 12px; color: #111827;">
              <a href="mailto:${data.email}" style="color: #0866E8; text-decoration: none;">${data.email || "-"}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; background: #F9FAFB;">Selected Programme</td>
            <td style="padding: 10px 12px; color: #0866E8; font-weight: 800;">${data.preferredCourse || "-"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; background: #F9FAFB;">Preferred Schedule</td>
            <td style="padding: 10px 12px; color: #111827;">${data.preferredSchedule || "-"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; background: #F9FAFB;">Learning Mode</td>
            <td style="padding: 10px 12px; color: #111827;">${data.learningMode || "-"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; background: #F9FAFB;">Current Status</td>
            <td style="padding: 10px 12px; color: #111827;">${data.currentStatus || "-"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; background: #F9FAFB;">College / Organization</td>
            <td style="padding: 10px 12px; color: #111827;">${data.collegeOrOrganization || "Not specified"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; background: #F9FAFB;">Degree / Branch</td>
            <td style="padding: 10px 12px; color: #111827;">${data.degree || "Not specified"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; background: #F9FAFB;">Graduation Year</td>
            <td style="padding: 10px 12px; color: #111827;">${data.graduationYear || "Not specified"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; background: #F9FAFB;">Learning Goals</td>
            <td style="padding: 10px 12px; color: #374151;">${data.learningGoals || "None provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-weight: bold; color: #4B5563; background: #F9FAFB;">Submitted At</td>
            <td style="padding: 10px 12px; color: #6B7280; font-size: 12px;">${formattedDate}</td>
          </tr>
        </table>

        <div style="margin-top: 28px; text-align: center;">
          <a href="mailto:${data.email}?subject=Re:%20Impara%20Creative%20Labs%20Enquiry%20-%20${encodeURIComponent(data.preferredCourse || '')}" 
             style="display: inline-block; padding: 12px 24px; background-color: #0866E8; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;">
            Reply to ${data.fullName || "Candidate"}
          </a>
        </div>
      </div>

      <div style="background-color: #F9FAFB; padding: 16px; text-align: center; font-size: 12px; color: #6B7280; border-top: 1px solid #E5E7EB;">
        ${CONFIG.BRAND_NAME} &bull; Powered by ${CONFIG.PARTNER_NAME} &bull; Contact: ${CONFIG.PHONE}
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: CONFIG.NOTIFICATION_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: data.email || CONFIG.NOTIFICATION_EMAIL
  });
}

/**
 * Send automatic acknowledgment email to the student
 */
function sendStudentConfirmation(data) {
  var subject = "Thank you for your enquiry | " + CONFIG.BRAND_NAME;

  var htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5E7EB; border-radius: 16px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #0866E8; padding: 24px; text-align: center; color: #ffffff;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 800;">${CONFIG.BRAND_NAME}</h1>
        <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">Learn. Create. Build. Beyond. &bull; Powered by ${CONFIG.PARTNER_NAME}</p>
      </div>

      <div style="padding: 24px; color: #374151; font-size: 14px; line-height: 1.6;">
        <p style="margin-top: 0;">Dear <strong>${data.fullName}</strong>,</p>

        <p>
          Thank you for registering your interest in <strong>${data.preferredCourse}</strong> at ${CONFIG.BRAND_NAME}!
        </p>

        <div style="background-color: #F0F7FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <h4 style="margin: 0 0 8px 0; color: #0866E8; font-size: 14px;">Your Enquiry Summary:</h4>
          <p style="margin: 4px 0;"><strong>Selected Programme:</strong> ${data.preferredCourse}</p>
          <p style="margin: 4px 0;"><strong>Preferred Schedule:</strong> ${data.preferredSchedule} (${data.learningMode})</p>
        </div>

        <h4 style="color: #111827; margin-bottom: 8px;">What happens next?</h4>
        <ol style="margin-top: 0; padding-left: 20px;">
          <li>Our admissions and academic advisory team will review your preferences.</li>
          <li>We will connect with you via WhatsApp or phone call at <strong>${data.mobileNumber}</strong> to share the detailed weekly syllabus and upcoming batch dates.</li>
          <li>You'll receive full guidance on the capstone project scope and hardware kit details.</li>
        </ol>

        <p>If you have questions in the meantime, feel free to reach out directly:</p>
        <p style="margin: 4px 0;"><strong>Phone:</strong> ${CONFIG.PHONE}</p>
        <p style="margin: 4px 0;"><strong>Email:</strong> ${CONFIG.NOTIFICATION_EMAIL}</p>
        <p style="margin: 4px 0;"><strong>WhatsApp:</strong> <a href="https://wa.me/919176747268" style="color: #10B981; text-decoration: none; font-weight: bold;">+91 91767 47268</a></p>

        <p style="margin-top: 24px;">
          Warm regards,<br>
          <strong>Admissions & Mentorship Team</strong><br>
          ${CONFIG.BRAND_NAME}
        </p>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    htmlBody: htmlBody
  });
}
