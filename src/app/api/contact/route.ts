import { NextResponse } from "next/server"
import * as nodemailer from 'nodemailer'
import * as dotenv from 'dotenv';
dotenv.config()

type data = {
    email: string,
    name: string,
    message: string,
}

export const POST = async (req:Request) => {
        const data: data = await req.json()
        const { email, name, message } = data;
        sendEmail(email, name, message)
return NextResponse.json({email, name, message})
}

const sendEmail = async (email: string, name: string, message: string) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Enquiry from my website',
        text: `From Email: ${email} Name: ${name} Message: ${message}`,
        html: `<div><p>From ${name},</p><div>Email: ${email}</p></div>
        <div>${message}</p></div>`,
      };
      const mailOptions1 = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Automated response from Kingsley Onah's website`,
        text: `From Email: ${email} Name: ${name} Message: ${message}`,
        html: `<html><div><p>Dear ${name},</p><div>Thank you for contacting me. 
                Your message was well received<p>Note that this is an automated response. 
                Your request will be responded to accordingly.</p></div>
                <div>Thank you<p>Best regards,</p></div> 
                <div>Kingsley Onah</div></div></html>`,
      };
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(mailOptions1);
}

