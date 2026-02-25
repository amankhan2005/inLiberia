 import { useEffect, useState } from "react";
import { getLocations } from "../../services/listingService";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import mapImg from "../../assets/images/liberia.jpg";

export default function TopLocations() {

  const [locations, setLocations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getLocations();
    setLocations(data);
  }

  /* show only 3 initially */
  const visibleLocations = showAll
    ? locations
    : locations.slice(0, 3);

  return (
    <section className="bg-slate-50 pt-20 pb-24">
      <Container>
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#144474] rounded-full text-sm font-bold tracking-wide mb-4">
            EXPLORE BY LOCATION
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Top Investment
            <span className="text-[#144474]"> Locations </span>
          </h2>
          
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Choose a city to explore verified opportunities
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleLocations.map(location => (
            <Link
              key={location}
              to={`/browse?location=${location}`}
              className="group relative h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* MAP IMAGE */}
              <img
                src={mapImg}
                alt={location}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70 group-hover:to-black/80 transition-all duration-300" />

              {/* CENTER TEXT */}
              <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
                
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mb-4 border border-white/30 transition-transform duration-300 group-hover:scale-110">
                   <MapPinIcon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-lg">
                  {location}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  <span>Explore Opportunities</span>
                  <ArrowRightIcon className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        {locations.length > 3 && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 bg-white border-2 border-[#144474] text-[#144474] hover:bg-[#144474] hover:text-white px-8 py-3.5 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
            >
              {showAll ? "Show Less" : "View More Locations"}
              <ArrowRightIcon className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`} />
            </button>
          </div>
        )}

      </Container>
    </section>
  );
}