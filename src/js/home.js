import React from "react";
import "../style/home.css";
import "../style/mobile.css";

function Home() {
  return (
    <div className="home-hero-bg">
      <div className="hero-content">
        <img src="/img/bikeshop_logo.png" alt="KJC Quickscape Logo" className="home-logo" />
        <h1 className="hero-title">KJC Bikeshop</h1>
        <h3 className="hero-subtitle">3-i 9th Avenue , Taguig, Philippines, 1630 Metro Manila</h3>
        <h3 className="hero-subtitle">38 Archer St, Brgy. Southside, Taguig, 1635 Metro Manila</h3>
        <p className="hero-desc">
          Experience the next generation of cycling with our cutting-edge bikes and expert services. From electric innovations to classic craftsmanship, we're your gateway to extraordinary rides.
        </p>
        <button className="hero-cta">EXPLORE COLLECTION</button>
      </div>
    </div>
  );
}

export default Home;