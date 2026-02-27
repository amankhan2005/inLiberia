 import { useEffect, useState } from "react";
import { getLocations } from "../../services/listingService";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Default fallback image
import mapImg from "../../assets/images/liberia.jpg";

export default function TopLocations() {
  const [locations, setLocations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // ================= LOAD =================
  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await getLocations();
      setLocations(data);
    } catch (err) {
      console.error(err);
    }
  }

  // ================= SHORT LOCATION FUNCTION =================
  function getShortLocation(location) {
    if (!location) return "Unknown Location";

    // Split by comma, dash, or common separators
    const parts = location
      .split(/[,-]/)
      .map((p) => p.trim())
      .filter(Boolean);

    // If we have parts, return the most specific (usually the last part or city name)
    if (parts.length >= 2) {
      // e.g. "Congo Town, Monrovia" -> "Congo Town"
      // or if it's long "123 Street, Area, City" -> "Area, City"
      return parts.slice(-2).join(", ");
    }
    
    // Capitalize first letter of each word for better presentation
    return location.replace(/\b\w/g, l => l.toUpperCase());
  }

  // ================= DYNAMIC IMAGE HELPER =================
  // Returns a unique image based on the location name using Unsplash Source
  function getLocationImage(location) {
    const cleanName = location ? location.split(",")[0].trim() : "liberia";
    
    // List of keywords to ensure high-quality relevant images
    const keywords = [
      "monrovia", "buchanan", "gbarnaga", "harper", 
      "kakata", "tubmanburg", "greenville", "voi"
    ];

    // Check if location contains a known city for better image accuracy
    const foundCity = keywords.find(city => 
      cleanName.toLowerCase().includes(city)
    );

    const searchQuery = foundCity || cleanName;
    
    // Return Unsplash source URL with dynamic query
    // This fetches a random image matching the query
    return `https://source.unsplash.com/600x400/?${encodeURIComponent(searchQuery)},liberia,city`;
  }

  // ================= SHOW LIMIT =================
  const visibleLocations = showAll ? locations : locations.slice(0, 6);

  return (
    <section className="bg-white pt-20 pb-24">
      <Container>
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#144474] rounded-full text-sm font-bold mb-4 tracking-wide">
            EXPLORE BY LOCATION
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Top Investment{" "}
            <span className="text-[#144474]">Locations</span>
          </h2>

          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            Discover prime real estate and business opportunities in these key areas.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleLocations.map((location, index) => (
            <Link
              key={index}
              to={`/browse?location=${encodeURIComponent(location)}`}
              className="group relative h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* IMAGE */}
              <img
                src={getLocationImage(location)}
                alt={location}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to default map image if Unsplash fails
                  e.target.onerror = null; 
                  e.target.src = mapImg;
                }}
              />

              {/* OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/40 to-transparent" />

              {/* CONTENT CONTAINER */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                
                {/* Top Badge (Visible on Hover) */}
                <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  View Listings
                </div>

                {/* Bottom Info */}
                <div className="flex items-center gap-3 mb-2">
                   <div className="bg-[#144474] p-2 rounded-lg">
                     <MapPinIcon className="w-4 h-4 text-white" />
                   </div>
                   <h3 className="text-xl font-bold tracking-tight drop-shadow-md">
                     {getShortLocation(location)}
                   </h3>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-200 font-medium transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span>Explore Opportunities</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BUTTON */}
        {locations.length > 6 && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 bg-white border-2 border-[#144474] text-[#144474] hover:bg-[#144474] hover:text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  {/* Up Arrow Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>View All Locations</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}