 import { useState, useEffect } from "react";

import { getCategories } from "../../services/categoryService";

import { getLocations } from "../../services/listingService"; // ⭐ ADD THIS


export default function FilterSidebar({ onFilter }) {

  const [categories, setCategories] = useState([]);

  const [locations, setLocations] = useState([]); // ⭐ ADD THIS


  const [filters, setFilters] = useState({

    category: "",

    minPrice: "",

    maxPrice: "",

    location: "",

  });



  // Load categories

  useEffect(() => {

    getCategories().then(setCategories);

    getLocations().then(setLocations); // ⭐ LOAD LOCATIONS

  }, []);




  const handleChange = (e) => {

    setFilters({

      ...filters,

      [e.target.name]: e.target.value,

    });

  };



  const applyFilters = () => {

    onFilter(filters);

  };



  const clearFilters = () => {

    const empty = {

      category: "",

      minPrice: "",

      maxPrice: "",

      location: "",

    };

    setFilters(empty);

    onFilter(empty);

  };



  return (

    <div className="bg-white shadow rounded-xl p-5 space-y-4">


      <h3 className="font-semibold text-lg">

        Filters

      </h3>



      {/* CATEGORY */}

      <div>

        <label className="text-sm text-gray-600">

          Category

        </label>

        <select

          name="category"

          value={filters.category}

          onChange={handleChange}

          className="w-full border px-3 py-2 rounded mt-1"

        >

          <option value="">All Categories</option>

          {categories.map(cat => (

            <option key={cat._id} value={cat._id}>

              {cat.name}

            </option>

          ))}

        </select>

      </div>




      {/* LOCATION DROPDOWN ⭐ UPDATED */}

      <div>

        <label className="text-sm text-gray-600">

          Location

        </label>

        <select

          name="location"

          value={filters.location}

          onChange={handleChange}

          className="w-full border px-3 py-2 rounded mt-1"

        >

          <option value="">All Locations</option>

          {locations.map((loc, index) => (

            <option key={index} value={loc}>

              {loc}

            </option>

          ))}

        </select>

      </div>




      {/* PRICE RANGE */}

      <div>

        <label className="text-sm text-gray-600">

          Price Range

        </label>

        <div className="flex gap-2 mt-1">

          <input

            name="minPrice"

            placeholder="Min"

            value={filters.minPrice}

            onChange={handleChange}

            className="w-full border px-3 py-2 rounded"

          />


          <input

            name="maxPrice"

            placeholder="Max"

            value={filters.maxPrice}

            onChange={handleChange}

            className="w-full border px-3 py-2 rounded"

          />

        </div>

      </div>




      {/* BUTTONS */}

      <div className="flex gap-2">


        <button

          onClick={applyFilters}

          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded"

        >

          Apply

        </button>


        <button

          onClick={clearFilters}

          className="flex-1 bg-gray-200 hover:bg-gray-300 py-2 rounded"

        >

          Clear

        </button>


      </div>


    </div>

  );

}