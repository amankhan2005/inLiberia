 import { useEffect, useState } from "react";
import UserTable from "../components/users/UserTable";

import {
  getUsers,
  deleteUser,
  makeAdmin,
  removeAdmin,
} from "../services/adminService";


export default function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);



  const loadUsers = async () => {

    try {

      const data = await getUsers();

      setUsers(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    loadUsers();

  }, []);




  const handleDelete = async (id) => {

    await deleteUser(id);

    loadUsers();

  };



  // ⭐ NEW

  const handleMakeAdmin = async (id) => {

    await makeAdmin(id);

    loadUsers();

  };



  // ⭐ NEW

  const handleRemoveAdmin = async (id) => {

    await removeAdmin(id);

    loadUsers();

  };




  // Professional Loading Skeleton
  if (loading) {

    return (

      <div className="min-h-screen bg-slate-50 p-6 md:p-8">

        <div className="animate-pulse">

          <div className="h-10 bg-slate-200 rounded w-1/4 mb-6"></div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">

            <div className="space-y-4">

              {[...Array(5)].map((_, i) => (

                <div key={i} className="h-12 bg-slate-100 rounded w-full"></div>

              ))}

            </div>

          </div>

        </div>

      </div>

    );

  }




  return (

    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">

      {/* Header Section */}

      <div className="relative bg-gradient-to-r from-[#144474] to-[#0f345a] text-white overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none"></div>

        </div>



        <div className="relative p-6 md:p-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">

                User Management

              </h1>

              <p className="text-blue-100 mt-1 text-sm md:text-base max-w-2xl">

                View, manage, and oversee all registered platform users.

              </p>

            </div>



            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20 shadow-lg">

              <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">

                Total Users

              </span>

              <span className="bg-white text-[#144474] text-lg font-bold px-3 py-1 rounded-lg shadow-sm">

                {users.length}

              </span>

            </div>

          </div>

        </div>

      </div>




      {/* Main Content */}

      <div className="p-6 md:p-8 pt-0 -mt-4">

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">

            <h3 className="text-lg font-bold text-gray-800">

              Registered Users

            </h3>

            <div className="text-sm text-gray-500">

              Showing {users.length} results

            </div>

          </div>



          <div className="overflow-x-auto">

            <UserTable

              users={users}

              onDelete={handleDelete}

              onMakeAdmin={handleMakeAdmin}

              onRemoveAdmin={handleRemoveAdmin}

            />

          </div>

        </div>

      </div>

    </div>

  );

}