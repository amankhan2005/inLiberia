 import { motion } from "framer-motion";

/* ================= MANUAL IMAGE IMPORTS ================= */
/* Folder: src/assets/why/ */
import personalizedImg from "../assets/why/personalized.webp";
import nursingImg from "../assets/why/nursing.webp";
import familyImg from "../assets/why/family.webp";
import evidenceImg from "../assets/why/evidence.jpg";
import cultureImg from "../assets/why/culture.jpg";

/* ================= DATA ================= */

const points = [
  {
    title: "Personalized Care Plans",
    desc: "Every care plan is thoughtfully customized around the patient’s medical needs, lifestyle, and personal goals. We believe no two patients are the same, and care should reflect that.",
    image: personalizedImg,
  },
  {
    title: "Highly Trained Nursing Staff",
    desc: "Our care team consists of licensed, experienced, and clinically guided professionals who deliver compassionate, one-on-one care with the highest standards of safety and expertise.",
    image: nursingImg,
  },
  {
    title: "Family-Centered Approach",
    desc: "We work closely with families to ensure transparency, comfort, and peace of mind throughout the care journey. Communication and trust are at the heart of everything we do.",
    image: familyImg,
  },
  {
    title: "Evidence-Based Practices",
    desc: "Our care decisions are guided by proven clinical standards and physician-led protocols, ensuring safe, effective, and outcome-driven care in every situation.",
    image: evidenceImg,
  },
  {
    title: "Cultural Sensitivity & Respect",
    desc: "We honor cultural values, traditions, and individual preferences, creating care experiences that are respectful, dignified, and deeply personal.",
    image: cultureImg,
  },
];

/* ================= COMPONENT ================= */

export default function WhyGentleHearts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-28">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D3951]">
            Why Gentle Hearts?
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            A refined approach to in-home nursing and rehabilitation — centered
            on compassion, clinical excellence, and human dignity.
          </p>
          <div className="w-20 h-1.5 bg-[#AF3059] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* CONTENT */}
        {points.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-14 items-center"
          >
            {/* IMAGE */}
            <div className={i % 2 !== 0 ? "md:order-2" : ""}>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-[380px] object-cover rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-3xl font-bold text-[#0D3951]">
                {item.title}
              </h3>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
