 import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";
import { getCategories } from "../../services/categoryService";
import { getListings } from "../../services/listingService";

export default function PremiumHero() {
  const navigate = useNavigate();
  const boxRef = useRef();

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  // LOAD CATEGORIES
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  // LOAD SUGGESTIONS
  useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      setShow(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const params = { search: search.trim(), limit: 8 };
        if (category) params.category = category;
        const res = await getListings(params);
        setSuggestions(res || []);
        setShow(true);
      } catch {
        setSuggestions([]);
        setShow(true);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search, category]);

  // CLOSE OUTSIDE
  useEffect(() => {
    const close = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setShow(false);
        setOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  // SEARCH FUNCTION
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search.trim()) params.append("search", search.trim());
    if (category) params.append("category", category);
    navigate(`/browse?${params.toString()}`);
    setShow(false);
  };

  return (
    <section className="relative bg-slate-50 min-h-[85vh] flex items-center justify-center py-20 px-4 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-2/5 h-full   pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-2/5 h-2/3   pointer-events-none"></div>
      
      {/* Floating Orbs for Premium Look */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#144474] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm text-[#144474] text-sm font-semibold px-5 py-2 rounded-full mb-8 tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#144474] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#144474]"></span>
          </span>
          LIBERIA'S TRUSTED INVESTMENT PLATFORM
        </div>

        {/* Main Typography */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Discover <span className="text-[#144474]">Opportunities</span>
          <br className="hidden md:block" />
          Invest with Confidence
        </h1>

        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-14 leading-relaxed">
          Explore verified businesses, properties, and ventures across Liberia. Secure your future with transparent data.
        </p>

        {/* Search Container */}
        <div className="relative max-w-3xl mx-auto z-40" ref={boxRef}>
          
          {/* Main Search Box */}
          <div className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-2xl border border-gray-100 p-2 md:p-3 gap-2 md:gap-0 transition-all duration-300 hover:shadow-gray-200/50">
            
            {/* Category Selector (Left on Desktop, Top on Mobile) */}
            <div className="relative w-full md:w-auto md:min-w-[200px]">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full px-5 py-3.5 bg-gray-50 hover:bg-gray-100 rounded-2xl md:rounded-l-2xl md:rounded-r-none transition-colors text-gray-700 font-medium border border-transparent md:border-r border-gray-200"
              >
                <span className="truncate">
                  {categories.find((c) => c._id === category)?.name || "All Categories"}
                </span>
                <ChevronDownIcon className={`w-4 h-4 ml-3 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
              </button>

              {/* Category Dropdown */}
              {open && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-100 rounded-2xl mt-2 shadow-xl z-50 overflow-hidden animate-fade-in">
                  <div className="max-h-[300px] overflow-y-auto">
                    {categories.map((cat) => (
                      <div
                        key={cat._id}
                        className={`px-5 py-3 cursor-pointer transition-colors text-sm ${
                          category === cat._id 
                            ? 'bg-blue-50 text-[#144474] font-semibold' 
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                        onClick={() => {
                          setCategory(cat._id);
                          setOpen(false);
                        }}
                      >
                        {cat.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search Input (Center) */}
            <div className="relative flex-1 flex items-center">
              <input
                className="w-full px-5 py-3.5 outline-none text-gray-800 placeholder-gray-400 bg-transparent text-base"
                placeholder="Search hospitals, schools, lands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
            </div>

            {/* Search Button (Right on Desktop, Bottom on Mobile) */}
            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-[#144474] hover:bg-[#0d2d52] text-white px-8 py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-900/20"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
              <span className="md:hidden lg:inline">Search</span>
            </button>

          </div>

          {/* Suggestions Dropdown */}
          {show && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-100 rounded-2xl shadow-2xl mt-3 z-30 overflow-hidden animate-fade-in">
              {suggestions.length > 0 ? (
                <div className="max-h-[400px] overflow-y-auto divide-y divide-gray-50">
                  {suggestions.map((item) => {
                    const imageUrl = item.images?.length ? item.images[0] : "https://via.placeholder.com/80";
                    return (
                      <Link
                        to={`/listing/${item.slug || item._id}`}
                        key={item._id}
                        className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group"
                        onClick={() => setShow(false)}
                      >
                        <img
                          src={imageUrl}
                          alt={item.title}
                          className="w-14 h-14 object-cover rounded-xl border border-gray-100 group-hover:border-blue-200 transition-colors"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-800 truncate group-hover:text-[#144474] transition-colors">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                            <MapPinIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            <span className="truncate">{item.location}</span>
                          </p>
                        </div>
                        <ChevronDownIcon className="w-5 h-5 text-gray-300 rotate-[-90deg] group-hover:text-[#144474] group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <MagnifyingGlassIcon className="w-10 h-10 mx-auto text-gray-200 mb-3" />
                  <p className="text-gray-500 font-medium">No results found</p>
                  <p className="text-gray-400 text-sm mt-1">Try adjusting your search term</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick Stats / Trust Badges (Optional) */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500 text-sm font-medium">
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
             Verified Listings
           </div>
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
             Secure Transactions
           </div>
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
             24/7 Support
           </div>
        </div>

      </div>
      
      {/* Simple Fade-in Animation Style */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}