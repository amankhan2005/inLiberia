 import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ShieldCheck,
  CalendarClock,
  ClipboardList,
  Crown,
  Users,
  ArrowRight,
} from "lucide-react";

/* ================= MANUAL IMAGE IMPORTS ================= */
import heroImg from "../../assets/private-pay/hero.png";
import introImg from "../../assets/private-pay/intro.jpg";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */

export default function PrivatePay() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Private-Pay Home Health Care"
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
              Premium Private-Pay Care Model
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Private-Pay <br /> Home Health Care Model
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              A flexible, transparent approach to high-touch in-home care —
              without insurance restrictions or limitations.
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
              alt="Personalized private pay care"
              loading="lazy"
            />

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900">
                Care Designed Around You — Not Insurance
              </h2>

              <p>
                Our private-pay model is built for families who value flexibility,
                personalization, and premium service quality. By eliminating
                insurance constraints, we design care plans that reflect real
                needs and goals.
              </p>

              <p>
                This model allows for longer visits, customized schedules, and
                enhanced services that are often unavailable through
                insurance-based care.
              </p>

              <p>
                Families benefit from transparency, continuity, and direct
                collaboration with our care team.
              </p>
            </div>
          </motion.div>

          {/* ================= BENEFITS ================= */}
          <div>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl font-bold text-gray-900 text-center mb-12"
            >
              Benefits of the Private-Pay Model
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "No Insurance Restrictions",
                  desc: "Care without approvals, caps, or coverage limitations.",
                },
                {
                  icon: ClipboardList,
                  title: "Fully Customized Care Plans",
                  desc: "Services tailored precisely to individual needs.",
                },
                {
                  icon: CalendarClock,
                  title: "Priority Scheduling",
                  desc: "Flexible scheduling and extended visit durations.",
                },
                {
                  icon: Crown,
                  title: "Premium Service Quality",
                  desc: "Higher continuity, consistency, and attention.",
                },
                {
                  icon: Users,
                  title: "Transparent Pricing",
                  desc: "Clear, upfront discussions with no hidden costs.",
                },
                {
                  icon: ShieldCheck,
                  title: "Care That Evolves",
                  desc: "Plans adjust as needs change over time.",
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
              Private-Pay – Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {[
                {
                  q: "Why choose private-pay care?",
                  a: "Private-pay allows greater flexibility, personalization, and higher service quality.",
                },
                {
                  q: "Is pricing transparent?",
                  a: "Yes. All pricing and services are discussed clearly upfront.",
                },
                {
                  q: "Can care plans change over time?",
                  a: "Absolutely. Care plans evolve as patient needs change.",
                },
                {
                  q: "Is private-pay short-term or long-term?",
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
