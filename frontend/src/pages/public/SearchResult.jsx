import { useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { getListings }

from "../../services/listingService";

import ListingGrid

from "../../components/listing/ListingGrid";



export default function SearchResult() {



  const [params] = useSearchParams();

  const query = params.get("q");



  const [listings, setListings] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    search();

  }, [query]);



  const search = async () => {

    const data = await getListings({

      search: query

    });



    setListings(data);

    setLoading(false);

  };



  return (

    <div className="max-w-7xl mx-auto px-4 py-8">

      

      <h1 className="text-xl font-semibold mb-4">

        Search Results for "{query}"

      </h1>



      <ListingGrid

        listings={listings}

        loading={loading}

      />



    </div>

  );

}