import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import TicketPage from "./components/TicketPage";
import BiddingPage from "./components/BiddingPage";
import PerkManagementPage from "./components/PerkManagementPage";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import TicketDetails from "./components/TicketDetails"; // ✅ Import TicketDetails

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="/bidding" element={<BiddingPage />} />
        <Route path="/perks" element={<PerkManagementPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/ticket/:id" element={<TicketDetails />} /> {/* ✅ Fix: Added route */}
      </Routes>
    </Router>
  );
};

export default App;
