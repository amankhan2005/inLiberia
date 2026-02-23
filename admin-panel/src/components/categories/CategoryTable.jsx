export default function CategoryTable({

  categories,

  onDelete

}) {

  return (

    <table className="w-full bg-white shadow rounded">


      <thead>

        <tr className="bg-gray-100">


          <th className="p-3 text-left">

            Name

          </th>


          <th>

            Icon

          </th>


          <th>

            Action

          </th>


        </tr>

      </thead>


      <tbody>


        {categories.map(cat => (

          <tr key={cat._id}


          className="border-b">


            <td className="p-3">

              {cat.name}

            </td>


            <td>

              {cat.icon}

            </td>


            <td>


              <button

                onClick={() =>

                onDelete(cat._id)}

                className="bg-red-600 text-white px-3 py-1 rounded"

              >

                Delete

              </button>


            </td>


          </tr>

        ))}


      </tbody>


    </table>

  );

}