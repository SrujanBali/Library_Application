import "./navbar.css";
import menuicon from "../assets/menu.webp";
import closeicon from "../assets/close.webp";
import Logo from "../assets/Logo.webp";
import usericon from "../assets/User.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ActivePage from "./ActivePageFunc.jsx";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const Navref = useRef(null);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (Navref.current && !Navref.current.contains(event.target)) {
      setSdisplay("sidebar-hide");
    }
  }

  const [Sdisplay, setSdisplay] = useState("sidebar-hide");

  const displaysidebar = () => {
    if (Sdisplay !== "sidebar-show") {
      setSdisplay("sidebar-show");
    } else {
      setSdisplay("sidebar-hide");
    }
  };

  const hidesidebar = () => {
    if (Sdisplay !== "sidebar-hide") {
      setSdisplay("sidebar-hide");
    } else {
      setSdisplay("sidebar-show");
    }
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
            <li className="user-info">
              <img
                className="user-image"
                src={usericon}
                alt="User Profile"
              />
            </li>
            <li
              className="logger"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </li>
          </>
        )}
      </ul>
      <ul className="sidebar">
        <ActivePage className="hideOnMobile" to="/">
          Books Catalogue
        </ActivePage>
        <ActivePage className="hideOnMobile" to="/contact">
          Contact
        </ActivePage>
        <ActivePage className="hideOnMobile" to="/about">
          About Us
        </ActivePage>
        {isAuthenticated && <ActivePage className = "hideOnMobile" to="/addbook">Add A Book</ActivePage>}
        <li onClick={displaysidebar} className="menu-icon">
          <img src={menuicon} alt="Menu" className="showOnMobile" />
        </li>

        {!isAuthenticated ? (
          <li className="logger hideOnMobile" onClick={() => loginWithRedirect()}>
            Log In
          </li>
        ) : (
          <>
            <li>
              <img className="user-image hideOnMobile" src={usericon} alt="User Image" />
            </li>
            <li
              className="logger hideOnMobile"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
