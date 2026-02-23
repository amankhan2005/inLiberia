 import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryService";
import Container from "../common/Container";
import { Link } from "react-router-dom";


export default function CategorySection() {

const [categories, setCategories] = useState([]);

useEffect(() => {

getCategories().then(setCategories);

}, []);



return (

<section className="bg-gray-50">

<Container className="py-15">


{/* HEADER */}

<div className="text-center mb-14">


<p className="text-red-600 font-semibold mb-3">

INVESTMENT OPPORTUNITIES

</p>


<h2 className="text-3xl md:text-4xl font-semibold text-gray-900">

Categories We Deal In

</h2>


<p className="text-gray-600 mt-4 max-w-2xl mx-auto">

Explore sectors where you can invest and grow your wealth in Liberia.

</p>


</div>




{/* CATEGORY GRID */}

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">


{categories.map((cat) => (

<Link

key={cat._id}

to={`/browse?category=${cat._id}`}

className="

group

bg-gradient-to-br

from-red-600
to-red-500

hover:from-red-700
hover:to-red-600

text-white

rounded-2xl

p-8

flex flex-col items-center justify-center

shadow-md

hover:shadow-xl

hover:-translate-y-2

transition-all duration-300

"

>


{/* ICON */}

<div className="text-4xl mb-4 group-hover:scale-110 transition">

{cat.icon || "🏢"}

</div>



{/* NAME */}

<h3 className="font-semibold text-lg text-center">

{cat.name}

</h3>



{/* SUBTEXT */}

<p className="text-red-100 text-sm mt-1 text-center">

Invest Now

</p>


</Link>

))}


</div>



</Container>

</section>

);

}