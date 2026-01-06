 import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function DementiaCare() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative bg-[#AF3059] text-white">
        <img
          src="https://images.pexels.com/photos/3396209/pexels-photo-3396209.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold">
            Dementia & Alzheimer’s Care
          </motion.h1>
          <p className="mt-6 text-lg max-w-2xl text-white/90">
            Compassionate, memory-focused in-home care designed to support safety,
            routine, dignity, and emotional well-being.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
          <p>
            Dementia and Alzheimer’s disease affect not only memory, but also
            emotional stability, behavior, and daily functioning. At Gentle Hearts,
            our dementia care services are designed to provide calm, consistent,
            and respectful support within the comfort of home.
          </p>

          <p>
            Familiar surroundings play a critical role in reducing confusion and
            anxiety. Our caregivers help maintain routines that promote comfort,
            recognition, and a sense of control while supporting daily activities
            with patience and compassion.
          </p>

          <p>
            We work closely with families to understand personal history,
            preferences, and triggers. This allows us to deliver care that feels
            familiar, respectful, and emotionally reassuring.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900">
            Dementia Care Services Include
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Daily routine and memory support</li>
            <li>Safety supervision and monitoring</li>
            <li>Cognitive engagement activities</li>
            <li>Behavioral support and reassurance</li>
            <li>Family communication and guidance</li>
          </ul>

          {/* FAQ */}
          <h3 className="text-3xl font-bold text-gray-900 mt-12">
            Dementia Care – FAQs
          </h3>

          <p><strong>Can dementia care be provided at home?</strong><br />
          Yes. Home-based dementia care often improves comfort and reduces confusion.</p>

          <p><strong>How do you manage behavioral changes?</strong><br />
          Care is delivered with patience, routine, and personalized behavioral strategies.</p>

          <p><strong>Are families involved?</strong><br />
          Absolutely. Families are included in care planning and updates.</p>

          <p><strong>Is dementia care long-term?</strong><br />
          Care can be short-term or long-term depending on needs.</p>

          <NavLink to="/contact" className="inline-block mt-10 bg-[#AF3059] text-white px-10 py-4 rounded-full font-semibold">
            Request Consultation
          </NavLink>
        </div>
      </section>
    </div>
  );
}
