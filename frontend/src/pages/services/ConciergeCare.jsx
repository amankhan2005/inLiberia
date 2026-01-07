 import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Crown,
  HeartHandshake,
  Users,
  CalendarClock,
  Utensils,
  ArrowRight,
} from "lucide-react";

/* ================= MANUAL IMAGE IMPORTS ================= */
import heroImg from "../../assets/concierge/hero.jpg";
import introImg from "../../assets/concierge/intro.webp";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */

export default function ConciergeCare() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Concierge & White-Glove Care"
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
              <Crown className="w-4 h-4" />
              Premium White-Glove Support
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Concierge & <br /> White-Glove Add-On Services
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Elevated, personalized in-home support designed to enhance comfort,
              flexibility, and peace of mind beyond traditional care.
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
              alt="Luxury in-home concierge care"
              loading="lazy"
            />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">
                Elevated Support Beyond Traditional Home Care
              </h2>

              <p>
                Our Concierge & White-Glove Add-On Services are designed for
                individuals and families seeking an exceptional level of comfort,
                convenience, and personal attention.
              </p>

              <p>
                These services complement our clinical offerings, allowing
                patients to focus on healing while we manage day-to-day details
                with discretion and care.
              </p>

              <p>
                Ideal for complex needs, high service expectations, or families
                who desire frequent updates and hands-on support.
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
              What Our Concierge Services Include
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CalendarClock,
                  title: "Extended Visit Durations",
                  desc: "Longer care visits for enhanced attention and comfort.",
                },
                {
                  icon: HeartHandshake,
                  title: "Lifestyle & Wellness Assistance",
                  desc: "Daily support tailored to personal routines and preferences.",
                },
                {
                  icon: Users,
                  title: "Transportation Coordination",
                  desc: "Assistance with appointments and essential travel.",
                },
                {
                  icon: Utensils,
                  title: "Meal Planning & Daily Support",
                  desc: "Nutrition-focused planning and everyday assistance.",
                },
                {
                  icon: Crown,
                  title: "Customized Schedules",
                  desc: "Flexible care plans aligned with your lifestyle.",
                },
                {
                  icon: Users,
                  title: "Frequent Family Updates",
                  desc: "Clear, consistent communication and updates.",
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
              Concierge Care – Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {[
                {
                  q: "What makes concierge care different?",
                  a: "Concierge care provides extended, premium support beyond standard home care services.",
                },
                {
                  q: "Can concierge services be combined with nursing care?",
                  a: "Yes. These services are designed to complement clinical and nursing care.",
                },
                {
                  q: "Is scheduling flexible?",
                  a: "Absolutely. Concierge services are fully customized to individual preferences.",
                },
                {
                  q: "Is concierge care short-term or long-term?",
                  a: "Both options are available depending on care needs.",
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
