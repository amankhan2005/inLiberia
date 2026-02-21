 // src/services/authService.js

import api from "./api";



export const loginUser = async (data) => {

  const res = await api.post("/auth/login", data);

  return res.data;

};



export const signupUser = async (data) => {

  const res = await api.post("/auth/signup", data);

  return res.data;

};



export const getCurrentUser = async () => {

  const res = await api.get("/auth/me");

  return res.data;

};



export const logoutUser = () => {

  localStorage.removeItem("token");

};