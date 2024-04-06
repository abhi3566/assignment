import mongoose from 'mongoose';

const userListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contentType: { type: String, enum: ['movie', 'tvShow'], required: true },
  contentId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const UserList = mongoose.model('UserList', userListSchema);

export { UserList };
