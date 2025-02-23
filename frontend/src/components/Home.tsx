import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { getTickets } from "../utils/aptosService";
import { useNavigate } from "react-router-dom";

interface Event {
  id: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEvents() {
      const eventData = await getTickets();

      // Get locally stored events
      const localEvents = JSON.parse(localStorage.getItem("events") || "[]");
      
      setEvents([...eventData, ...localEvents]); // Merge both
    }
    fetchEvents();
  }, []);

  return (
    <Container>
      <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
        <Typography variant="h3" sx={{ textAlign: "center", color: "cyan", marginBottom: "30px" }}>
          Available Events
        </Typography>
      </motion.div>

      <Button variant="contained" sx={{ mb: 3, backgroundColor: "cyan", color: "black" }} onClick={() => navigate("/add-event")}>
        Add Event
      </Button>

      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="glassmorphism">
                <CardContent>
                  <Typography variant="h5">{event.name}</Typography>
                  <Typography>{event.description}</Typography>
                  <Typography variant="h6" color="grey">
                    Price: {event.price} APT
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ marginTop: "10px", color: "black", backgroundColor: "cyan" }}
                    onClick={() => navigate(`/ticket/${event.id}`)}
                  >
                    View Ticket
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
