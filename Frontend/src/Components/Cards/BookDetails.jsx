// import Expanded_Cards from "./Expanded_Card"
import { useBookStore } from "../../Store/book"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import "./BookDetails.css"


export default function BookDetails(){
    const {id} = useParams()
    
    let {fetchBook, books} = useBookStore();

    useEffect(() => {
        fetchBook(id)
    }, [fetchBook, id])

    const adminalert = () =>{
        alert("Only Library Admin can Update the Book")
    }

    return(
        <>
        <div className="details-container">
        <div className="expanded-container">
            <div className="image">
            <img src={books.image} alt={books.name} className="book-image" />
            </div>
            <div className="book-info">
            <h1 className="bookname">{books.name}</h1>
            <h2 className="book_author">{books.author}</h2>
            <p className="description">{books.description}</p>
            <button className="update-btn" onClick={adminalert}>Update Book</button>
            </div>
        </div>
        </div>
        </>
    )
}