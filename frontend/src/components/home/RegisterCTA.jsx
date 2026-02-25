 import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function RegisterCTA() {

  const { isAuthenticated, setRedirectAfterLogin } = useContext(AuthContext);

  const handleClick = () => {
    if (!isAuthenticated) {
      setRedirectAfterLogin("/dashboard/add");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="relative w-full bg-[#144474] text-white text-center rounded-3xl py-24 md:px-12 overflow-hidden shadow-2xl">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10">
          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            List Your Property.
            <span className="block text-blue-100 mt-2">
              Connect with Real Investors.
            </span>
          </h2>

          {/* SUB HEADING */}
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Publish your listing and start receiving verified investor interest today.
          </p>

          {/* BUTTON */}
          <Link
            to={isAuthenticated ? "/dashboard/add" : "/login"}
            onClick={handleClick}
            className="group inline-flex items-center gap-2 bg-white text-[#144474] font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isAuthenticated ? "Add Property" : "Get Started"}
            <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}