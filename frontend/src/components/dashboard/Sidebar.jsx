 import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {

  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-lg ${
      pathname === path
        ? "bg-red-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (

    <aside className="w-64 bg-white shadow h-screen p-4">

      <h2 className="text-xl font-bold mb-6 text-red-600">

        Dashboard

      </h2>

      <nav className="space-y-2">

        <Link to="/dashboard" className={linkClass("/dashboard")}>

          Overview

        </Link>

        <Link to="/dashboard/add" className={linkClass("/dashboard/add")}>

          Add Listing

        </Link>

        <Link to="/dashboard/my" className={linkClass("/dashboard/my")}>

          My Listings

        </Link>

        <Link to="/dashboard/profile" className={linkClass("/dashboard/profile")}>

          Profile

        </Link>

      </nav>

    </aside>

  );

}