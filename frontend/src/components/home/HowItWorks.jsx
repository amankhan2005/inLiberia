 import Container from "../common/Container";
import {
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  EyeIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

export default function HowItWorks() {

  const steps = [
    {
      title: "Search & Discover",
      desc: "Search for any business, school, hospital, or residence across all 15 counties of Liberia.",
      icon: MagnifyingGlassIcon
    },
    {
      title: "Verified Information",
      desc: "Every listing is manually verified by our team within 24 hours for accuracy and authenticity.",
      icon: ShieldCheckIcon
    },
    {
      title: "Virtual Tours",
      desc: "Take virtual tours of hotels, restaurants, and properties before your visit to Liberia.",
      icon: EyeIcon
    },
    {
      title: "Connect with Confidence",
      desc: "Contact verified businesses directly with phone numbers, emails, and addresses you can trust.",
      icon: CheckCircleIcon
    }
  ];

  return (
    <section className="bg-slate-50 pt-24 pb-20 relative overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <Container>
        
        {/* HEADER */}
        <div className="text-center mb-20 relative z-10">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#144474] rounded-full text-sm font-bold tracking-wide mb-4">
            SIMPLE PROCESS
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Your Trusted Guide to
            <span className="text-[#144474]"> Liberia </span>
          </h2>
          
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Whether you're in the diaspora, an investor, or a tourist — we make connecting with Liberia simple and reliable.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 pt-12 text-center hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-100"
              >
                {/* CONNECTOR LINE */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-blue-100 -translate-x-1/2 z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-200 rounded-full"></div>
                  </div>
                )}

                {/* NUMBER BADGE */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#144474] w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg border-4 border-white">
                  {index + 1}
                </div>

                {/* ICON */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#144474]" />
                  </div>
                </div>

                {/* CONTENT */}
                <h3 className="font-bold text-xl text-gray-800 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}