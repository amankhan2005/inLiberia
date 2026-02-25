

// import { useState, useEffect } from "react";

// import { createListing } from "../../services/listingService";

// import { getCategories } from "../../services/categoryService";

// import { useNavigate } from "react-router-dom";


// export default function AddListing() {

//   const navigate = useNavigate();

//   const [categories, setCategories] = useState([]);

//   const [imagePreview, setImagePreview] = useState([]);


//   const [form, setForm] = useState({

//     title: "",

//     location: "",

//     description: "",

//     contactEmail: "",

//     contactPhone: "",

//     category: "",

//     images: []

//   });



//   useEffect(() => {

//     getCategories().then(setCategories);

//   }, []);




//   const handleChange = (e) => {

//     setForm({

//       ...form,

//       [e.target.name]: e.target.value

//     });

//   };




//   // IMAGE UPLOAD + PREVIEW

//   const handleImageChange = (e) => {

//     const files = Array.from(e.target.files);


//     setForm({

//       ...form,

//       images: [...form.images, ...files]

//     });


//     const preview = files.map(file =>

//       URL.createObjectURL(file)

//     );


//     setImagePreview(prev => [

//       ...prev,

//       ...preview

//     ]);

//   };




//   // REMOVE IMAGE

//   const removeImage = (index) => {

//     const newImages = [...form.images];

//     const newPreview = [...imagePreview];


//     newImages.splice(index, 1);

//     newPreview.splice(index, 1);


//     setForm({

//       ...form,

//       images: newImages

//     });


//     setImagePreview(newPreview);

//   };




//   // const handleSubmit = async (e) => {

//   //   e.preventDefault();


//   //   const formData = new FormData();


//   //   Object.keys(form).forEach(key => {

//   //     if (key === "images") {

//   //       form.images.forEach(img =>

//   //         formData.append("images", img)

//   //       );

//   //     }

//   //     else {

//   //       formData.append(

//   //         key,

//   //         form[key]

//   //       );

//   //     }

//   //   });



//   //   await createListing(formData);


//   //   navigate("/dashboard/my");

//   // };

//   const handleSubmit = async (e) => {

//   e.preventDefault();

//   try {

//     const formData = new FormData();


//     Object.keys(form).forEach(key => {

//       if (key === "images") {

//         form.images.forEach(img =>
//           formData.append("images", img)
//         );

//       } else {

//         formData.append(
//           key,
//           form[key]
//         );

//       }

//     });


//     // API CALL
//     await createListing(formData);


//     // ✅ SUCCESS POPUP
//     alert(
//       "✅ Listing Submitted Successfully!\n\n" +
//       "Your listing is currently PENDING approval.\n\n" +
//       "Our team usually takes up to 24 hours to verify your property.\n\n" +
//       "Once approved, it will be visible to users."
//     );


//     // REDIRECT
//     navigate("/dashboard/my");

//   }

//   catch (error) {

//     console.error(error);

//     alert(
//       "❌ Failed to submit listing.\nPlease try again."
//     );

//   }

// };



//   return (

//     <form

//       onSubmit={handleSubmit}

//       className="bg-white p-6 rounded-xl shadow space-y-4 max-w-2xl mx-auto"

//     >


//       <h2 className="text-xl font-bold">

//         Create Listing

//       </h2>




//       {/* TITLE */}

//       <input

//         name="title"

//         placeholder="Service Title"

//         onChange={handleChange}

//         className="w-full border p-2 rounded"

//       />




//       {/* LOCATION */}

//       <input

//         name="location"

//         placeholder="Location"

//         onChange={handleChange}

//         className="w-full border p-2 rounded"

//       />




//       {/* CATEGORY */}

//       <select

//         name="category"

//         onChange={handleChange}

//         className="w-full border p-2 rounded"

//       >

//         <option value="">

//           Select Category

//         </option>


//         {categories.map(cat => (

//           <option

//             key={cat._id}

//             value={cat._id}

//           >

//             {cat.name}

//           </option>

//         ))}

//       </select>




//       {/* DESCRIPTION */}

//       <textarea

//         name="description"

//         placeholder="Description"

//         onChange={handleChange}

//         className="w-full border p-2 rounded"

//       />




//       {/* EMAIL */}

//       <input

//         name="contactEmail"

//         placeholder="Contact Email"

//         onChange={handleChange}

//         className="w-full border p-2 rounded"

//       />




//       {/* PHONE */}

//       <input

//         name="contactPhone"

//         placeholder="Contact Phone"

//         onChange={handleChange}

//         className="w-full border p-2 rounded"

//       />




//       {/* IMAGE UPLOAD */}

//       <div>


//         <label className="block font-semibold mb-2">

//           Upload Images

//         </label>


//         <label

//           className="border-2 border-dashed p-6 flex flex-col items-center justify-center cursor-pointer rounded-lg hover:bg-gray-50"

//         >

//           <span className="text-gray-500">

//             Click to upload

//           </span>


//           <input

//             type="file"

//             multiple

//             onChange={handleImageChange}

//             hidden

//           />

//         </label>




//         {/* PREVIEW */}


//         <div className="grid grid-cols-3 gap-3 mt-3">

//           {imagePreview.map(

//             (img, index) => (

//               <div

//                 key={index}

//                 className="relative"

//               >


//                 <img

//                   src={img}

//                   className="h-24 w-full object-cover rounded"

//                 />


//                 <button

//                   type="button"

//                   onClick={() => removeImage(index)}

//                   className="absolute top-1 right-1 bg-green-500 text-white rounded-full w-6 h-6"

//                 >

//                   ×

//                 </button>


//               </div>

//             )

//           )}

//         </div>


//       </div>




//       <button

//         className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"

//       >

//         Create Listing

//       </button>


//     </form>

//   );

// }

import { useState, useEffect } from "react";
import { createListing } from "../../services/listingService";
import { getCategories } from "../../services/categoryService";
import { useNavigate } from "react-router-dom";

export default function AddListing() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    location: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
    category: "",
    price: "", 
    images: []
  });

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const generateSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setForm({
        ...form,
        title: value,
        slug: generateSlug(value)
      });
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setForm({
      ...form,
      images: [...form.images, ...files]
    });

    const preview = files.map(file => URL.createObjectURL(file));

    setImagePreview(prev => [...prev, ...preview]);
  };

  const removeImage = (index) => {
    const newImages = [...form.images];
    const newPreview = [...imagePreview];

    newImages.splice(index, 1);
    newPreview.splice(index, 1);

    setForm({
      ...form,
      images: newImages
    });

    setImagePreview(newPreview);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formData = new FormData();

      Object.keys(form).forEach(key => {
        if (key === "images") {
          form.images.forEach(img => formData.append("images", img));
        } else if (form[key]) { 
          formData.append(key, form[key]);
        }
      });

      await createListing(formData);
      setShowSuccessModal(true);
    } catch (error) {
      console.log(error);
      alert("Failed to create listing");
    } finally {
      setLoading(false);
    }
  };

  const closeModalAndRedirect = () => {
    setShowSuccessModal(false);
    navigate("/dashboard/my");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Create New Listing</h1>
          <p className="text-gray-500 mt-1">Fill in the details below to list a new property.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Basic Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#144474] rounded-full"></span>
              Basic Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Title</label>
                <input
                  name="title"
                  placeholder="e.g., Modern Apartment in Monrovia"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition"
                />
              </div>

              {/* Slug (Read Only) */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-500 mb-2">URL Slug (Auto-generated)</label>
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                  <span className="text-gray-400 text-sm mr-1">inliberia.com/listing/</span>
                  <span className="text-[#144474] font-medium">{form.slug || "..."}</span>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  name="category"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition bg-white"
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  name="location"
                  placeholder="e.g., Sinkor, Monrovia"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition"
                />
              </div>

              {/* Price */}
              {/* <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (Optional)</label>
                 <input
                  name="price"
                  type="text"
                  placeholder="e.g., $50,000 or Negotiable"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition"
                />
              </div> */}

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  placeholder="Describe the property features, amenities, and nearby facilities..."
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Contact Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#144474] rounded-full"></span>
              Contact Details
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  name="contactEmail"
                  type="email"
                  placeholder="owner@example.com"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  name="contactPhone"
                  placeholder="+231 000 000 000"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#144474]/20 focus:border-[#144474] transition"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Media */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#144474] rounded-full"></span>
              Property Images
            </h3>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#144474] transition-colors cursor-pointer relative">
              <input
                type="file"
                multiple
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-medium text-gray-700">Click to upload images</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p>
              </div>
            </div>

            {/* Image Previews */}
            {imagePreview.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-6">
                {imagePreview.map((src, index) => (
                  <div key={index} className="relative group aspect-square">
                    <img
                      src={src}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg border"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#144474] hover:bg-[#0f345a] text-white font-semibold py-4 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Listing...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Submit Listing
              </>
            )}
          </button>

        </form>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center transform transition-all scale-95 animate-fadeIn">
            
            {/* Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎉</span>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Listing Submitted Successfully
            </h3>
            
            {/* Description */}
            <div className="space-y-2 text-gray-600 mb-8">
              <p className="font-medium text-gray-700">Your property is pending verification.</p>
              <p className="text-sm">Verification takes up to <span className="font-bold text-[#144474]">24 hours</span>.</p>
              <p className="text-sm">After approval, your property will be visible on the website.</p>
            </div>
            
            {/* Action Button */}
            <button
              onClick={closeModalAndRedirect}
              className="w-full bg-[#144474] hover:bg-[#0f345a] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              View My Listings
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
 
 