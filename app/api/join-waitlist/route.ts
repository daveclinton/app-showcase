import { NextResponse } from "next/server";

import {
  ADMIN_EMAIL,
  cleanText,
  createMailTransporter,
  escapeHtml,
  getFromAddress,
  isValidEmail,
} from "@/lib/form-mail";

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

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const transporter = createMailTransporter();
    const from = getFromAddress("waitlist@taiora.ai");

    await Promise.all([
      transporter.sendMail({
        from,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: "New Waitlist Signup - Tai Ora",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#004c45">New Tai Ora waitlist signup</h2>
            <div style="background:#f3f8f6;padding:16px;border-left:4px solid #d4af37">
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Signed up:</strong> ${new Date().toISOString()}</p>
            </div>
          </div>`,
      }),
      transporter.sendMail({
        from,
        to: email,
        subject: "Welcome to the Tai Ora Waitlist",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#004c45">Kia ora ${escapeHtml(name)},</h2>
            <p>Thank you for joining the Tai Ora waitlist.</p>
            <p>You will be among the first to hear about launches and early access.</p>
            <p>Ngā mihi,<br>The Tai Ora Team</p>
          </div>`,
      }),
    ]);

    return NextResponse.json({
      message: "You are on the list. Check your inbox for confirmation.",
    });
  } catch (error) {
    console.error("Waitlist submission failed:", error);
    return NextResponse.json(
      { error: "We could not add you to the waitlist. Please try again shortly." },
      { status: 500 },
    );
  }
}
