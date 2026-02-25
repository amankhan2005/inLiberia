//  import useAuth from "../../hooks/useAuth";

// export default function Profile() {

//   const { user } = useAuth();

//   return (

//     <div className="bg-white p-6 shadow rounded">

//       <h2 className="font-bold text-xl">

//         Profile

//       </h2>

//       <p>Name: {user?.name}</p>

//       <p>Email: {user?.email}</p>

//     </div>

//   );

// }

import useAuth from "../../hooks/useAuth";
import { useState } from "react";

export default function Profile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-[#144474] p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white">My Profile</h1>
            <p className="text-blue-100 mt-1">Manage your account settings and information</p>
          </div>
          
          {/* Profile Content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Avatar */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-blue-600">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                </div>
                 
              </div>
              
              {/* User Info */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="text-sm font-medium text-gray-500 sm:w-32">Full Name:</span>
                      <span className="text-gray-800 mt-1 sm:mt-0">{user?.name || 'Not provided'}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="text-sm font-medium text-gray-500 sm:w-32">Email Address:</span>
                      <span className="text-gray-800 mt-1 sm:mt-0">{user?.email || 'Not provided'}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="text-sm font-medium text-gray-500 sm:w-32">Account Status:</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1 sm:mt-0">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
                
                 
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}