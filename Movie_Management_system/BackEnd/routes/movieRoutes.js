import express from "express";
import multer from "multer";
import path from "path";
import {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie
} from "../controllers/movieController.js";

const router = express.Router();

// multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    // generate unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `poster-${uniqueSuffix}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.test(ext)) cb(null, true);
  else cb(new Error("Only images are allowed (jpeg, png, gif)"));
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB

// routes
router.get("/", getMovies); // GET /api/movies?search=
router.post("/", upload.single("poster"), createMovie); // POST multipart/form-data key 'poster'
router.get("/:id", getMovieById);
router.put("/:id", upload.single("poster"), updateMovie); // optional file
router.delete("/:id", deleteMovie);

export default router;
