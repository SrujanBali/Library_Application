import "./Page_CSS/BooksCatalogue.css"
import Cards from "../Cards/Cards.jsx"
import { useBookStore } from "../../Store/book.js"
import { useEffect } from "react";

export default function BooksCatalogue() {

    let {fetchBooks, books} = useBookStore();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks] )

    books = Array.from(books)

    return(
        <>
            <header className="Header">Have a Look at our Catalogue Of Books</header>
            <div className="catalogue-container">
                {books.map(book => (
                    <Cards key = {book?._id} book = {book} />
                ))}
            </div>    
        </>
    )
}