 import {

  Routes,

  Route,

  Navigate

} from "react-router-dom";


// PAGES

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import Users from "./pages/Users";

import Listings from "./pages/Listings";

import Categories from "./pages/Categories";


// LAYOUT + PROTECTION

import AdminLayout from "./components/common/AdminLayout";

import ProtectedRoute from "./components/common/ProtectedRoute";



export default function App() {


  return (

    <Routes>


      {/* LOGIN ROUTE */}

      <Route

        path="/login"

        element={<Login />}

      />



      {/* DASHBOARD */}

      <Route

        path="/"

        element={

          <ProtectedRoute>

            <AdminLayout>

              <Dashboard />

            </AdminLayout>

          </ProtectedRoute>

        }

      />



      {/* USERS */}

      <Route

        path="/users"

        element={

          <ProtectedRoute>

            <AdminLayout>

              <Users />

            </AdminLayout>

          </ProtectedRoute>

        }

      />



      {/* LISTINGS */}

      <Route

        path="/listings"

        element={

          <ProtectedRoute>

            <AdminLayout>

              <Listings />

            </AdminLayout>

          </ProtectedRoute>

        }

      />



      {/* CATEGORIES */}

      <Route

        path="/categories"

        element={

          <ProtectedRoute>

            <AdminLayout>

              <Categories />

            </AdminLayout>

          </ProtectedRoute>

        }

      />



      {/* REDIRECT UNKNOWN */}

      <Route

        path="*"

        element={<Navigate to="/" />}

      />


    </Routes>

  );

}