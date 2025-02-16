import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  // create Nodemailer transporter

  const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:process.env.EMAIL_USER, //Gmail Address
        pass:process.env.EMAIL_PASS, // Use App Password 
      },
    })

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "joel.lgarcia1992@gmail.com", // Your email where you receive messages
      subject: `New Inquiry from ${name}`,
      text:  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,

    }

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Message sent successfully, Our team will reach out to you shortly!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send message." });
    }
  }