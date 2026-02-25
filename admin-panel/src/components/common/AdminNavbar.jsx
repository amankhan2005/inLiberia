 import useAdminAuth from "../../hooks/useAdminAuth";
import { Menu, LogOut, ShieldCheck } from "lucide-react";

export default function AdminNavbar({ toggleSidebar }) {

  const { logout } = useAdminAuth();

  return (
    <header className="bg-[#144474] shadow-lg flex justify-between items-center px-4 md:px-6 py-3 sticky top-0 z-40 border-b border-blue-900/20">
      
      {/* Left Section */}
      <div className="flex items-center gap-3">
        
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          <Menu size={24} />
        </button>

        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="bg-white/10 p-1.5 rounded-lg hidden sm:block">
             <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <h1 className="text-white font-bold text-lg md:text-xl tracking-wide">
              Know Liberia
            </h1>
            <span className="text-[10px] text-blue-200 uppercase tracking-widest hidden sm:block">
              Admin Panel
            </span>
          </div>
        </div>

      </div>

      {/* Right Section */}
      <button
        onClick={logout}
        className="flex items-center gap-2 bg-white text-[#144474] hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold transition-colors shadow-sm hover:shadow group"
      >
        <LogOut size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        <span className="hidden sm:inline">Logout</span>
      </button>

    </header>
  );
}