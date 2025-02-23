import React, { useState } from "react";
import { Button, Typography, TextField, Box, List, ListItem } from "@mui/material";

const PerkManagementPage: React.FC = () => {
  const [perk, setPerk] = useState("");
  const [perks, setPerks] = useState<string[]>([]);

  const addPerk = () => {
    if (perk.trim()) {
      setPerks([...perks, perk]);
      setPerk("");
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" color="cyan">Manage Ticket Perks</Typography>
      <TextField
        label="New Perk"
        variant="outlined"
        value={perk}
        onChange={(e) => setPerk(e.target.value)}
        sx={{ mt: 2 }}
      />
      <Button variant="contained" sx={{ mt: 2, backgroundColor: "cyan" }} onClick={addPerk}>
        Add Perk
      </Button>

      <List sx={{ mt: 3 }}>
        {perks.map((p, index) => (
          <ListItem key={index} sx={{ color: "white" }}>
            {p}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PerkManagementPage;
