 import { useState, useEffect } from "react";
import CategoryTable from "../components/categories/CategoryTable";
import {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory
} from "../services/adminService";

// --- Icons ---
const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({ name: "", icon: null });
  const [preview, setPreview] = useState(null);
  const [editing, setEditing] = useState(null);
  const [editPreview, setEditPreview] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ================= LOAD =================
  const loadCategories = async () => {
    try {
      setLoading(true);
      const data = await getCategories();
      setCategories(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  // ================= ADD FILE CHANGE =================
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setForm({ ...form, icon: file });
    setPreview(URL.createObjectURL(file));
  };

  // ================= EDIT FILE CHANGE =================
  const handleEditFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setEditing({ ...editing, icon: file });
    setEditPreview(URL.createObjectURL(file));
  };

  // ================= ADD CATEGORY =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;

    setSubmitting(true);
    
    const formData = new FormData();
    formData.append("name", form.name);
    if (form.icon) {
      formData.append("icon", form.icon);
    }

    try {
      const newCategory = await addCategory(formData);
      if (newCategory && newCategory._id) {
        setCategories((prev) => [newCategory, ...prev]);
      }
      setForm({ name: "", icon: null });
      setPreview(null);
    } catch (err) {
      console.error("Failed to add category", err);
    } finally {
      setSubmitting(false);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      setCategories((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  // ================= UPDATE =================
  const handleUpdate = async () => {
    if (!editing.name.trim()) return;
    setUpdating(true);
    
    const formData = new FormData();
    formData.append("name", editing.name);
    if (editing.icon instanceof File) {
      formData.append("icon", editing.icon);
    }

    try {
      const updatedCategory = await updateCategory(editing._id, formData);
      setCategories((prev) =>
        prev.map((cat) =>
          cat._id === updatedCategory._id ? updatedCategory : cat
        )
      );
      setEditing(null);
      setEditPreview(null);
    } catch (err) {
      console.error("Failed to update", err);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#144474] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium animate-pulse">Loading Categories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#144474] p-2 rounded-lg text-white">
            <FolderIcon />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Categories Management</h1>
        </div>
        <p className="text-gray-500 ml-14">Organize and manage your property categories.</p>
      </div>

      {/* ================= ADD FORM CARD ================= */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-8 transition-all hover:shadow-md">
        <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
          <PlusIcon /> Create New Category
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            
            {/* Name Input */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Residential"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#144474] focus:border-[#144474] transition-all bg-gray-50 focus:bg-white"
                required
              />
            </div>

            {/* File Input */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Icon</label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                />
                <div className="border border-dashed border-gray-300 px-4 py-3 rounded-xl text-gray-500 bg-gray-50 hover:bg-gray-100 hover:border-[#144474] transition-colors text-center cursor-pointer truncate">
                  {form.icon ? form.icon.name : "Choose Image..."}
                </div>
              </div>
            </div>

            {/* Preview & Button */}
            <div className="md:col-span-1 flex items-center gap-4">
              {preview && (
                <div className="relative group">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-12 h-12 object-cover rounded-xl border-2 border-white shadow-md"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="text-white text-xs">New</span>
                  </div>
                </div>
              )}
              
              <button
                type="submit"
                disabled={submitting}
                style={{ backgroundColor: '#144474' }}
                className="flex-1 flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 shadow-md"
              >
                {submitting ? (
                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                ) : (
                  <PlusIcon />
                )}
                <span>{submitting ? "Adding..." : "Add Category"}</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* ================= TABLE CONTAINER ================= */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Table Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
           <h2 className="font-bold text-gray-800">Existing Categories</h2>
           <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
             {categories.length} items
           </span>
        </div>

        <CategoryTable
          categories={categories}
          onDelete={handleDelete}
          onEdit={(cat) => {
            setEditing(cat);
            setEditPreview(cat.icon);
          }}
        />
      </div>

      {/* ================= EDIT MODAL ================= */}
      {editing && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl w-full max-w-md shadow-2xl relative animate-fade-in">
            
            {/* Close Button */}
            <button 
              onClick={() => setEditing(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1 hover:bg-gray-100 rounded-full"
            >
              <CloseIcon />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Edit Category</h2>
              <p className="text-gray-500 text-sm mt-1">Update the details below.</p>
            </div>

            <div className="space-y-4">
              {/* Edit Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  value={editing.name}
                  onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#144474] focus:border-[#144474] transition-all"
                />
              </div>

              {/* Edit File */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Change Icon</label>
                <div className="relative border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEditFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center gap-3 text-gray-500 text-sm pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Click to replace image</span>
                  </div>
                </div>
              </div>

              {/* Preview Image */}
              {editPreview && (
                <div className="flex justify-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <img
                    src={editPreview}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-xl shadow-md border-2 border-white"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setEditing(null)}
                className="flex-1 bg-gray-100 text-gray-700 font-semibold p-3 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                disabled={updating}
                style={{ backgroundColor: '#144474' }}
                className="flex-1 text-white font-semibold p-3 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {updating ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                <span>{updating ? "Saving..." : "Save Changes"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}