 import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { resendVerification } from "../../services/authService";

// --- SVG Icons ---
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await login(form);
      if (!res.isVerified) {
        setShowVerifyModal(true);
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  const handleResend = async () => {
    try {
      await resendVerification();
      alert("Verification email sent");
    } catch {
      alert("Failed to send email");
    }
  };

  return (
    <>
      {/* 
         Main Container: 
         - Uses flex layout for split screen.
         - Background for the form area is white (bg-white).
      */}
      <div className="min-h-screen flex font-sans bg-white">
        
        {/* LEFT SIDE - Branding (Primary Color: #144474) */}
        <div className="hidden lg:flex lg:w-1/2 bg-[#144474] relative overflow-hidden justify-center items-center">
           
           {/* Subtle decorative shapes for depth */}
           <div className="absolute top-0 left-0 w-60 h-60 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
           
           <div className="relative z-10 text-center px-12">
             {/* Logo / Title */}
             <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
               Know Liberia
             </h1>
             
             {/* Accent line */}
             <div className="w-24 h-1 bg-white opacity-80 mx-auto mb-6 rounded-full"></div>
             
             <p className="text-blue-100 text-lg max-w-md opacity-90">
               Welcome back. Explore the rich history, culture, and opportunities of Africa's oldest republic.
             </p>

             {/* Simple visual element */}
             <div className="mt-12">
                <div className="inline-block px-6 py-2 border border-white/30 rounded-full text-white/80 text-sm font-medium">
                  Discover • Connect • Grow
                </div>
             </div>
           </div>
        </div>

        {/* RIGHT SIDE - Form Section (White Background) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
          <div className="w-full max-w-md">
            
            {/* Mobile Logo (visible only on small screens) */}
            <div className="lg:hidden text-center mb-8">
              <h1 className="text-3xl font-extrabold text-[#144474]">
                Know Liberia
              </h1>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign In</h2>
              <p className="text-gray-500 mb-6 text-sm">Enter your credentials to continue</p>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r-lg" role="alert">
                  <p className="font-medium text-sm">Error</p>
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon />
                    </div>
                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      // Focus ring uses the primary color
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#144474] focus:border-[#144474] transition-all text-sm bg-white"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockIcon />
                    </div>
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={form.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#144474] focus:border-[#144474] transition-all text-sm bg-white"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>

                {/* Options */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                       type="checkbox" 
                       // Checkbox accent uses primary color
                       className="w-4 h-4 text-[#144474] border-gray-300 rounded focus:ring-[#144474]" 
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-[#144474] hover:opacity-80 hover:underline font-medium">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button - Primary Background */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{ backgroundColor: '#144474' }}
                  className={`w-full py-3 px-4 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out 
                    ${loading 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:opacity-90 hover:shadow-lg transform hover:-translate-y-0.5'
                    }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing In...
                    </span>
                  ) : "Sign In"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                No account?{" "}
                <Link to="/signup" className="text-[#144474] font-semibold hover:opacity-80 hover:underline">
                  Create one
                </Link>
              </div>
            </div>
            
            {/* Footer Credit */}
            <p className="text-center text-xs text-gray-400 mt-8">
              © 2024 Know Liberia. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* VERIFY MODAL */}
      {showVerifyModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl text-center max-w-md w-full shadow-2xl transform transition-all">
            <div className="w-16 h-16 bg-[#144474] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#144474]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Email</h2>
            <p className="text-gray-500 mb-6 text-sm">
              It looks like your email address hasn't been verified yet. Please check your inbox or request a new link.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex-1 bg-gray-100 text-gray-700 font-semibold p-3 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                Maybe Later
              </button>
              <button
                onClick={handleResend}
                style={{ backgroundColor: '#144474' }}
                className="flex-1 text-white font-semibold p-3 rounded-lg hover:opacity-90 transition-colors text-sm shadow-md"
              >
                Resend Email
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}