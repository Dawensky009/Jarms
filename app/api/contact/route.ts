import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hello@jarmsmarketing.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Jarms Website <onboarding@resend.dev>";

function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; humans never see this one.
  if (typeof data.company_website === "string" && data.company_website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = data.email;
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const projectType = typeof data.projectType === "string" ? data.projectType : "—";
  const budget = typeof data.budget === "string" ? data.budget : "—";

  if (!name || !isEmail(email) || !message) {
    return NextResponse.json(
      { error: "Please provide your name, a valid email and a message." },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  // Dev / unconfigured fallback: don't fail the UX, just log the lead.
  if (!apiKey) {
    console.info("[contact] New lead (email not configured):", {
      name,
      email,
      projectType,
      budget,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email as string,
      subject: `New quote request — ${name} (${projectType})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        `Budget: ${budget}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "Could not send. Please email us directly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Unexpected error. Please try again." }, { status: 500 });
  }
}
