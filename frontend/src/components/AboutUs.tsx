import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import aboutBanner from "../assets/about-banner.jpg";

const AboutUs: React.FC = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 5,
        background: "linear-gradient(135deg, #1a237e, #536dfe)", // Gradient background
        borderRadius: "15px",
        padding: "40px 20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)", // Shadow for modern look
      }}
    >
      <img
        src={aboutBanner}
        alt="About Us Banner"
        style={{
          width: "100%",
          borderRadius: "15px",
          marginBottom: "20px",
          filter: "brightness(0.8)", // Dim the image to give a futuristic effect
        }}
      />
      <Typography
        variant="h4"
        sx={{
          color: "cyan",
          fontWeight: "bold",
          textTransform: "uppercase", // Modern styling
          letterSpacing: "2px",
          fontSize: "3rem", // Larger font for title
          marginBottom: "20px",
        }}
      >
        About Us
      </Typography>
      <Typography
        sx={{
          mt: 2,
          color: "white",
          fontSize: "1.2rem",
          lineHeight: "1.6",
          maxWidth: "800px",
          margin: "0 auto", // Center the paragraph
          fontStyle: "italic", // Add emphasis
        }}
      >
        Decentralized Events is a cutting-edge blockchain-based ticketing system designed to make event management seamless and transparent.
      </Typography>

      {/* Team Section */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          sx={{
            color: "cyan",
            fontWeight: "bold",
            mb: 2,
            fontSize: "2rem", // Increase font size for team section
          }}
        >
          Our Team
        </Typography>

        {/* Team Grid */}
        <Grid container spacing={2} justifyContent="center">
          {[
            { rollNo: "B24128", name: "HARSHIT ANAND" },
            { rollNo: "B24131", name: "JAYJIT SINGHA" },
            { rollNo: "B24137", name: "MANAN MEEMROTH" },
            { rollNo: "B24202", name: "KUMAR SAURAV" },
          ].map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.1)", // Semi-transparent box for team members
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)", // Hover effect to raise the box
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                  }}
                >
                  {member.rollNo}
                </Typography>
                <Typography sx={{ color: "white", fontSize: "1.1rem" }}>
                  {member.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;
