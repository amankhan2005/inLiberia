 import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function GetInTouch() {

  const API_BASE = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);


  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }


  async function handleSubmit(e) {

    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {

      await fetch(`${API_BASE}/api/enquiry`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),

      });


      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    }

    catch (err) {

      console.log(err);

    }

    finally {

      setLoading(false);

    }

  }



  return (

    <section className="py-20 bg-orange-200/80 relative">


      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">



        {/* LEFT CONTENT */}

        <div>


          <span className="text-sm font-semibold tracking-[5px] text-[#F39C6B] uppercase">
            Get In Touch
          </span>


          <h2 className="mt-6 text-5xl font-semibold text-gray-900 leading-tight">
            Need Immediate Mental Health Support?
          </h2>


          <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-lg">
            If you or your loved one is facing an urgent mental health concern,
            our experienced professionals are ready to provide guidance,
            reassurance, and compassionate care.
          </p>



      <div className="mt-12 space-y-6">


  {/* Emergency 911 */}
  <a href="tel:911" className="flex items-center gap-5 group">

    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-red-500 transition">

      <Phone className="text-red-500 group-hover:text-white" size={20} />

    </div>

    <span className="text-gray-900 text-lg group-hover:text-red-500 transition">
      Medical Emergency: Call 911
    </span>

  </a>



  {/* Mental Health Crisis 988 */}
  <a href="tel:988" className="flex items-center gap-5 group">

    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-orange-500 transition">

      <Phone className="text-orange-500 group-hover:text-white" size={20} />

    </div>

    <span className="text-gray-900 text-lg group-hover:text-orange-500 transition">
      Mental Health Crisis: Call or Text 988
    </span>

  </a>



  {/* Email */}
  <a href="mailto:careteam@dovehealthservices.com" className="flex items-center gap-5 group">

    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-[#F39C6B] transition">

      <Mail className="text-[#F39C6B] group-hover:text-white" size={20} />

    </div>

    <span className="text-gray-900 text-lg group-hover:text-[#F39C6B] transition">
      careteam@dovehealthservices.com
    </span>

  </a>



  {/* Address */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=2101+St+Paul+St+Baltimore+MD+21218"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-5 group"
  >

    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-[#F39C6B] transition">

      <MapPin className="text-[#F39C6B] group-hover:text-white" size={20} />

    </div>

    <span className="text-gray-900 text-lg group-hover:text-[#F39C6B] transition">
      2101 St Paul St, 1st FL Baltimore MD 21218
    </span>

  </a>



  {/* Legal Disclaimer */}
  <p className="text-sm text-gray-500 pt-4">
    If you are experiencing a medical emergency, call 911 immediately.  
    For mental health crisis support, call or text 988.
  </p>


</div>



        </div>



        {/* RIGHT GLASS FORM */}

        <div className="backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl rounded-3xl p-10">


          <h3 className="text-2xl font-semibold text-gray-900 mb-8">

            Request an Appointment

          </h3>



          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >


            <input

              name="name"

              value={form.name}

              onChange={handleChange}

              type="text"

              placeholder="Full Name"

              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F39C6B] focus:ring-2 focus:ring-[#F39C6B]/30 outline-none transition"

            />


            <input

              name="email"

              value={form.email}

              onChange={handleChange}

              type="email"

              placeholder="Email Address"

              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F39C6B] focus:ring-2 focus:ring-[#F39C6B]/30 outline-none transition"

            />


            <input

              name="phone"

              value={form.phone}

              onChange={handleChange}

              type="tel"

              placeholder="Phone Number"

              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F39C6B] focus:ring-2 focus:ring-[#F39C6B]/30 outline-none transition"

            />


            <textarea

              name="message"

              value={form.message}

              onChange={handleChange}

              placeholder="How can we help you?"

              rows="4"

              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F39C6B] focus:ring-2 focus:ring-[#F39C6B]/30 outline-none transition"

            ></textarea>



            <button

              disabled={loading}

              type="submit"

              className="w-full bg-[#F39C6B] hover:bg-orange-500 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition duration-300"

            >

              {loading ? "Sending..." : "Get Appointment"}

            </button>


          </form>


        </div>


      </div>


    </section>

  );

}
