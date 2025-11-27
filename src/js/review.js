import React from "react";
import "../style/review.css";
import "../style/mobile.css";

const reviews = [
  {
    text: `"The AI-powered e-bike from KJC Quickscape has completely transformed my daily commute. It's like having a personal cycling coach!"`,
    author: "Alex Chen"
  },
  {
    text: `"Incredible craftsmanship and cutting-edge technology. My carbon fiber racing bike is a work of art that performs like a dream."`,
    author: "Maria Rodriguez"
  },
  {
    text: `"The smart city bike with GPS tracking gave me peace of mind. Plus, the solar charging feature is absolutely brilliant!"`,
    author: "James Wilson"
  },
  {
    text: `"KJC Quickscape tech services are unmatched. They upgraded my bike's software and it feels like I got a brand new machine."`,
    author: "Sarah Kim"
  }
];

function Review() {
  return (
    <div className="review-bg">
      <div className="review-content">
        <h1 className="review-title">Rider Reviews</h1>
        <h2 className="review-subtitle">What Our Community Says</h2>
        <div className="review-grid">
          {reviews.map((item, idx) => (
            <div className="review-card" key={idx}>
              <div className="review-card-text">{item.text}</div>
              <div className="review-card-author">- {item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;