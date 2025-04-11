import { Router } from 'express';
import { verifyToken } from '../middleware/auth';
import { createLink } from '../controllers/link';
import { getDashboardData } from '../controllers/analytics';

const router = Router();

router.post('/links', verifyToken, createLink);
router.get('/analytics', verifyToken, getDashboardData);

export default router;