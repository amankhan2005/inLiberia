 import Container from "../common/Container";

import { Link }

from "react-router-dom";



export default function RegisterCTA() {

  return (

    <section className="bg-red-600 text-white">

      <Container className="py-16 text-center">

        <h2 className="text-3xl font-bold mb-4">

          Ready to list your property?

        </h2>



        <Link

          to="/signup"

          className="bg-white text-red-600 px-6 py-3 rounded-lg"

        >

          Get Started

        </Link>

      </Container>

    </section>

  );

}