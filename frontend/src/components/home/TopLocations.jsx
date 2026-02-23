 import { useEffect, useState } from "react";

import { getLocations } from "../../services/listingService";

import Container from "../common/Container";

import { Link } from "react-router-dom";

import { MapPinIcon } from "@heroicons/react/24/solid";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

import mapImg from "../../assets/images/liberia.jpg";



export default function TopLocations(){


const [locations,setLocations] = useState([]);

const [showAll,setShowAll] = useState(false);



useEffect(()=>{

load();

},[]);



async function load(){

const data = await getLocations();

setLocations(data);

}



/* show only 3 initially */

const visibleLocations = showAll

? locations

: locations.slice(0,3);




return(

<section className="bg-gray-50">


<Container className="py-15">


{/* HEADER */}

<div className="text-center mb-14">


<p className="text-red-600 font-semibold text-sm mb-3 tracking-wide">

EXPLORE BY LOCATION

</p>


<h2 className="text-3xl md:text-4xl font-semibold text-gray-900">

Top Investment

<span className="text-red-600"> Locations </span>

</h2>


<p className="text-gray-600 mt-3">

Choose a city to explore opportunities

</p>


</div>




{/* GRID */}

<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">


{visibleLocations.map(location=>(


<Link

key={location}

to={`/browse?location=${location}`}

className="

group

relative

h-52

rounded-2xl

overflow-hidden

shadow-md

hover:shadow-2xl

hover:-translate-y-1

transition-all

duration-300

"

>


{/* MAP IMAGE */}

<img

src={mapImg}

alt={location}

className="

absolute inset-0

w-full h-full

object-cover

group-hover:scale-110

transition duration-700

"

/>




{/* DARK OVERLAY */}

<div className="

absolute inset-0

bg-gradient-to-b

from-black/40

via-black/40

to-black/60

group-hover:to-black/70

transition

"/>





{/* CENTER TEXT */}

<div className="

relative

h-full

flex

flex-col

items-center

justify-center

text-white

text-center

px-4

">


<MapPinIcon className="w-8 h-8 text-red-400 mb-3"/>



<h3 className="

text-2xl

md:text-3xl

font-bold

tracking-wide

drop-shadow-lg

">

{location}

</h3>



<p className="text-sm text-gray-200 mt-1">

Explore Opportunities

</p>


</div>



</Link>


))}


</div>





{/* VIEW MORE BUTTON */}

{locations.length > 3 && (

<div className="flex justify-center mt-14">


<button

onClick={()=>setShowAll(!showAll)}

className="

group

inline-flex

items-center

gap-2

bg-red-600

hover:bg-red-700

text-white

px-8 py-3

rounded-full

font-medium

shadow-md

hover:shadow-xl

transition-all

duration-300

"

>


{showAll ? "Show Less" : "View More"}



<ArrowRightIcon className="

w-5 h-5

group-hover:translate-x-1

transition

"/>


</button>


</div>

)}




</Container>


</section>

);

}