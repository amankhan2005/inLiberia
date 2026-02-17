 import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Printer,
} from "lucide-react";

import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-14 pb-16">

        {/* LOGO + ABOUT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white p-3 rounded-xl shadow-md">
              <img src={logo} alt="Dove Logo" className="w-12" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Dove Healthcare
              </h3>
              <p className="text-xs tracking-widest text-white/80">
                SERVICES LLC
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-8 text-white/90">
            Trusted outpatient mental healthcare services providing OMHC,
            PRP, and counseling support with compassion and excellence.
          </p>

          {/* SOCIAL ICONS */}
           <div className="flex gap-4">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/DovehealthcareServices"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition"
  >
    <Facebook size={18} className="text-orange-500" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/dovehealthcaremd"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition"
  >
    <Instagram size={18} className="text-orange-500" />
  </a>

  {/* X */}
  <a
    href="https://x.com/dovehealth_md"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition"
  >
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 text-orange-500"
      fill="currentColor"
    >
      <path d="M18.901 1H22L14.62 9.21L23 23H16.42L11.09 15.62L4.9 23H1.8L9.69 14.07L1.7 1H8.42L13.24 7.7L18.901 1Z" />
    </svg>
  </a>

</div>

        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-orange-300 transition">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-orange-300 transition">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-orange-300 transition">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-orange-300 transition">FAQs</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-6">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services/omhc" className="hover:text-orange-300 transition">OMHC Services</Link></li>
            <li><Link to="/services/prp" className="hover:text-orange-300 transition">PRP Program</Link></li>
            <li><Link to="/services/family-counselling" className="hover:text-orange-300 transition">Family Counseling</Link></li>
            <li><Link to="/services/personal-counselling" className="hover:text-orange-300 transition">Personal Counseling</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
<div>
  <h4 className="font-semibold mb-6">Contact</h4>

  <div className="space-y-5 text-sm">

    {/* Phone */}
     <a
  href="tel:+14109882335"
  className="flex items-center gap-4 hover:text-orange-300 transition"
>
  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shrink-0">
    <Phone size={18} className="text-orange-500" />
  </div>

  <span>+1 (410) 988-2335</span>
</a>


    {/*fax */}
    <a
  href="fax:4105586722"
  className="flex items-center gap-4 hover:text-orange-300 transition min-w-0"
>
  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shrink-0">
    <Printer size={18} className="text-orange-500" />
  </div>

  <span className="whitespace-nowrap overflow-hidden text-ellipsis">
    Fax: 410-558-6722
  </span>
</a>


    {/* Email */}
   <a
  href="mailto:careteam@dovehealthservices.com"
  className="flex items-center gap-4 hover:text-orange-300 transition"
>
  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shrink-0">
    <Mail size={18} className="text-orange-500" />
  </div>

  <span className="whitespace-nowrap">
    careteam@dovehealthservices.com
  </span>
</a>


    {/* Address */}
    <a
      href="https://www.google.com/maps?q=2101+St+Paul+St,+Baltimore+MD+21218"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 hover:text-orange-300 transition"
    >
      <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shrink-0 mt-1">
        <MapPin size={18} className="text-orange-500" />
      </div>
      <span className="leading-relaxed">
        2101 St Paul St, 1st FL <br />
        Baltimore MD 21218
      </span>
    </a>

  </div>
</div>


      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/30 py-6 text-center text-sm text-white/90">
        <p>
          © {new Date().getFullYear()} Dove Healthcare Services. All Rights Reserved.
        </p>

        <p className="mt-2 text-white/70">
  Designed & Developed by{" "}
  <a
    href="https://www.webieapp.com"   // <-- yaha apna actual link daalna
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-orange-300 hover:text-orange-300 transition"
  >
    Webieapp
  </a>
</p>

      </div>

    </footer>
  );
}
