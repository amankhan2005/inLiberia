 
export default function CategoryRow({ 
  category, 
  onDelete,
  onEdit
}) {

  return (

<tr className="hover:bg-gray-50 transition group">

{/* NAME */}

<td className="px-6 py-4">

<div className="flex items-center gap-3">

<div className="w-1 h-10 bg-gray-200 rounded group-hover:bg-blue-400"/>

<span className="font-medium text-gray-800">

{category.name}

</span>

</div>

</td>


{/* ICON */}

<td className="px-6 py-4 text-center">

<div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 border rounded-lg overflow-hidden">

{category.icon ? (

<img

src={category.icon}

alt={category.name}

className="w-full h-full object-cover"

/>

) : (

<svg

xmlns="http://www.w3.org/2000/svg"

className="h-5 w-5 text-gray-400"

fill="none"

viewBox="0 0 24 24"

stroke="currentColor"

strokeWidth={2}

>

<path

strokeLinecap="round"

strokeLinejoin="round"

d="M4 6h16M4 10h16M4 14h16M4 18h16"

/>

</svg>

)}

</div>

</td>



{/* ACTIONS */}

<td className="px-6 py-4 text-right">

<div className="flex justify-end gap-2">


{/* EDIT */}

<button

onClick={() => onEdit(category)}

className="p-2 text-blue-500 hover:bg-blue-100 rounded"

>

✏️

</button>



{/* DELETE */}

<button

onClick={() => onDelete(category._id)}

className="p-2 text-red-500 hover:bg-red-100 rounded"

>

🗑️

</button>


</div>

</td>


</tr>

);

} 