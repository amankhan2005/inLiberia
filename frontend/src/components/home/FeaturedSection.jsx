 import { useEffect, useState } from "react";
import { getListings } from "../../services/listingService";
import Container from "../common/Container";
import ListingCard from "../listing/ListingCard";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function FeaturedSection() {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getListings({
      featured: true,
      limit: 3
    });
    setListings(data);
  }

  return (
    <section className="bg-slate-50 pt-20 pb-24">
      <Container>
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#144474] rounded-full text-sm font-bold tracking-wide mb-4">
            FEATURED PROPERTIES
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Explore Our
            <span className="text-[#144474]"> #Featured </span>
            Investment Opportunities
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Discover handpicked properties with high investment potential across Liberia.
          </p>
        </div>

        {/* LISTINGS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {listings.map(listing => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        <div className="flex justify-center mt-16">
          <Link
            to="/browse"
            className="group inline-flex items-center gap-2 bg-[#144474] hover:bg-[#0f345a] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View More Properties
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

      </Container>
    </section>
  );
}