import { Navigate } from "react-router-dom";

import useAdminAuth from "../../hooks/useAdminAuth";


export default function ProtectedRoute({

  children

}) {


  const {

    isAdmin,

    loading

  } = useAdminAuth();



  if (loading)

    return <p>Loading...</p>;



  if (!isAdmin)

    return <Navigate to="/login" />;



  return children;

}