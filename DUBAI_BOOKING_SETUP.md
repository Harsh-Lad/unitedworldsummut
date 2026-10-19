# UES 2026 Dubai: Booking, Payments and Emails

Page: `/dubai-summit` (linked in the header as **Dubai 2026**). Event, price and
package details live in `src/lib/dubai-summit.ts`; change them there and both
the page and the amount charged update together.

## How a booking flows

1. Delegate fills the form on `/dubai-summit#book`.
2. `POST /api/dubai-summit/order` validates the form and creates a Razorpay
   order. The amount is computed on the server (`delegates × ₹2,00,000`), never
   taken from the browser. Delegate details are stored in the order notes.
3. Razorpay Checkout opens (UPI, cards, net banking, wallets).
4. On success the browser calls `POST /api/dubai-summit/verify`, which:
   - verifies the Razorpay signature,
   - checks the payment belongs to the order and is for the full amount,
   - **captures** the payment if it is only authorised,
   - records the booking + sends emails through the Google Apps Script.
5. `POST /api/dubai-summit/webhook` does the same from Razorpay's side, so a
   delegate who pays and closes the tab still gets captured, recorded and
   emailed. The Apps Script de-duplicates on order id, so emails go out once.

Emails sent per booking:
- **Delegate confirmation** (to the delegate, reply-to info@unitedgateone.com)
  with Booking ID (`UESDXB-0001` …), travel dates, package and payment ID.
- **Team notification** (to `BOOKING_NOTIFICATION_EMAILS` in the script) with
  every field, reply-to set to the delegate.

Every paid booking is also a row in the **UES 2026 Dubai Bookings** Google Sheet.

## Where the data lives

The website itself has no database and keeps nothing on its server. Booking data lives in three places:

| Where | What | How to find it |
|---|---|---|
| Google Sheet **UES 2026 Dubai Bookings** | One row per paid booking: Booking ID, delegate details, travel dates, delegates, amount, Razorpay order/payment IDs | Google Drive of the account that owns the Apps Script. The link is printed in the Apps Script log when `setupBookings` runs |
| Razorpay Dashboard | Every order and payment, including failed or abandoned ones. Delegate details are attached as order **Notes** | Dashboard → Transactions → Orders / Payments |
| Email inboxes | Team notification per booking (`BOOKING_NOTIFICATION_EMAILS`), delegate confirmation in the delegate's inbox | Gmail of those addresses |

Contact form messages go to the separate **UWS Contact Submissions** sheet in the same Drive.

## Images

Photos in `public/dubai/` are from Unsplash (free licence, no attribution required).
`ugo-logo.png` and `bharat24-logo.png` are cut from the event brochure; replace them with original logo files when available.

## 1. Environment variables

Add these to `.env.local` for local dev, and to the hosting provider
(e.g. Vercel → Project → Settings → Environment Variables) for production:

```
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx
RAZORPAY_WEBHOOK_SECRET=any-long-random-string-you-also-enter-in-razorpay

BOOKING_SCRIPT_URL=https://script.google.com/macros/s/AKfycbxsnlCtd7Fo935p-Tvim5bvmHcFo08b0nqHEq_usClnzX6eDJib1FMy7npSveHYRK3iBg/exec
BOOKING_SCRIPT_SECRET=another-long-random-string
```

Use `rzp_test_…` keys first to test end to end without real money.

## 2. Google Apps Script (emails + sheet)

The existing contact-form script (`google-apps-script.js`) now also handles bookings.

1. Open the existing project at https://script.google.com and replace its code
   with the new `google-apps-script.js`.
2. Run **`setupBookings`** once (approve the permissions prompt). It creates the
   bookings sheet and prints its URL in the log.
3. Project Settings → Script Properties → add `BOOKING_SECRET` with the **same**
   value as `BOOKING_SCRIPT_SECRET` above.
4. Run **`testBookingEmails`** once: a sample confirmation and team notification
   arrive in your inbox, proving mail delivery works.
5. Deploy → Manage deployments → Edit (pencil) → Version: **New version** →
   Deploy. The URL stays the same, so the contact form keeps working.

Note: MailApp allows ~100 emails/day on a free Gmail account and ~1,500/day on
Google Workspace. Each booking uses 2.

## 3. Razorpay dashboard

1. Settings → Webhooks → Add new webhook
   - URL: `https://www.unitedworldsummit.com/api/dubai-summit/webhook`
   - Secret: the `RAZORPAY_WEBHOOK_SECRET` value
   - Events: `payment.authorized`, `order.paid`
2. Settings → Payment capture: automatic capture is recommended, but the code
   captures authorised payments itself either way.
3. If bookings for several delegates fail on cards, ask Razorpay to raise the
   per-transaction limit (a 5-delegate booking is ₹10,00,000).

## 4. Test checklist (test mode)

- Book 1 delegate using UPI ID `success@razorpay`, or a card from
  https://razorpay.com/docs/payments/payments/test-card-details/
- Confirm: success screen shows a Booking ID, row appears in the sheet,
  delegate email and team email both arrive.
- Repeat and close the browser tab right after paying: the webhook should still
  produce the row and emails within a minute.
- Switch to live keys and redeploy.
