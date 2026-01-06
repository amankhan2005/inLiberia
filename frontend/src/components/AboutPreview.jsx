 import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ================= GENTLE HEARTS – HOME HERO ================= */

const GentleHeartsHero = () => {
  return (
    <section
      className="
        relative w-full
        bg-white
        overflow-hidden
      "
    >
      {/* SOFT PINK BRAND GLOW */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#AF3059]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] bg-[#AF3059]/5 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* BRAND BADGE */}
            <span
              className="
                inline-block mb-4 px-5 py-2 rounded-full
                text-sm font-semibold
                bg-[#AF3059]/10 text-[#AF3059]
              "
            >
              Private-Pay Home Health Care
            </span>

            {/* MAIN HEADING */}
            <h1
              className="
                text-4xl md:text-6xl font-extrabold
                leading-tight text-[#0D3951]
              "
            >
              Elite In-Home Nursing <br />
              and <span className="text-[#AF3059]">Rehabilitation</span> <br />
              in Massachusetts
            </h1>

            {/* SUBTEXT */}
            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              Private-pay, high-touch care for stroke recovery, dementia care,
              post-surgical recovery, and neuro-cardiac rehabilitation — delivered
              with dignity in the comfort of home.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5">

  {/* PRIMARY CTA – PULSE + SHINE + LIFT */}
  <motion.a
    href="/contact"
    className="
      relative overflow-hidden
      inline-flex items-center justify-center
      px-8 py-4 rounded-full
      text-white font-semibold
      bg-[#AF3059]
    "
    initial={{ boxShadow: "0px 10px 24px rgba(175,48,89,0.28)" }}
    animate={{
      boxShadow: [
        "0px 12px 28px rgba(175,48,89,0.30)",
        "0px 18px 40px rgba(175,48,89,0.45)",
        "0px 12px 28px rgba(175,48,89,0.30)",
      ],
    }}
    transition={{
      duration: 3.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.07,
      y: -4,
      boxShadow: "0px 22px 48px rgba(175,48,89,0.55)",
    }}
    whileTap={{ scale: 0.96 }}
  >
    {/* SHINE SWEEP */}
    <span
      className="
        pointer-events-none
        absolute inset-0
        -translate-x-full
        bg-gradient-to-r from-transparent via-white/35 to-transparent
        group-hover:translate-x-full
        transition-transform duration-700
      "
    />
    <span className="relative z-10">
      Request Private-Pay Consultation
    </span>
  </motion.a>

  {/* SECONDARY CTA – FLOAT + SOFT FILL */}
  <motion.a
    href="/services"
    className="
      relative overflow-hidden
      inline-flex items-center justify-center
      px-8 py-4 rounded-full
      font-semibold
      border-2 border-[#AF3059]
      text-[#AF3059]
      bg-transparent
    "
    whileHover={{
      y: -3,
      scale: 1.05,
    }}
    whileTap={{ scale: 0.96 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
  >
    {/* SOFT FILL */}
    <span className="absolute inset-0 bg-[#AF3059]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    <span className="relative z-10">
      View Our Services
    </span>
  </motion.a>

</div>

          </motion.div>

          {/* RIGHT VISUAL GRID */}
          <ShuffleGrid />
        </div>
      </div>
    </section>
  );
};

/* ================= IMAGE GRID ================= */

const squareData = [
  { id: 1, src: "https://images.unsplash.com/photo-1580281657521-6b3c5c99c7d2?q=80&w=800" },
  { id: 2, src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800" },
  { id: 3, src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800" },
  { id: 4, src: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800" },
  { id: 5, src: "https://images.unsplash.com/photo-1600959907703-c41f0a7c1f91?q=80&w=800" },
  { id: 6, src: "https://images.unsplash.com/photo-1580281657521-6b3c5c99c7d2?q=80&w=800" },
  { id: 7, src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800" },
  { id: 8, src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800" },
  { id: 9, src: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800" },
  { id: 10, src: "https://images.unsplash.com/photo-1600959907703-c41f0a7c1f91?q=80&w=800" },
  { id: 11, src: "https://images.unsplash.com/photo-1580281657521-6b3c5c99c7d2?q=80&w=800" },
  { id: 12, src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800" },
  { id: 13, src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800" },
  { id: 14, src: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800" },
  { id: 15, src: "https://images.unsplash.com/photo-1600959907703-c41f0a7c1f91?q=80&w=800" },
  { id: 16, src: "https://images.unsplash.com/photo-1580281657521-6b3c5c99c7d2?q=80&w=800" },
];

const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const generateSquares = () =>
  shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.4, type: "spring", damping: 22 }}
      className="w-full h-full rounded-xl ring-1 ring-[#AF3059]/20"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 4500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="
        grid grid-cols-4 grid-rows-4
        h-[420px] gap-2
        rounded-3xl overflow-hidden
        shadow-[0_30px_70px_rgba(175,48,89,0.25)]
      "
    >
      {squares}
    </motion.div>
  );
};

export default GentleHeartsHero;
