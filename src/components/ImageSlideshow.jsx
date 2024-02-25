import React, { useState, useEffect } from "react";
import { Image, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./ImageSlideshow.css";

const images = [
  { url: "./images/banner_1.jpg" },
  { url: "./images/banner_2.jpg" },
  { url: "./images/banner_3.jpg" },
  { url: "./images/banner_4.jpg" },
  { url: "./images/banner_5.jpg" },
  { url: "./images/banner_6.jpg" },
  { url: "./images/banner_7.jpg" },
  { url: "./images/banner_8.jpg" },
  { url: "./images/banner_9.jpg" },
  { url: "./images/banner_10.jpg" },
  { url: "./images/banner_11.jpg" },
  { url: "./images/banner_12.jpg" },
  { url: "./images/banner_13.jpg" },
  { url: "./images/banner_14.jpg" },
  { url: "./images/banner_15.jpg" },
];

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const handleNextImage = () => {
    if (!transitioning) {
      setTransitioning(true);
      setImageOpacity(0);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setImageOpacity(1);
        setTransitioning(false);
      }, 450);
    }
  };

  const handlePrevImage = () => {
    if (!transitioning) {
      setTransitioning(true);
      setImageOpacity(0);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
        setImageOpacity(1);
        setTransitioning(false);
      }, 450);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleNextImage, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <IconButton
        aria-label="Previous Image"
        icon={<FaArrowLeft />}
        onClick={handlePrevImage}
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        zIndex={1}
      />
      <IconButton
        aria-label="Next Image"
        icon={<FaArrowRight />}
        onClick={handleNextImage}
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        zIndex={1}
      />
      <Image
        src={images[currentImageIndex].url}
        alt="Slideshow Image"
        w="100%"
        margin="auto"
        maxH="550px"
        objectFit="cover"
        className="slideshow-image"
        style={{
          opacity: imageOpacity,
          transition: "opacity 0.5s",
        }}
        boxShadow="lg"
        borderRadius="2px"
      />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: index === currentImageIndex ? "red" : "#CBD5E0",
              borderRadius: "50%",
              margin: "0 4px",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
