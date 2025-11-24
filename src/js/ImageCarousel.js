import React, { useState, useEffect } from "react";
import "../style/about.css";

const images = [
    "/img/carousel/1.jpg",
    "/img/carousel/2.jpg",
    "/img/carousel/3.jpg",
    "/img/carousel/4.jpg",
    "/img/carousel/5.jpg",
    "/img/carousel/6.jpg",
    "/img/carousel/7.jpg",
    "/img/carousel/8.jpg",
    "/img/carousel/9.jpg",
    "/img/carousel/10.jpg",
    "/img/carousel/11.jpg",
    "/img/carousel/12.jpg",
    "/img/carousel/13.jpg",
    "/img/carousel/14.jpg",
  // Add more images as needed
];

function ImageCarousel() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
        setFade(false);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % images.length);
            setFade(true);
        }, 500); // fade out duration
        }, 3000); // image display duration
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="carousel-container">
        <img
            src={images[current]}
            alt={`carousel-${current}`}
            className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
        />
        </div>
    );
}

export default ImageCarousel;