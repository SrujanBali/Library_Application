import { useBookStore } from "../../Store/book"
import "./Page_CSS/AddBook.css"
import {useState} from 'react'
import {Bounce, ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function AddBook() {
        const [newBook, setNewBook] = useState({
            name: "",
            author: "",
            image: "",
            genre: "",
            description: "",
        })

        const {createBook} = useBookStore()
        const handleAddBook = async (e) =>{
            e.preventDefault()
            const {success, message}  = await createBook(newBook)
            console.log("Sucess: ", success)
            console.log("Message: ", message)
            if(!success){
                toast.error("Error", message)
            } else{
                toast.success("Book Created", message)
            }
            setNewBook({
                name: "",
                author: "",
                image: "",
                genre: "",
                description: "",
            })
        }

    return(
        <div className="add-book-container fix-top-height">
            <div className="form-container">
                <div className="form-content">
                <header className="Page-title">Share Your Book!</header>
                    <form method = "get">
                        <div className="input-field">
                            <input type="text" name = "Book-Name" placeholder="Your Book's Title" value={newBook.name} 
                            onChange={(e) => setNewBook({...newBook, name: e.target.value})} 
                            required/>
                        </div>
                        <div className="input-field">
                            <input type="text" name = "Author-Name" placeholder="Book's Author" value={newBook.author} 
                            onChange={(e) => setNewBook({...newBook, author: e.target.value})}
                            required/>
                        </div>
                        <div className="input-field">
                            <input type="text" name = "Book-Image" placeholder="Link to Your Book's Coverpage" value={newBook.image}
                            onChange={(e) => setNewBook({...newBook, image: e.target.value})}
                            required/>
                        </div>
                        <div className="input-field">
                            <input type="text" name = "Book-Genre" placeholder="Genre" value={newBook.genre} 
                            onChange={(e) => setNewBook({...newBook, genre: e.target.value})}
                            required/>
                        </div>
                        <div className="input-field description-box">
                            <textarea name = "Book-Description" placeholder="Describe your Book" rows={5}  value={newBook.description} 
                            onChange={(e) => setNewBook({...newBook, description: e.target.value})}
                            required />
                        </div>
                        <div className="input-button">
                            <button type = "submit" onClick={handleAddBook}>Add Your Book</button>
                        </div> 
                    </form>
                </div>
            </div>
            <ToastContainer 
            position="top-right"
            transition={Bounce}
            theme="dark"/>
        </div>
    )
}

