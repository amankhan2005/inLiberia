 import { useEffect, useState } from "react";
import ListingTable from "../components/listings/ListingTable";
import { getAllListings, approveListing, rejectListing, deleteListing } from "../services/adminService";

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadListings = async () => {
    try {
      const data = await getAllListings();
      setListings(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadListings();
  }, []);

  const handleApprove = async (id) => {
    await approveListing(id);
    loadListings();
  };

  const handleReject = async (id) => {
    await rejectListing(id);
    loadListings();
  };

  const handleDelete = async (id) => {
    await deleteListing(id);
    loadListings();
  };

  // Professional Loading Skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 md:p-8">
        <div className="animate-pulse">
          {/* Hero Skeleton */}
          <div className="h-48 bg-slate-200 rounded-3xl mb-8"></div>
          {/* Table Skeleton */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 bg-slate-100 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      
      {/* Professional Hero Banner */}
      <div className="relative bg-gradient-to-r from-[#144474] to-[#0f345a] text-white overflow-hidden">
        
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Property Listings
              </h1>
              <p className="text-blue-100 mt-1 text-sm md:text-base max-w-2xl">
                Review, approve, or reject property submissions. Manage your inventory effectively.
              </p>
            </div>

            {/* Live Count Badge */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20 shadow-lg">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">Total</span>
              <span className="bg-white text-[#144474] text-lg font-bold px-3 py-1 rounded-lg shadow-sm">
                {listings.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 pt-0 -mt-4">
        
        {/* Table Card Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Card Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-50/50">
            <h3 className="text-lg font-bold text-gray-800">All Properties</h3>
            
            {/* Quick Filters Visual Enhancement */}
            <div className="flex gap-2 text-xs font-medium">
              <span className="px-3 py-1 bg-blue-100 text-[#144474] rounded-full border border-blue-200">Active</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full border border-yellow-200">Pending</span>
            </div>
          </div>

          {/* Table Area */}
          <div className="overflow-x-auto">
            <ListingTable
              listings={listings}
              onApprove={handleApprove}
              onReject={handleReject}
              onDelete={handleDelete}
            />
          </div>

        </div>
      </div>
    </div>
  );
}