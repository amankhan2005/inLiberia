 import { Link } from "react-router-dom";

import formatPrice from "../../utils/formatPrice";

export default function ListingCard({ listing }) {

  return (

    <Link to={`/listing/${listing._id}`}>

      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

        

        {/* Image */}

        <img

          src={listing.images?.[0] || "/images/placeholder.jpg"}

          alt={listing.title}

          className="h-48 w-full object-cover"

        />



        {/* Content */}

        <div className="p-4">

          

          <h3 className="text-lg font-semibold text-gray-800">

            {formatPrice(listing.price)}

          </h3>



          <p className="text-gray-600 text-sm mt-1">

            {listing.title}

          </p>



          <p className="text-gray-500 text-sm mt-1">

            📍 {listing.location}

          </p>



        </div>



      </div>

    </Link>

  );

}