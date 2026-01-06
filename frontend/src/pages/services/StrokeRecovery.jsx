 import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function StrokeRecovery() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative bg-[#AF3059] text-white">
        <img
          src="https://images.pexels.com/photos/4167547/pexels-photo-4167547.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Stroke Recovery & Neuro-Rehabilitation
          </motion.h1>
          <p className="mt-6 text-lg max-w-2xl text-white/90">
            Private-pay, physician-informed in-home rehabilitation focused on restoring
            independence, mobility, speech, and confidence after stroke or neurological injury.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-10">

          <motion.img
            src="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1200"
            className="rounded-3xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Stroke recovery is a deeply personal and complex journey that requires
              specialized, consistent, and compassionate care. At Gentle Hearts Home
              Health Care Agency, our Stroke Recovery & Neuro-Rehabilitation services
              are designed to support patients in regaining function, confidence,
              and quality of life — all within the comfort and familiarity of home.
            </p>

            <p>
              Our private-pay model allows us to deliver highly personalized,
              one-on-one rehabilitation without insurance restrictions. Care plans
              are thoughtfully designed in collaboration with physicians, therapists,
              and families to ensure clinical accuracy and meaningful progress.
            </p>

            <p>
              We focus on improving mobility, balance, speech, coordination, and
              cognitive function through structured, evidence-based techniques.
              Equally important, we understanding the emotional and psychological
              impact of stroke — providing encouragement, patience, and reassurance
              throughout recovery.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900">
              What Our Stroke Recovery Care Includes
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Physical, occupational, and speech rehabilitation support</li>
              <li>Mobility, balance, and strength training</li>
              <li>Neurological recovery-focused care planning</li>
              <li>Medication reminders and safety monitoring</li>
              <li>Caregiver education and home safety guidance</li>
              <li>Ongoing physician communication and progress tracking</li>
            </ul>

            <p>
              Our goal is not just physical recovery, but restoring independence,
              dignity, and confidence — helping patients move forward with clarity
              and peace of mind.
            </p>
          </div>

          {/* FAQ */}
          <div className="pt-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Stroke Recovery – Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              <p><strong>How soon after a stroke can home rehabilitation begin?</strong><br />
              Rehabilitation can often begin shortly after hospital discharge,
              depending on physician guidance and patient stability.</p>

              <p><strong>Is stroke recovery care customized?</strong><br />
              Yes. Every care plan is individualized based on medical condition,
              goals, and progress.</p>

              <p><strong>Do you coordinate with doctors?</strong><br />
              Absolutely. Our team works closely with physicians and therapists
              throughout the recovery process.</p>

              <p><strong>Is this service covered by insurance?</strong><br />
              Gentle Hearts provides private-pay services, allowing greater
              flexibility and personalization of care.</p>
            </div>
          </div>

          <NavLink
            to="/contact"
            className="inline-block mt-10 bg-[#AF3059] text-white px-10 py-4 rounded-full font-semibold"
          >
            Request Private-Pay Consultation
          </NavLink>

        </div>
      </section>
    </div>
  );
}
