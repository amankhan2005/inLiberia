 import { useEffect, useState } from "react";
import { getListings } from "../../services/listingService";
import Container from "../common/Container";
import ListingCard from "../listing/ListingCard";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


export default function FeaturedSection(){

const [listings,setListings] = useState([]);

useEffect(()=>{
load();
},[]);


async function load(){

const data = await getListings({
featured:true,
limit:3
});

setListings(data);

}



return(

<section className="bg-gray-50 ">


<Container className="py-15">


{/* HEADER */}

<div className="text-center mb-14">


<p className="text-red-600 font-semibold tracking-wide text-sm mb-4">

FEATURED PROPERTIES

</p>



<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">

Explore Our

<span className="text-red-600"> #Featured </span>

Investment Opportunities

</h2>



<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

Discover handpicked properties with high investment potential across Liberia.

</p>


</div>





{/* LISTINGS GRID */}

<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">


{listings.map(listing=>(

<ListingCard key={listing._id} listing={listing}/>

))}


</div>




{/* VIEW MORE BUTTON — BOTTOM */}

<div className="flex justify-center mt-14">


<Link

to="/browse"

className="

group

inline-flex

items-center

gap-2

bg-red-600

hover:bg-red-700

text-white

px-8 py-4

rounded-full

font-medium

shadow-md

hover:shadow-xl

transition-all

duration-300

"

>

View More Properties


<ArrowRightIcon className="

w-5 h-5

group-hover:translate-x-1

transition

"/>


</Link>


</div>




</Container>


</section>

);

}