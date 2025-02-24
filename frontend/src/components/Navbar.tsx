import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;

const Navbar: React.FC = () => {
  const [walletState, setWalletState] = useState("CONNECT");

  const [isConnected, setIsConnected] = useState(false);
  window.aptos.isConnected().then((res: boolean)=>{setIsConnected(res)})


  useEffect(()=>{
    if(isConnected){
      setWalletState("CONNECTED");
    }
  }, [isConnected]);


  const connectWallet = () => {
    if(window.aptos == undefined){
      alert("please install petra wallet")
    }else{
      window.aptos.connect()
      .then(({address}:{address:string})=>{ console.log(address) })
      .then(()=>{setWalletState("CONNECTED");})
      .catch((e: unknown)=>{console.error(e)});
    }
  };

  return (
    <AppBar position="static" sx={{ background: "transparent", boxShadow: "none", padding: "10px 20px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Typography variant="h4" sx={{ color: "cyan" }}>
            Decentralized Events
          </Typography>
        </motion.div>

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

        <Button 
          variant="outlined"
          sx={{
            borderColor: "cyan",
            color: "cyan",
            "&:hover": { backgroundColor: "rgba(0, 255, 255, 0.2)" }
          }}
          onClick={connectWallet}
        >
          {walletState}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;