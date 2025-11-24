import React from "react";
import "../style/navbar.css";

function Navbar({ visible, onClose, onNavigate, activePage }) {
  return (
    <>
      {visible && (
        <div className="sidebar">
          <div className="sidebar-header">
            <img src="/img/bikeshop_logo.png" alt="KJC Bikeshop Logo" className="sidebar-logo-img" />
            <span className="sidebar-logo">KJC Bikeshop </span>
            <span className="sidebar-subtitle">EST. 2016</span>
            <button className="sidebar-close" onClick={onClose}>&times;</button>
          </div>
          <ul className="sidebar-menu">
            <li className={`sidebar-subtitle${activePage === "home" ? " active" : ""}`} onClick={() => onNavigate("home")}> Home</li>
            <li className={`sidebar-subtitle${activePage === "about" ? " active" : ""}`} onClick={() => onNavigate("about")}> About</li>
            <li className={`sidebar-subtitle${activePage === "products" ? " active" : ""}`} onClick={() => onNavigate("products")}> Products</li>
            <li className={`sidebar-subtitle${activePage === "services" ? " active" : ""}`} onClick={() => onNavigate("services")}> Services</li>
            <li className={`sidebar-subtitle${activePage === "contact" ? " active" : ""}`} onClick={() => onNavigate("contact")}> Contact</li>
            <li className={`sidebar-subtitle${activePage === "reviews" ? " active" : ""}`} onClick={() => onNavigate("reviews")}> Reviews</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;