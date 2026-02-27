 import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import {
  resendVerification,
  getCurrentUser
} from "../../services/authService";

// --- SVG Icons for UI enhancement ---
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

export default function Profile() {
  const { user, setUser } = useAuth();

  const [sending, setSending] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: ""
  });

  const handleVerify = async () => {
    try {
      setSending(true);
      setMessage({
        type: "",
        text: ""
      });

      await resendVerification();

      setMessage({
        type: "success",
        text: "Verification email sent. Please check inbox."
      });

      // ✅ refresh user
      const updatedUser = await getCurrentUser();

      setUser(updatedUser);

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Failed to send email"
      });
    } finally {
      setSending(false);
    }
  };

  // Get first letter of name for Avatar
  const initial = user?.name?.charAt(0).toUpperCase() || "U";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      
      {/* Main Card Container */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-xl animate-fade-in">
        
        {/* Header / Banner Area */}
        <div className="bg-[#144474] h-32 relative flex items-center justify-center">
           {/* Decorative circles */}
           <div className="absolute top-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Profile Content */}
        <div className="relative px-8 pb-10 pt-4 text-center">
          
          {/* Avatar */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-lg flex items-center justify-center text-4xl font-bold text-[#144474] overflow-hidden">
               {/* If you have user images, use <img src={user.avatar} /> otherwise show initial */}
               {initial}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
              {user?.name || "User Name"}
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              {user.role}
            </p>
          </div>

          {/* Details Section */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-6 text-left space-y-4 border border-gray-100">
            
            {/* Email Row */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 p-2 rounded-lg">
                <MailIcon />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Email Address</p>
                <p className="text-gray-800 font-medium">{user?.email}</p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Status Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${user?.isVerified ? 'bg-green-100' : 'bg-yellow-100'}`}>
                  {user?.isVerified ? (
                     <span className="text-green-600"><ShieldCheckIcon /></span>
                  ) : (
                     <span className="text-yellow-600"><AlertIcon /></span>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Verification Status</p>
                  <p className="font-medium">
                    {user?.isVerified ? "Verified" : "Not Verified"}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              {user?.isVerified ? (
                <span className="px-3 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full border border-green-200">
                  Active
                </span>
              ) : (
                <span className="px-3 py-1 text-xs font-semibold text-yellow-600 bg-yellow-100 rounded-full border border-yellow-200 animate-pulse">
                  Pending
                </span>
              )}
            </div>
          </div>

          {/* VERIFY BUTTON & MESSAGES */}
          {!user?.isVerified && (
            <div className="mt-8 space-y-4">
              <button
                onClick={handleVerify}
                disabled={sending}
                style={{ backgroundColor: '#144474' }}
                className={`w-full py-3 px-6 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] 
                  ${sending ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'}`}
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Resend Verification Email"
                )}
              </button>
            </div>
          )}

          {/* MESSAGE ALERT */}
          {message.text && (
            <div className={`mt-4 p-4 rounded-xl text-sm flex items-center gap-3 transition-all duration-300
              ${message.type === "success" 
                ? "bg-green-50 text-green-700 border border-green-200" 
                : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {message.type === "success" ? (
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              )}
              <span>{message.text}</span>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}