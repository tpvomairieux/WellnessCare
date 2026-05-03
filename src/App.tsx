import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services/Services";
import Locations from "./pages/Locations";
import Appointments from "./pages/Appointments";

import Acupuncture from "./pages/services/Acupuncture";
import HairLossTreatment from "./pages/services/HairLossTreatment";
import Chiropractor from "./pages/services/Chiropractor";
import HerbalMedication from "./pages/services/HerbalMedication";
import Jogging from "./pages/services/Jogging";

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

          <Route path="/acupuncture" element={<Acupuncture />} />
          <Route path="/hairlosstreatment" element={<HairLossTreatment />} />
          <Route path="/chiropractor" element={<Chiropractor />} />
          <Route path="/herbalmedication" element={<HerbalMedication />} />
          <Route path="/jogging" element={<Jogging />} />
        </Routes>
      </main>
    </div>
  );
}