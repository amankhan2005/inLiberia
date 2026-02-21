 import formatPrice from "../../utils/formatPrice";

export default function ListingItem({ listing, onDelete }) {

  return (

    <div className="bg-white p-4 shadow rounded-lg flex justify-between items-center">

      <div>

        <h3 className="font-semibold">

          {listing.title}

        </h3>

        <p className="text-gray-500">

          {formatPrice(listing.price)}

        </p>

      </div>

      <button
        onClick={() => onDelete(listing._id)}
        className="text-red-600"
      >
        Delete
      </button>

    </div>

  );

}