import React, { useState } from "react";
import { Container, Typography, Card, CardContent, Button, TextField, Box, Alert } from "@mui/material";

const BiddingPage: React.FC = () => {
  const [highestBid, setHighestBid] = useState(5);
  const [yourBid, setYourBid] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error">("success");

  const handleBid = () => {
    const bidAmount = parseFloat(yourBid);
    if (isNaN(bidAmount) || bidAmount <= 0) {
      setAlertSeverity("error");
      setAlertMessage("Please enter a valid bid amount!");
    } else if (bidAmount > highestBid) {
      setHighestBid(bidAmount);
      setAlertSeverity("success");
      setAlertMessage(`You are now the highest bidder with ${bidAmount} APT!`);
    } else {
      setAlertSeverity("error");
      setAlertMessage("Bid higher than the current highest bid!");
    }
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" sx={{ color: "cyan", fontWeight: "bold", mb: 3 }}>
        Live Bidding 🎯
      </Typography>

      {/* Feedback Alert */}
      {alertMessage && (
        <Alert sx={{ mb: 3 }} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      )}

      <Card
        sx={{
          minWidth: 275,
          background: "#222",
          color: "white",
          padding: 3,
          boxShadow: "0px 4px 10px 0px rgba(255, 255, 255, 0.7)", // white box shadow
          "&:hover": {
            boxShadow: "0px 6px 15px 0px rgba(255, 255, 255, 0.9)", // increased shadow on hover
          },
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            🎫 VIP Concert Ticket
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Current Highest Bid: <span style={{ color: "lime" }}>{highestBid} APT</span>
          </Typography>

          <TextField
            type="number"
            label="Your Bid (APT)"
            variant="outlined"
            sx={{
              mt: 2,
              backgroundColor: "white",
              borderRadius: "5px",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "cyan",
                },
                "&:hover fieldset": {
                  borderColor: "cyan",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "cyan",
                },
              },
            }}
            onChange={(e) => setYourBid(e.target.value)}
          />

          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "cyan",
              color: "#000",
              width: "100%",
              "&:hover": {
                backgroundColor: "lightcyan",
              },
            }}
            onClick={handleBid}
          >
            Place Bid
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BiddingPage;
