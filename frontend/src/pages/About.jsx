 import React from "react";
import {
  BuildingOffice2Icon,
  EyeIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-[#144474] to-[#0f345a] text-white pt-20 pb-32 px-6 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <SparklesIcon className="w-4 h-4 text-blue-200" />
            <span className="text-sm font-medium text-blue-100">Liberia's #1 Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">KnowLiberia</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            Empowering communities through technology. Discover properties, connect with businesses, and unlock opportunities across the nation.
          </p>
        </div>
      </section>

      {/* ================= FLOATING STATS BAR ================= */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 -mt-16 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="text-center md:px-4">
            <h3 className="text-3xl font-bold text-[#144474]">100%</h3>
            <p className="text-gray-500 text-sm mt-1">Local Focus</p>
          </div>
          <div className="text-center md:px-4">
            <h3 className="text-3xl font-bold text-[#144474]">Verified</h3>
            <p className="text-gray-500 text-sm mt-1">Listings & Businesses</p>
          </div>
          <div className="text-center md:px-4">
            <h3 className="text-3xl font-bold text-[#144474]">Trusted</h3>
            <p className="text-gray-500 text-sm mt-1">By Liberians</p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTIONS ================= */}
      <div className="max-w-6xl mx-auto px-6 space-y-20 pb-20">

        {/* Who We Are */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block bg-blue-100 text-[#144474] px-3 py-1 rounded-full text-sm font-semibold mb-4">Introduction</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              KnowLiberia.com is a modern digital platform tailored specifically for the Liberian market. We bridge the gap between technology and everyday needs.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Modeled after leading international property platforms, we’ve adapted our technology to fit the unique needs of local communities, ensuring everyone can access opportunities with ease.
            </p>
          </div>
          <div className="order-1 md:order-2 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-10 flex items-center justify-center h-80 shadow-inner">
            <BuildingOffice2Icon className="w-32 h-32 text-[#144474]/20" />
          </div>
        </section>

        {/* Mission & Vision (Side by Side) */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-100 group">
            <div className="w-12 h-12 bg-[#144474] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <EyeIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To make property and business discovery in Liberia simple, transparent, and accessible. We connect property owners, buyers, and businesses through one trusted ecosystem.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-100 group">
            <div className="w-12 h-12 bg-[#144474] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become Liberia’s most trusted online platform. We believe technology is the key to unlocking new opportunities and driving sustainable growth across the country.
            </p>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <ShieldCheckIcon className="w-16 h-16 text-blue-400 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Built on Trust
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Trust is our foundation. We are committed to providing reliable listings and helping users make informed decisions. Our goal is to create a platform that empowers people and supports Liberia’s growth.
              </p>
            </div>
            <div className="hidden md:block">
              {/* Decorative element or image could go here */}
            </div>
          </div>
        </section>

      </div>

      {/* ================= CONTACT SECTION ================= */}
      <section className="bg-white border-t border-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Have questions or suggestions? We'd love to hear from you.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
              <EnvelopeIcon className="w-8 h-8 text-[#144474] mx-auto mb-3" />
              <p className="font-semibold text-gray-900 mb-1">Email Us</p>
              <a href="mailto:info@knowliberia.com" className="text-[#144474] hover:underline">
                info@knowliberia.com
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
              <GlobeAltIcon className="w-8 h-8 text-[#144474] mx-auto mb-3" />
              <p className="font-semibold text-gray-900 mb-1">Website</p>
              <a href="https://www.knowliberia.com" target="_blank" rel="noreferrer" className="text-[#144474] hover:underline">
                www.knowliberia.com
              </a>
            </div>
          </div>
        </div>
      </section>

     

    </div>
  );
}