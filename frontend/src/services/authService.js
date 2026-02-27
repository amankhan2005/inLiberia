//  import api from "./api";



// // ✅ LOGIN

// export const loginUser = async (data) => {

//   const res = await api.post(

//     "/auth/login",

//     data

//   );

//   return res.data;

// };




// // ✅ SIGNUP

// export const signupUser = async (data) => {

//   const res = await api.post(

//     "/auth/signup",

//     data

//   );

//   return res.data;

// };




// // ✅ GET CURRENT USER

// export const getCurrentUser = async () => {

//   const res = await api.get(

//     "/auth/me"

//   );

//   return res.data;

// };




// // ✅ LOGOUT (FIXED)

// export const logoutUser = () => {

//   localStorage.removeItem("token");

//   localStorage.removeItem("user"); // ⭐ IMPORTANT

// };








 import api from "./api";


// LOGIN

export const loginUser = async (data) => {

  const res = await api.post(
    "/auth/login",
    data
  );

  // save token
  localStorage.setItem(
    "token",
    res.data.token
  );

  // save user
  localStorage.setItem(
    "user",
    JSON.stringify(res.data)
  );

  return res.data;

};




// SIGNUP

export const signupUser = async (data) => {

  const res = await api.post(
    "/auth/signup",
    data
  );

  return res.data;

};




// VERIFY EMAIL

export const verifyEmail = (token) => {

  window.location.href =
    `${import.meta.env.VITE_API_URL}/auth/verify/${token}`;

};




// RESEND VERIFICATION

export const resendVerification = async () => {

  const res = await api.post(
    "/auth/resend-verification"
  );

  return res.data;

};




// GET CURRENT USER

export const getCurrentUser = async () => {

  const res = await api.get(
    "/auth/me"
  );

  return res.data;

};




// LOGOUT

export const logoutUser = () => {

  localStorage.removeItem("token");

  localStorage.removeItem("user");

};