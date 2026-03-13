/**
 * Google Apps Script — United World Summit Contact Form Handler
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com and create a new project
 * 2. Paste this entire script into the editor
 * 3. Update NOTIFICATION_EMAIL below with your email address
 * 4. Run the `setup` function once (it will create the Google Sheet and headers)
 * 5. Deploy as a web app:
 *    - Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy and copy the URL
 * 6. Paste the deployment URL into your Next.js contact page (GOOGLE_SCRIPT_URL)
 */

// ─── Configuration ──────────────────────────────────────────────────────────
const NOTIFICATION_EMAIL = "info@unitedworldsummit.com"; // change this
const SHEET_NAME = "UWS Contact Submissions";
const EMAIL_SUBJECT = "UWS 2026 — New Contact Form Submission";
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Run this once to create the spreadsheet and set up headers.
 */
function setup() {
  const ss = SpreadsheetApp.create(SHEET_NAME);
  const sheet = ss.getActiveSheet();
  sheet
    .getRange(1, 1, 1, 6)
    .setValues([["Timestamp", "Name", "Email", "Company", "Message", "Status"]])
    .setFontWeight("bold");
  sheet.setFrozenRows(1);

  // Auto-resize columns
  for (let i = 1; i <= 6; i++) {
    sheet.autoResizeColumn(i);
  }

  Logger.log("Spreadsheet created: " + ss.getUrl());
  Logger.log("Save this URL — your submissions will appear here.");
}

/**
 * Handles POST requests from the contact form.
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return buildResponse(false, "Missing required fields.");
    }

    // 1. Save to Google Sheet
    saveToSheet(data);

    // 2. Send notification email
    sendNotificationEmail(data);

    return buildResponse(true, "Message received successfully.");
  } catch (err) {
    Logger.log("Error: " + err.toString());
    return buildResponse(false, "Server error. Please try again.");
  }
}

/**
 * Handles GET requests (optional — for health checks).
 */
function doGet() {
  return buildResponse(true, "UWS Contact Form API is running.");
}

/**
 * Appends a row to the first spreadsheet named SHEET_NAME.
 */
function saveToSheet(data) {
  const files = DriveApp.getFilesByName(SHEET_NAME);
  if (!files.hasNext()) {
    throw new Error(
      'Spreadsheet not found. Run the "setup" function first.'
    );
  }

  const ss = SpreadsheetApp.open(files.next());
  const sheet = ss.getActiveSheet();

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.company || "Not provided",
    data.message,
    "New",
  ]);
}

/**
 * Sends a formatted notification email.
 */
function sendNotificationEmail(data) {
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #3b2a1a; padding: 24px; text-align: center;">
        <h1 style="color: #d4a843; margin: 0; font-size: 20px;">United World Summit</h1>
        <p style="color: #d4a84399; margin: 4px 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">New Contact Form Submission</p>
      </div>
      <div style="padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1f2937; font-weight: 500;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${data.email}" style="color: #3b2a1a;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;">Company</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1f2937;">${data.company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #6b7280; vertical-align: top;">Message</td>
            <td style="padding: 12px 0; color: #1f2937; line-height: 1.6;">${data.message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f9fafb; border-radius: 8px;">
          <p style="margin: 0; color: #6b7280; font-size: 13px;">
            <strong>Reply directly</strong> to this email to respond to <strong>${data.name}</strong> at ${data.email}
          </p>
        </div>
      </div>
      <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
        United World Summit 2026 — UNECA, Addis Ababa
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    replyTo: data.email,
    subject: EMAIL_SUBJECT + " — " + data.name,
    htmlBody: htmlBody,
    body: `New submission from ${data.name} (${data.email})\nCompany: ${data.company || "Not provided"}\n\nMessage:\n${data.message}`,
  });
}

/**
 * Builds a CORS-friendly JSON response.
 */
function buildResponse(success, message) {
  const output = ContentService.createTextOutput(
    JSON.stringify({ success: success, message: message })
  ).setMimeType(ContentService.MimeType.JSON);
  return output;
}
