 
import ListingRow from "./ListingRow";

export default function ListingTable({ listings, onApprove, onReject, onDelete }) {
  return (
    // Removed 'shadow rounded' as the parent container handles the card styling
    <table className="w-full text-left">
      
      {/* Professional Header Styling */}
      <thead className="bg-gray-50 border-b border-gray-100">
        <tr>
          <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Property Title
          </th>
          
          <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            User
          </th>
          
          <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
            Status
          </th>
          
          <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
            Actions
          </th>
        </tr>
      </thead>

      {/* Body with divider lines */}
      <tbody className="divide-y divide-gray-100">
        {listings.map((listing) => (
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