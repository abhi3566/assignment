import express from 'express';
import { removeItem } from '../controllers/myListRemoveController';

const router = express.Router();

// POST /api/mylist/remove
router.post('/remove', removeItem);

export default router;