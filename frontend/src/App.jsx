 import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RouteScrollTop from "./components/RouteScrollTop";

// ================= PAGES =================
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/faq";
import Contact from "./pages/Contact";
 
// ================= SERVICES (NEW) =================
import StrokeRecovery from "./pages/services/StrokeRecovery";
import DementiaCare from "./pages/services/DementiaCare";
import PostSurgicalRecovery from "./pages/services/PostSurgicalRecovery";
import CareCoordination from "./pages/services/CareCoordination";
import ConciergeCare from "./pages/services/ConciergeCare";
import PrivatePay from "./pages/services/PrivatePay";
import PhysicianPartnerships from "./pages/services/PhysicianPartnerships";

export default function App() {
  return (
    <>
      {/* 🔥 Auto scroll to top on route change */}
      <RouteScrollTop />

      <Navbar />

      <Routes>
        {/* ===== MAIN PAGES ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
         <Route path="/contact-us" element={<Contact />} />
 
        {/* ===== SERVICES ===== */}
        <Route
          path="/services/stroke-recovery-neuro-rehab"
          element={<StrokeRecovery />}
        />
        <Route
          path="/services/dementia-alzheimers-care"
          element={<DementiaCare />}
        />
        <Route
          path="/services/post-surgical-recovery"
          element={<PostSurgicalRecovery />}
        />
        <Route
          path="/services/comprehensive-care-coordination"
          element={<CareCoordination />}
        />
        <Route
          path="/services/concierge-add-ons"
          element={<ConciergeCare />}
        />
        <Route
          path="/services/private-pay-model"
          element={<PrivatePay />}
        />
        <Route
          path="/services/physician-hospital-partnerships"
          element={<PhysicianPartnerships />}
        />
      </Routes>

      <Footer />

      {/* ⬆️ Floating scroll-to-top button */}
      <ScrollToTop />
    </>
  );
}
