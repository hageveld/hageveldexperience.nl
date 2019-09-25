import * as db from '../utils/db';
import * as mail from '../utils/mail';
import { randomBytes } from 'crypto';
import { Request, Response } from 'express';

const generateToken = () => {
    return new Promise((resolve, reject) => {
        randomBytes(32, (err, buf) => {
            if(err) {
                reject(err);
            } else {
                resolve(buf.toString('hex'));
            }
        });
    });
}

export default async (req: Request, res: Response) => {
    const { email } = req.params;
    const token = await generateToken();
    const time = Date.now().toString();

    await db.run("INSERT INTO activaties (emailadres, token, aangemaakt) VALUES (?, ?, ?)", [email, token, time]);

    const textBody = `
        Bevestig je aanmelding: ${token}
    `;

    const htmlBody = `
        Bevestig je aanmelding: <b>${token}</b>
    `;

    await mail.send(email, "Bevestig je aanmelding", textBody, htmlBody);

    res.json({
        success: true
    });
};