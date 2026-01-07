 import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSettings } from "../context/SettingsContext";

export default function ContactUs() {
  const { settings } = useSettings();

  /* ================= CONTACT DETAILS ================= */
  const CONTACT_EMAIL =
    settings?.email || "info@gentleheartshomehealthcare.com";

  const CONTACT_PHONE =
    settings?.phone || "+1 (508) 873-5711";

  const CONTACT_ADDRESS =
    settings?.address ||
    "231 Main Street, Cherry Valley, MA 01611, United States";

  const MAP_LINK =
    settings?.mapLink ||
    `https://maps.google.com/?q=${encodeURIComponent(CONTACT_ADDRESS)}`;

  const phoneHref = `tel:${CONTACT_PHONE.replace(/[^0-9+]/g, "")}`;

  /* ================= FORM STATE ================= */
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
        import.meta.env.VITE_API_URL || "http://localhost:5000";

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

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
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative bg-[#FFF5F8] py-20 sm:py-28 overflow-x-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[#AF3059]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -right-40 w-[420px] h-[420px] bg-[#AF3059]/10 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <span className="inline-block px-5 py-2 bg-[#AF3059]/10 text-[#AF3059] rounded-full text-xs sm:text-sm font-semibold mb-5">
            Contact Gentle Hearts
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let’s Start a
            <span className="block text-[#AF3059]">
              Caring Conversation
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600">
            Our private-pay care team is here to help with clarity and compassion.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 items-start">
          {/* ================= CONTACT INFO ================= */}
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                label: "Email",
                value: CONTACT_EMAIL,
                link: `mailto:${CONTACT_EMAIL}`,
              },
              {
                icon: Phone,
                label: "Phone",
                value: CONTACT_PHONE,
                link: phoneHref,
              },
              {
                icon: MapPin,
                label: "Location",
                value: CONTACT_ADDRESS,
                link: MAP_LINK,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  whileHover={{ y: -3 }}
                  href={item.link}
                  target={i === 2 ? "_blank" : undefined}
                  rel={i === 2 ? "noopener noreferrer" : undefined}
                  className="
                    relative
                    w-full
                    bg-white
                    rounded-2xl
                    border border-gray-200
                    shadow-md
                    overflow-hidden
                  "
                >
                  <div className="flex items-start gap-4 p-5 sm:p-6">
                    <div className="flex-shrink-0 w-11 h-11 bg-[#AF3059] rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 mb-1">
                        {item.label}
                      </p>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              lg:col-span-2
              bg-white
              rounded-3xl
              shadow-2xl
              p-6 sm:p-8 md:p-10
              border border-gray-200
              w-full
            "
          >
            {success && (
              <div className="mb-5 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
                <CheckCircle className="w-5 h-5" />
                Message sent successfully.
              </div>
            )}

            {error && (
              <div className="mb-5 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  className="input"
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
                className="input"
              />

              <input
                name="phone"
                placeholder="Phone"
                required
                onChange={handleChange}
                className="input"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                onChange={handleChange}
                className="input resize-none"
              />

              {/* CAPTCHA */}
              <div className="bg-[#AF3059]/5 border border-[#AF3059]/20 rounded-xl p-4">
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
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    flex items-center justify-center gap-3
                    bg-[#AF3059]
                    text-white
                    py-4
                    rounded-xl
                    font-semibold
                    shadow-lg
                    hover:opacity-90
                    transition
                  "
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </motion.button>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* ================= INPUT STYLE ================= */}
      <style>{`
        .input {
          width: 100%;
          border: 1px solid #E5E7EB;
          border-radius: 0.75rem;
          padding: 0.9rem 1rem;
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
