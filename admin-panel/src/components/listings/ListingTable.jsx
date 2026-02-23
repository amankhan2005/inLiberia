import ListingRow from "./ListingRow";

export default function ListingTable({

  listings,

  onApprove,

  onReject,

  onDelete

}) {

  return (

    <table className="w-full bg-white shadow rounded">


      <thead>

        <tr className="bg-gray-100">


          <th className="p-3 text-left">

            Title

          </th>


          <th>

            User

          </th>


          <th>

            Status

          </th>


          <th>

            Actions

          </th>


        </tr>

      </thead>


      <tbody>


        {listings.map(listing => (

          <ListingRow

            key={listing._id}

            listing={listing}

            onApprove={onApprove}

            onReject={onReject}

            onDelete={onDelete}

          />

        ))}


      </tbody>


    </table>

  );

}