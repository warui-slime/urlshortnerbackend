import { Router } from 'express';
import { verifyToken } from '../middleware/auth';
import { generateQR } from '../controllers/qr';

const router = Router();


router.get('/:shortCode', verifyToken, generateQR);

export default router;