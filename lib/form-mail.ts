import "server-only";

import nodemailer from "nodemailer";

export const ADMIN_EMAIL =
  process.env.TAI_ORA_ADMIN_EMAIL || "tai-ora@outlook.com";

export function createMailTransporter() {
  const user = process.env.MAILJET_API_KEY;
  const pass = process.env.MAILJET_SECRET_KEY;

  if (!user || !pass) {
    throw new Error(
      "Mail delivery is not configured. Set MAILJET_API_KEY and MAILJET_SECRET_KEY.",
    );
  }

  return nodemailer.createTransport({
    host: "in-v3.mailjet.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });
}

export function getFromAddress(fallback: string) {
  return process.env.FROM_EMAIL || fallback;
}

export function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function escapeHtmlWithBreaks(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}
