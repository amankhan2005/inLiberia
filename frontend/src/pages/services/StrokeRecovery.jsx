 import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Activity,
  Brain,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

/* ================= MANUAL IMAGE IMPORTS ================= */
 import heroImg from "../../assets/stroke/hero.webp";
import introImg from "../../assets/stroke/intro.jpg";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */

export default function StrokeRecovery() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Stroke Recovery Care"
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
              Specialized Neuro-Rehabilitation
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Stroke Recovery & <br /> Neuro-Rehabilitation
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Physician-informed, private-pay in-home rehabilitation designed to
              restore independence, confidence, and quality of life after stroke
              or neurological injury.
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
              alt="Personalized Stroke Recovery"
              loading="lazy"
            />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">
                Personalized Stroke Recovery at Home
              </h2>

              <p>
                Stroke recovery is a deeply personal journey that requires
                consistency, expertise, and compassion. At Gentle Hearts Home
                Health Care Agency, we deliver individualized rehabilitation
                within the comfort and familiarity of home.
              </p>

              <p>
                Our private-pay model removes insurance limitations — allowing
                one-on-one attention, flexible scheduling, and physician-aligned
                care plans tailored to meaningful recovery.
              </p>

              <p>
                We support not only physical rehabilitation, but emotional
                reassurance and confidence-building throughout the recovery
                process.
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
              What Our Stroke Recovery Care Includes
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Activity,
                  title: "Physical & Mobility Rehabilitation",
                  desc: "Strength, balance, coordination, and mobility-focused therapy.",
                },
                {
                  icon: Brain,
                  title: "Neurological Recovery Planning",
                  desc: "Care plans designed around stroke-specific neurological needs.",
                },
                {
                  icon: Stethoscope,
                  title: "Physician-Informed Care",
                  desc: "Ongoing coordination with doctors and therapists.",
                },
                {
                  icon: ShieldCheck,
                  title: "Medication & Safety Monitoring",
                  desc: "Medication reminders and home safety oversight.",
                },
                {
                  icon: HeartHandshake,
                  title: "Caregiver Education",
                  desc: "Guidance and education for family and caregivers.",
                },
                {
                  icon: Activity,
                  title: "Progress Tracking",
                  desc: "Regular assessments and recovery milestone reviews.",
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
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {[
                {
                  q: "How soon after a stroke can home rehabilitation begin?",
                  a: "Rehabilitation can often begin shortly after hospital discharge, depending on physician guidance and patient stability.",
                },
                {
                  q: "Is stroke recovery care customized?",
                  a: "Yes. Every care plan is personalized based on medical condition, goals, and recovery progress.",
                },
                {
                  q: "Do you coordinate with physicians?",
                  a: "Absolutely. Our team maintains active communication with doctors and therapists.",
                },
                {
                  q: "Is this service covered by insurance?",
                  a: "Gentle Hearts provides private-pay services, allowing greater flexibility and personalization.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
                >
                  <p className="font-semibold text-gray-900 mb-2">
                    {faq.q}
                  </p>
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
