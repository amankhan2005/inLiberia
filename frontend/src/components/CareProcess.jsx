 import { motion } from "framer-motion";
import {
  CalendarCheck,
  ClipboardList,
  Stethoscope,
  FileText,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "Connect with our care team to discuss needs, goals, and eligibility for private-pay in-home care.",
    icon: CalendarCheck,
  },
  {
    step: "02",
    title: "Clinical Assessment",
    desc: "Our clinicians perform a comprehensive assessment covering medical, functional, and personal needs.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Care Plan Design",
    desc: "A personalized, physician-informed care plan is created for the patient’s condition and lifestyle.",
    icon: Stethoscope,
  },
  {
    step: "04",
    title: "In-Home Care Delivery",
    desc: "Highly trained caregivers deliver one-on-one care in the comfort and safety of home.",
    icon: FileText,
  },
  {
    step: "05",
    title: "Ongoing Monitoring",
    desc: "Care is continuously reviewed and adjusted to ensure comfort, safety, and optimal outcomes.",
    icon: HeartHandshake,
  },
];

const CareProcess = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
            
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D3951]">
            Our Care Process
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            A clear, compassionate journey designed to deliver exceptional
            in-home care — every step of the way.
          </p>
          <div className="w-20 h-1.5 bg-[#AF3059] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* DESKTOP TIMELINE */}
        <div className="hidden lg:block relative">
          {/* CONNECTING LINE */}
          <div className="absolute top-[52px] left-0 right-0 h-[2px] bg-gray-200" />

          <div className="grid grid-cols-5 gap-10 relative z-10">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.08, y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.12 }}
                className="text-center cursor-pointer group"
              >
                {/* ICON */}
                <div
                  className="
                    relative mx-auto w-20 h-20 rounded-full
                    bg-white border-2 border-[#AF3059]
                    flex items-center justify-center
                    shadow-md
                    transition-all duration-300
                    group-hover:shadow-[0_0_0_14px_rgba(175,48,89,0.08)]
                  "
                >
                  <item.icon className="w-8 h-8 text-[#AF3059]" />

                  {/* STEP NUMBER */}
                  <span
                    className="
                      absolute -top-3 -right-3 w-8 h-8
                      rounded-full bg-[#AF3059] text-white
                      text-sm font-bold flex items-center justify-center
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  >
                    {item.step}
                  </span>
                </div>

                {/* TEXT */}
                <h3 className="mt-6 font-bold text-lg text-[#0D3951] group-hover:text-[#AF3059] transition">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE STACK */}
        <div className="lg:hidden space-y-10">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="flex gap-5 items-start cursor-pointer group"
            >
              <div
                className="
                  relative min-w-[56px] h-14 rounded-full
                  bg-white border-2 border-[#AF3059]
                  flex items-center justify-center
                  shadow
                  transition-all duration-300
                  group-hover:shadow-[0_0_0_10px_rgba(175,48,89,0.08)]
                "
              >
                <item.icon className="w-6 h-6 text-[#AF3059]" />
                <span
                  className="
                    absolute -top-2 -right-2 w-6 h-6
                    rounded-full bg-[#AF3059] text-white
                    text-xs font-bold flex items-center justify-center
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  {item.step}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-[#0D3951] group-hover:text-[#AF3059] transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2 group-hover:text-slate-700 transition">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareProcess;
