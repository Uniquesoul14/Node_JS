import express from "express";
import { addBook, getBooks, updateBook, deleteBook } from "../controllers/BookController.js";

const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;