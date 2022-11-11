import { Router } from 'express';

import { test } from './app/test/server.test';


const router = Router();
router.get("/test", test.run);



export default router;
