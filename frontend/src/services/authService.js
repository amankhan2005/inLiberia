 import api from "./api";



/*
================================
LOGIN
================================
*/

export const loginUser = async (data) => {

  const res =
    await api.post("/auth/login", data);


  localStorage.setItem(
    "token",
    res.data.token
  );


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


  // ✅ also save token (Later option login)

  if(res.data.token){

    localStorage.setItem(
      "token",
      res.data.token
    );


    localStorage.setItem(
      "user",
      JSON.stringify(res.data)
    );

  }


  return res.data;

};




/*
================================
VERIFY EMAIL ✅ FIXED
================================
*/

 export const verifyEmail = async (token) => {

  const res =
    await api.get(
      `/auth/verify-email/${token}`
    );


  // ✅ auto login after verify

  if (res.data.token) {

    localStorage.setItem(
      "token",
      res.data.token
    );


    // ⭐ ADD THIS (VERY IMPORTANT)

    const userRes =
      await api.get("/auth/me");


    localStorage.setItem(
      "user",
      JSON.stringify(userRes.data)
    );

  }


  return res.data;

};

/*
================================
UPDATE PROFILE ⭐ NEW
================================
*/

export const updateProfile = async (data) => {

  const res =
    await api.put(
      "/auth/update-profile",
      data
    );


  // ✅ update localStorage

  localStorage.setItem(
    "user",
    JSON.stringify(res.data)
  );


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