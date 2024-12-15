import React from "react";
import "../styles/Description.css";
function Description({ titre, text, title }) {
  return (
    <div>
      <div className="atouts">
        <div className="desc">
          <div className="description">
            <h3 className="titre">{titre}</h3>
            <i class="fa-solid fa-chevron-up"></i>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div className="descriptif">
            <p className="text">{text}</p>
          </div>
        </div>
        <div className="equip">
          <div className="equipement">
            <h3 className="titre">{title}</h3>
            <i class="fa-solid fa-chevron-up"></i>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <ul className="text">{text}</ul>
        </div>
      </div>
    </div>
  );
}

export default Description;
