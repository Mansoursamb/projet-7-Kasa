import React from "react";
import "../styles/Description.css";
function Description() {
  return (
    <div>
      <div className="atouts">
        <div className="desc">
          <div className="description">
            <h3>Description</h3>
            <i class="fa-solid fa-chevron-up"></i>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div className="descriptif">
            <p>
              Votre maison loin de chez vous. Que vous veniez de l'autre bout du
              monde, ou juste de quelques stations de RER, vous vous sentirez
              chez vous dans notre appartement.
            </p>
          </div>
        </div>
        <div className="equip">
          <div className="equipement">
            <h3>Equipement</h3>
            <i class="fa-solid fa-chevron-up"></i>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <ul>
            <li>parking</li>
            <li>seche-cheveux</li>
            <li>machine a laver</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Description;
