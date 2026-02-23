import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {

  const { pathname } = useLocation();


  const linkClass = (path) =>

    `block px-4 py-2 rounded-lg mb-2 transition ${
      pathname === path
        ? "bg-red-600 text-white"
        : "hover:bg-gray-200"
    }`;


  return (

    <aside className="w-64 h-screen bg-white shadow p-4">


      <h2 className="text-xl font-bold text-red-600 mb-6">

        Admin Panel

      </h2>



      <Link

        to="/"

        className={linkClass("/")}

      >

        Dashboard

      </Link>



      <Link

        to="/users"

        className={linkClass("/users")}

      >

        Users

      </Link>



      <Link

        to="/listings"

        className={linkClass("/listings")}

      >

        Listings

      </Link>



      <Link

        to="/categories"

        className={linkClass("/categories")}

      >

        Categories

      </Link>


    </aside>

  );

}