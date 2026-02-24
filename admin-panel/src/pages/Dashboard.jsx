//  import {

//   useEffect,

//   useState

// } from "react";

// import StatsCard from "../components/dashboard/StatsCard";

// import {

//   getStats

// } from "../services/adminService";


// export default function Dashboard() {


//   const [stats, setStats] = useState({

//     users: 0,

//     listings: 0,

//     pending: 0,

//     approved: 0

//   });


//   const [loading, setLoading] = useState(true);



//   useEffect(() => {

//     const fetchStats = async () => {

//       try {

//         const data = await getStats();

//         setStats(data);

//       }

//       catch (error) {

//         console.error(error);

//       }

//       finally {

//         setLoading(false);

//       }

//     };


//     fetchStats();

//   }, []);




//   if (loading)

//     return <p>Loading...</p>;



//   return (

//     <div>


//       <h2 className="text-2xl font-bold mb-6">

//         Dashboard

//       </h2>



//       <div className="grid grid-cols-4 gap-6">


//         <StatsCard

//           title="Total Users"

//           value={stats.users}

//         />



//         <StatsCard

//           title="Total Listings"

//           value={stats.listings}

//         />



//         <StatsCard

//           title="Pending Listings"

//           value={stats.pending}

//         />



//         <StatsCard

//           title="Approved Listings"

//           value={stats.approved}

//         />


//       </div>


//     </div>

//   );

// }


 import { useEffect, useState } from "react";
import StatsCard from "../components/dashboard/StatsCard";
import { getStats } from "../services/adminService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    listings: 0,
    pending: 0,
    approved: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats();
        setStats(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Professional Loading Skeleton State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 md:p-8">
        <div className="animate-pulse">
          {/* Hero Skeleton */}
          <div className="h-48 bg-gray-300 rounded-2xl mb-8"></div>
          {/* Cards Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm h-40"></div>
            ))}
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

        <div className="relative p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            Admin Dashboard
          </h1>
          <p className="text-red-100 text-lg max-w-2xl">
            Welcome back! Monitor property listings, user activities, and platform health at a glance.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 -mt-6">
        
        {/* Stats Grid 
            Responsive Logic:
            - 1 col (mobile)
            - 2 cols (tablet)
            - 4 cols (desktop)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          <StatsCard
            title="Total Users"
            value={stats.users}
            // User Icon
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />

          <StatsCard
            title="Total Listings"
            value={stats.listings}
            // Building Icon
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
          />

          <StatsCard
            title="Pending Listings"
            value={stats.pending}
            // Clock Icon
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />

          <StatsCard
            title="Approved Listings"
            value={stats.approved}
            // Check/Success Icon
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />

        </div>
      </div>
    </div>
  );
}