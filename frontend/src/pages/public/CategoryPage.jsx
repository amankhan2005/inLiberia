 import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getListings } from "../../services/listingService";
import ListingGrid from "../../components/listing/ListingGrid";


export default function CategoryPage() {

  const { category } = useParams();

  const [listings, setListings] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetchListings();

  }, [category]);


  const fetchListings = async () => {

    const data = await getListings({
      categoryName: category
    });

    setListings(data);

    setLoading(false);

  };


  return (

    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">

        {category}

      </h1>


      <ListingGrid listings={listings} loading={loading} />

    </div>

  );

}