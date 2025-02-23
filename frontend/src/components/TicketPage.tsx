import React, { useState } from "react";
import { Container, Typography, Card, CardContent, Button, Grid } from "@mui/material";

const tickets = [
  { id: 1, event: "Tech Conference 2025", price: "2 APT", status: "Available" },
  { id: 2, event: "Music Festival", price: "1.5 APT", status: "Sold Out" },
  { id: 3, event: "Blockchain Summit", price: "3 APT", status: "Available" },
];

const TicketPage: React.FC = () => {
  const [ownedTickets, setOwnedTickets] = useState<string[]>([]);

  const handleBuyTicket = (event: string) => {
    setOwnedTickets([...ownedTickets, event]);
    alert(`Successfully purchased a ticket for ${event}!`);
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" sx={{ color: "cyan", fontWeight: "bold", mb: 3 }}>
        Ticket Marketplace 🎟️
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {tickets.map((ticket) => (
          <Grid item key={ticket.id}>
            <Card
              sx={{
                minWidth: 275,
                background: "#222",
                color: "white",
                padding: 2,
                boxShadow: "0px 0px 15px 5px rgba(255, 255, 255, 0.5)", // White shadow
                borderRadius: "8px", // Optional: Round corners for better appearance
              }}
            >
              <CardContent>
                <Typography variant="h6">{ticket.event}</Typography>
                <Typography>Price: {ticket.price}</Typography>
                <Typography>Status: {ticket.status}</Typography>
                {ticket.status === "Available" && (
                  <Button
                    variant="contained"
                    sx={{ mt: 2, backgroundColor: "cyan", color: "#000" }}
                    onClick={() => handleBuyTicket(ticket.event)}
                  >
                    Buy Now
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {ownedTickets.length > 0 && (
        <Typography variant="h6" sx={{ mt: 4, color: "lime" }}>
          Owned Tickets: {ownedTickets.join(", ")}
        </Typography>
      )}
    </Container>
  );
};

export default TicketPage;
