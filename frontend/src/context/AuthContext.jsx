 // src/context/AuthContext.jsx

import { createContext, useState, useEffect } from "react";

import {
  loginUser,
  signupUser,
  logoutUser,
  getCurrentUser
} from "../services/authService";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);



  // ✅ RESTORE USER ON APP LOAD

  useEffect(() => {

    const initAuth = async () => {

      try {

        const token =
          localStorage.getItem("token");


        if (token) {

          const userData =
            await getCurrentUser();


          setUser(userData);


          localStorage.setItem(
            "user",
            JSON.stringify(userData)
          );

        }

      }

      catch (error) {

        console.error(
          "Auth restore failed",
          error
        );


        localStorage.clear();


        setUser(null);

      }

      finally {

        setLoading(false);

      }

    };


    initAuth();

  }, []);




  // ✅ LOGIN

  const login = async (data) => {


    const res =
      await loginUser(data);


    localStorage.setItem(
      "token",
      res.token
    );


    // ⭐ ALWAYS GET USER FROM BACKEND

    const userData =
      await getCurrentUser();


    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );


    setUser(userData);


    return res;

  };




  // ✅ SIGNUP

  const signup = async (data) => {


    const res =
      await signupUser(data);


    localStorage.setItem(
      "token",
      res.token
    );


    const userData =
      await getCurrentUser();


    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );


    setUser(userData);


    return res;

  };




  // ✅ LOGOUT

  const logout = () => {


    logoutUser();


    localStorage.clear();


    setUser(null);

  };




  return (

    <AuthContext.Provider

      value={{

        user,

        loading,

        login,

        signup,

        logout,

        isAuthenticated: !!user

      }}

    >

      {children}

    </AuthContext.Provider>

  );

};