 import Container from "../common/Container";

import { Link } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";


export default function RegisterCTA() {


  const {

    isAuthenticated,

    setRedirectAfterLogin

  } = useContext(AuthContext);



  const handleClick = () => {

    if (!isAuthenticated) {

      setRedirectAfterLogin("/dashboard/add");

    }

  };



  return (

    <section className="bg-red-600 text-white">


      <Container className="py-16 text-center">


        <h2 className="text-3xl font-bold mb-4">

          Ready to list your property?

        </h2>



        <Link

          to={

            isAuthenticated

              ? "/dashboard/add"

              : "/login"

          }

          onClick={handleClick}

          className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"

        >


          {

            isAuthenticated

              ? "Add Listing"

              : "Get Started"

          }


        </Link>


      </Container>


    </section>

  );

}