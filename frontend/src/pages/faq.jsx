 import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  HelpCircle,
  HeartPulse,
  Stethoscope,
  Home,
  ShieldCheck,
} from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      icon: HeartPulse,
      question: "What services does Gentle Hearts Home Health Care provide?",
      answer:
        "Gentle Hearts provides private-pay in-home nursing and rehabilitation services including stroke recovery, dementia and Alzheimer’s care, post-surgical recovery, care coordination, concierge services, and physician-led care partnerships.",
    },
    {
      icon: Home,
      question: "Do you provide care in the patient’s home?",
      answer:
        "Yes. All services are delivered in the comfort of the patient’s home. We believe healing and recovery are most effective in familiar, safe environments that support emotional well-being.",
    },
    {
      icon: Stethoscope,
      question: "How is care coordinated with physicians and hospitals?",
      answer:
        "Our care plans are physician-informed and coordinated with hospitals, specialists, and therapists to ensure continuity of care, especially during hospital-to-home transitions.",
    },
    {
      icon: ShieldCheck,
      question: "Is Gentle Hearts an insurance-based agency?",
      answer:
        "No. Gentle Hearts operates on a private-pay model. This allows us to provide highly personalized, flexible, and premium care without insurance limitations or restrictions.",
    },
    {
      icon: HeartPulse,
      question: "What makes your stroke recovery services different?",
      answer:
        "Our stroke recovery services focus on personalized neuro-rehabilitation, mobility, speech, and strength training, delivered through one-on-one, clinically guided in-home care.",
    },
    {
      icon: Home,
      question: "Do you offer dementia and Alzheimer’s care?",
      answer:
        "Yes. We provide compassionate dementia and Alzheimer’s care focused on safety, routine, dignity, and emotional comfort, helping patients remain in familiar surroundings.",
    },
    {
      icon: Stethoscope,
      question: "How soon can care begin after hospital discharge?",
      answer:
        "Care can often begin immediately after discharge, depending on physician recommendations and patient needs. Our team works quickly to ensure smooth transitions home.",
    },
    {
      icon: ShieldCheck,
      question: "Are families involved in the care process?",
      answer:
        "Absolutely. Families are actively involved through transparent communication, care planning, and regular updates to ensure peace of mind and trust.",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* HERO */}
      <section className="relative bg-[#AF3059] text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 max-w-3xl mx-auto"
          >
            Answers to common questions about our private-pay home health care
            services, hospital coordination, and personalized in-home support.
          </motion.p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-6">

          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#AF3059]/10 flex items-center justify-center">
                      <Icon className="text-[#AF3059]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-[#AF3059]"
                  >
                    <HelpCircle />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* SUPPORT CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Still Have Questions?
          </motion.h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our care team is here to help you understand your options and guide
            you through personalized in-home care solutions.
          </p>

          <a
            href="/contact-us"
            className="inline-block bg-[#AF3059] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Contact Our Care Team
          </a>
        </div>
      </section>

    </div>
  );
}
