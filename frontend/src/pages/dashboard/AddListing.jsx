

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

//                   className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6"

//                 >

//                   ×

//                 </button>


//               </div>

//             )

//           )}

//         </div>


//       </div>




//       <button

//         className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full"

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
  
  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
    category: "",
    images: []
  });

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // IMAGE UPLOAD + PREVIEW
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    setForm({
      ...form,
      images: [...form.images, ...files]
    });
    
    const preview = files.map(file =>
      URL.createObjectURL(file)
    );
    
    setImagePreview(prev => [
      ...prev,
      ...preview
    ]);
  };

  // REMOVE IMAGE
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
    try {
      const formData = new FormData();
      
      Object.keys(form).forEach(key => {
        if (key === "images") {
          form.images.forEach(img =>
            formData.append("images", img)
          );
        } else {
          formData.append(
            key,
            form[key]
          );
        }
      });
      
      // API CALL
      await createListing(formData);
      
      // ✅ SHOW SUCCESS MODAL
      setShowSuccessModal(true);
    } catch (error) {
      console.error(error);
      alert(
        "❌ Failed to submit listing.\nPlease try again."
      );
    }
  };

  const closeModalAndRedirect = () => {
    setShowSuccessModal(false);
    navigate("/dashboard/my");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Create Listing</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TITLE */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Title
                </label>
                <input
                  id="title"
                  name="title"
                  placeholder="Enter service title"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                />
              </div>
              
              {/* LOCATION */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  placeholder="Enter location"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                />
              </div>
              
              {/* CATEGORY */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* EMAIL */}
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email
                </label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  placeholder="Enter email address"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                />
              </div>
              
              {/* PHONE */}
              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Phone
                </label>
                <input
                  id="contactPhone"
                  name="contactPhone"
                  placeholder="Enter phone number"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  required
                />
              </div>
            </div>
            
            {/* DESCRIPTION */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe your service..."
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                required
              />
            </div>
            
            {/* IMAGE UPLOAD */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Images
              </label>
              
              <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 10MB)</p>
                </div>
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              
              {/* IMAGE PREVIEW */}
              {imagePreview.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                  {imagePreview.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img}
                        alt={`Preview ${index}`}
                        className="h-32 w-full object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* SUBMIT BUTTON */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Create Listing
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0   bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-auto">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 text-center mb-2">Listing Submitted Successfully!</h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              Your listing is currently PENDING approval. Our team usually takes up to 24 hours to verify your property. Once approved, it will be visible to users.
            </p>
            <button
              onClick={closeModalAndRedirect}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}