import { NavLink } from "react-router-dom";

export default function CareCoordination() {
  return (
    <div className="bg-white">
      <section className="bg-[#AF3059] text-white py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
          Comprehensive Care Coordination
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg">
          Seamless communication between physicians, caregivers, and families.
        </p>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-6 space-y-8 text-gray-700">
        <p>
          Care coordination ensures every aspect of care works together smoothly.
          Our team acts as a central point of communication to reduce confusion
          and improve outcomes.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Physician & specialist coordination</li>
          <li>Hospital-to-home transitions</li>
          <li>Ongoing care oversight</li>
        </ul>

        <h3 className="text-3xl font-bold mt-12">Care Coordination FAQs</h3>
        <p><strong>Who manages communication?</strong><br />Our dedicated care coordinators.</p>

        <NavLink to="/contact" className="inline-block mt-10 bg-[#AF3059] text-white px-10 py-4 rounded-full font-semibold">
          Request Consultation
        </NavLink>
      </section>
    </div>
  );
}
