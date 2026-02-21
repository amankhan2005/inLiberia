 import Container from "../common/Container";
import SearchBar from "../search/SearchBar";

export default function Hero() {

  return (

    <section className="bg-gradient-to-r from-red-600 to-red-500 text-white">

      <Container className="py-20">

        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">

            Find the Perfect Property in Liberia

          </h1>

          <p className="text-lg mb-6 text-red-100">

            Browse verified investment opportunities.

          </p>

          <SearchBar />

        </div>

      </Container>

    </section>

  );

}