//  import { useEffect, useState } from "react";

// import { useLocation } from "react-router-dom";

// import { getListings } from "../../services/listingService";

// import ListingGrid from "../../components/listing/ListingGrid";

// import FilterSidebar from "../../components/search/FilterSidebar";

// import SortDropdown from "../../components/search/SortDropdown";


// export default function BrowseListings() {

//   const location = useLocation();

//   const [listings, setListings] = useState([]);

//   const [loading, setLoading] = useState(true);



//   useEffect(() => {

//     const params = new URLSearchParams(location.search);

//     const category = params.get("category");


//     fetchListings({

//       category: category || ""

//     });

//   }, [location.search]);



//   const fetchListings = async (filters = {}) => {

//     setLoading(true);

//     const data = await getListings(filters);

//     setListings(data);

//     setLoading(false);

//   };



//   const handleSort = (value) => {

//     let sorted = [...listings];


//     if (value === "price_asc")

//       sorted.sort((a, b) => a.price - b.price);


//     if (value === "price_desc")

//       sorted.sort((a, b) => b.price - a.price);


//     if (value === "newest")

//       sorted.sort(

//         (a, b) =>

//           new Date(b.createdAt) -

//           new Date(a.createdAt)

//       );


//     setListings(sorted);

//   };



//   return (

//     <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">


//       <FilterSidebar onFilter={fetchListings} />


//       <div className="md:col-span-3">


//         {/* <div className="mb-4 flex justify-end">

//           <SortDropdown onSort={handleSort} />

//         </div> */}


//         <ListingGrid

//           listings={listings}

//           loading={loading}

//         />


//       </div>


//     </div>

//   );

// }

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getListings } from "../../services/listingService";

import ListingGrid from "../../components/listing/ListingGrid";
import FilterSidebar from "../../components/search/FilterSidebar";
import SortDropdown from "../../components/search/SortDropdown";

import { FaFilter } from "react-icons/fa";


export default function BrowseListings() {

  const location = useLocation();

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showFilter, setShowFilter] = useState(false);


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

    <div className="max-w-7xl mx-auto px-4 py-6">


      {/* MOBILE TOP BAR */}

      <div className="flex justify-between items-center mb-4 md:hidden">

        <button
          onClick={() => setShowFilter(true)}
          className="flex items-center gap-2 border px-4 py-2 rounded"
        >
          <FaFilter />
          Filters
        </button>


        {/* <SortDropdown onSort={handleSort} /> */}

      </div>



      <div className="grid md:grid-cols-4 gap-6">


        {/* SIDEBAR DESKTOP */}

        <div className="hidden md:block">

          <FilterSidebar onFilter={fetchListings} />

        </div>



        {/* MOBILE SIDEBAR */}

        {showFilter && (

          <div className="fixed inset-0 z-50 bg-black/40">

            <div className="bg-white w-72 h-full p-4">

              <div className="flex justify-between mb-4">

                <h2 className="font-semibold">
                  Filters
                </h2>

                <button
                  onClick={() => setShowFilter(false)}
                >
                  Close
                </button>

              </div>

              <FilterSidebar
                onFilter={(data) => {
                  fetchListings(data);
                  setShowFilter(false);
                }}
              />

            </div>

          </div>

        )}



        {/* LISTINGS */}

        <div className="md:col-span-3">

          {/* DESKTOP SORT */}

          {/* <div className="hidden md:flex justify-end mb-4">

            <SortDropdown onSort={handleSort} />

          </div> */}


          <ListingGrid
            listings={listings}
            loading={loading}
          />


        </div>


      </div>


    </div>

  );

}