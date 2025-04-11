import { RequestHandler, Router } from 'express';
import { redirect } from '../controllers/redirect';

const router = Router();

router.get('/:shortCode', redirect as RequestHandler);

export default router;