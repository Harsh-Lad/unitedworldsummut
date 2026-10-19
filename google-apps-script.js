/**
 * Google Apps Script — United World Summit form + booking handler
 *
 * Handles two kinds of POST requests from the website:
 *   1. Contact form submissions (sent from the browser)
 *   2. Dubai summit paid bookings (sent from the Next.js server after Razorpay
 *      payment is captured, type: "dubai_booking")
 *
 * SETUP INSTRUCTIONS (first time):
 * 1. Go to https://script.google.com and create a new project
 * 2. Paste this entire script into the editor
 * 3. Update NOTIFICATION_EMAIL / BOOKING_NOTIFICATION_EMAILS below
 * 4. Run `setup` once (contact sheet) and `setupBookings` once (bookings sheet)
 * 5. Project Settings → Script Properties → add BOOKING_SECRET with a long
 *    random value. Put the same value in the website env as BOOKING_SCRIPT_SECRET.
 * 6. Deploy as a web app:
 *    - Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy and copy the URL
 * 7. Paste the deployment URL into the contact page (GOOGLE_SCRIPT_URL) and
 *    into the website env as BOOKING_SCRIPT_URL.
 *
 * UPDATING AN EXISTING DEPLOYMENT (keeps the same URL):
 *   Deploy → Manage deployments → ✏️ Edit → Version: "New version" → Deploy.
 *   Then run `setupBookings` once and add the BOOKING_SECRET script property.
 *   The first run will ask you to re-authorise (Sheets + Mail).
 */

// ─── Configuration ──────────────────────────────────────────────────────────
const NOTIFICATION_EMAIL = "info@unitedworldsummit.com"; // change this
const SHEET_NAME = "UWS Contact Submissions";
const EMAIL_SUBJECT = "UWS 2027 — New Contact Form Submission";

// Dubai summit bookings
const BOOKING_SHEET_NAME = "UES 2026 Dubai Bookings";
// Comma-separated list of team inboxes that get a copy of every paid booking.
const BOOKING_NOTIFICATION_EMAILS = "info@unitedworldsummit.com,info@unitedgateone.com";
const BOOKING_REPLY_TO = "info@unitedgateone.com";
const BOOKING_SENDER_NAME = "United Economic Summit 2026";
const BOOKING_HEADERS = [
  "Booking ID", "Timestamp", "Status", "Full Name", "Email", "Phone",
  "Organisation", "Designation", "City", "Departure City", "Arrival Date",
  "Delegates", "Additional Delegates", "Amount (INR)", "Payment Method",
  "Razorpay Order ID", "Razorpay Payment ID", "Receipt", "Source",
];
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Run this once to create the contact spreadsheet and set up headers.
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
 * Run this once to create the Dubai bookings spreadsheet.
 * Its ID is stored in Script Properties so the handler can find it.
 */
function setupBookings() {
  const props = PropertiesService.getScriptProperties();
  const existingId = props.getProperty("BOOKING_SHEET_ID");
  if (existingId) {
    Logger.log("Bookings sheet already exists: " + SpreadsheetApp.openById(existingId).getUrl());
    return;
  }
  const ss = SpreadsheetApp.create(BOOKING_SHEET_NAME);
  const sheet = ss.getActiveSheet();
  sheet.setName("Bookings");
  sheet.getRange(1, 1, 1, BOOKING_HEADERS.length).setValues([BOOKING_HEADERS]).setFontWeight("bold");
  sheet.setFrozenRows(1);
  props.setProperty("BOOKING_SHEET_ID", ss.getId());

  if (!props.getProperty("BOOKING_SECRET")) {
    Logger.log("⚠️ Add a BOOKING_SECRET script property (Project Settings → Script Properties).");
  }
  Logger.log("Bookings spreadsheet created: " + ss.getUrl());
}

/**
 * Optional: run once after setup to confirm emails are delivered.
 * Sends a sample confirmation + team notification without touching the sheet.
 */
function testBookingEmails() {
  const sample = {
    bookingId: "UESDXB-TEST",
    orderId: "order_TEST",
    paymentId: "pay_TEST",
    receipt: "UES-DXB-TEST",
    amount: 200000,
    currency: "INR",
    method: "upi",
    fullName: "Test Delegate",
    email: Session.getActiveUser().getEmail(),
    phone: "+91 90000 00000",
    organisation: "Test Org",
    designation: "Director",
    city: "Mumbai",
    departureCity: "Mumbai",
    arrivalDate: "2026-12-01",
    delegates: 1,
    additionalDelegates: "",
    event: "United Economic Summit 2026 (Dubai Edition)",
    eventDates: "1st to 10th December 2026",
    eventCity: "Dubai, United Arab Emirates",
  };
  sendBookingConfirmation(sample);
  sendBookingNotification(sample, "test");
  Logger.log("Test emails sent to " + sample.email + " and " + BOOKING_NOTIFICATION_EMAILS);
}

/**
 * Handles POST requests from the contact form and the booking API.
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.type === "dubai_booking") {
      return handleDubaiBooking(data);
    }

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
        United World Summit 2027
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

// ═════════════════════════════════════════════════════════════════════════════
// Dubai summit bookings
// ═════════════════════════════════════════════════════════════════════════════

/**
 * Records a paid booking and sends the delegate confirmation + team
 * notification. Idempotent on Razorpay order id: the website calls this from
 * both the checkout verify step and the Razorpay webhook, and only the first
 * call records the row and sends emails.
 */
function handleDubaiBooking(data) {
  const expected = PropertiesService.getScriptProperties().getProperty("BOOKING_SECRET");
  if (!expected || data.secret !== expected) {
    return buildResponse(false, "Unauthorised.");
  }

  const b = data.booking || {};
  if (!b.orderId || !b.paymentId || !b.email) {
    return buildResponse(false, "Missing booking fields.");
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  let bookingId;
  try {
    const sheet = getBookingSheet();
    const existing = findBookingByOrderId(sheet, b.orderId);
    if (existing) {
      return buildBookingResponse(existing, true);
    }

    const seq = Math.max(sheet.getLastRow(), 1); // header row is 1, so first booking = 0001
    bookingId = "UESDXB-" + String(seq).padStart(4, "0");

    sheet.appendRow([
      bookingId,
      new Date(),
      "Paid",
      b.fullName,
      b.email,
      b.phone,
      b.organisation,
      b.designation,
      b.city,
      b.departureCity,
      b.arrivalDate,
      b.delegates,
      b.additionalDelegates,
      b.amount,
      b.method,
      b.orderId,
      b.paymentId,
      b.receipt,
      data.source || "",
    ]);
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }

  b.bookingId = bookingId;

  // Emails are sent outside the lock. A mail failure is logged but does not
  // undo the booking, which is already recorded and paid.
  try {
    sendBookingConfirmation(b);
  } catch (err) {
    Logger.log("Confirmation email failed for " + bookingId + ": " + err);
  }
  try {
    sendBookingNotification(b, data.source);
  } catch (err) {
    Logger.log("Notification email failed for " + bookingId + ": " + err);
  }

  return buildBookingResponse(bookingId, false);
}

function getBookingSheet() {
  const id = PropertiesService.getScriptProperties().getProperty("BOOKING_SHEET_ID");
  if (!id) throw new Error('Bookings sheet not found. Run "setupBookings" first.');
  return SpreadsheetApp.openById(id).getSheets()[0];
}

function findBookingByOrderId(sheet, orderId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return null;
  const orderCol = BOOKING_HEADERS.indexOf("Razorpay Order ID") + 1;
  const ids = sheet.getRange(2, orderCol, lastRow - 1, 1).getValues();
  for (let i = 0; i < ids.length; i++) {
    if (ids[i][0] === orderId) {
      return sheet.getRange(i + 2, 1).getValue();
    }
  }
  return null;
}

function buildBookingResponse(bookingId, duplicate) {
  return ContentService.createTextOutput(
    JSON.stringify({ success: true, bookingId: bookingId, duplicate: duplicate })
  ).setMimeType(ContentService.MimeType.JSON);
}

function esc(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function formatArrival(isoDate) {
  if (!isoDate) return "To be confirmed";
  const d = new Date(isoDate + "T00:00:00Z");
  const out = new Date(d.getTime() + 2 * 24 * 60 * 60 * 1000);
  const fmt = (x) => Utilities.formatDate(x, "UTC", "d MMM yyyy");
  return fmt(d) + " to " + fmt(out) + " (2 nights / 3 days)";
}

function rowsHtml(rows) {
  return rows
    .map(
      (r) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f1ece4;color:#6b7280;width:170px;vertical-align:top;font-size:13px;">${esc(r[0])}</td>
        <td style="padding:10px 0;border-bottom:1px solid #f1ece4;color:#1f2937;font-size:14px;">${r[2] ? r[1] : esc(r[1])}</td>
      </tr>`
    )
    .join("");
}

function emailShell(title, subtitle, inner) {
  return `
  <div style="background:#faf8f5;padding:24px 12px;">
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #eee3cf;">
      <div style="background:#a01118;padding:28px 24px;text-align:center;">
        <p style="color:#eaca83;margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;">United Gate One presents</p>
        <h1 style="color:#ffffff;margin:8px 0 0;font-size:22px;">${esc(title)}</h1>
        <p style="color:#f5dba6;margin:6px 0 0;font-size:13px;">${esc(subtitle)}</p>
      </div>
      <div style="height:4px;background:#d4a73d;"></div>
      <div style="padding:28px 28px 8px;">${inner}</div>
      <div style="padding:20px 28px 28px;text-align:center;color:#9ca3af;font-size:12px;line-height:1.6;">
        United Economic Summit 2026 · Dubai · 1st to 10th December 2026<br>
        Organised by United Gate One · Media Partner: Bharat 24<br>
        <a href="mailto:${BOOKING_REPLY_TO}" style="color:#a01118;">${BOOKING_REPLY_TO}</a>
      </div>
    </div>
  </div>`;
}

/** Email to the delegate. */
function sendBookingConfirmation(b) {
  const delegatesLine =
    b.delegates > 1 && b.additionalDelegates
      ? esc(b.fullName) + "<br>" + esc(b.additionalDelegates).replace(/\n/g, "<br>")
      : esc(b.fullName);

  const inner = `
    <p style="color:#1f2937;font-size:15px;margin:0 0 12px;">Dear ${esc(b.fullName)},</p>
    <p style="color:#4b5563;font-size:14px;line-height:1.7;margin:0 0 20px;">
      Thank you for registering. Your payment has been received and your place at the
      <strong>United Economic Summit 2026, Dubai</strong> is confirmed.
    </p>
    <div style="background:#fdf5e6;border:1px solid #f5dba6;padding:16px 18px;margin:0 0 20px;">
      <p style="margin:0;color:#9a7417;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Booking ID</p>
      <p style="margin:4px 0 0;color:#a01118;font-size:22px;font-weight:bold;">${esc(b.bookingId)}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;">
      ${rowsHtml([
        ["Event", b.event],
        ["Dates", b.eventDates],
        ["Venue", b.eventCity],
        ["Your travel dates", formatArrival(b.arrivalDate)],
        ["Departure city", b.departureCity],
        ["Delegates (" + b.delegates + ")", delegatesLine, true],
        ["Amount paid", formatINR(b.amount)],
        ["Payment ID", b.paymentId],
      ])}
    </table>
    <h3 style="color:#a01118;font-size:15px;margin:26px 0 10px;">Your package includes</h3>
    <ul style="color:#4b5563;font-size:14px;line-height:1.8;margin:0;padding-left:18px;">
      <li>Return air ticket</li>
      <li>2 nights / 3 days stay at a 4 or 5 star hotel</li>
      <li>Dubai city tour and desert safari</li>
      <li>United Economic Summit 2026 entry</li>
    </ul>
    <h3 style="color:#a01118;font-size:15px;margin:26px 0 10px;">What happens next</h3>
    <p style="color:#4b5563;font-size:14px;line-height:1.7;margin:0 0 20px;">
      Our delegate desk will contact you shortly to collect passport details for each delegate and
      share your flight and hotel confirmations. Please keep this email for your records and quote
      your Booking ID in any correspondence. Simply reply to this email if you have any questions.
    </p>`;

  MailApp.sendEmail({
    to: b.email,
    replyTo: BOOKING_REPLY_TO,
    name: BOOKING_SENDER_NAME,
    subject: "Booking Confirmed: United Economic Summit 2026, Dubai (" + b.bookingId + ")",
    htmlBody: emailShell("Booking Confirmed", "United Economic Summit 2026 · Dubai", inner),
    body:
      "Dear " + b.fullName + ",\n\n" +
      "Your place at the United Economic Summit 2026, Dubai (1st to 10th December 2026) is confirmed.\n\n" +
      "Booking ID: " + b.bookingId + "\n" +
      "Travel dates: " + formatArrival(b.arrivalDate) + "\n" +
      "Delegates: " + b.delegates + "\n" +
      "Amount paid: " + formatINR(b.amount) + "\n" +
      "Payment ID: " + b.paymentId + "\n\n" +
      "Package: return air ticket, 2N/3D 4 or 5 star hotel, Dubai tour and desert safari, summit entry.\n\n" +
      "Our delegate desk will contact you to collect passport details and confirm flights and hotel.\n\n" +
      "United Gate One\n" + BOOKING_REPLY_TO,
  });
}

/** Email to the internal team. */
function sendBookingNotification(b, source) {
  const inner = `
    <p style="color:#1f2937;font-size:15px;margin:0 0 16px;">
      New paid booking <strong>${esc(b.bookingId)}</strong> for ${esc(b.delegates)} delegate(s):
      <strong>${esc(formatINR(b.amount))}</strong>.
    </p>
    <table style="width:100%;border-collapse:collapse;">
      ${rowsHtml([
        ["Name", b.fullName],
        ["Email", '<a href="mailto:' + esc(b.email) + '" style="color:#a01118;">' + esc(b.email) + "</a>", true],
        ["Phone", b.phone],
        ["Organisation", b.organisation],
        ["Designation", b.designation],
        ["City", b.city],
        ["Departure city", b.departureCity],
        ["Travel dates", formatArrival(b.arrivalDate)],
        ["Delegates", b.delegates],
        ["Additional delegates", esc(b.additionalDelegates || "None").replace(/\n/g, "<br>"), true],
        ["Amount", formatINR(b.amount)],
        ["Payment method", b.method],
        ["Razorpay order", b.orderId],
        ["Razorpay payment", b.paymentId],
        ["Recorded via", source || ""],
      ])}
    </table>
    <p style="color:#6b7280;font-size:13px;margin:20px 0;">Reply to this email to contact the delegate directly.</p>`;

  MailApp.sendEmail({
    to: BOOKING_NOTIFICATION_EMAILS,
    replyTo: b.email,
    name: BOOKING_SENDER_NAME,
    subject: "New Dubai booking " + b.bookingId + ": " + b.fullName + " (" + b.delegates + " pax, " + formatINR(b.amount) + ")",
    htmlBody: emailShell("New Paid Booking", "UES 2026 Dubai · Delegate Desk", inner),
    body:
      "New paid booking " + b.bookingId + "\n" +
      b.fullName + " | " + b.email + " | " + b.phone + "\n" +
      b.organisation + ", " + b.designation + " | " + b.city + "\n" +
      "Departure: " + b.departureCity + " | Travel: " + formatArrival(b.arrivalDate) + "\n" +
      "Delegates: " + b.delegates + " " + (b.additionalDelegates || "") + "\n" +
      "Amount: " + formatINR(b.amount) + " | " + b.method + "\n" +
      "Order: " + b.orderId + " | Payment: " + b.paymentId,
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
