// export default function ListingRow({

//   listing,

//   onApprove,

//   onReject,

//   onDelete

// }) {

//   return (

//     <tr className="border-b">


//       <td className="p-3">

//         {listing.title}

//       </td>


//       <td>

//         {listing.user?.email}

//       </td>


//       <td>

//         {listing.status}

//       </td>


//       <td className="space-x-2">


//         <button

//           onClick={() => onApprove(listing._id)}

//           className="bg-green-500 text-white px-2 py-1 rounded"

//         >

//           Approve

//         </button>



//         <button

//           onClick={() => onReject(listing._id)}

//           className="bg-yellow-500 text-white px-2 py-1 rounded"

//         >

//           Reject

//         </button>



//         <button

//           onClick={() => onDelete(listing._id)}

//           className="bg-red-600 text-white px-2 py-1 rounded"

//         >

//           Delete

//         </button>


//       </td>


//     </tr>

//   );

// }

 export default function ListingRow({ listing, onApprove, onReject, onDelete }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors duration-150 group">
      
      {/* Column 1: Property Title */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {/* Visual Accent Bar */}
          <div className="w-1 h-10 rounded-full bg-gray-200 group-hover:bg-red-400 transition-colors duration-150"></div>
          <div>
            <p className="font-semibold text-gray-800">
              {listing.title}
            </p>
            <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">
              ID: {listing._id?.slice(0, 8)}...
            </p>
          </div>
        </div>
      </td>

      {/* Column 2: User Info */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {/* User Avatar Initial */}
          <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">
            {listing.user?.email?.charAt(0).toUpperCase() || "U"}
          </div>
          <span className="text-sm text-gray-600 hidden md:table-cell">
            {listing.user?.email}
          </span>
        </div>
      </td>

      {/* Column 3: Status Badge (Centered) */}
      <td className="px-6 py-4 text-center">
        <span className={`px-3 py-1 text-xs font-bold rounded-full border ${
          listing.status === 'approved' 
            ? 'bg-green-50 text-green-700 border-green-200' 
            : listing.status === 'rejected'
            ? 'bg-red-50 text-red-700 border-red-200'
            : 'bg-yellow-50 text-yellow-700 border-yellow-200'
        }`}>
          {listing.status ? listing.status.toUpperCase() : 'PENDING'}
        </span>
      </td>

      {/* Column 4: Actions (Aligned Right) */}
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-1">
          
          {/* Approve Button */}
          <button
            onClick={() => onApprove(listing._id)}
            className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors duration-200"
            title="Approve"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </button>

 {/* reject buton */}
<button
  onClick={() => onReject(listing._id)}
  className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg transition-colors duration-200"
  title="Reject"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
         

          {/* Delete Button */}
          <button
            onClick={() => onDelete(listing._id)}
            className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors duration-200"
            title="Delete"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>

        </div>
      </td>
    </tr>
  );
}