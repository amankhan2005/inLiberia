//  import useAdminAuth from "../../hooks/useAdminAuth";


// export default function AdminNavbar() {


//   const { logout } = useAdminAuth();


//   return (

//     <header className="bg-white shadow px-6 py-4 flex justify-between">


//       <h1 className="font-semibold">

//         Admin Dashboard

//       </h1>



//       <button

//         onClick={logout}

//         className="bg-red-600 text-white px-4 py-2 rounded"

//       >

//         Logout

//       </button>


//     </header>

//   );

// }

 import useAdminAuth from "../../hooks/useAdminAuth";
import { Menu, LogOut } from "lucide-react";

export default function AdminNavbar({ toggleSidebar }) {

  const { logout } = useAdminAuth();

  return (

    <header className="bg-red-600 shadow-md flex justify-between items-center px-4 md:px-6 py-3">


      {/* Left Section */}
      <div className="flex items-center gap-3">


        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-white hover:bg-red-700 p-2 rounded-lg transition"
        >
          <Menu size={24} />
        </button>



        {/* Logo */}
        <h1 className="text-white font-bold text-lg md:text-xl tracking-wide">

          inLIBERIA
 

        </h1>


      </div>



      {/* Right Section */}
      <button

        onClick={logout}

        className="flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold transition"

      >

        <LogOut size={18} />

        Logout

      </button>



    </header>

  );

}