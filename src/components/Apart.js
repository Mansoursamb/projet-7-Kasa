import React from "react";
import "../styles/Apart.css";
import image from "../assets/hero 2.jpg";
function Apart() {
  return (
    <>
      <div className="apart">
        <div>
          <img src={image} alt="Apart" className="lmj-apart" />
        </div>
        <div className="apart-conteneur">
          <div className="apart-container">
            <h1 className="apart-title">
              Paris center, on the romantic Canal Saint-Martin
            </h1>
            <h3 className="apart-subtitle"> Paris, Île-de-France</h3>
            <div className="confort-text">
              <p>Cozy</p>
              <p>Canal</p>
              <p>Paris 10</p>
            </div>
          </div>
          <div className="apart-detail">
            <div className="apart-name">
              <h3 className="align-custom">
                Alexandre <br />
                <span className="align-right">Dumas</span>
              </h3>

              <div className="badge"></div>
            </div>
            <div className="rating">
              <div>
                <span>
                  <i className="fa-solid fa-star" key={1}></i>
                </span>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-star" key={2}></i>
                </span>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-star" key={3}></i>
                </span>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-star" key={4}></i>
                </span>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-star" key={5}></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apart;
