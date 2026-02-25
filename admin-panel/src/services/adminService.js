 import api from "./api";



/* ============================
   DASHBOARD STATS
============================ */

export const getStats = async () => {

  const res = await api.get("/admin/stats");

  return res.data;

};



/* ============================
   USERS
============================ */

export const getUsers = async () => {

  const res = await api.get("/admin/users");

  return res.data;

};



export const deleteUser = async (id) => {

  const res = await api.delete(

    `/admin/users/${id}`

  );

  return res.data;

};




/* ============================
   LISTINGS
============================ */

export const getAllListings = async () => {

  const res = await api.get(

    "/admin/listings"

  );

  return res.data;

};



export const approveListing = async (id) => {

  const res = await api.put(

    `/admin/listings/${id}/approve`

  );

  return res.data;

};



export const rejectListing = async (id) => {

  const res = await api.put(

    `/admin/listings/${id}/reject`

  );

  return res.data;

};



export const deleteListing = async (id) => {

  const res = await api.delete(

    `/admin/listings/${id}`

  );

  return res.data;

};




/* ============================
   CATEGORIES
============================ */

export const getCategories = async () => {

  const res = await api.get(

    "/categories"

  );

  return res.data;

};



export const addCategory = async (data) => {

  const res = await api.post(

    "/categories",

    data

  );

  return res.data;

};

/* ============================
   UPDATE CATEGORY
============================ */

export const updateCategory = async (id, data) => {

  const res = await api.put(

    `/categories/${id}`,

    data

  );

  return res.data;

};

export const deleteCategory = async (id) => {

  const res = await api.delete(

    `/categories/${id}`

  );

  return res.data;

};
