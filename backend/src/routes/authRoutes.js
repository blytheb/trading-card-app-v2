import express from 'express';
import { verifyIdToken } from '../controllers/authController.js';

const router = express.Router();

router.post('/verifyToken', verifyIdToken);

export default router;  
