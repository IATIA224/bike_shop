import React, { useState } from "react";
import Home from "./js/home";
import About from "./js/about";
import Product from "./js/product";
import Services from "./js/services";
import Contact from "./js/contact";
import Review from "./js/review";
import Navbar from "./js/navbar";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="App">
      {!sidebarOpen && (
        <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
          <span className="menu-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="12" y="18" width="24" height="3" rx="1.5" fill="#fff"/>
              <rect x="12" y="24" width="24" height="3" rx="1.5" fill="#fff"/>
              <rect x="12" y="30" width="24" height="3" rx="1.5" fill="#fff"/>
            </svg>
          </span>
        </button>
      )}
      <Navbar
        visible={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={pg => {
          setPage(pg);
          setSidebarOpen(false);
        }}
      />
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "products" && <Product />}
      {page === "services" && <Services />}
      {page === "contact" && <Contact />}
      {page === "reviews" && <Review />}
    </div>
  );
}

export default App;
