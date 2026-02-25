 

//  import { useState, useEffect } from "react";
// import API from "../../services/api";

// import {
// EnvelopeIcon,
// PhoneIcon,
// PaperAirplaneIcon,
// XMarkIcon,
// CheckCircleIcon,
// ExclamationCircleIcon
// } from "@heroicons/react/24/outline";


// export default function ContactCard({ listing }) {

// const [open, setOpen] = useState(false);

// const [loading, setLoading] = useState(false);


// /* NEW STATE */

// const [alert, setAlert] = useState(null);



// const [form, setForm] = useState({

// visitorName: "",
// visitorEmail: "",
// subject: "",
// message: ""

// });



// /* AUTO CLOSE ALERT */

// useEffect(()=>{

// if(alert){

// const timer = setTimeout(()=>setAlert(null),3000);

// return ()=>clearTimeout(timer);

// }

// },[alert]);



// const handleChange = (e) => {

// setForm({

// ...form,
// [e.target.name]: e.target.value

// });

// };



// const validateEmail = (email) => {

// return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// };



// const handleSend = async () => {


// if (

// !form.visitorName ||

// !form.visitorEmail ||

// !form.subject ||

// !form.message

// ){

// setAlert({

// type:"error",

// message:"Please fill all fields"

// });

// return;

// }



// if (!validateEmail(form.visitorEmail)){

// setAlert({

// type:"error",

// message:"Enter valid email"

// });

// return;

// }



// setLoading(true);


// try {

// await API.post("/contact", {

// ownerEmail: listing.contactEmail,

// visitorName: form.visitorName,

// visitorEmail: form.visitorEmail,

// subject: form.subject,

// message: form.message,

// listingTitle: listing.title,

// listingId: listing._id,

// });


// setAlert({

// type:"success",

// message:"Enquiry sent successfully"

// });


// setOpen(false);


// setForm({

// visitorName: "",
// visitorEmail: "",
// subject: "",
// message: ""

// });


// }

// catch {


// setAlert({

// type:"error",

// message:"Failed to send enquiry"

// });

// }


// setLoading(false);

// };




// return (

// <>


// {/* CONTACT CARD */}

// <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6">

// <h3 className="font-bold mb-4">

// Contact Owner

// </h3>


// <p className="flex gap-2 items-center text-gray-600">

// <EnvelopeIcon className="w-5 text-green-600"/>

// {listing.contactEmail}

// </p>


// <p className="flex gap-2 items-center text-gray-600 mt-2">

// <PhoneIcon className="w-5 text-green-600"/>

// {listing.contactPhone}

// </p>



// <button

// onClick={() => setOpen(true)}

// className="

// mt-5 w-full

// bg-gradient-to-r

// from-green-600 to-green-500

// hover:to-green-600

// text-white

// py-3

// rounded-xl

// font-semibold

// flex justify-center gap-2

// "

// >

// <PaperAirplaneIcon className="w-5"/>

// Send Enquiry

// </button>


// </div>





// {/* FORM MODAL */}

// {open && (

// <div

// className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"

// onClick={()=>setOpen(false)}

// >

// <div

// className="bg-white p-6 rounded-2xl w-full max-w-md"

// onClick={(e)=>e.stopPropagation()}

// >


// <h2 className="text-xl font-bold mb-4">

// Send Enquiry

// </h2>



// <input

// name="visitorName"

// value={form.visitorName}

// onChange={handleChange}

// placeholder="Your Name"

// className="w-full border p-3 mb-3 rounded-lg"

// />


// <input

// name="visitorEmail"

// value={form.visitorEmail}

// onChange={handleChange}

// placeholder="Your Email"

// className="w-full border p-3 mb-3 rounded-lg"

// />


// <input

// name="subject"

// value={form.subject}

// onChange={handleChange}

// placeholder="Subject"

// className="w-full border p-3 mb-3 rounded-lg"

// />



// <textarea

// name="message"

// value={form.message}

// onChange={handleChange}

// placeholder="Message"

// rows="4"

// className="w-full border p-3 mb-4 rounded-lg"

// />



// <button

// onClick={handleSend}

// disabled={loading}

// className="w-full bg-green-600 text-white py-3 rounded-lg"

// >

// {loading ? "Sending..." : "Send Message"}

// </button>



// </div>

// </div>

// )}





// {/* PREMIUM ALERT MODAL */}

// {alert && (

// <div className="

// fixed top-6 right-6

// bg-white

// border border-gray-200

// shadow-xl

// rounded-xl

// px-5 py-4

// flex items-center gap-3

// z-[999]

// ">


// {alert.type === "success" ? (

// <CheckCircleIcon className="w-6 text-green-500"/>

// ) : (

// <ExclamationCircleIcon className="w-6 text-green-500"/>

// )}



// <p className="font-medium">

// {alert.message}

// </p>



// <button onClick={()=>setAlert(null)}>

// <XMarkIcon className="w-5 text-gray-400"/>

// </button>


// </div>

// )}



// </>

// );

// }

import { useState, useEffect } from "react";
import API from "../../services/api";

import {
  EnvelopeIcon,
  PhoneIcon,
  PaperAirplaneIcon,
  XMarkIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from "@heroicons/react/24/outline";

export default function ContactCard({ listing }) {

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  /* NEW STATE */
  const [alert, setAlert] = useState(null);

  const [form, setForm] = useState({
    visitorName: "",
    visitorEmail: "",
    subject: "",
    message: ""
  });

  /* AUTO CLOSE ALERT */
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSend = async () => {

    if (
      !form.visitorName ||
      !form.visitorEmail ||
      !form.subject ||
      !form.message
    ) {
      setAlert({
        type: "error",
        message: "Please fill all fields"
      });
      return;
    }

    if (!validateEmail(form.visitorEmail)) {
      setAlert({
        type: "error",
        message: "Enter valid email"
      });
      return;
    }

    setLoading(true);

    try {
      await API.post("/contact", {
        ownerEmail: listing.contactEmail,
        visitorName: form.visitorName,
        visitorEmail: form.visitorEmail,
        subject: form.subject,
        message: form.message,
        listingTitle: listing.title,
        listingId: listing._id,
      });

      setAlert({
        type: "success",
        message: "Enquiry sent successfully"
      });

      setOpen(false);

      setForm({
        visitorName: "",
        visitorEmail: "",
        subject: "",
        message: ""
      });

    }
    catch {
      setAlert({
        type: "error",
        message: "Failed to send enquiry"
      });
    }

    setLoading(false);
  };

  return (
    <>
      {/* CONTACT CARD */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 relative overflow-hidden">
        
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <h3 className="text-xl font-bold text-gray-900 mb-6 relative z-10">
          Contact Owner
        </h3>

        <div className="space-y-4 mb-8 relative z-10">
          {/* Email */}
          <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
            <div className="bg-[#144474] p-2 rounded-lg">
              <EnvelopeIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-700 font-medium truncate">{listing.contactEmail}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
            <div className="bg-[#144474] p-2 rounded-lg">
              <PhoneIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-700 font-medium">{listing.contactPhone}</span>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="
            w-full 
            bg-[#144474] 
            hover:bg-[#0f345a] 
            text-white 
            py-3.5 
            rounded-xl 
            font-semibold 
            flex justify-center items-center gap-2 
            transition-all 
            duration-300 
            shadow-lg 
            hover:shadow-xl
            group
          "
        >
          <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
          Send Enquiry
        </button>
      </div>

      {/* FORM MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden transform transition-all scale-95 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#144474] px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Send Enquiry</h2>
              <button 
                onClick={() => setOpen(false)} 
                className="text-white/70 hover:text-white transition p-1 hover:bg-white/10 rounded-full"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <input
                name="visitorName"
                value={form.visitorName}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition"
              />

              <input
                name="visitorEmail"
                value={form.visitorEmail}
                onChange={handleChange}
                placeholder="Your Email"
                type="email"
                className="w-full border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition"
              />

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message..."
                rows="4"
                className="w-full border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition resize-none"
              />

              <button
                onClick={handleSend}
                disabled={loading}
                className="w-full bg-[#144474] hover:bg-[#0f345a] disabled:bg-gray-400 text-white py-3.5 rounded-xl font-semibold transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <PaperAirplaneIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PREMIUM ALERT TOAST */}
      {alert && (
        <div className={`
          fixed top-6 right-6 
          px-5 py-4 rounded-xl shadow-2xl border 
          flex items-center gap-3 z-[999] 
          animate-slideIn
          ${alert.type === "success" ? "bg-blue-50 border-blue-100 text-blue-800" : "bg-red-50 border-red-100 text-red-800"}
        `}>
          {alert.type === "success" ? (
            <div className="p-1 bg-blue-100 rounded-full">
              <CheckCircleIcon className="w-5 h-5 text-[#144474]" />
            </div>
          ) : (
            <div className="p-1 bg-red-100 rounded-full">
              <ExclamationCircleIcon className="w-5 h-5 text-red-600" />
            </div>
          )}

          <p className="font-semibold text-sm">
            {alert.message}
          </p>

          <button onClick={() => setAlert(null)} className="ml-2 opacity-60 hover:opacity-100 transition">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      )}

    </>
  );
}