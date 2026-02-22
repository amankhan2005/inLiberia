 import { Link } from "react-router-dom";

import Container from "./Container";

import useAuth from "../../hooks/useAuth";


export default function Navbar() {


  const {

    user,

    logout,

    loading

  } = useAuth();



  if (loading) return null;



  return (

    <header className="bg-white shadow-sm sticky top-0 z-50">

      <Container>

        <div className="flex justify-between items-center h-16">



          {/* Logo */}

          <Link

            to="/"

            className="text-xl font-bold text-red-600"

          >

            inLiberia

          </Link>



          {/* Menu */}

          <nav className="hidden md:flex gap-6">

            <Link to="/browse">

              Browse

            </Link>


            <Link to="/categories">

              Categories

            </Link>

          </nav>



          {/* Right side */}

          <div className="flex gap-4">


            {!user && (

              <>

                <Link to="/login">

                  Login

                </Link>


                <Link

                  to="/signup"

                  className="bg-red-600 text-white px-4 py-2 rounded"

                >

                  Post Property

                </Link>

              </>

            )}



            {user && (

              <>

                <Link to="/dashboard/profile">

                  My Profile

                </Link>


                <button

                  onClick={logout}

                  className="text-red-600"

                >

                  Logout

                </button>

              </>

            )}



          </div>



        </div>

      </Container>

    </header>

  );

}