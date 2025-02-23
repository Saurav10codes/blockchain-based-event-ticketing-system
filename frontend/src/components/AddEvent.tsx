import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddEvent: React.FC = () => {
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    name: "",
    description: "",
    price: "",
    date: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const newEvent = { ...event, id: Date.now().toString() }; // ✅ Assign unique ID
    localStorage.setItem("events", JSON.stringify([...storedEvents, newEvent]));

    navigate("/events"); // ✅ Redirect to events page
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" color="cyan">Add New Event</Typography>

        <TextField label="Event Name" name="name" variant="outlined" fullWidth sx={{ mt: 2 }} onChange={handleChange} />
        <TextField label="Description" name="description" variant="outlined" fullWidth sx={{ mt: 2 }} onChange={handleChange} />
        <TextField label="Price (APT)" name="price" type="number" variant="outlined" fullWidth sx={{ mt: 2 }} onChange={handleChange} />
        <TextField label="Date" name="date" type="date" variant="outlined" fullWidth sx={{ mt: 2 }} onChange={handleChange} InputLabelProps={{ shrink: true }} />
        <TextField label="Location" name="location" variant="outlined" fullWidth sx={{ mt: 2 }} onChange={handleChange} />

        <Button variant="contained" sx={{ mt: 3, backgroundColor: "cyan", color: "black" }} onClick={handleSubmit}>
          Add Event
        </Button>
      </Box>
    </Container>
  );
};

export default AddEvent;
