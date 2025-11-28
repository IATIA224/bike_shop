import React from "react";
import "../style/review.css";
import "../style/mobile.css";

const reviews = [
  {
    text: `"legit seller!!! smooth transaction and very flexible 💪💪💪"`,
    author: "Sherwin Pogoy"
  },
  {
    text: `"Very accommodating si seller at ang bilis mag reply.  Easy transaction and affordable prices. Thanks KJC Bike Shop!"`,
    author: "Shreky Luna"
  },
  {
    text: `"Good service💯 💯💯💯💯 Highly recommended ⭐⭐⭐⭐⭐"`,
    author: "Glen Saligan Mabilanga"
  },
  {
    text: `"Very fast and efficient. Legit products. I will buy again. Thank you KJC."`,
    author: "Joal Arellano"
  },
  {
    text: `"✅Convenient & Hassle free transaction! I ordered alloy carrier. Mabilis kausap si seller. Thank youuuu... 👍"`,
    author: "Coffee Brew Selection"
  },
  {
    text: `"good deal, maraming salamat.."`,
    author: "Jonah Xerxes"
  },
  {
    text: `"Smooth transaction. Honest and ang bait ng seller. may pa freebies pang kasama sa order ko. Highly recommended Online Seller of BIKE parts. Keep it up po and God Bless. 😇🙏"`,
    author: "Ronnel Lomoljo"
  },
  {
    text: `"Mabait sila at mabilis mag deliver. 100% liget."`,
    author: "Rosswel Gonzales"
  },
  {
    text: `"Great seller, fast response and accommodating. Highly recommended!"`,
    author: "Sarah Kim"
  },
  {
    text: `"Legit quality items, Fast transaction, Very accommodating seller"`,
    author: "Rocel Sirenas" 
  },
  {
    text: `"The owner is very accommodating, everything you're looking for is here! The place is also beautiful, very clean"`,
    author: "Marico Del Rosario"
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