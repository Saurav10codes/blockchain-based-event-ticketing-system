import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Button, Card, CardContent } from "@mui/material";
import { getTicketDetails } from "../utils/aptosService";

interface EventDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  location: string;
  date: string;
}

const TicketDetails: React.FC = () => {
  const { id } = useParams(); // ✅ Get ticket ID from URL
  const [event, setEvent] = useState<EventDetails | null>(null);

  useEffect(() => {
    async function fetchDetails() {
      const data = await getTicketDetails(id); // ✅ Fetch ticket details
      setEvent(data);
    }
    fetchDetails();
  }, [id]);

  if (!event) {
    return <Typography>Loading...</Typography>; // ✅ Show loading state
  }

  return (
    <Container>
      <Card className="glassmorphism">
        <CardContent>
          <Typography variant="h3" sx={{ color: "black", marginBottom: "20px" }}>
            {event.name}
          </Typography>
          <Typography variant="h5">{event.description}</Typography>
          <Typography variant="h6" color="grey">
            Location: {event.location}
          </Typography>
          <Typography variant="h6" color="grey">
            Date: {event.date}
          </Typography>
          <Typography variant="h6" color="grey">
            Price: <strong>{event.price} APT</strong>
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: "10px", backgroundColor: "cyan", color: "black" }}
          >
            Book Ticket
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TicketDetails;
