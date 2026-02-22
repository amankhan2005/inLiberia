 import { Link, useLocation } from "react-router-dom";

import { FaHome, FaPlus, FaList, FaUser, FaTachometerAlt } from "react-icons/fa";


export default function Sidebar() {

  const { pathname } = useLocation();


  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-red-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;


  return (

    <aside className="w-64 bg-white shadow h-screen p-4 flex flex-col justify-between">


      {/* TOP */}

      <div>

        <h2 className="text-xl font-bold mb-6 text-red-600">

          Dashboard

        </h2>


        <nav className="space-y-2">


          {/* HOME BUTTON */}

          <Link to="/" className={linkClass("/")}>

            <FaHome />

            Home

          </Link>



          <Link to="/dashboard" className={linkClass("/dashboard")}>

            <FaTachometerAlt />

            Overview

          </Link>



          <Link to="/dashboard/add" className={linkClass("/dashboard/add")}>

            <FaPlus />

            Add Listing

          </Link>



          <Link to="/dashboard/my" className={linkClass("/dashboard/my")}>

            <FaList />

            My Listings

          </Link>



          <Link to="/dashboard/profile" className={linkClass("/dashboard/profile")}>

            <FaUser />

            Profile

          </Link>


        </nav>

      </div>



      {/* BOTTOM OPTIONAL */}

      <div className="text-xs text-gray-400">

        © Ninebyt

      </div>


    </aside>

  );

}