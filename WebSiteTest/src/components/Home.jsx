import React from "react";
import "../App.css";
import HeroSection from "./HeroSection";
import Ours from "./Ours";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Ours />
      </div>
    </div>
  );
};

export default Home;
