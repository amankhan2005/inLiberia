//  import formatPrice from "../../utils/formatPrice";

// export default function ListingInfo({ listing }) {

//   const BACKEND = "http://localhost:5000";

//   if (!listing) return null;

//   // ⭐ same logic as ListingCard
//   const imageUrl =
//     listing.images && listing.images.length > 0
//       ? BACKEND + listing.images[0]
//       : "https://via.placeholder.com/800x500?text=No+Image";

//   return (

//     <div className="bg-white shadow rounded-xl p-6 mt-4">


//       {/* IMAGE */}

//       <img
//         src={imageUrl}
//         alt=""
//         onError={(e) => {
//           e.target.src =
//             "https://via.placeholder.com/800x500?text=No+Image";
//         }}
//         className="w-full h-96 object-cover rounded-lg mb-6"
//       />


//       {/* TITLE */}

//       <h1 className="text-2xl font-bold mb-2">

//         {listing.title}

//       </h1>


//       {/* PRICE */}

//       {/* <p className="text-red-600 text-xl font-bold mb-2">

//         {formatPrice(listing.price)}

//       </p> */}


//       {/* LOCATION */}

//       <p className="text-gray-600 mb-2">

//         📍 {listing.location}

//       </p>


//       {/* CATEGORY */}

//       <p className="text-blue-600 mb-4">

//         🏷 Category: {listing.category?.name}

//       </p>


//       {/* DESCRIPTION */}

//       <p className="text-gray-700 mb-4">

//         {listing.description}

//       </p>


//       {/* CONTACT */}

//       <div className="border-t pt-4">

//         <h3 className="font-semibold mb-2">

//           Contact Info

//         </h3>

//         <p>Email: {listing.contactEmail}</p>

//         <p>Phone: {listing.contactPhone}</p>

//       </div>

//     </div>

//   );

// }


import formatPrice from "../../utils/formatPrice";

import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  TagIcon
} from "@heroicons/react/24/outline";


export default function ListingInfo({ listing }) {

  const BACKEND = "http://localhost:5000";

  if (!listing) return null;


  const imageUrl =
    listing.images && listing.images.length > 0
      ? BACKEND + listing.images[0]
      : "https://via.placeholder.com/800x500?text=No+Image";



  return (

<div className="

bg-white

border border-gray-100

rounded-2xl

shadow-sm

hover:shadow-md

transition

p-6 md:p-8

mt-4

max-w-5xl

mx-auto

">



{/* IMAGE */}

<div className="relative overflow-hidden rounded-xl mb-6">

<img
src={imageUrl}
alt={listing.title}

onError={(e)=>{
e.target.src="https://via.placeholder.com/800x500?text=No+Image"
}}

className="

w-full

h-[260px] md:h-[420px]

object-cover

hover:scale-105

transition duration-700

"

/>

</div>





{/* CATEGORY */}

<div className="flex items-center gap-2 mb-2">

<TagIcon className="w-4 h-4 text-red-600"/>

<p className="

text-xs

font-semibold

text-red-600

uppercase

tracking-wide

">

{listing.category?.name || "Property"}

</p>

</div>





{/* TITLE */}

<h1 className="

text-2xl md:text-3xl

font-bold

text-gray-900

leading-tight

">

{listing.title}

</h1>





{/* RED LINE */}

<div className="

w-14

h-[3px]

bg-red-600

mt-3 mb-4

rounded

"/>





{/* PRICE */}

{listing.price && (

<p className="

text-2xl md:text-3xl

font-bold

text-gray-900

mb-4

">

{formatPrice(listing.price)}

</p>

)}






{/* LOCATION */}

<div className="flex items-center gap-2 text-gray-500 mb-6">

<MapPinIcon className="w-5 h-5 text-red-600"/>

<span>

{listing.location}

</span>

</div>






{/* DESCRIPTION */}

<div className="mb-8">

<h3 className="

font-semibold

text-lg

mb-3

">

About this investment

</h3>

<p className="

text-gray-600

leading-relaxed

">

{listing.description}

</p>

</div>






{/* CONTACT SECTION */}

<div className="border-t pt-6">

<h3 className="

font-semibold

text-lg

mb-4

">

Contact Information

</h3>



<div className="grid md:grid-cols-2 gap-4">




{/* EMAIL */}

<a
href={`mailto:${listing.contactEmail}`}
className="

flex items-center gap-4

border border-gray-100

rounded-xl

p-4

hover:border-red-200

hover:shadow-sm

transition

group

">

<div className="

bg-red-50

p-3

rounded-lg

group-hover:bg-red-100

transition

">

<EnvelopeIcon className="w-5 h-5 text-red-600"/>

</div>


<div>

<p className="text-xs text-gray-400">

Email

</p>

<p className="

font-semibold

text-gray-800

group-hover:text-red-600

">

{listing.contactEmail}

</p>

</div>

</a>





{/* PHONE */}

<a
href={`tel:${listing.contactPhone}`}
className="

flex items-center gap-4

border border-gray-100

rounded-xl

p-4

hover:border-red-200

hover:shadow-sm

transition

group

">

<div className="

bg-red-50

p-3

rounded-lg

group-hover:bg-red-100

transition

">

<PhoneIcon className="w-5 h-5 text-red-600"/>

</div>


<div>

<p className="text-xs text-gray-400">

Phone

</p>

<p className="

font-semibold

text-gray-800

group-hover:text-red-600

">

{listing.contactPhone}

</p>

</div>

</a>



</div>

</div>



</div>

  );

}