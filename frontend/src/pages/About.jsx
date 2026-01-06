 import { motion } from "framer-motion";
import {
  HeartPulse,
  ShieldCheck,
  Users,
  Stethoscope,
  Target,
  HandHeart,
  Scale,
  Globe,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#AF3059] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="In Home Care"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white/15 text-sm font-semibold">
              About Gentle Hearts
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Compassionate, Private-Pay <br />
              Home Health Care <br />
              You Can Trust
            </h1>

            <p className="mt-6 text-lg text-white/90 max-w-xl">
              Gentle Hearts Home Health Care Agency delivers refined, private-pay
              in-home nursing and rehabilitation services designed around dignity,
              comfort, and clinical excellence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="px-8 py-4 rounded-full bg-white text-[#AF3059] font-semibold hover:scale-105 transition"
              >
                Request Private-Pay Consultation
              </NavLink>
              <NavLink
                to="/services"
                className="px-8 py-4 rounded-full border border-white font-semibold hover:bg-white hover:text-[#AF3059] transition"
              >
                Explore Our Services
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            src="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Compassionate Care"
            className="rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              Gentle Hearts Home Health Care Agency is a private-pay home health
              care provider serving individuals and families who seek a higher
              standard of in-home nursing and rehabilitation.
            </p>

            <p className="text-gray-600 mb-4">
              Our approach is rooted in respect, dignity, and thoughtful clinical
              decision-making. Exceptional care should feel personal, calm, and
              deeply human.
            </p>

            <p className="text-gray-600">
              Through close collaboration with families and physicians, we
              deliver care that aligns with medical needs, personal preferences,
              and long-term recovery goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VALUES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* MISSION */}
          <motion.div
            className="text-center max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Target className="w-12 h-12 mx-auto text-[#AF3059] mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              To provide dignified, compassionate, and clinically excellent
              private-pay home health care that supports healing, independence,
              and peace of mind — delivered in the comfort of home.
            </p>
          </motion.div>

          {/* VALUES */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: HandHeart,
                title: "Compassion",
                text: "Care delivered with empathy, patience, and genuine human connection.",
              },
              {
                icon: Stethoscope,
                title: "Clinical Excellence",
                text: "Evidence-based practices guided by physician collaboration.",
              },
              {
                icon: Scale,
                title: "Integrity",
                text: "Honest, transparent care built on trust and accountability.",
              },
              {
                icon: Globe,
                title: "Respect",
                text: "Honoring cultural values, personal preferences, and individual dignity.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-8 h-8 text-[#AF3059] mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          {[
            { icon: Users, title: "Trusted By", text: "Families, physicians, and premium care partners" },
            { icon: Stethoscope, title: "Clinically Guided", text: "Physician-informed care plans" },
            { icon: ShieldCheck, title: "Private-Pay Model", text: "Care without insurance limitations" },
            { icon: HeartPulse, title: "Care Inquiries", text: "Responsive care team support" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="w-10 h-10 mx-auto text-[#AF3059] mb-4" />
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
