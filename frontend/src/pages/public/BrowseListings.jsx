 import { useEffect, useState } from "react";
import { getListings } from "../../services/listingService";
import ListingGrid from "../../components/listing/ListingGrid";
import FilterSidebar from "../../components/search/FilterSidebar";
import { MagnifyingGlassIcon, MapPinIcon, TagIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function BrowseListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 12;

  // Search Inputs
  const [searchLocation, setSearchLocation] = useState("");
  const [searchZip, setSearchZip] = useState("");

  // Active Filters
  const [filters, setFilters] = useState({});

  // Helper to check if search is active
  const isSearchActive = searchLocation || searchZip;

  // ================= FETCH FUNCTION =================
  const fetchListings = async (customFilters = {}, pageNumber = 1) => {
    setLoading(true);
    try {
      const params = {
        ...customFilters,
        page: pageNumber,
        limit: limit,
      };
      const data = await getListings(params);
      setListings(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // ================= INITIAL LOAD =================
  useEffect(() => {
    fetchListings({}, 1);
  }, []);

  // ================= SEARCH =================
  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const newFilters = {
      ...filters,
      location: searchLocation,
      zipCode: searchZip,
    };
    setFilters(newFilters);
    setPage(1);
    fetchListings(newFilters, 1);
  };

  // ================= RESET SEARCH =================
  const handleReset = () => {
    setSearchLocation("");
    setSearchZip("");
    setFilters({});
    setPage(1);
    fetchListings({}, 1);
  };

  // ================= PAGINATION =================
  const changePage = (newPage) => {
    if (newPage < 1) return;
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchListings(filters, newPage);
  };

  // ================= FILTER CALLBACK =================
  const handleFilter = (data) => {
    const mergedFilters = {
        ...data,
        zipCode: searchZip 
    };
    setFilters(mergedFilters);
    setPage(1);
    fetchListings(mergedFilters, 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* ================= HERO SEARCH SECTION ================= */}
      <div className="bg-gradient-to-r from-[#144474] to-[#0f345a] pt-12 pb-20 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Find Your Perfect Space
          </h1>
          <p className="text-blue-100 mb-8 text-sm md:text-base">
            Browse thousands of listings across the country
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 relative">
            
            {/* Location Input */}
            <div className="relative flex-1">
              <MapPinIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="City or Area..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Zip Input */}
            <div className="relative flex-1">
              <TagIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Zip Code..."
                value={searchZip}
                onChange={(e) => setSearchZip(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Action Buttons Container */}
            <div className="flex gap-2">
              
              {/* Reset Button (Visible only when search has input) */}
              {isSearchActive && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-3 rounded-xl flex items-center justify-center transition-all group"
                  title="Reset Search"
                >
                  <XMarkIcon className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              )}

              {/* Search Button */}
              <button
                type="submit"
                className="bg-[#144474] hover:bg-[#0f345a] text-white font-semibold px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
                <span className="hidden sm:inline">Search</span>
              </button>
            
            </div>
          </form>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ================= SIDEBAR ================= */}
          <aside className="lg:col-span-3">
             <div className="lg:sticky lg:top-24">
                <FilterSidebar onFilter={handleFilter} />
             </div>
          </aside>

          {/* ================= LISTINGS ================= */}
          <main className="lg:col-span-9">
            
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
               <h2 className="font-semibold text-gray-800">
                  Available Listings
               </h2>
            </div>

            {/* Grid */}
            <ListingGrid listings={listings} loading={loading} />

            {/* ================= PAGINATION ================= */}
            {listings.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                
                <button
                  onClick={() => changePage(page - 1)}
                  disabled={page === 1}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>

                <div className="px-4 py-2 bg-[#144474] text-white rounded-lg font-bold shadow-inner min-w-[40px] text-center">
                  {page}
                </div>

                <button
                  onClick={() => changePage(page + 1)}
                  disabled={listings.length < limit}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>

              </div>
            )}

            {/* Empty State */}
            {!loading && listings.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl border mt-6">
                 <h3 className="text-xl font-semibold text-gray-700 mb-2">No listings found</h3>
                 <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}