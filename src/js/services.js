import React from "react";
import "../style/services.css";

const services = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <g>
          <rect x="20" y="32" width="8" height="4" rx="2" fill="#fff"/>
          <rect x="22" y="14" width="4" height="18" rx="2" fill="#fff"/>
        </g>
      </svg>
    ),
    title: "Bike Maintenance",
    desc: "Complete tune-ups, brake adjustments, and gear calibration to keep your bike running smoothly."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <polygon points="24,10 28,22 20,22" fill="#FFD700"/>
      </svg>
    ),
    title: "E-Bike Diagnostics",
    desc: "Advanced electronic diagnostics, battery health checks, and software updates for electric bikes."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <g>
          <rect x="30" y="18" width="10" height="4" rx="2" fill="#fff"/>
          <rect x="8" y="18" width="10" height="4" rx="2" fill="#fff"/>
          <rect x="19" y="22" width="10" height="4" rx="2" fill="#B2A17B"/>
        </g>
      </svg>
    ),
    title: "Custom Builds",
    desc: "Personalized bike assembly from frame selection to component installation based on your needs."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="10" fill="#fff" opacity="0.2"/>
        <circle cx="24" cy="24" r="7" fill="#6C63FF"/>
        <rect x="22" y="15" width="4" height="14" rx="2" fill="#fff"/>
      </svg>
    ),
    title: "Bike Fitting",
    desc: "Professional bike fitting service to optimize comfort, performance, and prevent injury."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <ellipse cx="24" cy="24" rx="12" ry="12" fill="#fff" opacity="0.2"/>
        <polygon points="24,18 32,34 16,34" fill="#00cfff"/>
        <polygon points="24,22 28,32 20,32" fill="#fff"/>
      </svg>
    ),
    title: "Warranty Repairs",
    desc: "Authorized warranty service for all major bike brands with genuine parts and expert technicians."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect x="18" y="18" width="12" height="12" rx="3" fill="#6C63FF"/>
        <rect x="22" y="22" width="4" height="4" rx="2" fill="#FFD700"/>
      </svg>
    ),
    title: "Smart Upgrades",
    desc: "Transform your regular bike with smart accessories, GPS tracking, and connectivity features."
  }
];

function Services() {
  return (
    <div className="services-bg">
      <div className="services-content">
        <h1 className="services-title">Our Services</h1>
        <h2 className="services-subtitle">Expert Care for Every Ride</h2>
        <div className="services-grid">
          {services.map((item, idx) => (
            <div className="services-card" key={idx}>
              <div className="services-card-icon">{item.icon}</div>
              <div className="services-card-info">
                <div className="services-card-title">{item.title}</div>
                <div className="services-card-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;