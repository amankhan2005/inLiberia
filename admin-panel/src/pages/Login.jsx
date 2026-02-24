// import {

//   useState

// } from "react";

// import {

//   useNavigate

// } from "react-router-dom";

// import useAdminAuth from "../hooks/useAdminAuth";


// export default function Login() {


//   const {

//     login

//   } = useAdminAuth();


//   const navigate = useNavigate();


//   const [form, setForm] = useState({

//     email: "",

//     password: ""

//   });



//   const handleChange = (e) => {

//     setForm({

//       ...form,

//       [e.target.name]:

//       e.target.value

//     });

//   };



//   const handleSubmit = async (e) => {

//     e.preventDefault();


//     try {

//       await login(form);

//       navigate("/");

//     }

//     catch {

//       alert("Not admin");

//     }

//   };



//   return (

//     <div className="h-screen flex items-center justify-center">


//       <form

//         onSubmit={handleSubmit}

//         className="bg-white p-6 shadow rounded w-80"

//       >


//         <h2 className="text-xl mb-4">

//           Admin Login

//         </h2>



//         <input

//           name="email"

//           placeholder="Email"

//           onChange={handleChange}

//           className="border p-2 w-full mb-3"

//         />



//         <input

//           name="password"

//           type="password"

//           placeholder="Password"

//           onChange={handleChange}

//           className="border p-2 w-full mb-3"

//         />



//         <button

//           className="bg-red-600 text-white w-full py-2"

//         >

//           Login

//         </button>


//       </form>


//     </div>

//   );

// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAdminAuth from "../hooks/useAdminAuth";

export default function Login() {
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(""); // Clear error on type
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(form);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials. Access denied.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gray-50">
      
      {/* LEFT SIDE: Visual Branding (Full height on desktop) */}
      <div className="hidden lg:flex lg:w-1/2 bg-red-600 text-white relative overflow-hidden">
        
        {/* Abstract Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 border-2 border-white rounded-full -ml-20 -mt-20 transform rotate-45"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 border-2 border-white rounded-full -mr-20 -mb-20"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-white rounded-lg transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 h-full w-full">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-red-600 font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-bold tracking-wide">inLIBERIA BE VERIFIED</span>
          </div>

          {/* Main Pitch */}
          <div className="max-w-lg">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Manage Your Properties <span className="text-red-200">Effortlessly.</span>
            </h1>
            <p className="text-red-100 text-lg leading-relaxed">
              Welcome to the admin portal. Approve listings, manage users, and track your growth all in one place.
            </p>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-bold">10k+</p>
              <p className="text-xs text-red-200 uppercase tracking-wider">Listings</p>
            </div>
            <div>
              <p className="text-3xl font-bold">98%</p>
              <p className="text-xs text-red-200 uppercase tracking-wider">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Form Area */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        
        {/* Background decorative blur for right side */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full filter blur-3xl opacity-40"></div>

        <div className="relative z-10 w-full max-w-md">
          
          {/* Mobile Logo (Visible only on mobile/tablet) */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl shadow-lg mb-4">
              <span className="text-white font-bold text-3xl">L</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">inLIBERIA
BE VERIFIED</h1>
          </div>

          {/* Form Card with Glassmorphism */}
          <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50">
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                Admin Portal
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Secure login required
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email Field */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1m0-3V9m0 0h.01M12 12h.01M8 12h.01" />
                    </svg>
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="admin@example.com"
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-600 p-3 rounded text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-red-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-red-100 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-0.5 ${loading ? 'opacity-80' : ''}`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Authenticating...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>

            </form>
          </div>

          {/* Footer text for right side */}
          <p className="text-center text-xs text-gray-400 mt-6">
            Protected by enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
}