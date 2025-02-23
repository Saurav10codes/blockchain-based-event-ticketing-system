import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [walletConnected, setWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    setWalletConnected(true);
    alert("Wallet connected! (Simulated)");
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(0, 0, 0, 0.7)", // Transparent Navbar
        boxShadow: "none",
        padding: "10px 20px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Title */}
        <Typography variant="h4" sx={{ color: "cyan" }}>
          Decentralized Events
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: "15px" }}>
          <Button component={Link} to="/" sx={{ color: "cyan" }}>Home</Button>
          <Button component={Link} to="/events" sx={{ color: "cyan" }}>Events</Button>
          <Button component={Link} to="/tickets" sx={{ color: "cyan" }}>Tickets</Button>
          <Button component={Link} to="/bidding" sx={{ color: "cyan" }}>Bidding</Button>
          <Button component={Link} to="/perks" sx={{ color: "cyan" }}>Perk Management</Button>
          <Button component={Link} to="/contact" sx={{ color: "cyan" }}>Contact Us</Button>
          <Button component={Link} to="/about" sx={{ color: "cyan" }}>About Us</Button>
        </Box>

        {/* Connect Wallet Button */}
        <Button
          variant="contained"
          sx={{
            background: "cyan",
            color: "black",
            "&:hover": { background: "lightblue" },
          }}
          onClick={handleConnectWallet}
        >
          {walletConnected ? "Wallet Connected" : "Connect Wallet"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
