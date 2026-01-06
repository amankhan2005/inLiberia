import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function ConciergeCare() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative bg-[#AF3059] text-white">
        <img
          src="https://images.pexels.com/photos/4860423/pexels-photo-4860423.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          alt="Concierge Care"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Concierge & White-Glove Add-On Services
          </motion.h1>
          <p className="mt-6 text-lg max-w-2xl text-white/90">
            Premium, personalized support services designed to elevate the
            in-home care experience with comfort, flexibility, and attention to detail.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
          <p>
            Our Concierge & White-Glove Add-On Services are designed for families
            seeking an elevated level of comfort, convenience, and personalized
            attention. These services complement our clinical care offerings,
            providing holistic support that goes beyond traditional home health care.
          </p>

          <p>
            From extended care visits to lifestyle assistance, our concierge
            services allow patients and families to focus on healing and peace of
            mind. Every detail is thoughtfully handled to reduce stress and
            enhance daily comfort.
          </p>

          <p>
            These services are ideal for individuals with complex needs,
            high expectations for service quality, or families who desire frequent
            updates and hands-on support.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900">
            Concierge Services May Include
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Extended visit durations for enhanced support</li>
            <li>Lifestyle and wellness assistance</li>
            <li>Transportation coordination</li>
            <li>Meal planning and daily activity support</li>
            <li>Frequent family communication and updates</li>
            <li>Customized schedules and flexible care plans</li>
          </ul>

          <p>
            By removing everyday burdens, our concierge services allow families
            to focus on meaningful time together while ensuring high-quality,
            attentive care at all times.
          </p>

          {/* FAQ */}
          <h3 className="text-3xl font-bold text-gray-900 mt-12">
            Concierge Care – FAQs
          </h3>

          <p><strong>What makes concierge care different?</strong><br />
          Concierge care offers extended, premium support beyond standard services.</p>

          <p><strong>Can concierge services be combined with nursing care?</strong><br />
          Yes, they are designed to complement clinical care.</p>

          <p><strong>Is scheduling flexible?</strong><br />
          Absolutely. Services are tailored to your preferences.</p>

          <p><strong>Is concierge care short-term or long-term?</strong><br />
          Both options are available depending on needs.</p>

          <NavLink
            to="/contact"
            className="inline-block mt-10 bg-[#AF3059] text-white px-10 py-4 rounded-full font-semibold"
          >
            Request Consultation
          </NavLink>
        </div>
      </section>
    </div>
  );
}
