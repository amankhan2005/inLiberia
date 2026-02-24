// import {

//   useState,

//   useEffect

// } from "react";

// import CategoryTable from

// "../components/categories/CategoryTable";

// import {

//   getCategories,

//   addCategory,

//   deleteCategory

// }

// from "../services/adminService";


// export default function Categories() {


//   const [categories, setCategories]

//   = useState([]);


//   const [form, setForm]

//   = useState({

//     name: "",

//     icon: ""

//   });




//   const loadCategories = async () => {

//     const data =

//     await getCategories();

//     setCategories(data);

//   };



//   useEffect(() => {

//     loadCategories();

//   }, []);




//   const handleChange = (e) => {

//     setForm({

//       ...form,

//       [e.target.name]:

//       e.target.value

//     });

//   };




//   const handleSubmit = async (e) => {

//     e.preventDefault();


//     await addCategory(form);


//     setForm({

//       name: "",

//       icon: ""

//     });


//     loadCategories();

//   };




//   const handleDelete = async (id) => {

//     await deleteCategory(id);

//     loadCategories();

//   };




//   return (

//     <div>


//       <h2 className="text-2xl font-bold mb-4">

//         Categories

//       </h2>



//       {/* ADD FORM */}


//       <form

//         onSubmit={handleSubmit}

//         className="flex gap-3 mb-4"

//       >


//         <input

//           name="name"

//           placeholder="Category name"

//           value={form.name}

//           onChange={handleChange}

//           className="border p-2"

//         />



//         <input

//           name="icon"

//           placeholder="Icon (emoji)"

//           value={form.icon}

//           onChange={handleChange}

//           className="border p-2"

//         />



//         <button

//           className="bg-red-600 text-white px-4"

//         >

//           Add

//         </button>


//       </form>



//       {/* TABLE */}


//       <CategoryTable

//         categories={categories}

//         onDelete={handleDelete}

//       />


//     </div>

//   );

// }

import { useState, useEffect } from "react";
import CategoryTable from "../components/categories/CategoryTable";
import { getCategories, addCategory, deleteCategory } from "../services/adminService";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  
  const [form, setForm] = useState({
    name: "",
    icon: ""
  });

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name) return; // Basic validation

    try {
      await addCategory(form);
      setForm({ name: "", icon: "" }); // Reset form
      loadCategories();
    } catch (error) {
      console.error("Failed to add category", error);
    }
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    loadCategories();
  };

  // Professional Loading Skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 md:p-8">
        <div className="animate-pulse">
          <div className="h-48 bg-gray-300 rounded-2xl mb-8"></div>
          <div className="bg-white p-6 rounded-xl shadow-sm h-64"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      
      {/* Real Estate Style Hero Banner */}
      <div className="relative bg-gradient-to-r from-red-700 to-red-500 text-white overflow-hidden">
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24"></div>
        </div>

        <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
              Categories
            </h1>
            <p className="text-red-100 text-sm md:text-base max-w-2xl">
              Organize your property listings by creating and managing categories.
            </p>
          </div>

          {/* Count Badge */}
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 shadow-sm">
            <span className="text-sm font-medium uppercase tracking-wider">Total</span>
            <span className="bg-white text-red-600 text-lg font-bold px-3 py-0.5 rounded-full shadow">
              {categories.length}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 -mt-6 space-y-6">
        
        {/* Add New Category Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-lg font-semibold text-gray-700">Add New Category</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              
              {/* Name Input */}
              <div className="md:col-span-6">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Category Name
                </label>
                <input
                  name="name"
                  placeholder="e.g. Apartments, Villas"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Icon Input */}
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Icon (Emoji)
                </label>
                <input
                  name="icon"
                  placeholder="e.g. 🏠"
                  value={form.icon}
                  onChange={handleChange}
                  className="w-full border-gray-300 border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-center"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-3">
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-sm transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Add Category</span>
                </button>
              </div>

            </div>
          </form>
        </div>

        {/* Categories Table Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h3 className="text-lg font-semibold text-gray-700">Existing Categories</h3>
          </div>
          
          <CategoryTable
            categories={categories}
            onDelete={handleDelete}
          />
        </div>

      </div>
    </div>
  );
}