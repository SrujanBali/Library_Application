import "./Page_CSS/BooksCatalogue.css"
import Cards from "../Cards/Cards.jsx"
import { useBookStore } from "../../Store/book.js"
import { useEffect, useState } from "react";

export default function BooksCatalogue() {

    const [search, setSearch] = useState("")

    let {fetchBooks, books} = useBookStore();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks] )

    books = Array.from(books)

    return(
        <>
            <div className="search">
                <input type="text" placeholder="🔍" className="search-bar" onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            </div>
            <h1 className="Header">Have a Look at our Catalogue Of Books</h1>
            <div className="catalogue-container">
                {books.filter((book) =>{
                    return search.toLowerCase() === "" ? book : book.name.toLowerCase().includes(search)
                }).map(book => (
                    <Cards key = {book?._id} book = {book} />
                ))}
            </div>    
        </>
    )
}