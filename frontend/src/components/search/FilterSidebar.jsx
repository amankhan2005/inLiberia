import { useState } from "react";



export default function FilterSidebar({

  onFilter

}) {



  const [filters, setFilters] = useState({

    minPrice: "",

    maxPrice: "",

    location: "",

  });



  const handleChange = (e) => {

    setFilters({

      ...filters,

      [e.target.name]: e.target.value,

    });

  };



  const applyFilters = () => {

    onFilter(filters);

  };



  return (

    <div className="bg-white shadow rounded-xl p-4">

      

      <h3 className="font-semibold mb-4">

        Filters

      </h3>



      {/* Location */}

      <input

        name="location"

        placeholder="Location"

        value={filters.location}

        onChange={handleChange}

        className="w-full border px-3 py-2 mb-3 rounded"

      />



      {/* Min Price */}

      <input

        name="minPrice"

        placeholder="Min Price"

        value={filters.minPrice}

        onChange={handleChange}

        className="w-full border px-3 py-2 mb-3 rounded"

      />



      {/* Max Price */}

      <input

        name="maxPrice"

        placeholder="Max Price"

        value={filters.maxPrice}

        onChange={handleChange}

        className="w-full border px-3 py-2 mb-3 rounded"

      />



      <button

        onClick={applyFilters}

        className="w-full bg-red-600 text-white py-2 rounded"

      >

        Apply

      </button>



    </div>

  );

}