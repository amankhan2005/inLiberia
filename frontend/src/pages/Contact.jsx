 import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSettings } from "../context/SettingsContext";

export default function ContactUs() {
  const { settings } = useSettings();

  const CONTACT_EMAIL = settings?.email || "info@gentlehearts.com";
  const CONTACT_PHONE = settings?.phone || "(571) 606-3898";
  const CONTACT_ADDRESS = settings?.address || "Massachusetts, USA";

  const MAP_LINK =
    settings?.mapLink ||
    `https://maps.google.com/?q=${encodeURIComponent(CONTACT_ADDRESS)}`;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /* ================= CAPTCHA ================= */
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captcha, setCaptcha] = useState("");
  const [captchaValid, setCaptchaValid] = useState(false);

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
  }, []);

  useEffect(() => {
    setCaptchaValid(Number(captcha) === num1 + num2);
  }, [captcha, num1, num2]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!captchaValid) return;

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const API_BASE =
        import.meta.env.VITE_API_URL || "https://decoderhealth-cfkr.onrender.com";

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setCaptcha("");
      setNum1(Math.floor(Math.random() * 9) + 1);
      setNum2(Math.floor(Math.random() * 9) + 1);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative overflow-hidden bg-[#FFF5F8] py-28">

      {/* SOFT GLOW */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#AF3059]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] bg-[#AF3059]/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex px-6 py-2 bg-[#AF3059]/10 text-[#AF3059] rounded-full text-sm font-semibold mb-6">
            Contact Gentle Hearts
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let’s Start a
            <span className="block text-[#AF3059]">Caring Conversation</span>
          </h1>

          <p className="text-lg text-gray-600">
            Our private-pay care team is here to support you with clarity and compassion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-14 items-start">

          {/* CONTACT INFO */}
          <div className="space-y-6">
            {[{
              icon: Mail,
              label: "Email",
              value: CONTACT_EMAIL,
              link: `mailto:${CONTACT_EMAIL}`,
            },{
              icon: Phone,
              label: "Phone",
              value: CONTACT_PHONE,
              link: `tel:${CONTACT_PHONE}`,
            },{
              icon: MapPin,
              label: "Location",
              value: CONTACT_ADDRESS,
              link: MAP_LINK,
            }].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  whileHover={{ y: -4 }}
                  href={item.link}
                  target={i === 2 ? "_blank" : undefined}
                  className="block bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#AF3059] rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-semibold text-gray-900">{item.value}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-10 border border-gray-200"
          >
            {success && (
              <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl">
                <CheckCircle className="w-6 h-6" />
                Message sent successfully.
              </div>
            )}

            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <input name="firstName" placeholder="First Name" required onChange={handleChange} className="input" />
                <input name="lastName" placeholder="Last Name" required onChange={handleChange} className="input" />
              </div>

              <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="input" />
              <input name="phone" placeholder="Phone" required onChange={handleChange} className="input" />
              <textarea name="message" rows="4" placeholder="Your Message" required onChange={handleChange} className="input resize-none" />

              {/* CAPTCHA */}
              <div className="bg-[#AF3059]/5 border border-[#AF3059]/20 rounded-xl p-5">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Security Check: {num1} + {num2} = ?
                </p>
                <input
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  placeholder="Enter answer"
                  className="input"
                />
              </div>

              {captchaValid && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3
                  bg-[#AF3059] text-white py-4 rounded-xl font-semibold
                  shadow-xl hover:scale-[1.02] transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </motion.button>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* INPUT STYLE */}
      <style>{`
        .input {
          width: 100%;
          border: 1px solid #E5E7EB;
          border-radius: 0.75rem;
          padding: 1rem;
          font-size: 0.95rem;
        }
        .input:focus {
          border-color: #AF3059;
          box-shadow: 0 0 0 3px rgba(175,48,89,0.15);
          outline: none;
        }
      `}</style>
    </main>
  );
}
