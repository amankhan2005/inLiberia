 import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  List,
  Tag,
  ShieldCheck
} from "lucide-react";

export default function AdminSidebar({ sidebarOpen, toggleSidebar }) {

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
    // Close sidebar on mobile after clicking a link
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`
        bg-slate-50 border-r border-gray-200
        h-screen fixed md:static
        z-50 top-0 left-0
        transition-all duration-300 ease-in-out
        flex flex-col
        ${sidebarOpen ? "w-64" : "w-20"}
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >

      {/* Logo Header */}
      <div className="flex items-center justify-center h-20 border-b border-gray-200 px-4">
        <div className="flex items-center gap-2">
          <div className="bg-[#144474] p-2 rounded-lg shadow-sm">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          
          {sidebarOpen && (
            <div className="flex flex-col leading-tight">
              <span className="text-[#144474] font-bold text-lg tracking-wide">
                inLIBERIA
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                Admin Panel
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Menu Navigation */}
      <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
        
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
                px-3 py-3
                rounded-xl
                transition-all duration-200
                group
                relative
                ${isActive
                  ? "bg-[#144474] text-white shadow-lg"
                  : "text-gray-600 hover:bg-white hover:text-[#144474] hover:shadow-sm"
                }
              `}
            >
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full"></div>
              )}

              <Icon size={20} className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-[#144474]'}`} />

              {sidebarOpen && (
                <span className="font-medium text-sm">
                  {item.name}
                </span>
              )}
              
              {/* Tooltip for collapsed state */}
              {!sidebarOpen && (
                <div className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  {item.name}
                </div>
              )}
            </Link>
          );
        })}

      </nav>
      
      {/* Footer (Optional) */}
      {sidebarOpen && (
        <div className="p-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">Version 1.0.0</p>
        </div>
      )}
    </aside>
  );
}