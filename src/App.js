import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
import hero from "./assets/hero.jpg";
function App() {
  return (
    <div>
      <Header />
      <Banner imageSrc={hero} text={"Chez vous, partout et ailleurs"} />
      <div className="gallery">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
