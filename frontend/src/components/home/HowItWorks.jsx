 import Container from "../common/Container";

import {
MagnifyingGlassIcon,
ShieldCheckIcon,
EyeIcon,
CheckCircleIcon
} from "@heroicons/react/24/outline";


export default function HowItWorks(){


const steps = [

{
title: "Search & Discover",
desc: "Search for any business, school, hospital, or residence across all 15 counties of Liberia.",
icon: MagnifyingGlassIcon
},

{
title: "Verified Information",
desc: "Every listing is manually verified by our team within 24 hours for accuracy and authenticity.",
icon: ShieldCheckIcon
},

{
title: "Virtual Tours",
desc: "Take virtual tours of hotels, restaurants, and properties before your visit to Liberia.",
icon: EyeIcon
},

{
title: "Connect with Confidence",
desc: "Contact verified businesses directly with phone numbers, emails, and addresses you can trust.",
icon: CheckCircleIcon
}

];



return(

<section className="bg-gray-50">


<Container className="py-15">


{/* HEADER */}

<div className="text-center mb-16">

<p className="text-red-600 font-semibold text-sm tracking-wide mb-3">
HOW IT WORKS
</p>

<h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
Your Trusted Guide to
<span className="text-red-600"> Liberia </span>
</h2>

<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
Whether you're in the diaspora, an investor, or a tourist — we make connecting with Liberia simple and reliable
</p>

</div>



{/* STEPS GRID */}

<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 items-stretch">


{steps.map((step,index)=>{

const Icon = step.icon;

return(


<div

key={index}

className="

group

bg-white

rounded-2xl

p-8

shadow-sm

hover:shadow-xl

hover:-translate-y-2

transition-all

duration-300

relative

flex flex-col

h-full

"

>


{/* NUMBER BADGE */}

<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white w-9 h-9 rounded-full shadow flex items-center justify-center font-semibold text-red-600 border border-red-100">

{index+1}

</div>



{/* ICON */}

<div className="flex justify-center">

<div className="bg-red-500 p-4 rounded-xl transition duration-300 group-hover:bg-red-600">

<Icon className="w-7 h-7 text-white"/>

</div>

</div>



{/* CONTENT */}

<div className="flex flex-col flex-grow justify-center text-center mt-6">


<h3 className="font-semibold text-lg mb-3 min-h-[56px] flex items-center justify-center">

{step.title}

</h3>


<p className="text-gray-500 text-sm leading-relaxed">

{step.desc}

</p>


</div>



</div>

);

})}



</div>



</Container>

</section>

);

}