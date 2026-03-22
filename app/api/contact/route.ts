import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Contact Message: ${subject}`,
      html: `
        <h2>New Message from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Sakura Pipe Udhyog" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Thank you for contacting Sakura Pipe Udhyog</h2>
          <p>Hi ${name},</p>
          <p>We have received your message successfully. Our team will get back to you as soon as possible.</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
          <p>Best regards,</p>
          <p><strong>Sakura Pipe Udhyog Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error: unknown) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 },
    );
  }
}
