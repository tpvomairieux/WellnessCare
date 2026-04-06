import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services/Services";
import Locations from "./pages/Locations";
import Appointments from "./pages/Appointments";

export default function App(): React.JSX.Element {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </main>
    </div>
  );
}