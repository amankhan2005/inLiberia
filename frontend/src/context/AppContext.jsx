 // src/context/AppContext.jsx

import { createContext, useState, useEffect } from "react";

import { getCategories } from "../services/categoryService";

export const AppContext = createContext();



export const AppProvider = ({ children }) => {

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const fetchCategories = async () => {

      try {

        const data = await getCategories();

        setCategories(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };



    fetchCategories();

  }, []);



  const value = {

    categories,

    loading,

  };



  return (

    <AppContext.Provider value={value}>

      {children}

    </AppContext.Provider>

  );

};