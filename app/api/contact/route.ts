import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL ?? "mahamedmagdy005@gmail.com";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  let body: { email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  }

  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 }
    );
  }

  const fromAddress =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Portfolio contact from ${email}`,
    text: `From: ${email}\n\n${message}`,
    html: `
      <h2>New portfolio contact message</h2>
      <p><strong>From:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
