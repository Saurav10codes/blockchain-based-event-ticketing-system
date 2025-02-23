import React, { useState, useEffect, useCallback } from "react";

// Define the Event interface
interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
}

// Type for New Event Input
interface NewEvent {
  name: string;
  description: string;
  date: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [newEvent, setNewEvent] = useState<NewEvent>({ name: "", description: "", date: "" });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setNewEvent((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleAddEvent = useCallback(() => {
    const { name, description, date } = newEvent;

    if (!name || !description || !date) {
      setError("Please fill in all fields.");
      return;
    }

    // Simple date validation
    if (new Date(date).toString() === "Invalid Date") {
      setError("Please provide a valid date.");
      return;
    }

    setError(null);

    const newEventData: Event = {
      id: Date.now(), // Unique ID based on timestamp
      ...newEvent,
    };

    setEvents((prevEvents) => [...prevEvents, newEventData]);
    setNewEvent({ name: "", description: "", date: "" });
  }, [newEvent]);

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", backgroundColor: "#121212", padding: "20px", color: "white" }}>
      <h1 style={{ textAlign: "center", color: "#fff", fontSize: "2.5em" }}>Events</h1>

      {/* Display error messages */}
      {error && <div style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>{error}</div>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              style={{
                backgroundColor: "#1e1e1e",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1), 0 0 15px rgba(255, 255, 255, 0.2)", // White shadow
                textAlign: "center",
              }}
            >
              <h3 style={{ marginTop: "15px", color: "#fff" }}>{event.name}</h3>
              <p style={{ color: "#bbb" }}>{event.description}</p>
              <p style={{ fontWeight: "bold", color: "#aaa" }}>Date: {event.date}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#aaa" }}>No events available</p>
        )}
      </div>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1), 0 0 15px rgba(255, 255, 255, 0.2)", // White shadow
        }}
      >
        <h2 style={{ textAlign: "center", color: "#fff", fontSize: "1.8em" }}>Add New Event</h2>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={newEvent.name}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <textarea
            name="description"
            placeholder="Event Description"
            value={newEvent.description}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleAddEvent}
            style={{
              backgroundColor: "#5c6bc0",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "1em",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)", // White shadow on button
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#3f51b5"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#5c6bc0"}
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

// Shared input styling for consistency in dark mode
const inputStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "1em",
  borderRadius: "8px",
  border: "1px solid #444",
  marginBottom: "10px",
  boxSizing: "border-box" as "border-box", // Ensures padding is included in width
  backgroundColor: "#333",
  color: "#fff",
  boxShadow: "0 2px 6px rgba(255, 255, 255, 0.1)", // White shadow on inputs
};

export default Events;
