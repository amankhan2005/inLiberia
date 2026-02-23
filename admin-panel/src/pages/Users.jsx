import {

  useEffect,

  useState

} from "react";

import UserTable from

"../components/users/UserTable";

import {

  getUsers,

  deleteUser

}

from "../services/adminService";


export default function Users() {


  const [users, setUsers] =

  useState([]);




  const loadUsers = async () => {

    const data = await getUsers();

    setUsers(data);

  };



  useEffect(() => {

    loadUsers();

  }, []);




  const handleDelete = async (id) => {

    await deleteUser(id);

    loadUsers();

  };



  return (

    <div>


      <h2 className="text-2xl font-bold mb-4">

        Users

      </h2>



      <UserTable

        users={users}

        onDelete={handleDelete}

      />


    </div>

  );

}