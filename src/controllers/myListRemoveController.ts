import { Request, Response } from 'express';
import { UserList } from '../models/userList';

export const removeItem = async (req: Request, res: Response) => {
  try {
    const { userId, contentId } = req.body;

    // Find and delete the item from the user's list
    const deletedItem = await UserList.findOneAndDelete({ userId, contentId });
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found in the user\'s list.' });
    }

    return res.status(200).json({ message: 'Item removed from the user\'s list successfully.' });
  } catch (error) {
    console.error('Error removing item from user\'s list:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};