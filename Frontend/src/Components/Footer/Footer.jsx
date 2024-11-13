import "./footer.css"
import Logo from "../assets/Lib_logo.webp"
import github from "../assets/github.webp"
import insta from "../assets/insta.webp"
import email from "../assets/email.webp"
import twitter from "../assets/x.webp"

function Footer(){
    return(
        <>
        <footer className="removeflex">
            <div className="info center-text">
                <h1 className="dropcap">Hey</h1>
                <p className="my-message" > <q>Thank you for visiting this website. This website is just a learning and exercising my skills relating to Vite-React, MongoDB, Node js and many more dependencies and miscellaneous knowledge. If you would like to connect with then do contact me on my socials. </q> - The Developer</p>
            </div>
            <div className="representation">
            <div className="brand center-image">
                <img src={Logo} alt="Logo" className="logo" />
                <h1>Library App</h1>
            </div>
                <div className="socials">
                    <li>
                        <a href="https://www.github.com">
                    <img src={github} alt="" className="icons"/>
                        Github
                    </a>
                        </li>
                    <li>
                        <a href="https://www.instagram.com">
                    <img src={insta} alt="" className="icons"/>
                        Instagram
                    </a>
                        </li>
                    <li>
                        <a href="https://www.gmail.com">
                    <img src={email} alt="" className="icons"/>
                        Email
                    </a>
                        </li>
                    <li>
                        <a href="https://www.x.com">
                    <img src={twitter} alt="" className="icons"/>
                        Twitter
                    </a>
                        </li>
                </div>
            </div>
                
            
        </footer>
        </>
    )
}

export default Footer