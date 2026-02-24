// import {

//   useEffect,

//   useState

// } from "react";

// import UserTable from

// "../components/users/UserTable";

// import {

//   getUsers,

//   deleteUser

// }

// from "../services/adminService";


// export default function Users() {


//   const [users, setUsers] =

//   useState([]);




//   const loadUsers = async () => {

//     const data = await getUsers();

//     setUsers(data);

//   };



//   useEffect(() => {

//     loadUsers();

//   }, []);




//   const handleDelete = async (id) => {

//     await deleteUser(id);

//     loadUsers();

//   };



//   return (

//     <div>


//       <h2 className="text-2xl font-bold mb-4">

//         Users

//       </h2>



//       <UserTable

//         users={users}

//         onDelete={handleDelete}

//       />


//     </div>

//   );

// }
import { useEffect, useState } from "react";
import UserTable from "../components/users/UserTable";
import { getUsers, deleteUser } from "../services/adminService";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state for better UX

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  // Professional Loading Skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 md:p-8">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-100 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-500 text-white p-6 md:p-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              User Management
            </h1>
            <p className="text-red-100 mt-1 text-sm md:text-base">
              View, manage, and oversee all registered platform users.
            </p>
          </div>

          {/* User Count Badge */}
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider">Total Users</span>
            <span className="bg-white text-red-600 text-lg font-bold px-3 py-0.5 rounded-full shadow">
              {users.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 pt-0 -mt-4">
        
        {/* Table Card Container */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          
          {/* Card Header (Optional but recommended for styling) */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h3 className="text-lg font-semibold text-gray-700">Registered Users</h3>
            {/* You can add a "Add User" button here later if needed */}
          </div>

          {/* Table Area */}
          <div className="overflow-x-auto">
            <UserTable
              users={users}
              onDelete={handleDelete}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}