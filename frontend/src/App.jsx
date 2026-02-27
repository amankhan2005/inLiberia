 import { Routes, Route } from "react-router-dom";

import RouteScrollTop from "./components/RouteScrollTop";


// Layouts
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";


// Public Pages
import Home from "./pages/public/Home";
import BrowseListings from "./pages/public/BrowseListings";
import ListingDetail from "./pages/public/ListingDetail";
import Categories from "./pages/public/categories";
import Helpdesk from "./pages/HelpDesk"
import AboutPage from "./pages/About"
import CategoryPage from "./pages/public/CategoryPage";
import SearchResult from "./pages/public/SearchResult";
import NotFound from "./pages/public/NotFound";
import VerifySuccess from "./pages/VerifySuccess";
import VerifyEmail from "./pages/VerifyEmail";


// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";


// Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard";
import AddListing from "./pages/dashboard/AddListing";
import MyListings from "./pages/dashboard/MyListings";
import Profile from "./pages/dashboard/Profile";
import EditListing from "./pages/dashboard/EditListing";


export default function App() {

  return (

    <>

      {/* ⭐ ADD HERE */}
      <RouteScrollTop />

      <Routes>

        {/* PUBLIC WEBSITE ROUTES */}

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/browse" element={<BrowseListings />} />

          <Route path="/helpdesk" element={<Helpdesk />} />

          <Route path="/about-us" element={<AboutPage/>}/>

          <Route path="/listing/:slug" element={<ListingDetail />} />

          <Route path="/categories" element={<Categories />} />

          {/* <Route path="/categories/:category" element={<CategoryPage />} /> */}

          <Route path="/search" element={<SearchResult />} />
          <Route path="/verify-success" element={<VerifySuccess />} />
          <Route path="/verify/:token" element={<VerifyEmail />} />

        </Route>


        {/* AUTH ROUTES */}

        <Route element={<MainLayout />}>

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Route>


        {/* DASHBOARD */}

        <Route element={<DashboardLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/dashboard/add" element={<AddListing />} />

          <Route path="/dashboard/my" element={<MyListings />} />

          <Route path="/dashboard/profile" element={<Profile />} />

          <Route path="/dashboard/edit/:id" element={<EditListing />} />

        </Route>


        {/* 404 */}

        <Route path="*" element={<NotFound />} />


      </Routes>

    </>

  );

}