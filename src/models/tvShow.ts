import mongoose from 'mongoose';
const episodeSchema = new mongoose.Schema({
    episodeNumber: { type: Number, required: true },
    seasonNumber: { type: Number, required: true },
    releaseDate: { type: Date, required: true },
    director: { type: String, required: true },
    actors: [{ type: String, required: true }],
  });
  
  const tvShowSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    genres: [{ type: String, required: true }],
    episodes: [episodeSchema],
  });
  
  const TVShow = mongoose.model('TVShow', tvShowSchema);

export default TVShow;
  