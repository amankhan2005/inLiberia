 import formatPrice from "../../utils/formatPrice";



export default function ListingInfo({

  listing

}) {



  return (

    <div>

      

      <h1 className="text-2xl font-bold">

        {listing.title}

      </h1>



      <p className="text-xl text-red-600 mt-2">

        {formatPrice(listing.price)}

      </p>



      <p className="mt-2 text-gray-600">

        📍 {listing.location}

      </p>



      <p className="mt-4">

        {listing.description}

      </p>



    </div>

  );

}