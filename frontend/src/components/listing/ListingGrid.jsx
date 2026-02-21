 import ListingCard from "./ListingCard";

import Loader from "../common/Loader";



export default function ListingGrid({

  listings,

  loading

}) {



  if (loading)

    return <Loader />;



  if (!listings.length)

    return (

      <p className="text-center">

        No listings found

      </p>

    );



  return (

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      

      {listings.map(listing => (

        

        <ListingCard

          key={listing._id}

          listing={listing}

        />



      ))}



    </div>

  );

}