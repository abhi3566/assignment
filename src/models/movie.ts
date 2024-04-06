import mongoose from 'mongoose';
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    genres: [{ type: String, required: true }],
    releaseDate: { type: Date, required: true },
    director: { type: String, required: true },
    actors: [{ type: String, required: true }],
  });
  
  const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
  