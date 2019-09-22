import { Router, Request, Response } from 'express';

import ping from '../routes/ping';

const router = Router();

router.use((req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

router.get('/ping', ping);

export default router;