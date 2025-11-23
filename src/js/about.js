import React from "react";
import "../style/about.css";
import Navbar from "./navbar";

function About() {
  return (
    <div className="about-bg">
      <Navbar />
      <div className="about-content">
        <h1 className="about-title">KJC Quickscape</h1>
        <h2 className="about-subtitle">YOUR HOME AWAY FROM HOME</h2>
        <div className="about-card">
          <div className="about-text">
            <p>
              KJC Quickscape represents the evolution of cycling culture.<br />
              Since 2015, we’ve been at the forefront of bicycle innovation, combining cutting-edge technology with timeless craftsmanship.<br />
              Our team of passionate cyclists and engineers work tirelessly to bring you the most advanced bikes on the market.<br />
              From smart e-bikes with AI-powered assistance to handcrafted carbon fiber frames, we push the boundaries of what’s possible.<br />
              We believe cycling is more than transportation—it’s a lifestyle, a passion, and a path to a sustainable future.<br />
              Join us in riding toward tomorrow.
            </p>
          </div>
          <div className="about-image">
            <span role="img" aria-label="Cyclist" className="about-emoji">🚴‍♂️</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;