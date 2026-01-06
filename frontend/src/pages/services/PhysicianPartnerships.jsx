import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function PhysicianPartnerships() {
  return (
    <div className="bg-white">

      <section className="relative bg-[#AF3059] text-white">
        <img
          src="https://images.pexels.com/photos/7680452/pexels-photo-7680452.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          alt="Physician Partnerships"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold">
            Physician & Hospital Partnerships
          </motion.h1>
          <p className="mt-6 text-lg max-w-2xl text-white/90">
            Collaborative partnerships that ensure continuity of care and
            smooth transitions from hospital to home.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
        <p>
          Strong collaboration between healthcare providers is essential for
          patient safety and successful outcomes. Gentle Hearts partners with
          physicians, hospitals, and rehabilitation facilities to ensure
          continuity of care beyond discharge.
        </p>

        <p>
          Our partnership model focuses on timely communication, aligned care
          planning, and shared accountability. This approach reduces readmissions,
          improves recovery outcomes, and supports families during transitions.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900">
          Partnership Benefits
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Hospital discharge coordination</li>
          <li>Physician-aligned care plans</li>
          <li>Outcome-focused monitoring</li>
          <li>Clear communication with families</li>
        </ul>

        <h3 className="text-3xl font-bold mt-12">Partnership FAQs</h3>
        <p><strong>Do you work directly with hospitals?</strong><br />
        Yes, we collaborate closely with healthcare partners.</p>

        <p><strong>How is care coordinated?</strong><br />
        Through shared communication and clinical alignment.</p>

        <p><strong>Are families kept informed?</strong><br />
        Absolutely. Transparency is a priority.</p>

        <NavLink to="/contact" className="inline-block mt-10 bg-[#AF3059] text-white px-10 py-4 rounded-full font-semibold">
          Request Consultation
        </NavLink>
      </section>
    </div>
  );
}
