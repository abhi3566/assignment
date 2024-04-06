import { Request, Response } from 'express';
import { UserList } from '../models/userList';
import mongoose from 'mongoose';

export const getList = async (req: Request, res: Response) => {
  try {
    const { userId, page = 1, pageSize = 10 } = req.query;

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }

    // Convert page and pageSize to numbers
    const pageNumber = parseInt(page as string, 10);
    const size = parseInt(pageSize as string, 10);

    // Calculate skip value for pagination
    const skip = (pageNumber - 1) * size;

     // Convert userId to ObjectId
     const userIdObjectId = new mongoose.Types.ObjectId(userId as string);

    // Fetch the user's list with pagination
    const list = await UserList.find({ userId: userIdObjectId }).skip(skip).limit(size);

    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};