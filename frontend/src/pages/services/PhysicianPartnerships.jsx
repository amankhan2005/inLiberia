 import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Stethoscope,
  ClipboardCheck,
  ShieldCheck,
  Users,
  Activity,
  ArrowRight,
} from "lucide-react";

/* ================= MANUAL IMAGE IMPORTS ================= */
import heroImg from "../../assets/physician-partnerships/hero.png";
import introImg from "../../assets/physician-partnerships/intro.webp";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */

export default function PhysicianPartnerships() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Physician and Hospital Partnerships"
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
              <Stethoscope className="w-4 h-4" />
              Clinical Collaboration & Continuity
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Physician & <br /> Hospital Partnerships
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Collaborative partnerships that support continuity of care,
              aligned treatment plans, and smooth transitions from hospital to home.
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
              alt="Hospital discharge planning and coordination"
              loading="lazy"
            />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">
                Aligned Care Beyond Hospital Discharge
              </h2>

              <p>
                Strong collaboration between healthcare providers is essential
                for patient safety and successful outcomes. Gentle Hearts Home
                Health Care Agency partners closely with physicians, hospitals,
                and rehabilitation facilities.
              </p>

              <p>
                Our partnership model emphasizes timely communication, shared
                accountability, and physician-aligned care planning — reducing
                readmissions and improving recovery outcomes.
              </p>

              <p>
                Families benefit from clear communication, smoother transitions,
                and confidence that care continues seamlessly at home.
              </p>
            </div>
          </motion.div>

          {/* ================= PARTNERSHIP BENEFITS ================= */}
          <div>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
              Partnership Benefits
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Hospital Discharge Coordination",
                  desc: "Smooth planning and execution from hospital to home.",
                },
                {
                  icon: Stethoscope,
                  title: "Physician-Aligned Care Plans",
                  desc: "Care strategies developed in collaboration with physicians.",
                },
                {
                  icon: Activity,
                  title: "Outcome-Focused Monitoring",
                  desc: "Tracking progress and recovery milestones.",
                },
                {
                  icon: Users,
                  title: "Family Communication",
                  desc: "Transparent updates and collaborative planning.",
                },
                {
                  icon: ShieldCheck,
                  title: "Reduced Readmissions",
                  desc: "Proactive care coordination to prevent setbacks.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Shared Accountability",
                  desc: "Clear roles and responsibilities across care teams.",
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
              Physician Partnerships – Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {[
                {
                  q: "Do you work directly with hospitals and physicians?",
                  a: "Yes. We collaborate closely with hospitals, physicians, and rehabilitation facilities.",
                },
                {
                  q: "How is care coordinated after discharge?",
                  a: "Through shared communication, aligned care plans, and ongoing oversight.",
                },
                {
                  q: "Are families kept informed?",
                  a: "Absolutely. Transparency and communication are core priorities.",
                },
                {
                  q: "Does partnership reduce readmissions?",
                  a: "Yes. Coordinated transitions significantly reduce avoidable readmissions.",
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
