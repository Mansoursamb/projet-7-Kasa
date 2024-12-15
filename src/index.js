import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Image from "./assets/Image source 2.png";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Apart from "./components/Apart";
import Description from "./components/Description";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <Header />
        <div className="error">
          <h1>404 </h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link>
            <p>Retourner sur la page d' accueil</p>
          </Link>
        </div>
        ,
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <Banner imageSrc={Image} text={""} />
        <Description
          titre={<h3>Fiabilité</h3>}
          title={<h3>Service</h3>}
          text={
            <p>
              Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser
              Sèche-cheveux Cintres
            </p>
          }
        />
        <Description
          titre={<h3>Respect</h3>}
          title={<h3>Securite</h3>}
          text={
            <p>
              <li>parking</li>
              <li>seche-cheveux</li>
              <li>machine a laver</li>
              <li></li>
            </p>
          }
        />
        <Footer />
      </>
    ),
  },
  {
    path: "/apart",
    element: (
      <>
        <Header />
        <Apart />
        <Description
          titre={<h3>Description</h3>}
          title={<h3>Equipement</h3>}
          text={
            <p>
              <li>parking</li>
              <li>seche-cheveux</li>
              <li>machine a laver</li>
              <li></li>
            </p>
          }
        />
        <Footer />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
