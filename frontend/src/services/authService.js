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



/*
================================
LOGIN
================================
*/

export const loginUser = async (data) => {

  const res = await api.post("/auth/login", data);

  localStorage.setItem("token", res.data.token);

  localStorage.setItem(
    "user",
    JSON.stringify(res.data)
  );

  return res.data;

};



/*
================================
SIGNUP
================================
*/

export const signupUser = async (data) => {

  const res =
    await api.post("/auth/signup", data);

  return res.data;

};



/*
================================
VERIFY EMAIL ⭐ FIXED
================================
*/

export const verifyEmail = async (token) => {

  const res =
    await api.get(`/auth/verify/${token}`);

  // save token

  if(res.data.token){

    localStorage.setItem(
      "token",
      res.data.token
    );

  }


  // save user

  if(res.data.user){

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

  }

  return res.data;

};




/*
================================
RESEND VERIFICATION
================================
*/

export const resendVerification = async () => {

  const res =
    await api.post(
      "/auth/resend-verification"
    );

  return res.data;

};



/*
================================
GET CURRENT USER
================================
*/

export const getCurrentUser = async () => {

  const res =
    await api.get("/auth/me");

  return res.data;

};



/*
================================
LOGOUT
================================
*/

export const logoutUser = () => {

  localStorage.removeItem("token");

  localStorage.removeItem("user");

};