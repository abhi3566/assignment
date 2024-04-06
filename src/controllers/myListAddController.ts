import { Request, Response } from 'express';
import { UserList } from '../models/userList';

export const addItem = async (req: Request, res: Response) => {
  try {
    const { userId, contentType, contentId } = req.body;

    // Check if the item already exists in the user's list
    const existingItem = await UserList.findOne({ userId, contentType, contentId });
    if (existingItem) {
      return res.status(400).json({ message: 'Item already exists in the user\'s list.' });
    }

    // Create a new item in the user's list
    const newItem = new UserList({ userId, contentType, contentId });
    await newItem.save();

    // with message
    // res.status(200).json(newItem);
    res.status(200).json({ message: 'Item added to the user\'s list successfully.' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};