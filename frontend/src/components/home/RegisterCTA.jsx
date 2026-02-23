 import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


export default function RegisterCTA() {

const { isAuthenticated, setRedirectAfterLogin } = useContext(AuthContext);


const handleClick = () => {

if (!isAuthenticated) {

setRedirectAfterLogin("/dashboard/add");

}

};



return (

<section className="max-w-7xl mb-5   mx-auto px-4 sm:px-6 lg:px-8">


<div className="w-full bg-[#d8232a] text-white text-center rounded-2xl py-20  md:px-12">


{/* HEADING */}

<h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">

List Your Property.

<span className="block">

Connect with Real Investors.

</span>

</h2>



{/* SUB HEADING */}

<p className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">

Publish your listing and start receiving investor interest today.

</p>



{/* BUTTON */}

 <Link
to={isAuthenticated ? "/dashboard/add" : "/login"}
onClick={handleClick}
className="

group

inline-flex

items-center

gap-2

bg-white

text-red-600

font-semibold

px-8 py-4

rounded-full

hover:bg-gray-100

transition-all

duration-300

"

>

{isAuthenticated ? "Add Property" : "Get Started"}


<ArrowRightIcon

className="

w-5 h-5

transition-transform

duration-300

group-hover:translate-x-1

"

/>


</Link>



</div>


</section>

);

}