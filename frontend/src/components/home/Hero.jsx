 import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUserNurse, FaBriefcaseMedical } from "react-icons/fa";

import heroPerson from "../../assets/hero-main.png";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[85vh]
        md:min-h-[75vh]
        flex
        items-center
        bg-[#FFF3F7]
        overflow-hidden
        px-4 sm:px-6
      "
    >
      {/* Soft Pink Glow */}
      <div className="absolute right-10 md:right-32 top-20 md:top-32 w-[320px] sm:w-[420px] md:w-[520px] h-[320px] sm:h-[420px] md:h-[520px] bg-[#E85C9A]/30 rounded-full blur-[120px]" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">


        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
            w-full md:w-1/2
            flex flex-col
            justify-center
            items-center md:items-start
            text-center md:text-left
            space-y-6
          "
        >
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1F2933] leading-tight tracking-tight">

            Trusted

            <span className="block font-serif italic font-medium text-[#E85C9A] mt-1">
              In-Home Healthcare
            </span>

            <span className="block font-extrabold text-[#1F2933]">
              Services
            </span>

          </h1>


          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#1F2933] leading-relaxed max-w-xl px-2 md:px-0">

            Zenithcare provides professional nurses and therapists for
            home and hospital care. We deliver reliable, compassionate,
            and personalized healthcare services to ensure comfort,
            safety, and peace of mind for every family.

          </p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-2 justify-center md:justify-start w-full sm:w-auto">


            {/* Primary */}
            <Link to="/request-nurse" className="w-full sm:w-auto">

              <button
                className="
                  w-full sm:w-auto
                  flex items-center justify-center gap-2
                  bg-[#1FA6D9] text-white
                  px-7 sm:px-8 py-3
                  rounded-full
                  font-semibold
                  shadow-md
                  hover:bg-[#0B8EC2]
                  hover:scale-105
                  transition-all
                "
              >
                <FaUserNurse />
                Request a Nurse
              </button>

            </Link>


            {/* Secondary */}
            <Link to="/careers" className="w-full sm:w-auto">

              <button
                className="
                  w-full sm:w-auto
                  flex items-center justify-center gap-2
                  border-2 border-[#E85C9A]
                  text-[#E85C9A]
                  px-7 sm:px-8 py-3
                  rounded-full
                  font-semibold
                  hover:bg-pink-50
                  hover:scale-105
                  transition-all
                "
              >
                <FaBriefcaseMedical />
                Join Our Team
              </button>

            </Link>

          </div>

        </motion.div>



        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
            hidden md:flex
            relative
            w-full md:w-1/2
            justify-center
            items-end
          "
        >
          {/* Glow */}
          <div className="absolute w-[300px] sm:w-[380px] md:w-[480px] lg:w-[520px] h-[300px] sm:h-[380px] md:h-[480px] lg:h-[520px] bg-[#E85C9A]/25 rounded-full blur-[110px]" />


          {/* Image */}
          <img
            src={heroPerson}
            alt="Healthcare Professional"
            className="
              relative
              w-full
              max-w-md lg:max-w-lg xl:max-w-xl
              object-contain
            "
          />

        </motion.div>


      </div>
    </section>
  );
}
