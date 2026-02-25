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





  // const loadListing = async () => {

    

  //   try{


  //   const res = await getListingById(id);


  //   const currentListing = res.listing || res;


  //   setListing(currentListing);





  //   const allRes = await getListings();


  //   const allListings = allRes.listings || [];



  //   const filtered = allListings.filter(

  //     l =>

  //     l.category?._id === currentListing.category?._id

  //     &&

  //     l._id !== id

  //   );



  //   setSimilar(filtered.slice(0, 3));


  //   }


  //   catch(err){

  //     console.log(err);

  //   }



  // };

  const loadListing = async () => {

  try {

    // ⭐ GET SINGLE LISTING

    const res = await getListingById(id);

    const currentListing = res.listing || res;

    setListing(currentListing);



    // ⭐ GET ALL LISTINGS

    const allRes = await getListings();

    const allListings = allRes.listings || [];



    // ⭐ FILTER SIMILAR

    const filtered = allListings.filter(

      l =>

        l.category?._id === currentListing.category?._id

        &&

        l._id !== id

    );



    setSimilar(filtered.slice(0,3));

  }

  catch(err){

    console.log(err);

  }

};




  if (!listing)

    return (

      <div className="text-center py-20">

        Loading...

      </div>

    );





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