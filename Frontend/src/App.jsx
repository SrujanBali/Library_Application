import NavBar from "./Components/Navbar/Navbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import {Route, Routes} from "react-router-dom"
import BooksCatalogue from "./Components/Pages/BooksCatalogue.jsx"
import Contact from "./Components/Pages/Contact.jsx"
import About from "./Components/Pages/About.jsx"
import AddBook from "./Components/Pages/AddBook.jsx"
import BookDetails from "./Components/Cards/BookDetails.jsx"
import ProtectedRoute from "./Components/ProtectedRoute.jsx"
import UserInfo from "./Components/Pages/UserInfo.jsx"
import  ScrollToTop  from "./ProperScroll.jsx"


function App() {
    return (
        <>
        <NavBar />
        <ScrollToTop />
        <Routes>
            <Route path="/" element = {<BooksCatalogue />}/>
            <Route path="/contact" element = {<Contact />}/>
            <Route path="/about" element = {<About />}/>
            <Route path="/AddBook" element = {<ProtectedRoute><AddBook /></ProtectedRoute>}/>
            <Route path="/bookdetails/:id" element = {<BookDetails/>}/>
            <Route path="/userinfo" element = {<UserInfo/>}/>
        </Routes>
        <Footer />
        </>
    )
}

export default App;