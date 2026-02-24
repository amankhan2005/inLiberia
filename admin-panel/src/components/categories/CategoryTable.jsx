// export default function CategoryTable({

//   categories,

//   onDelete

// }) {

//   return (

//     <table className="w-full bg-white shadow rounded">


//       <thead>

//         <tr className="bg-gray-100">


//           <th className="p-3 text-left">

//             Name

//           </th>


//           <th>

//             Icon

//           </th>


//           <th>

//             Action

//           </th>


//         </tr>

//       </thead>


//       <tbody>


//         {categories.map(cat => (

//           <tr key={cat._id}


//           className="border-b">


//             <td className="p-3">

//               {cat.name}

//             </td>


//             <td>

//               {cat.icon}

//             </td>


//             <td>


//               <button

//                 onClick={() =>

//                 onDelete(cat._id)}

//                 className="bg-red-600 text-white px-3 py-1 rounded"

//               >

//                 Delete

//               </button>


//             </td>


//           </tr>

//         ))}


//       </tbody>


//     </table>

//   );

// }

import CategoryRow from "./CategoryRow";

export default function CategoryTable({ categories, onDelete }) {
  return (
    // Removed 'bg-white shadow rounded' as the parent container handles the card styling
    <table className="w-full text-left">
      
      {/* Professional Header Styling */}
      <thead className="bg-gray-50 border-b border-gray-100">
        <tr>
          <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Category Name
          </th>
          
          <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
            Icon
          </th>
          
          <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
            Action
          </th>
        </tr>
      </thead>

      {/* Body with divider lines */}
      <tbody className="divide-y divide-gray-100">
        {categories.map((cat) => (
          <CategoryRow
            key={cat._id}
            category={cat}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}