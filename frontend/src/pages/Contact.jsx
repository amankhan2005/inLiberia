 import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSettings } from "../context/SettingsContext";

export default function ContactUs() {
  const { settings } = useSettings();

  /* ================= CONTACT DETAILS ================= */
  const CONTACT_EMAIL = settings?.email || "info@zenithcareservices.com";
  const CONTACT_PHONE = settings?.phone || "240-274-8822";
  const CONTACT_ADDRESS =
    settings?.address ||
    "703 Rainbow Ct, Edgewood, MD 21040";

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
    regenerateCaptcha();
  }, []);

  const regenerateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
    setCaptcha("");
    setCaptchaValid(false);
  };

  useEffect(() => {
    setCaptchaValid(Number(captcha) === num1 + num2);
  }, [captcha, num1, num2]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  /* ================= SUBMIT ================= */
  async function handleSubmit(e) {
    e.preventDefault();
    if (!captchaValid || loading) return;

    setLoading(true);
    setError("");
    setSuccess(false);

    const API_BASE =
      import.meta.env.VITE_API_URL ||
      "https://zenithcarebackend.onrender.com";

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      regenerateCaptcha();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-gradient-to-br from-pink-50 via-white to-blue-50 py-28 font-[Poppins]">


      <div className="max-w-7xl mx-auto px-4">


        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >

          <p className="text-pink-400 font-semibold mb-3 tracking-wide">
            Zenith Care Services
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-5 leading-tight">

            Get In{" "}
            <span className="italic font-serif text-blue-400">
              Touch
            </span>{" "}
            With Us

          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We’re here to support your healthcare needs with
            compassion, professionalism, and trusted nursing care.
          </p>

        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">


          {/* ================= INFO ================= */}
          <div className="space-y-6">


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
                <a
                  key={i}
                  href={item.link}
                  target={i === 2 ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition flex gap-4 items-center"
                >

                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-blue-400 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      {item.label}
                    </p>

                    <p className="text-sm font-medium text-gray-900">
                      {item.value}
                    </p>
                  </div>

                </a>
              );
            })}

          </div>


          {/* ================= FORM ================= */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-2xl border">


            {success && (
              <div className="mb-4 bg-green-50 text-green-700 p-3 rounded-lg flex items-center gap-2">
                <CheckCircle size={18} />
                Message sent successfully.
              </div>
            )}

            {error && (
              <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-lg">
                {error}
              </div>
            )}


            <form onSubmit={handleSubmit} className="space-y-5">


              <div className="grid sm:grid-cols-2 gap-4">

                <input
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  value={form.firstName}
                  className="input"
                />

                <input
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                  value={form.lastName}
                  className="input"
                />

              </div>


              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                value={form.email}
                className="input"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                value={form.phone}
                className="input"
              />


              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                required
                onChange={handleChange}
                value={form.message}
                className="input resize-none"
              />


              {/* CAPTCHA */}
              <div className="bg-pink-50 p-4 rounded-xl">

                <p className="text-sm font-semibold mb-2">
                  Security Check: {num1} + {num2} = ?
                </p>

                <input
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  className="input"
                />

              </div>


              {/* BUTTON */}
              <button
                disabled={!captchaValid || loading}
                className="w-full bg-blue-400 text-white py-4 rounded-xl font-semibold flex justify-center gap-2 hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>


      {/* INPUT STYLE */}
      <style>{`
        .input {
          width: 100%;
          border: 1px solid #E5E7EB;
          border-radius: 0.75rem;
          padding: 0.9rem 1rem;
          transition: all 0.2s ease;
          font-family: Poppins, sans-serif;
        }

        .input:focus {
          border-color: #f472b6;
          box-shadow: 0 0 0 2px rgba(244,114,182,0.25);
          outline: none;
        }
      `}</style>

    </main>
  );
}
