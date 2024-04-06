import express from 'express';
import { getList } from '../controllers/myListListController';

const router = express.Router();

// GET /api/mylist
router.get('/', getList);

export default router;