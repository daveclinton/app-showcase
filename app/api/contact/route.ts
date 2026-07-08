import { NextResponse } from "next/server";

import {
  ADMIN_EMAIL,
  cleanText,
  createMailTransporter,
  escapeHtml,
  escapeHtmlWithBreaks,
  getFromAddress,
  isValidEmail,
} from "@/lib/form-mail";

const enquiryTypes = new Set([
  "",
  "general",
  "media",
  "partnership",
  "support",
]);

export async function POST(request: Request) {
  try {
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid request format." },
        { status: 415 },
      );
    }

    const body = await request.json();
    const name = cleanText(body.name, 120);
    const email = cleanText(body.email, 254).toLowerCase();
    const enquiryType = cleanText(body.enquiryType, 40);
    const message = cleanText(body.message, 5000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }
    if (!enquiryTypes.has(enquiryType)) {
      return NextResponse.json(
        { error: "Please select a valid enquiry type." },
        { status: 400 },
      );
    }

    const transporter = createMailTransporter();
    const from = getFromAddress("contact@taiora.ai");
    const enquiryLabel = enquiryType || "General enquiry";

    await Promise.all([
      transporter.sendMail({
        from,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission: ${enquiryLabel}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#004c45">New Tai Ora contact submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Enquiry type:</strong> ${escapeHtml(enquiryLabel)}</p>
            <div style="background:#f3f8f6;padding:16px;border-left:4px solid #d4af37">
              ${escapeHtmlWithBreaks(message)}
            </div>
          </div>`,
      }),
      transporter.sendMail({
        from,
        to: email,
        subject: "Thank you for contacting Tai Ora",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#004c45">Kia ora ${escapeHtml(name)},</h2>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <div style="background:#f3f8f6;padding:16px;border-left:4px solid #d4af37">
              ${escapeHtmlWithBreaks(message)}
            </div>
            <p>Ngā mihi,<br>The Tai Ora Team</p>
          </div>`,
      }),
    ]);

    return NextResponse.json({
      message:
        "Message sent. A confirmation email is on its way to your inbox.",
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "We could not send your message. Please try again shortly." },
      { status: 500 },
    );
  }
}
