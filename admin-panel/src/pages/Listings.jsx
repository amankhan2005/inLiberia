//  import {

//   useEffect,

//   useState

// } from "react";

// import ListingTable from

// "../components/listings/ListingTable";

// import {

//   getAllListings,

//   approveListing,

//   rejectListing,

//   deleteListing

// }

// from "../services/adminService";


// export default function Listings() {


//   const [listings, setListings] =

//   useState([]);




//   const loadListings = async () => {

//     const data = await getAllListings();

//     setListings(data);

//   };



//   useEffect(() => {

//     loadListings();

//   }, []);




//   const handleApprove = async (id) => {

//     await approveListing(id);

//     loadListings();

//   };



//   const handleReject = async (id) => {

//     await rejectListing(id);

//     loadListings();

//   };



//   const handleDelete = async (id) => {

//     await deleteListing(id);

//     loadListings();

//   };



//   return (

//     <div>


//       <h2 className="text-2xl font-bold mb-4">

//         Listings

//       </h2>



//       <ListingTable

//         listings={listings}

//         onApprove={handleApprove}

//         onReject={handleReject}

//         onDelete={handleDelete}

//       />


//     </div>

//   );

// }

import { useEffect, useState } from "react";
import ListingTable from "../components/listings/ListingTable";
import { getAllListings, approveListing, rejectListing, deleteListing } from "../services/adminService";

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true); // Added for professional UX

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
      <div className="min-h-screen bg-gray-100 p-6 md:p-8">
        <div className="animate-pulse">
          {/* Hero Skeleton */}
          <div className="h-48 bg-gray-300 rounded-2xl mb-8"></div>
          {/* Table Skeleton */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-100 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      
      {/* Real Estate Style Hero Banner */}
      <div className="relative bg-gradient-to-r from-red-700 to-red-500 text-white overflow-hidden">
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24"></div>
        </div>

        <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
              Property Listings
            </h1>
            <p className="text-red-100 text-sm md:text-base max-w-2xl">
              Review, approve, or reject property submissions. Manage your inventory effectively.
            </p>
          </div>

          {/* Live Count Badge */}
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider">Total</span>
            <span className="bg-white text-red-600 text-lg font-bold px-3 py-0.5 rounded-full shadow">
              {listings.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 -mt-6">
        
        {/* Table Card Container */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          
          {/* Card Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-50/50">
            <h3 className="text-lg font-semibold text-gray-700">All Properties</h3>
            
            {/* Quick Filters (Optional Visual Enhancement) */}
            <div className="flex gap-2 text-xs font-medium">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Active</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">Pending</span>
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