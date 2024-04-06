import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    preferences: {
      favoriteGenres: [{ type: String }],
      dislikedGenres: [{ type: String }],
    },
    watchHistory: [{
      contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
      watchedOn: { type: Date, default: Date.now },
      rating: { type: Number, min: 1, max: 5 },
    }],
  });
  
  const User = mongoose.model('User', userSchema);

export default User;  
  