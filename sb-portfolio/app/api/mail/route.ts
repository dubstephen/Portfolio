import { NextResponse } from "next/server";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

export async function GET(req: Request, res: any) {
    return NextResponse.json({
      test: 'things',
    })
}

export async function POST(req: Request, res: any) {
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const sgEmail = process.env.SG_EMAIL;
    const myEmail = process.env.PERSONAL_EMAIL;
    const body = await req.json();
    const message = `
      Name: ${body.name}\r\n
      Company: ${body.company}\r\n
      Email: ${body.email}\r\n\r\n
      ${body.message}
    `;
    const data: MailDataRequired = {
      to: myEmail,
      from: sgEmail,
      subject: body.subject,
      text: message,
      html: message.replace(/\r\n/g, '<br>')
    }
  
    try {
      const response = await sgMail.send(data);
      if (response[0].statusCode === 202) {
        return NextResponse.json({
          status: 'Success',
        })
      }
    } catch (e) {
      return NextResponse.json({
        status: 'Error',
      })
    }
  }
  return NextResponse.json({
    status: 'Error',
  })
}