//  import formatPrice from "../../utils/formatPrice";

// import {
//   EnvelopeIcon,
//   PhoneIcon,
//   MapPinIcon,
//   TagIcon
// } from "@heroicons/react/24/outline";





// export default function ListingInfo({ listing }) {

//   const BACKEND = "http://localhost:5000";

//   if (!listing) return null;


//   const imageUrl =
//     listing.images && listing.images.length > 0
//       ? BACKEND + listing.images[0]
//       : "https://via.placeholder.com/800x500?text=No+Image";



//   return (

// <div className="

// bg-white

// border border-gray-100

// rounded-2xl

// shadow-sm

// hover:shadow-md

// transition

// p-6 md:p-8

// mt-4

// max-w-5xl

// mx-auto

// ">



// {/* IMAGE */}

// <div className="relative overflow-hidden rounded-xl mb-6">

// <img
// src={imageUrl}
// alt={listing.title}

// onError={(e)=>{
// e.target.src="https://via.placeholder.com/800x500?text=No+Image"
// }}

// className="

// w-full

// h-[260px] md:h-[420px]

// object-cover

// hover:scale-105

// transition duration-700

// "

// />

// </div>





// {/* CATEGORY */}

// <div className="flex items-center gap-2 mb-2">

// <TagIcon className="w-4 h-4 text-green-600"/>

// <p className="

// text-xs

// font-semibold

// text-green-600

// uppercase

// tracking-wide

// ">

// {listing.category?.name || "Property"}

// </p>

// </div>





// {/* TITLE */}

// <h1 className="

// text-2xl md:text-3xl

// font-bold

// text-gray-900

// leading-tight

// ">

// {listing.title}

// </h1>





// {/* RED LINE */}

// <div className="

// w-14

// h-[3px]

// bg-green-600

// mt-3 mb-4

// rounded

// "/>





// {/* PRICE */}

// {listing.price && (

// <p className="

// text-2xl md:text-3xl

// font-bold

// text-gray-900

// mb-4

// ">

// {formatPrice(listing.price)}

// </p>

// )}






// {/* LOCATION */}

// <div className="flex items-center gap-2 text-gray-500 mb-6">

// <MapPinIcon className="w-5 h-5 text-green-600"/>

// <span>

// {listing.location}

// </span>

// </div>






// {/* DESCRIPTION */}

// <div className="mb-8">

// <h3 className="

// font-semibold

// text-lg

// mb-3

// ">

// About this investment

// </h3>

// <p className="

// text-gray-600

// leading-relaxed

// ">

// {listing.description}

// </p>

// </div>






// {/* CONTACT SECTION */}

// <div className="border-t pt-6">

// <h3 className="

// font-semibold

// text-lg

// mb-4

// ">

// Contact Information

// </h3>



// <div className="grid md:grid-cols-2 gap-4">




// {/* EMAIL */}

// <a
// href={`mailto:${listing.contactEmail}`}
// className="

// flex items-center gap-4

// border border-gray-100

// rounded-xl

// p-4

// hover:border-green-200

// hover:shadow-sm

// transition

// group

// ">

// <div className="

// bg-green-50

// p-3

// rounded-lg

// group-hover:bg-green-100

// transition

// ">

// <EnvelopeIcon className="w-5 h-5 text-green-600"/>

// </div>


// <div>

// <p className="text-xs text-gray-400">

// Email

// </p>

// <p className="

// font-semibold

// text-gray-800

// group-hover:text-green-600

// ">

// {listing.contactEmail}

// </p>

// </div>

// </a>





// {/* PHONE */}

// <a
// href={`tel:${listing.contactPhone}`}
// className="

// flex items-center gap-4

// border border-gray-100

// rounded-xl

// p-4

// hover:border-green-200

// hover:shadow-sm

// transition

// group

// ">

// <div className="

// bg-green-50

// p-3

// rounded-lg

// group-hover:bg-green-100

// transition

// ">

// <PhoneIcon className="w-5 h-5 text-green-600"/>

// </div>


// <div>

// <p className="text-xs text-gray-400">

// Phone

// </p>

// <p className="

// font-semibold

// text-gray-800

// group-hover:text-green-600

// ">

// {listing.contactPhone}

// </p>

// </div>

// </a>



// </div>

// </div>



// </div>

//   );

// }

// import formatPrice from "../../utils/formatPrice";

// import {
//   EnvelopeIcon,
//   PhoneIcon,
//   MapPinIcon,
//   TagIcon
// } from "@heroicons/react/24/outline";

// export default function ListingInfo({ listing }) {

//   const BACKEND = "http://localhost:5000";

//   if (!listing) return null;

//   const imageUrl =
//     listing.images && listing.images.length > 0
//       ? BACKEND + listing.images[0]
//       : "https://via.placeholder.com/800x500?text=No+Image";

//   return (
//     <div className="bg-white border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 md:p-10 mt-4 max-w-5xl mx-auto overflow-hidden">
      
//       {/* IMAGE SECTION */}
//       <div className="relative overflow-hidden rounded-2xl mb-8 group">
//         <img
//           src={imageUrl}
//           alt={listing.title}
//           onError={(e) => {
//             e.target.src = "https://via.placeholder.com/800x500?text=No+Image";
//           }}
//           className="w-full h-[300px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
//         />
//         {/* Gradient Overlay for Image Bottom */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
        
//         {/* Category Badge on Image */}
//         <div className="absolute top-4 left-4 bg-[#144474] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
//           <TagIcon className="w-3.5 h-3.5" />
//           {listing.category?.name || "Property"}
//         </div>
//       </div>

//       {/* CONTENT SECTION */}
//       <div className="space-y-6">
        
//         {/* HEADER: Title & Price */}
//         <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-gray-100 pb-6">
//           <div className="flex-1">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
//               {listing.title}
//             </h1>
            
//             {/* Location */}
//             <div className="flex items-center gap-2 text-gray-500 mt-3">
//               <MapPinIcon className="w-5 h-5 text-[#144474]" />
//               <span className="text-base font-medium">{listing.location}</span>
//             </div>
//           </div>

//           {/* Price Block */}
//           {listing.price && (
//             <div className="bg-blue-50 px-6 py-4 rounded-2xl border border-blue-100 text-left md:text-right">
//               <p className="text-xs text-[#144474] uppercase font-semibold tracking-wider mb-1">Investment Value</p>
//               <p className="text-3xl md:text-4xl font-extrabold text-[#144474] tracking-tight">
//                 {formatPrice(listing.price)}
//               </p>
//             </div>
//           )}
//         </div>

//         {/* DESCRIPTION */}
//         <div className="py-4">
//           <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
//             <span className="w-1.5 h-6 bg-[#144474] rounded-full"></span>
//             About this investment
//           </h3>
//           <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
//             {listing.description}
//           </p>
//         </div>

//         {/* CONTACT SECTION */}
//         <div className="border-t border-gray-100 pt-8 mt-4">
//           <h3 className="font-bold text-gray-800 text-xl mb-6 flex items-center gap-2">
//             <span className="w-1.5 h-6 bg-[#144474] rounded-full"></span>
//             Contact Information
//           </h3>

//           <div className="grid sm:grid-cols-2 gap-5">
            
//             {/* EMAIL CARD */}
//             <a
//               href={`mailto:${listing.contactEmail}`}
//               className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#144474] hover:bg-blue-50/30 transition-all duration-300 group"
//             >
//               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 group-hover:bg-[#144474] group-hover:border-transparent transition-all duration-300">
//                 <EnvelopeIcon className="w-6 h-6 text-[#144474] group-hover:text-white transition-colors" />
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Email Address</p>
//                 <p className="font-bold text-gray-800 group-hover:text-[#144474] transition-colors mt-1">
//                   {listing.contactEmail}
//                 </p>
//               </div>
//             </a>

//             {/* PHONE CARD */}
//             <a
//               href={`tel:${listing.contactPhone}`}
//               className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-[#144474] hover:bg-blue-50/30 transition-all duration-300 group"
//             >
//               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 group-hover:bg-[#144474] group-hover:border-transparent transition-all duration-300">
//                 <PhoneIcon className="w-6 h-6 text-[#144474] group-hover:text-white transition-colors" />
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Phone Number</p>
//                 <p className="font-bold text-gray-800 group-hover:text-[#144474] transition-colors mt-1">
//                   {listing.contactPhone}
//                 </p>
//               </div>
//             </a>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

 import formatPrice from "../../utils/formatPrice";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  TagIcon,
  ShareIcon,
  ClipboardIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ListingInfo({ listing }) {
  const BACKEND = "https://liberiabackendservice.onrender.com";
  const [copied, setCopied] = useState(false);

  if (!listing) return null;

  // ================= IMAGE =================
  const imageUrl =
    listing.images?.length
      ? BACKEND + listing.images[0]
      : "https://via.placeholder.com/800x500?text=No+Image";

  // ================= PUBLIC URL =================
  const publicUrl = `${window.location.origin}/listing/${listing.slug || listing._id}`;

  // ================= COPY LINK =================
  const copyLink = () => {
    navigator.clipboard.writeText(publicUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ================= WHATSAPP SHARE =================
  const whatsappUrl =
    `https://wa.me/?text=${encodeURIComponent(
      listing.title + " " + publicUrl
    )}`;

  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto mt-4">
      
    {/* ================= IMAGE SECTION ================= */}
<div className="relative overflow-hidden rounded-t-3xl group">

  <img
    src={imageUrl}
    alt={listing.title}
    loading="eager"
    onError={(e) => {
      e.target.src = "https://via.placeholder.com/800x500?text=No+Image";
    }}
    className="
      w-full
      h-[350px]
      md:h-[500px]
      object-cover
      object-center
      transition-transform
      duration-700
      group-hover:scale-105
    "
    style={{
      imageRendering: "auto",
      backfaceVisibility: "hidden"
    }}
  />

  {/* LIGHT GRADIENT */}
  <div className="
    absolute
    inset-0
    bg-gradient-to-t
    from-black/50
    via-black/10
    to-transparent
    pointer-events-none
  "/>

  {/* Category Badge */}
  <div className="absolute top-6 left-6">
    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30 shadow-lg">
      <TagIcon className="w-4 h-4" />
      {listing.category?.name || "Property"}
    </span>
  </div>

  {/* Price Badge */}
  {listing.price && (
    <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
      <p className="text-xs text-gray-500 uppercase font-semibold">
        Price
      </p>
      <p className="text-3xl font-extrabold text-[#144474]">
        {formatPrice(listing.price)}
      </p>
    </div>
  )}

</div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="p-6 md:p-10">
        
        {/* HEADER */}
        <div className="border-b border-gray-100 pb-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            {listing.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPinIcon className="w-5 h-5 text-[#144474]" />
              <span className="font-medium">{listing.location}</span>
            </div>

            {/* Quick Stats/Badges can go here if needed */}
          </div>
        </div>

        {/* ================= ACTION BAR ================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gray-50 p-4 rounded-xl mb-8 border border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500 bg-white px-3 py-1.5 rounded-lg border overflow-hidden">
            <span className="truncate max-w-[200px] md:max-w-none">{publicUrl}</span>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={copyLink}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                copied 
                  ? "bg-green-100 text-green-700 border border-green-200" 
                  : "bg-white border border-gray-200 hover:border-[#144474] hover:text-[#144474]"
              }`}
            >
              {copied ? (
                <>
                  <CheckCircleIcon className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <ClipboardIcon className="w-4 h-4" />
                  Copy Link
                </>
              )}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              <ShareIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#144474] rounded-full"></span>
            About this Property
          </h3>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {listing.description}
          </p>
        </div>

        {/* ================= CONTACT SECTION ================= */}
        <div className="border-t border-gray-100 pt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#144474] rounded-full"></span>
            Contact Information
          </h3>

          <div className="grid sm:grid-cols-2 gap-5">
            
            {/* EMAIL CARD */}
            <a
              href={listing.contactEmail ? `mailto:${listing.contactEmail}` : "#"}
              className="group flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300"
            >
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm group-hover:bg-[#144474] group-hover:border-transparent transition-all duration-300">
                <EnvelopeIcon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Email Address</p>
                <p className="font-bold text-gray-800 group-hover:text-[#144474] transition-colors mt-0.5">
                  {listing.contactEmail || "Not provided"}
                </p>
              </div>
            </a>

            {/* PHONE CARD */}
            <a
              href={listing.contactPhone ? `tel:${listing.contactPhone}` : "#"}
              className="group flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300"
            >
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm group-hover:bg-[#144474] group-hover:border-transparent transition-all duration-300">
                <PhoneIcon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Phone Number</p>
                <p className="font-bold text-gray-800 group-hover:text-[#144474] transition-colors mt-0.5">
                  {listing.contactPhone || "Not provided"}
                </p>
              </div>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}