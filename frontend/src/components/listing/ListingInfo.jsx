 import formatPrice from "../../utils/formatPrice";

export default function ListingInfo({ listing }) {

  const BACKEND = "http://localhost:5000";

  if (!listing) return null;

  // ⭐ same logic as ListingCard
  const imageUrl =
    listing.images && listing.images.length > 0
      ? BACKEND + listing.images[0]
      : "https://via.placeholder.com/800x500?text=No+Image";

  return (

    <div className="bg-white shadow rounded-xl p-6 mt-4">


      {/* IMAGE */}

      <img
        src={imageUrl}
        alt=""
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/800x500?text=No+Image";
        }}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />


      {/* TITLE */}

      <h1 className="text-2xl font-bold mb-2">

        {listing.title}

      </h1>


      {/* PRICE */}

      <p className="text-red-600 text-xl font-bold mb-2">

        {formatPrice(listing.price)}

      </p>


      {/* LOCATION */}

      <p className="text-gray-600 mb-2">

        📍 {listing.location}

      </p>


      {/* CATEGORY */}

      <p className="text-blue-600 mb-4">

        🏷 Category: {listing.category?.name}

      </p>


      {/* DESCRIPTION */}

      <p className="text-gray-700 mb-4">

        {listing.description}

      </p>


      {/* CONTACT */}

      <div className="border-t pt-4">

        <h3 className="font-semibold mb-2">

          Contact Info

        </h3>

        <p>Email: {listing.contactEmail}</p>

        <p>Phone: {listing.contactPhone}</p>

      </div>

    </div>

  );

}