 

 import { useState, useEffect } from "react";
import { getCategories } from "../../services/categoryService";
import { getLocations } from "../../services/listingService";

import {
  FunnelIcon,
  MapPinIcon,
  Squares2X2Icon
} from "@heroicons/react/24/outline";


export default function FilterSidebar({ onFilter }) {

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const [filters, setFilters] = useState({

    category: "",
    location: "",

  });



  useEffect(() => {

    getCategories().then(setCategories);
    getLocations().then(setLocations);

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
      location: "",

    };

    setFilters(empty);

    onFilter(empty);

  };





  return (

<div className="

bg-white
border border-gray-100
rounded-2xl
shadow-sm
hover:shadow-md
transition
p-6
space-y-6
sticky top-24

">


{/* HEADER */}

<div className="flex items-center gap-2">

<FunnelIcon className="w-5 h-5 text-green-600"/>

<h3 className="font-bold text-lg text-gray-900">

Filters

</h3>

</div>





{/* CATEGORY */}

<div>

<label className="

text-sm
font-semibold
text-gray-700
flex items-center gap-2 mb-2

">

<Squares2X2Icon className="w-4 text-green-600"/>

Category

</label>



<select

name="category"
value={filters.category}
onChange={handleChange}

className="

w-full
border border-gray-200
focus:border-green-500
focus:ring-2
focus:ring-green-100
outline-none
px-4 py-3
rounded-xl
transition

"

>

<option value="">

All Categories

</option>


{categories.map(cat => (

<option key={cat._id} value={cat._id}>

{cat.name}

</option>

))}


</select>

</div>







{/* LOCATION */}

<div>

<label className="

text-sm
font-semibold
text-gray-700
flex items-center gap-2 mb-2

">

<MapPinIcon className="w-4 text-green-600"/>

Location

</label>



<select

name="location"
value={filters.location}
onChange={handleChange}

className="

w-full
border border-gray-200
focus:border-green-500
focus:ring-2
focus:ring-green-100
outline-none
px-4 py-3
rounded-xl
transition

"

>

<option value="">

All Locations

</option>


{locations.map((loc, index) => (

<option key={index} value={loc}>

{loc}

</option>

))}


</select>

</div>








{/* BUTTONS */}

<div className="flex gap-3 pt-2">


<button

onClick={applyFilters}

className="

flex-1
bg-[#144474]
hover:bg-green-700
text-white
font-semibold
py-3
rounded-xl
shadow-sm
hover:shadow-md
transition

"

>

Apply

</button>



<button

onClick={clearFilters}

className="

flex-1
border border-gray-200
hover:border-red-300
hover:text-red-600
font-semibold
py-3
rounded-xl
transition

"

>

Clear

</button>


</div>




</div>

  );

}