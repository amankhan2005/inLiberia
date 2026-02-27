 import { useState, useEffect } from "react";
import { getCategories } from "../../services/categoryService";
import { getLocations } from "../../services/listingService";
import {
  FunnelIcon,
  MapPinIcon,
  Squares2X2Icon,
  XMarkIcon,
  ArrowsRightLeftIcon
} from "@heroicons/react/24/outline";

export default function FilterSidebar({ onFilter }) {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    category: "",
    location: "",
  });

  // Calculate active filter count for the badge
  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  // LOAD DATA
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const cat = await getCategories();
      const loc = await getLocations();
      setCategories(cat || []);
      setLocations(loc || []);
    } catch (err) {
      console.error(err);
    }
  };

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // APPLY FILTER
  const applyFilters = () => {
    const cleanFilters = {};
    if (filters.category) cleanFilters.category = filters.category;
    if (filters.location) cleanFilters.location = filters.location;
    
    onFilter(cleanFilters);
    setIsMobileOpen(false); // Close mobile drawer on apply
  };

  // CLEAR FILTER
  const clearFilters = () => {
    setFilters({
      category: "",
      location: "",
    });
    onFilter({});
    setIsMobileOpen(false);
  };

  // --- THE CONTENT COMPONENT (Shared between Mobile & Desktop) ---
  const FilterContent = () => (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#144474]/10 rounded-lg">
            <FunnelIcon className="w-5 h-5 text-[#144474]" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Filters</h3>
            <p className="text-xs text-gray-400">Refine your results</p>
          </div>
        </div>
        
        {/* Close button for Mobile only */}
        <button 
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
        >
          <XMarkIcon className="w-6 h-6 text-gray-500" />
        </button>
      </div>

      {/* Category Section */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-600 flex items-center gap-2 mb-2">
          <Squares2X2Icon className="w-4 h-4 text-[#144474]" />
          Category
        </label>
        <div className="relative">
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="
              w-full 
              border border-gray-200 
              bg-gray-50
              px-4 py-3 
              rounded-xl 
              text-gray-700
              appearance-none
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#144474]/20 
              focus:border-[#144474]
              focus:bg-white
              transition-all
              duration-200
              cursor-pointer
            "
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
             <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-600 flex items-center gap-2 mb-2">
          <MapPinIcon className="w-4 h-4 text-[#144474]" />
          Location
        </label>
        <div className="relative">
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="
              w-full 
              border border-gray-200 
              bg-gray-50
              px-4 py-3 
              rounded-xl 
              text-gray-700
              appearance-none
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#144474]/20 
              focus:border-[#144474]
              focus:bg-white
              transition-all
              duration-200
              cursor-pointer
            "
          >
            <option value="">All Locations</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
             <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Action Buttons */}
      <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
        <button
          onClick={applyFilters}
          className="
            w-full 
            flex items-center justify-center gap-2
            bg-[#144474] 
            hover:bg-[#0f345a] 
            text-white 
            font-semibold 
            py-3.5 
            rounded-xl 
            shadow-lg shadow-[#144474]/20
            transition-all
            duration-300
            transform hover:scale-[1.01]
          "
        >
          <ArrowsRightLeftIcon className="w-5 h-5" />
          Apply Filters
        </button>

        <button
          onClick={clearFilters}
          className="
            w-full 
            flex items-center justify-center gap-2
            bg-transparent 
            hover:bg-red-50 
            text-gray-600
            hover:text-red-600 
            font-medium 
            py-3 
            rounded-xl 
            border border-gray-200
            hover:border-red-200
            transition-all
            duration-200
          "
        >
          <XMarkIcon className="w-5 h-5" />
          Reset All
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* MOBILE TOGGLE BUTTON (Visible < lg) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="
            flex items-center gap-3 
            bg-[#144474] text-white 
            px-6 py-3 rounded-full 
            shadow-xl shadow-[#144474]/30
            backdrop-blur-sm
            transition-transform active:scale-95
          "
        >
          <FunnelIcon className="w-5 h-5" />
          <span className="font-semibold">Filters</span>
          {activeFilterCount > 0 && (
            <span className="bg-white text-[#144474] text-xs font-bold px-2 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* MOBILE OVERLAY (Drawer) */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          ></div>
          
          {/* Drawer Panel */}
          <div className="relative ml-auto w-full max-w-sm h-full bg-white shadow-2xl p-6 overflow-y-auto animate-slide-in-right">
            <FilterContent />
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR (Visible >= lg) */}
      <div className="hidden lg:block w-full max-w-xs sticky top-24 z-20">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6">
          <FilterContent />
        </div>
      </div>
      
      {/* Add this to your global CSS or Tailwind config for the animation */}
      <style jsx global>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}