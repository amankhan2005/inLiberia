 import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";



import {

  getListingById,

  getListings

} from "../../services/listingService";



import ListingGallery

from "../../components/listing/ListingGallery";



import ListingInfo

from "../../components/listing/ListingInfo";



import ContactCard

from "../../components/listing/ContactCard";



import SimilarListings

from "../../components/listing/SimilarListings";



export default function ListingDetail() {

  

  const { id } = useParams();



  const [listing, setListing] = useState(null);

  const [similar, setSimilar] = useState([]);



  useEffect(() => {

    loadListing();

  }, [id]);



  const loadListing = async () => {

    

    const data = await getListingById(id);

    setListing(data);



    const all = await getListings();

    const filtered = all.filter(

      l => l.category === data.category && l._id !== id

    );



    setSimilar(filtered.slice(0, 3));



  };



  if (!listing) return null;



  return (

    <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">

      

      <div className="md:col-span-2">

        

        <ListingGallery

          images={listing.images}

        />



        <ListingInfo listing={listing} />



        <SimilarListings listings={similar} />



      </div>



      <ContactCard listing={listing} />



    </div>

  );

}