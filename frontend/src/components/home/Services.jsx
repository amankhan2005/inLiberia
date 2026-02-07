 import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Manual Images
import rnImg from "../../assets/rn.jpg";
import lpnImg from "../../assets/lpn.jpg";
import gnaImg from "../../assets/gna.jpg";
import cnaImg from "../../assets/cna.jpg";
import ptImg from "../../assets/pt.jpg";
import homeImg from "../../assets/home.jpg";

export default function Services() {

  const services = [
    {
      title: "Registered Nurses (RN)",
      desc: "Advanced medical care and health monitoring at home and in hospitals.",
      img: rnImg,
      link: "/services/rn",
    },
    {
      title: "Licensed Practical Nurses (LPN)",
      desc: "Professional bedside care including medication and wound support.",
      img: lpnImg,
      link: "/services/lpn",
    },
    {
      title: "Graduate Nurse Assistant (GNA)",
      desc: "Specialized elderly care for daily living and mobility support.",
      img: gnaImg,
      link: "/services/gna",
    },
    {
      title: "Certified Nursing Assistants (CNA)",
      desc: "Compassionate personal care focused on comfort and recovery.",
      img: cnaImg,
      link: "/services/cna",
    },
    {
      title: "PT / OT Therapy",
      desc: "Rehabilitation to improve strength, mobility, and independence.",
      img: ptImg,
      link: "/services/ptot",
    },
    
    {
  title: "Contact Us",
  desc: "Get in touch with our care team for personalized healthcare support.",
img: homeImg,  link: "/contact-us",
},

  ];

  const [index, setIndex] = useState(0);

  const visibleCards = 3;
  const totalSlides = Math.ceil(services.length / visibleCards);

  /* Auto Scroll */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 3500);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="bg-[#FFF3F7] py-24">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="inline-block bg-pink-50 text-[#E85C9A] px-5 py-1 rounded-full text-sm font-medium mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            Professional{" "}
            <span className="font-serif italic font-medium">
              Healthcare Services
            </span>
          </h2>

          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Trusted nurses and therapists delivering quality care for every family.
          </p>

        </div>

        {/* Slider (No Buttons) */}
        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >

            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                key={i}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >

                {services
                  .slice(i * visibleCards, i * visibleCards + visibleCards)
                  .map((item, j) => (
                    <ServiceCard key={j} item={item} />
                  ))}

              </div>
            ))}

          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">

            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  index === i
                    ? "bg-[#E85C9A]"
                    : "bg-pink-200"
                }`}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

/* ================= Card ================= */

function ServiceCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">

      {/* Image */}
      <div className="p-4">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-52 object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="px-6 pb-6">

        <h3 className="text-base font-bold text-black mb-2">
          {item.title}
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          {item.desc}
        </p>

        <Link
          to={item.link}
          className="flex items-center gap-2 text-sm font-medium text-[#E85C9A] hover:underline"
        >
          Read More

          <span className="w-4 h-4 rounded-full bg-[#E85C9A] text-white flex items-center justify-center text-[10px]">
            →
          </span>
        </Link>

      </div>

    </div>
  );
}
