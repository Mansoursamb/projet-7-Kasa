import React from "react";
import "../styles/Banner.css";
import hero from "../assets/hero.jpg";
function Banner() {
  return (
    <div>
      <img src={hero} alt="hero" className="lmj-hero" />
    </div>
  );
}

export default Banner;
