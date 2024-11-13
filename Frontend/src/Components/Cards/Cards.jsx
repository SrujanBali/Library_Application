import { useNavigate } from "react-router-dom"
import "./Cards.css"

export default function Cards({book}){

    const navigate = useNavigate()

    const changeroute = () =>{
        navigate(`/bookdetails/${book._id}`)
    }
        

    return(
        <>
        <div className="card-container" onClick={changeroute}>
            <div className="cardimage">
            <img src={book?.image} alt="Some image"  className="card-image" />
            </div>
            <h1 className="book-name">{book?.name}</h1>
            <h2 className="book-author">{book?.author}</h2>
            <h4 className="book-genre">{book?.genre}</h4>
            <textarea className="book-desc" readOnly rows={10} value={book?.description}/>
            <footer id="cardfooter">
            <h6 className="know-more">Click Me to know more</h6>
            </footer>
        </div>
        </>
    )
}