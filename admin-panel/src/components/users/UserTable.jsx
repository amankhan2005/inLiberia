 import {
  ShieldCheckIcon,
  ShieldExclamationIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline"; // Assuming you use Heroicons. If not, simple text works too.

export default function UserTable({
  users,
  onDelete,
  onMakeAdmin,
  onRemoveAdmin,
}) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-left">
        {/* Header - Glassmorphism effect */}
        <thead className="bg-gray-50/80 backdrop-blur-sm border-b border-gray-200">
          <tr>
            <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">
              User Details
            </th>
            <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">
              Email Address
            </th>
            <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">
              Role
            </th>
            <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {users.map((user) => (
            <tr
              key={user._id}
              className="group hover:bg-gray-50 transition-all duration-200 ease-in-out"
            >
              {/* NAME & AVATAR */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    {/* Online indicator dot (decorative) */}
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
                  </div>
                  <span className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {user.name}
                  </span>
                </div>
              </td>

              {/* EMAIL */}
              <td className="px-6 py-4">
                <span className="text-gray-600 text-sm font-medium">
                  {user.email}
                </span>
              </td>

              {/* ROLE BADGES */}
              <td className="px-6 py-4">
                {user.role === "admin" ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border border-indigo-200">
                    <ShieldCheckIcon className="w-3.5 h-3.5" />
                    Admin
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                    <UserCircleIcon className="w-3.5 h-3.5" />
                    User
                  </span>
                )}
              </td>

              {/* ACTIONS */}
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                  
                  {user.role === "admin" ? (
                    <button
                      onClick={() => onRemoveAdmin(user._id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-yellow-700 bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 transition-all duration-200 hover:shadow-sm"
                    >
                      <ShieldExclamationIcon className="w-4 h-4" />
                      Remove Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => onMakeAdmin(user._id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-all duration-200 hover:shadow-sm"
                    >
                      <ShieldCheckIcon className="w-4 h-4" />
                      Make Admin
                    </button>
                  )}

                  <button
                    onClick={() => onDelete(user._id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 transition-all duration-200 hover:shadow-sm"
                  >
                    <TrashIcon className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}