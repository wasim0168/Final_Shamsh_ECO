import { connectDb } from "@/lib/db";
import { replyEmail, sendEmail } from "@/lib/node-mailer";
import Emails from "@/models/email.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDb();

    const body = await req.json();
    const { fullName, email, message, phone, company, subject } = body;

    if (
      !fullName ||
      !email ||
      !email ||
      !message ||
      !phone ||
      !company ||
      !subject
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    const isEmail = await Emails.findOne({ email });

    if (isEmail)
      return NextResponse.json(
        {
          message:
            "We already received your email, we're reveving your application, we will get back to you",
        },
        { status: 200 },
      );

    const payload = {
      fullName,
      email,
      message,
      phone,
      company,
      subject,
    };

    // Run database and email operations in parallel to speed up response time
    await Promise.all([
      Emails.create(payload),
      sendEmail(payload),
      replyEmail(payload),
    ]);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send the email", error: (error as Error).message },
      { status: 400 },
    );
  }
}
