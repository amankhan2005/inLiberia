 import useAdminAuth from "../../hooks/useAdminAuth";


export default function AdminNavbar() {


  const { logout } = useAdminAuth();


  return (

    <header className="bg-white shadow px-6 py-4 flex justify-between">


      <h1 className="font-semibold">

        Admin Dashboard

      </h1>



      <button

        onClick={logout}

        className="bg-red-600 text-white px-4 py-2 rounded"

      >

        Logout

      </button>


    </header>

  );

}