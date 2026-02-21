 // src/layouts/DashboardLayout.jsx

import { Outlet, Navigate } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";

import DashboardHeader from "../components/dashboard/DashboardHeader";

import useAuth from "../hooks/useAuth";

import Loader from "../components/common/Loader";



export default function DashboardLayout() {

  const { user, loading } = useAuth();



  // Loader

  if (loading) {

    return (

      <div className="h-screen flex items-center justify-center">

        <Loader />

      </div>

    );

  }



  // Protect route

  if (!user) {

    return <Navigate to="/login" replace />;

  }



  return (

    <div className="flex h-screen bg-gray-100">

      

      {/* Sidebar */}

      <Sidebar />



      {/* Content Area */}

      <div className="flex flex-col flex-1">

        

        {/* Header */}

        <DashboardHeader />



        {/* Page Content */}

        <main className="flex-1 p-6 overflow-y-auto">

          <Outlet />

        </main>



      </div>



    </div>

  );

}