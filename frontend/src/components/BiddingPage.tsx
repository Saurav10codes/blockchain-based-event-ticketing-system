import React, { useState } from "react";
import { Button, Typography, TextField, Box } from "@mui/material";

const BiddingPage: React.FC = () => {
  const [bidAmount, setBidAmount] = useState("");
  const [highestBid, setHighestBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState("");

  const placeBid = () => {
    const newBid = parseFloat(bidAmount);
    if (newBid > highestBid) {
      setHighestBid(newBid);
      setHighestBidder("You"); // This should be replaced with actual wallet address
      setBidAmount("");
    } else {
      alert("Bid must be higher than the current highest bid.");
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" color="cyan">Premium Ticket Bidding</Typography>
      <Typography variant="h6">Highest Bid: {highestBid} APT by {highestBidder || "None"}</Typography>
      <TextField
        label="Your Bid (APT)"
        variant="outlined"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        sx={{
          mt: 2,
          width: "250px",  // Set width to match button
          height: "48px",  // Adjust height to match button height
          input: { color: "white" },  // Change text color inside the input field
          "& .MuiInputLabel-root": { color: "white" }, // Set the label color to white
          "& .MuiOutlinedInput-root": { borderColor: "cyan" },  // Optional: Set the border color of the input
        }}
      />
      <Button
        variant="contained"
        sx={{
          mt: 2,
          color: "black",
          backgroundColor: "cyan",
          width: "150px",  // Match width with input
          height: "52px",  // Set height to match input field
        }}
        onClick={placeBid}
      >
        Place Bid
      </Button>
    </Box>
  );
};

export default BiddingPage;
