//  import { Link } from "react-router-dom";
// import formatPrice from "../../utils/formatPrice";

// export default function ListingCard({ listing }) {

//   const BACKEND_URL = "http://localhost:5000";

//   // Safe image handling

//   const imageUrl = listing.images?.length

//     ? `${BACKEND_URL}${listing.images[0]}`

//     : "https://via.placeholder.com/400x300?text=No+Image";


//   return (

//     <Link to={`/listing/${listing._id}`}>

//       <div className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden">


//         {/* IMAGE */}

//         <img

//           src={imageUrl}

//           alt={listing.title}

//           className="w-full h-52 object-cover"

//         />


//         {/* CONTENT */}

//         <div className="p-4 space-y-1">


//           {/* PRICE */}

//           {/* <h3 className="text-red-600 font-bold text-lg">

//             {formatPrice(listing.price)}

//           </h3> */}


//           {/* TITLE */}

//           <p className="font-semibold text-gray-800 truncate">

//             {listing.title}

//           </p>


//           {/* LOCATION */}

//           <p className="text-gray-500 text-sm">

//             📍 {listing.location}

//           </p>


//           {/* CATEGORY */}

//           <p className="text-blue-600 text-sm">

//             🏷 {listing.category?.name || "Property"}

//           </p>


//         </div>


//       </div>

//     </Link>

//   );

// }





   import { Link } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";

export default function ListingCard({ listing }) {

  const BACKEND_URL = "https://liberiabackendservice.onrender.com";

  const imageUrl =
    listing.images?.length
      ? `${BACKEND_URL}${listing.images[0]}`
      : "https://via.placeholder.com/400x300?text=No+Image";


  return (

<Link to={`/listing/${listing._id}`}>

<div className="

group

bg-white

rounded-2xl

border border-gray-100

hover:shadow-xl

hover:-translate-y-1

transition-all duration-300

overflow-hidden

flex flex-col

h-full

">


{/* IMAGE */}

<div className="relative overflow-hidden">


<img

src={imageUrl}

alt={listing.title}

className="

w-full h-52

object-cover

group-hover:scale-110

transition duration-700

"
/>



{/* GRADIENT */}

<div className="

absolute inset-0

bg-gradient-to-t

from-black/40

to-transparent

opacity-0

group-hover:opacity-100

transition

"/>



{/* VIEW DETAILS */}

<div className="

absolute bottom-4 left-1/2

-translate-x-1/2

translate-y-3

opacity-0

group-hover:opacity-100

group-hover:translate-y-0

transition-all duration-300

">

<span className="

bg-red-600

hover:bg-red-700

text-white

text-sm

font-semibold

px-5 py-2

rounded-full

shadow-lg

">

View Details

</span>

</div>


</div>





{/* CONTENT */}

<div className="

p-5

flex flex-col

flex-grow

">


{/* CATEGORY */}

<p className="

text-xs

font-semibold

text-red-600

uppercase

tracking-wide

mb-1

">

{listing.category?.name || "Property"}

</p>




{/* TITLE */}

<h3 className="

text-[17px]

font-semibold

text-gray-900

leading-snug

mb-2

group-hover:text-red-600

transition

">

{listing.title}

</h3>



{/* RED LINE */}

<div className="

w-10

h-[2px]

bg-red-600

mb-3

rounded

"/>




{/* DESCRIPTION */}

<p className="

text-gray-500

text-sm

line-clamp-2

mb-4

flex-grow

">

{listing.description}

</p>




{/* BOTTOM */}

<div className="mt-auto">


{/* PRICE */}

{listing.price && (

<p className="

text-[22px]

font-bold

text-gray-900

">

{formatPrice(listing.price)}

</p>

)}




{/* LOCATION */}

<p className="

text-gray-400

text-sm

">

{listing.location}

</p>


</div>



</div>


</div>

</Link>

  );

}