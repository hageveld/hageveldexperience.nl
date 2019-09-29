import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import * as db from './utils/db';
import router from './utils/router';

const app = express();

(async () => {
    await db.init();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(helmet());
    app.use(helmet.referrerPolicy());

    app.use(compression());
    
    app.use(router);
    
    app.listen(3000);
})();