// myListAdd.ts
import express from 'express';
import { addItem } from '../controllers/myListAddController';

const router = express.Router();

// POST /api/mylist/add
router.post('/add', addItem);

export default router;