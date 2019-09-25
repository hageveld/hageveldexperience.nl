import * as nodemailer from 'nodemailer';
import { mail } from '../../config/config.json';

const transporter = nodemailer.createTransport({
    host: 'email-smtp.us-east-1.amazonaws.com',
    port: 465,
    secure: true,
    auth: {
        user: mail.user,
        pass: mail.pass
    }
});

export const send = async (to: string, subject: string, text: string, html: string) => {
    const result = await transporter.sendMail({
        from: '"Hageveld Experience" <experience@hageveld.dev>',
        to,
        subject,
        text,
        html
    });

    console.log(result);

    return result;
}