 import { useState, useEffect } from "react";
import CategoryTable from "../components/categories/CategoryTable";

import {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory
} from "../services/adminService";

export default function Categories() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    icon: ""
  });

  const [editing, setEditing] = useState(null);
  const [updating, setUpdating] = useState(false);

  /* ================= LOAD ================= */
  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    }
    catch (err) {
      console.error(err);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  /* ================= ADD ================= */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;

    const newCategory = await addCategory(form);

    // instant UI update (no reload)
    setCategories([newCategory, ...categories]);

    setForm({
      name: "",
      icon: ""
    });
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    await deleteCategory(id);
    setCategories(
      categories.filter(c => c._id !== id)
    );
  };

  /* ================= UPDATE ================= */
  const handleUpdate = async () => {
    if (!editing.name.trim()) return;
    setUpdating(true);

    const updated = await updateCategory(
      editing._id,
      editing
    );

    setCategories(
      categories.map(cat =>
        cat._id === editing._id
          ? updated.category || updated
          : cat
      )
    );

    setUpdating(false);
    setEditing(null);
  };

  // Professional Loading Skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 md:p-8">
        <div className="animate-pulse">
          {/* Hero Skeleton */}
          <div className="h-40 bg-slate-200 rounded-3xl mb-8"></div>
          {/* Form Skeleton */}
          <div className="h-24 bg-white rounded-2xl mb-6 shadow-sm"></div>
          {/* Table Skeleton */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-12 bg-slate-100 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-[#144474] to-[#0f345a] text-white overflow-hidden">
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Categories
              </h1>
              <p className="text-blue-100 mt-1 text-sm md:text-base max-w-2xl">
                Organize and manage property classifications for better searchability.
              </p>
            </div>

            {/* Count Badge */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20 shadow-lg">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">Total</span>
              <span className="bg-white text-[#144474] text-lg font-bold px-3 py-1 rounded-lg shadow-sm">
                {categories.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8 pt-0 -mt-4 space-y-6">
        
        {/* Add Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#144474] rounded-full"></span>
            Add New Category
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 relative z-10"
          >
            <div className="flex-grow">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Category Name (e.g., Residences)"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition-all text-gray-800"
              />
            </div>

            <div className="sm:w-32">
              <input
                name="icon"
                value={form.icon}
                onChange={handleChange}
                placeholder="🏠"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-center text-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition-all"
              />
            </div>

            <button
              type="submit"
              className="bg-[#144474] hover:bg-[#0f345a] text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add
            </button>
          </form>
        </div>

        {/* Table Card Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Card Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h3 className="text-lg font-bold text-gray-800">Existing Categories</h3>
            <span className="text-xs text-gray-500 font-medium">Manage icons and names</span>
          </div>

          {/* Table Area */}
          <div className="overflow-x-auto">
            <CategoryTable
              categories={categories}
              onDelete={handleDelete}
              onEdit={setEditing}
            />
          </div>
        </div>

      </div>

      {/* ================= PREMIUM EDIT MODAL ================= */}
      {editing && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-95 animate-fadeIn">
            
            {/* Modal Header */}
            <div className="bg-[#144474] px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Edit Category</h3>
              <button 
                onClick={() => setEditing(null)}
                className="text-white/70 hover:text-white transition p-1 hover:bg-white/10 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Icon Preview */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center text-4xl border-2 border-gray-100 rounded-2xl bg-blue-50 shadow-inner">
                  {editing.icon || "🏷️"}
                </div>
              </div>

              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category Name
                </label>
                <input
                  value={editing.name}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      name: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition-all text-gray-800"
                />
              </div>

              {/* Icon Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Icon (Emoji)
                </label>
                <input
                  value={editing.icon}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      icon: e.target.value
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-center text-2xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition-all"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setEditing(null)}
                  className="px-5 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleUpdate}
                  disabled={updating}
                  className="px-6 py-2.5 bg-[#144474] text-white rounded-xl font-semibold hover:bg-[#0f345a] transition disabled:bg-gray-400 shadow-lg flex items-center gap-2"
                >
                  {updating ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Updating
                    </>
                  ) : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}