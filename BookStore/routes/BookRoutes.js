import express from "express";
import { addBook, getBooks, updateBook, deleteBook , BooksSample } from "../controllers/BookController.js";

const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.get ("/sample",BooksSample)

export default router;