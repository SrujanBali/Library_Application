import Book from "../Models/book.model.js"
import mongoose from "mongoose"

export const getBooks = async (req, res) =>{
    try {
        const books = await Book.find({})
        res.status(200).json({success: true, data: books})
    } catch (error) {
        console.error("Error in getting all books", error.message)
        res.status(500).json({success: false, message: "Server Error"}) 
    }
}

export const getBook = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Book not found in the Database, Invalid Id"})
}
    else{
        try {
            const book = await Book.findById(id)
            res.status(200).json({success: true, data: book})
        } catch (error) {
            console.error("Error in getting the book", error.message)
            res.status(500).json({success: false, message: "Server Error"})
        }  
    }
}

export const addBook = async (req, res) =>{
    const book = req.body;

    if (!book.name || !book.author || !book.image || !book.genre || !book.description ) {
        return res.status(400).json({success: false, message: "Please provide all the required fields"});
    }

    const newBook = new Book(book)

    try {
        await newBook.save();
        res.status(200).json({success: true, data: newBook})
    } catch (error) {
        console.error("Error in creating book", error.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
}

export const updateBook = async (req, res) =>{
    const {id} = req.params
    const book = req.body

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Book not found in the Database, Invalid Id"})
    }
    else{
        try {
            const updatedbook = await Book.findByIdAndUpdate(id, book, {new:true})
            res.status(200).json({success: true, data: updatedbook})
        } catch (error) {
            console.error("Error in finding the required book.". error.message)
            res.status(500).json({success: false, message: "Server Error"})
        }
            
    }
}

export const deleteBook = async (req, res) => {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Book not found in the Database, Invalid Id"})}

    else{
        try {
            await Book.findByIdAndDelete(id);
            res.status(200).json({success: true, message: "Book Deleted"})
        } catch (error) {
            console.error("Error in deleting book", error.message)
            res.status(500).json({success: false, message: "Server Error"})
        }
    }
}