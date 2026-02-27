 import Container from "./Container";
import logo from "../../assets/footer-logo.png";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronRight,
  // Changed FaXTwitter to FaTwitter for compatibility
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="bg-slate-900 text-gray-400 pt-16 pb-8">
      <Container>
        
        <div className="grid md:grid-cols-3 gap-12 mb-10">
          
          {/* BRAND */}
          <div>
            <div className="mb-4">
              <img
                src={logo}
                alt="inLiberia Logo"
                className="h-25 object-contain"
              />
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm text-base">
              Discover verified residential and commercial properties across Liberia with complete trust, transparency, and security.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-1 after:bg-[#144474] after:rounded-full">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-2 group">
                <FaChevronRight className="text-[#144474] text-xs transition-transform duration-300 group-hover:translate-x-1" />
                <a
                  href="/browse"
                  className="hover:text-white transition-colors duration-300"
                >
                  Browse Properties
                </a>
              </li>

              <li className="flex items-center gap-2 group">
                <FaChevronRight className="text-[#144474] text-xs transition-transform duration-300 group-hover:translate-x-1" />
                <a
                  href="/about-us"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>

              <li className="flex items-center gap-2 group">
                <FaChevronRight className="text-[#144474] text-xs transition-transform duration-300 group-hover:translate-x-1" />
                <a
                  href="/categories"
                  className="hover:text-white transition-colors duration-300"
                >
                  Categories
                </a>
              </li>
              
               <li className="flex items-center gap-2 group">
                <FaChevronRight className="text-[#144474] text-xs transition-transform duration-300 group-hover:translate-x-1" />
                <a
                  href="/helpdesk"
                  className="hover:text-white transition-colors duration-300"
                >
                  Support Team
                </a>
              </li>

              <li className="flex items-center gap-2 group">
                <FaChevronRight className="text-[#144474] text-xs transition-transform duration-300 group-hover:translate-x-1" />
                <a
                  href="/dashboard/add"
                  className="hover:text-white transition-colors duration-300"
                >
                  Post Property
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT & SOCIAL */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-1 after:bg-[#144474] after:rounded-full">
              Contact Us
            </h3>

            <div className="space-y-4 text-base">
              {/* EMAIL */}
              <a
                href="mailto:info@knowliberia.com"
                className="flex items-center gap-3 hover:text-white transition-colors duration-300 group"
              >
                <div className="p-2 bg-slate-800 rounded-lg text-[#144474] group-hover:bg-[#144474] group-hover:text-white transition-all duration-300">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <span>info@knowliberia.com</span>
              </a>
            </div>

            {/* SOCIAL LINKS SECTION */}
            <div className="mt-8">
              <p className="text-gray-500 text-sm mb-4">Follow us on social media</p>
              <div className="flex gap-3">
                
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/profile.php?id=61588604921029" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-[#144474] hover:bg-[#144474] hover:text-white transition-all duration-300"
                >
                  <FaFacebookF />
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/knowliberia/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-[#144474] hover:bg-[#144474] hover:text-white transition-all duration-300"
                >
                  <FaInstagram />
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/know-liberia-6b695b3b3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-[#144474] hover:bg-[#144474] hover:text-white transition-all duration-300"
                >
                  <FaLinkedinIn />
                </a>

                {/* Twitter (X) */}
                <a 
                  href="https://x.com/knowliberia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-[#144474] hover:bg-[#144474] hover:text-white transition-all duration-300"
                >
                  <FaTwitter />
                </a>

              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} inLiberia. All rights reserved.
            </p>

            <p className="text-gray-600">
              Design and developed by{" "}
              <a
                href="https://www.webieapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#144474] hover:text-blue-400 font-semibold transition-colors duration-300"
              >
                WebieApp
              </a>
            </p>
          </div>
        </div>

      </Container>
    </footer>
  );
}