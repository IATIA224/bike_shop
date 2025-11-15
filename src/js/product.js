import React from "react";
import "../style/product.css";

const icons = {
  mountain: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <ellipse cx="32" cy="48" rx="24" ry="12" fill="#1a2a4f" opacity="0.2"/>
      <polygon points="16,48 32,16 48,48" fill="#8ED081"/>
      <polygon points="32,16 28,28 36,28" fill="#fff"/>
      <polygon points="28,28 32,16 36,28" fill="#B2A17B"/>
    </svg>
  ),
  racing: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect x="16" y="24" width="32" height="16" fill="#fff"/>
      <rect x="16" y="24" width="8" height="8" fill="#1a2a4f"/>
      <rect x="32" y="32" width="8" height="8" fill="#1a2a4f"/>
    </svg>
  ),
  urban: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect x="20" y="28" width="24" height="20" rx="4" fill="#6C63FF"/>
      <rect x="28" y="36" width="8" height="12" fill="#FFD700"/>
      <rect x="36" y="36" width="4" height="8" fill="#FFD700"/>
    </svg>
  ),
  ebike: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <polygon points="32,16 40,32 24,32" fill="#FFD700"/>
      <polygon points="32,48 32,32 40,32" fill="#00cfff"/>
    </svg>
  ),
  tech: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <rect x="28" y="20" width="8" height="24" rx="4" fill="#fff"/>
      <rect x="24" y="36" width="16" height="8" rx="4" fill="#00cfff"/>
    </svg>
  ),
  gear: (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <ellipse cx="32" cy="32" rx="20" ry="20" fill="#fff" opacity="0.2"/>
      <polygon points="32,20 44,44 20,44" fill="#00cfff"/>
      <polygon points="32,28 38,40 26,40" fill="#fff"/>
    </svg>
  ),
};

const products = [
  {
    icon: icons.mountain,
    title: "Mountain Bikes",
    desc: "Conquer any terrain with our advanced mountain bikes featuring smart suspension and GPS tracking."
  },
  {
    icon: icons.racing,
    title: "Racing Bikes",
    desc: "Ultra-lightweight carbon fiber frames with aerodynamic design for maximum speed and performance."
  },
  {
    icon: icons.urban,
    title: "Urban Bikes",
    desc: "Smart city bikes with integrated navigation, theft protection, and weather-resistant design."
  },
  {
    icon: icons.ebike,
    title: "E-Bikes",
    desc: "Next-gen electric bikes with AI-powered assistance and solar charging capabilities."
  },
  {
    icon: icons.tech,
    title: "Tech Services",
    desc: "Advanced diagnostics, software updates, and precision tuning for all bike types."
  },
  {
    icon: icons.gear,
    title: "Smart Gear",
    desc: "High-tech accessories including smart helmets, GPS trackers, and safety systems."
  }
];

function Product() {
  return (
    <div className="product-bg">
      <div className="product-content">
        <h1 className="product-title">Our Collection</h1>
        <h2 className="product-subtitle">Premium Bikes & Services</h2>
        <div className="product-grid">
          {products.map((item, idx) => (
            <div className="product-card" key={idx}>
              <div className="product-card-icon">{item.icon}</div>
              <div className="product-card-info">
                <div className="product-card-title">{item.title}</div>
                <div className="product-card-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;