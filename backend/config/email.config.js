import nodemailer from "nodemailer";
import dns from "dns";
import dotenv from 'dotenv';
dotenv.config();



export const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
dns.setDefaultResultOrder("ipv4first");

const sendEmail = async ({
    fullName,
    email,
    message,
    phone,
    company,
    subject,
}) => {
    try {
        await transporter.sendMail({
            from: "Shams Eco Recycle <contact@resicode.com>",
            to: "info@shamsheco.com",
            subject: `New Inquiry from ${fullName}`,
            text: `New contact form submission from ${fullName} (${email}): ${message}`,
            html: `
<div style="max-width:620px;margin:auto;background:#ffffff;border:1px solid #d1fae5;border-radius:10px;font-family:Arial,Helvetica,sans-serif;overflow:hidden;">

<div style="background:#22c55e;padding:24px;text-align:center;color:white;">
<h1 style="margin:0;font-size:24px;">🌿 New Website Inquiry</h1>
<p style="margin:8px 0 0;font-size:14px;opacity:0.9;">A new client contacted you through the website</p>
</div>

<div style="padding:24px;">

<div style="background:#ecfdf5;border:1px solid #d1fae5;padding:20px;border-radius:8px;margin-bottom:20px;">
<h3 style="margin:0 0 14px 0;color:#14532d;font-size:18px;">Client Details</h3>

<p style="margin:8px 0;font-size:14px;"><strong>Name:</strong> ${fullName}</p>

<p style="margin:8px 0;font-size:14px;">
<strong>Email:</strong> 
<a href="mailto:${email}" style="color:#22c55e;text-decoration:none;">${email}</a>
</p>

<p style="margin:8px 0;font-size:14px;">
<strong>Phone:</strong> 
<a href="tel:${phone}" style="color:#22c55e;text-decoration:none;">${phone}</a>
</p>

<p style="margin:8px 0;font-size:14px;">
<strong>Company:</strong> ${company || "Not provided"}
</p>

<p style="margin:8px 0;font-size:14px;">
<strong>Subject:</strong> ${subject}
</p>

</div>

<div style="margin-bottom:20px;">
<h3 style="margin:0 0 12px 0;color:#14532d;font-size:18px;">Client Message</h3>

<div style="padding:16px;background:#f0fdf4;border-left:4px solid #22c55e;border-radius:6px;line-height:1.6;color:#14532d;font-size:14px;">
${message.replace(/\n/g, "<br />")}
</div>

</div>

</div>

<div style="background:#bbf7d0;padding:16px;text-align:center;border-top:1px solid #d1fae5;">
<p style="margin:0;color:#14532d;font-weight:500;font-size:14px;">💡 Try to respond within <strong>24 hours</strong> for the best client experience.</p>
</div>

</div>
`,
        });
    } catch (error) {
        console.error("error", error);
        throw new Error("Failed to send the message to user");
    }
};

const replyEmail = async ({
    fullName,
    email,
    message,
    phone,
    company,
    subject,
}) => {
    try {
        await transporter.sendMail({
            from: "Shams Eco Recycle <contact@resicode.com>",
            to: email,
            subject: "We've Received Your Message - SHAMSH Eco Renew-Recycling",
            text: `Hello ${fullName},

Thank you for contacting SHAMSH Eco Renew-Recycling.

We have received your message and our team will review it shortly. 
We usually respond within a short time.

Best regards,
SHAMSH Eco Renew-Recycling Team`,
            html: `
<div style="font-family:Arial,Helvetica,sans-serif;color:#14532d;max-width:600px;margin:auto;padding:24px;background:#ffffff;border:1px solid #d1fae5;border-radius:10px;">

<div style="text-align:center;margin-bottom:24px;">
<img src="${process.env.BASE_URL || 'https://shamsheco.com'}/logo.png" alt="SHAMSH Eco Renew Recycling" style="max-width:220px;margin-bottom:12px;">
<h1 style="color:#166534;margin:0;font-size:26px;">SHAMSH Eco Renew-Recycling</h1>
<p style="color:#4d7c0f;margin:8px 0 0;font-size:15px;">Thank you for contacting us!</p>
</div>

<div style="margin-bottom:24px;">
<p style="font-size:16px;line-height:1.6;margin:0 0 12px 0;">Hello <strong>${fullName}</strong>,</p>

<p style="font-size:16px;line-height:1.6;margin:0 0 12px 0;">We appreciate you reaching out to <strong>SHAMSH Eco Renew-Recycling</strong>. Your inquiry has been successfully received.</p>

<p style="font-size:16px;line-height:1.6;margin:0;">Our team will review your message and get back to you as soon as possible.</p>
</div>

<div style="background:#ecfdf5;padding:20px;border-radius:8px;border:1px solid #d1fae5;margin-bottom:24px;">
<h3 style="color:#14532d;margin:0 0 12px 0;font-size:18px;">Your Submitted Details</h3>

<p style="margin:6px 0;font-size:14px;"><strong>Name:</strong> ${fullName}</p>
<p style="margin:6px 0;font-size:14px;"><strong>Email:</strong> ${email}</p>
<p style="margin:6px 0;font-size:14px;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
<p style="margin:6px 0;font-size:14px;"><strong>Company:</strong> ${company || "Not provided"}</p>
<p style="margin:6px 0;font-size:14px;"><strong>Subject:</strong> ${subject}</p>

</div>

<div style="background:#f0fdf4;padding:20px;border-radius:8px;border:1px solid #d1fae5;margin-bottom:24px;">
<h3 style="color:#14532d;margin:0 0 12px 0;font-size:18px;">Your Message</h3>
<div style="font-style:italic;line-height:1.6;color:#166534;">${message.replace(/\n/g, "<br/>")}</div>
</div>

<div style="text-align:center;margin-bottom:24px;">
<p style="font-size:16px;line-height:1.6;margin:0;color:#14532d;">Thank you for choosing environmentally responsible solutions. We look forward to assisting you.</p>
</div>

<hr style="margin:32px 0;border:none;border-top:1px solid #d1fae5;">

<div style="text-align:center;">
<p style="margin:0;color:#166534;">Best regards,</p>

<a href="${process.env.BASE_URL || 'https://shamsheco.com'}" style="text-decoration:none;display:inline-block;margin-top:16px;padding:18px;background:#22c55e;border-radius:10px;">
<h1 style="margin:0;font-weight:800;color:#ffffff;font-size:28px;">SHAMSH</h1>
<p style="margin:4px 0 0;font-weight:500;color:#ffffff;font-size:15px;">Eco Renew-Recycling</p>
<p style="margin:4px 0 0;font-weight:400;color:#dcfce7;font-size:12px;">Building a greener future through responsible recycling</p>
</a>

</div>

</div>
`,
        });
    } catch (error) {
        console.error("error", error);
        throw new Error("Failed to reply email");
    }
};

export { sendEmail, replyEmail }
