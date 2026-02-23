export default function ListingRow({

  listing,

  onApprove,

  onReject,

  onDelete

}) {

  return (

    <tr className="border-b">


      <td className="p-3">

        {listing.title}

      </td>


      <td>

        {listing.user?.email}

      </td>


      <td>

        {listing.status}

      </td>


      <td className="space-x-2">


        <button

          onClick={() => onApprove(listing._id)}

          className="bg-green-500 text-white px-2 py-1 rounded"

        >

          Approve

        </button>



        <button

          onClick={() => onReject(listing._id)}

          className="bg-yellow-500 text-white px-2 py-1 rounded"

        >

          Reject

        </button>



        <button

          onClick={() => onDelete(listing._id)}

          className="bg-red-600 text-white px-2 py-1 rounded"

        >

          Delete

        </button>


      </td>


    </tr>

  );

}