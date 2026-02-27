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

  // ⭐ HIDE COMPLETE CONTACT CARD IF EMAIL NOT EXISTS
  if (!listing?.contactEmail) return null;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const [form, setForm] = useState({
    visitorName: "",
    visitorEmail: "",
    subject: "",
    message: ""
  });

  // AUTO CLOSE ALERT
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

    // EXTRA SAFETY CHECK
    if (!listing.contactEmail) {
      setAlert({
        type: "error",
        message: "Owner email not available"
      });
      return;
    }

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

        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>

        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Contact Owner
        </h3>


        <div className="space-y-4 mb-8">

          {/* EMAIL */}
          <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border">

            <div className="bg-[#144474] p-2 rounded-lg">
              <EnvelopeIcon className="w-5 h-5 text-white" />
            </div>

            <span className="text-gray-700 font-medium truncate">
              {listing.contactEmail}
            </span>

          </div>


          {/* PHONE (OPTIONAL) */}
          {listing.contactPhone && (

            <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border">

              <div className="bg-[#144474] p-2 rounded-lg">
                <PhoneIcon className="w-5 h-5 text-white" />
              </div>

              <span className="text-gray-700 font-medium">
                {listing.contactPhone}
              </span>

            </div>

          )}

        </div>



        {/* SEND BUTTON */}
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
          "
        >

          <PaperAirplaneIcon className="w-5 h-5"/>

          Send Enquiry

        </button>

      </div>



      {/* MODAL */}
      {open && (

        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          onClick={() => setOpen(false)}
        >

          <div
            className="bg-white rounded-2xl w-full max-w-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="bg-[#144474] px-6 py-4 flex justify-between">

              <h2 className="text-xl font-bold text-white">
                Send Enquiry
              </h2>

              <button onClick={() => setOpen(false)}>
                <XMarkIcon className="w-6 text-white"/>
              </button>

            </div>



            <div className="p-6 space-y-4">

              <input
                name="visitorName"
                value={form.visitorName}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border p-3 rounded-xl"
              />


              <input
                name="visitorEmail"
                value={form.visitorEmail}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border p-3 rounded-xl"
              />


              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border p-3 rounded-xl"
              />


              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="w-full border p-3 rounded-xl"
              />


              <button
                onClick={handleSend}
                disabled={loading}
                className="w-full bg-[#144474] text-white py-3 rounded-xl"
              >

                {loading ? "Sending..." : "Send Message"}

              </button>

            </div>

          </div>

        </div>

      )}



      {/* ALERT */}
      {alert && (

        <div className="fixed top-6 right-6 bg-white border shadow-xl px-5 py-4 rounded-xl flex gap-3">

          {alert.type === "success"
            ? <CheckCircleIcon className="w-6 text-green-500"/>
            : <ExclamationCircleIcon className="w-6 text-red-500"/>
          }

          <p>{alert.message}</p>

          <button onClick={() => setAlert(null)}>
            <XMarkIcon className="w-5"/>
          </button>

        </div>

      )}

    </>
  );

}