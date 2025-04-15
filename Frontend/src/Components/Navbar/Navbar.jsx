import "./navbar.css";
import menuicon from "../assets/menu.webp";
import closeicon from "../assets/close.webp";
import Logo from "../assets/Logo.webp";
import usericon from "../assets/User.png";
import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ActivePage from "./ActivePageFunc.jsx";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const Navref = useRef(null);
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate()
 
  const [Sdisplay, setSdisplay] = useState("sidebar-hide");

  useEffect(() => {
    if (!isLoading) {
      const handleClickOutside = (event) => {
        if (Navref.current && !Navref.current.contains(event.target)) {
          setSdisplay("sidebar-hide");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isLoading]);

  if (isLoading) {
    return null; 
  }

  const displaysidebar = () => {
    setSdisplay(Sdisplay !== "sidebar-show" ? "sidebar-show" : "sidebar-hide");
  };

  const hidesidebar = () => {
    setSdisplay(Sdisplay !== "sidebar-hide" ? "sidebar-hide" : "sidebar-show");
  };

  const handleUserImage = () =>{
    navigate("/userinfo");
  }

  const handleImageError = (e) => {
    e.target.src = usericon; 
  };

  return (
    <nav className="navbar">
      <Link to="/" className="website-name">
        <img src={Logo} alt="Logo" className="head-logo" />
        <h1>Library App</h1>
      </Link>
      <ul className={Sdisplay} ref={Navref}>
        <li onClick={hidesidebar} className="close-icon">
          <img src={closeicon} alt="Close" />
        </li>
        <ActivePage to="/">Books Catalogue</ActivePage>
        <ActivePage to="/contact">Contact</ActivePage>
        <ActivePage to="/about">About Us</ActivePage>
        {isAuthenticated && <ActivePage to="/addbook">Add A Book</ActivePage>}

        {!isAuthenticated ? (
          <li className="logger" onClick={() => loginWithRedirect()}>
            Log In
          </li>
        ) : (
          <>
            <li className="user-info" onClick={handleUserImage}>
              <img className="user-imagenav" src={usericon} alt="User Profile" onError={handleImageError}/>
            </li>
            <li className="logger" onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </li>
          </>
        )}
      </ul>
      <ul className="sidebar">
        <ActivePage className="hideOnMobile" to="/">Books Catalogue</ActivePage>
        <ActivePage className="hideOnMobile" to="/contact">Contact</ActivePage>
        <ActivePage className="hideOnMobile" to="/about">About Us</ActivePage>
        {isAuthenticated && <ActivePage className="hideOnMobile" to="/addbook">Add A Book</ActivePage>}
        <li onClick={displaysidebar} className="menu-icon">
          <img src={menuicon} alt="Menu" className="showOnMobile" />
        </li>

        {!isAuthenticated ? (
          <li className="logger hideOnMobile" onClick={() => loginWithRedirect()}>
            Log In
          </li>
        ) : (
          <>
            <li className="image-box" onClick={handleUserImage}>
              <img className="user-imagenav hideOnMobile" src={usericon} alt="User Image" onError={handleImageError} />
            </li>
            <li className="logger hideOnMobile" onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
