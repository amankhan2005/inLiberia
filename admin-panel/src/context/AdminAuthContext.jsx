import {

  createContext,

  useState,

  useEffect

} from "react";

import api from "../services/api";


export const AdminAuthContext = createContext();


export const AdminAuthProvider = ({ children }) => {


  const [admin, setAdmin] = useState(null);

  const [loading, setLoading] = useState(true);



  // ✅ RESTORE ADMIN

  useEffect(() => {

    const token = localStorage.getItem("token");


    if (token) {

      api.get("/auth/me")

      .then(res => {

        if (res.data.role === "admin") {

          setAdmin(res.data);

        }

        else {

          logout();

        }

      })

      .catch(() => logout())

      .finally(() => setLoading(false));

    }

    else {

      setLoading(false);

    }

  }, []);



  // ✅ LOGIN

  const login = async (data) => {


    const res = await api.post(

      "/auth/login",

      data

    );


    localStorage.setItem(

      "token",

      res.data.token

    );


    const me = await api.get("/auth/me");


    if (me.data.role !== "admin") {

      logout();

      throw new Error("Not admin");

    }


    setAdmin(me.data);


  };



  // ✅ LOGOUT

 const logout = () => {

  localStorage.removeItem("token");

  setAdmin(null);

  window.location.href = "/login";

};



  return (

    <AdminAuthContext.Provider

      value={{

        admin,

        login,

        logout,

        loading,

        isAdmin: !!admin

      }}

    >

      {children}

    </AdminAuthContext.Provider>

  );

};