 import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Brain,
  HeartHandshake,
  ShieldCheck,
  Users,
  Activity,
  ArrowRight,
} from "lucide-react";

/* ================= MANUAL IMAGE IMPORTS ================= */
import heroImg from "../../assets/dementia/hero.webp";
import introImg from "../../assets/dementia/intro.jpg";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */

export default function DementiaCare() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Dementia & Alzheimer’s Care"
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
              <Brain className="w-4 h-4" />
              Memory-Focused In-Home Care
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Dementia & <br /> Alzheimer’s Care
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Compassionate, structured, and dignity-centered in-home care designed
              to support memory, safety, routine, and emotional well-being.
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
              alt="Calm Dementia Care at Home"
              loading="lazy"
            />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">
                Calm, Familiar & Respectful Dementia Care
              </h2>

              <p>
                Dementia and Alzheimer’s disease affect memory, behavior, and
                emotional stability. At Gentle Hearts Home Health Care Agency, we
                provide consistent and reassuring support within familiar
                surroundings.
              </p>

              <p>
                Maintaining routines and environment familiarity helps reduce
                confusion and anxiety. Our caregivers focus on safety, emotional
                reassurance, and dignity.
              </p>

              <p>
                We work closely with families to understand personal history,
                preferences, and triggers — ensuring care feels respectful and
                comforting.
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
              What Our Dementia Care Includes
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Memory & Routine Support",
                  desc: "Daily structure and guidance to support memory and familiarity.",
                },
                {
                  icon: ShieldCheck,
                  title: "Safety Monitoring",
                  desc: "Supervision to reduce risks and ensure a safe environment.",
                },
                {
                  icon: Activity,
                  title: "Cognitive Engagement",
                  desc: "Activities designed to stimulate cognition and connection.",
                },
                {
                  icon: HeartHandshake,
                  title: "Behavioral Support",
                  desc: "Calm reassurance and personalized behavioral strategies.",
                },
                {
                  icon: Users,
                  title: "Family Communication",
                  desc: "Ongoing updates, guidance, and collaborative care planning.",
                },
                {
                  icon: Brain,
                  title: "Flexible Care Plans",
                  desc: "Short-term or long-term care based on evolving needs.",
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
              Dementia Care – Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {[
                {
                  q: "Can dementia care be provided at home?",
                  a: "Yes. Home-based dementia care often improves comfort and emotional stability.",
                },
                {
                  q: "How do you manage behavioral changes?",
                  a: "Care is delivered with patience, routine, and personalized strategies.",
                },
                {
                  q: "Are families involved in care planning?",
                  a: "Absolutely. Families are actively included in care decisions.",
                },
                {
                  q: "Is dementia care long-term?",
                  a: "Care may be short-term or long-term depending on individual needs.",
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
