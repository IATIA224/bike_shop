import React from "react";
import "../style/about.css";
import Navbar from "./navbar";
import ImageCarousel from "./ImageCarousel"; // Import the ImageCarousel component

function About() {
  return (
    <div className="about-bg">
      <Navbar />
      <div className="about-content">
        <h1 className="about-title">KJC Bikeshop</h1>
        <h2 className="about-subtitle">EST. 2016</h2>
        <div className="about-card">
          <div className="about-text">
            <p>
              KJC Bikeshop represents the evolution of cycling culture.
              Since 2016, we’ve been at the forefront of bicycle innovation, combining cutting-edge technology with timeless craftsmanship.
              Our team of passionate cyclists work tirelessly to bring you the most advanced bikes on the market.
              We push the boundaries of what’s possible.
              We believe cycling is more than transportation—it’s a lifestyle, a passion, and a path to a sustainable future.<br />
              Join us in riding toward tomorrow.<br /><br />
              <i>"Successful people know the way to turn a setback into a step forward."</i><br/>
              <i>— Richard Lim - owner</i>
            </p>
          </div>
          <div className="about-image">
            {/* Image Carousel */}
            <ImageCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;