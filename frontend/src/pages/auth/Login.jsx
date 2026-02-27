 

 
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

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
//       await login(form);
//       navigate("/");
//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//         "Login failed. Please check your credentials."
//       );
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* Left Side - Branding */}
//       <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#144474] to-[#0f345a] p-8 md:p-12 items-center justify-center relative overflow-hidden">
        
//         {/* Decorative shapes */}
//         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
//         <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

//         <div className="max-w-md text-white relative z-10">
//           <div className="mb-8">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Welcome Back</h1>
//             <p className="text-blue-100 text-lg leading-relaxed">
//               Sign in to access your personalized dashboard and manage your listings with ease.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-center group">
//               <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <span className="text-blue-100">Manage your properties efficiently</span>
//             </div>
//             <div className="flex items-center group">
//               <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <span className="text-blue-100">Connect with potential clients</span>
//             </div>
//             <div className="flex items-center group">
//               <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                 </svg>
//               </div>
//               <span className="text-blue-100">Track your listing performance</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Login Form */}
//       <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-12">
//         <div className="w-full max-w-md">
//           {/* Mobile Logo */}
//           <div className="md:hidden text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
//               <svg className="w-8 h-8 text-[#144474]" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//               </svg>
//             </div>
//             <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
//           </div>

//           {/* Desktop Title */}
//           <div className="hidden md:block mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Sign In</h2>
//             <p className="text-gray-500 mt-2">Enter your credentials to access your account</p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center shadow-sm">
//               <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//               </svg>
//               <span className="text-red-700 text-sm font-medium">{error}</span>
//             </div>
//           )}

//           {/* Login Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email Input */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                   </svg>
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={form.email}
//                   onChange={handleChange}
//                   className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition-all text-gray-800"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   value={form.password}
//                   onChange={handleChange}
//                   className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition-all text-gray-800"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
//                 >
//                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     {showPassword ? (
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                     ) : (
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     )}
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me & Forgot Password */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember"
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="h-4 w-4 text-[#144474] focus:ring-[#144474] border-gray-300 rounded cursor-pointer"
//                 />
//                 <label htmlFor="remember" className="ml-2 block text-sm text-gray-600 cursor-pointer">
//                   Remember me
//                 </label>
//               </div>
//               <Link to="/forgot-password" className="text-sm font-medium text-[#144474] hover:text-[#0f345a] transition-colors">
//                 Forgot password?
//               </Link>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#144474] hover:bg-[#0f345a] disabled:bg-gray-400 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#144474] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Signing in...
//                 </>
//               ) : (
//                 "Sign In"
//               )}
//             </button>
//           </form>

//           {/* Sign Up Link */}
//           <p className="mt-8 text-center text-gray-500 text-sm">
//             Don't have an account?{" "}
//             <Link to="/signup" className="font-semibold text-[#144474] hover:text-[#0f345a] transition-colors">
//               Sign up for free
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
import { resendVerification } from "../../services/authService";

// Icons
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ⭐ verify popup
  const [showVerifyPopup, setShowVerifyPopup] = useState(false);

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
      const res = await login(form);

      // ⭐ SAVE LOGIN
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res));

      // ⭐ SHOW VERIFY POPUP IF NOT VERIFIED
      if (!res.isVerified) {
        setShowVerifyPopup(true);
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  // continue button
  const handleContinue = () => {
    setShowVerifyPopup(false);
    navigate("/dashboard");
  };

  // resend email
  const handleResend = async () => {
    try {
        await resendVerification();
        alert("Verification email sent!");
    } catch (err) {
        alert("Failed to resend email.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* LEFT SIDE - Branding */}
      <div className="hidden md:flex md:w-1/2 lg:w-1/2 bg-gradient-to-br from-[#144474] to-[#0a2540] text-white flex-col justify-center p-12 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Welcome Back
          </h1>
          <p className="text-lg text-blue-100 mb-10 opacity-90 max-w-md">
            Sign in to access your personalized dashboard and manage your listings with ease.
          </p>

          <div className="space-y-6">
            <div className="flex items-center">
              <CheckIcon />
              <span className="text-lg font-medium">Manage your properties efficiently</span>
            </div>
            <div className="flex items-center">
              <CheckIcon />
              <span className="text-lg font-medium">Connect with potential clients</span>
            </div>
            <div className="flex items-center">
              <CheckIcon />
              <span className="text-lg font-medium">Track your listing performance</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 sm:p-10 min-h-screen md:min-h-full">
        <div className="w-full max-w-md">
          
          {/* Mobile Logo / Header (Optional visible only on mobile) */}
          <div className="mb-8 text-center md:hidden">
            <h1 className="text-2xl font-bold text-[#144474]">Welcome Back</h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Sign In
          </h2>
          <p className="text-gray-500 mb-8">
            Enter your credentials to access your account
          </p>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r-md shadow-sm" role="alert">
              <p className="font-medium">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MailIcon />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#144474] focus:border-transparent transition-all text-gray-700 bg-gray-50 focus:bg-white"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <LockIcon />
              </div>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-12 pr-24 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#144474] focus:border-transparent transition-all text-gray-700 bg-gray-50 focus:bg-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-sm text-[#144474] font-semibold hover:underline focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-[#144474] rounded border-gray-300 focus:ring-[#144474]" />
                <span className="text-gray-600 text-sm">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-[#144474] font-semibold hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center bg-[#144474] text-white p-3.5 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#0d2f55] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#144474]/30 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : "Sign In"}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#144474] font-bold hover:underline ml-1">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      {/* VERIFY POPUP */}
      {showVerifyPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 transform transition-all">
            
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 mb-5">
              <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Email Not Verified
            </h2>
            <p className="mt-3 text-gray-500 text-center text-sm leading-relaxed">
              Please verify your email address to unlock all features.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={handleResend}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Resend Email
              </button>
              
              <button
                onClick={handleContinue}
                className="w-full bg-[#144474] text-white px-4 py-2.5 rounded-xl font-semibold shadow-md hover:bg-[#0d2f55] transition-colors focus:outline-none focus:ring-2 focus:ring-[#144474]/50"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}