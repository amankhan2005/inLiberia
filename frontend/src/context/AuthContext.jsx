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

  const [redirectAfterLogin, setRedirectAfterLogin] = useState(null);



  // ================= RESTORE USER =================

  useEffect(() => {

    const initAuth = async () => {

      try {

        const token = localStorage.getItem("token");

        if (token) {

          const userData = await getCurrentUser();

          setUser(userData);

          localStorage.setItem(
            "user",
            JSON.stringify(userData)
          );

        }

      } catch (error) {

        console.error("Auth restore failed", error);

        localStorage.clear();
        setUser(null);

      } finally {

        setLoading(false);

      }

    };

    initAuth();

  }, []);




  // ================= LOGIN =================

  const login = async (data) => {

    const res = await loginUser(data);

    // token already saved in authService
    // so no need to save again

    const userData = await getCurrentUser();

    setUser(userData);

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    return userData;

  };




  // ================= SIGNUP =================

  const signup = async (data) => {

    const res = await signupUser(data);

    // ⚠️ save token only if exists
    if (res.token) {

      const userData = await getCurrentUser();

      setUser(userData);

      localStorage.setItem(
        "user",
        JSON.stringify(userData)
      );

      return userData;

    }

    return res;

  };




  // ================= LOGOUT =================

  const logout = () => {

    logoutUser();

    localStorage.clear();

    setUser(null);

    setRedirectAfterLogin(null);

  };




  return (

    <AuthContext.Provider
      value={{

        user,
        setUser,   // ⭐ IMPORTANT (needed for profile refresh)
        loading,

        login,
        signup,
        logout,

        isAuthenticated: !!user,

        redirectAfterLogin,
        setRedirectAfterLogin

      }}
    >

      {children}

    </AuthContext.Provider>

  );

};