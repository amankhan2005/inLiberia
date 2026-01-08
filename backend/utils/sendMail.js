 // utils/sendMail.js
import { Resend } from "resend";

let resend = null;

// Lazy + safe initialization
export const sendMail = async ({ to, subject, html, text, replyTo }) => {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("⚠️ RESEND_API_KEY missing. Email skipped.");
      return;
    }

    if (!resend) {
      resend = new Resend(process.env.RESEND_API_KEY);
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to,
      subject,
      html,
      text,
      reply_to: replyTo,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      throw new Error(error.message);
    }

    console.log("✅ Email sent via Resend:", data.id);
    return data;
  } catch (err) {
    console.error("❌ Email failed:", err.message);
    // background me fail ho jaayega, server crash nahi karega
  }
};
