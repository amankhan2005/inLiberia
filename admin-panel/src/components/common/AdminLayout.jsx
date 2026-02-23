import {

  Navigate

} from "react-router-dom";

 import useAdminAuth from "../../hooks/useAdminAuth";

import AdminSidebar from "./AdminSidebar";

import AdminNavbar from "./AdminNavbar";


export default function AdminLayout({

  children

}) {


  const {

    isAdmin,

    loading

  } = useAdminAuth();


  if (loading)

    return null;


  if (!isAdmin)

    return <Navigate to="/login" />;



  return (

    <div className="flex">


      <AdminSidebar />


      <div className="flex-1">


        <AdminNavbar />


        <main className="p-6">

          {children}

        </main>


      </div>


    </div>

  );

}