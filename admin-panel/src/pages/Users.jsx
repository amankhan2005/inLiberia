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



  const handleMakeAdmin = async (id) => {

    await makeAdmin(id);

    loadUsers();

  };



  const handleRemoveAdmin = async (id) => {

    await removeAdmin(id);

    loadUsers();

  };



  // ⭐ NEW STATS

  const verifiedUsers = users.filter(
    user => user.isVerified
  ).length;


  const unverifiedUsers = users.filter(
    user => !user.isVerified
  ).length;




  if (loading) {

    return (

      <div className="min-h-screen bg-slate-50 p-6 md:p-8">

        Loading...

      </div>

    );

  }




  return (

<div className="min-h-screen bg-slate-50">


{/* HEADER */}

<div className="bg-gradient-to-r from-[#144474] to-[#0f345a] text-white p-8">


<h1 className="text-3xl font-bold">

User Management

</h1>



<div className="flex gap-6 mt-4 flex-wrap">



{/* TOTAL */}

<div className="bg-white text-[#144474] px-4 py-2 rounded-lg">

Total: <b>{users.length}</b>

</div>



{/* VERIFIED */}

<div className="bg-green-500 text-white px-4 py-2 rounded-lg">

Verified: <b>{verifiedUsers}</b>

</div>



{/* UNVERIFIED */}

<div className="bg-red-500 text-white px-4 py-2 rounded-lg">

Unverified: <b>{unverifiedUsers}</b>

</div>



</div>


</div>





{/* TABLE */}

<div className="p-6">

<div className="bg-white rounded-xl shadow">


<UserTable

users={users}

onDelete={handleDelete}

onMakeAdmin={handleMakeAdmin}

onRemoveAdmin={handleRemoveAdmin}

/>


</div>

</div>


</div>

  );

}