import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.css";
function Header() {
  return (
    <div className="top-menu">
      <img src={logo} alt="Kasa" className="lmj-logo" />
      <ul className="nav">
        <li>Accueil</li>

        <li>A Propos</li>
      </ul>
    </div>
  );
}

export default Header;
