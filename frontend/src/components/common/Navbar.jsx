// src/components/common/Navbar.jsx

import { Link } from "react-router-dom";

import Container from "./Container";

import useAuth from "../../hooks/useAuth";



export default function Navbar() {

  const { user, logout } = useAuth();



  return (

    <header className="bg-white shadow-sm sticky top-0 z-50">

      <Container>

        <div className="flex justify-between items-center h-16">

          

          {/* Logo */}

          <Link to="/" className="text-xl font-bold text-red-600">

            inLiberia

          </Link>



          {/* Menu */}

          <nav className="hidden md:flex gap-6">

            <Link to="/browse" className="hover:text-red-600">

              Browse

            </Link>



            <Link to="/categories" className="hover:text-red-600">

              Categories

            </Link>

          </nav>



          {/* Right side */}

          <div className="flex items-center gap-4">

            

            {user ? (

              <>

                <Link

                  to="/dashboard"

                  className="text-sm font-medium"

                >

                  Dashboard

                </Link>



                <button

                  onClick={logout}

                  className="text-sm text-red-600"

                >

                  Logout

                </button>

              </>

            ) : (

              <>

                <Link to="/login">

                  Login

                </Link>



                <Link

                  to="/signup"

                  className="bg-red-600 text-white px-4 py-2 rounded-lg"

                >

                  Post Property

                </Link>

              </>

            )}

          </div>

        </div>

      </Container>

    </header>

  );

}