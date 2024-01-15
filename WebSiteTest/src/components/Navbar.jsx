import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCodepenSquare } from "react-icons/ai";
import { TbLayoutNavbarExpand } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import { Button } from "./Button";
import "./Css/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(false);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            {" "}
            Ugur <AiFillCodepenSquare />{" "}
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <MdCancel /> : <TbLayoutNavbarExpand />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Ana Sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/service" className="nav-links" onClick={closeMobileMenu}>
              Hizmetlerimiz
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Iletisim
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline"> Iletisim</Button>}
      </nav>
    </>
  );
};

export default Navbar;
