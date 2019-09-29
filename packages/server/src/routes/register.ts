import * as db from '../utils/db';
import * as mail from '../utils/mail';
import { generateToken } from '../utils/token';
import { Request, Response } from 'express';


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