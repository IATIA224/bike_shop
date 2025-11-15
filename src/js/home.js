import React from "react";
import "../style/home.css";

function Home() {
  return (
    <div className="home-hero-bg">
      <div className="hero-content">
        <h1 className="hero-title">VeloHub</h1>
        <h2 className="hero-subtitle">Ride the Future</h2>
        <p className="hero-desc">
          Experience the next generation of cycling with our cutting-edge bikes and expert services. From electric innovations to classic craftsmanship, we're your gateway to extraordinary rides.
        </p>
        <button className="hero-cta">EXPLORE COLLECTION</button>
      </div>
    </div>
  );
}

export default Home;