import express from "express";
import multer from "multer";
import { protect } from "../middleware/auth.middleware.js";
import { createBlog, getAllBlogs } from "../controllers/blog.controller.js";

const storage = multer.diskStorage({
  destination: "src/uploads",
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

const router = express.Router();
router.get("/", getAllBlogs);
router.post("/", protect, upload.single("image"), createBlog);

export default router;
