 import {
  PhoneCall,
  Stethoscope,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function AboutGentleHearts() {
  const cards = [
    {
      icon: <Users className="w-7 h-7" />,
      title: "Trusted By",
      text:
        "Trusted by families, physicians, and premium elder-care partners across Massachusetts.",
    },
    {
      icon: <Stethoscope className="w-7 h-7" />,
      title: "Clinically Guided",
      text:
        "Physician-informed care plans aligned with best clinical practices and safety standards.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Private-Pay Model",
      text:
        "Transparent private-pay care with no insurance limitations — fully focused on client needs.",
    },
    {
      icon: <PhoneCall className="w-7 h-7" />,
      title: "Care Inquiries",
      text:
        "Speak directly with our care team to discuss personalized in-home care options.",
      call: true,
    },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Brand glow */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#AF3059]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -right-40 w-[420px] h-[420px] bg-[#0B3A6A]/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADING ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A6A] leading-tight">
            About Gentle Hearts Home Health Care
          </h2>

          <div className="w-20 h-1.5 bg-[#AF3059] mx-auto rounded-full mt-6" />

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Compassionate, private-pay in-home care designed with dignity,
            clinical excellence, and peace of mind.
          </p>
        </div>

        {/* ================= TEXT ================= */}
        <div className="mt-10 max-w-7xl mx-auto space-y-4 text-center text-slate-700 leading-relaxed">
          <p>
            <span className="font-semibold text-[#0B3A6A]">
              Gentle Hearts Home Health Care, LLC
            </span>{" "}
            is a Massachusetts-based private-pay agency delivering high-touch,
            personalized care in the comfort of home.
          </p>

          <p>
            Our philosophy is grounded in respect, thoughtful clinical guidance,
            and transparent collaboration with families and physicians.
          </p>

          <p className="font-medium text-[#0B3A6A]">
            We exist to provide confidence, comfort, and continuity at every
            stage of the care journey.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((item, index) => (
            <div
              key={index}
              className="
                group h-full rounded-2xl
                bg-white/80 backdrop-blur
                border border-slate-200
                p-7 flex flex-col
                shadow-md
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl
              "
            >
              {/* Icon */}
              <div className="mb-5 w-12 h-12 rounded-xl bg-[#0B3A6A]/10 flex items-center justify-center text-[#0B3A6A] group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Content */}
              <h4 className="text-lg font-semibold text-[#0B3A6A] mb-2">
                {item.title}
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {item.text}
              </p>

              {/* Call Button */}
              {item.call && (
                <a
                  href="tel:+15088735711"
                  className="
                    mt-6 inline-flex items-center justify-center gap-2
                    rounded-xl bg-[#AF3059]
                    px-4 py-3
                    text-sm font-semibold text-white
                    shadow-md
                    transition-all duration-300
                    hover:bg-[#922545] hover:shadow-lg
                    animate-pulse
                  "
                >
                  <PhoneCall className="w-4 h-4" />
                  Call Now
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
