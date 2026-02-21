import ListingCard from "./ListingCard";



export default function SimilarListings({

  listings

}) {



  if (!listings.length)

    return null;



  return (

    <div>

      

      <h2 className="text-xl font-semibold mb-4">

        Similar Listings

      </h2>



      <div className="grid md:grid-cols-3 gap-4">

        

        {listings.map(item => (

          

          <ListingCard

            key={item._id}

            listing={item}

          />



        ))}



      </div>



    </div>

  );

}