import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function PrivatePay() {
  return (
    <div className="bg-white">

      <section className="relative bg-[#AF3059] text-white">
        <img
          src="https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          alt="Private Pay Care"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold">
            Private-Pay Home Health Care Model
          </motion.h1>
          <p className="mt-6 text-lg max-w-2xl text-white/90">
            A flexible, transparent approach to premium in-home care without
            insurance limitations.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
        <p>
          Our private-pay model is designed for families who value flexibility,
          personalization, and quality. By eliminating insurance constraints,
          we are able to design care plans that truly reflect patient needs and goals.
        </p>

        <p>
          Private-pay care allows for longer visits, customized schedules, and
          premium services that are often unavailable through traditional
          insurance-based models.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900">
          Benefits of the Private-Pay Model
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>No insurance restrictions or approvals</li>
          <li>Fully customized care plans</li>
          <li>Transparent pricing</li>
          <li>Priority scheduling</li>
          <li>Higher continuity of care</li>
        </ul>

        <h3 className="text-3xl font-bold mt-12">Private-Pay FAQs</h3>
        <p><strong>Why choose private-pay?</strong><br />
        It allows for greater flexibility and personalization.</p>

        <p><strong>Is pricing transparent?</strong><br />
        Yes, all costs are discussed upfront.</p>

        <p><strong>Can care change over time?</strong><br />
        Absolutely. Care plans evolve with patient needs.</p>

        <NavLink to="/contact" className="inline-block mt-10 bg-[#AF3059] text-white px-10 py-4 rounded-full font-semibold">
          Request Consultation
        </NavLink>
      </section>
    </div>
  );
}
