 export default function CategoryRow({ 
  category, 
  onDelete,
  onEdit   // ⭐ ADD THIS
}) {

  return (

    <tr className="hover:bg-gray-50 transition-colors duration-150 group">
      
      {/* Column 1: Category Name */}
      <td className="px-6 py-4">

        <div className="flex items-center gap-3">

          {/* Accent Bar */}
          <div className="w-1 h-10 rounded-full bg-gray-200 group-hover:bg-red-400 transition-colors duration-150"></div>

          <span className="font-medium text-gray-800">
            {category.name}
          </span>

        </div>

      </td>


      {/* Column 2: Icon */}
      <td className="px-6 py-4 text-center">

        <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 border border-gray-200 rounded-lg text-xl group-hover:border-red-200 transition-colors">

          {category.icon ? (

            <span>{category.icon}</span>

          ) : (

            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>

              <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 10h16M4 14h16M4 18h16" />

            </svg>

          )}

        </div>

      </td>



      {/* Column 3: Actions */}
      <td className="px-6 py-4 text-right">

        <div className="flex justify-end gap-2">


          {/* ⭐ EDIT BUTTON */}
          <button

            onClick={() => onEdit(category)}

            className="p-2 text-blue-500 hover:bg-blue-100 rounded-lg transition"

            title="Edit Category"

          >

            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>

              <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5h2M12 20h9" />

              <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z" />

            </svg>

          </button>



          {/* DELETE BUTTON */}
          <button

            onClick={() => onDelete(category._id)}

            className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition"

            title="Delete Category"

          >

            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>

              <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />

            </svg>

          </button>


        </div>

      </td>


    </tr>

  );

}