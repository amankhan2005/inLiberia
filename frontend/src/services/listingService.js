 // src/services/listingService.js

import api from "./api";



// Public listings

export const getListings = async (params = {}) => {

  const res = await api.get("/listings", {

    params,

  });

  return res.data;

};



// Single listing

export const getListingById = async (id) => {

  const res = await api.get(`/listings/${id}`);

  return res.data;

};



// Featured listings

export const getFeaturedListings = async () => {

  const res = await api.get("/listings/featured");

  return res.data;

};



// User listings

export const getMyListings = async () => {

  const res = await api.get("/listings/my");

  return res.data;

};



// Create listing

export const createListing = async (data) => {

  const res = await api.post("/listings", data);

  return res.data;

};



// Update listing

export const updateListing = async (id, data) => {

  const res = await api.put(`/listings/${id}`, data);

  return res.data;

};



// Delete listing

export const deleteListing = async (id) => {

  const res = await api.delete(`/listings/${id}`);

  return res.data;

};