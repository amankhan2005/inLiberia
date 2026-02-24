// import UserRow from "./UserRow";

// export default function UserTable({

//   users,

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

//             Email

//           </th>


//           <th>

//             Role

//           </th>


//           <th>

//             Action

//           </th>


//         </tr>

//       </thead>


//       <tbody>


//         {users.map(user => (

//           <UserRow

//             key={user._id}

//             user={user}

//             onDelete={onDelete}

//           />

//         ))}


//       </tbody>


//     </table>

//   );

// }

// components/users/UserTable.jsx
export default function UserTable({ users, onDelete }) {
  return (
    <table className="w-full text-left">
      <thead className="bg-gray-50 border-b border-gray-100">
        <tr>
          <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
          <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
          <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {users.map((user) => (
          <tr key={user._id} className="hover:bg-red-50/50 transition-colors duration-150">
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                {/* Simple Avatar Initial */}
                <div className="h-9 w-9 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm border border-red-200">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium text-gray-800">{user.name}</span>
              </div>
            </td>
            <td className="px-6 py-4 text-gray-600 text-sm">{user.email}</td>
            <td className="px-6 py-4">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                {user.role || 'User'}
              </span>
            </td>
            <td className="px-6 py-4 text-right">
              <button 
                onClick={() => onDelete(user._id)}
                className="text-red-500 hover:text-white hover:bg-red-500 p-2 rounded-lg transition-colors duration-200 text-sm font-medium"
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