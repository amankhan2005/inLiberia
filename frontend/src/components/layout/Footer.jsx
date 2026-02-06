 import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Logo Import
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-sky-300 text-white pt-24 pb-10 rounded-t-[3rem]">


      {/* CTA Section */}
      <div className="text-center max-w-3xl mx-auto mb-20 px-4">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          #CaringForLife
        </h2>

        <p className="text-lg opacity-90 mb-6">
          How Can We Support Your Health & Care Needs Today?
        </p>

        <Link
          to="/contact-us"
          className="inline-block bg-white text-sky-600 px-7 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Contact Us Now →
        </Link>

      </div>


      {/* Main Footer Card */}
      <div className="bg-white text-gray-800 max-w-7xl mx-auto rounded-3xl p-10 shadow-2xl">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">


          {/* Company */}
          <div className="flex flex-col items-start">

            <Link to="/" className="mb-3">
              <img
                src={logo}
                alt="Zenith Care Services Logo"
                className="w-40 object-contain"
              />
            </Link>

            <p className="text-sm text-gray-800 leading-relaxed max-w-xs">
              Trusted healthcare staffing and home care with compassion and excellence.
            </p>

          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Quick Links</h4>

            <ul className="space-y-2 text-sm text-gray-800">

              <li>
                <Link to="/" className="hover:text-pink-500">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about-us" className="hover:text-pink-500">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact-us" className="hover:text-pink-500">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/faq" className="hover:text-pink-500">
                  FAQs
                </Link>
              </li>

              <li>
                <Link to="/careers" className="hover:text-pink-500">
                  Careers
                </Link>
              </li>

            </ul>
          </div>


          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Services</h4>

            <ul className="space-y-2 text-sm text-gray-800">

              <li>
                <Link to="/services/rn" className="hover:text-pink-500">
                  Registered Nurses
                </Link>
              </li>

              <li>
                <Link to="/services/lpn" className="hover:text-pink-500">
                  Licensed Practical Nurses
                </Link>
              </li>

              <li>
                <Link to="/services/gna" className="hover:text-pink-500">
                  GNA Services
                </Link>
              </li>

              <li>
                <Link to="/services/cna" className="hover:text-pink-500">
                  CNA Services
                </Link>
              </li>

              <li>
                <Link to="/services/ptot" className="hover:text-pink-500">
                  PT / OT
                </Link>
              </li>

            </ul>
          </div>


          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Contact</h4>

            <div className="space-y-3 text-sm text-gray-800">


              {/* Phone */}
              <a
                href="tel:2402748822"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <FaPhoneAlt className="text-pink-400" />
                240-274-8822
              </a>


              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=703+Rainbow+Ct+Edgewood+MD+21040"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 hover:text-pink-500 transition"
              >
                <FaMapMarkerAlt className="text-pink-400 mt-1" />

                <span>
                  703 Rainbow Ct,<br />
                  Edgewood, MD 21040
                </span>
              </a>

            </div>
          </div>


          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Connect</h4>

            <div className="flex gap-3 mb-6">

              <SocialIcon><FaFacebookF /></SocialIcon>
              <SocialIcon><FaInstagram /></SocialIcon>
              <SocialIcon><FaYoutube /></SocialIcon>
              <SocialIcon><FaLinkedinIn /></SocialIcon>

            </div>


            {/* Career Card */}
            <div className="bg-pink-400 rounded-xl p-4 text-white text-sm">

              <p className="font-semibold mb-1">
                Join Our Care Team
              </p>

              <p className="opacity-90">
                Build your healthcare career with us.
              </p>

              <Link
                to="/careers"
                className="inline-block mt-3 text-xs bg-white hover:bg-sky-500 text-pink-600 hover:text-white px-3 py-1 rounded-full font-medium"
              >
                Apply Now →
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="text-center text-sm mt-10 opacity-80">
        © {new Date().getFullYear()} Zenith Care Services LLC. All Rights Reserved.
      </div>

    </footer>
  );
}


/* Social Button */
function SocialIcon({ children }) {
  return (
    <div className="w-9 h-9 rounded-full border border-pink-400 text-pink-400 flex items-center justify-center hover:bg-pink-500 hover:text-white transition cursor-pointer">
      {children}
    </div>
  );
}
