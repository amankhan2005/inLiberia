//    import { Link } from "react-router-dom";
// import formatPrice from "../../utils/formatPrice";

// export default function ListingCard({ listing }) {

//   const BACKEND_URL = "http://localhost:5000";

//   const imageUrl =
//     listing.images?.length
//       ? `${BACKEND_URL}${listing.images[0]}`
//       : "https://via.placeholder.com/400x300?text=No+Image";


//   return (

// <Link to={`/listing/${listing._id}`}>

// <div className="

// group

// bg-[#144474]
// rounded-2xl

// border border-gray-100

// hover:shadow-xl

// hover:-translate-y-1

// transition-all duration-300

// overflow-hidden

// flex flex-col

// h-full

// ">


// {/* IMAGE */}

// <div className="relative overflow-hidden">


// <img

// src={imageUrl}

// alt={listing.title}

// className="

// w-full h-52

// object-cover

// group-hover:scale-110

// transition duration-700

// "
// />



// {/* GRADIENT */}

// <div className="

// absolute inset-0

// bg-gradient-to-t

// from-black/40

// to-transparent

// opacity-0

// group-hover:opacity-100

// transition

// "/>



// {/* VIEW DETAILS */}

// <div className="

// absolute bottom-4 left-1/2

// -translate-x-1/2

// translate-y-3

// opacity-0

// group-hover:opacity-100

// group-hover:translate-y-0

// transition-all duration-300

// ">

// <span className="

// bg-[#144474]

// hover:bg-green-700

// text-white

// text-sm

// font-semibold

// px-5 py-2

// rounded-full

// shadow-lg

// ">

// View Details

// </span>

// </div>


// </div>





// {/* CONTENT */}

// <div className="

// p-5

// flex flex-col

// flex-grow

// ">


// {/* CATEGORY */}

// <p className="

// text-xs

// font-semibold

// text-white

// uppercase

// tracking-wide

// mb-1

// ">

// {listing.category?.name || "Property"}

// </p>




// {/* TITLE */}

// <h3 className="

// text-[17px]

// font-semibold

// text-white

// leading-snug

// mb-2

// group-hover:text-green-400

// transition

// ">

// {listing.title}

// </h3>



// {/* Green LINE */}

// <div className="

// w-10

// h-[2px]

// bg-green-600

// mb-3

// rounded

// "/>




// {/* DESCRIPTION */}

// <p className="

// text-white

// text-sm

// line-clamp-2

// mb-4

// flex-grow

// ">

// {listing.description}

// </p>




// {/* BOTTOM */}

// <div className="mt-auto">


// {/* PRICE */}

// {/* {listing.price && (

// <p className="

// text-[22px]

// font-bold

// text-white

// ">

// {formatPrice(listing.price)}

// </p>

// )} */}




// {/* LOCATION */}

// <p className="

// text-white

// text-sm

// ">

// {listing.location}

// </p>


// </div>



// </div>


// </div>

// </Link>

//   );

// }

import { Link } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";

export default function ListingCard({ listing }) {

  const BACKEND_URL = "http://localhost:5000";

  const imageUrl =
    listing.images?.length
      ? `${BACKEND_URL}${listing.images[0]}`
      : "https://via.placeholder.com/400x300?text=No+Image";

  return (
    <Link to={`/listing/${listing._id}`} className="block h-full group">
      <div className="
        relative 
        bg-[#144474] 
        rounded-3xl 
        shadow-xl 
        hover:shadow-2xl 
        hover:-translate-y-2 
        transition-all 
        duration-500 
        overflow-hidden 
        flex 
        flex-col 
        h-full 
        border border-white/10
      ">
        
        {/* Decorative Glows */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        {/* IMAGE SECTION */}
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={listing.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* OVERLAY GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#144474] via-transparent to-transparent opacity-70" />

          {/* FLOATING STATUS BADGES */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-white/20 shadow-lg">
              {listing.category?.name || "Property"}
            </span>
            
            <div className="flex items-center gap-1 bg-green-500/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-lg">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              Verified
            </div>
          </div>

          {/* VIEW DETAILS BUTTON (Slide from Bottom) */}
          <div className="
            absolute 
            inset-x-0 
            bottom-0 
            p-4 
            translate-y-full 
            opacity-0 
            group-hover:translate-y-0 
            group-hover:opacity-100 
            transition-all 
            duration-300 
            ease-out
          ">
            <div className="bg-white text-[#144474] font-bold text-center py-3 rounded-xl shadow-lg hover:bg-blue-50 transition-colors">
              View Full Details
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-6 flex flex-col flex-grow relative z-10">
          
          {/* TITLE */}
          <h3 className="text-xl font-bold text-white leading-tight mb-3 line-clamp-2 group-hover:text-blue-100 transition-colors">
            {listing.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-blue-100/70 text-sm line-clamp-2 mb-5 flex-grow leading-relaxed">
            {listing.description}
          </p>

          {/* DIVIDER */}
          <div className="border-t border-white/10 pt-5 mt-auto">
            
            <div className="flex items-end justify-between gap-4">
              
              {/* PRICE SECTION */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold mb-1">Investment Value</p>
                {listing.price ? (
                   <p className="text-2xl font-extrabold text-white tracking-tight truncate">
                     {formatPrice(listing.price)}
                   </p>
                ) : (
                   <p className="text-lg font-bold text-blue-200">Price on Request</p>
                )}
              </div>

              {/* LOCATION SECTION */}
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-200 mx-auto mb-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-xs font-medium text-white truncate max-w-[80px]">
                    {listing.location}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}