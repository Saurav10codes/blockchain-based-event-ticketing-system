import React, { useState } from "react";
import { Container, Typography, Card, CardContent, Button, Grid } from "@mui/material";

const perksList = [
  { id: 1, event: "Tech Conference", perk: "🎤 Backstage Access", added: false },
  { id: 2, event: "Music Festival", perk: "🎁 Free Merchandise", added: false },
  { id: 3, event: "Blockchain Summit", perk: "🚀 Priority Seating", added: false },
];

const PerkManagementPage: React.FC = () => {
  const [perks, setPerks] = useState(perksList);

  const handleAddPerk = (id: number) => {
    setPerks(perks.map((p) => (p.id === id ? { ...p, added: true } : p)));
    alert(`Perk added to ${perks.find((p) => p.id === id)?.event}`);
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" sx={{ color: "cyan", fontWeight: "bold", mb: 3 }}>
        Perk Management 🎁
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {perks.map((perk) => (
          <Grid item key={perk.id}>
            <Card
              sx={{
                minWidth: 275,
                background: "#222",
                color: "white",
                padding: 2,
                boxShadow: "0px 4px 10px 0px rgba(255, 255, 255, 0.7)", // white box shadow
                "&:hover": {
                  boxShadow: "0px 6px 15px 0px rgba(255, 255, 255, 0.9)", // increased shadow on hover
                },
              }}
            >
              <CardContent>
                <Typography variant="h6">{perk.event}</Typography>
                <Typography>Perk: {perk.perk}</Typography>
                {perk.added ? (
                  <Typography sx={{ color: "lime" }}>✅ Perk Added</Typography>
                ) : (
                  <Button
                    variant="contained"
                    sx={{ mt: 2, backgroundColor: "cyan", color: "#000" }}
                    onClick={() => handleAddPerk(perk.id)}
                  >
                    Add Perk
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PerkManagementPage;
