 
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// export default function Signup() {
//   const navigate = useNavigate();
//   const { signup } = useAuth();
  
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });
  
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [agreedToTerms, setAgreedToTerms] = useState(false);
//   const [focusedField, setFocusedField] = useState("");

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await signup(form);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//         "Signup failed. Please try again."
//       );
//     }
//     setLoading(false);
//   };

//   const getPasswordStrength = (password) => {
//     if (!password) return { strength: 0, text: "", color: "" };
    
//     let strength = 0;
//     if (password.length >= 8) strength++;
//     if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
//     if (password.match(/[0-9]/)) strength++;
//     if (password.match(/[^a-zA-Z0-9]/)) strength++;

//     const levels = [
//       { text: "Weak", color: "bg-green-500" },
//       { text: "Fair", color: "bg-orange-500" },
//       { text: "Good", color: "bg-yellow-500" },
//       { text: "Strong", color: "bg-green-500" }
//     ];

//     return {
//       strength: (strength / 4) * 100,
//       text: levels[strength - 1]?.text || "",
//       color: levels[strength - 1]?.color || ""
//     };
//   };

//   const passwordStrength = getPasswordStrength(form.password);

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* Left Side - Branding */}
//       <div className="md:flex md:w-1/2 bg-gradient-to-br from-green-500 to-green-700 p-8 md:p-12 items-center justify-center hidden">
//         <div className="max-w-md text-white">
//           <div className="mb-8">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Us Today</h1>
//             <p className="text-green-100 text-lg">
//               Create your account and start managing your properties with our powerful platform.
//             </p>
//           </div>
          
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               <span className="text-green-100">Free to get started</span>
//             </div>
//             <div className="flex items-center">
//               <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               <span className="text-green-100">No cgreenit card requigreen</span>
//             </div>
//             <div className="flex items-center">
//               <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//               <span className="text-green-100">Access all features</span>
//             </div>
//           </div>

           
//         </div>
//       </div>

//       {/* Right Side - Signup Form */}
//       <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-12">
//         <div className="w-full max-w-md">
//           {/* Mobile Header */}
//           <div className="md:hidden text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
//               <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
//           </div>

//           {/* Desktop Header */}
//           <div className="hidden md:block mb-8">
//             <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
//             <p className="text-gray-600 mt-2">Join thousands of users managing their properties</p>
//           </div>

//           {/* Progress Indicator */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
//                   form.name ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
//                 }`}>
//                   1
//                 </div>
//                 <span className="ml-2 text-sm font-medium text-gray-900">Account</span>
//               </div>
//               <div className="flex-1 mx-4">
//                 <div className="h-1 bg-gray-200 rounded-full">
//                   <div 
//                     className={`h-1 rounded-full transition-all duration-300 ${
//                       form.name ? 'bg-green-600' : ''
//                     }`}
//                     style={{ width: form.name ? '33%' : '0%' }}
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
//                   form.email ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
//                 }`}>
//                   2
//                 </div>
//                 <span className="ml-2 text-sm font-medium text-gray-900">Email</span>
//               </div>
//               <div className="flex-1 mx-4">
//                 <div className="h-1 bg-gray-200 rounded-full">
//                   <div 
//                     className={`h-1 rounded-full transition-all duration-300 ${
//                       form.email ? 'bg-green-600' : ''
//                     }`}
//                     style={{ width: form.email ? '66%' : '0%' }}
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
//                   form.password ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
//                 }`}>
//                   3
//                 </div>
//                 <span className="ml-2 text-sm font-medium text-gray-900">Password</span>
//               </div>
//             </div>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
//               <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//               </svg>
//               <span className="text-green-700 text-sm">{error}</span>
//             </div>
//           )}

//           {/* Signup Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name Input */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                 </div>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   placeholder="Enter your full name"
//                   value={form.name}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('name')}
//                   onBlur={() => setFocusedField('')}
//                   className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
//                     focusedField === 'name' ? 'border-green-500 shadow-sm' : 'border-gray-300'
//                   }`}
//                   requigreen
//                 />
//               </div>
//             </div>

//             {/* Email Input */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={form.email}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('email')}
//                   onBlur={() => setFocusedField('')}
//                   className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
//                     focusedField === 'email' ? 'border-green-500 shadow-sm' : 'border-gray-300'
//                   }`}
//                   requigreen
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Create a strong password"
//                   value={form.password}
//                   onChange={handleChange}
//                   onFocus={() => setFocusedField('password')}
//                   onBlur={() => setFocusedField('')}
//                   className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all ${
//                     focusedField === 'password' ? 'border-green-500 shadow-sm' : 'border-gray-300'
//                   }`}
//                   requigreen
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 >
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     {showPassword ? (
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                     ) : (
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     )}
//                   </svg>
//                 </button>
//               </div>
              
//               {/* Password Strength Indicator */}
//               {form.password && (
//                 <div className="mt-2">
//                   <div className="flex items-center justify-between mb-1">
//                     <span className="text-xs text-gray-600">Password strength</span>
//                     <span className={`text-xs font-medium ${
//                       passwordStrength.text === 'Weak' ? 'text-green-600' :
//                       passwordStrength.text === 'Fair' ? 'text-orange-600' :
//                       passwordStrength.text === 'Good' ? 'text-yellow-600' :
//                       'text-green-600'
//                     }`}>
//                       {passwordStrength.text}
//                     </span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-1.5">
//                     <div 
//                       className={`h-1.5 rounded-full transition-all duration-300 ${passwordStrength.color}`}
//                       style={{ width: `${passwordStrength.strength}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Terms and Conditions */}
//             <div className="flex items-start">
//               <input
//                 id="terms"
//                 type="checkbox"
//                 checked={agreedToTerms}
//                 onChange={(e) => setAgreedToTerms(e.target.checked)}
//                 className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-0.5"
//                 requigreen
//               />
//               <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
//                 I agree to the{" "}
//                 <Link to="/terms" className="text-green-600 hover:text-green-700 font-medium">
//                   Terms of Service
//                 </Link>{" "}
//                 and{" "}
//                 <Link to="/privacy" className="text-green-600 hover:text-green-700 font-medium">
//                   Privacy Policy
//                 </Link>
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading || !agreedToTerms}
//               className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//             >
//               {loading ? (
//                 <span className="flex items-center justify-center">
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Creating account...
//                 </span>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>

          

           
              
//           {/* Login Link */}
//           <p className="mt-8 text-center text-gray-600">
//             Already have an account?{" "}
//             <Link to="/login" className="font-medium text-green-600 hover:text-green-700">
//               Sign in here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signup(form);
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Signup failed. Please try again."
      );
    }
    setLoading(false);
  };

  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, text: "", color: "" };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;

    // Using Blue theme for strength instead of Green
    const levels = [
      { text: "Weak", color: "bg-red-500" },
      { text: "Fair", color: "bg-orange-500" },
      { text: "Good", color: "bg-blue-400" },
      { text: "Strong", color: "bg-[#144474]" }
    ];

    return {
      strength: (strength / 4) * 100,
      text: levels[strength - 1]?.text || "",
      color: levels[strength - 1]?.color || ""
    };
  };

  const passwordStrength = getPasswordStrength(form.password);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#144474] to-[#0f345a] p-8 md:p-12 items-center justify-center relative overflow-hidden">
        
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-md text-white relative z-10">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Join Us Today</h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Create your account and start managing your properties with our powerful platform.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-blue-100">Free to get started</span>
            </div>
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span className="text-blue-100">No credit card required</span>
            </div>
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-blue-100">Access all features</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="md:hidden text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
              <svg className="w-8 h-8 text-[#144474]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:block mb-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Create Account</h2>
            <p className="text-gray-500 mt-2">Join thousands of users managing their properties</p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8 hidden md:block">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                  form.name ? 'bg-[#144474] text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">Account</span>
              </div>
              <div className="flex-1 mx-4">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div 
                    className={`h-1 rounded-full transition-all duration-300 bg-[#144474]`}
                    style={{ width: form.name ? '33%' : '0%' }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                  form.email ? 'bg-[#144474] text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">Email</span>
              </div>
              <div className="flex-1 mx-4">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div 
                    className={`h-1 rounded-full transition-all duration-300 bg-[#144474]`}
                    style={{ width: form.email ? '66%' : '0%' }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                  form.password ? 'bg-[#144474] text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  3
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">Password</span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center shadow-sm">
              <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-red-700 text-sm font-medium">{error}</span>
            </div>
          )}

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition-all text-gray-800 ${
                    focusedField === 'name' ? 'border-[#144474] shadow-sm' : 'border-gray-200'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition-all text-gray-800 ${
                    focusedField === 'email' ? 'border-[#144474] shadow-sm' : 'border-gray-200'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition-all text-gray-800 ${
                    focusedField === 'password' ? 'border-[#144474] shadow-sm' : 'border-gray-200'
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    )}
                  </svg>
                </button>
              </div>

              {/* Password Strength Indicator */}
              {form.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">Password strength</span>
                    <span className={`text-xs font-semibold ${
                      passwordStrength.text === 'Weak' ? 'text-red-600' :
                      passwordStrength.text === 'Fair' ? 'text-orange-600' :
                      passwordStrength.text === 'Good' ? 'text-blue-500' :
                      'text-[#144474]'
                    }`}>
                      {passwordStrength.text}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                      style={{ width: `${passwordStrength.strength}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="h-4 w-4 text-[#144474] focus:ring-[#144474] border-gray-300 rounded mt-0.5 cursor-pointer"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="text-[#144474] hover:text-[#0f345a] font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-[#144474] hover:text-[#0f345a] font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !agreedToTerms}
              className="w-full bg-[#144474] hover:bg-[#0f345a] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-4 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#144474] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-[#144474] hover:text-[#0f345a] transition-colors">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}