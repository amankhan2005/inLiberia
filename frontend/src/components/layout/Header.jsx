 import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaChevronDown,
  FaPhoneAlt,
  FaUserNurse,
} from "react-icons/fa";

import { HiMenu, HiX } from "react-icons/hi";

import logo from "../../assets/logo.png";


export default function Header() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false); // Desktop
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // Mobile


  const dropdownRef = useRef(null);


  /* Close desktop dropdown on outside click */

  useEffect(() => {

    function handleOutside(e) {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setServicesOpen(false);
      }

    }

    document.addEventListener("mousedown", handleOutside);

    return () =>
      document.removeEventListener("mousedown", handleOutside);

  }, []);


  const navClass =
    "text-[#1F2933] hover:text-[#E85C9A] font-medium transition";

  const activeClass =
    "text-[#E85C9A] font-semibold border-b-2 border-[#E85C9A]";


  /* Close mobile menu when route changes */

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };


  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/60
        backdrop-blur-2xl
        border-b border-white/40
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
      "
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* ================= MAIN BAR ================= */}
        <div className="flex items-center justify-between h-24">


          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">

            <img
              src={logo}
              alt="Zenithcare Logo"
              className="
                h-14 md:h-16 w-auto
                drop-shadow-md
                hover:scale-105
                transition
              "
            />

          </Link>


          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-10">


            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : navClass
              }
            >
              Home
            </NavLink>


            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? activeClass : navClass
              }
            >
              About Us
            </NavLink>


            {/* DESKTOP SERVICES */}
            <div className="relative" ref={dropdownRef}>

              <button
                onClick={() =>
                  setServicesOpen(!servicesOpen)
                }
                className="
                  flex items-center gap-1
                  font-medium text-[#1F2933]
                  hover:text-[#E85C9A]
                "
              >
                Services

                <FaChevronDown
                  className={`text-xs mt-[2px] transition ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />

              </button>


              {servicesOpen && (

                <div
                  className="
                    absolute left-0 top-full mt-4 w-72
                    bg-white/80 backdrop-blur-xl
                    rounded-2xl shadow-xl
                    border border-white/50
                    overflow-hidden
                  "
                >

                  <DropLink to="/services/rn" setOpen={setServicesOpen}>
                    Registered Nurse
                  </DropLink>

                  <DropLink to="/services/lpn" setOpen={setServicesOpen}>
                    Licensed Practical Nurse
                  </DropLink>

                  <DropLink to="/services/gna" setOpen={setServicesOpen}>
                    GNA
                  </DropLink>

                  <DropLink to="/services/cna" setOpen={setServicesOpen}>
                    CNA
                  </DropLink>

                  <DropLink to="/services/ptot" setOpen={setServicesOpen}>
                    PT / OT
                  </DropLink>

                </div>

              )}

            </div>


            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? activeClass : navClass
              }
            >
              FAQ
            </NavLink>


            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive ? activeClass : navClass
              }
            >
              Career
            </NavLink>


            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? activeClass : navClass
              }
            >
              Contact
            </NavLink>


          </nav>


          {/* ================= CTA ================= */}
          <div className="hidden md:flex items-center gap-4">


            <Link
              to="/request-nurse"
              className="
                flex items-center gap-2
                bg-[#E85C9A] text-white
                px-6 py-2 rounded-full
                hover:bg-[#d94b89]
                hover:shadow-xl
                hover:scale-105
                transition
              "
            >
              <FaUserNurse />
              Request a Nurse
            </Link>


            <a
              href="tel:2402748822"
              className="
                flex items-center gap-2
                bg-gradient-to-r
                from-[#1FA6D9] to-[#0B8EC2]
                text-white
                px-6 py-2 rounded-full
                shadow-lg
                hover:shadow-xl
                hover:scale-105
                transition
              "
            >
              <FaPhoneAlt />
              Call Now
            </a>


          </div>


          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setMobileServicesOpen(false);
            }}
            className="md:hidden text-2xl text-[#1F2933]"
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>


        </div>


        {/* ================= MOBILE MENU ================= */}
        {mobileOpen && (

          <div className="md:hidden pb-6">

            <nav className="flex flex-col gap-5 mt-4">


              <MobileLink to="/" close={closeMobile}>
                Home
              </MobileLink>

              <MobileLink to="/about-us" close={closeMobile}>
                About Us
              </MobileLink>


              {/* MOBILE SERVICES */}
              <div>

                <button
                  onClick={() =>
                    setMobileServicesOpen(!mobileServicesOpen)
                  }
                  className="
                    flex justify-between w-full
                    font-medium text-[#1F2933]
                  "
                >
                  Services

                  <FaChevronDown
                    className={`transition ${
                      mobileServicesOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>


                {mobileServicesOpen && (

                  <div className="ml-4 mt-3 space-y-2 text-sm">


                    <MobileServiceLink
                      to="/services/rn"
                      close={closeMobile}
                    >
                      RN
                    </MobileServiceLink>

                    <MobileServiceLink
                      to="/services/lpn"
                      close={closeMobile}
                    >
                      LPN
                    </MobileServiceLink>

                    <MobileServiceLink
                      to="/services/gna"
                      close={closeMobile}
                    >
                      GNA
                    </MobileServiceLink>

                    <MobileServiceLink
                      to="/services/cna"
                      close={closeMobile}
                    >
                      CNA
                    </MobileServiceLink>

                    <MobileServiceLink
                      to="/services/ptot"
                      close={closeMobile}
                    >
                      PT / OT
                    </MobileServiceLink>

                  </div>

                )}

              </div>


              <MobileLink to="/faq" close={closeMobile}>
                FAQ
              </MobileLink>

              <MobileLink to="/careers" close={closeMobile}>
                Career
              </MobileLink>

              <MobileLink to="/contact-us" close={closeMobile}>
                Contact
              </MobileLink>

              <MobileLink to="/request-nurse" close={closeMobile}>
                Find Care
              </MobileLink>


            </nav>

          </div>

        )}


      </div>

    </header>
  );
}


/* ================= COMPONENTS ================= */


function DropLink({ to, children, setOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className="
        block px-6 py-3 text-[#1F2933]
        hover:bg-pink-50/70
        hover:text-[#E85C9A]
        transition
      "
    >
      {children}
    </Link>
  );
}


function MobileLink({ to, children, close }) {
  return (
    <Link
      to={to}
      onClick={close}
      className="font-medium text-[#1F2933] hover:text-[#E85C9A]"
    >
      {children}
    </Link>
  );
}


function MobileServiceLink({ to, children, close }) {
  return (
    <Link
      to={to}
      onClick={close}
      className="block text-gray-600 hover:text-[#E85C9A]"
    >
      {children}
    </Link>
  );
}
