 import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

import defaultLogo from "../assets/logo.jpeg";
import { useSettings } from "../context/SettingsContext";

export default function Footer() {
  const { settings } = useSettings();

  // -------- LOGO --------
  const logoUrl = defaultLogo;

  // -------- STATIC YOUTUBE --------
  const youtube = "https://www.youtube.com/";

  // -------- DEFAULT VALUES (UPDATED) --------
  const defaultEmail = "info@gentleheartshomehealthcare.com";
  const defaultPhone = "+1 (508) 873-5711";
  const defaultAddress =
    "231 Main Street, Cherry Valley, MA 01611, United States";

  const address = settings?.address || defaultAddress;
  const addressLink = `https://maps.google.com/?q=${encodeURIComponent(
    address
  )}`;

  const phone = settings?.phone || defaultPhone;
  const phoneHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;

  const email = settings?.email || defaultEmail;
  const cleanedEmail = email.replace(/(<([^>]+)>)/gi, "").trim();

  const facebook = settings?.facebook || "";
  const instagram = settings?.instagram || "";
  const twitter = settings?.twitter || settings?.x || "";
  const tiktok = settings?.tiktok || "";

  return (
    <footer className="bg-[#AF3059] text-white relative pt-24 pb-10">
      {/* TOP ACCENT */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/80" />

      {/* MAIN GRID */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-16">
        {/* LOGO + TAGLINE */}
        <div>
          <div className="inline-block mb-4">
            <img
              src={logoUrl}
              alt="Gentle Hearts Logo"
              className="w-32 rounded-2xl h-auto"
            />
          </div>

          <p className="text-sm text-white/85 leading-relaxed">
            Providing compassionate, private-pay in-home health care focused on
            dignity, trust, and clinical excellence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 relative inline-block after:block after:w-10 after:h-1 after:bg-white after:mt-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about-us" className="hover:text-white">About Us</a></li>
             <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/contact-us" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4 relative inline-block after:block after:w-10 after:h-1 after:bg-white after:mt-2">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li><a href="/services/stroke-recovery-neuro-rehab" className="hover:text-white">Stroke Recovery & Neuro-Rehab</a></li>
            <li><a href="/services/dementia-alzheimers-care" className="hover:text-white">Dementia & Alzheimer’s Care</a></li>
            <li><a href="/services/post-surgical-recovery" className="hover:text-white">Post-Surgical Recovery</a></li>
            <li><a href="/services/comprehensive-care-coordination" className="hover:text-white">Care Coordination</a></li>
            <li><a href="/services/concierge-add-ons" className="hover:text-white">Concierge & White-Glove Care</a></li>
            <li><a href="/services/private-pay-model" className="hover:text-white">Private-Pay Model</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 relative inline-block after:block after:w-10 after:h-1 after:bg-white after:mt-2">
            Contact
          </h3>

          <ul className="space-y-4 text-sm text-white/85">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-lg flex-shrink-0 mt-0.5" />
              <a
                href={addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {address}
              </a>
            </li>

            <li className="flex gap-3">
              <FaPhone className="text-lg scale-x-[-1] flex-shrink-0" />
              <a href={phoneHref} className="hover:text-white">
                {phone}
              </a>
            </li>

            <li className="flex gap-3">
              <FaRegEnvelope className="text-lg flex-shrink-0 mt-0.5" />
              <a
                href={`mailto:${cleanedEmail}`}
                className="hover:text-white"
              >
                {cleanedEmail}
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4 relative inline-block after:block after:w-10 after:h-1 after:bg-white after:mt-2">
            Follow Us
          </h3>

          <p className="text-sm text-white/85 mb-4">
            Updates, care insights, and community stories.
          </p>

          <div className="flex gap-3">
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059] transition">
                <FaFacebookF />
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059] transition">
                <FaInstagram />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059] transition">
                <FaTwitter />
              </a>
            )}
            {tiktok && (
              <a href={tiktok} target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059] transition">
                <SiTiktok />
              </a>
            )}
            {youtube && (
              <a href={youtube} target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-md hover:bg-white hover:text-[#AF3059] transition">
                <FaYoutube />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 mt-16 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Gentle Hearts Home Health Care Agency. All Rights Reserved.
        <br className="md:hidden" />
        Developed by{" "}
        <a
          href="https://www.webieapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-90"
        >
          WebieApp
        </a>
      </div>
    </footer>
  );
}
