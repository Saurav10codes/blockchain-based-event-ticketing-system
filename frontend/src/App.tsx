import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TicketPage from "./components/TicketPage";
import BiddingPage from "./components/BiddingPage";
import PerkManagementPage from "./components/PerkManagementPage";
import TicketDetails from "./components/TicketDetails";
import AddEvent from "./components/AddEvent"; // ✅ Import new page

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="/bidding" element={<BiddingPage />} />
        <Route path="/perks" element={<PerkManagementPage />} />
        <Route path="/ticket/:id" element={<TicketDetails />} />
        <Route path="/add-event" element={<AddEvent />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
};

export default App;
