import express from 'express';
import { addOnce } from '../controllers/produit.js';

const router = express.Router();
router.post('/', addOnce);
export default router;
