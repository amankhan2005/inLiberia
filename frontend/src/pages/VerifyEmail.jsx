 import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"; // Added Link for error state
import {
  verifyEmail,
  getCurrentUser
} from "../services/authService";
import useAuth from "../hooks/useAuth";

export default function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();
  const calledRef = useRef(false);
  const { setUser } = useAuth();

  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    const verify = async () => {
      try {
        // STEP 1: verify email
        const res = await verifyEmail(token);

        // STEP 2: get fresh user
        const updatedUser = await getCurrentUser();

        // STEP 3: update global context ⭐ IMPORTANT
        setUser(updatedUser);

        // STEP 4: update localStorage
        localStorage.setItem(
          "user",
          JSON.stringify(updatedUser)
        );

        setStatus("success");
        setMessage(res.message);

        // redirect
        navigate("/dashboard");

      } catch (err) {
        setStatus("error");
        setMessage(
          err.response?.data?.message ||
          "Verification failed"
        );
      }
    };

    verify();
  }, [token, navigate, setUser]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      
      {/* Main Card Container */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden text-center border border-gray-100">
        
        {/* Header Decoration */}
        <div className="h-2 w-full bg-[#144474]"></div>
        
        <div className="p-10">
          
          {/* Logo / Brand */}
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-[#144474] tracking-tight">
              Know Liberia
            </h1>
            <p className="text-gray-400 text-sm mt-1">Account Verification</p>
          </div>

          {/* --- LOADING STATE --- */}
          {status === "loading" && (
            <div className="flex flex-col items-center animate-fade-in">
              {/* Animated Spinner */}
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
                <div 
                  className="absolute top-0 left-0 w-full h-full border-4 border-t-[#144474] rounded-full animate-spin"
                  style={{ animationDuration: '1s' }}
                ></div>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Verifying Email
              </h2>
              <p className="text-gray-500 text-sm">
                Please wait while we confirm your identity...
              </p>
            </div>
          )}

          {/* --- SUCCESS STATE --- */}
          {status === "success" && (
            <div className="flex flex-col items-center animate-fade-in">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Verification Successful
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                {message || "Your email has been verified."}
              </p>
              
              <div className="flex items-center text-sm text-[#144474] font-medium">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Redirecting to dashboard...
              </div>
            </div>
          )}

          {/* --- ERROR STATE --- */}
          {status === "error" && (
            <div className="flex flex-col items-center animate-fade-in">
              {/* Error Icon */}
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <h2 className="text-xl font-semibold text-red-600 mb-2">
                Verification Failed
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                {message}
              </p>

              <div className="space-y-3 w-full">
                <Link
                  to="/login"
                  style={{ backgroundColor: '#144474' }}
                  className="block w-full py-3 px-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Go to Login
                </Link>
                <p className="text-xs text-gray-400">
                  If you believe this is an error, please contact support.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}