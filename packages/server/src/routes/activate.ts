import * as db from '../utils/db';
import * as mail from '../utils/mail';
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
    const { token, wachtwoord } = req.params;
    const time = Date.now().toString();
    const item: any = await db.get("SELECT * FROM activaties WHERE token=?", [token]);
    if(item) {
        await db.run("UPDATE activaties SET gebruikt=? WHERE token=?", [time, token]);
        await db.run("INSERT INTO gebruikers (emailadres, wachtwoord) VALUES (?,?)", [item.emailadres, wachtwoord])

        const textBody = `
            Aanmelding bevestigd!
        `;
    
        const htmlBody = `
        Aanmelding bevestigd!
        `;
    
        await mail.send(item.emailadres, "Aanmelding bevestigd", textBody, htmlBody);
    
        res.json({
            success: true
        });
    } else {
        res.json({
            success: false
        });
    }
};