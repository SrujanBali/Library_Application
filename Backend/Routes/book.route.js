import express from "express"
import { getBooks, getBook, addBook, updateBook, deleteBook } from "../Controller/book.controller.js"

const router = express.Router()

router.get("/", getBooks)

router.get("/:id", getBook)

router.post("/", addBook);

router.put("/:id", updateBook)

router.delete("/:id", deleteBook)

export default router;