import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
// import './ImageSlider.css'; // Import your CSS file for styling

const ImageSlider = () => {
  const images = [
    'https://www.nifafinearts.com/banner-images/1273170038home-banner2.jpg',
    'https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg',
    'https://www.nifafinearts.com/banner-images/1858311846home-banner4.jpg',
    'https://www.nifafinearts.com/banner-images/1952342548home-banner5.jpg',
    'https://www.nifafinearts.com/banner-images/1550551577home-banner1.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  // Move to the next image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <Box component="div" className="image-slider-container">
    <button className="nav-button left" onClick={prevImage}>
      &lt;
    </button>
    <img src={images[currentImage]} alt={`slide-${currentImage}`} />
    <button className="nav-button right" onClick={nextImage}>
      &gt;
    </button>
  </Box>
  )
};

export default ImageSlider;
