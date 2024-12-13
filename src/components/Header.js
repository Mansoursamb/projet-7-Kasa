import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
function Header() {
  return (
    <div className="top-menu">
      <img src={logo} alt="Kasa" className="lmj-logo" />
      <ul className="nav">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
