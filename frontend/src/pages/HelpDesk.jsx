//  import { useState, useEffect } from "react";
// import axios from "axios";

// export default function HelpDesk(){

// const API = import.meta.env.VITE_API_URL;


// const [form,setForm]=useState({

// name:"",
// email:"",
// phone:"",
// query:"",
// captcha:""

// });


// const [num1,setNum1]=useState(0);
// const [num2,setNum2]=useState(0);

// const [loading,setLoading]=useState(false);
// const [success,setSuccess]=useState("");
// const [error,setError]=useState("");



// useEffect(()=>{

// generateCaptcha();

// },[]);




// const generateCaptcha=()=>{

// const a=Math.floor(Math.random()*10);
// const b=Math.floor(Math.random()*10);

// setNum1(a);
// setNum2(b);

// };



// const handleChange=(e)=>{

// setForm({

// ...form,
// [e.target.name]:e.target.value

// });

// };



// const captchaCorrect =
// Number(form.captcha) === (num1+num2);




// const handleSubmit = async (e)=>{

// e.preventDefault();

// if(!captchaCorrect) return;

// setLoading(true);
// setError("");
// setSuccess("");

// try{


// await axios.post(

// `${API}/helpdesk`,
// form

// );


// setSuccess("Query sent successfully");


// setForm({

// name:"",
// email:"",
// phone:"",
// query:"",
// captcha:""

// });


// generateCaptcha();


// }
// catch(error){

// setError(

// error.response?.data?.message ||

// "Failed to send"

// );

// }


// setLoading(false);

// };




// return(

// <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">


// <form
// onSubmit={handleSubmit}
// className="bg-white p-6 rounded-xl shadow w-full max-w-lg space-y-4"
// >


// <h2 className="text-2xl font-semibold">

// Help Desk

// </h2>




// <input
// name="name"
// placeholder="Your Name"
// value={form.name}
// onChange={handleChange}
// className="w-full border p-3 rounded"
// />




// <input
// name="email"
// placeholder="Email"
// value={form.email}
// onChange={handleChange}
// className="w-full border p-3 rounded"
// />




// <input
// name="phone"
// placeholder="Phone"
// value={form.phone}
// onChange={handleChange}
// className="w-full border p-3 rounded"
// />




// <textarea
// name="query"
// placeholder="Your Query"
// value={form.query}
// onChange={handleChange}
// className="w-full border p-3 rounded"
// />




// {/* CAPTCHA */}

// <div>


// <label>

// Solve: {num1} + {num2}

// </label>


// <input
// name="captcha"
// placeholder="Answer"
// value={form.captcha}
// onChange={handleChange}
// className="w-full border p-3 rounded"
// />


// </div>




// <button

// disabled={!captchaCorrect || loading}

// className={`

// w-full py-3 rounded text-white

// ${captchaCorrect

// ?"bg-green-600 hover:bg-green-700"

// :"bg-gray-400 cursor-not-allowed"

// }

// `}

// >


// {loading ?

// "Submitting..."

// :

// "Submit"

// }


// </button>




// {success &&

// <p className="text-green-600">

// {success}

// </p>

// }




// {error &&

// <p className="text-green-600">

// {error}

// </p>

// }




// </form>


// </div>

// );

// }

import { useState, useEffect } from "react";
import axios from "axios";

export default function HelpDesk() {
  const API = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
    captcha: ""
  });

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setNum1(a);
    setNum2(b);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const captchaCorrect = Number(form.captcha) === (num1 + num2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaCorrect) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post(`${API}/helpdesk`, form);
      setSuccess("Query sent successfully! We'll get back to you soon.");
      setIsSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        query: "",
        captcha: ""
      });

      generateCaptcha();
    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Failed to send query. Please try again."
      );
    }

    setLoading(false);
  };

  // Reset success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
        setIsSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Help Desk Support</h1>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Response time: <span className="font-semibold text-green-600">2-4 hours</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">How it works</h3>
                  <p className="text-sm text-gray-600">Submit your query and we'll respond</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Fill in your contact information
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Describe your issue in detail
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Verify you're human with CAPTCHA
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Receive confirmation and support
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">Need immediate help?</h3>
              <p className="text-green-100 text-sm mb-4">Call our support team for urgent issues</p>
       <div className="flex items-center">

  {/* MAIL ICON */}
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>

  {/* EMAIL */}
  <a
    href="mailto:info@knowliberia.com"
    className="font-semibold hover:underline"
  >
    info@knowliberia.com
  </a>

</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Support Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Submit a Support Ticket</h2>
                  <p className="text-gray-600">We're here to help. Fill out the form below and we'll get back to you.</p>
                </div>

                {/* Success Message */}
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-green-800 font-medium">Success!</p>
                      <p className="text-green-700 text-sm mt-1">{success}</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-green-800 font-medium">Error</p>
                      <p className="text-green-700 text-sm mt-1">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-green-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
                            focusedField === 'name' ? 'border-green-500 shadow-sm' : 'border-gray-300'
                          }`}
                          requigreen
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-green-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
                            focusedField === 'email' ? 'border-green-500 shadow-sm' : 'border-gray-300'
                          }`}
                          requigreen
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
                          focusedField === 'phone' ? 'border-green-500 shadow-sm' : 'border-gray-300'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Query Textarea */}
                  <div>
                    <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
                      Describe your issue <span className="text-green-600">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="query"
                        name="query"
                        rows="4"
                        placeholder="Please provide as much detail as possible about your issue..."
                        value={form.query}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('query')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none ${
                          focusedField === 'query' ? 'border-green-500 shadow-sm' : 'border-gray-300'
                        }`}
                        requigreen
                      />
                      <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                        {form.query.length}/500
                      </div>
                    </div>
                  </div>

                  {/* CAPTCHA */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Verify you're human <span className="text-green-600">*</span>
                    </label>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white px-4 py-2 rounded-lg border border-gray-300">
                        <span className="text-lg font-mono font-semibold text-gray-800">
                          {num1} + {num2} = ?
                        </span>
                      </div>
                      <div className="flex-1 relative">
                        <input
                          name="captcha"
                          type="text"
                          placeholder="Your answer"
                          value={form.captcha}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('captcha')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
                            focusedField === 'captcha' ? 'border-green-500 shadow-sm' : 'border-gray-300'
                          } ${form.captcha && !captchaCorrect ? 'border-green-500 bg-green-50' : ''}`}
                          requigreen
                        />
                        {form.captcha && (
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            {captchaCorrect ? (
                              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                        title="Refresh CAPTCHA"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                    </div>
                    {form.captcha && !captchaCorrect && (
                      <p className="mt-2 text-sm text-green-600">Incorrect answer. Please try again.</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!captchaCorrect || loading}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      captchaCorrect && !loading
                        ? "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Support Ticket"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}