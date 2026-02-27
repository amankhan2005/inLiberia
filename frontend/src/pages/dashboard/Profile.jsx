 import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import {
  resendVerification,
  getCurrentUser,
  updateProfile
} from "../../services/authService";

// --- SVG Icons ---
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

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


export default function Profile() {
  const { user, setUser } = useAuth();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // ⭐ EDIT MODAL STATE
  const [showEditModal, setShowEditModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || ""
  });

  // ================= VERIFY =================
  const handleVerify = async () => {
    try {
      setSending(true);
      await resendVerification();
      setMessage({ type: "success", text: "Verification email sent" });
    } catch {
      setMessage({ type: "error", text: "Failed to send email" });
    } finally {
      setSending(false);
    }
  };

  // ================= OPEN EDIT =================
  const openEdit = () => {
    setForm({
      name: user.name,
      phone: user.phone || ""
    });
    setShowEditModal(true);
  };

  // ================= SAVE PROFILE =================
  const saveProfile = async () => {
    try {
      setSaving(true);
      const updatedUser = await updateProfile(form);
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setShowEditModal(false);
    } catch {
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const initial = user?.name?.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      
      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-xl animate-fade-in">
        
        {/* Header Banner */}
        <div className="bg-[#144474] h-32 relative flex items-center justify-center">
          <div className="absolute top-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Profile Content */}
        <div className="relative px-8 pb-10 pt-4 text-center">
          
          {/* Avatar */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-lg flex items-center justify-center text-4xl font-bold text-[#144474] overflow-hidden">
              {initial}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
              {user.name}
            </h2>
            <span className="inline-block mt-1 px-3 py-1 bg-blue-50 text-[#144474] text-xs font-semibold rounded-full border border-blue-100">
              {user.role}
            </span>
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-6 text-left space-y-4 border border-gray-100">
            
            {/* Email Row */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 p-2 rounded-lg">
                <MailIcon />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Email Address</p>
                <p className="text-gray-800 font-medium">{user.email}</p>
              </div>
            </div>

            {/* Phone Row */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 p-2 rounded-lg">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Phone Number</p>
                <p className="text-gray-800 font-medium">{user.phone || "Not added"}</p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Status Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${user.isVerified ? 'bg-green-100' : 'bg-yellow-100'}`}>
                  {user.isVerified ? (
                    <span className="text-green-600"><ShieldCheckIcon /></span>
                  ) : (
                    <span className="text-yellow-600"><ShieldCheckIcon /></span>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Verification Status</p>
                  <p className="font-medium">{user.isVerified ? "Verified" : "Not Verified"}</p>
                </div>
              </div>

              {user.isVerified ? (
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

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <button
              onClick={openEdit}
              className="w-full py-3 px-6 bg-gray-100 text-gray-700 font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.01] hover:bg-gray-200 flex items-center justify-center gap-2"
            >
              <EditIcon /> Edit Profile
            </button>

            {!user.isVerified && (
              <button
                onClick={handleVerify}
                disabled={sending}
                style={{ backgroundColor: '#144474' }}
                className={`w-full py-3 px-6 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.01] 
                  ${sending ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'}`}
              >
                {sending ? "Sending..." : "Verify Email"}
              </button>
            )}
          </div>

          {/* Message Alert */}
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

      {/* ================= EDIT MODAL ================= */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl transform transition-all relative animate-fade-in">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowEditModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <CloseIcon />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>

            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#144474] focus:border-[#144474] transition-all"
                  placeholder="Name"
                />
              </div>

              {/* Email (Read Only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email  </label>
                <input
                  value={user.email}
                  readOnly
                  className="w-full border border-gray-200 p-3 bg-gray-100 rounded-lg text-gray-500 cursor-not-allowed"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#144474] focus:border-[#144474] transition-all"
                  placeholder="Phone (optional)"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 font-semibold p-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveProfile}
                disabled={saving}
                style={{ backgroundColor: '#144474' }}
                className={`flex-1 text-white font-semibold p-3 rounded-lg transition-all ${saving ? 'opacity-70' : 'hover:opacity-90'}`}
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}