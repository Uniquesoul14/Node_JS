import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: { type: String, default: "" },
  genre: { type: String, default: "" },
  releaseYear: { type: Number },
  poster: { type: String },
}, {
  timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
