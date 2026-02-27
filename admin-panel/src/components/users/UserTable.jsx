 import {
  ShieldCheckIcon,
  ShieldExclamationIcon,
  TrashIcon,
  UserCircleIcon,
  CheckBadgeIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export default function UserTable({
  users,
  onDelete,
  onMakeAdmin,
  onRemoveAdmin,
}) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-left">

        {/* HEADER */}

        <thead className="bg-gray-50/80 backdrop-blur-sm border-b border-gray-200">

          <tr>

            <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase">
              User Details
            </th>

            <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase">
              Email Address
            </th>

            <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase">
              Role
            </th>

            {/* ⭐ NEW COLUMN */}

            <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase">
              Verification
            </th>

            <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase text-right">
              Actions
            </th>

          </tr>

        </thead>



        <tbody className="divide-y divide-gray-100">

          {users.map((user) => (

            <tr
              key={user._id}
              className="group hover:bg-gray-50 transition-all"
            >

              {/* NAME */}

              <td className="px-6 py-4">

                <div className="flex items-center gap-4">

                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">

                    {user.name?.charAt(0).toUpperCase()}

                  </div>

                  <span className="font-semibold text-gray-900">

                    {user.name}

                  </span>

                </div>

              </td>



              {/* EMAIL */}

              <td className="px-6 py-4 text-sm text-gray-600">

                {user.email}

              </td>



              {/* ROLE */}

              <td className="px-6 py-4">

                {user.role === "admin" ? (

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-indigo-100 text-indigo-700">

                    <ShieldCheckIcon className="w-4 h-4" />

                    Admin

                  </span>

                ) : (

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600">

                    <UserCircleIcon className="w-4 h-4" />

                    User

                  </span>

                )}

              </td>



              {/* ⭐ VERIFY STATUS */}

              <td className="px-6 py-4">

                {user.isVerified ? (

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-green-100 text-green-700 border border-green-200">

                    <CheckBadgeIcon className="w-4 h-4" />

                    Verified

                  </span>

                ) : (

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-red-100 text-red-700 border border-red-200">

                    <XCircleIcon className="w-4 h-4" />

                    Unverified

                  </span>

                )}

              </td>



              {/* ACTIONS */}

              <td className="px-6 py-4 text-right">

                <div className="flex justify-end gap-2">

                  {user.role === "admin" ? (

                    <button
                      onClick={() => onRemoveAdmin(user._id)}
                      className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 rounded"
                    >

                      Remove Admin

                    </button>

                  ) : (

                    <button
                      onClick={() => onMakeAdmin(user._id)}
                      className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded"
                    >

                      Make Admin

                    </button>

                  )}



                  <button
                    onClick={() => onDelete(user._id)}
                    className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded"
                  >

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