import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function PostSurgicalRecovery() {
  return (
    <div className="bg-white">
      <section className="relative bg-[#AF3059] text-white">
        <img
          src="https://images.pexels.com/photos/4386461/pexels-photo-4386461.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold">
            Post-Surgical Recovery
          </motion.h1>
          <p className="mt-6 text-lg max-w-2xl text-white/90">
            High-touch in-home nursing and recovery support following surgery.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-8 text-gray-700">
          <p>
            Recovering at home after surgery can significantly improve comfort,
            reduce complications, and support faster healing. Our post-surgical
            recovery services focus on safety, mobility, and physician-guided care.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Wound and incision monitoring</li>
            <li>Pain and medication management</li>
            <li>Mobility and strength support</li>
            <li>Physician communication</li>
          </ul>

          <h3 className="text-3xl font-bold mt-12">Post-Surgical FAQs</h3>
          <p><strong>How long is care needed?</strong><br />Care length varies by surgery and recovery.</p>
          <p><strong>Can care start immediately?</strong><br />Yes, often right after discharge.</p>

          <NavLink to="/contact" className="inline-block mt-10 bg-[#AF3059] text-white px-10 py-4 rounded-full font-semibold">
            Request Consultation
          </NavLink>
        </div>
      </section>
    </div>
  );
}
