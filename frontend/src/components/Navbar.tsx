import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [walletConnected, setWalletConnected] = useState<boolean>(false);

  const connectWallet = () => {
    // Wallet connect logic (stub)
    setWalletConnected(true);
  };

  return (
    <AppBar position="static" sx={{ background: "transparent", boxShadow: "none", padding: "10px 20px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Title with animation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Typography variant="h4" sx={{ color: "cyan" }}>
            Decentralized Events
          </Typography>
        </motion.div>

        {/* Navigation Links */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Button component={Link} to="/" sx={{ color: "cyan", margin: "0 10px" }}>
            Home
          </Button>
          <Button component={Link} to="/tickets" sx={{ color: "cyan", margin: "0 10px" }}>
            Tickets
          </Button>
          <Button component={Link} to="/bidding" sx={{ color: "cyan", margin: "0 10px" }}>
            Bidding
          </Button>
          <Button component={Link} to="/perks" sx={{ color: "cyan", margin: "0 10px" }}>
            Perks
          </Button>
        </Box>

        {/* Wallet Connection Button */}
        <Button 
          variant="outlined"
          sx={{
            borderColor: "cyan",
            color: "cyan",
            "&:hover": { backgroundColor: "rgba(0, 255, 255, 0.2)" }
          }}
          onClick={connectWallet}
        >
          {walletConnected ? "Wallet Connected" : "Connect Wallet"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
