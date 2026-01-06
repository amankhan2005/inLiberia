 import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const services = [
  {
    title: "Stroke Recovery & Neuro-Rehabilitation",
    desc: "Specialized in-home rehabilitation focused on mobility, speech, strength, and neurological recovery.",
    img: "https://images.pexels.com/photos/4167547/pexels-photo-4167547.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/services/stroke-recovery-neuro-rehab",
  },
  {
    title: "Dementia & Alzheimer’s Care",
    desc: "Compassionate memory care supporting safety, routine, dignity, and cognitive engagement at home.",
    img: "https://images.pexels.com/photos/3396209/pexels-photo-3396209.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/services/dementia-alzheimers-care",
  },
  {
    title: "Post-Surgical Recovery",
    desc: "Short-term nursing and therapy support to ensure a safe, comfortable recovery after surgery.",
    img: "https://images.pexels.com/photos/4386461/pexels-photo-4386461.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/services/post-surgical-recovery",
  },
  {
    title: "Comprehensive Care Coordination",
    desc: "Seamless coordination between physicians, therapists, caregivers, and families.",
    img: "https://images.pexels.com/photos/3955370/pexels-photo-3955370.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/services/comprehensive-care-coordination",
  },
  {
    title: "Concierge & White-Glove Add-Ons",
    desc: "Premium support services including extended visits, lifestyle assistance, and family updates.",
    img: "https://images.pexels.com/photos/4860423/pexels-photo-4860423.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/services/concierge-add-ons",
  },
  {
    title: "Private-Pay Model",
    desc: "Flexible private-pay care for families seeking personalized, high-quality home health services.",
    img: "https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/services/private-pay-model",
  },
  {
    title: "Physician & Hospital Partnerships",
    desc: "Collaborative partnerships ensuring continuity of care and smooth transitions home.",
    img: "https://images.pexels.com/photos/7680452/pexels-photo-7680452.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/services/physician-hospital-partnerships",
  },
];

export default function ServicesCarousel() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir * sliderRef.current.offsetWidth * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A6A]">
            Our Home Health Care Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Private-pay, in-home nursing and rehabilitation services delivered
            with compassion, dignity, and clinical excellence.
          </p>
          <div className="w-24 h-1.5 bg-[#AF3059] mx-auto mt-6 rounded-full" />
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll(-1)}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center z-10"
          >
            <ChevronLeft className="text-[#0B3A6A]" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll(1)}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center z-10"
          >
            <ChevronRight className="text-[#0B3A6A]" />
          </button>

          {/* CARD LIST */}
          <div
            ref={sliderRef}
            className="services-scroll flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6"
          >
            {services.map((s, i) => (
              <div
                key={i}
                className="snap-start flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[32%]
                bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-56">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0B3A6A]/30" />
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    {s.title}
                  </h3>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col justify-between h-[220px]">
                  <p className="text-slate-600">{s.desc}</p>

                  <NavLink
                    to={s.link}
                    className="mt-6 inline-flex items-center justify-center gap-2
                    bg-[#AF3059] text-white font-semibold py-3 rounded-full
                    hover:bg-[#922949] transition"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔒 HIDE SCROLLBAR (ALL BROWSERS) */}
      <style>{`
        .services-scroll::-webkit-scrollbar {
          display: none;
        }
        .services-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
