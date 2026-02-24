import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  List,
  Tag
} from "lucide-react";

export default function AdminSidebar({
  sidebarOpen,
  toggleSidebar
}) {

  const { pathname } = useLocation();


  const menu = [

    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard
    },

    {
      name: "Users",
      path: "/users",
      icon: Users
    },

    {
      name: "Listings",
      path: "/listings",
      icon: List
    },

    {
      name: "Categories",
      path: "/categories",
      icon: Tag
    }

  ];


  const handleClick = () => {

    if (window.innerWidth < 768) {

      toggleSidebar();

    }

  };


  return (

    <aside

      className={`

      bg-white border-r border-gray-200

      h-screen fixed md:static

      z-50 top-0 left-0

      transition-all duration-300


      ${sidebarOpen ? "w-64" : "w-16"}


      ${sidebarOpen
          ? "translate-x-0"
          : "-translate-x-full md:translate-x-0"
        }

      `}

    >


      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b">

        <span className="text-red-600 font-bold text-xl">

          {sidebarOpen ? "Admin" : "🏚️"}

        </span>

      </div>



      {/* Menu */}
      <nav className="p-3 space-y-2">


        {menu.map((item, index) => {

          const Icon = item.icon;

          const isActive = pathname === item.path;


          return (

            <Link

              key={index}

              to={item.path}

              onClick={handleClick}

              className={`

              flex items-center gap-3

              px-3 py-2.5

              rounded-lg

              transition-all duration-200

              group


              ${

                isActive

                  ? "bg-red-600 text-white shadow"

                  : "text-gray-700 hover:bg-red-50 hover:text-red-600"

              }

              `}

            >


              <Icon size={20} />


              {sidebarOpen && (

                <span className="font-medium">

                  {item.name}

                </span>

              )}


            </Link>

          );

        })}


      </nav>


    </aside>

  );

}