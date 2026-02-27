 import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { resendVerification } from "../../services/authService";

export default function Profile() {
  const { user } = useAuth();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleVerify = async () => {
    try {
      setSending(true);
      setMessage({ type: "", text: "" });
      await resendVerification();
      setMessage({
        type: "success",
        text: "Verification email sent successfully! Please check your inbox."
      });
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Failed to send email. Please try again."
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your profile and account preferences.</p>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-xl">
          
          {/* Top Section: Avatar & Basic Info */}
          <div className="bg-gradient-to-r from-[#144474] to-[#0f3356] px-6 py-8 sm:px-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-white">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </span>
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-white">{user?.name || "User Name"}</h2>
                <p className="text-sm text-blue-100 mt-1">{user?.email || "user@example.com"}</p>
                <div className="mt-3 flex justify-center sm:justify-start">
                  {user?.isVerified ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-100 border border-green-500/30">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      Verified Account
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-100 border border-yellow-500/30">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                      Unverified
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Alert Banner for Unverified Users */}
          {!user?.isVerified && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-yellow-800">
                      Your account is not verified. Verify now to unlock all features.
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleVerify}
                  disabled={sending}
                  className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 transition-all"
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : "Resend Verification Email"}
                </button>
              </div>
              
              {/* Feedback Message */}
              {message.text && (
                <div className={`mt-3 text-sm ${message.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                  {message.text}
                </div>
              )}
            </div>
          )}

          {/* Details Section */}
          <div className="p-6 sm:p-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              {/* Name Field */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-gray-500 mb-1">Full Name</p>
                <p className="font-semibold text-gray-900">{user?.name || "N/A"}</p>
              </div>

              {/* Email Field */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-gray-500 mb-1">Email Address</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">{user?.email || "N/A"}</p>
                  {user?.isVerified && (
                     <span className="text-green-600 flex items-center text-xs font-medium">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        Verified
                     </span>
                  )}
                </div>
              </div>

              {/* Account Status Field */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-gray-500 mb-1">Account Status</p>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user?.isVerified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {user?.isVerified ? 'Active' : 'Pending Verification'}
                </span>
              </div>
              
              {/* Placeholder for future field */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-gray-500 mb-1">Role</p>
                <p className="font-semibold text-gray-900">{user.role}</p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="bg-gray-50 px-6 py-4 sm:px-8 border-t border-gray-100 flex justify-end">
            <button 
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#144474]"
              onClick={() => alert('Edit functionality coming soon!')}
            >
              Edit Profile
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}