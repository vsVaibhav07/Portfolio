import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

   const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // 👈 yehi hona chahiye
      to: process.env.EMAIL_RECEIVER,  // dusri id ya same id
      subject: `📩 New message from ${name} (${email})`,
      text: `${message}\n\nFrom: ${name} <${email}>`, 
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f7;">
          <h2 style="color: #1e3a8a;">New Message from Portfolio Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #ddd;">
            ${message}
          </div>
          <br/>
          <p style="font-size: 12px; color: #555;">This message was sent via your portfolio contact form.</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
