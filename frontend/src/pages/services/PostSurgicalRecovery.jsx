 import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Stethoscope,
  ShieldCheck,
  Activity,
  HeartHandshake,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

/* ================= MANUAL IMAGE IMPORTS ================= */
import heroImg from "../../assets/post-surgical/hero.webp";
import introImg from "../../assets/post-surgical/intro.webp";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */

export default function PostSurgicalRecovery() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Post-Surgical Recovery Care"
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
              Physician-Guided Recovery Care
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Post-Surgical <br /> Recovery Care
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              High-touch, private-pay in-home nursing and recovery support
              designed to promote safe healing, comfort, and confidence after surgery.
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
              alt="Safe Recovery at Home"
              loading="lazy"
            />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">
                Safe, Supported Recovery at Home
              </h2>

              <p>
                Recovering at home after surgery can improve comfort, reduce
                complications, and support faster healing. Gentle Hearts Home
                Health Care Agency provides attentive, physician-guided recovery
                care tailored to each patient.
              </p>

              <p>
                Our private-pay model allows one-on-one attention, consistent
                monitoring, and flexible care schedules without insurance
                limitations.
              </p>

              <p>
                We focus on mobility, pain management, wound care, and emotional
                reassurance — helping patients heal with confidence.
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
              What Our Post-Surgical Recovery Includes
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ClipboardList,
                  title: "Wound & Incision Monitoring",
                  desc: "Careful observation to support proper healing and prevent complications.",
                },
                {
                  icon: ShieldCheck,
                  title: "Pain & Medication Management",
                  desc: "Medication reminders and comfort-focused support.",
                },
                {
                  icon: Activity,
                  title: "Mobility & Strength Support",
                  desc: "Assistance with movement to promote safe recovery.",
                },
                {
                  icon: Stethoscope,
                  title: "Physician Communication",
                  desc: "Ongoing coordination with surgeons and medical teams.",
                },
                {
                  icon: HeartHandshake,
                  title: "Emotional & Practical Support",
                  desc: "Reassurance, encouragement, and daily assistance.",
                },
                {
                  icon: Activity,
                  title: "Flexible Recovery Plans",
                  desc: "Short-term or extended care based on surgical needs.",
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
              Post-Surgical Recovery – Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {[
                {
                  q: "How long is post-surgical care needed?",
                  a: "Care duration varies depending on surgery type and recovery progress.",
                },
                {
                  q: "Can care begin immediately after discharge?",
                  a: "Yes. In many cases, care can begin as soon as the patient returns home.",
                },
                {
                  q: "Do you coordinate with surgeons?",
                  a: "Absolutely. Our team works closely with physicians and surgical teams.",
                },
                {
                  q: "Is this service short-term?",
                  a: "Care may be short-term or extended based on medical needs.",
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
