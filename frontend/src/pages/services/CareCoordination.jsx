 import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Stethoscope,
  ClipboardCheck,
  Users,
  ShieldCheck,
  Activity,
  ArrowRight,
} from "lucide-react";

/* ================= MANUAL IMAGE IMPORTS ================= */
import heroImg from "../../assets/care-coordination/hero.jpeg";
import introImg from "../../assets/care-coordination/intro.jpg";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */

export default function CareCoordination() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Comprehensive Care Coordination"
        />
        <div className="absolute inset-0 bg-[#AF3059]/80" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/15 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur">
              <ClipboardCheck className="w-4 h-4" />
              Integrated Care Management
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Comprehensive <br /> Care Coordination
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Seamless communication and oversight connecting physicians,
              caregivers, and families — ensuring every aspect of care works
              together smoothly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* IMAGE + INTRO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-14 items-center"
          >
            <img
              src={introImg}
              className="rounded-3xl shadow-2xl"
              alt="Coordinated Care at Home"
              loading="lazy"
            />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">
                Coordinated, Connected & Continuity-Focused Care
              </h2>

              <p>
                Care coordination ensures that medical, therapeutic, and daily
                care services work together without gaps or confusion. Gentle
                Hearts Home Health Care Agency serves as a central point of
                communication across all parties involved in care.
              </p>

              <p>
                Our care coordinators manage transitions from hospital to home,
                facilitate physician communication, and oversee ongoing care
                delivery — reducing stress for patients and families.
              </p>

              <p>
                This integrated approach improves safety, efficiency, and health
                outcomes while allowing families to focus on what matters most.
              </p>
            </div>
          </motion.div>

          {/* ================= WHAT'S INCLUDED ================= */}
          <div>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
              What Our Care Coordination Includes
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Stethoscope,
                  title: "Physician & Specialist Coordination",
                  desc: "Clear communication across all medical providers.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Hospital-to-Home Transitions",
                  desc: "Smooth discharge planning and home care setup.",
                },
                {
                  icon: ShieldCheck,
                  title: "Ongoing Care Oversight",
                  desc: "Monitoring care delivery and patient progress.",
                },
                {
                  icon: Users,
                  title: "Family Communication",
                  desc: "Consistent updates and collaborative planning.",
                },
                {
                  icon: Activity,
                  title: "Care Plan Management",
                  desc: "Alignment of services with medical goals.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Reduced Care Gaps",
                  desc: "Preventing miscommunication and delays.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#AF3059]/10 text-[#AF3059] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= FAQ ================= */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Care Coordination – Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {[
                {
                  q: "Who manages care communication?",
                  a: "A dedicated care coordinator serves as the central point of communication.",
                },
                {
                  q: "Do you work with existing doctors?",
                  a: "Yes. We collaborate closely with current physicians and specialists.",
                },
                {
                  q: "Is care coordination ongoing?",
                  a: "Yes. Oversight continues throughout the care period.",
                },
                {
                  q: "Does coordination reduce caregiver burden?",
                  a: "Absolutely. Centralized communication reduces stress and confusion.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
                >
                  <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CTA ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center pt-10"
          >
            <NavLink
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-[#AF3059] text-white px-10 py-5 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition"
            >
              Request Private-Pay Consultation
              <ArrowRight className="w-5 h-5" />
            </NavLink>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
