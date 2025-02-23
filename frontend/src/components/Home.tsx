import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import image1 from "../assets/home-image-1.jpg";
import image2 from "../assets/home-image-2.jpg";
import image3 from "../assets/home-image-3.jpg";

const images = [image1, image2, image3];

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden", // Hide overflow to avoid scrollbars
      }}
    >
      {/* Background Images */}
      {images.map((img, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentImage ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}

      {/* Sticky Text */}
      <Box
        sx={{
          position: "fixed", // Fixed to the bottom of the screen
          bottom: 0,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
          color: "white",
          textAlign: "center",
          padding: "20px 0", // Increased padding for more space around the text
        }}
      >
        <Typography
          variant="h3" // Increased font size
          sx={{
            fontWeight: "bold",
            letterSpacing: "2px", // Slightly increased letter spacing for a modern look
            fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size for different screen sizes
            transition: "all 0.3s ease", // Smooth transition for hover effect
            "&:hover": {
              transform: "scale(1.1)", // Slightly increase size on hover
              color: "cyan", // Change color to cyan on hover
            },
          }}
        >
          Welcome to Decentralized Events!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
