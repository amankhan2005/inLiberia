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
      <div className="min-h-screen bg-slate-50 p-6 md:p-8">
        <div className="animate-pulse">
          {/* Hero Skeleton */}
          <div className="h-48 bg-slate-200 rounded-3xl mb-8"></div>
          {/* Cards Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm h-40 border border-gray-100"></div>
            ))}
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
          
          {/* Geometric Lines for "Real Estate" feel */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Admin Dashboard
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Welcome back! Monitor property listings, user activities, and platform health at a glance.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 -mt-6">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          <StatsCard
            title="Total Users"
            value={stats.users}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            }
          />

          <StatsCard
            title="Total Listings"
            value={stats.listings}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            }
          />

          <StatsCard
            title="Pending Listings"
            value={stats.pending}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />

          <StatsCard
            title="Approved Listings"
            value={stats.approved}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />

        </div>
      </div>
    </div>
  );
}