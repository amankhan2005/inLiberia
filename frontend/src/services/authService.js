 import api from "./api";



// ✅ LOGIN

export const loginUser = async (data) => {

  const res = await api.post(

    "/auth/login",

    data

  );

  return res.data;

};




// ✅ SIGNUP

export const signupUser = async (data) => {

  const res = await api.post(

    "/auth/signup",

    data

  );

  return res.data;

};




// ✅ GET CURRENT USER

export const getCurrentUser = async () => {

  const res = await api.get(

    "/auth/me"

  );

  return res.data;

};




// ✅ LOGOUT (FIXED)

export const logoutUser = () => {

  localStorage.removeItem("token");

  localStorage.removeItem("user"); // ⭐ IMPORTANT

};