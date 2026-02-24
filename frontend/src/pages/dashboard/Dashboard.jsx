 import StatsCard from "../../components/dashboard/StatsCard";

import { useEffect, useState } from "react";

import { getMyListings } from "../../services/listingService";

import useAuth from "../../hooks/useAuth";

import {
FaList,
FaChartLine,
FaEye
} from "react-icons/fa";


export default function Dashboard() {

const [count,setCount] = useState(0);

const { user } = useAuth();


useEffect(()=>{

getMyListings().then(data=>setCount(data.length));

},[]);



return(

<div className="

w-full

max-w-7xl

mx-auto

px-4 sm:px-6 lg:px-8

py-6 sm:py-8

">


{/* HEADER */}

<div className="mb-8">


<p className="

text-red-600

font-semibold

text-sm

tracking-wide

mb-2

">

DASHBOARD

</p>



<h1 className="

text-2xl sm:text-3xl

font-semibold

text-gray-900

">

Welcome back,

<span className="text-red-600">

{" "} {user?.name}

</span>

</h1>



<p className="

text-gray-500

mt-1

text-sm

">

Here’s what's happening with your listings today.

</p>


</div>





{/* STATS GRID */}

<div className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-5 sm:gap-6

">



{/* MY LISTINGS */}

<StatsCard

title="My Listings"

value={count}

icon={<FaList/>}

color="red"

/>



 


</div>





{/* QUICK SECTION */}

<div className="

mt-10

bg-white

border

rounded-2xl

p-6

shadow-sm

">


<h2 className="

font-semibold

text-gray-900

mb-3

">

Quick Actions

</h2>



<p className="

text-gray-500

text-sm

mb-4

">

Manage your listings, add new investment opportunities, and track performance.

</p>



</div>



</div>

);

}