export default function UserRow({

  user,

  onDelete

}) {

  return (

    <tr className="border-b">


      <td className="p-3">

        {user.name}

      </td>


      <td>

        {user.email}

      </td>


      <td>

        {user.role}

      </td>


      <td>


        <button

          onClick={() => onDelete(user._id)}

          className="bg-red-600 text-white px-3 py-1 rounded"

        >

          Delete

        </button>


      </td>


    </tr>

  );

}