 import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { getListings } from "../../services/listingService";

import ListingGrid from "../../components/listing/ListingGrid";

import FilterSidebar from "../../components/search/FilterSidebar";

import SortDropdown from "../../components/search/SortDropdown";


export default function BrowseListings() {

  const location = useLocation();

  const [listings, setListings] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const params = new URLSearchParams(location.search);

    const category = params.get("category");


    fetchListings({

      category: category || ""

    });

  }, [location.search]);



  const fetchListings = async (filters = {}) => {

    setLoading(true);

    const data = await getListings(filters);

    setListings(data);

    setLoading(false);

  };



  const handleSort = (value) => {

    let sorted = [...listings];


    if (value === "price_asc")

      sorted.sort((a, b) => a.price - b.price);


    if (value === "price_desc")

      sorted.sort((a, b) => b.price - a.price);


    if (value === "newest")

      sorted.sort(

        (a, b) =>

          new Date(b.createdAt) -

          new Date(a.createdAt)

      );


    setListings(sorted);

  };



  return (

    <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">


      <FilterSidebar onFilter={fetchListings} />


      <div className="md:col-span-3">


        <div className="mb-4 flex justify-end">

          <SortDropdown onSort={handleSort} />

        </div>


        <ListingGrid

          listings={listings}

          loading={loading}

        />


      </div>


    </div>

  );

}