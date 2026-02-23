 import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

import { getCategories } from "../../services/categoryService";


export default function Hero(){

const navigate = useNavigate();

const [categories,setCategories] = useState([]);
const [category,setCategory] = useState("");

const [open,setOpen] = useState(false);

const dropdownRef = useRef();


useEffect(()=>{

getCategories().then(setCategories);

},[]);



useEffect(()=>{

function close(e){

if(dropdownRef.current && !dropdownRef.current.contains(e.target)){

setOpen(false);

}

}

document.addEventListener("click",close);

return ()=> document.removeEventListener("click",close);

},[]);




const handleSearch = ()=>{

const params = new URLSearchParams();

if(category){

params.append("category",category);

}

navigate(`/browse?${params.toString()}`);

};



const selectedName =
categories.find(c=>c._id===category)?.name;



return(

<section className="bg-gray-50">


<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 text-center">


{/* TAGLINE */}

<p className="text-red-600 font-semibold tracking-wide mb-4 text-sm sm:text-base">

INVESTMENT PLATFORM • LIBERIA

</p>



{/* HEADING */}

<h1 className="font-semibold text-gray-900 leading-tight max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl">

Invest Smarter with

<span className="block mt-2 text-red-600">

#InvestInLiberia

</span>

</h1>



{/* SUBTEXT */}

<p className="mt-5 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">

Discover verified hospitals, schools, restaurants,
and businesses ready for investment across Liberia.

</p>





{/* SEARCH BAR */}

<div className="mt-10 flex justify-center">


<div
ref={dropdownRef}
className="

relative

flex items-center

w-full
max-w-xl

bg-white

border border-gray-300

rounded-full

shadow-sm

hover:shadow-md

transition

px-2 py-2

"

>


{/* ICON */}

<div className="pl-3 pr-2">

<BuildingOfficeIcon className="w-5 h-5 text-red-500"/>

</div>



{/* SELECT BUTTON */}

<button
onClick={()=>setOpen(!open)}
className="

flex-1

text-left

text-gray-800

font-medium

outline-none

px-2

text-sm sm:text-base

"
>

{selectedName || "Select investment category"}

</button>




{/* SEARCH BUTTON */}

<button

onClick={handleSearch}

className="

bg-red-600
hover:bg-red-700

text-white

rounded-full

w-11 h-11

flex items-center justify-center

shadow

transition

"

>

<MagnifyingGlassIcon className="w-5 h-5"/>

</button>





{/* DROPDOWN */}

{open &&(

<div className="

absolute

top-full
mt-2

w-full

bg-white

border border-gray-200

rounded-xl

shadow-lg

overflow-hidden

z-50

text-left

"

>


{categories.map(cat=>(

<div
key={cat._id}
onClick={()=>{
setCategory(cat._id);
setOpen(false);
}}
className="

px-5 py-3

cursor-pointer

hover:bg-gray-50

hover:text-red-600

transition

"
>

{cat.name}

</div>

))}


</div>

)}



</div>


</div>





 



</div>


</section>

);

}





function Stat({number,label}){

return(

<div className="flex flex-col items-center">

<p className="font-semibold text-gray-900 text-lg sm:text-xl">

{number}

</p>

<p className="text-gray-500 text-xs sm:text-sm">

{label}

</p>

</div>

);

}