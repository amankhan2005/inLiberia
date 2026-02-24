// import {

//   Navigate

// } from "react-router-dom";

//  import useAdminAuth from "../../hooks/useAdminAuth";

// import AdminSidebar from "./AdminSidebar";

// import AdminNavbar from "./AdminNavbar";


// export default function AdminLayout({

//   children

// }) {


//   const {

//     isAdmin,

//     loading

//   } = useAdminAuth();


//   if (loading)

//     return null;


//   if (!isAdmin)

//     return <Navigate to="/login" />;



//   return (

//     <div className="flex">


//       <AdminSidebar />


//       <div className="flex-1">


//         <AdminNavbar />


//         <main className="p-6">

//           {children}

//         </main>


//       </div>


//     </div>

//   );

// }

import { Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAdminAuth from "../../hooks/useAdminAuth";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }) {

  const { isAdmin, loading } = useAdminAuth();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const location = useLocation();

  // Mobile auto close
  useEffect(() => {

    if (window.innerWidth < 768) {

      setSidebarOpen(false);

    }

  }, [location]);



  if (loading) return null;

  if (!isAdmin) return <Navigate to="/login" />;



  const toggleSidebar = () => {

    setSidebarOpen(!sidebarOpen);

  };



  return (

    <div className="flex h-screen bg-gray-100">


      {/* Overlay Mobile */}
      {sidebarOpen && window.innerWidth < 768 && (

        <div

          className="fixed inset-0 bg-black/50 z-40"

          onClick={toggleSidebar}

        />

      )}



      {/* Sidebar */}
       <AdminSidebar

  sidebarOpen={sidebarOpen}

  toggleSidebar={toggleSidebar}

/>



      {/* Content */}
      <div className="flex-1 flex flex-col">


        {/* Navbar */}
        <AdminNavbar

          toggleSidebar={toggleSidebar}

        />



        {/* Main */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">

          {children}

        </main>



      </div>


    </div>

  );

}