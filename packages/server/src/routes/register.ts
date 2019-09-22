import * as db from '../utils/db';
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
    const { email, password } = req.params;

    await db.run("INSERT INTO users (emailadres, wachtwoord) VALUES (?, ?)", [email, password]);

    res.json({
        success: true
    });
};