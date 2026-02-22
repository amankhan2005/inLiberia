//  import { useState, useEffect } from "react";

// export default function ListingGallery({ images }) {

//   const BACKEND = "http://localhost:5000";

//   const [active, setActive] = useState("");

//   // fix initial image load
//   useEffect(() => {

//     if (images && images.length > 0) {

//       setActive(images[0]);

//     }

//   }, [images]);


//   const getImageUrl = (img) => {

//     if (!img) return "";

//     return img.startsWith("http")
//       ? img
//       : BACKEND + img;

//   };


//   return (

//     <div>


//       {/* Main Image */}

//       <img

//         src={getImageUrl(active)}

//         onError={(e) => {

//           e.target.src =
//             "https://via.placeholder.com/800x500?text=No+Image";

//         }}

//         className="w-full h-96 object-cover rounded-xl"

//       />


//       {/* Thumbnails */}

//       <div className="flex gap-2 mt-4">

//         {images?.map(img => (

//           <img

//             key={img}

//             src={getImageUrl(img)}

//             onClick={() => setActive(img)}

//             className="w-20 h-20 object-cover rounded cursor-pointer border"

//           />

//         ))}

//       </div>


//     </div>

//   );

// }


 import React from 'react'
 
 function ListingGallery({ images }) {
   return (
     <div></div>
   )
 }
 
 export default ListingGallery