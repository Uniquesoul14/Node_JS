import fs from "fs";
import path from "path";
import Movie from "../models/Movie.js";

// helper to delete file if exists (relative to uploads folder)
function deleteFileIfExists(filename) {
  if (!filename) return;
  const filePath = path.join(process.cwd(), "uploads", filename);
  fs.stat(filePath, (err) => {
    if (!err) {
      fs.unlink(filePath, (e) => {
        if (e) console.error("Failed to delete file:", e);
      });
    }
  });
}

export const createMovie = async (req, res, next) => {
  try {
    const { title, description, genre, releaseYear } = req.body;
    if (!title) return res.status(400).json({ success: false, message: "Title is required" });

    const poster = req.file ? req.file.filename : null;

    const movie = new Movie({
      title,
      description,
      genre,
      releaseYear: releaseYear ? Number(releaseYear) : undefined,
      poster,
    });

    const saved = await movie.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    next(err);
  }
};

export const getMovies = async (req, res, next) => {
  try {
    // support search ?search=foo
    const { search } = req.query;
    const filter = {};
    if (search) {
      const regex = new RegExp(search, "i"); // case-insensitive partial
      filter.title = regex;
    }
    const movies = await Movie.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: movies.length, data: movies });
  } catch (err) {
    next(err);
  }
};

export const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ success: false, message: "Movie not found" });
    res.json({ success: true, data: movie });
  } catch (err) {
    next(err);
  }
};

export const updateMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ success: false, message: "Movie not found" });

    const { title, description, genre, releaseYear } = req.body;
    if (title !== undefined) movie.title = title;
    if (description !== undefined) movie.description = description;
    if (genre !== undefined) movie.genre = genre;
    if (releaseYear !== undefined) movie.releaseYear = releaseYear ? Number(releaseYear) : undefined;

    if (req.file) {
      
      deleteFileIfExists(movie.poster);
      movie.poster = req.file.filename;
    }

    const updated = await movie.save();
    res.json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
};

export const deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ success: false, message: "Movie not found" });

   if (movie.poster) {
      const filePath = path.join("uploads", movie.poster);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }


     await Movie.findByIdAndDelete(movie._id); 
    res.json({ success: true, message: "Movie deleted successfully" });
  } catch (err) {
    next(err);
  }
};
