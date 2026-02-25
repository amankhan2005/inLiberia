 import api from "./api";


// ================= GET ALL LISTINGS =================

export const getListings = async (params = {}) => {

  const res = await api.get("/listings", {

    params

  });

  return res.data;

};

// ================= GET BY SLUG =================

export const getListingBySlug = async (slug) => {

  const res = await api.get(`/listings/slug/${slug}`);

  return res.data;

};


// ================= GET SINGLE =================

export const getListingById = async (id) => {

  const res = await api.get(`/listings/${id}`);

  return res.data;

};



// ================= FEATURED =================

export const getFeaturedListings = async () => {

  const res = await api.get("/listings/featured");

  return res.data;

};



// ================= MY LISTINGS =================

export const getMyListings = async () => {

  const res = await api.get("/listings/my/listings");

  return res.data;

};



// ================= GET LOCATIONS ⭐ ADD THIS =================

export const getLocations = async () => {

  const res = await api.get("/listings/locations");

  return res.data;

};



// ================= CREATE =================

export const createListing = async (data) => {

  const res = await api.post("/listings", data, {

    headers: {

      "Content-Type": "multipart/form-data",

    },

  });

  return res.data;

};



// ================= UPDATE =================

export const updateListing = async (id, data) => {

  const res = await api.put(`/listings/${id}`, data, {

    headers: {

      "Content-Type": "multipart/form-data",

    },

  });

  return res.data;

};



// ================= DELETE =================

export const deleteListing = async (id) => {

  const res = await api.delete(`/listings/${id}`);

  return res.data;

};