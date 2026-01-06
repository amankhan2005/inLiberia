 import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

export default function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `relative px-5 py-4 text-[15px] font-semibold transition
     ${isActive ? "text-white" : "text-white/80 hover:text-white"}
     after:absolute after:left-5 after:-bottom-1 after:h-[2px]
     after:bg-white after:transition-all after:duration-300
     ${isActive ? "after:w-6" : "after:w-0 hover:after:w-6"}`;

  const services = [
    ["Stroke Recovery & Neuro-Rehabilitation", "/services/stroke-recovery-neuro-rehab"],
    ["Dementia & Alzheimer’s Care", "/services/dementia-alzheimers-care"],
    ["Post-Surgical Recovery", "/services/post-surgical-recovery"],
    ["Comprehensive Care Coordination", "/services/comprehensive-care-coordination"],
    ["Concierge & White-Glove Add-Ons", "/services/concierge-add-ons"],
    ["Private-Pay Model", "/services/private-pay-model"],
    ["Physician & Hospital Partnerships", "/services/physician-hospital-partnerships"],
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`w-full z-50 ${scrolled ? "fixed top-0" : "relative"}`}
      >
        <div
          className={`w-full backdrop-blur-xl bg-[#AF3059]/95
          border-b border-white/20 shadow-[0_10px_40px_rgba(175,48,89,0.35)]
          transition-all ${scrolled ? "py-3" : "py-5"}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">

              {/* LOGO */}
              <NavLink to="/" className="flex items-center gap-3">
                <img src={logo} alt="Gentle Hearts" className="h-20 rounded-xl" />
              </NavLink>

              {/* ================= DESKTOP NAV ================= */}
              <ul className="hidden lg:flex items-center gap-1">
                <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
                <li><NavLink to="/about-us" className={linkClass}>About Us</NavLink></li>

                {/* SERVICES DROPDOWN */}
                <li
                  className="relative"
                  onMouseEnter={() => setOpenDropdown("services")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex items-center gap-1 px-5 py-4 cursor-pointer font-semibold text-white/80 hover:text-white">
                    Services <FaChevronDown className="text-xs" />
                  </div>

                  <AnimatePresence>
                    {openDropdown === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-4 w-[420px] rounded-2xl
                        bg-white/95 backdrop-blur-xl border border-gray-200
                        shadow-[0_25px_60px_rgba(0,0,0,0.15)] overflow-hidden"
                      >
                        {services.map(([label, to]) => (
                          <NavLink
                            key={to}
                            to={to}
                            className="block px-6 py-4 text-gray-800 font-medium
                            hover:bg-[#FDEAF1] hover:text-[#AF3059] transition"
                          >
                            {label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li><NavLink to="/faq" className={linkClass}>FAQs</NavLink></li>
              </ul>

              {/* CTA */}
              <NavLink to="/contact-us" className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full font-semibold
                  bg-white text-[#AF3059]"
                >
                  Contact Us
                </motion.button>
              </NavLink>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden w-11 h-11 rounded-xl bg-white/20
                flex items-center justify-center"
              >
                <span className="w-6 h-0.5 bg-white block relative
                before:absolute before:w-6 before:h-0.5 before:bg-white before:-top-2
                after:absolute after:w-6 after:h-0.5 after:bg-white after:top-2" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-80 z-50 bg-[#AF3059]"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/30">
                <img src={logo} alt="Gentle Hearts" className="h-12" />
                <button onClick={() => setMenuOpen(false)} className="text-white text-xl">
                  <FaTimes />
                </button>
              </div>

              <nav className="px-6 py-6 space-y-2 text-white font-semibold">
                <MobileLink to="/" setMenuOpen={setMenuOpen}>Home</MobileLink>
                <MobileLink to="/about-us" setMenuOpen={setMenuOpen}>About Us</MobileLink>

                {/* MOBILE SERVICES */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-4 rounded-xl hover:bg-white/20"
                >
                  <span>Services</span>
                  <FaChevronDown className={`${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-3 overflow-hidden"
                    >
                      {services.map(([label, to]) => (
                        <NavLink
                          key={to}
                          to={to}
                          onClick={() => setMenuOpen(false)}
                          className="block px-4 py-3 rounded-lg text-sm hover:bg-white/20"
                        >
                          {label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <MobileLink to="/faq" setMenuOpen={setMenuOpen}>FAQs</MobileLink>
                <MobileLink to="/contact-us" setMenuOpen={setMenuOpen}>Contact Us</MobileLink>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileLink({ to, children, setMenuOpen }) {
  return (
    <NavLink
      to={to}
      onClick={() => setMenuOpen(false)}
      className="block px-4 py-4 rounded-xl hover:bg-white/20 transition"
    >
      {children}
    </NavLink>
  );
}
