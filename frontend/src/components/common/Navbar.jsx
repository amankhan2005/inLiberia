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


          <Link

            to="/categories/Residence"

            className="hover:text-red-600"

          >

            Residences

          </Link>



          {/* ⭐ BUSINESS */}

          <Link

            to="/categories/Business"

            className="hover:text-red-600"

          >

            Business

          </Link>

            <Link to="/categories">

              Categories

            </Link>

          </nav>



          {/* Right side */}

         {/* Right side */}
<div className="flex gap-4 items-center">

  {!user && (

    <>

      <Link to="/login">
        Login
      </Link>


      <Link
        to="/signup"
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Post Property
      </Link>

    </>

  )}



  {user && (

    <>

      {/* ⭐ ADD LISTING BUTTON */}
      <Link
        to="/dashboard/add"
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        + Add Listing
      </Link>



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