import axios from "axios";


const api = axios.create({

  baseURL: import.meta.env.VITE_API_URL,

});


// ⭐ AUTO ATTACH TOKEN

api.interceptors.request.use(

  (config) => {

    const token = localStorage.getItem("token");

    if (token) {

      config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

  },

  (error) => Promise.reject(error)

);


// ⭐ HANDLE TOKEN EXPIRE

api.interceptors.response.use(

  (response) => response,

  (error) => {

    if (error.response?.status === 401) {

      localStorage.removeItem("token");

      window.location.href = "/login";

    }

    return Promise.reject(error);

  }

);


export default api;