import * as express from 'express';
import * as db from './utils/db';
import router from './utils/router';

const app = express();

(async () => {
    await db.init();
    
    app.use(router);
    
    app.listen(3000);
})();