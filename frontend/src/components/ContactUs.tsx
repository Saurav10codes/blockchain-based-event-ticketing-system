import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const ContactUs: React.FC = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" color="cyan">Contact Us</Typography>
      <Box sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          sx={{
            mt: 2,
            "& .MuiOutlinedInput-root": {
              borderColor: "white", // white border color
            },
            "& .MuiInputLabel-root": {
              color: "white", // white label color
            },
            "& .MuiOutlinedInput-input": {
              color: "white", // white text color
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white", // white border when focused
            },
          }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          sx={{
            mt: 2,
            "& .MuiOutlinedInput-root": {
              borderColor: "white", // white border color
            },
            "& .MuiInputLabel-root": {
              color: "white", // white label color
            },
            "& .MuiOutlinedInput-input": {
              color: "white", // white text color
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white", // white border when focused
            },
          }}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{
            mt: 2,
            "& .MuiOutlinedInput-root": {
              borderColor: "white", // white border color
            },
            "& .MuiInputLabel-root": {
              color: "white", // white label color
            },
            "& .MuiOutlinedInput-input": {
              color: "white", // white text color
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white", // white border when focused
            },
          }}
        />
        <Button variant="contained" sx={{ mt: 2, backgroundColor: "cyan", color: "black" }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
