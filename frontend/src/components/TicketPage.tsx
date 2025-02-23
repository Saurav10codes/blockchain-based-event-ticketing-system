import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

const tickets = [
  { id: 1, name: "VIP Concert", price: 10, currency: "APT" },
  { id: 2, name: "Front Row Seat", price: 7, currency: "APT" },
  { id: 3, name: "General Admission", price: 3, currency: "APT" },
];

const TicketPage: React.FC = () => {
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" color="cyan">Available Tickets</Typography>
      {tickets.map((ticket) => (
        <Card key={ticket.id} sx={{ mt: 2, mx: "auto", width: "300px", backgroundColor: "#222" }}>
          <CardContent>
            <Typography variant="h6" color="white">{ticket.name}</Typography>
            <Typography sx={{ fontWeight: "bold", color: "gray" }}>
              {ticket.price} {ticket.currency}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 1,color: "black", backgroundColor: "cyan" }}
              onClick={() => setSelectedTicket(ticket.id)}
            >
              Buy Ticket
            </Button>
          </CardContent>
        </Card>
      ))}

      {selectedTicket && (
        <Typography variant="h6" color="lime" sx={{ mt: 3 }}>
          You have selected ticket ID: {selectedTicket}
        </Typography>
      )}
    </Box>
  );
};

export default TicketPage;
