 // src/context/AuthContext.jsx

import { createContext, useState, useEffect } from "react";

import {
  loginUser,
  signupUser,
  getCurrentUser,
  logoutUser,
} from "../services/authService";

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);



  // Load user on app start

  useEffect(() => {

    const initAuth = async () => {

      try {

        const token = localStorage.getItem("token");

        if (token) {

          const userData = await getCurrentUser();

          setUser(userData);

        }

      } catch (error) {

        console.error("Auth error:", error);

        localStorage.removeItem("token");

      } finally {

        setLoading(false);

      }

    };



    initAuth();

  }, []);





  // LOGIN

  const login = async (data) => {

    const res = await loginUser(data);

    localStorage.setItem("token", res.token);

    setUser(res.user);

    return res;

  };



  // SIGNUP

  const signup = async (data) => {

    const res = await signupUser(data);

    localStorage.setItem("token", res.token);

    setUser(res.user);

    return res;

  };



  // LOGOUT

  const logout = () => {

    logoutUser();

    setUser(null);

  };



  const value = {

    user,

    loading,

    login,

    signup,

    logout,

    isAuthenticated: !!user,

  };



  return (

    <AuthContext.Provider value={value}>

      {children}

    </AuthContext.Provider>

  );

};