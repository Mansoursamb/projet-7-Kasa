import React from "react";
import "../styles/Banner.css";
import hero from "../assets/hero.jpg";
function Banner() {
  return (
    <div className="Banner">
      <img src={hero} alt="hero" className="lmj-hero" />
      <h1 className="Titre">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
