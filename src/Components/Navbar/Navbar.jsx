import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="container">
      <img src={logo} alt="Logo" className="logo" />
      <ul className={`mobile-nav ${mobileMenu ? "" : "hide-mobile-menu"}`}>
        <li>Home</li>
        <li>Pricing</li>
        <li>Api Docs</li>
        <li>
          <button className="btn">Login</button>
        </li>
        <li>Sign Up</li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
