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

    <div className="max-w-7xl mx-auto py-18 px-4">

    <div className="mb-8">

  {/* SMALL LABEL */}

  <p className="text-sm font-semibold tracking-wide text-[#144474] mb-2">

    INVESTMENT OPPORTUNITIES

  </p>



  {/* MAIN HEADING */}

  <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">

    {category}

  </h1>



  {/* UNDERLINE */}

  <div className="w-12 h-[3px] bg-[#144474] mt-3 rounded-full"></div>


</div>


      <ListingGrid listings={listings} loading={loading} />

    </div>

  );

}