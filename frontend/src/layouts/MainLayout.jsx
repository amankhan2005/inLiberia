 // src/layouts/MainLayout.jsx

import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Loader from "../components/common/Loader";

import useAuth from "../hooks/useAuth";

export default function MainLayout() {

  const { loading } = useAuth();



  // Show loader while auth loading

  if (loading) {

    return (

      <div className="h-screen flex items-center justify-center">

        <Loader />

      </div>

    );

  }



  return (

    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Header */}

      <Navbar />



      {/* Main Content */}

      <main className="flex-grow">

        <Outlet />

      </main>



      {/* Footer */}

      <Footer />

    </div>

  );

}