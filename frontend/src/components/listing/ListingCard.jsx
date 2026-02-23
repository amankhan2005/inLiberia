 import { Link } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";

export default function ListingCard({ listing }) {

  const BACKEND_URL = "http://localhost:5000";

  // Safe image handling

  const imageUrl = listing.images?.length

    ? `${BACKEND_URL}${listing.images[0]}`

    : "https://via.placeholder.com/400x300?text=No+Image";


  return (

    <Link to={`/listing/${listing._id}`}>

      <div className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden">


        {/* IMAGE */}

        <img

          src={imageUrl}

          alt={listing.title}

          className="w-full h-52 object-cover"

        />


        {/* CONTENT */}

        <div className="p-4 space-y-1">


          {/* PRICE */}

          {/* <h3 className="text-red-600 font-bold text-lg">

            {formatPrice(listing.price)}

          </h3> */}


          {/* TITLE */}

          <p className="font-semibold text-gray-800 truncate">

            {listing.title}

          </p>


          {/* LOCATION */}

          <p className="text-gray-500 text-sm">

            📍 {listing.location}

          </p>


          {/* CATEGORY */}

          <p className="text-blue-600 text-sm">

            🏷 {listing.category?.name || "Property"}

          </p>


        </div>


      </div>

    </Link>

  );

}