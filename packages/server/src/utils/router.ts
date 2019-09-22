import { Router, Request, Response } from 'express';

import ping from '../routes/ping';
import register from '../routes/register';

const router = Router();

router.use((req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

router.get('/ping', ping);
router.get('/register', register);

export default router;