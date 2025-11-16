import React from "react";
import "../style/navbar.css";

function Navbar({ visible, onClose, onNavigate }) {
  return (
    <>
      {visible && (
        <div className="sidebar">
          <div className="sidebar-header">
            <img src="/img/brand_logo.png" alt="KJC Quickscape Logo" className="sidebar-logo-img" />
            <span className="sidebar-logo">KJC </span>
            <span className="sidebar-subtitle">Quickscape</span>
            <button className="sidebar-close" onClick={onClose}>&times;</button>
          </div>
          <ul className="sidebar-menu">
            <li onClick={() => onNavigate("home")}><span></span> Home</li>
            <li onClick={() => onNavigate("about")}><span></span> About</li>
            <li onClick={() => onNavigate("products")}><span></span> Products</li>
            <li onClick={() => onNavigate("services")}><span></span> Services</li>
            <li onClick={() => onNavigate("contact")}><span></span> Contact</li>
            <li onClick={() => onNavigate("reviews")}><span></span> Reviews</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;