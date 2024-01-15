import React from "react";
import Button from "./Button.jsx";
import "./Css/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/public/video1.mp4" autoPlay loop muted />
      <h1>Adalet Vakti</h1>
      <p>Guclu Ekibimiz ile Neye Ihtiyac Duyarsaniz, Yaninizdayiz</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Hemen Baslayalim
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
